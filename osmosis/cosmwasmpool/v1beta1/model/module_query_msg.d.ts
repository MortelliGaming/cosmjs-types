import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
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
export declare const CalcOutAmtGivenIn: {
    typeUrl: string;
    encode(message: CalcOutAmtGivenIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenIn;
    fromJSON(object: any): CalcOutAmtGivenIn;
    toJSON(message: CalcOutAmtGivenIn): unknown;
    fromPartial<I extends {
        tokenIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        tokenOutDenom?: string | undefined;
        swapFee?: string | undefined;
    } & {
        tokenIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenIn"], keyof Coin>, never>) | undefined;
        tokenOutDenom?: string | undefined;
        swapFee?: string | undefined;
    } & Record<Exclude<keyof I, keyof CalcOutAmtGivenIn>, never>>(object: I): CalcOutAmtGivenIn;
};
export declare const CalcOutAmtGivenInRequest: {
    typeUrl: string;
    encode(message: CalcOutAmtGivenInRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInRequest;
    fromJSON(object: any): CalcOutAmtGivenInRequest;
    toJSON(message: CalcOutAmtGivenInRequest): unknown;
    fromPartial<I extends {
        calcOutAmtGivenIn?: {
            tokenIn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenOutDenom?: string | undefined;
            swapFee?: string | undefined;
        } | undefined;
    } & {
        calcOutAmtGivenIn?: ({
            tokenIn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenOutDenom?: string | undefined;
            swapFee?: string | undefined;
        } & {
            tokenIn?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["calcOutAmtGivenIn"]["tokenIn"], keyof Coin>, never>) | undefined;
            tokenOutDenom?: string | undefined;
            swapFee?: string | undefined;
        } & Record<Exclude<keyof I["calcOutAmtGivenIn"], keyof CalcOutAmtGivenIn>, never>) | undefined;
    } & Record<Exclude<keyof I, "calcOutAmtGivenIn">, never>>(object: I): CalcOutAmtGivenInRequest;
};
export declare const CalcOutAmtGivenInResponse: {
    typeUrl: string;
    encode(message: CalcOutAmtGivenInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcOutAmtGivenInResponse;
    fromJSON(object: any): CalcOutAmtGivenInResponse;
    toJSON(message: CalcOutAmtGivenInResponse): unknown;
    fromPartial<I extends {
        tokenOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        tokenOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOut"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, "tokenOut">, never>>(object: I): CalcOutAmtGivenInResponse;
};
export declare const CalcInAmtGivenOut: {
    typeUrl: string;
    encode(message: CalcInAmtGivenOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOut;
    fromJSON(object: any): CalcInAmtGivenOut;
    toJSON(message: CalcInAmtGivenOut): unknown;
    fromPartial<I extends {
        tokenOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        tokenInDenom?: string | undefined;
        swapFee?: string | undefined;
    } & {
        tokenOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOut"], keyof Coin>, never>) | undefined;
        tokenInDenom?: string | undefined;
        swapFee?: string | undefined;
    } & Record<Exclude<keyof I, keyof CalcInAmtGivenOut>, never>>(object: I): CalcInAmtGivenOut;
};
export declare const CalcInAmtGivenOutRequest: {
    typeUrl: string;
    encode(message: CalcInAmtGivenOutRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutRequest;
    fromJSON(object: any): CalcInAmtGivenOutRequest;
    toJSON(message: CalcInAmtGivenOutRequest): unknown;
    fromPartial<I extends {
        calcInAmtGivenOut?: {
            tokenOut?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenInDenom?: string | undefined;
            swapFee?: string | undefined;
        } | undefined;
    } & {
        calcInAmtGivenOut?: ({
            tokenOut?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenInDenom?: string | undefined;
            swapFee?: string | undefined;
        } & {
            tokenOut?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["calcInAmtGivenOut"]["tokenOut"], keyof Coin>, never>) | undefined;
            tokenInDenom?: string | undefined;
            swapFee?: string | undefined;
        } & Record<Exclude<keyof I["calcInAmtGivenOut"], keyof CalcInAmtGivenOut>, never>) | undefined;
    } & Record<Exclude<keyof I, "calcInAmtGivenOut">, never>>(object: I): CalcInAmtGivenOutRequest;
};
export declare const CalcInAmtGivenOutResponse: {
    typeUrl: string;
    encode(message: CalcInAmtGivenOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CalcInAmtGivenOutResponse;
    fromJSON(object: any): CalcInAmtGivenOutResponse;
    toJSON(message: CalcInAmtGivenOutResponse): unknown;
    fromPartial<I extends {
        tokenIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        tokenIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenIn"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, "tokenIn">, never>>(object: I): CalcInAmtGivenOutResponse;
};
