"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmWasmPool = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseCosmWasmPool() {
    return {
        contractAddress: "",
        poolId: BigInt(0),
        codeId: BigInt(0),
        instantiateMsg: new Uint8Array(),
    };
}
exports.CosmWasmPool = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.instantiateMsg.length !== 0) {
            writer.uint32(34).bytes(message.instantiateMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmWasmPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.instantiateMsg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCosmWasmPool();
        if ((0, helpers_1.isSet)(object.contractAddress))
            obj.contractAddress = String(object.contractAddress);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.codeId))
            obj.codeId = BigInt(object.codeId.toString());
        if ((0, helpers_1.isSet)(object.instantiateMsg))
            obj.instantiateMsg = (0, helpers_1.bytesFromBase64)(object.instantiateMsg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.instantiateMsg !== undefined &&
            (obj.instantiateMsg = (0, helpers_1.base64FromBytes)(message.instantiateMsg !== undefined ? message.instantiateMsg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCosmWasmPool();
        message.contractAddress = object.contractAddress ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = BigInt(object.codeId.toString());
        }
        message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=pool.js.map