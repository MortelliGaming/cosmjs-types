import { Coin } from "../../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export declare const protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
    swapFee: string;
    /**
     * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
     * pools can maintain a non-zero fee. No new pool can be created with non-zero
     * fee anymore
     */
    exitFee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
    address: string;
    id: bigint;
    poolParams: PoolParams;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     */
    futurePoolGovernor: string;
    /** sum of all LP shares */
    totalShares: Coin;
    /** assets in the pool */
    poolLiquidity: Coin[];
    /** for calculation amognst assets with different precisions */
    scalingFactors: bigint[];
    /** scaling_factor_controller is the address can adjust pool scaling factors */
    scalingFactorController: string;
}
export declare const PoolParams: {
    typeUrl: string;
    encode(message: PoolParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolParams;
    fromJSON(object: any): PoolParams;
    toJSON(message: PoolParams): unknown;
    fromPartial<I extends {
        swapFee?: string | undefined;
        exitFee?: string | undefined;
    } & {
        swapFee?: string | undefined;
        exitFee?: string | undefined;
    } & Record<Exclude<keyof I, keyof PoolParams>, never>>(object: I): PoolParams;
};
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        id?: bigint | undefined;
        poolParams?: {
            swapFee?: string | undefined;
            exitFee?: string | undefined;
        } | undefined;
        futurePoolGovernor?: string | undefined;
        totalShares?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        poolLiquidity?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        scalingFactors?: bigint[] | undefined;
        scalingFactorController?: string | undefined;
    } & {
        address?: string | undefined;
        id?: bigint | undefined;
        poolParams?: ({
            swapFee?: string | undefined;
            exitFee?: string | undefined;
        } & {
            swapFee?: string | undefined;
            exitFee?: string | undefined;
        } & Record<Exclude<keyof I["poolParams"], keyof PoolParams>, never>) | undefined;
        futurePoolGovernor?: string | undefined;
        totalShares?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalShares"], keyof Coin>, never>) | undefined;
        poolLiquidity?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["poolLiquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["poolLiquidity"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        scalingFactors?: (bigint[] & bigint[] & Record<Exclude<keyof I["scalingFactors"], keyof bigint[]>, never>) | undefined;
        scalingFactorController?: string | undefined;
    } & Record<Exclude<keyof I, keyof Pool>, never>>(object: I): Pool;
};
