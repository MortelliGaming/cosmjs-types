"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
function createBaseParams() {
    return {
        denomCreationFee: [],
        denomCreationGasConsume: undefined,
    };
}
exports.Params = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denomCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.denomCreationGasConsume !== undefined) {
            writer.uint32(16).uint64(message.denomCreationGasConsume);
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
                    message.denomCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.denomCreationGasConsume = reader.uint64();
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
        if (Array.isArray(object?.denomCreationFee))
            obj.denomCreationFee = object.denomCreationFee.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.denomCreationGasConsume))
            obj.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denomCreationFee = message.denomCreationFee.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.denomCreationFee = [];
        }
        if (message.denomCreationGasConsume !== undefined) {
            obj.denomCreationGasConsume = message.denomCreationGasConsume.toString();
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denomCreationFee = object.denomCreationFee?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
            message.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map