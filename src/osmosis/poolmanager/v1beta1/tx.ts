/* eslint-disable */
import {
  SwapAmountInRoute,
  SwapAmountOutRoute,
  SwapAmountInSplitRoute,
  SwapAmountOutSplitRoute,
} from "./swap_route";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountIn */
export interface MsgSplitRouteSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInSplitRoute[];
  tokenInDenom: string;
  tokenOutMinAmount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponse {
  tokenOutAmount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenInMaxAmount: string;
  tokenOut: Coin;
}
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
}
/** ===================== MsgSplitRouteSwapExactAmountOut */
export interface MsgSplitRouteSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutSplitRoute[];
  tokenOutDenom: string;
  tokenInMaxAmount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponse {
  tokenInAmount: string;
}
/** ===================== MsgSetDenomPairTakerFee */
export interface MsgSetDenomPairTakerFee {
  sender: string;
  denomPairTakerFee: DenomPairTakerFee[];
}
export interface MsgSetDenomPairTakerFeeResponse {
  success: boolean;
}
export interface DenomPairTakerFee {
  /**
   * denom0 and denom1 get automatically lexigographically sorted
   * when being stored, so the order of input here does not matter.
   */
  denom0: string;
  denom1: string;
  takerFee: string;
}
function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenIn: Coin.fromPartial({}),
    tokenOutMinAmount: "",
  };
}
export const MsgSwapExactAmountIn = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
  encode(message: MsgSwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountIn {
    const obj = createBaseMsgSwapExactAmountIn();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.routes))
      obj.routes = object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e));
    if (isSet(object.tokenIn)) obj.tokenIn = Coin.fromJSON(object.tokenIn);
    if (isSet(object.tokenOutMinAmount)) obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? SwapAmountInRoute.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountIn>, I>>(object: I): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map((e) => SwapAmountInRoute.fromPartial(e)) || [];
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromPartial(object.tokenIn);
    }
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  },
};
function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    tokenOutAmount: "",
  };
}
export const MsgSwapExactAmountInResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse",
  encode(message: MsgSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountInResponse {
    const obj = createBaseMsgSwapExactAmountInResponse();
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountInResponse>, I>>(
    object: I,
  ): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
};
function createBaseMsgSplitRouteSwapExactAmountIn(): MsgSplitRouteSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenInDenom: "",
    tokenOutMinAmount: "",
  };
}
export const MsgSplitRouteSwapExactAmountIn = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
  encode(
    message: MsgSplitRouteSwapExactAmountIn,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInSplitRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInSplitRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenInDenom = reader.string();
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSplitRouteSwapExactAmountIn {
    const obj = createBaseMsgSplitRouteSwapExactAmountIn();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.routes))
      obj.routes = object.routes.map((e: any) => SwapAmountInSplitRoute.fromJSON(e));
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    if (isSet(object.tokenOutMinAmount)) obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
    return obj;
  },
  toJSON(message: MsgSplitRouteSwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? SwapAmountInSplitRoute.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSplitRouteSwapExactAmountIn>, I>>(
    object: I,
  ): MsgSplitRouteSwapExactAmountIn {
    const message = createBaseMsgSplitRouteSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map((e) => SwapAmountInSplitRoute.fromPartial(e)) || [];
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  },
};
function createBaseMsgSplitRouteSwapExactAmountInResponse(): MsgSplitRouteSwapExactAmountInResponse {
  return {
    tokenOutAmount: "",
  };
}
export const MsgSplitRouteSwapExactAmountInResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse",
  encode(
    message: MsgSplitRouteSwapExactAmountInResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSplitRouteSwapExactAmountInResponse {
    const obj = createBaseMsgSplitRouteSwapExactAmountInResponse();
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  toJSON(message: MsgSplitRouteSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSplitRouteSwapExactAmountInResponse>, I>>(
    object: I,
  ): MsgSplitRouteSwapExactAmountInResponse {
    const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
};
function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenInMaxAmount: "",
    tokenOut: Coin.fromPartial({}),
  };
}
export const MsgSwapExactAmountOut = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
  encode(message: MsgSwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(26).string(message.tokenInMaxAmount);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenInMaxAmount = reader.string();
          break;
        case 4:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountOut {
    const obj = createBaseMsgSwapExactAmountOut();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.routes))
      obj.routes = object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e));
    if (isSet(object.tokenInMaxAmount)) obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
    if (isSet(object.tokenOut)) obj.tokenOut = Coin.fromJSON(object.tokenOut);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? SwapAmountOutRoute.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    message.tokenOut !== undefined &&
      (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountOut>, I>>(object: I): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map((e) => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    if (object.tokenOut !== undefined && object.tokenOut !== null) {
      message.tokenOut = Coin.fromPartial(object.tokenOut);
    }
    return message;
  },
};
function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    tokenInAmount: "",
  };
}
export const MsgSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse",
  encode(message: MsgSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountOutResponse {
    const obj = createBaseMsgSwapExactAmountOutResponse();
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSwapExactAmountOutResponse>, I>>(
    object: I,
  ): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
};
function createBaseMsgSplitRouteSwapExactAmountOut(): MsgSplitRouteSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenOutDenom: "",
    tokenInMaxAmount: "",
  };
}
export const MsgSplitRouteSwapExactAmountOut = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
  encode(
    message: MsgSplitRouteSwapExactAmountOut,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutSplitRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(34).string(message.tokenInMaxAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutSplitRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        case 4:
          message.tokenInMaxAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSplitRouteSwapExactAmountOut {
    const obj = createBaseMsgSplitRouteSwapExactAmountOut();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.routes))
      obj.routes = object.routes.map((e: any) => SwapAmountOutSplitRoute.fromJSON(e));
    if (isSet(object.tokenOutDenom)) obj.tokenOutDenom = String(object.tokenOutDenom);
    if (isSet(object.tokenInMaxAmount)) obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
    return obj;
  },
  toJSON(message: MsgSplitRouteSwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? SwapAmountOutSplitRoute.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSplitRouteSwapExactAmountOut>, I>>(
    object: I,
  ): MsgSplitRouteSwapExactAmountOut {
    const message = createBaseMsgSplitRouteSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map((e) => SwapAmountOutSplitRoute.fromPartial(e)) || [];
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    return message;
  },
};
function createBaseMsgSplitRouteSwapExactAmountOutResponse(): MsgSplitRouteSwapExactAmountOutResponse {
  return {
    tokenInAmount: "",
  };
}
export const MsgSplitRouteSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse",
  encode(
    message: MsgSplitRouteSwapExactAmountOutResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSplitRouteSwapExactAmountOutResponse {
    const obj = createBaseMsgSplitRouteSwapExactAmountOutResponse();
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  toJSON(message: MsgSplitRouteSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSplitRouteSwapExactAmountOutResponse>, I>>(
    object: I,
  ): MsgSplitRouteSwapExactAmountOutResponse {
    const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
};
function createBaseMsgSetDenomPairTakerFee(): MsgSetDenomPairTakerFee {
  return {
    sender: "",
    denomPairTakerFee: [],
  };
}
export const MsgSetDenomPairTakerFee = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
  encode(message: MsgSetDenomPairTakerFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.denomPairTakerFee) {
      DenomPairTakerFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomPairTakerFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomPairTakerFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denomPairTakerFee.push(DenomPairTakerFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDenomPairTakerFee {
    const obj = createBaseMsgSetDenomPairTakerFee();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.denomPairTakerFee))
      obj.denomPairTakerFee = object.denomPairTakerFee.map((e: any) => DenomPairTakerFee.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSetDenomPairTakerFee): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.denomPairTakerFee) {
      obj.denomPairTakerFee = message.denomPairTakerFee.map((e) =>
        e ? DenomPairTakerFee.toJSON(e) : undefined,
      );
    } else {
      obj.denomPairTakerFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetDenomPairTakerFee>, I>>(object: I): MsgSetDenomPairTakerFee {
    const message = createBaseMsgSetDenomPairTakerFee();
    message.sender = object.sender ?? "";
    message.denomPairTakerFee = object.denomPairTakerFee?.map((e) => DenomPairTakerFee.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgSetDenomPairTakerFeeResponse(): MsgSetDenomPairTakerFeeResponse {
  return {
    success: false,
  };
}
export const MsgSetDenomPairTakerFeeResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse",
  encode(
    message: MsgSetDenomPairTakerFeeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomPairTakerFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomPairTakerFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDenomPairTakerFeeResponse {
    const obj = createBaseMsgSetDenomPairTakerFeeResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgSetDenomPairTakerFeeResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetDenomPairTakerFeeResponse>, I>>(
    object: I,
  ): MsgSetDenomPairTakerFeeResponse {
    const message = createBaseMsgSetDenomPairTakerFeeResponse();
    message.success = object.success ?? false;
    return message;
  },
};
function createBaseDenomPairTakerFee(): DenomPairTakerFee {
  return {
    denom0: "",
    denom1: "",
    takerFee: "",
  };
}
export const DenomPairTakerFee = {
  typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFee",
  encode(message: DenomPairTakerFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.takerFee !== "") {
      writer.uint32(26).string(message.takerFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomPairTakerFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomPairTakerFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
          message.takerFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomPairTakerFee {
    const obj = createBaseDenomPairTakerFee();
    if (isSet(object.denom0)) obj.denom0 = String(object.denom0);
    if (isSet(object.denom1)) obj.denom1 = String(object.denom1);
    if (isSet(object.takerFee)) obj.takerFee = String(object.takerFee);
    return obj;
  },
  toJSON(message: DenomPairTakerFee): unknown {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DenomPairTakerFee>, I>>(object: I): DenomPairTakerFee {
    const message = createBaseDenomPairTakerFee();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.takerFee = object.takerFee ?? "";
    return message;
  },
};
export interface Msg {
  SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
  SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
  SplitRouteSwapExactAmountIn(
    request: MsgSplitRouteSwapExactAmountIn,
  ): Promise<MsgSplitRouteSwapExactAmountInResponse>;
  SplitRouteSwapExactAmountOut(
    request: MsgSplitRouteSwapExactAmountOut,
  ): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
  SetDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SwapExactAmountIn = this.SwapExactAmountIn.bind(this);
    this.SwapExactAmountOut = this.SwapExactAmountOut.bind(this);
    this.SplitRouteSwapExactAmountIn = this.SplitRouteSwapExactAmountIn.bind(this);
    this.SplitRouteSwapExactAmountOut = this.SplitRouteSwapExactAmountOut.bind(this);
    this.SetDenomPairTakerFee = this.SetDenomPairTakerFee.bind(this);
  }
  SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse> {
    const data = MsgSwapExactAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SwapExactAmountIn", data);
    return promise.then((data) => MsgSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse> {
    const data = MsgSwapExactAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SwapExactAmountOut", data);
    return promise.then((data) => MsgSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  SplitRouteSwapExactAmountIn(
    request: MsgSplitRouteSwapExactAmountIn,
  ): Promise<MsgSplitRouteSwapExactAmountInResponse> {
    const data = MsgSplitRouteSwapExactAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SplitRouteSwapExactAmountIn", data);
    return promise.then((data) => MsgSplitRouteSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  SplitRouteSwapExactAmountOut(
    request: MsgSplitRouteSwapExactAmountOut,
  ): Promise<MsgSplitRouteSwapExactAmountOutResponse> {
    const data = MsgSplitRouteSwapExactAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SplitRouteSwapExactAmountOut", data);
    return promise.then((data) => MsgSplitRouteSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  SetDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse> {
    const data = MsgSetDenomPairTakerFee.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SetDenomPairTakerFee", data);
    return promise.then((data) => MsgSetDenomPairTakerFeeResponse.decode(new BinaryReader(data)));
  }
}
