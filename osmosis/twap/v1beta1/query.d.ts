import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.twap.v1beta1";
export interface ArithmeticTwapRequest {
    poolId: bigint;
    baseAsset: string;
    quoteAsset: string;
    startTime: Timestamp;
    endTime?: Timestamp;
}
export interface ArithmeticTwapResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapToNowRequest {
    poolId: bigint;
    baseAsset: string;
    quoteAsset: string;
    startTime: Timestamp;
}
export interface ArithmeticTwapToNowResponse {
    arithmeticTwap: string;
}
export interface GeometricTwapRequest {
    poolId: bigint;
    baseAsset: string;
    quoteAsset: string;
    startTime: Timestamp;
    endTime?: Timestamp;
}
export interface GeometricTwapResponse {
    geometricTwap: string;
}
export interface GeometricTwapToNowRequest {
    poolId: bigint;
    baseAsset: string;
    quoteAsset: string;
    startTime: Timestamp;
}
export interface GeometricTwapToNowResponse {
    geometricTwap: string;
}
export interface ParamsRequest {
}
export interface ParamsResponse {
    params: Params;
}
export declare const ArithmeticTwapRequest: {
    typeUrl: string;
    encode(message: ArithmeticTwapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapRequest;
    fromJSON(object: any): ArithmeticTwapRequest;
    toJSON(message: ArithmeticTwapRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        endTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
        endTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["endTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ArithmeticTwapRequest>, never>>(object: I): ArithmeticTwapRequest;
};
export declare const ArithmeticTwapResponse: {
    typeUrl: string;
    encode(message: ArithmeticTwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapResponse;
    fromJSON(object: any): ArithmeticTwapResponse;
    toJSON(message: ArithmeticTwapResponse): unknown;
    fromPartial<I extends {
        arithmeticTwap?: string | undefined;
    } & {
        arithmeticTwap?: string | undefined;
    } & Record<Exclude<keyof I, "arithmeticTwap">, never>>(object: I): ArithmeticTwapResponse;
};
export declare const ArithmeticTwapToNowRequest: {
    typeUrl: string;
    encode(message: ArithmeticTwapToNowRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapToNowRequest;
    fromJSON(object: any): ArithmeticTwapToNowRequest;
    toJSON(message: ArithmeticTwapToNowRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ArithmeticTwapToNowRequest>, never>>(object: I): ArithmeticTwapToNowRequest;
};
export declare const ArithmeticTwapToNowResponse: {
    typeUrl: string;
    encode(message: ArithmeticTwapToNowResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapToNowResponse;
    fromJSON(object: any): ArithmeticTwapToNowResponse;
    toJSON(message: ArithmeticTwapToNowResponse): unknown;
    fromPartial<I extends {
        arithmeticTwap?: string | undefined;
    } & {
        arithmeticTwap?: string | undefined;
    } & Record<Exclude<keyof I, "arithmeticTwap">, never>>(object: I): ArithmeticTwapToNowResponse;
};
export declare const GeometricTwapRequest: {
    typeUrl: string;
    encode(message: GeometricTwapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeometricTwapRequest;
    fromJSON(object: any): GeometricTwapRequest;
    toJSON(message: GeometricTwapRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        endTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
        endTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["endTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GeometricTwapRequest>, never>>(object: I): GeometricTwapRequest;
};
export declare const GeometricTwapResponse: {
    typeUrl: string;
    encode(message: GeometricTwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeometricTwapResponse;
    fromJSON(object: any): GeometricTwapResponse;
    toJSON(message: GeometricTwapResponse): unknown;
    fromPartial<I extends {
        geometricTwap?: string | undefined;
    } & {
        geometricTwap?: string | undefined;
    } & Record<Exclude<keyof I, "geometricTwap">, never>>(object: I): GeometricTwapResponse;
};
export declare const GeometricTwapToNowRequest: {
    typeUrl: string;
    encode(message: GeometricTwapToNowRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeometricTwapToNowRequest;
    fromJSON(object: any): GeometricTwapToNowRequest;
    toJSON(message: GeometricTwapToNowRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAsset?: string | undefined;
        quoteAsset?: string | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GeometricTwapToNowRequest>, never>>(object: I): GeometricTwapToNowRequest;
};
export declare const GeometricTwapToNowResponse: {
    typeUrl: string;
    encode(message: GeometricTwapToNowResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeometricTwapToNowResponse;
    fromJSON(object: any): GeometricTwapToNowResponse;
    toJSON(message: GeometricTwapToNowResponse): unknown;
    fromPartial<I extends {
        geometricTwap?: string | undefined;
    } & {
        geometricTwap?: string | undefined;
    } & Record<Exclude<keyof I, "geometricTwap">, never>>(object: I): GeometricTwapToNowResponse;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            pruneEpochIdentifier?: string | undefined;
            recordHistoryKeepPeriod?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        params?: ({
            pruneEpochIdentifier?: string | undefined;
            recordHistoryKeepPeriod?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            pruneEpochIdentifier?: string | undefined;
            recordHistoryKeepPeriod?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["recordHistoryKeepPeriod"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): ParamsResponse;
};
export interface Query {
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    ArithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
    ArithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
    GeometricTwap(request: GeometricTwapRequest): Promise<GeometricTwapResponse>;
    GeometricTwapToNow(request: GeometricTwapToNowRequest): Promise<GeometricTwapToNowResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    ArithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
    ArithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
    GeometricTwap(request: GeometricTwapRequest): Promise<GeometricTwapResponse>;
    GeometricTwapToNow(request: GeometricTwapToNowRequest): Promise<GeometricTwapToNowResponse>;
}
