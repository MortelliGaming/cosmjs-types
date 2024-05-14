import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "evmos.epochs.v1";
/**
 * QueryEpochsInfoRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryEpochsInfoResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryEpochsInfoResponse {
    /** epochs is a slice of all EpochInfos */
    epochs: EpochInfo[];
    /** pagination defines an optional pagination for the request. */
    pagination?: PageResponse;
}
/**
 * QueryCurrentEpochRequest is the request type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochRequest {
    /** identifier of the current epoch */
    identifier: string;
}
/**
 * QueryCurrentEpochResponse is the response type for the Query/EpochInfos RPC
 * method.
 */
export interface QueryCurrentEpochResponse {
    /** current_epoch is the number of the current epoch */
    currentEpoch: bigint;
}
export declare const QueryEpochsInfoRequest: {
    typeUrl: string;
    encode(message: QueryEpochsInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromJSON(object: any): QueryEpochsInfoRequest;
    toJSON(message: QueryEpochsInfoRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryEpochsInfoRequest;
};
export declare const QueryEpochsInfoResponse: {
    typeUrl: string;
    encode(message: QueryEpochsInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromJSON(object: any): QueryEpochsInfoResponse;
    toJSON(message: QueryEpochsInfoResponse): unknown;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
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
            } & Record<Exclude<keyof I["epochs"][number]["startTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["epochs"][number]["duration"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            currentEpoch?: bigint | undefined;
            currentEpochStartTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["epochs"][number]["currentEpochStartTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryEpochsInfoResponse>, never>>(object: I): QueryEpochsInfoResponse;
};
export declare const QueryCurrentEpochRequest: {
    typeUrl: string;
    encode(message: QueryCurrentEpochRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromJSON(object: any): QueryCurrentEpochRequest;
    toJSON(message: QueryCurrentEpochRequest): unknown;
    fromPartial<I extends {
        identifier?: string | undefined;
    } & {
        identifier?: string | undefined;
    } & Record<Exclude<keyof I, "identifier">, never>>(object: I): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    typeUrl: string;
    encode(message: QueryCurrentEpochResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromJSON(object: any): QueryCurrentEpochResponse;
    toJSON(message: QueryCurrentEpochResponse): unknown;
    fromPartial<I extends {
        currentEpoch?: bigint | undefined;
    } & {
        currentEpoch?: bigint | undefined;
    } & Record<Exclude<keyof I, "currentEpoch">, never>>(object: I): QueryCurrentEpochResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** EpochInfos provide running epochInfos */
    EpochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    /** CurrentEpoch provide current epoch of specified identifier */
    CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    EpochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
