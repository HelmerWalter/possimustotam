import { BigInt } from "@graphprotocol/graph-ts";
import {
  OfferCreated,
  OfferVoided,
  OfferExtended,
  RangeReserved
} from "../../generated/BosonOfferHandler/IBosonOfferHandler";
import { Offer, RangeEntity } from "../../generated/schema";

import { saveMetadata } from "../entities/metadata/handler";
import { saveExchangeToken } from "../entities/token";
import {
  getDisputeResolutionTermsId,
  saveDisputeResolutionTerms
} from "../entities/dispute-resolution";
import { saveOfferEventLog } from "../entities/event-log";

export function handleOfferCreatedEvent(event: OfferCreated): void {
  const offerId = event.params.offerId;

  let offer = Offer.load(offerId.toString());

  if (!offer) {
    const offerStruct = event.params.offer;
    const offerDatesStruct = event.params.offerDates;
    const offerDurationsStruct = event.params.offerDurations;
    const offerFeesStruct = event.params.offerFees;
    const disputeResolutionTermsStruct = event.params.disputeResolutionTerms;

    offer = new Offer(offerId.toString());
    offer.createdAt = event.block.timestamp;
    offer.price = offerStruct.price;
    offer.sellerDeposit = offerStruct.sellerDeposit;
    offer.protocolFee = offerFeesStruct.protocolFee;
    offer.agentFee = offerFeesStruct.agentFee;
    offer.agentId = event.params.agentId;
    offer.buyerCancelPenalty = offerStruct.buyerCancelPenalty;
    offer.quantityInitial = offerStruct.quantityAvailable;
    offer.quantityAvailable = offerStruct.quantityAvailable;
    offer.validFromDate = offerDatesStruct.validFrom;
    offer.validUntilDate = offerDatesStruct.validUntil;
    offer.voucherRedeemableFromDate = offerDatesStruct.voucherRedeemableFrom;
    offer.voucherRedeemableUntilDate = offerDatesStruct.voucherRedeemableUntil;
    offer.disputePeriodDuration = offerDurationsStruct.disputePeriod;
    offer.voucherValidDuration = offerDurationsStruct.voucherValid;
    offer.resolutionPeriodDuration = offerDurationsStruct.resolutionPeriod;
    offer.disputeResolverId = disputeResolutionTermsStruct.disputeResolverId;
    offer.sellerId = offerStruct.sellerId;
    offer.disputeResolver =
      disputeResolutionTermsStruct.disputeResolverId.toString();
    offer.disputeResolutionTerms = getDisputeResolutionTermsId(
      disputeResolutionTermsStruct.disputeResolverId.toString(),
      offerId.toString()
    );
    offer.seller = offerStruct.sellerId.toString();
    offer.exchangeToken = offerStruct.exchangeToken.toHexString();
    offer.metadataUri = offerStruct.metadataUri;
    offer.metadataHash = offerStruct.metadataHash;
    offer.metadata = offerId.toString() + "-metadata";
    offer.voided = false;
    offer.numberOfCommits = BigInt.fromI32(0);
    offer.numberOfRedemptions = BigInt.fromI32(0);

    offer.save();

    saveExchangeToken(offerStruct.exchangeToken);
    saveMetadata(offer, event.block.timestamp);
    saveDisputeResolutionTerms(
      disputeResolutionTermsStruct,
      offerId.toString()
    );
    saveOfferEventLog(
      event.transaction.hash.toHexString(),
      event.logIndex,
      "OFFER_CREATED",
      event.block.timestamp,
      event.params.executedBy,
      offerStruct.sellerId.toString(),
      offerId.toString()
    );
  }
}

export function handleOfferVoidedEvent(event: OfferVoided): void {
  const offerId = event.params.offerId;

  const offer = Offer.load(offerId.toString());

  if (offer) {
    offer.voided = true;
    offer.voidedAt = event.block.timestamp;

    offer.save();

    saveMetadata(offer, offer.createdAt);
    saveOfferEventLog(
      event.transaction.hash.toHexString(),
      event.logIndex,
      "OFFER_VOIDED",
      event.block.timestamp,
      event.params.executedBy,
      offer.sellerId.toString(),
      offerId.toString()
    );
  }
}

export function handleOfferExtendedEvent(event: OfferExtended): void {
  const offerId = event.params.offerId;

  const offer = Offer.load(offerId.toString());

  if (offer) {
    offer.validUntilDate = event.params.validUntilDate;
    offer.save();
    saveOfferEventLog(
      event.transaction.hash.toHexString(),
      event.logIndex,
      "OFFER_EXTENDED",
      event.block.timestamp,
      event.params.executedBy,
      offer.sellerId.toString(),
      offerId.toString()
    );
  }
}

export function getRangeId(offerId: string): string {
  const rangeId = offerId.toString() + "-range";
  return rangeId;
}

export function handleRangeReservedEvent(event: RangeReserved): void {
  const offerId = event.params.offerId;

  const offer = Offer.load(offerId.toString());

  if (offer) {
    const rangeId = getRangeId(offerId.toString());
    let rangeEntity = RangeEntity.load(rangeId);

    if (!rangeEntity) {
      rangeEntity = new RangeEntity(rangeId);
    }
    rangeEntity.start = event.params.startExchangeId;
    rangeEntity.end = event.params.endExchangeId;
    rangeEntity.owner = event.params.owner;
    rangeEntity.minted = BigInt.zero();
    rangeEntity.save();

    const rangeLength = rangeEntity.end
      .minus(rangeEntity.start)
      .plus(BigInt.fromI32(1));
    offer.quantityAvailable = offer.quantityAvailable.minus(rangeLength);
    offer.range = rangeId;

    offer.save();

    saveOfferEventLog(
      event.transaction.hash.toHexString(),
      event.logIndex,
      "OFFER_RANGE_RESERVED",
      event.block.timestamp,
      event.params.executedBy,
      offer.sellerId.toString(),
      offerId.toString()
    );
  }
}
