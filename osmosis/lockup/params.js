"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../binary");
exports.protobufPackage = "osmosis.lockup";
function createBaseParams() {
    return {
        forceUnlockAllowedAddresses: [],
    };
}
exports.Params = {
    typeUrl: "/osmosis.lockup.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.forceUnlockAllowedAddresses) {
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
                    message.forceUnlockAllowedAddresses.push(reader.string());
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
        if (Array.isArray(object?.forceUnlockAllowedAddresses))
            obj.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.forceUnlockAllowedAddresses) {
            obj.forceUnlockAllowedAddresses = message.forceUnlockAllowedAddresses.map((e) => e);
        }
        else {
            obj.forceUnlockAllowedAddresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map