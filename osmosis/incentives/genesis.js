"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const gauge_1 = require("./gauge");
const duration_1 = require("../../google/protobuf/duration");
const group_1 = require("./group");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.incentives";
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        gauges: [],
        lockableDurations: [],
        lastGaugeId: BigInt(0),
        groupGauges: [],
        groups: [],
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.incentives.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastGaugeId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastGaugeId);
        }
        for (const v of message.groupGauges) {
            gauge_1.Gauge.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(50).fork()).ldelim();
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
                    message.gauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastGaugeId = reader.uint64();
                    break;
                case 5:
                    message.groupGauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.gauges))
            obj.gauges = object.gauges.map((e) => gauge_1.Gauge.fromJSON(e));
        if (Array.isArray(object?.lockableDurations))
            obj.lockableDurations = object.lockableDurations.map((e) => duration_1.Duration.fromJSON(e));
        if ((0, helpers_1.isSet)(object.lastGaugeId))
            obj.lastGaugeId = BigInt(object.lastGaugeId.toString());
        if (Array.isArray(object?.groupGauges))
            obj.groupGauges = object.groupGauges.map((e) => gauge_1.Gauge.fromJSON(e));
        if (Array.isArray(object?.groups))
            obj.groups = object.groups.map((e) => group_1.Group.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.gauges) {
            obj.gauges = message.gauges.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.gauges = [];
        }
        if (message.lockableDurations) {
            obj.lockableDurations = message.lockableDurations.map((e) => (e ? duration_1.Duration.toJSON(e) : undefined));
        }
        else {
            obj.lockableDurations = [];
        }
        message.lastGaugeId !== undefined && (obj.lastGaugeId = (message.lastGaugeId || BigInt(0)).toString());
        if (message.groupGauges) {
            obj.groupGauges = message.groupGauges.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.groupGauges = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? group_1.Group.toJSON(e) : undefined));
        }
        else {
            obj.groups = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        message.gauges = object.gauges?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        message.lockableDurations = object.lockableDurations?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        if (object.lastGaugeId !== undefined && object.lastGaugeId !== null) {
            message.lastGaugeId = BigInt(object.lastGaugeId.toString());
        }
        message.groupGauges = object.groupGauges?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        message.groups = object.groups?.map((e) => group_1.Group.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map