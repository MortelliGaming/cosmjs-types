"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeeTokenProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.txfees.v1beta1";
function createBaseUpdateFeeTokenProposal() {
    return {
        title: "",
        description: "",
        feetokens: [],
    };
}
exports.UpdateFeeTokenProposal = {
    typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.feetokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateFeeTokenProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.feetokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUpdateFeeTokenProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.feetokens))
            obj.feetokens = object.feetokens.map((e) => feetoken_1.FeeToken.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map((e) => (e ? feetoken_1.FeeToken.toJSON(e) : undefined));
        }
        else {
            obj.feetokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateFeeTokenProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.feetokens = object.feetokens?.map((e) => feetoken_1.FeeToken.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=gov.js.map