import { TickInfo } from "./tick_info";
import { Any } from "../../../google/protobuf/any";
import { IncentiveRecord } from "./incentive_record";
import { Position } from "./position";
import { Record, AccumulatorContent } from "../../accum/v1beta1/accum";
import { Params } from "../params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
    /** pool id associated with the tick. */
    poolId: bigint;
    /** tick's index. */
    tickIndex: bigint;
    /** tick's info. */
    info: TickInfo;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
    /** pool struct */
    pool?: Any;
    /** pool's ticks */
    ticks: FullTick[];
    spreadRewardAccumulator: AccumObject;
    incentivesAccumulators: AccumObject[];
    /** incentive records to be set */
    incentiveRecords: IncentiveRecord[];
}
export interface PositionData {
    position?: Position;
    lockId: bigint;
    spreadRewardAccumRecord: Record;
    uptimeAccumRecords: Record[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params;
    /** pool data containing serialized pool struct and ticks. */
    poolData: PoolData[];
    positionData: PositionData[];
    nextPositionId: bigint;
    nextIncentiveRecordId: bigint;
    incentivesAccumulatorPoolIdMigrationThreshold: bigint;
    spreadFactorPoolIdMigrationThreshold: bigint;
}
export interface AccumObject {
    /** Accumulator's name (pulled from AccumulatorContent) */
    name: string;
    accumContent?: AccumulatorContent;
}
export declare const FullTick: {
    typeUrl: string;
    encode(message: FullTick, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FullTick;
    fromJSON(object: any): FullTick;
    toJSON(message: FullTick): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tickIndex?: bigint | undefined;
        info?: {
            liquidityGross?: string | undefined;
            liquidityNet?: string | undefined;
            spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            uptimeTrackers?: {
                list?: {
                    uptimeGrowthOutside?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        tickIndex?: bigint | undefined;
        info?: ({
            liquidityGross?: string | undefined;
            liquidityNet?: string | undefined;
            spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            uptimeTrackers?: {
                list?: {
                    uptimeGrowthOutside?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            liquidityGross?: string | undefined;
            liquidityNet?: string | undefined;
            spreadRewardGrowthOppositeDirectionOfLastTraversal?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["info"]["spreadRewardGrowthOppositeDirectionOfLastTraversal"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["info"]["spreadRewardGrowthOppositeDirectionOfLastTraversal"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            uptimeTrackers?: ({
                list?: {
                    uptimeGrowthOutside?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                list?: ({
                    uptimeGrowthOutside?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    uptimeGrowthOutside?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    uptimeGrowthOutside?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & globalThis.Record<Exclude<keyof I["info"]["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["info"]["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & globalThis.Record<Exclude<keyof I["info"]["uptimeTrackers"]["list"][number], "uptimeGrowthOutside">, never>)[] & globalThis.Record<Exclude<keyof I["info"]["uptimeTrackers"]["list"], keyof {
                    uptimeGrowthOutside?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["info"]["uptimeTrackers"], "list">, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["info"], keyof TickInfo>, never>) | undefined;
    } & globalThis.Record<Exclude<keyof I, keyof FullTick>, never>>(object: I): FullTick;
};
export declare const PoolData: {
    typeUrl: string;
    encode(message: PoolData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolData;
    fromJSON(object: any): PoolData;
    toJSON(message: PoolData): unknown;
    fromPartial<I extends {
        pool?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        ticks?: {
            poolId?: bigint | undefined;
            tickIndex?: bigint | undefined;
            info?: {
                liquidityGross?: string | undefined;
                liquidityNet?: string | undefined;
                spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                uptimeTrackers?: {
                    list?: {
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        spreadRewardAccumulator?: {
            name?: string | undefined;
            accumContent?: {
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } | undefined;
        } | undefined;
        incentivesAccumulators?: {
            name?: string | undefined;
            accumContent?: {
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } | undefined;
        }[] | undefined;
        incentiveRecords?: {
            incentiveId?: bigint | undefined;
            poolId?: bigint | undefined;
            incentiveRecordBody?: {
                remainingCoin?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                emissionRate?: string | undefined;
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            minUptime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        pool?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & globalThis.Record<Exclude<keyof I["pool"], keyof Any>, never>) | undefined;
        ticks?: ({
            poolId?: bigint | undefined;
            tickIndex?: bigint | undefined;
            info?: {
                liquidityGross?: string | undefined;
                liquidityNet?: string | undefined;
                spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                uptimeTrackers?: {
                    list?: {
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            tickIndex?: bigint | undefined;
            info?: {
                liquidityGross?: string | undefined;
                liquidityNet?: string | undefined;
                spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                uptimeTrackers?: {
                    list?: {
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } & {
            poolId?: bigint | undefined;
            tickIndex?: bigint | undefined;
            info?: ({
                liquidityGross?: string | undefined;
                liquidityNet?: string | undefined;
                spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                uptimeTrackers?: {
                    list?: {
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                liquidityGross?: string | undefined;
                liquidityNet?: string | undefined;
                spreadRewardGrowthOppositeDirectionOfLastTraversal?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["ticks"][number]["info"]["spreadRewardGrowthOppositeDirectionOfLastTraversal"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["ticks"][number]["info"]["spreadRewardGrowthOppositeDirectionOfLastTraversal"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                uptimeTrackers?: ({
                    list?: {
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    list?: ({
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } & {
                        uptimeGrowthOutside?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & globalThis.Record<Exclude<keyof I["ticks"][number]["info"]["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["ticks"][number]["info"]["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                    } & globalThis.Record<Exclude<keyof I["ticks"][number]["info"]["uptimeTrackers"]["list"][number], "uptimeGrowthOutside">, never>)[] & globalThis.Record<Exclude<keyof I["ticks"][number]["info"]["uptimeTrackers"]["list"], keyof {
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                } & globalThis.Record<Exclude<keyof I["ticks"][number]["info"]["uptimeTrackers"], "list">, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["ticks"][number]["info"], keyof TickInfo>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["ticks"][number], keyof FullTick>, never>)[] & globalThis.Record<Exclude<keyof I["ticks"], keyof {
            poolId?: bigint | undefined;
            tickIndex?: bigint | undefined;
            info?: {
                liquidityGross?: string | undefined;
                liquidityNet?: string | undefined;
                spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                uptimeTrackers?: {
                    list?: {
                        uptimeGrowthOutside?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        spreadRewardAccumulator?: ({
            name?: string | undefined;
            accumContent?: {
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            accumContent?: ({
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } & {
                accumValue?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["spreadRewardAccumulator"]["accumContent"]["accumValue"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["spreadRewardAccumulator"]["accumContent"]["accumValue"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                totalShares?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["spreadRewardAccumulator"]["accumContent"], keyof AccumulatorContent>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["spreadRewardAccumulator"], keyof AccumObject>, never>) | undefined;
        incentivesAccumulators?: ({
            name?: string | undefined;
            accumContent?: {
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            accumContent?: {
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            accumContent?: ({
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } & {
                accumValue?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["incentivesAccumulators"][number]["accumContent"]["accumValue"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["incentivesAccumulators"][number]["accumContent"]["accumValue"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                totalShares?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["incentivesAccumulators"][number]["accumContent"], keyof AccumulatorContent>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["incentivesAccumulators"][number], keyof AccumObject>, never>)[] & globalThis.Record<Exclude<keyof I["incentivesAccumulators"], keyof {
            name?: string | undefined;
            accumContent?: {
                accumValue?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                totalShares?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        incentiveRecords?: ({
            incentiveId?: bigint | undefined;
            poolId?: bigint | undefined;
            incentiveRecordBody?: {
                remainingCoin?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                emissionRate?: string | undefined;
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            minUptime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            incentiveId?: bigint | undefined;
            poolId?: bigint | undefined;
            incentiveRecordBody?: {
                remainingCoin?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                emissionRate?: string | undefined;
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            minUptime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            incentiveId?: bigint | undefined;
            poolId?: bigint | undefined;
            incentiveRecordBody?: ({
                remainingCoin?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                emissionRate?: string | undefined;
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                remainingCoin?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["incentiveRecords"][number]["incentiveRecordBody"]["remainingCoin"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                emissionRate?: string | undefined;
                startTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & globalThis.Record<Exclude<keyof I["incentiveRecords"][number]["incentiveRecordBody"]["startTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["incentiveRecords"][number]["incentiveRecordBody"], keyof import("./incentive_record").IncentiveRecordBody>, never>) | undefined;
            minUptime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & globalThis.Record<Exclude<keyof I["incentiveRecords"][number]["minUptime"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["incentiveRecords"][number], keyof IncentiveRecord>, never>)[] & globalThis.Record<Exclude<keyof I["incentiveRecords"], keyof {
            incentiveId?: bigint | undefined;
            poolId?: bigint | undefined;
            incentiveRecordBody?: {
                remainingCoin?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                emissionRate?: string | undefined;
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            minUptime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & globalThis.Record<Exclude<keyof I, keyof PoolData>, never>>(object: I): PoolData;
};
export declare const PositionData: {
    typeUrl: string;
    encode(message: PositionData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionData;
    fromJSON(object: any): PositionData;
    toJSON(message: PositionData): unknown;
    fromPartial<I extends {
        position?: {
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            liquidity?: string | undefined;
        } | undefined;
        lockId?: bigint | undefined;
        spreadRewardAccumRecord?: {
            numShares?: string | undefined;
            accumValuePerShare?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unclaimedRewardsTotal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            options?: {} | undefined;
        } | undefined;
        uptimeAccumRecords?: {
            numShares?: string | undefined;
            accumValuePerShare?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unclaimedRewardsTotal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            options?: {} | undefined;
        }[] | undefined;
    } & {
        position?: ({
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            liquidity?: string | undefined;
        } & {
            positionId?: bigint | undefined;
            address?: string | undefined;
            poolId?: bigint | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
            joinTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & globalThis.Record<Exclude<keyof I["position"]["joinTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            liquidity?: string | undefined;
        } & globalThis.Record<Exclude<keyof I["position"], keyof Position>, never>) | undefined;
        lockId?: bigint | undefined;
        spreadRewardAccumRecord?: ({
            numShares?: string | undefined;
            accumValuePerShare?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unclaimedRewardsTotal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            options?: {} | undefined;
        } & {
            numShares?: string | undefined;
            accumValuePerShare?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["spreadRewardAccumRecord"]["accumValuePerShare"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["spreadRewardAccumRecord"]["accumValuePerShare"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            unclaimedRewardsTotal?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["spreadRewardAccumRecord"]["unclaimedRewardsTotal"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["spreadRewardAccumRecord"]["unclaimedRewardsTotal"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            options?: ({} & {} & globalThis.Record<Exclude<keyof I["spreadRewardAccumRecord"]["options"], never>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["spreadRewardAccumRecord"], keyof Record>, never>) | undefined;
        uptimeAccumRecords?: ({
            numShares?: string | undefined;
            accumValuePerShare?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unclaimedRewardsTotal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            options?: {} | undefined;
        }[] & ({
            numShares?: string | undefined;
            accumValuePerShare?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unclaimedRewardsTotal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            options?: {} | undefined;
        } & {
            numShares?: string | undefined;
            accumValuePerShare?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["uptimeAccumRecords"][number]["accumValuePerShare"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["uptimeAccumRecords"][number]["accumValuePerShare"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            unclaimedRewardsTotal?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["uptimeAccumRecords"][number]["unclaimedRewardsTotal"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["uptimeAccumRecords"][number]["unclaimedRewardsTotal"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            options?: ({} & {} & globalThis.Record<Exclude<keyof I["uptimeAccumRecords"][number]["options"], never>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["uptimeAccumRecords"][number], keyof Record>, never>)[] & globalThis.Record<Exclude<keyof I["uptimeAccumRecords"], keyof {
            numShares?: string | undefined;
            accumValuePerShare?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unclaimedRewardsTotal?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            options?: {} | undefined;
        }[]>, never>) | undefined;
    } & globalThis.Record<Exclude<keyof I, keyof PositionData>, never>>(object: I): PositionData;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            authorizedTickSpacing?: bigint[] | undefined;
            authorizedSpreadFactors?: string[] | undefined;
            balancerSharesRewardDiscount?: string | undefined;
            authorizedQuoteDenoms?: string[] | undefined;
            authorizedUptimes?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            }[] | undefined;
            isPermissionlessPoolCreationEnabled?: boolean | undefined;
            unrestrictedPoolCreatorWhitelist?: string[] | undefined;
            hookGasLimit?: bigint | undefined;
        } | undefined;
        poolData?: {
            pool?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            ticks?: {
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            spreadRewardAccumulator?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            } | undefined;
            incentivesAccumulators?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            }[] | undefined;
            incentiveRecords?: {
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: {
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                minUptime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
        positionData?: {
            position?: {
                positionId?: bigint | undefined;
                address?: string | undefined;
                poolId?: bigint | undefined;
                lowerTick?: bigint | undefined;
                upperTick?: bigint | undefined;
                joinTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                liquidity?: string | undefined;
            } | undefined;
            lockId?: bigint | undefined;
            spreadRewardAccumRecord?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            } | undefined;
            uptimeAccumRecords?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            }[] | undefined;
        }[] | undefined;
        nextPositionId?: bigint | undefined;
        nextIncentiveRecordId?: bigint | undefined;
        incentivesAccumulatorPoolIdMigrationThreshold?: bigint | undefined;
        spreadFactorPoolIdMigrationThreshold?: bigint | undefined;
    } & {
        params?: ({
            authorizedTickSpacing?: bigint[] | undefined;
            authorizedSpreadFactors?: string[] | undefined;
            balancerSharesRewardDiscount?: string | undefined;
            authorizedQuoteDenoms?: string[] | undefined;
            authorizedUptimes?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            }[] | undefined;
            isPermissionlessPoolCreationEnabled?: boolean | undefined;
            unrestrictedPoolCreatorWhitelist?: string[] | undefined;
            hookGasLimit?: bigint | undefined;
        } & {
            authorizedTickSpacing?: (bigint[] & bigint[] & globalThis.Record<Exclude<keyof I["params"]["authorizedTickSpacing"], keyof bigint[]>, never>) | undefined;
            authorizedSpreadFactors?: (string[] & string[] & globalThis.Record<Exclude<keyof I["params"]["authorizedSpreadFactors"], keyof string[]>, never>) | undefined;
            balancerSharesRewardDiscount?: string | undefined;
            authorizedQuoteDenoms?: (string[] & string[] & globalThis.Record<Exclude<keyof I["params"]["authorizedQuoteDenoms"], keyof string[]>, never>) | undefined;
            authorizedUptimes?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            }[] & ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & globalThis.Record<Exclude<keyof I["params"]["authorizedUptimes"][number], keyof import("../../../google/protobuf/duration").Duration>, never>)[] & globalThis.Record<Exclude<keyof I["params"]["authorizedUptimes"], keyof {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            }[]>, never>) | undefined;
            isPermissionlessPoolCreationEnabled?: boolean | undefined;
            unrestrictedPoolCreatorWhitelist?: (string[] & string[] & globalThis.Record<Exclude<keyof I["params"]["unrestrictedPoolCreatorWhitelist"], keyof string[]>, never>) | undefined;
            hookGasLimit?: bigint | undefined;
        } & globalThis.Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        poolData?: ({
            pool?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            ticks?: {
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            spreadRewardAccumulator?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            } | undefined;
            incentivesAccumulators?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            }[] | undefined;
            incentiveRecords?: {
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: {
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                minUptime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            pool?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            ticks?: {
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            spreadRewardAccumulator?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            } | undefined;
            incentivesAccumulators?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            }[] | undefined;
            incentiveRecords?: {
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: {
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                minUptime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            pool?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & globalThis.Record<Exclude<keyof I["poolData"][number]["pool"], keyof Any>, never>) | undefined;
            ticks?: ({
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } & {
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: ({
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"]["spreadRewardGrowthOppositeDirectionOfLastTraversal"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"]["spreadRewardGrowthOppositeDirectionOfLastTraversal"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    uptimeTrackers?: ({
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } & {
                        list?: ({
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] & ({
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        } & {
                            uptimeGrowthOutside?: ({
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] & ({
                                denom?: string | undefined;
                                amount?: string | undefined;
                            } & {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            } & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"]["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"]["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"], keyof {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[]>, never>) | undefined;
                        } & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"]["uptimeTrackers"]["list"][number], "uptimeGrowthOutside">, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"]["uptimeTrackers"]["list"], keyof {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[]>, never>) | undefined;
                    } & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"]["uptimeTrackers"], "list">, never>) | undefined;
                } & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number]["info"], keyof TickInfo>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"][number], keyof FullTick>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["ticks"], keyof {
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            spreadRewardAccumulator?: ({
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                accumContent?: ({
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } & {
                    accumValue?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & globalThis.Record<Exclude<keyof I["poolData"][number]["spreadRewardAccumulator"]["accumContent"]["accumValue"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["spreadRewardAccumulator"]["accumContent"]["accumValue"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    totalShares?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["poolData"][number]["spreadRewardAccumulator"]["accumContent"], keyof AccumulatorContent>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["poolData"][number]["spreadRewardAccumulator"], keyof AccumObject>, never>) | undefined;
            incentivesAccumulators?: ({
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                accumContent?: ({
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } & {
                    accumValue?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentivesAccumulators"][number]["accumContent"]["accumValue"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["incentivesAccumulators"][number]["accumContent"]["accumValue"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    totalShares?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentivesAccumulators"][number]["accumContent"], keyof AccumulatorContent>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentivesAccumulators"][number], keyof AccumObject>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["incentivesAccumulators"], keyof {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            incentiveRecords?: ({
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: {
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                minUptime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] & ({
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: {
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                minUptime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: ({
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    remainingCoin?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentiveRecords"][number]["incentiveRecordBody"]["remainingCoin"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                    emissionRate?: string | undefined;
                    startTime?: ({
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentiveRecords"][number]["incentiveRecordBody"]["startTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentiveRecords"][number]["incentiveRecordBody"], keyof import("./incentive_record").IncentiveRecordBody>, never>) | undefined;
                minUptime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentiveRecords"][number]["minUptime"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["poolData"][number]["incentiveRecords"][number], keyof IncentiveRecord>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"][number]["incentiveRecords"], keyof {
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: {
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                minUptime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["poolData"][number], keyof PoolData>, never>)[] & globalThis.Record<Exclude<keyof I["poolData"], keyof {
            pool?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            ticks?: {
                poolId?: bigint | undefined;
                tickIndex?: bigint | undefined;
                info?: {
                    liquidityGross?: string | undefined;
                    liquidityNet?: string | undefined;
                    spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    uptimeTrackers?: {
                        list?: {
                            uptimeGrowthOutside?: {
                                denom?: string | undefined;
                                amount?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            spreadRewardAccumulator?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            } | undefined;
            incentivesAccumulators?: {
                name?: string | undefined;
                accumContent?: {
                    accumValue?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    totalShares?: string | undefined;
                } | undefined;
            }[] | undefined;
            incentiveRecords?: {
                incentiveId?: bigint | undefined;
                poolId?: bigint | undefined;
                incentiveRecordBody?: {
                    remainingCoin?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    emissionRate?: string | undefined;
                    startTime?: {
                        seconds?: bigint | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                minUptime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        positionData?: ({
            position?: {
                positionId?: bigint | undefined;
                address?: string | undefined;
                poolId?: bigint | undefined;
                lowerTick?: bigint | undefined;
                upperTick?: bigint | undefined;
                joinTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                liquidity?: string | undefined;
            } | undefined;
            lockId?: bigint | undefined;
            spreadRewardAccumRecord?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            } | undefined;
            uptimeAccumRecords?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            }[] | undefined;
        }[] & ({
            position?: {
                positionId?: bigint | undefined;
                address?: string | undefined;
                poolId?: bigint | undefined;
                lowerTick?: bigint | undefined;
                upperTick?: bigint | undefined;
                joinTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                liquidity?: string | undefined;
            } | undefined;
            lockId?: bigint | undefined;
            spreadRewardAccumRecord?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            } | undefined;
            uptimeAccumRecords?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            }[] | undefined;
        } & {
            position?: ({
                positionId?: bigint | undefined;
                address?: string | undefined;
                poolId?: bigint | undefined;
                lowerTick?: bigint | undefined;
                upperTick?: bigint | undefined;
                joinTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                liquidity?: string | undefined;
            } & {
                positionId?: bigint | undefined;
                address?: string | undefined;
                poolId?: bigint | undefined;
                lowerTick?: bigint | undefined;
                upperTick?: bigint | undefined;
                joinTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & globalThis.Record<Exclude<keyof I["positionData"][number]["position"]["joinTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                liquidity?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["positionData"][number]["position"], keyof Position>, never>) | undefined;
            lockId?: bigint | undefined;
            spreadRewardAccumRecord?: ({
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            } & {
                numShares?: string | undefined;
                accumValuePerShare?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["positionData"][number]["spreadRewardAccumRecord"]["accumValuePerShare"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["positionData"][number]["spreadRewardAccumRecord"]["accumValuePerShare"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                unclaimedRewardsTotal?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["positionData"][number]["spreadRewardAccumRecord"]["unclaimedRewardsTotal"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["positionData"][number]["spreadRewardAccumRecord"]["unclaimedRewardsTotal"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                options?: ({} & {} & globalThis.Record<Exclude<keyof I["positionData"][number]["spreadRewardAccumRecord"]["options"], never>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["positionData"][number]["spreadRewardAccumRecord"], keyof Record>, never>) | undefined;
            uptimeAccumRecords?: ({
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            }[] & ({
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            } & {
                numShares?: string | undefined;
                accumValuePerShare?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["positionData"][number]["uptimeAccumRecords"][number]["accumValuePerShare"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["positionData"][number]["uptimeAccumRecords"][number]["accumValuePerShare"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                unclaimedRewardsTotal?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & globalThis.Record<Exclude<keyof I["positionData"][number]["uptimeAccumRecords"][number]["unclaimedRewardsTotal"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["positionData"][number]["uptimeAccumRecords"][number]["unclaimedRewardsTotal"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                options?: ({} & {} & globalThis.Record<Exclude<keyof I["positionData"][number]["uptimeAccumRecords"][number]["options"], never>, never>) | undefined;
            } & globalThis.Record<Exclude<keyof I["positionData"][number]["uptimeAccumRecords"][number], keyof Record>, never>)[] & globalThis.Record<Exclude<keyof I["positionData"][number]["uptimeAccumRecords"], keyof {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            }[]>, never>) | undefined;
        } & globalThis.Record<Exclude<keyof I["positionData"][number], keyof PositionData>, never>)[] & globalThis.Record<Exclude<keyof I["positionData"], keyof {
            position?: {
                positionId?: bigint | undefined;
                address?: string | undefined;
                poolId?: bigint | undefined;
                lowerTick?: bigint | undefined;
                upperTick?: bigint | undefined;
                joinTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                liquidity?: string | undefined;
            } | undefined;
            lockId?: bigint | undefined;
            spreadRewardAccumRecord?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            } | undefined;
            uptimeAccumRecords?: {
                numShares?: string | undefined;
                accumValuePerShare?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                unclaimedRewardsTotal?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                options?: {} | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        nextPositionId?: bigint | undefined;
        nextIncentiveRecordId?: bigint | undefined;
        incentivesAccumulatorPoolIdMigrationThreshold?: bigint | undefined;
        spreadFactorPoolIdMigrationThreshold?: bigint | undefined;
    } & globalThis.Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const AccumObject: {
    typeUrl: string;
    encode(message: AccumObject, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccumObject;
    fromJSON(object: any): AccumObject;
    toJSON(message: AccumObject): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        accumContent?: {
            accumValue?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            totalShares?: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        accumContent?: ({
            accumValue?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            totalShares?: string | undefined;
        } & {
            accumValue?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & globalThis.Record<Exclude<keyof I["accumContent"]["accumValue"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["accumContent"]["accumValue"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            totalShares?: string | undefined;
        } & globalThis.Record<Exclude<keyof I["accumContent"], keyof AccumulatorContent>, never>) | undefined;
    } & globalThis.Record<Exclude<keyof I, keyof AccumObject>, never>>(object: I): AccumObject;
};
