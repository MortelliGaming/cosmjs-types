"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCFMMConcentratedPoolLinksResponse = exports.QueryCFMMConcentratedPoolLinksRequest = exports.QueryConcentratedPoolIdLinkFromCFMMResponse = exports.QueryConcentratedPoolIdLinkFromCFMMRequest = exports.QueryTotalLiquidityResponse = exports.QueryTotalLiquidityRequest = exports.QuerySwapExactAmountOutResponse = exports.QuerySwapExactAmountOutRequest = exports.QuerySwapExactAmountInResponse = exports.QuerySwapExactAmountInRequest = exports.QuerySpotPriceResponse = exports.QueryPoolsWithFilterResponse = exports.QueryPoolsWithFilterRequest = exports.QuerySpotPriceRequest = exports.QueryCalcJoinPoolNoSwapSharesResponse = exports.QueryCalcJoinPoolNoSwapSharesRequest = exports.QueryTotalSharesResponse = exports.QueryTotalSharesRequest = exports.QueryTotalPoolLiquidityResponse = exports.QueryTotalPoolLiquidityRequest = exports.QueryPoolParamsResponse = exports.QueryPoolParamsRequest = exports.QueryCalcExitPoolCoinsFromSharesResponse = exports.QueryCalcExitPoolCoinsFromSharesRequest = exports.QueryCalcJoinPoolSharesResponse = exports.QueryCalcJoinPoolSharesRequest = exports.QueryPoolTypeResponse = exports.QueryPoolTypeRequest = exports.QueryNumPoolsResponse = exports.QueryNumPoolsRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const swap_route_1 = require("../../poolmanager/v1beta1/swap_route");
const any_1 = require("../../../google/protobuf/any");
const shared_1 = require("./shared");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.gamm.v1beta1";
function createBaseQueryPoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryPoolRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
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
        const obj = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return {
        pool: undefined,
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            any_1.Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPoolResponse();
        if ((0, helpers_1.isSet)(object.pool))
            obj.pool = any_1.Any.fromJSON(object.pool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? any_1.Any.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = any_1.Any.fromPartial(object.pool);
        }
        return message;
    },
};
function createBaseQueryPoolsRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
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
        const obj = createBaseQueryPoolsRequest();
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
        const message = createBaseQueryPoolsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
