import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../poolmanager/v1beta1/swap_route";
import { Any } from "../../../google/protobuf/any";
import { MigrationRecords } from "./shared";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequest {
    poolId: bigint;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponse {
    pool?: Any;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryPoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequest {
}
/** @deprecated */
export interface QueryNumPoolsResponse {
    numPools: bigint;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
    poolId: bigint;
}
export interface QueryPoolTypeResponse {
    poolType: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
    poolId: bigint;
    tokensIn: Coin[];
}
export interface QueryCalcJoinPoolSharesResponse {
    shareOutAmount: string;
    tokensOut: Coin[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
    poolId: bigint;
    shareInAmount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
    tokensOut: Coin[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: bigint;
}
export interface QueryPoolParamsResponse {
    params?: Any;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequest {
    poolId: bigint;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponse {
    liquidity: Coin[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: bigint;
}
export interface QueryTotalSharesResponse {
    totalShares: Coin;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
    poolId: bigint;
    tokensIn: Coin[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
    tokensOut: Coin[];
    sharesOut: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
export interface QueryPoolsWithFilterRequest {
    /**
     * String of the coins in single string separated by comma. Ex)
     * 10uatom,100uosmo
     */
    minLiquidity: string;
    poolType: string;
    pagination?: PageRequest;
}
export interface QueryPoolsWithFilterResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QuerySwapExactAmountInRequest {
    sender: string;
    poolId: bigint;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
/** @deprecated */
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
export interface QuerySwapExactAmountOutRequest {
    sender: string;
    poolId: bigint;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
/** @deprecated */
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCFMMRequest {
    cfmmPoolId: bigint;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponse {
    concentratedPoolId: bigint;
}
/** =============================== QueryCFMMConcentratedPoolLinks */
export interface QueryCFMMConcentratedPoolLinksRequest {
}
export interface QueryCFMMConcentratedPoolLinksResponse {
    migrationRecords?: MigrationRecords;
}
export declare const QueryPoolRequest: {
    typeUrl: string;
    encode(message: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
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
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPoolsResponse>, never>>(object: I): QueryPoolsResponse;
};
export declare const QueryNumPoolsRequest: {
    typeUrl: string;
    encode(_: QueryNumPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsRequest;
    fromJSON(_: any): QueryNumPoolsRequest;
    toJSON(_: QueryNumPoolsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryNumPoolsRequest;
};
export declare const QueryNumPoolsResponse: {
    typeUrl: string;
    encode(message: QueryNumPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsResponse;
    fromJSON(object: any): QueryNumPoolsResponse;
    toJSON(message: QueryNumPoolsResponse): unknown;
    fromPartial<I extends {
        numPools?: bigint | undefined;
    } & {
        numPools?: bigint | undefined;
    } & Record<Exclude<keyof I, "numPools">, never>>(object: I): QueryNumPoolsResponse;
};
export declare const QueryPoolTypeRequest: {
    typeUrl: string;
    encode(message: QueryPoolTypeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeRequest;
    fromJSON(object: any): QueryPoolTypeRequest;
    toJSON(message: QueryPoolTypeRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryPoolTypeRequest;
};
export declare const QueryPoolTypeResponse: {
    typeUrl: string;
    encode(message: QueryPoolTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeResponse;
    fromJSON(object: any): QueryPoolTypeResponse;
    toJSON(message: QueryPoolTypeResponse): unknown;
    fromPartial<I extends {
        poolType?: string | undefined;
    } & {
        poolType?: string | undefined;
    } & Record<Exclude<keyof I, "poolType">, never>>(object: I): QueryPoolTypeResponse;
};
export declare const QueryCalcJoinPoolSharesRequest: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest;
    fromJSON(object: any): QueryCalcJoinPoolSharesRequest;
    toJSON(message: QueryCalcJoinPoolSharesRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokensIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        poolId?: bigint | undefined;
        tokensIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokensIn"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokensIn"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryCalcJoinPoolSharesRequest>, never>>(object: I): QueryCalcJoinPoolSharesRequest;
};
export declare const QueryCalcJoinPoolSharesResponse: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse;
    fromJSON(object: any): QueryCalcJoinPoolSharesResponse;
    toJSON(message: QueryCalcJoinPoolSharesResponse): unknown;
    fromPartial<I extends {
        shareOutAmount?: string | undefined;
        tokensOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        shareOutAmount?: string | undefined;
        tokensOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokensOut"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokensOut"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryCalcJoinPoolSharesResponse>, never>>(object: I): QueryCalcJoinPoolSharesResponse;
};
export declare const QueryCalcExitPoolCoinsFromSharesRequest: {
    typeUrl: string;
    encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesRequest;
    toJSON(message: QueryCalcExitPoolCoinsFromSharesRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        shareInAmount?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        shareInAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCalcExitPoolCoinsFromSharesRequest>, never>>(object: I): QueryCalcExitPoolCoinsFromSharesRequest;
};
export declare const QueryCalcExitPoolCoinsFromSharesResponse: {
    typeUrl: string;
    encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesResponse;
    toJSON(message: QueryCalcExitPoolCoinsFromSharesResponse): unknown;
    fromPartial<I extends {
        tokensOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        tokensOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokensOut"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokensOut"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "tokensOut">, never>>(object: I): QueryCalcExitPoolCoinsFromSharesResponse;
};
export declare const QueryPoolParamsRequest: {
    typeUrl: string;
    encode(message: QueryPoolParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsRequest;
    fromJSON(object: any): QueryPoolParamsRequest;
    toJSON(message: QueryPoolParamsRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryPoolParamsRequest;
};
export declare const QueryPoolParamsResponse: {
    typeUrl: string;
    encode(message: QueryPoolParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsResponse;
    fromJSON(object: any): QueryPoolParamsResponse;
    toJSON(message: QueryPoolParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        params?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["params"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryPoolParamsResponse;
};
export declare const QueryTotalPoolLiquidityRequest: {
    typeUrl: string;
    encode(message: QueryTotalPoolLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest;
    fromJSON(object: any): QueryTotalPoolLiquidityRequest;
    toJSON(message: QueryTotalPoolLiquidityRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryTotalPoolLiquidityRequest;
};
export declare const QueryTotalPoolLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryTotalPoolLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse;
    fromJSON(object: any): QueryTotalPoolLiquidityResponse;
    toJSON(message: QueryTotalPoolLiquidityResponse): unknown;
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
    } & Record<Exclude<keyof I, "liquidity">, never>>(object: I): QueryTotalPoolLiquidityResponse;
};
export declare const QueryTotalSharesRequest: {
    typeUrl: string;
    encode(message: QueryTotalSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesRequest;
    fromJSON(object: any): QueryTotalSharesRequest;
    toJSON(message: QueryTotalSharesRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryTotalSharesRequest;
};
export declare const QueryTotalSharesResponse: {
    typeUrl: string;
    encode(message: QueryTotalSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesResponse;
    fromJSON(object: any): QueryTotalSharesResponse;
    toJSON(message: QueryTotalSharesResponse): unknown;
    fromPartial<I extends {
        totalShares?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        totalShares?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalShares"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, "totalShares">, never>>(object: I): QueryTotalSharesResponse;
};
export declare const QueryCalcJoinPoolNoSwapSharesRequest: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesRequest;
    toJSON(message: QueryCalcJoinPoolNoSwapSharesRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokensIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        poolId?: bigint | undefined;
        tokensIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokensIn"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokensIn"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryCalcJoinPoolNoSwapSharesRequest>, never>>(object: I): QueryCalcJoinPoolNoSwapSharesRequest;
};
export declare const QueryCalcJoinPoolNoSwapSharesResponse: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesResponse;
    toJSON(message: QueryCalcJoinPoolNoSwapSharesResponse): unknown;
    fromPartial<I extends {
        tokensOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        sharesOut?: string | undefined;
    } & {
        tokensOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokensOut"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokensOut"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        sharesOut?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCalcJoinPoolNoSwapSharesResponse>, never>>(object: I): QueryCalcJoinPoolNoSwapSharesResponse;
};
export declare const QuerySpotPriceRequest: {
    typeUrl: string;
    encode(message: QuerySpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromJSON(object: any): QuerySpotPriceRequest;
    toJSON(message: QuerySpotPriceRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof QuerySpotPriceRequest>, never>>(object: I): QuerySpotPriceRequest;
};
export declare const QueryPoolsWithFilterRequest: {
    typeUrl: string;
    encode(message: QueryPoolsWithFilterRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterRequest;
    fromJSON(object: any): QueryPoolsWithFilterRequest;
    toJSON(message: QueryPoolsWithFilterRequest): unknown;
    fromPartial<I extends {
        minLiquidity?: string | undefined;
        poolType?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        minLiquidity?: string | undefined;
        poolType?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPoolsWithFilterRequest>, never>>(object: I): QueryPoolsWithFilterRequest;
};
export declare const QueryPoolsWithFilterResponse: {
    typeUrl: string;
    encode(message: QueryPoolsWithFilterResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterResponse;
    fromJSON(object: any): QueryPoolsWithFilterResponse;
    toJSON(message: QueryPoolsWithFilterResponse): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPoolsWithFilterResponse>, never>>(object: I): QueryPoolsWithFilterResponse;
};
export declare const QuerySpotPriceResponse: {
    typeUrl: string;
    encode(message: QuerySpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromJSON(object: any): QuerySpotPriceResponse;
    toJSON(message: QuerySpotPriceResponse): unknown;
    fromPartial<I extends {
        spotPrice?: string | undefined;
    } & {
        spotPrice?: string | undefined;
    } & Record<Exclude<keyof I, "spotPrice">, never>>(object: I): QuerySpotPriceResponse;
};
export declare const QuerySwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInRequest;
    fromJSON(object: any): QuerySwapExactAmountInRequest;
    toJSON(message: QuerySwapExactAmountInRequest): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        routes?: {
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QuerySwapExactAmountInRequest>, never>>(object: I): QuerySwapExactAmountInRequest;
};
export declare const QuerySwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInResponse;
    fromJSON(object: any): QuerySwapExactAmountInResponse;
    toJSON(message: QuerySwapExactAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string | undefined;
    } & {
        tokenOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): QuerySwapExactAmountInResponse;
};
export declare const QuerySwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest;
    fromJSON(object: any): QuerySwapExactAmountOutRequest;
    toJSON(message: QuerySwapExactAmountOutRequest): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        routes?: {
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        }[] | undefined;
        tokenOut?: string | undefined;
    } & {
        sender?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QuerySwapExactAmountOutRequest>, never>>(object: I): QuerySwapExactAmountOutRequest;
};
export declare const QuerySwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse;
    fromJSON(object: any): QuerySwapExactAmountOutResponse;
    toJSON(message: QuerySwapExactAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string | undefined;
    } & {
        tokenInAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): QuerySwapExactAmountOutResponse;
};
export declare const QueryTotalLiquidityRequest: {
    typeUrl: string;
    encode(_: QueryTotalLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityRequest;
    fromJSON(_: any): QueryTotalLiquidityRequest;
    toJSON(_: QueryTotalLiquidityRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryTotalLiquidityRequest;
};
export declare const QueryTotalLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryTotalLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityResponse;
    fromJSON(object: any): QueryTotalLiquidityResponse;
    toJSON(message: QueryTotalLiquidityResponse): unknown;
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
    } & Record<Exclude<keyof I, "liquidity">, never>>(object: I): QueryTotalLiquidityResponse;
};
export declare const QueryConcentratedPoolIdLinkFromCFMMRequest: {
    typeUrl: string;
    encode(message: QueryConcentratedPoolIdLinkFromCFMMRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConcentratedPoolIdLinkFromCFMMRequest;
    fromJSON(object: any): QueryConcentratedPoolIdLinkFromCFMMRequest;
    toJSON(message: QueryConcentratedPoolIdLinkFromCFMMRequest): unknown;
    fromPartial<I extends {
        cfmmPoolId?: bigint | undefined;
    } & {
        cfmmPoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "cfmmPoolId">, never>>(object: I): QueryConcentratedPoolIdLinkFromCFMMRequest;
};
export declare const QueryConcentratedPoolIdLinkFromCFMMResponse: {
    typeUrl: string;
    encode(message: QueryConcentratedPoolIdLinkFromCFMMResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConcentratedPoolIdLinkFromCFMMResponse;
    fromJSON(object: any): QueryConcentratedPoolIdLinkFromCFMMResponse;
    toJSON(message: QueryConcentratedPoolIdLinkFromCFMMResponse): unknown;
    fromPartial<I extends {
        concentratedPoolId?: bigint | undefined;
    } & {
        concentratedPoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "concentratedPoolId">, never>>(object: I): QueryConcentratedPoolIdLinkFromCFMMResponse;
};
export declare const QueryCFMMConcentratedPoolLinksRequest: {
    typeUrl: string;
    encode(_: QueryCFMMConcentratedPoolLinksRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCFMMConcentratedPoolLinksRequest;
    fromJSON(_: any): QueryCFMMConcentratedPoolLinksRequest;
    toJSON(_: QueryCFMMConcentratedPoolLinksRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryCFMMConcentratedPoolLinksRequest;
};
export declare const QueryCFMMConcentratedPoolLinksResponse: {
    typeUrl: string;
    encode(message: QueryCFMMConcentratedPoolLinksResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCFMMConcentratedPoolLinksResponse;
    fromJSON(object: any): QueryCFMMConcentratedPoolLinksResponse;
    toJSON(message: QueryCFMMConcentratedPoolLinksResponse): unknown;
    fromPartial<I extends {
        migrationRecords?: {
            balancerToConcentratedPoolLinks?: {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        migrationRecords?: ({
            balancerToConcentratedPoolLinks?: {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[] | undefined;
        } & {
            balancerToConcentratedPoolLinks?: ({
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[] & ({
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            } & {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            } & Record<Exclude<keyof I["migrationRecords"]["balancerToConcentratedPoolLinks"][number], keyof import("./shared").BalancerToConcentratedPoolLink>, never>)[] & Record<Exclude<keyof I["migrationRecords"]["balancerToConcentratedPoolLinks"], keyof {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["migrationRecords"], "balancerToConcentratedPoolLinks">, never>) | undefined;
    } & Record<Exclude<keyof I, "migrationRecords">, never>>(object: I): QueryCFMMConcentratedPoolLinksResponse;
};
export interface Query {
    Pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    NumPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    TotalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    PoolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    PoolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    CalcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
    CalcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
    CalcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
    PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    TotalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    /** Deprecated: please use the alternative in x/poolmanager */
    EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
    /**
     * ConcentratedPoolIdLinkFromBalancer returns the pool id of the concentrated
     * pool that is linked with the given CFMM pool.
     */
    ConcentratedPoolIdLinkFromCFMM(request: QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<QueryConcentratedPoolIdLinkFromCFMMResponse>;
    /**
     * CFMMConcentratedPoolLinks returns migration links between CFMM and
     * Concentrated pools.
     */
    CFMMConcentratedPoolLinks(request?: QueryCFMMConcentratedPoolLinksRequest): Promise<QueryCFMMConcentratedPoolLinksResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    NumPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    TotalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    PoolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    PoolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
    CalcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
    CalcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
    CalcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
    PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    TotalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
    TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
    ConcentratedPoolIdLinkFromCFMM(request: QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<QueryConcentratedPoolIdLinkFromCFMMResponse>;
    CFMMConcentratedPoolLinks(request?: QueryCFMMConcentratedPoolLinksRequest): Promise<QueryCFMMConcentratedPoolLinksResponse>;
}
