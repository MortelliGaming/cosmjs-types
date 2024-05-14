"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.superfluid";
function createBaseParams() {
    return {
        minimumRiskFactor: "",
    };
}
exports.Params = {
    typeUrl: "/osmosis.superfluid.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minimumRiskFactor !== "") {
            writer.uint32(10).string(message.minimumRiskFactor);
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
                    message.minimumRiskFactor = reader.string();
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
        if ((0, helpers_1.isSet)(object.minimumRiskFactor))
            obj.minimumRiskFactor = String(object.minimumRiskFactor);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.minimumRiskFactor !== undefined && (obj.minimumRiskFactor = message.minimumRiskFactor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.minimumRiskFactor = object.minimumRiskFactor ?? "";
        return message;
    },
};
//# sourceMappingURL=params.js.map