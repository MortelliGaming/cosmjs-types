"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryRestSupplyResponse = exports.QueryRestSupplyRequest = exports.UserConcentratedSuperfluidPositionsUndelegatingResponse = exports.UserConcentratedSuperfluidPositionsUndelegatingRequest = exports.UserConcentratedSuperfluidPositionsDelegatedResponse = exports.UserConcentratedSuperfluidPositionsDelegatedRequest = exports.QueryUnpoolWhitelistResponse = exports.QueryUnpoolWhitelistRequest = exports.QueryTotalDelegationByDelegatorResponse = exports.QueryTotalDelegationByDelegatorRequest = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = exports.SuperfluidDelegationsByValidatorDenomResponse = exports.SuperfluidDelegationsByValidatorDenomRequest = exports.SuperfluidUndelegationsByDelegatorResponse = exports.SuperfluidUndelegationsByDelegatorRequest = exports.SuperfluidDelegationsByDelegatorResponse = exports.SuperfluidDelegationsByDelegatorRequest = exports.SuperfluidDelegationAmountResponse = exports.SuperfluidDelegationAmountRequest = exports.TotalSuperfluidDelegationsResponse = exports.TotalSuperfluidDelegationsRequest = exports.Delegations = exports.QueryTotalDelegationByValidatorForDenomResponse = exports.QueryTotalDelegationByValidatorForDenomRequest = exports.ConnectedIntermediaryAccountResponse = exports.ConnectedIntermediaryAccountRequest = exports.AllIntermediaryAccountsResponse = exports.AllIntermediaryAccountsRequest = exports.SuperfluidIntermediaryAccountInfo = exports.AssetMultiplierResponse = exports.AssetMultiplierRequest = exports.AllAssetsResponse = exports.AllAssetsRequest = exports.AssetTypeResponse = exports.AssetTypeRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const superfluid_1 = require("./superfluid");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("../lockup/lock");
const staking_1 = require("../../cosmos/staking/v1beta1/staking");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.superfluid";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.superfluid.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.superfluid.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = params_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseAssetTypeRequest() {
    return {
        denom: "",
    };
}
exports.AssetTypeRequest = {
    typeUrl: "/osmosis.superfluid.AssetTypeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAssetTypeRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseAssetTypeResponse() {
    return {
        assetType: 0,
    };
}
exports.AssetTypeResponse = {
    typeUrl: "/osmosis.superfluid.AssetTypeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.assetType !== 0) {
            writer.uint32(8).int32(message.assetType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAssetTypeResponse();
        if ((0, helpers_1.isSet)(object.assetType))
            obj.assetType = (0, superfluid_1.superfluidAssetTypeFromJSON)(object.assetType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.assetType !== undefined && (obj.assetType = (0, superfluid_1.superfluidAssetTypeToJSON)(message.assetType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeResponse();
        message.assetType = object.assetType ?? 0;
        return message;
    },
};
function createBaseAllAssetsRequest() {
    return {};
}
exports.AllAssetsRequest = {
    typeUrl: "/osmosis.superfluid.AllAssetsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsRequest();
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
        const obj = createBaseAllAssetsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseAllAssetsRequest();
        return message;
    },
};
function createBaseAllAssetsResponse() {
    return {
        assets: [],
    };
}
exports.AllAssetsResponse = {
    typeUrl: "/osmosis.superfluid.AllAssetsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAllAssetsResponse();
        if (Array.isArray(object?.assets))
            obj.assets = object.assets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllAssetsResponse();
        message.assets = object.assets?.map((e) => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAssetMultiplierRequest() {
    return {
        denom: "",
    };
}
exports.AssetMultiplierRequest = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAssetMultiplierRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseAssetMultiplierResponse() {
    return {
        osmoEquivalentMultiplier: undefined,
    };
}
exports.AssetMultiplierResponse = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.osmoEquivalentMultiplier !== undefined) {
            superfluid_1.OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osmoEquivalentMultiplier = superfluid_1.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAssetMultiplierResponse();
        if ((0, helpers_1.isSet)(object.osmoEquivalentMultiplier))
            obj.osmoEquivalentMultiplier = superfluid_1.OsmoEquivalentMultiplierRecord.fromJSON(object.osmoEquivalentMultiplier);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.osmoEquivalentMultiplier !== undefined &&
            (obj.osmoEquivalentMultiplier = message.osmoEquivalentMultiplier
                ? superfluid_1.OsmoEquivalentMultiplierRecord.toJSON(message.osmoEquivalentMultiplier)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierResponse();
        if (object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null) {
            message.osmoEquivalentMultiplier = superfluid_1.OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier);
        }
        return message;
    },
};
function createBaseSuperfluidIntermediaryAccountInfo() {
    return {
        denom: "",
        valAddr: "",
        gaugeId: BigInt(0),
        address: "",
    };
}
exports.SuperfluidIntermediaryAccountInfo = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
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
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccountInfo();
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
                case 4:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidIntermediaryAccountInfo();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.valAddr))
            obj.valAddr = String(object.valAddr);
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        message.denom = object.denom ?? "";
        message.valAddr = object.valAddr ?? "";
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseAllIntermediaryAccountsRequest() {
    return {
        pagination: undefined,
    };
}
exports.AllIntermediaryAccountsRequest = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAllIntermediaryAccountsRequest();
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllIntermediaryAccountsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseAllIntermediaryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined,
    };
}
exports.AllIntermediaryAccountsResponse = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            exports.SuperfluidIntermediaryAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAllIntermediaryAccountsResponse();
        if (Array.isArray(object?.accounts))
            obj.accounts = object.accounts.map((e) => exports.SuperfluidIntermediaryAccountInfo.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? exports.SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllIntermediaryAccountsResponse();
        message.accounts = object.accounts?.map((e) => exports.SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseConnectedIntermediaryAccountRequest() {
    return {
        lockId: BigInt(0),
    };
}
exports.ConnectedIntermediaryAccountRequest = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConnectedIntermediaryAccountRequest();
        if ((0, helpers_1.isSet)(object.lockId))
            obj.lockId = BigInt(object.lockId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountRequest();
        if (object.lockId !== undefined && object.lockId !== null) {
            message.lockId = BigInt(object.lockId.toString());
        }
        return message;
    },
};
function createBaseConnectedIntermediaryAccountResponse() {
    return {
        account: undefined,
    };
}
exports.ConnectedIntermediaryAccountResponse = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            exports.SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = exports.SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConnectedIntermediaryAccountResponse();
        if ((0, helpers_1.isSet)(object.account))
            obj.account = exports.SuperfluidIntermediaryAccountInfo.fromJSON(object.account);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined &&
            (obj.account = message.account ? exports.SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = exports.SuperfluidIntermediaryAccountInfo.fromPartial(object.account);
        }
        return message;
    },
};
function createBaseQueryTotalDelegationByValidatorForDenomRequest() {
    return {
        denom: "",
    };
}
exports.QueryTotalDelegationByValidatorForDenomRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryTotalDelegationByValidatorForDenomResponse() {
    return {
        assets: [],
    };
}
exports.QueryTotalDelegationByValidatorForDenomResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            exports.Delegations.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(exports.Delegations.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        if (Array.isArray(object?.assets))
            obj.assets = object.assets.map((e) => exports.Delegations.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? exports.Delegations.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        message.assets = object.assets?.map((e) => exports.Delegations.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDelegations() {
    return {
        valAddr: "",
        amountSfsd: "",
        osmoEquivalent: "",
    };
}
exports.Delegations = {
    typeUrl: "/osmosis.superfluid.Delegations",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.valAddr !== "") {
            writer.uint32(10).string(message.valAddr);
        }
        if (message.amountSfsd !== "") {
            writer.uint32(18).string(message.amountSfsd);
        }
        if (message.osmoEquivalent !== "") {
            writer.uint32(26).string(message.osmoEquivalent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegations();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valAddr = reader.string();
                    break;
                case 2:
                    message.amountSfsd = reader.string();
                    break;
                case 3:
                    message.osmoEquivalent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDelegations();
        if ((0, helpers_1.isSet)(object.valAddr))
            obj.valAddr = String(object.valAddr);
        if ((0, helpers_1.isSet)(object.amountSfsd))
            obj.amountSfsd = String(object.amountSfsd);
        if ((0, helpers_1.isSet)(object.osmoEquivalent))
            obj.osmoEquivalent = String(object.osmoEquivalent);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.amountSfsd !== undefined && (obj.amountSfsd = message.amountSfsd);
        message.osmoEquivalent !== undefined && (obj.osmoEquivalent = message.osmoEquivalent);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegations();
        message.valAddr = object.valAddr ?? "";
        message.amountSfsd = object.amountSfsd ?? "";
        message.osmoEquivalent = object.osmoEquivalent ?? "";
        return message;
    },
};
function createBaseTotalSuperfluidDelegationsRequest() {
    return {};
}
exports.TotalSuperfluidDelegationsRequest = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsRequest();
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
        const obj = createBaseTotalSuperfluidDelegationsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseTotalSuperfluidDelegationsRequest();
        return message;
    },
};
function createBaseTotalSuperfluidDelegationsResponse() {
    return {
        totalDelegations: "",
    };
}
exports.TotalSuperfluidDelegationsResponse = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalDelegations !== "") {
            writer.uint32(10).string(message.totalDelegations);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDelegations = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTotalSuperfluidDelegationsResponse();
        if ((0, helpers_1.isSet)(object.totalDelegations))
            obj.totalDelegations = String(object.totalDelegations);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalDelegations !== undefined && (obj.totalDelegations = message.totalDelegations);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTotalSuperfluidDelegationsResponse();
        message.totalDelegations = object.totalDelegations ?? "";
        return message;
    },
};
function createBaseSuperfluidDelegationAmountRequest() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        denom: "",
    };
}
exports.SuperfluidDelegationAmountRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountRequest();
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
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidDelegationAmountRequest();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        if ((0, helpers_1.isSet)(object.validatorAddress))
            obj.validatorAddress = String(object.validatorAddress);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseSuperfluidDelegationAmountResponse() {
    return {
        amount: [],
    };
}
exports.SuperfluidDelegationAmountResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidDelegationAmountResponse();
        if (Array.isArray(object?.amount))
            obj.amount = object.amount.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountResponse();
        message.amount = object.amount?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSuperfluidDelegationsByDelegatorRequest() {
    return {
        delegatorAddress: "",
    };
}
exports.SuperfluidDelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidDelegationsByDelegatorRequest();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
};
function createBaseSuperfluidDelegationsByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        totalDelegatedCoins: [],
        totalEquivalentStakedAmount: coin_1.Coin.fromPartial({}),
    };
}
exports.SuperfluidDelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalDelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalEquivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalDelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalEquivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidDelegationsByDelegatorResponse();
        if (Array.isArray(object?.superfluidDelegationRecords))
            obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e));
        if (Array.isArray(object?.totalDelegatedCoins))
            obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.totalEquivalentStakedAmount))
            obj.totalEquivalentStakedAmount = coin_1.Coin.fromJSON(object.totalEquivalentStakedAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        if (message.totalDelegatedCoins) {
            obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.totalDelegatedCoins = [];
        }
        message.totalEquivalentStakedAmount !== undefined &&
            (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount
                ? coin_1.Coin.toJSON(message.totalEquivalentStakedAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map((e) => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.totalDelegatedCoins = object.totalDelegatedCoins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null) {
            message.totalEquivalentStakedAmount = coin_1.Coin.fromPartial(object.totalEquivalentStakedAmount);
        }
        return message;
    },
};
function createBaseSuperfluidUndelegationsByDelegatorRequest() {
    return {
        delegatorAddress: "",
        denom: "",
    };
}
exports.SuperfluidUndelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidUndelegationsByDelegatorRequest();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseSuperfluidUndelegationsByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        totalUndelegatedCoins: [],
        syntheticLocks: [],
    };
}
exports.SuperfluidUndelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalUndelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.syntheticLocks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalUndelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.syntheticLocks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidUndelegationsByDelegatorResponse();
        if (Array.isArray(object?.superfluidDelegationRecords))
            obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e));
        if (Array.isArray(object?.totalUndelegatedCoins))
            obj.totalUndelegatedCoins = object.totalUndelegatedCoins.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.syntheticLocks))
            obj.syntheticLocks = object.syntheticLocks.map((e) => lock_1.SyntheticLock.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        if (message.totalUndelegatedCoins) {
            obj.totalUndelegatedCoins = message.totalUndelegatedCoins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.totalUndelegatedCoins = [];
        }
        if (message.syntheticLocks) {
            obj.syntheticLocks = message.syntheticLocks.map((e) => (e ? lock_1.SyntheticLock.toJSON(e) : undefined));
        }
        else {
            obj.syntheticLocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map((e) => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.totalUndelegatedCoins = object.totalUndelegatedCoins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.syntheticLocks = object.syntheticLocks?.map((e) => lock_1.SyntheticLock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSuperfluidDelegationsByValidatorDenomRequest() {
    return {
        validatorAddress: "",
        denom: "",
    };
}
exports.SuperfluidDelegationsByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        if ((0, helpers_1.isSet)(object.validatorAddress))
            obj.validatorAddress = String(object.validatorAddress);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseSuperfluidDelegationsByValidatorDenomResponse() {
    return {
        superfluidDelegationRecords: [],
    };
}
exports.SuperfluidDelegationsByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        if (Array.isArray(object?.superfluidDelegationRecords))
            obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map((e) => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest() {
    return {
        validatorAddress: "",
        denom: "",
    };
}
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        if ((0, helpers_1.isSet)(object.validatorAddress))
            obj.validatorAddress = String(object.validatorAddress);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse() {
    return {
        totalDelegatedCoins: [],
    };
}
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.totalDelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        if (Array.isArray(object?.totalDelegatedCoins))
            obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.totalDelegatedCoins) {
            obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.totalDelegatedCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        message.totalDelegatedCoins = object.totalDelegatedCoins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryTotalDelegationByDelegatorRequest() {
    return {
        delegatorAddress: "",
    };
}
exports.QueryTotalDelegationByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTotalDelegationByDelegatorRequest();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
};
function createBaseQueryTotalDelegationByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        delegationResponse: [],
        totalDelegatedCoins: [],
        totalEquivalentStakedAmount: coin_1.Coin.fromPartial({}),
    };
}
exports.QueryTotalDelegationByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.delegationResponse) {
            staking_1.DelegationResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.totalDelegatedCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalEquivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.delegationResponse.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalDelegatedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalEquivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTotalDelegationByDelegatorResponse();
        if (Array.isArray(object?.superfluidDelegationRecords))
            obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e));
        if (Array.isArray(object?.delegationResponse))
            obj.delegationResponse = object.delegationResponse.map((e) => staking_1.DelegationResponse.fromJSON(e));
        if (Array.isArray(object?.totalDelegatedCoins))
            obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e) => coin_1.Coin.fromJSON(e));
        if ((0, helpers_1.isSet)(object.totalEquivalentStakedAmount))
            obj.totalEquivalentStakedAmount = coin_1.Coin.fromJSON(object.totalEquivalentStakedAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluidDelegationRecords = [];
        }
        if (message.delegationResponse) {
            obj.delegationResponse = message.delegationResponse.map((e) => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegationResponse = [];
        }
        if (message.totalDelegatedCoins) {
            obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.totalDelegatedCoins = [];
        }
        message.totalEquivalentStakedAmount !== undefined &&
            (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount
                ? coin_1.Coin.toJSON(message.totalEquivalentStakedAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map((e) => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.delegationResponse =
            object.delegationResponse?.map((e) => staking_1.DelegationResponse.fromPartial(e)) || [];
        message.totalDelegatedCoins = object.totalDelegatedCoins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        if (object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null) {
            message.totalEquivalentStakedAmount = coin_1.Coin.fromPartial(object.totalEquivalentStakedAmount);
        }
        return message;
    },
};
function createBaseQueryUnpoolWhitelistRequest() {
    return {};
}
exports.QueryUnpoolWhitelistRequest = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistRequest();
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
        const obj = createBaseQueryUnpoolWhitelistRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryUnpoolWhitelistRequest();
        return message;
    },
};
function createBaseQueryUnpoolWhitelistResponse() {
    return {
        poolIds: [],
    };
}
exports.QueryUnpoolWhitelistResponse = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryUnpoolWhitelistResponse();
        if (Array.isArray(object?.poolIds))
            obj.poolIds = object.poolIds.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolIds) {
            obj.poolIds = message.poolIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.poolIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnpoolWhitelistResponse();
        message.poolIds = object.poolIds?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseUserConcentratedSuperfluidPositionsDelegatedRequest() {
    return {
        delegatorAddress: "",
    };
}
exports.UserConcentratedSuperfluidPositionsDelegatedRequest = {
    typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
};
function createBaseUserConcentratedSuperfluidPositionsDelegatedResponse() {
    return {
        clPoolUserPositionRecords: [],
    };
}
exports.UserConcentratedSuperfluidPositionsDelegatedResponse = {
    typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.clPoolUserPositionRecords) {
            superfluid_1.ConcentratedPoolUserPositionRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clPoolUserPositionRecords.push(superfluid_1.ConcentratedPoolUserPositionRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
        if (Array.isArray(object?.clPoolUserPositionRecords))
            obj.clPoolUserPositionRecords = object.clPoolUserPositionRecords.map((e) => superfluid_1.ConcentratedPoolUserPositionRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.clPoolUserPositionRecords) {
            obj.clPoolUserPositionRecords = message.clPoolUserPositionRecords.map((e) => e ? superfluid_1.ConcentratedPoolUserPositionRecord.toJSON(e) : undefined);
        }
        else {
            obj.clPoolUserPositionRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
        message.clPoolUserPositionRecords =
            object.clPoolUserPositionRecords?.map((e) => superfluid_1.ConcentratedPoolUserPositionRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest() {
    return {
        delegatorAddress: "",
    };
}
exports.UserConcentratedSuperfluidPositionsUndelegatingRequest = {
    typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
        if ((0, helpers_1.isSet)(object.delegatorAddress))
            obj.delegatorAddress = String(object.delegatorAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
};
function createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse() {
    return {
        clPoolUserPositionRecords: [],
    };
}
exports.UserConcentratedSuperfluidPositionsUndelegatingResponse = {
    typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.clPoolUserPositionRecords) {
            superfluid_1.ConcentratedPoolUserPositionRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clPoolUserPositionRecords.push(superfluid_1.ConcentratedPoolUserPositionRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
        if (Array.isArray(object?.clPoolUserPositionRecords))
            obj.clPoolUserPositionRecords = object.clPoolUserPositionRecords.map((e) => superfluid_1.ConcentratedPoolUserPositionRecord.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.clPoolUserPositionRecords) {
            obj.clPoolUserPositionRecords = message.clPoolUserPositionRecords.map((e) => e ? superfluid_1.ConcentratedPoolUserPositionRecord.toJSON(e) : undefined);
        }
        else {
            obj.clPoolUserPositionRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
        message.clPoolUserPositionRecords =
            object.clPoolUserPositionRecords?.map((e) => superfluid_1.ConcentratedPoolUserPositionRecord.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryRestSupplyRequest() {
    return {
        denom: "",
    };
}
exports.QueryRestSupplyRequest = {
    typeUrl: "/osmosis.superfluid.QueryRestSupplyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRestSupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryRestSupplyRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRestSupplyRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryRestSupplyResponse() {
    return {
        amount: coin_1.Coin.fromPartial({}),
    };
}
exports.QueryRestSupplyResponse = {
    typeUrl: "/osmosis.superfluid.QueryRestSupplyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRestSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryRestSupplyResponse();
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = coin_1.Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRestSupplyResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.AssetType = this.AssetType.bind(this);
        this.AllAssets = this.AllAssets.bind(this);
        this.AssetMultiplier = this.AssetMultiplier.bind(this);
        this.AllIntermediaryAccounts = this.AllIntermediaryAccounts.bind(this);
        this.ConnectedIntermediaryAccount = this.ConnectedIntermediaryAccount.bind(this);
        this.TotalDelegationByValidatorForDenom = this.TotalDelegationByValidatorForDenom.bind(this);
        this.TotalSuperfluidDelegations = this.TotalSuperfluidDelegations.bind(this);
        this.SuperfluidDelegationAmount = this.SuperfluidDelegationAmount.bind(this);
        this.SuperfluidDelegationsByDelegator = this.SuperfluidDelegationsByDelegator.bind(this);
        this.SuperfluidUndelegationsByDelegator = this.SuperfluidUndelegationsByDelegator.bind(this);
        this.SuperfluidDelegationsByValidatorDenom = this.SuperfluidDelegationsByValidatorDenom.bind(this);
        this.EstimateSuperfluidDelegatedAmountByValidatorDenom =
            this.EstimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
        this.TotalDelegationByDelegator = this.TotalDelegationByDelegator.bind(this);
        this.UnpoolWhitelist = this.UnpoolWhitelist.bind(this);
        this.UserConcentratedSuperfluidPositionsDelegated =
            this.UserConcentratedSuperfluidPositionsDelegated.bind(this);
        this.UserConcentratedSuperfluidPositionsUndelegating =
            this.UserConcentratedSuperfluidPositionsUndelegating.bind(this);
        this.RestSupply = this.RestSupply.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    AssetType(request) {
        const data = exports.AssetTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
        return promise.then((data) => exports.AssetTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    AllAssets(request = {}) {
        const data = exports.AllAssetsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
        return promise.then((data) => exports.AllAssetsResponse.decode(new binary_1.BinaryReader(data)));
    }
    AssetMultiplier(request) {
        const data = exports.AssetMultiplierRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
        return promise.then((data) => exports.AssetMultiplierResponse.decode(new binary_1.BinaryReader(data)));
    }
    AllIntermediaryAccounts(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.AllIntermediaryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
        return promise.then((data) => exports.AllIntermediaryAccountsResponse.decode(new binary_1.BinaryReader(data)));
    }
    ConnectedIntermediaryAccount(request) {
        const data = exports.ConnectedIntermediaryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
        return promise.then((data) => exports.ConnectedIntermediaryAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalDelegationByValidatorForDenom(request) {
        const data = exports.QueryTotalDelegationByValidatorForDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByValidatorForDenom", data);
        return promise.then((data) => exports.QueryTotalDelegationByValidatorForDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalSuperfluidDelegations(request = {}) {
        const data = exports.TotalSuperfluidDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
        return promise.then((data) => exports.TotalSuperfluidDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    SuperfluidDelegationAmount(request) {
        const data = exports.SuperfluidDelegationAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
        return promise.then((data) => exports.SuperfluidDelegationAmountResponse.decode(new binary_1.BinaryReader(data)));
    }
    SuperfluidDelegationsByDelegator(request) {
        const data = exports.SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
        return promise.then((data) => exports.SuperfluidDelegationsByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    SuperfluidUndelegationsByDelegator(request) {
        const data = exports.SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
        return promise.then((data) => exports.SuperfluidUndelegationsByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    SuperfluidDelegationsByValidatorDenom(request) {
        const data = exports.SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
        return promise.then((data) => exports.SuperfluidDelegationsByValidatorDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateSuperfluidDelegatedAmountByValidatorDenom(request) {
        const data = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
        return promise.then((data) => exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    TotalDelegationByDelegator(request) {
        const data = exports.QueryTotalDelegationByDelegatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
        return promise.then((data) => exports.QueryTotalDelegationByDelegatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    UnpoolWhitelist(request = {}) {
        const data = exports.QueryUnpoolWhitelistRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "UnpoolWhitelist", data);
        return promise.then((data) => exports.QueryUnpoolWhitelistResponse.decode(new binary_1.BinaryReader(data)));
    }
    UserConcentratedSuperfluidPositionsDelegated(request) {
        const data = exports.UserConcentratedSuperfluidPositionsDelegatedRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "UserConcentratedSuperfluidPositionsDelegated", data);
        return promise.then((data) => exports.UserConcentratedSuperfluidPositionsDelegatedResponse.decode(new binary_1.BinaryReader(data)));
    }
    UserConcentratedSuperfluidPositionsUndelegating(request) {
        const data = exports.UserConcentratedSuperfluidPositionsUndelegatingRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "UserConcentratedSuperfluidPositionsUndelegating", data);
        return promise.then((data) => exports.UserConcentratedSuperfluidPositionsUndelegatingResponse.decode(new binary_1.BinaryReader(data)));
    }
    RestSupply(request) {
        const data = exports.QueryRestSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Query", "RestSupply", data);
        return promise.then((data) => exports.QueryRestSupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map