"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgDelegateBondedTokensResponse = exports.MsgDelegateBondedTokens = exports.MsgWithdrawDelegationRewardsResponse = exports.MsgWithdrawDelegationRewards = exports.MsgRedelegateValidatorSetResponse = exports.MsgRedelegateValidatorSet = exports.MsgUndelegateFromRebalancedValidatorSetResponse = exports.MsgUndelegateFromRebalancedValidatorSet = exports.MsgUndelegateFromValidatorSetResponse = exports.MsgUndelegateFromValidatorSet = exports.MsgDelegateToValidatorSetResponse = exports.MsgDelegateToValidatorSet = exports.MsgSetValidatorSetPreferenceResponse = exports.MsgSetValidatorSetPreference = exports.protobufPackage = void 0;
/* eslint-disable */
const state_1 = require("./state");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.valsetpref.v1beta1";
function createBaseMsgSetValidatorSetPreference() {
    return {
        delegator: "",
        preferences: [],
    };
}
exports.MsgSetValidatorSetPreference = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetValidatorSetPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetValidatorSetPreference();
        if ((0, helpers_1.isSet)(object.delegator))
            obj.delegator = String(object.delegator);
        if (Array.isArray(object?.preferences))
            obj.preferences = object.preferences.map((e) => state_1.ValidatorPreference.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        if (message.preferences) {
            obj.preferences = message.preferences.map((e) => (e ? state_1.ValidatorPreference.toJSON(e) : undefined));
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetValidatorSetPreference();
        message.delegator = object.delegator ?? "";
        message.preferences = object.preferences?.map((e) => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSetValidatorSetPreferenceResponse() {
    return {};
}
exports.MsgSetValidatorSetPreferenceResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
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
        const obj = createBaseMsgSetValidatorSetPreferenceResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
        return message;
    },
};
function createBaseMsgDelegateToValidatorSet() {
    return {
        delegator: "",
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgDelegateToValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateToValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgDelegateToValidatorSet();
        if ((0, helpers_1.isSet)(object.delegator))
            obj.delegator = String(object.delegator);
        if ((0, helpers_1.isSet)(object.coin))
            obj.coin = coin_1.Coin.fromJSON(object.coin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegateToValidatorSet();
        message.delegator = object.delegator ?? "";
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromPartial(object.coin);
        }
        return message;
    },
};
function createBaseMsgDelegateToValidatorSetResponse() {
    return {};
}
exports.MsgDelegateToValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateToValidatorSetResponse();
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
        const obj = createBaseMsgDelegateToValidatorSetResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDelegateToValidatorSetResponse();
        return message;
    },
};
function createBaseMsgUndelegateFromValidatorSet() {
    return {
        delegator: "",
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgUndelegateFromValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 3:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUndelegateFromValidatorSet();
        if ((0, helpers_1.isSet)(object.delegator))
            obj.delegator = String(object.delegator);
        if ((0, helpers_1.isSet)(object.coin))
            obj.coin = coin_1.Coin.fromJSON(object.coin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegateFromValidatorSet();
        message.delegator = object.delegator ?? "";
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromPartial(object.coin);
        }
        return message;
    },
};
function createBaseMsgUndelegateFromValidatorSetResponse() {
    return {};
}
exports.MsgUndelegateFromValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
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
        const obj = createBaseMsgUndelegateFromValidatorSetResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
        return message;
    },
};
function createBaseMsgUndelegateFromRebalancedValidatorSet() {
    return {
        delegator: "",
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgUndelegateFromRebalancedValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUndelegateFromRebalancedValidatorSet();
        if ((0, helpers_1.isSet)(object.delegator))
            obj.delegator = String(object.delegator);
        if ((0, helpers_1.isSet)(object.coin))
            obj.coin = coin_1.Coin.fromJSON(object.coin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
        message.delegator = object.delegator ?? "";
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromPartial(object.coin);
        }
        return message;
    },
};
function createBaseMsgUndelegateFromRebalancedValidatorSetResponse() {
    return {};
}
exports.MsgUndelegateFromRebalancedValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
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
        const obj = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
        return message;
    },
};
function createBaseMsgRedelegateValidatorSet() {
    return {
        delegator: "",
        preferences: [],
    };
}
exports.MsgRedelegateValidatorSet = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedelegateValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRedelegateValidatorSet();
        if ((0, helpers_1.isSet)(object.delegator))
            obj.delegator = String(object.delegator);
        if (Array.isArray(object?.preferences))
            obj.preferences = object.preferences.map((e) => state_1.ValidatorPreference.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        if (message.preferences) {
            obj.preferences = message.preferences.map((e) => (e ? state_1.ValidatorPreference.toJSON(e) : undefined));
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRedelegateValidatorSet();
        message.delegator = object.delegator ?? "";
        message.preferences = object.preferences?.map((e) => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgRedelegateValidatorSetResponse() {
    return {};
}
exports.MsgRedelegateValidatorSetResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedelegateValidatorSetResponse();
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
        const obj = createBaseMsgRedelegateValidatorSetResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRedelegateValidatorSetResponse();
        return message;
    },
};
function createBaseMsgWithdrawDelegationRewards() {
    return {
        delegator: "",
    };
}
exports.MsgWithdrawDelegationRewards = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegationRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawDelegationRewards();
        if ((0, helpers_1.isSet)(object.delegator))
            obj.delegator = String(object.delegator);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDelegationRewards();
        message.delegator = object.delegator ?? "";
        return message;
    },
};
function createBaseMsgWithdrawDelegationRewardsResponse() {
    return {};
}
exports.MsgWithdrawDelegationRewardsResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
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
        const obj = createBaseMsgWithdrawDelegationRewardsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
        return message;
    },
};
function createBaseMsgDelegateBondedTokens() {
    return {
        delegator: "",
        lockID: BigInt(0),
    };
}
exports.MsgDelegateBondedTokens = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.lockID !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateBondedTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.lockID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgDelegateBondedTokens();
        if ((0, helpers_1.isSet)(object.delegator))
            obj.delegator = String(object.delegator);
        if ((0, helpers_1.isSet)(object.lockID))
            obj.lockID = BigInt(object.lockID.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegateBondedTokens();
        message.delegator = object.delegator ?? "";
        if (object.lockID !== undefined && object.lockID !== null) {
            message.lockID = BigInt(object.lockID.toString());
        }
        return message;
    },
};
function createBaseMsgDelegateBondedTokensResponse() {
    return {};
}
exports.MsgDelegateBondedTokensResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateBondedTokensResponse();
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
        const obj = createBaseMsgDelegateBondedTokensResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDelegateBondedTokensResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SetValidatorSetPreference = this.SetValidatorSetPreference.bind(this);
        this.DelegateToValidatorSet = this.DelegateToValidatorSet.bind(this);
        this.UndelegateFromValidatorSet = this.UndelegateFromValidatorSet.bind(this);
        this.UndelegateFromRebalancedValidatorSet = this.UndelegateFromRebalancedValidatorSet.bind(this);
        this.RedelegateValidatorSet = this.RedelegateValidatorSet.bind(this);
        this.WithdrawDelegationRewards = this.WithdrawDelegationRewards.bind(this);
        this.DelegateBondedTokens = this.DelegateBondedTokens.bind(this);
    }
    SetValidatorSetPreference(request) {
        const data = exports.MsgSetValidatorSetPreference.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "SetValidatorSetPreference", data);
        return promise.then((data) => exports.MsgSetValidatorSetPreferenceResponse.decode(new binary_1.BinaryReader(data)));
    }
    DelegateToValidatorSet(request) {
        const data = exports.MsgDelegateToValidatorSet.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateToValidatorSet", data);
        return promise.then((data) => exports.MsgDelegateToValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    UndelegateFromValidatorSet(request) {
        const data = exports.MsgUndelegateFromValidatorSet.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "UndelegateFromValidatorSet", data);
        return promise.then((data) => exports.MsgUndelegateFromValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    UndelegateFromRebalancedValidatorSet(request) {
        const data = exports.MsgUndelegateFromRebalancedValidatorSet.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "UndelegateFromRebalancedValidatorSet", data);
        return promise.then((data) => exports.MsgUndelegateFromRebalancedValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    RedelegateValidatorSet(request) {
        const data = exports.MsgRedelegateValidatorSet.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "RedelegateValidatorSet", data);
        return promise.then((data) => exports.MsgRedelegateValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    WithdrawDelegationRewards(request) {
        const data = exports.MsgWithdrawDelegationRewards.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "WithdrawDelegationRewards", data);
        return promise.then((data) => exports.MsgWithdrawDelegationRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    DelegateBondedTokens(request) {
        const data = exports.MsgDelegateBondedTokens.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateBondedTokens", data);
        return promise.then((data) => exports.MsgDelegateBondedTokensResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map