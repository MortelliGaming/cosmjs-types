"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreateCosmWasmPoolResponse = exports.MsgCreateCosmWasmPool = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseMsgCreateCosmWasmPool() {
    return {
        codeId: BigInt(0),
        instantiateMsg: new Uint8Array(),
        sender: "",
    };
}
exports.MsgCreateCosmWasmPool = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.instantiateMsg.length !== 0) {
            writer.uint32(18).bytes(message.instantiateMsg);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCosmWasmPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.instantiateMsg = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateCosmWasmPool();
        if ((0, helpers_1.isSet)(object.codeId))
            obj.codeId = BigInt(object.codeId.toString());
        if ((0, helpers_1.isSet)(object.instantiateMsg))
            obj.instantiateMsg = (0, helpers_1.bytesFromBase64)(object.instantiateMsg);
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.instantiateMsg !== undefined &&
            (obj.instantiateMsg = (0, helpers_1.base64FromBytes)(message.instantiateMsg !== undefined ? message.instantiateMsg : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateCosmWasmPool();
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = BigInt(object.codeId.toString());
        }
        message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgCreateCosmWasmPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
exports.MsgCreateCosmWasmPoolResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCosmWasmPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateCosmWasmPoolResponse();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateCosmWasmPoolResponse();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
//# sourceMappingURL=tx.js.map