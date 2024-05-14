"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.feemarket.v1";
function createBaseParams() {
    return {
        noBaseFee: false,
        baseFeeChangeDenominator: 0,
        elasticityMultiplier: 0,
        enableHeight: BigInt(0),
        baseFee: "",
        minGasPrice: "",
        minGasMultiplier: "",
    };
}
exports.Params = {
    typeUrl: "/ethermint.feemarket.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.noBaseFee === true) {
            writer.uint32(8).bool(message.noBaseFee);
        }
        if (message.baseFeeChangeDenominator !== 0) {
            writer.uint32(16).uint32(message.baseFeeChangeDenominator);
        }
        if (message.elasticityMultiplier !== 0) {
            writer.uint32(24).uint32(message.elasticityMultiplier);
        }
        if (message.enableHeight !== BigInt(0)) {
            writer.uint32(40).int64(message.enableHeight);
        }
        if (message.baseFee !== "") {
            writer.uint32(50).string(message.baseFee);
        }
        if (message.minGasPrice !== "") {
            writer.uint32(58).string(message.minGasPrice);
        }
        if (message.minGasMultiplier !== "") {
            writer.uint32(66).string(message.minGasMultiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noBaseFee = reader.bool();
                    break;
                case 2:
                    message.baseFeeChangeDenominator = reader.uint32();
                    break;
                case 3:
                    message.elasticityMultiplier = reader.uint32();
                    break;
                case 5:
                    message.enableHeight = reader.int64();
                    break;
                case 6:
                    message.baseFee = reader.string();
                    break;
                case 7:
                    message.minGasPrice = reader.string();
                    break;
                case 8:
                    message.minGasMultiplier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if ((0, helpers_1.isSet)(object.noBaseFee))
            obj.noBaseFee = Boolean(object.noBaseFee);
        if ((0, helpers_1.isSet)(object.baseFeeChangeDenominator))
            obj.baseFeeChangeDenominator = Number(object.baseFeeChangeDenominator);
        if ((0, helpers_1.isSet)(object.elasticityMultiplier))
            obj.elasticityMultiplier = Number(object.elasticityMultiplier);
        if ((0, helpers_1.isSet)(object.enableHeight))
            obj.enableHeight = BigInt(object.enableHeight.toString());
        if ((0, helpers_1.isSet)(object.baseFee))
            obj.baseFee = String(object.baseFee);
        if ((0, helpers_1.isSet)(object.minGasPrice))
            obj.minGasPrice = String(object.minGasPrice);
        if ((0, helpers_1.isSet)(object.minGasMultiplier))
            obj.minGasMultiplier = String(object.minGasMultiplier);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.noBaseFee !== undefined && (obj.noBaseFee = message.noBaseFee);
        message.baseFeeChangeDenominator !== undefined &&
            (obj.baseFeeChangeDenominator = Math.round(message.baseFeeChangeDenominator));
        message.elasticityMultiplier !== undefined &&
            (obj.elasticityMultiplier = Math.round(message.elasticityMultiplier));
        message.enableHeight !== undefined && (obj.enableHeight = (message.enableHeight || BigInt(0)).toString());
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice);
        message.minGasMultiplier !== undefined && (obj.minGasMultiplier = message.minGasMultiplier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.noBaseFee = object.noBaseFee ?? false;
        message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
        message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
        if (object.enableHeight !== undefined && object.enableHeight !== null) {
            message.enableHeight = BigInt(object.enableHeight.toString());
        }
        message.baseFee = object.baseFee ?? "";
        message.minGasPrice = object.minGasPrice ?? "";
        message.minGasMultiplier = object.minGasMultiplier ?? "";
        return message;
    },
};
//# sourceMappingURL=feemarket.js.map