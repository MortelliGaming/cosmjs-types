/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "mineplex.mint.v1beta1";
export interface RewardPeriod {
  fromHeight: bigint;
  toHeight: bigint;
  rewardPerBlock: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  periods: RewardPeriod[];
}
function createBaseRewardPeriod(): RewardPeriod {
  return {
    fromHeight: BigInt(0),
    toHeight: BigInt(0),
    rewardPerBlock: "",
  };
}
export const RewardPeriod = {
  typeUrl: "/mineplex.mint.v1beta1.RewardPeriod",
  encode(message: RewardPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.fromHeight);
    }
    if (message.toHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.toHeight);
    }
    if (message.rewardPerBlock !== "") {
      writer.uint32(26).string(message.rewardPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardPeriod {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromHeight = reader.int64();
          break;
        case 2:
          message.toHeight = reader.int64();
          break;
        case 3:
          message.rewardPerBlock = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardPeriod {
    const obj = createBaseRewardPeriod();
    if (isSet(object.fromHeight)) obj.fromHeight = BigInt(object.fromHeight.toString());
    if (isSet(object.toHeight)) obj.toHeight = BigInt(object.toHeight.toString());
    if (isSet(object.rewardPerBlock)) obj.rewardPerBlock = String(object.rewardPerBlock);
    return obj;
  },
  toJSON(message: RewardPeriod): unknown {
    const obj: any = {};
    message.fromHeight !== undefined && (obj.fromHeight = (message.fromHeight || BigInt(0)).toString());
    message.toHeight !== undefined && (obj.toHeight = (message.toHeight || BigInt(0)).toString());
    message.rewardPerBlock !== undefined && (obj.rewardPerBlock = message.rewardPerBlock);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardPeriod>, I>>(object: I): RewardPeriod {
    const message = createBaseRewardPeriod();
    if (object.fromHeight !== undefined && object.fromHeight !== null) {
      message.fromHeight = BigInt(object.fromHeight.toString());
    }
    if (object.toHeight !== undefined && object.toHeight !== null) {
      message.toHeight = BigInt(object.toHeight.toString());
    }
    message.rewardPerBlock = object.rewardPerBlock ?? "";
    return message;
  },
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    periods: [],
  };
}
export const Params = {
  typeUrl: "/mineplex.mint.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    for (const v of message.periods) {
      RewardPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.periods.push(RewardPeriod.decode(reader, reader.uint32()));
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
    if (isSet(object.mintDenom)) obj.mintDenom = String(object.mintDenom);
    if (Array.isArray(object?.periods))
      obj.periods = object.periods.map((e: any) => RewardPeriod.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    if (message.periods) {
      obj.periods = message.periods.map((e) => (e ? RewardPeriod.toJSON(e) : undefined));
    } else {
      obj.periods = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.periods = object.periods?.map((e) => RewardPeriod.fromPartial(e)) || [];
    return message;
  },
};
