import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.poolmanager.v1beta1";
/** =============================== Params */
export interface ParamsRequest {
}
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
export interface NumPoolsRequest {
}
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
export interface AllPoolsRequest {
}
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
export interface TotalLiquidityRequest {
}
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
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            poolCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            takerFeeParams?: {
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                nonOsmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                adminAddresses?: string[] | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: string[] | undefined;
            } | undefined;
            authorizedQuoteDenoms?: string[] | undefined;
        } | undefined;
    } & {
        params?: ({
            poolCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            takerFeeParams?: {
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                nonOsmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                adminAddresses?: string[] | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: string[] | undefined;
            } | undefined;
            authorizedQuoteDenoms?: string[] | undefined;
        } & {
            poolCreationFee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["poolCreationFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["params"]["poolCreationFee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            takerFeeParams?: ({
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                nonOsmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                adminAddresses?: string[] | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: string[] | undefined;
            } & {
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: ({
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & Record<Exclude<keyof I["params"]["takerFeeParams"]["osmoTakerFeeDistribution"], keyof import("./genesis").TakerFeeDistributionPercentage>, never>) | undefined;
                nonOsmoTakerFeeDistribution?: ({
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & Record<Exclude<keyof I["params"]["takerFeeParams"]["nonOsmoTakerFeeDistribution"], keyof import("./genesis").TakerFeeDistributionPercentage>, never>) | undefined;
                adminAddresses?: (string[] & string[] & Record<Exclude<keyof I["params"]["takerFeeParams"]["adminAddresses"], keyof string[]>, never>) | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: (string[] & string[] & Record<Exclude<keyof I["params"]["takerFeeParams"]["reducedFeeWhitelist"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["takerFeeParams"], keyof import("./genesis").TakerFeeParams>, never>) | undefined;
            authorizedQuoteDenoms?: (string[] & string[] & Record<Exclude<keyof I["params"]["authorizedQuoteDenoms"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): ParamsResponse;
};
export declare const EstimateSwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest;
    fromJSON(object: any): EstimateSwapExactAmountInRequest;
    toJSON(message: EstimateSwapExactAmountInRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        routes?: {
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        }[] | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        routes?: ({
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        } & {
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        } & Record<Exclude<keyof I["routes"][number], keyof SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I["routes"], keyof {
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EstimateSwapExactAmountInRequest>, never>>(object: I): EstimateSwapExactAmountInRequest;
};
export declare const EstimateSwapExactAmountInWithPrimitiveTypesRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    fromJSON(object: any): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
    toJSON(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        routesPoolId?: bigint[] | undefined;
        routesTokenOutDenom?: string[] | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        routesPoolId?: (bigint[] & bigint[] & Record<Exclude<keyof I["routesPoolId"], keyof bigint[]>, never>) | undefined;
        routesTokenOutDenom?: (string[] & string[] & Record<Exclude<keyof I["routesTokenOutDenom"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EstimateSwapExactAmountInWithPrimitiveTypesRequest>, never>>(object: I): EstimateSwapExactAmountInWithPrimitiveTypesRequest;
};
export declare const EstimateSinglePoolSwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: EstimateSinglePoolSwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountInRequest;
    fromJSON(object: any): EstimateSinglePoolSwapExactAmountInRequest;
    toJSON(message: EstimateSinglePoolSwapExactAmountInRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        tokenOutDenom?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        tokenOutDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof EstimateSinglePoolSwapExactAmountInRequest>, never>>(object: I): EstimateSinglePoolSwapExactAmountInRequest;
};
export declare const EstimateSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse;
    fromJSON(object: any): EstimateSwapExactAmountInResponse;
    toJSON(message: EstimateSwapExactAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string | undefined;
    } & {
        tokenOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): EstimateSwapExactAmountInResponse;
};
export declare const EstimateSwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest;
    fromJSON(object: any): EstimateSwapExactAmountOutRequest;
    toJSON(message: EstimateSwapExactAmountOutRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        routes?: {
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        }[] | undefined;
        tokenOut?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        routes?: ({
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        } & {
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        } & Record<Exclude<keyof I["routes"][number], keyof SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I["routes"], keyof {
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        }[]>, never>) | undefined;
        tokenOut?: string | undefined;
    } & Record<Exclude<keyof I, keyof EstimateSwapExactAmountOutRequest>, never>>(object: I): EstimateSwapExactAmountOutRequest;
};
export declare const EstimateSwapExactAmountOutWithPrimitiveTypesRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    fromJSON(object: any): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
    toJSON(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        routesPoolId?: bigint[] | undefined;
        routesTokenInDenom?: string[] | undefined;
        tokenOut?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        routesPoolId?: (bigint[] & bigint[] & Record<Exclude<keyof I["routesPoolId"], keyof bigint[]>, never>) | undefined;
        routesTokenInDenom?: (string[] & string[] & Record<Exclude<keyof I["routesTokenInDenom"], keyof string[]>, never>) | undefined;
        tokenOut?: string | undefined;
    } & Record<Exclude<keyof I, keyof EstimateSwapExactAmountOutWithPrimitiveTypesRequest>, never>>(object: I): EstimateSwapExactAmountOutWithPrimitiveTypesRequest;
};
export declare const EstimateSinglePoolSwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: EstimateSinglePoolSwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountOutRequest;
    fromJSON(object: any): EstimateSinglePoolSwapExactAmountOutRequest;
    toJSON(message: EstimateSinglePoolSwapExactAmountOutRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
        tokenOut?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
        tokenOut?: string | undefined;
    } & Record<Exclude<keyof I, keyof EstimateSinglePoolSwapExactAmountOutRequest>, never>>(object: I): EstimateSinglePoolSwapExactAmountOutRequest;
};
export declare const EstimateSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse;
    fromJSON(object: any): EstimateSwapExactAmountOutResponse;
    toJSON(message: EstimateSwapExactAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string | undefined;
    } & {
        tokenInAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): EstimateSwapExactAmountOutResponse;
};
export declare const NumPoolsRequest: {
    typeUrl: string;
    encode(_: NumPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsRequest;
    fromJSON(_: any): NumPoolsRequest;
    toJSON(_: NumPoolsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): NumPoolsRequest;
};
export declare const NumPoolsResponse: {
    typeUrl: string;
    encode(message: NumPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsResponse;
    fromJSON(object: any): NumPoolsResponse;
    toJSON(message: NumPoolsResponse): unknown;
    fromPartial<I extends {
        numPools?: bigint | undefined;
    } & {
        numPools?: bigint | undefined;
    } & Record<Exclude<keyof I, "numPools">, never>>(object: I): NumPoolsResponse;
};
export declare const PoolRequest: {
    typeUrl: string;
    encode(message: PoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolRequest;
    fromJSON(object: any): PoolRequest;
    toJSON(message: PoolRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): PoolRequest;
};
export declare const PoolResponse: {
    typeUrl: string;
    encode(message: PoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolResponse;
    fromJSON(object: any): PoolResponse;
    toJSON(message: PoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        pool?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): PoolResponse;
};
export declare const AllPoolsRequest: {
    typeUrl: string;
    encode(_: AllPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsRequest;
    fromJSON(_: any): AllPoolsRequest;
    toJSON(_: AllPoolsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): AllPoolsRequest;
};
export declare const AllPoolsResponse: {
    typeUrl: string;
    encode(message: AllPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsResponse;
    fromJSON(object: any): AllPoolsResponse;
    toJSON(message: AllPoolsResponse): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        pools?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "pools">, never>>(object: I): AllPoolsResponse;
};
export declare const ListPoolsByDenomRequest: {
    typeUrl: string;
    encode(message: ListPoolsByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ListPoolsByDenomRequest;
    fromJSON(object: any): ListPoolsByDenomRequest;
    toJSON(message: ListPoolsByDenomRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): ListPoolsByDenomRequest;
};
export declare const ListPoolsByDenomResponse: {
    typeUrl: string;
    encode(message: ListPoolsByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ListPoolsByDenomResponse;
    fromJSON(object: any): ListPoolsByDenomResponse;
    toJSON(message: ListPoolsByDenomResponse): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        pools?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "pools">, never>>(object: I): ListPoolsByDenomResponse;
};
export declare const SpotPriceRequest: {
    typeUrl: string;
    encode(message: SpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceRequest;
    fromJSON(object: any): SpotPriceRequest;
    toJSON(message: SpotPriceRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SpotPriceRequest>, never>>(object: I): SpotPriceRequest;
};
export declare const SpotPriceResponse: {
    typeUrl: string;
    encode(message: SpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceResponse;
    fromJSON(object: any): SpotPriceResponse;
    toJSON(message: SpotPriceResponse): unknown;
    fromPartial<I extends {
        spotPrice?: string | undefined;
    } & {
        spotPrice?: string | undefined;
    } & Record<Exclude<keyof I, "spotPrice">, never>>(object: I): SpotPriceResponse;
};
export declare const TotalPoolLiquidityRequest: {
    typeUrl: string;
    encode(message: TotalPoolLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalPoolLiquidityRequest;
    fromJSON(object: any): TotalPoolLiquidityRequest;
    toJSON(message: TotalPoolLiquidityRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): TotalPoolLiquidityRequest;
};
export declare const TotalPoolLiquidityResponse: {
    typeUrl: string;
    encode(message: TotalPoolLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalPoolLiquidityResponse;
    fromJSON(object: any): TotalPoolLiquidityResponse;
    toJSON(message: TotalPoolLiquidityResponse): unknown;
    fromPartial<I extends {
        liquidity?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        liquidity?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["liquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["liquidity"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "liquidity">, never>>(object: I): TotalPoolLiquidityResponse;
};
export declare const TotalLiquidityRequest: {
    typeUrl: string;
    encode(_: TotalLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalLiquidityRequest;
    fromJSON(_: any): TotalLiquidityRequest;
    toJSON(_: TotalLiquidityRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): TotalLiquidityRequest;
};
export declare const TotalLiquidityResponse: {
    typeUrl: string;
    encode(message: TotalLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalLiquidityResponse;
    fromJSON(object: any): TotalLiquidityResponse;
    toJSON(message: TotalLiquidityResponse): unknown;
    fromPartial<I extends {
        liquidity?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        liquidity?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["liquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["liquidity"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "liquidity">, never>>(object: I): TotalLiquidityResponse;
};
export declare const TotalVolumeForPoolRequest: {
    typeUrl: string;
    encode(message: TotalVolumeForPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalVolumeForPoolRequest;
    fromJSON(object: any): TotalVolumeForPoolRequest;
    toJSON(message: TotalVolumeForPoolRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): TotalVolumeForPoolRequest;
};
export declare const TotalVolumeForPoolResponse: {
    typeUrl: string;
    encode(message: TotalVolumeForPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalVolumeForPoolResponse;
    fromJSON(object: any): TotalVolumeForPoolResponse;
    toJSON(message: TotalVolumeForPoolResponse): unknown;
    fromPartial<I extends {
        volume?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        volume?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["volume"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["volume"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "volume">, never>>(object: I): TotalVolumeForPoolResponse;
};
export declare const TradingPairTakerFeeRequest: {
    typeUrl: string;
    encode(message: TradingPairTakerFeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TradingPairTakerFeeRequest;
    fromJSON(object: any): TradingPairTakerFeeRequest;
    toJSON(message: TradingPairTakerFeeRequest): unknown;
    fromPartial<I extends {
        denom0?: string | undefined;
        denom1?: string | undefined;
    } & {
        denom0?: string | undefined;
        denom1?: string | undefined;
    } & Record<Exclude<keyof I, keyof TradingPairTakerFeeRequest>, never>>(object: I): TradingPairTakerFeeRequest;
};
export declare const TradingPairTakerFeeResponse: {
    typeUrl: string;
    encode(message: TradingPairTakerFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TradingPairTakerFeeResponse;
    fromJSON(object: any): TradingPairTakerFeeResponse;
    toJSON(message: TradingPairTakerFeeResponse): unknown;
    fromPartial<I extends {
        takerFee?: string | undefined;
    } & {
        takerFee?: string | undefined;
    } & Record<Exclude<keyof I, "takerFee">, never>>(object: I): TradingPairTakerFeeResponse;
};
export declare const EstimateTradeBasedOnPriceImpactRequest: {
    typeUrl: string;
    encode(message: EstimateTradeBasedOnPriceImpactRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactRequest;
    fromJSON(object: any): EstimateTradeBasedOnPriceImpactRequest;
    toJSON(message: EstimateTradeBasedOnPriceImpactRequest): unknown;
    fromPartial<I extends {
        fromCoin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        toCoinDenom?: string | undefined;
        poolId?: bigint | undefined;
        maxPriceImpact?: string | undefined;
        externalPrice?: string | undefined;
    } & {
        fromCoin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["fromCoin"], keyof Coin>, never>) | undefined;
        toCoinDenom?: string | undefined;
        poolId?: bigint | undefined;
        maxPriceImpact?: string | undefined;
        externalPrice?: string | undefined;
    } & Record<Exclude<keyof I, keyof EstimateTradeBasedOnPriceImpactRequest>, never>>(object: I): EstimateTradeBasedOnPriceImpactRequest;
};
export declare const EstimateTradeBasedOnPriceImpactResponse: {
    typeUrl: string;
    encode(message: EstimateTradeBasedOnPriceImpactResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactResponse;
    fromJSON(object: any): EstimateTradeBasedOnPriceImpactResponse;
    toJSON(message: EstimateTradeBasedOnPriceImpactResponse): unknown;
    fromPartial<I extends {
        inputCoin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        outputCoin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        inputCoin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["inputCoin"], keyof Coin>, never>) | undefined;
        outputCoin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["outputCoin"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EstimateTradeBasedOnPriceImpactResponse>, never>>(object: I): EstimateTradeBasedOnPriceImpactResponse;
};
export interface Query {
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    /** Estimates swap amount out given in. */
    EstimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
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
    EstimateSwapExactAmountInWithPrimitiveTypes(request: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountInResponse>;
    EstimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    /** Estimates swap amount in given out. */
    EstimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    /** Estimates swap amount in given out. */
    EstimateSwapExactAmountOutWithPrimitiveTypes(request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountOutResponse>;
    EstimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
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
    EstimateTradeBasedOnPriceImpact(request: EstimateTradeBasedOnPriceImpactRequest): Promise<EstimateTradeBasedOnPriceImpactResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    EstimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    EstimateSwapExactAmountInWithPrimitiveTypes(request: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountInResponse>;
    EstimateSinglePoolSwapExactAmountIn(request: EstimateSinglePoolSwapExactAmountInRequest): Promise<EstimateSwapExactAmountInResponse>;
    EstimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    EstimateSwapExactAmountOutWithPrimitiveTypes(request: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<EstimateSwapExactAmountOutResponse>;
    EstimateSinglePoolSwapExactAmountOut(request: EstimateSinglePoolSwapExactAmountOutRequest): Promise<EstimateSwapExactAmountOutResponse>;
    NumPools(request?: NumPoolsRequest): Promise<NumPoolsResponse>;
    Pool(request: PoolRequest): Promise<PoolResponse>;
    AllPools(request?: AllPoolsRequest): Promise<AllPoolsResponse>;
    ListPoolsByDenom(request: ListPoolsByDenomRequest): Promise<ListPoolsByDenomResponse>;
    SpotPrice(request: SpotPriceRequest): Promise<SpotPriceResponse>;
    TotalPoolLiquidity(request: TotalPoolLiquidityRequest): Promise<TotalPoolLiquidityResponse>;
    TotalLiquidity(request?: TotalLiquidityRequest): Promise<TotalLiquidityResponse>;
    TotalVolumeForPool(request: TotalVolumeForPoolRequest): Promise<TotalVolumeForPoolResponse>;
    TradingPairTakerFee(request: TradingPairTakerFeeRequest): Promise<TradingPairTakerFeeResponse>;
    EstimateTradeBasedOnPriceImpact(request: EstimateTradeBasedOnPriceImpactRequest): Promise<EstimateTradeBasedOnPriceImpactResponse>;
}
