"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolRecord = exports.PoolIdToTickSpacingRecord = exports.TickSpacingDecreaseProposal = exports.CreateConcentratedLiquidityPoolsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.v1beta1";
function createBaseCreateConcentratedLiquidityPoolsProposal() {
    return {
        title: "",
        description: "",
        poolRecords: [],
    };
}
exports.CreateConcentratedLiquidityPoolsProposal = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.poolRecords) {
            exports.PoolRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateConcentratedLiquidityPoolsProposal();
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
                    message.poolRecords.push(exports.PoolRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCreateConcentratedLiquidityPoolsProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.poolRecords))
            obj.poolRecords = object.poolRecords.map((e) => exports.PoolRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.poolRecords) {
            obj.poolRecords = message.poolRecords.map((e) => (e ? exports.PoolRecord.toJSON(e) : undefined));
        }
        else {
            obj.poolRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateConcentratedLiquidityPoolsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.poolRecords = object.poolRecords?.map((e) => exports.PoolRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTickSpacingDecreaseProposal() {
    return {
        title: "",
        description: "",
        poolIdToTickSpacingRecords: [],
    };
}
exports.TickSpacingDecreaseProposal = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.poolIdToTickSpacingRecords) {
            exports.PoolIdToTickSpacingRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickSpacingDecreaseProposal();
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
                    message.poolIdToTickSpacingRecords.push(exports.PoolIdToTickSpacingRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTickSpacingDecreaseProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.poolIdToTickSpacingRecords))
            obj.poolIdToTickSpacingRecords = object.poolIdToTickSpacingRecords.map((e) => exports.PoolIdToTickSpacingRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.poolIdToTickSpacingRecords) {
            obj.poolIdToTickSpacingRecords = message.poolIdToTickSpacingRecords.map((e) => e ? exports.PoolIdToTickSpacingRecord.toJSON(e) : undefined);
        }
        else {
            obj.poolIdToTickSpacingRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTickSpacingDecreaseProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.poolIdToTickSpacingRecords =
            object.poolIdToTickSpacingRecords?.map((e) => exports.PoolIdToTickSpacingRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBasePoolIdToTickSpacingRecord() {
    return {
        poolId: BigInt(0),
        newTickSpacing: BigInt(0),
    };
}
exports.PoolIdToTickSpacingRecord = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.newTickSpacing !== BigInt(0)) {
            writer.uint32(16).uint64(message.newTickSpacing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolIdToTickSpacingRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.newTickSpacing = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolIdToTickSpacingRecord();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.newTickSpacing))
            obj.newTickSpacing = BigInt(object.newTickSpacing.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.newTickSpacing !== undefined &&
            (obj.newTickSpacing = (message.newTickSpacing || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolIdToTickSpacingRecord();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.newTickSpacing !== undefined && object.newTickSpacing !== null) {
            message.newTickSpacing = BigInt(object.newTickSpacing.toString());
        }
        return message;
    },
};
function createBasePoolRecord() {
    return {
        denom0: "",
        denom1: "",
        tickSpacing: BigInt(0),
        spreadFactor: "",
    };
}
exports.PoolRecord = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolRecord",
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
        if (message.spreadFactor !== "") {
            writer.uint32(42).string(message.spreadFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolRecord();
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
                case 5:
                    message.spreadFactor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolRecord();
        if ((0, helpers_1.isSet)(object.denom0))
            obj.denom0 = String(object.denom0);
        if ((0, helpers_1.isSet)(object.denom1))
            obj.denom1 = String(object.denom1);
        if ((0, helpers_1.isSet)(object.tickSpacing))
            obj.tickSpacing = BigInt(object.tickSpacing.toString());
        if ((0, helpers_1.isSet)(object.spreadFactor))
            obj.spreadFactor = String(object.spreadFactor);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom0 !== undefined && (obj.denom0 = message.denom0);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
        message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolRecord();
        message.denom0 = object.denom0 ?? "";
        message.denom1 = object.denom1 ?? "";
        if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
            message.tickSpacing = BigInt(object.tickSpacing.toString());
        }
        message.spreadFactor = object.spreadFactor ?? "";
        return message;
    },
};
//# sourceMappingURL=gov.js.map