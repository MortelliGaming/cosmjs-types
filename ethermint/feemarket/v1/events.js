"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBlockGas = exports.EventFeeMarket = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.feemarket.v1";
function createBaseEventFeeMarket() {
    return {
        baseFee: "",
    };
}
exports.EventFeeMarket = {
    typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventFeeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventFeeMarket();
        if ((0, helpers_1.isSet)(object.baseFee))
            obj.baseFee = String(object.baseFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventFeeMarket();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
};
function createBaseEventBlockGas() {
    return {
        height: "",
        amount: "",
    };
}
exports.EventBlockGas = {
    typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== "") {
            writer.uint32(10).string(message.height);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBlockGas();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventBlockGas();
        if ((0, helpers_1.isSet)(object.height))
            obj.height = String(object.height);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventBlockGas();
        message.height = object.height ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
};
//# sourceMappingURL=events.js.map