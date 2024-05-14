"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.DenomPairTakerFee = exports.MsgSetDenomPairTakerFeeResponse = exports.MsgSetDenomPairTakerFee = exports.MsgSplitRouteSwapExactAmountOutResponse = exports.MsgSplitRouteSwapExactAmountOut = exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSplitRouteSwapExactAmountInResponse = exports.MsgSplitRouteSwapExactAmountIn = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = exports.protobufPackage = void 0;
/* eslint-disable */
const swap_route_1 = require("./swap_route");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolmanager.v1beta1";
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutMinAmount: "",
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSwapExactAmountIn();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = coin_1.Coin.fromJSON(object.tokenIn);
        if ((0, helpers_1.isSet)(object.tokenOutMinAmount))
            obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? swap_route_1.SwapAmountInRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        message.tokenIn !== undefined &&
            (obj.tokenIn = message.tokenIn ? coin_1.Coin.toJSON(message.tokenIn) : undefined);
        message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountIn();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = coin_1.Coin.fromPartial(object.tokenIn);
        }
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
};
function createBaseMsgSwapExactAmountInResponse() {
    return {
        tokenOutAmount: "",
    };
}
exports.MsgSwapExactAmountInResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSwapExactAmountInResponse();
        if ((0, helpers_1.isSet)(object.tokenOutAmount))
            obj.tokenOutAmount = String(object.tokenOutAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
};
function createBaseMsgSplitRouteSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenInDenom: "",
        tokenOutMinAmount: "",
    };
}
exports.MsgSplitRouteSwapExactAmountIn = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInSplitRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountInSplitRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSplitRouteSwapExactAmountIn();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => swap_route_1.SwapAmountInSplitRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenInDenom))
            obj.tokenInDenom = String(object.tokenInDenom);
        if ((0, helpers_1.isSet)(object.tokenOutMinAmount))
            obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? swap_route_1.SwapAmountInSplitRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountIn();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountInSplitRoute.fromPartial(e)) || [];
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
};
function createBaseMsgSplitRouteSwapExactAmountInResponse() {
    return {
        tokenOutAmount: "",
    };
}
exports.MsgSplitRouteSwapExactAmountInResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSplitRouteSwapExactAmountInResponse();
        if ((0, helpers_1.isSet)(object.tokenOutAmount))
            obj.tokenOutAmount = String(object.tokenOutAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
};
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        tokenInMaxAmount: "",
        tokenOut: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgSwapExactAmountOut = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSwapExactAmountOut();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenInMaxAmount))
            obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = coin_1.Coin.fromJSON(object.tokenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? swap_route_1.SwapAmountOutRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        message.tokenOut !== undefined &&
            (obj.tokenOut = message.tokenOut ? coin_1.Coin.toJSON(message.tokenOut) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = coin_1.Coin.fromPartial(object.tokenOut);
        }
        return message;
    },
};
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        tokenInAmount: "",
    };
}
exports.MsgSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSwapExactAmountOutResponse();
        if ((0, helpers_1.isSet)(object.tokenInAmount))
            obj.tokenInAmount = String(object.tokenInAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
};
function createBaseMsgSplitRouteSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        tokenOutDenom: "",
        tokenInMaxAmount: "",
    };
}
exports.MsgSplitRouteSwapExactAmountOut = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutSplitRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(34).string(message.tokenInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountOutSplitRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.tokenInMaxAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSplitRouteSwapExactAmountOut();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => swap_route_1.SwapAmountOutSplitRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenOutDenom))
            obj.tokenOutDenom = String(object.tokenOutDenom);
        if ((0, helpers_1.isSet)(object.tokenInMaxAmount))
            obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? swap_route_1.SwapAmountOutSplitRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountOut();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map((e) => swap_route_1.SwapAmountOutSplitRoute.fromPartial(e)) || [];
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        return message;
    },
};
function createBaseMsgSplitRouteSwapExactAmountOutResponse() {
    return {
        tokenInAmount: "",
    };
}
exports.MsgSplitRouteSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSplitRouteSwapExactAmountOutResponse();
        if ((0, helpers_1.isSet)(object.tokenInAmount))
            obj.tokenInAmount = String(object.tokenInAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
};
function createBaseMsgSetDenomPairTakerFee() {
    return {
        sender: "",
        denomPairTakerFee: [],
    };
}
exports.MsgSetDenomPairTakerFee = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.denomPairTakerFee) {
            exports.DenomPairTakerFee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomPairTakerFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denomPairTakerFee.push(exports.DenomPairTakerFee.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetDenomPairTakerFee();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if (Array.isArray(object?.denomPairTakerFee))
            obj.denomPairTakerFee = object.denomPairTakerFee.map((e) => exports.DenomPairTakerFee.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.denomPairTakerFee) {
            obj.denomPairTakerFee = message.denomPairTakerFee.map((e) => e ? exports.DenomPairTakerFee.toJSON(e) : undefined);
        }
        else {
            obj.denomPairTakerFee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomPairTakerFee();
        message.sender = object.sender ?? "";
        message.denomPairTakerFee = object.denomPairTakerFee?.map((e) => exports.DenomPairTakerFee.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSetDenomPairTakerFeeResponse() {
    return {
        success: false,
    };
}
exports.MsgSetDenomPairTakerFeeResponse = {
    typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomPairTakerFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetDenomPairTakerFeeResponse();
        if ((0, helpers_1.isSet)(object.success))
            obj.success = Boolean(object.success);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomPairTakerFeeResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function createBaseDenomPairTakerFee() {
    return {
        denom0: "",
        denom1: "",
        takerFee: "",
    };
}
exports.DenomPairTakerFee = {
    typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFee",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom0 !== "") {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== "") {
            writer.uint32(18).string(message.denom1);
        }
        if (message.takerFee !== "") {
            writer.uint32(26).string(message.takerFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomPairTakerFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom0 = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                case 3:
                    message.takerFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDenomPairTakerFee();
        if ((0, helpers_1.isSet)(object.denom0))
            obj.denom0 = String(object.denom0);
        if ((0, helpers_1.isSet)(object.denom1))
            obj.denom1 = String(object.denom1);
        if ((0, helpers_1.isSet)(object.takerFee))
            obj.takerFee = String(object.takerFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom0 !== undefined && (obj.denom0 = message.denom0);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        message.takerFee !== undefined && (obj.takerFee = message.takerFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomPairTakerFee();
        message.denom0 = object.denom0 ?? "";
        message.denom1 = object.denom1 ?? "";
        message.takerFee = object.takerFee ?? "";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SwapExactAmountIn = this.SwapExactAmountIn.bind(this);
        this.SwapExactAmountOut = this.SwapExactAmountOut.bind(this);
        this.SplitRouteSwapExactAmountIn = this.SplitRouteSwapExactAmountIn.bind(this);
        this.SplitRouteSwapExactAmountOut = this.SplitRouteSwapExactAmountOut.bind(this);
        this.SetDenomPairTakerFee = this.SetDenomPairTakerFee.bind(this);
    }
    SwapExactAmountIn(request) {
        const data = exports.MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SwapExactAmountIn", data);
        return promise.then((data) => exports.MsgSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    SwapExactAmountOut(request) {
        const data = exports.MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SwapExactAmountOut", data);
        return promise.then((data) => exports.MsgSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    SplitRouteSwapExactAmountIn(request) {
        const data = exports.MsgSplitRouteSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SplitRouteSwapExactAmountIn", data);
        return promise.then((data) => exports.MsgSplitRouteSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    SplitRouteSwapExactAmountOut(request) {
        const data = exports.MsgSplitRouteSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SplitRouteSwapExactAmountOut", data);
        return promise.then((data) => exports.MsgSplitRouteSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetDenomPairTakerFee(request) {
        const data = exports.MsgSetDenomPairTakerFee.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SetDenomPairTakerFee", data);
        return promise.then((data) => exports.MsgSetDenomPairTakerFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map