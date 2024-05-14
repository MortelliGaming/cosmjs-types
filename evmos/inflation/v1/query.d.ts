import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "evmos.inflation.v1";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
    /** period is the current minting per epoch provision value. */
    period: bigint;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
    /** epoch_mint_provision is the current minting per epoch provision value. */
    epochMintProvision: DecCoin;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
    /** skipped_epochs is the number of epochs that the inflation module has been disabled. */
    skippedEpochs: bigint;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
    /** circulating_supply is the total amount of coins in circulation */
    circulatingSupply: DecCoin;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
    /** inflation_rate by which the total supply increases within one period */
    inflationRate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export declare const QueryPeriodRequest: {
    typeUrl: string;
    encode(_: QueryPeriodRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodRequest;
    fromJSON(_: any): QueryPeriodRequest;
    toJSON(_: QueryPeriodRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryPeriodRequest;
};
export declare const QueryPeriodResponse: {
    typeUrl: string;
    encode(message: QueryPeriodResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodResponse;
    fromJSON(object: any): QueryPeriodResponse;
    toJSON(message: QueryPeriodResponse): unknown;
    fromPartial<I extends {
        period?: bigint | undefined;
    } & {
        period?: bigint | undefined;
    } & Record<Exclude<keyof I, "period">, never>>(object: I): QueryPeriodResponse;
};
export declare const QueryEpochMintProvisionRequest: {
    typeUrl: string;
    encode(_: QueryEpochMintProvisionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionRequest;
    fromJSON(_: any): QueryEpochMintProvisionRequest;
    toJSON(_: QueryEpochMintProvisionRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryEpochMintProvisionRequest;
};
export declare const QueryEpochMintProvisionResponse: {
    typeUrl: string;
    encode(message: QueryEpochMintProvisionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionResponse;
    fromJSON(object: any): QueryEpochMintProvisionResponse;
    toJSON(message: QueryEpochMintProvisionResponse): unknown;
    fromPartial<I extends {
        epochMintProvision?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        epochMintProvision?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["epochMintProvision"], keyof DecCoin>, never>) | undefined;
    } & Record<Exclude<keyof I, "epochMintProvision">, never>>(object: I): QueryEpochMintProvisionResponse;
};
export declare const QuerySkippedEpochsRequest: {
    typeUrl: string;
    encode(_: QuerySkippedEpochsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsRequest;
    fromJSON(_: any): QuerySkippedEpochsRequest;
    toJSON(_: QuerySkippedEpochsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QuerySkippedEpochsRequest;
};
export declare const QuerySkippedEpochsResponse: {
    typeUrl: string;
    encode(message: QuerySkippedEpochsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsResponse;
    fromJSON(object: any): QuerySkippedEpochsResponse;
    toJSON(message: QuerySkippedEpochsResponse): unknown;
    fromPartial<I extends {
        skippedEpochs?: bigint | undefined;
    } & {
        skippedEpochs?: bigint | undefined;
    } & Record<Exclude<keyof I, "skippedEpochs">, never>>(object: I): QuerySkippedEpochsResponse;
};
export declare const QueryCirculatingSupplyRequest: {
    typeUrl: string;
    encode(_: QueryCirculatingSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculatingSupplyRequest;
    fromJSON(_: any): QueryCirculatingSupplyRequest;
    toJSON(_: QueryCirculatingSupplyRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryCirculatingSupplyRequest;
};
export declare const QueryCirculatingSupplyResponse: {
    typeUrl: string;
    encode(message: QueryCirculatingSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculatingSupplyResponse;
    fromJSON(object: any): QueryCirculatingSupplyResponse;
    toJSON(message: QueryCirculatingSupplyResponse): unknown;
    fromPartial<I extends {
        circulatingSupply?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        circulatingSupply?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["circulatingSupply"], keyof DecCoin>, never>) | undefined;
    } & Record<Exclude<keyof I, "circulatingSupply">, never>>(object: I): QueryCirculatingSupplyResponse;
};
export declare const QueryInflationRateRequest: {
    typeUrl: string;
    encode(_: QueryInflationRateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateRequest;
    fromJSON(_: any): QueryInflationRateRequest;
    toJSON(_: QueryInflationRateRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryInflationRateRequest;
};
export declare const QueryInflationRateResponse: {
    typeUrl: string;
    encode(message: QueryInflationRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateResponse;
    fromJSON(object: any): QueryInflationRateResponse;
    toJSON(message: QueryInflationRateResponse): unknown;
    fromPartial<I extends {
        inflationRate?: string | undefined;
    } & {
        inflationRate?: string | undefined;
    } & Record<Exclude<keyof I, "inflationRate">, never>>(object: I): QueryInflationRateResponse;
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
            mintDenom?: string | undefined;
            exponentialCalculation?: {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } | undefined;
            inflationDistribution?: {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            enableInflation?: boolean | undefined;
        } | undefined;
    } & {
        params?: ({
            mintDenom?: string | undefined;
            exponentialCalculation?: {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } | undefined;
            inflationDistribution?: {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            enableInflation?: boolean | undefined;
        } & {
            mintDenom?: string | undefined;
            exponentialCalculation?: ({
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } & {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } & Record<Exclude<keyof I["params"]["exponentialCalculation"], keyof import("./inflation").ExponentialCalculation>, never>) | undefined;
            inflationDistribution?: ({
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } & {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } & Record<Exclude<keyof I["params"]["inflationDistribution"], keyof import("./inflation").InflationDistribution>, never>) | undefined;
            enableInflation?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Period retrieves current period. */
    Period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse>;
    /** EpochMintProvision retrieves current minting epoch provision value. */
    EpochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
    /** SkippedEpochs retrieves the total number of skipped epochs. */
    SkippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
    /**
     * CirculatingSupply retrieves the total number of tokens that are in
     * circulation (i.e. excluding unvested tokens).
     */
    CirculatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    /** InflationRate retrieves the inflation rate of the current period. */
    InflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    /** Params retrieves the total set of minting parameters. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse>;
    EpochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
    SkippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
    CirculatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    InflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
