/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface TwoStepOwnableInterface extends Interface {
  functions: {
    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    isOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([newOwner]: [string]): string;
    }>;

    cancelOwnershipTransfer: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class TwoStepOwnable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): TwoStepOwnable;
  attach(addressOrName: string): TwoStepOwnable;
  deployed(): Promise<TwoStepOwnable>;

  on(event: EventFilter | string, listener: Listener): TwoStepOwnable;
  once(event: EventFilter | string, listener: Listener): TwoStepOwnable;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): TwoStepOwnable;
  removeAllListeners(eventName: EventFilter | string): TwoStepOwnable;
  removeListener(eventName: any, listener: Listener): TwoStepOwnable;

  interface: TwoStepOwnableInterface;

  functions: {
    owner(): Promise<string>;

    isOwner(): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    cancelOwnershipTransfer(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  owner(): Promise<string>;

  isOwner(): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  cancelOwnershipTransfer(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    owner(): Promise<BigNumber>;

    isOwner(): Promise<BigNumber>;

    transferOwnership(newOwner: string): Promise<BigNumber>;

    cancelOwnershipTransfer(): Promise<BigNumber>;

    acceptOwnership(): Promise<BigNumber>;
  };
}
