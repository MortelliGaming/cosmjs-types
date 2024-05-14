"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetScalingFactorControllerProposal = exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal = exports.PoolRecordWithCFMMLink = exports.UpdateMigrationRecordsProposal = exports.ReplaceMigrationRecordsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const shared_1 = require("./shared");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.gamm.v1beta1";
function createBaseReplaceMigrationRecordsProposal() {
    return {
        title: "",
        description: "",
        records: [],
    };
}
exports.ReplaceMigrationRecordsProposal = {
    typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            shared_1.BalancerToConcentratedPoolLink.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReplaceMigrationRecordsProposal();
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
                    message.records.push(shared_1.BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseReplaceMigrationRecordsProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.records))
            obj.records = object.records.map((e) => shared_1.BalancerToConcentratedPoolLink.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.records) {
            obj.records = message.records.map((e) => (e ? shared_1.BalancerToConcentratedPoolLink.toJSON(e) : undefined));
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReplaceMigrationRecordsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map((e) => shared_1.BalancerToConcentratedPoolLink.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateMigrationRecordsProposal() {
    return {
        title: "",
        description: "",
        records: [],
    };
}
exports.UpdateMigrationRecordsProposal = {
    typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            shared_1.BalancerToConcentratedPoolLink.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMigrationRecordsProposal();
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
                    message.records.push(shared_1.BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUpdateMigrationRecordsProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.records))
            obj.records = object.records.map((e) => shared_1.BalancerToConcentratedPoolLink.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.records) {
            obj.records = message.records.map((e) => (e ? shared_1.BalancerToConcentratedPoolLink.toJSON(e) : undefined));
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateMigrationRecordsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.records = object.records?.map((e) => shared_1.BalancerToConcentratedPoolLink.fromPartial(e)) || [];
        return message;
    },
};
function createBasePoolRecordWithCFMMLink() {
    return {
        denom0: "",
        denom1: "",
        tickSpacing: BigInt(0),
        exponentAtPriceOne: "",
        spreadFactor: "",
        balancerPoolId: BigInt(0),
    };
}
exports.PoolRecordWithCFMMLink = {
    typeUrl: "/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom0 !== "") {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== "") {
            writer.uint32(18).string(message.denom1);
        }
        if (message.tickSpacing !== BigInt(0)) {
            writer.uint32(24).uint64(message.tickSpacing);
        }
        if (message.exponentAtPriceOne !== "") {
            writer.uint32(34).string(message.exponentAtPriceOne);
        }
        if (message.spreadFactor !== "") {
            writer.uint32(42).string(message.spreadFactor);
        }
        if (message.balancerPoolId !== BigInt(0)) {
            writer.uint32(48).uint64(message.balancerPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolRecordWithCFMMLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom0 = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                case 3:
                    message.tickSpacing = reader.uint64();
                    break;
                case 4:
                    message.exponentAtPriceOne = reader.string();
                    break;
                case 5:
                    message.spreadFactor = reader.string();
                    break;
                case 6:
                    message.balancerPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolRecordWithCFMMLink();
        if ((0, helpers_1.isSet)(object.denom0))
            obj.denom0 = String(object.denom0);
        if ((0, helpers_1.isSet)(object.denom1))
            obj.denom1 = String(object.denom1);
        if ((0, helpers_1.isSet)(object.tickSpacing))
            obj.tickSpacing = BigInt(object.tickSpacing.toString());
        if ((0, helpers_1.isSet)(object.exponentAtPriceOne))
            obj.exponentAtPriceOne = String(object.exponentAtPriceOne);
        if ((0, helpers_1.isSet)(object.spreadFactor))
            obj.spreadFactor = String(object.spreadFactor);
        if ((0, helpers_1.isSet)(object.balancerPoolId))
            obj.balancerPoolId = BigInt(object.balancerPoolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom0 !== undefined && (obj.denom0 = message.denom0);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
        message.exponentAtPriceOne !== undefined && (obj.exponentAtPriceOne = message.exponentAtPriceOne);
        message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
        message.balancerPoolId !== undefined &&
            (obj.balancerPoolId = (message.balancerPoolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolRecordWithCFMMLink();
        message.denom0 = object.denom0 ?? "";
        message.denom1 = object.denom1 ?? "";
        if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
            message.tickSpacing = BigInt(object.tickSpacing.toString());
        }
        message.exponentAtPriceOne = object.exponentAtPriceOne ?? "";
        message.spreadFactor = object.spreadFactor ?? "";
        if (object.balancerPoolId !== undefined && object.balancerPoolId !== null) {
            message.balancerPoolId = BigInt(object.balancerPoolId.toString());
        }
        return message;
    },
};
function createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal() {
    return {
        title: "",
        description: "",
        poolRecordsWithCfmmLink: [],
    };
}
exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal = {
    typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.poolRecordsWithCfmmLink) {
            exports.PoolRecordWithCFMMLink.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
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
                    message.poolRecordsWithCfmmLink.push(exports.PoolRecordWithCFMMLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.poolRecordsWithCfmmLink))
            obj.poolRecordsWithCfmmLink = object.poolRecordsWithCfmmLink.map((e) => exports.PoolRecordWithCFMMLink.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.poolRecordsWithCfmmLink) {
            obj.poolRecordsWithCfmmLink = message.poolRecordsWithCfmmLink.map((e) => e ? exports.PoolRecordWithCFMMLink.toJSON(e) : undefined);
        }
        else {
            obj.poolRecordsWithCfmmLink = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.poolRecordsWithCfmmLink =
            object.poolRecordsWithCfmmLink?.map((e) => exports.PoolRecordWithCFMMLink.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSetScalingFactorControllerProposal() {
    return {
        title: "",
        description: "",
        poolId: BigInt(0),
        controllerAddress: "",
    };
}
exports.SetScalingFactorControllerProposal = {
    typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.controllerAddress !== "") {
            writer.uint32(34).string(message.controllerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetScalingFactorControllerProposal();
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
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.controllerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSetScalingFactorControllerProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.controllerAddress))
            obj.controllerAddress = String(object.controllerAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSetScalingFactorControllerProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.controllerAddress = object.controllerAddress ?? "";
        return message;
    },
};
//# sourceMappingURL=gov.js.map