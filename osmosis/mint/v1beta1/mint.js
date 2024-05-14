"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DistributionProportions = exports.WeightedAddress = exports.Minter = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.mint.v1beta1";
function createBaseMinter() {
    return {
        epochProvisions: "",
    };
}
exports.Minter = {
    typeUrl: "/osmosis.mint.v1beta1.Minter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.epochProvisions !== "") {
            writer.uint32(10).string(message.epochProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochProvisions = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMinter();
        if ((0, helpers_1.isSet)(object.epochProvisions))
            obj.epochProvisions = String(object.epochProvisions);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.epochProvisions !== undefined && (obj.epochProvisions = message.epochProvisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.epochProvisions = object.epochProvisions ?? "";
        return message;
    },
};
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: "",
    };
}
exports.WeightedAddress = {
    typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseWeightedAddress();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = String(object.weight);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
};
function createBaseDistributionProportions() {
    return {
        staking: "",
        poolIncentives: "",
        developerRewards: "",
        communityPool: "",
    };
}
exports.DistributionProportions = {
    typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(message.staking);
        }
        if (message.poolIncentives !== "") {
            writer.uint32(18).string(message.poolIncentives);
        }
        if (message.developerRewards !== "") {
            writer.uint32(26).string(message.developerRewards);
        }
        if (message.communityPool !== "") {
            writer.uint32(34).string(message.communityPool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staking = reader.string();
                    break;
                case 2:
                    message.poolIncentives = reader.string();
                    break;
                case 3:
                    message.developerRewards = reader.string();
                    break;
                case 4:
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
        const obj = createBaseDistributionProportions();
        if ((0, helpers_1.isSet)(object.staking))
            obj.staking = String(object.staking);
        if ((0, helpers_1.isSet)(object.poolIncentives))
            obj.poolIncentives = String(object.poolIncentives);
        if ((0, helpers_1.isSet)(object.developerRewards))
            obj.developerRewards = String(object.developerRewards);
        if ((0, helpers_1.isSet)(object.communityPool))
            obj.communityPool = String(object.communityPool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.staking !== undefined && (obj.staking = message.staking);
        message.poolIncentives !== undefined && (obj.poolIncentives = message.poolIncentives);
        message.developerRewards !== undefined && (obj.developerRewards = message.developerRewards);
        message.communityPool !== undefined && (obj.communityPool = message.communityPool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.staking = object.staking ?? "";
        message.poolIncentives = object.poolIncentives ?? "";
        message.developerRewards = object.developerRewards ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
};
function createBaseParams() {
    return {
        mintDenom: "",
        genesisEpochProvisions: "",
        epochIdentifier: "",
        reductionPeriodInEpochs: BigInt(0),
        reductionFactor: "",
        distributionProportions: exports.DistributionProportions.fromPartial({}),
        weightedDeveloperRewardsReceivers: [],
        mintingRewardsDistributionStartEpoch: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/osmosis.mint.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.genesisEpochProvisions !== "") {
            writer.uint32(18).string(message.genesisEpochProvisions);
        }
        if (message.epochIdentifier !== "") {
            writer.uint32(26).string(message.epochIdentifier);
        }
        if (message.reductionPeriodInEpochs !== BigInt(0)) {
            writer.uint32(32).int64(message.reductionPeriodInEpochs);
        }
        if (message.reductionFactor !== "") {
            writer.uint32(42).string(message.reductionFactor);
        }
        if (message.distributionProportions !== undefined) {
            exports.DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.weightedDeveloperRewardsReceivers) {
            exports.WeightedAddress.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
            writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.genesisEpochProvisions = reader.string();
                    break;
                case 3:
                    message.epochIdentifier = reader.string();
                    break;
                case 4:
                    message.reductionPeriodInEpochs = reader.int64();
                    break;
                case 5:
                    message.reductionFactor = reader.string();
                    break;
                case 6:
                    message.distributionProportions = exports.DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.weightedDeveloperRewardsReceivers.push(exports.WeightedAddress.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.mintingRewardsDistributionStartEpoch = reader.int64();
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
        if ((0, helpers_1.isSet)(object.mintDenom))
            obj.mintDenom = String(object.mintDenom);
        if ((0, helpers_1.isSet)(object.genesisEpochProvisions))
            obj.genesisEpochProvisions = String(object.genesisEpochProvisions);
        if ((0, helpers_1.isSet)(object.epochIdentifier))
            obj.epochIdentifier = String(object.epochIdentifier);
        if ((0, helpers_1.isSet)(object.reductionPeriodInEpochs))
            obj.reductionPeriodInEpochs = BigInt(object.reductionPeriodInEpochs.toString());
        if ((0, helpers_1.isSet)(object.reductionFactor))
            obj.reductionFactor = String(object.reductionFactor);
        if ((0, helpers_1.isSet)(object.distributionProportions))
            obj.distributionProportions = exports.DistributionProportions.fromJSON(object.distributionProportions);
        if (Array.isArray(object?.weightedDeveloperRewardsReceivers))
            obj.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers.map((e) => exports.WeightedAddress.fromJSON(e));
        if ((0, helpers_1.isSet)(object.mintingRewardsDistributionStartEpoch))
            obj.mintingRewardsDistributionStartEpoch = BigInt(object.mintingRewardsDistributionStartEpoch.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        message.genesisEpochProvisions !== undefined &&
            (obj.genesisEpochProvisions = message.genesisEpochProvisions);
        message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
        message.reductionPeriodInEpochs !== undefined &&
            (obj.reductionPeriodInEpochs = (message.reductionPeriodInEpochs || BigInt(0)).toString());
        message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
        message.distributionProportions !== undefined &&
            (obj.distributionProportions = message.distributionProportions
                ? exports.DistributionProportions.toJSON(message.distributionProportions)
                : undefined);
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map((e) => e ? exports.WeightedAddress.toJSON(e) : undefined);
        }
        else {
            obj.weightedDeveloperRewardsReceivers = [];
        }
        message.mintingRewardsDistributionStartEpoch !== undefined &&
            (obj.mintingRewardsDistributionStartEpoch = (message.mintingRewardsDistributionStartEpoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintDenom = object.mintDenom ?? "";
        message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
        message.epochIdentifier = object.epochIdentifier ?? "";
        if (object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null) {
            message.reductionPeriodInEpochs = BigInt(object.reductionPeriodInEpochs.toString());
        }
        message.reductionFactor = object.reductionFactor ?? "";
        if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
            message.distributionProportions = exports.DistributionProportions.fromPartial(object.distributionProportions);
        }
        message.weightedDeveloperRewardsReceivers =
            object.weightedDeveloperRewardsReceivers?.map((e) => exports.WeightedAddress.fromPartial(e)) || [];
        if (object.mintingRewardsDistributionStartEpoch !== undefined &&
            object.mintingRewardsDistributionStartEpoch !== null) {
            message.mintingRewardsDistributionStartEpoch = BigInt(object.mintingRewardsDistributionStartEpoch.toString());
        }
        return message;
    },
};
//# sourceMappingURL=mint.js.map