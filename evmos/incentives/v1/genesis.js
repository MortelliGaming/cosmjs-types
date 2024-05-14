"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const incentives_1 = require("./incentives");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.incentives.v1";
function createBaseGenesisState() {
    return {
        params: exports.Params.fromPartial({}),
        incentives: [],
        gasMeters: [],
    };
}
exports.GenesisState = {
    typeUrl: "/evmos.incentives.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.incentives) {
            incentives_1.Incentive.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.gasMeters) {
            incentives_1.GasMeter.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.incentives.push(incentives_1.Incentive.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.gasMeters.push(incentives_1.GasMeter.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.incentives))
            obj.incentives = object.incentives.map((e) => incentives_1.Incentive.fromJSON(e));
        if (Array.isArray(object?.gasMeters))
            obj.gasMeters = object.gasMeters.map((e) => incentives_1.GasMeter.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        if (message.incentives) {
            obj.incentives = message.incentives.map((e) => (e ? incentives_1.Incentive.toJSON(e) : undefined));
        }
        else {
            obj.incentives = [];
        }
        if (message.gasMeters) {
            obj.gasMeters = message.gasMeters.map((e) => (e ? incentives_1.GasMeter.toJSON(e) : undefined));
        }
        else {
            obj.gasMeters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        message.incentives = object.incentives?.map((e) => incentives_1.Incentive.fromPartial(e)) || [];
        message.gasMeters = object.gasMeters?.map((e) => incentives_1.GasMeter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        enableIncentives: false,
        allocationLimit: "",
        incentivesEpochIdentifier: "",
        rewardScaler: "",
    };
}
exports.Params = {
    typeUrl: "/evmos.incentives.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.enableIncentives === true) {
            writer.uint32(8).bool(message.enableIncentives);
        }
        if (message.allocationLimit !== "") {
            writer.uint32(18).string(message.allocationLimit);
        }
        if (message.incentivesEpochIdentifier !== "") {
            writer.uint32(26).string(message.incentivesEpochIdentifier);
        }
        if (message.rewardScaler !== "") {
            writer.uint32(34).string(message.rewardScaler);
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
                    message.enableIncentives = reader.bool();
                    break;
                case 2:
                    message.allocationLimit = reader.string();
                    break;
                case 3:
                    message.incentivesEpochIdentifier = reader.string();
                    break;
                case 4:
                    message.rewardScaler = reader.string();
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
        if ((0, helpers_1.isSet)(object.enableIncentives))
            obj.enableIncentives = Boolean(object.enableIncentives);
        if ((0, helpers_1.isSet)(object.allocationLimit))
            obj.allocationLimit = String(object.allocationLimit);
        if ((0, helpers_1.isSet)(object.incentivesEpochIdentifier))
            obj.incentivesEpochIdentifier = String(object.incentivesEpochIdentifier);
        if ((0, helpers_1.isSet)(object.rewardScaler))
            obj.rewardScaler = String(object.rewardScaler);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.enableIncentives !== undefined && (obj.enableIncentives = message.enableIncentives);
        message.allocationLimit !== undefined && (obj.allocationLimit = message.allocationLimit);
        message.incentivesEpochIdentifier !== undefined &&
            (obj.incentivesEpochIdentifier = message.incentivesEpochIdentifier);
        message.rewardScaler !== undefined && (obj.rewardScaler = message.rewardScaler);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.enableIncentives = object.enableIncentives ?? false;
        message.allocationLimit = object.allocationLimit ?? "";
        message.incentivesEpochIdentifier = object.incentivesEpochIdentifier ?? "";
        message.rewardScaler = object.rewardScaler ?? "";
        return message;
    },
};
//# sourceMappingURL=genesis.js.map