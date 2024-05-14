"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PruningState = exports.TwapRecord = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.twap.v1beta1";
function createBaseTwapRecord() {
    return {
        poolId: BigInt(0),
        asset0Denom: "",
        asset1Denom: "",
        height: BigInt(0),
        time: timestamp_1.Timestamp.fromPartial({}),
        p0LastSpotPrice: "",
        p1LastSpotPrice: "",
        p0ArithmeticTwapAccumulator: "",
        p1ArithmeticTwapAccumulator: "",
        geometricTwapAccumulator: "",
        lastErrorTime: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.TwapRecord = {
    typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.asset0Denom !== "") {
            writer.uint32(18).string(message.asset0Denom);
        }
        if (message.asset1Denom !== "") {
            writer.uint32(26).string(message.asset1Denom);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(32).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(42).fork()).ldelim();
        }
        if (message.p0LastSpotPrice !== "") {
            writer.uint32(50).string(message.p0LastSpotPrice);
        }
        if (message.p1LastSpotPrice !== "") {
            writer.uint32(58).string(message.p1LastSpotPrice);
        }
        if (message.p0ArithmeticTwapAccumulator !== "") {
            writer.uint32(66).string(message.p0ArithmeticTwapAccumulator);
        }
        if (message.p1ArithmeticTwapAccumulator !== "") {
            writer.uint32(74).string(message.p1ArithmeticTwapAccumulator);
        }
        if (message.geometricTwapAccumulator !== "") {
            writer.uint32(82).string(message.geometricTwapAccumulator);
        }
        if (message.lastErrorTime !== undefined) {
            timestamp_1.Timestamp.encode(message.lastErrorTime, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwapRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.asset0Denom = reader.string();
                    break;
                case 3:
                    message.asset1Denom = reader.string();
                    break;
                case 4:
                    message.height = reader.int64();
                    break;
                case 5:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.p0LastSpotPrice = reader.string();
                    break;
                case 7:
                    message.p1LastSpotPrice = reader.string();
                    break;
                case 8:
                    message.p0ArithmeticTwapAccumulator = reader.string();
                    break;
                case 9:
                    message.p1ArithmeticTwapAccumulator = reader.string();
                    break;
                case 10:
                    message.geometricTwapAccumulator = reader.string();
                    break;
                case 11:
                    message.lastErrorTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTwapRecord();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.asset0Denom))
            obj.asset0Denom = String(object.asset0Denom);
        if ((0, helpers_1.isSet)(object.asset1Denom))
            obj.asset1Denom = String(object.asset1Denom);
        if ((0, helpers_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        if ((0, helpers_1.isSet)(object.time))
            obj.time = (0, helpers_1.fromJsonTimestamp)(object.time);
        if ((0, helpers_1.isSet)(object.p0LastSpotPrice))
            obj.p0LastSpotPrice = String(object.p0LastSpotPrice);
        if ((0, helpers_1.isSet)(object.p1LastSpotPrice))
            obj.p1LastSpotPrice = String(object.p1LastSpotPrice);
        if ((0, helpers_1.isSet)(object.p0ArithmeticTwapAccumulator))
            obj.p0ArithmeticTwapAccumulator = String(object.p0ArithmeticTwapAccumulator);
        if ((0, helpers_1.isSet)(object.p1ArithmeticTwapAccumulator))
            obj.p1ArithmeticTwapAccumulator = String(object.p1ArithmeticTwapAccumulator);
        if ((0, helpers_1.isSet)(object.geometricTwapAccumulator))
            obj.geometricTwapAccumulator = String(object.geometricTwapAccumulator);
        if ((0, helpers_1.isSet)(object.lastErrorTime))
            obj.lastErrorTime = (0, helpers_1.fromJsonTimestamp)(object.lastErrorTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.asset0Denom !== undefined && (obj.asset0Denom = message.asset0Denom);
        message.asset1Denom !== undefined && (obj.asset1Denom = message.asset1Denom);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = (0, helpers_1.fromTimestamp)(message.time).toISOString());
        message.p0LastSpotPrice !== undefined && (obj.p0LastSpotPrice = message.p0LastSpotPrice);
        message.p1LastSpotPrice !== undefined && (obj.p1LastSpotPrice = message.p1LastSpotPrice);
        message.p0ArithmeticTwapAccumulator !== undefined &&
            (obj.p0ArithmeticTwapAccumulator = message.p0ArithmeticTwapAccumulator);
        message.p1ArithmeticTwapAccumulator !== undefined &&
            (obj.p1ArithmeticTwapAccumulator = message.p1ArithmeticTwapAccumulator);
        message.geometricTwapAccumulator !== undefined &&
            (obj.geometricTwapAccumulator = message.geometricTwapAccumulator);
        message.lastErrorTime !== undefined &&
            (obj.lastErrorTime = (0, helpers_1.fromTimestamp)(message.lastErrorTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTwapRecord();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.asset0Denom = object.asset0Denom ?? "";
        message.asset1Denom = object.asset1Denom ?? "";
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = timestamp_1.Timestamp.fromPartial(object.time);
        }
        message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
        message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
        message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
        message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
        message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? "";
        if (object.lastErrorTime !== undefined && object.lastErrorTime !== null) {
            message.lastErrorTime = timestamp_1.Timestamp.fromPartial(object.lastErrorTime);
        }
        return message;
    },
};
function createBasePruningState() {
    return {
        isPruning: false,
        lastKeptTime: timestamp_1.Timestamp.fromPartial({}),
        lastKeySeen: new Uint8Array(),
        lastSeenPoolId: BigInt(0),
    };
}
exports.PruningState = {
    typeUrl: "/osmosis.twap.v1beta1.PruningState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.isPruning === true) {
            writer.uint32(8).bool(message.isPruning);
        }
        if (message.lastKeptTime !== undefined) {
            timestamp_1.Timestamp.encode(message.lastKeptTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastKeySeen.length !== 0) {
            writer.uint32(26).bytes(message.lastKeySeen);
        }
        if (message.lastSeenPoolId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastSeenPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePruningState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isPruning = reader.bool();
                    break;
                case 2:
                    message.lastKeptTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastKeySeen = reader.bytes();
                    break;
                case 4:
                    message.lastSeenPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePruningState();
        if ((0, helpers_1.isSet)(object.isPruning))
            obj.isPruning = Boolean(object.isPruning);
        if ((0, helpers_1.isSet)(object.lastKeptTime))
            obj.lastKeptTime = (0, helpers_1.fromJsonTimestamp)(object.lastKeptTime);
        if ((0, helpers_1.isSet)(object.lastKeySeen))
            obj.lastKeySeen = (0, helpers_1.bytesFromBase64)(object.lastKeySeen);
        if ((0, helpers_1.isSet)(object.lastSeenPoolId))
            obj.lastSeenPoolId = BigInt(object.lastSeenPoolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.isPruning !== undefined && (obj.isPruning = message.isPruning);
        message.lastKeptTime !== undefined &&
            (obj.lastKeptTime = (0, helpers_1.fromTimestamp)(message.lastKeptTime).toISOString());
        message.lastKeySeen !== undefined &&
            (obj.lastKeySeen = (0, helpers_1.base64FromBytes)(message.lastKeySeen !== undefined ? message.lastKeySeen : new Uint8Array()));
        message.lastSeenPoolId !== undefined &&
            (obj.lastSeenPoolId = (message.lastSeenPoolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePruningState();
        message.isPruning = object.isPruning ?? false;
        if (object.lastKeptTime !== undefined && object.lastKeptTime !== null) {
            message.lastKeptTime = timestamp_1.Timestamp.fromPartial(object.lastKeptTime);
        }
        message.lastKeySeen = object.lastKeySeen ?? new Uint8Array();
        if (object.lastSeenPoolId !== undefined && object.lastSeenPoolId !== null) {
            message.lastSeenPoolId = BigInt(object.lastSeenPoolId.toString());
        }
        return message;
    },
};
//# sourceMappingURL=twap_record.js.map