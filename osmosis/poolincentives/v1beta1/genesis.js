"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const incentives_1 = require("./incentives");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolincentives.v1beta1";
function createBaseGenesisState() {
    return {
        params: incentives_1.Params.fromPartial({}),
        lockableDurations: [],
        distrInfo: undefined,
        anyPoolToInternalGauges: undefined,
        concentratedPoolToNoLockGauges: undefined,
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distrInfo !== undefined) {
            incentives_1.DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.anyPoolToInternalGauges !== undefined) {
            incentives_1.AnyPoolToInternalGauges.encode(message.anyPoolToInternalGauges, writer.uint32(34).fork()).ldelim();
        }
        if (message.concentratedPoolToNoLockGauges !== undefined) {
            incentives_1.ConcentratedPoolToNoLockGauges.encode(message.concentratedPoolToNoLockGauges, writer.uint32(42).fork()).ldelim();
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
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distrInfo = incentives_1.DistrInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.anyPoolToInternalGauges = incentives_1.AnyPoolToInternalGauges.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.concentratedPoolToNoLockGauges = incentives_1.ConcentratedPoolToNoLockGauges.decode(reader, reader.uint32());
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
            obj.params = incentives_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.lockableDurations))
            obj.lockableDurations = object.lockableDurations.map((e) => duration_1.Duration.fromJSON(e));
        if ((0, helpers_1.isSet)(object.distrInfo))
            obj.distrInfo = incentives_1.DistrInfo.fromJSON(object.distrInfo);
        if ((0, helpers_1.isSet)(object.anyPoolToInternalGauges))
            obj.anyPoolToInternalGauges = incentives_1.AnyPoolToInternalGauges.fromJSON(object.anyPoolToInternalGauges);
        if ((0, helpers_1.isSet)(object.concentratedPoolToNoLockGauges))
            obj.concentratedPoolToNoLockGauges = incentives_1.ConcentratedPoolToNoLockGauges.fromJSON(object.concentratedPoolToNoLockGauges);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toJSON(message.params) : undefined);
        if (message.lockableDurations) {
            obj.lockableDurations = message.lockableDurations.map((e) => (e ? duration_1.Duration.toJSON(e) : undefined));
        }
        else {
            obj.lockableDurations = [];
        }
        message.distrInfo !== undefined &&
            (obj.distrInfo = message.distrInfo ? incentives_1.DistrInfo.toJSON(message.distrInfo) : undefined);
        message.anyPoolToInternalGauges !== undefined &&
            (obj.anyPoolToInternalGauges = message.anyPoolToInternalGauges
                ? incentives_1.AnyPoolToInternalGauges.toJSON(message.anyPoolToInternalGauges)
                : undefined);
        message.concentratedPoolToNoLockGauges !== undefined &&
            (obj.concentratedPoolToNoLockGauges = message.concentratedPoolToNoLockGauges
                ? incentives_1.ConcentratedPoolToNoLockGauges.toJSON(message.concentratedPoolToNoLockGauges)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = incentives_1.Params.fromPartial(object.params);
        }
        message.lockableDurations = object.lockableDurations?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        if (object.distrInfo !== undefined && object.distrInfo !== null) {
            message.distrInfo = incentives_1.DistrInfo.fromPartial(object.distrInfo);
        }
        if (object.anyPoolToInternalGauges !== undefined && object.anyPoolToInternalGauges !== null) {
            message.anyPoolToInternalGauges = incentives_1.AnyPoolToInternalGauges.fromPartial(object.anyPoolToInternalGauges);
        }
        if (object.concentratedPoolToNoLockGauges !== undefined &&
            object.concentratedPoolToNoLockGauges !== null) {
            message.concentratedPoolToNoLockGauges = incentives_1.ConcentratedPoolToNoLockGauges.fromPartial(object.concentratedPoolToNoLockGauges);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map