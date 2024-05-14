"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const lock_1 = require("./lock");
const params_1 = require("./params");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.lockup";
function createBaseGenesisState() {
    return {
        lastLockId: BigInt(0),
        locks: [],
        syntheticLocks: [],
        params: undefined,
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.lockup.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lastLockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lastLockId);
        }
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.syntheticLocks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.lastLockId = reader.uint64();
                    break;
                case 2:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.syntheticLocks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        if ((0, helpers_1.isSet)(object.lastLockId))
            obj.lastLockId = BigInt(object.lastLockId.toString());
        if (Array.isArray(object?.locks))
            obj.locks = object.locks.map((e) => lock_1.PeriodLock.fromJSON(e));
        if (Array.isArray(object?.syntheticLocks))
            obj.syntheticLocks = object.syntheticLocks.map((e) => lock_1.SyntheticLock.fromJSON(e));
        if ((0, helpers_1.isSet)(object.params))
            obj.params = params_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lastLockId !== undefined && (obj.lastLockId = (message.lastLockId || BigInt(0)).toString());
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.PeriodLock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        if (message.syntheticLocks) {
            obj.syntheticLocks = message.syntheticLocks.map((e) => (e ? lock_1.SyntheticLock.toJSON(e) : undefined));
        }
        else {
            obj.syntheticLocks = [];
        }
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.lastLockId !== undefined && object.lastLockId !== null) {
            message.lastLockId = BigInt(object.lastLockId.toString());
        }
        message.locks = object.locks?.map((e) => lock_1.PeriodLock.fromPartial(e)) || [];
        message.syntheticLocks = object.syntheticLocks?.map((e) => lock_1.SyntheticLock.fromPartial(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map