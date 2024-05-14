/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import {
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../../helpers";
export const protobufPackage = "osmosis.twap.v1beta1";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
  poolId: bigint;
  /** Lexicographically smaller denom of the pair */
  asset0Denom: string;
  /** Lexicographically larger denom of the pair */
  asset1Denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: bigint;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time: Timestamp;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0LastSpotPrice: string;
  p1LastSpotPrice: string;
  p0ArithmeticTwapAccumulator: string;
  p1ArithmeticTwapAccumulator: string;
  geometricTwapAccumulator: string;
  /**
   * This field contains the time in which the last spot price error occurred.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  lastErrorTime: Timestamp;
}
/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 */
export interface PruningState {
  /**
   * is_pruning is true if the pruning process is ongoing.
   * This tells the module to continue pruning the TWAP records
   * at the EndBlock.
   */
  isPruning: boolean;
  /**
   * last_kept_time is the time of the last kept TWAP record.
   * This is used to determine all TWAP records that are older than
   * last_kept_time and should be pruned.
   */
  lastKeptTime: Timestamp;
  /** Deprecated: This field is deprecated. */
  /** @deprecated */
  lastKeySeen: Uint8Array;
  /**
   * last_seen_pool_id is the pool_id that we will begin pruning in the next
   * block. This value starts at the highest pool_id at time of epoch, and
   * decreases until it reaches 1. When it reaches 1, the pruning
   * process is complete.
   */
  lastSeenPoolId: bigint;
}
function createBaseTwapRecord(): TwapRecord {
  return {
    poolId: BigInt(0),
    asset0Denom: "",
    asset1Denom: "",
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    p0LastSpotPrice: "",
    p1LastSpotPrice: "",
    p0ArithmeticTwapAccumulator: "",
    p1ArithmeticTwapAccumulator: "",
    geometricTwapAccumulator: "",
    lastErrorTime: Timestamp.fromPartial({}),
  };
}
export const TwapRecord = {
  typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
  encode(message: TwapRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }
    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(42).fork()).ldelim();
    }
    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(message.p0LastSpotPrice);
    }
    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(message.p1LastSpotPrice);
    }
    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(message.p0ArithmeticTwapAccumulator);
    }
    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(message.p1ArithmeticTwapAccumulator);
    }
    if (message.geometricTwapAccumulator !== "") {
      writer.uint32(82).string(message.geometricTwapAccumulator);
    }
    if (message.lastErrorTime !== undefined) {
      Timestamp.encode(message.lastErrorTime, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TwapRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTwapRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.asset0Denom = reader.string();
          break;
        case 3:
          message.asset1Denom = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        case 5:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.p0LastSpotPrice = reader.string();
          break;
        case 7:
          message.p1LastSpotPrice = reader.string();
          break;
        case 8:
          message.p0ArithmeticTwapAccumulator = reader.string();
          break;
        case 9:
          message.p1ArithmeticTwapAccumulator = reader.string();
          break;
        case 10:
          message.geometricTwapAccumulator = reader.string();
          break;
        case 11:
          message.lastErrorTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TwapRecord {
    const obj = createBaseTwapRecord();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.asset0Denom)) obj.asset0Denom = String(object.asset0Denom);
    if (isSet(object.asset1Denom)) obj.asset1Denom = String(object.asset1Denom);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.p0LastSpotPrice)) obj.p0LastSpotPrice = String(object.p0LastSpotPrice);
    if (isSet(object.p1LastSpotPrice)) obj.p1LastSpotPrice = String(object.p1LastSpotPrice);
    if (isSet(object.p0ArithmeticTwapAccumulator))
      obj.p0ArithmeticTwapAccumulator = String(object.p0ArithmeticTwapAccumulator);
    if (isSet(object.p1ArithmeticTwapAccumulator))
      obj.p1ArithmeticTwapAccumulator = String(object.p1ArithmeticTwapAccumulator);
    if (isSet(object.geometricTwapAccumulator))
      obj.geometricTwapAccumulator = String(object.geometricTwapAccumulator);
    if (isSet(object.lastErrorTime)) obj.lastErrorTime = fromJsonTimestamp(object.lastErrorTime);
    return obj;
  },
  toJSON(message: TwapRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.asset0Denom !== undefined && (obj.asset0Denom = message.asset0Denom);
    message.asset1Denom !== undefined && (obj.asset1Denom = message.asset1Denom);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.p0LastSpotPrice !== undefined && (obj.p0LastSpotPrice = message.p0LastSpotPrice);
    message.p1LastSpotPrice !== undefined && (obj.p1LastSpotPrice = message.p1LastSpotPrice);
    message.p0ArithmeticTwapAccumulator !== undefined &&
      (obj.p0ArithmeticTwapAccumulator = message.p0ArithmeticTwapAccumulator);
    message.p1ArithmeticTwapAccumulator !== undefined &&
      (obj.p1ArithmeticTwapAccumulator = message.p1ArithmeticTwapAccumulator);
    message.geometricTwapAccumulator !== undefined &&
      (obj.geometricTwapAccumulator = message.geometricTwapAccumulator);
    message.lastErrorTime !== undefined &&
      (obj.lastErrorTime = fromTimestamp(message.lastErrorTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TwapRecord>, I>>(object: I): TwapRecord {
    const message = createBaseTwapRecord();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.asset0Denom = object.asset0Denom ?? "";
    message.asset1Denom = object.asset1Denom ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
    message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
    message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
    message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
    message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? "";
    if (object.lastErrorTime !== undefined && object.lastErrorTime !== null) {
      message.lastErrorTime = Timestamp.fromPartial(object.lastErrorTime);
    }
    return message;
  },
};
function createBasePruningState(): PruningState {
  return {
    isPruning: false,
    lastKeptTime: Timestamp.fromPartial({}),
    lastKeySeen: new Uint8Array(),
    lastSeenPoolId: BigInt(0),
  };
}
export const PruningState = {
  typeUrl: "/osmosis.twap.v1beta1.PruningState",
  encode(message: PruningState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isPruning === true) {
      writer.uint32(8).bool(message.isPruning);
    }
    if (message.lastKeptTime !== undefined) {
      Timestamp.encode(message.lastKeptTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastKeySeen.length !== 0) {
      writer.uint32(26).bytes(message.lastKeySeen);
    }
    if (message.lastSeenPoolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastSeenPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PruningState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePruningState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isPruning = reader.bool();
          break;
        case 2:
          message.lastKeptTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastKeySeen = reader.bytes();
          break;
        case 4:
          message.lastSeenPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PruningState {
    const obj = createBasePruningState();
    if (isSet(object.isPruning)) obj.isPruning = Boolean(object.isPruning);
    if (isSet(object.lastKeptTime)) obj.lastKeptTime = fromJsonTimestamp(object.lastKeptTime);
    if (isSet(object.lastKeySeen)) obj.lastKeySeen = bytesFromBase64(object.lastKeySeen);
    if (isSet(object.lastSeenPoolId)) obj.lastSeenPoolId = BigInt(object.lastSeenPoolId.toString());
    return obj;
  },
  toJSON(message: PruningState): unknown {
    const obj: any = {};
    message.isPruning !== undefined && (obj.isPruning = message.isPruning);
    message.lastKeptTime !== undefined &&
      (obj.lastKeptTime = fromTimestamp(message.lastKeptTime).toISOString());
    message.lastKeySeen !== undefined &&
      (obj.lastKeySeen = base64FromBytes(
        message.lastKeySeen !== undefined ? message.lastKeySeen : new Uint8Array(),
      ));
    message.lastSeenPoolId !== undefined &&
      (obj.lastSeenPoolId = (message.lastSeenPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PruningState>, I>>(object: I): PruningState {
    const message = createBasePruningState();
    message.isPruning = object.isPruning ?? false;
    if (object.lastKeptTime !== undefined && object.lastKeptTime !== null) {
      message.lastKeptTime = Timestamp.fromPartial(object.lastKeptTime);
    }
    message.lastKeySeen = object.lastKeySeen ?? new Uint8Array();
    if (object.lastSeenPoolId !== undefined && object.lastSeenPoolId !== null) {
      message.lastSeenPoolId = BigInt(object.lastSeenPoolId.toString());
    }
    return message;
  },
};
