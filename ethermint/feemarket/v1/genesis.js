"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const feemarket_1 = require("./feemarket");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.feemarket.v1";
function createBaseGenesisState() {
    return {
        params: feemarket_1.Params.fromPartial({}),
        blockGas: BigInt(0),
    };
}
exports.GenesisState = {
    typeUrl: "/ethermint.feemarket.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            feemarket_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockGas !== BigInt(0)) {
            writer.uint32(24).uint64(message.blockGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = feemarket_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blockGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = feemarket_1.Params.fromJSON(object.params);
        if ((0, helpers_1.isSet)(object.blockGas))
            obj.blockGas = BigInt(object.blockGas.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? feemarket_1.Params.toJSON(message.params) : undefined);
        message.blockGas !== undefined && (obj.blockGas = (message.blockGas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = feemarket_1.Params.fromPartial(object.params);
        }
        if (object.blockGas !== undefined && object.blockGas !== null) {
            message.blockGas = BigInt(object.blockGas.toString());
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map