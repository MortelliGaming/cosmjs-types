/* eslint-disable */
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.accum.v1beta1";
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContent {
  accumValue: DecCoin[];
  totalShares: string;
}
export interface Options {}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface Record {
  /**
   * num_shares is the number of shares belonging to the position associated
   * with this record.
   */
  numShares: string;
  /**
   * accum_value_per_share is the subset of coins per shar of the global
   * accumulator value that allows to infer how much a position is entitled to
   * per share that it owns.
   *
   * In the default case with no intervals, this value equals to the global
   * accumulator value at the time of the position creation, the last update or
   * reward claim.
   *
   * In the interval case such as concentrated liquidity, this value equals to
   * the global growth of rewards inside the interval during one of: the time of
   * the position creation, the last update or reward claim. Note, that
   * immediately prior to claiming or updating rewards, this value must be
   * updated to "the growth inside at the time of last update + the growth
   * outside at the time of the current block". This is so that the claiming
   * logic can subtract this updated value from the global accumulator value to
   * get the growth inside the interval from the time of last update up until
   * the current block time.
   */
  accumValuePerShare: DecCoin[];
  /**
   * unclaimed_rewards_total is the total amount of unclaimed rewards that the
   * position is entitled to. This value is updated whenever shares are added or
   * removed from an existing position. We also expose API for manually updating
   * this value for some custom use cases such as merging pre-existing positions
   * into a single one.
   */
  unclaimedRewardsTotal: DecCoin[];
  options?: Options;
}
function createBaseAccumulatorContent(): AccumulatorContent {
  return {
    accumValue: [],
    totalShares: "",
  };
}
export const AccumulatorContent = {
  typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent",
  encode(message: AccumulatorContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accumValue) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(18).string(message.totalShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccumulatorContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccumulatorContent {
    const obj = createBaseAccumulatorContent();
    if (Array.isArray(object?.accumValue))
      obj.accumValue = object.accumValue.map((e: any) => DecCoin.fromJSON(e));
    if (isSet(object.totalShares)) obj.totalShares = String(object.totalShares);
    return obj;
  },
  toJSON(message: AccumulatorContent): unknown {
    const obj: any = {};
    if (message.accumValue) {
      obj.accumValue = message.accumValue.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.accumValue = [];
    }
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccumulatorContent>, I>>(object: I): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accumValue?.map((e) => DecCoin.fromPartial(e)) || [];
    message.totalShares = object.totalShares ?? "";
    return message;
  },
};
function createBaseOptions(): Options {
  return {};
}
export const Options = {
  typeUrl: "/osmosis.accum.v1beta1.Options",
  encode(_: Options, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Options {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
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
  fromJSON(_: any): Options {
    const obj = createBaseOptions();
    return obj;
  },
  toJSON(_: Options): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Options>, I>>(_: I): Options {
    const message = createBaseOptions();
    return message;
  },
};
function createBaseRecord(): Record {
  return {
    numShares: "",
    accumValuePerShare: [],
    unclaimedRewardsTotal: [],
    options: undefined,
  };
}
export const Record = {
  typeUrl: "/osmosis.accum.v1beta1.Record",
  encode(message: Record, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numShares !== "") {
      writer.uint32(10).string(message.numShares);
    }
    for (const v of message.accumValuePerShare) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unclaimedRewardsTotal) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numShares = reader.string();
          break;
        case 2:
          message.accumValuePerShare.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unclaimedRewardsTotal.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Record {
    const obj = createBaseRecord();
    if (isSet(object.numShares)) obj.numShares = String(object.numShares);
    if (Array.isArray(object?.accumValuePerShare))
      obj.accumValuePerShare = object.accumValuePerShare.map((e: any) => DecCoin.fromJSON(e));
    if (Array.isArray(object?.unclaimedRewardsTotal))
      obj.unclaimedRewardsTotal = object.unclaimedRewardsTotal.map((e: any) => DecCoin.fromJSON(e));
    if (isSet(object.options)) obj.options = Options.fromJSON(object.options);
    return obj;
  },
  toJSON(message: Record): unknown {
    const obj: any = {};
    message.numShares !== undefined && (obj.numShares = message.numShares);
    if (message.accumValuePerShare) {
      obj.accumValuePerShare = message.accumValuePerShare.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.accumValuePerShare = [];
    }
    if (message.unclaimedRewardsTotal) {
      obj.unclaimedRewardsTotal = message.unclaimedRewardsTotal.map((e) =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.unclaimedRewardsTotal = [];
    }
    message.options !== undefined &&
      (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Record>, I>>(object: I): Record {
    const message = createBaseRecord();
    message.numShares = object.numShares ?? "";
    message.accumValuePerShare = object.accumValuePerShare?.map((e) => DecCoin.fromPartial(e)) || [];
    message.unclaimedRewardsTotal = object.unclaimedRewardsTotal?.map((e) => DecCoin.fromPartial(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromPartial(object.options);
    }
    return message;
  },
};
