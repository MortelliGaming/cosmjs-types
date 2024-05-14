"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreateConcentratedPoolResponse = exports.MsgCreateConcentratedPool = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1";
function createBaseMsgCreateConcentratedPool() {
    return {
        sender: "",
        denom0: "",
        denom1: "",
        tickSpacing: BigInt(0),
        spreadFactor: "",
    };
}
exports.MsgCreateConcentratedPool = {
    typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom0 !== "") {
            writer.uint32(18).string(message.denom0);
        }
        if (message.denom1 !== "") {
            writer.uint32(26).string(message.denom1);
        }
        if (message.tickSpacing !== BigInt(0)) {
            writer.uint32(32).uint64(message.tickSpacing);
        }
        if (message.spreadFactor !== "") {
            writer.uint32(42).string(message.spreadFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateConcentratedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom0 = reader.string();
                    break;
                case 3:
                    message.denom1 = reader.string();
                    break;
                case 4:
                    message.tickSpacing = reader.uint64();
                    break;
                case 5:
                    message.spreadFactor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateConcentratedPool();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.denom0))
            obj.denom0 = String(object.denom0);
        if ((0, helpers_1.isSet)(object.denom1))
            obj.denom1 = String(object.denom1);
        if ((0, helpers_1.isSet)(object.tickSpacing))
            obj.tickSpacing = BigInt(object.tickSpacing.toString());
        if ((0, helpers_1.isSet)(object.spreadFactor))
            obj.spreadFactor = String(object.spreadFactor);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom0 !== undefined && (obj.denom0 = message.denom0);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
        message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateConcentratedPool();
        message.sender = object.sender ?? "";
        message.denom0 = object.denom0 ?? "";
        message.denom1 = object.denom1 ?? "";
        if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
            message.tickSpacing = BigInt(object.tickSpacing.toString());
        }
        message.spreadFactor = object.spreadFactor ?? "";
        return message;
    },
};
function createBaseMsgCreateConcentratedPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
exports.MsgCreateConcentratedPoolResponse = {
    typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateConcentratedPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateConcentratedPoolResponse();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateConcentratedPoolResponse();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateConcentratedPool = this.CreateConcentratedPool.bind(this);
    }
    CreateConcentratedPool(request) {
        const data = exports.MsgCreateConcentratedPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.Msg", "CreateConcentratedPool", data);
        return promise.then((data) => exports.MsgCreateConcentratedPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map