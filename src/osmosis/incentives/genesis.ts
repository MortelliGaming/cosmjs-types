/* eslint-disable */
import { Params } from "./params";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { Group } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.incentives";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /**
   * gauges are all gauges (not including group gauges) that should exist at
   * genesis
   */
  gauges: Gauge[];
  /**
   * lockable_durations are all lockup durations that gauges can be locked for
   * in order to receive incentives
   */
  lockableDurations: Duration[];
  /**
   * last_gauge_id is what the gauge number will increment from when creating
   * the next gauge after genesis
   */
  lastGaugeId: bigint;
  /** gauges are all group gauges that should exist at genesis */
  groupGauges: Gauge[];
  /** groups are all the groups that should exist at genesis */
  groups: Group[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    gauges: [],
    lockableDurations: [],
    lastGaugeId: BigInt(0),
    groupGauges: [],
    groups: [],
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.incentives.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastGaugeId !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastGaugeId);
    }
    for (const v of message.groupGauges) {
      Gauge.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastGaugeId = reader.uint64();
          break;
        case 5:
          message.groupGauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 6:
          message.groups.push(Group.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.gauges)) obj.gauges = object.gauges.map((e: any) => Gauge.fromJSON(e));
    if (Array.isArray(object?.lockableDurations))
      obj.lockableDurations = object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    if (isSet(object.lastGaugeId)) obj.lastGaugeId = BigInt(object.lastGaugeId.toString());
    if (Array.isArray(object?.groupGauges))
      obj.groupGauges = object.groupGauges.map((e: any) => Gauge.fromJSON(e));
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => Group.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.gauges) {
      obj.gauges = message.gauges.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.gauges = [];
    }
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map((e) => (e ? Duration.toJSON(e) : undefined));
    } else {
      obj.lockableDurations = [];
    }
    message.lastGaugeId !== undefined && (obj.lastGaugeId = (message.lastGaugeId || BigInt(0)).toString());
    if (message.groupGauges) {
      obj.groupGauges = message.groupGauges.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.groupGauges = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? Group.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.gauges = object.gauges?.map((e) => Gauge.fromPartial(e)) || [];
    message.lockableDurations = object.lockableDurations?.map((e) => Duration.fromPartial(e)) || [];
    if (object.lastGaugeId !== undefined && object.lastGaugeId !== null) {
      message.lastGaugeId = BigInt(object.lastGaugeId.toString());
    }
    message.groupGauges = object.groupGauges?.map((e) => Gauge.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};
