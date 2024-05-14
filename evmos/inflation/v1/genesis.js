"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const inflation_1 = require("./inflation");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.inflation.v1";
function createBaseGenesisState() {
    return {
        params: exports.Params.fromPartial({}),
        period: BigInt(0),
        epochIdentifier: "",
        epochsPerPeriod: BigInt(0),
        skippedEpochs: BigInt(0),
    };
}
exports.GenesisState = {
    typeUrl: "/evmos.inflation.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.epochIdentifier !== "") {
            writer.uint32(26).string(message.epochIdentifier);
        }
        if (message.epochsPerPeriod !== BigInt(0)) {
            writer.uint32(32).int64(message.epochsPerPeriod);
        }
        if (message.skippedEpochs !== BigInt(0)) {
            writer.uint32(40).uint64(message.skippedEpochs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.epochIdentifier = reader.string();
                    break;
                case 4:
                    message.epochsPerPeriod = reader.int64();
                    break;
                case 5:
                    message.skippedEpochs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = exports.Params.fromJSON(object.params);
        if ((0, helpers_1.isSet)(object.period))
            obj.period = BigInt(object.period.toString());
        if ((0, helpers_1.isSet)(object.epochIdentifier))
            obj.epochIdentifier = String(object.epochIdentifier);
        if ((0, helpers_1.isSet)(object.epochsPerPeriod))
            obj.epochsPerPeriod = BigInt(object.epochsPerPeriod.toString());
        if ((0, helpers_1.isSet)(object.skippedEpochs))
            obj.skippedEpochs = BigInt(object.skippedEpochs.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
        message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
        message.epochsPerPeriod !== undefined &&
            (obj.epochsPerPeriod = (message.epochsPerPeriod || BigInt(0)).toString());
        message.skippedEpochs !== undefined &&
            (obj.skippedEpochs = (message.skippedEpochs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period.toString());
        }
        message.epochIdentifier = object.epochIdentifier ?? "";
        if (object.epochsPerPeriod !== undefined && object.epochsPerPeriod !== null) {
            message.epochsPerPeriod = BigInt(object.epochsPerPeriod.toString());
        }
        if (object.skippedEpochs !== undefined && object.skippedEpochs !== null) {
            message.skippedEpochs = BigInt(object.skippedEpochs.toString());
        }
        return message;
    },
};
function createBaseParams() {
    return {
        mintDenom: "",
        exponentialCalculation: inflation_1.ExponentialCalculation.fromPartial({}),
        inflationDistribution: inflation_1.InflationDistribution.fromPartial({}),
        enableInflation: false,
    };
}
exports.Params = {
    typeUrl: "/evmos.inflation.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.exponentialCalculation !== undefined) {
            inflation_1.ExponentialCalculation.encode(message.exponentialCalculation, writer.uint32(18).fork()).ldelim();
        }
        if (message.inflationDistribution !== undefined) {
            inflation_1.InflationDistribution.encode(message.inflationDistribution, writer.uint32(26).fork()).ldelim();
        }
        if (message.enableInflation === true) {
            writer.uint32(32).bool(message.enableInflation);
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
                    message.exponentialCalculation = inflation_1.ExponentialCalculation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.inflationDistribution = inflation_1.InflationDistribution.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.enableInflation = reader.bool();
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
        if ((0, helpers_1.isSet)(object.exponentialCalculation))
            obj.exponentialCalculation = inflation_1.ExponentialCalculation.fromJSON(object.exponentialCalculation);
        if ((0, helpers_1.isSet)(object.inflationDistribution))
            obj.inflationDistribution = inflation_1.InflationDistribution.fromJSON(object.inflationDistribution);
        if ((0, helpers_1.isSet)(object.enableInflation))
            obj.enableInflation = Boolean(object.enableInflation);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        message.exponentialCalculation !== undefined &&
            (obj.exponentialCalculation = message.exponentialCalculation
                ? inflation_1.ExponentialCalculation.toJSON(message.exponentialCalculation)
                : undefined);
        message.inflationDistribution !== undefined &&
            (obj.inflationDistribution = message.inflationDistribution
                ? inflation_1.InflationDistribution.toJSON(message.inflationDistribution)
                : undefined);
        message.enableInflation !== undefined && (obj.enableInflation = message.enableInflation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintDenom = object.mintDenom ?? "";
        if (object.exponentialCalculation !== undefined && object.exponentialCalculation !== null) {
            message.exponentialCalculation = inflation_1.ExponentialCalculation.fromPartial(object.exponentialCalculation);
        }
        if (object.inflationDistribution !== undefined && object.inflationDistribution !== null) {
            message.inflationDistribution = inflation_1.InflationDistribution.fromPartial(object.inflationDistribution);
        }
        message.enableInflation = object.enableInflation ?? false;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map