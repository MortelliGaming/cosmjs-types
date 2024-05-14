"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = exports.Options = exports.AccumulatorContent = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.accum.v1beta1";
function createBaseAccumulatorContent() {
    return {
        accumValue: [],
        totalShares: "",
    };
}
exports.AccumulatorContent = {
    typeUrl: "/osmosis.accum.v1beta1.AccumulatorContent",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accumValue) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalShares !== "") {
            writer.uint32(18).string(message.totalShares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccumulatorContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accumValue.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalShares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccumulatorContent();
        if (Array.isArray(object?.accumValue))
            obj.accumValue = object.accumValue.map((e) => coin_1.DecCoin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.totalShares))
            obj.totalShares = String(object.totalShares);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.accumValue) {
            obj.accumValue = message.accumValue.map((e) => (e ? coin_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.accumValue = [];
        }
        message.totalShares !== undefined && (obj.totalShares = message.totalShares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccumulatorContent();
        message.accumValue = object.accumValue?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.totalShares = object.totalShares ?? "";
        return message;
    },
};
function createBaseOptions() {
    return {};
}
exports.Options = {
    typeUrl: "/osmosis.accum.v1beta1.Options",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOptions();
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
        const obj = createBaseOptions();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseOptions();
        return message;
    },
};
function createBaseRecord() {
    return {
        numShares: "",
        accumValuePerShare: [],
        unclaimedRewardsTotal: [],
        options: undefined,
    };
}
exports.Record = {
    typeUrl: "/osmosis.accum.v1beta1.Record",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numShares !== "") {
            writer.uint32(10).string(message.numShares);
        }
        for (const v of message.accumValuePerShare) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.unclaimedRewardsTotal) {
            coin_1.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.Options.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numShares = reader.string();
                    break;
                case 2:
                    message.accumValuePerShare.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.unclaimedRewardsTotal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.options = exports.Options.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRecord();
        if ((0, helpers_1.isSet)(object.numShares))
            obj.numShares = String(object.numShares);
        if (Array.isArray(object?.accumValuePerShare))
            obj.accumValuePerShare = object.accumValuePerShare.map((e) => coin_1.DecCoin.fromJSON(e));
        if (Array.isArray(object?.unclaimedRewardsTotal))
            obj.unclaimedRewardsTotal = object.unclaimedRewardsTotal.map((e) => coin_1.DecCoin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.Options.fromJSON(object.options);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.numShares !== undefined && (obj.numShares = message.numShares);
        if (message.accumValuePerShare) {
            obj.accumValuePerShare = message.accumValuePerShare.map((e) => (e ? coin_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.accumValuePerShare = [];
        }
        if (message.unclaimedRewardsTotal) {
            obj.unclaimedRewardsTotal = message.unclaimedRewardsTotal.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.unclaimedRewardsTotal = [];
        }
        message.options !== undefined &&
            (obj.options = message.options ? exports.Options.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.numShares = object.numShares ?? "";
        message.accumValuePerShare = object.accumValuePerShare?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.unclaimedRewardsTotal = object.unclaimedRewardsTotal?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.Options.fromPartial(object.options);
        }
        return message;
    },
};
//# sourceMappingURL=accum.js.map