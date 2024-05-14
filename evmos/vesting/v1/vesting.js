"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClawbackVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const vesting_1 = require("../../../cosmos/vesting/v1beta1/vesting");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.vesting.v1";
function createBaseClawbackVestingAccount() {
    return {
        baseVestingAccount: undefined,
        funderAddress: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
        lockupPeriods: [],
        vestingPeriods: [],
    };
}
exports.ClawbackVestingAccount = {
    typeUrl: "/evmos.vesting.v1.ClawbackVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            vesting_1.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.funderAddress !== "") {
            writer.uint32(18).string(message.funderAddress);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.lockupPeriods) {
            vesting_1.Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.vestingPeriods) {
            vesting_1.Period.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClawbackVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = vesting_1.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.funderAddress = reader.string();
                    break;
                case 3:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lockupPeriods.push(vesting_1.Period.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.vestingPeriods.push(vesting_1.Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseClawbackVestingAccount();
        if ((0, helpers_1.isSet)(object.baseVestingAccount))
            obj.baseVestingAccount = vesting_1.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        if ((0, helpers_1.isSet)(object.funderAddress))
            obj.funderAddress = String(object.funderAddress);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if (Array.isArray(object?.lockupPeriods))
            obj.lockupPeriods = object.lockupPeriods.map((e) => vesting_1.Period.fromJSON(e));
        if (Array.isArray(object?.vestingPeriods))
            obj.vestingPeriods = object.vestingPeriods.map((e) => vesting_1.Period.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? vesting_1.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        if (message.lockupPeriods) {
            obj.lockupPeriods = message.lockupPeriods.map((e) => (e ? vesting_1.Period.toJSON(e) : undefined));
        }
        else {
            obj.lockupPeriods = [];
        }
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map((e) => (e ? vesting_1.Period.toJSON(e) : undefined));
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClawbackVestingAccount();
        if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
            message.baseVestingAccount = vesting_1.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        message.funderAddress = object.funderAddress ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        message.lockupPeriods = object.lockupPeriods?.map((e) => vesting_1.Period.fromPartial(e)) || [];
        message.vestingPeriods = object.vestingPeriods?.map((e) => vesting_1.Period.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=vesting.js.map