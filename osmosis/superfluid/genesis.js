"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const superfluid_1 = require("./superfluid");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.superfluid";
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        superfluidAssets: [],
        osmoEquivalentMultipliers: [],
        intermediaryAccounts: [],
        intemediaryAccountConnections: [],
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.superfluid.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.superfluidAssets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.osmoEquivalentMultipliers) {
            superfluid_1.OsmoEquivalentMultiplierRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.intermediaryAccounts) {
            superfluid_1.SuperfluidIntermediaryAccount.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.intemediaryAccountConnections) {
            superfluid_1.LockIdIntermediaryAccountConnection.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.superfluidAssets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.osmoEquivalentMultipliers.push(superfluid_1.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.intermediaryAccounts.push(superfluid_1.SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.intemediaryAccountConnections.push(superfluid_1.LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.superfluidAssets))
            obj.superfluidAssets = object.superfluidAssets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e));
        if (Array.isArray(object?.osmoEquivalentMultipliers))
            obj.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers.map((e) => superfluid_1.OsmoEquivalentMultiplierRecord.fromJSON(e));
        if (Array.isArray(object?.intermediaryAccounts))
            obj.intermediaryAccounts = object.intermediaryAccounts.map((e) => superfluid_1.SuperfluidIntermediaryAccount.fromJSON(e));
        if (Array.isArray(object?.intemediaryAccountConnections))
            obj.intemediaryAccountConnections = object.intemediaryAccountConnections.map((e) => superfluid_1.LockIdIntermediaryAccountConnection.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.superfluidAssets) {
            obj.superfluidAssets = message.superfluidAssets.map((e) => (e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined));
        }
        else {
            obj.superfluidAssets = [];
        }
        if (message.osmoEquivalentMultipliers) {
            obj.osmoEquivalentMultipliers = message.osmoEquivalentMultipliers.map((e) => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
        }
        else {
            obj.osmoEquivalentMultipliers = [];
        }
        if (message.intermediaryAccounts) {
            obj.intermediaryAccounts = message.intermediaryAccounts.map((e) => e ? superfluid_1.SuperfluidIntermediaryAccount.toJSON(e) : undefined);
        }
        else {
            obj.intermediaryAccounts = [];
        }
        if (message.intemediaryAccountConnections) {
            obj.intemediaryAccountConnections = message.intemediaryAccountConnections.map((e) => e ? superfluid_1.LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
        }
        else {
            obj.intemediaryAccountConnections = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        message.superfluidAssets = object.superfluidAssets?.map((e) => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        message.osmoEquivalentMultipliers =
            object.osmoEquivalentMultipliers?.map((e) => superfluid_1.OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
        message.intermediaryAccounts =
            object.intermediaryAccounts?.map((e) => superfluid_1.SuperfluidIntermediaryAccount.fromPartial(e)) || [];
        message.intemediaryAccountConnections =
            object.intemediaryAccountConnections?.map((e) => superfluid_1.LockIdIntermediaryAccountConnection.fromPartial(e)) ||
                [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map