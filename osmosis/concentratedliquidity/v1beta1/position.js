"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionWithPeriodLock = exports.FullPositionBreakdown = exports.Position = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const lock_1 = require("../../lockup/lock");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.concentratedliquidity.v1beta1";
function createBasePosition() {
    return {
        positionId: BigInt(0),
        address: "",
        poolId: BigInt(0),
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
        joinTime: timestamp_1.Timestamp.fromPartial({}),
        liquidity: "",
    };
}
exports.Position = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.lowerTick !== BigInt(0)) {
            writer.uint32(32).int64(message.lowerTick);
        }
        if (message.upperTick !== BigInt(0)) {
            writer.uint32(40).int64(message.upperTick);
        }
        if (message.joinTime !== undefined) {
            timestamp_1.Timestamp.encode(message.joinTime, writer.uint32(50).fork()).ldelim();
        }
        if (message.liquidity !== "") {
            writer.uint32(58).string(message.liquidity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.lowerTick = reader.int64();
                    break;
                case 5:
                    message.upperTick = reader.int64();
                    break;
                case 6:
                    message.joinTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.liquidity = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePosition();
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.lowerTick))
            obj.lowerTick = BigInt(object.lowerTick.toString());
        if ((0, helpers_1.isSet)(object.upperTick))
            obj.upperTick = BigInt(object.upperTick.toString());
        if ((0, helpers_1.isSet)(object.joinTime))
            obj.joinTime = (0, helpers_1.fromJsonTimestamp)(object.joinTime);
        if ((0, helpers_1.isSet)(object.liquidity))
            obj.liquidity = String(object.liquidity);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
        message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
        message.joinTime !== undefined && (obj.joinTime = (0, helpers_1.fromTimestamp)(message.joinTime).toISOString());
        message.liquidity !== undefined && (obj.liquidity = message.liquidity);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePosition();
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        message.address = object.address ?? "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.lowerTick !== undefined && object.lowerTick !== null) {
            message.lowerTick = BigInt(object.lowerTick.toString());
        }
        if (object.upperTick !== undefined && object.upperTick !== null) {
            message.upperTick = BigInt(object.upperTick.toString());
        }
        if (object.joinTime !== undefined && object.joinTime !== null) {
            message.joinTime = timestamp_1.Timestamp.fromPartial(object.joinTime);
        }
        message.liquidity = object.liquidity ?? "";
        return message;
    },
};
function createBaseFullPositionBreakdown() {
    return {
        position: exports.Position.fromPartial({}),
        asset0: coin_1.Coin.fromPartial({}),
        asset1: coin_1.Coin.fromPartial({}),
        claimableSpreadRewards: [],
        claimableIncentives: [],
        forfeitedIncentives: [],
    };
}
exports.FullPositionBreakdown = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            exports.Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.asset0 !== undefined) {
            coin_1.Coin.encode(message.asset0, writer.uint32(18).fork()).ldelim();
        }
        if (message.asset1 !== undefined) {
            coin_1.Coin.encode(message.asset1, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.claimableSpreadRewards) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.claimableIncentives) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.forfeitedIncentives) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullPositionBreakdown();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = exports.Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.asset0 = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.asset1 = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimableSpreadRewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.claimableIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.forfeitedIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFullPositionBreakdown();
        if ((0, helpers_1.isSet)(object.position))
            obj.position = exports.Position.fromJSON(object.position);
        if ((0, helpers_1.isSet)(object.asset0))
            obj.asset0 = coin_1.Coin.fromJSON(object.asset0);
        if ((0, helpers_1.isSet)(object.asset1))
            obj.asset1 = coin_1.Coin.fromJSON(object.asset1);
        if (Array.isArray(object?.claimableSpreadRewards))
            obj.claimableSpreadRewards = object.claimableSpreadRewards.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.claimableIncentives))
            obj.claimableIncentives = object.claimableIncentives.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.forfeitedIncentives))
            obj.forfeitedIncentives = object.forfeitedIncentives.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined &&
            (obj.position = message.position ? exports.Position.toJSON(message.position) : undefined);
        message.asset0 !== undefined && (obj.asset0 = message.asset0 ? coin_1.Coin.toJSON(message.asset0) : undefined);
        message.asset1 !== undefined && (obj.asset1 = message.asset1 ? coin_1.Coin.toJSON(message.asset1) : undefined);
        if (message.claimableSpreadRewards) {
            obj.claimableSpreadRewards = message.claimableSpreadRewards.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.claimableSpreadRewards = [];
        }
        if (message.claimableIncentives) {
            obj.claimableIncentives = message.claimableIncentives.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.claimableIncentives = [];
        }
        if (message.forfeitedIncentives) {
            obj.forfeitedIncentives = message.forfeitedIncentives.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.forfeitedIncentives = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFullPositionBreakdown();
        if (object.position !== undefined && object.position !== null) {
            message.position = exports.Position.fromPartial(object.position);
        }
        if (object.asset0 !== undefined && object.asset0 !== null) {
            message.asset0 = coin_1.Coin.fromPartial(object.asset0);
        }
        if (object.asset1 !== undefined && object.asset1 !== null) {
            message.asset1 = coin_1.Coin.fromPartial(object.asset1);
        }
        message.claimableSpreadRewards = object.claimableSpreadRewards?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.claimableIncentives = object.claimableIncentives?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.forfeitedIncentives = object.forfeitedIncentives?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBasePositionWithPeriodLock() {
    return {
        position: exports.Position.fromPartial({}),
        locks: lock_1.PeriodLock.fromPartial({}),
    };
}
exports.PositionWithPeriodLock = {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            exports.Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.locks !== undefined) {
            lock_1.PeriodLock.encode(message.locks, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionWithPeriodLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = exports.Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.locks = lock_1.PeriodLock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePositionWithPeriodLock();
        if ((0, helpers_1.isSet)(object.position))
            obj.position = exports.Position.fromJSON(object.position);
        if ((0, helpers_1.isSet)(object.locks))
            obj.locks = lock_1.PeriodLock.fromJSON(object.locks);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined &&
            (obj.position = message.position ? exports.Position.toJSON(message.position) : undefined);
        message.locks !== undefined && (obj.locks = message.locks ? lock_1.PeriodLock.toJSON(message.locks) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePositionWithPeriodLock();
        if (object.position !== undefined && object.position !== null) {
            message.position = exports.Position.fromPartial(object.position);
        }
        if (object.locks !== undefined && object.locks !== null) {
            message.locks = lock_1.PeriodLock.fromPartial(object.locks);
        }
        return message;
    },
};
//# sourceMappingURL=position.js.map