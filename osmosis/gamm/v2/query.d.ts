import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.gamm.v2";
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
export declare const QuerySpotPriceRequest: {
    typeUrl: string;
    encode(message: QuerySpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromJSON(object: any): QuerySpotPriceRequest;
    toJSON(message: QuerySpotPriceRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof QuerySpotPriceRequest>, never>>(object: I): QuerySpotPriceRequest;
};
export declare const QuerySpotPriceResponse: {
    typeUrl: string;
    encode(message: QuerySpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromJSON(object: any): QuerySpotPriceResponse;
    toJSON(message: QuerySpotPriceResponse): unknown;
    fromPartial<I extends {
        spotPrice?: string | undefined;
    } & {
        spotPrice?: string | undefined;
    } & Record<Exclude<keyof I, "spotPrice">, never>>(object: I): QuerySpotPriceResponse;
};
export interface Query {
    /** Deprecated: please use alternate in x/poolmanager */
    SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
}
