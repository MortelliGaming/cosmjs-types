"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.EstimateTradeBasedOnPriceImpactResponse = exports.EstimateTradeBasedOnPriceImpactRequest = exports.TradingPairTakerFeeResponse = exports.TradingPairTakerFeeRequest = exports.TotalVolumeForPoolResponse = exports.TotalVolumeForPoolRequest = exports.TotalLiquidityResponse = exports.TotalLiquidityRequest = exports.TotalPoolLiquidityResponse = exports.TotalPoolLiquidityRequest = exports.SpotPriceResponse = exports.SpotPriceRequest = exports.ListPoolsByDenomResponse = exports.ListPoolsByDenomRequest = exports.AllPoolsResponse = exports.AllPoolsRequest = exports.PoolResponse = exports.PoolRequest = exports.NumPoolsResponse = exports.NumPoolsRequest = exports.EstimateSwapExactAmountOutResponse = exports.EstimateSinglePoolSwapExactAmountOutRequest = exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest = exports.EstimateSwapExactAmountOutRequest = exports.EstimateSwapExactAmountInResponse = exports.EstimateSinglePoolSwapExactAmountInRequest = exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest = exports.EstimateSwapExactAmountInRequest = exports.ParamsResponse = exports.ParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const swap_route_1 = require("./swap_route");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolmanager.v1beta1";
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.ParamsRequest",
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
        params: genesis_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.ParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
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
            obj.params = genesis_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? genesis_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseEstimateSwapExactAmountInRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: "",
        routes: [],
    };
}
exports.EstimateSwapExactAmountInRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const message = createBaseEstimateSwapExactAmountInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
        const obj = createBaseEstimateSwapExactAmountInRequest();
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
        const message = createBaseEstimateSwapExactAmountInRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenIn = object.tokenIn ?? "";
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: "",
        routesPoolId: [],
        routesTokenOutDenom: [],
    };
}
exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        writer.uint32(26).fork();
        for (const v of message.routesPoolId) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.routesTokenOutDenom) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.routesPoolId.push(reader.uint64());
                        }
                    }
                    else {
                        message.routesPoolId.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.routesTokenOutDenom.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if (Array.isArray(object?.routesPoolId))
            obj.routesPoolId = object.routesPoolId.map((e) => BigInt(e.toString()));
        if (Array.isArray(object?.routesTokenOutDenom))
            obj.routesTokenOutDenom = object.routesTokenOutDenom.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        if (message.routesPoolId) {
            obj.routesPoolId = message.routesPoolId.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.routesPoolId = [];
        }
        if (message.routesTokenOutDenom) {
            obj.routesTokenOutDenom = message.routesTokenOutDenom.map((e) => e);
        }
        else {
            obj.routesTokenOutDenom = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenIn = object.tokenIn ?? "";
        message.routesPoolId = object.routesPoolId?.map((e) => BigInt(e.toString())) || [];
        message.routesTokenOutDenom = object.routesTokenOutDenom?.map((e) => e) || [];
        return message;
    },
};
function createBaseEstimateSinglePoolSwapExactAmountInRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: "",
        tokenOutDenom: "",
    };
}
exports.EstimateSinglePoolSwapExactAmountInRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
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
                    message.tokenOutDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEstimateSinglePoolSwapExactAmountInRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_1.isSet)(object.tokenOutDenom))
            obj.tokenOutDenom = String(object.tokenOutDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenIn = object.tokenIn ?? "";
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        return message;
    },
};
function createBaseEstimateSwapExactAmountInResponse() {
    return {
        tokenOutAmount: "",
    };
}
exports.EstimateSwapExactAmountInResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInResponse();
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
        const obj = createBaseEstimateSwapExactAmountInResponse();
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
        const message = createBaseEstimateSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
};
function createBaseEstimateSwapExactAmountOutRequest() {
    return {
        poolId: BigInt(0),
        routes: [],
        tokenOut: "",
    };
}
exports.EstimateSwapExactAmountOutRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const message = createBaseEstimateSwapExactAmountOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
        const obj = createBaseEstimateSwapExactAmountOutRequest();
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
        const message = createBaseEstimateSwapExactAmountOutRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
};
function createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest() {
    return {
        poolId: BigInt(0),
        routesPoolId: [],
        routesTokenInDenom: [],
        tokenOut: "",
    };
}
exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        writer.uint32(18).fork();
        for (const v of message.routesPoolId) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.routesTokenInDenom) {
            writer.uint32(26).string(v);
        }
        if (message.tokenOut !== "") {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.routesPoolId.push(reader.uint64());
                        }
                    }
                    else {
                        message.routesPoolId.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.routesTokenInDenom.push(reader.string());
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
        const obj = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if (Array.isArray(object?.routesPoolId))
            obj.routesPoolId = object.routesPoolId.map((e) => BigInt(e.toString()));
        if (Array.isArray(object?.routesTokenInDenom))
            obj.routesTokenInDenom = object.routesTokenInDenom.map((e) => String(e));
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = String(object.tokenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        if (message.routesPoolId) {
            obj.routesPoolId = message.routesPoolId.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.routesPoolId = [];
        }
        if (message.routesTokenInDenom) {
            obj.routesTokenInDenom = message.routesTokenInDenom.map((e) => e);
        }
        else {
            obj.routesTokenInDenom = [];
        }
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.routesPoolId = object.routesPoolId?.map((e) => BigInt(e.toString())) || [];
        message.routesTokenInDenom = object.routesTokenInDenom?.map((e) => e) || [];
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
};
function createBaseEstimateSinglePoolSwapExactAmountOutRequest() {
    return {
        poolId: BigInt(0),
        tokenInDenom: "",
        tokenOut: "",
    };
}
exports.EstimateSinglePoolSwapExactAmountOutRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        if (message.tokenOut !== "") {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
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
        const obj = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenInDenom))
            obj.tokenInDenom = String(object.tokenInDenom);
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = String(object.tokenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
};
function createBaseEstimateSwapExactAmountOutResponse() {
    return {
        tokenInAmount: "",
    };
}
exports.EstimateSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutResponse();
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
        const obj = createBaseEstimateSwapExactAmountOutResponse();
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
        const message = createBaseEstimateSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
};
function createBaseNumPoolsRequest() {
    return {};
}
exports.NumPoolsRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsRequest();
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
        const obj = createBaseNumPoolsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseNumPoolsRequest();
        return message;
    },
};
function createBaseNumPoolsResponse() {
    return {
        numPools: BigInt(0),
    };
}
exports.NumPoolsResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numPools !== BigInt(0)) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsResponse();
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
        const obj = createBaseNumPoolsResponse();
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
        const message = createBaseNumPoolsResponse();
        if (object.numPools !== undefined && object.numPools !== null) {
            message.numPools = BigInt(object.numPools.toString());
        }
        return message;
    },
};
function createBasePoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.PoolRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.PoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolRequest();
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
        const obj = createBasePoolRequest();
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
        const message = createBasePoolRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBasePoolResponse() {
    return {
        pool: undefined,
    };
}
exports.PoolResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.PoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            any_1.Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolResponse();
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
        const obj = createBasePoolResponse();
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
        const message = createBasePoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = any_1.Any.fromPartial(object.pool);
        }
        return message;
    },
};
function createBaseAllPoolsRequest() {
    return {};
}
exports.AllPoolsRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllPoolsRequest();
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
        const obj = createBaseAllPoolsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseAllPoolsRequest();
        return message;
    },
};
function createBaseAllPoolsResponse() {
    return {
        pools: [],
    };
}
exports.AllPoolsResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAllPoolsResponse();
        if (Array.isArray(object?.pools))
            obj.pools = object.pools.map((e) => any_1.Any.fromJSON(e));
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllPoolsResponse();
        message.pools = object.pools?.map((e) => any_1.Any.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListPoolsByDenomRequest() {
    return {
        denom: "",
    };
}
exports.ListPoolsByDenomRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPoolsByDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseListPoolsByDenomRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListPoolsByDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseListPoolsByDenomResponse() {
    return {
        pools: [],
    };
}
exports.ListPoolsByDenomResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPoolsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseListPoolsByDenomResponse();
        if (Array.isArray(object?.pools))
            obj.pools = object.pools.map((e) => any_1.Any.fromJSON(e));
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListPoolsByDenomResponse();
        message.pools = object.pools?.map((e) => any_1.Any.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: "",
        quoteAssetDenom: "",
    };
}
exports.SpotPriceRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceRequest",
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
        const message = createBaseSpotPriceRequest();
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
        const obj = createBaseSpotPriceRequest();
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
        const message = createBaseSpotPriceRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.baseAssetDenom = object.baseAssetDenom ?? "";
        message.quoteAssetDenom = object.quoteAssetDenom ?? "";
        return message;
    },
};
function createBaseSpotPriceResponse() {
    return {
        spotPrice: "",
    };
}
exports.SpotPriceResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceResponse();
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
        const obj = createBaseSpotPriceResponse();
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
        const message = createBaseSpotPriceResponse();
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
};
function createBaseTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.TotalPoolLiquidityRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalPoolLiquidityRequest();
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
        const obj = createBaseTotalPoolLiquidityRequest();
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
        const message = createBaseTotalPoolLiquidityRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseTotalPoolLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.TotalPoolLiquidityResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalPoolLiquidityResponse();
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
        const obj = createBaseTotalPoolLiquidityResponse();
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
        const message = createBaseTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTotalLiquidityRequest() {
    return {};
}
exports.TotalLiquidityRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalLiquidityRequest();
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
        const obj = createBaseTotalLiquidityRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseTotalLiquidityRequest();
        return message;
    },
};
function createBaseTotalLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.TotalLiquidityResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalLiquidityResponse();
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
        const obj = createBaseTotalLiquidityResponse();
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
        const message = createBaseTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTotalVolumeForPoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.TotalVolumeForPoolRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalVolumeForPoolRequest();
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
        const obj = createBaseTotalVolumeForPoolRequest();
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
        const message = createBaseTotalVolumeForPoolRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseTotalVolumeForPoolResponse() {
    return {
        volume: [],
    };
}
exports.TotalVolumeForPoolResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.volume) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalVolumeForPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volume.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTotalVolumeForPoolResponse();
        if (Array.isArray(object?.volume))
            obj.volume = object.volume.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.volume) {
            obj.volume = message.volume.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.volume = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTotalVolumeForPoolResponse();
        message.volume = object.volume?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTradingPairTakerFeeRequest() {
    return {
        denom0: "",
        denom1: "",
    };
}
exports.TradingPairTakerFeeRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom0 !== "") {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== "") {
            writer.uint32(18).string(message.denom1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingPairTakerFeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom0 = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTradingPairTakerFeeRequest();
        if ((0, helpers_1.isSet)(object.denom0))
            obj.denom0 = String(object.denom0);
        if ((0, helpers_1.isSet)(object.denom1))
            obj.denom1 = String(object.denom1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom0 !== undefined && (obj.denom0 = message.denom0);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTradingPairTakerFeeRequest();
        message.denom0 = object.denom0 ?? "";
        message.denom1 = object.denom1 ?? "";
        return message;
    },
};
function createBaseTradingPairTakerFeeResponse() {
    return {
        takerFee: "",
    };
}
exports.TradingPairTakerFeeResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.takerFee !== "") {
            writer.uint32(10).string(message.takerFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingPairTakerFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTradingPairTakerFeeResponse();
        if ((0, helpers_1.isSet)(object.takerFee))
            obj.takerFee = String(object.takerFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.takerFee !== undefined && (obj.takerFee = message.takerFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTradingPairTakerFeeResponse();
        message.takerFee = object.takerFee ?? "";
        return message;
    },
};
function createBaseEstimateTradeBasedOnPriceImpactRequest() {
    return {
        fromCoin: coin_1.Coin.fromPartial({}),
        toCoinDenom: "",
        poolId: BigInt(0),
        maxPriceImpact: "",
        externalPrice: "",
    };
}
exports.EstimateTradeBasedOnPriceImpactRequest = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromCoin !== undefined) {
            coin_1.Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.toCoinDenom !== "") {
            writer.uint32(18).string(message.toCoinDenom);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.maxPriceImpact !== "") {
            writer.uint32(34).string(message.maxPriceImpact);
        }
        if (message.externalPrice !== "") {
            writer.uint32(42).string(message.externalPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.toCoinDenom = reader.string();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.maxPriceImpact = reader.string();
                    break;
                case 5:
                    message.externalPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEstimateTradeBasedOnPriceImpactRequest();
        if ((0, helpers_1.isSet)(object.fromCoin))
            obj.fromCoin = coin_1.Coin.fromJSON(object.fromCoin);
        if ((0, helpers_1.isSet)(object.toCoinDenom))
            obj.toCoinDenom = String(object.toCoinDenom);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.maxPriceImpact))
            obj.maxPriceImpact = String(object.maxPriceImpact);
        if ((0, helpers_1.isSet)(object.externalPrice))
            obj.externalPrice = String(object.externalPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.fromCoin !== undefined &&
            (obj.fromCoin = message.fromCoin ? coin_1.Coin.toJSON(message.fromCoin) : undefined);
        message.toCoinDenom !== undefined && (obj.toCoinDenom = message.toCoinDenom);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.maxPriceImpact !== undefined && (obj.maxPriceImpact = message.maxPriceImpact);
        message.externalPrice !== undefined && (obj.externalPrice = message.externalPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
        if (object.fromCoin !== undefined && object.fromCoin !== null) {
            message.fromCoin = coin_1.Coin.fromPartial(object.fromCoin);
        }
        message.toCoinDenom = object.toCoinDenom ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.maxPriceImpact = object.maxPriceImpact ?? "";
        message.externalPrice = object.externalPrice ?? "";
        return message;
    },
};
function createBaseEstimateTradeBasedOnPriceImpactResponse() {
    return {
        inputCoin: coin_1.Coin.fromPartial({}),
        outputCoin: coin_1.Coin.fromPartial({}),
    };
}
exports.EstimateTradeBasedOnPriceImpactResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inputCoin !== undefined) {
            coin_1.Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.outputCoin !== undefined) {
            coin_1.Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.outputCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEstimateTradeBasedOnPriceImpactResponse();
        if ((0, helpers_1.isSet)(object.inputCoin))
            obj.inputCoin = coin_1.Coin.fromJSON(object.inputCoin);
        if ((0, helpers_1.isSet)(object.outputCoin))
            obj.outputCoin = coin_1.Coin.fromJSON(object.outputCoin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inputCoin !== undefined &&
            (obj.inputCoin = message.inputCoin ? coin_1.Coin.toJSON(message.inputCoin) : undefined);
        message.outputCoin !== undefined &&
            (obj.outputCoin = message.outputCoin ? coin_1.Coin.toJSON(message.outputCoin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
        if (object.inputCoin !== undefined && object.inputCoin !== null) {
            message.inputCoin = coin_1.Coin.fromPartial(object.inputCoin);
        }
        if (object.outputCoin !== undefined && object.outputCoin !== null) {
            message.outputCoin = coin_1.Coin.fromPartial(object.outputCoin);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.EstimateSwapExactAmountIn = this.EstimateSwapExactAmountIn.bind(this);
        this.EstimateSwapExactAmountInWithPrimitiveTypes =
            this.EstimateSwapExactAmountInWithPrimitiveTypes.bind(this);
        this.EstimateSinglePoolSwapExactAmountIn = this.EstimateSinglePoolSwapExactAmountIn.bind(this);
        this.EstimateSwapExactAmountOut = this.EstimateSwapExactAmountOut.bind(this);
        this.EstimateSwapExactAmountOutWithPrimitiveTypes =
            this.EstimateSwapExactAmountOutWithPrimitiveTypes.bind(this);
        this.EstimateSinglePoolSwapExactAmountOut = this.EstimateSinglePoolSwapExactAmountOut.bind(this);
        this.NumPools = this.NumPools.bind(this);
        this.Pool = this.Pool.bind(this);
        this.AllPools = this.AllPools.bind(this);
        this.ListPoolsByDenom = this.ListPoolsByDenom.bind(this);
        this.SpotPrice = this.SpotPrice.bind(this);
        this.TotalPoolLiquidity = this.TotalPoolLiquidity.bind(this);
        this.TotalLiquidity = this.TotalLiquidity.bind(this);
        this.TotalVolumeForPool = this.TotalVolumeForPool.bind(this);
        this.TradingPairTakerFee = this.TradingPairTakerFee.bind(this);
        this.EstimateTradeBasedOnPriceImpact = this.EstimateTradeBasedOnPriceImpact.bind(this);
    }
    Params(request = {}) {
        const data = exports.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSwapExactAmountIn(request) {
        const data = exports.EstimateSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountIn", data);
        return promise.then((data) => exports.EstimateSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSwapExactAmountInWithPrimitiveTypes(request) {
        const data = exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountInWithPrimitiveTypes", data);
        return promise.then((data) => exports.EstimateSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSinglePoolSwapExactAmountIn(request) {
        const data = exports.EstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountIn", data);
        return promise.then((data) => exports.EstimateSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSwapExactAmountOut(request) {
        const data = exports.EstimateSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountOut", data);
        return promise.then((data) => exports.EstimateSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSwapExactAmountOutWithPrimitiveTypes(request) {
        const data = exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSwapExactAmountOutWithPrimitiveTypes", data);
        return promise.then((data) => exports.EstimateSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSinglePoolSwapExactAmountOut(request) {
        const data = exports.EstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateSinglePoolSwapExactAmountOut", data);
        return promise.then((data) => exports.EstimateSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    NumPools(request = {}) {
        const data = exports.NumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "NumPools", data);
        return promise.then((data) => exports.NumPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    Pool(request) {
        const data = exports.PoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "Pool", data);
        return promise.then((data) => exports.PoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    AllPools(request = {}) {
        const data = exports.AllPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "AllPools", data);
        return promise.then((data) => exports.AllPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    ListPoolsByDenom(request) {
        const data = exports.ListPoolsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "ListPoolsByDenom", data);
        return promise.then((data) => exports.ListPoolsByDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    SpotPrice(request) {
        const data = exports.SpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "SpotPrice", data);
        return promise.then((data) => exports.SpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalPoolLiquidity(request) {
        const data = exports.TotalPoolLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalPoolLiquidity", data);
        return promise.then((data) => exports.TotalPoolLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalLiquidity(request = {}) {
        const data = exports.TotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalLiquidity", data);
        return promise.then((data) => exports.TotalLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalVolumeForPool(request) {
        const data = exports.TotalVolumeForPoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TotalVolumeForPool", data);
        return promise.then((data) => exports.TotalVolumeForPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    TradingPairTakerFee(request) {
        const data = exports.TradingPairTakerFeeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "TradingPairTakerFee", data);
        return promise.then((data) => exports.TradingPairTakerFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateTradeBasedOnPriceImpact(request) {
        const data = exports.EstimateTradeBasedOnPriceImpactRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Query", "EstimateTradeBasedOnPriceImpact", data);
        return promise.then((data) => exports.EstimateTradeBasedOnPriceImpactResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map