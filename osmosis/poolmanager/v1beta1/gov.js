"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomPairTakerFeeProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const tx_1 = require("./tx");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolmanager.v1beta1";
function createBaseDenomPairTakerFeeProposal() {
    return {
        title: "",
        description: "",
        denomPairTakerFee: [],
    };
}
exports.DenomPairTakerFeeProposal = {
    typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.denomPairTakerFee) {
            tx_1.DenomPairTakerFee.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomPairTakerFeeProposal();
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
                    message.denomPairTakerFee.push(tx_1.DenomPairTakerFee.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDenomPairTakerFeeProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.denomPairTakerFee))
            obj.denomPairTakerFee = object.denomPairTakerFee.map((e) => tx_1.DenomPairTakerFee.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.denomPairTakerFee) {
            obj.denomPairTakerFee = message.denomPairTakerFee.map((e) => e ? tx_1.DenomPairTakerFee.toJSON(e) : undefined);
        }
        else {
            obj.denomPairTakerFee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomPairTakerFeeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.denomPairTakerFee = object.denomPairTakerFee?.map((e) => tx_1.DenomPairTakerFee.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=gov.js.map