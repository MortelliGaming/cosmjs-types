"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalSharesQueryMsgResponse = exports.GetTotalSharesQueryMsg = exports.GetTotalPoolLiquidityQueryMsgResponse = exports.GetTotalPoolLiquidityQueryMsg = exports.EmptyStruct = exports.SpotPriceQueryMsgResponse = exports.SpotPriceQueryMsg = exports.SpotPrice = exports.GetSwapFeeQueryMsgResponse = exports.GetSwapFeeQueryMsg = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseGetSwapFeeQueryMsg() {
    return {
        getSwapFee: exports.EmptyStruct.fromPartial({}),
    };
}
exports.GetSwapFeeQueryMsg = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsg",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.getSwapFee !== undefined) {
            exports.EmptyStruct.encode(message.getSwapFee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSwapFeeQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.getSwapFee = exports.EmptyStruct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetSwapFeeQueryMsg();
        if ((0, helpers_1.isSet)(object.getSwapFee))
            obj.getSwapFee = exports.EmptyStruct.fromJSON(object.getSwapFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.getSwapFee !== undefined &&
            (obj.getSwapFee = message.getSwapFee ? exports.EmptyStruct.toJSON(message.getSwapFee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetSwapFeeQueryMsg();
        if (object.getSwapFee !== undefined && object.getSwapFee !== null) {
            message.getSwapFee = exports.EmptyStruct.fromPartial(object.getSwapFee);
        }
        return message;
    },
};
function createBaseGetSwapFeeQueryMsgResponse() {
    return {
        swapFee: "",
    };
}
exports.GetSwapFeeQueryMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapFee !== "") {
            writer.uint32(26).string(message.swapFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSwapFeeQueryMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.swapFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetSwapFeeQueryMsgResponse();
        if ((0, helpers_1.isSet)(object.swapFee))
            obj.swapFee = String(object.swapFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetSwapFeeQueryMsgResponse();
        message.swapFee = object.swapFee ?? "";
        return message;
    },
};
function createBaseSpotPrice() {
    return {
        quoteAssetDenom: "",
        baseAssetDenom: "",
    };
}
exports.SpotPrice = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPrice",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quoteAssetDenom !== "") {
            writer.uint32(10).string(message.quoteAssetDenom);
        }
        if (message.baseAssetDenom !== "") {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quoteAssetDenom = reader.string();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSpotPrice();
        if ((0, helpers_1.isSet)(object.quoteAssetDenom))
            obj.quoteAssetDenom = String(object.quoteAssetDenom);
        if ((0, helpers_1.isSet)(object.baseAssetDenom))
            obj.baseAssetDenom = String(object.baseAssetDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
        message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSpotPrice();
        message.quoteAssetDenom = object.quoteAssetDenom ?? "";
        message.baseAssetDenom = object.baseAssetDenom ?? "";
        return message;
    },
};
function createBaseSpotPriceQueryMsg() {
    return {
        spotPrice: exports.SpotPrice.fromPartial({}),
    };
}
exports.SpotPriceQueryMsg = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsg",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== undefined) {
            exports.SpotPrice.encode(message.spotPrice, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = exports.SpotPrice.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSpotPriceQueryMsg();
        if ((0, helpers_1.isSet)(object.spotPrice))
            obj.spotPrice = exports.SpotPrice.fromJSON(object.spotPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.spotPrice !== undefined &&
            (obj.spotPrice = message.spotPrice ? exports.SpotPrice.toJSON(message.spotPrice) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceQueryMsg();
        if (object.spotPrice !== undefined && object.spotPrice !== null) {
            message.spotPrice = exports.SpotPrice.fromPartial(object.spotPrice);
        }
        return message;
    },
};
function createBaseSpotPriceQueryMsgResponse() {
    return {
        spotPrice: "",
    };
}
exports.SpotPriceQueryMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceQueryMsgResponse();
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
        const obj = createBaseSpotPriceQueryMsgResponse();
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
        const message = createBaseSpotPriceQueryMsgResponse();
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
};
function createBaseEmptyStruct() {
    return {};
}
exports.EmptyStruct = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.EmptyStruct",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyStruct();
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
        const obj = createBaseEmptyStruct();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseEmptyStruct();
        return message;
    },
};
function createBaseGetTotalPoolLiquidityQueryMsg() {
    return {
        getTotalPoolLiquidity: exports.EmptyStruct.fromPartial({}),
    };
}
exports.GetTotalPoolLiquidityQueryMsg = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsg",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.getTotalPoolLiquidity !== undefined) {
            exports.EmptyStruct.encode(message.getTotalPoolLiquidity, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalPoolLiquidityQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.getTotalPoolLiquidity = exports.EmptyStruct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetTotalPoolLiquidityQueryMsg();
        if ((0, helpers_1.isSet)(object.getTotalPoolLiquidity))
            obj.getTotalPoolLiquidity = exports.EmptyStruct.fromJSON(object.getTotalPoolLiquidity);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.getTotalPoolLiquidity !== undefined &&
            (obj.getTotalPoolLiquidity = message.getTotalPoolLiquidity
                ? exports.EmptyStruct.toJSON(message.getTotalPoolLiquidity)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTotalPoolLiquidityQueryMsg();
        if (object.getTotalPoolLiquidity !== undefined && object.getTotalPoolLiquidity !== null) {
            message.getTotalPoolLiquidity = exports.EmptyStruct.fromPartial(object.getTotalPoolLiquidity);
        }
        return message;
    },
};
function createBaseGetTotalPoolLiquidityQueryMsgResponse() {
    return {
        totalPoolLiquidity: [],
    };
}
exports.GetTotalPoolLiquidityQueryMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.totalPoolLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalPoolLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetTotalPoolLiquidityQueryMsgResponse();
        if (Array.isArray(object?.totalPoolLiquidity))
            obj.totalPoolLiquidity = object.totalPoolLiquidity.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.totalPoolLiquidity) {
            obj.totalPoolLiquidity = message.totalPoolLiquidity.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.totalPoolLiquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
        message.totalPoolLiquidity = object.totalPoolLiquidity?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetTotalSharesQueryMsg() {
    return {
        getTotalShares: exports.EmptyStruct.fromPartial({}),
    };
}
exports.GetTotalSharesQueryMsg = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsg",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.getTotalShares !== undefined) {
            exports.EmptyStruct.encode(message.getTotalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalSharesQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.getTotalShares = exports.EmptyStruct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetTotalSharesQueryMsg();
        if ((0, helpers_1.isSet)(object.getTotalShares))
            obj.getTotalShares = exports.EmptyStruct.fromJSON(object.getTotalShares);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.getTotalShares !== undefined &&
            (obj.getTotalShares = message.getTotalShares ? exports.EmptyStruct.toJSON(message.getTotalShares) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTotalSharesQueryMsg();
        if (object.getTotalShares !== undefined && object.getTotalShares !== null) {
            message.getTotalShares = exports.EmptyStruct.fromPartial(object.getTotalShares);
        }
        return message;
    },
};
function createBaseGetTotalSharesQueryMsgResponse() {
    return {
        totalShares: "",
    };
}
exports.GetTotalSharesQueryMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalShares !== "") {
            writer.uint32(10).string(message.totalShares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalSharesQueryMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetTotalSharesQueryMsgResponse();
        if ((0, helpers_1.isSet)(object.totalShares))
            obj.totalShares = String(object.totalShares);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalShares !== undefined && (obj.totalShares = message.totalShares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTotalSharesQueryMsgResponse();
        message.totalShares = object.totalShares ?? "";
        return message;
    },
};
//# sourceMappingURL=pool_query_msg.js.map