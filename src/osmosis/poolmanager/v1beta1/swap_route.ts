/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
export interface SwapAmountInRoute {
  poolId: bigint;
  tokenOutDenom: string;
}
export interface SwapAmountOutRoute {
  poolId: bigint;
  tokenInDenom: string;
}
export interface SwapAmountInSplitRoute {
  pools: SwapAmountInRoute[];
  tokenInAmount: string;
}
export interface SwapAmountOutSplitRoute {
  pools: SwapAmountOutRoute[];
  tokenOutAmount: string;
}
function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: BigInt(0),
    tokenOutDenom: "",
  };
}
export const SwapAmountInRoute = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInRoute",
  encode(message: SwapAmountInRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountInRoute {
    const obj = createBaseSwapAmountInRoute();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenOutDenom)) obj.tokenOutDenom = String(object.tokenOutDenom);
    return obj;
  },
  toJSON(message: SwapAmountInRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapAmountInRoute>, I>>(object: I): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
};
function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    poolId: BigInt(0),
    tokenInDenom: "",
  };
}
export const SwapAmountOutRoute = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutRoute",
  encode(message: SwapAmountOutRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountOutRoute {
    const obj = createBaseSwapAmountOutRoute();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    return obj;
  },
  toJSON(message: SwapAmountOutRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapAmountOutRoute>, I>>(object: I): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  },
};
function createBaseSwapAmountInSplitRoute(): SwapAmountInSplitRoute {
  return {
    pools: [],
    tokenInAmount: "",
  };
}
export const SwapAmountInSplitRoute = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute",
  encode(message: SwapAmountInSplitRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenInAmount !== "") {
      writer.uint32(18).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInSplitRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInSplitRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountInSplitRoute {
    const obj = createBaseSwapAmountInSplitRoute();
    if (Array.isArray(object?.pools)) obj.pools = object.pools.map((e: any) => SwapAmountInRoute.fromJSON(e));
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  toJSON(message: SwapAmountInSplitRoute): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? SwapAmountInRoute.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapAmountInSplitRoute>, I>>(object: I): SwapAmountInSplitRoute {
    const message = createBaseSwapAmountInSplitRoute();
    message.pools = object.pools?.map((e) => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
};
function createBaseSwapAmountOutSplitRoute(): SwapAmountOutSplitRoute {
  return {
    pools: [],
    tokenOutAmount: "",
  };
}
export const SwapAmountOutSplitRoute = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute",
  encode(message: SwapAmountOutSplitRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      SwapAmountOutRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOutAmount !== "") {
      writer.uint32(18).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutSplitRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutSplitRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountOutSplitRoute {
    const obj = createBaseSwapAmountOutSplitRoute();
    if (Array.isArray(object?.pools))
      obj.pools = object.pools.map((e: any) => SwapAmountOutRoute.fromJSON(e));
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  toJSON(message: SwapAmountOutSplitRoute): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? SwapAmountOutRoute.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapAmountOutSplitRoute>, I>>(object: I): SwapAmountOutSplitRoute {
    const message = createBaseSwapAmountOutSplitRoute();
    message.pools = object.pools?.map((e) => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
};
