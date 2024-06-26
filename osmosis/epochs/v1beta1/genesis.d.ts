import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.epochs.v1beta1";
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfo {
    /** identifier is a unique reference to this particular timer. */
    identifier: string;
    /**
     * start_time is the time at which the timer first ever ticks.
     * If start_time is in the future, the epoch will not begin until the start
     * time.
     */
    startTime: Timestamp;
    /**
     * duration is the time in between epoch ticks.
     * In order for intended behavior to be met, duration should
     * be greater than the chains expected block time.
     * Duration must be non-zero.
     */
    duration: Duration;
    /**
     * current_epoch is the current epoch number, or in other words,
     * how many times has the timer 'ticked'.
     * The first tick (current_epoch=1) is defined as
     * the first block whose blocktime is greater than the EpochInfo start_time.
     */
    currentEpoch: bigint;
    /**
     * current_epoch_start_time describes the start time of the current timer
     * interval. The interval is (current_epoch_start_time,
     * current_epoch_start_time + duration] When the timer ticks, this is set to
     * current_epoch_start_time = last_epoch_start_time + duration only one timer
     * tick for a given identifier can occur per block.
     *
     * NOTE! The current_epoch_start_time may diverge significantly from the
     * wall-clock time the epoch began at. Wall-clock time of epoch start may be
     * >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
     * duration = 5. Suppose the chain goes offline at t=14, and comes back online
     * at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
     * * The t=30 block will start the epoch for (10, 15]
     * * The t=31 block will start the epoch for (15, 20]
     * * The t=32 block will start the epoch for (20, 25]
     * * The t=33 block will start the epoch for (25, 30]
     * * The t=34 block will start the epoch for (30, 35]
     * * The **t=36** block will start the epoch for (35, 40]
     */
    currentEpochStartTime: Timestamp;
    /**
     * epoch_counting_started is a boolean, that indicates whether this
     * epoch timer has began yet.
     */
    epochCountingStarted: boolean;
    /**
     * current_epoch_start_height is the block height at which the current epoch
     * started. (The block height at which the timer last ticked)
     */
    currentEpochStartHeight: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    epochs: EpochInfo[];
}
export declare const EpochInfo: {
    typeUrl: string;
    encode(message: EpochInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo;
    fromJSON(object: any): EpochInfo;
    toJSON(message: EpochInfo): unknown;
    fromPartial<I extends {
        identifier?: string | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        currentEpoch?: bigint | undefined;
        currentEpochStartTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        epochCountingStarted?: boolean | undefined;
        currentEpochStartHeight?: bigint | undefined;
    } & {
        identifier?: string | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
        currentEpoch?: bigint | undefined;
        currentEpochStartTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["currentEpochStartTime"], keyof Timestamp>, never>) | undefined;
        epochCountingStarted?: boolean | undefined;
        currentEpochStartHeight?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof EpochInfo>, never>>(object: I): EpochInfo;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        epochs?: {
            identifier?: string | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            currentEpoch?: bigint | undefined;
            currentEpochStartTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            epochCountingStarted?: boolean | undefined;
            currentEpochStartHeight?: bigint | undefined;
        }[] | undefined;
    } & {
        epochs?: ({
            identifier?: string | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            currentEpoch?: bigint | undefined;
            currentEpochStartTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            epochCountingStarted?: boolean | undefined;
            currentEpochStartHeight?: bigint | undefined;
        }[] & ({
            identifier?: string | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            currentEpoch?: bigint | undefined;
            currentEpochStartTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            epochCountingStarted?: boolean | undefined;
            currentEpochStartHeight?: bigint | undefined;
        } & {
            identifier?: string | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["epochs"][number]["startTime"], keyof Timestamp>, never>) | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["epochs"][number]["duration"], keyof Duration>, never>) | undefined;
            currentEpoch?: bigint | undefined;
            currentEpochStartTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["epochs"][number]["currentEpochStartTime"], keyof Timestamp>, never>) | undefined;
            epochCountingStarted?: boolean | undefined;
            currentEpochStartHeight?: bigint | undefined;
        } & Record<Exclude<keyof I["epochs"][number], keyof EpochInfo>, never>)[] & Record<Exclude<keyof I["epochs"], keyof {
            identifier?: string | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            currentEpoch?: bigint | undefined;
            currentEpochStartTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            epochCountingStarted?: boolean | undefined;
            currentEpochStartHeight?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "epochs">, never>>(object: I): GenesisState;
};
