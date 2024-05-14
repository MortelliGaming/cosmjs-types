"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSetPreferences = exports.ValidatorPreference = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.valsetpref.v1beta1";
function createBaseValidatorPreference() {
    return {
        valOperAddress: "",
        weight: "",
    };
}
exports.ValidatorPreference = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.valOperAddress !== "") {
            writer.uint32(10).string(message.valOperAddress);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valOperAddress = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseValidatorPreference();
        if ((0, helpers_1.isSet)(object.valOperAddress))
            obj.valOperAddress = String(object.valOperAddress);
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = String(object.weight);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.valOperAddress !== undefined && (obj.valOperAddress = message.valOperAddress);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorPreference();
        message.valOperAddress = object.valOperAddress ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
};
function createBaseValidatorSetPreferences() {
    return {
        preferences: [],
    };
}
exports.ValidatorSetPreferences = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.preferences) {
            exports.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSetPreferences();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.preferences.push(exports.ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseValidatorSetPreferences();
        if (Array.isArray(object?.preferences))
            obj.preferences = object.preferences.map((e) => exports.ValidatorPreference.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map((e) => (e ? exports.ValidatorPreference.toJSON(e) : undefined));
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSetPreferences();
        message.preferences = object.preferences?.map((e) => exports.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=state.js.map