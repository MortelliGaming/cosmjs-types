"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisAccount = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const evm_1 = require("./evm");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.evm.v1";
function createBaseGenesisState() {
    return {
        accounts: [],
        params: evm_1.Params.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/ethermint.evm.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            exports.GenesisAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            evm_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.accounts.push(exports.GenesisAccount.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = evm_1.Params.decode(reader, reader.uint32());
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
        if (Array.isArray(object?.accounts))
            obj.accounts = object.accounts.map((e) => exports.GenesisAccount.fromJSON(e));
        if ((0, helpers_1.isSet)(object.params))
            obj.params = evm_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => (e ? exports.GenesisAccount.toJSON(e) : undefined));
        }
        else {
            obj.accounts = [];
        }
        message.params !== undefined && (obj.params = message.params ? evm_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.accounts = object.accounts?.map((e) => exports.GenesisAccount.fromPartial(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseGenesisAccount() {
    return {
        address: "",
        code: "",
        storage: [],
    };
}
exports.GenesisAccount = {
    typeUrl: "/ethermint.evm.v1.GenesisAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        for (const v of message.storage) {
            evm_1.State.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.storage.push(evm_1.State.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisAccount();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_1.isSet)(object.code))
            obj.code = String(object.code);
        if (Array.isArray(object?.storage))
            obj.storage = object.storage.map((e) => evm_1.State.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.code !== undefined && (obj.code = message.code);
        if (message.storage) {
            obj.storage = message.storage.map((e) => (e ? evm_1.State.toJSON(e) : undefined));
        }
        else {
            obj.storage = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisAccount();
        message.address = object.address ?? "";
        message.code = object.code ?? "";
        message.storage = object.storage?.map((e) => evm_1.State.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map