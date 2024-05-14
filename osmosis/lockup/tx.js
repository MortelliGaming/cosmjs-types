"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSetRewardReceiverAddressResponse = exports.MsgSetRewardReceiverAddress = exports.MsgForceUnlockResponse = exports.MsgForceUnlock = exports.MsgExtendLockupResponse = exports.MsgExtendLockup = exports.MsgBeginUnlockingResponse = exports.MsgBeginUnlocking = exports.MsgBeginUnlockingAllResponse = exports.MsgBeginUnlockingAll = exports.MsgLockTokensResponse = exports.MsgLockTokens = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("./lock");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.lockup";
function createBaseMsgLockTokens() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        coins: [],
    };
}
exports.MsgLockTokens = {
    typeUrl: "/osmosis.lockup.MsgLockTokens",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgLockTokens();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokens();
        message.owner = object.owner ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgLockTokensResponse() {
    return {
        ID: BigInt(0),
    };
}
exports.MsgLockTokensResponse = {
    typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokensResponse();
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
        const obj = createBaseMsgLockTokensResponse();
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
        const message = createBaseMsgLockTokensResponse();
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID.toString());
        }
        return message;
    },
};
function createBaseMsgBeginUnlockingAll() {
    return {
        owner: "",
    };
}
exports.MsgBeginUnlockingAll = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAll();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgBeginUnlockingAll();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAll();
        message.owner = object.owner ?? "";
        return message;
    },
};
function createBaseMsgBeginUnlockingAllResponse() {
    return {
        unlocks: [],
    };
}
exports.MsgBeginUnlockingAllResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.unlocks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlocks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgBeginUnlockingAllResponse();
        if (Array.isArray(object?.unlocks))
            obj.unlocks = object.unlocks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgBeginUnlocking() {
    return {
        owner: "",
        ID: BigInt(0),
        coins: [],
    };
}
exports.MsgBeginUnlocking = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlocking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgBeginUnlocking();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.ID))
            obj.ID = BigInt(object.ID.toString());
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlocking();
        message.owner = object.owner ?? "";
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID.toString());
        }
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgBeginUnlockingResponse() {
    return {
        success: false,
        unlockingLockID: BigInt(0),
    };
}
exports.MsgBeginUnlockingResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        if (message.unlockingLockID !== BigInt(0)) {
            writer.uint32(16).uint64(message.unlockingLockID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.unlockingLockID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgBeginUnlockingResponse();
        if ((0, helpers_1.isSet)(object.success))
            obj.success = Boolean(object.success);
        if ((0, helpers_1.isSet)(object.unlockingLockID))
            obj.unlockingLockID = BigInt(object.unlockingLockID.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        message.unlockingLockID !== undefined &&
            (obj.unlockingLockID = (message.unlockingLockID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        message.success = object.success ?? false;
        if (object.unlockingLockID !== undefined && object.unlockingLockID !== null) {
            message.unlockingLockID = BigInt(object.unlockingLockID.toString());
        }
        return message;
    },
};
function createBaseMsgExtendLockup() {
    return {
        owner: "",
        ID: BigInt(0),
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.MsgExtendLockup = {
    typeUrl: "/osmosis.lockup.MsgExtendLockup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgExtendLockup();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.ID))
            obj.ID = BigInt(object.ID.toString());
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockup();
        message.owner = object.owner ?? "";
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID.toString());
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        return message;
    },
};
function createBaseMsgExtendLockupResponse() {
    return {
        success: false,
    };
}
exports.MsgExtendLockupResponse = {
    typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgExtendLockupResponse();
        if ((0, helpers_1.isSet)(object.success))
            obj.success = Boolean(object.success);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockupResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function createBaseMsgForceUnlock() {
    return {
        owner: "",
        ID: BigInt(0),
        coins: [],
    };
}
exports.MsgForceUnlock = {
    typeUrl: "/osmosis.lockup.MsgForceUnlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgForceUnlock();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.ID))
            obj.ID = BigInt(object.ID.toString());
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlock();
        message.owner = object.owner ?? "";
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID.toString());
        }
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgForceUnlockResponse() {
    return {
        success: false,
    };
}
exports.MsgForceUnlockResponse = {
    typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgForceUnlockResponse();
        if ((0, helpers_1.isSet)(object.success))
            obj.success = Boolean(object.success);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlockResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function createBaseMsgSetRewardReceiverAddress() {
    return {
        owner: "",
        lockID: BigInt(0),
        rewardReceiver: "",
    };
}
exports.MsgSetRewardReceiverAddress = {
    typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.lockID !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockID);
        }
        if (message.rewardReceiver !== "") {
            writer.uint32(26).string(message.rewardReceiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetRewardReceiverAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.lockID = reader.uint64();
                    break;
                case 3:
                    message.rewardReceiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetRewardReceiverAddress();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.lockID))
            obj.lockID = BigInt(object.lockID.toString());
        if ((0, helpers_1.isSet)(object.rewardReceiver))
            obj.rewardReceiver = String(object.rewardReceiver);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
        message.rewardReceiver !== undefined && (obj.rewardReceiver = message.rewardReceiver);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetRewardReceiverAddress();
        message.owner = object.owner ?? "";
        if (object.lockID !== undefined && object.lockID !== null) {
            message.lockID = BigInt(object.lockID.toString());
        }
        message.rewardReceiver = object.rewardReceiver ?? "";
        return message;
    },
};
function createBaseMsgSetRewardReceiverAddressResponse() {
    return {
        success: false,
    };
}
exports.MsgSetRewardReceiverAddressResponse = {
    typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetRewardReceiverAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetRewardReceiverAddressResponse();
        if ((0, helpers_1.isSet)(object.success))
            obj.success = Boolean(object.success);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetRewardReceiverAddressResponse();
        message.success = object.success ?? false;
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.LockTokens = this.LockTokens.bind(this);
        this.BeginUnlockingAll = this.BeginUnlockingAll.bind(this);
        this.BeginUnlocking = this.BeginUnlocking.bind(this);
        this.ExtendLockup = this.ExtendLockup.bind(this);
        this.ForceUnlock = this.ForceUnlock.bind(this);
        this.SetRewardReceiverAddress = this.SetRewardReceiverAddress.bind(this);
    }
    LockTokens(request) {
        const data = exports.MsgLockTokens.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "LockTokens", data);
        return promise.then((data) => exports.MsgLockTokensResponse.decode(new binary_1.BinaryReader(data)));
    }
    BeginUnlockingAll(request) {
        const data = exports.MsgBeginUnlockingAll.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlockingAll", data);
        return promise.then((data) => exports.MsgBeginUnlockingAllResponse.decode(new binary_1.BinaryReader(data)));
    }
    BeginUnlocking(request) {
        const data = exports.MsgBeginUnlocking.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlocking", data);
        return promise.then((data) => exports.MsgBeginUnlockingResponse.decode(new binary_1.BinaryReader(data)));
    }
    ExtendLockup(request) {
        const data = exports.MsgExtendLockup.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "ExtendLockup", data);
        return promise.then((data) => exports.MsgExtendLockupResponse.decode(new binary_1.BinaryReader(data)));
    }
    ForceUnlock(request) {
        const data = exports.MsgForceUnlock.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "ForceUnlock", data);
        return promise.then((data) => exports.MsgForceUnlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetRewardReceiverAddress(request) {
        const data = exports.MsgSetRewardReceiverAddress.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "SetRewardReceiverAddress", data);
        return promise.then((data) => exports.MsgSetRewardReceiverAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map