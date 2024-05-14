/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Rpc } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";
export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: bigint;
  valAddr: string;
}
export interface MsgSuperfluidDelegateResponse {}
export interface MsgSuperfluidUndelegate {
  sender: string;
  lockId: bigint;
}
export interface MsgSuperfluidUndelegateResponse {}
export interface MsgSuperfluidUnbondLock {
  sender: string;
  lockId: bigint;
}
export interface MsgSuperfluidUnbondLockResponse {}
export interface MsgSuperfluidUndelegateAndUnbondLock {
  sender: string;
  lockId: bigint;
  /** Amount of unlocking coin. */
  coin: Coin;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponse {
  /**
   * lock id of the new lock created for the remaining amount.
   * returns the original lockid if the unlocked amount is equal to the
   * original lock's amount.
   */
  lockId: bigint;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
  ID: bigint;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
  poolId: bigint;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
  lockID: bigint;
  positionID: bigint;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
  sender: string;
  poolId: bigint;
}
export interface MsgUnPoolWhitelistedPoolResponse {
  exitedLockIds: bigint[];
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
  sender: string;
  lockId: bigint;
  sharesToMigrate: Coin;
  /** token_out_mins indicates minimum token to exit Balancer pool with. */
  tokenOutMins: Coin[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
  amount0: string;
  amount1: string;
  liquidityCreated: string;
  joinTime: Timestamp;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPosition {
  positionId: bigint;
  sender: string;
  tokenDesired0: Coin;
  tokenDesired1: Coin;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
  positionId: bigint;
  amount0: string;
  amount1: string;
  /**
   * new_liquidity is the final liquidity after the add.
   * It includes the liquidity that existed before in the position
   * and the new liquidity that was added to the position.
   */
  newLiquidity: string;
  lockId: bigint;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStake {
  /**
   * lock ID to convert and stake.
   * lock id with 0 should be provided if converting liquid gamm shares to stake
   */
  lockId: bigint;
  sender: string;
  /**
   * validator address to delegate to.
   * If provided empty string, we use the validators returned from
   * valset-preference module.
   */
  valAddr: string;
  /** min_amt_to_stake indicates the minimum amount to stake after conversion */
  minAmtToStake: string;
  /**
   * shares_to_convert indicates shares wanted to stake.
   * Note that this field is only used for liquid(unlocked) gamm shares.
   * For all other cases, this field would be disregarded.
   */
  sharesToConvert: Coin;
}
export interface MsgUnbondConvertAndStakeResponse {
  totalAmtStaked: string;
}
function createBaseMsgSuperfluidDelegate(): MsgSuperfluidDelegate {
  return {
    sender: "",
    lockId: BigInt(0),
    valAddr: "",
  };
}
export const MsgSuperfluidDelegate = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
  encode(message: MsgSuperfluidDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidDelegate {
    const obj = createBaseMsgSuperfluidDelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    return obj;
  },
  toJSON(message: MsgSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidDelegate>, I>>(object: I): MsgSuperfluidDelegate {
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    message.valAddr = object.valAddr ?? "";
    return message;
  },
};
function createBaseMsgSuperfluidDelegateResponse(): MsgSuperfluidDelegateResponse {
  return {};
}
export const MsgSuperfluidDelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
  encode(_: MsgSuperfluidDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegateResponse();
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
  fromJSON(_: any): MsgSuperfluidDelegateResponse {
    const obj = createBaseMsgSuperfluidDelegateResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidDelegateResponse>, I>>(
    _: I,
  ): MsgSuperfluidDelegateResponse {
    const message = createBaseMsgSuperfluidDelegateResponse();
    return message;
  },
};
function createBaseMsgSuperfluidUndelegate(): MsgSuperfluidUndelegate {
  return {
    sender: "",
    lockId: BigInt(0),
  };
}
export const MsgSuperfluidUndelegate = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
  encode(message: MsgSuperfluidUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUndelegate {
    const obj = createBaseMsgSuperfluidUndelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: MsgSuperfluidUndelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUndelegate>, I>>(object: I): MsgSuperfluidUndelegate {
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
};
function createBaseMsgSuperfluidUndelegateResponse(): MsgSuperfluidUndelegateResponse {
  return {};
}
export const MsgSuperfluidUndelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
  encode(_: MsgSuperfluidUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateResponse();
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
  fromJSON(_: any): MsgSuperfluidUndelegateResponse {
    const obj = createBaseMsgSuperfluidUndelegateResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUndelegateResponse>, I>>(
    _: I,
  ): MsgSuperfluidUndelegateResponse {
    const message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
  },
};
function createBaseMsgSuperfluidUnbondLock(): MsgSuperfluidUnbondLock {
  return {
    sender: "",
    lockId: BigInt(0),
  };
}
export const MsgSuperfluidUnbondLock = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
  encode(message: MsgSuperfluidUnbondLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUnbondLock {
    const obj = createBaseMsgSuperfluidUnbondLock();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: MsgSuperfluidUnbondLock): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUnbondLock>, I>>(object: I): MsgSuperfluidUnbondLock {
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
};
function createBaseMsgSuperfluidUnbondLockResponse(): MsgSuperfluidUnbondLockResponse {
  return {};
}
export const MsgSuperfluidUnbondLockResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
  encode(_: MsgSuperfluidUnbondLockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLockResponse();
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
  fromJSON(_: any): MsgSuperfluidUnbondLockResponse {
    const obj = createBaseMsgSuperfluidUnbondLockResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidUnbondLockResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUnbondLockResponse>, I>>(
    _: I,
  ): MsgSuperfluidUnbondLockResponse {
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
  },
};
function createBaseMsgSuperfluidUndelegateAndUnbondLock(): MsgSuperfluidUndelegateAndUnbondLock {
  return {
    sender: "",
    lockId: BigInt(0),
    coin: Coin.fromPartial({}),
  };
}
export const MsgSuperfluidUndelegateAndUnbondLock = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
  encode(
    message: MsgSuperfluidUndelegateAndUnbondLock,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateAndUnbondLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64();
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
  fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLock {
    const obj = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    return obj;
  },
  toJSON(message: MsgSuperfluidUndelegateAndUnbondLock): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUndelegateAndUnbondLock>, I>>(
    object: I,
  ): MsgSuperfluidUndelegateAndUnbondLock {
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    }
    return message;
  },
};
function createBaseMsgSuperfluidUndelegateAndUnbondLockResponse(): MsgSuperfluidUndelegateAndUnbondLockResponse {
  return {
    lockId: BigInt(0),
  };
}
export const MsgSuperfluidUndelegateAndUnbondLockResponse = {
  typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse",
  encode(
    message: MsgSuperfluidUndelegateAndUnbondLockResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.lockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateAndUnbondLockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLockResponse {
    const obj = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: MsgSuperfluidUndelegateAndUnbondLockResponse): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUndelegateAndUnbondLockResponse>, I>>(
    object: I,
  ): MsgSuperfluidUndelegateAndUnbondLockResponse {
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
};
function createBaseMsgLockAndSuperfluidDelegate(): MsgLockAndSuperfluidDelegate {
  return {
    sender: "",
    coins: [],
    valAddr: "",
  };
}
export const MsgLockAndSuperfluidDelegate = {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
  encode(message: MsgLockAndSuperfluidDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegate {
    const obj = createBaseMsgLockAndSuperfluidDelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    return obj;
  },
  toJSON(message: MsgLockAndSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLockAndSuperfluidDelegate>, I>>(
    object: I,
  ): MsgLockAndSuperfluidDelegate {
    const message = createBaseMsgLockAndSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.valAddr = object.valAddr ?? "";
    return message;
  },
};
function createBaseMsgLockAndSuperfluidDelegateResponse(): MsgLockAndSuperfluidDelegateResponse {
  return {
    ID: BigInt(0),
  };
}
export const MsgLockAndSuperfluidDelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
  encode(
    message: MsgLockAndSuperfluidDelegateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ID !== BigInt(0)) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
  fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse {
    const obj = createBaseMsgLockAndSuperfluidDelegateResponse();
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    return obj;
  },
  toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLockAndSuperfluidDelegateResponse>, I>>(
    object: I,
  ): MsgLockAndSuperfluidDelegateResponse {
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    return message;
  },
};
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegate(): MsgCreateFullRangePositionAndSuperfluidDelegate {
  return {
    sender: "",
    coins: [],
    valAddr: "",
    poolId: BigInt(0),
  };
}
export const MsgCreateFullRangePositionAndSuperfluidDelegate = {
  typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
  encode(
    message: MsgCreateFullRangePositionAndSuperfluidDelegate,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFullRangePositionAndSuperfluidDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        case 4:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegate {
    const obj = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: MsgCreateFullRangePositionAndSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateFullRangePositionAndSuperfluidDelegate>, I>>(
    object: I,
  ): MsgCreateFullRangePositionAndSuperfluidDelegate {
    const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.valAddr = object.valAddr ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse(): MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
  return {
    lockID: BigInt(0),
    positionID: BigInt(0),
  };
}
export const MsgCreateFullRangePositionAndSuperfluidDelegateResponse = {
  typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse",
  encode(
    message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.lockID !== BigInt(0)) {
      writer.uint32(8).uint64(message.lockID);
    }
    if (message.positionID !== BigInt(0)) {
      writer.uint32(16).uint64(message.positionID);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockID = reader.uint64();
          break;
        case 2:
          message.positionID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
    const obj = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
    if (isSet(object.lockID)) obj.lockID = BigInt(object.lockID.toString());
    if (isSet(object.positionID)) obj.positionID = BigInt(object.positionID.toString());
    return obj;
  },
  toJSON(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
    message.positionID !== undefined && (obj.positionID = (message.positionID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>, I>>(
    object: I,
  ): MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
    const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
    if (object.lockID !== undefined && object.lockID !== null) {
      message.lockID = BigInt(object.lockID.toString());
    }
    if (object.positionID !== undefined && object.positionID !== null) {
      message.positionID = BigInt(object.positionID.toString());
    }
    return message;
  },
};
function createBaseMsgUnPoolWhitelistedPool(): MsgUnPoolWhitelistedPool {
  return {
    sender: "",
    poolId: BigInt(0),
  };
}
export const MsgUnPoolWhitelistedPool = {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
  encode(message: MsgUnPoolWhitelistedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPool {
    const obj = createBaseMsgUnPoolWhitelistedPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: MsgUnPoolWhitelistedPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnPoolWhitelistedPool>, I>>(
    object: I,
  ): MsgUnPoolWhitelistedPool {
    const message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseMsgUnPoolWhitelistedPoolResponse(): MsgUnPoolWhitelistedPoolResponse {
  return {
    exitedLockIds: [],
  };
}
export const MsgUnPoolWhitelistedPoolResponse = {
  typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
  encode(
    message: MsgUnPoolWhitelistedPoolResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.exitedLockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exitedLockIds.push(reader.uint64());
            }
          } else {
            message.exitedLockIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPoolResponse {
    const obj = createBaseMsgUnPoolWhitelistedPoolResponse();
    if (Array.isArray(object?.exitedLockIds))
      obj.exitedLockIds = object.exitedLockIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: MsgUnPoolWhitelistedPoolResponse): unknown {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exitedLockIds = message.exitedLockIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.exitedLockIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnPoolWhitelistedPoolResponse>, I>>(
    object: I,
  ): MsgUnPoolWhitelistedPoolResponse {
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = object.exitedLockIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition(): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
  return {
    sender: "",
    lockId: BigInt(0),
    sharesToMigrate: Coin.fromPartial({}),
    tokenOutMins: [],
  };
}
export const MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition = {
  typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
  encode(
    message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).int64(message.lockId);
    }
    if (message.sharesToMigrate !== undefined) {
      Coin.encode(message.sharesToMigrate, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tokenOutMins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = reader.int64();
          break;
        case 3:
          message.sharesToMigrate = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOutMins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
    const obj = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.sharesToMigrate)) obj.sharesToMigrate = Coin.fromJSON(object.sharesToMigrate);
    if (Array.isArray(object?.tokenOutMins))
      obj.tokenOutMins = object.tokenOutMins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.sharesToMigrate !== undefined &&
      (obj.sharesToMigrate = message.sharesToMigrate ? Coin.toJSON(message.sharesToMigrate) : undefined);
    if (message.tokenOutMins) {
      obj.tokenOutMins = message.tokenOutMins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.tokenOutMins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>, I>>(
    object: I,
  ): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
    const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
    message.sender = object.sender ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    if (object.sharesToMigrate !== undefined && object.sharesToMigrate !== null) {
      message.sharesToMigrate = Coin.fromPartial(object.sharesToMigrate);
    }
    message.tokenOutMins = object.tokenOutMins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse(): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
  return {
    amount0: "",
    amount1: "",
    liquidityCreated: "",
    joinTime: Timestamp.fromPartial({}),
  };
}
export const MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse = {
  typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse",
  encode(
    message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }
    if (message.liquidityCreated !== "") {
      writer.uint32(26).string(message.liquidityCreated);
    }
    if (message.joinTime !== undefined) {
      Timestamp.encode(message.joinTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount0 = reader.string();
          break;
        case 2:
          message.amount1 = reader.string();
          break;
        case 3:
          message.liquidityCreated = reader.string();
          break;
        case 4:
          message.joinTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
    const obj = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
    if (isSet(object.amount0)) obj.amount0 = String(object.amount0);
    if (isSet(object.amount1)) obj.amount1 = String(object.amount1);
    if (isSet(object.liquidityCreated)) obj.liquidityCreated = String(object.liquidityCreated);
    if (isSet(object.joinTime)) obj.joinTime = fromJsonTimestamp(object.joinTime);
    return obj;
  },
  toJSON(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): unknown {
    const obj: any = {};
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    message.liquidityCreated !== undefined && (obj.liquidityCreated = message.liquidityCreated);
    message.joinTime !== undefined && (obj.joinTime = fromTimestamp(message.joinTime).toISOString());
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>, I>,
  >(object: I): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
    const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.liquidityCreated = object.liquidityCreated ?? "";
    if (object.joinTime !== undefined && object.joinTime !== null) {
      message.joinTime = Timestamp.fromPartial(object.joinTime);
    }
    return message;
  },
};
function createBaseMsgAddToConcentratedLiquiditySuperfluidPosition(): MsgAddToConcentratedLiquiditySuperfluidPosition {
  return {
    positionId: BigInt(0),
    sender: "",
    tokenDesired0: Coin.fromPartial({}),
    tokenDesired1: Coin.fromPartial({}),
  };
}
export const MsgAddToConcentratedLiquiditySuperfluidPosition = {
  typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
  encode(
    message: MsgAddToConcentratedLiquiditySuperfluidPosition,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.tokenDesired0 !== undefined) {
      Coin.encode(message.tokenDesired0, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenDesired1 !== undefined) {
      Coin.encode(message.tokenDesired1, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToConcentratedLiquiditySuperfluidPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.tokenDesired0 = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenDesired1 = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPosition {
    const obj = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.tokenDesired0)) obj.tokenDesired0 = Coin.fromJSON(object.tokenDesired0);
    if (isSet(object.tokenDesired1)) obj.tokenDesired1 = Coin.fromJSON(object.tokenDesired1);
    return obj;
  },
  toJSON(message: MsgAddToConcentratedLiquiditySuperfluidPosition): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenDesired0 !== undefined &&
      (obj.tokenDesired0 = message.tokenDesired0 ? Coin.toJSON(message.tokenDesired0) : undefined);
    message.tokenDesired1 !== undefined &&
      (obj.tokenDesired1 = message.tokenDesired1 ? Coin.toJSON(message.tokenDesired1) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddToConcentratedLiquiditySuperfluidPosition>, I>>(
    object: I,
  ): MsgAddToConcentratedLiquiditySuperfluidPosition {
    const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    message.sender = object.sender ?? "";
    if (object.tokenDesired0 !== undefined && object.tokenDesired0 !== null) {
      message.tokenDesired0 = Coin.fromPartial(object.tokenDesired0);
    }
    if (object.tokenDesired1 !== undefined && object.tokenDesired1 !== null) {
      message.tokenDesired1 = Coin.fromPartial(object.tokenDesired1);
    }
    return message;
  },
};
function createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse(): MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
  return {
    positionId: BigInt(0),
    amount0: "",
    amount1: "",
    newLiquidity: "",
    lockId: BigInt(0),
  };
}
export const MsgAddToConcentratedLiquiditySuperfluidPositionResponse = {
  typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse",
  encode(
    message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    if (message.newLiquidity !== "") {
      writer.uint32(42).string(message.newLiquidity);
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(32).uint64(message.lockId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.amount0 = reader.string();
          break;
        case 3:
          message.amount1 = reader.string();
          break;
        case 5:
          message.newLiquidity = reader.string();
          break;
        case 4:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
    const obj = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.amount0)) obj.amount0 = String(object.amount0);
    if (isSet(object.amount1)) obj.amount1 = String(object.amount1);
    if (isSet(object.newLiquidity)) obj.newLiquidity = String(object.newLiquidity);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    message.newLiquidity !== undefined && (obj.newLiquidity = message.newLiquidity);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>, I>>(
    object: I,
  ): MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
    const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.newLiquidity = object.newLiquidity ?? "";
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
};
function createBaseMsgUnbondConvertAndStake(): MsgUnbondConvertAndStake {
  return {
    lockId: BigInt(0),
    sender: "",
    valAddr: "",
    minAmtToStake: "",
    sharesToConvert: Coin.fromPartial({}),
  };
}
export const MsgUnbondConvertAndStake = {
  typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake",
  encode(message: MsgUnbondConvertAndStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lockId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    if (message.minAmtToStake !== "") {
      writer.uint32(34).string(message.minAmtToStake);
    }
    if (message.sharesToConvert !== undefined) {
      Coin.encode(message.sharesToConvert, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondConvertAndStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondConvertAndStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        case 4:
          message.minAmtToStake = reader.string();
          break;
        case 5:
          message.sharesToConvert = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnbondConvertAndStake {
    const obj = createBaseMsgUnbondConvertAndStake();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.minAmtToStake)) obj.minAmtToStake = String(object.minAmtToStake);
    if (isSet(object.sharesToConvert)) obj.sharesToConvert = Coin.fromJSON(object.sharesToConvert);
    return obj;
  },
  toJSON(message: MsgUnbondConvertAndStake): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.minAmtToStake !== undefined && (obj.minAmtToStake = message.minAmtToStake);
    message.sharesToConvert !== undefined &&
      (obj.sharesToConvert = message.sharesToConvert ? Coin.toJSON(message.sharesToConvert) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnbondConvertAndStake>, I>>(
    object: I,
  ): MsgUnbondConvertAndStake {
    const message = createBaseMsgUnbondConvertAndStake();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    message.sender = object.sender ?? "";
    message.valAddr = object.valAddr ?? "";
    message.minAmtToStake = object.minAmtToStake ?? "";
    if (object.sharesToConvert !== undefined && object.sharesToConvert !== null) {
      message.sharesToConvert = Coin.fromPartial(object.sharesToConvert);
    }
    return message;
  },
};
function createBaseMsgUnbondConvertAndStakeResponse(): MsgUnbondConvertAndStakeResponse {
  return {
    totalAmtStaked: "",
  };
}
export const MsgUnbondConvertAndStakeResponse = {
  typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStakeResponse",
  encode(
    message: MsgUnbondConvertAndStakeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalAmtStaked !== "") {
      writer.uint32(10).string(message.totalAmtStaked);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondConvertAndStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondConvertAndStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAmtStaked = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnbondConvertAndStakeResponse {
    const obj = createBaseMsgUnbondConvertAndStakeResponse();
    if (isSet(object.totalAmtStaked)) obj.totalAmtStaked = String(object.totalAmtStaked);
    return obj;
  },
  toJSON(message: MsgUnbondConvertAndStakeResponse): unknown {
    const obj: any = {};
    message.totalAmtStaked !== undefined && (obj.totalAmtStaked = message.totalAmtStaked);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnbondConvertAndStakeResponse>, I>>(
    object: I,
  ): MsgUnbondConvertAndStakeResponse {
    const message = createBaseMsgUnbondConvertAndStakeResponse();
    message.totalAmtStaked = object.totalAmtStaked ?? "";
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  SuperfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
  /** Execute superfluid undelegation for a lockup */
  SuperfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  SuperfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
  /** Superfluid undelegate and unbond partial amount of the underlying lock. */
  SuperfluidUndelegateAndUnbondLock(
    request: MsgSuperfluidUndelegateAndUnbondLock,
  ): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  LockAndSuperfluidDelegate(
    request: MsgLockAndSuperfluidDelegate,
  ): Promise<MsgLockAndSuperfluidDelegateResponse>;
  CreateFullRangePositionAndSuperfluidDelegate(
    request: MsgCreateFullRangePositionAndSuperfluidDelegate,
  ): Promise<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>;
  UnPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
  UnlockAndMigrateSharesToFullRangeConcentratedPosition(
    request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
  ): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;
  AddToConcentratedLiquiditySuperfluidPosition(
    request: MsgAddToConcentratedLiquiditySuperfluidPosition,
  ): Promise<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>;
  /**
   * UnbondConvertAndStake breaks all locks / superfluid staked assets,
   * converts them to osmo then stakes the osmo to the designated validator.
   */
  UnbondConvertAndStake(request: MsgUnbondConvertAndStake): Promise<MsgUnbondConvertAndStakeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SuperfluidDelegate = this.SuperfluidDelegate.bind(this);
    this.SuperfluidUndelegate = this.SuperfluidUndelegate.bind(this);
    this.SuperfluidUnbondLock = this.SuperfluidUnbondLock.bind(this);
    this.SuperfluidUndelegateAndUnbondLock = this.SuperfluidUndelegateAndUnbondLock.bind(this);
    this.LockAndSuperfluidDelegate = this.LockAndSuperfluidDelegate.bind(this);
    this.CreateFullRangePositionAndSuperfluidDelegate =
      this.CreateFullRangePositionAndSuperfluidDelegate.bind(this);
    this.UnPoolWhitelistedPool = this.UnPoolWhitelistedPool.bind(this);
    this.UnlockAndMigrateSharesToFullRangeConcentratedPosition =
      this.UnlockAndMigrateSharesToFullRangeConcentratedPosition.bind(this);
    this.AddToConcentratedLiquiditySuperfluidPosition =
      this.AddToConcentratedLiquiditySuperfluidPosition.bind(this);
    this.UnbondConvertAndStake = this.UnbondConvertAndStake.bind(this);
  }
  SuperfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse> {
    const data = MsgSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
    return promise.then((data) => MsgSuperfluidDelegateResponse.decode(new BinaryReader(data)));
  }
  SuperfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse> {
    const data = MsgSuperfluidUndelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
    return promise.then((data) => MsgSuperfluidUndelegateResponse.decode(new BinaryReader(data)));
  }
  SuperfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse> {
    const data = MsgSuperfluidUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
    return promise.then((data) => MsgSuperfluidUnbondLockResponse.decode(new BinaryReader(data)));
  }
  SuperfluidUndelegateAndUnbondLock(
    request: MsgSuperfluidUndelegateAndUnbondLock,
  ): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse> {
    const data = MsgSuperfluidUndelegateAndUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegateAndUnbondLock", data);
    return promise.then((data) =>
      MsgSuperfluidUndelegateAndUnbondLockResponse.decode(new BinaryReader(data)),
    );
  }
  LockAndSuperfluidDelegate(
    request: MsgLockAndSuperfluidDelegate,
  ): Promise<MsgLockAndSuperfluidDelegateResponse> {
    const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
    return promise.then((data) => MsgLockAndSuperfluidDelegateResponse.decode(new BinaryReader(data)));
  }
  CreateFullRangePositionAndSuperfluidDelegate(
    request: MsgCreateFullRangePositionAndSuperfluidDelegate,
  ): Promise<MsgCreateFullRangePositionAndSuperfluidDelegateResponse> {
    const data = MsgCreateFullRangePositionAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Msg",
      "CreateFullRangePositionAndSuperfluidDelegate",
      data,
    );
    return promise.then((data) =>
      MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode(new BinaryReader(data)),
    );
  }
  UnPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse> {
    const data = MsgUnPoolWhitelistedPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
    return promise.then((data) => MsgUnPoolWhitelistedPoolResponse.decode(new BinaryReader(data)));
  }
  UnlockAndMigrateSharesToFullRangeConcentratedPosition(
    request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
  ): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse> {
    const data = MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Msg",
      "UnlockAndMigrateSharesToFullRangeConcentratedPosition",
      data,
    );
    return promise.then((data) =>
      MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(new BinaryReader(data)),
    );
  }
  AddToConcentratedLiquiditySuperfluidPosition(
    request: MsgAddToConcentratedLiquiditySuperfluidPosition,
  ): Promise<MsgAddToConcentratedLiquiditySuperfluidPositionResponse> {
    const data = MsgAddToConcentratedLiquiditySuperfluidPosition.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Msg",
      "AddToConcentratedLiquiditySuperfluidPosition",
      data,
    );
    return promise.then((data) =>
      MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode(new BinaryReader(data)),
    );
  }
  UnbondConvertAndStake(request: MsgUnbondConvertAndStake): Promise<MsgUnbondConvertAndStakeResponse> {
    const data = MsgUnbondConvertAndStake.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnbondConvertAndStake", data);
    return promise.then((data) => MsgUnbondConvertAndStakeResponse.decode(new BinaryReader(data)));
  }
}
