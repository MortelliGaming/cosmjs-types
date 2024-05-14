import { Gauge } from "./gauge";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.incentives";
/** SplittingPolicy determines the way we want to split incentives in groupGauges */
export declare enum SplittingPolicy {
    ByVolume = 0,
    UNRECOGNIZED = -1
}
export declare function splittingPolicyFromJSON(object: any): SplittingPolicy;
export declare function splittingPolicyToJSON(object: SplittingPolicy): string;
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfo {
    totalWeight: string;
    gaugeRecords: InternalGaugeRecord[];
}
export interface InternalGaugeRecord {
    gaugeId: bigint;
    /**
     * CurrentWeight is the current weight of this gauge being distributed to for
     * this epoch. For instance, for volume splitting policy, this stores the
     * volume generated in the last epoch of the linked pool.
     */
    currentWeight: string;
    /**
     * CumulativeWeight serves as a snapshot of the accumulator being tracked
     * based on splitting policy. For instance, for volume splitting policy, this
     * stores the cumulative volume for the linked pool at time of last update.
     */
    cumulativeWeight: string;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface Group {
    groupGaugeId: bigint;
    internalGaugeInfo: InternalGaugeInfo;
    splittingPolicy: SplittingPolicy;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroup {
    /**
     * CreateGroup is called via governance to create a new group.
     * It takes an array of pool IDs to split the incentives across.
     */
    poolIds: bigint[];
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGauge {
    group: Group;
    gauge: Gauge;
}
export declare const InternalGaugeInfo: {
    typeUrl: string;
    encode(message: InternalGaugeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InternalGaugeInfo;
    fromJSON(object: any): InternalGaugeInfo;
    toJSON(message: InternalGaugeInfo): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["gaugeRecords"][number], keyof InternalGaugeRecord>, never>)[] & Record<Exclude<keyof I["gaugeRecords"], keyof {
            gaugeId?: bigint | undefined;
            currentWeight?: string | undefined;
            cumulativeWeight?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof InternalGaugeInfo>, never>>(object: I): InternalGaugeInfo;
};
export declare const InternalGaugeRecord: {
    typeUrl: string;
    encode(message: InternalGaugeRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InternalGaugeRecord;
    fromJSON(object: any): InternalGaugeRecord;
    toJSON(message: InternalGaugeRecord): unknown;
    fromPartial<I extends {
        gaugeId?: bigint | undefined;
        currentWeight?: string | undefined;
        cumulativeWeight?: string | undefined;
    } & {
        gaugeId?: bigint | undefined;
        currentWeight?: string | undefined;
        cumulativeWeight?: string | undefined;
    } & Record<Exclude<keyof I, keyof InternalGaugeRecord>, never>>(object: I): InternalGaugeRecord;
};
export declare const Group: {
    typeUrl: string;
    encode(message: Group, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    fromPartial<I extends {
        groupGaugeId?: bigint | undefined;
        internalGaugeInfo?: {
            totalWeight?: string | undefined;
            gaugeRecords?: {
                gaugeId?: bigint | undefined;
                currentWeight?: string | undefined;
                cumulativeWeight?: string | undefined;
            }[] | undefined;
        } | undefined;
        splittingPolicy?: SplittingPolicy | undefined;
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
            } & Record<Exclude<keyof I["internalGaugeInfo"]["gaugeRecords"][number], keyof InternalGaugeRecord>, never>)[] & Record<Exclude<keyof I["internalGaugeInfo"]["gaugeRecords"], keyof {
                gaugeId?: bigint | undefined;
                currentWeight?: string | undefined;
                cumulativeWeight?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["internalGaugeInfo"], keyof InternalGaugeInfo>, never>) | undefined;
        splittingPolicy?: SplittingPolicy | undefined;
    } & Record<Exclude<keyof I, keyof Group>, never>>(object: I): Group;
};
export declare const CreateGroup: {
    typeUrl: string;
    encode(message: CreateGroup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreateGroup;
    fromJSON(object: any): CreateGroup;
    toJSON(message: CreateGroup): unknown;
    fromPartial<I extends {
        poolIds?: bigint[] | undefined;
    } & {
        poolIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["poolIds"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "poolIds">, never>>(object: I): CreateGroup;
};
export declare const GroupsWithGauge: {
    typeUrl: string;
    encode(message: GroupsWithGauge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GroupsWithGauge;
    fromJSON(object: any): GroupsWithGauge;
    toJSON(message: GroupsWithGauge): unknown;
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
            splittingPolicy?: SplittingPolicy | undefined;
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
            splittingPolicy?: SplittingPolicy | undefined;
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
                } & Record<Exclude<keyof I["group"]["internalGaugeInfo"]["gaugeRecords"][number], keyof InternalGaugeRecord>, never>)[] & Record<Exclude<keyof I["group"]["internalGaugeInfo"]["gaugeRecords"], keyof {
                    gaugeId?: bigint | undefined;
                    currentWeight?: string | undefined;
                    cumulativeWeight?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["group"]["internalGaugeInfo"], keyof InternalGaugeInfo>, never>) | undefined;
            splittingPolicy?: SplittingPolicy | undefined;
        } & Record<Exclude<keyof I["group"], keyof Group>, never>) | undefined;
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
                } & Record<Exclude<keyof I["gauge"]["distributeTo"]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
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
            } & Record<Exclude<keyof I["gauge"]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["gauge"]["coins"], keyof {
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
            } & Record<Exclude<keyof I["gauge"]["distributedCoins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["gauge"]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["gauge"], keyof Gauge>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GroupsWithGauge>, never>>(object: I): GroupsWithGauge;
};
