"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity";
function createBaseParams() {
    return {
        authorizedTickSpacing: [],
        authorizedSpreadFactors: [],
        balancerSharesRewardDiscount: "",
        authorizedQuoteDenoms: [],
        authorizedUptimes: [],
        isPermissionlessPoolCreationEnabled: false,
        unrestrictedPoolCreatorWhitelist: [],
        hookGasLimit: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/osmosis.concentratedliquidity.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.authorizedTickSpacing) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.authorizedSpreadFactors) {
            writer.uint32(18).string(v);
        }
        if (message.balancerSharesRewardDiscount !== "") {
            writer.uint32(26).string(message.balancerSharesRewardDiscount);
        }
        for (const v of message.authorizedQuoteDenoms) {
            writer.uint32(34).string(v);
        }
        for (const v of message.authorizedUptimes) {
            duration_1.Duration.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.isPermissionlessPoolCreationEnabled === true) {
            writer.uint32(48).bool(message.isPermissionlessPoolCreationEnabled);
        }
        for (const v of message.unrestrictedPoolCreatorWhitelist) {
            writer.uint32(58).string(v);
        }
        if (message.hookGasLimit !== BigInt(0)) {
            writer.uint32(64).uint64(message.hookGasLimit);
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.authorizedTickSpacing.push(reader.uint64());
                        }
                    }
                    else {
                        message.authorizedTickSpacing.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.authorizedSpreadFactors.push(reader.string());
                    break;
                case 3:
                    message.balancerSharesRewardDiscount = reader.string();
                    break;
                case 4:
                    message.authorizedQuoteDenoms.push(reader.string());
                    break;
                case 5:
                    message.authorizedUptimes.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.isPermissionlessPoolCreationEnabled = reader.bool();
                    break;
                case 7:
                    message.unrestrictedPoolCreatorWhitelist.push(reader.string());
                    break;
                case 8:
                    message.hookGasLimit = reader.uint64();
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
        if (Array.isArray(object?.authorizedTickSpacing))
            obj.authorizedTickSpacing = object.authorizedTickSpacing.map((e) => BigInt(e.toString()));
        if (Array.isArray(object?.authorizedSpreadFactors))
            obj.authorizedSpreadFactors = object.authorizedSpreadFactors.map((e) => String(e));
        if ((0, helpers_1.isSet)(object.balancerSharesRewardDiscount))
            obj.balancerSharesRewardDiscount = String(object.balancerSharesRewardDiscount);
        if (Array.isArray(object?.authorizedQuoteDenoms))
            obj.authorizedQuoteDenoms = object.authorizedQuoteDenoms.map((e) => String(e));
        if (Array.isArray(object?.authorizedUptimes))
            obj.authorizedUptimes = object.authorizedUptimes.map((e) => duration_1.Duration.fromJSON(e));
        if ((0, helpers_1.isSet)(object.isPermissionlessPoolCreationEnabled))
            obj.isPermissionlessPoolCreationEnabled = Boolean(object.isPermissionlessPoolCreationEnabled);
        if (Array.isArray(object?.unrestrictedPoolCreatorWhitelist))
            obj.unrestrictedPoolCreatorWhitelist = object.unrestrictedPoolCreatorWhitelist.map((e) => String(e));
        if ((0, helpers_1.isSet)(object.hookGasLimit))
            obj.hookGasLimit = BigInt(object.hookGasLimit.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.authorizedTickSpacing) {
            obj.authorizedTickSpacing = message.authorizedTickSpacing.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.authorizedTickSpacing = [];
        }
        if (message.authorizedSpreadFactors) {
            obj.authorizedSpreadFactors = message.authorizedSpreadFactors.map((e) => e);
        }
        else {
            obj.authorizedSpreadFactors = [];
        }
        message.balancerSharesRewardDiscount !== undefined &&
            (obj.balancerSharesRewardDiscount = message.balancerSharesRewardDiscount);
        if (message.authorizedQuoteDenoms) {
            obj.authorizedQuoteDenoms = message.authorizedQuoteDenoms.map((e) => e);
        }
        else {
            obj.authorizedQuoteDenoms = [];
        }
        if (message.authorizedUptimes) {
            obj.authorizedUptimes = message.authorizedUptimes.map((e) => (e ? duration_1.Duration.toJSON(e) : undefined));
        }
        else {
            obj.authorizedUptimes = [];
        }
        message.isPermissionlessPoolCreationEnabled !== undefined &&
            (obj.isPermissionlessPoolCreationEnabled = message.isPermissionlessPoolCreationEnabled);
        if (message.unrestrictedPoolCreatorWhitelist) {
            obj.unrestrictedPoolCreatorWhitelist = message.unrestrictedPoolCreatorWhitelist.map((e) => e);
        }
        else {
            obj.unrestrictedPoolCreatorWhitelist = [];
        }
        message.hookGasLimit !== undefined && (obj.hookGasLimit = (message.hookGasLimit || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.authorizedTickSpacing = object.authorizedTickSpacing?.map((e) => BigInt(e.toString())) || [];
        message.authorizedSpreadFactors = object.authorizedSpreadFactors?.map((e) => e) || [];
        message.balancerSharesRewardDiscount = object.balancerSharesRewardDiscount ?? "";
        message.authorizedQuoteDenoms = object.authorizedQuoteDenoms?.map((e) => e) || [];
        message.authorizedUptimes = object.authorizedUptimes?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        message.isPermissionlessPoolCreationEnabled = object.isPermissionlessPoolCreationEnabled ?? false;
        message.unrestrictedPoolCreatorWhitelist = object.unrestrictedPoolCreatorWhitelist?.map((e) => e) || [];
        if (object.hookGasLimit !== undefined && object.hookGasLimit !== null) {
            message.hookGasLimit = BigInt(object.hookGasLimit.toString());
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map