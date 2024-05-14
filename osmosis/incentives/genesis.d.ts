import { Params } from "./params";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { Group } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.incentives";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params;
    /**
     * gauges are all gauges (not including group gauges) that should exist at
     * genesis
     */
    gauges: Gauge[];
    /**
     * lockable_durations are all lockup durations that gauges can be locked for
     * in order to receive incentives
     */
    lockableDurations: Duration[];
    /**
     * last_gauge_id is what the gauge number will increment from when creating
     * the next gauge after genesis
     */
    lastGaugeId: bigint;
    /** gauges are all group gauges that should exist at genesis */
    groupGauges: Gauge[];
    /** groups are all the groups that should exist at genesis */
    groups: Group[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            distrEpochIdentifier?: string | undefined;
            groupCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unrestrictedCreatorWhitelist?: string[] | undefined;
            internalUptime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            minValueForDistribution?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
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
        lockableDurations?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] | undefined;
        lastGaugeId?: bigint | undefined;
        groupGauges?: {
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
        params?: ({
            distrEpochIdentifier?: string | undefined;
            groupCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unrestrictedCreatorWhitelist?: string[] | undefined;
            internalUptime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            minValueForDistribution?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            distrEpochIdentifier?: string | undefined;
            groupCreationFee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["groupCreationFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["params"]["groupCreationFee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            unrestrictedCreatorWhitelist?: (string[] & string[] & Record<Exclude<keyof I["params"]["unrestrictedCreatorWhitelist"], keyof string[]>, never>) | undefined;
            internalUptime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["internalUptime"], keyof Duration>, never>) | undefined;
            minValueForDistribution?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["minValueForDistribution"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
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
            } & Record<Exclude<keyof I["gauges"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["gauges"][number]["coins"], keyof {
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
            } & Record<Exclude<keyof I["gauges"][number]["distributedCoins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["gauges"][number]["distributedCoins"], keyof {
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
        lastGaugeId?: bigint | undefined;
        groupGauges?: ({
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
                } & Record<Exclude<keyof I["groupGauges"][number]["distributeTo"]["duration"], keyof Duration>, never>) | undefined;
                timestamp?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["groupGauges"][number]["distributeTo"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["groupGauges"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["groupGauges"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["groupGauges"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["groupGauges"][number]["startTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["groupGauges"][number]["distributedCoins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["groupGauges"][number]["distributedCoins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["groupGauges"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["groupGauges"], keyof {
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
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
