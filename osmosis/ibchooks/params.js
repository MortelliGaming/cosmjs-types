"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../binary");
exports.protobufPackage = "osmosis.ibchooks";
function createBaseParams() {
    return {
        allowedAsyncAckContracts: [],
    };
}
exports.Params = {
    typeUrl: "/osmosis.ibchooks.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowedAsyncAckContracts) {
            writer.uint32(10).string(v);
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
                    message.allowedAsyncAckContracts.push(reader.string());
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
        if (Array.isArray(object?.allowedAsyncAckContracts))
            obj.allowedAsyncAckContracts = object.allowedAsyncAckContracts.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.allowedAsyncAckContracts) {
            obj.allowedAsyncAckContracts = message.allowedAsyncAckContracts.map((e) => e);
        }
        else {
            obj.allowedAsyncAckContracts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.allowedAsyncAckContracts = object.allowedAsyncAckContracts?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map