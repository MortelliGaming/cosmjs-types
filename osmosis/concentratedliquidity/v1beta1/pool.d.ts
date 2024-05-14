import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
export interface Pool {
    /** pool's address holding all liquidity tokens. */
    address: string;
    /** address holding the incentives liquidity. */
    incentivesAddress: string;
    /** address holding spread rewards from swaps. */
    spreadRewardsAddress: string;
    id: bigint;
    /** Amount of total liquidity */
    currentTickLiquidity: string;
    token0: string;
    token1: string;
    currentSqrtPrice: string;
    currentTick: bigint;
    /**
     * tick_spacing must be one of the authorized_tick_spacing values set in the
     * concentrated-liquidity parameters
     */
    tickSpacing: bigint;
    exponentAtPriceOne: bigint;
    /** spread_factor is the ratio that is charged on the amount of token in. */
    spreadFactor: string;
    /**
     * last_liquidity_update is the last time either the pool liquidity or the
     * active tick changed
     */
    lastLiquidityUpdate: Timestamp;
}
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        incentivesAddress?: string | undefined;
        spreadRewardsAddress?: string | undefined;
        id?: bigint | undefined;
        currentTickLiquidity?: string | undefined;
        token0?: string | undefined;
        token1?: string | undefined;
        currentSqrtPrice?: string | undefined;
        currentTick?: bigint | undefined;
        tickSpacing?: bigint | undefined;
        exponentAtPriceOne?: bigint | undefined;
        spreadFactor?: string | undefined;
        lastLiquidityUpdate?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        address?: string | undefined;
        incentivesAddress?: string | undefined;
        spreadRewardsAddress?: string | undefined;
        id?: bigint | undefined;
        currentTickLiquidity?: string | undefined;
        token0?: string | undefined;
        token1?: string | undefined;
        currentSqrtPrice?: string | undefined;
        currentTick?: bigint | undefined;
        tickSpacing?: bigint | undefined;
        exponentAtPriceOne?: bigint | undefined;
        spreadFactor?: string | undefined;
        lastLiquidityUpdate?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lastLiquidityUpdate"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Pool>, never>>(object: I): Pool;
};
