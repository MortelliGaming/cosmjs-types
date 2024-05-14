"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisDowntimeEntry = exports.protobufPackage = void 0;
/* eslint-disable */
const downtime_duration_1 = require("./downtime_duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.downtimedetector.v1beta1";
function createBaseGenesisDowntimeEntry() {
    return {
        duration: 0,
        lastDowntime: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.GenesisDowntimeEntry = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.duration !== 0) {
            writer.uint32(8).int32(message.duration);
        }
        if (message.lastDowntime !== undefined) {
            timestamp_1.Timestamp.encode(message.lastDowntime, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDowntimeEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = reader.int32();
                    break;
                case 2:
                    message.lastDowntime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisDowntimeEntry();
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = (0, downtime_duration_1.downtimeFromJSON)(object.duration);
        if ((0, helpers_1.isSet)(object.lastDowntime))
            obj.lastDowntime = (0, helpers_1.fromJsonTimestamp)(object.lastDowntime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = (0, downtime_duration_1.downtimeToJSON)(message.duration));
        message.lastDowntime !== undefined &&
            (obj.lastDowntime = (0, helpers_1.fromTimestamp)(message.lastDowntime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisDowntimeEntry();
        message.duration = object.duration ?? 0;
        if (object.lastDowntime !== undefined && object.lastDowntime !== null) {
            message.lastDowntime = timestamp_1.Timestamp.fromPartial(object.lastDowntime);
        }
        return message;
    },
};
function createBaseGenesisState() {
    return {
        downtimes: [],
        lastBlockTime: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.downtimes) {
            exports.GenesisDowntimeEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastBlockTime !== undefined) {
            timestamp_1.Timestamp.encode(message.lastBlockTime, writer.uint32(18).fork()).ldelim();
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
                    message.downtimes.push(exports.GenesisDowntimeEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lastBlockTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
        if (Array.isArray(object?.downtimes))
            obj.downtimes = object.downtimes.map((e) => exports.GenesisDowntimeEntry.fromJSON(e));
        if ((0, helpers_1.isSet)(object.lastBlockTime))
            obj.lastBlockTime = (0, helpers_1.fromJsonTimestamp)(object.lastBlockTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map((e) => (e ? exports.GenesisDowntimeEntry.toJSON(e) : undefined));
        }
        else {
            obj.downtimes = [];
        }
        message.lastBlockTime !== undefined &&
            (obj.lastBlockTime = (0, helpers_1.fromTimestamp)(message.lastBlockTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.downtimes = object.downtimes?.map((e) => exports.GenesisDowntimeEntry.fromPartial(e)) || [];
        if (object.lastBlockTime !== undefined && object.lastBlockTime !== null) {
            message.lastBlockTime = timestamp_1.Timestamp.fromPartial(object.lastBlockTime);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map