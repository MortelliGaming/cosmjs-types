"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.AuthenticatorData = exports.protobufPackage = void 0;
/* eslint-disable */
const models_1 = require("./models");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.smartaccount.v1beta1";
function createBaseAuthenticatorData() {
    return {
        address: "",
        authenticators: [],
    };
}
exports.AuthenticatorData = {
    typeUrl: "/osmosis.smartaccount.v1beta1.AuthenticatorData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.authenticators) {
            models_1.AccountAuthenticator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthenticatorData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.authenticators.push(models_1.AccountAuthenticator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAuthenticatorData();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if (Array.isArray(object?.authenticators))
            obj.authenticators = object.authenticators.map((e) => models_1.AccountAuthenticator.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.authenticators) {
            obj.authenticators = message.authenticators.map((e) => e ? models_1.AccountAuthenticator.toJSON(e) : undefined);
        }
        else {
            obj.authenticators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuthenticatorData();
        message.address = object.address ?? "";
        message.authenticators = object.authenticators?.map((e) => models_1.AccountAuthenticator.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        nextAuthenticatorId: BigInt(0),
        authenticatorData: [],
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.smartaccount.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextAuthenticatorId !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextAuthenticatorId);
        }
        for (const v of message.authenticatorData) {
            exports.AuthenticatorData.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nextAuthenticatorId = reader.uint64();
                    break;
                case 3:
                    message.authenticatorData.push(exports.AuthenticatorData.decode(reader, reader.uint32()));
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
            obj.params = params_1.Params.fromJSON(object.params);
        if ((0, helpers_1.isSet)(object.nextAuthenticatorId))
            obj.nextAuthenticatorId = BigInt(object.nextAuthenticatorId.toString());
        if (Array.isArray(object?.authenticatorData))
            obj.authenticatorData = object.authenticatorData.map((e) => exports.AuthenticatorData.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.nextAuthenticatorId !== undefined &&
            (obj.nextAuthenticatorId = (message.nextAuthenticatorId || BigInt(0)).toString());
        if (message.authenticatorData) {
            obj.authenticatorData = message.authenticatorData.map((e) => e ? exports.AuthenticatorData.toJSON(e) : undefined);
        }
        else {
            obj.authenticatorData = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        if (object.nextAuthenticatorId !== undefined && object.nextAuthenticatorId !== null) {
            message.nextAuthenticatorId = BigInt(object.nextAuthenticatorId.toString());
        }
        message.authenticatorData = object.authenticatorData?.map((e) => exports.AuthenticatorData.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map