"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.SpotPriceResponse = exports.SpotPriceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolmanager.v2";
function createBaseSpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: "",
        quoteAssetDenom: "",
    };
}
exports.SpotPriceRequest = {
    typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAssetDenom !== "") {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        if (message.quoteAssetDenom !== "") {
            writer.uint32(26).string(message.quoteAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                case 3:
                    message.quoteAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSpotPriceRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.baseAssetDenom))
            obj.baseAssetDenom = String(object.baseAssetDenom);
        if ((0, helpers_1.isSet)(object.quoteAssetDenom))
            obj.quoteAssetDenom = String(object.quoteAssetDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
        message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.baseAssetDenom = object.baseAssetDenom ?? "";
        message.quoteAssetDenom = object.quoteAssetDenom ?? "";
        return message;
    },
};
function createBaseSpotPriceResponse() {
    return {
        spotPrice: "",
    };
}
exports.SpotPriceResponse = {
    typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseSpotPriceResponse();
        if ((0, helpers_1.isSet)(object.spotPrice))
            obj.spotPrice = String(object.spotPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceResponse();
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SpotPriceV2 = this.SpotPriceV2.bind(this);
    }
    SpotPriceV2(request) {
        const data = exports.SpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v2.Query", "SpotPriceV2", data);
        return promise.then((data) => exports.SpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map