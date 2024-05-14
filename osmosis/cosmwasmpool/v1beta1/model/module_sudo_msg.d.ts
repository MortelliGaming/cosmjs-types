import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
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
export declare const SwapExactAmountIn: {
    typeUrl: string;
    encode(message: SwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountIn;
    fromJSON(object: any): SwapExactAmountIn;
    toJSON(message: SwapExactAmountIn): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        tokenIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        tokenOutDenom?: string | undefined;
        tokenOutMinAmount?: string | undefined;
        swapFee?: string | undefined;
    } & {
        sender?: string | undefined;
        tokenIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenIn"], keyof Coin>, never>) | undefined;
        tokenOutDenom?: string | undefined;
        tokenOutMinAmount?: string | undefined;
        swapFee?: string | undefined;
    } & Record<Exclude<keyof I, keyof SwapExactAmountIn>, never>>(object: I): SwapExactAmountIn;
};
export declare const SwapExactAmountInSudoMsg: {
    typeUrl: string;
    encode(message: SwapExactAmountInSudoMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountInSudoMsg;
    fromJSON(object: any): SwapExactAmountInSudoMsg;
    toJSON(message: SwapExactAmountInSudoMsg): unknown;
    fromPartial<I extends {
        swapExactAmountIn?: {
            sender?: string | undefined;
            tokenIn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenOutDenom?: string | undefined;
            tokenOutMinAmount?: string | undefined;
            swapFee?: string | undefined;
        } | undefined;
    } & {
        swapExactAmountIn?: ({
            sender?: string | undefined;
            tokenIn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenOutDenom?: string | undefined;
            tokenOutMinAmount?: string | undefined;
            swapFee?: string | undefined;
        } & {
            sender?: string | undefined;
            tokenIn?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["swapExactAmountIn"]["tokenIn"], keyof Coin>, never>) | undefined;
            tokenOutDenom?: string | undefined;
            tokenOutMinAmount?: string | undefined;
            swapFee?: string | undefined;
        } & Record<Exclude<keyof I["swapExactAmountIn"], keyof SwapExactAmountIn>, never>) | undefined;
    } & Record<Exclude<keyof I, "swapExactAmountIn">, never>>(object: I): SwapExactAmountInSudoMsg;
};
export declare const SwapExactAmountInSudoMsgResponse: {
    typeUrl: string;
    encode(message: SwapExactAmountInSudoMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountInSudoMsgResponse;
    fromJSON(object: any): SwapExactAmountInSudoMsgResponse;
    toJSON(message: SwapExactAmountInSudoMsgResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string | undefined;
    } & {
        tokenOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): SwapExactAmountInSudoMsgResponse;
};
export declare const SwapExactAmountOut: {
    typeUrl: string;
    encode(message: SwapExactAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountOut;
    fromJSON(object: any): SwapExactAmountOut;
    toJSON(message: SwapExactAmountOut): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        tokenOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        tokenInDenom?: string | undefined;
        tokenInMaxAmount?: string | undefined;
        swapFee?: string | undefined;
    } & {
        sender?: string | undefined;
        tokenOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOut"], keyof Coin>, never>) | undefined;
        tokenInDenom?: string | undefined;
        tokenInMaxAmount?: string | undefined;
        swapFee?: string | undefined;
    } & Record<Exclude<keyof I, keyof SwapExactAmountOut>, never>>(object: I): SwapExactAmountOut;
};
export declare const SwapExactAmountOutSudoMsg: {
    typeUrl: string;
    encode(message: SwapExactAmountOutSudoMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountOutSudoMsg;
    fromJSON(object: any): SwapExactAmountOutSudoMsg;
    toJSON(message: SwapExactAmountOutSudoMsg): unknown;
    fromPartial<I extends {
        swapExactAmountOut?: {
            sender?: string | undefined;
            tokenOut?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenInDenom?: string | undefined;
            tokenInMaxAmount?: string | undefined;
            swapFee?: string | undefined;
        } | undefined;
    } & {
        swapExactAmountOut?: ({
            sender?: string | undefined;
            tokenOut?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            tokenInDenom?: string | undefined;
            tokenInMaxAmount?: string | undefined;
            swapFee?: string | undefined;
        } & {
            sender?: string | undefined;
            tokenOut?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["swapExactAmountOut"]["tokenOut"], keyof Coin>, never>) | undefined;
            tokenInDenom?: string | undefined;
            tokenInMaxAmount?: string | undefined;
            swapFee?: string | undefined;
        } & Record<Exclude<keyof I["swapExactAmountOut"], keyof SwapExactAmountOut>, never>) | undefined;
    } & Record<Exclude<keyof I, "swapExactAmountOut">, never>>(object: I): SwapExactAmountOutSudoMsg;
};
export declare const SwapExactAmountOutSudoMsgResponse: {
    typeUrl: string;
    encode(message: SwapExactAmountOutSudoMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapExactAmountOutSudoMsgResponse;
    fromJSON(object: any): SwapExactAmountOutSudoMsgResponse;
    toJSON(message: SwapExactAmountOutSudoMsgResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string | undefined;
    } & {
        tokenInAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): SwapExactAmountOutSudoMsgResponse;
};
