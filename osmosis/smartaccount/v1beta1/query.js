"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.GetAuthenticatorResponse = exports.GetAuthenticatorRequest = exports.GetAuthenticatorsResponse = exports.GetAuthenticatorsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const models_1 = require("./models");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.smartaccount.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = params_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseGetAuthenticatorsRequest() {
    return {
        account: "",
    };
}
exports.GetAuthenticatorsRequest = {
    typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetAuthenticatorsRequest();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorsRequest();
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseGetAuthenticatorsResponse() {
    return {
        accountAuthenticators: [],
    };
}
exports.GetAuthenticatorsResponse = {
    typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accountAuthenticators) {
            models_1.AccountAuthenticator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAuthenticators.push(models_1.AccountAuthenticator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetAuthenticatorsResponse();
        if (Array.isArray(object?.accountAuthenticators))
            obj.accountAuthenticators = object.accountAuthenticators.map((e) => models_1.AccountAuthenticator.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.accountAuthenticators) {
            obj.accountAuthenticators = message.accountAuthenticators.map((e) => e ? models_1.AccountAuthenticator.toJSON(e) : undefined);
        }
        else {
            obj.accountAuthenticators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorsResponse();
        message.accountAuthenticators =
            object.accountAuthenticators?.map((e) => models_1.AccountAuthenticator.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetAuthenticatorRequest() {
    return {
        account: "",
        authenticatorId: BigInt(0),
    };
}
exports.GetAuthenticatorRequest = {
    typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.authenticatorId !== BigInt(0)) {
            writer.uint32(16).uint64(message.authenticatorId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.authenticatorId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetAuthenticatorRequest();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.authenticatorId))
            obj.authenticatorId = BigInt(object.authenticatorId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.authenticatorId !== undefined &&
            (obj.authenticatorId = (message.authenticatorId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorRequest();
        message.account = object.account ?? "";
        if (object.authenticatorId !== undefined && object.authenticatorId !== null) {
            message.authenticatorId = BigInt(object.authenticatorId.toString());
        }
        return message;
    },
};
function createBaseGetAuthenticatorResponse() {
    return {
        accountAuthenticator: undefined,
    };
}
exports.GetAuthenticatorResponse = {
    typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.accountAuthenticator !== undefined) {
            models_1.AccountAuthenticator.encode(message.accountAuthenticator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAuthenticator = models_1.AccountAuthenticator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetAuthenticatorResponse();
        if ((0, helpers_1.isSet)(object.accountAuthenticator))
            obj.accountAuthenticator = models_1.AccountAuthenticator.fromJSON(object.accountAuthenticator);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.accountAuthenticator !== undefined &&
            (obj.accountAuthenticator = message.accountAuthenticator
                ? models_1.AccountAuthenticator.toJSON(message.accountAuthenticator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorResponse();
        if (object.accountAuthenticator !== undefined && object.accountAuthenticator !== null) {
            message.accountAuthenticator = models_1.AccountAuthenticator.fromPartial(object.accountAuthenticator);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.GetAuthenticator = this.GetAuthenticator.bind(this);
        this.GetAuthenticators = this.GetAuthenticators.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetAuthenticator(request) {
        const data = exports.GetAuthenticatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "GetAuthenticator", data);
        return promise.then((data) => exports.GetAuthenticatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetAuthenticators(request) {
        const data = exports.GetAuthenticatorsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "GetAuthenticators", data);
        return promise.then((data) => exports.GetAuthenticatorsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map