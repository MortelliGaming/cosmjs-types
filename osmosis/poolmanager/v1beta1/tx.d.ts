import { SwapAmountInRoute, SwapAmountOutRoute, SwapAmountInSplitRoute, SwapAmountOutSplitRoute } from "./swap_route";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.poolmanager.v1beta1";
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
export declare const MsgSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromJSON(object: any): MsgSwapExactAmountIn;
    toJSON(message: MsgSwapExactAmountIn): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        routes?: {
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        }[] | undefined;
        tokenIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        tokenOutMinAmount?: string | undefined;
    } & {
        sender?: string | undefined;
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
        tokenIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenIn"], keyof Coin>, never>) | undefined;
        tokenOutMinAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSwapExactAmountIn>, never>>(object: I): MsgSwapExactAmountIn;
};
export declare const MsgSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    toJSON(message: MsgSwapExactAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string | undefined;
    } & {
        tokenOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): MsgSwapExactAmountInResponse;
};
export declare const MsgSplitRouteSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountIn;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountIn;
    toJSON(message: MsgSplitRouteSwapExactAmountIn): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        routes?: {
            pools?: {
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            }[] | undefined;
            tokenInAmount?: string | undefined;
        }[] | undefined;
        tokenInDenom?: string | undefined;
        tokenOutMinAmount?: string | undefined;
    } & {
        sender?: string | undefined;
        routes?: ({
            pools?: {
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            }[] | undefined;
            tokenInAmount?: string | undefined;
        }[] & ({
            pools?: {
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            }[] | undefined;
            tokenInAmount?: string | undefined;
        } & {
            pools?: ({
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            }[] & ({
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            } & {
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            } & Record<Exclude<keyof I["routes"][number]["pools"][number], keyof SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I["routes"][number]["pools"], keyof {
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            }[]>, never>) | undefined;
            tokenInAmount?: string | undefined;
        } & Record<Exclude<keyof I["routes"][number], keyof SwapAmountInSplitRoute>, never>)[] & Record<Exclude<keyof I["routes"], keyof {
            pools?: {
                poolId?: bigint | undefined;
                tokenOutDenom?: string | undefined;
            }[] | undefined;
            tokenInAmount?: string | undefined;
        }[]>, never>) | undefined;
        tokenInDenom?: string | undefined;
        tokenOutMinAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSplitRouteSwapExactAmountIn>, never>>(object: I): MsgSplitRouteSwapExactAmountIn;
};
export declare const MsgSplitRouteSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountInResponse;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountInResponse;
    toJSON(message: MsgSplitRouteSwapExactAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string | undefined;
    } & {
        tokenOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): MsgSplitRouteSwapExactAmountInResponse;
};
export declare const MsgSwapExactAmountOut: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromJSON(object: any): MsgSwapExactAmountOut;
    toJSON(message: MsgSwapExactAmountOut): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        routes?: {
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        }[] | undefined;
        tokenInMaxAmount?: string | undefined;
        tokenOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
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
        tokenInMaxAmount?: string | undefined;
        tokenOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOut"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSwapExactAmountOut>, never>>(object: I): MsgSwapExactAmountOut;
};
export declare const MsgSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    toJSON(message: MsgSwapExactAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string | undefined;
    } & {
        tokenInAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): MsgSwapExactAmountOutResponse;
};
export declare const MsgSplitRouteSwapExactAmountOut: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountOut;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountOut;
    toJSON(message: MsgSplitRouteSwapExactAmountOut): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        routes?: {
            pools?: {
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            }[] | undefined;
            tokenOutAmount?: string | undefined;
        }[] | undefined;
        tokenOutDenom?: string | undefined;
        tokenInMaxAmount?: string | undefined;
    } & {
        sender?: string | undefined;
        routes?: ({
            pools?: {
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            }[] | undefined;
            tokenOutAmount?: string | undefined;
        }[] & ({
            pools?: {
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            }[] | undefined;
            tokenOutAmount?: string | undefined;
        } & {
            pools?: ({
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            }[] & ({
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            } & {
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            } & Record<Exclude<keyof I["routes"][number]["pools"][number], keyof SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I["routes"][number]["pools"], keyof {
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            }[]>, never>) | undefined;
            tokenOutAmount?: string | undefined;
        } & Record<Exclude<keyof I["routes"][number], keyof SwapAmountOutSplitRoute>, never>)[] & Record<Exclude<keyof I["routes"], keyof {
            pools?: {
                poolId?: bigint | undefined;
                tokenInDenom?: string | undefined;
            }[] | undefined;
            tokenOutAmount?: string | undefined;
        }[]>, never>) | undefined;
        tokenOutDenom?: string | undefined;
        tokenInMaxAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSplitRouteSwapExactAmountOut>, never>>(object: I): MsgSplitRouteSwapExactAmountOut;
};
export declare const MsgSplitRouteSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgSplitRouteSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountOutResponse;
    fromJSON(object: any): MsgSplitRouteSwapExactAmountOutResponse;
    toJSON(message: MsgSplitRouteSwapExactAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string | undefined;
    } & {
        tokenInAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): MsgSplitRouteSwapExactAmountOutResponse;
};
export declare const MsgSetDenomPairTakerFee: {
    typeUrl: string;
    encode(message: MsgSetDenomPairTakerFee, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomPairTakerFee;
    fromJSON(object: any): MsgSetDenomPairTakerFee;
    toJSON(message: MsgSetDenomPairTakerFee): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denomPairTakerFee?: {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        denomPairTakerFee?: ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[] & ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        } & {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        } & Record<Exclude<keyof I["denomPairTakerFee"][number], keyof DenomPairTakerFee>, never>)[] & Record<Exclude<keyof I["denomPairTakerFee"], keyof {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetDenomPairTakerFee>, never>>(object: I): MsgSetDenomPairTakerFee;
};
export declare const MsgSetDenomPairTakerFeeResponse: {
    typeUrl: string;
    encode(message: MsgSetDenomPairTakerFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomPairTakerFeeResponse;
    fromJSON(object: any): MsgSetDenomPairTakerFeeResponse;
    toJSON(message: MsgSetDenomPairTakerFeeResponse): unknown;
    fromPartial<I extends {
        success?: boolean | undefined;
    } & {
        success?: boolean | undefined;
    } & Record<Exclude<keyof I, "success">, never>>(object: I): MsgSetDenomPairTakerFeeResponse;
};
export declare const DenomPairTakerFee: {
    typeUrl: string;
    encode(message: DenomPairTakerFee, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomPairTakerFee;
    fromJSON(object: any): DenomPairTakerFee;
    toJSON(message: DenomPairTakerFee): unknown;
    fromPartial<I extends {
        denom0?: string | undefined;
        denom1?: string | undefined;
        takerFee?: string | undefined;
    } & {
        denom0?: string | undefined;
        denom1?: string | undefined;
        takerFee?: string | undefined;
    } & Record<Exclude<keyof I, keyof DenomPairTakerFee>, never>>(object: I): DenomPairTakerFee;
};
export interface Msg {
    SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    SplitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse>;
    SplitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
    SetDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    SplitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse>;
    SplitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
    SetDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse>;
}
