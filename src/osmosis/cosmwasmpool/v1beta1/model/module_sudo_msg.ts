/* eslint-disable */
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountIn {
  sender: string;
  /** token_in is the token to be sent to the pool. */
  tokenIn: Coin;
  /** token_out_denom is the token denom to be received from the pool. */
  tokenOutDenom: string;
  /**
   * token_out_min_amount is the minimum amount of token_out to be received from
   * the pool.
   */
  tokenOutMinAmount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
export interface SwapExactAmountInSudoMsg {
  /**
   * swap_exact_amount_in is the structure containing all the request
   * information for this message.
   */
  swapExactAmountIn: SwapExactAmountIn;
}
export interface SwapExactAmountInSudoMsgResponse {
  /** token_out_amount is the token out computed from this swap estimate call. */
  tokenOutAmount: string;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOut {
  sender: string;
  /** token_out is the token to be sent out of the pool. */
  tokenOut: Coin;
  /** token_in_denom is the token denom to be sent too the pool. */
  tokenInDenom: string;
  /**
   * token_in_max_amount is the maximum amount of token_in to be sent to the
   * pool.
   */
  tokenInMaxAmount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
export interface SwapExactAmountOutSudoMsg {
  /**
   * swap_exact_amount_out is the structure containing all the request
   * information for this message.
   */
  swapExactAmountOut: SwapExactAmountOut;
}
export interface SwapExactAmountOutSudoMsgResponse {
  /** token_in_amount is the token in computed from this swap estimate call. */
  tokenInAmount: string;
}
function createBaseSwapExactAmountIn(): SwapExactAmountIn {
  return {
    sender: "",
    tokenIn: Coin.fromPartial({}),
    tokenOutDenom: "",
    tokenOutMinAmount: "",
    swapFee: "",
  };
}
export const SwapExactAmountIn = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn",
  encode(message: SwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(message.swapFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        case 5:
          message.swapFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapExactAmountIn {
    const obj = createBaseSwapExactAmountIn();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.tokenIn)) obj.tokenIn = Coin.fromJSON(object.tokenIn);
    if (isSet(object.tokenOutDenom)) obj.tokenOutDenom = String(object.tokenOutDenom);
    if (isSet(object.tokenOutMinAmount)) obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
    if (isSet(object.swapFee)) obj.swapFee = String(object.swapFee);
    return obj;
  },
  toJSON(message: SwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapExactAmountIn>, I>>(object: I): SwapExactAmountIn {
    const message = createBaseSwapExactAmountIn();
    message.sender = object.sender ?? "";
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromPartial(object.tokenIn);
    }
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
};
function createBaseSwapExactAmountInSudoMsg(): SwapExactAmountInSudoMsg {
  return {
    swapExactAmountIn: SwapExactAmountIn.fromPartial({}),
  };
}
export const SwapExactAmountInSudoMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg",
  encode(message: SwapExactAmountInSudoMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapExactAmountIn !== undefined) {
      SwapExactAmountIn.encode(message.swapExactAmountIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountInSudoMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapExactAmountInSudoMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapExactAmountIn = SwapExactAmountIn.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapExactAmountInSudoMsg {
    const obj = createBaseSwapExactAmountInSudoMsg();
    if (isSet(object.swapExactAmountIn))
      obj.swapExactAmountIn = SwapExactAmountIn.fromJSON(object.swapExactAmountIn);
    return obj;
  },
  toJSON(message: SwapExactAmountInSudoMsg): unknown {
    const obj: any = {};
    message.swapExactAmountIn !== undefined &&
      (obj.swapExactAmountIn = message.swapExactAmountIn
        ? SwapExactAmountIn.toJSON(message.swapExactAmountIn)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapExactAmountInSudoMsg>, I>>(
    object: I,
  ): SwapExactAmountInSudoMsg {
    const message = createBaseSwapExactAmountInSudoMsg();
    if (object.swapExactAmountIn !== undefined && object.swapExactAmountIn !== null) {
      message.swapExactAmountIn = SwapExactAmountIn.fromPartial(object.swapExactAmountIn);
    }
    return message;
  },
};
function createBaseSwapExactAmountInSudoMsgResponse(): SwapExactAmountInSudoMsgResponse {
  return {
    tokenOutAmount: "",
  };
}
export const SwapExactAmountInSudoMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse",
  encode(
    message: SwapExactAmountInSudoMsgResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountInSudoMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapExactAmountInSudoMsgResponse();
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
  fromJSON(object: any): SwapExactAmountInSudoMsgResponse {
    const obj = createBaseSwapExactAmountInSudoMsgResponse();
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  toJSON(message: SwapExactAmountInSudoMsgResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapExactAmountInSudoMsgResponse>, I>>(
    object: I,
  ): SwapExactAmountInSudoMsgResponse {
    const message = createBaseSwapExactAmountInSudoMsgResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
};
function createBaseSwapExactAmountOut(): SwapExactAmountOut {
  return {
    sender: "",
    tokenOut: Coin.fromPartial({}),
    tokenInDenom: "",
    tokenInMaxAmount: "",
    swapFee: "",
  };
}
export const SwapExactAmountOut = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut",
  encode(message: SwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(34).string(message.tokenInMaxAmount);
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(message.swapFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenInDenom = reader.string();
          break;
        case 4:
          message.tokenInMaxAmount = reader.string();
          break;
        case 5:
          message.swapFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapExactAmountOut {
    const obj = createBaseSwapExactAmountOut();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.tokenOut)) obj.tokenOut = Coin.fromJSON(object.tokenOut);
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    if (isSet(object.tokenInMaxAmount)) obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
    if (isSet(object.swapFee)) obj.swapFee = String(object.swapFee);
    return obj;
  },
  toJSON(message: SwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenOut !== undefined &&
      (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapExactAmountOut>, I>>(object: I): SwapExactAmountOut {
    const message = createBaseSwapExactAmountOut();
    message.sender = object.sender ?? "";
    if (object.tokenOut !== undefined && object.tokenOut !== null) {
      message.tokenOut = Coin.fromPartial(object.tokenOut);
    }
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
};
function createBaseSwapExactAmountOutSudoMsg(): SwapExactAmountOutSudoMsg {
  return {
    swapExactAmountOut: SwapExactAmountOut.fromPartial({}),
  };
}
export const SwapExactAmountOutSudoMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg",
  encode(message: SwapExactAmountOutSudoMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapExactAmountOut !== undefined) {
      SwapExactAmountOut.encode(message.swapExactAmountOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountOutSudoMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapExactAmountOutSudoMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapExactAmountOut = SwapExactAmountOut.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapExactAmountOutSudoMsg {
    const obj = createBaseSwapExactAmountOutSudoMsg();
    if (isSet(object.swapExactAmountOut))
      obj.swapExactAmountOut = SwapExactAmountOut.fromJSON(object.swapExactAmountOut);
    return obj;
  },
  toJSON(message: SwapExactAmountOutSudoMsg): unknown {
    const obj: any = {};
    message.swapExactAmountOut !== undefined &&
      (obj.swapExactAmountOut = message.swapExactAmountOut
        ? SwapExactAmountOut.toJSON(message.swapExactAmountOut)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapExactAmountOutSudoMsg>, I>>(
    object: I,
  ): SwapExactAmountOutSudoMsg {
    const message = createBaseSwapExactAmountOutSudoMsg();
    if (object.swapExactAmountOut !== undefined && object.swapExactAmountOut !== null) {
      message.swapExactAmountOut = SwapExactAmountOut.fromPartial(object.swapExactAmountOut);
    }
    return message;
  },
};
function createBaseSwapExactAmountOutSudoMsgResponse(): SwapExactAmountOutSudoMsgResponse {
  return {
    tokenInAmount: "",
  };
}
export const SwapExactAmountOutSudoMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse",
  encode(
    message: SwapExactAmountOutSudoMsgResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountOutSudoMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapExactAmountOutSudoMsgResponse();
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
  fromJSON(object: any): SwapExactAmountOutSudoMsgResponse {
    const obj = createBaseSwapExactAmountOutSudoMsgResponse();
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  toJSON(message: SwapExactAmountOutSudoMsgResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SwapExactAmountOutSudoMsgResponse>, I>>(
    object: I,
  ): SwapExactAmountOutSudoMsgResponse {
    const message = createBaseSwapExactAmountOutSudoMsgResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
};
