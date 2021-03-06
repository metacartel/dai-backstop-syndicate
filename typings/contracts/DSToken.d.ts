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

interface DSTokenInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([src, guy]: [string, string]): string;
    }>;

    authority: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{ encode([src]: [string]): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setAuthority: TypedFunctionDescription<{
      encode([authority_]: [string]): string;
    }>;

    setOwner: TypedFunctionDescription<{ encode([owner_]: [string]): string }>;

    start: TypedFunctionDescription<{ encode([]: []): string }>;

    stop: TypedFunctionDescription<{ encode([]: []): string }>;

    stopped: TypedFunctionDescription<{ encode([]: []): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([dst, wad]: [string, BigNumberish]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([guy, wad]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([src, dst, wad]: [string, string, BigNumberish]): string;
    }>;

    push: TypedFunctionDescription<{
      encode([dst, wad]: [string, BigNumberish]): string;
    }>;

    pull: TypedFunctionDescription<{
      encode([src, wad]: [string, BigNumberish]): string;
    }>;

    move: TypedFunctionDescription<{
      encode([src, dst, wad]: [string, string, BigNumberish]): string;
    }>;

    mint: TypedFunctionDescription<{
      encode([guy, wad]: [string, BigNumberish]): string;
    }>;

    burn: TypedFunctionDescription<{
      encode([guy, wad]: [string, BigNumberish]): string;
    }>;

    setName: TypedFunctionDescription<{ encode([name_]: [Arrayish]): string }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Burn: TypedEventDescription<{
      encodeTopics([guy, wad]: [string | null, null]): string[];
    }>;

    LogSetAuthority: TypedEventDescription<{
      encodeTopics([authority]: [string | null]): string[];
    }>;

    LogSetOwner: TypedEventDescription<{
      encodeTopics([owner]: [string | null]): string[];
    }>;

    Mint: TypedEventDescription<{
      encodeTopics([guy, wad]: [string | null, null]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class DSToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DSToken;
  attach(addressOrName: string): DSToken;
  deployed(): Promise<DSToken>;

  on(event: EventFilter | string, listener: Listener): DSToken;
  once(event: EventFilter | string, listener: Listener): DSToken;
  addListener(eventName: EventFilter | string, listener: Listener): DSToken;
  removeAllListeners(eventName: EventFilter | string): DSToken;
  removeListener(eventName: any, listener: Listener): DSToken;

  interface: DSTokenInterface;

  functions: {
    allowance(src: string, guy: string): Promise<BigNumber>;

    authority(): Promise<string>;

    balanceOf(src: string): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    name(): Promise<string>;

    owner(): Promise<string>;

    setAuthority(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    start(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    stop(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    stopped(): Promise<boolean>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    push(
      dst: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    pull(
      src: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    move(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(
      guy: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    burn(
      guy: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setName(
      name_: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(src: string, guy: string): Promise<BigNumber>;

  authority(): Promise<string>;

  balanceOf(src: string): Promise<BigNumber>;

  decimals(): Promise<BigNumber>;

  name(): Promise<string>;

  owner(): Promise<string>;

  setAuthority(
    authority_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  start(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  stop(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  stopped(): Promise<boolean>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    dst: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  approve(
    guy: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    src: string,
    dst: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  push(
    dst: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  pull(
    src: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  move(
    src: string,
    dst: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  mint(
    guy: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  burn(
    guy: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setName(
    name_: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Burn(guy: string | null, wad: null): EventFilter;

    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;

    Mint(guy: string | null, wad: null): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    allowance(src: string, guy: string): Promise<BigNumber>;

    authority(): Promise<BigNumber>;

    balanceOf(src: string): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    setAuthority(authority_: string): Promise<BigNumber>;

    setOwner(owner_: string): Promise<BigNumber>;

    start(): Promise<BigNumber>;

    stop(): Promise<BigNumber>;

    stopped(): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(dst: string, wad: BigNumberish): Promise<BigNumber>;

    approve(guy: string, wad: BigNumberish): Promise<BigNumber>;

    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish
    ): Promise<BigNumber>;

    push(dst: string, wad: BigNumberish): Promise<BigNumber>;

    pull(src: string, wad: BigNumberish): Promise<BigNumber>;

    move(src: string, dst: string, wad: BigNumberish): Promise<BigNumber>;

    mint(guy: string, wad: BigNumberish): Promise<BigNumber>;

    burn(guy: string, wad: BigNumberish): Promise<BigNumber>;

    setName(name_: Arrayish): Promise<BigNumber>;
  };
}
