"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomRiskFactor = exports.ConcentratedPoolUserPositionRecord = exports.UnpoolWhitelistedPools = exports.LockIdIntermediaryAccountConnection = exports.SuperfluidDelegationRecord = exports.OsmoEquivalentMultiplierRecord = exports.SuperfluidIntermediaryAccount = exports.SuperfluidAsset = exports.superfluidAssetTypeToJSON = exports.superfluidAssetTypeFromJSON = exports.SuperfluidAssetType = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("../lockup/lock");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.superfluid";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token, lp share of a pool, or concentrated share of a pool
 */
var SuperfluidAssetType;
(function (SuperfluidAssetType) {
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeNative"] = 0] = "SuperfluidAssetTypeNative";
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeLPShare"] = 1] = "SuperfluidAssetTypeLPShare";
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeConcentratedShare"] = 2] = "SuperfluidAssetTypeConcentratedShare";
    SuperfluidAssetType[SuperfluidAssetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SuperfluidAssetType || (exports.SuperfluidAssetType = SuperfluidAssetType = {}));
function superfluidAssetTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SuperfluidAssetTypeNative":
            return SuperfluidAssetType.SuperfluidAssetTypeNative;
        case 1:
        case "SuperfluidAssetTypeLPShare":
            return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
        case 2:
        case "SuperfluidAssetTypeConcentratedShare":
            return SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SuperfluidAssetType.UNRECOGNIZED;
    }
}
exports.superfluidAssetTypeFromJSON = superfluidAssetTypeFromJSON;
function superfluidAssetTypeToJSON(object) {
    switch (object) {
        case SuperfluidAssetType.SuperfluidAssetTypeNative:
            return "SuperfluidAssetTypeNative";
        case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
            return "SuperfluidAssetTypeLPShare";
        case SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare:
            return "SuperfluidAssetTypeConcentratedShare";
        case SuperfluidAssetType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.superfluidAssetTypeToJSON = superfluidAssetTypeToJSON;
function createBaseSuperfluidAsset() {
    return {
        denom: "",
        assetType: 0,
        pricePoolId: BigInt(0),
    };
}
exports.SuperfluidAsset = {
    typeUrl: "/osmosis.superfluid.SuperfluidAsset",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.assetType !== 0) {
            writer.uint32(16).int32(message.assetType);
        }
        if (message.pricePoolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.pricePoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.assetType = reader.int32();
                    break;
                case 3:
                    message.pricePoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidAsset();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.assetType))
            obj.assetType = superfluidAssetTypeFromJSON(object.assetType);
        if ((0, helpers_1.isSet)(object.pricePoolId))
            obj.pricePoolId = BigInt(object.pricePoolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
        message.pricePoolId !== undefined && (obj.pricePoolId = (message.pricePoolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidAsset();
        message.denom = object.denom ?? "";
        message.assetType = object.assetType ?? 0;
        if (object.pricePoolId !== undefined && object.pricePoolId !== null) {
            message.pricePoolId = BigInt(object.pricePoolId.toString());
        }
        return message;
    },
};
function createBaseSuperfluidIntermediaryAccount() {
    return {
        denom: "",
        valAddr: "",
        gaugeId: BigInt(0),
    };
}
exports.SuperfluidIntermediaryAccount = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.valAddr !== "") {
            writer.uint32(18).string(message.valAddr);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.valAddr = reader.string();
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidIntermediaryAccount();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.valAddr))
            obj.valAddr = String(object.valAddr);
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        message.denom = object.denom ?? "";
        message.valAddr = object.valAddr ?? "";
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        return message;
    },
};
function createBaseOsmoEquivalentMultiplierRecord() {
    return {
        epochNumber: BigInt(0),
        denom: "",
        multiplier: "",
    };
}
exports.OsmoEquivalentMultiplierRecord = {
    typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.epochNumber !== BigInt(0)) {
            writer.uint32(8).int64(message.epochNumber);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.multiplier !== "") {
            writer.uint32(26).string(message.multiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOsmoEquivalentMultiplierRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochNumber = reader.int64();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.multiplier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseOsmoEquivalentMultiplierRecord();
        if ((0, helpers_1.isSet)(object.epochNumber))
            obj.epochNumber = BigInt(object.epochNumber.toString());
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.multiplier))
            obj.multiplier = String(object.multiplier);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
        message.denom !== undefined && (obj.denom = message.denom);
        message.multiplier !== undefined && (obj.multiplier = message.multiplier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        if (object.epochNumber !== undefined && object.epochNumber !== null) {
            message.epochNumber = BigInt(object.epochNumber.toString());
        }
        message.denom = object.denom ?? "";
        message.multiplier = object.multiplier ?? "";
        return message;
    },
};
function createBaseSuperfluidDelegationRecord() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        delegationAmount: coin_1.Coin.fromPartial({}),
        equivalentStakedAmount: undefined,
    };
}
exports.SuperfluidDelegationRecord = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.delegationAmount !== undefined) {
            coin_1.Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
        }
        if (message.equivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.delegationAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.equivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidDelegationRecord();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        if ((0, helpers_1.isSet)(object.validatorAddress))
            obj.validatorAddress = String(object.validatorAddress);
        if ((0, helpers_1.isSet)(object.delegationAmount))
            obj.delegationAmount = coin_1.Coin.fromJSON(object.delegationAmount);
        if ((0, helpers_1.isSet)(object.equivalentStakedAmount))
            obj.equivalentStakedAmount = coin_1.Coin.fromJSON(object.equivalentStakedAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.delegationAmount !== undefined &&
            (obj.delegationAmount = message.delegationAmount ? coin_1.Coin.toJSON(message.delegationAmount) : undefined);
        message.equivalentStakedAmount !== undefined &&
            (obj.equivalentStakedAmount = message.equivalentStakedAmount
                ? coin_1.Coin.toJSON(message.equivalentStakedAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationRecord();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        if (object.delegationAmount !== undefined && object.delegationAmount !== null) {
            message.delegationAmount = coin_1.Coin.fromPartial(object.delegationAmount);
        }
        if (object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null) {
            message.equivalentStakedAmount = coin_1.Coin.fromPartial(object.equivalentStakedAmount);
        }
        return message;
    },
};
function createBaseLockIdIntermediaryAccountConnection() {
    return {
        lockId: BigInt(0),
        intermediaryAccount: "",
    };
}
exports.LockIdIntermediaryAccountConnection = {
    typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        if (message.intermediaryAccount !== "") {
            writer.uint32(18).string(message.intermediaryAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockIdIntermediaryAccountConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                case 2:
                    message.intermediaryAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLockIdIntermediaryAccountConnection();
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        if ((0, helpers_1.isSet)(object.intermediaryAccount))
            obj.intermediaryAccount = String(object.intermediaryAccount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.intermediaryAccount !== undefined && (obj.intermediaryAccount = message.intermediaryAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        message.intermediaryAccount = object.intermediaryAccount ?? "";
        return message;
    },
};
function createBaseUnpoolWhitelistedPools() {
    return {
        ids: [],
    };
}
exports.UnpoolWhitelistedPools = {
    typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpoolWhitelistedPools();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
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
        const obj = createBaseUnpoolWhitelistedPools();
        if (Array.isArray(object?.ids))
            obj.ids = object.ids.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseConcentratedPoolUserPositionRecord() {
    return {
        validatorAddress: "",
        positionId: BigInt(0),
        lockId: BigInt(0),
        syntheticLock: lock_1.SyntheticLock.fromPartial({}),
        delegationAmount: coin_1.Coin.fromPartial({}),
        equivalentStakedAmount: undefined,
    };
}
exports.ConcentratedPoolUserPositionRecord = {
    typeUrl: "/osmosis.superfluid.ConcentratedPoolUserPositionRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.positionId !== BigInt(0)) {
            writer.uint32(16).uint64(message.positionId);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(24).uint64(message.lockId);
        }
        if (message.syntheticLock !== undefined) {
            lock_1.SyntheticLock.encode(message.syntheticLock, writer.uint32(34).fork()).ldelim();
        }
        if (message.delegationAmount !== undefined) {
            coin_1.Coin.encode(message.delegationAmount, writer.uint32(42).fork()).ldelim();
        }
        if (message.equivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.equivalentStakedAmount, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConcentratedPoolUserPositionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.positionId = reader.uint64();
                    break;
                case 3:
                    message.lockId = reader.uint64();
                    break;
                case 4:
                    message.syntheticLock = lock_1.SyntheticLock.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delegationAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.equivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConcentratedPoolUserPositionRecord();
        if ((0, helpers_1.isSet)(object.validatorAddress))
            obj.validatorAddress = String(object.validatorAddress);
        if ((0, helpers_1.isSet)(object.positionId))
            obj.positionId = BigInt(object.positionId.toString());
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        if ((0, helpers_1.isSet)(object.syntheticLock))
            obj.syntheticLock = lock_1.SyntheticLock.fromJSON(object.syntheticLock);
        if ((0, helpers_1.isSet)(object.delegationAmount))
            obj.delegationAmount = coin_1.Coin.fromJSON(object.delegationAmount);
        if ((0, helpers_1.isSet)(object.equivalentStakedAmount))
            obj.equivalentStakedAmount = coin_1.Coin.fromJSON(object.equivalentStakedAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.syntheticLock !== undefined &&
            (obj.syntheticLock = message.syntheticLock ? lock_1.SyntheticLock.toJSON(message.syntheticLock) : undefined);
        message.delegationAmount !== undefined &&
            (obj.delegationAmount = message.delegationAmount ? coin_1.Coin.toJSON(message.delegationAmount) : undefined);
        message.equivalentStakedAmount !== undefined &&
            (obj.equivalentStakedAmount = message.equivalentStakedAmount
                ? coin_1.Coin.toJSON(message.equivalentStakedAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConcentratedPoolUserPositionRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        if (object.positionId !== undefined && object.positionId !== null) {
            message.positionId = BigInt(object.positionId.toString());
        }
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        if (object.syntheticLock !== undefined && object.syntheticLock !== null) {
            message.syntheticLock = lock_1.SyntheticLock.fromPartial(object.syntheticLock);
        }
        if (object.delegationAmount !== undefined && object.delegationAmount !== null) {
            message.delegationAmount = coin_1.Coin.fromPartial(object.delegationAmount);
        }
        if (object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null) {
            message.equivalentStakedAmount = coin_1.Coin.fromPartial(object.equivalentStakedAmount);
        }
        return message;
    },
};
function createBaseDenomRiskFactor() {
    return {
        denom: "",
        riskFactor: "",
    };
}
exports.DenomRiskFactor = {
    typeUrl: "/osmosis.superfluid.DenomRiskFactor",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.riskFactor !== "") {
            writer.uint32(18).string(message.riskFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomRiskFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.riskFactor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDenomRiskFactor();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.riskFactor))
            obj.riskFactor = String(object.riskFactor);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.riskFactor !== undefined && (obj.riskFactor = message.riskFactor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomRiskFactor();
        message.denom = object.denom ?? "";
        message.riskFactor = object.riskFactor ?? "";
        return message;
    },
};
//# sourceMappingURL=superfluid.js.map