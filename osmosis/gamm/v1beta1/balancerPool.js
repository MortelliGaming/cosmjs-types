"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.PoolAsset = exports.PoolParams = exports.SmoothWeightChangeParams = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.gamm.v1beta1";
function createBaseSmoothWeightChangeParams() {
    return {
        startTime: timestamp_1.Timestamp.fromPartial({}),
        duration: duration_1.Duration.fromPartial({}),
        initialPoolWeights: [],
        targetPoolWeights: [],
    };
}
exports.SmoothWeightChangeParams = {
    typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initialPoolWeights) {
            exports.PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.targetPoolWeights) {
            exports.PoolAsset.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSmoothWeightChangeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialPoolWeights.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.targetPoolWeights.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSmoothWeightChangeParams();
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        if (Array.isArray(object?.initialPoolWeights))
            obj.initialPoolWeights = object.initialPoolWeights.map((e) => exports.PoolAsset.fromJSON(e));
        if (Array.isArray(object?.targetPoolWeights))
            obj.targetPoolWeights = object.targetPoolWeights.map((e) => exports.PoolAsset.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        if (message.initialPoolWeights) {
            obj.initialPoolWeights = message.initialPoolWeights.map((e) => (e ? exports.PoolAsset.toJSON(e) : undefined));
        }
        else {
            obj.initialPoolWeights = [];
        }
        if (message.targetPoolWeights) {
            obj.targetPoolWeights = message.targetPoolWeights.map((e) => (e ? exports.PoolAsset.toJSON(e) : undefined));
        }
        else {
            obj.targetPoolWeights = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSmoothWeightChangeParams();
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        message.initialPoolWeights = object.initialPoolWeights?.map((e) => exports.PoolAsset.fromPartial(e)) || [];
        message.targetPoolWeights = object.targetPoolWeights?.map((e) => exports.PoolAsset.fromPartial(e)) || [];
        return message;
    },
};
function createBasePoolParams() {
    return {
        swapFee: "",
        exitFee: "",
        smoothWeightChangeParams: undefined,
    };
}
exports.PoolParams = {
    typeUrl: "/osmosis.gamm.v1beta1.PoolParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapFee !== "") {
            writer.uint32(10).string(message.swapFee);
        }
        if (message.exitFee !== "") {
            writer.uint32(18).string(message.exitFee);
        }
        if (message.smoothWeightChangeParams !== undefined) {
            exports.SmoothWeightChangeParams.encode(message.smoothWeightChangeParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapFee = reader.string();
                    break;
                case 2:
                    message.exitFee = reader.string();
                    break;
                case 3:
                    message.smoothWeightChangeParams = exports.SmoothWeightChangeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolParams();
        if ((0, helpers_1.isSet)(object.swapFee))
            obj.swapFee = String(object.swapFee);
        if ((0, helpers_1.isSet)(object.exitFee))
            obj.exitFee = String(object.exitFee);
        if ((0, helpers_1.isSet)(object.smoothWeightChangeParams))
            obj.smoothWeightChangeParams = exports.SmoothWeightChangeParams.fromJSON(object.smoothWeightChangeParams);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        message.exitFee !== undefined && (obj.exitFee = message.exitFee);
        message.smoothWeightChangeParams !== undefined &&
            (obj.smoothWeightChangeParams = message.smoothWeightChangeParams
                ? exports.SmoothWeightChangeParams.toJSON(message.smoothWeightChangeParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolParams();
        message.swapFee = object.swapFee ?? "";
        message.exitFee = object.exitFee ?? "";
        if (object.smoothWeightChangeParams !== undefined && object.smoothWeightChangeParams !== null) {
            message.smoothWeightChangeParams = exports.SmoothWeightChangeParams.fromPartial(object.smoothWeightChangeParams);
        }
        return message;
    },
};
function createBasePoolAsset() {
    return {
        token: coin_1.Coin.fromPartial({}),
        weight: "",
    };
}
exports.PoolAsset = {
    typeUrl: "/osmosis.gamm.v1beta1.PoolAsset",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolAsset();
        if ((0, helpers_1.isSet)(object.token))
            obj.token = coin_1.Coin.fromJSON(object.token);
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = String(object.weight);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolAsset();
        if (object.token !== undefined && object.token !== null) {
            message.token = coin_1.Coin.fromPartial(object.token);
        }
        message.weight = object.weight ?? "";
        return message;
    },
};
function createBasePool() {
    return {
        address: "",
        id: BigInt(0),
        poolParams: exports.PoolParams.fromPartial({}),
        futurePoolGovernor: "",
        totalShares: coin_1.Coin.fromPartial({}),
        poolAssets: [],
        totalWeight: "",
    };
}
exports.Pool = {
    typeUrl: "/osmosis.gamm.v1beta1.Pool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.poolParams !== undefined) {
            exports.PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
        }
        if (message.futurePoolGovernor !== "") {
            writer.uint32(34).string(message.futurePoolGovernor);
        }
        if (message.totalShares !== undefined) {
            coin_1.Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.poolAssets) {
            exports.PoolAsset.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.totalWeight !== "") {
            writer.uint32(58).string(message.totalWeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.poolParams = exports.PoolParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 5:
                    message.totalShares = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.poolAssets.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalWeight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePool();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_1.isSet)(object.poolParams))
            obj.poolParams = exports.PoolParams.fromJSON(object.poolParams);
        if ((0, helpers_1.isSet)(object.futurePoolGovernor))
            obj.futurePoolGovernor = String(object.futurePoolGovernor);
        if ((0, helpers_1.isSet)(object.totalShares))
            obj.totalShares = coin_1.Coin.fromJSON(object.totalShares);
        if (Array.isArray(object?.poolAssets))
            obj.poolAssets = object.poolAssets.map((e) => exports.PoolAsset.fromJSON(e));
        if ((0, helpers_1.isSet)(object.totalWeight))
            obj.totalWeight = String(object.totalWeight);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.poolParams !== undefined &&
            (obj.poolParams = message.poolParams ? exports.PoolParams.toJSON(message.poolParams) : undefined);
        message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
        message.totalShares !== undefined &&
            (obj.totalShares = message.totalShares ? coin_1.Coin.toJSON(message.totalShares) : undefined);
        if (message.poolAssets) {
            obj.poolAssets = message.poolAssets.map((e) => (e ? exports.PoolAsset.toJSON(e) : undefined));
        }
        else {
            obj.poolAssets = [];
        }
        message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.address = object.address ?? "";
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        if (object.poolParams !== undefined && object.poolParams !== null) {
            message.poolParams = exports.PoolParams.fromPartial(object.poolParams);
        }
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        if (object.totalShares !== undefined && object.totalShares !== null) {
            message.totalShares = coin_1.Coin.fromPartial(object.totalShares);
        }
        message.poolAssets = object.poolAssets?.map((e) => exports.PoolAsset.fromPartial(e)) || [];
        message.totalWeight = object.totalWeight ?? "";
        return message;
    },
};
//# sourceMappingURL=balancerPool.js.map