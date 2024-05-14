"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolVolume = exports.TakerFeesTracker = exports.TakerFeeDistributionPercentage = exports.TakerFeeParams = exports.GenesisState = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const module_route_1 = require("./module_route");
const tx_1 = require("./tx");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolmanager.v1beta1";
function createBaseParams() {
    return {
        poolCreationFee: [],
        takerFeeParams: exports.TakerFeeParams.fromPartial({}),
        authorizedQuoteDenoms: [],
    };
}
exports.Params = {
    typeUrl: "/osmosis.poolmanager.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.takerFeeParams !== undefined) {
            exports.TakerFeeParams.encode(message.takerFeeParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.authorizedQuoteDenoms) {
            writer.uint32(26).string(v);
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
                    message.poolCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.takerFeeParams = exports.TakerFeeParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.authorizedQuoteDenoms.push(reader.string());
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
        if (Array.isArray(object?.poolCreationFee))
            obj.poolCreationFee = object.poolCreationFee.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.takerFeeParams))
            obj.takerFeeParams = exports.TakerFeeParams.fromJSON(object.takerFeeParams);
        if (Array.isArray(object?.authorizedQuoteDenoms))
            obj.authorizedQuoteDenoms = object.authorizedQuoteDenoms.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolCreationFee) {
            obj.poolCreationFee = message.poolCreationFee.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.poolCreationFee = [];
        }
        message.takerFeeParams !== undefined &&
            (obj.takerFeeParams = message.takerFeeParams
                ? exports.TakerFeeParams.toJSON(message.takerFeeParams)
                : undefined);
        if (message.authorizedQuoteDenoms) {
            obj.authorizedQuoteDenoms = message.authorizedQuoteDenoms.map((e) => e);
        }
        else {
            obj.authorizedQuoteDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.poolCreationFee = object.poolCreationFee?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.takerFeeParams !== undefined && object.takerFeeParams !== null) {
            message.takerFeeParams = exports.TakerFeeParams.fromPartial(object.takerFeeParams);
        }
        message.authorizedQuoteDenoms = object.authorizedQuoteDenoms?.map((e) => e) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return {
        nextPoolId: BigInt(0),
        params: exports.Params.fromPartial({}),
        poolRoutes: [],
        takerFeesTracker: undefined,
        poolVolumes: [],
        denomPairTakerFeeStore: [],
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.poolmanager.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nextPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.nextPoolId);
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.poolRoutes) {
            module_route_1.ModuleRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.takerFeesTracker !== undefined) {
            exports.TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.poolVolumes) {
            exports.PoolVolume.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.denomPairTakerFeeStore) {
            tx_1.DenomPairTakerFee.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextPoolId = reader.uint64();
                    break;
                case 2:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolRoutes.push(module_route_1.ModuleRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.takerFeesTracker = exports.TakerFeesTracker.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.poolVolumes.push(exports.PoolVolume.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.denomPairTakerFeeStore.push(tx_1.DenomPairTakerFee.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if ((0, helpers_1.isSet)(object.nextPoolId))
            obj.nextPoolId = BigInt(object.nextPoolId.toString());
        if ((0, helpers_1.isSet)(object.params))
            obj.params = exports.Params.fromJSON(object.params);
        if (Array.isArray(object?.poolRoutes))
            obj.poolRoutes = object.poolRoutes.map((e) => module_route_1.ModuleRoute.fromJSON(e));
        if ((0, helpers_1.isSet)(object.takerFeesTracker))
            obj.takerFeesTracker = exports.TakerFeesTracker.fromJSON(object.takerFeesTracker);
        if (Array.isArray(object?.poolVolumes))
            obj.poolVolumes = object.poolVolumes.map((e) => exports.PoolVolume.fromJSON(e));
        if (Array.isArray(object?.denomPairTakerFeeStore))
            obj.denomPairTakerFeeStore = object.denomPairTakerFeeStore.map((e) => tx_1.DenomPairTakerFee.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nextPoolId !== undefined && (obj.nextPoolId = (message.nextPoolId || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        if (message.poolRoutes) {
            obj.poolRoutes = message.poolRoutes.map((e) => (e ? module_route_1.ModuleRoute.toJSON(e) : undefined));
        }
        else {
            obj.poolRoutes = [];
        }
        message.takerFeesTracker !== undefined &&
            (obj.takerFeesTracker = message.takerFeesTracker
                ? exports.TakerFeesTracker.toJSON(message.takerFeesTracker)
                : undefined);
        if (message.poolVolumes) {
            obj.poolVolumes = message.poolVolumes.map((e) => (e ? exports.PoolVolume.toJSON(e) : undefined));
        }
        else {
            obj.poolVolumes = [];
        }
        if (message.denomPairTakerFeeStore) {
            obj.denomPairTakerFeeStore = message.denomPairTakerFeeStore.map((e) => e ? tx_1.DenomPairTakerFee.toJSON(e) : undefined);
        }
        else {
            obj.denomPairTakerFeeStore = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.nextPoolId !== undefined && object.nextPoolId !== null) {
            message.nextPoolId = BigInt(object.nextPoolId.toString());
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        message.poolRoutes = object.poolRoutes?.map((e) => module_route_1.ModuleRoute.fromPartial(e)) || [];
        if (object.takerFeesTracker !== undefined && object.takerFeesTracker !== null) {
            message.takerFeesTracker = exports.TakerFeesTracker.fromPartial(object.takerFeesTracker);
        }
        message.poolVolumes = object.poolVolumes?.map((e) => exports.PoolVolume.fromPartial(e)) || [];
        message.denomPairTakerFeeStore =
            object.denomPairTakerFeeStore?.map((e) => tx_1.DenomPairTakerFee.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTakerFeeParams() {
    return {
        defaultTakerFee: "",
        osmoTakerFeeDistribution: exports.TakerFeeDistributionPercentage.fromPartial({}),
        nonOsmoTakerFeeDistribution: exports.TakerFeeDistributionPercentage.fromPartial({}),
        adminAddresses: [],
        communityPoolDenomToSwapNonWhitelistedAssetsTo: "",
        reducedFeeWhitelist: [],
    };
}
exports.TakerFeeParams = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.defaultTakerFee !== "") {
            writer.uint32(10).string(message.defaultTakerFee);
        }
        if (message.osmoTakerFeeDistribution !== undefined) {
            exports.TakerFeeDistributionPercentage.encode(message.osmoTakerFeeDistribution, writer.uint32(18).fork()).ldelim();
        }
        if (message.nonOsmoTakerFeeDistribution !== undefined) {
            exports.TakerFeeDistributionPercentage.encode(message.nonOsmoTakerFeeDistribution, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.adminAddresses) {
            writer.uint32(34).string(v);
        }
        if (message.communityPoolDenomToSwapNonWhitelistedAssetsTo !== "") {
            writer.uint32(42).string(message.communityPoolDenomToSwapNonWhitelistedAssetsTo);
        }
        for (const v of message.reducedFeeWhitelist) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultTakerFee = reader.string();
                    break;
                case 2:
                    message.osmoTakerFeeDistribution = exports.TakerFeeDistributionPercentage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nonOsmoTakerFeeDistribution = exports.TakerFeeDistributionPercentage.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.adminAddresses.push(reader.string());
                    break;
                case 5:
                    message.communityPoolDenomToSwapNonWhitelistedAssetsTo = reader.string();
                    break;
                case 6:
                    message.reducedFeeWhitelist.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTakerFeeParams();
        if ((0, helpers_1.isSet)(object.defaultTakerFee))
            obj.defaultTakerFee = String(object.defaultTakerFee);
        if ((0, helpers_1.isSet)(object.osmoTakerFeeDistribution))
            obj.osmoTakerFeeDistribution = exports.TakerFeeDistributionPercentage.fromJSON(object.osmoTakerFeeDistribution);
        if ((0, helpers_1.isSet)(object.nonOsmoTakerFeeDistribution))
            obj.nonOsmoTakerFeeDistribution = exports.TakerFeeDistributionPercentage.fromJSON(object.nonOsmoTakerFeeDistribution);
        if (Array.isArray(object?.adminAddresses))
            obj.adminAddresses = object.adminAddresses.map((e) => String(e));
        if ((0, helpers_1.isSet)(object.communityPoolDenomToSwapNonWhitelistedAssetsTo))
            obj.communityPoolDenomToSwapNonWhitelistedAssetsTo = String(object.communityPoolDenomToSwapNonWhitelistedAssetsTo);
        if (Array.isArray(object?.reducedFeeWhitelist))
            obj.reducedFeeWhitelist = object.reducedFeeWhitelist.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.defaultTakerFee !== undefined && (obj.defaultTakerFee = message.defaultTakerFee);
        message.osmoTakerFeeDistribution !== undefined &&
            (obj.osmoTakerFeeDistribution = message.osmoTakerFeeDistribution
                ? exports.TakerFeeDistributionPercentage.toJSON(message.osmoTakerFeeDistribution)
                : undefined);
        message.nonOsmoTakerFeeDistribution !== undefined &&
            (obj.nonOsmoTakerFeeDistribution = message.nonOsmoTakerFeeDistribution
                ? exports.TakerFeeDistributionPercentage.toJSON(message.nonOsmoTakerFeeDistribution)
                : undefined);
        if (message.adminAddresses) {
            obj.adminAddresses = message.adminAddresses.map((e) => e);
        }
        else {
            obj.adminAddresses = [];
        }
        message.communityPoolDenomToSwapNonWhitelistedAssetsTo !== undefined &&
            (obj.communityPoolDenomToSwapNonWhitelistedAssetsTo =
                message.communityPoolDenomToSwapNonWhitelistedAssetsTo);
        if (message.reducedFeeWhitelist) {
            obj.reducedFeeWhitelist = message.reducedFeeWhitelist.map((e) => e);
        }
        else {
            obj.reducedFeeWhitelist = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTakerFeeParams();
        message.defaultTakerFee = object.defaultTakerFee ?? "";
        if (object.osmoTakerFeeDistribution !== undefined && object.osmoTakerFeeDistribution !== null) {
            message.osmoTakerFeeDistribution = exports.TakerFeeDistributionPercentage.fromPartial(object.osmoTakerFeeDistribution);
        }
        if (object.nonOsmoTakerFeeDistribution !== undefined && object.nonOsmoTakerFeeDistribution !== null) {
            message.nonOsmoTakerFeeDistribution = exports.TakerFeeDistributionPercentage.fromPartial(object.nonOsmoTakerFeeDistribution);
        }
        message.adminAddresses = object.adminAddresses?.map((e) => e) || [];
        message.communityPoolDenomToSwapNonWhitelistedAssetsTo =
            object.communityPoolDenomToSwapNonWhitelistedAssetsTo ?? "";
        message.reducedFeeWhitelist = object.reducedFeeWhitelist?.map((e) => e) || [];
        return message;
    },
};
function createBaseTakerFeeDistributionPercentage() {
    return {
        stakingRewards: "",
        communityPool: "",
    };
}
exports.TakerFeeDistributionPercentage = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stakingRewards !== "") {
            writer.uint32(10).string(message.stakingRewards);
        }
        if (message.communityPool !== "") {
            writer.uint32(18).string(message.communityPool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeeDistributionPercentage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakingRewards = reader.string();
                    break;
                case 2:
                    message.communityPool = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTakerFeeDistributionPercentage();
        if ((0, helpers_1.isSet)(object.stakingRewards))
            obj.stakingRewards = String(object.stakingRewards);
        if ((0, helpers_1.isSet)(object.communityPool))
            obj.communityPool = String(object.communityPool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
        message.communityPool !== undefined && (obj.communityPool = message.communityPool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTakerFeeDistributionPercentage();
        message.stakingRewards = object.stakingRewards ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
};
function createBaseTakerFeesTracker() {
    return {
        takerFeesToStakers: [],
        takerFeesToCommunityPool: [],
        heightAccountingStartsFrom: BigInt(0),
    };
}
exports.TakerFeesTracker = {
    typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeesTracker",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.takerFeesToStakers) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.takerFeesToCommunityPool) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.heightAccountingStartsFrom !== BigInt(0)) {
            writer.uint32(24).int64(message.heightAccountingStartsFrom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeesTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFeesToStakers.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.takerFeesToCommunityPool.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.heightAccountingStartsFrom = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTakerFeesTracker();
        if (Array.isArray(object?.takerFeesToStakers))
            obj.takerFeesToStakers = object.takerFeesToStakers.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.takerFeesToCommunityPool))
            obj.takerFeesToCommunityPool = object.takerFeesToCommunityPool.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.heightAccountingStartsFrom))
            obj.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.takerFeesToStakers) {
            obj.takerFeesToStakers = message.takerFeesToStakers.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.takerFeesToStakers = [];
        }
        if (message.takerFeesToCommunityPool) {
            obj.takerFeesToCommunityPool = message.takerFeesToCommunityPool.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.takerFeesToCommunityPool = [];
        }
        message.heightAccountingStartsFrom !== undefined &&
            (obj.heightAccountingStartsFrom = (message.heightAccountingStartsFrom || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTakerFeesTracker();
        message.takerFeesToStakers = object.takerFeesToStakers?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.takerFeesToCommunityPool = object.takerFeesToCommunityPool?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.heightAccountingStartsFrom !== undefined && object.heightAccountingStartsFrom !== null) {
            message.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
        }
        return message;
    },
};
function createBasePoolVolume() {
    return {
        poolId: BigInt(0),
        poolVolume: [],
    };
}
exports.PoolVolume = {
    typeUrl: "/osmosis.poolmanager.v1beta1.PoolVolume",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.poolVolume) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolVolume.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolVolume();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if (Array.isArray(object?.poolVolume))
            obj.poolVolume = object.poolVolume.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        if (message.poolVolume) {
            obj.poolVolume = message.poolVolume.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.poolVolume = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolVolume();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.poolVolume = object.poolVolume?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map