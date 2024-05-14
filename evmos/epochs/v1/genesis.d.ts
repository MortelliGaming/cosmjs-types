import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.epochs.v1";
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfo {
    /** identifier of the epoch */
    identifier: string;
    /** start_time of the epoch */
    startTime: Timestamp;
    /** duration of the epoch */
    duration: Duration;
    /** current_epoch is the integer identifier of the epoch */
    currentEpoch: bigint;
    /** current_epoch_start_time defines the timestamp of the start of the epoch */
    currentEpochStartTime: Timestamp;
    /** epoch_counting_started reflects if the counting for the epoch has started */
    epochCountingStarted: boolean;
    /** current_epoch_start_height of the epoch */
    currentEpochStartHeight: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
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
