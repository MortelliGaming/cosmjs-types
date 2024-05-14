"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExponentialCalculation = exports.InflationDistribution = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.inflation.v1";
function createBaseInflationDistribution() {
    return {
        stakingRewards: "",
        usageIncentives: "",
        communityPool: "",
    };
}
exports.InflationDistribution = {
    typeUrl: "/evmos.inflation.v1.InflationDistribution",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stakingRewards !== "") {
            writer.uint32(10).string(message.stakingRewards);
        }
        if (message.usageIncentives !== "") {
            writer.uint32(18).string(message.usageIncentives);
        }
        if (message.communityPool !== "") {
            writer.uint32(26).string(message.communityPool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInflationDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakingRewards = reader.string();
                    break;
                case 2:
                    message.usageIncentives = reader.string();
                    break;
                case 3:
                    message.communityPool = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseInflationDistribution();
        if ((0, helpers_1.isSet)(object.stakingRewards))
            obj.stakingRewards = String(object.stakingRewards);
        if ((0, helpers_1.isSet)(object.usageIncentives))
            obj.usageIncentives = String(object.usageIncentives);
        if ((0, helpers_1.isSet)(object.communityPool))
            obj.communityPool = String(object.communityPool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
        message.usageIncentives !== undefined && (obj.usageIncentives = message.usageIncentives);
        message.communityPool !== undefined && (obj.communityPool = message.communityPool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInflationDistribution();
        message.stakingRewards = object.stakingRewards ?? "";
        message.usageIncentives = object.usageIncentives ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
};
function createBaseExponentialCalculation() {
    return {
        a: "",
        r: "",
        c: "",
        bondingTarget: "",
        maxVariance: "",
    };
}
exports.ExponentialCalculation = {
    typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.a !== "") {
            writer.uint32(10).string(message.a);
        }
        if (message.r !== "") {
            writer.uint32(18).string(message.r);
        }
        if (message.c !== "") {
            writer.uint32(26).string(message.c);
        }
        if (message.bondingTarget !== "") {
            writer.uint32(34).string(message.bondingTarget);
        }
        if (message.maxVariance !== "") {
            writer.uint32(42).string(message.maxVariance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExponentialCalculation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.a = reader.string();
                    break;
                case 2:
                    message.r = reader.string();
                    break;
                case 3:
                    message.c = reader.string();
                    break;
                case 4:
                    message.bondingTarget = reader.string();
                    break;
                case 5:
                    message.maxVariance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseExponentialCalculation();
        if ((0, helpers_1.isSet)(object.a))
            obj.a = String(object.a);
        if ((0, helpers_1.isSet)(object.r))
            obj.r = String(object.r);
        if ((0, helpers_1.isSet)(object.c))
            obj.c = String(object.c);
        if ((0, helpers_1.isSet)(object.bondingTarget))
            obj.bondingTarget = String(object.bondingTarget);
        if ((0, helpers_1.isSet)(object.maxVariance))
            obj.maxVariance = String(object.maxVariance);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.a !== undefined && (obj.a = message.a);
        message.r !== undefined && (obj.r = message.r);
        message.c !== undefined && (obj.c = message.c);
        message.bondingTarget !== undefined && (obj.bondingTarget = message.bondingTarget);
        message.maxVariance !== undefined && (obj.maxVariance = message.maxVariance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExponentialCalculation();
        message.a = object.a ?? "";
        message.r = object.r ?? "";
        message.c = object.c ?? "";
        message.bondingTarget = object.bondingTarget ?? "";
        message.maxVariance = object.maxVariance ?? "";
        return message;
    },
};
//# sourceMappingURL=inflation.js.map