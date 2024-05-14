import { Params } from "./feemarket";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params: Params;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    /** base_fee is the EIP1559 base fee */
    baseFee: string;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequest {
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponse {
    /** gas is the returned block gas */
    gas: bigint;
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
            noBaseFee?: boolean | undefined;
            baseFeeChangeDenominator?: number | undefined;
            elasticityMultiplier?: number | undefined;
            enableHeight?: bigint | undefined;
            baseFee?: string | undefined;
            minGasPrice?: string | undefined;
            minGasMultiplier?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            noBaseFee?: boolean | undefined;
            baseFeeChangeDenominator?: number | undefined;
            elasticityMultiplier?: number | undefined;
            enableHeight?: bigint | undefined;
            baseFee?: string | undefined;
            minGasPrice?: string | undefined;
            minGasMultiplier?: string | undefined;
        } & {
            noBaseFee?: boolean | undefined;
            baseFeeChangeDenominator?: number | undefined;
            elasticityMultiplier?: number | undefined;
            enableHeight?: bigint | undefined;
            baseFee?: string | undefined;
            minGasPrice?: string | undefined;
            minGasMultiplier?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryBaseFeeRequest: {
    typeUrl: string;
    encode(_: QueryBaseFeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeRequest;
    fromJSON(_: any): QueryBaseFeeRequest;
    toJSON(_: QueryBaseFeeRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryBaseFeeRequest;
};
export declare const QueryBaseFeeResponse: {
    typeUrl: string;
    encode(message: QueryBaseFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeResponse;
    fromJSON(object: any): QueryBaseFeeResponse;
    toJSON(message: QueryBaseFeeResponse): unknown;
    fromPartial<I extends {
        baseFee?: string | undefined;
    } & {
        baseFee?: string | undefined;
    } & Record<Exclude<keyof I, "baseFee">, never>>(object: I): QueryBaseFeeResponse;
};
export declare const QueryBlockGasRequest: {
    typeUrl: string;
    encode(_: QueryBlockGasRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockGasRequest;
    fromJSON(_: any): QueryBlockGasRequest;
    toJSON(_: QueryBlockGasRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryBlockGasRequest;
};
export declare const QueryBlockGasResponse: {
    typeUrl: string;
    encode(message: QueryBlockGasResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockGasResponse;
    fromJSON(object: any): QueryBlockGasResponse;
    toJSON(message: QueryBlockGasResponse): unknown;
    fromPartial<I extends {
        gas?: bigint | undefined;
    } & {
        gas?: bigint | undefined;
    } & Record<Exclude<keyof I, "gas">, never>>(object: I): QueryBlockGasResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/feemarket module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** BaseFee queries the base fee of the parent block of the current block. */
    BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
    /** BlockGas queries the gas used at a given block height */
    BlockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
    BlockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}
