"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncentiveRecordBody = exports.IncentiveRecord = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.v1beta1";
function createBaseIncentiveRecord() {
    return {
        incentiveId: BigInt(0),
        poolId: BigInt(0),
        incentiveRecordBody: exports.IncentiveRecordBody.fromPartial({}),
        minUptime: duration_1.Duration.fromPartial({}),
    };
}
exports.IncentiveRecord = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.incentiveId !== BigInt(0)) {
            writer.uint32(8).uint64(message.incentiveId);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.incentiveRecordBody !== undefined) {
            exports.IncentiveRecordBody.encode(message.incentiveRecordBody, writer.uint32(34).fork()).ldelim();
        }
        if (message.minUptime !== undefined) {
            duration_1.Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentiveId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.incentiveRecordBody = exports.IncentiveRecordBody.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.minUptime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseIncentiveRecord();
        if ((0, helpers_1.isSet)(object.incentiveId))
            obj.incentiveId = BigInt(object.incentiveId.toString());
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.incentiveRecordBody))
            obj.incentiveRecordBody = exports.IncentiveRecordBody.fromJSON(object.incentiveRecordBody);
        if ((0, helpers_1.isSet)(object.minUptime))
            obj.minUptime = duration_1.Duration.fromJSON(object.minUptime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.incentiveId !== undefined && (obj.incentiveId = (message.incentiveId || BigInt(0)).toString());
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.incentiveRecordBody !== undefined &&
            (obj.incentiveRecordBody = message.incentiveRecordBody
                ? exports.IncentiveRecordBody.toJSON(message.incentiveRecordBody)
                : undefined);
        message.minUptime !== undefined &&
            (obj.minUptime = message.minUptime ? duration_1.Duration.toJSON(message.minUptime) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentiveRecord();
        if (object.incentiveId !== undefined && object.incentiveId !== null) {
            message.incentiveId = BigInt(object.incentiveId.toString());
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.incentiveRecordBody !== undefined && object.incentiveRecordBody !== null) {
            message.incentiveRecordBody = exports.IncentiveRecordBody.fromPartial(object.incentiveRecordBody);
        }
        if (object.minUptime !== undefined && object.minUptime !== null) {
            message.minUptime = duration_1.Duration.fromPartial(object.minUptime);
        }
        return message;
    },
};
function createBaseIncentiveRecordBody() {
    return {
        remainingCoin: coin_1.DecCoin.fromPartial({}),
        emissionRate: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.IncentiveRecordBody = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.remainingCoin !== undefined) {
            coin_1.DecCoin.encode(message.remainingCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.emissionRate !== "") {
            writer.uint32(18).string(message.emissionRate);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.remainingCoin = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.emissionRate = reader.string();
                    break;
                case 3:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseIncentiveRecordBody();
        if ((0, helpers_1.isSet)(object.remainingCoin))
            obj.remainingCoin = coin_1.DecCoin.fromJSON(object.remainingCoin);
        if ((0, helpers_1.isSet)(object.emissionRate))
            obj.emissionRate = String(object.emissionRate);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.remainingCoin !== undefined &&
            (obj.remainingCoin = message.remainingCoin ? coin_1.DecCoin.toJSON(message.remainingCoin) : undefined);
        message.emissionRate !== undefined && (obj.emissionRate = message.emissionRate);
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentiveRecordBody();
        if (object.remainingCoin !== undefined && object.remainingCoin !== null) {
            message.remainingCoin = coin_1.DecCoin.fromPartial(object.remainingCoin);
        }
        message.emissionRate = object.emissionRate ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        return message;
    },
};
//# sourceMappingURL=incentive_record.js.map