exports.QueryPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
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
        const message = createBaseQueryPoolsResponse();
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
        const obj = createBaseQueryPoolsResponse();
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
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map((e) => any_1.Any.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryNumPoolsRequest() {
    return {};
}
exports.QueryNumPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNumPoolsRequest();
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
        const obj = createBaseQueryNumPoolsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryNumPoolsRequest();
        return message;
    },
};
function createBaseQueryNumPoolsResponse() {
    return {
        numPools: BigInt(0),
    };
}
exports.QueryNumPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numPools !== BigInt(0)) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNumPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numPools = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryNumPoolsResponse();
        if ((0, helpers_1.isSet)(object.numPools))
            obj.numPools = BigInt(object.numPools.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.numPools !== undefined && (obj.numPools = (message.numPools || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNumPoolsResponse();
        if (object.numPools !== undefined && object.numPools !== null) {
            message.numPools = BigInt(object.numPools.toString());
        }
        return message;
    },
};
function createBaseQueryPoolTypeRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryPoolTypeRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolTypeRequest();
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
        const obj = createBaseQueryPoolTypeRequest();
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
        const message = createBaseQueryPoolTypeRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryPoolTypeResponse() {
    return {
        poolType: "",
    };
}
exports.QueryPoolTypeResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolType !== "") {
            writer.uint32(10).string(message.poolType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPoolTypeResponse();
        if ((0, helpers_1.isSet)(object.poolType))
            obj.poolType = String(object.poolType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolType !== undefined && (obj.poolType = message.poolType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolTypeResponse();
        message.poolType = object.poolType ?? "";
        return message;
    },
};
function createBaseQueryCalcJoinPoolSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: [],
    };
}
exports.QueryCalcJoinPoolSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCalcJoinPoolSharesRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if (Array.isArray(object?.tokensIn))
            obj.tokensIn = object.tokensIn.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        if (message.tokensIn) {
            obj.tokensIn = message.tokensIn.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokensIn = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokensIn = object.tokensIn?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryCalcJoinPoolSharesResponse() {
    return {
        shareOutAmount: "",
        tokensOut: [],
    };
}
exports.QueryCalcJoinPoolSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCalcJoinPoolSharesResponse();
        if ((0, helpers_1.isSet)(object.shareOutAmount))
            obj.shareOutAmount = String(object.shareOutAmount);
        if (Array.isArray(object?.tokensOut))
            obj.tokensOut = object.tokensOut.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        if (message.tokensOut) {
            obj.tokensOut = message.tokensOut.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokensOut = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokensOut = object.tokensOut?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
    return {
        poolId: BigInt(0),
        shareInAmount: "",
    };
}
exports.QueryCalcExitPoolCoinsFromSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(18).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.shareInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.shareInAmount))
            obj.shareInAmount = String(object.shareInAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.shareInAmount = object.shareInAmount ?? "";
        return message;
    },
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
    return {
        tokensOut: [],
    };
}
exports.QueryCalcExitPoolCoinsFromSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        if (Array.isArray(object?.tokensOut))
            obj.tokensOut = object.tokensOut.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokensOut = message.tokensOut.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokensOut = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokensOut = object.tokensOut?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryPoolParamsRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryPoolParamsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsRequest();
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
        const obj = createBaseQueryPoolParamsRequest();
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
        const message = createBaseQueryPoolParamsRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryPoolParamsResponse() {
    return {
        params: undefined,
    };
}
exports.QueryPoolParamsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            any_1.Any.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPoolParamsResponse();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = any_1.Any.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? any_1.Any.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = any_1.Any.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryTotalPoolLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityRequest();
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
        const obj = createBaseQueryTotalPoolLiquidityRequest();
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
        const message = createBaseQueryTotalPoolLiquidityRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryTotalPoolLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.QueryTotalPoolLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTotalPoolLiquidityResponse();
        if (Array.isArray(object?.liquidity))
            obj.liquidity = object.liquidity.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryTotalSharesRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryTotalSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesRequest();
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
        const obj = createBaseQueryTotalSharesRequest();
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
        const message = createBaseQueryTotalSharesRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryTotalSharesResponse() {
    return {
        totalShares: coin_1.Coin.fromPartial({}),
    };
}
exports.QueryTotalSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalShares !== undefined) {
            coin_1.Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTotalSharesResponse();
        if ((0, helpers_1.isSet)(object.totalShares))
            obj.totalShares = coin_1.Coin.fromJSON(object.totalShares);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalShares !== undefined &&
            (obj.totalShares = message.totalShares ? coin_1.Coin.toJSON(message.totalShares) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSharesResponse();
        if (object.totalShares !== undefined && object.totalShares !== null) {
            message.totalShares = coin_1.Coin.fromPartial(object.totalShares);
        }
        return message;
    },
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: [],
    };
}
exports.QueryCalcJoinPoolNoSwapSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if (Array.isArray(object?.tokensIn))
            obj.tokensIn = object.tokensIn.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        if (message.tokensIn) {
            obj.tokensIn = message.tokensIn.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokensIn = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokensIn = object.tokensIn?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
    return {
        tokensOut: [],
        sharesOut: "",
    };
}
exports.QueryCalcJoinPoolNoSwapSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharesOut !== "") {
            writer.uint32(18).string(message.sharesOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sharesOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        if (Array.isArray(object?.tokensOut))
            obj.tokensOut = object.tokensOut.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.sharesOut))
            obj.sharesOut = String(object.sharesOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokensOut = message.tokensOut.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokensOut = [];
        }
        message.sharesOut !== undefined && (obj.sharesOut = message.sharesOut);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokensOut = object.tokensOut?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.sharesOut = object.sharesOut ?? "";
        return message;
    },
};
function createBaseQuerySpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: "",
        quoteAssetDenom: "",
    };
}
exports.QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAssetDenom !== "") {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        if (message.quoteAssetDenom !== "") {
            writer.uint32(26).string(message.quoteAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                case 3:
                    message.quoteAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySpotPriceRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.baseAssetDenom))
            obj.baseAssetDenom = String(object.baseAssetDenom);
        if ((0, helpers_1.isSet)(object.quoteAssetDenom))
            obj.quoteAssetDenom = String(object.quoteAssetDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
        message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.baseAssetDenom = object.baseAssetDenom ?? "";
        message.quoteAssetDenom = object.quoteAssetDenom ?? "";
        return message;
    },
};
function createBaseQueryPoolsWithFilterRequest() {
    return {
        minLiquidity: "",
        poolType: "",
        pagination: undefined,
    };
}
exports.QueryPoolsWithFilterRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minLiquidity !== "") {
            writer.uint32(10).string(message.minLiquidity);
        }
        if (message.poolType !== "") {
            writer.uint32(18).string(message.poolType);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minLiquidity = reader.string();
                    break;
                case 2:
                    message.poolType = reader.string();
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
        const obj = createBaseQueryPoolsWithFilterRequest();
        if ((0, helpers_1.isSet)(object.minLiquidity))
            obj.minLiquidity = String(object.minLiquidity);
        if ((0, helpers_1.isSet)(object.poolType))
            obj.poolType = String(object.poolType);
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.minLiquidity !== undefined && (obj.minLiquidity = message.minLiquidity);
        message.poolType !== undefined && (obj.poolType = message.poolType);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsWithFilterRequest();
        message.minLiquidity = object.minLiquidity ?? "";
        message.poolType = object.poolType ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryPoolsWithFilterResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
exports.QueryPoolsWithFilterResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
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
        const message = createBaseQueryPoolsWithFilterResponse();
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
        const obj = createBaseQueryPoolsWithFilterResponse();
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
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools = object.pools?.map((e) => any_1.Any.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQuerySpotPriceResponse() {
    return {
        spotPrice: "",
    };
}
exports.QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySpotPriceResponse();
        if ((0, helpers_1.isSet)(object.spotPrice))
            obj.spotPrice = String(object.spotPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceResponse();
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
};
function createBaseQuerySwapExactAmountInRequest() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: "",
        routes: [],
    };
}
exports.QuerySwapExactAmountInRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(26).string(message.tokenIn);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenIn = reader.string();
                    break;
                case 4:
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySwapExactAmountInRequest();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? swap_route_1.SwapAmountInRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountInRequest();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenIn = object.tokenIn ?? "";
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQuerySwapExactAmountInResponse() {
    return {
        tokenOutAmount: "",
    };
}
exports.QuerySwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySwapExactAmountInResponse();
        if ((0, helpers_1.isSet)(object.tokenOutAmount))
            obj.tokenOutAmount = String(object.tokenOutAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
};
function createBaseQuerySwapExactAmountOutRequest() {
    return {
        sender: "",
        poolId: BigInt(0),
        routes: [],
        tokenOut: "",
    };
}
exports.QuerySwapExactAmountOutRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOut !== "") {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySwapExactAmountOutRequest();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = String(object.tokenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? swap_route_1.SwapAmountOutRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountOutRequest();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
};
function createBaseQuerySwapExactAmountOutResponse() {
    return {
        tokenInAmount: "",
    };
}
exports.QuerySwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySwapExactAmountOutResponse();
        if ((0, helpers_1.isSet)(object.tokenInAmount))
            obj.tokenInAmount = String(object.tokenInAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
};
function createBaseQueryTotalLiquidityRequest() {
    return {};
}
exports.QueryTotalLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityRequest();
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
        const obj = createBaseQueryTotalLiquidityRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryTotalLiquidityRequest();
        return message;
    },
};
function createBaseQueryTotalLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.QueryTotalLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTotalLiquidityResponse();
        if (Array.isArray(object?.liquidity))
            obj.liquidity = object.liquidity.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryConcentratedPoolIdLinkFromCFMMRequest() {
    return {
        cfmmPoolId: BigInt(0),
    };
}
exports.QueryConcentratedPoolIdLinkFromCFMMRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cfmmPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.cfmmPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
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
        const obj = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
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
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
        if (object.cfmmPoolId !== undefined && object.cfmmPoolId !== null) {
            message.cfmmPoolId = BigInt(object.cfmmPoolId.toString());
        }
        return message;
    },
};
function createBaseQueryConcentratedPoolIdLinkFromCFMMResponse() {
    return {
        concentratedPoolId: BigInt(0),
    };
}
exports.QueryConcentratedPoolIdLinkFromCFMMResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.concentratedPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.concentratedPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
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
        const obj = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
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
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
        if (object.concentratedPoolId !== undefined && object.concentratedPoolId !== null) {
            message.concentratedPoolId = BigInt(object.concentratedPoolId.toString());
        }
        return message;
    },
};
function createBaseQueryCFMMConcentratedPoolLinksRequest() {
    return {};
}
exports.QueryCFMMConcentratedPoolLinksRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
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
        const obj = createBaseQueryCFMMConcentratedPoolLinksRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
        return message;
    },
};
function createBaseQueryCFMMConcentratedPoolLinksResponse() {
    return {
        migrationRecords: undefined,
    };
}
exports.QueryCFMMConcentratedPoolLinksResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.migrationRecords !== undefined) {
            shared_1.MigrationRecords.encode(message.migrationRecords, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.migrationRecords = shared_1.MigrationRecords.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCFMMConcentratedPoolLinksResponse();
        if ((0, helpers_1.isSet)(object.migrationRecords))
            obj.migrationRecords = shared_1.MigrationRecords.fromJSON(object.migrationRecords);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.migrationRecords !== undefined &&
            (obj.migrationRecords = message.migrationRecords
                ? shared_1.MigrationRecords.toJSON(message.migrationRecords)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
        if (object.migrationRecords !== undefined && object.migrationRecords !== null) {
            message.migrationRecords = shared_1.MigrationRecords.fromPartial(object.migrationRecords);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Pools = this.Pools.bind(this);
        this.NumPools = this.NumPools.bind(this);
        this.TotalLiquidity = this.TotalLiquidity.bind(this);
        this.PoolsWithFilter = this.PoolsWithFilter.bind(this);
        this.Pool = this.Pool.bind(this);
        this.PoolType = this.PoolType.bind(this);
        this.CalcJoinPoolNoSwapShares = this.CalcJoinPoolNoSwapShares.bind(this);
        this.CalcJoinPoolShares = this.CalcJoinPoolShares.bind(this);
        this.CalcExitPoolCoinsFromShares = this.CalcExitPoolCoinsFromShares.bind(this);
        this.PoolParams = this.PoolParams.bind(this);
        this.TotalPoolLiquidity = this.TotalPoolLiquidity.bind(this);
        this.TotalShares = this.TotalShares.bind(this);
        this.SpotPrice = this.SpotPrice.bind(this);
        this.EstimateSwapExactAmountIn = this.EstimateSwapExactAmountIn.bind(this);
        this.EstimateSwapExactAmountOut = this.EstimateSwapExactAmountOut.bind(this);
        this.ConcentratedPoolIdLinkFromCFMM = this.ConcentratedPoolIdLinkFromCFMM.bind(this);
        this.CFMMConcentratedPoolLinks = this.CFMMConcentratedPoolLinks.bind(this);
    }
    Pools(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pools", data);
        return promise.then((data) => exports.QueryPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    NumPools(request = {}) {
        const data = exports.QueryNumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "NumPools", data);
        return promise.then((data) => exports.QueryNumPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalLiquidity(request = {}) {
        const data = exports.QueryTotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalLiquidity", data);
        return promise.then((data) => exports.QueryTotalLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    PoolsWithFilter(request) {
        const data = exports.QueryPoolsWithFilterRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolsWithFilter", data);
        return promise.then((data) => exports.QueryPoolsWithFilterResponse.decode(new binary_1.BinaryReader(data)));
    }
    Pool(request) {
        const data = exports.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pool", data);
        return promise.then((data) => exports.QueryPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    PoolType(request) {
        const data = exports.QueryPoolTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolType", data);
        return promise.then((data) => exports.QueryPoolTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    CalcJoinPoolNoSwapShares(request) {
        const data = exports.QueryCalcJoinPoolNoSwapSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolNoSwapShares", data);
        return promise.then((data) => exports.QueryCalcJoinPoolNoSwapSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    CalcJoinPoolShares(request) {
        const data = exports.QueryCalcJoinPoolSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolShares", data);
        return promise.then((data) => exports.QueryCalcJoinPoolSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    CalcExitPoolCoinsFromShares(request) {
        const data = exports.QueryCalcExitPoolCoinsFromSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcExitPoolCoinsFromShares", data);
        return promise.then((data) => exports.QueryCalcExitPoolCoinsFromSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    PoolParams(request) {
        const data = exports.QueryPoolParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolParams", data);
        return promise.then((data) => exports.QueryPoolParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalPoolLiquidity(request) {
        const data = exports.QueryTotalPoolLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalPoolLiquidity", data);
        return promise.then((data) => exports.QueryTotalPoolLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalShares(request) {
        const data = exports.QueryTotalSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalShares", data);
        return promise.then((data) => exports.QueryTotalSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    SpotPrice(request) {
        const data = exports.QuerySpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "SpotPrice", data);
        return promise.then((data) => exports.QuerySpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSwapExactAmountIn(request) {
        const data = exports.QuerySwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountIn", data);
        return promise.then((data) => exports.QuerySwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSwapExactAmountOut(request) {
        const data = exports.QuerySwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountOut", data);
        return promise.then((data) => exports.QuerySwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    ConcentratedPoolIdLinkFromCFMM(request) {
        const data = exports.QueryConcentratedPoolIdLinkFromCFMMRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "ConcentratedPoolIdLinkFromCFMM", data);
        return promise.then((data) => exports.QueryConcentratedPoolIdLinkFromCFMMResponse.decode(new binary_1.BinaryReader(data)));
    }
    CFMMConcentratedPoolLinks(request = {}) {
        const data = exports.QueryCFMMConcentratedPoolLinksRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CFMMConcentratedPoolLinks", data);
        return promise.then((data) => exports.QueryCFMMConcentratedPoolLinksResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map