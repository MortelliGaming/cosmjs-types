"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigratePoolContractsProposal = exports.UploadCosmWasmPoolCodeAndWhiteListProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseUploadCosmWasmPoolCodeAndWhiteListProposal() {
    return {
        title: "",
        description: "",
        wasmByteCode: new Uint8Array(),
    };
}
exports.UploadCosmWasmPoolCodeAndWhiteListProposal = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.UploadCosmWasmPoolCodeAndWhiteListProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(26).bytes(message.wasmByteCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUploadCosmWasmPoolCodeAndWhiteListProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.wasmByteCode = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUploadCosmWasmPoolCodeAndWhiteListProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if ((0, helpers_1.isSet)(object.wasmByteCode))
            obj.wasmByteCode = (0, helpers_1.bytesFromBase64)(object.wasmByteCode);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.wasmByteCode !== undefined &&
            (obj.wasmByteCode = (0, helpers_1.base64FromBytes)(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUploadCosmWasmPoolCodeAndWhiteListProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        return message;
    },
};
function createBaseMigratePoolContractsProposal() {
    return {
        title: "",
        description: "",
        poolIds: [],
        newCodeId: BigInt(0),
        wasmByteCode: new Uint8Array(),
        migrateMsg: new Uint8Array(),
    };
}
exports.MigratePoolContractsProposal = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.MigratePoolContractsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.newCodeId !== BigInt(0)) {
            writer.uint32(32).uint64(message.newCodeId);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(42).bytes(message.wasmByteCode);
        }
        if (message.migrateMsg.length !== 0) {
            writer.uint32(50).bytes(message.migrateMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigratePoolContractsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.poolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.poolIds.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.newCodeId = reader.uint64();
                    break;
                case 5:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 6:
                    message.migrateMsg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMigratePoolContractsProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.poolIds))
            obj.poolIds = object.poolIds.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.newCodeId))
            obj.newCodeId = BigInt(object.newCodeId.toString());
        if ((0, helpers_1.isSet)(object.wasmByteCode))
            obj.wasmByteCode = (0, helpers_1.bytesFromBase64)(object.wasmByteCode);
        if ((0, helpers_1.isSet)(object.migrateMsg))
            obj.migrateMsg = (0, helpers_1.bytesFromBase64)(object.migrateMsg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.poolIds) {
            obj.poolIds = message.poolIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.poolIds = [];
        }
        message.newCodeId !== undefined && (obj.newCodeId = (message.newCodeId || BigInt(0)).toString());
        message.wasmByteCode !== undefined &&
            (obj.wasmByteCode = (0, helpers_1.base64FromBytes)(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
        message.migrateMsg !== undefined &&
            (obj.migrateMsg = (0, helpers_1.base64FromBytes)(message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMigratePoolContractsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.poolIds = object.poolIds?.map((e) => BigInt(e.toString())) || [];
        if (object.newCodeId !== undefined && object.newCodeId !== null) {
            message.newCodeId = BigInt(object.newCodeId.toString());
        }
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.migrateMsg = object.migrateMsg ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=gov.js.map