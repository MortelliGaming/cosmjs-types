"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccumObject = exports.GenesisState = exports.PositionData = exports.PoolData = exports.FullTick = exports.protobufPackage = void 0;
/* eslint-disable */
const tick_info_1 = require("./tick_info");
const any_1 = require("../../../google/protobuf/any");
const incentive_record_1 = require("./incentive_record");
const position_1 = require("./position");
const accum_1 = require("../../accum/v1beta1/accum");
const params_1 = require("../params");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.v1beta1";
function createBaseFullTick() {
    return {
        poolId: BigInt(0),
        tickIndex: BigInt(0),
        info: tick_info_1.TickInfo.fromPartial({}),
    };
}
exports.FullTick = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullTick",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        if (message.info !== undefined) {
            tick_info_1.TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullTick();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tickIndex = reader.int64();
                    break;
                case 3:
                    message.info = tick_info_1.TickInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFullTick();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.tickIndex))
            obj.tickIndex = BigInt(object.tickIndex.toString());
        if ((0, helpers_1.isSet)(object.info))
            obj.info = tick_info_1.TickInfo.fromJSON(object.info);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
        message.info !== undefined && (obj.info = message.info ? tick_info_1.TickInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFullTick();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.tickIndex !== undefined && object.tickIndex !== null) {
            message.tickIndex = BigInt(object.tickIndex.toString());
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = tick_info_1.TickInfo.fromPartial(object.info);
        }
        return message;
    },
};
function createBasePoolData() {
    return {
        pool: undefined,
        ticks: [],
        spreadRewardAccumulator: exports.AccumObject.fromPartial({}),
        incentivesAccumulators: [],
        incentiveRecords: [],
    };
}
exports.PoolData = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            any_1.Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ticks) {
            exports.FullTick.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.spreadRewardAccumulator !== undefined) {
            exports.AccumObject.encode(message.spreadRewardAccumulator, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.incentivesAccumulators) {
            exports.AccumObject.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.incentiveRecords) {
            incentive_record_1.IncentiveRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ticks.push(exports.FullTick.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.spreadRewardAccumulator = exports.AccumObject.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.incentivesAccumulators.push(exports.AccumObject.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.incentiveRecords.push(incentive_record_1.IncentiveRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolData();
        if ((0, helpers_1.isSet)(object.pool))
            obj.pool = any_1.Any.fromJSON(object.pool);
        if (Array.isArray(object?.ticks))
            obj.ticks = object.ticks.map((e) => exports.FullTick.fromJSON(e));
        if ((0, helpers_1.isSet)(object.spreadRewardAccumulator))
            obj.spreadRewardAccumulator = exports.AccumObject.fromJSON(object.spreadRewardAccumulator);
        if (Array.isArray(object?.incentivesAccumulators))
            obj.incentivesAccumulators = object.incentivesAccumulators.map((e) => exports.AccumObject.fromJSON(e));
        if (Array.isArray(object?.incentiveRecords))
            obj.incentiveRecords = object.incentiveRecords.map((e) => incentive_record_1.IncentiveRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? any_1.Any.toJSON(message.pool) : undefined);
        if (message.ticks) {
            obj.ticks = message.ticks.map((e) => (e ? exports.FullTick.toJSON(e) : undefined));
        }
        else {
            obj.ticks = [];
        }
        message.spreadRewardAccumulator !== undefined &&
            (obj.spreadRewardAccumulator = message.spreadRewardAccumulator
                ? exports.AccumObject.toJSON(message.spreadRewardAccumulator)
                : undefined);
        if (message.incentivesAccumulators) {
            obj.incentivesAccumulators = message.incentivesAccumulators.map((e) => e ? exports.AccumObject.toJSON(e) : undefined);
        }
        else {
            obj.incentivesAccumulators = [];
        }
        if (message.incentiveRecords) {
            obj.incentiveRecords = message.incentiveRecords.map((e) => (e ? incentive_record_1.IncentiveRecord.toJSON(e) : undefined));
        }
        else {
            obj.incentiveRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolData();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = any_1.Any.fromPartial(object.pool);
        }
        message.ticks = object.ticks?.map((e) => exports.FullTick.fromPartial(e)) || [];
        if (object.spreadRewardAccumulator !== undefined && object.spreadRewardAccumulator !== null) {
            message.spreadRewardAccumulator = exports.AccumObject.fromPartial(object.spreadRewardAccumulator);
        }
        message.incentivesAccumulators =
            object.incentivesAccumulators?.map((e) => exports.AccumObject.fromPartial(e)) || [];
        message.incentiveRecords = object.incentiveRecords?.map((e) => incentive_record_1.IncentiveRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBasePositionData() {
    return {
        position: undefined,
        lockId: BigInt(0),
        spreadRewardAccumRecord: accum_1.Record.fromPartial({}),
        uptimeAccumRecords: [],
    };
}
exports.PositionData = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            position_1.Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.spreadRewardAccumRecord !== undefined) {
            accum_1.Record.encode(message.spreadRewardAccumRecord, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.uptimeAccumRecords) {
            accum_1.Record.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = position_1.Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.spreadRewardAccumRecord = accum_1.Record.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.uptimeAccumRecords.push(accum_1.Record.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePositionData();
        if ((0, helpers_1.isSet)(object.position))
            obj.position = position_1.Position.fromJSON(object.position);
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        if ((0, helpers_1.isSet)(object.spreadRewardAccumRecord))
            obj.spreadRewardAccumRecord = accum_1.Record.fromJSON(object.spreadRewardAccumRecord);
        if (Array.isArray(object?.uptimeAccumRecords))
            obj.uptimeAccumRecords = object.uptimeAccumRecords.map((e) => accum_1.Record.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined &&
            (obj.position = message.position ? position_1.Position.toJSON(message.position) : undefined);
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.spreadRewardAccumRecord !== undefined &&
            (obj.spreadRewardAccumRecord = message.spreadRewardAccumRecord
                ? accum_1.Record.toJSON(message.spreadRewardAccumRecord)
                : undefined);
        if (message.uptimeAccumRecords) {
            obj.uptimeAccumRecords = message.uptimeAccumRecords.map((e) => (e ? accum_1.Record.toJSON(e) : undefined));
        }
        else {
            obj.uptimeAccumRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePositionData();
        if (object.position !== undefined && object.position !== null) {
            message.position = position_1.Position.fromPartial(object.position);
        }
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        if (object.spreadRewardAccumRecord !== undefined && object.spreadRewardAccumRecord !== null) {
            message.spreadRewardAccumRecord = accum_1.Record.fromPartial(object.spreadRewardAccumRecord);
        }
        message.uptimeAccumRecords = object.uptimeAccumRecords?.map((e) => accum_1.Record.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        poolData: [],
        positionData: [],
        nextPositionId: BigInt(0),
        nextIncentiveRecordId: BigInt(0),
        incentivesAccumulatorPoolIdMigrationThreshold: BigInt(0),
        spreadFactorPoolIdMigrationThreshold: BigInt(0),
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolData) {
            exports.PoolData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.positionData) {
            exports.PositionData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextPositionId !== BigInt(0)) {
            writer.uint32(32).uint64(message.nextPositionId);
        }
        if (message.nextIncentiveRecordId !== BigInt(0)) {
            writer.uint32(40).uint64(message.nextIncentiveRecordId);
        }
        if (message.incentivesAccumulatorPoolIdMigrationThreshold !== BigInt(0)) {
            writer.uint32(48).uint64(message.incentivesAccumulatorPoolIdMigrationThreshold);
        }
        if (message.spreadFactorPoolIdMigrationThreshold !== BigInt(0)) {
            writer.uint32(56).uint64(message.spreadFactorPoolIdMigrationThreshold);
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolData.push(exports.PoolData.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.positionData.push(exports.PositionData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.nextPositionId = reader.uint64();
                    break;
                case 5:
                    message.nextIncentiveRecordId = reader.uint64();
                    break;
                case 6:
                    message.incentivesAccumulatorPoolIdMigrationThreshold = reader.uint64();
                    break;
                case 7:
                    message.spreadFactorPoolIdMigrationThreshold = reader.uint64();
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
            obj.params = params_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.poolData))
            obj.poolData = object.poolData.map((e) => exports.PoolData.fromJSON(e));
        if (Array.isArray(object?.positionData))
            obj.positionData = object.positionData.map((e) => exports.PositionData.fromJSON(e));
        if ((0, helpers_1.isSet)(object.nextPositionId))
            obj.nextPositionId = BigInt(object.nextPositionId.toString());
        if ((0, helpers_1.isSet)(object.nextIncentiveRecordId))
            obj.nextIncentiveRecordId = BigInt(object.nextIncentiveRecordId.toString());
        if ((0, helpers_1.isSet)(object.incentivesAccumulatorPoolIdMigrationThreshold))
            obj.incentivesAccumulatorPoolIdMigrationThreshold = BigInt(object.incentivesAccumulatorPoolIdMigrationThreshold.toString());
        if ((0, helpers_1.isSet)(object.spreadFactorPoolIdMigrationThreshold))
            obj.spreadFactorPoolIdMigrationThreshold = BigInt(object.spreadFactorPoolIdMigrationThreshold.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.poolData) {
            obj.poolData = message.poolData.map((e) => (e ? exports.PoolData.toJSON(e) : undefined));
        }
        else {
            obj.poolData = [];
        }
        if (message.positionData) {
            obj.positionData = message.positionData.map((e) => (e ? exports.PositionData.toJSON(e) : undefined));
        }
        else {
            obj.positionData = [];
        }
        message.nextPositionId !== undefined &&
            (obj.nextPositionId = (message.nextPositionId || BigInt(0)).toString());
        message.nextIncentiveRecordId !== undefined &&
            (obj.nextIncentiveRecordId = (message.nextIncentiveRecordId || BigInt(0)).toString());
        message.incentivesAccumulatorPoolIdMigrationThreshold !== undefined &&
            (obj.incentivesAccumulatorPoolIdMigrationThreshold = (message.incentivesAccumulatorPoolIdMigrationThreshold || BigInt(0)).toString());
        message.spreadFactorPoolIdMigrationThreshold !== undefined &&
            (obj.spreadFactorPoolIdMigrationThreshold = (message.spreadFactorPoolIdMigrationThreshold || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        message.poolData = object.poolData?.map((e) => exports.PoolData.fromPartial(e)) || [];
        message.positionData = object.positionData?.map((e) => exports.PositionData.fromPartial(e)) || [];
        if (object.nextPositionId !== undefined && object.nextPositionId !== null) {
            message.nextPositionId = BigInt(object.nextPositionId.toString());
        }
        if (object.nextIncentiveRecordId !== undefined && object.nextIncentiveRecordId !== null) {
            message.nextIncentiveRecordId = BigInt(object.nextIncentiveRecordId.toString());
        }
        if (object.incentivesAccumulatorPoolIdMigrationThreshold !== undefined &&
            object.incentivesAccumulatorPoolIdMigrationThreshold !== null) {
            message.incentivesAccumulatorPoolIdMigrationThreshold = BigInt(object.incentivesAccumulatorPoolIdMigrationThreshold.toString());
        }
        if (object.spreadFactorPoolIdMigrationThreshold !== undefined &&
            object.spreadFactorPoolIdMigrationThreshold !== null) {
            message.spreadFactorPoolIdMigrationThreshold = BigInt(object.spreadFactorPoolIdMigrationThreshold.toString());
        }
        return message;
    },
};
function createBaseAccumObject() {
    return {
        name: "",
        accumContent: undefined,
    };
}
exports.AccumObject = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.AccumObject",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.accumContent !== undefined) {
            accum_1.AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccumObject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.accumContent = accum_1.AccumulatorContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccumObject();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_1.isSet)(object.accumContent))
            obj.accumContent = accum_1.AccumulatorContent.fromJSON(object.accumContent);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.accumContent !== undefined &&
            (obj.accumContent = message.accumContent ? accum_1.AccumulatorContent.toJSON(message.accumContent) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccumObject();
        message.name = object.name ?? "";
        if (object.accumContent !== undefined && object.accumContent !== null) {
            message.accumContent = accum_1.AccumulatorContent.fromPartial(object.accumContent);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map