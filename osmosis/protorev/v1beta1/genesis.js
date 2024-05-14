"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const protorev_1 = require("./protorev");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.protorev.v1beta1";
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        tokenPairArbRoutes: [],
        baseDenoms: [],
        daysSinceModuleGenesis: BigInt(0),
        developerFees: [],
        latestBlockHeight: BigInt(0),
        developerAddress: "",
        maxPoolPointsPerBlock: BigInt(0),
        maxPoolPointsPerTx: BigInt(0),
        pointCountForBlock: BigInt(0),
        profits: [],
        infoByPoolType: protorev_1.InfoByPoolType.fromPartial({}),
        cyclicArbTracker: undefined,
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokenPairArbRoutes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.baseDenoms) {
            protorev_1.BaseDenom.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.daysSinceModuleGenesis !== BigInt(0)) {
            writer.uint32(40).uint64(message.daysSinceModuleGenesis);
        }
        for (const v of message.developerFees) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestBlockHeight !== BigInt(0)) {
            writer.uint32(56).uint64(message.latestBlockHeight);
        }
        if (message.developerAddress !== "") {
            writer.uint32(66).string(message.developerAddress);
        }
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
        }
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(80).uint64(message.maxPoolPointsPerTx);
        }
        if (message.pointCountForBlock !== BigInt(0)) {
            writer.uint32(88).uint64(message.pointCountForBlock);
        }
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.infoByPoolType !== undefined) {
            protorev_1.InfoByPoolType.encode(message.infoByPoolType, writer.uint32(106).fork()).ldelim();
        }
        if (message.cyclicArbTracker !== undefined) {
            protorev_1.CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(114).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenPairArbRoutes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.baseDenoms.push(protorev_1.BaseDenom.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.daysSinceModuleGenesis = reader.uint64();
                    break;
                case 6:
                    message.developerFees.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.latestBlockHeight = reader.uint64();
                    break;
                case 8:
                    message.developerAddress = reader.string();
                    break;
                case 9:
                    message.maxPoolPointsPerBlock = reader.uint64();
                    break;
                case 10:
                    message.maxPoolPointsPerTx = reader.uint64();
                    break;
                case 11:
                    message.pointCountForBlock = reader.uint64();
                    break;
                case 12:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.infoByPoolType = protorev_1.InfoByPoolType.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.cyclicArbTracker = protorev_1.CyclicArbTracker.decode(reader, reader.uint32());
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
        if ((0, helpers_1.isSet)(object.params))
            obj.params = params_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.tokenPairArbRoutes))
            obj.tokenPairArbRoutes = object.tokenPairArbRoutes.map((e) => protorev_1.TokenPairArbRoutes.fromJSON(e));
        if (Array.isArray(object?.baseDenoms))
            obj.baseDenoms = object.baseDenoms.map((e) => protorev_1.BaseDenom.fromJSON(e));
        if ((0, helpers_1.isSet)(object.daysSinceModuleGenesis))
            obj.daysSinceModuleGenesis = BigInt(object.daysSinceModuleGenesis.toString());
        if (Array.isArray(object?.developerFees))
            obj.developerFees = object.developerFees.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.latestBlockHeight))
            obj.latestBlockHeight = BigInt(object.latestBlockHeight.toString());
        if ((0, helpers_1.isSet)(object.developerAddress))
            obj.developerAddress = String(object.developerAddress);
        if ((0, helpers_1.isSet)(object.maxPoolPointsPerBlock))
            obj.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
        if ((0, helpers_1.isSet)(object.maxPoolPointsPerTx))
            obj.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
        if ((0, helpers_1.isSet)(object.pointCountForBlock))
            obj.pointCountForBlock = BigInt(object.pointCountForBlock.toString());
        if (Array.isArray(object?.profits))
            obj.profits = object.profits.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.infoByPoolType))
            obj.infoByPoolType = protorev_1.InfoByPoolType.fromJSON(object.infoByPoolType);
        if ((0, helpers_1.isSet)(object.cyclicArbTracker))
            obj.cyclicArbTracker = protorev_1.CyclicArbTracker.fromJSON(object.cyclicArbTracker);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.tokenPairArbRoutes) {
            obj.tokenPairArbRoutes = message.tokenPairArbRoutes.map((e) => e ? protorev_1.TokenPairArbRoutes.toJSON(e) : undefined);
        }
        else {
            obj.tokenPairArbRoutes = [];
        }
        if (message.baseDenoms) {
            obj.baseDenoms = message.baseDenoms.map((e) => (e ? protorev_1.BaseDenom.toJSON(e) : undefined));
        }
        else {
            obj.baseDenoms = [];
        }
        message.daysSinceModuleGenesis !== undefined &&
            (obj.daysSinceModuleGenesis = (message.daysSinceModuleGenesis || BigInt(0)).toString());
        if (message.developerFees) {
            obj.developerFees = message.developerFees.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.developerFees = [];
        }
        message.latestBlockHeight !== undefined &&
            (obj.latestBlockHeight = (message.latestBlockHeight || BigInt(0)).toString());
        message.developerAddress !== undefined && (obj.developerAddress = message.developerAddress);
        message.maxPoolPointsPerBlock !== undefined &&
            (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
        message.maxPoolPointsPerTx !== undefined &&
            (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
        message.pointCountForBlock !== undefined &&
            (obj.pointCountForBlock = (message.pointCountForBlock || BigInt(0)).toString());
        if (message.profits) {
            obj.profits = message.profits.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.profits = [];
        }
        message.infoByPoolType !== undefined &&
            (obj.infoByPoolType = message.infoByPoolType
                ? protorev_1.InfoByPoolType.toJSON(message.infoByPoolType)
                : undefined);
        message.cyclicArbTracker !== undefined &&
            (obj.cyclicArbTracker = message.cyclicArbTracker
                ? protorev_1.CyclicArbTracker.toJSON(message.cyclicArbTracker)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        message.tokenPairArbRoutes =
            object.tokenPairArbRoutes?.map((e) => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        message.baseDenoms = object.baseDenoms?.map((e) => protorev_1.BaseDenom.fromPartial(e)) || [];
        if (object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null) {
            message.daysSinceModuleGenesis = BigInt(object.daysSinceModuleGenesis.toString());
        }
        message.developerFees = object.developerFees?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.latestBlockHeight !== undefined && object.latestBlockHeight !== null) {
            message.latestBlockHeight = BigInt(object.latestBlockHeight.toString());
        }
        message.developerAddress = object.developerAddress ?? "";
        if (object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null) {
            message.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
        }
        if (object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null) {
            message.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
        }
        if (object.pointCountForBlock !== undefined && object.pointCountForBlock !== null) {
            message.pointCountForBlock = BigInt(object.pointCountForBlock.toString());
        }
        message.profits = object.profits?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.infoByPoolType !== undefined && object.infoByPoolType !== null) {
            message.infoByPoolType = protorev_1.InfoByPoolType.fromPartial(object.infoByPoolType);
        }
        if (object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null) {
            message.cyclicArbTracker = protorev_1.CyclicArbTracker.fromPartial(object.cyclicArbTracker);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map