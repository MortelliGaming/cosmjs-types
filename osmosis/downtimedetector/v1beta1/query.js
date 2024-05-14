"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.RecoveredSinceDowntimeOfLengthResponse = exports.RecoveredSinceDowntimeOfLengthRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const downtime_duration_1 = require("./downtime_duration");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.downtimedetector.v1beta1";
function createBaseRecoveredSinceDowntimeOfLengthRequest() {
    return {
        downtime: 0,
        recovery: duration_1.Duration.fromPartial({}),
    };
}
exports.RecoveredSinceDowntimeOfLengthRequest = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.downtime !== 0) {
            writer.uint32(8).int32(message.downtime);
        }
        if (message.recovery !== undefined) {
            duration_1.Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downtime = reader.int32();
                    break;
                case 2:
                    message.recovery = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRecoveredSinceDowntimeOfLengthRequest();
        if ((0, helpers_1.isSet)(object.downtime))
            obj.downtime = (0, downtime_duration_1.downtimeFromJSON)(object.downtime);
        if ((0, helpers_1.isSet)(object.recovery))
            obj.recovery = duration_1.Duration.fromJSON(object.recovery);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.downtime !== undefined && (obj.downtime = (0, downtime_duration_1.downtimeToJSON)(message.downtime));
        message.recovery !== undefined &&
            (obj.recovery = message.recovery ? duration_1.Duration.toJSON(message.recovery) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        message.downtime = object.downtime ?? 0;
        if (object.recovery !== undefined && object.recovery !== null) {
            message.recovery = duration_1.Duration.fromPartial(object.recovery);
        }
        return message;
    },
};
function createBaseRecoveredSinceDowntimeOfLengthResponse() {
    return {
        succesfullyRecovered: false,
    };
}
exports.RecoveredSinceDowntimeOfLengthResponse = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.succesfullyRecovered === true) {
            writer.uint32(8).bool(message.succesfullyRecovered);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.succesfullyRecovered = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRecoveredSinceDowntimeOfLengthResponse();
        if ((0, helpers_1.isSet)(object.succesfullyRecovered))
            obj.succesfullyRecovered = Boolean(object.succesfullyRecovered);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.succesfullyRecovered !== undefined && (obj.succesfullyRecovered = message.succesfullyRecovered);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
        message.succesfullyRecovered = object.succesfullyRecovered ?? false;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RecoveredSinceDowntimeOfLength = this.RecoveredSinceDowntimeOfLength.bind(this);
    }
    RecoveredSinceDowntimeOfLength(request) {
        const data = exports.RecoveredSinceDowntimeOfLengthRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.downtimedetector.v1beta1.Query", "RecoveredSinceDowntimeOfLength", data);
        return promise.then((data) => exports.RecoveredSinceDowntimeOfLengthResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map