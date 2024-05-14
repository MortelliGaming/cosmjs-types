"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstantiateMsg = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../../binary");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseInstantiateMsg() {
    return {
        poolAssetDenoms: [],
    };
}
exports.InstantiateMsg = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolAssetDenoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolAssetDenoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseInstantiateMsg();
        if (Array.isArray(object?.poolAssetDenoms))
            obj.poolAssetDenoms = object.poolAssetDenoms.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolAssetDenoms) {
            obj.poolAssetDenoms = message.poolAssetDenoms.map((e) => e);
        }
        else {
            obj.poolAssetDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInstantiateMsg();
        message.poolAssetDenoms = object.poolAssetDenoms?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=instantiate_msg.js.map