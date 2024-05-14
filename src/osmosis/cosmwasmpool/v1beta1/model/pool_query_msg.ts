/* eslint-disable */
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== GetSwapFeeQueryMsg */
export interface GetSwapFeeQueryMsg {
  /** get_swap_fee is the query structure to get swap fee. */
  getSwapFee: EmptyStruct;
}
export interface GetSwapFeeQueryMsgResponse {
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
/** ===================== SpotPriceQueryMsg */
export interface SpotPrice {
  /** quote_asset_denom is the quote asset of the spot query. */
  quoteAssetDenom: string;
  /** base_asset_denom is the base asset of the spot query. */
  baseAssetDenom: string;
}
export interface SpotPriceQueryMsg {
  /**
   * spot_price is the structure containing request field of the spot price
   * query message.
   */
  spotPrice: SpotPrice;
}
export interface SpotPriceQueryMsgResponse {
  /** spot_price is the spot price returned. */
  spotPrice: string;
}
/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStruct {}
export interface GetTotalPoolLiquidityQueryMsg {
  /**
   * get_total_pool_liquidity is the structure containing request field of the
   * total pool liquidity query message.
   */
  getTotalPoolLiquidity: EmptyStruct;
}
export interface GetTotalPoolLiquidityQueryMsgResponse {
  /**
   * total_pool_liquidity is the total liquidity in the pool denominated in
   *  coins.
   */
  totalPoolLiquidity: Coin[];
}
/** ===================== GetTotalSharesQueryMsg */
export interface GetTotalSharesQueryMsg {
  /**
   * get_total_shares is the structure containing request field of the
   * total shares query message.
   */
  getTotalShares: EmptyStruct;
}
export interface GetTotalSharesQueryMsgResponse {
  /** total_shares is the amount of shares returned. */
  totalShares: string;
}
function createBaseGetSwapFeeQueryMsg(): GetSwapFeeQueryMsg {
  return {
    getSwapFee: EmptyStruct.fromPartial({}),
  };
}
export const GetSwapFeeQueryMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsg",
  encode(message: GetSwapFeeQueryMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.getSwapFee !== undefined) {
      EmptyStruct.encode(message.getSwapFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSwapFeeQueryMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSwapFeeQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getSwapFee = EmptyStruct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSwapFeeQueryMsg {
    const obj = createBaseGetSwapFeeQueryMsg();
    if (isSet(object.getSwapFee)) obj.getSwapFee = EmptyStruct.fromJSON(object.getSwapFee);
    return obj;
  },
  toJSON(message: GetSwapFeeQueryMsg): unknown {
    const obj: any = {};
    message.getSwapFee !== undefined &&
      (obj.getSwapFee = message.getSwapFee ? EmptyStruct.toJSON(message.getSwapFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetSwapFeeQueryMsg>, I>>(object: I): GetSwapFeeQueryMsg {
    const message = createBaseGetSwapFeeQueryMsg();
    if (object.getSwapFee !== undefined && object.getSwapFee !== null) {
      message.getSwapFee = EmptyStruct.fromPartial(object.getSwapFee);
    }
    return message;
  },
};
function createBaseGetSwapFeeQueryMsgResponse(): GetSwapFeeQueryMsgResponse {
  return {
    swapFee: "",
  };
}
export const GetSwapFeeQueryMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsgResponse",
  encode(message: GetSwapFeeQueryMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapFee !== "") {
      writer.uint32(26).string(message.swapFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSwapFeeQueryMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSwapFeeQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
  fromJSON(object: any): GetSwapFeeQueryMsgResponse {
    const obj = createBaseGetSwapFeeQueryMsgResponse();
    if (isSet(object.swapFee)) obj.swapFee = String(object.swapFee);
    return obj;
  },
  toJSON(message: GetSwapFeeQueryMsgResponse): unknown {
    const obj: any = {};
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetSwapFeeQueryMsgResponse>, I>>(
    object: I,
  ): GetSwapFeeQueryMsgResponse {
    const message = createBaseGetSwapFeeQueryMsgResponse();
    message.swapFee = object.swapFee ?? "";
    return message;
  },
};
function createBaseSpotPrice(): SpotPrice {
  return {
    quoteAssetDenom: "",
    baseAssetDenom: "",
  };
}
export const SpotPrice = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPrice",
  encode(message: SpotPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quoteAssetDenom !== "") {
      writer.uint32(10).string(message.quoteAssetDenom);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteAssetDenom = reader.string();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpotPrice {
    const obj = createBaseSpotPrice();
    if (isSet(object.quoteAssetDenom)) obj.quoteAssetDenom = String(object.quoteAssetDenom);
    if (isSet(object.baseAssetDenom)) obj.baseAssetDenom = String(object.baseAssetDenom);
    return obj;
  },
  toJSON(message: SpotPrice): unknown {
    const obj: any = {};
    message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
    message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpotPrice>, I>>(object: I): SpotPrice {
    const message = createBaseSpotPrice();
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    return message;
  },
};
function createBaseSpotPriceQueryMsg(): SpotPriceQueryMsg {
  return {
    spotPrice: SpotPrice.fromPartial({}),
  };
}
export const SpotPriceQueryMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsg",
  encode(message: SpotPriceQueryMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== undefined) {
      SpotPrice.encode(message.spotPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceQueryMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = SpotPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpotPriceQueryMsg {
    const obj = createBaseSpotPriceQueryMsg();
    if (isSet(object.spotPrice)) obj.spotPrice = SpotPrice.fromJSON(object.spotPrice);
    return obj;
  },
  toJSON(message: SpotPriceQueryMsg): unknown {
    const obj: any = {};
    message.spotPrice !== undefined &&
      (obj.spotPrice = message.spotPrice ? SpotPrice.toJSON(message.spotPrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpotPriceQueryMsg>, I>>(object: I): SpotPriceQueryMsg {
    const message = createBaseSpotPriceQueryMsg();
    if (object.spotPrice !== undefined && object.spotPrice !== null) {
      message.spotPrice = SpotPrice.fromPartial(object.spotPrice);
    }
    return message;
  },
};
function createBaseSpotPriceQueryMsgResponse(): SpotPriceQueryMsgResponse {
  return {
    spotPrice: "",
  };
}
export const SpotPriceQueryMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsgResponse",
  encode(message: SpotPriceQueryMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceQueryMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpotPriceQueryMsgResponse {
    const obj = createBaseSpotPriceQueryMsgResponse();
    if (isSet(object.spotPrice)) obj.spotPrice = String(object.spotPrice);
    return obj;
  },
  toJSON(message: SpotPriceQueryMsgResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpotPriceQueryMsgResponse>, I>>(
    object: I,
  ): SpotPriceQueryMsgResponse {
    const message = createBaseSpotPriceQueryMsgResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
};
function createBaseEmptyStruct(): EmptyStruct {
  return {};
}
export const EmptyStruct = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.EmptyStruct",
  encode(_: EmptyStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EmptyStruct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyStruct();
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
  fromJSON(_: any): EmptyStruct {
    const obj = createBaseEmptyStruct();
    return obj;
  },
  toJSON(_: EmptyStruct): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EmptyStruct>, I>>(_: I): EmptyStruct {
    const message = createBaseEmptyStruct();
    return message;
  },
};
function createBaseGetTotalPoolLiquidityQueryMsg(): GetTotalPoolLiquidityQueryMsg {
  return {
    getTotalPoolLiquidity: EmptyStruct.fromPartial({}),
  };
}
export const GetTotalPoolLiquidityQueryMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsg",
  encode(message: GetTotalPoolLiquidityQueryMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.getTotalPoolLiquidity !== undefined) {
      EmptyStruct.encode(message.getTotalPoolLiquidity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalPoolLiquidityQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getTotalPoolLiquidity = EmptyStruct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTotalPoolLiquidityQueryMsg {
    const obj = createBaseGetTotalPoolLiquidityQueryMsg();
    if (isSet(object.getTotalPoolLiquidity))
      obj.getTotalPoolLiquidity = EmptyStruct.fromJSON(object.getTotalPoolLiquidity);
    return obj;
  },
  toJSON(message: GetTotalPoolLiquidityQueryMsg): unknown {
    const obj: any = {};
    message.getTotalPoolLiquidity !== undefined &&
      (obj.getTotalPoolLiquidity = message.getTotalPoolLiquidity
        ? EmptyStruct.toJSON(message.getTotalPoolLiquidity)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalPoolLiquidityQueryMsg>, I>>(
    object: I,
  ): GetTotalPoolLiquidityQueryMsg {
    const message = createBaseGetTotalPoolLiquidityQueryMsg();
    if (object.getTotalPoolLiquidity !== undefined && object.getTotalPoolLiquidity !== null) {
      message.getTotalPoolLiquidity = EmptyStruct.fromPartial(object.getTotalPoolLiquidity);
    }
    return message;
  },
};
function createBaseGetTotalPoolLiquidityQueryMsgResponse(): GetTotalPoolLiquidityQueryMsgResponse {
  return {
    totalPoolLiquidity: [],
  };
}
export const GetTotalPoolLiquidityQueryMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsgResponse",
  encode(
    message: GetTotalPoolLiquidityQueryMsgResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.totalPoolLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTotalPoolLiquidityQueryMsgResponse {
    const obj = createBaseGetTotalPoolLiquidityQueryMsgResponse();
    if (Array.isArray(object?.totalPoolLiquidity))
      obj.totalPoolLiquidity = object.totalPoolLiquidity.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: GetTotalPoolLiquidityQueryMsgResponse): unknown {
    const obj: any = {};
    if (message.totalPoolLiquidity) {
      obj.totalPoolLiquidity = message.totalPoolLiquidity.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalPoolLiquidity = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalPoolLiquidityQueryMsgResponse>, I>>(
    object: I,
  ): GetTotalPoolLiquidityQueryMsgResponse {
    const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
    message.totalPoolLiquidity = object.totalPoolLiquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGetTotalSharesQueryMsg(): GetTotalSharesQueryMsg {
  return {
    getTotalShares: EmptyStruct.fromPartial({}),
  };
}
export const GetTotalSharesQueryMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsg",
  encode(message: GetTotalSharesQueryMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.getTotalShares !== undefined) {
      EmptyStruct.encode(message.getTotalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalSharesQueryMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalSharesQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getTotalShares = EmptyStruct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTotalSharesQueryMsg {
    const obj = createBaseGetTotalSharesQueryMsg();
    if (isSet(object.getTotalShares)) obj.getTotalShares = EmptyStruct.fromJSON(object.getTotalShares);
    return obj;
  },
  toJSON(message: GetTotalSharesQueryMsg): unknown {
    const obj: any = {};
    message.getTotalShares !== undefined &&
      (obj.getTotalShares = message.getTotalShares ? EmptyStruct.toJSON(message.getTotalShares) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalSharesQueryMsg>, I>>(object: I): GetTotalSharesQueryMsg {
    const message = createBaseGetTotalSharesQueryMsg();
    if (object.getTotalShares !== undefined && object.getTotalShares !== null) {
      message.getTotalShares = EmptyStruct.fromPartial(object.getTotalShares);
    }
    return message;
  },
};
function createBaseGetTotalSharesQueryMsgResponse(): GetTotalSharesQueryMsgResponse {
  return {
    totalShares: "",
  };
}
export const GetTotalSharesQueryMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsgResponse",
  encode(
    message: GetTotalSharesQueryMsgResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalShares !== "") {
      writer.uint32(10).string(message.totalShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalSharesQueryMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalSharesQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTotalSharesQueryMsgResponse {
    const obj = createBaseGetTotalSharesQueryMsgResponse();
    if (isSet(object.totalShares)) obj.totalShares = String(object.totalShares);
    return obj;
  },
  toJSON(message: GetTotalSharesQueryMsgResponse): unknown {
    const obj: any = {};
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalSharesQueryMsgResponse>, I>>(
    object: I,
  ): GetTotalSharesQueryMsgResponse {
    const message = createBaseGetTotalSharesQueryMsgResponse();
    message.totalShares = object.totalShares ?? "";
    return message;
  },
};
