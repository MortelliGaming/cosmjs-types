/* eslint-disable */
import { TickInfo } from "./tick_info";
import { Any } from "../../../google/protobuf/any";
import { IncentiveRecord } from "./incentive_record";
import { Position } from "./position";
import { Record, AccumulatorContent } from "../../accum/v1beta1/accum";
import { Params } from "../params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
  /** pool id associated with the tick. */
  poolId: bigint;
  /** tick's index. */
  tickIndex: bigint;
  /** tick's info. */
  info: TickInfo;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
  /** pool struct */
  pool?: Any;
  /** pool's ticks */
  ticks: FullTick[];
  spreadRewardAccumulator: AccumObject;
  incentivesAccumulators: AccumObject[];
  /** incentive records to be set */
  incentiveRecords: IncentiveRecord[];
}
export interface PositionData {
  position?: Position;
  lockId: bigint;
  spreadRewardAccumRecord: Record;
  uptimeAccumRecords: Record[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** pool data containing serialized pool struct and ticks. */
  poolData: PoolData[];
  positionData: PositionData[];
  nextPositionId: bigint;
  nextIncentiveRecordId: bigint;
  incentivesAccumulatorPoolIdMigrationThreshold: bigint;
  spreadFactorPoolIdMigrationThreshold: bigint;
}
export interface AccumObject {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accumContent?: AccumulatorContent;
}
function createBaseFullTick(): FullTick {
  return {
    poolId: BigInt(0),
    tickIndex: BigInt(0),
    info: TickInfo.fromPartial({}),
  };
}
export const FullTick = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick",
  encode(message: FullTick, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.info !== undefined) {
      TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullTick {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.info = TickInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FullTick {
    const obj = createBaseFullTick();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tickIndex)) obj.tickIndex = BigInt(object.tickIndex.toString());
    if (isSet(object.info)) obj.info = TickInfo.fromJSON(object.info);
    return obj;
  },
  toJSON(message: FullTick): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    message.info !== undefined && (obj.info = message.info ? TickInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FullTick>, I>>(object: I): FullTick {
    const message = createBaseFullTick();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.tickIndex !== undefined && object.tickIndex !== null) {
      message.tickIndex = BigInt(object.tickIndex.toString());
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = TickInfo.fromPartial(object.info);
    }
    return message;
  },
};
function createBasePoolData(): PoolData {
  return {
    pool: undefined,
    ticks: [],
    spreadRewardAccumulator: AccumObject.fromPartial({}),
    incentivesAccumulators: [],
    incentiveRecords: [],
  };
}
export const PoolData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData",
  encode(message: PoolData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ticks) {
      FullTick.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.spreadRewardAccumulator !== undefined) {
      AccumObject.encode(message.spreadRewardAccumulator, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.incentivesAccumulators) {
      AccumObject.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.ticks.push(FullTick.decode(reader, reader.uint32()));
          break;
        case 3:
          message.spreadRewardAccumulator = AccumObject.decode(reader, reader.uint32());
          break;
        case 4:
          message.incentivesAccumulators.push(AccumObject.decode(reader, reader.uint32()));
          break;
        case 5:
          message.incentiveRecords.push(IncentiveRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolData {
    const obj = createBasePoolData();
    if (isSet(object.pool)) obj.pool = Any.fromJSON(object.pool);
    if (Array.isArray(object?.ticks)) obj.ticks = object.ticks.map((e: any) => FullTick.fromJSON(e));
    if (isSet(object.spreadRewardAccumulator))
      obj.spreadRewardAccumulator = AccumObject.fromJSON(object.spreadRewardAccumulator);
    if (Array.isArray(object?.incentivesAccumulators))
      obj.incentivesAccumulators = object.incentivesAccumulators.map((e: any) => AccumObject.fromJSON(e));
    if (Array.isArray(object?.incentiveRecords))
      obj.incentiveRecords = object.incentiveRecords.map((e: any) => IncentiveRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: PoolData): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
    if (message.ticks) {
      obj.ticks = message.ticks.map((e) => (e ? FullTick.toJSON(e) : undefined));
    } else {
      obj.ticks = [];
    }
    message.spreadRewardAccumulator !== undefined &&
      (obj.spreadRewardAccumulator = message.spreadRewardAccumulator
        ? AccumObject.toJSON(message.spreadRewardAccumulator)
        : undefined);
    if (message.incentivesAccumulators) {
      obj.incentivesAccumulators = message.incentivesAccumulators.map((e) =>
        e ? AccumObject.toJSON(e) : undefined,
      );
    } else {
      obj.incentivesAccumulators = [];
    }
    if (message.incentiveRecords) {
      obj.incentiveRecords = message.incentiveRecords.map((e) => (e ? IncentiveRecord.toJSON(e) : undefined));
    } else {
      obj.incentiveRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolData>, I>>(object: I): PoolData {
    const message = createBasePoolData();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Any.fromPartial(object.pool);
    }
    message.ticks = object.ticks?.map((e) => FullTick.fromPartial(e)) || [];
    if (object.spreadRewardAccumulator !== undefined && object.spreadRewardAccumulator !== null) {
      message.spreadRewardAccumulator = AccumObject.fromPartial(object.spreadRewardAccumulator);
    }
    message.incentivesAccumulators =
      object.incentivesAccumulators?.map((e) => AccumObject.fromPartial(e)) || [];
    message.incentiveRecords = object.incentiveRecords?.map((e) => IncentiveRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBasePositionData(): PositionData {
  return {
    position: undefined,
    lockId: BigInt(0),
    spreadRewardAccumRecord: Record.fromPartial({}),
    uptimeAccumRecords: [],
  };
}
export const PositionData = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData",
  encode(message: PositionData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.spreadRewardAccumRecord !== undefined) {
      Record.encode(message.spreadRewardAccumRecord, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.uptimeAccumRecords) {
      Record.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.lockId = reader.uint64();
          break;
        case 3:
          message.spreadRewardAccumRecord = Record.decode(reader, reader.uint32());
          break;
        case 4:
          message.uptimeAccumRecords.push(Record.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionData {
    const obj = createBasePositionData();
    if (isSet(object.position)) obj.position = Position.fromJSON(object.position);
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.spreadRewardAccumRecord))
      obj.spreadRewardAccumRecord = Record.fromJSON(object.spreadRewardAccumRecord);
    if (Array.isArray(object?.uptimeAccumRecords))
      obj.uptimeAccumRecords = object.uptimeAccumRecords.map((e: any) => Record.fromJSON(e));
    return obj;
  },
  toJSON(message: PositionData): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.spreadRewardAccumRecord !== undefined &&
      (obj.spreadRewardAccumRecord = message.spreadRewardAccumRecord
        ? Record.toJSON(message.spreadRewardAccumRecord)
        : undefined);
    if (message.uptimeAccumRecords) {
      obj.uptimeAccumRecords = message.uptimeAccumRecords.map((e) => (e ? Record.toJSON(e) : undefined));
    } else {
      obj.uptimeAccumRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PositionData>, I>>(object: I): PositionData {
    const message = createBasePositionData();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromPartial(object.position);
    }
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    if (object.spreadRewardAccumRecord !== undefined && object.spreadRewardAccumRecord !== null) {
      message.spreadRewardAccumRecord = Record.fromPartial(object.spreadRewardAccumRecord);
    }
    message.uptimeAccumRecords = object.uptimeAccumRecords?.map((e) => Record.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolData: [],
    positionData: [],
    nextPositionId: BigInt(0),
    nextIncentiveRecordId: BigInt(0),
    incentivesAccumulatorPoolIdMigrationThreshold: BigInt(0),
    spreadFactorPoolIdMigrationThreshold: BigInt(0),
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolData) {
      PoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.positionData) {
      PositionData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextPositionId !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextPositionId);
    }
    if (message.nextIncentiveRecordId !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextIncentiveRecordId);
    }
    if (message.incentivesAccumulatorPoolIdMigrationThreshold !== BigInt(0)) {
      writer.uint32(48).uint64(message.incentivesAccumulatorPoolIdMigrationThreshold);
    }
    if (message.spreadFactorPoolIdMigrationThreshold !== BigInt(0)) {
      writer.uint32(56).uint64(message.spreadFactorPoolIdMigrationThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolData.push(PoolData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.positionData.push(PositionData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nextPositionId = reader.uint64();
          break;
        case 5:
          message.nextIncentiveRecordId = reader.uint64();
          break;
        case 6:
          message.incentivesAccumulatorPoolIdMigrationThreshold = reader.uint64();
          break;
        case 7:
          message.spreadFactorPoolIdMigrationThreshold = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.poolData)) obj.poolData = object.poolData.map((e: any) => PoolData.fromJSON(e));
    if (Array.isArray(object?.positionData))
      obj.positionData = object.positionData.map((e: any) => PositionData.fromJSON(e));
    if (isSet(object.nextPositionId)) obj.nextPositionId = BigInt(object.nextPositionId.toString());
    if (isSet(object.nextIncentiveRecordId))
      obj.nextIncentiveRecordId = BigInt(object.nextIncentiveRecordId.toString());
    if (isSet(object.incentivesAccumulatorPoolIdMigrationThreshold))
      obj.incentivesAccumulatorPoolIdMigrationThreshold = BigInt(
        object.incentivesAccumulatorPoolIdMigrationThreshold.toString(),
      );
    if (isSet(object.spreadFactorPoolIdMigrationThreshold))
      obj.spreadFactorPoolIdMigrationThreshold = BigInt(
        object.spreadFactorPoolIdMigrationThreshold.toString(),
      );
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolData) {
      obj.poolData = message.poolData.map((e) => (e ? PoolData.toJSON(e) : undefined));
    } else {
      obj.poolData = [];
    }
    if (message.positionData) {
      obj.positionData = message.positionData.map((e) => (e ? PositionData.toJSON(e) : undefined));
    } else {
      obj.positionData = [];
    }
    message.nextPositionId !== undefined &&
      (obj.nextPositionId = (message.nextPositionId || BigInt(0)).toString());
    message.nextIncentiveRecordId !== undefined &&
      (obj.nextIncentiveRecordId = (message.nextIncentiveRecordId || BigInt(0)).toString());
    message.incentivesAccumulatorPoolIdMigrationThreshold !== undefined &&
      (obj.incentivesAccumulatorPoolIdMigrationThreshold = (
        message.incentivesAccumulatorPoolIdMigrationThreshold || BigInt(0)
      ).toString());
    message.spreadFactorPoolIdMigrationThreshold !== undefined &&
      (obj.spreadFactorPoolIdMigrationThreshold = (
        message.spreadFactorPoolIdMigrationThreshold || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.poolData = object.poolData?.map((e) => PoolData.fromPartial(e)) || [];
    message.positionData = object.positionData?.map((e) => PositionData.fromPartial(e)) || [];
    if (object.nextPositionId !== undefined && object.nextPositionId !== null) {
      message.nextPositionId = BigInt(object.nextPositionId.toString());
    }
    if (object.nextIncentiveRecordId !== undefined && object.nextIncentiveRecordId !== null) {
      message.nextIncentiveRecordId = BigInt(object.nextIncentiveRecordId.toString());
    }
    if (
      object.incentivesAccumulatorPoolIdMigrationThreshold !== undefined &&
      object.incentivesAccumulatorPoolIdMigrationThreshold !== null
    ) {
      message.incentivesAccumulatorPoolIdMigrationThreshold = BigInt(
        object.incentivesAccumulatorPoolIdMigrationThreshold.toString(),
      );
    }
    if (
      object.spreadFactorPoolIdMigrationThreshold !== undefined &&
      object.spreadFactorPoolIdMigrationThreshold !== null
    ) {
      message.spreadFactorPoolIdMigrationThreshold = BigInt(
        object.spreadFactorPoolIdMigrationThreshold.toString(),
      );
    }
    return message;
  },
};
function createBaseAccumObject(): AccumObject {
  return {
    name: "",
    accumContent: undefined,
  };
}
export const AccumObject = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject",
  encode(message: AccumObject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.accumContent !== undefined) {
      AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccumObject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.accumContent = AccumulatorContent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccumObject {
    const obj = createBaseAccumObject();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.accumContent)) obj.accumContent = AccumulatorContent.fromJSON(object.accumContent);
    return obj;
  },
  toJSON(message: AccumObject): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.accumContent !== undefined &&
      (obj.accumContent = message.accumContent ? AccumulatorContent.toJSON(message.accumContent) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccumObject>, I>>(object: I): AccumObject {
    const message = createBaseAccumObject();
    message.name = object.name ?? "";
    if (object.accumContent !== undefined && object.accumContent !== null) {
      message.accumContent = AccumulatorContent.fromPartial(object.accumContent);
    }
    return message;
  },
};
