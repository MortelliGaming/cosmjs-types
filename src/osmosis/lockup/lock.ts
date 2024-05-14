/* eslint-disable */
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.lockup";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export enum LockQueryType {
  ByDuration = 0,
  ByTime = 1,
  NoLock = 2,
  ByGroup = 3,
  UNRECOGNIZED = -1,
}
export function lockQueryTypeFromJSON(object: any): LockQueryType {
  switch (object) {
    case 0:
    case "ByDuration":
      return LockQueryType.ByDuration;
    case 1:
    case "ByTime":
      return LockQueryType.ByTime;
    case 2:
    case "NoLock":
      return LockQueryType.NoLock;
    case 3:
    case "ByGroup":
      return LockQueryType.ByGroup;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LockQueryType.UNRECOGNIZED;
  }
}
export function lockQueryTypeToJSON(object: LockQueryType): string {
  switch (object) {
    case LockQueryType.ByDuration:
      return "ByDuration";
    case LockQueryType.ByTime:
      return "ByTime";
    case LockQueryType.NoLock:
      return "NoLock";
    case LockQueryType.ByGroup:
      return "ByGroup";
    case LockQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLock {
  /**
   * ID is the unique id of the lock.
   * The ID of the lock is decided upon lock creation, incrementing by 1 for
   * every lock.
   */
  ID: bigint;
  /**
   * Owner is the account address of the lock owner.
   * Only the owner can modify the state of the lock.
   */
  owner: string;
  /**
   * Duration is the time needed for a lock to mature after unlocking has
   * started.
   */
  duration: Duration;
  /**
   * EndTime refers to the time at which the lock would mature and get deleted.
   * This value is first initialized when an unlock has started for the lock,
   * end time being block time + duration.
   */
  endTime: Timestamp;
  /** Coins are the tokens locked within the lock, kept in the module account. */
  coins: Coin[];
  /**
   * Reward Receiver Address is the address that would be receiving rewards for
   * the incentives for the lock. This is set to owner by default and can be
   * changed via separate msg.
   */
  rewardReceiverAddress: string;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryCondition {
  /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
  lockQueryType: LockQueryType;
  /** Denom represents the token denomination we are looking to lock up */
  denom: string;
  /**
   * Duration is used to query locks with longer duration than the specified
   * duration. Duration field must not be nil when the lock query type is
   * `ByLockDuration`.
   */
  duration: Duration;
  /**
   * Timestamp is used by locks started before the specified duration.
   * Timestamp field must not be nil when the lock query type is `ByLockTime`.
   * Querying locks with timestamp is currently not implemented.
   */
  timestamp: Timestamp;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLock {
  /**
   * Underlying Lock ID is the underlying native lock's id for this synthetic
   * lockup. A synthetic lock MUST have an underlying lock.
   */
  underlyingLockId: bigint;
  /**
   * SynthDenom is the synthetic denom that is a combination of
   * gamm share + bonding status + validator address.
   */
  synthDenom: string;
  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  endTime: Timestamp;
  /**
   * Duration is the duration for a synthetic lock to mature
   * at the point of unbonding has started.
   */
  duration: Duration;
}
function createBasePeriodLock(): PeriodLock {
  return {
    ID: BigInt(0),
    owner: "",
    duration: Duration.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    coins: [],
    rewardReceiverAddress: "",
  };
}
export const PeriodLock = {
  typeUrl: "/osmosis.lockup.PeriodLock",
  encode(message: PeriodLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ID !== BigInt(0)) {
      writer.uint32(8).uint64(message.ID);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardReceiverAddress !== "") {
      writer.uint32(50).string(message.rewardReceiverAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardReceiverAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodLock {
    const obj = createBasePeriodLock();
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (isSet(object.endTime)) obj.endTime = fromJsonTimestamp(object.endTime);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.rewardReceiverAddress)) obj.rewardReceiverAddress = String(object.rewardReceiverAddress);
    return obj;
  },
  toJSON(message: PeriodLock): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    message.rewardReceiverAddress !== undefined &&
      (obj.rewardReceiverAddress = message.rewardReceiverAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PeriodLock>, I>>(object: I): PeriodLock {
    const message = createBasePeriodLock();
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    message.owner = object.owner ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Timestamp.fromPartial(object.endTime);
    }
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.rewardReceiverAddress = object.rewardReceiverAddress ?? "";
    return message;
  },
};
function createBaseQueryCondition(): QueryCondition {
  return {
    lockQueryType: 0,
    denom: "",
    duration: Duration.fromPartial({}),
    timestamp: Timestamp.fromPartial({}),
  };
}
export const QueryCondition = {
  typeUrl: "/osmosis.lockup.QueryCondition",
  encode(message: QueryCondition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockQueryType !== 0) {
      writer.uint32(8).int32(message.lockQueryType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCondition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockQueryType = reader.int32() as any;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCondition {
    const obj = createBaseQueryCondition();
    if (isSet(object.lockQueryType)) obj.lockQueryType = lockQueryTypeFromJSON(object.lockQueryType);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: QueryCondition): unknown {
    const obj: any = {};
    message.lockQueryType !== undefined && (obj.lockQueryType = lockQueryTypeToJSON(message.lockQueryType));
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCondition>, I>>(object: I): QueryCondition {
    const message = createBaseQueryCondition();
    message.lockQueryType = object.lockQueryType ?? 0;
    message.denom = object.denom ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseSyntheticLock(): SyntheticLock {
  return {
    underlyingLockId: BigInt(0),
    synthDenom: "",
    endTime: Timestamp.fromPartial({}),
    duration: Duration.fromPartial({}),
  };
}
export const SyntheticLock = {
  typeUrl: "/osmosis.lockup.SyntheticLock",
  encode(message: SyntheticLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.underlyingLockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.underlyingLockId);
    }
    if (message.synthDenom !== "") {
      writer.uint32(18).string(message.synthDenom);
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underlyingLockId = reader.uint64();
          break;
        case 2:
          message.synthDenom = reader.string();
          break;
        case 3:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SyntheticLock {
    const obj = createBaseSyntheticLock();
    if (isSet(object.underlyingLockId)) obj.underlyingLockId = BigInt(object.underlyingLockId.toString());
    if (isSet(object.synthDenom)) obj.synthDenom = String(object.synthDenom);
    if (isSet(object.endTime)) obj.endTime = fromJsonTimestamp(object.endTime);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: SyntheticLock): unknown {
    const obj: any = {};
    message.underlyingLockId !== undefined &&
      (obj.underlyingLockId = (message.underlyingLockId || BigInt(0)).toString());
    message.synthDenom !== undefined && (obj.synthDenom = message.synthDenom);
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SyntheticLock>, I>>(object: I): SyntheticLock {
    const message = createBaseSyntheticLock();
    if (object.underlyingLockId !== undefined && object.underlyingLockId !== null) {
      message.underlyingLockId = BigInt(object.underlyingLockId.toString());
    }
    message.synthDenom = object.synthDenom ?? "";
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Timestamp.fromPartial(object.endTime);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
};
