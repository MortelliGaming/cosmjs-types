"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapAmountOutSplitRoute = exports.SwapAmountInSplitRoute = exports.SwapAmountOutRoute = exports.SwapAmountInRoute = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolmanager.v1beta1";
function createBaseSwapAmountInRoute() {
    return {
        poolId: BigInt(0),
        tokenOutDenom: "",
    };
}
exports.SwapAmountInRoute = {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSwapAmountInRoute();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenOutDenom))
            obj.tokenOutDenom = String(object.tokenOutDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountInRoute();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        return message;
    },
};
function createBaseSwapAmountOutRoute() {
    return {
        poolId: BigInt(0),
        tokenInDenom: "",
    };
}
exports.SwapAmountOutRoute = {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSwapAmountOutRoute();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tokenInDenom))
            obj.tokenInDenom = String(object.tokenInDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountOutRoute();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.tokenInDenom = object.tokenInDenom ?? "";
        return message;
    },
};
function createBaseSwapAmountInSplitRoute() {
    return {
        pools: [],
        tokenInAmount: "",
    };
}
exports.SwapAmountInSplitRoute = {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            exports.SwapAmountInRoute.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenInAmount !== "") {
            writer.uint32(18).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInSplitRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(exports.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const obj = createBaseSwapAmountInSplitRoute();
        if (Array.isArray(object?.pools))
            obj.pools = object.pools.map((e) => exports.SwapAmountInRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenInAmount))
            obj.tokenInAmount = String(object.tokenInAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? exports.SwapAmountInRoute.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountInSplitRoute();
        message.pools = object.pools?.map((e) => exports.SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
};
function createBaseSwapAmountOutSplitRoute() {
    return {
        pools: [],
        tokenOutAmount: "",
    };
}
exports.SwapAmountOutSplitRoute = {
    typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            exports.SwapAmountOutRoute.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenOutAmount !== "") {
            writer.uint32(18).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutSplitRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(exports.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const obj = createBaseSwapAmountOutSplitRoute();
        if (Array.isArray(object?.pools))
            obj.pools = object.pools.map((e) => exports.SwapAmountOutRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.tokenOutAmount))
            obj.tokenOutAmount = String(object.tokenOutAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? exports.SwapAmountOutRoute.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountOutSplitRoute();
        message.pools = object.pools?.map((e) => exports.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
};
//# sourceMappingURL=swap_route.js.map