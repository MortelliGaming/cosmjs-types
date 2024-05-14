import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
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
export interface EmptyStruct {
}
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
export declare const GetSwapFeeQueryMsg: {
    typeUrl: string;
    encode(message: GetSwapFeeQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetSwapFeeQueryMsg;
    fromJSON(object: any): GetSwapFeeQueryMsg;
    toJSON(message: GetSwapFeeQueryMsg): unknown;
    fromPartial<I extends {
        getSwapFee?: {} | undefined;
    } & {
        getSwapFee?: ({} & {} & Record<Exclude<keyof I["getSwapFee"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "getSwapFee">, never>>(object: I): GetSwapFeeQueryMsg;
};
export declare const GetSwapFeeQueryMsgResponse: {
    typeUrl: string;
    encode(message: GetSwapFeeQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetSwapFeeQueryMsgResponse;
    fromJSON(object: any): GetSwapFeeQueryMsgResponse;
    toJSON(message: GetSwapFeeQueryMsgResponse): unknown;
    fromPartial<I extends {
        swapFee?: string | undefined;
    } & {
        swapFee?: string | undefined;
    } & Record<Exclude<keyof I, "swapFee">, never>>(object: I): GetSwapFeeQueryMsgResponse;
};
export declare const SpotPrice: {
    typeUrl: string;
    encode(message: SpotPrice, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPrice;
    fromJSON(object: any): SpotPrice;
    toJSON(message: SpotPrice): unknown;
    fromPartial<I extends {
        quoteAssetDenom?: string | undefined;
        baseAssetDenom?: string | undefined;
    } & {
        quoteAssetDenom?: string | undefined;
        baseAssetDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SpotPrice>, never>>(object: I): SpotPrice;
};
export declare const SpotPriceQueryMsg: {
    typeUrl: string;
    encode(message: SpotPriceQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceQueryMsg;
    fromJSON(object: any): SpotPriceQueryMsg;
    toJSON(message: SpotPriceQueryMsg): unknown;
    fromPartial<I extends {
        spotPrice?: {
            quoteAssetDenom?: string | undefined;
            baseAssetDenom?: string | undefined;
        } | undefined;
    } & {
        spotPrice?: ({
            quoteAssetDenom?: string | undefined;
            baseAssetDenom?: string | undefined;
        } & {
            quoteAssetDenom?: string | undefined;
            baseAssetDenom?: string | undefined;
        } & Record<Exclude<keyof I["spotPrice"], keyof SpotPrice>, never>) | undefined;
    } & Record<Exclude<keyof I, "spotPrice">, never>>(object: I): SpotPriceQueryMsg;
};
export declare const SpotPriceQueryMsgResponse: {
    typeUrl: string;
    encode(message: SpotPriceQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceQueryMsgResponse;
    fromJSON(object: any): SpotPriceQueryMsgResponse;
    toJSON(message: SpotPriceQueryMsgResponse): unknown;
    fromPartial<I extends {
        spotPrice?: string | undefined;
    } & {
        spotPrice?: string | undefined;
    } & Record<Exclude<keyof I, "spotPrice">, never>>(object: I): SpotPriceQueryMsgResponse;
};
export declare const EmptyStruct: {
    typeUrl: string;
    encode(_: EmptyStruct, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EmptyStruct;
    fromJSON(_: any): EmptyStruct;
    toJSON(_: EmptyStruct): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): EmptyStruct;
};
export declare const GetTotalPoolLiquidityQueryMsg: {
    typeUrl: string;
    encode(message: GetTotalPoolLiquidityQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsg;
    fromJSON(object: any): GetTotalPoolLiquidityQueryMsg;
    toJSON(message: GetTotalPoolLiquidityQueryMsg): unknown;
    fromPartial<I extends {
        getTotalPoolLiquidity?: {} | undefined;
    } & {
        getTotalPoolLiquidity?: ({} & {} & Record<Exclude<keyof I["getTotalPoolLiquidity"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "getTotalPoolLiquidity">, never>>(object: I): GetTotalPoolLiquidityQueryMsg;
};
export declare const GetTotalPoolLiquidityQueryMsgResponse: {
    typeUrl: string;
    encode(message: GetTotalPoolLiquidityQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsgResponse;
    fromJSON(object: any): GetTotalPoolLiquidityQueryMsgResponse;
    toJSON(message: GetTotalPoolLiquidityQueryMsgResponse): unknown;
    fromPartial<I extends {
        totalPoolLiquidity?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        totalPoolLiquidity?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalPoolLiquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalPoolLiquidity"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "totalPoolLiquidity">, never>>(object: I): GetTotalPoolLiquidityQueryMsgResponse;
};
export declare const GetTotalSharesQueryMsg: {
    typeUrl: string;
    encode(message: GetTotalSharesQueryMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalSharesQueryMsg;
    fromJSON(object: any): GetTotalSharesQueryMsg;
    toJSON(message: GetTotalSharesQueryMsg): unknown;
    fromPartial<I extends {
        getTotalShares?: {} | undefined;
    } & {
        getTotalShares?: ({} & {} & Record<Exclude<keyof I["getTotalShares"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "getTotalShares">, never>>(object: I): GetTotalSharesQueryMsg;
};
export declare const GetTotalSharesQueryMsgResponse: {
    typeUrl: string;
    encode(message: GetTotalSharesQueryMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalSharesQueryMsgResponse;
    fromJSON(object: any): GetTotalSharesQueryMsgResponse;
    toJSON(message: GetTotalSharesQueryMsgResponse): unknown;
    fromPartial<I extends {
        totalShares?: string | undefined;
    } & {
        totalShares?: string | undefined;
    } & Record<Exclude<keyof I, "totalShares">, never>>(object: I): GetTotalSharesQueryMsgResponse;
};
