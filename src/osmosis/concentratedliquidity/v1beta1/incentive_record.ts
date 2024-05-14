/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentiveId: bigint;
  poolId: bigint;
  /** incentive record body holds necessary */
  incentiveRecordBody: IncentiveRecordBody;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  minUptime: Duration;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
  /** remaining_coin is the total amount of incentives to be distributed */
  remainingCoin: DecCoin;
  /** emission_rate is the incentive emission rate per second */
  emissionRate: string;
  /** start_time is the time when the incentive starts distributing */
  startTime: Timestamp;
}
function createBaseIncentiveRecord(): IncentiveRecord {
  return {
    incentiveId: BigInt(0),
    poolId: BigInt(0),
    incentiveRecordBody: IncentiveRecordBody.fromPartial({}),
    minUptime: Duration.fromPartial({}),
  };
}
export const IncentiveRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
  encode(message: IncentiveRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentiveId !== BigInt(0)) {
      writer.uint32(8).uint64(message.incentiveId);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.incentiveRecordBody !== undefined) {
      IncentiveRecordBody.encode(message.incentiveRecordBody, writer.uint32(34).fork()).ldelim();
    }
    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveId = reader.uint64();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.incentiveRecordBody = IncentiveRecordBody.decode(reader, reader.uint32());
          break;
        case 5:
          message.minUptime = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecord {
    const obj = createBaseIncentiveRecord();
    if (isSet(object.incentiveId)) obj.incentiveId = BigInt(object.incentiveId.toString());
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.incentiveRecordBody))
      obj.incentiveRecordBody = IncentiveRecordBody.fromJSON(object.incentiveRecordBody);
    if (isSet(object.minUptime)) obj.minUptime = Duration.fromJSON(object.minUptime);
    return obj;
  },
  toJSON(message: IncentiveRecord): unknown {
    const obj: any = {};
    message.incentiveId !== undefined && (obj.incentiveId = (message.incentiveId || BigInt(0)).toString());
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.incentiveRecordBody !== undefined &&
      (obj.incentiveRecordBody = message.incentiveRecordBody
        ? IncentiveRecordBody.toJSON(message.incentiveRecordBody)
        : undefined);
    message.minUptime !== undefined &&
      (obj.minUptime = message.minUptime ? Duration.toJSON(message.minUptime) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecord>, I>>(object: I): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    if (object.incentiveId !== undefined && object.incentiveId !== null) {
      message.incentiveId = BigInt(object.incentiveId.toString());
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.incentiveRecordBody !== undefined && object.incentiveRecordBody !== null) {
      message.incentiveRecordBody = IncentiveRecordBody.fromPartial(object.incentiveRecordBody);
    }
    if (object.minUptime !== undefined && object.minUptime !== null) {
      message.minUptime = Duration.fromPartial(object.minUptime);
    }
    return message;
  },
};
function createBaseIncentiveRecordBody(): IncentiveRecordBody {
  return {
    remainingCoin: DecCoin.fromPartial({}),
    emissionRate: "",
    startTime: Timestamp.fromPartial({}),
  };
}
export const IncentiveRecordBody = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
  encode(message: IncentiveRecordBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remainingCoin !== undefined) {
      DecCoin.encode(message.remainingCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.emissionRate !== "") {
      writer.uint32(18).string(message.emissionRate);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordBody {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainingCoin = DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.emissionRate = reader.string();
          break;
        case 3:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecordBody {
    const obj = createBaseIncentiveRecordBody();
    if (isSet(object.remainingCoin)) obj.remainingCoin = DecCoin.fromJSON(object.remainingCoin);
    if (isSet(object.emissionRate)) obj.emissionRate = String(object.emissionRate);
    if (isSet(object.startTime)) obj.startTime = fromJsonTimestamp(object.startTime);
    return obj;
  },
  toJSON(message: IncentiveRecordBody): unknown {
    const obj: any = {};
    message.remainingCoin !== undefined &&
      (obj.remainingCoin = message.remainingCoin ? DecCoin.toJSON(message.remainingCoin) : undefined);
    message.emissionRate !== undefined && (obj.emissionRate = message.emissionRate);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecordBody>, I>>(object: I): IncentiveRecordBody {
    const message = createBaseIncentiveRecordBody();
    if (object.remainingCoin !== undefined && object.remainingCoin !== null) {
      message.remainingCoin = DecCoin.fromPartial(object.remainingCoin);
    }
    message.emissionRate = object.emissionRate ?? "";
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    return message;
  },
};
