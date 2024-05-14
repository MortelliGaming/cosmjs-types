"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.AccountLockedLongerDurationDenomResponse = exports.AccountLockedLongerDurationDenomRequest = exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = exports.AccountLockedDurationResponse = exports.AccountLockedDurationRequest = exports.AccountLockedLongerDurationResponse = exports.AccountLockedLongerDurationRequest = exports.SyntheticLockupByLockupIDResponse = exports.SyntheticLockupByLockupIDRequest = exports.SyntheticLockupsByLockupIDResponse = exports.SyntheticLockupsByLockupIDRequest = exports.NextLockIDResponse = exports.NextLockIDRequest = exports.LockRewardReceiverResponse = exports.LockRewardReceiverRequest = exports.LockedResponse = exports.LockedRequest = exports.LockedDenomResponse = exports.LockedDenomRequest = exports.AccountLockedPastTimeDenomResponse = exports.AccountLockedPastTimeDenomRequest = exports.AccountUnlockedBeforeTimeResponse = exports.AccountUnlockedBeforeTimeRequest = exports.AccountLockedPastTimeNotUnlockingOnlyResponse = exports.AccountLockedPastTimeNotUnlockingOnlyRequest = exports.AccountLockedPastTimeResponse = exports.AccountLockedPastTimeRequest = exports.AccountLockedCoinsResponse = exports.AccountLockedCoinsRequest = exports.AccountUnlockingCoinsResponse = exports.AccountUnlockingCoinsRequest = exports.AccountUnlockableCoinsResponse = exports.AccountUnlockableCoinsRequest = exports.ModuleLockedAmountResponse = exports.ModuleLockedAmountRequest = exports.ModuleBalanceResponse = exports.ModuleBalanceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("./lock");
const params_1 = require("./params");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.lockup";
function createBaseModuleBalanceRequest() {
    return {};
}
exports.ModuleBalanceRequest = {
    typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceRequest();
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
        const obj = createBaseModuleBalanceRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseModuleBalanceRequest();
        return message;
    },
};
function createBaseModuleBalanceResponse() {
    return {
        coins: [],
    };
}
exports.ModuleBalanceResponse = {
    typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseModuleBalanceResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleBalanceResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseModuleLockedAmountRequest() {
    return {};
}
exports.ModuleLockedAmountRequest = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountRequest();
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
        const obj = createBaseModuleLockedAmountRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseModuleLockedAmountRequest();
        return message;
    },
};
function createBaseModuleLockedAmountResponse() {
    return {
        coins: [],
    };
}
exports.ModuleLockedAmountResponse = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseModuleLockedAmountResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleLockedAmountResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountUnlockableCoinsRequest() {
    return {
        owner: "",
    };
}
exports.AccountUnlockableCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockableCoinsRequest();
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
        const obj = createBaseAccountUnlockableCoinsRequest();
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
        const message = createBaseAccountUnlockableCoinsRequest();
        message.owner = object.owner ?? "";
        return message;
    },
};
function createBaseAccountUnlockableCoinsResponse() {
    return {
        coins: [],
    };
}
exports.AccountUnlockableCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockableCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseAccountUnlockableCoinsResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockableCoinsResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountUnlockingCoinsRequest() {
    return {
        owner: "",
    };
}
exports.AccountUnlockingCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockingCoinsRequest();
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
        const obj = createBaseAccountUnlockingCoinsRequest();
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
        const message = createBaseAccountUnlockingCoinsRequest();
        message.owner = object.owner ?? "";
        return message;
    },
};
function createBaseAccountUnlockingCoinsResponse() {
    return {
        coins: [],
    };
}
exports.AccountUnlockingCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockingCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseAccountUnlockingCoinsResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockingCoinsResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountLockedCoinsRequest() {
    return {
        owner: "",
    };
}
exports.AccountLockedCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedCoinsRequest();
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
        const obj = createBaseAccountLockedCoinsRequest();
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
        const message = createBaseAccountLockedCoinsRequest();
        message.owner = object.owner ?? "";
        return message;
    },
};
function createBaseAccountLockedCoinsResponse() {
    return {
        coins: [],
    };
}
exports.AccountLockedCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseAccountLockedCoinsResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedCoinsResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountLockedPastTimeRequest() {
    return {
        owner: "",
        timestamp: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.AccountLockedPastTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedPastTimeRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.timestamp))
            obj.timestamp = (0, helpers_1.fromJsonTimestamp)(object.timestamp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = (0, helpers_1.fromTimestamp)(message.timestamp).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeRequest();
        message.owner = object.owner ?? "";
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
        }
        return message;
    },
};
function createBaseAccountLockedPastTimeResponse() {
    return {
        locks: [],
    };
}
exports.AccountLockedPastTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedPastTimeResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest() {
    return {
        owner: "",
        timestamp: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.AccountLockedPastTimeNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.timestamp))
            obj.timestamp = (0, helpers_1.fromJsonTimestamp)(object.timestamp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = (0, helpers_1.fromTimestamp)(message.timestamp).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        message.owner = object.owner ?? "";
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
        }
        return message;
    },
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse() {
    return {
        locks: [],
    };
}
exports.AccountLockedPastTimeNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountUnlockedBeforeTimeRequest() {
    return {
        owner: "",
        timestamp: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.AccountUnlockedBeforeTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountUnlockedBeforeTimeRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.timestamp))
            obj.timestamp = (0, helpers_1.fromJsonTimestamp)(object.timestamp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = (0, helpers_1.fromTimestamp)(message.timestamp).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        message.owner = object.owner ?? "";
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
        }
        return message;
    },
};
function createBaseAccountUnlockedBeforeTimeResponse() {
    return {
        locks: [],
    };
}
exports.AccountUnlockedBeforeTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountUnlockedBeforeTimeResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountLockedPastTimeDenomRequest() {
    return {
        owner: "",
        timestamp: timestamp_1.Timestamp.fromPartial({}),
        denom: "",
    };
}
exports.AccountLockedPastTimeDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const obj = createBaseAccountLockedPastTimeDenomRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.timestamp))
            obj.timestamp = (0, helpers_1.fromJsonTimestamp)(object.timestamp);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = (0, helpers_1.fromTimestamp)(message.timestamp).toISOString());
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomRequest();
        message.owner = object.owner ?? "";
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
        }
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseAccountLockedPastTimeDenomResponse() {
    return {
        locks: [],
    };
}
exports.AccountLockedPastTimeDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedPastTimeDenomResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseLockedDenomRequest() {
    return {
        denom: "",
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.LockedDenomRequest = {
    typeUrl: "/osmosis.lockup.LockedDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
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
        const obj = createBaseLockedDenomRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomRequest();
        message.denom = object.denom ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        return message;
    },
};
function createBaseLockedDenomResponse() {
    return {
        amount: "",
    };
}
exports.LockedDenomResponse = {
    typeUrl: "/osmosis.lockup.LockedDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLockedDenomResponse();
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomResponse();
        message.amount = object.amount ?? "";
        return message;
    },
};
function createBaseLockedRequest() {
    return {
        lockId: BigInt(0),
    };
}
exports.LockedRequest = {
    typeUrl: "/osmosis.lockup.LockedRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedRequest();
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
        const obj = createBaseLockedRequest();
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
        const message = createBaseLockedRequest();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseLockedResponse() {
    return {
        lock: undefined,
    };
}
exports.LockedResponse = {
    typeUrl: "/osmosis.lockup.LockedResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lock !== undefined) {
            lock_1.PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock = lock_1.PeriodLock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLockedResponse();
        if ((0, helpers_1.isSet)(object.lock))
            obj.lock = lock_1.PeriodLock.fromJSON(object.lock);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lock !== undefined && (obj.lock = message.lock ? lock_1.PeriodLock.toJSON(message.lock) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedResponse();
        if (object.lock !== undefined && object.lock !== null) {
            message.lock = lock_1.PeriodLock.fromPartial(object.lock);
        }
        return message;
    },
};
function createBaseLockRewardReceiverRequest() {
    return {
        lockId: BigInt(0),
    };
}
exports.LockRewardReceiverRequest = {
    typeUrl: "/osmosis.lockup.LockRewardReceiverRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockRewardReceiverRequest();
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
        const obj = createBaseLockRewardReceiverRequest();
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
        const message = createBaseLockRewardReceiverRequest();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseLockRewardReceiverResponse() {
    return {
        rewardReceiver: "",
    };
}
exports.LockRewardReceiverResponse = {
    typeUrl: "/osmosis.lockup.LockRewardReceiverResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rewardReceiver !== "") {
            writer.uint32(10).string(message.rewardReceiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockRewardReceiverResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseLockRewardReceiverResponse();
        if ((0, helpers_1.isSet)(object.rewardReceiver))
            obj.rewardReceiver = String(object.rewardReceiver);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.rewardReceiver !== undefined && (obj.rewardReceiver = message.rewardReceiver);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockRewardReceiverResponse();
        message.rewardReceiver = object.rewardReceiver ?? "";
        return message;
    },
};
function createBaseNextLockIDRequest() {
    return {};
}
exports.NextLockIDRequest = {
    typeUrl: "/osmosis.lockup.NextLockIDRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextLockIDRequest();
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
        const obj = createBaseNextLockIDRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseNextLockIDRequest();
        return message;
    },
};
function createBaseNextLockIDResponse() {
    return {
        lockId: BigInt(0),
    };
}
exports.NextLockIDResponse = {
    typeUrl: "/osmosis.lockup.NextLockIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextLockIDResponse();
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
        const obj = createBaseNextLockIDResponse();
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
        const message = createBaseNextLockIDResponse();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseSyntheticLockupsByLockupIDRequest() {
    return {
        lockId: BigInt(0),
    };
}
exports.SyntheticLockupsByLockupIDRequest = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDRequest();
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
        const obj = createBaseSyntheticLockupsByLockupIDRequest();
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
        const message = createBaseSyntheticLockupsByLockupIDRequest();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseSyntheticLockupsByLockupIDResponse() {
    return {
        syntheticLocks: [],
    };
}
exports.SyntheticLockupsByLockupIDResponse = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.syntheticLocks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syntheticLocks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSyntheticLockupsByLockupIDResponse();
        if (Array.isArray(object?.syntheticLocks))
            obj.syntheticLocks = object.syntheticLocks.map((e) => lock_1.SyntheticLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.syntheticLocks) {
            obj.syntheticLocks = message.syntheticLocks.map((e) => (e ? lock_1.SyntheticLock.toJSON(e) : undefined));
        }
        else {
            obj.syntheticLocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        message.syntheticLocks = object.syntheticLocks?.map((e) => lock_1.SyntheticLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSyntheticLockupByLockupIDRequest() {
    return {
        lockId: BigInt(0),
    };
}
exports.SyntheticLockupByLockupIDRequest = {
    typeUrl: "/osmosis.lockup.SyntheticLockupByLockupIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupByLockupIDRequest();
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
        const obj = createBaseSyntheticLockupByLockupIDRequest();
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
        const message = createBaseSyntheticLockupByLockupIDRequest();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseSyntheticLockupByLockupIDResponse() {
    return {
        syntheticLock: lock_1.SyntheticLock.fromPartial({}),
    };
}
exports.SyntheticLockupByLockupIDResponse = {
    typeUrl: "/osmosis.lockup.SyntheticLockupByLockupIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.syntheticLock !== undefined) {
            lock_1.SyntheticLock.encode(message.syntheticLock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupByLockupIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syntheticLock = lock_1.SyntheticLock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSyntheticLockupByLockupIDResponse();
        if ((0, helpers_1.isSet)(object.syntheticLock))
            obj.syntheticLock = lock_1.SyntheticLock.fromJSON(object.syntheticLock);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.syntheticLock !== undefined &&
            (obj.syntheticLock = message.syntheticLock ? lock_1.SyntheticLock.toJSON(message.syntheticLock) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupByLockupIDResponse();
        if (object.syntheticLock !== undefined && object.syntheticLock !== null) {
            message.syntheticLock = lock_1.SyntheticLock.fromPartial(object.syntheticLock);
        }
        return message;
    },
};
function createBaseAccountLockedLongerDurationRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.AccountLockedLongerDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const obj = createBaseAccountLockedLongerDurationRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationRequest();
        message.owner = object.owner ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        return message;
    },
};
function createBaseAccountLockedLongerDurationResponse() {
    return {
        locks: [],
    };
}
exports.AccountLockedLongerDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedLongerDurationResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountLockedDurationRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.AccountLockedDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const obj = createBaseAccountLockedDurationRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationRequest();
        message.owner = object.owner ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        return message;
    },
};
function createBaseAccountLockedDurationResponse() {
    return {
        locks: [],
    };
}
exports.AccountLockedDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedDurationResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const obj = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        message.owner = object.owner ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        return message;
    },
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse() {
    return {
        locks: [],
    };
}
exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAccountLockedLongerDurationDenomRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        denom: "",
    };
}
exports.AccountLockedLongerDurationDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomRequest();
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
        const obj = createBaseAccountLockedLongerDurationDenomRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        message.owner = object.owner ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseAccountLockedLongerDurationDenomResponse() {
    return {
        locks: [],
    };
}
exports.AccountLockedLongerDurationDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountLockedLongerDurationDenomResponse();
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.lockup.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.lockup.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
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
        const obj = createBaseQueryParamsResponse();
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
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ModuleBalance = this.ModuleBalance.bind(this);
        this.ModuleLockedAmount = this.ModuleLockedAmount.bind(this);
        this.AccountUnlockableCoins = this.AccountUnlockableCoins.bind(this);
        this.AccountUnlockingCoins = this.AccountUnlockingCoins.bind(this);
        this.AccountLockedCoins = this.AccountLockedCoins.bind(this);
        this.AccountLockedPastTime = this.AccountLockedPastTime.bind(this);
        this.AccountLockedPastTimeNotUnlockingOnly = this.AccountLockedPastTimeNotUnlockingOnly.bind(this);
        this.AccountUnlockedBeforeTime = this.AccountUnlockedBeforeTime.bind(this);
        this.AccountLockedPastTimeDenom = this.AccountLockedPastTimeDenom.bind(this);
        this.LockedDenom = this.LockedDenom.bind(this);
        this.LockedByID = this.LockedByID.bind(this);
        this.LockRewardReceiver = this.LockRewardReceiver.bind(this);
        this.NextLockID = this.NextLockID.bind(this);
        this.SyntheticLockupsByLockupID = this.SyntheticLockupsByLockupID.bind(this);
        this.SyntheticLockupByLockupID = this.SyntheticLockupByLockupID.bind(this);
        this.AccountLockedLongerDuration = this.AccountLockedLongerDuration.bind(this);
        this.AccountLockedDuration = this.AccountLockedDuration.bind(this);
        this.AccountLockedLongerDurationNotUnlockingOnly =
            this.AccountLockedLongerDurationNotUnlockingOnly.bind(this);
        this.AccountLockedLongerDurationDenom = this.AccountLockedLongerDurationDenom.bind(this);
        this.Params = this.Params.bind(this);
    }
    ModuleBalance(request = {}) {
        const data = exports.ModuleBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
        return promise.then((data) => exports.ModuleBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    ModuleLockedAmount(request = {}) {
        const data = exports.ModuleLockedAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
        return promise.then((data) => exports.ModuleLockedAmountResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountUnlockableCoins(request) {
        const data = exports.AccountUnlockableCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
        return promise.then((data) => exports.AccountUnlockableCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountUnlockingCoins(request) {
        const data = exports.AccountUnlockingCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
        return promise.then((data) => exports.AccountUnlockingCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedCoins(request) {
        const data = exports.AccountLockedCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
        return promise.then((data) => exports.AccountLockedCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedPastTime(request) {
        const data = exports.AccountLockedPastTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
        return promise.then((data) => exports.AccountLockedPastTimeResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedPastTimeNotUnlockingOnly(request) {
        const data = exports.AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
        return promise.then((data) => exports.AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountUnlockedBeforeTime(request) {
        const data = exports.AccountUnlockedBeforeTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
        return promise.then((data) => exports.AccountUnlockedBeforeTimeResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedPastTimeDenom(request) {
        const data = exports.AccountLockedPastTimeDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
        return promise.then((data) => exports.AccountLockedPastTimeDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    LockedDenom(request) {
        const data = exports.LockedDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
        return promise.then((data) => exports.LockedDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    LockedByID(request) {
        const data = exports.LockedRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
        return promise.then((data) => exports.LockedResponse.decode(new binary_1.BinaryReader(data)));
    }
    LockRewardReceiver(request) {
        const data = exports.LockRewardReceiverRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockRewardReceiver", data);
        return promise.then((data) => exports.LockRewardReceiverResponse.decode(new binary_1.BinaryReader(data)));
    }
    NextLockID(request = {}) {
        const data = exports.NextLockIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "NextLockID", data);
        return promise.then((data) => exports.NextLockIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    SyntheticLockupsByLockupID(request) {
        const data = exports.SyntheticLockupsByLockupIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
        return promise.then((data) => exports.SyntheticLockupsByLockupIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    SyntheticLockupByLockupID(request) {
        const data = exports.SyntheticLockupByLockupIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupByLockupID", data);
        return promise.then((data) => exports.SyntheticLockupByLockupIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedLongerDuration(request) {
        const data = exports.AccountLockedLongerDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
        return promise.then((data) => exports.AccountLockedLongerDurationResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedDuration(request) {
        const data = exports.AccountLockedDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
        return promise.then((data) => exports.AccountLockedDurationResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedLongerDurationNotUnlockingOnly(request) {
        const data = exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
        return promise.then((data) => exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new binary_1.BinaryReader(data)));
    }
    AccountLockedLongerDurationDenom(request) {
        const data = exports.AccountLockedLongerDurationDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
        return promise.then((data) => exports.AccountLockedLongerDurationDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map