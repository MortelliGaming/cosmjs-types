import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "./erc20";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "evmos.erc20.v1";
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
    /** token_pairs is a slice of registered token pairs for the erc20 module */
    tokenPairs: TokenPair[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponse {
    /** token_pairs returns the info about a registered token pair for the erc20 module */
    tokenPair: TokenPair;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
    /** params are the erc20 module parameters */
    params: Params;
}
export declare const QueryTokenPairsRequest: {
    typeUrl: string;
    encode(message: QueryTokenPairsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairsRequest;
    fromJSON(object: any): QueryTokenPairsRequest;
    toJSON(message: QueryTokenPairsRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryTokenPairsRequest;
};
export declare const QueryTokenPairsResponse: {
    typeUrl: string;
    encode(message: QueryTokenPairsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairsResponse;
    fromJSON(object: any): QueryTokenPairsResponse;
    toJSON(message: QueryTokenPairsResponse): unknown;
    fromPartial<I extends {
        tokenPairs?: {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        tokenPairs?: ({
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        }[] & ({
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        } & {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        } & Record<Exclude<keyof I["tokenPairs"][number], keyof TokenPair>, never>)[] & Record<Exclude<keyof I["tokenPairs"], keyof {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryTokenPairsResponse>, never>>(object: I): QueryTokenPairsResponse;
};
export declare const QueryTokenPairRequest: {
    typeUrl: string;
    encode(message: QueryTokenPairRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairRequest;
    fromJSON(object: any): QueryTokenPairRequest;
    toJSON(message: QueryTokenPairRequest): unknown;
    fromPartial<I extends {
        token?: string | undefined;
    } & {
        token?: string | undefined;
    } & Record<Exclude<keyof I, "token">, never>>(object: I): QueryTokenPairRequest;
};
export declare const QueryTokenPairResponse: {
    typeUrl: string;
    encode(message: QueryTokenPairResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPairResponse;
    fromJSON(object: any): QueryTokenPairResponse;
    toJSON(message: QueryTokenPairResponse): unknown;
    fromPartial<I extends {
        tokenPair?: {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        } | undefined;
    } & {
        tokenPair?: ({
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        } & {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        } & Record<Exclude<keyof I["tokenPair"], keyof TokenPair>, never>) | undefined;
    } & Record<Exclude<keyof I, "tokenPair">, never>>(object: I): QueryTokenPairResponse;
};
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
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } | undefined;
    } & {
        params?: ({
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } & {
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** TokenPairs retrieves registered token pairs */
    TokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
    /** TokenPair retrieves a registered token pair */
    TokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
    /** Params retrieves the erc20 module params */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    TokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
    TokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
