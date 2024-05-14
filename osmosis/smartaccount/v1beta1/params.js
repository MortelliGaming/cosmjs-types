"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.smartaccount.v1beta1";
function createBaseParams() {
    return {
        maximumUnauthenticatedGas: BigInt(0),
        isSmartAccountActive: false,
        circuitBreakerControllers: [],
    };
}
exports.Params = {
    typeUrl: "/osmosis.smartaccount.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maximumUnauthenticatedGas !== BigInt(0)) {
            writer.uint32(8).uint64(message.maximumUnauthenticatedGas);
        }
        if (message.isSmartAccountActive === true) {
            writer.uint32(16).bool(message.isSmartAccountActive);
        }
        for (const v of message.circuitBreakerControllers) {
            writer.uint32(26).string(v);
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
                    message.maximumUnauthenticatedGas = reader.uint64();
                    break;
                case 2:
                    message.isSmartAccountActive = reader.bool();
                    break;
                case 3:
                    message.circuitBreakerControllers.push(reader.string());
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
        if ((0, helpers_1.isSet)(object.maximumUnauthenticatedGas))
            obj.maximumUnauthenticatedGas = BigInt(object.maximumUnauthenticatedGas.toString());
        if ((0, helpers_1.isSet)(object.isSmartAccountActive))
            obj.isSmartAccountActive = Boolean(object.isSmartAccountActive);
        if (Array.isArray(object?.circuitBreakerControllers))
            obj.circuitBreakerControllers = object.circuitBreakerControllers.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.maximumUnauthenticatedGas !== undefined &&
            (obj.maximumUnauthenticatedGas = (message.maximumUnauthenticatedGas || BigInt(0)).toString());
        message.isSmartAccountActive !== undefined && (obj.isSmartAccountActive = message.isSmartAccountActive);
        if (message.circuitBreakerControllers) {
            obj.circuitBreakerControllers = message.circuitBreakerControllers.map((e) => e);
        }
        else {
            obj.circuitBreakerControllers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.maximumUnauthenticatedGas !== undefined && object.maximumUnauthenticatedGas !== null) {
            message.maximumUnauthenticatedGas = BigInt(object.maximumUnauthenticatedGas.toString());
        }
        message.isSmartAccountActive = object.isSmartAccountActive ?? false;
        message.circuitBreakerControllers = object.circuitBreakerControllers?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map