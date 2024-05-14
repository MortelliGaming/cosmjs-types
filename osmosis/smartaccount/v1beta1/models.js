"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAuthenticator = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.smartaccount.v1beta1";
function createBaseAccountAuthenticator() {
    return {
        id: BigInt(0),
        type: "",
        config: new Uint8Array(),
    };
}
exports.AccountAuthenticator = {
    typeUrl: "/osmosis.smartaccount.v1beta1.AccountAuthenticator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.config.length !== 0) {
            writer.uint32(26).bytes(message.config);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountAuthenticator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.config = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccountAuthenticator();
        if ((0, helpers_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_1.isSet)(object.type))
            obj.type = String(object.type);
        if ((0, helpers_1.isSet)(object.config))
            obj.config = (0, helpers_1.bytesFromBase64)(object.config);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.type !== undefined && (obj.type = message.type);
        message.config !== undefined &&
            (obj.config = (0, helpers_1.base64FromBytes)(message.config !== undefined ? message.config : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountAuthenticator();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        message.type = object.type ?? "";
        message.config = object.config ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=models.js.map