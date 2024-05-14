"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const erc20_1 = require("./erc20");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.erc20.v1";
function createBaseGenesisState() {
    return {
        params: exports.Params.fromPartial({}),
        tokenPairs: [],
    };
}
exports.GenesisState = {
    typeUrl: "/evmos.erc20.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokenPairs) {
            erc20_1.TokenPair.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenPairs.push(erc20_1.TokenPair.decode(reader, reader.uint32()));
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
            obj.params = exports.Params.fromJSON(object.params);
        if (Array.isArray(object?.tokenPairs))
            obj.tokenPairs = object.tokenPairs.map((e) => erc20_1.TokenPair.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        if (message.tokenPairs) {
            obj.tokenPairs = message.tokenPairs.map((e) => (e ? erc20_1.TokenPair.toJSON(e) : undefined));
        }
        else {
            obj.tokenPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        message.tokenPairs = object.tokenPairs?.map((e) => erc20_1.TokenPair.fromPartial(e)) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        enableErc20: false,
        enableEvmHook: false,
    };
}
exports.Params = {
    typeUrl: "/evmos.erc20.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.enableErc20 === true) {
            writer.uint32(8).bool(message.enableErc20);
        }
        if (message.enableEvmHook === true) {
            writer.uint32(16).bool(message.enableEvmHook);
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
                    message.enableErc20 = reader.bool();
                    break;
                case 2:
                    message.enableEvmHook = reader.bool();
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
        if ((0, helpers_1.isSet)(object.enableErc20))
            obj.enableErc20 = Boolean(object.enableErc20);
        if ((0, helpers_1.isSet)(object.enableEvmHook))
            obj.enableEvmHook = Boolean(object.enableEvmHook);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.enableErc20 !== undefined && (obj.enableErc20 = message.enableErc20);
        message.enableEvmHook !== undefined && (obj.enableEvmHook = message.enableEvmHook);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.enableErc20 = object.enableErc20 ?? false;
        message.enableEvmHook = object.enableEvmHook ?? false;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map