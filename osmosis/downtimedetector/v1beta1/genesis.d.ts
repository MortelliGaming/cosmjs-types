import { Downtime } from "./downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.downtimedetector.v1beta1";
export interface GenesisDowntimeEntry {
    duration: Downtime;
    lastDowntime: Timestamp;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
    downtimes: GenesisDowntimeEntry[];
    lastBlockTime: Timestamp;
}
export declare const GenesisDowntimeEntry: {
    typeUrl: string;
    encode(message: GenesisDowntimeEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisDowntimeEntry;
    fromJSON(object: any): GenesisDowntimeEntry;
    toJSON(message: GenesisDowntimeEntry): unknown;
    fromPartial<I extends {
        duration?: Downtime | undefined;
        lastDowntime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        duration?: Downtime | undefined;
        lastDowntime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lastDowntime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisDowntimeEntry>, never>>(object: I): GenesisDowntimeEntry;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        downtimes?: {
            duration?: Downtime | undefined;
            lastDowntime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        lastBlockTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        downtimes?: ({
            duration?: Downtime | undefined;
            lastDowntime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            duration?: Downtime | undefined;
            lastDowntime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            duration?: Downtime | undefined;
            lastDowntime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["downtimes"][number]["lastDowntime"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["downtimes"][number], keyof GenesisDowntimeEntry>, never>)[] & Record<Exclude<keyof I["downtimes"], keyof {
            duration?: Downtime | undefined;
            lastDowntime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        lastBlockTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lastBlockTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
