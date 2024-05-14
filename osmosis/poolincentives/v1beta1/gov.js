"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePoolIncentivesProposal = exports.ReplacePoolIncentivesProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const incentives_1 = require("./incentives");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolincentives.v1beta1";
function createBaseReplacePoolIncentivesProposal() {
    return {
        title: "",
        description: "",
        records: [],
    };
}
exports.ReplacePoolIncentivesProposal = {
    typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            incentives_1.DistrRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReplacePoolIncentivesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.records.push(incentives_1.DistrRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseReplacePoolIncentivesProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.records))
            obj.records = object.records.map((e) => incentives_1.DistrRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.records) {
            obj.records = message.records.map((e) => (e ? incentives_1.DistrRecord.toJSON(e) : undefined));
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReplacePoolIncentivesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map((e) => incentives_1.DistrRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdatePoolIncentivesProposal() {
    return {
        title: "",
        description: "",
        records: [],
    };
}
exports.UpdatePoolIncentivesProposal = {
    typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            incentives_1.DistrRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePoolIncentivesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.records.push(incentives_1.DistrRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUpdatePoolIncentivesProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.records))
            obj.records = object.records.map((e) => incentives_1.DistrRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.records) {
            obj.records = message.records.map((e) => (e ? incentives_1.DistrRecord.toJSON(e) : undefined));
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdatePoolIncentivesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map((e) => incentives_1.DistrRecord.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=gov.js.map