"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancerToConcentratedPoolLink = exports.MigrationRecords = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolincentives.v1beta1";
function createBaseMigrationRecords() {
    return {
        balancerToConcentratedPoolLinks: [],
    };
}
exports.MigrationRecords = {
    typeUrl: "/osmosis.poolincentives.v1beta1.MigrationRecords",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balancerToConcentratedPoolLinks) {
            exports.BalancerToConcentratedPoolLink.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrationRecords();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balancerToConcentratedPoolLinks.push(exports.BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMigrationRecords();
        if (Array.isArray(object?.balancerToConcentratedPoolLinks))
            obj.balancerToConcentratedPoolLinks = object.balancerToConcentratedPoolLinks.map((e) => exports.BalancerToConcentratedPoolLink.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.balancerToConcentratedPoolLinks) {
            obj.balancerToConcentratedPoolLinks = message.balancerToConcentratedPoolLinks.map((e) => e ? exports.BalancerToConcentratedPoolLink.toJSON(e) : undefined);
        }
        else {
            obj.balancerToConcentratedPoolLinks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMigrationRecords();
        message.balancerToConcentratedPoolLinks =
            object.balancerToConcentratedPoolLinks?.map((e) => exports.BalancerToConcentratedPoolLink.fromPartial(e)) || [];
        return message;
    },
};
function createBaseBalancerToConcentratedPoolLink() {
    return {
        balancerPoolId: BigInt(0),
        clPoolId: BigInt(0),
    };
}
exports.BalancerToConcentratedPoolLink = {
    typeUrl: "/osmosis.poolincentives.v1beta1.BalancerToConcentratedPoolLink",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balancerPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.balancerPoolId);
        }
        if (message.clPoolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.clPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalancerToConcentratedPoolLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balancerPoolId = reader.uint64();
                    break;
                case 2:
                    message.clPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBalancerToConcentratedPoolLink();
        if ((0, helpers_1.isSet)(object.balancerPoolId))
            obj.balancerPoolId = BigInt(object.balancerPoolId.toString());
        if ((0, helpers_1.isSet)(object.clPoolId))
            obj.clPoolId = BigInt(object.clPoolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.balancerPoolId !== undefined &&
            (obj.balancerPoolId = (message.balancerPoolId || BigInt(0)).toString());
        message.clPoolId !== undefined && (obj.clPoolId = (message.clPoolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBalancerToConcentratedPoolLink();
        if (object.balancerPoolId !== undefined && object.balancerPoolId !== null) {
            message.balancerPoolId = BigInt(object.balancerPoolId.toString());
        }
        if (object.clPoolId !== undefined && object.clPoolId !== null) {
            message.clPoolId = BigInt(object.clPoolId.toString());
        }
        return message;
    },
};
//# sourceMappingURL=shared.js.map