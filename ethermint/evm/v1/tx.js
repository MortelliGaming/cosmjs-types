"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgEthereumTxResponse = exports.ExtensionOptionsEthereumTx = exports.DynamicFeeTx = exports.AccessListTx = exports.LegacyTx = exports.MsgEthereumTx = exports.protobufPackage = void 0;
/* eslint-disable */
const any_1 = require("../../../google/protobuf/any");
const evm_1 = require("./evm");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.evm.v1";
function createBaseMsgEthereumTx() {
    return {
        data: undefined,
        size: 0,
        hash: "",
        from: "",
    };
}
exports.MsgEthereumTx = {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(17).double(message.size);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        if (message.from !== "") {
            writer.uint32(34).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEthereumTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.size = reader.double();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                case 4:
                    message.from = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgEthereumTx();
        if ((0, helpers_1.isSet)(object.data))
            obj.data = any_1.Any.fromJSON(object.data);
        if ((0, helpers_1.isSet)(object.size))
            obj.size = Number(object.size);
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = String(object.hash);
        if ((0, helpers_1.isSet)(object.from))
            obj.from = String(object.from);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.size !== undefined && (obj.size = message.size);
        message.hash !== undefined && (obj.hash = message.hash);
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEthereumTx();
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromPartial(object.data);
        }
        message.size = object.size ?? 0;
        message.hash = object.hash ?? "";
        message.from = object.from ?? "";
        return message;
    },
};
function createBaseLegacyTx() {
    return {
        nonce: BigInt(0),
        gasPrice: "",
        gas: BigInt(0),
        to: "",
        value: "",
        data: new Uint8Array(),
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array(),
    };
}
exports.LegacyTx = {
    typeUrl: "/ethermint.evm.v1.LegacyTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.gasPrice !== "") {
            writer.uint32(18).string(message.gasPrice);
        }
        if (message.gas !== BigInt(0)) {
            writer.uint32(24).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(34).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(42).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.v.length !== 0) {
            writer.uint32(58).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(66).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(74).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.gasPrice = reader.string();
                    break;
                case 3:
                    message.gas = reader.uint64();
                    break;
                case 4:
                    message.to = reader.string();
                    break;
                case 5:
                    message.value = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.v = reader.bytes();
                    break;
                case 8:
                    message.r = reader.bytes();
                    break;
                case 9:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLegacyTx();
        if ((0, helpers_1.isSet)(object.nonce))
            obj.nonce = BigInt(object.nonce.toString());
        if ((0, helpers_1.isSet)(object.gasPrice))
            obj.gasPrice = String(object.gasPrice);
        if ((0, helpers_1.isSet)(object.gas))
            obj.gas = BigInt(object.gas.toString());
        if ((0, helpers_1.isSet)(object.to))
            obj.to = String(object.to);
        if ((0, helpers_1.isSet)(object.value))
            obj.value = String(object.value);
        if ((0, helpers_1.isSet)(object.data))
            obj.data = (0, helpers_1.bytesFromBase64)(object.data);
        if ((0, helpers_1.isSet)(object.v))
            obj.v = (0, helpers_1.bytesFromBase64)(object.v);
        if ((0, helpers_1.isSet)(object.r))
            obj.r = (0, helpers_1.bytesFromBase64)(object.r);
        if ((0, helpers_1.isSet)(object.s))
            obj.s = (0, helpers_1.bytesFromBase64)(object.s);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
        message.gas !== undefined && (obj.gas = (message.gas || BigInt(0)).toString());
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined &&
            (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.v !== undefined &&
            (obj.v = (0, helpers_1.base64FromBytes)(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined &&
            (obj.r = (0, helpers_1.base64FromBytes)(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined &&
            (obj.s = (0, helpers_1.base64FromBytes)(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLegacyTx();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce.toString());
        }
        message.gasPrice = object.gasPrice ?? "";
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas.toString());
        }
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
};
function createBaseAccessListTx() {
    return {
        chainId: "",
        nonce: BigInt(0),
        gasPrice: "",
        gas: BigInt(0),
        to: "",
        value: "",
        data: new Uint8Array(),
        accesses: [],
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array(),
    };
}
exports.AccessListTx = {
    typeUrl: "/ethermint.evm.v1.AccessListTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gasPrice !== "") {
            writer.uint32(26).string(message.gasPrice);
        }
        if (message.gas !== BigInt(0)) {
            writer.uint32(32).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(42).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(58).bytes(message.data);
        }
        for (const v of message.accesses) {
            evm_1.AccessTuple.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(74).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(82).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(90).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessListTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.gasPrice = reader.string();
                    break;
                case 4:
                    message.gas = reader.uint64();
                    break;
                case 5:
                    message.to = reader.string();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.data = reader.bytes();
                    break;
                case 8:
                    message.accesses.push(evm_1.AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.v = reader.bytes();
                    break;
                case 10:
                    message.r = reader.bytes();
                    break;
                case 11:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccessListTx();
        if ((0, helpers_1.isSet)(object.chainId))
            obj.chainId = String(object.chainId);
        if ((0, helpers_1.isSet)(object.nonce))
            obj.nonce = BigInt(object.nonce.toString());
        if ((0, helpers_1.isSet)(object.gasPrice))
            obj.gasPrice = String(object.gasPrice);
        if ((0, helpers_1.isSet)(object.gas))
            obj.gas = BigInt(object.gas.toString());
        if ((0, helpers_1.isSet)(object.to))
            obj.to = String(object.to);
        if ((0, helpers_1.isSet)(object.value))
            obj.value = String(object.value);
        if ((0, helpers_1.isSet)(object.data))
            obj.data = (0, helpers_1.bytesFromBase64)(object.data);
        if (Array.isArray(object?.accesses))
            obj.accesses = object.accesses.map((e) => evm_1.AccessTuple.fromJSON(e));
        if ((0, helpers_1.isSet)(object.v))
            obj.v = (0, helpers_1.bytesFromBase64)(object.v);
        if ((0, helpers_1.isSet)(object.r))
            obj.r = (0, helpers_1.bytesFromBase64)(object.r);
        if ((0, helpers_1.isSet)(object.s))
            obj.s = (0, helpers_1.bytesFromBase64)(object.s);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
        message.gas !== undefined && (obj.gas = (message.gas || BigInt(0)).toString());
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined &&
            (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        if (message.accesses) {
            obj.accesses = message.accesses.map((e) => (e ? evm_1.AccessTuple.toJSON(e) : undefined));
        }
        else {
            obj.accesses = [];
        }
        message.v !== undefined &&
            (obj.v = (0, helpers_1.base64FromBytes)(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined &&
            (obj.r = (0, helpers_1.base64FromBytes)(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined &&
            (obj.s = (0, helpers_1.base64FromBytes)(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccessListTx();
        message.chainId = object.chainId ?? "";
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce.toString());
        }
        message.gasPrice = object.gasPrice ?? "";
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas.toString());
        }
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.accesses = object.accesses?.map((e) => evm_1.AccessTuple.fromPartial(e)) || [];
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
};
function createBaseDynamicFeeTx() {
    return {
        chainId: "",
        nonce: BigInt(0),
        gasTipCap: "",
        gasFeeCap: "",
        gas: BigInt(0),
        to: "",
        value: "",
        data: new Uint8Array(),
        accesses: [],
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array(),
    };
}
exports.DynamicFeeTx = {
    typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gasTipCap !== "") {
            writer.uint32(26).string(message.gasTipCap);
        }
        if (message.gasFeeCap !== "") {
            writer.uint32(34).string(message.gasFeeCap);
        }
        if (message.gas !== BigInt(0)) {
            writer.uint32(40).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(50).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(58).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(66).bytes(message.data);
        }
        for (const v of message.accesses) {
            evm_1.AccessTuple.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(82).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(90).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(98).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDynamicFeeTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.gasTipCap = reader.string();
                    break;
                case 4:
                    message.gasFeeCap = reader.string();
                    break;
                case 5:
                    message.gas = reader.uint64();
                    break;
                case 6:
                    message.to = reader.string();
                    break;
                case 7:
                    message.value = reader.string();
                    break;
                case 8:
                    message.data = reader.bytes();
                    break;
                case 9:
                    message.accesses.push(evm_1.AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.v = reader.bytes();
                    break;
                case 11:
                    message.r = reader.bytes();
                    break;
                case 12:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDynamicFeeTx();
        if ((0, helpers_1.isSet)(object.chainId))
            obj.chainId = String(object.chainId);
        if ((0, helpers_1.isSet)(object.nonce))
            obj.nonce = BigInt(object.nonce.toString());
        if ((0, helpers_1.isSet)(object.gasTipCap))
            obj.gasTipCap = String(object.gasTipCap);
        if ((0, helpers_1.isSet)(object.gasFeeCap))
            obj.gasFeeCap = String(object.gasFeeCap);
        if ((0, helpers_1.isSet)(object.gas))
            obj.gas = BigInt(object.gas.toString());
        if ((0, helpers_1.isSet)(object.to))
            obj.to = String(object.to);
        if ((0, helpers_1.isSet)(object.value))
            obj.value = String(object.value);
        if ((0, helpers_1.isSet)(object.data))
            obj.data = (0, helpers_1.bytesFromBase64)(object.data);
        if (Array.isArray(object?.accesses))
            obj.accesses = object.accesses.map((e) => evm_1.AccessTuple.fromJSON(e));
        if ((0, helpers_1.isSet)(object.v))
            obj.v = (0, helpers_1.bytesFromBase64)(object.v);
        if ((0, helpers_1.isSet)(object.r))
            obj.r = (0, helpers_1.bytesFromBase64)(object.r);
        if ((0, helpers_1.isSet)(object.s))
            obj.s = (0, helpers_1.bytesFromBase64)(object.s);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.gasTipCap !== undefined && (obj.gasTipCap = message.gasTipCap);
        message.gasFeeCap !== undefined && (obj.gasFeeCap = message.gasFeeCap);
        message.gas !== undefined && (obj.gas = (message.gas || BigInt(0)).toString());
        message.to !== undefined && (obj.to = message.to);
        message.value !== undefined && (obj.value = message.value);
        message.data !== undefined &&
            (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        if (message.accesses) {
            obj.accesses = message.accesses.map((e) => (e ? evm_1.AccessTuple.toJSON(e) : undefined));
        }
        else {
            obj.accesses = [];
        }
        message.v !== undefined &&
            (obj.v = (0, helpers_1.base64FromBytes)(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined &&
            (obj.r = (0, helpers_1.base64FromBytes)(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined &&
            (obj.s = (0, helpers_1.base64FromBytes)(message.s !== undefined ? message.s : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDynamicFeeTx();
        message.chainId = object.chainId ?? "";
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce.toString());
        }
        message.gasTipCap = object.gasTipCap ?? "";
        message.gasFeeCap = object.gasFeeCap ?? "";
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas.toString());
        }
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.accesses = object.accesses?.map((e) => evm_1.AccessTuple.fromPartial(e)) || [];
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
};
function createBaseExtensionOptionsEthereumTx() {
    return {};
}
exports.ExtensionOptionsEthereumTx = {
    typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsEthereumTx();
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
        const obj = createBaseExtensionOptionsEthereumTx();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseExtensionOptionsEthereumTx();
        return message;
    },
};
function createBaseMsgEthereumTxResponse() {
    return {
        hash: "",
        logs: [],
        ret: new Uint8Array(),
        vmError: "",
        gasUsed: BigInt(0),
    };
}
exports.MsgEthereumTxResponse = {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            evm_1.Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(26).bytes(message.ret);
        }
        if (message.vmError !== "") {
            writer.uint32(34).string(message.vmError);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(40).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEthereumTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(evm_1.Log.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ret = reader.bytes();
                    break;
                case 4:
                    message.vmError = reader.string();
                    break;
                case 5:
                    message.gasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgEthereumTxResponse();
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = String(object.hash);
        if (Array.isArray(object?.logs))
            obj.logs = object.logs.map((e) => evm_1.Log.fromJSON(e));
        if ((0, helpers_1.isSet)(object.ret))
            obj.ret = (0, helpers_1.bytesFromBase64)(object.ret);
        if ((0, helpers_1.isSet)(object.vmError))
            obj.vmError = String(object.vmError);
        if ((0, helpers_1.isSet)(object.gasUsed))
            obj.gasUsed = BigInt(object.gasUsed.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? evm_1.Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        message.ret !== undefined &&
            (obj.ret = (0, helpers_1.base64FromBytes)(message.ret !== undefined ? message.ret : new Uint8Array()));
        message.vmError !== undefined && (obj.vmError = message.vmError);
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEthereumTxResponse();
        message.hash = object.hash ?? "";
        message.logs = object.logs?.map((e) => evm_1.Log.fromPartial(e)) || [];
        message.ret = object.ret ?? new Uint8Array();
        message.vmError = object.vmError ?? "";
        if (object.gasUsed !== undefined && object.gasUsed !== null) {
            message.gasUsed = BigInt(object.gasUsed.toString());
        }
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: evm_1.Params.fromPartial({}),
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            evm_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const obj = createBaseMsgUpdateParams();
        if ((0, helpers_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_1.isSet)(object.params))
            obj.params = evm_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? evm_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const obj = createBaseMsgUpdateParamsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.EthereumTx = this.EthereumTx.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    EthereumTx(request) {
        const data = exports.MsgEthereumTx.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Msg", "EthereumTx", data);
        return promise.then((data) => exports.MsgEthereumTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Msg", "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map