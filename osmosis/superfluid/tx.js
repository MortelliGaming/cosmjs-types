"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUnbondConvertAndStakeResponse = exports.MsgUnbondConvertAndStake = exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse = exports.MsgAddToConcentratedLiquiditySuperfluidPosition = exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse = exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition = exports.MsgUnPoolWhitelistedPoolResponse = exports.MsgUnPoolWhitelistedPool = exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse = exports.MsgCreateFullRangePositionAndSuperfluidDelegate = exports.MsgLockAndSuperfluidDelegateResponse = exports.MsgLockAndSuperfluidDelegate = exports.MsgSuperfluidUndelegateAndUnbondLockResponse = exports.MsgSuperfluidUndelegateAndUnbondLock = exports.MsgSuperfluidUnbondLockResponse = exports.MsgSuperfluidUnbondLock = exports.MsgSuperfluidUndelegateResponse = exports.MsgSuperfluidUndelegate = exports.MsgSuperfluidDelegateResponse = exports.MsgSuperfluidDelegate = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.superfluid";
function createBaseMsgSuperfluidDelegate() {
    return {
        sender: "",
        lockId: BigInt(0),
        valAddr: "",
    };
}
exports.MsgSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSuperfluidDelegate();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        if ((0, helpers_1.isSet)(object.valAddr))
            obj.valAddr = String(object.valAddr);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidDelegate();
        message.sender = object.sender ?? "";
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        message.valAddr = object.valAddr ?? "";
        return message;
    },
};
function createBaseMsgSuperfluidDelegateResponse() {
    return {};
}
exports.MsgSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegateResponse();
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
        const obj = createBaseMsgSuperfluidDelegateResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSuperfluidDelegateResponse();
        return message;
    },
};
function createBaseMsgSuperfluidUndelegate() {
    return {
        sender: "",
        lockId: BigInt(0),
    };
}
exports.MsgSuperfluidUndelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSuperfluidUndelegate();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        message.sender = object.sender ?? "";
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseMsgSuperfluidUndelegateResponse() {
    return {};
}
exports.MsgSuperfluidUndelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateResponse();
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
        const obj = createBaseMsgSuperfluidUndelegateResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSuperfluidUndelegateResponse();
        return message;
    },
};
function createBaseMsgSuperfluidUnbondLock() {
    return {
        sender: "",
        lockId: BigInt(0),
    };
}
exports.MsgSuperfluidUnbondLock = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSuperfluidUnbondLock();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        message.sender = object.sender ?? "";
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseMsgSuperfluidUnbondLockResponse() {
    return {};
}
exports.MsgSuperfluidUnbondLockResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLockResponse();
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
        const obj = createBaseMsgSuperfluidUnbondLockResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSuperfluidUnbondLockResponse();
        return message;
    },
};
function createBaseMsgSuperfluidUndelegateAndUnbondLock() {
    return {
        sender: "",
        lockId: BigInt(0),
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgSuperfluidUndelegateAndUnbondLock = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSuperfluidUndelegateAndUnbondLock();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        if ((0, helpers_1.isSet)(object.coin))
            obj.coin = coin_1.Coin.fromJSON(object.coin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
        message.sender = object.sender ?? "";
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromPartial(object.coin);
        }
        return message;
    },
};
function createBaseMsgSuperfluidUndelegateAndUnbondLockResponse() {
    return {
        lockId: BigInt(0),
    };
}
exports.MsgSuperfluidUndelegateAndUnbondLockResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseMsgLockAndSuperfluidDelegate() {
    return {
        sender: "",
        coins: [],
        valAddr: "",
    };
}
exports.MsgLockAndSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgLockAndSuperfluidDelegate();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.valAddr))
            obj.valAddr = String(object.valAddr);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.valAddr = object.valAddr ?? "";
        return message;
    },
};
function createBaseMsgLockAndSuperfluidDelegateResponse() {
    return {
        ID: BigInt(0),
    };
}
exports.MsgLockAndSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgLockAndSuperfluidDelegateResponse();
        if ((0, helpers_1.isSet)(object.ID))
            obj.ID = BigInt(object.ID.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID.toString());
        }
        return message;
    },
};
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegate() {
    return {
        sender: "",
        coins: [],
        valAddr: "",
        poolId: BigInt(0),
    };
}
exports.MsgCreateFullRangePositionAndSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(32).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                case 4:
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
        const obj = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.valAddr))
            obj.valAddr = String(object.valAddr);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.valAddr = object.valAddr ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse() {
    return {
        lockID: BigInt(0),
        positionID: BigInt(0),
    };
}
exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockID !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockID);
        }
        if (message.positionID !== BigInt(0)) {
            writer.uint32(16).uint64(message.positionID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockID = reader.uint64();
                    break;
                case 2:
                    message.positionID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
        if ((0, helpers_1.isSet)(object.lockID))
            obj.lockID = BigInt(object.lockID.toString());
        if ((0, helpers_1.isSet)(object.positionID))
            obj.positionID = BigInt(object.positionID.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
        message.positionID !== undefined && (obj.positionID = (message.positionID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
        if (object.lockID !== undefined && object.lockID !== null) {
            message.lockID = BigInt(object.lockID.toString());
        }
        if (object.positionID !== undefined && object.positionID !== null) {
            message.positionID = BigInt(object.positionID.toString());
        }
        return message;
    },
};
function createBaseMsgUnPoolWhitelistedPool() {
    return {
        sender: "",
        poolId: BigInt(0),
    };
}
exports.MsgUnPoolWhitelistedPool = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
        const obj = createBaseMsgUnPoolWhitelistedPool();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseMsgUnPoolWhitelistedPoolResponse() {
    return {
        exitedLockIds: [],
    };
}
exports.MsgUnPoolWhitelistedPoolResponse = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.exitedLockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.exitedLockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.exitedLockIds.push(reader.uint64());
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
        const obj = createBaseMsgUnPoolWhitelistedPoolResponse();
        if (Array.isArray(object?.exitedLockIds))
            obj.exitedLockIds = object.exitedLockIds.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.exitedLockIds) {
            obj.exitedLockIds = message.exitedLockIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.exitedLockIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exitedLockIds = object.exitedLockIds?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition() {
    return {
        sender: "",
        lockId: BigInt(0),
        sharesToMigrate: coin_1.Coin.fromPartial({}),
        tokenOutMins: [],
    };
}
exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition = {
    typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).int64(message.lockId);
        }
        if (message.sharesToMigrate !== undefined) {
            coin_1.Coin.encode(message.sharesToMigrate, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.tokenOutMins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.int64();
                    break;
                case 3:
                    message.sharesToMigrate = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        if ((0, helpers_1.isSet)(object.sharesToMigrate))
            obj.sharesToMigrate = coin_1.Coin.fromJSON(object.sharesToMigrate);
        if (Array.isArray(object?.tokenOutMins))
            obj.tokenOutMins = object.tokenOutMins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.sharesToMigrate !== undefined &&
            (obj.sharesToMigrate = message.sharesToMigrate ? coin_1.Coin.toJSON(message.sharesToMigrate) : undefined);
        if (message.tokenOutMins) {
            obj.tokenOutMins = message.tokenOutMins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokenOutMins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
        message.sender = object.sender ?? "";
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        if (object.sharesToMigrate !== undefined && object.sharesToMigrate !== null) {
            message.sharesToMigrate = coin_1.Coin.fromPartial(object.sharesToMigrate);
        }
        message.tokenOutMins = object.tokenOutMins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse() {
    return {
        amount0: "",
        amount1: "",
        liquidityCreated: "",
        joinTime: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse = {
    typeUrl: "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount0 !== "") {
            writer.uint32(10).string(message.amount0);
        }
        if (message.amount1 !== "") {
            writer.uint32(18).string(message.amount1);
        }
        if (message.liquidityCreated !== "") {
            writer.uint32(26).string(message.liquidityCreated);
        }
        if (message.joinTime !== undefined) {
            timestamp_1.Timestamp.encode(message.joinTime, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount0 = reader.string();
                    break;
                case 2:
                    message.amount1 = reader.string();
                    break;
                case 3:
                    message.liquidityCreated = reader.string();
                    break;
                case 4:
                    message.joinTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
        if ((0, helpers_1.isSet)(object.amount0))
            obj.amount0 = String(object.amount0);
        if ((0, helpers_1.isSet)(object.amount1))
            obj.amount1 = String(object.amount1);
        if ((0, helpers_1.isSet)(object.liquidityCreated))
            obj.liquidityCreated = String(object.liquidityCreated);
        if ((0, helpers_1.isSet)(object.joinTime))
            obj.joinTime = (0, helpers_1.fromJsonTimestamp)(object.joinTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.amount0 !== undefined && (obj.amount0 = message.amount0);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        message.liquidityCreated !== undefined && (obj.liquidityCreated = message.liquidityCreated);
        message.joinTime !== undefined && (obj.joinTime = (0, helpers_1.fromTimestamp)(message.joinTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
        message.amount0 = object.amount0 ?? "";
        message.amount1 = object.amount1 ?? "";
        message.liquidityCreated = object.liquidityCreated ?? "";
        if (object.joinTime !== undefined && object.joinTime !== null) {
            message.joinTime = timestamp_1.Timestamp.fromPartial(object.joinTime);
        }
        return message;
    },
};
function createBaseMsgAddToConcentratedLiquiditySuperfluidPosition() {
    return {
        positionId: BigInt(0),
        sender: "",
        tokenDesired0: coin_1.Coin.fromPartial({}),
        tokenDesired1: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgAddToConcentratedLiquiditySuperfluidPosition = {
    typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.tokenDesired0 !== undefined) {
            coin_1.Coin.encode(message.tokenDesired0, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenDesired1 !== undefined) {
            coin_1.Coin.encode(message.tokenDesired1, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
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
                    message.tokenDesired0 = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenDesired1 = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.tokenDesired0))
            obj.tokenDesired0 = coin_1.Coin.fromJSON(object.tokenDesired0);
        if ((0, helpers_1.isSet)(object.tokenDesired1))
            obj.tokenDesired1 = coin_1.Coin.fromJSON(object.tokenDesired1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.tokenDesired0 !== undefined &&
            (obj.tokenDesired0 = message.tokenDesired0 ? coin_1.Coin.toJSON(message.tokenDesired0) : undefined);
        message.tokenDesired1 !== undefined &&
            (obj.tokenDesired1 = message.tokenDesired1 ? coin_1.Coin.toJSON(message.tokenDesired1) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        message.sender = object.sender ?? "";
        if (object.tokenDesired0 !== undefined && object.tokenDesired0 !== null) {
            message.tokenDesired0 = coin_1.Coin.fromPartial(object.tokenDesired0);
        }
        if (object.tokenDesired1 !== undefined && object.tokenDesired1 !== null) {
            message.tokenDesired1 = coin_1.Coin.fromPartial(object.tokenDesired1);
        }
        return message;
    },
};
function createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse() {
    return {
        positionId: BigInt(0),
        amount0: "",
        amount1: "",
        newLiquidity: "",
        lockId: BigInt(0),
    };
}
exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse = {
    typeUrl: "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse",
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
        if (message.newLiquidity !== "") {
            writer.uint32(42).string(message.newLiquidity);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
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
                    message.newLiquidity = reader.string();
                    break;
                case 4:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.amount0))
            obj.amount0 = String(object.amount0);
        if ((0, helpers_1.isSet)(object.amount1))
            obj.amount1 = String(object.amount1);
        if ((0, helpers_1.isSet)(object.newLiquidity))
            obj.newLiquidity = String(object.newLiquidity);
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.amount0 !== undefined && (obj.amount0 = message.amount0);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        message.newLiquidity !== undefined && (obj.newLiquidity = message.newLiquidity);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        message.amount0 = object.amount0 ?? "";
        message.amount1 = object.amount1 ?? "";
        message.newLiquidity = object.newLiquidity ?? "";
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseMsgUnbondConvertAndStake() {
    return {
        lockId: BigInt(0),
        sender: "",
        valAddr: "",
        minAmtToStake: "",
        sharesToConvert: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgUnbondConvertAndStake = {
    typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStake",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        if (message.minAmtToStake !== "") {
            writer.uint32(34).string(message.minAmtToStake);
        }
        if (message.sharesToConvert !== undefined) {
            coin_1.Coin.encode(message.sharesToConvert, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbondConvertAndStake();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                case 4:
                    message.minAmtToStake = reader.string();
                    break;
                case 5:
                    message.sharesToConvert = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUnbondConvertAndStake();
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.valAddr))
            obj.valAddr = String(object.valAddr);
        if ((0, helpers_1.isSet)(object.minAmtToStake))
            obj.minAmtToStake = String(object.minAmtToStake);
        if ((0, helpers_1.isSet)(object.sharesToConvert))
            obj.sharesToConvert = coin_1.Coin.fromJSON(object.sharesToConvert);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.minAmtToStake !== undefined && (obj.minAmtToStake = message.minAmtToStake);
        message.sharesToConvert !== undefined &&
            (obj.sharesToConvert = message.sharesToConvert ? coin_1.Coin.toJSON(message.sharesToConvert) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnbondConvertAndStake();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        message.sender = object.sender ?? "";
        message.valAddr = object.valAddr ?? "";
        message.minAmtToStake = object.minAmtToStake ?? "";
        if (object.sharesToConvert !== undefined && object.sharesToConvert !== null) {
            message.sharesToConvert = coin_1.Coin.fromPartial(object.sharesToConvert);
        }
        return message;
    },
};
function createBaseMsgUnbondConvertAndStakeResponse() {
    return {
        totalAmtStaked: "",
    };
}
exports.MsgUnbondConvertAndStakeResponse = {
    typeUrl: "/osmosis.superfluid.MsgUnbondConvertAndStakeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalAmtStaked !== "") {
            writer.uint32(10).string(message.totalAmtStaked);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbondConvertAndStakeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalAmtStaked = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUnbondConvertAndStakeResponse();
        if ((0, helpers_1.isSet)(object.totalAmtStaked))
            obj.totalAmtStaked = String(object.totalAmtStaked);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalAmtStaked !== undefined && (obj.totalAmtStaked = message.totalAmtStaked);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnbondConvertAndStakeResponse();
        message.totalAmtStaked = object.totalAmtStaked ?? "";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SuperfluidDelegate = this.SuperfluidDelegate.bind(this);
        this.SuperfluidUndelegate = this.SuperfluidUndelegate.bind(this);
        this.SuperfluidUnbondLock = this.SuperfluidUnbondLock.bind(this);
        this.SuperfluidUndelegateAndUnbondLock = this.SuperfluidUndelegateAndUnbondLock.bind(this);
        this.LockAndSuperfluidDelegate = this.LockAndSuperfluidDelegate.bind(this);
        this.CreateFullRangePositionAndSuperfluidDelegate =
            this.CreateFullRangePositionAndSuperfluidDelegate.bind(this);
        this.UnPoolWhitelistedPool = this.UnPoolWhitelistedPool.bind(this);
        this.UnlockAndMigrateSharesToFullRangeConcentratedPosition =
            this.UnlockAndMigrateSharesToFullRangeConcentratedPosition.bind(this);
        this.AddToConcentratedLiquiditySuperfluidPosition =
            this.AddToConcentratedLiquiditySuperfluidPosition.bind(this);
        this.UnbondConvertAndStake = this.UnbondConvertAndStake.bind(this);
    }
    SuperfluidDelegate(request) {
        const data = exports.MsgSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
        return promise.then((data) => exports.MsgSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    SuperfluidUndelegate(request) {
        const data = exports.MsgSuperfluidUndelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
        return promise.then((data) => exports.MsgSuperfluidUndelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    SuperfluidUnbondLock(request) {
        const data = exports.MsgSuperfluidUnbondLock.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
        return promise.then((data) => exports.MsgSuperfluidUnbondLockResponse.decode(new binary_1.BinaryReader(data)));
    }
    SuperfluidUndelegateAndUnbondLock(request) {
        const data = exports.MsgSuperfluidUndelegateAndUnbondLock.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegateAndUnbondLock", data);
        return promise.then((data) => exports.MsgSuperfluidUndelegateAndUnbondLockResponse.decode(new binary_1.BinaryReader(data)));
    }
    LockAndSuperfluidDelegate(request) {
        const data = exports.MsgLockAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
        return promise.then((data) => exports.MsgLockAndSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    CreateFullRangePositionAndSuperfluidDelegate(request) {
        const data = exports.MsgCreateFullRangePositionAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "CreateFullRangePositionAndSuperfluidDelegate", data);
        return promise.then((data) => exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    UnPoolWhitelistedPool(request) {
        const data = exports.MsgUnPoolWhitelistedPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
        return promise.then((data) => exports.MsgUnPoolWhitelistedPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    UnlockAndMigrateSharesToFullRangeConcentratedPosition(request) {
        const data = exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "UnlockAndMigrateSharesToFullRangeConcentratedPosition", data);
        return promise.then((data) => exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    AddToConcentratedLiquiditySuperfluidPosition(request) {
        const data = exports.MsgAddToConcentratedLiquiditySuperfluidPosition.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "AddToConcentratedLiquiditySuperfluidPosition", data);
        return promise.then((data) => exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    UnbondConvertAndStake(request) {
        const data = exports.MsgUnbondConvertAndStake.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "UnbondConvertAndStake", data);
        return promise.then((data) => exports.MsgUnbondConvertAndStakeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map