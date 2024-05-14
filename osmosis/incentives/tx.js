"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.MsgAddToGaugeResponse = exports.MsgAddToGauge = exports.MsgCreateGaugeResponse = exports.MsgCreateGauge = exports.protobufPackage = void 0;
/* eslint-disable */
const lock_1 = require("../lockup/lock");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.incentives";
function createBaseMsgCreateGauge() {
    return {
        isPerpetual: false,
        owner: "",
        distributeTo: lock_1.QueryCondition.fromPartial({}),
        coins: [],
        startTime: timestamp_1.Timestamp.fromPartial({}),
        numEpochsPaidOver: BigInt(0),
        poolId: BigInt(0),
    };
}
exports.MsgCreateGauge = {
    typeUrl: "/osmosis.incentives.MsgCreateGauge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.isPerpetual === true) {
            writer.uint32(8).bool(message.isPerpetual);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.distributeTo !== undefined) {
            lock_1.QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(42).fork()).ldelim();
        }
        if (message.numEpochsPaidOver !== BigInt(0)) {
            writer.uint32(48).uint64(message.numEpochsPaidOver);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(56).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isPerpetual = reader.bool();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.distributeTo = lock_1.QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.numEpochsPaidOver = reader.uint64();
                    break;
                case 7:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateGauge();
        if ((0, helpers_1.isSet)(object.isPerpetual))
            obj.isPerpetual = Boolean(object.isPerpetual);
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.distributeTo))
            obj.distributeTo = lock_1.QueryCondition.fromJSON(object.distributeTo);
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if ((0, helpers_1.isSet)(object.numEpochsPaidOver))
            obj.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
        message.owner !== undefined && (obj.owner = message.owner);
        message.distributeTo !== undefined &&
            (obj.distributeTo = message.distributeTo ? lock_1.QueryCondition.toJSON(message.distributeTo) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        message.numEpochsPaidOver !== undefined &&
            (obj.numEpochsPaidOver = (message.numEpochsPaidOver || BigInt(0)).toString());
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGauge();
        message.isPerpetual = object.isPerpetual ?? false;
        message.owner = object.owner ?? "";
        if (object.distributeTo !== undefined && object.distributeTo !== null) {
            message.distributeTo = lock_1.QueryCondition.fromPartial(object.distributeTo);
        }
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        if (object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null) {
            message.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseMsgCreateGaugeResponse() {
    return {};
}
exports.MsgCreateGaugeResponse = {
    typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGaugeResponse();
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
        const obj = createBaseMsgCreateGaugeResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateGaugeResponse();
        return message;
    },
};
function createBaseMsgAddToGauge() {
    return {
        owner: "",
        gaugeId: BigInt(0),
        rewards: [],
    };
}
exports.MsgAddToGauge = {
    typeUrl: "/osmosis.incentives.MsgAddToGauge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        for (const v of message.rewards) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.gaugeId = reader.uint64();
                    break;
                case 3:
                    message.rewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddToGauge();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        if (Array.isArray(object?.rewards))
            obj.rewards = object.rewards.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToGauge();
        message.owner = object.owner ?? "";
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        message.rewards = object.rewards?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgAddToGaugeResponse() {
    return {};
}
exports.MsgAddToGaugeResponse = {
    typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGaugeResponse();
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
        const obj = createBaseMsgAddToGaugeResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgAddToGaugeResponse();
        return message;
    },
};
function createBaseMsgCreateGroup() {
    return {
        coins: [],
        numEpochsPaidOver: BigInt(0),
        owner: "",
        poolIds: [],
    };
}
exports.MsgCreateGroup = {
    typeUrl: "/osmosis.incentives.MsgCreateGroup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numEpochsPaidOver !== BigInt(0)) {
            writer.uint32(16).uint64(message.numEpochsPaidOver);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        writer.uint32(34).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numEpochsPaidOver = reader.uint64();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
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
        const obj = createBaseMsgCreateGroup();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.numEpochsPaidOver))
            obj.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if (Array.isArray(object?.poolIds))
            obj.poolIds = object.poolIds.map((e) => BigInt(e.toString()));
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
        message.numEpochsPaidOver !== undefined &&
            (obj.numEpochsPaidOver = (message.numEpochsPaidOver || BigInt(0)).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.poolIds) {
            obj.poolIds = message.poolIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.poolIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroup();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null) {
            message.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
        }
        message.owner = object.owner ?? "";
        message.poolIds = object.poolIds?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: BigInt(0),
    };
}
exports.MsgCreateGroupResponse = {
    typeUrl: "/osmosis.incentives.MsgCreateGroupResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateGroupResponse();
        if ((0, helpers_1.isSet)(object.groupId))
            obj.groupId = BigInt(object.groupId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        if (object.groupId !== undefined && object.groupId !== null) {
            message.groupId = BigInt(object.groupId.toString());
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateGauge = this.CreateGauge.bind(this);
        this.AddToGauge = this.AddToGauge.bind(this);
        this.CreateGroup = this.CreateGroup.bind(this);
    }
    CreateGauge(request) {
        const data = exports.MsgCreateGauge.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
        return promise.then((data) => exports.MsgCreateGaugeResponse.decode(new binary_1.BinaryReader(data)));
    }
    AddToGauge(request) {
        const data = exports.MsgAddToGauge.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
        return promise.then((data) => exports.MsgAddToGaugeResponse.decode(new binary_1.BinaryReader(data)));
    }
    CreateGroup(request) {
        const data = exports.MsgCreateGroup.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGroup", data);
        return promise.then((data) => exports.MsgCreateGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map