"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateVestingFunder = exports.EventClawback = exports.EventFundVestingAccount = exports.EventCreateClawbackVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.vesting.v2";
function createBaseEventCreateClawbackVestingAccount() {
    return {
        funder: "",
        vestingAccount: "",
    };
}
exports.EventCreateClawbackVestingAccount = {
    typeUrl: "/evmos.vesting.v2.EventCreateClawbackVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.vestingAccount !== "") {
            writer.uint32(18).string(message.vestingAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateClawbackVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.vestingAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventCreateClawbackVestingAccount();
        if ((0, helpers_1.isSet)(object.funder))
            obj.funder = String(object.funder);
        if ((0, helpers_1.isSet)(object.vestingAccount))
            obj.vestingAccount = String(object.vestingAccount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.vestingAccount !== undefined && (obj.vestingAccount = message.vestingAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCreateClawbackVestingAccount();
        message.funder = object.funder ?? "";
        message.vestingAccount = object.vestingAccount ?? "";
        return message;
    },
};
function createBaseEventFundVestingAccount() {
    return {
        funder: "",
        coins: "",
        startTime: "",
        vestingAccount: "",
    };
}
exports.EventFundVestingAccount = {
    typeUrl: "/evmos.vesting.v2.EventFundVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.coins !== "") {
            writer.uint32(18).string(message.coins);
        }
        if (message.startTime !== "") {
            writer.uint32(26).string(message.startTime);
        }
        if (message.vestingAccount !== "") {
            writer.uint32(42).string(message.vestingAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventFundVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.coins = reader.string();
                    break;
                case 3:
                    message.startTime = reader.string();
                    break;
                case 5:
                    message.vestingAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventFundVestingAccount();
        if ((0, helpers_1.isSet)(object.funder))
            obj.funder = String(object.funder);
        if ((0, helpers_1.isSet)(object.coins))
            obj.coins = String(object.coins);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = String(object.startTime);
        if ((0, helpers_1.isSet)(object.vestingAccount))
            obj.vestingAccount = String(object.vestingAccount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.coins !== undefined && (obj.coins = message.coins);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.vestingAccount !== undefined && (obj.vestingAccount = message.vestingAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventFundVestingAccount();
        message.funder = object.funder ?? "";
        message.coins = object.coins ?? "";
        message.startTime = object.startTime ?? "";
        message.vestingAccount = object.vestingAccount ?? "";
        return message;
    },
};
function createBaseEventClawback() {
    return {
        funder: "",
        account: "",
        destination: "",
    };
}
exports.EventClawback = {
    typeUrl: "/evmos.vesting.v2.EventClawback",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.destination !== "") {
            writer.uint32(26).string(message.destination);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventClawback();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.destination = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventClawback();
        if ((0, helpers_1.isSet)(object.funder))
            obj.funder = String(object.funder);
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.destination))
            obj.destination = String(object.destination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.account !== undefined && (obj.account = message.account);
        message.destination !== undefined && (obj.destination = message.destination);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventClawback();
        message.funder = object.funder ?? "";
        message.account = object.account ?? "";
        message.destination = object.destination ?? "";
        return message;
    },
};
function createBaseEventUpdateVestingFunder() {
    return {
        funder: "",
        account: "",
        newFunder: "",
    };
}
exports.EventUpdateVestingFunder = {
    typeUrl: "/evmos.vesting.v2.EventUpdateVestingFunder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.newFunder !== "") {
            writer.uint32(26).string(message.newFunder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateVestingFunder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.newFunder = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEventUpdateVestingFunder();
        if ((0, helpers_1.isSet)(object.funder))
            obj.funder = String(object.funder);
        if ((0, helpers_1.isSet)(object.account))
            obj.account = String(object.account);
        if ((0, helpers_1.isSet)(object.newFunder))
            obj.newFunder = String(object.newFunder);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.account !== undefined && (obj.account = message.account);
        message.newFunder !== undefined && (obj.newFunder = message.newFunder);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateVestingFunder();
        message.funder = object.funder ?? "";
        message.account = object.account ?? "";
        message.newFunder = object.newFunder ?? "";
        return message;
    },
};
//# sourceMappingURL=events.js.map