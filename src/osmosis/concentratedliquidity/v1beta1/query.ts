/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullPositionBreakdown, PositionWithPeriodLock } from "./position";
import { Any } from "../../../google/protobuf/any";
import { Params } from "../params";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { UptimeTracker } from "./tick_info";
import { IncentiveRecord } from "./incentive_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
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
export interface ParamsRequest {}
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
export interface GetTotalLiquidityRequest {}
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
function createBaseUserPositionsRequest(): UserPositionsRequest {
  return {
    address: "",
    poolId: BigInt(0),
    pagination: undefined,
  };
}
export const UserPositionsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest",
  encode(message: UserPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPositionsRequest {
    const obj = createBaseUserPositionsRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: UserPositionsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserPositionsRequest>, I>>(object: I): UserPositionsRequest {
    const message = createBaseUserPositionsRequest();
    message.address = object.address ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseUserPositionsResponse(): UserPositionsResponse {
  return {
    positions: [],
    pagination: undefined,
  };
}
export const UserPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse",
  encode(message: UserPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      FullPositionBreakdown.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(FullPositionBreakdown.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPositionsResponse {
    const obj = createBaseUserPositionsResponse();
    if (Array.isArray(object?.positions))
      obj.positions = object.positions.map((e: any) => FullPositionBreakdown.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: UserPositionsResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) => (e ? FullPositionBreakdown.toJSON(e) : undefined));
    } else {
      obj.positions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserPositionsResponse>, I>>(object: I): UserPositionsResponse {
    const message = createBaseUserPositionsResponse();
    message.positions = object.positions?.map((e) => FullPositionBreakdown.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBasePositionByIdRequest(): PositionByIdRequest {
  return {
    positionId: BigInt(0),
  };
}
export const PositionByIdRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest",
  encode(message: PositionByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionByIdRequest {
    const obj = createBasePositionByIdRequest();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    return obj;
  },
  toJSON(message: PositionByIdRequest): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PositionByIdRequest>, I>>(object: I): PositionByIdRequest {
    const message = createBasePositionByIdRequest();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    return message;
  },
};
function createBasePositionByIdResponse(): PositionByIdResponse {
  return {
    position: FullPositionBreakdown.fromPartial({}),
  };
}
export const PositionByIdResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse",
  encode(message: PositionByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      FullPositionBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = FullPositionBreakdown.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionByIdResponse {
    const obj = createBasePositionByIdResponse();
    if (isSet(object.position)) obj.position = FullPositionBreakdown.fromJSON(object.position);
    return obj;
  },
  toJSON(message: PositionByIdResponse): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? FullPositionBreakdown.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PositionByIdResponse>, I>>(object: I): PositionByIdResponse {
    const message = createBasePositionByIdResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = FullPositionBreakdown.fromPartial(object.position);
    }
    return message;
  },
};
function createBaseNumPoolPositionsRequest(): NumPoolPositionsRequest {
  return {
    poolId: BigInt(0),
  };
}
export const NumPoolPositionsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest",
  encode(message: NumPoolPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumPoolPositionsRequest {
    const obj = createBaseNumPoolPositionsRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: NumPoolPositionsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolPositionsRequest>, I>>(object: I): NumPoolPositionsRequest {
    const message = createBaseNumPoolPositionsRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseNumPoolPositionsResponse(): NumPoolPositionsResponse {
  return {
    positionCount: BigInt(0),
  };
}
export const NumPoolPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse",
  encode(message: NumPoolPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumPoolPositionsResponse {
    const obj = createBaseNumPoolPositionsResponse();
    if (isSet(object.positionCount)) obj.positionCount = BigInt(object.positionCount.toString());
    return obj;
  },
  toJSON(message: NumPoolPositionsResponse): unknown {
    const obj: any = {};
    message.positionCount !== undefined &&
      (obj.positionCount = (message.positionCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolPositionsResponse>, I>>(
    object: I,
  ): NumPoolPositionsResponse {
    const message = createBaseNumPoolPositionsResponse();
    if (object.positionCount !== undefined && object.positionCount !== null) {
      message.positionCount = BigInt(object.positionCount.toString());
    }
    return message;
  },
};
function createBasePoolsRequest(): PoolsRequest {
  return {
    pagination: undefined,
  };
}
export const PoolsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest",
  encode(message: PoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolsRequest {
    const obj = createBasePoolsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: PoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolsRequest>, I>>(object: I): PoolsRequest {
    const message = createBasePoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBasePoolsResponse(): PoolsResponse {
  return {
    pools: [],
    pagination: undefined,
  };
}
export const PoolsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse",
  encode(message: PoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolsResponse {
    const obj = createBasePoolsResponse();
    if (Array.isArray(object?.pools)) obj.pools = object.pools.map((e: any) => Any.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: PoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolsResponse>, I>>(object: I): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools = object.pools?.map((e) => Any.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseTickLiquidityNet(): TickLiquidityNet {
  return {
    liquidityNet: "",
    tickIndex: BigInt(0),
  };
}
export const TickLiquidityNet = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet",
  encode(message: TickLiquidityNet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityNet !== "") {
      writer.uint32(10).string(message.liquidityNet);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidityNet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickLiquidityNet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityNet = reader.string();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickLiquidityNet {
    const obj = createBaseTickLiquidityNet();
    if (isSet(object.liquidityNet)) obj.liquidityNet = String(object.liquidityNet);
    if (isSet(object.tickIndex)) obj.tickIndex = BigInt(object.tickIndex.toString());
    return obj;
  },
  toJSON(message: TickLiquidityNet): unknown {
    const obj: any = {};
    message.liquidityNet !== undefined && (obj.liquidityNet = message.liquidityNet);
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickLiquidityNet>, I>>(object: I): TickLiquidityNet {
    const message = createBaseTickLiquidityNet();
    message.liquidityNet = object.liquidityNet ?? "";
    if (object.tickIndex !== undefined && object.tickIndex !== null) {
      message.tickIndex = BigInt(object.tickIndex.toString());
    }
    return message;
  },
};
function createBaseLiquidityDepthWithRange(): LiquidityDepthWithRange {
  return {
    liquidityAmount: "",
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
  };
}
export const LiquidityDepthWithRange = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange",
  encode(message: LiquidityDepthWithRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityAmount !== "") {
      writer.uint32(10).string(message.liquidityAmount);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(16).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(24).int64(message.upperTick);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityDepthWithRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityDepthWithRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityAmount = reader.string();
          break;
        case 2:
          message.lowerTick = reader.int64();
          break;
        case 3:
          message.upperTick = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityDepthWithRange {
    const obj = createBaseLiquidityDepthWithRange();
    if (isSet(object.liquidityAmount)) obj.liquidityAmount = String(object.liquidityAmount);
    if (isSet(object.lowerTick)) obj.lowerTick = BigInt(object.lowerTick.toString());
    if (isSet(object.upperTick)) obj.upperTick = BigInt(object.upperTick.toString());
    return obj;
  },
  toJSON(message: LiquidityDepthWithRange): unknown {
    const obj: any = {};
    message.liquidityAmount !== undefined && (obj.liquidityAmount = message.liquidityAmount);
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityDepthWithRange>, I>>(object: I): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    message.liquidityAmount = object.liquidityAmount ?? "";
    if (object.lowerTick !== undefined && object.lowerTick !== null) {
      message.lowerTick = BigInt(object.lowerTick.toString());
    }
    if (object.upperTick !== undefined && object.upperTick !== null) {
      message.upperTick = BigInt(object.upperTick.toString());
    }
    return message;
  },
};
function createBaseLiquidityNetInDirectionRequest(): LiquidityNetInDirectionRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    startTick: BigInt(0),
    useCurTick: false,
    boundTick: BigInt(0),
    useNoBound: false,
  };
}
export const LiquidityNetInDirectionRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest",
  encode(
    message: LiquidityNetInDirectionRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.startTick !== BigInt(0)) {
      writer.uint32(24).int64(message.startTick);
    }
    if (message.useCurTick === true) {
      writer.uint32(32).bool(message.useCurTick);
    }
    if (message.boundTick !== BigInt(0)) {
      writer.uint32(40).int64(message.boundTick);
    }
    if (message.useNoBound === true) {
      writer.uint32(48).bool(message.useNoBound);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityNetInDirectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.startTick = reader.int64();
          break;
        case 4:
          message.useCurTick = reader.bool();
          break;
        case 5:
          message.boundTick = reader.int64();
          break;
        case 6:
          message.useNoBound = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityNetInDirectionRequest {
    const obj = createBaseLiquidityNetInDirectionRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.startTick)) obj.startTick = BigInt(object.startTick.toString());
    if (isSet(object.useCurTick)) obj.useCurTick = Boolean(object.useCurTick);
    if (isSet(object.boundTick)) obj.boundTick = BigInt(object.boundTick.toString());
    if (isSet(object.useNoBound)) obj.useNoBound = Boolean(object.useNoBound);
    return obj;
  },
  toJSON(message: LiquidityNetInDirectionRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.startTick !== undefined && (obj.startTick = (message.startTick || BigInt(0)).toString());
    message.useCurTick !== undefined && (obj.useCurTick = message.useCurTick);
    message.boundTick !== undefined && (obj.boundTick = (message.boundTick || BigInt(0)).toString());
    message.useNoBound !== undefined && (obj.useNoBound = message.useNoBound);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityNetInDirectionRequest>, I>>(
    object: I,
  ): LiquidityNetInDirectionRequest {
    const message = createBaseLiquidityNetInDirectionRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenIn = object.tokenIn ?? "";
    if (object.startTick !== undefined && object.startTick !== null) {
      message.startTick = BigInt(object.startTick.toString());
    }
    message.useCurTick = object.useCurTick ?? false;
    if (object.boundTick !== undefined && object.boundTick !== null) {
      message.boundTick = BigInt(object.boundTick.toString());
    }
    message.useNoBound = object.useNoBound ?? false;
    return message;
  },
};
function createBaseLiquidityNetInDirectionResponse(): LiquidityNetInDirectionResponse {
  return {
    liquidityDepths: [],
    currentTick: BigInt(0),
    currentLiquidity: "",
    currentSqrtPrice: "",
  };
}
export const LiquidityNetInDirectionResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse",
  encode(
    message: LiquidityNetInDirectionResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== "") {
      writer.uint32(26).string(message.currentLiquidity);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(34).string(message.currentSqrtPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityNetInDirectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(TickLiquidityNet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentTick = reader.int64();
          break;
        case 3:
          message.currentLiquidity = reader.string();
          break;
        case 4:
          message.currentSqrtPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityNetInDirectionResponse {
    const obj = createBaseLiquidityNetInDirectionResponse();
    if (Array.isArray(object?.liquidityDepths))
      obj.liquidityDepths = object.liquidityDepths.map((e: any) => TickLiquidityNet.fromJSON(e));
    if (isSet(object.currentTick)) obj.currentTick = BigInt(object.currentTick.toString());
    if (isSet(object.currentLiquidity)) obj.currentLiquidity = String(object.currentLiquidity);
    if (isSet(object.currentSqrtPrice)) obj.currentSqrtPrice = String(object.currentSqrtPrice);
    return obj;
  },
  toJSON(message: LiquidityNetInDirectionResponse): unknown {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidityDepths = message.liquidityDepths.map((e) => (e ? TickLiquidityNet.toJSON(e) : undefined));
    } else {
      obj.liquidityDepths = [];
    }
    message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
    message.currentLiquidity !== undefined && (obj.currentLiquidity = message.currentLiquidity);
    message.currentSqrtPrice !== undefined && (obj.currentSqrtPrice = message.currentSqrtPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityNetInDirectionResponse>, I>>(
    object: I,
  ): LiquidityNetInDirectionResponse {
    const message = createBaseLiquidityNetInDirectionResponse();
    message.liquidityDepths = object.liquidityDepths?.map((e) => TickLiquidityNet.fromPartial(e)) || [];
    if (object.currentTick !== undefined && object.currentTick !== null) {
      message.currentTick = BigInt(object.currentTick.toString());
    }
    message.currentLiquidity = object.currentLiquidity ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    return message;
  },
};
function createBaseLiquidityPerTickRangeRequest(): LiquidityPerTickRangeRequest {
  return {
    poolId: BigInt(0),
  };
}
export const LiquidityPerTickRangeRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest",
  encode(message: LiquidityPerTickRangeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPerTickRangeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityPerTickRangeRequest {
    const obj = createBaseLiquidityPerTickRangeRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: LiquidityPerTickRangeRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityPerTickRangeRequest>, I>>(
    object: I,
  ): LiquidityPerTickRangeRequest {
    const message = createBaseLiquidityPerTickRangeRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseLiquidityPerTickRangeResponse(): LiquidityPerTickRangeResponse {
  return {
    liquidity: [],
    bucketIndex: BigInt(0),
  };
}
export const LiquidityPerTickRangeResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse",
  encode(message: LiquidityPerTickRangeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      LiquidityDepthWithRange.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucketIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.bucketIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPerTickRangeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(LiquidityDepthWithRange.decode(reader, reader.uint32()));
          break;
        case 2:
          message.bucketIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityPerTickRangeResponse {
    const obj = createBaseLiquidityPerTickRangeResponse();
    if (Array.isArray(object?.liquidity))
      obj.liquidity = object.liquidity.map((e: any) => LiquidityDepthWithRange.fromJSON(e));
    if (isSet(object.bucketIndex)) obj.bucketIndex = BigInt(object.bucketIndex.toString());
    return obj;
  },
  toJSON(message: LiquidityPerTickRangeResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) => (e ? LiquidityDepthWithRange.toJSON(e) : undefined));
    } else {
      obj.liquidity = [];
    }
    message.bucketIndex !== undefined && (obj.bucketIndex = (message.bucketIndex || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityPerTickRangeResponse>, I>>(
    object: I,
  ): LiquidityPerTickRangeResponse {
    const message = createBaseLiquidityPerTickRangeResponse();
    message.liquidity = object.liquidity?.map((e) => LiquidityDepthWithRange.fromPartial(e)) || [];
    if (object.bucketIndex !== undefined && object.bucketIndex !== null) {
      message.bucketIndex = BigInt(object.bucketIndex.toString());
    }
    return message;
  },
};
function createBaseClaimableSpreadRewardsRequest(): ClaimableSpreadRewardsRequest {
  return {
    positionId: BigInt(0),
  };
}
export const ClaimableSpreadRewardsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest",
  encode(message: ClaimableSpreadRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableSpreadRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableSpreadRewardsRequest {
    const obj = createBaseClaimableSpreadRewardsRequest();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    return obj;
  },
  toJSON(message: ClaimableSpreadRewardsRequest): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableSpreadRewardsRequest>, I>>(
    object: I,
  ): ClaimableSpreadRewardsRequest {
    const message = createBaseClaimableSpreadRewardsRequest();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    return message;
  },
};
function createBaseClaimableSpreadRewardsResponse(): ClaimableSpreadRewardsResponse {
  return {
    claimableSpreadRewards: [],
  };
}
export const ClaimableSpreadRewardsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse",
  encode(
    message: ClaimableSpreadRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.claimableSpreadRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableSpreadRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimableSpreadRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableSpreadRewardsResponse {
    const obj = createBaseClaimableSpreadRewardsResponse();
    if (Array.isArray(object?.claimableSpreadRewards))
      obj.claimableSpreadRewards = object.claimableSpreadRewards.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: ClaimableSpreadRewardsResponse): unknown {
    const obj: any = {};
    if (message.claimableSpreadRewards) {
      obj.claimableSpreadRewards = message.claimableSpreadRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.claimableSpreadRewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableSpreadRewardsResponse>, I>>(
    object: I,
  ): ClaimableSpreadRewardsResponse {
    const message = createBaseClaimableSpreadRewardsResponse();
    message.claimableSpreadRewards = object.claimableSpreadRewards?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseClaimableIncentivesRequest(): ClaimableIncentivesRequest {
  return {
    positionId: BigInt(0),
  };
}
export const ClaimableIncentivesRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest",
  encode(message: ClaimableIncentivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableIncentivesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableIncentivesRequest {
    const obj = createBaseClaimableIncentivesRequest();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    return obj;
  },
  toJSON(message: ClaimableIncentivesRequest): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableIncentivesRequest>, I>>(
    object: I,
  ): ClaimableIncentivesRequest {
    const message = createBaseClaimableIncentivesRequest();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    return message;
  },
};
function createBaseClaimableIncentivesResponse(): ClaimableIncentivesResponse {
  return {
    claimableIncentives: [],
    forfeitedIncentives: [],
  };
}
export const ClaimableIncentivesResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse",
  encode(message: ClaimableIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimableIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimableIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.forfeitedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableIncentivesResponse {
    const obj = createBaseClaimableIncentivesResponse();
    if (Array.isArray(object?.claimableIncentives))
      obj.claimableIncentives = object.claimableIncentives.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.forfeitedIncentives))
      obj.forfeitedIncentives = object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: ClaimableIncentivesResponse): unknown {
    const obj: any = {};
    if (message.claimableIncentives) {
      obj.claimableIncentives = message.claimableIncentives.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.claimableIncentives = [];
    }
    if (message.forfeitedIncentives) {
      obj.forfeitedIncentives = message.forfeitedIncentives.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.forfeitedIncentives = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableIncentivesResponse>, I>>(
    object: I,
  ): ClaimableIncentivesResponse {
    const message = createBaseClaimableIncentivesResponse();
    message.claimableIncentives = object.claimableIncentives?.map((e) => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBasePoolAccumulatorRewardsRequest(): PoolAccumulatorRewardsRequest {
  return {
    poolId: BigInt(0),
  };
}
export const PoolAccumulatorRewardsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest",
  encode(message: PoolAccumulatorRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAccumulatorRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolAccumulatorRewardsRequest {
    const obj = createBasePoolAccumulatorRewardsRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: PoolAccumulatorRewardsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolAccumulatorRewardsRequest>, I>>(
    object: I,
  ): PoolAccumulatorRewardsRequest {
    const message = createBasePoolAccumulatorRewardsRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBasePoolAccumulatorRewardsResponse(): PoolAccumulatorRewardsResponse {
  return {
    spreadRewardGrowthGlobal: [],
    uptimeGrowthGlobal: [],
  };
}
export const PoolAccumulatorRewardsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse",
  encode(
    message: PoolAccumulatorRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.spreadRewardGrowthGlobal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeGrowthGlobal) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAccumulatorRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spreadRewardGrowthGlobal.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.uptimeGrowthGlobal.push(UptimeTracker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolAccumulatorRewardsResponse {
    const obj = createBasePoolAccumulatorRewardsResponse();
    if (Array.isArray(object?.spreadRewardGrowthGlobal))
      obj.spreadRewardGrowthGlobal = object.spreadRewardGrowthGlobal.map((e: any) => DecCoin.fromJSON(e));
    if (Array.isArray(object?.uptimeGrowthGlobal))
      obj.uptimeGrowthGlobal = object.uptimeGrowthGlobal.map((e: any) => UptimeTracker.fromJSON(e));
    return obj;
  },
  toJSON(message: PoolAccumulatorRewardsResponse): unknown {
    const obj: any = {};
    if (message.spreadRewardGrowthGlobal) {
      obj.spreadRewardGrowthGlobal = message.spreadRewardGrowthGlobal.map((e) =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.spreadRewardGrowthGlobal = [];
    }
    if (message.uptimeGrowthGlobal) {
      obj.uptimeGrowthGlobal = message.uptimeGrowthGlobal.map((e) =>
        e ? UptimeTracker.toJSON(e) : undefined,
      );
    } else {
      obj.uptimeGrowthGlobal = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolAccumulatorRewardsResponse>, I>>(
    object: I,
  ): PoolAccumulatorRewardsResponse {
    const message = createBasePoolAccumulatorRewardsResponse();
    message.spreadRewardGrowthGlobal =
      object.spreadRewardGrowthGlobal?.map((e) => DecCoin.fromPartial(e)) || [];
    message.uptimeGrowthGlobal = object.uptimeGrowthGlobal?.map((e) => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTickAccumulatorTrackersRequest(): TickAccumulatorTrackersRequest {
  return {
    poolId: BigInt(0),
    tickIndex: BigInt(0),
  };
}
export const TickAccumulatorTrackersRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest",
  encode(
    message: TickAccumulatorTrackersRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickAccumulatorTrackersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickAccumulatorTrackersRequest {
    const obj = createBaseTickAccumulatorTrackersRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tickIndex)) obj.tickIndex = BigInt(object.tickIndex.toString());
    return obj;
  },
  toJSON(message: TickAccumulatorTrackersRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickAccumulatorTrackersRequest>, I>>(
    object: I,
  ): TickAccumulatorTrackersRequest {
    const message = createBaseTickAccumulatorTrackersRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.tickIndex !== undefined && object.tickIndex !== null) {
      message.tickIndex = BigInt(object.tickIndex.toString());
    }
    return message;
  },
};
function createBaseTickAccumulatorTrackersResponse(): TickAccumulatorTrackersResponse {
  return {
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: [],
  };
}
export const TickAccumulatorTrackersResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse",
  encode(
    message: TickAccumulatorTrackersResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeTrackers) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickAccumulatorTrackersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(
            DecCoin.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.uptimeTrackers.push(UptimeTracker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickAccumulatorTrackersResponse {
    const obj = createBaseTickAccumulatorTrackersResponse();
    if (Array.isArray(object?.spreadRewardGrowthOppositeDirectionOfLastTraversal))
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
        object.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e: any) => DecCoin.fromJSON(e));
    if (Array.isArray(object?.uptimeTrackers))
      obj.uptimeTrackers = object.uptimeTrackers.map((e: any) => UptimeTracker.fromJSON(e));
    return obj;
  },
  toJSON(message: TickAccumulatorTrackersResponse): unknown {
    const obj: any = {};
    if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e) =>
          e ? DecCoin.toJSON(e) : undefined,
        );
    } else {
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal = [];
    }
    if (message.uptimeTrackers) {
      obj.uptimeTrackers = message.uptimeTrackers.map((e) => (e ? UptimeTracker.toJSON(e) : undefined));
    } else {
      obj.uptimeTrackers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickAccumulatorTrackersResponse>, I>>(
    object: I,
  ): TickAccumulatorTrackersResponse {
    const message = createBaseTickAccumulatorTrackersResponse();
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
      object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map((e) => DecCoin.fromPartial(e)) || [];
    message.uptimeTrackers = object.uptimeTrackers?.map((e) => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
};
function createBaseIncentiveRecordsRequest(): IncentiveRecordsRequest {
  return {
    poolId: BigInt(0),
    pagination: undefined,
  };
}
export const IncentiveRecordsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest",
  encode(message: IncentiveRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecordsRequest {
    const obj = createBaseIncentiveRecordsRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: IncentiveRecordsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecordsRequest>, I>>(object: I): IncentiveRecordsRequest {
    const message = createBaseIncentiveRecordsRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseIncentiveRecordsResponse(): IncentiveRecordsResponse {
  return {
    incentiveRecords: [],
    pagination: undefined,
  };
}
export const IncentiveRecordsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse",
  encode(message: IncentiveRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveRecords.push(IncentiveRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecordsResponse {
    const obj = createBaseIncentiveRecordsResponse();
    if (Array.isArray(object?.incentiveRecords))
      obj.incentiveRecords = object.incentiveRecords.map((e: any) => IncentiveRecord.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: IncentiveRecordsResponse): unknown {
    const obj: any = {};
    if (message.incentiveRecords) {
      obj.incentiveRecords = message.incentiveRecords.map((e) => (e ? IncentiveRecord.toJSON(e) : undefined));
    } else {
      obj.incentiveRecords = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecordsResponse>, I>>(
    object: I,
  ): IncentiveRecordsResponse {
    const message = createBaseIncentiveRecordsResponse();
    message.incentiveRecords = object.incentiveRecords?.map((e) => IncentiveRecord.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest(): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
  return {
    concentratedPoolId: BigInt(0),
  };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest",
  encode(
    message: CFMMPoolIdLinkFromConcentratedPoolIdRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.concentratedPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.concentratedPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.concentratedPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const obj = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    if (isSet(object.concentratedPoolId))
      obj.concentratedPoolId = BigInt(object.concentratedPoolId.toString());
    return obj;
  },
  toJSON(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): unknown {
    const obj: any = {};
    message.concentratedPoolId !== undefined &&
      (obj.concentratedPoolId = (message.concentratedPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CFMMPoolIdLinkFromConcentratedPoolIdRequest>, I>>(
    object: I,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    if (object.concentratedPoolId !== undefined && object.concentratedPoolId !== null) {
      message.concentratedPoolId = BigInt(object.concentratedPoolId.toString());
    }
    return message;
  },
};
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse(): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
  return {
    cfmmPoolId: BigInt(0),
  };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse",
  encode(
    message: CFMMPoolIdLinkFromConcentratedPoolIdResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.cfmmPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cfmmPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cfmmPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const obj = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    if (isSet(object.cfmmPoolId)) obj.cfmmPoolId = BigInt(object.cfmmPoolId.toString());
    return obj;
  },
  toJSON(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): unknown {
    const obj: any = {};
    message.cfmmPoolId !== undefined && (obj.cfmmPoolId = (message.cfmmPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CFMMPoolIdLinkFromConcentratedPoolIdResponse>, I>>(
    object: I,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    if (object.cfmmPoolId !== undefined && object.cfmmPoolId !== null) {
      message.cfmmPoolId = BigInt(object.cfmmPoolId.toString());
    }
    return message;
  },
};
function createBaseUserUnbondingPositionsRequest(): UserUnbondingPositionsRequest {
  return {
    address: "",
  };
}
export const UserUnbondingPositionsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest",
  encode(message: UserUnbondingPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbondingPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserUnbondingPositionsRequest {
    const obj = createBaseUserUnbondingPositionsRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: UserUnbondingPositionsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserUnbondingPositionsRequest>, I>>(
    object: I,
  ): UserUnbondingPositionsRequest {
    const message = createBaseUserUnbondingPositionsRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseUserUnbondingPositionsResponse(): UserUnbondingPositionsResponse {
  return {
    positionsWithPeriodLock: [],
  };
}
export const UserUnbondingPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse",
  encode(
    message: UserUnbondingPositionsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.positionsWithPeriodLock) {
      PositionWithPeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbondingPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionsWithPeriodLock.push(PositionWithPeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserUnbondingPositionsResponse {
    const obj = createBaseUserUnbondingPositionsResponse();
    if (Array.isArray(object?.positionsWithPeriodLock))
      obj.positionsWithPeriodLock = object.positionsWithPeriodLock.map((e: any) =>
        PositionWithPeriodLock.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: UserUnbondingPositionsResponse): unknown {
    const obj: any = {};
    if (message.positionsWithPeriodLock) {
      obj.positionsWithPeriodLock = message.positionsWithPeriodLock.map((e) =>
        e ? PositionWithPeriodLock.toJSON(e) : undefined,
      );
    } else {
      obj.positionsWithPeriodLock = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserUnbondingPositionsResponse>, I>>(
    object: I,
  ): UserUnbondingPositionsResponse {
    const message = createBaseUserUnbondingPositionsResponse();
    message.positionsWithPeriodLock =
      object.positionsWithPeriodLock?.map((e) => PositionWithPeriodLock.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGetTotalLiquidityRequest(): GetTotalLiquidityRequest {
  return {};
}
export const GetTotalLiquidityRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest",
  encode(_: GetTotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetTotalLiquidityRequest {
    const obj = createBaseGetTotalLiquidityRequest();
    return obj;
  },
  toJSON(_: GetTotalLiquidityRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalLiquidityRequest>, I>>(_: I): GetTotalLiquidityRequest {
    const message = createBaseGetTotalLiquidityRequest();
    return message;
  },
};
function createBaseGetTotalLiquidityResponse(): GetTotalLiquidityResponse {
  return {
    totalLiquidity: [],
  };
}
export const GetTotalLiquidityResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse",
  encode(message: GetTotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTotalLiquidityResponse {
    const obj = createBaseGetTotalLiquidityResponse();
    if (Array.isArray(object?.totalLiquidity))
      obj.totalLiquidity = object.totalLiquidity.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: GetTotalLiquidityResponse): unknown {
    const obj: any = {};
    if (message.totalLiquidity) {
      obj.totalLiquidity = message.totalLiquidity.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalLiquidity = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalLiquidityResponse>, I>>(
    object: I,
  ): GetTotalLiquidityResponse {
    const message = createBaseGetTotalLiquidityResponse();
    message.totalLiquidity = object.totalLiquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseNumNextInitializedTicksRequest(): NumNextInitializedTicksRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: "",
    numNextInitializedTicks: BigInt(0),
  };
}
export const NumNextInitializedTicksRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest",
  encode(
    message: NumNextInitializedTicksRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.numNextInitializedTicks !== BigInt(0)) {
      writer.uint32(24).uint64(message.numNextInitializedTicks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumNextInitializedTicksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumNextInitializedTicksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.numNextInitializedTicks = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumNextInitializedTicksRequest {
    const obj = createBaseNumNextInitializedTicksRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    if (isSet(object.numNextInitializedTicks))
      obj.numNextInitializedTicks = BigInt(object.numNextInitializedTicks.toString());
    return obj;
  },
  toJSON(message: NumNextInitializedTicksRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.numNextInitializedTicks !== undefined &&
      (obj.numNextInitializedTicks = (message.numNextInitializedTicks || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumNextInitializedTicksRequest>, I>>(
    object: I,
  ): NumNextInitializedTicksRequest {
    const message = createBaseNumNextInitializedTicksRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenInDenom = object.tokenInDenom ?? "";
    if (object.numNextInitializedTicks !== undefined && object.numNextInitializedTicks !== null) {
      message.numNextInitializedTicks = BigInt(object.numNextInitializedTicks.toString());
    }
    return message;
  },
};
function createBaseNumNextInitializedTicksResponse(): NumNextInitializedTicksResponse {
  return {
    liquidityDepths: [],
    currentTick: BigInt(0),
    currentLiquidity: "",
  };
}
export const NumNextInitializedTicksResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse",
  encode(
    message: NumNextInitializedTicksResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== "") {
      writer.uint32(26).string(message.currentLiquidity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumNextInitializedTicksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumNextInitializedTicksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(TickLiquidityNet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentTick = reader.int64();
          break;
        case 3:
          message.currentLiquidity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumNextInitializedTicksResponse {
    const obj = createBaseNumNextInitializedTicksResponse();
    if (Array.isArray(object?.liquidityDepths))
      obj.liquidityDepths = object.liquidityDepths.map((e: any) => TickLiquidityNet.fromJSON(e));
    if (isSet(object.currentTick)) obj.currentTick = BigInt(object.currentTick.toString());
    if (isSet(object.currentLiquidity)) obj.currentLiquidity = String(object.currentLiquidity);
    return obj;
  },
  toJSON(message: NumNextInitializedTicksResponse): unknown {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidityDepths = message.liquidityDepths.map((e) => (e ? TickLiquidityNet.toJSON(e) : undefined));
    } else {
      obj.liquidityDepths = [];
    }
    message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
    message.currentLiquidity !== undefined && (obj.currentLiquidity = message.currentLiquidity);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumNextInitializedTicksResponse>, I>>(
    object: I,
  ): NumNextInitializedTicksResponse {
    const message = createBaseNumNextInitializedTicksResponse();
    message.liquidityDepths = object.liquidityDepths?.map((e) => TickLiquidityNet.fromPartial(e)) || [];
    if (object.currentTick !== undefined && object.currentTick !== null) {
      message.currentTick = BigInt(object.currentTick.toString());
    }
    message.currentLiquidity = object.currentLiquidity ?? "";
    return message;
  },
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
  CFMMPoolIdLinkFromConcentratedPoolId(
    request: CFMMPoolIdLinkFromConcentratedPoolIdRequest,
  ): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Pools = this.Pools.bind(this);
    this.Params = this.Params.bind(this);
    this.UserPositions = this.UserPositions.bind(this);
    this.LiquidityPerTickRange = this.LiquidityPerTickRange.bind(this);
    this.LiquidityNetInDirection = this.LiquidityNetInDirection.bind(this);
    this.ClaimableSpreadRewards = this.ClaimableSpreadRewards.bind(this);
    this.ClaimableIncentives = this.ClaimableIncentives.bind(this);
    this.PositionById = this.PositionById.bind(this);
    this.PoolAccumulatorRewards = this.PoolAccumulatorRewards.bind(this);
    this.IncentiveRecords = this.IncentiveRecords.bind(this);
    this.TickAccumulatorTrackers = this.TickAccumulatorTrackers.bind(this);
    this.CFMMPoolIdLinkFromConcentratedPoolId = this.CFMMPoolIdLinkFromConcentratedPoolId.bind(this);
    this.UserUnbondingPositions = this.UserUnbondingPositions.bind(this);
    this.GetTotalLiquidity = this.GetTotalLiquidity.bind(this);
    this.NumNextInitializedTicks = this.NumNextInitializedTicks.bind(this);
  }
  Pools(
    request: PoolsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<PoolsResponse> {
    const data = PoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Pools", data);
    return promise.then((data) => PoolsResponse.decode(new BinaryReader(data)));
  }
  Params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Params", data);
    return promise.then((data) => ParamsResponse.decode(new BinaryReader(data)));
  }
  UserPositions(request: UserPositionsRequest): Promise<UserPositionsResponse> {
    const data = UserPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "UserPositions", data);
    return promise.then((data) => UserPositionsResponse.decode(new BinaryReader(data)));
  }
  LiquidityPerTickRange(request: LiquidityPerTickRangeRequest): Promise<LiquidityPerTickRangeResponse> {
    const data = LiquidityPerTickRangeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "LiquidityPerTickRange",
      data,
    );
    return promise.then((data) => LiquidityPerTickRangeResponse.decode(new BinaryReader(data)));
  }
  LiquidityNetInDirection(request: LiquidityNetInDirectionRequest): Promise<LiquidityNetInDirectionResponse> {
    const data = LiquidityNetInDirectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "LiquidityNetInDirection",
      data,
    );
    return promise.then((data) => LiquidityNetInDirectionResponse.decode(new BinaryReader(data)));
  }
  ClaimableSpreadRewards(request: ClaimableSpreadRewardsRequest): Promise<ClaimableSpreadRewardsResponse> {
    const data = ClaimableSpreadRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "ClaimableSpreadRewards",
      data,
    );
    return promise.then((data) => ClaimableSpreadRewardsResponse.decode(new BinaryReader(data)));
  }
  ClaimableIncentives(request: ClaimableIncentivesRequest): Promise<ClaimableIncentivesResponse> {
    const data = ClaimableIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "ClaimableIncentives",
      data,
    );
    return promise.then((data) => ClaimableIncentivesResponse.decode(new BinaryReader(data)));
  }
  PositionById(request: PositionByIdRequest): Promise<PositionByIdResponse> {
    const data = PositionByIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PositionById", data);
    return promise.then((data) => PositionByIdResponse.decode(new BinaryReader(data)));
  }
  PoolAccumulatorRewards(request: PoolAccumulatorRewardsRequest): Promise<PoolAccumulatorRewardsResponse> {
    const data = PoolAccumulatorRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "PoolAccumulatorRewards",
      data,
    );
    return promise.then((data) => PoolAccumulatorRewardsResponse.decode(new BinaryReader(data)));
  }
  IncentiveRecords(request: IncentiveRecordsRequest): Promise<IncentiveRecordsResponse> {
    const data = IncentiveRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "IncentiveRecords", data);
    return promise.then((data) => IncentiveRecordsResponse.decode(new BinaryReader(data)));
  }
  TickAccumulatorTrackers(request: TickAccumulatorTrackersRequest): Promise<TickAccumulatorTrackersResponse> {
    const data = TickAccumulatorTrackersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "TickAccumulatorTrackers",
      data,
    );
    return promise.then((data) => TickAccumulatorTrackersResponse.decode(new BinaryReader(data)));
  }
  CFMMPoolIdLinkFromConcentratedPoolId(
    request: CFMMPoolIdLinkFromConcentratedPoolIdRequest,
  ): Promise<CFMMPoolIdLinkFromConcentratedPoolIdResponse> {
    const data = CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "CFMMPoolIdLinkFromConcentratedPoolId",
      data,
    );
    return promise.then((data) =>
      CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(new BinaryReader(data)),
    );
  }
  UserUnbondingPositions(request: UserUnbondingPositionsRequest): Promise<UserUnbondingPositionsResponse> {
    const data = UserUnbondingPositionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "UserUnbondingPositions",
      data,
    );
    return promise.then((data) => UserUnbondingPositionsResponse.decode(new BinaryReader(data)));
  }
  GetTotalLiquidity(request: GetTotalLiquidityRequest = {}): Promise<GetTotalLiquidityResponse> {
    const data = GetTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "GetTotalLiquidity",
      data,
    );
    return promise.then((data) => GetTotalLiquidityResponse.decode(new BinaryReader(data)));
  }
  NumNextInitializedTicks(request: NumNextInitializedTicksRequest): Promise<NumNextInitializedTicksResponse> {
    const data = NumNextInitializedTicksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Query",
      "NumNextInitializedTicks",
      data,
    );
    return promise.then((data) => NumNextInitializedTicksResponse.decode(new BinaryReader(data)));
  }
}
