"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionOptionsWeb3Tx = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.types.v1";
function createBaseExtensionOptionsWeb3Tx() {
    return {
        typedDataChainId: BigInt(0),
        feePayer: "",
        feePayerSig: new Uint8Array(),
    };
}
exports.ExtensionOptionsWeb3Tx = {
    typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.typedDataChainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.typedDataChainId);
        }
        if (message.feePayer !== "") {
            writer.uint32(18).string(message.feePayer);
        }
        if (message.feePayerSig.length !== 0) {
            writer.uint32(26).bytes(message.feePayerSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsWeb3Tx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typedDataChainId = reader.uint64();
                    break;
                case 2:
                    message.feePayer = reader.string();
                    break;
                case 3:
                    message.feePayerSig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseExtensionOptionsWeb3Tx();
        if ((0, helpers_1.isSet)(object.typedDataChainId))
            obj.typedDataChainId = BigInt(object.typedDataChainId.toString());
        if ((0, helpers_1.isSet)(object.feePayer))
            obj.feePayer = String(object.feePayer);
        if ((0, helpers_1.isSet)(object.feePayerSig))
            obj.feePayerSig = (0, helpers_1.bytesFromBase64)(object.feePayerSig);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.typedDataChainId !== undefined &&
            (obj.typedDataChainId = (message.typedDataChainId || BigInt(0)).toString());
        message.feePayer !== undefined && (obj.feePayer = message.feePayer);
        message.feePayerSig !== undefined &&
            (obj.feePayerSig = (0, helpers_1.base64FromBytes)(message.feePayerSig !== undefined ? message.feePayerSig : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtensionOptionsWeb3Tx();
        if (object.typedDataChainId !== undefined && object.typedDataChainId !== null) {
            message.typedDataChainId = BigInt(object.typedDataChainId.toString());
        }
        message.feePayer = object.feePayer ?? "";
        message.feePayerSig = object.feePayerSig ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=web3.js.map