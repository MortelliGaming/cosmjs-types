"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSetFeeTokensResponse = exports.MsgSetFeeTokens = exports.protobufPackage = void 0;
/* eslint-disable */
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.txfees.v1beta1";
function createBaseMsgSetFeeTokens() {
    return {
        feeTokens: [],
        sender: "",
    };
}
exports.MsgSetFeeTokens = {
    typeUrl: "/osmosis.txfees.v1beta1.MsgSetFeeTokens",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.feeTokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetFeeTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeTokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetFeeTokens();
        if (Array.isArray(object?.feeTokens))
            obj.feeTokens = object.feeTokens.map((e) => feetoken_1.FeeToken.fromJSON(e));
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
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
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetFeeTokens();
        message.feeTokens = object.feeTokens?.map((e) => feetoken_1.FeeToken.fromPartial(e)) || [];
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgSetFeeTokensResponse() {
    return {};
}
exports.MsgSetFeeTokensResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.MsgSetFeeTokensResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetFeeTokensResponse();
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
        const obj = createBaseMsgSetFeeTokensResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetFeeTokensResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SetFeeTokens = this.SetFeeTokens.bind(this);
    }
    SetFeeTokens(request) {
        const data = exports.MsgSetFeeTokens.encode(request).finish();
        const promise = this.rpc.request("osmosis.txfees.v1beta1.Msg", "SetFeeTokens", data);
        return promise.then((data) => exports.MsgSetFeeTokensResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map