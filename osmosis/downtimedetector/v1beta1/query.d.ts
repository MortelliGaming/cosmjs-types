import { Downtime } from "./downtime_duration";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.downtimedetector.v1beta1";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
    downtime: Downtime;
    recovery: Duration;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
    succesfullyRecovered: boolean;
}
export declare const RecoveredSinceDowntimeOfLengthRequest: {
    typeUrl: string;
    encode(message: RecoveredSinceDowntimeOfLengthRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthRequest;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthRequest;
    toJSON(message: RecoveredSinceDowntimeOfLengthRequest): unknown;
    fromPartial<I extends {
        downtime?: Downtime | undefined;
        recovery?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        downtime?: Downtime | undefined;
        recovery?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["recovery"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RecoveredSinceDowntimeOfLengthRequest>, never>>(object: I): RecoveredSinceDowntimeOfLengthRequest;
};
export declare const RecoveredSinceDowntimeOfLengthResponse: {
    typeUrl: string;
    encode(message: RecoveredSinceDowntimeOfLengthResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthResponse;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthResponse;
    toJSON(message: RecoveredSinceDowntimeOfLengthResponse): unknown;
    fromPartial<I extends {
        succesfullyRecovered?: boolean | undefined;
    } & {
        succesfullyRecovered?: boolean | undefined;
    } & Record<Exclude<keyof I, "succesfullyRecovered">, never>>(object: I): RecoveredSinceDowntimeOfLengthResponse;
};
export interface Query {
    RecoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    RecoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
