"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeToken = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.txfees.v1beta1";
function createBaseFeeToken() {
    return {
        denom: "",
        poolID: BigInt(0),
    };
}
exports.FeeToken = {
    typeUrl: "/osmosis.txfees.v1beta1.FeeToken",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.poolID !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.poolID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFeeToken();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.poolID))
            obj.poolID = BigInt(object.poolID.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeeToken();
        message.denom = object.denom ?? "";
        if (object.poolID !== undefined && object.poolID !== null) {
            message.poolID = BigInt(object.poolID.toString());
        }
        return message;
    },
};
//# sourceMappingURL=feetoken.js.map