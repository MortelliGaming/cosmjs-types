import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { Group, GroupsWithGauge } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "osmosis.incentives";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsResponse {
    /** Coins that have yet to be distributed */
    coins: Coin[];
}
export interface GaugeByIDRequest {
    /** Gague ID being queried */
    id: bigint;
}
export interface GaugeByIDResponse {
    /** Gauge that corresponds to provided gague ID */
    gauge?: Gauge;
}
export interface GaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface GaugesResponse {
    /** Upcoming and active gauges */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesResponse {
    /** Active gagues only */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesPerDenomRequest {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesPerDenomResponse {
    /** Active gagues that match denom in query */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesResponse {
    /** Gauges whose distribution is upcoming */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesPerDenomRequest {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesPerDenomResponse {
    /** Upcoming gagues that match denom in query */
    upcomingGauges: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface RewardsEstRequest {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lockIds: bigint[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    endEpoch: bigint;
}
export interface RewardsEstResponse {
    /**
     * Estimated coin rewards that will be received at provided address
     * from specified locks between current time and end epoch
     */
    coins: Coin[];
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsResponse {
    /** Time durations that users can lock coins for in order to receive rewards */
    lockableDurations: Duration[];
}
export interface QueryAllGroupsRequest {
}
export interface QueryAllGroupsResponse {
    groups: Group[];
}
export interface QueryAllGroupsGaugesRequest {
}
export interface QueryAllGroupsGaugesResponse {
    gauges: Gauge[];
}
export interface QueryAllGroupsWithGaugeRequest {
}
export interface QueryAllGroupsWithGaugeResponse {
    groupsWithGauge: GroupsWithGauge[];
}
export interface QueryGroupByGroupGaugeIDRequest {
    id: bigint;
}
export interface QueryGroupByGroupGaugeIDResponse {
    group: Group;
}
export interface QueryCurrentWeightByGroupGaugeIDRequest {
    groupGaugeId: bigint;
}
export interface QueryCurrentWeightByGroupGaugeIDResponse {
    gaugeWeight: GaugeWeight[];
}
export interface GaugeWeight {
    gaugeId: bigint;
    weightRatio: string;
}
export declare const ModuleToDistributeCoinsRequest: {
    typeUrl: string;
    encode(_: ModuleToDistributeCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsRequest;
    fromJSON(_: any): ModuleToDistributeCoinsRequest;
    toJSON(_: ModuleToDistributeCoinsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ModuleToDistributeCoinsRequest;
};
export declare const ModuleToDistributeCoinsResponse: {
    typeUrl: string;
    encode(message: ModuleToDistributeCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleToDistributeCoinsResponse;
    fromJSON(object: any): ModuleToDistributeCoinsResponse;
    toJSON(message: ModuleToDistributeCoinsResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): ModuleToDistributeCoinsResponse;
};
export declare const GaugeByIDRequest: {
    typeUrl: string;
    encode(message: GaugeByIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDRequest;
    fromJSON(object: any): GaugeByIDRequest;
    toJSON(message: GaugeByIDRequest): unknown;
    fromPartial<I extends {
        id?: bigint | undefined;
    } & {
        id?: bigint | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): GaugeByIDRequest;
};
export declare const GaugeByIDResponse: {
    typeUrl: string;
    encode(message: GaugeByIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugeByIDResponse;
    fromJSON(object: any): GaugeByIDResponse;
    toJSON(message: GaugeByIDResponse): unknown;
    fromPartial<I extends {
        gauge?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        } | undefined;
    } & {
        gauge?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["gauge"]["distributeTo"]["duration"], keyof Duration>, never>) | undefined;
                timestamp?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["gauge"]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["gauge"]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["gauge"]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["gauge"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["gauge"]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["gauge"]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["gauge"]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["gauge"], keyof Gauge>, never>) | undefined;
    } & Record<Exclude<keyof I, "gauge">, never>>(object: I): GaugeByIDResponse;
};
export declare const GaugesRequest: {
    typeUrl: string;
    encode(message: GaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugesRequest;
    fromJSON(object: any): GaugesRequest;
    toJSON(message: GaugesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): GaugesRequest;
};
export declare const GaugesResponse: {
    typeUrl: string;
    encode(message: GaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugesResponse;
    fromJSON(object: any): GaugesResponse;
    toJSON(message: GaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        data?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                } & Record<Exclude<keyof I["data"][number]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GaugesResponse>, never>>(object: I): GaugesResponse;
};
export declare const ActiveGaugesRequest: {
    typeUrl: string;
    encode(message: ActiveGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesRequest;
    fromJSON(object: any): ActiveGaugesRequest;
    toJSON(message: ActiveGaugesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): ActiveGaugesRequest;
};
export declare const ActiveGaugesResponse: {
    typeUrl: string;
    encode(message: ActiveGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesResponse;
    fromJSON(object: any): ActiveGaugesResponse;
    toJSON(message: ActiveGaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        data?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                } & Record<Exclude<keyof I["data"][number]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ActiveGaugesResponse>, never>>(object: I): ActiveGaugesResponse;
};
export declare const ActiveGaugesPerDenomRequest: {
    typeUrl: string;
    encode(message: ActiveGaugesPerDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomRequest;
    fromJSON(object: any): ActiveGaugesPerDenomRequest;
    toJSON(message: ActiveGaugesPerDenomRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        denom?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof ActiveGaugesPerDenomRequest>, never>>(object: I): ActiveGaugesPerDenomRequest;
};
export declare const ActiveGaugesPerDenomResponse: {
    typeUrl: string;
    encode(message: ActiveGaugesPerDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ActiveGaugesPerDenomResponse;
    fromJSON(object: any): ActiveGaugesPerDenomResponse;
    toJSON(message: ActiveGaugesPerDenomResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        data?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                } & Record<Exclude<keyof I["data"][number]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ActiveGaugesPerDenomResponse>, never>>(object: I): ActiveGaugesPerDenomResponse;
};
export declare const UpcomingGaugesRequest: {
    typeUrl: string;
    encode(message: UpcomingGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesRequest;
    fromJSON(object: any): UpcomingGaugesRequest;
    toJSON(message: UpcomingGaugesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): UpcomingGaugesRequest;
};
export declare const UpcomingGaugesResponse: {
    typeUrl: string;
    encode(message: UpcomingGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesResponse;
    fromJSON(object: any): UpcomingGaugesResponse;
    toJSON(message: UpcomingGaugesResponse): unknown;
    fromPartial<I extends {
        data?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        data?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                } & Record<Exclude<keyof I["data"][number]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["data"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["data"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["data"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["data"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["data"], keyof {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UpcomingGaugesResponse>, never>>(object: I): UpcomingGaugesResponse;
};
export declare const UpcomingGaugesPerDenomRequest: {
    typeUrl: string;
    encode(message: UpcomingGaugesPerDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomRequest;
    fromJSON(object: any): UpcomingGaugesPerDenomRequest;
    toJSON(message: UpcomingGaugesPerDenomRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        denom?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof UpcomingGaugesPerDenomRequest>, never>>(object: I): UpcomingGaugesPerDenomRequest;
};
export declare const UpcomingGaugesPerDenomResponse: {
    typeUrl: string;
    encode(message: UpcomingGaugesPerDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpcomingGaugesPerDenomResponse;
    fromJSON(object: any): UpcomingGaugesPerDenomResponse;
    toJSON(message: UpcomingGaugesPerDenomResponse): unknown;
    fromPartial<I extends {
        upcomingGauges?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        upcomingGauges?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["upcomingGauges"][number]["distributeTo"]["duration"], keyof Duration>, never>) | undefined;
                timestamp?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["upcomingGauges"][number]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["upcomingGauges"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["upcomingGauges"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["upcomingGauges"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["upcomingGauges"][number]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["upcomingGauges"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["upcomingGauges"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["upcomingGauges"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["upcomingGauges"], keyof {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UpcomingGaugesPerDenomResponse>, never>>(object: I): UpcomingGaugesPerDenomResponse;
};
export declare const RewardsEstRequest: {
    typeUrl: string;
    encode(message: RewardsEstRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstRequest;
    fromJSON(object: any): RewardsEstRequest;
    toJSON(message: RewardsEstRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        lockIds?: bigint[] | undefined;
        endEpoch?: bigint | undefined;
    } & {
        owner?: string | undefined;
        lockIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["lockIds"], keyof bigint[]>, never>) | undefined;
        endEpoch?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof RewardsEstRequest>, never>>(object: I): RewardsEstRequest;
};
export declare const RewardsEstResponse: {
    typeUrl: string;
    encode(message: RewardsEstResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RewardsEstResponse;
    fromJSON(object: any): RewardsEstResponse;
    toJSON(message: RewardsEstResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): RewardsEstResponse;
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
export declare const QueryAllGroupsRequest: {
    typeUrl: string;
    encode(_: QueryAllGroupsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsRequest;
    fromJSON(_: any): QueryAllGroupsRequest;
    toJSON(_: QueryAllGroupsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryAllGroupsRequest;
};
export declare const QueryAllGroupsResponse: {
    typeUrl: string;
    encode(message: QueryAllGroupsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsResponse;
    fromJSON(object: any): QueryAllGroupsResponse;
    toJSON(message: QueryAllGroupsResponse): unknown;
    fromPartial<I extends {
        groups?: {
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: {
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        }[] | undefined;
    } & {
        groups?: ({
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: {
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        }[] & ({
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: {
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        } & {
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: ({
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } & {
                totalWeight?: string | undefined;
                gaugeRecords?: ({
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] & ({
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                } & {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                } & Record<Exclude<keyof I["groups"][number]["internalGaugeInfo"]["gaugeRecords"][number], keyof import("./group").InternalGaugeRecord>, never>)[] & Record<Exclude<keyof I["groups"][number]["internalGaugeInfo"]["gaugeRecords"], keyof {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["groups"][number]["internalGaugeInfo"], keyof import("./group").InternalGaugeInfo>, never>) | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        } & Record<Exclude<keyof I["groups"][number], keyof Group>, never>)[] & Record<Exclude<keyof I["groups"], keyof {
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: {
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "groups">, never>>(object: I): QueryAllGroupsResponse;
};
export declare const QueryAllGroupsGaugesRequest: {
    typeUrl: string;
    encode(_: QueryAllGroupsGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsGaugesRequest;
    fromJSON(_: any): QueryAllGroupsGaugesRequest;
    toJSON(_: QueryAllGroupsGaugesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryAllGroupsGaugesRequest;
};
export declare const QueryAllGroupsGaugesResponse: {
    typeUrl: string;
    encode(message: QueryAllGroupsGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsGaugesResponse;
    fromJSON(object: any): QueryAllGroupsGaugesResponse;
    toJSON(message: QueryAllGroupsGaugesResponse): unknown;
    fromPartial<I extends {
        gauges?: {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
        gauges?: ({
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
                denom?: string | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["gauges"][number]["distributeTo"]["duration"], keyof Duration>, never>) | undefined;
                timestamp?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["gauges"][number]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["gauges"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["gauges"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["gauges"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["gauges"][number]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["gauges"][number]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["gauges"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["gauges"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["gauges"], keyof {
            id?: bigint | undefined;
            isPerpetual?: boolean | undefined;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
    } & Record<Exclude<keyof I, "gauges">, never>>(object: I): QueryAllGroupsGaugesResponse;
};
export declare const QueryAllGroupsWithGaugeRequest: {
    typeUrl: string;
    encode(_: QueryAllGroupsWithGaugeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsWithGaugeRequest;
    fromJSON(_: any): QueryAllGroupsWithGaugeRequest;
    toJSON(_: QueryAllGroupsWithGaugeRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryAllGroupsWithGaugeRequest;
};
export declare const QueryAllGroupsWithGaugeResponse: {
    typeUrl: string;
    encode(message: QueryAllGroupsWithGaugeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGroupsWithGaugeResponse;
    fromJSON(object: any): QueryAllGroupsWithGaugeResponse;
    toJSON(message: QueryAllGroupsWithGaugeResponse): unknown;
    fromPartial<I extends {
        groupsWithGauge?: {
            group?: {
                groupGaugeId?: bigint | undefined;
                internalGaugeInfo?: {
                    totalWeight?: string | undefined;
                    gaugeRecords?: {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[] | undefined;
                } | undefined;
                splittingPolicy?: import("./group").SplittingPolicy | undefined;
            } | undefined;
            gauge?: {
                id?: bigint | undefined;
                isPerpetual?: boolean | undefined;
                distributeTo?: {
                    lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
            } | undefined;
        }[] | undefined;
    } & {
        groupsWithGauge?: ({
            group?: {
                groupGaugeId?: bigint | undefined;
                internalGaugeInfo?: {
                    totalWeight?: string | undefined;
                    gaugeRecords?: {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[] | undefined;
                } | undefined;
                splittingPolicy?: import("./group").SplittingPolicy | undefined;
            } | undefined;
            gauge?: {
                id?: bigint | undefined;
                isPerpetual?: boolean | undefined;
                distributeTo?: {
                    lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
            } | undefined;
        }[] & ({
            group?: {
                groupGaugeId?: bigint | undefined;
                internalGaugeInfo?: {
                    totalWeight?: string | undefined;
                    gaugeRecords?: {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[] | undefined;
                } | undefined;
                splittingPolicy?: import("./group").SplittingPolicy | undefined;
            } | undefined;
            gauge?: {
                id?: bigint | undefined;
                isPerpetual?: boolean | undefined;
                distributeTo?: {
                    lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
            } | undefined;
        } & {
            group?: ({
                groupGaugeId?: bigint | undefined;
                internalGaugeInfo?: {
                    totalWeight?: string | undefined;
                    gaugeRecords?: {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[] | undefined;
                } | undefined;
                splittingPolicy?: import("./group").SplittingPolicy | undefined;
            } & {
                groupGaugeId?: bigint | undefined;
                internalGaugeInfo?: ({
                    totalWeight?: string | undefined;
                    gaugeRecords?: {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[] | undefined;
                } & {
                    totalWeight?: string | undefined;
                    gaugeRecords?: ({
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[] & ({
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    } & {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    } & Record<Exclude<keyof I["groupsWithGauge"][number]["group"]["internalGaugeInfo"]["gaugeRecords"][number], keyof import("./group").InternalGaugeRecord>, never>)[] & Record<Exclude<keyof I["groupsWithGauge"][number]["group"]["internalGaugeInfo"]["gaugeRecords"], keyof {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["groupsWithGauge"][number]["group"]["internalGaugeInfo"], keyof import("./group").InternalGaugeInfo>, never>) | undefined;
                splittingPolicy?: import("./group").SplittingPolicy | undefined;
            } & Record<Exclude<keyof I["groupsWithGauge"][number]["group"], keyof Group>, never>) | undefined;
            gauge?: ({
                id?: bigint | undefined;
                isPerpetual?: boolean | undefined;
                distributeTo?: {
                    lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                    lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
                    lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
                    denom?: string | undefined;
                    duration?: ({
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["distributeTo"]["duration"], keyof Duration>, never>) | undefined;
                    timestamp?: ({
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                } & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
                coins?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["coins"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                startTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                } & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"]["distributedCoins"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["groupsWithGauge"][number]["gauge"], keyof Gauge>, never>) | undefined;
        } & Record<Exclude<keyof I["groupsWithGauge"][number], keyof GroupsWithGauge>, never>)[] & Record<Exclude<keyof I["groupsWithGauge"], keyof {
            group?: {
                groupGaugeId?: bigint | undefined;
                internalGaugeInfo?: {
                    totalWeight?: string | undefined;
                    gaugeRecords?: {
                        gaugeId?: bigint | undefined;
                        currentWeight?: string | undefined;
                        cumulativeWeight?: string | undefined;
                    }[] | undefined;
                } | undefined;
                splittingPolicy?: import("./group").SplittingPolicy | undefined;
            } | undefined;
            gauge?: {
                id?: bigint | undefined;
                isPerpetual?: boolean | undefined;
                distributeTo?: {
                    lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
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
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "groupsWithGauge">, never>>(object: I): QueryAllGroupsWithGaugeResponse;
};
export declare const QueryGroupByGroupGaugeIDRequest: {
    typeUrl: string;
    encode(message: QueryGroupByGroupGaugeIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupByGroupGaugeIDRequest;
    fromJSON(object: any): QueryGroupByGroupGaugeIDRequest;
    toJSON(message: QueryGroupByGroupGaugeIDRequest): unknown;
    fromPartial<I extends {
        id?: bigint | undefined;
    } & {
        id?: bigint | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryGroupByGroupGaugeIDRequest;
};
export declare const QueryGroupByGroupGaugeIDResponse: {
    typeUrl: string;
    encode(message: QueryGroupByGroupGaugeIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupByGroupGaugeIDResponse;
    fromJSON(object: any): QueryGroupByGroupGaugeIDResponse;
    toJSON(message: QueryGroupByGroupGaugeIDResponse): unknown;
    fromPartial<I extends {
        group?: {
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: {
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        } | undefined;
    } & {
        group?: ({
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: {
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        } & {
            groupGaugeId?: bigint | undefined;
            internalGaugeInfo?: ({
                totalWeight?: string | undefined;
                gaugeRecords?: {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] | undefined;
            } & {
                totalWeight?: string | undefined;
                gaugeRecords?: ({
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[] & ({
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                } & {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                } & Record<Exclude<keyof I["group"]["internalGaugeInfo"]["gaugeRecords"][number], keyof import("./group").InternalGaugeRecord>, never>)[] & Record<Exclude<keyof I["group"]["internalGaugeInfo"]["gaugeRecords"], keyof {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["group"]["internalGaugeInfo"], keyof import("./group").InternalGaugeInfo>, never>) | undefined;
            splittingPolicy?: import("./group").SplittingPolicy | undefined;
        } & Record<Exclude<keyof I["group"], keyof Group>, never>) | undefined;
    } & Record<Exclude<keyof I, "group">, never>>(object: I): QueryGroupByGroupGaugeIDResponse;
};
export declare const QueryCurrentWeightByGroupGaugeIDRequest: {
    typeUrl: string;
    encode(message: QueryCurrentWeightByGroupGaugeIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentWeightByGroupGaugeIDRequest;
    fromJSON(object: any): QueryCurrentWeightByGroupGaugeIDRequest;
    toJSON(message: QueryCurrentWeightByGroupGaugeIDRequest): unknown;
    fromPartial<I extends {
        groupGaugeId?: bigint | undefined;
    } & {
        groupGaugeId?: bigint | undefined;
    } & Record<Exclude<keyof I, "groupGaugeId">, never>>(object: I): QueryCurrentWeightByGroupGaugeIDRequest;
};
export declare const QueryCurrentWeightByGroupGaugeIDResponse: {
    typeUrl: string;
    encode(message: QueryCurrentWeightByGroupGaugeIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentWeightByGroupGaugeIDResponse;
    fromJSON(object: any): QueryCurrentWeightByGroupGaugeIDResponse;
    toJSON(message: QueryCurrentWeightByGroupGaugeIDResponse): unknown;
    fromPartial<I extends {
        gaugeWeight?: {
            gaugeId?: bigint | undefined;
            weightRatio?: string | undefined;
        }[] | undefined;
    } & {
        gaugeWeight?: ({
            gaugeId?: bigint | undefined;
            weightRatio?: string | undefined;
        }[] & ({
            gaugeId?: bigint | undefined;
            weightRatio?: string | undefined;
        } & {
            gaugeId?: bigint | undefined;
            weightRatio?: string | undefined;
        } & Record<Exclude<keyof I["gaugeWeight"][number], keyof GaugeWeight>, never>)[] & Record<Exclude<keyof I["gaugeWeight"], keyof {
            gaugeId?: bigint | undefined;
            weightRatio?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "gaugeWeight">, never>>(object: I): QueryCurrentWeightByGroupGaugeIDResponse;
};
export declare const GaugeWeight: {
    typeUrl: string;
    encode(message: GaugeWeight, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GaugeWeight;
    fromJSON(object: any): GaugeWeight;
    toJSON(message: GaugeWeight): unknown;
    fromPartial<I extends {
        gaugeId?: bigint | undefined;
        weightRatio?: string | undefined;
    } & {
        gaugeId?: bigint | undefined;
        weightRatio?: string | undefined;
    } & Record<Exclude<keyof I, keyof GaugeWeight>, never>>(object: I): GaugeWeight;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */
    ModuleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    /** GaugeByID returns gauges by their respective ID */
    GaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    /** Gauges returns both upcoming and active gauges */
    Gauges(request?: GaugesRequest): Promise<GaugesResponse>;
    /** ActiveGauges returns active gauges */
    ActiveGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    /** ActiveGaugesPerDenom returns active gauges by denom */
    ActiveGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    /** Returns scheduled gauges that have not yet occurred */
    UpcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occurred
     * by denom
     */
    UpcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    RewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    LockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    /** AllGroups returns all groups */
    AllGroups(request?: QueryAllGroupsRequest): Promise<QueryAllGroupsResponse>;
    /** AllGroupsGauges returns all group gauges */
    AllGroupsGauges(request?: QueryAllGroupsGaugesRequest): Promise<QueryAllGroupsGaugesResponse>;
    /** AllGroupsWithGauge returns all groups with their group gauge */
    AllGroupsWithGauge(request?: QueryAllGroupsWithGaugeRequest): Promise<QueryAllGroupsWithGaugeResponse>;
    /** GroupByGroupGaugeID returns a group given its group gauge ID */
    GroupByGroupGaugeID(request: QueryGroupByGroupGaugeIDRequest): Promise<QueryGroupByGroupGaugeIDResponse>;
    /**
     * CurrentWeightByGroupGaugeID returns the current weight since the
     * the last epoch given a group gauge ID
     */
    CurrentWeightByGroupGaugeID(request: QueryCurrentWeightByGroupGaugeIDRequest): Promise<QueryCurrentWeightByGroupGaugeIDResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ModuleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    GaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
    Gauges(request?: GaugesRequest): Promise<GaugesResponse>;
    ActiveGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
    ActiveGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
    UpcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
    UpcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
    RewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
    LockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
    AllGroups(request?: QueryAllGroupsRequest): Promise<QueryAllGroupsResponse>;
    AllGroupsGauges(request?: QueryAllGroupsGaugesRequest): Promise<QueryAllGroupsGaugesResponse>;
    AllGroupsWithGauge(request?: QueryAllGroupsWithGaugeRequest): Promise<QueryAllGroupsWithGaugeResponse>;
    GroupByGroupGaugeID(request: QueryGroupByGroupGaugeIDRequest): Promise<QueryGroupByGroupGaugeIDResponse>;
    CurrentWeightByGroupGaugeID(request: QueryCurrentWeightByGroupGaugeIDRequest): Promise<QueryCurrentWeightByGroupGaugeIDResponse>;
}
