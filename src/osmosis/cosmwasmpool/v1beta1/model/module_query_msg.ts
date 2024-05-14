/* eslint-disable */
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== CalcOutAmtGivenIn */
export interface CalcOutAmtGivenIn {
  /** token_in is the token to be sent to the pool. */
  tokenIn: Coin;
  /** token_out_denom is the token denom to be received from the pool. */
  tokenOutDenom: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
export interface CalcOutAmtGivenInRequest {
  /**
   * calc_out_amt_given_in is the structure containing all the request
   * information for this query.
   */
  calcOutAmtGivenIn: CalcOutAmtGivenIn;
}
export interface CalcOutAmtGivenInResponse {
  /** token_out is the token out computed from this swap estimate call. */
  tokenOut: Coin;
}
/** ===================== CalcInAmtGivenOut */
export interface CalcInAmtGivenOut {
  /** token_out is the token out to be receoved from the pool. */
  tokenOut: Coin;
  /** token_in_denom is the token denom to be sentt to the pool. */
  tokenInDenom: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
export interface CalcInAmtGivenOutRequest {
  /**
   * calc_in_amt_given_out is the structure containing all the request
   * information for this query.
   */
  calcInAmtGivenOut: CalcInAmtGivenOut;
}
export interface CalcInAmtGivenOutResponse {
  /** token_in is the token in computed from this swap estimate call. */
  tokenIn: Coin;
}
function createBaseCalcOutAmtGivenIn(): CalcOutAmtGivenIn {
  return {
    tokenIn: Coin.fromPartial({}),
    tokenOutDenom: "",
    swapFee: "",
  };
}
export const CalcOutAmtGivenIn = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn",
  encode(message: CalcOutAmtGivenIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(message.swapFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcOutAmtGivenIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        case 3:
          message.swapFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcOutAmtGivenIn {
    const obj = createBaseCalcOutAmtGivenIn();
    if (isSet(object.tokenIn)) obj.tokenIn = Coin.fromJSON(object.tokenIn);
    if (isSet(object.tokenOutDenom)) obj.tokenOutDenom = String(object.tokenOutDenom);
    if (isSet(object.swapFee)) obj.swapFee = String(object.swapFee);
    return obj;
  },
  toJSON(message: CalcOutAmtGivenIn): unknown {
    const obj: any = {};
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CalcOutAmtGivenIn>, I>>(object: I): CalcOutAmtGivenIn {
    const message = createBaseCalcOutAmtGivenIn();
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromPartial(object.tokenIn);
    }
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
};
function createBaseCalcOutAmtGivenInRequest(): CalcOutAmtGivenInRequest {
  return {
    calcOutAmtGivenIn: CalcOutAmtGivenIn.fromPartial({}),
  };
}
export const CalcOutAmtGivenInRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest",
  encode(message: CalcOutAmtGivenInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.calcOutAmtGivenIn !== undefined) {
      CalcOutAmtGivenIn.encode(message.calcOutAmtGivenIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcOutAmtGivenInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calcOutAmtGivenIn = CalcOutAmtGivenIn.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcOutAmtGivenInRequest {
    const obj = createBaseCalcOutAmtGivenInRequest();
    if (isSet(object.calcOutAmtGivenIn))
      obj.calcOutAmtGivenIn = CalcOutAmtGivenIn.fromJSON(object.calcOutAmtGivenIn);
    return obj;
  },
  toJSON(message: CalcOutAmtGivenInRequest): unknown {
    const obj: any = {};
    message.calcOutAmtGivenIn !== undefined &&
      (obj.calcOutAmtGivenIn = message.calcOutAmtGivenIn
        ? CalcOutAmtGivenIn.toJSON(message.calcOutAmtGivenIn)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CalcOutAmtGivenInRequest>, I>>(
    object: I,
  ): CalcOutAmtGivenInRequest {
    const message = createBaseCalcOutAmtGivenInRequest();
    if (object.calcOutAmtGivenIn !== undefined && object.calcOutAmtGivenIn !== null) {
      message.calcOutAmtGivenIn = CalcOutAmtGivenIn.fromPartial(object.calcOutAmtGivenIn);
    }
    return message;
  },
};
function createBaseCalcOutAmtGivenInResponse(): CalcOutAmtGivenInResponse {
  return {
    tokenOut: Coin.fromPartial({}),
  };
}
export const CalcOutAmtGivenInResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse",
  encode(message: CalcOutAmtGivenInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcOutAmtGivenInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcOutAmtGivenInResponse {
    const obj = createBaseCalcOutAmtGivenInResponse();
    if (isSet(object.tokenOut)) obj.tokenOut = Coin.fromJSON(object.tokenOut);
    return obj;
  },
  toJSON(message: CalcOutAmtGivenInResponse): unknown {
    const obj: any = {};
    message.tokenOut !== undefined &&
      (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CalcOutAmtGivenInResponse>, I>>(
    object: I,
  ): CalcOutAmtGivenInResponse {
    const message = createBaseCalcOutAmtGivenInResponse();
    if (object.tokenOut !== undefined && object.tokenOut !== null) {
      message.tokenOut = Coin.fromPartial(object.tokenOut);
    }
    return message;
  },
};
function createBaseCalcInAmtGivenOut(): CalcInAmtGivenOut {
  return {
    tokenOut: Coin.fromPartial({}),
    tokenInDenom: "",
    swapFee: "",
  };
}
export const CalcInAmtGivenOut = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut",
  encode(message: CalcInAmtGivenOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(message.swapFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcInAmtGivenOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.swapFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcInAmtGivenOut {
    const obj = createBaseCalcInAmtGivenOut();
    if (isSet(object.tokenOut)) obj.tokenOut = Coin.fromJSON(object.tokenOut);
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    if (isSet(object.swapFee)) obj.swapFee = String(object.swapFee);
    return obj;
  },
  toJSON(message: CalcInAmtGivenOut): unknown {
    const obj: any = {};
    message.tokenOut !== undefined &&
      (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CalcInAmtGivenOut>, I>>(object: I): CalcInAmtGivenOut {
    const message = createBaseCalcInAmtGivenOut();
    if (object.tokenOut !== undefined && object.tokenOut !== null) {
      message.tokenOut = Coin.fromPartial(object.tokenOut);
    }
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
};
function createBaseCalcInAmtGivenOutRequest(): CalcInAmtGivenOutRequest {
  return {
    calcInAmtGivenOut: CalcInAmtGivenOut.fromPartial({}),
  };
}
export const CalcInAmtGivenOutRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest",
  encode(message: CalcInAmtGivenOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.calcInAmtGivenOut !== undefined) {
      CalcInAmtGivenOut.encode(message.calcInAmtGivenOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcInAmtGivenOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calcInAmtGivenOut = CalcInAmtGivenOut.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcInAmtGivenOutRequest {
    const obj = createBaseCalcInAmtGivenOutRequest();
    if (isSet(object.calcInAmtGivenOut))
      obj.calcInAmtGivenOut = CalcInAmtGivenOut.fromJSON(object.calcInAmtGivenOut);
    return obj;
  },
  toJSON(message: CalcInAmtGivenOutRequest): unknown {
    const obj: any = {};
    message.calcInAmtGivenOut !== undefined &&
      (obj.calcInAmtGivenOut = message.calcInAmtGivenOut
        ? CalcInAmtGivenOut.toJSON(message.calcInAmtGivenOut)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CalcInAmtGivenOutRequest>, I>>(
    object: I,
  ): CalcInAmtGivenOutRequest {
    const message = createBaseCalcInAmtGivenOutRequest();
    if (object.calcInAmtGivenOut !== undefined && object.calcInAmtGivenOut !== null) {
      message.calcInAmtGivenOut = CalcInAmtGivenOut.fromPartial(object.calcInAmtGivenOut);
    }
    return message;
  },
};
function createBaseCalcInAmtGivenOutResponse(): CalcInAmtGivenOutResponse {
  return {
    tokenIn: Coin.fromPartial({}),
  };
}
export const CalcInAmtGivenOutResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse",
  encode(message: CalcInAmtGivenOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalcInAmtGivenOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CalcInAmtGivenOutResponse {
    const obj = createBaseCalcInAmtGivenOutResponse();
    if (isSet(object.tokenIn)) obj.tokenIn = Coin.fromJSON(object.tokenIn);
    return obj;
  },
  toJSON(message: CalcInAmtGivenOutResponse): unknown {
    const obj: any = {};
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CalcInAmtGivenOutResponse>, I>>(
    object: I,
  ): CalcInAmtGivenOutResponse {
    const message = createBaseCalcInAmtGivenOutResponse();
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromPartial(object.tokenIn);
    }
    return message;
  },
};
