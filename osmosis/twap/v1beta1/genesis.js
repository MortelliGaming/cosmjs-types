"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../google/protobuf/duration");
const twap_record_1 = require("./twap_record");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.twap.v1beta1";
function createBaseParams() {
    return {
        pruneEpochIdentifier: "",
        recordHistoryKeepPeriod: duration_1.Duration.fromPartial({}),
    };
}
exports.Params = {
    typeUrl: "/osmosis.twap.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pruneEpochIdentifier !== "") {
            writer.uint32(10).string(message.pruneEpochIdentifier);
        }
        if (message.recordHistoryKeepPeriod !== undefined) {
            duration_1.Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruneEpochIdentifier = reader.string();
                    break;
                case 2:
                    message.recordHistoryKeepPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if ((0, helpers_1.isSet)(object.pruneEpochIdentifier))
            obj.pruneEpochIdentifier = String(object.pruneEpochIdentifier);
        if ((0, helpers_1.isSet)(object.recordHistoryKeepPeriod))
            obj.recordHistoryKeepPeriod = duration_1.Duration.fromJSON(object.recordHistoryKeepPeriod);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pruneEpochIdentifier !== undefined && (obj.pruneEpochIdentifier = message.pruneEpochIdentifier);
        message.recordHistoryKeepPeriod !== undefined &&
            (obj.recordHistoryKeepPeriod = message.recordHistoryKeepPeriod
                ? duration_1.Duration.toJSON(message.recordHistoryKeepPeriod)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.pruneEpochIdentifier = object.pruneEpochIdentifier ?? "";
        if (object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null) {
            message.recordHistoryKeepPeriod = duration_1.Duration.fromPartial(object.recordHistoryKeepPeriod);
        }
        return message;
    },
};
function createBaseGenesisState() {
    return {
        twaps: [],
        params: exports.Params.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.twap.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.twaps) {
            twap_record_1.TwapRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.twaps.push(twap_record_1.TwapRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = exports.Params.decode(reader, reader.uint32());
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
        if (Array.isArray(object?.twaps))
            obj.twaps = object.twaps.map((e) => twap_record_1.TwapRecord.fromJSON(e));
        if ((0, helpers_1.isSet)(object.params))
            obj.params = exports.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map((e) => (e ? twap_record_1.TwapRecord.toJSON(e) : undefined));
        }
        else {
            obj.twaps = [];
        }
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map((e) => twap_record_1.TwapRecord.fromPartial(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map