"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UptimeTracker = exports.UptimeTrackers = exports.TickInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.v1beta1";
function createBaseTickInfo() {
    return {
        liquidityGross: "",
        liquidityNet: "",
        spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
        uptimeTrackers: exports.UptimeTrackers.fromPartial({}),
    };
}
exports.TickInfo = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.liquidityGross !== "") {
            writer.uint32(10).string(message.liquidityGross);
        }
        if (message.liquidityNet !== "") {
            writer.uint32(18).string(message.liquidityNet);
        }
        for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            coin_1.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.uptimeTrackers !== undefined) {
            exports.UptimeTrackers.encode(message.uptimeTrackers, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityGross = reader.string();
                    break;
                case 2:
                    message.liquidityNet = reader.string();
                    break;
                case 3:
                    message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.uptimeTrackers = exports.UptimeTrackers.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTickInfo();
        if ((0, helpers_1.isSet)(object.liquidityGross))
            obj.liquidityGross = String(object.liquidityGross);
        if ((0, helpers_1.isSet)(object.liquidityNet))
            obj.liquidityNet = String(object.liquidityNet);
        if (Array.isArray(object?.spreadRewardGrowthOppositeDirectionOfLastTraversal))
            obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
                object.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e) => coin_1.DecCoin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.uptimeTrackers))
            obj.uptimeTrackers = exports.UptimeTrackers.fromJSON(object.uptimeTrackers);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.liquidityGross !== undefined && (obj.liquidityGross = message.liquidityGross);
        message.liquidityNet !== undefined && (obj.liquidityNet = message.liquidityNet);
        if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            obj.spreadRewardGrowthOppositeDirectionOfLastTraversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.spreadRewardGrowthOppositeDirectionOfLastTraversal = [];
        }
        message.uptimeTrackers !== undefined &&
            (obj.uptimeTrackers = message.uptimeTrackers
                ? exports.UptimeTrackers.toJSON(message.uptimeTrackers)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTickInfo();
        message.liquidityGross = object.liquidityGross ?? "";
        message.liquidityNet = object.liquidityNet ?? "";
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
            object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        if (object.uptimeTrackers !== undefined && object.uptimeTrackers !== null) {
            message.uptimeTrackers = exports.UptimeTrackers.fromPartial(object.uptimeTrackers);
        }
        return message;
    },
};
function createBaseUptimeTrackers() {
    return {
        list: [],
    };
}
exports.UptimeTrackers = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTrackers",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.list) {
            exports.UptimeTracker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUptimeTrackers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(exports.UptimeTracker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUptimeTrackers();
        if (Array.isArray(object?.list))
            obj.list = object.list.map((e) => exports.UptimeTracker.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.list) {
            obj.list = message.list.map((e) => (e ? exports.UptimeTracker.toJSON(e) : undefined));
        }
        else {
            obj.list = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUptimeTrackers();
        message.list = object.list?.map((e) => exports.UptimeTracker.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUptimeTracker() {
    return {
        uptimeGrowthOutside: [],
    };
}
exports.UptimeTracker = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.uptimeGrowthOutside) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUptimeTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uptimeGrowthOutside.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUptimeTracker();
        if (Array.isArray(object?.uptimeGrowthOutside))
            obj.uptimeGrowthOutside = object.uptimeGrowthOutside.map((e) => coin_1.DecCoin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.uptimeGrowthOutside) {
            obj.uptimeGrowthOutside = message.uptimeGrowthOutside.map((e) => (e ? coin_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.uptimeGrowthOutside = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUptimeTracker();
        message.uptimeGrowthOutside = object.uptimeGrowthOutside?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=tick_info.js.map