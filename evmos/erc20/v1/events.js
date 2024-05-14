"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventConvertERC20 = exports.EventConvertCoin = exports.EventToggleTokenConversion = exports.EventRegisterPair = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.erc20.v1";
function createBaseEventRegisterPair() {
    return {
        denom: "",
        erc20Address: "",
    };
}
exports.EventRegisterPair = {
    typeUrl: "/evmos.erc20.v1.EventRegisterPair",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.erc20Address !== "") {
            writer.uint32(18).string(message.erc20Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRegisterPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.erc20Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventRegisterPair();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.erc20Address))
            obj.erc20Address = String(object.erc20Address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventRegisterPair();
        message.denom = object.denom ?? "";
        message.erc20Address = object.erc20Address ?? "";
        return message;
    },
};
function createBaseEventToggleTokenConversion() {
    return {
        denom: "",
        erc20Address: "",
    };
}
exports.EventToggleTokenConversion = {
    typeUrl: "/evmos.erc20.v1.EventToggleTokenConversion",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.erc20Address !== "") {
            writer.uint32(18).string(message.erc20Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventToggleTokenConversion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.erc20Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventToggleTokenConversion();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.erc20Address))
            obj.erc20Address = String(object.erc20Address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventToggleTokenConversion();
        message.denom = object.denom ?? "";
        message.erc20Address = object.erc20Address ?? "";
        return message;
    },
};
function createBaseEventConvertCoin() {
    return {
        sender: "",
        receiver: "",
        amount: "",
        denom: "",
        erc20Address: "",
    };
}
exports.EventConvertCoin = {
    typeUrl: "/evmos.erc20.v1.EventConvertCoin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.erc20Address !== "") {
            writer.uint32(42).string(message.erc20Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConvertCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.erc20Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventConvertCoin();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.erc20Address))
            obj.erc20Address = String(object.erc20Address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventConvertCoin();
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.amount = object.amount ?? "";
        message.denom = object.denom ?? "";
        message.erc20Address = object.erc20Address ?? "";
        return message;
    },
};
function createBaseEventConvertERC20() {
    return {
        sender: "",
        receiver: "",
        amount: "",
        denom: "",
        contractAddress: "",
    };
}
exports.EventConvertERC20 = {
    typeUrl: "/evmos.erc20.v1.EventConvertERC20",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConvertERC20();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventConvertERC20();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.contractAddress))
            obj.contractAddress = String(object.contractAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventConvertERC20();
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.amount = object.amount ?? "";
        message.denom = object.denom ?? "";
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
};
//# sourceMappingURL=events.js.map