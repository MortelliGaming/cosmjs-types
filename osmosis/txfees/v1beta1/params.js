"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
exports.protobufPackage = "osmosis.txfees.v1beta1";
function createBaseParams() {
    return {
        whitelistedFeeTokenSetters: [],
    };
}
exports.Params = {
    typeUrl: "/osmosis.txfees.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.whitelistedFeeTokenSetters) {
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
                    message.whitelistedFeeTokenSetters.push(reader.string());
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
        if (Array.isArray(object?.whitelistedFeeTokenSetters))
            obj.whitelistedFeeTokenSetters = object.whitelistedFeeTokenSetters.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.whitelistedFeeTokenSetters) {
            obj.whitelistedFeeTokenSetters = message.whitelistedFeeTokenSetters.map((e) => e);
        }
        else {
            obj.whitelistedFeeTokenSetters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.whitelistedFeeTokenSetters = object.whitelistedFeeTokenSetters?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map