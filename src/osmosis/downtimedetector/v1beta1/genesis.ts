/* eslint-disable */
import { Downtime, downtimeFromJSON, downtimeToJSON } from "./downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.downtimedetector.v1beta1";
export interface GenesisDowntimeEntry {
  duration: Downtime;
  lastDowntime: Timestamp;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  downtimes: GenesisDowntimeEntry[];
  lastBlockTime: Timestamp;
}
function createBaseGenesisDowntimeEntry(): GenesisDowntimeEntry {
  return {
    duration: 0,
    lastDowntime: Timestamp.fromPartial({}),
  };
}
export const GenesisDowntimeEntry = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
  encode(message: GenesisDowntimeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.lastDowntime !== undefined) {
      Timestamp.encode(message.lastDowntime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDowntimeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDowntimeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32() as any;
          break;
        case 2:
          message.lastDowntime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisDowntimeEntry {
    const obj = createBaseGenesisDowntimeEntry();
    if (isSet(object.duration)) obj.duration = downtimeFromJSON(object.duration);
    if (isSet(object.lastDowntime)) obj.lastDowntime = fromJsonTimestamp(object.lastDowntime);
    return obj;
  },
  toJSON(message: GenesisDowntimeEntry): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = downtimeToJSON(message.duration));
    message.lastDowntime !== undefined &&
      (obj.lastDowntime = fromTimestamp(message.lastDowntime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisDowntimeEntry>, I>>(object: I): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    message.duration = object.duration ?? 0;
    if (object.lastDowntime !== undefined && object.lastDowntime !== null) {
      message.lastDowntime = Timestamp.fromPartial(object.lastDowntime);
    }
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    downtimes: [],
    lastBlockTime: Timestamp.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(message.lastBlockTime, writer.uint32(18).fork()).ldelim();
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
          message.downtimes.push(GenesisDowntimeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastBlockTime = Timestamp.decode(reader, reader.uint32());
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
    if (Array.isArray(object?.downtimes))
      obj.downtimes = object.downtimes.map((e: any) => GenesisDowntimeEntry.fromJSON(e));
    if (isSet(object.lastBlockTime)) obj.lastBlockTime = fromJsonTimestamp(object.lastBlockTime);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map((e) => (e ? GenesisDowntimeEntry.toJSON(e) : undefined));
    } else {
      obj.downtimes = [];
    }
    message.lastBlockTime !== undefined &&
      (obj.lastBlockTime = fromTimestamp(message.lastBlockTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.downtimes = object.downtimes?.map((e) => GenesisDowntimeEntry.fromPartial(e)) || [];
    if (object.lastBlockTime !== undefined && object.lastBlockTime !== null) {
      message.lastBlockTime = Timestamp.fromPartial(object.lastBlockTime);
    }
    return message;
  },
};
