"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryBaseFeeResponse = exports.QueryBaseFeeRequest = exports.QueryTraceBlockResponse = exports.QueryTraceBlockRequest = exports.QueryTraceTxResponse = exports.QueryTraceTxRequest = exports.EstimateGasResponse = exports.EthCallRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryTxLogsResponse = exports.QueryTxLogsRequest = exports.QueryCodeResponse = exports.QueryCodeRequest = exports.QueryStorageResponse = exports.QueryStorageRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.QueryValidatorAccountResponse = exports.QueryValidatorAccountRequest = exports.QueryCosmosAccountResponse = exports.QueryCosmosAccountRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const tx_1 = require("./tx");
const evm_1 = require("./evm");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.evm.v1";
function createBaseQueryAccountRequest() {
    return {
        address: "",
    };
}
exports.QueryAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryAccountRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryAccountResponse() {
    return {
        balance: "",
        codeHash: "",
        nonce: BigInt(0),
    };
}
exports.QueryAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        if (message.codeHash !== "") {
            writer.uint32(18).string(message.codeHash);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(24).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                case 2:
                    message.codeHash = reader.string();
                    break;
                case 3:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAccountResponse();
        if ((0, helpers_1.isSet)(object.balance))
            obj.balance = String(object.balance);
        if ((0, helpers_1.isSet)(object.codeHash))
            obj.codeHash = String(object.codeHash);
        if ((0, helpers_1.isSet)(object.nonce))
            obj.nonce = BigInt(object.nonce.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.codeHash !== undefined && (obj.codeHash = message.codeHash);
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.balance = object.balance ?? "";
        message.codeHash = object.codeHash ?? "";
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce.toString());
        }
        return message;
    },
};
function createBaseQueryCosmosAccountRequest() {
    return {
        address: "",
    };
}
exports.QueryCosmosAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCosmosAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryCosmosAccountRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCosmosAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryCosmosAccountResponse() {
    return {
        cosmosAddress: "",
        sequence: BigInt(0),
        accountNumber: BigInt(0),
    };
}
exports.QueryCosmosAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cosmosAddress !== "") {
            writer.uint32(10).string(message.cosmosAddress);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCosmosAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmosAddress = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCosmosAccountResponse();
        if ((0, helpers_1.isSet)(object.cosmosAddress))
            obj.cosmosAddress = String(object.cosmosAddress);
        if ((0, helpers_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        if ((0, helpers_1.isSet)(object.accountNumber))
            obj.accountNumber = BigInt(object.accountNumber.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.cosmosAddress !== undefined && (obj.cosmosAddress = message.cosmosAddress);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.accountNumber !== undefined &&
            (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCosmosAccountResponse();
        message.cosmosAddress = object.cosmosAddress ?? "";
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        if (object.accountNumber !== undefined && object.accountNumber !== null) {
            message.accountNumber = BigInt(object.accountNumber.toString());
        }
        return message;
    },
};
function createBaseQueryValidatorAccountRequest() {
    return {
        consAddress: "",
    };
}
exports.QueryValidatorAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consAddress !== "") {
            writer.uint32(10).string(message.consAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryValidatorAccountRequest();
        if ((0, helpers_1.isSet)(object.consAddress))
            obj.consAddress = String(object.consAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.consAddress !== undefined && (obj.consAddress = message.consAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorAccountRequest();
        message.consAddress = object.consAddress ?? "";
        return message;
    },
};
function createBaseQueryValidatorAccountResponse() {
    return {
        accountAddress: "",
        sequence: BigInt(0),
        accountNumber: BigInt(0),
    };
}
exports.QueryValidatorAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryValidatorAccountResponse();
        if ((0, helpers_1.isSet)(object.accountAddress))
            obj.accountAddress = String(object.accountAddress);
        if ((0, helpers_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        if ((0, helpers_1.isSet)(object.accountNumber))
            obj.accountNumber = BigInt(object.accountNumber.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.accountNumber !== undefined &&
            (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorAccountResponse();
        message.accountAddress = object.accountAddress ?? "";
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        if (object.accountNumber !== undefined && object.accountNumber !== null) {
            message.accountNumber = BigInt(object.accountNumber.toString());
        }
        return message;
    },
};
function createBaseQueryBalanceRequest() {
    return {
        address: "",
    };
}
exports.QueryBalanceRequest = {
    typeUrl: "/ethermint.evm.v1.QueryBalanceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryBalanceRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryBalanceResponse() {
    return {
        balance: "",
    };
}
exports.QueryBalanceResponse = {
    typeUrl: "/ethermint.evm.v1.QueryBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBalanceResponse();
        if ((0, helpers_1.isSet)(object.balance))
            obj.balance = String(object.balance);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.balance = object.balance ?? "";
        return message;
    },
};
function createBaseQueryStorageRequest() {
    return {
        address: "",
        key: "",
    };
}
exports.QueryStorageRequest = {
    typeUrl: "/ethermint.evm.v1.QueryStorageRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryStorageRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_1.isSet)(object.key))
            obj.key = String(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageRequest();
        message.address = object.address ?? "";
        message.key = object.key ?? "";
        return message;
    },
};
function createBaseQueryStorageResponse() {
    return {
        value: "",
    };
}
exports.QueryStorageResponse = {
    typeUrl: "/ethermint.evm.v1.QueryStorageResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryStorageResponse();
        if ((0, helpers_1.isSet)(object.value))
            obj.value = String(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageResponse();
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseQueryCodeRequest() {
    return {
        address: "",
    };
}
exports.QueryCodeRequest = {
    typeUrl: "/ethermint.evm.v1.QueryCodeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryCodeRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryCodeResponse() {
    return {
        code: new Uint8Array(),
    };
}
exports.QueryCodeResponse = {
    typeUrl: "/ethermint.evm.v1.QueryCodeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code.length !== 0) {
            writer.uint32(10).bytes(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCodeResponse();
        if ((0, helpers_1.isSet)(object.code))
            obj.code = (0, helpers_1.bytesFromBase64)(object.code);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined &&
            (obj.code = (0, helpers_1.base64FromBytes)(message.code !== undefined ? message.code : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeResponse();
        message.code = object.code ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryTxLogsRequest() {
    return {
        hash: "",
        pagination: undefined,
    };
}
exports.QueryTxLogsRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxLogsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
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
        const obj = createBaseQueryTxLogsRequest();
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = String(object.hash);
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxLogsRequest();
        message.hash = object.hash ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryTxLogsResponse() {
    return {
        logs: [],
        pagination: undefined,
    };
}
exports.QueryTxLogsResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.logs) {
            evm_1.Log.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxLogsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(evm_1.Log.decode(reader, reader.uint32()));
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
        const obj = createBaseQueryTxLogsResponse();
        if (Array.isArray(object?.logs))
            obj.logs = object.logs.map((e) => evm_1.Log.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? evm_1.Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxLogsResponse();
        message.logs = object.logs?.map((e) => evm_1.Log.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/ethermint.evm.v1.QueryParamsRequest",
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
        params: evm_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/ethermint.evm.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            evm_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = evm_1.Params.decode(reader, reader.uint32());
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
            obj.params = evm_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? evm_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseEthCallRequest() {
    return {
        args: new Uint8Array(),
        gasCap: BigInt(0),
        proposerAddress: new Uint8Array(),
        chainId: BigInt(0),
    };
}
exports.EthCallRequest = {
    typeUrl: "/ethermint.evm.v1.EthCallRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.args.length !== 0) {
            writer.uint32(10).bytes(message.args);
        }
        if (message.gasCap !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasCap);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(26).bytes(message.proposerAddress);
        }
        if (message.chainId !== BigInt(0)) {
            writer.uint32(32).int64(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthCallRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args = reader.bytes();
                    break;
                case 2:
                    message.gasCap = reader.uint64();
                    break;
                case 3:
                    message.proposerAddress = reader.bytes();
                    break;
                case 4:
                    message.chainId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEthCallRequest();
        if ((0, helpers_1.isSet)(object.args))
            obj.args = (0, helpers_1.bytesFromBase64)(object.args);
        if ((0, helpers_1.isSet)(object.gasCap))
            obj.gasCap = BigInt(object.gasCap.toString());
        if ((0, helpers_1.isSet)(object.proposerAddress))
            obj.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposerAddress);
        if ((0, helpers_1.isSet)(object.chainId))
            obj.chainId = BigInt(object.chainId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.args !== undefined &&
            (obj.args = (0, helpers_1.base64FromBytes)(message.args !== undefined ? message.args : new Uint8Array()));
        message.gasCap !== undefined && (obj.gasCap = (message.gasCap || BigInt(0)).toString());
        message.proposerAddress !== undefined &&
            (obj.proposerAddress = (0, helpers_1.base64FromBytes)(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = (message.chainId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEthCallRequest();
        message.args = object.args ?? new Uint8Array();
        if (object.gasCap !== undefined && object.gasCap !== null) {
            message.gasCap = BigInt(object.gasCap.toString());
        }
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = BigInt(object.chainId.toString());
        }
        return message;
    },
};
function createBaseEstimateGasResponse() {
    return {
        gas: BigInt(0),
    };
}
exports.EstimateGasResponse = {
    typeUrl: "/ethermint.evm.v1.EstimateGasResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gas !== BigInt(0)) {
            writer.uint32(8).uint64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateGasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEstimateGasResponse();
        if ((0, helpers_1.isSet)(object.gas))
            obj.gas = BigInt(object.gas.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.gas !== undefined && (obj.gas = (message.gas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateGasResponse();
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas.toString());
        }
        return message;
    },
};
function createBaseQueryTraceTxRequest() {
    return {
        msg: undefined,
        traceConfig: undefined,
        predecessors: [],
        blockNumber: BigInt(0),
        blockHash: "",
        blockTime: timestamp_1.Timestamp.fromPartial({}),
        proposerAddress: new Uint8Array(),
        chainId: BigInt(0),
        blockMaxGas: BigInt(0),
    };
}
exports.QueryTraceTxRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_1.MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.traceConfig !== undefined) {
            evm_1.TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.predecessors) {
            tx_1.MsgEthereumTx.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockNumber !== BigInt(0)) {
            writer.uint32(40).int64(message.blockNumber);
        }
        if (message.blockHash !== "") {
            writer.uint32(50).string(message.blockHash);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        if (message.chainId !== BigInt(0)) {
            writer.uint32(72).int64(message.chainId);
        }
        if (message.blockMaxGas !== BigInt(0)) {
            writer.uint32(80).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_1.MsgEthereumTx.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.traceConfig = evm_1.TraceConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.predecessors.push(tx_1.MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.blockNumber = reader.int64();
                    break;
                case 6:
                    message.blockHash = reader.string();
                    break;
                case 7:
                    message.blockTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                case 9:
                    message.chainId = reader.int64();
                    break;
                case 10:
                    message.blockMaxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTraceTxRequest();
        if ((0, helpers_1.isSet)(object.msg))
            obj.msg = tx_1.MsgEthereumTx.fromJSON(object.msg);
        if ((0, helpers_1.isSet)(object.traceConfig))
            obj.traceConfig = evm_1.TraceConfig.fromJSON(object.traceConfig);
        if (Array.isArray(object?.predecessors))
            obj.predecessors = object.predecessors.map((e) => tx_1.MsgEthereumTx.fromJSON(e));
        if ((0, helpers_1.isSet)(object.blockNumber))
            obj.blockNumber = BigInt(object.blockNumber.toString());
        if ((0, helpers_1.isSet)(object.blockHash))
            obj.blockHash = String(object.blockHash);
        if ((0, helpers_1.isSet)(object.blockTime))
            obj.blockTime = (0, helpers_1.fromJsonTimestamp)(object.blockTime);
        if ((0, helpers_1.isSet)(object.proposerAddress))
            obj.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposerAddress);
        if ((0, helpers_1.isSet)(object.chainId))
            obj.chainId = BigInt(object.chainId.toString());
        if ((0, helpers_1.isSet)(object.blockMaxGas))
            obj.blockMaxGas = BigInt(object.blockMaxGas.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg ? tx_1.MsgEthereumTx.toJSON(message.msg) : undefined);
        message.traceConfig !== undefined &&
            (obj.traceConfig = message.traceConfig ? evm_1.TraceConfig.toJSON(message.traceConfig) : undefined);
        if (message.predecessors) {
            obj.predecessors = message.predecessors.map((e) => (e ? tx_1.MsgEthereumTx.toJSON(e) : undefined));
        }
        else {
            obj.predecessors = [];
        }
        message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || BigInt(0)).toString());
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.blockTime !== undefined && (obj.blockTime = (0, helpers_1.fromTimestamp)(message.blockTime).toISOString());
        message.proposerAddress !== undefined &&
            (obj.proposerAddress = (0, helpers_1.base64FromBytes)(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = (message.chainId || BigInt(0)).toString());
        message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceTxRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgEthereumTx.fromPartial(object.msg);
        }
        if (object.traceConfig !== undefined && object.traceConfig !== null) {
            message.traceConfig = evm_1.TraceConfig.fromPartial(object.traceConfig);
        }
        message.predecessors = object.predecessors?.map((e) => tx_1.MsgEthereumTx.fromPartial(e)) || [];
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = BigInt(object.blockNumber.toString());
        }
        message.blockHash = object.blockHash ?? "";
        if (object.blockTime !== undefined && object.blockTime !== null) {
            message.blockTime = timestamp_1.Timestamp.fromPartial(object.blockTime);
        }
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = BigInt(object.chainId.toString());
        }
        if (object.blockMaxGas !== undefined && object.blockMaxGas !== null) {
            message.blockMaxGas = BigInt(object.blockMaxGas.toString());
        }
        return message;
    },
};
function createBaseQueryTraceTxResponse() {
    return {
        data: new Uint8Array(),
    };
}
exports.QueryTraceTxResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTraceTxResponse();
        if ((0, helpers_1.isSet)(object.data))
            obj.data = (0, helpers_1.bytesFromBase64)(object.data);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceTxResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryTraceBlockRequest() {
    return {
        txs: [],
        traceConfig: undefined,
        blockNumber: BigInt(0),
        blockHash: "",
        blockTime: timestamp_1.Timestamp.fromPartial({}),
        proposerAddress: new Uint8Array(),
        chainId: BigInt(0),
        blockMaxGas: BigInt(0),
    };
}
exports.QueryTraceBlockRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            tx_1.MsgEthereumTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.traceConfig !== undefined) {
            evm_1.TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockNumber !== BigInt(0)) {
            writer.uint32(40).int64(message.blockNumber);
        }
        if (message.blockHash !== "") {
            writer.uint32(50).string(message.blockHash);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        if (message.chainId !== BigInt(0)) {
            writer.uint32(72).int64(message.chainId);
        }
        if (message.blockMaxGas !== BigInt(0)) {
            writer.uint32(80).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.traceConfig = evm_1.TraceConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.blockNumber = reader.int64();
                    break;
                case 6:
                    message.blockHash = reader.string();
                    break;
                case 7:
                    message.blockTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                case 9:
                    message.chainId = reader.int64();
                    break;
                case 10:
                    message.blockMaxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTraceBlockRequest();
        if (Array.isArray(object?.txs))
            obj.txs = object.txs.map((e) => tx_1.MsgEthereumTx.fromJSON(e));
        if ((0, helpers_1.isSet)(object.traceConfig))
            obj.traceConfig = evm_1.TraceConfig.fromJSON(object.traceConfig);
        if ((0, helpers_1.isSet)(object.blockNumber))
            obj.blockNumber = BigInt(object.blockNumber.toString());
        if ((0, helpers_1.isSet)(object.blockHash))
            obj.blockHash = String(object.blockHash);
        if ((0, helpers_1.isSet)(object.blockTime))
            obj.blockTime = (0, helpers_1.fromJsonTimestamp)(object.blockTime);
        if ((0, helpers_1.isSet)(object.proposerAddress))
            obj.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposerAddress);
        if ((0, helpers_1.isSet)(object.chainId))
            obj.chainId = BigInt(object.chainId.toString());
        if ((0, helpers_1.isSet)(object.blockMaxGas))
            obj.blockMaxGas = BigInt(object.blockMaxGas.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => (e ? tx_1.MsgEthereumTx.toJSON(e) : undefined));
        }
        else {
            obj.txs = [];
        }
        message.traceConfig !== undefined &&
            (obj.traceConfig = message.traceConfig ? evm_1.TraceConfig.toJSON(message.traceConfig) : undefined);
        message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || BigInt(0)).toString());
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.blockTime !== undefined && (obj.blockTime = (0, helpers_1.fromTimestamp)(message.blockTime).toISOString());
        message.proposerAddress !== undefined &&
            (obj.proposerAddress = (0, helpers_1.base64FromBytes)(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = (message.chainId || BigInt(0)).toString());
        message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceBlockRequest();
        message.txs = object.txs?.map((e) => tx_1.MsgEthereumTx.fromPartial(e)) || [];
        if (object.traceConfig !== undefined && object.traceConfig !== null) {
            message.traceConfig = evm_1.TraceConfig.fromPartial(object.traceConfig);
        }
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = BigInt(object.blockNumber.toString());
        }
        message.blockHash = object.blockHash ?? "";
        if (object.blockTime !== undefined && object.blockTime !== null) {
            message.blockTime = timestamp_1.Timestamp.fromPartial(object.blockTime);
        }
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = BigInt(object.chainId.toString());
        }
        if (object.blockMaxGas !== undefined && object.blockMaxGas !== null) {
            message.blockMaxGas = BigInt(object.blockMaxGas.toString());
        }
        return message;
    },
};
function createBaseQueryTraceBlockResponse() {
    return {
        data: new Uint8Array(),
    };
}
exports.QueryTraceBlockResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTraceBlockResponse();
        if ((0, helpers_1.isSet)(object.data))
            obj.data = (0, helpers_1.bytesFromBase64)(object.data);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceBlockResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryBaseFeeRequest() {
    return {};
}
exports.QueryBaseFeeRequest = {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeRequest();
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
        const obj = createBaseQueryBaseFeeRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
};
function createBaseQueryBaseFeeResponse() {
    return {
        baseFee: "",
    };
}
exports.QueryBaseFeeResponse = {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBaseFeeResponse();
        if ((0, helpers_1.isSet)(object.baseFee))
            obj.baseFee = String(object.baseFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBaseFeeResponse();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Account = this.Account.bind(this);
        this.CosmosAccount = this.CosmosAccount.bind(this);
        this.ValidatorAccount = this.ValidatorAccount.bind(this);
        this.Balance = this.Balance.bind(this);
        this.Storage = this.Storage.bind(this);
        this.Code = this.Code.bind(this);
        this.Params = this.Params.bind(this);
        this.EthCall = this.EthCall.bind(this);
        this.EstimateGas = this.EstimateGas.bind(this);
        this.TraceTx = this.TraceTx.bind(this);
        this.TraceBlock = this.TraceBlock.bind(this);
        this.BaseFee = this.BaseFee.bind(this);
    }
    Account(request) {
        const data = exports.QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Account", data);
        return promise.then((data) => exports.QueryAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    CosmosAccount(request) {
        const data = exports.QueryCosmosAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "CosmosAccount", data);
        return promise.then((data) => exports.QueryCosmosAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    ValidatorAccount(request) {
        const data = exports.QueryValidatorAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "ValidatorAccount", data);
        return promise.then((data) => exports.QueryValidatorAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    Balance(request) {
        const data = exports.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Balance", data);
        return promise.then((data) => exports.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    Storage(request) {
        const data = exports.QueryStorageRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Storage", data);
        return promise.then((data) => exports.QueryStorageResponse.decode(new binary_1.BinaryReader(data)));
    }
    Code(request) {
        const data = exports.QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Code", data);
        return promise.then((data) => exports.QueryCodeResponse.decode(new binary_1.BinaryReader(data)));
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    EthCall(request) {
        const data = exports.EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EthCall", data);
        return promise.then((data) => tx_1.MsgEthereumTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    EstimateGas(request) {
        const data = exports.EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EstimateGas", data);
        return promise.then((data) => exports.EstimateGasResponse.decode(new binary_1.BinaryReader(data)));
    }
    TraceTx(request) {
        const data = exports.QueryTraceTxRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceTx", data);
        return promise.then((data) => exports.QueryTraceTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    TraceBlock(request) {
        const data = exports.QueryTraceBlockRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceBlock", data);
        return promise.then((data) => exports.QueryTraceBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    BaseFee(request = {}) {
        const data = exports.QueryBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "BaseFee", data);
        return promise.then((data) => exports.QueryBaseFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map