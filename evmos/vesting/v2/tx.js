"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgConvertVestingAccountResponse = exports.MsgConvertVestingAccount = exports.MsgUpdateVestingFunderResponse = exports.MsgUpdateVestingFunder = exports.MsgClawbackResponse = exports.MsgClawback = exports.MsgFundVestingAccountResponse = exports.MsgFundVestingAccount = exports.MsgCreateClawbackVestingAccountResponse = exports.MsgCreateClawbackVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const vesting_1 = require("../../../cosmos/vesting/v1beta1/vesting");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.vesting.v2";
function createBaseMsgCreateClawbackVestingAccount() {
    return {
        funderAddress: "",
        vestingAddress: "",
        enableGovClawback: false,
    };
}
exports.MsgCreateClawbackVestingAccount = {
    typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.vestingAddress !== "") {
            writer.uint32(18).string(message.vestingAddress);
        }
        if (message.enableGovClawback === true) {
            writer.uint32(24).bool(message.enableGovClawback);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClawbackVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.vestingAddress = reader.string();
                    break;
                case 3:
                    message.enableGovClawback = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateClawbackVestingAccount();
        if ((0, helpers_1.isSet)(object.funderAddress))
            obj.funderAddress = String(object.funderAddress);
        if ((0, helpers_1.isSet)(object.vestingAddress))
            obj.vestingAddress = String(object.vestingAddress);
        if ((0, helpers_1.isSet)(object.enableGovClawback))
            obj.enableGovClawback = Boolean(object.enableGovClawback);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
        message.enableGovClawback !== undefined && (obj.enableGovClawback = message.enableGovClawback);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClawbackVestingAccount();
        message.funderAddress = object.funderAddress ?? "";
        message.vestingAddress = object.vestingAddress ?? "";
        message.enableGovClawback = object.enableGovClawback ?? false;
        return message;
    },
};
function createBaseMsgCreateClawbackVestingAccountResponse() {
    return {};
}
exports.MsgCreateClawbackVestingAccountResponse = {
    typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClawbackVestingAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgCreateClawbackVestingAccountResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateClawbackVestingAccountResponse();
        return message;
    },
};
function createBaseMsgFundVestingAccount() {
    return {
        funderAddress: "",
        vestingAddress: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
        lockupPeriods: [],
        vestingPeriods: [],
    };
}
exports.MsgFundVestingAccount = {
    typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.vestingAddress !== "") {
            writer.uint32(18).string(message.vestingAddress);
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
        const message = createBaseMsgFundVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.vestingAddress = reader.string();
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
        const obj = createBaseMsgFundVestingAccount();
        if ((0, helpers_1.isSet)(object.funderAddress))
            obj.funderAddress = String(object.funderAddress);
        if ((0, helpers_1.isSet)(object.vestingAddress))
            obj.vestingAddress = String(object.vestingAddress);
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
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
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
        const message = createBaseMsgFundVestingAccount();
        message.funderAddress = object.funderAddress ?? "";
        message.vestingAddress = object.vestingAddress ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        message.lockupPeriods = object.lockupPeriods?.map((e) => vesting_1.Period.fromPartial(e)) || [];
        message.vestingPeriods = object.vestingPeriods?.map((e) => vesting_1.Period.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgFundVestingAccountResponse() {
    return {};
}
exports.MsgFundVestingAccountResponse = {
    typeUrl: "/evmos.vesting.v2.MsgFundVestingAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundVestingAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgFundVestingAccountResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgFundVestingAccountResponse();
        return message;
    },
};
function createBaseMsgClawback() {
    return {
        funderAddress: "",
        accountAddress: "",
        destAddress: "",
    };
}
exports.MsgClawback = {
    typeUrl: "/evmos.vesting.v2.MsgClawback",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClawback();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.destAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgClawback();
        if ((0, helpers_1.isSet)(object.funderAddress))
            obj.funderAddress = String(object.funderAddress);
        if ((0, helpers_1.isSet)(object.accountAddress))
            obj.accountAddress = String(object.accountAddress);
        if ((0, helpers_1.isSet)(object.destAddress))
            obj.destAddress = String(object.destAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.destAddress !== undefined && (obj.destAddress = message.destAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClawback();
        message.funderAddress = object.funderAddress ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.destAddress = object.destAddress ?? "";
        return message;
    },
};
function createBaseMsgClawbackResponse() {
    return {
        coins: [],
    };
}
exports.MsgClawbackResponse = {
    typeUrl: "/evmos.vesting.v2.MsgClawbackResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClawbackResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgClawbackResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClawbackResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgUpdateVestingFunder() {
    return {
        funderAddress: "",
        newFunderAddress: "",
        vestingAddress: "",
    };
}
exports.MsgUpdateVestingFunder = {
    typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.newFunderAddress !== "") {
            writer.uint32(18).string(message.newFunderAddress);
        }
        if (message.vestingAddress !== "") {
            writer.uint32(26).string(message.vestingAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateVestingFunder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.newFunderAddress = reader.string();
                    break;
                case 3:
                    message.vestingAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUpdateVestingFunder();
        if ((0, helpers_1.isSet)(object.funderAddress))
            obj.funderAddress = String(object.funderAddress);
        if ((0, helpers_1.isSet)(object.newFunderAddress))
            obj.newFunderAddress = String(object.newFunderAddress);
        if ((0, helpers_1.isSet)(object.vestingAddress))
            obj.vestingAddress = String(object.vestingAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.newFunderAddress !== undefined && (obj.newFunderAddress = message.newFunderAddress);
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateVestingFunder();
        message.funderAddress = object.funderAddress ?? "";
        message.newFunderAddress = object.newFunderAddress ?? "";
        message.vestingAddress = object.vestingAddress ?? "";
        return message;
    },
};
function createBaseMsgUpdateVestingFunderResponse() {
    return {};
}
exports.MsgUpdateVestingFunderResponse = {
    typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateVestingFunderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgUpdateVestingFunderResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateVestingFunderResponse();
        return message;
    },
};
function createBaseMsgConvertVestingAccount() {
    return {
        vestingAddress: "",
    };
}
exports.MsgConvertVestingAccount = {
    typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vestingAddress !== "") {
            writer.uint32(10).string(message.vestingAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vestingAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgConvertVestingAccount();
        if ((0, helpers_1.isSet)(object.vestingAddress))
            obj.vestingAddress = String(object.vestingAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertVestingAccount();
        message.vestingAddress = object.vestingAddress ?? "";
        return message;
    },
};
function createBaseMsgConvertVestingAccountResponse() {
    return {};
}
exports.MsgConvertVestingAccountResponse = {
    typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertVestingAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgConvertVestingAccountResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertVestingAccountResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateClawbackVestingAccount = this.CreateClawbackVestingAccount.bind(this);
        this.FundVestingAccount = this.FundVestingAccount.bind(this);
        this.Clawback = this.Clawback.bind(this);
        this.UpdateVestingFunder = this.UpdateVestingFunder.bind(this);
        this.ConvertVestingAccount = this.ConvertVestingAccount.bind(this);
    }
    CreateClawbackVestingAccount(request) {
        const data = exports.MsgCreateClawbackVestingAccount.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "CreateClawbackVestingAccount", data);
        return promise.then((data) => exports.MsgCreateClawbackVestingAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    FundVestingAccount(request) {
        const data = exports.MsgFundVestingAccount.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "FundVestingAccount", data);
        return promise.then((data) => exports.MsgFundVestingAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    Clawback(request) {
        const data = exports.MsgClawback.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "Clawback", data);
        return promise.then((data) => exports.MsgClawbackResponse.decode(new binary_1.BinaryReader(data)));
    }
    UpdateVestingFunder(request) {
        const data = exports.MsgUpdateVestingFunder.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "UpdateVestingFunder", data);
        return promise.then((data) => exports.MsgUpdateVestingFunderResponse.decode(new binary_1.BinaryReader(data)));
    }
    ConvertVestingAccount(request) {
        const data = exports.MsgConvertVestingAccount.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Msg", "ConvertVestingAccount", data);
        return promise.then((data) => exports.MsgConvertVestingAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map