/* eslint-disable */
import { ValidatorPreference } from "./state";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.valsetpref.v1beta1";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceResponse {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin: Coin;
}
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin: Coin;
}
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromRebalancedValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
   * Our undelegate logic would first check the current delegation balance.
   * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
   * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
   * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
   * undelegated from ValB.
   */
  coin: Coin;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponse {}
export interface MsgRedelegateValidatorSet {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetResponse {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
  /** delegator is the user who is trying to force unbond osmo and delegate. */
  delegator: string;
  /** lockup id of osmo in the pool */
  lockID: bigint;
}
export interface MsgDelegateBondedTokensResponse {}
function createBaseMsgSetValidatorSetPreference(): MsgSetValidatorSetPreference {
  return {
    delegator: "",
    preferences: [],
  };
}
export const MsgSetValidatorSetPreference = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
  encode(message: MsgSetValidatorSetPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetValidatorSetPreference {
    const obj = createBaseMsgSetValidatorSetPreference();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (Array.isArray(object?.preferences))
      obj.preferences = object.preferences.map((e: any) => ValidatorPreference.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSetValidatorSetPreference): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) => (e ? ValidatorPreference.toJSON(e) : undefined));
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetValidatorSetPreference>, I>>(
    object: I,
  ): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map((e) => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgSetValidatorSetPreferenceResponse(): MsgSetValidatorSetPreferenceResponse {
  return {};
}
export const MsgSetValidatorSetPreferenceResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
  encode(
    _: MsgSetValidatorSetPreferenceResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetValidatorSetPreferenceResponse {
    const obj = createBaseMsgSetValidatorSetPreferenceResponse();
    return obj;
  },
  toJSON(_: MsgSetValidatorSetPreferenceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetValidatorSetPreferenceResponse>, I>>(
    _: I,
  ): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
};
function createBaseMsgDelegateToValidatorSet(): MsgDelegateToValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({}),
  };
}
export const MsgDelegateToValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
  encode(message: MsgDelegateToValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateToValidatorSet {
    const obj = createBaseMsgDelegateToValidatorSet();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    return obj;
  },
  toJSON(message: MsgDelegateToValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateToValidatorSet>, I>>(
    object: I,
  ): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = object.delegator ?? "";
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    }
    return message;
  },
};
function createBaseMsgDelegateToValidatorSetResponse(): MsgDelegateToValidatorSetResponse {
  return {};
}
export const MsgDelegateToValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
  encode(_: MsgDelegateToValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDelegateToValidatorSetResponse {
    const obj = createBaseMsgDelegateToValidatorSetResponse();
    return obj;
  },
  toJSON(_: MsgDelegateToValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateToValidatorSetResponse>, I>>(
    _: I,
  ): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
};
function createBaseMsgUndelegateFromValidatorSet(): MsgUndelegateFromValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({}),
  };
}
export const MsgUndelegateFromValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
  encode(message: MsgUndelegateFromValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateFromValidatorSet {
    const obj = createBaseMsgUndelegateFromValidatorSet();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    return obj;
  },
  toJSON(message: MsgUndelegateFromValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndelegateFromValidatorSet>, I>>(
    object: I,
  ): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = object.delegator ?? "";
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    }
    return message;
  },
};
function createBaseMsgUndelegateFromValidatorSetResponse(): MsgUndelegateFromValidatorSetResponse {
  return {};
}
export const MsgUndelegateFromValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
  encode(
    _: MsgUndelegateFromValidatorSetResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUndelegateFromValidatorSetResponse {
    const obj = createBaseMsgUndelegateFromValidatorSetResponse();
    return obj;
  },
  toJSON(_: MsgUndelegateFromValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndelegateFromValidatorSetResponse>, I>>(
    _: I,
  ): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
};
function createBaseMsgUndelegateFromRebalancedValidatorSet(): MsgUndelegateFromRebalancedValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({}),
  };
}
export const MsgUndelegateFromRebalancedValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet",
  encode(
    message: MsgUndelegateFromRebalancedValidatorSet,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateFromRebalancedValidatorSet {
    const obj = createBaseMsgUndelegateFromRebalancedValidatorSet();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    return obj;
  },
  toJSON(message: MsgUndelegateFromRebalancedValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndelegateFromRebalancedValidatorSet>, I>>(
    object: I,
  ): MsgUndelegateFromRebalancedValidatorSet {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    message.delegator = object.delegator ?? "";
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    }
    return message;
  },
};
function createBaseMsgUndelegateFromRebalancedValidatorSetResponse(): MsgUndelegateFromRebalancedValidatorSetResponse {
  return {};
}
export const MsgUndelegateFromRebalancedValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse",
  encode(
    _: MsgUndelegateFromRebalancedValidatorSetResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUndelegateFromRebalancedValidatorSetResponse {
    const obj = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    return obj;
  },
  toJSON(_: MsgUndelegateFromRebalancedValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndelegateFromRebalancedValidatorSetResponse>, I>>(
    _: I,
  ): MsgUndelegateFromRebalancedValidatorSetResponse {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    return message;
  },
};
function createBaseMsgRedelegateValidatorSet(): MsgRedelegateValidatorSet {
  return {
    delegator: "",
    preferences: [],
  };
}
export const MsgRedelegateValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
  encode(message: MsgRedelegateValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedelegateValidatorSet {
    const obj = createBaseMsgRedelegateValidatorSet();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (Array.isArray(object?.preferences))
      obj.preferences = object.preferences.map((e: any) => ValidatorPreference.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgRedelegateValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) => (e ? ValidatorPreference.toJSON(e) : undefined));
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRedelegateValidatorSet>, I>>(
    object: I,
  ): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map((e) => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgRedelegateValidatorSetResponse(): MsgRedelegateValidatorSetResponse {
  return {};
}
export const MsgRedelegateValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
  encode(_: MsgRedelegateValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRedelegateValidatorSetResponse {
    const obj = createBaseMsgRedelegateValidatorSetResponse();
    return obj;
  },
  toJSON(_: MsgRedelegateValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRedelegateValidatorSetResponse>, I>>(
    _: I,
  ): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
};
function createBaseMsgWithdrawDelegationRewards(): MsgWithdrawDelegationRewards {
  return {
    delegator: "",
  };
}
export const MsgWithdrawDelegationRewards = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
  encode(message: MsgWithdrawDelegationRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegationRewards {
    const obj = createBaseMsgWithdrawDelegationRewards();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    return obj;
  },
  toJSON(message: MsgWithdrawDelegationRewards): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegationRewards>, I>>(
    object: I,
  ): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = object.delegator ?? "";
    return message;
  },
};
function createBaseMsgWithdrawDelegationRewardsResponse(): MsgWithdrawDelegationRewardsResponse {
  return {};
}
export const MsgWithdrawDelegationRewardsResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
  encode(
    _: MsgWithdrawDelegationRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawDelegationRewardsResponse {
    const obj = createBaseMsgWithdrawDelegationRewardsResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawDelegationRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegationRewardsResponse>, I>>(
    _: I,
  ): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
};
function createBaseMsgDelegateBondedTokens(): MsgDelegateBondedTokens {
  return {
    delegator: "",
    lockID: BigInt(0),
  };
}
export const MsgDelegateBondedTokens = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
  encode(message: MsgDelegateBondedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.lockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateBondedTokens {
    const obj = createBaseMsgDelegateBondedTokens();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (isSet(object.lockID)) obj.lockID = BigInt(object.lockID.toString());
    return obj;
  },
  toJSON(message: MsgDelegateBondedTokens): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateBondedTokens>, I>>(object: I): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    message.delegator = object.delegator ?? "";
    if (object.lockID !== undefined && object.lockID !== null) {
      message.lockID = BigInt(object.lockID.toString());
    }
    return message;
  },
};
function createBaseMsgDelegateBondedTokensResponse(): MsgDelegateBondedTokensResponse {
  return {};
}
export const MsgDelegateBondedTokensResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse",
  encode(_: MsgDelegateBondedTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDelegateBondedTokensResponse {
    const obj = createBaseMsgDelegateBondedTokensResponse();
    return obj;
  },
  toJSON(_: MsgDelegateBondedTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateBondedTokensResponse>, I>>(
    _: I,
  ): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
};
/** Msg defines the valset-pref module's gRPC message service. */
export interface Msg {
  /**
   * SetValidatorSetPreference creates a set of validator preference.
   * This message will process both create + update request.
   */
  SetValidatorSetPreference(
    request: MsgSetValidatorSetPreference,
  ): Promise<MsgSetValidatorSetPreferenceResponse>;
  /**
   * DelegateToValidatorSet gets the owner, coins and delegates to a
   * validator-set.
   */
  DelegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse>;
  /**
   * UndelegateFromValidatorSet gets the owner and coins and undelegates from
   * validator-set. The unbonding logic will follow the `Undelegate` logic from
   * the sdk.
   */
  UndelegateFromValidatorSet(
    request: MsgUndelegateFromValidatorSet,
  ): Promise<MsgUndelegateFromValidatorSetResponse>;
  /**
   * UndelegateFromRebalancedValidatorSet undelegates the proivded amount from
   * the validator set, but takes into consideration the current delegations
   * to the user's validator set to determine the weights assigned to each.
   */
  UndelegateFromRebalancedValidatorSet(
    request: MsgUndelegateFromRebalancedValidatorSet,
  ): Promise<MsgUndelegateFromRebalancedValidatorSetResponse>;
  /**
   * RedelegateValidatorSet takes the existing validator set and redelegates to
   * a new set.
   */
  RedelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse>;
  /**
   * WithdrawDelegationRewards allows users to claim rewards from the
   * validator-set.
   */
  WithdrawDelegationRewards(
    request: MsgWithdrawDelegationRewards,
  ): Promise<MsgWithdrawDelegationRewardsResponse>;
  /**
   * DelegateBondedTokens allows users to break the lockup bond and delegate
   * osmo tokens to a predefined validator-set.
   */
  DelegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetValidatorSetPreference = this.SetValidatorSetPreference.bind(this);
    this.DelegateToValidatorSet = this.DelegateToValidatorSet.bind(this);
    this.UndelegateFromValidatorSet = this.UndelegateFromValidatorSet.bind(this);
    this.UndelegateFromRebalancedValidatorSet = this.UndelegateFromRebalancedValidatorSet.bind(this);
    this.RedelegateValidatorSet = this.RedelegateValidatorSet.bind(this);
    this.WithdrawDelegationRewards = this.WithdrawDelegationRewards.bind(this);
    this.DelegateBondedTokens = this.DelegateBondedTokens.bind(this);
  }
  SetValidatorSetPreference(
    request: MsgSetValidatorSetPreference,
  ): Promise<MsgSetValidatorSetPreferenceResponse> {
    const data = MsgSetValidatorSetPreference.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "SetValidatorSetPreference", data);
    return promise.then((data) => MsgSetValidatorSetPreferenceResponse.decode(new BinaryReader(data)));
  }
  DelegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse> {
    const data = MsgDelegateToValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateToValidatorSet", data);
    return promise.then((data) => MsgDelegateToValidatorSetResponse.decode(new BinaryReader(data)));
  }
  UndelegateFromValidatorSet(
    request: MsgUndelegateFromValidatorSet,
  ): Promise<MsgUndelegateFromValidatorSetResponse> {
    const data = MsgUndelegateFromValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "UndelegateFromValidatorSet", data);
    return promise.then((data) => MsgUndelegateFromValidatorSetResponse.decode(new BinaryReader(data)));
  }
  UndelegateFromRebalancedValidatorSet(
    request: MsgUndelegateFromRebalancedValidatorSet,
  ): Promise<MsgUndelegateFromRebalancedValidatorSetResponse> {
    const data = MsgUndelegateFromRebalancedValidatorSet.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.valsetpref.v1beta1.Msg",
      "UndelegateFromRebalancedValidatorSet",
      data,
    );
    return promise.then((data) =>
      MsgUndelegateFromRebalancedValidatorSetResponse.decode(new BinaryReader(data)),
    );
  }
  RedelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse> {
    const data = MsgRedelegateValidatorSet.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "RedelegateValidatorSet", data);
    return promise.then((data) => MsgRedelegateValidatorSetResponse.decode(new BinaryReader(data)));
  }
  WithdrawDelegationRewards(
    request: MsgWithdrawDelegationRewards,
  ): Promise<MsgWithdrawDelegationRewardsResponse> {
    const data = MsgWithdrawDelegationRewards.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "WithdrawDelegationRewards", data);
    return promise.then((data) => MsgWithdrawDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  DelegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse> {
    const data = MsgDelegateBondedTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateBondedTokens", data);
    return promise.then((data) => MsgDelegateBondedTokensResponse.decode(new BinaryReader(data)));
  }
}
