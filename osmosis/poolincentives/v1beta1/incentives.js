"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcentratedPoolToNoLockGauges = exports.AnyPoolToInternalGauges = exports.PoolToGauge = exports.DistrRecord = exports.DistrInfo = exports.LockableDurationsInfo = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolincentives.v1beta1";
function createBaseParams() {
    return {
        mintedDenom: "",
    };
}
exports.Params = {
    typeUrl: "/osmosis.poolincentives.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintedDenom !== "") {
            writer.uint32(10).string(message.mintedDenom);
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
                    message.mintedDenom = reader.string();
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
        if ((0, helpers_1.isSet)(object.mintedDenom))
            obj.mintedDenom = String(object.mintedDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.mintedDenom !== undefined && (obj.mintedDenom = message.mintedDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintedDenom = object.mintedDenom ?? "";
        return message;
    },
};
function createBaseLockableDurationsInfo() {
    return {
        lockableDurations: [],
    };
}
exports.LockableDurationsInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockableDurationsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLockableDurationsInfo();
        if (Array.isArray(object?.lockableDurations))
            obj.lockableDurations = object.lockableDurations.map((e) => duration_1.Duration.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockableDurations = message.lockableDurations.map((e) => (e ? duration_1.Duration.toJSON(e) : undefined));
        }
        else {
            obj.lockableDurations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations = object.lockableDurations?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDistrInfo() {
    return {
        totalWeight: "",
        records: [],
    };
}
exports.DistrInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalWeight !== "") {
            writer.uint32(10).string(message.totalWeight);
        }
        for (const v of message.records) {
            exports.DistrRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalWeight = reader.string();
                    break;
                case 2:
                    message.records.push(exports.DistrRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDistrInfo();
        if ((0, helpers_1.isSet)(object.totalWeight))
            obj.totalWeight = String(object.totalWeight);
        if (Array.isArray(object?.records))
            obj.records = object.records.map((e) => exports.DistrRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
        if (message.records) {
            obj.records = message.records.map((e) => (e ? exports.DistrRecord.toJSON(e) : undefined));
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistrInfo();
        message.totalWeight = object.totalWeight ?? "";
        message.records = object.records?.map((e) => exports.DistrRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDistrRecord() {
    return {
        gaugeId: BigInt(0),
        weight: "",
    };
}
exports.DistrRecord = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
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
        const obj = createBaseDistrRecord();
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        if ((0, helpers_1.isSet)(object.weight))
            obj.weight = String(object.weight);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistrRecord();
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        message.weight = object.weight ?? "";
        return message;
    },
};
function createBasePoolToGauge() {
    return {
        poolId: BigInt(0),
        gaugeId: BigInt(0),
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.PoolToGauge = {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.gaugeId = reader.uint64();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolToGauge();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolToGauge();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        return message;
    },
};
function createBaseAnyPoolToInternalGauges() {
    return {
        poolToGauge: [],
    };
}
exports.AnyPoolToInternalGauges = {
    typeUrl: "/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolToGauge) {
            exports.PoolToGauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAnyPoolToInternalGauges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.poolToGauge.push(exports.PoolToGauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAnyPoolToInternalGauges();
        if (Array.isArray(object?.poolToGauge))
            obj.poolToGauge = object.poolToGauge.map((e) => exports.PoolToGauge.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.poolToGauge = message.poolToGauge.map((e) => (e ? exports.PoolToGauge.toJSON(e) : undefined));
        }
        else {
            obj.poolToGauge = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAnyPoolToInternalGauges();
        message.poolToGauge = object.poolToGauge?.map((e) => exports.PoolToGauge.fromPartial(e)) || [];
        return message;
    },
};
function createBaseConcentratedPoolToNoLockGauges() {
    return {
        poolToGauge: [],
    };
}
exports.ConcentratedPoolToNoLockGauges = {
    typeUrl: "/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolToGauge) {
            exports.PoolToGauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConcentratedPoolToNoLockGauges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolToGauge.push(exports.PoolToGauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConcentratedPoolToNoLockGauges();
        if (Array.isArray(object?.poolToGauge))
            obj.poolToGauge = object.poolToGauge.map((e) => exports.PoolToGauge.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.poolToGauge = message.poolToGauge.map((e) => (e ? exports.PoolToGauge.toJSON(e) : undefined));
        }
        else {
            obj.poolToGauge = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConcentratedPoolToNoLockGauges();
        message.poolToGauge = object.poolToGauge?.map((e) => exports.PoolToGauge.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=incentives.js.map