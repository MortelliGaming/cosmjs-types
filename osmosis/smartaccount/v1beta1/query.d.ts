import { Params } from "./params";
import { AccountAuthenticator } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.smartaccount.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequest {
    /** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
    account: string;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponse {
    accountAuthenticators: AccountAuthenticator[];
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */
export interface GetAuthenticatorRequest {
    account: string;
    authenticatorId: bigint;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */
export interface GetAuthenticatorResponse {
    accountAuthenticator?: AccountAuthenticator;
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
            maximumUnauthenticatedGas?: bigint | undefined;
            isSmartAccountActive?: boolean | undefined;
            circuitBreakerControllers?: string[] | undefined;
        } | undefined;
    } & {
        params?: ({
            maximumUnauthenticatedGas?: bigint | undefined;
            isSmartAccountActive?: boolean | undefined;
            circuitBreakerControllers?: string[] | undefined;
        } & {
            maximumUnauthenticatedGas?: bigint | undefined;
            isSmartAccountActive?: boolean | undefined;
            circuitBreakerControllers?: (string[] & string[] & Record<Exclude<keyof I["params"]["circuitBreakerControllers"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const GetAuthenticatorsRequest: {
    typeUrl: string;
    encode(message: GetAuthenticatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsRequest;
    fromJSON(object: any): GetAuthenticatorsRequest;
    toJSON(message: GetAuthenticatorsRequest): unknown;
    fromPartial<I extends {
        account?: string | undefined;
    } & {
        account?: string | undefined;
    } & Record<Exclude<keyof I, "account">, never>>(object: I): GetAuthenticatorsRequest;
};
export declare const GetAuthenticatorsResponse: {
    typeUrl: string;
    encode(message: GetAuthenticatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsResponse;
    fromJSON(object: any): GetAuthenticatorsResponse;
    toJSON(message: GetAuthenticatorsResponse): unknown;
    fromPartial<I extends {
        accountAuthenticators?: {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        accountAuthenticators?: ({
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        }[] & ({
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        } & {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["accountAuthenticators"][number], keyof AccountAuthenticator>, never>)[] & Record<Exclude<keyof I["accountAuthenticators"], keyof {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "accountAuthenticators">, never>>(object: I): GetAuthenticatorsResponse;
};
export declare const GetAuthenticatorRequest: {
    typeUrl: string;
    encode(message: GetAuthenticatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorRequest;
    fromJSON(object: any): GetAuthenticatorRequest;
    toJSON(message: GetAuthenticatorRequest): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        authenticatorId?: bigint | undefined;
    } & {
        account?: string | undefined;
        authenticatorId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof GetAuthenticatorRequest>, never>>(object: I): GetAuthenticatorRequest;
};
export declare const GetAuthenticatorResponse: {
    typeUrl: string;
    encode(message: GetAuthenticatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorResponse;
    fromJSON(object: any): GetAuthenticatorResponse;
    toJSON(message: GetAuthenticatorResponse): unknown;
    fromPartial<I extends {
        accountAuthenticator?: {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        } | undefined;
    } & {
        accountAuthenticator?: ({
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        } & {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["accountAuthenticator"], keyof AccountAuthenticator>, never>) | undefined;
    } & Record<Exclude<keyof I, "accountAuthenticator">, never>>(object: I): GetAuthenticatorResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    GetAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    GetAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
