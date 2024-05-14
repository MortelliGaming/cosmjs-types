/* eslint-disable */
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
/** =============================== Params */
export interface ParamsRequest {}
export interface ParamsResponse {
  params: Params;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
  /** @deprecated */
  poolId: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequest {
  /** @deprecated */
  poolId: bigint;
  tokenIn: string;
  routesPoolId: bigint[];
  routesTokenOutDenom: string[];
}
export interface EstimateSinglePoolSwapExactAmountInRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOutDenom: string;
}
export interface EstimateSwapExactAmountInResponse {
  tokenOutAmount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
  /** @deprecated */
  poolId: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  /** @deprecated */
  poolId: bigint;
  routesPoolId: bigint[];
  routesTokenInDenom: string[];
  tokenOut: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequest {
  poolId: bigint;
  tokenInDenom: string;
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutResponse {
  tokenInAmount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {}
export interface NumPoolsResponse {
  numPools: bigint;
}
/** =============================== Pool */
export interface PoolRequest {
  poolId: bigint;
}
export interface PoolResponse {
  pool?: Any;
}
/** =============================== AllPools */
export interface AllPoolsRequest {}
export interface AllPoolsResponse {
  pools: Any[];
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequest {
  denom: string;
}
export interface ListPoolsByDenomResponse {
  pools: Any[];
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
/** =============================== TotalPoolLiquidity */
export interface TotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface TotalPoolLiquidityResponse {
  liquidity: Coin[];
}
/** =============================== TotalLiquidity */
export interface TotalLiquidityRequest {}
export interface TotalLiquidityResponse {
  liquidity: Coin[];
}
/** =============================== TotalVolumeForPool */
export interface TotalVolumeForPoolRequest {
  poolId: bigint;
}
export interface TotalVolumeForPoolResponse {
  volume: Coin[];
}
/** =============================== TradingPairTakerFee */
export interface TradingPairTakerFeeRequest {
  denom0: string;
  denom1: string;
}
export interface TradingPairTakerFeeResponse {
  takerFee: string;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequest {
  /** from_coin is the total amount of tokens that the user wants to sell. */
  fromCoin: Coin;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  toCoinDenom: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  poolId: bigint;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  maxPriceImpact: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  externalPrice: string;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponse {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  inputCoin: Coin;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  outputCoin: Coin;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseEstimateSwapExactAmountInRequest(): EstimateSwapExactAmountInRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    routes: [],
  };
}
export const EstimateSwapExactAmountInRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest",
  encode(
    message: EstimateSwapExactAmountInRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountInRequest {
    const obj = createBaseEstimateSwapExactAmountInRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (Array.isArray(object?.routes))
      obj.routes = object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e));
    return obj;
  },
  toJSON(message: EstimateSwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? SwapAmountInRoute.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountInRequest>, I>>(
    object: I,
  ): EstimateSwapExactAmountInRequest {
    const message = createBaseEstimateSwapExactAmountInRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map((e) => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
};
function createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest(): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    routesPoolId: [],
    routesTokenOutDenom: [],
  };
}
export const EstimateSwapExactAmountInWithPrimitiveTypesRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest",
  encode(
    message: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    writer.uint32(26).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenOutDenom) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 4:
          message.routesTokenOutDenom.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const obj = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (Array.isArray(object?.routesPoolId))
      obj.routesPoolId = object.routesPoolId.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.routesTokenOutDenom))
      obj.routesTokenOutDenom = object.routesTokenOutDenom.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    if (message.routesPoolId) {
      obj.routesPoolId = message.routesPoolId.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.routesPoolId = [];
    }
    if (message.routesTokenOutDenom) {
      obj.routesTokenOutDenom = message.routesTokenOutDenom.map((e) => e);
    } else {
      obj.routesTokenOutDenom = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountInWithPrimitiveTypesRequest>, I>>(
    object: I,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenIn = object.tokenIn ?? "";
    message.routesPoolId = object.routesPoolId?.map((e) => BigInt(e.toString())) || [];
    message.routesTokenOutDenom = object.routesTokenOutDenom?.map((e) => e) || [];
    return message;
  },
};
function createBaseEstimateSinglePoolSwapExactAmountInRequest(): EstimateSinglePoolSwapExactAmountInRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOutDenom: "",
  };
}
export const EstimateSinglePoolSwapExactAmountInRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest",
  encode(
    message: EstimateSinglePoolSwapExactAmountInRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSinglePoolSwapExactAmountInRequest {
    const obj = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.tokenOutDenom)) obj.tokenOutDenom = String(object.tokenOutDenom);
    return obj;
  },
  toJSON(message: EstimateSinglePoolSwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSinglePoolSwapExactAmountInRequest>, I>>(
    object: I,
  ): EstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
};
function createBaseEstimateSwapExactAmountInResponse(): EstimateSwapExactAmountInResponse {
  return {
    tokenOutAmount: "",
  };
}
export const EstimateSwapExactAmountInResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse",
  encode(
    message: EstimateSwapExactAmountInResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInResponse();
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
  fromJSON(object: any): EstimateSwapExactAmountInResponse {
    const obj = createBaseEstimateSwapExactAmountInResponse();
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  toJSON(message: EstimateSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountInResponse>, I>>(
    object: I,
  ): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
};
function createBaseEstimateSwapExactAmountOutRequest(): EstimateSwapExactAmountOutRequest {
  return {
    poolId: BigInt(0),
    routes: [],
    tokenOut: "",
  };
}
export const EstimateSwapExactAmountOutRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest",
  encode(
    message: EstimateSwapExactAmountOutRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountOutRequest {
    const obj = createBaseEstimateSwapExactAmountOutRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (Array.isArray(object?.routes))
      obj.routes = object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e));
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    return obj;
  },
  toJSON(message: EstimateSwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? SwapAmountOutRoute.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountOutRequest>, I>>(
    object: I,
  ): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.routes = object.routes?.map((e) => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};
function createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest(): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  return {
    poolId: BigInt(0),
    routesPoolId: [],
    routesTokenInDenom: [],
    tokenOut: "",
  };
}
export const EstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest",
  encode(
    message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    writer.uint32(18).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenInDenom) {
      writer.uint32(26).string(v!);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 3:
          message.routesTokenInDenom.push(reader.string());
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const obj = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (Array.isArray(object?.routesPoolId))
      obj.routesPoolId = object.routesPoolId.map((e: any) => BigInt(e.toString()));
    if (Array.isArray(object?.routesTokenInDenom))
      obj.routesTokenInDenom = object.routesTokenInDenom.map((e: any) => String(e));
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    return obj;
  },
  toJSON(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.routesPoolId) {
      obj.routesPoolId = message.routesPoolId.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.routesPoolId = [];
    }
    if (message.routesTokenInDenom) {
      obj.routesTokenInDenom = message.routesTokenInDenom.map((e) => e);
    } else {
      obj.routesTokenInDenom = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountOutWithPrimitiveTypesRequest>, I>>(
    object: I,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.routesPoolId = object.routesPoolId?.map((e) => BigInt(e.toString())) || [];
    message.routesTokenInDenom = object.routesTokenInDenom?.map((e) => e) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};
function createBaseEstimateSinglePoolSwapExactAmountOutRequest(): EstimateSinglePoolSwapExactAmountOutRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: "",
    tokenOut: "",
  };
}
export const EstimateSinglePoolSwapExactAmountOutRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest",
  encode(
    message: EstimateSinglePoolSwapExactAmountOutRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSinglePoolSwapExactAmountOutRequest {
    const obj = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    return obj;
  },
  toJSON(message: EstimateSinglePoolSwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSinglePoolSwapExactAmountOutRequest>, I>>(
    object: I,
  ): EstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};
function createBaseEstimateSwapExactAmountOutResponse(): EstimateSwapExactAmountOutResponse {
  return {
    tokenInAmount: "",
  };
}
export const EstimateSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse",
  encode(
    message: EstimateSwapExactAmountOutResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutResponse();
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
  fromJSON(object: any): EstimateSwapExactAmountOutResponse {
    const obj = createBaseEstimateSwapExactAmountOutResponse();
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  toJSON(message: EstimateSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountOutResponse>, I>>(
    object: I,
  ): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
};
function createBaseNumPoolsRequest(): NumPoolsRequest {
  return {};
}
export const NumPoolsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsRequest",
  encode(_: NumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsRequest();
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
  fromJSON(_: any): NumPoolsRequest {
    const obj = createBaseNumPoolsRequest();
    return obj;
  },
  toJSON(_: NumPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolsRequest>, I>>(_: I): NumPoolsRequest {
    const message = createBaseNumPoolsRequest();
    return message;
  },
};
function createBaseNumPoolsResponse(): NumPoolsResponse {
  return {
    numPools: BigInt(0),
  };
}
export const NumPoolsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsResponse",
  encode(message: NumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumPoolsResponse {
    const obj = createBaseNumPoolsResponse();
    if (isSet(object.numPools)) obj.numPools = BigInt(object.numPools.toString());
    return obj;
  },
  toJSON(message: NumPoolsResponse): unknown {
    const obj: any = {};
    message.numPools !== undefined && (obj.numPools = (message.numPools || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolsResponse>, I>>(object: I): NumPoolsResponse {
    const message = createBaseNumPoolsResponse();
    if (object.numPools !== undefined && object.numPools !== null) {
      message.numPools = BigInt(object.numPools.toString());
    }
    return message;
  },
};
function createBasePoolRequest(): PoolRequest {
  return {
    poolId: BigInt(0),
  };
}
export const PoolRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.PoolRequest",
  encode(message: PoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRequest {
    const obj = createBasePoolRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: PoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolRequest>, I>>(object: I): PoolRequest {
    const message = createBasePoolRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBasePoolResponse(): PoolResponse {
  return {
    pool: undefined,
  };
}
export const PoolResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.PoolResponse",
  encode(message: PoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolResponse {
    const obj = createBasePoolResponse();
    if (isSet(object.pool)) obj.pool = Any.fromJSON(object.pool);
    return obj;
  },
  toJSON(message: PoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolResponse>, I>>(object: I): PoolResponse {
    const message = createBasePoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Any.fromPartial(object.pool);
    }
    return message;
  },
};
function createBaseAllPoolsRequest(): AllPoolsRequest {
  return {};
}
export const AllPoolsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsRequest",
  encode(_: AllPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsRequest();
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
  fromJSON(_: any): AllPoolsRequest {
    const obj = createBaseAllPoolsRequest();
    return obj;
  },
  toJSON(_: AllPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllPoolsRequest>, I>>(_: I): AllPoolsRequest {
    const message = createBaseAllPoolsRequest();
    return message;
  },
};
function createBaseAllPoolsResponse(): AllPoolsResponse {
  return {
    pools: [],
  };
}
export const AllPoolsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsResponse",
  encode(message: AllPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllPoolsResponse {
    const obj = createBaseAllPoolsResponse();
    if (Array.isArray(object?.pools)) obj.pools = object.pools.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: AllPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllPoolsResponse>, I>>(object: I): AllPoolsResponse {
    const message = createBaseAllPoolsResponse();
    message.pools = object.pools?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};
function createBaseListPoolsByDenomRequest(): ListPoolsByDenomRequest {
  return {
    denom: "",
  };
}
export const ListPoolsByDenomRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest",
  encode(message: ListPoolsByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListPoolsByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoolsByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListPoolsByDenomRequest {
    const obj = createBaseListPoolsByDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: ListPoolsByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListPoolsByDenomRequest>, I>>(object: I): ListPoolsByDenomRequest {
    const message = createBaseListPoolsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseListPoolsByDenomResponse(): ListPoolsByDenomResponse {
  return {
    pools: [],
  };
}
export const ListPoolsByDenomResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse",
  encode(message: ListPoolsByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListPoolsByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoolsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListPoolsByDenomResponse {
    const obj = createBaseListPoolsByDenomResponse();
    if (Array.isArray(object?.pools)) obj.pools = object.pools.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: ListPoolsByDenomResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListPoolsByDenomResponse>, I>>(
    object: I,
  ): ListPoolsByDenomResponse {
    const message = createBaseListPoolsByDenomResponse();
    message.pools = object.pools?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSpotPriceRequest(): SpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: "",
  };
}
export const SpotPriceRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceRequest",
  encode(message: SpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpotPriceRequest {
    const obj = createBaseSpotPriceRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.baseAssetDenom)) obj.baseAssetDenom = String(object.baseAssetDenom);
    if (isSet(object.quoteAssetDenom)) obj.quoteAssetDenom = String(object.quoteAssetDenom);
    return obj;
  },
  toJSON(message: SpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
    message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpotPriceRequest>, I>>(object: I): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
};
function createBaseSpotPriceResponse(): SpotPriceResponse {
  return {
    spotPrice: "",
  };
}
export const SpotPriceResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceResponse",
  encode(message: SpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceResponse();
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
  fromJSON(object: any): SpotPriceResponse {
    const obj = createBaseSpotPriceResponse();
    if (isSet(object.spotPrice)) obj.spotPrice = String(object.spotPrice);
    return obj;
  },
  toJSON(message: SpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpotPriceResponse>, I>>(object: I): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
};
function createBaseTotalPoolLiquidityRequest(): TotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0),
  };
}
export const TotalPoolLiquidityRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest",
  encode(message: TotalPoolLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalPoolLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalPoolLiquidityRequest {
    const obj = createBaseTotalPoolLiquidityRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: TotalPoolLiquidityRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalPoolLiquidityRequest>, I>>(
    object: I,
  ): TotalPoolLiquidityRequest {
    const message = createBaseTotalPoolLiquidityRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseTotalPoolLiquidityResponse(): TotalPoolLiquidityResponse {
  return {
    liquidity: [],
  };
}
export const TotalPoolLiquidityResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse",
  encode(message: TotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalPoolLiquidityResponse {
    const obj = createBaseTotalPoolLiquidityResponse();
    if (Array.isArray(object?.liquidity)) obj.liquidity = object.liquidity.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: TotalPoolLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalPoolLiquidityResponse>, I>>(
    object: I,
  ): TotalPoolLiquidityResponse {
    const message = createBaseTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTotalLiquidityRequest(): TotalLiquidityRequest {
  return {};
}
export const TotalLiquidityRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityRequest",
  encode(_: TotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalLiquidityRequest();
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
  fromJSON(_: any): TotalLiquidityRequest {
    const obj = createBaseTotalLiquidityRequest();
    return obj;
  },
  toJSON(_: TotalLiquidityRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalLiquidityRequest>, I>>(_: I): TotalLiquidityRequest {
    const message = createBaseTotalLiquidityRequest();
    return message;
  },
};
function createBaseTotalLiquidityResponse(): TotalLiquidityResponse {
  return {
    liquidity: [],
  };
}
export const TotalLiquidityResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityResponse",
  encode(message: TotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalLiquidityResponse {
    const obj = createBaseTotalLiquidityResponse();
    if (Array.isArray(object?.liquidity)) obj.liquidity = object.liquidity.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: TotalLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalLiquidityResponse>, I>>(object: I): TotalLiquidityResponse {
    const message = createBaseTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTotalVolumeForPoolRequest(): TotalVolumeForPoolRequest {
  return {
    poolId: BigInt(0),
  };
}
export const TotalVolumeForPoolRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest",
  encode(message: TotalVolumeForPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalVolumeForPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalVolumeForPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalVolumeForPoolRequest {
    const obj = createBaseTotalVolumeForPoolRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: TotalVolumeForPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalVolumeForPoolRequest>, I>>(
    object: I,
  ): TotalVolumeForPoolRequest {
    const message = createBaseTotalVolumeForPoolRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseTotalVolumeForPoolResponse(): TotalVolumeForPoolResponse {
  return {
    volume: [],
  };
}
export const TotalVolumeForPoolResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse",
  encode(message: TotalVolumeForPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volume) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalVolumeForPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalVolumeForPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalVolumeForPoolResponse {
    const obj = createBaseTotalVolumeForPoolResponse();
    if (Array.isArray(object?.volume)) obj.volume = object.volume.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: TotalVolumeForPoolResponse): unknown {
    const obj: any = {};
    if (message.volume) {
      obj.volume = message.volume.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.volume = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalVolumeForPoolResponse>, I>>(
    object: I,
  ): TotalVolumeForPoolResponse {
    const message = createBaseTotalVolumeForPoolResponse();
    message.volume = object.volume?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTradingPairTakerFeeRequest(): TradingPairTakerFeeRequest {
  return {
    denom0: "",
    denom1: "",
  };
}
export const TradingPairTakerFeeRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest",
  encode(message: TradingPairTakerFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingPairTakerFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingPairTakerFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TradingPairTakerFeeRequest {
    const obj = createBaseTradingPairTakerFeeRequest();
    if (isSet(object.denom0)) obj.denom0 = String(object.denom0);
    if (isSet(object.denom1)) obj.denom1 = String(object.denom1);
    return obj;
  },
  toJSON(message: TradingPairTakerFeeRequest): unknown {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TradingPairTakerFeeRequest>, I>>(
    object: I,
  ): TradingPairTakerFeeRequest {
    const message = createBaseTradingPairTakerFeeRequest();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    return message;
  },
};
function createBaseTradingPairTakerFeeResponse(): TradingPairTakerFeeResponse {
  return {
    takerFee: "",
  };
}
export const TradingPairTakerFeeResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse",
  encode(message: TradingPairTakerFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerFee !== "") {
      writer.uint32(10).string(message.takerFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingPairTakerFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingPairTakerFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TradingPairTakerFeeResponse {
    const obj = createBaseTradingPairTakerFeeResponse();
    if (isSet(object.takerFee)) obj.takerFee = String(object.takerFee);
    return obj;
  },
  toJSON(message: TradingPairTakerFeeResponse): unknown {
    const obj: any = {};
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TradingPairTakerFeeResponse>, I>>(
    object: I,
  ): TradingPairTakerFeeResponse {
    const message = createBaseTradingPairTakerFeeResponse();
    message.takerFee = object.takerFee ?? "";
    return message;
  },
};
function createBaseEstimateTradeBasedOnPriceImpactRequest(): EstimateTradeBasedOnPriceImpactRequest {
  return {
    fromCoin: Coin.fromPartial({}),
    toCoinDenom: "",
    poolId: BigInt(0),
    maxPriceImpact: "",
    externalPrice: "",
  };
}
export const EstimateTradeBasedOnPriceImpactRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest",
  encode(
    message: EstimateTradeBasedOnPriceImpactRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fromCoin !== undefined) {
      Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.toCoinDenom !== "") {
      writer.uint32(18).string(message.toCoinDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.maxPriceImpact !== "") {
      writer.uint32(34).string(message.maxPriceImpact);
    }
    if (message.externalPrice !== "") {
      writer.uint32(42).string(message.externalPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.toCoinDenom = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.maxPriceImpact = reader.string();
          break;
        case 5:
          message.externalPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateTradeBasedOnPriceImpactRequest {
    const obj = createBaseEstimateTradeBasedOnPriceImpactRequest();
    if (isSet(object.fromCoin)) obj.fromCoin = Coin.fromJSON(object.fromCoin);
    if (isSet(object.toCoinDenom)) obj.toCoinDenom = String(object.toCoinDenom);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.maxPriceImpact)) obj.maxPriceImpact = String(object.maxPriceImpact);
    if (isSet(object.externalPrice)) obj.externalPrice = String(object.externalPrice);
    return obj;
  },
  toJSON(message: EstimateTradeBasedOnPriceImpactRequest): unknown {
    const obj: any = {};
    message.fromCoin !== undefined &&
      (obj.fromCoin = message.fromCoin ? Coin.toJSON(message.fromCoin) : undefined);
    message.toCoinDenom !== undefined && (obj.toCoinDenom = message.toCoinDenom);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.maxPriceImpact !== undefined && (obj.maxPriceImpact = message.maxPriceImpact);
    message.externalPrice !== undefined && (obj.externalPrice = message.externalPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateTradeBasedOnPriceImpactRequest>, I>>(
    object: I,
  ): EstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    if (object.fromCoin !== undefined && object.fromCoin !== null) {
      message.fromCoin = Coin.fromPartial(object.fromCoin);
    }
    message.toCoinDenom = object.toCoinDenom ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.maxPriceImpact = object.maxPriceImpact ?? "";
    message.externalPrice = object.externalPrice ?? "";
    return message;
  },
};
function createBaseEstimateTradeBasedOnPriceImpactResponse(): EstimateTradeBasedOnPriceImpactResponse {
  return {
    inputCoin: Coin.fromPartial({}),
    outputCoin: Coin.fromPartial({}),
  };
}
export const EstimateTradeBasedOnPriceImpactResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse",
  encode(
    message: EstimateTradeBasedOnPriceImpactResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.inputCoin !== undefined) {
      Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputCoin !== undefined) {
      Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateTradeBasedOnPriceImpactResponse {
    const obj = createBaseEstimateTradeBasedOnPriceImpactResponse();
    if (isSet(object.inputCoin)) obj.inputCoin = Coin.fromJSON(object.inputCoin);
    if (isSet(object.outputCoin)) obj.outputCoin = Coin.fromJSON(object.outputCoin);
    return obj;
  },
  toJSON(message: EstimateTradeBasedOnPriceImpactResponse): unknown {
    const obj: any = {};
    message.inputCoin !== undefined &&
      (obj.inputCoin = message.inputCoin ? Coin.toJSON(message.inputCoin) : undefined);
    message.outputCoin !== undefined &&
      (obj.outputCoin = message.outputCoin ? Coin.toJSON(message.outputCoin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateTradeBasedOnPriceImpactResponse>, I>>(
    object: I,
  ): EstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    if (object.inputCoin !== undefined && object.inputCoin !== null) {
      message.inputCoin = Coin.fromPartial(object.inputCoin);
    }
    if (object.outputCoin !== undefined && object.outputCoin !== null) {
      message.outputCoin = Coin.fromPartial(object.outputCoin);
    }
    return message;
  },
};
export interface Query {
  Params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** Estimates swap amount out given in. */
  EstimateSwapExactAmountIn(
    request: EstimateSwapExactAmountInRequest,
  ): Promise<EstimateSwapExactAmountInResponse>;
  /**
   * EstimateSwapExactAmountInWithPrimitiveTypes is an alternative query for
   * EstimateSwapExactAmountIn. Supports query via GRPC-Gateway by using
   * primitive types instead of repeated structs. Each index in the
   * routes_pool_id field corresponds to the respective routes_token_out_denom
   * value, thus they are required to have the same length and are grouped
   * together as pairs.
   * example usage:
   * http://0.0.0.0:1317/osmosis/poolmanager/v1beta1/1/estimate/
   * swap_exact_amount_in_with_primitive_types?token_in=100000stake&routes_token_out_denom=uatom
   * &routes_token_out_denom=uion&routes_pool_id=1&routes_pool_id=2
   */
  EstimateSwapExactAmountInWithPrimitiveTypes(
    request: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
  ): Promise<EstimateSwapExactAmountInResponse>;
  EstimateSinglePoolSwapExactAmountIn(
    request: EstimateSinglePoolSwapExactAmountInRequest,
  ): Promise<EstimateSwapExactAmountInResponse>;
  /** Estimates swap amount in given out. */
  EstimateSwapExactAmountOut(
    request: EstimateSwapExactAmountOutRequest,
  ): Promise<EstimateSwapExactAmountOutResponse>;
  /** Estimates swap amount in given out. */
  EstimateSwapExactAmountOutWithPrimitiveTypes(
    request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
  ): Promise<EstimateSwapExactAmountOutResponse>;
  EstimateSinglePoolSwapExactAmountOut(
    request: EstimateSinglePoolSwapExactAmountOutRequest,
  ): Promise<EstimateSwapExactAmountOutResponse>;
  /** Returns the total number of pools existing in Osmosis. */
  NumPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
  /** Pool returns the Pool specified by the pool id */
  Pool(request: PoolRequest): Promise<PoolResponse>;
  /** AllPools returns all pools on the Osmosis chain sorted by IDs. */
  AllPools(request?: AllPoolsRequest): Promise<AllPoolsResponse>;
  /** ListPoolsByDenom return all pools by denom */
  ListPoolsByDenom(request: ListPoolsByDenomRequest): Promise<ListPoolsByDenomResponse>;
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  SpotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
  /** TotalPoolLiquidity returns the total liquidity of the specified pool. */
  TotalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse>;
  /** TotalLiquidity returns the total liquidity across all pools. */
  TotalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse>;
  /** TotalVolumeForPool returns the total volume of the specified pool. */
  TotalVolumeForPool(request: TotalVolumeForPoolRequest): Promise<TotalVolumeForPoolResponse>;
  /** TradingPairTakerFee returns the taker fee for a given set of denoms */
  TradingPairTakerFee(request: TradingPairTakerFeeRequest): Promise<TradingPairTakerFeeResponse>;
  /**
   * EstimateTradeBasedOnPriceImpact returns an estimated trade based on price
   * impact, if a trade cannot be estimated a 0 input and 0 output would be
   * returned.
   */
  EstimateTradeBasedOnPriceImpact(
    request: EstimateTradeBasedOnPriceImpactRequest,
  ): Promise<EstimateTradeBasedOnPriceImpactResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EstimateSwapExactAmountIn = this.EstimateSwapExactAmountIn.bind(this);
    this.EstimateSwapExactAmountInWithPrimitiveTypes =
      this.EstimateSwapExactAmountInWithPrimitiveTypes.bind(this);
    this.EstimateSinglePoolSwapExactAmountIn = this.EstimateSinglePoolSwapExactAmountIn.bind(this);
    this.EstimateSwapExactAmountOut = this.EstimateSwapExactAmountOut.bind(this);
    this.EstimateSwapExactAmountOutWithPrimitiveTypes =
      this.EstimateSwapExactAmountOutWithPrimitiveTypes.bind(this);
    this.EstimateSinglePoolSwapExactAmountOut = this.EstimateSinglePoolSwapExactAmountOut.bind(this);
    this.NumPools = this.NumPools.bind(this);
    this.Pool = this.Pool.bind(this);
    this.AllPools = this.AllPools.bind(this);
    this.ListPoolsByDenom = this.ListPoolsByDenom.bind(this);
    this.SpotPrice = this.SpotPrice.bind(this);
    this.TotalPoolLiquidity = this.TotalPoolLiquidity.bind(this);
    this.TotalLiquidity = this.TotalLiquidity.bind(this);
    this.TotalVolumeForPool = this.TotalVolumeForPool.bind(this);
    this.TradingPairTakerFee = this.TradingPairTakerFee.bind(this);
    this.EstimateTradeBasedOnPriceImpact = this.EstimateTradeBasedOnPriceImpact.bind(this);
  }
  Params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Params", data);
    return promise.then((data) => ParamsResponse.decode(new BinaryReader(data)));
  }
  EstimateSwapExactAmountIn(
    request: EstimateSwapExactAmountInRequest,
  ): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then((data) => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  EstimateSwapExactAmountInWithPrimitiveTypes(
    request: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
  ): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.poolmanager.v1beta1.Query",
      "EstimateSwapExactAmountInWithPrimitiveTypes",
      data,
    );
    return promise.then((data) => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  EstimateSinglePoolSwapExactAmountIn(
    request: EstimateSinglePoolSwapExactAmountInRequest,
  ): Promise<EstimateSwapExactAmountInResponse> {
    const data = EstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.poolmanager.v1beta1.Query",
      "EstimateSinglePoolSwapExactAmountIn",
      data,
    );
    return promise.then((data) => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  EstimateSwapExactAmountOut(
    request: EstimateSwapExactAmountOutRequest,
  ): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then((data) => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  EstimateSwapExactAmountOutWithPrimitiveTypes(
    request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
  ): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.poolmanager.v1beta1.Query",
      "EstimateSwapExactAmountOutWithPrimitiveTypes",
      data,
    );
    return promise.then((data) => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  EstimateSinglePoolSwapExactAmountOut(
    request: EstimateSinglePoolSwapExactAmountOutRequest,
  ): Promise<EstimateSwapExactAmountOutResponse> {
    const data = EstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.poolmanager.v1beta1.Query",
      "EstimateSinglePoolSwapExactAmountOut",
      data,
    );
    return promise.then((data) => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  NumPools(request: NumPoolsRequest = {}): Promise<NumPoolsResponse> {
    const data = NumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "NumPools", data);
    return promise.then((data) => NumPoolsResponse.decode(new BinaryReader(data)));
  }
  Pool(request: PoolRequest): Promise<PoolResponse> {
    const data = PoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Pool", data);
    return promise.then((data) => PoolResponse.decode(new BinaryReader(data)));
  }
  AllPools(request: AllPoolsRequest = {}): Promise<AllPoolsResponse> {
    const data = AllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "AllPools", data);
    return promise.then((data) => AllPoolsResponse.decode(new BinaryReader(data)));
  }
  ListPoolsByDenom(request: ListPoolsByDenomRequest): Promise<ListPoolsByDenomResponse> {
    const data = ListPoolsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "ListPoolsByDenom", data);
    return promise.then((data) => ListPoolsByDenomResponse.decode(new BinaryReader(data)));
  }
  SpotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse> {
    const data = SpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "SpotPrice", data);
    return promise.then((data) => SpotPriceResponse.decode(new BinaryReader(data)));
  }
  TotalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse> {
    const data = TotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalPoolLiquidity", data);
    return promise.then((data) => TotalPoolLiquidityResponse.decode(new BinaryReader(data)));
  }
  TotalLiquidity(request: TotalLiquidityRequest = {}): Promise<TotalLiquidityResponse> {
    const data = TotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalLiquidity", data);
    return promise.then((data) => TotalLiquidityResponse.decode(new BinaryReader(data)));
  }
  TotalVolumeForPool(request: TotalVolumeForPoolRequest): Promise<TotalVolumeForPoolResponse> {
    const data = TotalVolumeForPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalVolumeForPool", data);
    return promise.then((data) => TotalVolumeForPoolResponse.decode(new BinaryReader(data)));
  }
  TradingPairTakerFee(request: TradingPairTakerFeeRequest): Promise<TradingPairTakerFeeResponse> {
    const data = TradingPairTakerFeeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TradingPairTakerFee", data);
    return promise.then((data) => TradingPairTakerFeeResponse.decode(new BinaryReader(data)));
  }
  EstimateTradeBasedOnPriceImpact(
    request: EstimateTradeBasedOnPriceImpactRequest,
  ): Promise<EstimateTradeBasedOnPriceImpactResponse> {
    const data = EstimateTradeBasedOnPriceImpactRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.poolmanager.v1beta1.Query",
      "EstimateTradeBasedOnPriceImpact",
      data,
    );
    return promise.then((data) => EstimateTradeBasedOnPriceImpactResponse.decode(new BinaryReader(data)));
  }
}
