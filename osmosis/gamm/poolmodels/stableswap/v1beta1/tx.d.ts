import { PoolParams } from "./stableswap_pool";
import { Coin } from "../../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { Rpc } from "../../../../../helpers";
export declare const protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
    sender: string;
    poolParams?: PoolParams;
    initialPoolLiquidity: Coin[];
    scalingFactors: bigint[];
    futurePoolGovernor: string;
    scalingFactorController: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
    poolId: bigint;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
    sender: string;
    poolId: bigint;
    scalingFactors: bigint[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {
}
export declare const MsgCreateStableswapPool: {
    typeUrl: string;
    encode(message: MsgCreateStableswapPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPool;
    fromJSON(object: any): MsgCreateStableswapPool;
    toJSON(message: MsgCreateStableswapPool): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolParams?: {
            swapFee?: string | undefined;
            exitFee?: string | undefined;
        } | undefined;
        initialPoolLiquidity?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        scalingFactors?: bigint[] | undefined;
        futurePoolGovernor?: string | undefined;
        scalingFactorController?: string | undefined;
    } & {
        sender?: string | undefined;
        poolParams?: ({
            swapFee?: string | undefined;
            exitFee?: string | undefined;
        } & {
            swapFee?: string | undefined;
            exitFee?: string | undefined;
        } & Record<Exclude<keyof I["poolParams"], keyof PoolParams>, never>) | undefined;
        initialPoolLiquidity?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["initialPoolLiquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["initialPoolLiquidity"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        scalingFactors?: (bigint[] & bigint[] & Record<Exclude<keyof I["scalingFactors"], keyof bigint[]>, never>) | undefined;
        futurePoolGovernor?: string | undefined;
        scalingFactorController?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateStableswapPool>, never>>(object: I): MsgCreateStableswapPool;
};
export declare const MsgCreateStableswapPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateStableswapPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse;
    fromJSON(object: any): MsgCreateStableswapPoolResponse;
    toJSON(message: MsgCreateStableswapPoolResponse): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): MsgCreateStableswapPoolResponse;
};
export declare const MsgStableSwapAdjustScalingFactors: {
    typeUrl: string;
    encode(message: MsgStableSwapAdjustScalingFactors, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors;
    fromJSON(object: any): MsgStableSwapAdjustScalingFactors;
    toJSON(message: MsgStableSwapAdjustScalingFactors): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        scalingFactors?: bigint[] | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
        scalingFactors?: (bigint[] & bigint[] & Record<Exclude<keyof I["scalingFactors"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgStableSwapAdjustScalingFactors>, never>>(object: I): MsgStableSwapAdjustScalingFactors;
};
export declare const MsgStableSwapAdjustScalingFactorsResponse: {
    typeUrl: string;
    encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse;
    fromJSON(_: any): MsgStableSwapAdjustScalingFactorsResponse;
    toJSON(_: MsgStableSwapAdjustScalingFactorsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgStableSwapAdjustScalingFactorsResponse;
};
export interface Msg {
    CreateStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse>;
    StableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse>;
    StableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
