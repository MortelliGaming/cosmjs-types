import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullPositionBreakdown, PositionWithPeriodLock } from "./position";
import { Any } from "../../../google/protobuf/any";
import { Params } from "../params";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { UptimeTracker } from "./tick_info";
import { IncentiveRecord } from "./incentive_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/** =============================== UserPositions */
export interface UserPositionsRequest {
    address: string;
    poolId: bigint;
    pagination?: PageRequest;
}
export interface UserPositionsResponse {
    positions: FullPositionBreakdown[];
    pagination?: PageResponse;
}
/** =============================== PositionById */
export interface PositionByIdRequest {
    positionId: bigint;
}
export interface PositionByIdResponse {
    position: FullPositionBreakdown;
}
export interface NumPoolPositionsRequest {
    poolId: bigint;
}
export interface NumPoolPositionsResponse {
    positionCount: bigint;
}
/** =============================== Pools */
export interface PoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface PoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** =============================== ModuleParams */
export interface ParamsRequest {
}
export interface ParamsResponse {
    params: Params;
}
export interface TickLiquidityNet {
    liquidityNet: string;
    tickIndex: bigint;
}
export interface LiquidityDepthWithRange {
    liquidityAmount: string;
    lowerTick: bigint;
    upperTick: bigint;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequest {
    poolId: bigint;
    tokenIn: string;
    startTick: bigint;
    useCurTick: boolean;
    boundTick: bigint;
    useNoBound: boolean;
}
export interface LiquidityNetInDirectionResponse {
    liquidityDepths: TickLiquidityNet[];
    currentTick: bigint;
    currentLiquidity: string;
    currentSqrtPrice: string;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequest {
    poolId: bigint;
}
export interface LiquidityPerTickRangeResponse {
    liquidity: LiquidityDepthWithRange[];
    bucketIndex: bigint;
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequest {
    positionId: bigint;
}
export interface ClaimableSpreadRewardsResponse {
    claimableSpreadRewards: Coin[];
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequest {
    positionId: bigint;
}
export interface ClaimableIncentivesResponse {
    claimableIncentives: Coin[];
    forfeitedIncentives: Coin[];
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequest {
    poolId: bigint;
}
export interface PoolAccumulatorRewardsResponse {
    spreadRewardGrowthGlobal: DecCoin[];
    uptimeGrowthGlobal: UptimeTracker[];
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequest {
    poolId: bigint;
    tickIndex: bigint;
}
export interface TickAccumulatorTrackersResponse {
    spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
    uptimeTrackers: UptimeTracker[];
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequest {
    poolId: bigint;
    pagination?: PageRequest;
}
export interface IncentiveRecordsResponse {
    incentiveRecords: IncentiveRecord[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    concentratedPoolId: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    cfmmPoolId: bigint;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequest {
    address: string;
}
export interface UserUnbondingPositionsResponse {
    positionsWithPeriodLock: PositionWithPeriodLock[];
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequest {
}
export interface GetTotalLiquidityResponse {
    totalLiquidity: Coin[];
}
/** =============================== NumNextInitializedTicks */
export interface NumNextInitializedTicksRequest {
    poolId: bigint;
    tokenInDenom: string;
    numNextInitializedTicks: bigint;
}
export interface NumNextInitializedTicksResponse {
    liquidityDepths: TickLiquidityNet[];
    currentTick: bigint;
    currentLiquidity: string;
}
export declare const UserPositionsRequest: {
    typeUrl: string;
    encode(message: UserPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsRequest;
    fromJSON(object: any): UserPositionsRequest;
    toJSON(message: UserPositionsRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        poolId?: bigint | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        address?: string | undefined;
        poolId?: bigint | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UserPositionsRequest>, never>>(object: I): UserPositionsRequest;
};
export declare const UserPositionsResponse: {
    typeUrl: string;
    encode(message: UserPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsResponse;
    fromJSON(object: any): UserPositionsResponse;
    toJSON(message: UserPositionsResponse): unknown;
    fromPartial<I extends {
        positions?: {
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
            asset0?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            asset1?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            claimableSpreadRewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            claimableIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            forfeitedIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        positions?: ({
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
            asset0?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            asset1?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            claimableSpreadRewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            claimableIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            forfeitedIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
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
            asset0?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            asset1?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            claimableSpreadRewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            claimableIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            forfeitedIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
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
                } & Record<Exclude<keyof I["positions"][number]["position"]["joinTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                liquidity?: string | undefined;
            } & Record<Exclude<keyof I["positions"][number]["position"], keyof import("./position").Position>, never>) | undefined;
            asset0?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["positions"][number]["asset0"], keyof Coin>, never>) | undefined;
            asset1?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["positions"][number]["asset1"], keyof Coin>, never>) | undefined;
            claimableSpreadRewards?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["positions"][number]["claimableSpreadRewards"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["positions"][number]["claimableSpreadRewards"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            claimableIncentives?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["positions"][number]["claimableIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["positions"][number]["claimableIncentives"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            forfeitedIncentives?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["positions"][number]["forfeitedIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["positions"][number]["forfeitedIncentives"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["positions"][number], keyof FullPositionBreakdown>, never>)[] & Record<Exclude<keyof I["positions"], keyof {
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
            asset0?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            asset1?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            claimableSpreadRewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            claimableIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            forfeitedIncentives?: {
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
    } & Record<Exclude<keyof I, keyof UserPositionsResponse>, never>>(object: I): UserPositionsResponse;
};
export declare const PositionByIdRequest: {
    typeUrl: string;
    encode(message: PositionByIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdRequest;
    fromJSON(object: any): PositionByIdRequest;
    toJSON(message: PositionByIdRequest): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
    } & {
        positionId?: bigint | undefined;
    } & Record<Exclude<keyof I, "positionId">, never>>(object: I): PositionByIdRequest;
};
export declare const PositionByIdResponse: {
    typeUrl: string;
    encode(message: PositionByIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdResponse;
    fromJSON(object: any): PositionByIdResponse;
    toJSON(message: PositionByIdResponse): unknown;
    fromPartial<I extends {
        position?: {
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
            asset0?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            asset1?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            claimableSpreadRewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            claimableIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            forfeitedIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        position?: ({
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
            asset0?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            asset1?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            claimableSpreadRewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            claimableIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            forfeitedIncentives?: {
                denom?: string | undefined;
                amount?: string | undefined;
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
                } & Record<Exclude<keyof I["position"]["position"]["joinTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                liquidity?: string | undefined;
            } & Record<Exclude<keyof I["position"]["position"], keyof import("./position").Position>, never>) | undefined;
            asset0?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["position"]["asset0"], keyof Coin>, never>) | undefined;
            asset1?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["position"]["asset1"], keyof Coin>, never>) | undefined;
            claimableSpreadRewards?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["position"]["claimableSpreadRewards"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["position"]["claimableSpreadRewards"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            claimableIncentives?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["position"]["claimableIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["position"]["claimableIncentives"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            forfeitedIncentives?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["position"]["forfeitedIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["position"]["forfeitedIncentives"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["position"], keyof FullPositionBreakdown>, never>) | undefined;
    } & Record<Exclude<keyof I, "position">, never>>(object: I): PositionByIdResponse;
};
export declare const NumPoolPositionsRequest: {
    typeUrl: string;
    encode(message: NumPoolPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumPoolPositionsRequest;
    fromJSON(object: any): NumPoolPositionsRequest;
    toJSON(message: NumPoolPositionsRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): NumPoolPositionsRequest;
};
export declare const NumPoolPositionsResponse: {
    typeUrl: string;
    encode(message: NumPoolPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumPoolPositionsResponse;
    fromJSON(object: any): NumPoolPositionsResponse;
    toJSON(message: NumPoolPositionsResponse): unknown;
    fromPartial<I extends {
        positionCount?: bigint | undefined;
    } & {
        positionCount?: bigint | undefined;
    } & Record<Exclude<keyof I, "positionCount">, never>>(object: I): NumPoolPositionsResponse;
};
export declare const PoolsRequest: {
    typeUrl: string;
    encode(message: PoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest;
    fromJSON(object: any): PoolsRequest;
    toJSON(message: PoolsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): PoolsRequest;
};
export declare const PoolsResponse: {
    typeUrl: string;
    encode(message: PoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse;
    fromJSON(object: any): PoolsResponse;
    toJSON(message: PoolsResponse): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        pools?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PoolsResponse>, never>>(object: I): PoolsResponse;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
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
            authorizedTickSpacing?: (bigint[] & bigint[] & Record<Exclude<keyof I["params"]["authorizedTickSpacing"], keyof bigint[]>, never>) | undefined;
            authorizedSpreadFactors?: (string[] & string[] & Record<Exclude<keyof I["params"]["authorizedSpreadFactors"], keyof string[]>, never>) | undefined;
            balancerSharesRewardDiscount?: string | undefined;
            authorizedQuoteDenoms?: (string[] & string[] & Record<Exclude<keyof I["params"]["authorizedQuoteDenoms"], keyof string[]>, never>) | undefined;
            authorizedUptimes?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            }[] & ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["authorizedUptimes"][number], keyof import("../../../google/protobuf/duration").Duration>, never>)[] & Record<Exclude<keyof I["params"]["authorizedUptimes"], keyof {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            }[]>, never>) | undefined;
            isPermissionlessPoolCreationEnabled?: boolean | undefined;
            unrestrictedPoolCreatorWhitelist?: (string[] & string[] & Record<Exclude<keyof I["params"]["unrestrictedPoolCreatorWhitelist"], keyof string[]>, never>) | undefined;
            hookGasLimit?: bigint | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): ParamsResponse;
};
export declare const TickLiquidityNet: {
    typeUrl: string;
    encode(message: TickLiquidityNet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidityNet;
    fromJSON(object: any): TickLiquidityNet;
    toJSON(message: TickLiquidityNet): unknown;
    fromPartial<I extends {
        liquidityNet?: string | undefined;
        tickIndex?: bigint | undefined;
    } & {
        liquidityNet?: string | undefined;
        tickIndex?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof TickLiquidityNet>, never>>(object: I): TickLiquidityNet;
};
export declare const LiquidityDepthWithRange: {
    typeUrl: string;
    encode(message: LiquidityDepthWithRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityDepthWithRange;
    fromJSON(object: any): LiquidityDepthWithRange;
    toJSON(message: LiquidityDepthWithRange): unknown;
    fromPartial<I extends {
        liquidityAmount?: string | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
    } & {
        liquidityAmount?: string | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof LiquidityDepthWithRange>, never>>(object: I): LiquidityDepthWithRange;
};
export declare const LiquidityNetInDirectionRequest: {
    typeUrl: string;
    encode(message: LiquidityNetInDirectionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionRequest;
    fromJSON(object: any): LiquidityNetInDirectionRequest;
    toJSON(message: LiquidityNetInDirectionRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        startTick?: bigint | undefined;
        useCurTick?: boolean | undefined;
        boundTick?: bigint | undefined;
        useNoBound?: boolean | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenIn?: string | undefined;
        startTick?: bigint | undefined;
        useCurTick?: boolean | undefined;
        boundTick?: bigint | undefined;
        useNoBound?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof LiquidityNetInDirectionRequest>, never>>(object: I): LiquidityNetInDirectionRequest;
};
export declare const LiquidityNetInDirectionResponse: {
    typeUrl: string;
    encode(message: LiquidityNetInDirectionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionResponse;
    fromJSON(object: any): LiquidityNetInDirectionResponse;
    toJSON(message: LiquidityNetInDirectionResponse): unknown;
    fromPartial<I extends {
        liquidityDepths?: {
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        }[] | undefined;
        currentTick?: bigint | undefined;
        currentLiquidity?: string | undefined;
        currentSqrtPrice?: string | undefined;
    } & {
        liquidityDepths?: ({
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        }[] & ({
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        } & {
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        } & Record<Exclude<keyof I["liquidityDepths"][number], keyof TickLiquidityNet>, never>)[] & Record<Exclude<keyof I["liquidityDepths"], keyof {
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        }[]>, never>) | undefined;
        currentTick?: bigint | undefined;
        currentLiquidity?: string | undefined;
        currentSqrtPrice?: string | undefined;
    } & Record<Exclude<keyof I, keyof LiquidityNetInDirectionResponse>, never>>(object: I): LiquidityNetInDirectionResponse;
};
export declare const LiquidityPerTickRangeRequest: {
    typeUrl: string;
    encode(message: LiquidityPerTickRangeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeRequest;
    fromJSON(object: any): LiquidityPerTickRangeRequest;
    toJSON(message: LiquidityPerTickRangeRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): LiquidityPerTickRangeRequest;
};
export declare const LiquidityPerTickRangeResponse: {
    typeUrl: string;
    encode(message: LiquidityPerTickRangeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeResponse;
    fromJSON(object: any): LiquidityPerTickRangeResponse;
    toJSON(message: LiquidityPerTickRangeResponse): unknown;
    fromPartial<I extends {
        liquidity?: {
            liquidityAmount?: string | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
        }[] | undefined;
        bucketIndex?: bigint | undefined;
    } & {
        liquidity?: ({
            liquidityAmount?: string | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
        }[] & ({
            liquidityAmount?: string | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
        } & {
            liquidityAmount?: string | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
        } & Record<Exclude<keyof I["liquidity"][number], keyof LiquidityDepthWithRange>, never>)[] & Record<Exclude<keyof I["liquidity"], keyof {
            liquidityAmount?: string | undefined;
            lowerTick?: bigint | undefined;
            upperTick?: bigint | undefined;
        }[]>, never>) | undefined;
        bucketIndex?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof LiquidityPerTickRangeResponse>, never>>(object: I): LiquidityPerTickRangeResponse;
};
export declare const ClaimableSpreadRewardsRequest: {
    typeUrl: string;
    encode(message: ClaimableSpreadRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsRequest;
    fromJSON(object: any): ClaimableSpreadRewardsRequest;
    toJSON(message: ClaimableSpreadRewardsRequest): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
    } & {
        positionId?: bigint | undefined;
    } & Record<Exclude<keyof I, "positionId">, never>>(object: I): ClaimableSpreadRewardsRequest;
};
export declare const ClaimableSpreadRewardsResponse: {
    typeUrl: string;
    encode(message: ClaimableSpreadRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsResponse;
    fromJSON(object: any): ClaimableSpreadRewardsResponse;
    toJSON(message: ClaimableSpreadRewardsResponse): unknown;
    fromPartial<I extends {
        claimableSpreadRewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        claimableSpreadRewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["claimableSpreadRewards"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimableSpreadRewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "claimableSpreadRewards">, never>>(object: I): ClaimableSpreadRewardsResponse;
};
export declare const ClaimableIncentivesRequest: {
    typeUrl: string;
    encode(message: ClaimableIncentivesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesRequest;
    fromJSON(object: any): ClaimableIncentivesRequest;
    toJSON(message: ClaimableIncentivesRequest): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
    } & {
        positionId?: bigint | undefined;
    } & Record<Exclude<keyof I, "positionId">, never>>(object: I): ClaimableIncentivesRequest;
};
export declare const ClaimableIncentivesResponse: {
    typeUrl: string;
    encode(message: ClaimableIncentivesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesResponse;
    fromJSON(object: any): ClaimableIncentivesResponse;
    toJSON(message: ClaimableIncentivesResponse): unknown;
    fromPartial<I extends {
        claimableIncentives?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        forfeitedIncentives?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        claimableIncentives?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["claimableIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimableIncentives"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        forfeitedIncentives?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["forfeitedIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["forfeitedIncentives"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ClaimableIncentivesResponse>, never>>(object: I): ClaimableIncentivesResponse;
};
export declare const PoolAccumulatorRewardsRequest: {
    typeUrl: string;
    encode(message: PoolAccumulatorRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsRequest;
    fromJSON(object: any): PoolAccumulatorRewardsRequest;
    toJSON(message: PoolAccumulatorRewardsRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): PoolAccumulatorRewardsRequest;
};
export declare const PoolAccumulatorRewardsResponse: {
    typeUrl: string;
    encode(message: PoolAccumulatorRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsResponse;
    fromJSON(object: any): PoolAccumulatorRewardsResponse;
    toJSON(message: PoolAccumulatorRewardsResponse): unknown;
    fromPartial<I extends {
        spreadRewardGrowthGlobal?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        uptimeGrowthGlobal?: {
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        spreadRewardGrowthGlobal?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["spreadRewardGrowthGlobal"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["spreadRewardGrowthGlobal"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        uptimeGrowthGlobal?: ({
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
            } & Record<Exclude<keyof I["uptimeGrowthGlobal"][number]["uptimeGrowthOutside"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["uptimeGrowthGlobal"][number]["uptimeGrowthOutside"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["uptimeGrowthGlobal"][number], "uptimeGrowthOutside">, never>)[] & Record<Exclude<keyof I["uptimeGrowthGlobal"], keyof {
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PoolAccumulatorRewardsResponse>, never>>(object: I): PoolAccumulatorRewardsResponse;
};
export declare const TickAccumulatorTrackersRequest: {
    typeUrl: string;
    encode(message: TickAccumulatorTrackersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersRequest;
    fromJSON(object: any): TickAccumulatorTrackersRequest;
    toJSON(message: TickAccumulatorTrackersRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tickIndex?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
        tickIndex?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof TickAccumulatorTrackersRequest>, never>>(object: I): TickAccumulatorTrackersRequest;
};
export declare const TickAccumulatorTrackersResponse: {
    typeUrl: string;
    encode(message: TickAccumulatorTrackersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersResponse;
    fromJSON(object: any): TickAccumulatorTrackersResponse;
    toJSON(message: TickAccumulatorTrackersResponse): unknown;
    fromPartial<I extends {
        spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        uptimeTrackers?: {
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        spreadRewardGrowthOppositeDirectionOfLastTraversal?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["spreadRewardGrowthOppositeDirectionOfLastTraversal"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["spreadRewardGrowthOppositeDirectionOfLastTraversal"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        uptimeTrackers?: ({
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
            } & Record<Exclude<keyof I["uptimeTrackers"][number]["uptimeGrowthOutside"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["uptimeTrackers"][number]["uptimeGrowthOutside"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["uptimeTrackers"][number], "uptimeGrowthOutside">, never>)[] & Record<Exclude<keyof I["uptimeTrackers"], keyof {
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TickAccumulatorTrackersResponse>, never>>(object: I): TickAccumulatorTrackersResponse;
};
export declare const IncentiveRecordsRequest: {
    typeUrl: string;
    encode(message: IncentiveRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsRequest;
    fromJSON(object: any): IncentiveRecordsRequest;
    toJSON(message: IncentiveRecordsRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof IncentiveRecordsRequest>, never>>(object: I): IncentiveRecordsRequest;
};
export declare const IncentiveRecordsResponse: {
    typeUrl: string;
    encode(message: IncentiveRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsResponse;
    fromJSON(object: any): IncentiveRecordsResponse;
    toJSON(message: IncentiveRecordsResponse): unknown;
    fromPartial<I extends {
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
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
                } & Record<Exclude<keyof I["incentiveRecords"][number]["incentiveRecordBody"]["remainingCoin"], keyof DecCoin>, never>) | undefined;
                emissionRate?: string | undefined;
                startTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["incentiveRecords"][number]["incentiveRecordBody"]["startTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["incentiveRecords"][number]["incentiveRecordBody"], keyof import("./incentive_record").IncentiveRecordBody>, never>) | undefined;
            minUptime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["incentiveRecords"][number]["minUptime"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["incentiveRecords"][number], keyof IncentiveRecord>, never>)[] & Record<Exclude<keyof I["incentiveRecords"], keyof {
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof IncentiveRecordsResponse>, never>>(object: I): IncentiveRecordsResponse;
};
export declare const CFMMPoolIdLinkFromConcentratedPoolIdRequest: {
    typeUrl: string;
    encode(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    toJSON(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): unknown;
    fromPartial<I extends {
        concentratedPoolId?: bigint | undefined;
    } & {
        concentratedPoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "concentratedPoolId">, never>>(object: I): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
};
export declare const CFMMPoolIdLinkFromConcentratedPoolIdResponse: {
    typeUrl: string;
    encode(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    toJSON(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): unknown;
    fromPartial<I extends {
        cfmmPoolId?: bigint | undefined;
    } & {
        cfmmPoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "cfmmPoolId">, never>>(object: I): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
};
export declare const UserUnbondingPositionsRequest: {
    typeUrl: string;
    encode(message: UserUnbondingPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsRequest;
    fromJSON(object: any): UserUnbondingPositionsRequest;
    toJSON(message: UserUnbondingPositionsRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): UserUnbondingPositionsRequest;
};
export declare const UserUnbondingPositionsResponse: {
    typeUrl: string;
    encode(message: UserUnbondingPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsResponse;
    fromJSON(object: any): UserUnbondingPositionsResponse;
    toJSON(message: UserUnbondingPositionsResponse): unknown;
    fromPartial<I extends {
        positionsWithPeriodLock?: {
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
            locks?: {
                ID?: bigint | undefined;
                owner?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                rewardReceiverAddress?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        positionsWithPeriodLock?: ({
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
            locks?: {
                ID?: bigint | undefined;
                owner?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                rewardReceiverAddress?: string | undefined;
            } | undefined;
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
            locks?: {
                ID?: bigint | undefined;
                owner?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                rewardReceiverAddress?: string | undefined;
            } | undefined;
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
                } & Record<Exclude<keyof I["positionsWithPeriodLock"][number]["position"]["joinTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                liquidity?: string | undefined;
            } & Record<Exclude<keyof I["positionsWithPeriodLock"][number]["position"], keyof import("./position").Position>, never>) | undefined;
            locks?: ({
                ID?: bigint | undefined;
                owner?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                rewardReceiverAddress?: string | undefined;
            } & {
                ID?: bigint | undefined;
                owner?: string | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["positionsWithPeriodLock"][number]["locks"]["duration"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
                endTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["positionsWithPeriodLock"][number]["locks"]["endTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                coins?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["positionsWithPeriodLock"][number]["locks"]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["positionsWithPeriodLock"][number]["locks"]["coins"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                rewardReceiverAddress?: string | undefined;
            } & Record<Exclude<keyof I["positionsWithPeriodLock"][number]["locks"], keyof import("../../lockup/lock").PeriodLock>, never>) | undefined;
        } & Record<Exclude<keyof I["positionsWithPeriodLock"][number], keyof PositionWithPeriodLock>, never>)[] & Record<Exclude<keyof I["positionsWithPeriodLock"], keyof {
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
            locks?: {
                ID?: bigint | undefined;
                owner?: string | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                rewardReceiverAddress?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "positionsWithPeriodLock">, never>>(object: I): UserUnbondingPositionsResponse;
};
export declare const GetTotalLiquidityRequest: {
    typeUrl: string;
    encode(_: GetTotalLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityRequest;
    fromJSON(_: any): GetTotalLiquidityRequest;
    toJSON(_: GetTotalLiquidityRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetTotalLiquidityRequest;
};
export declare const GetTotalLiquidityResponse: {
    typeUrl: string;
    encode(message: GetTotalLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityResponse;
    fromJSON(object: any): GetTotalLiquidityResponse;
    toJSON(message: GetTotalLiquidityResponse): unknown;
    fromPartial<I extends {
        totalLiquidity?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        totalLiquidity?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalLiquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalLiquidity"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "totalLiquidity">, never>>(object: I): GetTotalLiquidityResponse;
};
export declare const NumNextInitializedTicksRequest: {
    typeUrl: string;
    encode(message: NumNextInitializedTicksRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumNextInitializedTicksRequest;
    fromJSON(object: any): NumNextInitializedTicksRequest;
    toJSON(message: NumNextInitializedTicksRequest): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
        numNextInitializedTicks?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
        tokenInDenom?: string | undefined;
        numNextInitializedTicks?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof NumNextInitializedTicksRequest>, never>>(object: I): NumNextInitializedTicksRequest;
};
export declare const NumNextInitializedTicksResponse: {
    typeUrl: string;
    encode(message: NumNextInitializedTicksResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumNextInitializedTicksResponse;
    fromJSON(object: any): NumNextInitializedTicksResponse;
    toJSON(message: NumNextInitializedTicksResponse): unknown;
    fromPartial<I extends {
        liquidityDepths?: {
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        }[] | undefined;
        currentTick?: bigint | undefined;
        currentLiquidity?: string | undefined;
    } & {
        liquidityDepths?: ({
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        }[] & ({
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        } & {
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        } & Record<Exclude<keyof I["liquidityDepths"][number], keyof TickLiquidityNet>, never>)[] & Record<Exclude<keyof I["liquidityDepths"], keyof {
            liquidityNet?: string | undefined;
            tickIndex?: bigint | undefined;
        }[]>, never>) | undefined;
        currentTick?: bigint | undefined;
        currentLiquidity?: string | undefined;
    } & Record<Exclude<keyof I, keyof NumNextInitializedTicksResponse>, never>>(object: I): NumNextInitializedTicksResponse;
};
export interface Query {
    /** Pools returns all concentrated liquidity pools */
    Pools(request?: PoolsRequest): Promise<PoolsResponse>;
    /** Params returns concentrated liquidity module params. */
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    /** UserPositions returns all concentrated positions of some address. */
    UserPositions(request: UserPositionsRequest): Promise<UserPositionsResponse>;
    /**
     * LiquidityPerTickRange returns the amount of liquidity per every tick range
     * existing within the given pool
     */
    LiquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse>;
    /**
     * LiquidityNetInDirection returns liquidity net in the direction given.
     * Uses the bound if specified, if not uses either min tick / max tick
     * depending on the direction.
     */
    LiquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse>;
    /**
     * ClaimableSpreadRewards returns the amount of spread rewards that can be
     * claimed by a position with the given id.
     */
    ClaimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse>;
    /**
     * ClaimableIncentives returns the amount of incentives that can be claimed
     * and how many would be forfeited by a position with the given id.
     */
    ClaimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse>;
    /** PositionById returns a position with the given id. */
    PositionById(request: PositionByIdRequest): Promise<PositionByIdResponse>;
    /**
     * PoolAccumulatorRewards returns the pool-global accumulator rewards.
     * Contains spread factor rewards and uptime rewards.
     */
    PoolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse>;
    /** IncentiveRecords returns the incentive records for a given poolId */
    IncentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse>;
    /**
     * TickAccumulatorTrackers returns the tick accumulator trackers.
     * Contains spread factor and uptime accumulator trackers.
     */
    TickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse>;
    /**
     * CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
     * pool that is linked with the given concentrated pool.
     */
    CFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
    /**
     * UserUnbondingPositions returns the position and lock info of unbonding
     * positions of the given address.
     */
    UserUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse>;
    /** GetTotalLiquidity returns total liquidity across all cl pools. */
    GetTotalLiquidity(request?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponse>;
    /**
     * NumNextInitializedTicks returns the provided number of next initialized
     * ticks in the direction of swapping the token in denom.
     */
    NumNextInitializedTicks(request: NumNextInitializedTicksRequest): Promise<NumNextInitializedTicksResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Pools(request?: PoolsRequest): Promise<PoolsResponse>;
    Params(request?: ParamsRequest): Promise<ParamsResponse>;
    UserPositions(request: UserPositionsRequest): Promise<UserPositionsResponse>;
    LiquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse>;
    LiquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse>;
    ClaimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse>;
    ClaimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse>;
    PositionById(request: PositionByIdRequest): Promise<PositionByIdResponse>;
    PoolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse>;
    IncentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse>;
    TickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse>;
    CFMMPoolIdLinkFromConcentratedPoolId(request: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
    UserUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse>;
    GetTotalLiquidity(request?: GetTotalLiquidityRequest): Promise<GetTotalLiquidityResponse>;
    NumNextInitializedTicks(request: NumNextInitializedTicksRequest): Promise<NumNextInitializedTicksResponse>;
}
