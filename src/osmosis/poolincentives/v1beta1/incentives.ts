/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  mintedDenom: string;
}
export interface LockableDurationsInfo {
  lockableDurations: Duration[];
}
export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}
export interface DistrRecord {
  gaugeId: bigint;
  weight: string;
}
export interface PoolToGauge {
  poolId: bigint;
  gaugeId: bigint;
  duration: Duration;
}
export interface AnyPoolToInternalGauges {
  poolToGauge: PoolToGauge[];
}
export interface ConcentratedPoolToNoLockGauges {
  poolToGauge: PoolToGauge[];
}
function createBaseParams(): Params {
  return {
    mintedDenom: "",
  };
}
export const Params = {
  typeUrl: "/osmosis.poolincentives.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintedDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.mintedDenom)) obj.mintedDenom = String(object.mintedDenom);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintedDenom !== undefined && (obj.mintedDenom = message.mintedDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.mintedDenom = object.mintedDenom ?? "";
    return message;
  },
};
function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockableDurations: [],
  };
}
export const LockableDurationsInfo = {
  typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
  encode(message: LockableDurationsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockableDurationsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockableDurationsInfo {
    const obj = createBaseLockableDurationsInfo();
    if (Array.isArray(object?.lockableDurations))
      obj.lockableDurations = object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    return obj;
  },
  toJSON(message: LockableDurationsInfo): unknown {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map((e) => (e ? Duration.toJSON(e) : undefined));
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LockableDurationsInfo>, I>>(object: I): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockableDurations?.map((e) => Duration.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDistrInfo(): DistrInfo {
  return {
    totalWeight: "",
    records: [],
  };
}
export const DistrInfo = {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
  encode(message: DistrInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistrInfo {
    const obj = createBaseDistrInfo();
    if (isSet(object.totalWeight)) obj.totalWeight = String(object.totalWeight);
    if (Array.isArray(object?.records)) obj.records = object.records.map((e: any) => DistrRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: DistrInfo): unknown {
    const obj: any = {};
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    if (message.records) {
      obj.records = message.records.map((e) => (e ? DistrRecord.toJSON(e) : undefined));
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DistrInfo>, I>>(object: I): DistrInfo {
    const message = createBaseDistrInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.records = object.records?.map((e) => DistrRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDistrRecord(): DistrRecord {
  return {
    gaugeId: BigInt(0),
    weight: "",
  };
}
export const DistrRecord = {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
  encode(message: DistrRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistrRecord {
    const obj = createBaseDistrRecord();
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: DistrRecord): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DistrRecord>, I>>(object: I): DistrRecord {
    const message = createBaseDistrRecord();
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    message.weight = object.weight ?? "";
    return message;
  },
};
function createBasePoolToGauge(): PoolToGauge {
  return {
    poolId: BigInt(0),
    gaugeId: BigInt(0),
    duration: Duration.fromPartial({}),
  };
}
export const PoolToGauge = {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
  encode(message: PoolToGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.gaugeId = reader.uint64();
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
  fromJSON(object: any): PoolToGauge {
    const obj = createBasePoolToGauge();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: PoolToGauge): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolToGauge>, I>>(object: I): PoolToGauge {
    const message = createBasePoolToGauge();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
};
function createBaseAnyPoolToInternalGauges(): AnyPoolToInternalGauges {
  return {
    poolToGauge: [],
  };
}
export const AnyPoolToInternalGauges = {
  typeUrl: "/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges",
  encode(message: AnyPoolToInternalGauges, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnyPoolToInternalGauges {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyPoolToInternalGauges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AnyPoolToInternalGauges {
    const obj = createBaseAnyPoolToInternalGauges();
    if (Array.isArray(object?.poolToGauge))
      obj.poolToGauge = object.poolToGauge.map((e: any) => PoolToGauge.fromJSON(e));
    return obj;
  },
  toJSON(message: AnyPoolToInternalGauges): unknown {
    const obj: any = {};
    if (message.poolToGauge) {
      obj.poolToGauge = message.poolToGauge.map((e) => (e ? PoolToGauge.toJSON(e) : undefined));
    } else {
      obj.poolToGauge = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AnyPoolToInternalGauges>, I>>(object: I): AnyPoolToInternalGauges {
    const message = createBaseAnyPoolToInternalGauges();
    message.poolToGauge = object.poolToGauge?.map((e) => PoolToGauge.fromPartial(e)) || [];
    return message;
  },
};
function createBaseConcentratedPoolToNoLockGauges(): ConcentratedPoolToNoLockGauges {
  return {
    poolToGauge: [],
  };
}
export const ConcentratedPoolToNoLockGauges = {
  typeUrl: "/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges",
  encode(
    message: ConcentratedPoolToNoLockGauges,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConcentratedPoolToNoLockGauges {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConcentratedPoolToNoLockGauges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConcentratedPoolToNoLockGauges {
    const obj = createBaseConcentratedPoolToNoLockGauges();
    if (Array.isArray(object?.poolToGauge))
      obj.poolToGauge = object.poolToGauge.map((e: any) => PoolToGauge.fromJSON(e));
    return obj;
  },
  toJSON(message: ConcentratedPoolToNoLockGauges): unknown {
    const obj: any = {};
    if (message.poolToGauge) {
      obj.poolToGauge = message.poolToGauge.map((e) => (e ? PoolToGauge.toJSON(e) : undefined));
    } else {
      obj.poolToGauge = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConcentratedPoolToNoLockGauges>, I>>(
    object: I,
  ): ConcentratedPoolToNoLockGauges {
    const message = createBaseConcentratedPoolToNoLockGauges();
    message.poolToGauge = object.poolToGauge?.map((e) => PoolToGauge.fromPartial(e)) || [];
    return message;
  },
};
