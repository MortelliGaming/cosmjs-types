import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "evmos.vesting.v2";
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequest {
    /** address of the clawback vesting account */
    address: string;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponse {
    /** locked defines the current amount of locked tokens */
    locked: Coin[];
    /** unvested defines the current amount of unvested tokens */
    unvested: Coin[];
    /** vested defines the current amount of vested tokens */
    vested: Coin[];
}
export declare const QueryBalancesRequest: {
    typeUrl: string;
    encode(message: QueryBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesRequest;
    fromJSON(object: any): QueryBalancesRequest;
    toJSON(message: QueryBalancesRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryBalancesRequest;
};
export declare const QueryBalancesResponse: {
    typeUrl: string;
    encode(message: QueryBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesResponse;
    fromJSON(object: any): QueryBalancesResponse;
    toJSON(message: QueryBalancesResponse): unknown;
    fromPartial<I extends {
        locked?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        unvested?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        vested?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        locked?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["locked"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locked"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        unvested?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["unvested"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["unvested"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        vested?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["vested"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["vested"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryBalancesResponse>, never>>(object: I): QueryBalancesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balances retrieves the unvested, vested and locked tokens for a vesting account */
    Balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
