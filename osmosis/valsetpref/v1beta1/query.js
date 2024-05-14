"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.UserValidatorPreferencesResponse = exports.UserValidatorPreferencesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const state_1 = require("./state");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.valsetpref.v1beta1";
function createBaseUserValidatorPreferencesRequest() {
    return {
        address: "",
    };
}
exports.UserValidatorPreferencesRequest = {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserValidatorPreferencesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserValidatorPreferencesRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserValidatorPreferencesRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseUserValidatorPreferencesResponse() {
    return {
        preferences: [],
    };
}
exports.UserValidatorPreferencesResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserValidatorPreferencesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserValidatorPreferencesResponse();
        if (Array.isArray(object?.preferences))
            obj.preferences = object.preferences.map((e) => state_1.ValidatorPreference.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map((e) => (e ? state_1.ValidatorPreference.toJSON(e) : undefined));
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserValidatorPreferencesResponse();
        message.preferences = object.preferences?.map((e) => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.UserValidatorPreferences = this.UserValidatorPreferences.bind(this);
    }
    UserValidatorPreferences(request) {
        const data = exports.UserValidatorPreferencesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Query", "UserValidatorPreferences", data);
        return promise.then((data) => exports.UserValidatorPreferencesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map