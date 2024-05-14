"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapExactAmountOutSudoMsgResponse = exports.SwapExactAmountOutSudoMsg = exports.SwapExactAmountOut = exports.SwapExactAmountInSudoMsgResponse = exports.SwapExactAmountInSudoMsg = exports.SwapExactAmountIn = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseSwapExactAmountIn() {
    return {
        sender: "",
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutDenom: "",
        tokenOutMinAmount: "",
        swapFee: "",
    };
}
exports.SwapExactAmountIn = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        if (message.swapFee !== "") {
            writer.uint32(42).string(message.swapFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                case 5:
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
        const obj = createBaseSwapExactAmountIn();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = coin_1.Coin.fromJSON(object.tokenIn);
        if ((0, helpers_1.isSet)(object.tokenOutDenom))
            obj.tokenOutDenom = String(object.tokenOutDenom);
        if ((0, helpers_1.isSet)(object.tokenOutMinAmount))
            obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
        if ((0, helpers_1.isSet)(object.swapFee))
            obj.swapFee = String(object.swapFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.tokenIn !== undefined &&
            (obj.tokenIn = message.tokenIn ? coin_1.Coin.toJSON(message.tokenIn) : undefined);
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountIn();
        message.sender = object.sender ?? "";
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = coin_1.Coin.fromPartial(object.tokenIn);
        }
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        message.swapFee = object.swapFee ?? "";
        return message;
    },
};
function createBaseSwapExactAmountInSudoMsg() {
    return {
        swapExactAmountIn: exports.SwapExactAmountIn.fromPartial({}),
    };
}
exports.SwapExactAmountInSudoMsg = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapExactAmountIn !== undefined) {
            exports.SwapExactAmountIn.encode(message.swapExactAmountIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountInSudoMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapExactAmountIn = exports.SwapExactAmountIn.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSwapExactAmountInSudoMsg();
        if ((0, helpers_1.isSet)(object.swapExactAmountIn))
            obj.swapExactAmountIn = exports.SwapExactAmountIn.fromJSON(object.swapExactAmountIn);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.swapExactAmountIn !== undefined &&
            (obj.swapExactAmountIn = message.swapExactAmountIn
                ? exports.SwapExactAmountIn.toJSON(message.swapExactAmountIn)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountInSudoMsg();
        if (object.swapExactAmountIn !== undefined && object.swapExactAmountIn !== null) {
            message.swapExactAmountIn = exports.SwapExactAmountIn.fromPartial(object.swapExactAmountIn);
        }
        return message;
    },
};
function createBaseSwapExactAmountInSudoMsgResponse() {
    return {
        tokenOutAmount: "",
    };
}
exports.SwapExactAmountInSudoMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountInSudoMsgResponse();
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
        const obj = createBaseSwapExactAmountInSudoMsgResponse();
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
        const message = createBaseSwapExactAmountInSudoMsgResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
};
function createBaseSwapExactAmountOut() {
    return {
        sender: "",
        tokenOut: coin_1.Coin.fromPartial({}),
        tokenInDenom: "",
        tokenInMaxAmount: "",
        swapFee: "",
    };
}
exports.SwapExactAmountOut = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(34).string(message.tokenInMaxAmount);
        }
        if (message.swapFee !== "") {
            writer.uint32(42).string(message.swapFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 5:
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
        const obj = createBaseSwapExactAmountOut();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = coin_1.Coin.fromJSON(object.tokenOut);
        if ((0, helpers_1.isSet)(object.tokenInDenom))
            obj.tokenInDenom = String(object.tokenInDenom);
        if ((0, helpers_1.isSet)(object.tokenInMaxAmount))
            obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
        if ((0, helpers_1.isSet)(object.swapFee))
            obj.swapFee = String(object.swapFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.tokenOut !== undefined &&
            (obj.tokenOut = message.tokenOut ? coin_1.Coin.toJSON(message.tokenOut) : undefined);
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountOut();
        message.sender = object.sender ?? "";
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = coin_1.Coin.fromPartial(object.tokenOut);
        }
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        message.swapFee = object.swapFee ?? "";
        return message;
    },
};
function createBaseSwapExactAmountOutSudoMsg() {
    return {
        swapExactAmountOut: exports.SwapExactAmountOut.fromPartial({}),
    };
}
exports.SwapExactAmountOutSudoMsg = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapExactAmountOut !== undefined) {
            exports.SwapExactAmountOut.encode(message.swapExactAmountOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOutSudoMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapExactAmountOut = exports.SwapExactAmountOut.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSwapExactAmountOutSudoMsg();
        if ((0, helpers_1.isSet)(object.swapExactAmountOut))
            obj.swapExactAmountOut = exports.SwapExactAmountOut.fromJSON(object.swapExactAmountOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.swapExactAmountOut !== undefined &&
            (obj.swapExactAmountOut = message.swapExactAmountOut
                ? exports.SwapExactAmountOut.toJSON(message.swapExactAmountOut)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountOutSudoMsg();
        if (object.swapExactAmountOut !== undefined && object.swapExactAmountOut !== null) {
            message.swapExactAmountOut = exports.SwapExactAmountOut.fromPartial(object.swapExactAmountOut);
        }
        return message;
    },
};
function createBaseSwapExactAmountOutSudoMsgResponse() {
    return {
        tokenInAmount: "",
    };
}
exports.SwapExactAmountOutSudoMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOutSudoMsgResponse();
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
        const obj = createBaseSwapExactAmountOutSudoMsgResponse();
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
        const message = createBaseSwapExactAmountOutSudoMsgResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
};
//# sourceMappingURL=module_sudo_msg.js.map