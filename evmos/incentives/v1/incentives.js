"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelIncentiveProposal = exports.RegisterIncentiveProposal = exports.GasMeter = exports.Incentive = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.incentives.v1";
function createBaseIncentive() {
    return {
        contract: "",
        allocations: [],
        epochs: 0,
        startTime: timestamp_1.Timestamp.fromPartial({}),
        totalGas: BigInt(0),
    };
}
exports.Incentive = {
    typeUrl: "/evmos.incentives.v1.Incentive",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        for (const v of message.allocations) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.epochs !== 0) {
            writer.uint32(24).uint32(message.epochs);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
        }
        if (message.totalGas !== BigInt(0)) {
            writer.uint32(40).uint64(message.totalGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentive();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.allocations.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.epochs = reader.uint32();
                    break;
                case 4:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.totalGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseIncentive();
        if ((0, helpers_1.isSet)(object.contract))
            obj.contract = String(object.contract);
        if (Array.isArray(object?.allocations))
            obj.allocations = object.allocations.map((e) => coin_1.DecCoin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.epochs))
            obj.epochs = Number(object.epochs);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if ((0, helpers_1.isSet)(object.totalGas))
            obj.totalGas = BigInt(object.totalGas.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        if (message.allocations) {
            obj.allocations = message.allocations.map((e) => (e ? coin_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.allocations = [];
        }
        message.epochs !== undefined && (obj.epochs = Math.round(message.epochs));
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        message.totalGas !== undefined && (obj.totalGas = (message.totalGas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentive();
        message.contract = object.contract ?? "";
        message.allocations = object.allocations?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.epochs = object.epochs ?? 0;
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        if (object.totalGas !== undefined && object.totalGas !== null) {
            message.totalGas = BigInt(object.totalGas.toString());
        }
        return message;
    },
};
function createBaseGasMeter() {
    return {
        contract: "",
        participant: "",
        cumulativeGas: BigInt(0),
    };
}
exports.GasMeter = {
    typeUrl: "/evmos.incentives.v1.GasMeter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.participant !== "") {
            writer.uint32(18).string(message.participant);
        }
        if (message.cumulativeGas !== BigInt(0)) {
            writer.uint32(24).uint64(message.cumulativeGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasMeter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.participant = reader.string();
                    break;
                case 3:
                    message.cumulativeGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGasMeter();
        if ((0, helpers_1.isSet)(object.contract))
            obj.contract = String(object.contract);
        if ((0, helpers_1.isSet)(object.participant))
            obj.participant = String(object.participant);
        if ((0, helpers_1.isSet)(object.cumulativeGas))
            obj.cumulativeGas = BigInt(object.cumulativeGas.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.participant !== undefined && (obj.participant = message.participant);
        message.cumulativeGas !== undefined &&
            (obj.cumulativeGas = (message.cumulativeGas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasMeter();
        message.contract = object.contract ?? "";
        message.participant = object.participant ?? "";
        if (object.cumulativeGas !== undefined && object.cumulativeGas !== null) {
            message.cumulativeGas = BigInt(object.cumulativeGas.toString());
        }
        return message;
    },
};
function createBaseRegisterIncentiveProposal() {
    return {
        title: "",
        description: "",
        contract: "",
        allocations: [],
        epochs: 0,
    };
}
exports.RegisterIncentiveProposal = {
    typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        for (const v of message.allocations) {
            coin_1.DecCoin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.epochs !== 0) {
            writer.uint32(40).uint32(message.epochs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterIncentiveProposal();
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
                    message.contract = reader.string();
                    break;
                case 4:
                    message.allocations.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.epochs = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRegisterIncentiveProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if ((0, helpers_1.isSet)(object.contract))
            obj.contract = String(object.contract);
        if (Array.isArray(object?.allocations))
            obj.allocations = object.allocations.map((e) => coin_1.DecCoin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.epochs))
            obj.epochs = Number(object.epochs);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        if (message.allocations) {
            obj.allocations = message.allocations.map((e) => (e ? coin_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.allocations = [];
        }
        message.epochs !== undefined && (obj.epochs = Math.round(message.epochs));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterIncentiveProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.allocations = object.allocations?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.epochs = object.epochs ?? 0;
        return message;
    },
};
function createBaseCancelIncentiveProposal() {
    return {
        title: "",
        description: "",
        contract: "",
    };
}
exports.CancelIncentiveProposal = {
    typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelIncentiveProposal();
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
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCancelIncentiveProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if ((0, helpers_1.isSet)(object.contract))
            obj.contract = String(object.contract);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCancelIncentiveProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
};
//# sourceMappingURL=incentives.js.map