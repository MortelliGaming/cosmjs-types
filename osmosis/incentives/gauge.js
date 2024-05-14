"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockableDurationsInfo = exports.Gauge = exports.protobufPackage = void 0;
/* eslint-disable */
const lock_1 = require("../lockup/lock");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.incentives";
function createBaseGauge() {
    return {
        id: BigInt(0),
        isPerpetual: false,
        distributeTo: lock_1.QueryCondition.fromPartial({}),
        coins: [],
        startTime: timestamp_1.Timestamp.fromPartial({}),
        numEpochsPaidOver: BigInt(0),
        filledEpochs: BigInt(0),
        distributedCoins: [],
    };
}
exports.Gauge = {
    typeUrl: "/osmosis.incentives.Gauge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.isPerpetual === true) {
            writer.uint32(16).bool(message.isPerpetual);
        }
        if (message.distributeTo !== undefined) {
            lock_1.QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(42).fork()).ldelim();
        }
        if (message.numEpochsPaidOver !== BigInt(0)) {
            writer.uint32(48).uint64(message.numEpochsPaidOver);
        }
        if (message.filledEpochs !== BigInt(0)) {
            writer.uint32(56).uint64(message.filledEpochs);
        }
        for (const v of message.distributedCoins) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.isPerpetual = reader.bool();
                    break;
                case 3:
                    message.distributeTo = lock_1.QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.numEpochsPaidOver = reader.uint64();
                    break;
                case 7:
                    message.filledEpochs = reader.uint64();
                    break;
                case 8:
                    message.distributedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGauge();
        if ((0, helpers_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_1.isSet)(object.isPerpetual))
            obj.isPerpetual = Boolean(object.isPerpetual);
        if ((0, helpers_1.isSet)(object.distributeTo))
            obj.distributeTo = lock_1.QueryCondition.fromJSON(object.distributeTo);
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if ((0, helpers_1.isSet)(object.numEpochsPaidOver))
            obj.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
        if ((0, helpers_1.isSet)(object.filledEpochs))
            obj.filledEpochs = BigInt(object.filledEpochs.toString());
        if (Array.isArray(object?.distributedCoins))
            obj.distributedCoins = object.distributedCoins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
        message.distributeTo !== undefined &&
            (obj.distributeTo = message.distributeTo ? lock_1.QueryCondition.toJSON(message.distributeTo) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        message.numEpochsPaidOver !== undefined &&
            (obj.numEpochsPaidOver = (message.numEpochsPaidOver || BigInt(0)).toString());
        message.filledEpochs !== undefined && (obj.filledEpochs = (message.filledEpochs || BigInt(0)).toString());
        if (message.distributedCoins) {
            obj.distributedCoins = message.distributedCoins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.distributedCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGauge();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        message.isPerpetual = object.isPerpetual ?? false;
        if (object.distributeTo !== undefined && object.distributeTo !== null) {
            message.distributeTo = lock_1.QueryCondition.fromPartial(object.distributeTo);
        }
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        if (object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null) {
            message.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
        }
        if (object.filledEpochs !== undefined && object.filledEpochs !== null) {
            message.filledEpochs = BigInt(object.filledEpochs.toString());
        }
        message.distributedCoins = object.distributedCoins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseLockableDurationsInfo() {
    return {
        lockableDurations: [],
    };
}
exports.LockableDurationsInfo = {
    typeUrl: "/osmosis.incentives.LockableDurationsInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockableDurationsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLockableDurationsInfo();
        if (Array.isArray(object?.lockableDurations))
            obj.lockableDurations = object.lockableDurations.map((e) => duration_1.Duration.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockableDurations = message.lockableDurations.map((e) => (e ? duration_1.Duration.toJSON(e) : undefined));
        }
        else {
            obj.lockableDurations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations = object.lockableDurations?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=gauge.js.map