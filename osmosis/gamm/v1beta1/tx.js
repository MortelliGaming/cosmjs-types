"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgExitSwapExternAmountOutResponse = exports.MsgExitSwapExternAmountOut = exports.MsgExitSwapShareAmountInResponse = exports.MsgExitSwapShareAmountIn = exports.MsgJoinSwapShareAmountOutResponse = exports.MsgJoinSwapShareAmountOut = exports.MsgJoinSwapExternAmountInResponse = exports.MsgJoinSwapExternAmountIn = exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = exports.MsgExitPoolResponse = exports.MsgExitPool = exports.MsgJoinPoolResponse = exports.MsgJoinPool = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const swap_route_1 = require("../../poolmanager/v1beta1/swap_route");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.gamm.v1beta1";
function createBaseMsgJoinPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareOutAmount: "",
        tokenInMaxs: [],
    };
}
exports.MsgJoinPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(26).string(message.shareOutAmount);
        }
        for (const v of message.tokenInMaxs) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.shareOutAmount = reader.string();
                    break;
                case 4:
                    message.tokenInMaxs.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgJoinPool();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.shareOutAmount))
            obj.shareOutAmount = String(object.shareOutAmount);
        if (Array.isArray(object?.tokenInMaxs))
            obj.tokenInMaxs = object.tokenInMaxs.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        if (message.tokenInMaxs) {
            obj.tokenInMaxs = message.tokenInMaxs.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokenInMaxs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPool();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxs = object.tokenInMaxs?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgJoinPoolResponse() {
    return {
        shareOutAmount: "",
        tokenIn: [],
    };
}
exports.MsgJoinPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokenIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokenIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgJoinPoolResponse();
        if ((0, helpers_1.isSet)(object.shareOutAmount))
            obj.shareOutAmount = String(object.shareOutAmount);
        if (Array.isArray(object?.tokenIn))
            obj.tokenIn = object.tokenIn.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        if (message.tokenIn) {
            obj.tokenIn = message.tokenIn.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokenIn = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPoolResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenIn = object.tokenIn?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgExitPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareInAmount: "",
        tokenOutMins: [],
    };
}
exports.MsgExitPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(26).string(message.shareInAmount);
        }
        for (const v of message.tokenOutMins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.shareInAmount = reader.string();
                    break;
                case 4:
                    message.tokenOutMins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgExitPool();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.shareInAmount))
            obj.shareInAmount = String(object.shareInAmount);
        if (Array.isArray(object?.tokenOutMins))
            obj.tokenOutMins = object.tokenOutMins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
        if (message.tokenOutMins) {
            obj.tokenOutMins = message.tokenOutMins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokenOutMins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPool();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMins = object.tokenOutMins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgExitPoolResponse() {
    return {
        tokenOut: [],
    };
}
exports.MsgExitPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokenOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgExitPoolResponse();
        if (Array.isArray(object?.tokenOut))
            obj.tokenOut = object.tokenOut.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenOut) {
            obj.tokenOut = message.tokenOut.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.tokenOut = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPoolResponse();
        message.tokenOut = object.tokenOut?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutMinAmount: "",
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
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
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        tokenInMaxAmount: "",
        tokenOut: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgSwapExactAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
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
function createBaseMsgJoinSwapExternAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: coin_1.Coin.fromPartial({}),
        shareOutMinAmount: "",
    };
}
exports.MsgJoinSwapExternAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareOutMinAmount !== "") {
            writer.uint32(34).string(message.shareOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgJoinSwapExternAmountIn();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenIn))
            obj.tokenIn = coin_1.Coin.fromJSON(object.tokenIn);
        if ((0, helpers_1.isSet)(object.shareOutMinAmount))
            obj.shareOutMinAmount = String(object.shareOutMinAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenIn !== undefined &&
            (obj.tokenIn = message.tokenIn ? coin_1.Coin.toJSON(message.tokenIn) : undefined);
        message.shareOutMinAmount !== undefined && (obj.shareOutMinAmount = message.shareOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = coin_1.Coin.fromPartial(object.tokenIn);
        }
        message.shareOutMinAmount = object.shareOutMinAmount ?? "";
        return message;
    },
};
function createBaseMsgJoinSwapExternAmountInResponse() {
    return {
        shareOutAmount: "",
    };
}
exports.MsgJoinSwapExternAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgJoinSwapExternAmountInResponse();
        if ((0, helpers_1.isSet)(object.shareOutAmount))
            obj.shareOutAmount = String(object.shareOutAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        return message;
    },
};
function createBaseMsgJoinSwapShareAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenInDenom: "",
        shareOutAmount: "",
        tokenInMaxAmount: "",
    };
}
exports.MsgJoinSwapShareAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(34).string(message.shareOutAmount);
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(42).string(message.tokenInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.shareOutAmount = reader.string();
                    break;
                case 5:
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
        const obj = createBaseMsgJoinSwapShareAmountOut();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenInDenom))
            obj.tokenInDenom = String(object.tokenInDenom);
        if ((0, helpers_1.isSet)(object.shareOutAmount))
            obj.shareOutAmount = String(object.shareOutAmount);
        if ((0, helpers_1.isSet)(object.tokenInMaxAmount))
            obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
        message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapShareAmountOut();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        return message;
    },
};
function createBaseMsgJoinSwapShareAmountOutResponse() {
    return {
        tokenInAmount: "",
    };
}
exports.MsgJoinSwapShareAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
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
        const obj = createBaseMsgJoinSwapShareAmountOutResponse();
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
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
};
function createBaseMsgExitSwapShareAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOutDenom: "",
        shareInAmount: "",
        tokenOutMinAmount: "",
    };
}
exports.MsgExitSwapShareAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(34).string(message.shareInAmount);
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(42).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.shareInAmount = reader.string();
                    break;
                case 5:
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
        const obj = createBaseMsgExitSwapShareAmountIn();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenOutDenom))
            obj.tokenOutDenom = String(object.tokenOutDenom);
        if ((0, helpers_1.isSet)(object.shareInAmount))
            obj.shareInAmount = String(object.shareInAmount);
        if ((0, helpers_1.isSet)(object.tokenOutMinAmount))
            obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
        message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapShareAmountIn();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
};
function createBaseMsgExitSwapShareAmountInResponse() {
    return {
        tokenOutAmount: "",
    };
}
exports.MsgExitSwapShareAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountInResponse();
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
        const obj = createBaseMsgExitSwapShareAmountInResponse();
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
        const message = createBaseMsgExitSwapShareAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
};
function createBaseMsgExitSwapExternAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOut: coin_1.Coin.fromPartial({}),
        shareInMaxAmount: "",
    };
}
exports.MsgExitSwapExternAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareInMaxAmount !== "") {
            writer.uint32(34).string(message.shareInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareInMaxAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgExitSwapExternAmountOut();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenOut))
            obj.tokenOut = coin_1.Coin.fromJSON(object.tokenOut);
        if ((0, helpers_1.isSet)(object.shareInMaxAmount))
            obj.shareInMaxAmount = String(object.shareInMaxAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenOut !== undefined &&
            (obj.tokenOut = message.tokenOut ? coin_1.Coin.toJSON(message.tokenOut) : undefined);
        message.shareInMaxAmount !== undefined && (obj.shareInMaxAmount = message.shareInMaxAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        message.sender = object.sender ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = coin_1.Coin.fromPartial(object.tokenOut);
        }
        message.shareInMaxAmount = object.shareInMaxAmount ?? "";
        return message;
    },
};
function createBaseMsgExitSwapExternAmountOutResponse() {
    return {
        shareInAmount: "",
    };
}
exports.MsgExitSwapExternAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareInAmount !== "") {
            writer.uint32(10).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgExitSwapExternAmountOutResponse();
        if ((0, helpers_1.isSet)(object.shareInAmount))
            obj.shareInAmount = String(object.shareInAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        message.shareInAmount = object.shareInAmount ?? "";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.JoinPool = this.JoinPool.bind(this);
        this.ExitPool = this.ExitPool.bind(this);
        this.SwapExactAmountIn = this.SwapExactAmountIn.bind(this);
        this.SwapExactAmountOut = this.SwapExactAmountOut.bind(this);
        this.JoinSwapExternAmountIn = this.JoinSwapExternAmountIn.bind(this);
        this.JoinSwapShareAmountOut = this.JoinSwapShareAmountOut.bind(this);
        this.ExitSwapExternAmountOut = this.ExitSwapExternAmountOut.bind(this);
        this.ExitSwapShareAmountIn = this.ExitSwapShareAmountIn.bind(this);
    }
    JoinPool(request) {
        const data = exports.MsgJoinPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinPool", data);
        return promise.then((data) => exports.MsgJoinPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    ExitPool(request) {
        const data = exports.MsgExitPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitPool", data);
        return promise.then((data) => exports.MsgExitPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    SwapExactAmountIn(request) {
        const data = exports.MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountIn", data);
        return promise.then((data) => exports.MsgSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    SwapExactAmountOut(request) {
        const data = exports.MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountOut", data);
        return promise.then((data) => exports.MsgSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    JoinSwapExternAmountIn(request) {
        const data = exports.MsgJoinSwapExternAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapExternAmountIn", data);
        return promise.then((data) => exports.MsgJoinSwapExternAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    JoinSwapShareAmountOut(request) {
        const data = exports.MsgJoinSwapShareAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapShareAmountOut", data);
        return promise.then((data) => exports.MsgJoinSwapShareAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    ExitSwapExternAmountOut(request) {
        const data = exports.MsgExitSwapExternAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapExternAmountOut", data);
        return promise.then((data) => exports.MsgExitSwapExternAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    ExitSwapShareAmountIn(request) {
        const data = exports.MsgExitSwapShareAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapShareAmountIn", data);
        return promise.then((data) => exports.MsgExitSwapShareAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map