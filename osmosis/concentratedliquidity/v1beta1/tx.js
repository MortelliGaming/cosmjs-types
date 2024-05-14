"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgTransferPositionsResponse = exports.MsgTransferPositions = exports.MsgFungifyChargedPositionsResponse = exports.MsgFungifyChargedPositions = exports.MsgCollectIncentivesResponse = exports.MsgCollectIncentives = exports.MsgCollectSpreadRewardsResponse = exports.MsgCollectSpreadRewards = exports.MsgWithdrawPositionResponse = exports.MsgWithdrawPosition = exports.MsgAddToPositionResponse = exports.MsgAddToPosition = exports.MsgCreatePositionResponse = exports.MsgCreatePosition = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.v1beta1";
function createBaseMsgCreatePosition() {
    return {
        poolId: BigInt(0),
        sender: "",
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
        tokensProvided: [],
        tokenMinAmount0: "",
        tokenMinAmount1: "",
    };
}
exports.MsgCreatePosition = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.lowerTick !== BigInt(0)) {
            writer.uint32(24).int64(message.lowerTick);
        }
        if (message.upperTick !== BigInt(0)) {
            writer.uint32(32).int64(message.upperTick);
        }
        for (const v of message.tokensProvided) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.tokenMinAmount0 !== "") {
            writer.uint32(50).string(message.tokenMinAmount0);
        }
        if (message.tokenMinAmount1 !== "") {
            writer.uint32(58).string(message.tokenMinAmount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.lowerTick = reader.int64();
                    break;
                case 4:
                    message.upperTick = reader.int64();
                    break;
                case 5:
                    message.tokensProvided.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.tokenMinAmount0 = reader.string();
                    break;
                case 7:
                    message.tokenMinAmount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreatePosition();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.lowerTick))
            obj.lowerTick = BigInt(object.lowerTick.toString());
        if ((0, helpers_1.isSet)(object.upperTick))
            obj.upperTick = BigInt(object.upperTick.toString());
        if (Array.isArray(object?.tokensProvided))
            obj.tokensProvided = object.tokensProvided.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenMinAmount0))
            obj.tokenMinAmount0 = String(object.tokenMinAmount0);
        if ((0, helpers_1.isSet)(object.tokenMinAmount1))
            obj.tokenMinAmount1 = String(object.tokenMinAmount1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
        message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
        if (message.tokensProvided) {
            obj.tokensProvided = message.tokensProvided.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokensProvided = [];
        }
        message.tokenMinAmount0 !== undefined && (obj.tokenMinAmount0 = message.tokenMinAmount0);
        message.tokenMinAmount1 !== undefined && (obj.tokenMinAmount1 = message.tokenMinAmount1);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePosition();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.sender = object.sender ?? "";
        if (object.lowerTick !== undefined && object.lowerTick !== null) {
            message.lowerTick = BigInt(object.lowerTick.toString());
        }
        if (object.upperTick !== undefined && object.upperTick !== null) {
            message.upperTick = BigInt(object.upperTick.toString());
        }
        message.tokensProvided = object.tokensProvided?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
        message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
        return message;
    },
};
function createBaseMsgCreatePositionResponse() {
    return {
        positionId: BigInt(0),
        amount0: "",
        amount1: "",
        liquidityCreated: "",
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
    };
}
exports.MsgCreatePositionResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.amount0 !== "") {
            writer.uint32(18).string(message.amount0);
        }
        if (message.amount1 !== "") {
            writer.uint32(26).string(message.amount1);
        }
        if (message.liquidityCreated !== "") {
            writer.uint32(42).string(message.liquidityCreated);
        }
        if (message.lowerTick !== BigInt(0)) {
            writer.uint32(48).int64(message.lowerTick);
        }
        if (message.upperTick !== BigInt(0)) {
            writer.uint32(56).int64(message.upperTick);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.amount0 = reader.string();
                    break;
                case 3:
                    message.amount1 = reader.string();
                    break;
                case 5:
                    message.liquidityCreated = reader.string();
                    break;
                case 6:
                    message.lowerTick = reader.int64();
                    break;
                case 7:
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
        const obj = createBaseMsgCreatePositionResponse();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.amount0))
            obj.amount0 = String(object.amount0);
        if ((0, helpers_1.isSet)(object.amount1))
            obj.amount1 = String(object.amount1);
        if ((0, helpers_1.isSet)(object.liquidityCreated))
            obj.liquidityCreated = String(object.liquidityCreated);
        if ((0, helpers_1.isSet)(object.lowerTick))
            obj.lowerTick = BigInt(object.lowerTick.toString());
        if ((0, helpers_1.isSet)(object.upperTick))
            obj.upperTick = BigInt(object.upperTick.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.amount0 !== undefined && (obj.amount0 = message.amount0);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        message.liquidityCreated !== undefined && (obj.liquidityCreated = message.liquidityCreated);
        message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
        message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePositionResponse();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        message.amount0 = object.amount0 ?? "";
        message.amount1 = object.amount1 ?? "";
        message.liquidityCreated = object.liquidityCreated ?? "";
        if (object.lowerTick !== undefined && object.lowerTick !== null) {
            message.lowerTick = BigInt(object.lowerTick.toString());
        }
        if (object.upperTick !== undefined && object.upperTick !== null) {
            message.upperTick = BigInt(object.upperTick.toString());
        }
        return message;
    },
};
function createBaseMsgAddToPosition() {
    return {
        positionId: BigInt(0),
        sender: "",
        amount0: "",
        amount1: "",
        tokenMinAmount0: "",
        tokenMinAmount1: "",
    };
}
exports.MsgAddToPosition = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.amount0 !== "") {
            writer.uint32(26).string(message.amount0);
        }
        if (message.amount1 !== "") {
            writer.uint32(34).string(message.amount1);
        }
        if (message.tokenMinAmount0 !== "") {
            writer.uint32(42).string(message.tokenMinAmount0);
        }
        if (message.tokenMinAmount1 !== "") {
            writer.uint32(50).string(message.tokenMinAmount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.amount0 = reader.string();
                    break;
                case 4:
                    message.amount1 = reader.string();
                    break;
                case 5:
                    message.tokenMinAmount0 = reader.string();
                    break;
                case 6:
                    message.tokenMinAmount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddToPosition();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.amount0))
            obj.amount0 = String(object.amount0);
        if ((0, helpers_1.isSet)(object.amount1))
            obj.amount1 = String(object.amount1);
        if ((0, helpers_1.isSet)(object.tokenMinAmount0))
            obj.tokenMinAmount0 = String(object.tokenMinAmount0);
        if ((0, helpers_1.isSet)(object.tokenMinAmount1))
            obj.tokenMinAmount1 = String(object.tokenMinAmount1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount0 !== undefined && (obj.amount0 = message.amount0);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        message.tokenMinAmount0 !== undefined && (obj.tokenMinAmount0 = message.tokenMinAmount0);
        message.tokenMinAmount1 !== undefined && (obj.tokenMinAmount1 = message.tokenMinAmount1);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToPosition();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        message.sender = object.sender ?? "";
        message.amount0 = object.amount0 ?? "";
        message.amount1 = object.amount1 ?? "";
        message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
        message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
        return message;
    },
};
function createBaseMsgAddToPositionResponse() {
    return {
        positionId: BigInt(0),
        amount0: "",
        amount1: "",
    };
}
exports.MsgAddToPositionResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.amount0 !== "") {
            writer.uint32(18).string(message.amount0);
        }
        if (message.amount1 !== "") {
            writer.uint32(26).string(message.amount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToPositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.amount0 = reader.string();
                    break;
                case 3:
                    message.amount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddToPositionResponse();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.amount0))
            obj.amount0 = String(object.amount0);
        if ((0, helpers_1.isSet)(object.amount1))
            obj.amount1 = String(object.amount1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.amount0 !== undefined && (obj.amount0 = message.amount0);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToPositionResponse();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        message.amount0 = object.amount0 ?? "";
        message.amount1 = object.amount1 ?? "";
        return message;
    },
};
function createBaseMsgWithdrawPosition() {
    return {
        positionId: BigInt(0),
        sender: "",
        liquidityAmount: "",
    };
}
exports.MsgWithdrawPosition = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.liquidityAmount !== "") {
            writer.uint32(26).string(message.liquidityAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.liquidityAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawPosition();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.liquidityAmount))
            obj.liquidityAmount = String(object.liquidityAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.liquidityAmount !== undefined && (obj.liquidityAmount = message.liquidityAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawPosition();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        message.sender = object.sender ?? "";
        message.liquidityAmount = object.liquidityAmount ?? "";
        return message;
    },
};
function createBaseMsgWithdrawPositionResponse() {
    return {
        amount0: "",
        amount1: "",
    };
}
exports.MsgWithdrawPositionResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount0 !== "") {
            writer.uint32(10).string(message.amount0);
        }
        if (message.amount1 !== "") {
            writer.uint32(18).string(message.amount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawPositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount0 = reader.string();
                    break;
                case 2:
                    message.amount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawPositionResponse();
        if ((0, helpers_1.isSet)(object.amount0))
            obj.amount0 = String(object.amount0);
        if ((0, helpers_1.isSet)(object.amount1))
            obj.amount1 = String(object.amount1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.amount0 !== undefined && (obj.amount0 = message.amount0);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawPositionResponse();
        message.amount0 = object.amount0 ?? "";
        message.amount1 = object.amount1 ?? "";
        return message;
    },
};
function createBaseMsgCollectSpreadRewards() {
    return {
        positionIds: [],
        sender: "",
    };
}
exports.MsgCollectSpreadRewards = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollectSpreadRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCollectSpreadRewards();
        if (Array.isArray(object?.positionIds))
            obj.positionIds = object.positionIds.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.positionIds) {
            obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.positionIds = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCollectSpreadRewards();
        message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgCollectSpreadRewardsResponse() {
    return {
        collectedSpreadRewards: [],
    };
}
exports.MsgCollectSpreadRewardsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.collectedSpreadRewards) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollectSpreadRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectedSpreadRewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCollectSpreadRewardsResponse();
        if (Array.isArray(object?.collectedSpreadRewards))
            obj.collectedSpreadRewards = object.collectedSpreadRewards.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.collectedSpreadRewards) {
            obj.collectedSpreadRewards = message.collectedSpreadRewards.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.collectedSpreadRewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCollectSpreadRewardsResponse();
        message.collectedSpreadRewards = object.collectedSpreadRewards?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgCollectIncentives() {
    return {
        positionIds: [],
        sender: "",
    };
}
exports.MsgCollectIncentives = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollectIncentives();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCollectIncentives();
        if (Array.isArray(object?.positionIds))
            obj.positionIds = object.positionIds.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.positionIds) {
            obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.positionIds = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCollectIncentives();
        message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgCollectIncentivesResponse() {
    return {
        collectedIncentives: [],
        forfeitedIncentives: [],
    };
}
exports.MsgCollectIncentivesResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.collectedIncentives) {
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
        const message = createBaseMsgCollectIncentivesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectedIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const obj = createBaseMsgCollectIncentivesResponse();
        if (Array.isArray(object?.collectedIncentives))
            obj.collectedIncentives = object.collectedIncentives.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.forfeitedIncentives))
            obj.forfeitedIncentives = object.forfeitedIncentives.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.collectedIncentives) {
            obj.collectedIncentives = message.collectedIncentives.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.collectedIncentives = [];
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
        const message = createBaseMsgCollectIncentivesResponse();
        message.collectedIncentives = object.collectedIncentives?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.forfeitedIncentives = object.forfeitedIncentives?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgFungifyChargedPositions() {
    return {
        positionIds: [],
        sender: "",
    };
}
exports.MsgFungifyChargedPositions = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFungifyChargedPositions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgFungifyChargedPositions();
        if (Array.isArray(object?.positionIds))
            obj.positionIds = object.positionIds.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.positionIds) {
            obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.positionIds = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgFungifyChargedPositions();
        message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgFungifyChargedPositionsResponse() {
    return {
        newPositionId: BigInt(0),
    };
}
exports.MsgFungifyChargedPositionsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.newPositionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.newPositionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFungifyChargedPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newPositionId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgFungifyChargedPositionsResponse();
        if ((0, helpers_1.isSet)(object.newPositionId))
            obj.newPositionId = BigInt(object.newPositionId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.newPositionId !== undefined &&
            (obj.newPositionId = (message.newPositionId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgFungifyChargedPositionsResponse();
        if (object.newPositionId !== undefined && object.newPositionId !== null) {
            message.newPositionId = BigInt(object.newPositionId.toString());
        }
        return message;
    },
};
function createBaseMsgTransferPositions() {
    return {
        positionIds: [],
        sender: "",
        newOwner: "",
    };
}
exports.MsgTransferPositions = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.newOwner !== "") {
            writer.uint32(26).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPositions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.newOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgTransferPositions();
        if (Array.isArray(object?.positionIds))
            obj.positionIds = object.positionIds.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.newOwner))
            obj.newOwner = String(object.newOwner);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.positionIds) {
            obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.positionIds = [];
        }
        message.sender !== undefined && (obj.sender = message.sender);
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferPositions();
        message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
        message.sender = object.sender ?? "";
        message.newOwner = object.newOwner ?? "";
        return message;
    },
};
function createBaseMsgTransferPositionsResponse() {
    return {};
}
exports.MsgTransferPositionsResponse = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPositionsResponse();
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
        const obj = createBaseMsgTransferPositionsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgTransferPositionsResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreatePosition = this.CreatePosition.bind(this);
        this.WithdrawPosition = this.WithdrawPosition.bind(this);
        this.AddToPosition = this.AddToPosition.bind(this);
        this.CollectSpreadRewards = this.CollectSpreadRewards.bind(this);
        this.CollectIncentives = this.CollectIncentives.bind(this);
        this.TransferPositions = this.TransferPositions.bind(this);
    }
    CreatePosition(request) {
        const data = exports.MsgCreatePosition.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CreatePosition", data);
        return promise.then((data) => exports.MsgCreatePositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    WithdrawPosition(request) {
        const data = exports.MsgWithdrawPosition.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "WithdrawPosition", data);
        return promise.then((data) => exports.MsgWithdrawPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    AddToPosition(request) {
        const data = exports.MsgAddToPosition.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "AddToPosition", data);
        return promise.then((data) => exports.MsgAddToPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    CollectSpreadRewards(request) {
        const data = exports.MsgCollectSpreadRewards.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectSpreadRewards", data);
        return promise.then((data) => exports.MsgCollectSpreadRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    CollectIncentives(request) {
        const data = exports.MsgCollectIncentives.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectIncentives", data);
        return promise.then((data) => exports.MsgCollectIncentivesResponse.decode(new binary_1.BinaryReader(data)));
    }
    TransferPositions(request) {
        const data = exports.MsgTransferPositions.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "TransferPositions", data);
        return promise.then((data) => exports.MsgTransferPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map