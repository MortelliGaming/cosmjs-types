import { Params } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.mint.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequest {
}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponse {
    /** epoch_provisions is the current minting per epoch provisions value. */
    epochProvisions: Uint8Array;
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
            mintDenom?: string | undefined;
            genesisEpochProvisions?: string | undefined;
            epochIdentifier?: string | undefined;
            reductionPeriodInEpochs?: bigint | undefined;
            reductionFactor?: string | undefined;
            distributionProportions?: {
                staking?: string | undefined;
                poolIncentives?: string | undefined;
                developerRewards?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            weightedDeveloperRewardsReceivers?: {
                address?: string | undefined;
                weight?: string | undefined;
            }[] | undefined;
            mintingRewardsDistributionStartEpoch?: bigint | undefined;
        } | undefined;
    } & {
        params?: ({
            mintDenom?: string | undefined;
            genesisEpochProvisions?: string | undefined;
            epochIdentifier?: string | undefined;
            reductionPeriodInEpochs?: bigint | undefined;
            reductionFactor?: string | undefined;
            distributionProportions?: {
                staking?: string | undefined;
                poolIncentives?: string | undefined;
                developerRewards?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            weightedDeveloperRewardsReceivers?: {
                address?: string | undefined;
                weight?: string | undefined;
            }[] | undefined;
            mintingRewardsDistributionStartEpoch?: bigint | undefined;
        } & {
            mintDenom?: string | undefined;
            genesisEpochProvisions?: string | undefined;
            epochIdentifier?: string | undefined;
            reductionPeriodInEpochs?: bigint | undefined;
            reductionFactor?: string | undefined;
            distributionProportions?: ({
                staking?: string | undefined;
                poolIncentives?: string | undefined;
                developerRewards?: string | undefined;
                communityPool?: string | undefined;
            } & {
                staking?: string | undefined;
                poolIncentives?: string | undefined;
                developerRewards?: string | undefined;
                communityPool?: string | undefined;
            } & Record<Exclude<keyof I["params"]["distributionProportions"], keyof import("./mint").DistributionProportions>, never>) | undefined;
            weightedDeveloperRewardsReceivers?: ({
                address?: string | undefined;
                weight?: string | undefined;
            }[] & ({
                address?: string | undefined;
                weight?: string | undefined;
            } & {
                address?: string | undefined;
                weight?: string | undefined;
            } & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"][number], keyof import("./mint").WeightedAddress>, never>)[] & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"], keyof {
                address?: string | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
            mintingRewardsDistributionStartEpoch?: bigint | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryEpochProvisionsRequest: {
    typeUrl: string;
    encode(_: QueryEpochProvisionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsRequest;
    fromJSON(_: any): QueryEpochProvisionsRequest;
    toJSON(_: QueryEpochProvisionsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryEpochProvisionsRequest;
};
export declare const QueryEpochProvisionsResponse: {
    typeUrl: string;
    encode(message: QueryEpochProvisionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsResponse;
    fromJSON(object: any): QueryEpochProvisionsResponse;
    toJSON(message: QueryEpochProvisionsResponse): unknown;
    fromPartial<I extends {
        epochProvisions?: Uint8Array | undefined;
    } & {
        epochProvisions?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "epochProvisions">, never>>(object: I): QueryEpochProvisionsResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** EpochProvisions returns the current minting epoch provisions value. */
    EpochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    EpochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
