/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IBosonMetaTransactionsHandlerInterface
  extends utils.Interface {
  contractName: "IBosonMetaTransactionsHandler";
  functions: {
    "executeMetaTransaction(address,string,bytes,uint256,bytes32,bytes32,uint8)": FunctionFragment;
    "isFunctionAllowlisted(string)": FunctionFragment;
    "isUsedNonce(address,uint256)": FunctionFragment;
    "setAllowlistedFunctions(bytes32[],bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [
      string,
      string,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isFunctionAllowlisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isUsedNonce",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowlistedFunctions",
    values: [BytesLike[], boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFunctionAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUsedNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowlistedFunctions",
    data: BytesLike
  ): Result;

  events: {
    "FunctionsAllowlisted(bytes32[],bool,address)": EventFragment;
    "MetaTransactionExecuted(address,address,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FunctionsAllowlisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
}

export type FunctionsAllowlistedEvent = TypedEvent<
  [string[], boolean, string],
  { functionNameHashes: string[]; isAllowlisted: boolean; executedBy: string }
>;

export type FunctionsAllowlistedEventFilter =
  TypedEventFilter<FunctionsAllowlistedEvent>;

export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string, BigNumber],
  {
    userAddress: string;
    relayerAddress: string;
    functionName: string;
    nonce: BigNumber;
  }
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export interface IBosonMetaTransactionsHandler extends BaseContract {
  contractName: "IBosonMetaTransactionsHandler";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBosonMetaTransactionsHandlerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    executeMetaTransaction(
      _userAddress: string,
      _functionName: string,
      _functionSignature: BytesLike,
      _nonce: BigNumberish,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "isFunctionAllowlisted(string)"(
      _functionName: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAllowlisted: boolean }>;

    "isFunctionAllowlisted(bytes32)"(
      _functionNameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAllowlisted: boolean }>;

    isUsedNonce(
      _associatedAddress: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setAllowlistedFunctions(
      _functionNameHashes: BytesLike[],
      _isAllowlisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  executeMetaTransaction(
    _userAddress: string,
    _functionName: string,
    _functionSignature: BytesLike,
    _nonce: BigNumberish,
    _sigR: BytesLike,
    _sigS: BytesLike,
    _sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "isFunctionAllowlisted(string)"(
    _functionName: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isFunctionAllowlisted(bytes32)"(
    _functionNameHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isUsedNonce(
    _associatedAddress: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setAllowlistedFunctions(
    _functionNameHashes: BytesLike[],
    _isAllowlisted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    executeMetaTransaction(
      _userAddress: string,
      _functionName: string,
      _functionSignature: BytesLike,
      _nonce: BigNumberish,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "isFunctionAllowlisted(string)"(
      _functionName: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isFunctionAllowlisted(bytes32)"(
      _functionNameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isUsedNonce(
      _associatedAddress: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setAllowlistedFunctions(
      _functionNameHashes: BytesLike[],
      _isAllowlisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "FunctionsAllowlisted(bytes32[],bool,address)"(
      functionNameHashes?: null,
      isAllowlisted?: null,
      executedBy?: string | null
    ): FunctionsAllowlistedEventFilter;
    FunctionsAllowlisted(
      functionNameHashes?: null,
      isAllowlisted?: null,
      executedBy?: string | null
    ): FunctionsAllowlistedEventFilter;

    "MetaTransactionExecuted(address,address,string,uint256)"(
      userAddress?: string | null,
      relayerAddress?: string | null,
      functionName?: string | null,
      nonce?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      userAddress?: string | null,
      relayerAddress?: string | null,
      functionName?: string | null,
      nonce?: null
    ): MetaTransactionExecutedEventFilter;
  };

  estimateGas: {
    executeMetaTransaction(
      _userAddress: string,
      _functionName: string,
      _functionSignature: BytesLike,
      _nonce: BigNumberish,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "isFunctionAllowlisted(string)"(
      _functionName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isFunctionAllowlisted(bytes32)"(
      _functionNameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUsedNonce(
      _associatedAddress: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAllowlistedFunctions(
      _functionNameHashes: BytesLike[],
      _isAllowlisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeMetaTransaction(
      _userAddress: string,
      _functionName: string,
      _functionSignature: BytesLike,
      _nonce: BigNumberish,
      _sigR: BytesLike,
      _sigS: BytesLike,
      _sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "isFunctionAllowlisted(string)"(
      _functionName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isFunctionAllowlisted(bytes32)"(
      _functionNameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUsedNonce(
      _associatedAddress: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAllowlistedFunctions(
      _functionNameHashes: BytesLike[],
      _isAllowlisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
