"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.EpochInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.epochs.v1beta1";
function createBaseEpochInfo() {
    return {
        identifier: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
        duration: duration_1.Duration.fromPartial({}),
        currentEpoch: BigInt(0),
        currentEpochStartTime: timestamp_1.Timestamp.fromPartial({}),
        epochCountingStarted: false,
        currentEpochStartHeight: BigInt(0),
    };
}
exports.EpochInfo = {
    typeUrl: "/osmosis.epochs.v1beta1.EpochInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.currentEpoch !== BigInt(0)) {
            writer.uint32(32).int64(message.currentEpoch);
        }
        if (message.currentEpochStartTime !== undefined) {
            timestamp_1.Timestamp.encode(message.currentEpochStartTime, writer.uint32(42).fork()).ldelim();
        }
        if (message.epochCountingStarted === true) {
            writer.uint32(48).bool(message.epochCountingStarted);
        }
        if (message.currentEpochStartHeight !== BigInt(0)) {
            writer.uint32(64).int64(message.currentEpochStartHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.currentEpoch = reader.int64();
                    break;
                case 5:
                    message.currentEpochStartTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.epochCountingStarted = reader.bool();
                    break;
                case 8:
                    message.currentEpochStartHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEpochInfo();
        if ((0, helpers_1.isSet)(object.identifier))
            obj.identifier = String(object.identifier);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        if ((0, helpers_1.isSet)(object.currentEpoch))
            obj.currentEpoch = BigInt(object.currentEpoch.toString());
        if ((0, helpers_1.isSet)(object.currentEpochStartTime))
            obj.currentEpochStartTime = (0, helpers_1.fromJsonTimestamp)(object.currentEpochStartTime);
        if ((0, helpers_1.isSet)(object.epochCountingStarted))
            obj.epochCountingStarted = Boolean(object.epochCountingStarted);
        if ((0, helpers_1.isSet)(object.currentEpochStartHeight))
            obj.currentEpochStartHeight = BigInt(object.currentEpochStartHeight.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || BigInt(0)).toString());
        message.currentEpochStartTime !== undefined &&
            (obj.currentEpochStartTime = (0, helpers_1.fromTimestamp)(message.currentEpochStartTime).toISOString());
        message.epochCountingStarted !== undefined && (obj.epochCountingStarted = message.epochCountingStarted);
        message.currentEpochStartHeight !== undefined &&
            (obj.currentEpochStartHeight = (message.currentEpochStartHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEpochInfo();
        message.identifier = object.identifier ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
            message.currentEpoch = BigInt(object.currentEpoch.toString());
        }
        if (object.currentEpochStartTime !== undefined && object.currentEpochStartTime !== null) {
            message.currentEpochStartTime = timestamp_1.Timestamp.fromPartial(object.currentEpochStartTime);
        }
        message.epochCountingStarted = object.epochCountingStarted ?? false;
        if (object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null) {
            message.currentEpochStartHeight = BigInt(object.currentEpochStartHeight.toString());
        }
        return message;
    },
};
function createBaseGenesisState() {
    return {
        epochs: [],
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.epochs.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.epochs) {
            exports.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochs.push(exports.EpochInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if (Array.isArray(object?.epochs))
            obj.epochs = object.epochs.map((e) => exports.EpochInfo.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map((e) => (e ? exports.EpochInfo.toJSON(e) : undefined));
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.epochs = object.epochs?.map((e) => exports.EpochInfo.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map