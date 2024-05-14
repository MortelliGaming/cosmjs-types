"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.incentives";
function createBaseParams() {
    return {
        distrEpochIdentifier: "",
        groupCreationFee: [],
        unrestrictedCreatorWhitelist: [],
        internalUptime: duration_1.Duration.fromPartial({}),
        minValueForDistribution: coin_1.Coin.fromPartial({}),
    };
}
exports.Params = {
    typeUrl: "/osmosis.incentives.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distrEpochIdentifier !== "") {
            writer.uint32(10).string(message.distrEpochIdentifier);
        }
        for (const v of message.groupCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.unrestrictedCreatorWhitelist) {
            writer.uint32(26).string(v);
        }
        if (message.internalUptime !== undefined) {
            duration_1.Duration.encode(message.internalUptime, writer.uint32(34).fork()).ldelim();
        }
        if (message.minValueForDistribution !== undefined) {
            coin_1.Coin.encode(message.minValueForDistribution, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distrEpochIdentifier = reader.string();
                    break;
                case 2:
                    message.groupCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.unrestrictedCreatorWhitelist.push(reader.string());
                    break;
                case 4:
                    message.internalUptime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.minValueForDistribution = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if ((0, helpers_1.isSet)(object.distrEpochIdentifier))
            obj.distrEpochIdentifier = String(object.distrEpochIdentifier);
        if (Array.isArray(object?.groupCreationFee))
            obj.groupCreationFee = object.groupCreationFee.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.unrestrictedCreatorWhitelist))
            obj.unrestrictedCreatorWhitelist = object.unrestrictedCreatorWhitelist.map((e) => String(e));
        if ((0, helpers_1.isSet)(object.internalUptime))
            obj.internalUptime = duration_1.Duration.fromJSON(object.internalUptime);
        if ((0, helpers_1.isSet)(object.minValueForDistribution))
            obj.minValueForDistribution = coin_1.Coin.fromJSON(object.minValueForDistribution);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.distrEpochIdentifier !== undefined && (obj.distrEpochIdentifier = message.distrEpochIdentifier);
        if (message.groupCreationFee) {
            obj.groupCreationFee = message.groupCreationFee.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.groupCreationFee = [];
        }
        if (message.unrestrictedCreatorWhitelist) {
            obj.unrestrictedCreatorWhitelist = message.unrestrictedCreatorWhitelist.map((e) => e);
        }
        else {
            obj.unrestrictedCreatorWhitelist = [];
        }
        message.internalUptime !== undefined &&
            (obj.internalUptime = message.internalUptime ? duration_1.Duration.toJSON(message.internalUptime) : undefined);
        message.minValueForDistribution !== undefined &&
            (obj.minValueForDistribution = message.minValueForDistribution
                ? coin_1.Coin.toJSON(message.minValueForDistribution)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
        message.groupCreationFee = object.groupCreationFee?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.unrestrictedCreatorWhitelist = object.unrestrictedCreatorWhitelist?.map((e) => e) || [];
        if (object.internalUptime !== undefined && object.internalUptime !== null) {
            message.internalUptime = duration_1.Duration.fromPartial(object.internalUptime);
        }
        if (object.minValueForDistribution !== undefined && object.minValueForDistribution !== null) {
            message.minValueForDistribution = coin_1.Coin.fromPartial(object.minValueForDistribution);
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map