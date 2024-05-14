/* eslint-disable */
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "osmosis.lockup";
export interface MsgLockTokens {
  owner: string;
  duration: Duration;
  coins: Coin[];
}
export interface MsgLockTokensResponse {
  ID: bigint;
}
export interface MsgBeginUnlockingAll {
  owner: string;
}
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}
export interface MsgBeginUnlocking {
  owner: string;
  ID: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgBeginUnlockingResponse {
  success: boolean;
  unlockingLockID: bigint;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
  owner: string;
  ID: bigint;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration: Duration;
}
export interface MsgExtendLockupResponse {
  success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
  owner: string;
  ID: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgForceUnlockResponse {
  success: boolean;
}
export interface MsgSetRewardReceiverAddress {
  owner: string;
  lockID: bigint;
  rewardReceiver: string;
}
export interface MsgSetRewardReceiverAddressResponse {
  success: boolean;
}
function createBaseMsgLockTokens(): MsgLockTokens {
  return {
    owner: "",
    duration: Duration.fromPartial({}),
    coins: [],
  };
}
export const MsgLockTokens = {
  typeUrl: "/osmosis.lockup.MsgLockTokens",
  encode(message: MsgLockTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokens {
    const obj = createBaseMsgLockTokens();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgLockTokens): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLockTokens>, I>>(object: I): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    ID: BigInt(0),
  };
}
export const MsgLockTokensResponse = {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
  encode(message: MsgLockTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ID !== BigInt(0)) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokensResponse {
    const obj = createBaseMsgLockTokensResponse();
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    return obj;
  },
  toJSON(message: MsgLockTokensResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLockTokensResponse>, I>>(object: I): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    return message;
  },
};
function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: "",
  };
}
export const MsgBeginUnlockingAll = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
  encode(message: MsgBeginUnlockingAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAll {
    const obj = createBaseMsgBeginUnlockingAll();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgBeginUnlockingAll): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingAll>, I>>(object: I): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: [],
  };
}
export const MsgBeginUnlockingAllResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
  encode(message: MsgBeginUnlockingAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unlocks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAllResponse {
    const obj = createBaseMsgBeginUnlockingAllResponse();
    if (Array.isArray(object?.unlocks)) obj.unlocks = object.unlocks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgBeginUnlockingAllResponse): unknown {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map((e) => (e ? PeriodLock.toJSON(e) : undefined));
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingAllResponse>, I>>(
    object: I,
  ): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map((e) => PeriodLock.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    ID: BigInt(0),
    coins: [],
  };
}
export const MsgBeginUnlocking = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
  encode(message: MsgBeginUnlocking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlocking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlocking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlocking {
    const obj = createBaseMsgBeginUnlocking();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgBeginUnlocking): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlocking>, I>>(object: I): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false,
    unlockingLockID: BigInt(0),
  };
}
export const MsgBeginUnlockingResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
  encode(message: MsgBeginUnlockingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.unlockingLockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.unlockingLockID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.unlockingLockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingResponse {
    const obj = createBaseMsgBeginUnlockingResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    if (isSet(object.unlockingLockID)) obj.unlockingLockID = BigInt(object.unlockingLockID.toString());
    return obj;
  },
  toJSON(message: MsgBeginUnlockingResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.unlockingLockID !== undefined &&
      (obj.unlockingLockID = (message.unlockingLockID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingResponse>, I>>(
    object: I,
  ): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    if (object.unlockingLockID !== undefined && object.unlockingLockID !== null) {
      message.unlockingLockID = BigInt(object.unlockingLockID.toString());
    }
    return message;
  },
};
function createBaseMsgExtendLockup(): MsgExtendLockup {
  return {
    owner: "",
    ID: BigInt(0),
    duration: Duration.fromPartial({}),
  };
}
export const MsgExtendLockup = {
  typeUrl: "/osmosis.lockup.MsgExtendLockup",
  encode(message: MsgExtendLockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockup {
    const obj = createBaseMsgExtendLockup();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: MsgExtendLockup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExtendLockup>, I>>(object: I): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    message.owner = object.owner ?? "";
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
};
function createBaseMsgExtendLockupResponse(): MsgExtendLockupResponse {
  return {
    success: false,
  };
}
export const MsgExtendLockupResponse = {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
  encode(message: MsgExtendLockupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockupResponse {
    const obj = createBaseMsgExtendLockupResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgExtendLockupResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExtendLockupResponse>, I>>(object: I): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    message.success = object.success ?? false;
    return message;
  },
};
function createBaseMsgForceUnlock(): MsgForceUnlock {
  return {
    owner: "",
    ID: BigInt(0),
    coins: [],
  };
}
export const MsgForceUnlock = {
  typeUrl: "/osmosis.lockup.MsgForceUnlock",
  encode(message: MsgForceUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlock {
    const obj = createBaseMsgForceUnlock();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgForceUnlock): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgForceUnlock>, I>>(object: I): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    message.owner = object.owner ?? "";
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgForceUnlockResponse(): MsgForceUnlockResponse {
  return {
    success: false,
  };
}
export const MsgForceUnlockResponse = {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
  encode(message: MsgForceUnlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlockResponse {
    const obj = createBaseMsgForceUnlockResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgForceUnlockResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgForceUnlockResponse>, I>>(object: I): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    message.success = object.success ?? false;
    return message;
  },
};
function createBaseMsgSetRewardReceiverAddress(): MsgSetRewardReceiverAddress {
  return {
    owner: "",
    lockID: BigInt(0),
    rewardReceiver: "",
  };
}
export const MsgSetRewardReceiverAddress = {
  typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
  encode(message: MsgSetRewardReceiverAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.lockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockID);
    }
    if (message.rewardReceiver !== "") {
      writer.uint32(26).string(message.rewardReceiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRewardReceiverAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardReceiverAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        case 3:
          message.rewardReceiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetRewardReceiverAddress {
    const obj = createBaseMsgSetRewardReceiverAddress();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.lockID)) obj.lockID = BigInt(object.lockID.toString());
    if (isSet(object.rewardReceiver)) obj.rewardReceiver = String(object.rewardReceiver);
    return obj;
  },
  toJSON(message: MsgSetRewardReceiverAddress): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
    message.rewardReceiver !== undefined && (obj.rewardReceiver = message.rewardReceiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRewardReceiverAddress>, I>>(
    object: I,
  ): MsgSetRewardReceiverAddress {
    const message = createBaseMsgSetRewardReceiverAddress();
    message.owner = object.owner ?? "";
    if (object.lockID !== undefined && object.lockID !== null) {
      message.lockID = BigInt(object.lockID.toString());
    }
    message.rewardReceiver = object.rewardReceiver ?? "";
    return message;
  },
};
function createBaseMsgSetRewardReceiverAddressResponse(): MsgSetRewardReceiverAddressResponse {
  return {
    success: false,
  };
}
export const MsgSetRewardReceiverAddressResponse = {
  typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddressResponse",
  encode(
    message: MsgSetRewardReceiverAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRewardReceiverAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardReceiverAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetRewardReceiverAddressResponse {
    const obj = createBaseMsgSetRewardReceiverAddressResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgSetRewardReceiverAddressResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRewardReceiverAddressResponse>, I>>(
    object: I,
  ): MsgSetRewardReceiverAddressResponse {
    const message = createBaseMsgSetRewardReceiverAddressResponse();
    message.success = object.success ?? false;
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
  /** BeginUnlockingAll begin unlocking all tokens */
  BeginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  BeginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
  /** MsgEditLockup edits the existing lockups by lock ID */
  ExtendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
  ForceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse>;
  /** SetRewardReceiverAddress edits the reward receiver for the given lock ID */
  SetRewardReceiverAddress(
    request: MsgSetRewardReceiverAddress,
  ): Promise<MsgSetRewardReceiverAddressResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LockTokens = this.LockTokens.bind(this);
    this.BeginUnlockingAll = this.BeginUnlockingAll.bind(this);
    this.BeginUnlocking = this.BeginUnlocking.bind(this);
    this.ExtendLockup = this.ExtendLockup.bind(this);
    this.ForceUnlock = this.ForceUnlock.bind(this);
    this.SetRewardReceiverAddress = this.SetRewardReceiverAddress.bind(this);
  }
  LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse> {
    const data = MsgLockTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "LockTokens", data);
    return promise.then((data) => MsgLockTokensResponse.decode(new BinaryReader(data)));
  }
  BeginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse> {
    const data = MsgBeginUnlockingAll.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlockingAll", data);
    return promise.then((data) => MsgBeginUnlockingAllResponse.decode(new BinaryReader(data)));
  }
  BeginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse> {
    const data = MsgBeginUnlocking.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlocking", data);
    return promise.then((data) => MsgBeginUnlockingResponse.decode(new BinaryReader(data)));
  }
  ExtendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse> {
    const data = MsgExtendLockup.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "ExtendLockup", data);
    return promise.then((data) => MsgExtendLockupResponse.decode(new BinaryReader(data)));
  }
  ForceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse> {
    const data = MsgForceUnlock.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "ForceUnlock", data);
    return promise.then((data) => MsgForceUnlockResponse.decode(new BinaryReader(data)));
  }
  SetRewardReceiverAddress(
    request: MsgSetRewardReceiverAddress,
  ): Promise<MsgSetRewardReceiverAddressResponse> {
    const data = MsgSetRewardReceiverAddress.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "SetRewardReceiverAddress", data);
    return promise.then((data) => MsgSetRewardReceiverAddressResponse.decode(new BinaryReader(data)));
  }
}
