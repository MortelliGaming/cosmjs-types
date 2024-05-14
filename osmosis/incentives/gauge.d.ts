import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.incentives";
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface Gauge {
    /** id is the unique ID of a Gauge */
    id: bigint;
    /**
     * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled, Intended for use with incentives that get refilled daily.
     */
    isPerpetual: boolean;
    /**
     * distribute_to is where the gauge rewards are distributed to.
     * This is queried via lock duration or by timestamp
     */
    distributeTo: QueryCondition;
    /**
     * coins is the total amount of coins that have been in the gauge
     * Can distribute multiple coin denoms
     */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime: Timestamp;
    /**
     * num_epochs_paid_over is the number of total epochs distribution will be
     * completed over
     */
    numEpochsPaidOver: bigint;
    /**
     * filled_epochs is the number of epochs distribution has been completed on
     * already
     */
    filledEpochs: bigint;
    /** distributed_coins are coins that have been distributed already */
    distributedCoins: Coin[];
}
export interface LockableDurationsInfo {
    /** List of incentivised durations that gauges will pay out to */
    lockableDurations: Duration[];
}
export declare const Gauge: {
    typeUrl: string;
    encode(message: Gauge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Gauge;
    fromJSON(object: any): Gauge;
    toJSON(message: Gauge): unknown;
    fromPartial<I extends {
        id?: bigint | undefined;
        isPerpetual?: boolean | undefined;
        distributeTo?: {
            lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
            denom?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            timestamp?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        numEpochsPaidOver?: bigint | undefined;
        filledEpochs?: bigint | undefined;
        distributedCoins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        id?: bigint | undefined;
        isPerpetual?: boolean | undefined;
        distributeTo?: ({
            lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
            denom?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            timestamp?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
            denom?: string | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["distributeTo"]["duration"], keyof Duration>, never>) | undefined;
            timestamp?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["distributeTo"]["timestamp"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["distributeTo"], keyof QueryCondition>, never>) | undefined;
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
        numEpochsPaidOver?: bigint | undefined;
        filledEpochs?: bigint | undefined;
        distributedCoins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["distributedCoins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Gauge>, never>>(object: I): Gauge;
};
export declare const LockableDurationsInfo: {
    typeUrl: string;
    encode(message: LockableDurationsInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo;
    fromJSON(object: any): LockableDurationsInfo;
    toJSON(message: LockableDurationsInfo): unknown;
    fromPartial<I extends {
        lockableDurations?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] | undefined;
    } & {
        lockableDurations?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] & ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lockableDurations"][number], keyof Duration>, never>)[] & Record<Exclude<keyof I["lockableDurations"], keyof {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "lockableDurations">, never>>(object: I): LockableDurationsInfo;
};
