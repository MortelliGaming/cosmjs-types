import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../poolmanager/v1beta1/swap_route";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
    sender: string;
    poolId: bigint;
    shareOutAmount: string;
    tokenInMaxs: Coin[];
}
export interface MsgJoinPoolResponse {
    shareOutAmount: string;
    tokenIn: Coin[];
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
    sender: string;
    poolId: bigint;
    shareInAmount: string;
    tokenOutMins: Coin[];
}
export interface MsgExitPoolResponse {
    tokenOut: Coin[];
}
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
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut: Coin;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    poolId: bigint;
    tokenIn: Coin;
    shareOutMinAmount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
    shareOutAmount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
    sender: string;
    poolId: bigint;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
    tokenInAmount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
    sender: string;
    poolId: bigint;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
}
export interface MsgExitSwapShareAmountInResponse {
    tokenOutAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    poolId: bigint;
    tokenOut: Coin;
    shareInMaxAmount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
    shareInAmount: string;
}
export declare const MsgJoinPool: {
    typeUrl: string;
    encode(message: MsgJoinPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPool;
    fromJSON(object: any): MsgJoinPool;
    toJSON(message: MsgJoinPool): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        shareOutAmount?: string | undefined;
        tokenInMaxs?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        shareOutAmount?: string | undefined;
        tokenInMaxs?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenInMaxs"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokenInMaxs"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgJoinPool>, never>>(object: I): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    typeUrl: string;
    encode(message: MsgJoinPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromJSON(object: any): MsgJoinPoolResponse;
    toJSON(message: MsgJoinPoolResponse): unknown;
    fromPartial<I extends {
        shareOutAmount?: string | undefined;
        tokenIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        shareOutAmount?: string | undefined;
        tokenIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenIn"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokenIn"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgJoinPoolResponse>, never>>(object: I): MsgJoinPoolResponse;
};
export declare const MsgExitPool: {
    typeUrl: string;
    encode(message: MsgExitPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPool;
    fromJSON(object: any): MsgExitPool;
    toJSON(message: MsgExitPool): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        shareInAmount?: string | undefined;
        tokenOutMins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        shareInAmount?: string | undefined;
        tokenOutMins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOutMins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokenOutMins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgExitPool>, never>>(object: I): MsgExitPool;
};
export declare const MsgExitPoolResponse: {
    typeUrl: string;
    encode(message: MsgExitPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromJSON(object: any): MsgExitPoolResponse;
    toJSON(message: MsgExitPoolResponse): unknown;
    fromPartial<I extends {
        tokenOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        tokenOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOut"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokenOut"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "tokenOut">, never>>(object: I): MsgExitPoolResponse;
};
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
export declare const MsgJoinSwapExternAmountIn: {
    typeUrl: string;
    encode(message: MsgJoinSwapExternAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromJSON(object: any): MsgJoinSwapExternAmountIn;
    toJSON(message: MsgJoinSwapExternAmountIn): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenIn?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        shareOutMinAmount?: string | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenIn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenIn"], keyof Coin>, never>) | undefined;
        shareOutMinAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgJoinSwapExternAmountIn>, never>>(object: I): MsgJoinSwapExternAmountIn;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    typeUrl: string;
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromJSON(object: any): MsgJoinSwapExternAmountInResponse;
    toJSON(message: MsgJoinSwapExternAmountInResponse): unknown;
    fromPartial<I extends {
        shareOutAmount?: string | undefined;
    } & {
        shareOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, "shareOutAmount">, never>>(object: I): MsgJoinSwapExternAmountInResponse;
};
export declare const MsgJoinSwapShareAmountOut: {
    typeUrl: string;
    encode(message: MsgJoinSwapShareAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromJSON(object: any): MsgJoinSwapShareAmountOut;
    toJSON(message: MsgJoinSwapShareAmountOut): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
        shareOutAmount?: string | undefined;
        tokenInMaxAmount?: string | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
        shareOutAmount?: string | undefined;
        tokenInMaxAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgJoinSwapShareAmountOut>, never>>(object: I): MsgJoinSwapShareAmountOut;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromJSON(object: any): MsgJoinSwapShareAmountOutResponse;
    toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string | undefined;
    } & {
        tokenInAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): MsgJoinSwapShareAmountOutResponse;
};
export declare const MsgExitSwapShareAmountIn: {
    typeUrl: string;
    encode(message: MsgExitSwapShareAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromJSON(object: any): MsgExitSwapShareAmountIn;
    toJSON(message: MsgExitSwapShareAmountIn): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenOutDenom?: string | undefined;
        shareInAmount?: string | undefined;
        tokenOutMinAmount?: string | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenOutDenom?: string | undefined;
        shareInAmount?: string | undefined;
        tokenOutMinAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgExitSwapShareAmountIn>, never>>(object: I): MsgExitSwapShareAmountIn;
};
export declare const MsgExitSwapShareAmountInResponse: {
    typeUrl: string;
    encode(message: MsgExitSwapShareAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromJSON(object: any): MsgExitSwapShareAmountInResponse;
    toJSON(message: MsgExitSwapShareAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string | undefined;
    } & {
        tokenOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): MsgExitSwapShareAmountInResponse;
};
export declare const MsgExitSwapExternAmountOut: {
    typeUrl: string;
    encode(message: MsgExitSwapExternAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromJSON(object: any): MsgExitSwapExternAmountOut;
    toJSON(message: MsgExitSwapExternAmountOut): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenOut?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        shareInMaxAmount?: string | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        tokenOut?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOut"], keyof Coin>, never>) | undefined;
        shareInMaxAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgExitSwapExternAmountOut>, never>>(object: I): MsgExitSwapExternAmountOut;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromJSON(object: any): MsgExitSwapExternAmountOutResponse;
    toJSON(message: MsgExitSwapExternAmountOutResponse): unknown;
    fromPartial<I extends {
        shareInAmount?: string | undefined;
    } & {
        shareInAmount?: string | undefined;
    } & Record<Exclude<keyof I, "shareInAmount">, never>>(object: I): MsgExitSwapExternAmountOutResponse;
};
export interface Msg {
    JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
    SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
    JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
    ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
    ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
    SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
    JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
    ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
    ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
}
