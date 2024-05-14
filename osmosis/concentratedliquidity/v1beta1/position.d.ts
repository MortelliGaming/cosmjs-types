import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "../../lockup/lock";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface Position {
    positionId: bigint;
    address: string;
    poolId: bigint;
    lowerTick: bigint;
    upperTick: bigint;
    joinTime: Timestamp;
    liquidity: string;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdown {
    position: Position;
    asset0: Coin;
    asset1: Coin;
    claimableSpreadRewards: Coin[];
    claimableIncentives: Coin[];
    forfeitedIncentives: Coin[];
}
export interface PositionWithPeriodLock {
    position: Position;
    locks: PeriodLock;
}
export declare const Position: {
    typeUrl: string;
    encode(message: Position, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Position;
    fromJSON(object: any): Position;
    toJSON(message: Position): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
        address?: string | undefined;
        poolId?: bigint | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
        joinTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        liquidity?: string | undefined;
    } & {
        positionId?: bigint | undefined;
        address?: string | undefined;
        poolId?: bigint | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
        joinTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["joinTime"], keyof Timestamp>, never>) | undefined;
        liquidity?: string | undefined;
    } & Record<Exclude<keyof I, keyof Position>, never>>(object: I): Position;
};
export declare const FullPositionBreakdown: {
    typeUrl: string;
    encode(message: FullPositionBreakdown, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FullPositionBreakdown;
    fromJSON(object: any): FullPositionBreakdown;
    toJSON(message: FullPositionBreakdown): unknown;
    fromPartial<I extends {
        position?: {
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            liquidity?: string | undefined;
        } | undefined;
        asset0?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        asset1?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        claimableSpreadRewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        claimableIncentives?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        forfeitedIncentives?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        position?: ({
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            liquidity?: string | undefined;
        } & {
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["position"]["joinTime"], keyof Timestamp>, never>) | undefined;
            liquidity?: string | undefined;
        } & Record<Exclude<keyof I["position"], keyof Position>, never>) | undefined;
        asset0?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["asset0"], keyof Coin>, never>) | undefined;
        asset1?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["asset1"], keyof Coin>, never>) | undefined;
        claimableSpreadRewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["claimableSpreadRewards"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimableSpreadRewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        claimableIncentives?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["claimableIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimableIncentives"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        forfeitedIncentives?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["forfeitedIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["forfeitedIncentives"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof FullPositionBreakdown>, never>>(object: I): FullPositionBreakdown;
};
export declare const PositionWithPeriodLock: {
    typeUrl: string;
    encode(message: PositionWithPeriodLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionWithPeriodLock;
    fromJSON(object: any): PositionWithPeriodLock;
    toJSON(message: PositionWithPeriodLock): unknown;
    fromPartial<I extends {
        position?: {
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            liquidity?: string | undefined;
        } | undefined;
        locks?: {
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            rewardReceiverAddress?: string | undefined;
        } | undefined;
    } & {
        position?: ({
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            liquidity?: string | undefined;
        } & {
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["position"]["joinTime"], keyof Timestamp>, never>) | undefined;
            liquidity?: string | undefined;
        } & Record<Exclude<keyof I["position"], keyof Position>, never>) | undefined;
        locks?: ({
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            rewardReceiverAddress?: string | undefined;
        } & {
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"]["duration"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            rewardReceiverAddress?: string | undefined;
        } & Record<Exclude<keyof I["locks"], keyof PeriodLock>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PositionWithPeriodLock>, never>>(object: I): PositionWithPeriodLock;
};
