"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBlockBloom = exports.EventMessage = exports.EventTxLog = exports.EventEthereumTx = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.evm.v1";
function createBaseEventEthereumTx() {
    return {
        amount: "",
        ethHash: "",
        index: "",
        gasUsed: "",
        hash: "",
        recipient: "",
        ethTxFailed: "",
    };
}
exports.EventEthereumTx = {
    typeUrl: "/ethermint.evm.v1.EventEthereumTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.ethHash !== "") {
            writer.uint32(18).string(message.ethHash);
        }
        if (message.index !== "") {
            writer.uint32(26).string(message.index);
        }
        if (message.gasUsed !== "") {
            writer.uint32(34).string(message.gasUsed);
        }
        if (message.hash !== "") {
            writer.uint32(42).string(message.hash);
        }
        if (message.recipient !== "") {
            writer.uint32(50).string(message.recipient);
        }
        if (message.ethTxFailed !== "") {
            writer.uint32(58).string(message.ethTxFailed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEthereumTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.ethHash = reader.string();
                    break;
                case 3:
                    message.index = reader.string();
                    break;
                case 4:
                    message.gasUsed = reader.string();
                    break;
                case 5:
                    message.hash = reader.string();
                    break;
                case 6:
                    message.recipient = reader.string();
                    break;
                case 7:
                    message.ethTxFailed = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventEthereumTx();
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        if ((0, helpers_1.isSet)(object.ethHash))
            obj.ethHash = String(object.ethHash);
        if ((0, helpers_1.isSet)(object.index))
            obj.index = String(object.index);
        if ((0, helpers_1.isSet)(object.gasUsed))
            obj.gasUsed = String(object.gasUsed);
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = String(object.hash);
        if ((0, helpers_1.isSet)(object.recipient))
            obj.recipient = String(object.recipient);
        if ((0, helpers_1.isSet)(object.ethTxFailed))
            obj.ethTxFailed = String(object.ethTxFailed);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.ethHash !== undefined && (obj.ethHash = message.ethHash);
        message.index !== undefined && (obj.index = message.index);
        message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
        message.hash !== undefined && (obj.hash = message.hash);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.ethTxFailed !== undefined && (obj.ethTxFailed = message.ethTxFailed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventEthereumTx();
        message.amount = object.amount ?? "";
        message.ethHash = object.ethHash ?? "";
        message.index = object.index ?? "";
        message.gasUsed = object.gasUsed ?? "";
        message.hash = object.hash ?? "";
        message.recipient = object.recipient ?? "";
        message.ethTxFailed = object.ethTxFailed ?? "";
        return message;
    },
};
function createBaseEventTxLog() {
    return {
        txLogs: [],
    };
}
exports.EventTxLog = {
    typeUrl: "/ethermint.evm.v1.EventTxLog",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txLogs) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTxLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txLogs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventTxLog();
        if (Array.isArray(object?.txLogs))
            obj.txLogs = object.txLogs.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.txLogs) {
            obj.txLogs = message.txLogs.map((e) => e);
        }
        else {
            obj.txLogs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventTxLog();
        message.txLogs = object.txLogs?.map((e) => e) || [];
        return message;
    },
};
function createBaseEventMessage() {
    return {
        module: "",
        sender: "",
        txType: "",
    };
}
exports.EventMessage = {
    typeUrl: "/ethermint.evm.v1.EventMessage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.txType !== "") {
            writer.uint32(26).string(message.txType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.txType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventMessage();
        if ((0, helpers_1.isSet)(object.module))
            obj.module = String(object.module);
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.txType))
            obj.txType = String(object.txType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.sender !== undefined && (obj.sender = message.sender);
        message.txType !== undefined && (obj.txType = message.txType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventMessage();
        message.module = object.module ?? "";
        message.sender = object.sender ?? "";
        message.txType = object.txType ?? "";
        return message;
    },
};
function createBaseEventBlockBloom() {
    return {
        bloom: "",
    };
}
exports.EventBlockBloom = {
    typeUrl: "/ethermint.evm.v1.EventBlockBloom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bloom !== "") {
            writer.uint32(10).string(message.bloom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBlockBloom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bloom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventBlockBloom();
        if ((0, helpers_1.isSet)(object.bloom))
            obj.bloom = String(object.bloom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.bloom !== undefined && (obj.bloom = message.bloom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventBlockBloom();
        message.bloom = object.bloom ?? "";
        return message;
    },
};
//# sourceMappingURL=events.js.map