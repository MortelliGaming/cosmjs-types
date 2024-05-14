"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisDenom = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        factoryDenoms: [],
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factoryDenoms) {
            exports.GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.factoryDenoms.push(exports.GenesisDenom.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.factoryDenoms))
            obj.factoryDenoms = object.factoryDenoms.map((e) => exports.GenesisDenom.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.factoryDenoms) {
            obj.factoryDenoms = message.factoryDenoms.map((e) => (e ? exports.GenesisDenom.toJSON(e) : undefined));
        }
        else {
            obj.factoryDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        message.factoryDenoms = object.factoryDenoms?.map((e) => exports.GenesisDenom.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGenesisDenom() {
    return {
        denom: "",
        authorityMetadata: authorityMetadata_1.DenomAuthorityMetadata.fromPartial({}),
    };
}
exports.GenesisDenom = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisDenom();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.authorityMetadata))
            obj.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authorityMetadata !== undefined &&
            (obj.authorityMetadata = message.authorityMetadata
                ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisDenom();
        message.denom = object.denom ?? "";
        if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
            message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map