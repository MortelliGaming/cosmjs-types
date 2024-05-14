"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgEmitIBCAckResponse = exports.MsgEmitIBCAck = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.ibchooks";
function createBaseMsgEmitIBCAck() {
    return {
        sender: "",
        packetSequence: BigInt(0),
        channel: "",
    };
}
exports.MsgEmitIBCAck = {
    typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.packetSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.packetSequence);
        }
        if (message.channel !== "") {
            writer.uint32(26).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEmitIBCAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.packetSequence = reader.uint64();
                    break;
                case 3:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgEmitIBCAck();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.packetSequence))
            obj.packetSequence = BigInt(object.packetSequence.toString());
        if ((0, helpers_1.isSet)(object.channel))
            obj.channel = String(object.channel);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.packetSequence !== undefined &&
            (obj.packetSequence = (message.packetSequence || BigInt(0)).toString());
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEmitIBCAck();
        message.sender = object.sender ?? "";
        if (object.packetSequence !== undefined && object.packetSequence !== null) {
            message.packetSequence = BigInt(object.packetSequence.toString());
        }
        message.channel = object.channel ?? "";
        return message;
    },
};
function createBaseMsgEmitIBCAckResponse() {
    return {
        contractResult: "",
        ibcAck: "",
    };
}
exports.MsgEmitIBCAckResponse = {
    typeUrl: "/osmosis.ibchooks.MsgEmitIBCAckResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractResult !== "") {
            writer.uint32(10).string(message.contractResult);
        }
        if (message.ibcAck !== "") {
            writer.uint32(18).string(message.ibcAck);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEmitIBCAckResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractResult = reader.string();
                    break;
                case 2:
                    message.ibcAck = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgEmitIBCAckResponse();
        if ((0, helpers_1.isSet)(object.contractResult))
            obj.contractResult = String(object.contractResult);
        if ((0, helpers_1.isSet)(object.ibcAck))
            obj.ibcAck = String(object.ibcAck);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contractResult !== undefined && (obj.contractResult = message.contractResult);
        message.ibcAck !== undefined && (obj.ibcAck = message.ibcAck);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEmitIBCAckResponse();
        message.contractResult = object.contractResult ?? "";
        message.ibcAck = object.ibcAck ?? "";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.EmitIBCAck = this.EmitIBCAck.bind(this);
    }
    EmitIBCAck(request) {
        const data = exports.MsgEmitIBCAck.encode(request).finish();
        const promise = this.rpc.request("osmosis.ibchooks.Msg", "EmitIBCAck", data);
        return promise.then((data) => exports.MsgEmitIBCAckResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map