"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticLock = exports.QueryCondition = exports.PeriodLock = exports.lockQueryTypeToJSON = exports.lockQueryTypeFromJSON = exports.LockQueryType = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.lockup";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
var LockQueryType;
(function (LockQueryType) {
    LockQueryType[LockQueryType["ByDuration"] = 0] = "ByDuration";
    LockQueryType[LockQueryType["ByTime"] = 1] = "ByTime";
    LockQueryType[LockQueryType["NoLock"] = 2] = "NoLock";
    LockQueryType[LockQueryType["ByGroup"] = 3] = "ByGroup";
    LockQueryType[LockQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LockQueryType || (exports.LockQueryType = LockQueryType = {}));
function lockQueryTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ByDuration":
            return LockQueryType.ByDuration;
        case 1:
        case "ByTime":
            return LockQueryType.ByTime;
        case 2:
        case "NoLock":
            return LockQueryType.NoLock;
        case 3:
        case "ByGroup":
            return LockQueryType.ByGroup;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LockQueryType.UNRECOGNIZED;
    }
}
exports.lockQueryTypeFromJSON = lockQueryTypeFromJSON;
function lockQueryTypeToJSON(object) {
    switch (object) {
        case LockQueryType.ByDuration:
            return "ByDuration";
        case LockQueryType.ByTime:
            return "ByTime";
        case LockQueryType.NoLock:
            return "NoLock";
        case LockQueryType.ByGroup:
            return "ByGroup";
        case LockQueryType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.lockQueryTypeToJSON = lockQueryTypeToJSON;
function createBasePeriodLock() {
    return {
        ID: BigInt(0),
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        endTime: timestamp_1.Timestamp.fromPartial({}),
        coins: [],
        rewardReceiverAddress: "",
    };
}
exports.PeriodLock = {
    typeUrl: "/osmosis.lockup.PeriodLock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(message.endTime, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.rewardReceiverAddress !== "") {
            writer.uint32(50).string(message.rewardReceiverAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.rewardReceiverAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePeriodLock();
        if ((0, helpers_1.isSet)(object.ID))
            obj.ID = BigInt(object.ID.toString());
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        if ((0, helpers_1.isSet)(object.endTime))
            obj.endTime = (0, helpers_1.fromJsonTimestamp)(object.endTime);
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.rewardReceiverAddress))
            obj.rewardReceiverAddress = String(object.rewardReceiverAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.endTime !== undefined && (obj.endTime = (0, helpers_1.fromTimestamp)(message.endTime).toISOString());
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        message.rewardReceiverAddress !== undefined &&
            (obj.rewardReceiverAddress = message.rewardReceiverAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodLock();
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = BigInt(object.ID.toString());
        }
        message.owner = object.owner ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = timestamp_1.Timestamp.fromPartial(object.endTime);
        }
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.rewardReceiverAddress = object.rewardReceiverAddress ?? "";
        return message;
    },
};
function createBaseQueryCondition() {
    return {
        lockQueryType: 0,
        denom: "",
        duration: duration_1.Duration.fromPartial({}),
        timestamp: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.QueryCondition = {
    typeUrl: "/osmosis.lockup.QueryCondition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockQueryType !== 0) {
            writer.uint32(8).int32(message.lockQueryType);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockQueryType = reader.int32();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
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
        const obj = createBaseQueryCondition();
        if ((0, helpers_1.isSet)(object.lockQueryType))
            obj.lockQueryType = lockQueryTypeFromJSON(object.lockQueryType);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        if ((0, helpers_1.isSet)(object.timestamp))
            obj.timestamp = (0, helpers_1.fromJsonTimestamp)(object.timestamp);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lockQueryType !== undefined && (obj.lockQueryType = lockQueryTypeToJSON(message.lockQueryType));
        message.denom !== undefined && (obj.denom = message.denom);
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.timestamp !== undefined && (obj.timestamp = (0, helpers_1.fromTimestamp)(message.timestamp).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCondition();
        message.lockQueryType = object.lockQueryType ?? 0;
        message.denom = object.denom ?? "";
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
        }
        return message;
    },
};
function createBaseSyntheticLock() {
    return {
        underlyingLockId: BigInt(0),
        synthDenom: "",
        endTime: timestamp_1.Timestamp.fromPartial({}),
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.SyntheticLock = {
    typeUrl: "/osmosis.lockup.SyntheticLock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.underlyingLockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.underlyingLockId);
        }
        if (message.synthDenom !== "") {
            writer.uint32(18).string(message.synthDenom);
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(message.endTime, writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.underlyingLockId = reader.uint64();
                    break;
                case 2:
                    message.synthDenom = reader.string();
                    break;
                case 3:
                    message.endTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
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
        const obj = createBaseSyntheticLock();
        if ((0, helpers_1.isSet)(object.underlyingLockId))
            obj.underlyingLockId = BigInt(object.underlyingLockId.toString());
        if ((0, helpers_1.isSet)(object.synthDenom))
            obj.synthDenom = String(object.synthDenom);
        if ((0, helpers_1.isSet)(object.endTime))
            obj.endTime = (0, helpers_1.fromJsonTimestamp)(object.endTime);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.underlyingLockId !== undefined &&
            (obj.underlyingLockId = (message.underlyingLockId || BigInt(0)).toString());
        message.synthDenom !== undefined && (obj.synthDenom = message.synthDenom);
        message.endTime !== undefined && (obj.endTime = (0, helpers_1.fromTimestamp)(message.endTime).toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLock();
        if (object.underlyingLockId !== undefined && object.underlyingLockId !== null) {
            message.underlyingLockId = BigInt(object.underlyingLockId.toString());
        }
        message.synthDenom = object.synthDenom ?? "";
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = timestamp_1.Timestamp.fromPartial(object.endTime);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        return message;
    },
};
//# sourceMappingURL=lock.js.map