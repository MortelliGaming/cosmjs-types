import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.poolmanager.v1beta1";
export interface SwapAmountInRoute {
    poolId: bigint;
    tokenOutDenom: string;
}
export interface SwapAmountOutRoute {
    poolId: bigint;
    tokenInDenom: string;
}
export interface SwapAmountInSplitRoute {
    pools: SwapAmountInRoute[];
    tokenInAmount: string;
}
export interface SwapAmountOutSplitRoute {
    pools: SwapAmountOutRoute[];
    tokenOutAmount: string;
}
export declare const SwapAmountInRoute: {
    typeUrl: string;
    encode(message: SwapAmountInRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenOutDenom?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenOutDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SwapAmountInRoute>, never>>(object: I): SwapAmountInRoute;
};
export declare const SwapAmountOutRoute: {
    typeUrl: string;
    encode(message: SwapAmountOutRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromJSON(object: any): SwapAmountOutRoute;
    toJSON(message: SwapAmountOutRoute): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SwapAmountOutRoute>, never>>(object: I): SwapAmountOutRoute;
};
export declare const SwapAmountInSplitRoute: {
    typeUrl: string;
    encode(message: SwapAmountInSplitRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInSplitRoute;
    fromJSON(object: any): SwapAmountInSplitRoute;
    toJSON(message: SwapAmountInSplitRoute): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["pools"][number], keyof SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            poolId?: bigint | undefined;
            tokenOutDenom?: string | undefined;
        }[]>, never>) | undefined;
        tokenInAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof SwapAmountInSplitRoute>, never>>(object: I): SwapAmountInSplitRoute;
};
export declare const SwapAmountOutSplitRoute: {
    typeUrl: string;
    encode(message: SwapAmountOutSplitRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutSplitRoute;
    fromJSON(object: any): SwapAmountOutSplitRoute;
    toJSON(message: SwapAmountOutSplitRoute): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["pools"][number], keyof SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            poolId?: bigint | undefined;
            tokenInDenom?: string | undefined;
        }[]>, never>) | undefined;
        tokenOutAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof SwapAmountOutSplitRoute>, never>>(object: I): SwapAmountOutSplitRoute;
};
