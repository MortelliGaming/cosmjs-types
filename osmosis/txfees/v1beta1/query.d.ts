import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.txfees.v1beta1";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
    denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
    poolID: bigint;
    spotPrice: string;
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: bigint;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryEipBaseFeeRequest {
}
export interface QueryEipBaseFeeResponse {
    baseFee: string;
}
export declare const QueryFeeTokensRequest: {
    typeUrl: string;
    encode(_: QueryFeeTokensRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromJSON(_: any): QueryFeeTokensRequest;
    toJSON(_: QueryFeeTokensRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryFeeTokensRequest;
};
export declare const QueryFeeTokensResponse: {
    typeUrl: string;
    encode(message: QueryFeeTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensResponse;
    fromJSON(object: any): QueryFeeTokensResponse;
    toJSON(message: QueryFeeTokensResponse): unknown;
    fromPartial<I extends {
        feeTokens?: {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[] | undefined;
    } & {
        feeTokens?: ({
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[] & ({
            denom?: string | undefined;
            poolID?: bigint | undefined;
        } & {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        } & Record<Exclude<keyof I["feeTokens"][number], keyof FeeToken>, never>)[] & Record<Exclude<keyof I["feeTokens"], keyof {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "feeTokens">, never>>(object: I): QueryFeeTokensResponse;
};
export declare const QueryDenomSpotPriceRequest: {
    typeUrl: string;
    encode(message: QueryDenomSpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceRequest;
    fromJSON(object: any): QueryDenomSpotPriceRequest;
    toJSON(message: QueryDenomSpotPriceRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryDenomSpotPriceRequest;
};
export declare const QueryDenomSpotPriceResponse: {
    typeUrl: string;
    encode(message: QueryDenomSpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceResponse;
    fromJSON(object: any): QueryDenomSpotPriceResponse;
    toJSON(message: QueryDenomSpotPriceResponse): unknown;
    fromPartial<I extends {
        poolID?: bigint | undefined;
        spotPrice?: string | undefined;
    } & {
        poolID?: bigint | undefined;
        spotPrice?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDenomSpotPriceResponse>, never>>(object: I): QueryDenomSpotPriceResponse;
};
export declare const QueryDenomPoolIdRequest: {
    typeUrl: string;
    encode(message: QueryDenomPoolIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromJSON(object: any): QueryDenomPoolIdRequest;
    toJSON(message: QueryDenomPoolIdRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryDenomPoolIdRequest;
};
export declare const QueryDenomPoolIdResponse: {
    typeUrl: string;
    encode(message: QueryDenomPoolIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdResponse;
    fromJSON(object: any): QueryDenomPoolIdResponse;
    toJSON(message: QueryDenomPoolIdResponse): unknown;
    fromPartial<I extends {
        poolID?: bigint | undefined;
    } & {
        poolID?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolID">, never>>(object: I): QueryDenomPoolIdResponse;
};
export declare const QueryBaseDenomRequest: {
    typeUrl: string;
    encode(_: QueryBaseDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromJSON(_: any): QueryBaseDenomRequest;
    toJSON(_: QueryBaseDenomRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryBaseDenomRequest;
};
export declare const QueryBaseDenomResponse: {
    typeUrl: string;
    encode(message: QueryBaseDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromJSON(object: any): QueryBaseDenomResponse;
    toJSON(message: QueryBaseDenomResponse): unknown;
    fromPartial<I extends {
        baseDenom?: string | undefined;
    } & {
        baseDenom?: string | undefined;
    } & Record<Exclude<keyof I, "baseDenom">, never>>(object: I): QueryBaseDenomResponse;
};
export declare const QueryEipBaseFeeRequest: {
    typeUrl: string;
    encode(_: QueryEipBaseFeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeRequest;
    fromJSON(_: any): QueryEipBaseFeeRequest;
    toJSON(_: QueryEipBaseFeeRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryEipBaseFeeRequest;
};
export declare const QueryEipBaseFeeResponse: {
    typeUrl: string;
    encode(message: QueryEipBaseFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeResponse;
    fromJSON(object: any): QueryEipBaseFeeResponse;
    toJSON(message: QueryEipBaseFeeResponse): unknown;
    fromPartial<I extends {
        baseFee?: string | undefined;
    } & {
        baseFee?: string | undefined;
    } & Record<Exclude<keyof I, "baseFee">, never>>(object: I): QueryEipBaseFeeResponse;
};
export interface Query {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    FeeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    DenomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    /** Returns the poolID for a specified denom input. */
    DenomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    /** Returns a list of all base denom tokens and their corresponding pools. */
    BaseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
    /** Returns a list of all base denom tokens and their corresponding pools. */
    GetEipBaseFee(request?: QueryEipBaseFeeRequest): Promise<QueryEipBaseFeeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    FeeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
    DenomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
    DenomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
    BaseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
    GetEipBaseFee(request?: QueryEipBaseFeeRequest): Promise<QueryEipBaseFeeResponse>;
}
