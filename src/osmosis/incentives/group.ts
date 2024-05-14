/* eslint-disable */
import { Gauge } from "./gauge";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.incentives";
/** SplittingPolicy determines the way we want to split incentives in groupGauges */
export enum SplittingPolicy {
  ByVolume = 0,
  UNRECOGNIZED = -1,
}
export function splittingPolicyFromJSON(object: any): SplittingPolicy {
  switch (object) {
    case 0:
    case "ByVolume":
      return SplittingPolicy.ByVolume;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SplittingPolicy.UNRECOGNIZED;
  }
}
export function splittingPolicyToJSON(object: SplittingPolicy): string {
  switch (object) {
    case SplittingPolicy.ByVolume:
      return "ByVolume";
    case SplittingPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfo {
  totalWeight: string;
  gaugeRecords: InternalGaugeRecord[];
}
export interface InternalGaugeRecord {
  gaugeId: bigint;
  /**
   * CurrentWeight is the current weight of this gauge being distributed to for
   * this epoch. For instance, for volume splitting policy, this stores the
   * volume generated in the last epoch of the linked pool.
   */
  currentWeight: string;
  /**
   * CumulativeWeight serves as a snapshot of the accumulator being tracked
   * based on splitting policy. For instance, for volume splitting policy, this
   * stores the cumulative volume for the linked pool at time of last update.
   */
  cumulativeWeight: string;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface Group {
  groupGaugeId: bigint;
  internalGaugeInfo: InternalGaugeInfo;
  splittingPolicy: SplittingPolicy;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroup {
  /**
   * CreateGroup is called via governance to create a new group.
   * It takes an array of pool IDs to split the incentives across.
   */
  poolIds: bigint[];
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGauge {
  group: Group;
  gauge: Gauge;
}
function createBaseInternalGaugeInfo(): InternalGaugeInfo {
  return {
    totalWeight: "",
    gaugeRecords: [],
  };
}
export const InternalGaugeInfo = {
  typeUrl: "/osmosis.incentives.InternalGaugeInfo",
  encode(message: InternalGaugeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    for (const v of message.gaugeRecords) {
      InternalGaugeRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InternalGaugeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalGaugeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.gaugeRecords.push(InternalGaugeRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InternalGaugeInfo {
    const obj = createBaseInternalGaugeInfo();
    if (isSet(object.totalWeight)) obj.totalWeight = String(object.totalWeight);
    if (Array.isArray(object?.gaugeRecords))
      obj.gaugeRecords = object.gaugeRecords.map((e: any) => InternalGaugeRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: InternalGaugeInfo): unknown {
    const obj: any = {};
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    if (message.gaugeRecords) {
      obj.gaugeRecords = message.gaugeRecords.map((e) => (e ? InternalGaugeRecord.toJSON(e) : undefined));
    } else {
      obj.gaugeRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InternalGaugeInfo>, I>>(object: I): InternalGaugeInfo {
    const message = createBaseInternalGaugeInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.gaugeRecords = object.gaugeRecords?.map((e) => InternalGaugeRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBaseInternalGaugeRecord(): InternalGaugeRecord {
  return {
    gaugeId: BigInt(0),
    currentWeight: "",
    cumulativeWeight: "",
  };
}
export const InternalGaugeRecord = {
  typeUrl: "/osmosis.incentives.InternalGaugeRecord",
  encode(message: InternalGaugeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.currentWeight !== "") {
      writer.uint32(18).string(message.currentWeight);
    }
    if (message.cumulativeWeight !== "") {
      writer.uint32(26).string(message.cumulativeWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InternalGaugeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalGaugeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.currentWeight = reader.string();
          break;
        case 3:
          message.cumulativeWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InternalGaugeRecord {
    const obj = createBaseInternalGaugeRecord();
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    if (isSet(object.currentWeight)) obj.currentWeight = String(object.currentWeight);
    if (isSet(object.cumulativeWeight)) obj.cumulativeWeight = String(object.cumulativeWeight);
    return obj;
  },
  toJSON(message: InternalGaugeRecord): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    message.currentWeight !== undefined && (obj.currentWeight = message.currentWeight);
    message.cumulativeWeight !== undefined && (obj.cumulativeWeight = message.cumulativeWeight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InternalGaugeRecord>, I>>(object: I): InternalGaugeRecord {
    const message = createBaseInternalGaugeRecord();
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    message.currentWeight = object.currentWeight ?? "";
    message.cumulativeWeight = object.cumulativeWeight ?? "";
    return message;
  },
};
function createBaseGroup(): Group {
  return {
    groupGaugeId: BigInt(0),
    internalGaugeInfo: InternalGaugeInfo.fromPartial({}),
    splittingPolicy: 0,
  };
}
export const Group = {
  typeUrl: "/osmosis.incentives.Group",
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupGaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupGaugeId);
    }
    if (message.internalGaugeInfo !== undefined) {
      InternalGaugeInfo.encode(message.internalGaugeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.splittingPolicy !== 0) {
      writer.uint32(24).int32(message.splittingPolicy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupGaugeId = reader.uint64();
          break;
        case 2:
          message.internalGaugeInfo = InternalGaugeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.splittingPolicy = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Group {
    const obj = createBaseGroup();
    if (isSet(object.groupGaugeId)) obj.groupGaugeId = BigInt(object.groupGaugeId.toString());
    if (isSet(object.internalGaugeInfo))
      obj.internalGaugeInfo = InternalGaugeInfo.fromJSON(object.internalGaugeInfo);
    if (isSet(object.splittingPolicy)) obj.splittingPolicy = splittingPolicyFromJSON(object.splittingPolicy);
    return obj;
  },
  toJSON(message: Group): unknown {
    const obj: any = {};
    message.groupGaugeId !== undefined && (obj.groupGaugeId = (message.groupGaugeId || BigInt(0)).toString());
    message.internalGaugeInfo !== undefined &&
      (obj.internalGaugeInfo = message.internalGaugeInfo
        ? InternalGaugeInfo.toJSON(message.internalGaugeInfo)
        : undefined);
    message.splittingPolicy !== undefined &&
      (obj.splittingPolicy = splittingPolicyToJSON(message.splittingPolicy));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    if (object.groupGaugeId !== undefined && object.groupGaugeId !== null) {
      message.groupGaugeId = BigInt(object.groupGaugeId.toString());
    }
    if (object.internalGaugeInfo !== undefined && object.internalGaugeInfo !== null) {
      message.internalGaugeInfo = InternalGaugeInfo.fromPartial(object.internalGaugeInfo);
    }
    message.splittingPolicy = object.splittingPolicy ?? 0;
    return message;
  },
};
function createBaseCreateGroup(): CreateGroup {
  return {
    poolIds: [],
  };
}
export const CreateGroup = {
  typeUrl: "/osmosis.incentives.CreateGroup",
  encode(message: CreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateGroup {
    const obj = createBaseCreateGroup();
    if (Array.isArray(object?.poolIds)) obj.poolIds = object.poolIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: CreateGroup): unknown {
    const obj: any = {};
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.poolIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroup>, I>>(object: I): CreateGroup {
    const message = createBaseCreateGroup();
    message.poolIds = object.poolIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseGroupsWithGauge(): GroupsWithGauge {
  return {
    group: Group.fromPartial({}),
    gauge: Gauge.fromPartial({}),
  };
}
export const GroupsWithGauge = {
  typeUrl: "/osmosis.incentives.GroupsWithGauge",
  encode(message: GroupsWithGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupsWithGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsWithGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        case 2:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupsWithGauge {
    const obj = createBaseGroupsWithGauge();
    if (isSet(object.group)) obj.group = Group.fromJSON(object.group);
    if (isSet(object.gauge)) obj.gauge = Gauge.fromJSON(object.gauge);
    return obj;
  },
  toJSON(message: GroupsWithGauge): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupsWithGauge>, I>>(object: I): GroupsWithGauge {
    const message = createBaseGroupsWithGauge();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    }
    if (object.gauge !== undefined && object.gauge !== null) {
      message.gauge = Gauge.fromPartial(object.gauge);
    }
    return message;
  },
};
