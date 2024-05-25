import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** =============================== ContractInfoByPoolId */
export interface ParamsRequest {
}
export interface ParamsResponse {
    params: Params;
}
/** =============================== Pools */
export interface PoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface PoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequest {
    /** pool_id is the pool id of the requested pool. */
    poolId: bigint;
}
export interface ContractInfoByPoolIdResponse {
    /**
     * contract_address is the pool address and contract address
     * of the requested pool id.
     */
    contractAddress: string;
    /** code_id is the code id of the requested pool id. */
    codeId: bigint;
}
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
            codeIdWhitelist?: bigint[] | undefined;
            poolMigrationLimit?: bigint | undefined;
        } | undefined;
    } & {
        params?: ({
            codeIdWhitelist?: bigint[] | undefined;
            poolMigrationLimit?: bigint | undefined;
        } & {
            codeIdWhitelist?: (bigint[] & bigint[] & Record<Exclude<keyof I["params"]["codeIdWhitelist"], keyof bigint[]>, never>) | undefined;
            poolMigrationLimit?: bigint | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): ParamsResponse;
};
export declare const PoolsRequest: {
    typeUrl: string;
    encode(message: PoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest;
    fromJSON(object: any): PoolsRequest;
    toJSON(message: PoolsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): PoolsRequest;
};
export declare const PoolsResponse: {
    typeUrl: string;
    encode(message: PoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse;
    fromJSON(object: any): PoolsResponse;
    toJSON(message: PoolsResponse): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        pools?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PoolsResponse>, never>>(object: I): PoolsResponse;
};
export declare const ContractInfoByPoolIdRequest: {
    typeUrl: string;
    encode(message: ContractInfoByPoolIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractInfoByPoolIdRequest;
    fromJSON(object: any): ContractInfoByPoolIdRequest;
    toJSON(message: ContractInfoByPoolIdRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): ContractInfoByPoolIdRequest;
};
export declare const ContractInfoByPoolIdResponse: {
    typeUrl: string;
    encode(message: ContractInfoByPoolIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractInfoByPoolIdResponse;
    fromJSON(object: any): ContractInfoByPoolIdResponse;
    toJSON(message: ContractInfoByPoolIdResponse): unknown;
    fromPartial<I extends {
        contractAddress?: string | undefined;
        codeId?: bigint | undefined;
    } & {
        contractAddress?: string | undefined;
        codeId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof ContractInfoByPoolIdResponse>, never>>(object: I): ContractInfoByPoolIdResponse;
};
export interface Query {
    /** Pools returns all cosmwasm pools */
    Pools(request?: PoolsRequest): Promise<PoolsResponse>;
    /** Params returns the parameters of the x/cosmwasmpool module. */
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    ContractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Pools(request?: PoolsRequest): Promise<PoolsResponse>;
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    ContractInfoByPoolId(request: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponse>;
}
