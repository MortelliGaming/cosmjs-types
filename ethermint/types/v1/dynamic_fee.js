"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionOptionDynamicFeeTx = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.types.v1";
function createBaseExtensionOptionDynamicFeeTx() {
    return {
        maxPriorityPrice: "",
    };
}
exports.ExtensionOptionDynamicFeeTx = {
    typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxPriorityPrice !== "") {
            writer.uint32(10).string(message.maxPriorityPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionDynamicFeeTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPriorityPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseExtensionOptionDynamicFeeTx();
        if ((0, helpers_1.isSet)(object.maxPriorityPrice))
            obj.maxPriorityPrice = String(object.maxPriorityPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.maxPriorityPrice !== undefined && (obj.maxPriorityPrice = message.maxPriorityPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtensionOptionDynamicFeeTx();
        message.maxPriorityPrice = object.maxPriorityPrice ?? "";
        return message;
    },
};
//# sourceMappingURL=dynamic_fee.js.map