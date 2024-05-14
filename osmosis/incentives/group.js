"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsWithGauge = exports.CreateGroup = exports.Group = exports.InternalGaugeRecord = exports.InternalGaugeInfo = exports.splittingPolicyToJSON = exports.splittingPolicyFromJSON = exports.SplittingPolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const gauge_1 = require("./gauge");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.incentives";
/** SplittingPolicy determines the way we want to split incentives in groupGauges */
var SplittingPolicy;
(function (SplittingPolicy) {
    SplittingPolicy[SplittingPolicy["ByVolume"] = 0] = "ByVolume";
    SplittingPolicy[SplittingPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SplittingPolicy || (exports.SplittingPolicy = SplittingPolicy = {}));
function splittingPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "ByVolume":
            return SplittingPolicy.ByVolume;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SplittingPolicy.UNRECOGNIZED;
    }
}
exports.splittingPolicyFromJSON = splittingPolicyFromJSON;
function splittingPolicyToJSON(object) {
    switch (object) {
        case SplittingPolicy.ByVolume:
            return "ByVolume";
        case SplittingPolicy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.splittingPolicyToJSON = splittingPolicyToJSON;
function createBaseInternalGaugeInfo() {
    return {
        totalWeight: "",
        gaugeRecords: [],
    };
}
exports.InternalGaugeInfo = {
    typeUrl: "/osmosis.incentives.InternalGaugeInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalWeight !== "") {
            writer.uint32(10).string(message.totalWeight);
        }
        for (const v of message.gaugeRecords) {
            exports.InternalGaugeRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInternalGaugeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalWeight = reader.string();
                    break;
                case 2:
                    message.gaugeRecords.push(exports.InternalGaugeRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseInternalGaugeInfo();
        if ((0, helpers_1.isSet)(object.totalWeight))
            obj.totalWeight = String(object.totalWeight);
        if (Array.isArray(object?.gaugeRecords))
            obj.gaugeRecords = object.gaugeRecords.map((e) => exports.InternalGaugeRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
        if (message.gaugeRecords) {
            obj.gaugeRecords = message.gaugeRecords.map((e) => (e ? exports.InternalGaugeRecord.toJSON(e) : undefined));
        }
        else {
            obj.gaugeRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInternalGaugeInfo();
        message.totalWeight = object.totalWeight ?? "";
        message.gaugeRecords = object.gaugeRecords?.map((e) => exports.InternalGaugeRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBaseInternalGaugeRecord() {
    return {
        gaugeId: BigInt(0),
        currentWeight: "",
        cumulativeWeight: "",
    };
}
exports.InternalGaugeRecord = {
    typeUrl: "/osmosis.incentives.InternalGaugeRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.currentWeight !== "") {
            writer.uint32(18).string(message.currentWeight);
        }
        if (message.cumulativeWeight !== "") {
            writer.uint32(26).string(message.cumulativeWeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInternalGaugeRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.currentWeight = reader.string();
                    break;
                case 3:
                    message.cumulativeWeight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseInternalGaugeRecord();
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        if ((0, helpers_1.isSet)(object.currentWeight))
            obj.currentWeight = String(object.currentWeight);
        if ((0, helpers_1.isSet)(object.cumulativeWeight))
            obj.cumulativeWeight = String(object.cumulativeWeight);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.currentWeight !== undefined && (obj.currentWeight = message.currentWeight);
        message.cumulativeWeight !== undefined && (obj.cumulativeWeight = message.cumulativeWeight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInternalGaugeRecord();
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        message.currentWeight = object.currentWeight ?? "";
        message.cumulativeWeight = object.cumulativeWeight ?? "";
        return message;
    },
};
function createBaseGroup() {
    return {
        groupGaugeId: BigInt(0),
        internalGaugeInfo: exports.InternalGaugeInfo.fromPartial({}),
        splittingPolicy: 0,
    };
}
exports.Group = {
    typeUrl: "/osmosis.incentives.Group",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupGaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupGaugeId);
        }
        if (message.internalGaugeInfo !== undefined) {
            exports.InternalGaugeInfo.encode(message.internalGaugeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.splittingPolicy !== 0) {
            writer.uint32(24).int32(message.splittingPolicy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupGaugeId = reader.uint64();
                    break;
                case 2:
                    message.internalGaugeInfo = exports.InternalGaugeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.splittingPolicy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGroup();
        if ((0, helpers_1.isSet)(object.groupGaugeId))
            obj.groupGaugeId = BigInt(object.groupGaugeId.toString());
        if ((0, helpers_1.isSet)(object.internalGaugeInfo))
            obj.internalGaugeInfo = exports.InternalGaugeInfo.fromJSON(object.internalGaugeInfo);
        if ((0, helpers_1.isSet)(object.splittingPolicy))
            obj.splittingPolicy = splittingPolicyFromJSON(object.splittingPolicy);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.groupGaugeId !== undefined && (obj.groupGaugeId = (message.groupGaugeId || BigInt(0)).toString());
        message.internalGaugeInfo !== undefined &&
            (obj.internalGaugeInfo = message.internalGaugeInfo
                ? exports.InternalGaugeInfo.toJSON(message.internalGaugeInfo)
                : undefined);
        message.splittingPolicy !== undefined &&
            (obj.splittingPolicy = splittingPolicyToJSON(message.splittingPolicy));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGroup();
        if (object.groupGaugeId !== undefined && object.groupGaugeId !== null) {
            message.groupGaugeId = BigInt(object.groupGaugeId.toString());
        }
        if (object.internalGaugeInfo !== undefined && object.internalGaugeInfo !== null) {
            message.internalGaugeInfo = exports.InternalGaugeInfo.fromPartial(object.internalGaugeInfo);
        }
        message.splittingPolicy = object.splittingPolicy ?? 0;
        return message;
    },
};
function createBaseCreateGroup() {
    return {
        poolIds: [],
    };
}
exports.CreateGroup = {
    typeUrl: "/osmosis.incentives.CreateGroup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.poolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.poolIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCreateGroup();
        if (Array.isArray(object?.poolIds))
            obj.poolIds = object.poolIds.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolIds) {
            obj.poolIds = message.poolIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.poolIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateGroup();
        message.poolIds = object.poolIds?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseGroupsWithGauge() {
    return {
        group: exports.Group.fromPartial({}),
        gauge: gauge_1.Gauge.fromPartial({}),
    };
}
exports.GroupsWithGauge = {
    typeUrl: "/osmosis.incentives.GroupsWithGauge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group !== undefined) {
            exports.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        if (message.gauge !== undefined) {
            gauge_1.Gauge.encode(message.gauge, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupsWithGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = exports.Group.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gauge = gauge_1.Gauge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGroupsWithGauge();
        if ((0, helpers_1.isSet)(object.group))
            obj.group = exports.Group.fromJSON(object.group);
        if ((0, helpers_1.isSet)(object.gauge))
            obj.gauge = gauge_1.Gauge.fromJSON(object.gauge);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.group !== undefined && (obj.group = message.group ? exports.Group.toJSON(message.group) : undefined);
        message.gauge !== undefined && (obj.gauge = message.gauge ? gauge_1.Gauge.toJSON(message.gauge) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGroupsWithGauge();
        if (object.group !== undefined && object.group !== null) {
            message.group = exports.Group.fromPartial(object.group);
        }
        if (object.gauge !== undefined && object.gauge !== null) {
            message.gauge = gauge_1.Gauge.fromPartial(object.gauge);
        }
        return message;
    },
};
//# sourceMappingURL=group.js.map