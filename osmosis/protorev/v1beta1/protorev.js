"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclicArbTracker = exports.AllProtocolRevenue = exports.BaseDenoms = exports.BaseDenom = exports.WeightMap = exports.CosmwasmPoolInfo = exports.ConcentratedPoolInfo = exports.BalancerPoolInfo = exports.StablePoolInfo = exports.InfoByPoolType = exports.PoolWeights = exports.RouteStatistics = exports.Trade = exports.Route = exports.TokenPairArbRoutes = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("../../poolmanager/v1beta1/genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.protorev.v1beta1";
function createBaseTokenPairArbRoutes() {
    return {
        arbRoutes: [],
        tokenIn: "",
        tokenOut: "",
    };
}
exports.TokenPairArbRoutes = {
    typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.arbRoutes) {
            exports.Route.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOut !== "") {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPairArbRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arbRoutes.push(exports.Route.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tokenIn = reader.string();
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
        const obj = createBaseTokenPairArbRoutes();
        if (Array.isArray(object?.arbRoutes))
            obj.arbRoutes = object.arbRoutes.map((e) => exports.Route.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = String(object.tokenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.arbRoutes) {
            obj.arbRoutes = message.arbRoutes.map((e) => (e ? exports.Route.toJSON(e) : undefined));
        }
        else {
            obj.arbRoutes = [];
        }
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenPairArbRoutes();
        message.arbRoutes = object.arbRoutes?.map((e) => exports.Route.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn ?? "";
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
};
function createBaseRoute() {
    return {
        trades: [],
        stepSize: "",
    };
}
exports.Route = {
    typeUrl: "/osmosis.protorev.v1beta1.Route",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.trades) {
            exports.Trade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.stepSize !== "") {
            writer.uint32(18).string(message.stepSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.Trade.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stepSize = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRoute();
        if (Array.isArray(object?.trades))
            obj.trades = object.trades.map((e) => exports.Trade.fromJSON(e));
        if ((0, helpers_1.isSet)(object.stepSize))
            obj.stepSize = String(object.stepSize);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map((e) => (e ? exports.Trade.toJSON(e) : undefined));
        }
        else {
            obj.trades = [];
        }
        message.stepSize !== undefined && (obj.stepSize = message.stepSize);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRoute();
        message.trades = object.trades?.map((e) => exports.Trade.fromPartial(e)) || [];
        message.stepSize = object.stepSize ?? "";
        return message;
    },
};
function createBaseTrade() {
    return {
        pool: BigInt(0),
        tokenIn: "",
        tokenOut: "",
    };
}
exports.Trade = {
    typeUrl: "/osmosis.protorev.v1beta1.Trade",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool);
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOut !== "") {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = reader.uint64();
                    break;
                case 2:
                    message.tokenIn = reader.string();
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
        const obj = createBaseTrade();
        if ((0, helpers_1.isSet)(object.pool))
            obj.pool = BigInt(object.pool.toString());
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = String(object.tokenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = (message.pool || BigInt(0)).toString());
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTrade();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = BigInt(object.pool.toString());
        }
        message.tokenIn = object.tokenIn ?? "";
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
};
function createBaseRouteStatistics() {
    return {
        profits: [],
        numberOfTrades: "",
        route: [],
    };
}
exports.RouteStatistics = {
    typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numberOfTrades !== "") {
            writer.uint32(18).string(message.numberOfTrades);
        }
        writer.uint32(26).fork();
        for (const v of message.route) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numberOfTrades = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.route.push(reader.uint64());
                        }
                    }
                    else {
                        message.route.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRouteStatistics();
        if (Array.isArray(object?.profits))
            obj.profits = object.profits.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.numberOfTrades))
            obj.numberOfTrades = String(object.numberOfTrades);
        if (Array.isArray(object?.route))
            obj.route = object.route.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.profits = [];
        }
        message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
        if (message.route) {
            obj.route = message.route.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.route = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRouteStatistics();
        message.profits = object.profits?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.numberOfTrades = object.numberOfTrades ?? "";
        message.route = object.route?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBasePoolWeights() {
    return {
        stableWeight: BigInt(0),
        balancerWeight: BigInt(0),
        concentratedWeight: BigInt(0),
        cosmwasmWeight: BigInt(0),
    };
}
exports.PoolWeights = {
    typeUrl: "/osmosis.protorev.v1beta1.PoolWeights",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stableWeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.stableWeight);
        }
        if (message.balancerWeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.balancerWeight);
        }
        if (message.concentratedWeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.concentratedWeight);
        }
        if (message.cosmwasmWeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.cosmwasmWeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolWeights();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableWeight = reader.uint64();
                    break;
                case 2:
                    message.balancerWeight = reader.uint64();
                    break;
                case 3:
                    message.concentratedWeight = reader.uint64();
                    break;
                case 4:
                    message.cosmwasmWeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolWeights();
        if ((0, helpers_1.isSet)(object.stableWeight))
            obj.stableWeight = BigInt(object.stableWeight.toString());
        if ((0, helpers_1.isSet)(object.balancerWeight))
            obj.balancerWeight = BigInt(object.balancerWeight.toString());
        if ((0, helpers_1.isSet)(object.concentratedWeight))
            obj.concentratedWeight = BigInt(object.concentratedWeight.toString());
        if ((0, helpers_1.isSet)(object.cosmwasmWeight))
            obj.cosmwasmWeight = BigInt(object.cosmwasmWeight.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.stableWeight !== undefined && (obj.stableWeight = (message.stableWeight || BigInt(0)).toString());
        message.balancerWeight !== undefined &&
            (obj.balancerWeight = (message.balancerWeight || BigInt(0)).toString());
        message.concentratedWeight !== undefined &&
            (obj.concentratedWeight = (message.concentratedWeight || BigInt(0)).toString());
        message.cosmwasmWeight !== undefined &&
            (obj.cosmwasmWeight = (message.cosmwasmWeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolWeights();
        if (object.stableWeight !== undefined && object.stableWeight !== null) {
            message.stableWeight = BigInt(object.stableWeight.toString());
        }
        if (object.balancerWeight !== undefined && object.balancerWeight !== null) {
            message.balancerWeight = BigInt(object.balancerWeight.toString());
        }
        if (object.concentratedWeight !== undefined && object.concentratedWeight !== null) {
            message.concentratedWeight = BigInt(object.concentratedWeight.toString());
        }
        if (object.cosmwasmWeight !== undefined && object.cosmwasmWeight !== null) {
            message.cosmwasmWeight = BigInt(object.cosmwasmWeight.toString());
        }
        return message;
    },
};
function createBaseInfoByPoolType() {
    return {
        stable: exports.StablePoolInfo.fromPartial({}),
        balancer: exports.BalancerPoolInfo.fromPartial({}),
        concentrated: exports.ConcentratedPoolInfo.fromPartial({}),
        cosmwasm: exports.CosmwasmPoolInfo.fromPartial({}),
    };
}
exports.InfoByPoolType = {
    typeUrl: "/osmosis.protorev.v1beta1.InfoByPoolType",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stable !== undefined) {
            exports.StablePoolInfo.encode(message.stable, writer.uint32(10).fork()).ldelim();
        }
        if (message.balancer !== undefined) {
            exports.BalancerPoolInfo.encode(message.balancer, writer.uint32(18).fork()).ldelim();
        }
        if (message.concentrated !== undefined) {
            exports.ConcentratedPoolInfo.encode(message.concentrated, writer.uint32(26).fork()).ldelim();
        }
        if (message.cosmwasm !== undefined) {
            exports.CosmwasmPoolInfo.encode(message.cosmwasm, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoByPoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stable = exports.StablePoolInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balancer = exports.BalancerPoolInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.concentrated = exports.ConcentratedPoolInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cosmwasm = exports.CosmwasmPoolInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseInfoByPoolType();
        if ((0, helpers_1.isSet)(object.stable))
            obj.stable = exports.StablePoolInfo.fromJSON(object.stable);
        if ((0, helpers_1.isSet)(object.balancer))
            obj.balancer = exports.BalancerPoolInfo.fromJSON(object.balancer);
        if ((0, helpers_1.isSet)(object.concentrated))
            obj.concentrated = exports.ConcentratedPoolInfo.fromJSON(object.concentrated);
        if ((0, helpers_1.isSet)(object.cosmwasm))
            obj.cosmwasm = exports.CosmwasmPoolInfo.fromJSON(object.cosmwasm);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.stable !== undefined &&
            (obj.stable = message.stable ? exports.StablePoolInfo.toJSON(message.stable) : undefined);
        message.balancer !== undefined &&
            (obj.balancer = message.balancer ? exports.BalancerPoolInfo.toJSON(message.balancer) : undefined);
        message.concentrated !== undefined &&
            (obj.concentrated = message.concentrated
                ? exports.ConcentratedPoolInfo.toJSON(message.concentrated)
                : undefined);
        message.cosmwasm !== undefined &&
            (obj.cosmwasm = message.cosmwasm ? exports.CosmwasmPoolInfo.toJSON(message.cosmwasm) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInfoByPoolType();
        if (object.stable !== undefined && object.stable !== null) {
            message.stable = exports.StablePoolInfo.fromPartial(object.stable);
        }
        if (object.balancer !== undefined && object.balancer !== null) {
            message.balancer = exports.BalancerPoolInfo.fromPartial(object.balancer);
        }
        if (object.concentrated !== undefined && object.concentrated !== null) {
            message.concentrated = exports.ConcentratedPoolInfo.fromPartial(object.concentrated);
        }
        if (object.cosmwasm !== undefined && object.cosmwasm !== null) {
            message.cosmwasm = exports.CosmwasmPoolInfo.fromPartial(object.cosmwasm);
        }
        return message;
    },
};
function createBaseStablePoolInfo() {
    return {
        weight: BigInt(0),
    };
}
exports.StablePoolInfo = {
    typeUrl: "/osmosis.protorev.v1beta1.StablePoolInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStablePoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseStablePoolInfo();
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = BigInt(object.weight.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStablePoolInfo();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight.toString());
        }
        return message;
    },
};
function createBaseBalancerPoolInfo() {
    return {
        weight: BigInt(0),
    };
}
exports.BalancerPoolInfo = {
    typeUrl: "/osmosis.protorev.v1beta1.BalancerPoolInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalancerPoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBalancerPoolInfo();
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = BigInt(object.weight.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBalancerPoolInfo();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight.toString());
        }
        return message;
    },
};
function createBaseConcentratedPoolInfo() {
    return {
        weight: BigInt(0),
        maxTicksCrossed: BigInt(0),
    };
}
exports.ConcentratedPoolInfo = {
    typeUrl: "/osmosis.protorev.v1beta1.ConcentratedPoolInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        if (message.maxTicksCrossed !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxTicksCrossed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConcentratedPoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                case 2:
                    message.maxTicksCrossed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConcentratedPoolInfo();
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = BigInt(object.weight.toString());
        if ((0, helpers_1.isSet)(object.maxTicksCrossed))
            obj.maxTicksCrossed = BigInt(object.maxTicksCrossed.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
        message.maxTicksCrossed !== undefined &&
            (obj.maxTicksCrossed = (message.maxTicksCrossed || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConcentratedPoolInfo();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight.toString());
        }
        if (object.maxTicksCrossed !== undefined && object.maxTicksCrossed !== null) {
            message.maxTicksCrossed = BigInt(object.maxTicksCrossed.toString());
        }
        return message;
    },
};
function createBaseCosmwasmPoolInfo() {
    return {
        weightMaps: [],
    };
}
exports.CosmwasmPoolInfo = {
    typeUrl: "/osmosis.protorev.v1beta1.CosmwasmPoolInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.weightMaps) {
            exports.WeightMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmwasmPoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weightMaps.push(exports.WeightMap.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCosmwasmPoolInfo();
        if (Array.isArray(object?.weightMaps))
            obj.weightMaps = object.weightMaps.map((e) => exports.WeightMap.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.weightMaps) {
            obj.weightMaps = message.weightMaps.map((e) => (e ? exports.WeightMap.toJSON(e) : undefined));
        }
        else {
            obj.weightMaps = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCosmwasmPoolInfo();
        message.weightMaps = object.weightMaps?.map((e) => exports.WeightMap.fromPartial(e)) || [];
        return message;
    },
};
function createBaseWeightMap() {
    return {
        weight: BigInt(0),
        contractAddress: "",
    };
}
exports.WeightMap = {
    typeUrl: "/osmosis.protorev.v1beta1.WeightMap",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightMap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseWeightMap();
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = BigInt(object.weight.toString());
        if ((0, helpers_1.isSet)(object.contractAddress))
            obj.contractAddress = String(object.contractAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWeightMap();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight.toString());
        }
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
};
function createBaseBaseDenom() {
    return {
        denom: "",
        stepSize: "",
    };
}
exports.BaseDenom = {
    typeUrl: "/osmosis.protorev.v1beta1.BaseDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.stepSize !== "") {
            writer.uint32(18).string(message.stepSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.stepSize = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBaseDenom();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.stepSize))
            obj.stepSize = String(object.stepSize);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.stepSize !== undefined && (obj.stepSize = message.stepSize);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBaseDenom();
        message.denom = object.denom ?? "";
        message.stepSize = object.stepSize ?? "";
        return message;
    },
};
function createBaseBaseDenoms() {
    return {
        baseDenoms: [],
    };
}
exports.BaseDenoms = {
    typeUrl: "/osmosis.protorev.v1beta1.BaseDenoms",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.baseDenoms) {
            exports.BaseDenom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseDenoms();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenoms.push(exports.BaseDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBaseDenoms();
        if (Array.isArray(object?.baseDenoms))
            obj.baseDenoms = object.baseDenoms.map((e) => exports.BaseDenom.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.baseDenoms) {
            obj.baseDenoms = message.baseDenoms.map((e) => (e ? exports.BaseDenom.toJSON(e) : undefined));
        }
        else {
            obj.baseDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBaseDenoms();
        message.baseDenoms = object.baseDenoms?.map((e) => exports.BaseDenom.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAllProtocolRevenue() {
    return {
        takerFeesTracker: genesis_1.TakerFeesTracker.fromPartial({}),
        cyclicArbTracker: exports.CyclicArbTracker.fromPartial({}),
    };
}
exports.AllProtocolRevenue = {
    typeUrl: "/osmosis.protorev.v1beta1.AllProtocolRevenue",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.takerFeesTracker !== undefined) {
            genesis_1.TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(10).fork()).ldelim();
        }
        if (message.cyclicArbTracker !== undefined) {
            exports.CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllProtocolRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFeesTracker = genesis_1.TakerFeesTracker.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cyclicArbTracker = exports.CyclicArbTracker.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAllProtocolRevenue();
        if ((0, helpers_1.isSet)(object.takerFeesTracker))
            obj.takerFeesTracker = genesis_1.TakerFeesTracker.fromJSON(object.takerFeesTracker);
        if ((0, helpers_1.isSet)(object.cyclicArbTracker))
            obj.cyclicArbTracker = exports.CyclicArbTracker.fromJSON(object.cyclicArbTracker);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.takerFeesTracker !== undefined &&
            (obj.takerFeesTracker = message.takerFeesTracker
                ? genesis_1.TakerFeesTracker.toJSON(message.takerFeesTracker)
                : undefined);
        message.cyclicArbTracker !== undefined &&
            (obj.cyclicArbTracker = message.cyclicArbTracker
                ? exports.CyclicArbTracker.toJSON(message.cyclicArbTracker)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllProtocolRevenue();
        if (object.takerFeesTracker !== undefined && object.takerFeesTracker !== null) {
            message.takerFeesTracker = genesis_1.TakerFeesTracker.fromPartial(object.takerFeesTracker);
        }
        if (object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null) {
            message.cyclicArbTracker = exports.CyclicArbTracker.fromPartial(object.cyclicArbTracker);
        }
        return message;
    },
};
function createBaseCyclicArbTracker() {
    return {
        cyclicArb: [],
        heightAccountingStartsFrom: BigInt(0),
    };
}
exports.CyclicArbTracker = {
    typeUrl: "/osmosis.protorev.v1beta1.CyclicArbTracker",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.cyclicArb) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.heightAccountingStartsFrom !== BigInt(0)) {
            writer.uint32(16).int64(message.heightAccountingStartsFrom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCyclicArbTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cyclicArb.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.heightAccountingStartsFrom = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCyclicArbTracker();
        if (Array.isArray(object?.cyclicArb))
            obj.cyclicArb = object.cyclicArb.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.heightAccountingStartsFrom))
            obj.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.cyclicArb) {
            obj.cyclicArb = message.cyclicArb.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.cyclicArb = [];
        }
        message.heightAccountingStartsFrom !== undefined &&
            (obj.heightAccountingStartsFrom = (message.heightAccountingStartsFrom || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCyclicArbTracker();
        message.cyclicArb = object.cyclicArb?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.heightAccountingStartsFrom !== undefined && object.heightAccountingStartsFrom !== null) {
            message.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
        }
        return message;
    },
};
//# sourceMappingURL=protorev.js.map