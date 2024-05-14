"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcInAmtGivenOutResponse = exports.CalcInAmtGivenOutRequest = exports.CalcInAmtGivenOut = exports.CalcOutAmtGivenInResponse = exports.CalcOutAmtGivenInRequest = exports.CalcOutAmtGivenIn = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseCalcOutAmtGivenIn() {
    return {
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutDenom: "",
        swapFee: "",
    };
}
exports.CalcOutAmtGivenIn = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        if (message.swapFee !== "") {
            writer.uint32(26).string(message.swapFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
                    break;
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
        const obj = createBaseCalcOutAmtGivenIn();
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = coin_1.Coin.fromJSON(object.tokenIn);
        if ((0, helpers_1.isSet)(object.tokenOutDenom))
            obj.tokenOutDenom = String(object.tokenOutDenom);
        if ((0, helpers_1.isSet)(object.swapFee))
            obj.swapFee = String(object.swapFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenIn !== undefined &&
            (obj.tokenIn = message.tokenIn ? coin_1.Coin.toJSON(message.tokenIn) : undefined);
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCalcOutAmtGivenIn();
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = coin_1.Coin.fromPartial(object.tokenIn);
        }
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        message.swapFee = object.swapFee ?? "";
        return message;
    },
};
function createBaseCalcOutAmtGivenInRequest() {
    return {
        calcOutAmtGivenIn: exports.CalcOutAmtGivenIn.fromPartial({}),
    };
}
exports.CalcOutAmtGivenInRequest = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.calcOutAmtGivenIn !== undefined) {
            exports.CalcOutAmtGivenIn.encode(message.calcOutAmtGivenIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calcOutAmtGivenIn = exports.CalcOutAmtGivenIn.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCalcOutAmtGivenInRequest();
        if ((0, helpers_1.isSet)(object.calcOutAmtGivenIn))
            obj.calcOutAmtGivenIn = exports.CalcOutAmtGivenIn.fromJSON(object.calcOutAmtGivenIn);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.calcOutAmtGivenIn !== undefined &&
            (obj.calcOutAmtGivenIn = message.calcOutAmtGivenIn
                ? exports.CalcOutAmtGivenIn.toJSON(message.calcOutAmtGivenIn)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCalcOutAmtGivenInRequest();
        if (object.calcOutAmtGivenIn !== undefined && object.calcOutAmtGivenIn !== null) {
            message.calcOutAmtGivenIn = exports.CalcOutAmtGivenIn.fromPartial(object.calcOutAmtGivenIn);
        }
        return message;
    },
};
function createBaseCalcOutAmtGivenInResponse() {
    return {
        tokenOut: coin_1.Coin.fromPartial({}),
    };
}
exports.CalcOutAmtGivenInResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseCalcOutAmtGivenInResponse();
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = coin_1.Coin.fromJSON(object.tokenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenOut !== undefined &&
            (obj.tokenOut = message.tokenOut ? coin_1.Coin.toJSON(message.tokenOut) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCalcOutAmtGivenInResponse();
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = coin_1.Coin.fromPartial(object.tokenOut);
        }
        return message;
    },
};
function createBaseCalcInAmtGivenOut() {
    return {
        tokenOut: coin_1.Coin.fromPartial({}),
        tokenInDenom: "",
        swapFee: "",
    };
}
exports.CalcInAmtGivenOut = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        if (message.swapFee !== "") {
            writer.uint32(26).string(message.swapFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
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
        const obj = createBaseCalcInAmtGivenOut();
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = coin_1.Coin.fromJSON(object.tokenOut);
        if ((0, helpers_1.isSet)(object.tokenInDenom))
            obj.tokenInDenom = String(object.tokenInDenom);
        if ((0, helpers_1.isSet)(object.swapFee))
            obj.swapFee = String(object.swapFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenOut !== undefined &&
            (obj.tokenOut = message.tokenOut ? coin_1.Coin.toJSON(message.tokenOut) : undefined);
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        message.swapFee !== undefined && (obj.swapFee = message.swapFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCalcInAmtGivenOut();
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = coin_1.Coin.fromPartial(object.tokenOut);
        }
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.swapFee = object.swapFee ?? "";
        return message;
    },
};
function createBaseCalcInAmtGivenOutRequest() {
    return {
        calcInAmtGivenOut: exports.CalcInAmtGivenOut.fromPartial({}),
    };
}
exports.CalcInAmtGivenOutRequest = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.calcInAmtGivenOut !== undefined) {
            exports.CalcInAmtGivenOut.encode(message.calcInAmtGivenOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calcInAmtGivenOut = exports.CalcInAmtGivenOut.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCalcInAmtGivenOutRequest();
        if ((0, helpers_1.isSet)(object.calcInAmtGivenOut))
            obj.calcInAmtGivenOut = exports.CalcInAmtGivenOut.fromJSON(object.calcInAmtGivenOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.calcInAmtGivenOut !== undefined &&
            (obj.calcInAmtGivenOut = message.calcInAmtGivenOut
                ? exports.CalcInAmtGivenOut.toJSON(message.calcInAmtGivenOut)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCalcInAmtGivenOutRequest();
        if (object.calcInAmtGivenOut !== undefined && object.calcInAmtGivenOut !== null) {
            message.calcInAmtGivenOut = exports.CalcInAmtGivenOut.fromPartial(object.calcInAmtGivenOut);
        }
        return message;
    },
};
function createBaseCalcInAmtGivenOutResponse() {
    return {
        tokenIn: coin_1.Coin.fromPartial({}),
    };
}
exports.CalcInAmtGivenOutResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCalcInAmtGivenOutResponse();
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = coin_1.Coin.fromJSON(object.tokenIn);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenIn !== undefined &&
            (obj.tokenIn = message.tokenIn ? coin_1.Coin.toJSON(message.tokenIn) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCalcInAmtGivenOutResponse();
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = coin_1.Coin.fromPartial(object.tokenIn);
        }
        return message;
    },
};
//# sourceMappingURL=module_query_msg.js.map