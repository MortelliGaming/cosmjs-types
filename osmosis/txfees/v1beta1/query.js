"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryEipBaseFeeResponse = exports.QueryEipBaseFeeRequest = exports.QueryBaseDenomResponse = exports.QueryBaseDenomRequest = exports.QueryDenomPoolIdResponse = exports.QueryDenomPoolIdRequest = exports.QueryDenomSpotPriceResponse = exports.QueryDenomSpotPriceRequest = exports.QueryFeeTokensResponse = exports.QueryFeeTokensRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.txfees.v1beta1";
function createBaseQueryFeeTokensRequest() {
    return {};
}
exports.QueryFeeTokensRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeTokensRequest();
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
        const obj = createBaseQueryFeeTokensRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryFeeTokensRequest();
        return message;
    },
};
function createBaseQueryFeeTokensResponse() {
    return {
        feeTokens: [],
    };
}
exports.QueryFeeTokensResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.feeTokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeTokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryFeeTokensResponse();
        if (Array.isArray(object?.feeTokens))
            obj.feeTokens = object.feeTokens.map((e) => feetoken_1.FeeToken.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.feeTokens) {
            obj.feeTokens = message.feeTokens.map((e) => (e ? feetoken_1.FeeToken.toJSON(e) : undefined));
        }
        else {
            obj.feeTokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeTokensResponse();
        message.feeTokens = object.feeTokens?.map((e) => feetoken_1.FeeToken.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryDenomSpotPriceRequest() {
    return {
        denom: "",
    };
}
exports.QueryDenomSpotPriceRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomSpotPriceRequest();
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
        const obj = createBaseQueryDenomSpotPriceRequest();
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
        const message = createBaseQueryDenomSpotPriceRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryDenomSpotPriceResponse() {
    return {
        poolID: BigInt(0),
        spotPrice: "",
    };
}
exports.QueryDenomSpotPriceResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolID !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolID);
        }
        if (message.spotPrice !== "") {
            writer.uint32(18).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomSpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolID = reader.uint64();
                    break;
                case 2:
                    message.spotPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomSpotPriceResponse();
        if ((0, helpers_1.isSet)(object.poolID))
            obj.poolID = BigInt(object.poolID.toString());
        if ((0, helpers_1.isSet)(object.spotPrice))
            obj.spotPrice = String(object.spotPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
        message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomSpotPriceResponse();
        if (object.poolID !== undefined && object.poolID !== null) {
            message.poolID = BigInt(object.poolID.toString());
        }
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
};
function createBaseQueryDenomPoolIdRequest() {
    return {
        denom: "",
    };
}
exports.QueryDenomPoolIdRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomPoolIdRequest();
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
        const obj = createBaseQueryDenomPoolIdRequest();
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
        const message = createBaseQueryDenomPoolIdRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryDenomPoolIdResponse() {
    return {
        poolID: BigInt(0),
    };
}
exports.QueryDenomPoolIdResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolID !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomPoolIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomPoolIdResponse();
        if ((0, helpers_1.isSet)(object.poolID))
            obj.poolID = BigInt(object.poolID.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomPoolIdResponse();
        if (object.poolID !== undefined && object.poolID !== null) {
            message.poolID = BigInt(object.poolID.toString());
        }
        return message;
    },
};
function createBaseQueryBaseDenomRequest() {
    return {};
}
exports.QueryBaseDenomRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseDenomRequest();
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
        const obj = createBaseQueryBaseDenomRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryBaseDenomRequest();
        return message;
    },
};
function createBaseQueryBaseDenomResponse() {
    return {
        baseDenom: "",
    };
}
exports.QueryBaseDenomResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseDenom !== "") {
            writer.uint32(10).string(message.baseDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBaseDenomResponse();
        if ((0, helpers_1.isSet)(object.baseDenom))
            obj.baseDenom = String(object.baseDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBaseDenomResponse();
        message.baseDenom = object.baseDenom ?? "";
        return message;
    },
};
function createBaseQueryEipBaseFeeRequest() {
    return {};
}
exports.QueryEipBaseFeeRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryEipBaseFeeRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEipBaseFeeRequest();
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
        const obj = createBaseQueryEipBaseFeeRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryEipBaseFeeRequest();
        return message;
    },
};
function createBaseQueryEipBaseFeeResponse() {
    return {
        baseFee: "",
    };
}
exports.QueryEipBaseFeeResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryEipBaseFeeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEipBaseFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryEipBaseFeeResponse();
        if ((0, helpers_1.isSet)(object.baseFee))
            obj.baseFee = String(object.baseFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEipBaseFeeResponse();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.FeeTokens = this.FeeTokens.bind(this);
        this.DenomSpotPrice = this.DenomSpotPrice.bind(this);
        this.DenomPoolId = this.DenomPoolId.bind(this);
        this.BaseDenom = this.BaseDenom.bind(this);
        this.GetEipBaseFee = this.GetEipBaseFee.bind(this);
    }
    FeeTokens(request = {}) {
        const data = exports.QueryFeeTokensRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
        return promise.then((data) => exports.QueryFeeTokensResponse.decode(new binary_1.BinaryReader(data)));
    }
    DenomSpotPrice(request) {
        const data = exports.QueryDenomSpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
        return promise.then((data) => exports.QueryDenomSpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
    DenomPoolId(request) {
        const data = exports.QueryDenomPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
        return promise.then((data) => exports.QueryDenomPoolIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    BaseDenom(request = {}) {
        const data = exports.QueryBaseDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
        return promise.then((data) => exports.QueryBaseDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetEipBaseFee(request = {}) {
        const data = exports.QueryEipBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "GetEipBaseFee", data);
        return promise.then((data) => exports.QueryEipBaseFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map