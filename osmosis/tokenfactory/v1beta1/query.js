"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAllBeforeSendHooksAddressesResponse = exports.QueryAllBeforeSendHooksAddressesRequest = exports.QueryBeforeSendHookAddressResponse = exports.QueryBeforeSendHookAddressRequest = exports.QueryDenomsFromCreatorResponse = exports.QueryDenomsFromCreatorRequest = exports.QueryDenomAuthorityMetadataResponse = exports.QueryDenomAuthorityMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
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
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
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
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: "",
    };
}
exports.QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomAuthorityMetadataRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: authorityMetadata_1.DenomAuthorityMetadata.fromPartial({}),
    };
}
exports.QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryDenomAuthorityMetadataResponse();
        if ((0, helpers_1.isSet)(object.authorityMetadata))
            obj.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authorityMetadata !== undefined &&
            (obj.authorityMetadata = message.authorityMetadata
                ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
            message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
        }
        return message;
    },
};
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: "",
    };
}
exports.QueryDenomsFromCreatorRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomsFromCreatorRequest();
        if ((0, helpers_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? "";
        return message;
    },
};
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: [],
    };
}
exports.QueryDenomsFromCreatorResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomsFromCreatorResponse();
        if (Array.isArray(object?.denoms))
            obj.denoms = object.denoms.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryBeforeSendHookAddressRequest() {
    return {
        denom: "",
    };
}
exports.QueryBeforeSendHookAddressRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeforeSendHookAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBeforeSendHookAddressRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBeforeSendHookAddressRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryBeforeSendHookAddressResponse() {
    return {
        cosmwasmAddress: "",
    };
}
exports.QueryBeforeSendHookAddressResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cosmwasmAddress !== "") {
            writer.uint32(10).string(message.cosmwasmAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeforeSendHookAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmwasmAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBeforeSendHookAddressResponse();
        if ((0, helpers_1.isSet)(object.cosmwasmAddress))
            obj.cosmwasmAddress = String(object.cosmwasmAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.cosmwasmAddress !== undefined && (obj.cosmwasmAddress = message.cosmwasmAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBeforeSendHookAddressResponse();
        message.cosmwasmAddress = object.cosmwasmAddress ?? "";
        return message;
    },
};
function createBaseQueryAllBeforeSendHooksAddressesRequest() {
    return {};
}
exports.QueryAllBeforeSendHooksAddressesRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
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
        const obj = createBaseQueryAllBeforeSendHooksAddressesRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
        return message;
    },
};
function createBaseQueryAllBeforeSendHooksAddressesResponse() {
    return {
        denoms: [],
        beforeSendHookAddresses: [],
    };
}
exports.QueryAllBeforeSendHooksAddressesResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        for (const v of message.beforeSendHookAddresses) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                case 2:
                    message.beforeSendHookAddresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllBeforeSendHooksAddressesResponse();
        if (Array.isArray(object?.denoms))
            obj.denoms = object.denoms.map((e) => String(e));
        if (Array.isArray(object?.beforeSendHookAddresses))
            obj.beforeSendHookAddresses = object.beforeSendHookAddresses.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        if (message.beforeSendHookAddresses) {
            obj.beforeSendHookAddresses = message.beforeSendHookAddresses.map((e) => e);
        }
        else {
            obj.beforeSendHookAddresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
        message.denoms = object.denoms?.map((e) => e) || [];
        message.beforeSendHookAddresses = object.beforeSendHookAddresses?.map((e) => e) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.DenomAuthorityMetadata = this.DenomAuthorityMetadata.bind(this);
        this.DenomsFromCreator = this.DenomsFromCreator.bind(this);
        this.BeforeSendHookAddress = this.BeforeSendHookAddress.bind(this);
        this.AllBeforeSendHooksAddresses = this.AllBeforeSendHooksAddresses.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    DenomAuthorityMetadata(request) {
        const data = exports.QueryDenomAuthorityMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
        return promise.then((data) => exports.QueryDenomAuthorityMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    DenomsFromCreator(request) {
        const data = exports.QueryDenomsFromCreatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
        return promise.then((data) => exports.QueryDenomsFromCreatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    BeforeSendHookAddress(request) {
        const data = exports.QueryBeforeSendHookAddressRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "BeforeSendHookAddress", data);
        return promise.then((data) => exports.QueryBeforeSendHookAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    AllBeforeSendHooksAddresses(request = {}) {
        const data = exports.QueryAllBeforeSendHooksAddressesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "AllBeforeSendHooksAddresses", data);
        return promise.then((data) => exports.QueryAllBeforeSendHooksAddressesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map