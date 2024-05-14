"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const any_1 = require("../../../google/protobuf/any");
const shared_1 = require("./shared");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.gamm.v1beta1";
function createBaseParams() {
    return {
        poolCreationFee: [],
    };
}
exports.Params = {
    typeUrl: "/osmosis.gamm.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.poolCreationFee = object.poolCreationFee?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return {
        pools: [],
        nextPoolNumber: BigInt(0),
        params: exports.Params.fromPartial({}),
        migrationRecords: undefined,
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPoolNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextPoolNumber);
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        if (message.migrationRecords !== undefined) {
            shared_1.MigrationRecords.encode(message.migrationRecords, writer.uint32(34).fork()).ldelim();
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
                    message.pools.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPoolNumber = reader.uint64();
                    break;
                case 3:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.migrationRecords = shared_1.MigrationRecords.decode(reader, reader.uint32());
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
        if (Array.isArray(object?.pools))
            obj.pools = object.pools.map((e) => any_1.Any.fromJSON(e));
        if ((0, helpers_1.isSet)(object.nextPoolNumber))
            obj.nextPoolNumber = BigInt(object.nextPoolNumber.toString());
        if ((0, helpers_1.isSet)(object.params))
            obj.params = exports.Params.fromJSON(object.params);
        if ((0, helpers_1.isSet)(object.migrationRecords))
            obj.migrationRecords = shared_1.MigrationRecords.fromJSON(object.migrationRecords);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? any_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.nextPoolNumber !== undefined &&
            (obj.nextPoolNumber = (message.nextPoolNumber || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        message.migrationRecords !== undefined &&
            (obj.migrationRecords = message.migrationRecords
                ? shared_1.MigrationRecords.toJSON(message.migrationRecords)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.pools = object.pools?.map((e) => any_1.Any.fromPartial(e)) || [];
        if (object.nextPoolNumber !== undefined && object.nextPoolNumber !== null) {
            message.nextPoolNumber = BigInt(object.nextPoolNumber.toString());
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        if (object.migrationRecords !== undefined && object.migrationRecords !== null) {
            message.migrationRecords = shared_1.MigrationRecords.fromPartial(object.migrationRecords);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map