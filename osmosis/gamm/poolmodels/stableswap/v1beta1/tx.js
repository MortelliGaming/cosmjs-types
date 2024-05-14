"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgStableSwapAdjustScalingFactorsResponse = exports.MsgStableSwapAdjustScalingFactors = exports.MsgCreateStableswapPoolResponse = exports.MsgCreateStableswapPool = exports.protobufPackage = void 0;
/* eslint-disable */
const stableswap_pool_1 = require("./stableswap_pool");
const coin_1 = require("../../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
exports.protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
function createBaseMsgCreateStableswapPool() {
    return {
        sender: "",
        poolParams: undefined,
        initialPoolLiquidity: [],
        scalingFactors: [],
        futurePoolGovernor: "",
        scalingFactorController: "",
    };
}
exports.MsgCreateStableswapPool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolParams !== undefined) {
            stableswap_pool_1.PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initialPoolLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.futurePoolGovernor !== "") {
            writer.uint32(42).string(message.futurePoolGovernor);
        }
        if (message.scalingFactorController !== "") {
            writer.uint32(50).string(message.scalingFactorController);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolParams = stableswap_pool_1.PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialPoolLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
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
                case 5:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 6:
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
        const obj = createBaseMsgCreateStableswapPool();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolParams))
            obj.poolParams = stableswap_pool_1.PoolParams.fromJSON(object.poolParams);
        if (Array.isArray(object?.initialPoolLiquidity))
            obj.initialPoolLiquidity = object.initialPoolLiquidity.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.scalingFactors))
            obj.scalingFactors = object.scalingFactors.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.futurePoolGovernor))
            obj.futurePoolGovernor = String(object.futurePoolGovernor);
        if ((0, helpers_1.isSet)(object.scalingFactorController))
            obj.scalingFactorController = String(object.scalingFactorController);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolParams !== undefined &&
            (obj.poolParams = message.poolParams ? stableswap_pool_1.PoolParams.toJSON(message.poolParams) : undefined);
        if (message.initialPoolLiquidity) {
            obj.initialPoolLiquidity = message.initialPoolLiquidity.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.initialPoolLiquidity = [];
        }
        if (message.scalingFactors) {
            obj.scalingFactors = message.scalingFactors.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.scalingFactors = [];
        }
        message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
        message.scalingFactorController !== undefined &&
            (obj.scalingFactorController = message.scalingFactorController);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStableswapPool();
        message.sender = object.sender ?? "";
        if (object.poolParams !== undefined && object.poolParams !== null) {
            message.poolParams = stableswap_pool_1.PoolParams.fromPartial(object.poolParams);
        }
        message.initialPoolLiquidity = object.initialPoolLiquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.scalingFactors = object.scalingFactors?.map((e) => BigInt(e.toString())) || [];
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        message.scalingFactorController = object.scalingFactorController ?? "";
        return message;
    },
};
function createBaseMsgCreateStableswapPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
exports.MsgCreateStableswapPoolResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPoolResponse();
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
        const obj = createBaseMsgCreateStableswapPoolResponse();
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
        const message = createBaseMsgCreateStableswapPoolResponse();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseMsgStableSwapAdjustScalingFactors() {
    return {
        sender: "",
        poolId: BigInt(0),
        scalingFactors: [],
    };
}
exports.MsgStableSwapAdjustScalingFactors = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        writer.uint32(26).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactors();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgStableSwapAdjustScalingFactors();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if (Array.isArray(object?.scalingFactors))
            obj.scalingFactors = object.scalingFactors.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        if (message.scalingFactors) {
            obj.scalingFactors = message.scalingFactors.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.scalingFactors = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.scalingFactors = object.scalingFactors?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseMsgStableSwapAdjustScalingFactorsResponse() {
    return {};
}
exports.MsgStableSwapAdjustScalingFactorsResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
        const obj = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateStableswapPool = this.CreateStableswapPool.bind(this);
        this.StableSwapAdjustScalingFactors = this.StableSwapAdjustScalingFactors.bind(this);
    }
    CreateStableswapPool(request) {
        const data = exports.MsgCreateStableswapPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "CreateStableswapPool", data);
        return promise.then((data) => exports.MsgCreateStableswapPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    StableSwapAdjustScalingFactors(request) {
        const data = exports.MsgStableSwapAdjustScalingFactors.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "StableSwapAdjustScalingFactors", data);
        return promise.then((data) => exports.MsgStableSwapAdjustScalingFactorsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map