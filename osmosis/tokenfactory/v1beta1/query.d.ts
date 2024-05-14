import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
    denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
    authorityMetadata: DenomAuthorityMetadata;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
export interface QueryBeforeSendHookAddressRequest {
    denom: string;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
    cosmwasmAddress: string;
}
export interface QueryAllBeforeSendHooksAddressesRequest {
}
/**
 * QueryAllBeforeSendHooksAddressesResponse defines the response structure for
 * the AllBeforeSendHooksAddresses gRPC query.
 */
export interface QueryAllBeforeSendHooksAddressesResponse {
    denoms: string[];
    beforeSendHookAddresses: string[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            denomCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            denomCreationGasConsume?: bigint | undefined;
        } | undefined;
    } & {
        params?: ({
            denomCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            denomCreationGasConsume?: bigint | undefined;
        } & {
            denomCreationFee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["denomCreationFee"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["params"]["denomCreationFee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            denomCreationGasConsume?: bigint | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryDenomAuthorityMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest;
    fromJSON(object: any): QueryDenomAuthorityMetadataRequest;
    toJSON(message: QueryDenomAuthorityMetadataRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryDenomAuthorityMetadataRequest;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse;
    fromJSON(object: any): QueryDenomAuthorityMetadataResponse;
    toJSON(message: QueryDenomAuthorityMetadataResponse): unknown;
    fromPartial<I extends {
        authorityMetadata?: {
            admin?: string | undefined;
        } | undefined;
    } & {
        authorityMetadata?: ({
            admin?: string | undefined;
        } & {
            admin?: string | undefined;
        } & Record<Exclude<keyof I["authorityMetadata"], "admin">, never>) | undefined;
    } & Record<Exclude<keyof I, "authorityMetadata">, never>>(object: I): QueryDenomAuthorityMetadataResponse;
};
export declare const QueryDenomsFromCreatorRequest: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest;
    fromJSON(object: any): QueryDenomsFromCreatorRequest;
    toJSON(message: QueryDenomsFromCreatorRequest): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
    } & {
        creator?: string | undefined;
    } & Record<Exclude<keyof I, "creator">, never>>(object: I): QueryDenomsFromCreatorRequest;
};
export declare const QueryDenomsFromCreatorResponse: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse;
    fromJSON(object: any): QueryDenomsFromCreatorResponse;
    toJSON(message: QueryDenomsFromCreatorResponse): unknown;
    fromPartial<I extends {
        denoms?: string[] | undefined;
    } & {
        denoms?: (string[] & string[] & Record<Exclude<keyof I["denoms"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "denoms">, never>>(object: I): QueryDenomsFromCreatorResponse;
};
export declare const QueryBeforeSendHookAddressRequest: {
    typeUrl: string;
    encode(message: QueryBeforeSendHookAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressRequest;
    fromJSON(object: any): QueryBeforeSendHookAddressRequest;
    toJSON(message: QueryBeforeSendHookAddressRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryBeforeSendHookAddressRequest;
};
export declare const QueryBeforeSendHookAddressResponse: {
    typeUrl: string;
    encode(message: QueryBeforeSendHookAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressResponse;
    fromJSON(object: any): QueryBeforeSendHookAddressResponse;
    toJSON(message: QueryBeforeSendHookAddressResponse): unknown;
    fromPartial<I extends {
        cosmwasmAddress?: string | undefined;
    } & {
        cosmwasmAddress?: string | undefined;
    } & Record<Exclude<keyof I, "cosmwasmAddress">, never>>(object: I): QueryBeforeSendHookAddressResponse;
};
export declare const QueryAllBeforeSendHooksAddressesRequest: {
    typeUrl: string;
    encode(_: QueryAllBeforeSendHooksAddressesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBeforeSendHooksAddressesRequest;
    fromJSON(_: any): QueryAllBeforeSendHooksAddressesRequest;
    toJSON(_: QueryAllBeforeSendHooksAddressesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryAllBeforeSendHooksAddressesRequest;
};
export declare const QueryAllBeforeSendHooksAddressesResponse: {
    typeUrl: string;
    encode(message: QueryAllBeforeSendHooksAddressesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBeforeSendHooksAddressesResponse;
    fromJSON(object: any): QueryAllBeforeSendHooksAddressesResponse;
    toJSON(message: QueryAllBeforeSendHooksAddressesResponse): unknown;
    fromPartial<I extends {
        denoms?: string[] | undefined;
        beforeSendHookAddresses?: string[] | undefined;
    } & {
        denoms?: (string[] & string[] & Record<Exclude<keyof I["denoms"], keyof string[]>, never>) | undefined;
        beforeSendHookAddresses?: (string[] & string[] & Record<Exclude<keyof I["beforeSendHookAddresses"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryAllBeforeSendHooksAddressesResponse>, never>>(object: I): QueryAllBeforeSendHooksAddressesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    DenomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    DenomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    /**
     * BeforeSendHookAddress defines a gRPC query method for
     * getting the address registered for the before send hook.
     */
    BeforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
    /**
     * AllBeforeSendHooksAddresses defines a gRPC query method for
     * getting all addresses with before send hook registered.
     * The response returns two arrays, an array with a list of denom and an array
     * of before send hook addresses. The idx of denom corresponds to before send
     * hook addresse's idx.
     */
    AllBeforeSendHooksAddresses(request?: QueryAllBeforeSendHooksAddressesRequest): Promise<QueryAllBeforeSendHooksAddressesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    DenomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    DenomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    BeforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
    AllBeforeSendHooksAddresses(request?: QueryAllBeforeSendHooksAddressesRequest): Promise<QueryAllBeforeSendHooksAddressesResponse>;
}
