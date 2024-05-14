import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.poolincentives.v1beta1";
export interface QueryGaugeIdsRequest {
    poolId: bigint;
}
export interface QueryGaugeIdsResponse {
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    gaugeId: bigint;
    duration: Duration;
    gaugeIncentivePercentage: string;
}
export interface QueryDistrInfoRequest {
}
export interface QueryDistrInfoResponse {
    distrInfo: DistrInfo;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: Duration[];
}
export interface QueryIncentivizedPoolsRequest {
}
export interface IncentivizedPool {
    poolId: bigint;
    lockableDuration: Duration;
    gaugeId: bigint;
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryExternalIncentiveGaugesRequest {
}
export interface QueryExternalIncentiveGaugesResponse {
    data: Gauge[];
}
export declare const QueryGaugeIdsRequest: {
    typeUrl: string;
    encode(message: QueryGaugeIdsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsRequest;
    fromJSON(object: any): QueryGaugeIdsRequest;
    toJSON(message: QueryGaugeIdsRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryGaugeIdsRequest;
};
export declare const QueryGaugeIdsResponse: {
    typeUrl: string;
    encode(message: QueryGaugeIdsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsResponse;
    fromJSON(object: any): QueryGaugeIdsResponse;
    toJSON(message: QueryGaugeIdsResponse): unknown;
    fromPartial<I extends {
        gaugeIdsWithDuration?: {
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeIncentivePercentage?: string | undefined;
        }[] | undefined;
    } & {
        gaugeIdsWithDuration?: ({
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeIncentivePercentage?: string | undefined;
        }[] & ({
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeIncentivePercentage?: string | undefined;
        } & {
            gaugeId?: bigint | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["gaugeIdsWithDuration"][number]["duration"], keyof Duration>, never>) | undefined;
            gaugeIncentivePercentage?: string | undefined;
        } & Record<Exclude<keyof I["gaugeIdsWithDuration"][number], keyof QueryGaugeIdsResponse_GaugeIdWithDuration>, never>)[] & Record<Exclude<keyof I["gaugeIdsWithDuration"], keyof {
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeIncentivePercentage?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "gaugeIdsWithDuration">, never>>(object: I): QueryGaugeIdsResponse;
};
export declare const QueryGaugeIdsResponse_GaugeIdWithDuration: {
    typeUrl: string;
    encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
    fromPartial<I extends {
        gaugeId?: bigint | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        gaugeIncentivePercentage?: string | undefined;
    } & {
        gaugeId?: bigint | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
        gaugeIncentivePercentage?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryGaugeIdsResponse_GaugeIdWithDuration>, never>>(object: I): QueryGaugeIdsResponse_GaugeIdWithDuration;
};
export declare const QueryDistrInfoRequest: {
    typeUrl: string;
    encode(_: QueryDistrInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDistrInfoRequest;
    fromJSON(_: any): QueryDistrInfoRequest;
    toJSON(_: QueryDistrInfoRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryDistrInfoRequest;
};
export declare const QueryDistrInfoResponse: {
    typeUrl: string;
    encode(message: QueryDistrInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDistrInfoResponse;
    fromJSON(object: any): QueryDistrInfoResponse;
    toJSON(message: QueryDistrInfoResponse): unknown;
    fromPartial<I extends {
        distrInfo?: {
            totalWeight?: string | undefined;
            records?: {
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        distrInfo?: ({
            totalWeight?: string | undefined;
            records?: {
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } & {
            totalWeight?: string | undefined;
            records?: ({
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            }[] & ({
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            } & {
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            } & Record<Exclude<keyof I["distrInfo"]["records"][number], keyof import("./incentives").DistrRecord>, never>)[] & Record<Exclude<keyof I["distrInfo"]["records"], keyof {
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["distrInfo"], keyof DistrInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, "distrInfo">, never>>(object: I): QueryDistrInfoResponse;
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
            mintedDenom?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            mintedDenom?: string | undefined;
        } & {
            mintedDenom?: string | undefined;
        } & Record<Exclude<keyof I["params"], "mintedDenom">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryLockableDurationsRequest: {
    typeUrl: string;
    encode(_: QueryLockableDurationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromJSON(_: any): QueryLockableDurationsRequest;
    toJSON(_: QueryLockableDurationsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryLockableDurationsRequest;
};
export declare const QueryLockableDurationsResponse: {
    typeUrl: string;
    encode(message: QueryLockableDurationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromJSON(object: any): QueryLockableDurationsResponse;
    toJSON(message: QueryLockableDurationsResponse): unknown;
    fromPartial<I extends {
        lockableDurations?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] | undefined;
    } & {
        lockableDurations?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] & ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lockableDurations"][number], keyof Duration>, never>)[] & Record<Exclude<keyof I["lockableDurations"], keyof {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "lockableDurations">, never>>(object: I): QueryLockableDurationsResponse;
};
export declare const QueryIncentivizedPoolsRequest: {
    typeUrl: string;
    encode(_: QueryIncentivizedPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest;
    fromJSON(_: any): QueryIncentivizedPoolsRequest;
    toJSON(_: QueryIncentivizedPoolsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryIncentivizedPoolsRequest;
};
export declare const IncentivizedPool: {
    typeUrl: string;
    encode(message: IncentivizedPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentivizedPool;
    fromJSON(object: any): IncentivizedPool;
    toJSON(message: IncentivizedPool): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        lockableDuration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        gaugeId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
        lockableDuration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lockableDuration"], keyof Duration>, never>) | undefined;
        gaugeId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof IncentivizedPool>, never>>(object: I): IncentivizedPool;
};
export declare const QueryIncentivizedPoolsResponse: {
    typeUrl: string;
    encode(message: QueryIncentivizedPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse;
    fromJSON(object: any): QueryIncentivizedPoolsResponse;
    toJSON(message: QueryIncentivizedPoolsResponse): unknown;
    fromPartial<I extends {
        incentivizedPools?: {
            poolId?: bigint | undefined;
            lockableDuration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeId?: bigint | undefined;
        }[] | undefined;
    } & {
        incentivizedPools?: ({
            poolId?: bigint | undefined;
            lockableDuration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeId?: bigint | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            lockableDuration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeId?: bigint | undefined;
        } & {
            poolId?: bigint | undefined;
            lockableDuration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["incentivizedPools"][number]["lockableDuration"], keyof Duration>, never>) | undefined;
            gaugeId?: bigint | undefined;
        } & Record<Exclude<keyof I["incentivizedPools"][number], keyof IncentivizedPool>, never>)[] & Record<Exclude<keyof I["incentivizedPools"], keyof {
            poolId?: bigint | undefined;
            lockableDuration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            gaugeId?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "incentivizedPools">, never>>(object: I): QueryIncentivizedPoolsResponse;
};
export declare const QueryExternalIncentiveGaugesRequest: {
    typeUrl: string;
    encode(_: QueryExternalIncentiveGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest;
    fromJSON(_: any): QueryExternalIncentiveGaugesRequest;
    toJSON(_: QueryExternalIncentiveGaugesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryExternalIncentiveGaugesRequest;
};
export declare const QueryExternalIncentiveGaugesResponse: {
    typeUrl: string;
    encode(message: QueryExternalIncentiveGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse;
    fromJSON(object: any): QueryExternalIncentiveGaugesResponse;
    toJSON(message: QueryExternalIncentiveGaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            numEpochsPaidOver?: bigint | undefined;
            filledEpochs?: bigint | undefined;
            distributedCoins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        data?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            numEpochsPaidOver?: bigint | undefined;
            filledEpochs?: bigint | undefined;
            distributedCoins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            numEpochsPaidOver?: bigint | undefined;
            filledEpochs?: bigint | undefined;
            distributedCoins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: ({
                lockQueryType?: import("../../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                lockQueryType?: import("../../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["data"][number]["distributeTo"]["duration"], keyof Duration>, never>) | undefined;
                timestamp?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["data"][number]["distributeTo"]["timestamp"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["startTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            numEpochsPaidOver?: bigint | undefined;
            filledEpochs?: bigint | undefined;
            distributedCoins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            numEpochsPaidOver?: bigint | undefined;
            filledEpochs?: bigint | undefined;
            distributedCoins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): QueryExternalIncentiveGaugesResponse;
};
export interface Query {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
    GaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    /** DistrInfo returns the pool's matching gauge ids and weights. */
    DistrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    /** Params returns pool incentives params. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** LockableDurations returns lock durations for pools. */
    LockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    /** IncentivizedPools returns currently incentivized pools */
    IncentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    /** ExternalIncentiveGauges returns external incentive gauges. */
    ExternalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
    DistrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    LockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    IncentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
    ExternalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
