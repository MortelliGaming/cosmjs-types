import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.poolmanager.v2";
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
    /** String of the BigDec. Ex) 10.203uatom */
    spotPrice: string;
}
export declare const SpotPriceRequest: {
    typeUrl: string;
    encode(message: SpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceRequest;
    fromJSON(object: any): SpotPriceRequest;
    toJSON(message: SpotPriceRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        baseAssetDenom?: string | undefined;
        quoteAssetDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SpotPriceRequest>, never>>(object: I): SpotPriceRequest;
};
export declare const SpotPriceResponse: {
    typeUrl: string;
    encode(message: SpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceResponse;
    fromJSON(object: any): SpotPriceResponse;
    toJSON(message: SpotPriceResponse): unknown;
    fromPartial<I extends {
        spotPrice?: string | undefined;
    } & {
        spotPrice?: string | undefined;
    } & Record<Exclude<keyof I, "spotPrice">, never>>(object: I): SpotPriceResponse;
};
export interface Query {
    /**
     * SpotPriceV2 defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     * The returned spot price has 36 decimal places. However, some of
     * modules perform sig fig rounding so most of the rightmost decimals can be
     * zeroes.
     */
    SpotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SpotPriceV2(request: SpotPriceRequest): Promise<SpotPriceResponse>;
}
