"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.PoolParams = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
exports.protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
function createBasePoolParams() {
    return {
        swapFee: "",
        exitFee: "",
    };
}
exports.PoolParams = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapFee !== "") {
            writer.uint32(10).string(message.swapFee);
        }
        if (message.exitFee !== "") {
            writer.uint32(18).string(message.exitFee);
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
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        message.exitFee !== undefined && (obj.exitFee = message.exitFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolParams();
        message.swapFee = object.swapFee ?? "";
        message.exitFee = object.exitFee ?? "";
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
        poolLiquidity: [],
        scalingFactors: [],
        scalingFactorController: "",
    };
}
exports.Pool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
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
        for (const v of message.poolLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.scalingFactorController !== "") {
            writer.uint32(66).string(message.scalingFactorController);
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
                    message.poolLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scalingFactors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scalingFactors.push(reader.uint64());
                    }
                    break;
                case 8:
                    message.scalingFactorController = reader.string();
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
        if (Array.isArray(object?.poolLiquidity))
            obj.poolLiquidity = object.poolLiquidity.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.scalingFactors))
            obj.scalingFactors = object.scalingFactors.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.scalingFactorController))
            obj.scalingFactorController = String(object.scalingFactorController);
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
        if (message.poolLiquidity) {
            obj.poolLiquidity = message.poolLiquidity.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.poolLiquidity = [];
        }
        if (message.scalingFactors) {
            obj.scalingFactors = message.scalingFactors.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.scalingFactors = [];
        }
        message.scalingFactorController !== undefined &&
            (obj.scalingFactorController = message.scalingFactorController);
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
        message.poolLiquidity = object.poolLiquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.scalingFactors = object.scalingFactors?.map((e) => BigInt(e.toString())) || [];
        message.scalingFactorController = object.scalingFactorController ?? "";
        return message;
    },
};
//# sourceMappingURL=stableswap_pool.js.map