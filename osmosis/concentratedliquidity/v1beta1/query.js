"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.NumNextInitializedTicksResponse = exports.NumNextInitializedTicksRequest = exports.GetTotalLiquidityResponse = exports.GetTotalLiquidityRequest = exports.UserUnbondingPositionsResponse = exports.UserUnbondingPositionsRequest = exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse = exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest = exports.IncentiveRecordsResponse = exports.IncentiveRecordsRequest = exports.TickAccumulatorTrackersResponse = exports.TickAccumulatorTrackersRequest = exports.PoolAccumulatorRewardsResponse = exports.PoolAccumulatorRewardsRequest = exports.ClaimableIncentivesResponse = exports.ClaimableIncentivesRequest = exports.ClaimableSpreadRewardsResponse = exports.ClaimableSpreadRewardsRequest = exports.LiquidityPerTickRangeResponse = exports.LiquidityPerTickRangeRequest = exports.LiquidityNetInDirectionResponse = exports.LiquidityNetInDirectionRequest = exports.LiquidityDepthWithRange = exports.TickLiquidityNet = exports.ParamsResponse = exports.ParamsRequest = exports.PoolsResponse = exports.PoolsRequest = exports.NumPoolPositionsResponse = exports.NumPoolPositionsRequest = exports.PositionByIdResponse = exports.PositionByIdRequest = exports.UserPositionsResponse = exports.UserPositionsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const position_1 = require("./position");
const any_1 = require("../../../google/protobuf/any");
const params_1 = require("../params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const tick_info_1 = require("./tick_info");
const incentive_record_1 = require("./incentive_record");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.v1beta1";
function createBaseUserPositionsRequest() {
    return {
        address: "",
        poolId: BigInt(0),
        pagination: undefined,
    };
}
exports.UserPositionsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserPositionsRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserPositionsRequest();
        message.address = object.address ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseUserPositionsResponse() {
    return {
        positions: [],
        pagination: undefined,
    };
}
exports.UserPositionsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.positions) {
            position_1.FullPositionBreakdown.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positions.push(position_1.FullPositionBreakdown.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserPositionsResponse();
        if (Array.isArray(object?.positions))
            obj.positions = object.positions.map((e) => position_1.FullPositionBreakdown.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.positions) {
            obj.positions = message.positions.map((e) => (e ? position_1.FullPositionBreakdown.toJSON(e) : undefined));
        }
        else {
            obj.positions = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserPositionsResponse();
        message.positions = object.positions?.map((e) => position_1.FullPositionBreakdown.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBasePositionByIdRequest() {
    return {
        positionId: BigInt(0),
    };
}
exports.PositionByIdRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBasePositionByIdRequest();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePositionByIdRequest();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        return message;
    },
};
function createBasePositionByIdResponse() {
    return {
        position: position_1.FullPositionBreakdown.fromPartial({}),
    };
}
exports.PositionByIdResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            position_1.FullPositionBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = position_1.FullPositionBreakdown.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePositionByIdResponse();
        if ((0, helpers_1.isSet)(object.position))
            obj.position = position_1.FullPositionBreakdown.fromJSON(object.position);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined &&
            (obj.position = message.position ? position_1.FullPositionBreakdown.toJSON(message.position) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePositionByIdResponse();
        if (object.position !== undefined && object.position !== null) {
            message.position = position_1.FullPositionBreakdown.fromPartial(object.position);
        }
        return message;
    },
};
function createBaseNumPoolPositionsRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.NumPoolPositionsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseNumPoolPositionsRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNumPoolPositionsRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseNumPoolPositionsResponse() {
    return {
        positionCount: BigInt(0),
    };
}
exports.NumPoolPositionsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseNumPoolPositionsResponse();
        if ((0, helpers_1.isSet)(object.positionCount))
            obj.positionCount = BigInt(object.positionCount.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionCount !== undefined &&
            (obj.positionCount = (message.positionCount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNumPoolPositionsResponse();
        if (object.positionCount !== undefined && object.positionCount !== null) {
            message.positionCount = BigInt(object.positionCount.toString());
        }
        return message;
    },
};
function createBasePoolsRequest() {
    return {
        pagination: undefined,
    };
}
exports.PoolsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolsRequest();
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBasePoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
exports.PoolsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolsResponse();
        if (Array.isArray(object?.pools))
            obj.pools = object.pools.map((e) => any_1.Any.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? any_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolsResponse();
        message.pools = object.pools?.map((e) => any_1.Any.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(_) {
        const obj = createBaseParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
};
function createBaseParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParamsResponse();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = params_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseTickLiquidityNet() {
    return {
        liquidityNet: "",
        tickIndex: BigInt(0),
    };
}
exports.TickLiquidityNet = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.liquidityNet !== "") {
            writer.uint32(10).string(message.liquidityNet);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseTickLiquidityNet();
        if ((0, helpers_1.isSet)(object.liquidityNet))
            obj.liquidityNet = String(object.liquidityNet);
        if ((0, helpers_1.isSet)(object.tickIndex))
            obj.tickIndex = BigInt(object.tickIndex.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.liquidityNet !== undefined && (obj.liquidityNet = message.liquidityNet);
        message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTickLiquidityNet();
        message.liquidityNet = object.liquidityNet ?? "";
        if (object.tickIndex !== undefined && object.tickIndex !== null) {
            message.tickIndex = BigInt(object.tickIndex.toString());
        }
        return message;
    },
};
function createBaseLiquidityDepthWithRange() {
    return {
        liquidityAmount: "",
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
    };
}
exports.LiquidityDepthWithRange = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseLiquidityDepthWithRange();
        if ((0, helpers_1.isSet)(object.liquidityAmount))
            obj.liquidityAmount = String(object.liquidityAmount);
        if ((0, helpers_1.isSet)(object.lowerTick))
            obj.lowerTick = BigInt(object.lowerTick.toString());
        if ((0, helpers_1.isSet)(object.upperTick))
            obj.upperTick = BigInt(object.upperTick.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.liquidityAmount !== undefined && (obj.liquidityAmount = message.liquidityAmount);
        message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
        message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
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
function createBaseLiquidityNetInDirectionRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: "",
        startTick: BigInt(0),
        useCurTick: false,
        boundTick: BigInt(0),
        useNoBound: false,
    };
}
exports.LiquidityNetInDirectionRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseLiquidityNetInDirectionRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_1.isSet)(object.startTick))
            obj.startTick = BigInt(object.startTick.toString());
        if ((0, helpers_1.isSet)(object.useCurTick))
            obj.useCurTick = Boolean(object.useCurTick);
        if ((0, helpers_1.isSet)(object.boundTick))
            obj.boundTick = BigInt(object.boundTick.toString());
        if ((0, helpers_1.isSet)(object.useNoBound))
            obj.useNoBound = Boolean(object.useNoBound);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.startTick !== undefined && (obj.startTick = (message.startTick || BigInt(0)).toString());
        message.useCurTick !== undefined && (obj.useCurTick = message.useCurTick);
        message.boundTick !== undefined && (obj.boundTick = (message.boundTick || BigInt(0)).toString());
        message.useNoBound !== undefined && (obj.useNoBound = message.useNoBound);
        return obj;
    },
    fromPartial(object) {
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
function createBaseLiquidityNetInDirectionResponse() {
    return {
        liquidityDepths: [],
        currentTick: BigInt(0),
        currentLiquidity: "",
        currentSqrtPrice: "",
    };
}
exports.LiquidityNetInDirectionResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidityDepths) {
            exports.TickLiquidityNet.encode(v, writer.uint32(10).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityNetInDirectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityDepths.push(exports.TickLiquidityNet.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseLiquidityNetInDirectionResponse();
        if (Array.isArray(object?.liquidityDepths))
            obj.liquidityDepths = object.liquidityDepths.map((e) => exports.TickLiquidityNet.fromJSON(e));
        if ((0, helpers_1.isSet)(object.currentTick))
            obj.currentTick = BigInt(object.currentTick.toString());
        if ((0, helpers_1.isSet)(object.currentLiquidity))
            obj.currentLiquidity = String(object.currentLiquidity);
        if ((0, helpers_1.isSet)(object.currentSqrtPrice))
            obj.currentSqrtPrice = String(object.currentSqrtPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidityDepths) {
            obj.liquidityDepths = message.liquidityDepths.map((e) => (e ? exports.TickLiquidityNet.toJSON(e) : undefined));
        }
        else {
            obj.liquidityDepths = [];
        }
        message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
        message.currentLiquidity !== undefined && (obj.currentLiquidity = message.currentLiquidity);
        message.currentSqrtPrice !== undefined && (obj.currentSqrtPrice = message.currentSqrtPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLiquidityNetInDirectionResponse();
        message.liquidityDepths = object.liquidityDepths?.map((e) => exports.TickLiquidityNet.fromPartial(e)) || [];
        if (object.currentTick !== undefined && object.currentTick !== null) {
            message.currentTick = BigInt(object.currentTick.toString());
        }
        message.currentLiquidity = object.currentLiquidity ?? "";
        message.currentSqrtPrice = object.currentSqrtPrice ?? "";
        return message;
    },
};
function createBaseLiquidityPerTickRangeRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.LiquidityPerTickRangeRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseLiquidityPerTickRangeRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLiquidityPerTickRangeRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseLiquidityPerTickRangeResponse() {
    return {
        liquidity: [],
        bucketIndex: BigInt(0),
    };
}
exports.LiquidityPerTickRangeResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            exports.LiquidityDepthWithRange.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.bucketIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.bucketIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityPerTickRangeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(exports.LiquidityDepthWithRange.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseLiquidityPerTickRangeResponse();
        if (Array.isArray(object?.liquidity))
            obj.liquidity = object.liquidity.map((e) => exports.LiquidityDepthWithRange.fromJSON(e));
        if ((0, helpers_1.isSet)(object.bucketIndex))
            obj.bucketIndex = BigInt(object.bucketIndex.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map((e) => (e ? exports.LiquidityDepthWithRange.toJSON(e) : undefined));
        }
        else {
            obj.liquidity = [];
        }
        message.bucketIndex !== undefined && (obj.bucketIndex = (message.bucketIndex || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLiquidityPerTickRangeResponse();
        message.liquidity = object.liquidity?.map((e) => exports.LiquidityDepthWithRange.fromPartial(e)) || [];
        if (object.bucketIndex !== undefined && object.bucketIndex !== null) {
            message.bucketIndex = BigInt(object.bucketIndex.toString());
        }
        return message;
    },
};
function createBaseClaimableSpreadRewardsRequest() {
    return {
        positionId: BigInt(0),
    };
}
exports.ClaimableSpreadRewardsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseClaimableSpreadRewardsRequest();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaimableSpreadRewardsRequest();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        return message;
    },
};
function createBaseClaimableSpreadRewardsResponse() {
    return {
        claimableSpreadRewards: [],
    };
}
exports.ClaimableSpreadRewardsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.claimableSpreadRewards) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableSpreadRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimableSpreadRewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseClaimableSpreadRewardsResponse();
        if (Array.isArray(object?.claimableSpreadRewards))
            obj.claimableSpreadRewards = object.claimableSpreadRewards.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.claimableSpreadRewards) {
            obj.claimableSpreadRewards = message.claimableSpreadRewards.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.claimableSpreadRewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaimableSpreadRewardsResponse();
        message.claimableSpreadRewards = object.claimableSpreadRewards?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseClaimableIncentivesRequest() {
    return {
        positionId: BigInt(0),
    };
}
exports.ClaimableIncentivesRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseClaimableIncentivesRequest();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaimableIncentivesRequest();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        return message;
    },
};
function createBaseClaimableIncentivesResponse() {
    return {
        claimableIncentives: [],
        forfeitedIncentives: [],
    };
}
exports.ClaimableIncentivesResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.claimableIncentives) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.forfeitedIncentives) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableIncentivesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimableIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.forfeitedIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseClaimableIncentivesResponse();
        if (Array.isArray(object?.claimableIncentives))
            obj.claimableIncentives = object.claimableIncentives.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.forfeitedIncentives))
            obj.forfeitedIncentives = object.forfeitedIncentives.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.claimableIncentives) {
            obj.claimableIncentives = message.claimableIncentives.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.claimableIncentives = [];
        }
        if (message.forfeitedIncentives) {
            obj.forfeitedIncentives = message.forfeitedIncentives.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.forfeitedIncentives = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaimableIncentivesResponse();
        message.claimableIncentives = object.claimableIncentives?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.forfeitedIncentives = object.forfeitedIncentives?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBasePoolAccumulatorRewardsRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.PoolAccumulatorRewardsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBasePoolAccumulatorRewardsRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolAccumulatorRewardsRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBasePoolAccumulatorRewardsResponse() {
    return {
        spreadRewardGrowthGlobal: [],
        uptimeGrowthGlobal: [],
    };
}
exports.PoolAccumulatorRewardsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spreadRewardGrowthGlobal) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uptimeGrowthGlobal) {
            tick_info_1.UptimeTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAccumulatorRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spreadRewardGrowthGlobal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.uptimeGrowthGlobal.push(tick_info_1.UptimeTracker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolAccumulatorRewardsResponse();
        if (Array.isArray(object?.spreadRewardGrowthGlobal))
            obj.spreadRewardGrowthGlobal = object.spreadRewardGrowthGlobal.map((e) => coin_1.DecCoin.fromJSON(e));
        if (Array.isArray(object?.uptimeGrowthGlobal))
            obj.uptimeGrowthGlobal = object.uptimeGrowthGlobal.map((e) => tick_info_1.UptimeTracker.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.spreadRewardGrowthGlobal) {
            obj.spreadRewardGrowthGlobal = message.spreadRewardGrowthGlobal.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.spreadRewardGrowthGlobal = [];
        }
        if (message.uptimeGrowthGlobal) {
            obj.uptimeGrowthGlobal = message.uptimeGrowthGlobal.map((e) => e ? tick_info_1.UptimeTracker.toJSON(e) : undefined);
        }
        else {
            obj.uptimeGrowthGlobal = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolAccumulatorRewardsResponse();
        message.spreadRewardGrowthGlobal =
            object.spreadRewardGrowthGlobal?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.uptimeGrowthGlobal = object.uptimeGrowthGlobal?.map((e) => tick_info_1.UptimeTracker.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTickAccumulatorTrackersRequest() {
    return {
        poolId: BigInt(0),
        tickIndex: BigInt(0),
    };
}
exports.TickAccumulatorTrackersRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseTickAccumulatorTrackersRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tickIndex))
            obj.tickIndex = BigInt(object.tickIndex.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
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
function createBaseTickAccumulatorTrackersResponse() {
    return {
        spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
        uptimeTrackers: [],
    };
}
exports.TickAccumulatorTrackersResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uptimeTrackers) {
            tick_info_1.UptimeTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickAccumulatorTrackersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.uptimeTrackers.push(tick_info_1.UptimeTracker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTickAccumulatorTrackersResponse();
        if (Array.isArray(object?.spreadRewardGrowthOppositeDirectionOfLastTraversal))
            obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
                object.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e) => coin_1.DecCoin.fromJSON(e));
        if (Array.isArray(object?.uptimeTrackers))
            obj.uptimeTrackers = object.uptimeTrackers.map((e) => tick_info_1.UptimeTracker.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.spreadRewardGrowthOppositeDirectionOfLastTraversal = [];
        }
        if (message.uptimeTrackers) {
            obj.uptimeTrackers = message.uptimeTrackers.map((e) => (e ? tick_info_1.UptimeTracker.toJSON(e) : undefined));
        }
        else {
            obj.uptimeTrackers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTickAccumulatorTrackersResponse();
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
            object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.uptimeTrackers = object.uptimeTrackers?.map((e) => tick_info_1.UptimeTracker.fromPartial(e)) || [];
        return message;
    },
};
function createBaseIncentiveRecordsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined,
    };
}
exports.IncentiveRecordsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseIncentiveRecordsRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentiveRecordsRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseIncentiveRecordsResponse() {
    return {
        incentiveRecords: [],
        pagination: undefined,
    };
}
exports.IncentiveRecordsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.incentiveRecords) {
            incentive_record_1.IncentiveRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentiveRecords.push(incentive_record_1.IncentiveRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseIncentiveRecordsResponse();
        if (Array.isArray(object?.incentiveRecords))
            obj.incentiveRecords = object.incentiveRecords.map((e) => incentive_record_1.IncentiveRecord.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.incentiveRecords) {
            obj.incentiveRecords = message.incentiveRecords.map((e) => (e ? incentive_record_1.IncentiveRecord.toJSON(e) : undefined));
        }
        else {
            obj.incentiveRecords = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentiveRecordsResponse();
        message.incentiveRecords = object.incentiveRecords?.map((e) => incentive_record_1.IncentiveRecord.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest() {
    return {
        concentratedPoolId: BigInt(0),
    };
}
exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.concentratedPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.concentratedPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
        if ((0, helpers_1.isSet)(object.concentratedPoolId))
            obj.concentratedPoolId = BigInt(object.concentratedPoolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.concentratedPoolId !== undefined &&
            (obj.concentratedPoolId = (message.concentratedPoolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
        if (object.concentratedPoolId !== undefined && object.concentratedPoolId !== null) {
            message.concentratedPoolId = BigInt(object.concentratedPoolId.toString());
        }
        return message;
    },
};
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse() {
    return {
        cfmmPoolId: BigInt(0),
    };
}
exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cfmmPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.cfmmPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
        if ((0, helpers_1.isSet)(object.cfmmPoolId))
            obj.cfmmPoolId = BigInt(object.cfmmPoolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.cfmmPoolId !== undefined && (obj.cfmmPoolId = (message.cfmmPoolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
        if (object.cfmmPoolId !== undefined && object.cfmmPoolId !== null) {
            message.cfmmPoolId = BigInt(object.cfmmPoolId.toString());
        }
        return message;
    },
};
function createBaseUserUnbondingPositionsRequest() {
    return {
        address: "",
    };
}
exports.UserUnbondingPositionsRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseUserUnbondingPositionsRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserUnbondingPositionsRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseUserUnbondingPositionsResponse() {
    return {
        positionsWithPeriodLock: [],
    };
}
exports.UserUnbondingPositionsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.positionsWithPeriodLock) {
            position_1.PositionWithPeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserUnbondingPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionsWithPeriodLock.push(position_1.PositionWithPeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserUnbondingPositionsResponse();
        if (Array.isArray(object?.positionsWithPeriodLock))
            obj.positionsWithPeriodLock = object.positionsWithPeriodLock.map((e) => position_1.PositionWithPeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.positionsWithPeriodLock) {
            obj.positionsWithPeriodLock = message.positionsWithPeriodLock.map((e) => e ? position_1.PositionWithPeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.positionsWithPeriodLock = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserUnbondingPositionsResponse();
        message.positionsWithPeriodLock =
            object.positionsWithPeriodLock?.map((e) => position_1.PositionWithPeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetTotalLiquidityRequest() {
    return {};
}
exports.GetTotalLiquidityRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(_) {
        const obj = createBaseGetTotalLiquidityRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetTotalLiquidityRequest();
        return message;
    },
};
function createBaseGetTotalLiquidityResponse() {
    return {
        totalLiquidity: [],
    };
}
exports.GetTotalLiquidityResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.totalLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetTotalLiquidityResponse();
        if (Array.isArray(object?.totalLiquidity))
            obj.totalLiquidity = object.totalLiquidity.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.totalLiquidity) {
            obj.totalLiquidity = message.totalLiquidity.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.totalLiquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTotalLiquidityResponse();
        message.totalLiquidity = object.totalLiquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseNumNextInitializedTicksRequest() {
    return {
        poolId: BigInt(0),
        tokenInDenom: "",
        numNextInitializedTicks: BigInt(0),
    };
}
exports.NumNextInitializedTicksRequest = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        const obj = createBaseNumNextInitializedTicksRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenInDenom))
            obj.tokenInDenom = String(object.tokenInDenom);
        if ((0, helpers_1.isSet)(object.numNextInitializedTicks))
            obj.numNextInitializedTicks = BigInt(object.numNextInitializedTicks.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        message.numNextInitializedTicks !== undefined &&
            (obj.numNextInitializedTicks = (message.numNextInitializedTicks || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
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
function createBaseNumNextInitializedTicksResponse() {
    return {
        liquidityDepths: [],
        currentTick: BigInt(0),
        currentLiquidity: "",
    };
}
exports.NumNextInitializedTicksResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidityDepths) {
            exports.TickLiquidityNet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.currentTick !== BigInt(0)) {
            writer.uint32(16).int64(message.currentTick);
        }
        if (message.currentLiquidity !== "") {
            writer.uint32(26).string(message.currentLiquidity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumNextInitializedTicksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityDepths.push(exports.TickLiquidityNet.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseNumNextInitializedTicksResponse();
        if (Array.isArray(object?.liquidityDepths))
            obj.liquidityDepths = object.liquidityDepths.map((e) => exports.TickLiquidityNet.fromJSON(e));
        if ((0, helpers_1.isSet)(object.currentTick))
            obj.currentTick = BigInt(object.currentTick.toString());
        if ((0, helpers_1.isSet)(object.currentLiquidity))
            obj.currentLiquidity = String(object.currentLiquidity);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidityDepths) {
            obj.liquidityDepths = message.liquidityDepths.map((e) => (e ? exports.TickLiquidityNet.toJSON(e) : undefined));
        }
        else {
            obj.liquidityDepths = [];
        }
        message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
        message.currentLiquidity !== undefined && (obj.currentLiquidity = message.currentLiquidity);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNumNextInitializedTicksResponse();
        message.liquidityDepths = object.liquidityDepths?.map((e) => exports.TickLiquidityNet.fromPartial(e)) || [];
        if (object.currentTick !== undefined && object.currentTick !== null) {
            message.currentTick = BigInt(object.currentTick.toString());
        }
        message.currentLiquidity = object.currentLiquidity ?? "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
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
    Pools(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.PoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Pools", data);
        return promise.then((data) => exports.PoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    Params(request = {}) {
        const data = exports.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    UserPositions(request) {
        const data = exports.UserPositionsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "UserPositions", data);
        return promise.then((data) => exports.UserPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    LiquidityPerTickRange(request) {
        const data = exports.LiquidityPerTickRangeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "LiquidityPerTickRange", data);
        return promise.then((data) => exports.LiquidityPerTickRangeResponse.decode(new binary_1.BinaryReader(data)));
    }
    LiquidityNetInDirection(request) {
        const data = exports.LiquidityNetInDirectionRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "LiquidityNetInDirection", data);
        return promise.then((data) => exports.LiquidityNetInDirectionResponse.decode(new binary_1.BinaryReader(data)));
    }
    ClaimableSpreadRewards(request) {
        const data = exports.ClaimableSpreadRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "ClaimableSpreadRewards", data);
        return promise.then((data) => exports.ClaimableSpreadRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    ClaimableIncentives(request) {
        const data = exports.ClaimableIncentivesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "ClaimableIncentives", data);
        return promise.then((data) => exports.ClaimableIncentivesResponse.decode(new binary_1.BinaryReader(data)));
    }
    PositionById(request) {
        const data = exports.PositionByIdRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PositionById", data);
        return promise.then((data) => exports.PositionByIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    PoolAccumulatorRewards(request) {
        const data = exports.PoolAccumulatorRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "PoolAccumulatorRewards", data);
        return promise.then((data) => exports.PoolAccumulatorRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    IncentiveRecords(request) {
        const data = exports.IncentiveRecordsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "IncentiveRecords", data);
        return promise.then((data) => exports.IncentiveRecordsResponse.decode(new binary_1.BinaryReader(data)));
    }
    TickAccumulatorTrackers(request) {
        const data = exports.TickAccumulatorTrackersRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "TickAccumulatorTrackers", data);
        return promise.then((data) => exports.TickAccumulatorTrackersResponse.decode(new binary_1.BinaryReader(data)));
    }
    CFMMPoolIdLinkFromConcentratedPoolId(request) {
        const data = exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "CFMMPoolIdLinkFromConcentratedPoolId", data);
        return promise.then((data) => exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    UserUnbondingPositions(request) {
        const data = exports.UserUnbondingPositionsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "UserUnbondingPositions", data);
        return promise.then((data) => exports.UserUnbondingPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetTotalLiquidity(request = {}) {
        const data = exports.GetTotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "GetTotalLiquidity", data);
        return promise.then((data) => exports.GetTotalLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    NumNextInitializedTicks(request) {
        const data = exports.NumNextInitializedTicksRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Query", "NumNextInitializedTicks", data);
        return promise.then((data) => exports.NumNextInitializedTicksResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map