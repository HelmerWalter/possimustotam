/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBosonAccountHandlerLegacy,
  IBosonAccountHandlerLegacyInterface,
} from "../IBosonAccountHandlerLegacy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "sellerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assistant",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "clerk",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.Seller",
        name: "seller",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assistant",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "clerk",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.Seller",
        name: "pendingSeller",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "enum BosonTypes.AuthTokenType",
            name: "tokenType",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.AuthToken",
        name: "authToken",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "enum BosonTypes.AuthTokenType",
            name: "tokenType",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.AuthToken",
        name: "pendingAuthToken",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "SellerUpdateApplied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "sellerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assistant",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "clerk",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.Seller",
        name: "seller",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "voucherCloneAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "enum BosonTypes.AuthTokenType",
            name: "tokenType",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.AuthToken",
        name: "authToken",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "SellerCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "sellerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assistant",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "clerk",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.Seller",
        name: "pendingSeller",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "enum BosonTypes.AuthTokenType",
            name: "tokenType",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.AuthToken",
        name: "pendingAuthToken",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "SellerUpdatePending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "sellerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assistant",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "clerk",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.Seller",
        name: "seller",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "enum BosonTypes.AuthTokenType",
            name: "tokenType",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.AuthToken",
        name: "authToken",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "SellerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "disputeResolverId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "escalationResponsePeriod",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assistant",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "clerk",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadataUri",
            type: "string",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.DisputeResolver",
        name: "disputeResolver",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "DisputeResolverUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "disputeResolverId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "escalationResponsePeriod",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assistant",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "clerk",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadataUri",
            type: "string",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.DisputeResolver",
        name: "disputeResolver",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "DisputeResolverActivated",
    type: "event",
  },
];

export class IBosonAccountHandlerLegacy__factory {
  static readonly abi = _abi;
  static createInterface(): IBosonAccountHandlerLegacyInterface {
    return new utils.Interface(_abi) as IBosonAccountHandlerLegacyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBosonAccountHandlerLegacy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBosonAccountHandlerLegacy;
  }
}