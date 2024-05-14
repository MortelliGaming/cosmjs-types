/* eslint-disable */
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
export interface TickInfo {
  liquidityGross: string;
  liquidityNet: string;
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
  /**
   * uptime_trackers is a container encapsulating the uptime trackers.
   * We use a container instead of a "repeated UptimeTracker" directly
   * because we need the ability to serialize and deserialize the
   * container easily for events when crossing a tick.
   */
  uptimeTrackers: UptimeTrackers;
}
export interface UptimeTrackers {
  list: UptimeTracker[];
}
export interface UptimeTracker {
  uptimeGrowthOutside: DecCoin[];
}
function createBaseTickInfo(): TickInfo {
  return {
    liquidityGross: "",
    liquidityNet: "",
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: UptimeTrackers.fromPartial({}),
  };
}
export const TickInfo = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo",
  encode(message: TickInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityGross !== "") {
      writer.uint32(10).string(message.liquidityGross);
    }
    if (message.liquidityNet !== "") {
      writer.uint32(18).string(message.liquidityNet);
    }
    for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.uptimeTrackers !== undefined) {
      UptimeTrackers.encode(message.uptimeTrackers, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityGross = reader.string();
          break;
        case 2:
          message.liquidityNet = reader.string();
          break;
        case 3:
          message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(
            DecCoin.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.uptimeTrackers = UptimeTrackers.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickInfo {
    const obj = createBaseTickInfo();
    if (isSet(object.liquidityGross)) obj.liquidityGross = String(object.liquidityGross);
    if (isSet(object.liquidityNet)) obj.liquidityNet = String(object.liquidityNet);
    if (Array.isArray(object?.spreadRewardGrowthOppositeDirectionOfLastTraversal))
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
        object.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e: any) => DecCoin.fromJSON(e));
    if (isSet(object.uptimeTrackers)) obj.uptimeTrackers = UptimeTrackers.fromJSON(object.uptimeTrackers);
    return obj;
  },
  toJSON(message: TickInfo): unknown {
    const obj: any = {};
    message.liquidityGross !== undefined && (obj.liquidityGross = message.liquidityGross);
    message.liquidityNet !== undefined && (obj.liquidityNet = message.liquidityNet);
    if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e) =>
          e ? DecCoin.toJSON(e) : undefined,
        );
    } else {
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal = [];
    }
    message.uptimeTrackers !== undefined &&
      (obj.uptimeTrackers = message.uptimeTrackers
        ? UptimeTrackers.toJSON(message.uptimeTrackers)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickInfo>, I>>(object: I): TickInfo {
    const message = createBaseTickInfo();
    message.liquidityGross = object.liquidityGross ?? "";
    message.liquidityNet = object.liquidityNet ?? "";
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
      object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map((e) => DecCoin.fromPartial(e)) || [];
    if (object.uptimeTrackers !== undefined && object.uptimeTrackers !== null) {
      message.uptimeTrackers = UptimeTrackers.fromPartial(object.uptimeTrackers);
    }
    return message;
  },
};
function createBaseUptimeTrackers(): UptimeTrackers {
  return {
    list: [],
  };
}
export const UptimeTrackers = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTrackers",
  encode(message: UptimeTrackers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      UptimeTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UptimeTrackers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUptimeTrackers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(UptimeTracker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UptimeTrackers {
    const obj = createBaseUptimeTrackers();
    if (Array.isArray(object?.list)) obj.list = object.list.map((e: any) => UptimeTracker.fromJSON(e));
    return obj;
  },
  toJSON(message: UptimeTrackers): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map((e) => (e ? UptimeTracker.toJSON(e) : undefined));
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UptimeTrackers>, I>>(object: I): UptimeTrackers {
    const message = createBaseUptimeTrackers();
    message.list = object.list?.map((e) => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUptimeTracker(): UptimeTracker {
  return {
    uptimeGrowthOutside: [],
  };
}
export const UptimeTracker = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
  encode(message: UptimeTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uptimeGrowthOutside) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UptimeTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUptimeTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uptimeGrowthOutside.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UptimeTracker {
    const obj = createBaseUptimeTracker();
    if (Array.isArray(object?.uptimeGrowthOutside))
      obj.uptimeGrowthOutside = object.uptimeGrowthOutside.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: UptimeTracker): unknown {
    const obj: any = {};
    if (message.uptimeGrowthOutside) {
      obj.uptimeGrowthOutside = message.uptimeGrowthOutside.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.uptimeGrowthOutside = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UptimeTracker>, I>>(object: I): UptimeTracker {
    const message = createBaseUptimeTracker();
    message.uptimeGrowthOutside = object.uptimeGrowthOutside?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
