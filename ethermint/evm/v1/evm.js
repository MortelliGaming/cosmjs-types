"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceConfig = exports.AccessTuple = exports.TxResult = exports.Log = exports.TransactionLogs = exports.State = exports.ChainConfig = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.evm.v1";
function createBaseParams() {
    return {
        evmDenom: "",
        enableCreate: false,
        enableCall: false,
        extraEips: [],
        chainConfig: exports.ChainConfig.fromPartial({}),
        allowUnprotectedTxs: false,
        activePrecompiles: [],
        evmChannels: [],
    };
}
exports.Params = {
    typeUrl: "/ethermint.evm.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.evmDenom !== "") {
            writer.uint32(10).string(message.evmDenom);
        }
        if (message.enableCreate === true) {
            writer.uint32(16).bool(message.enableCreate);
        }
        if (message.enableCall === true) {
            writer.uint32(24).bool(message.enableCall);
        }
        writer.uint32(34).fork();
        for (const v of message.extraEips) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.chainConfig !== undefined) {
            exports.ChainConfig.encode(message.chainConfig, writer.uint32(42).fork()).ldelim();
        }
        if (message.allowUnprotectedTxs === true) {
            writer.uint32(48).bool(message.allowUnprotectedTxs);
        }
        for (const v of message.activePrecompiles) {
            writer.uint32(58).string(v);
        }
        for (const v of message.evmChannels) {
            writer.uint32(66).string(v);
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
                    message.evmDenom = reader.string();
                    break;
                case 2:
                    message.enableCreate = reader.bool();
                    break;
                case 3:
                    message.enableCall = reader.bool();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extraEips.push(reader.int64());
                        }
                    }
                    else {
                        message.extraEips.push(reader.int64());
                    }
                    break;
                case 5:
                    message.chainConfig = exports.ChainConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allowUnprotectedTxs = reader.bool();
                    break;
                case 7:
                    message.activePrecompiles.push(reader.string());
                    break;
                case 8:
                    message.evmChannels.push(reader.string());
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
        if ((0, helpers_1.isSet)(object.evmDenom))
            obj.evmDenom = String(object.evmDenom);
        if ((0, helpers_1.isSet)(object.enableCreate))
            obj.enableCreate = Boolean(object.enableCreate);
        if ((0, helpers_1.isSet)(object.enableCall))
            obj.enableCall = Boolean(object.enableCall);
        if (Array.isArray(object?.extraEips))
            obj.extraEips = object.extraEips.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.chainConfig))
            obj.chainConfig = exports.ChainConfig.fromJSON(object.chainConfig);
        if ((0, helpers_1.isSet)(object.allowUnprotectedTxs))
            obj.allowUnprotectedTxs = Boolean(object.allowUnprotectedTxs);
        if (Array.isArray(object?.activePrecompiles))
            obj.activePrecompiles = object.activePrecompiles.map((e) => String(e));
        if (Array.isArray(object?.evmChannels))
            obj.evmChannels = object.evmChannels.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.evmDenom !== undefined && (obj.evmDenom = message.evmDenom);
        message.enableCreate !== undefined && (obj.enableCreate = message.enableCreate);
        message.enableCall !== undefined && (obj.enableCall = message.enableCall);
        if (message.extraEips) {
            obj.extraEips = message.extraEips.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.extraEips = [];
        }
        message.chainConfig !== undefined &&
            (obj.chainConfig = message.chainConfig ? exports.ChainConfig.toJSON(message.chainConfig) : undefined);
        message.allowUnprotectedTxs !== undefined && (obj.allowUnprotectedTxs = message.allowUnprotectedTxs);
        if (message.activePrecompiles) {
            obj.activePrecompiles = message.activePrecompiles.map((e) => e);
        }
        else {
            obj.activePrecompiles = [];
        }
        if (message.evmChannels) {
            obj.evmChannels = message.evmChannels.map((e) => e);
        }
        else {
            obj.evmChannels = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.evmDenom = object.evmDenom ?? "";
        message.enableCreate = object.enableCreate ?? false;
        message.enableCall = object.enableCall ?? false;
        message.extraEips = object.extraEips?.map((e) => BigInt(e.toString())) || [];
        if (object.chainConfig !== undefined && object.chainConfig !== null) {
            message.chainConfig = exports.ChainConfig.fromPartial(object.chainConfig);
        }
        message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
        message.activePrecompiles = object.activePrecompiles?.map((e) => e) || [];
        message.evmChannels = object.evmChannels?.map((e) => e) || [];
        return message;
    },
};
function createBaseChainConfig() {
    return {
        homesteadBlock: "",
        daoForkBlock: "",
        daoForkSupport: false,
        eip150Block: "",
        eip150Hash: "",
        eip155Block: "",
        eip158Block: "",
        byzantiumBlock: "",
        constantinopleBlock: "",
        petersburgBlock: "",
        istanbulBlock: "",
        muirGlacierBlock: "",
        berlinBlock: "",
        londonBlock: "",
        arrowGlacierBlock: "",
        grayGlacierBlock: "",
        mergeNetsplitBlock: "",
        shanghaiBlock: "",
        cancunBlock: "",
    };
}
exports.ChainConfig = {
    typeUrl: "/ethermint.evm.v1.ChainConfig",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.homesteadBlock !== "") {
            writer.uint32(10).string(message.homesteadBlock);
        }
        if (message.daoForkBlock !== "") {
            writer.uint32(18).string(message.daoForkBlock);
        }
        if (message.daoForkSupport === true) {
            writer.uint32(24).bool(message.daoForkSupport);
        }
        if (message.eip150Block !== "") {
            writer.uint32(34).string(message.eip150Block);
        }
        if (message.eip150Hash !== "") {
            writer.uint32(42).string(message.eip150Hash);
        }
        if (message.eip155Block !== "") {
            writer.uint32(50).string(message.eip155Block);
        }
        if (message.eip158Block !== "") {
            writer.uint32(58).string(message.eip158Block);
        }
        if (message.byzantiumBlock !== "") {
            writer.uint32(66).string(message.byzantiumBlock);
        }
        if (message.constantinopleBlock !== "") {
            writer.uint32(74).string(message.constantinopleBlock);
        }
        if (message.petersburgBlock !== "") {
            writer.uint32(82).string(message.petersburgBlock);
        }
        if (message.istanbulBlock !== "") {
            writer.uint32(90).string(message.istanbulBlock);
        }
        if (message.muirGlacierBlock !== "") {
            writer.uint32(98).string(message.muirGlacierBlock);
        }
        if (message.berlinBlock !== "") {
            writer.uint32(106).string(message.berlinBlock);
        }
        if (message.londonBlock !== "") {
            writer.uint32(138).string(message.londonBlock);
        }
        if (message.arrowGlacierBlock !== "") {
            writer.uint32(146).string(message.arrowGlacierBlock);
        }
        if (message.grayGlacierBlock !== "") {
            writer.uint32(162).string(message.grayGlacierBlock);
        }
        if (message.mergeNetsplitBlock !== "") {
            writer.uint32(170).string(message.mergeNetsplitBlock);
        }
        if (message.shanghaiBlock !== "") {
            writer.uint32(178).string(message.shanghaiBlock);
        }
        if (message.cancunBlock !== "") {
            writer.uint32(186).string(message.cancunBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.homesteadBlock = reader.string();
                    break;
                case 2:
                    message.daoForkBlock = reader.string();
                    break;
                case 3:
                    message.daoForkSupport = reader.bool();
                    break;
                case 4:
                    message.eip150Block = reader.string();
                    break;
                case 5:
                    message.eip150Hash = reader.string();
                    break;
                case 6:
                    message.eip155Block = reader.string();
                    break;
                case 7:
                    message.eip158Block = reader.string();
                    break;
                case 8:
                    message.byzantiumBlock = reader.string();
                    break;
                case 9:
                    message.constantinopleBlock = reader.string();
                    break;
                case 10:
                    message.petersburgBlock = reader.string();
                    break;
                case 11:
                    message.istanbulBlock = reader.string();
                    break;
                case 12:
                    message.muirGlacierBlock = reader.string();
                    break;
                case 13:
                    message.berlinBlock = reader.string();
                    break;
                case 17:
                    message.londonBlock = reader.string();
                    break;
                case 18:
                    message.arrowGlacierBlock = reader.string();
                    break;
                case 20:
                    message.grayGlacierBlock = reader.string();
                    break;
                case 21:
                    message.mergeNetsplitBlock = reader.string();
                    break;
                case 22:
                    message.shanghaiBlock = reader.string();
                    break;
                case 23:
                    message.cancunBlock = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseChainConfig();
        if ((0, helpers_1.isSet)(object.homesteadBlock))
            obj.homesteadBlock = String(object.homesteadBlock);
        if ((0, helpers_1.isSet)(object.daoForkBlock))
            obj.daoForkBlock = String(object.daoForkBlock);
        if ((0, helpers_1.isSet)(object.daoForkSupport))
            obj.daoForkSupport = Boolean(object.daoForkSupport);
        if ((0, helpers_1.isSet)(object.eip150Block))
            obj.eip150Block = String(object.eip150Block);
        if ((0, helpers_1.isSet)(object.eip150Hash))
            obj.eip150Hash = String(object.eip150Hash);
        if ((0, helpers_1.isSet)(object.eip155Block))
            obj.eip155Block = String(object.eip155Block);
        if ((0, helpers_1.isSet)(object.eip158Block))
            obj.eip158Block = String(object.eip158Block);
        if ((0, helpers_1.isSet)(object.byzantiumBlock))
            obj.byzantiumBlock = String(object.byzantiumBlock);
        if ((0, helpers_1.isSet)(object.constantinopleBlock))
            obj.constantinopleBlock = String(object.constantinopleBlock);
        if ((0, helpers_1.isSet)(object.petersburgBlock))
            obj.petersburgBlock = String(object.petersburgBlock);
        if ((0, helpers_1.isSet)(object.istanbulBlock))
            obj.istanbulBlock = String(object.istanbulBlock);
        if ((0, helpers_1.isSet)(object.muirGlacierBlock))
            obj.muirGlacierBlock = String(object.muirGlacierBlock);
        if ((0, helpers_1.isSet)(object.berlinBlock))
            obj.berlinBlock = String(object.berlinBlock);
        if ((0, helpers_1.isSet)(object.londonBlock))
            obj.londonBlock = String(object.londonBlock);
        if ((0, helpers_1.isSet)(object.arrowGlacierBlock))
            obj.arrowGlacierBlock = String(object.arrowGlacierBlock);
        if ((0, helpers_1.isSet)(object.grayGlacierBlock))
            obj.grayGlacierBlock = String(object.grayGlacierBlock);
        if ((0, helpers_1.isSet)(object.mergeNetsplitBlock))
            obj.mergeNetsplitBlock = String(object.mergeNetsplitBlock);
        if ((0, helpers_1.isSet)(object.shanghaiBlock))
            obj.shanghaiBlock = String(object.shanghaiBlock);
        if ((0, helpers_1.isSet)(object.cancunBlock))
            obj.cancunBlock = String(object.cancunBlock);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.homesteadBlock !== undefined && (obj.homesteadBlock = message.homesteadBlock);
        message.daoForkBlock !== undefined && (obj.daoForkBlock = message.daoForkBlock);
        message.daoForkSupport !== undefined && (obj.daoForkSupport = message.daoForkSupport);
        message.eip150Block !== undefined && (obj.eip150Block = message.eip150Block);
        message.eip150Hash !== undefined && (obj.eip150Hash = message.eip150Hash);
        message.eip155Block !== undefined && (obj.eip155Block = message.eip155Block);
        message.eip158Block !== undefined && (obj.eip158Block = message.eip158Block);
        message.byzantiumBlock !== undefined && (obj.byzantiumBlock = message.byzantiumBlock);
        message.constantinopleBlock !== undefined && (obj.constantinopleBlock = message.constantinopleBlock);
        message.petersburgBlock !== undefined && (obj.petersburgBlock = message.petersburgBlock);
        message.istanbulBlock !== undefined && (obj.istanbulBlock = message.istanbulBlock);
        message.muirGlacierBlock !== undefined && (obj.muirGlacierBlock = message.muirGlacierBlock);
        message.berlinBlock !== undefined && (obj.berlinBlock = message.berlinBlock);
        message.londonBlock !== undefined && (obj.londonBlock = message.londonBlock);
        message.arrowGlacierBlock !== undefined && (obj.arrowGlacierBlock = message.arrowGlacierBlock);
        message.grayGlacierBlock !== undefined && (obj.grayGlacierBlock = message.grayGlacierBlock);
        message.mergeNetsplitBlock !== undefined && (obj.mergeNetsplitBlock = message.mergeNetsplitBlock);
        message.shanghaiBlock !== undefined && (obj.shanghaiBlock = message.shanghaiBlock);
        message.cancunBlock !== undefined && (obj.cancunBlock = message.cancunBlock);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChainConfig();
        message.homesteadBlock = object.homesteadBlock ?? "";
        message.daoForkBlock = object.daoForkBlock ?? "";
        message.daoForkSupport = object.daoForkSupport ?? false;
        message.eip150Block = object.eip150Block ?? "";
        message.eip150Hash = object.eip150Hash ?? "";
        message.eip155Block = object.eip155Block ?? "";
        message.eip158Block = object.eip158Block ?? "";
        message.byzantiumBlock = object.byzantiumBlock ?? "";
        message.constantinopleBlock = object.constantinopleBlock ?? "";
        message.petersburgBlock = object.petersburgBlock ?? "";
        message.istanbulBlock = object.istanbulBlock ?? "";
        message.muirGlacierBlock = object.muirGlacierBlock ?? "";
        message.berlinBlock = object.berlinBlock ?? "";
        message.londonBlock = object.londonBlock ?? "";
        message.arrowGlacierBlock = object.arrowGlacierBlock ?? "";
        message.grayGlacierBlock = object.grayGlacierBlock ?? "";
        message.mergeNetsplitBlock = object.mergeNetsplitBlock ?? "";
        message.shanghaiBlock = object.shanghaiBlock ?? "";
        message.cancunBlock = object.cancunBlock ?? "";
        return message;
    },
};
function createBaseState() {
    return {
        key: "",
        value: "",
    };
}
exports.State = {
    typeUrl: "/ethermint.evm.v1.State",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
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
        const obj = createBaseState();
        if ((0, helpers_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_1.isSet)(object.value))
            obj.value = String(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseState();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseTransactionLogs() {
    return {
        hash: "",
        logs: [],
    };
}
exports.TransactionLogs = {
    typeUrl: "/ethermint.evm.v1.TransactionLogs",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            exports.Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransactionLogs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(exports.Log.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTransactionLogs();
        if ((0, helpers_1.isSet)(object.hash))
            obj.hash = String(object.hash);
        if (Array.isArray(object?.logs))
            obj.logs = object.logs.map((e) => exports.Log.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? exports.Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransactionLogs();
        message.hash = object.hash ?? "";
        message.logs = object.logs?.map((e) => exports.Log.fromPartial(e)) || [];
        return message;
    },
};
function createBaseLog() {
    return {
        address: "",
        topics: [],
        data: new Uint8Array(),
        blockNumber: BigInt(0),
        txHash: "",
        txIndex: BigInt(0),
        blockHash: "",
        index: BigInt(0),
        removed: false,
    };
}
exports.Log = {
    typeUrl: "/ethermint.evm.v1.Log",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.topics) {
            writer.uint32(18).string(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.blockNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.blockNumber);
        }
        if (message.txHash !== "") {
            writer.uint32(42).string(message.txHash);
        }
        if (message.txIndex !== BigInt(0)) {
            writer.uint32(48).uint64(message.txIndex);
        }
        if (message.blockHash !== "") {
            writer.uint32(58).string(message.blockHash);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(64).uint64(message.index);
        }
        if (message.removed === true) {
            writer.uint32(72).bool(message.removed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.topics.push(reader.string());
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.blockNumber = reader.uint64();
                    break;
                case 5:
                    message.txHash = reader.string();
                    break;
                case 6:
                    message.txIndex = reader.uint64();
                    break;
                case 7:
                    message.blockHash = reader.string();
                    break;
                case 8:
                    message.index = reader.uint64();
                    break;
                case 9:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLog();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if (Array.isArray(object?.topics))
            obj.topics = object.topics.map((e) => String(e));
        if ((0, helpers_1.isSet)(object.data))
            obj.data = (0, helpers_1.bytesFromBase64)(object.data);
        if ((0, helpers_1.isSet)(object.blockNumber))
            obj.blockNumber = BigInt(object.blockNumber.toString());
        if ((0, helpers_1.isSet)(object.txHash))
            obj.txHash = String(object.txHash);
        if ((0, helpers_1.isSet)(object.txIndex))
            obj.txIndex = BigInt(object.txIndex.toString());
        if ((0, helpers_1.isSet)(object.blockHash))
            obj.blockHash = String(object.blockHash);
        if ((0, helpers_1.isSet)(object.index))
            obj.index = BigInt(object.index.toString());
        if ((0, helpers_1.isSet)(object.removed))
            obj.removed = Boolean(object.removed);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.topics) {
            obj.topics = message.topics.map((e) => e);
        }
        else {
            obj.topics = [];
        }
        message.data !== undefined &&
            (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || BigInt(0)).toString());
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.txIndex !== undefined && (obj.txIndex = (message.txIndex || BigInt(0)).toString());
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.removed !== undefined && (obj.removed = message.removed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLog();
        message.address = object.address ?? "";
        message.topics = object.topics?.map((e) => e) || [];
        message.data = object.data ?? new Uint8Array();
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = BigInt(object.blockNumber.toString());
        }
        message.txHash = object.txHash ?? "";
        if (object.txIndex !== undefined && object.txIndex !== null) {
            message.txIndex = BigInt(object.txIndex.toString());
        }
        message.blockHash = object.blockHash ?? "";
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index.toString());
        }
        message.removed = object.removed ?? false;
        return message;
    },
};
function createBaseTxResult() {
    return {
        contractAddress: "",
        bloom: new Uint8Array(),
        txLogs: exports.TransactionLogs.fromPartial({}),
        ret: new Uint8Array(),
        reverted: false,
        gasUsed: BigInt(0),
    };
}
exports.TxResult = {
    typeUrl: "/ethermint.evm.v1.TxResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.bloom.length !== 0) {
            writer.uint32(18).bytes(message.bloom);
        }
        if (message.txLogs !== undefined) {
            exports.TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(34).bytes(message.ret);
        }
        if (message.reverted === true) {
            writer.uint32(40).bool(message.reverted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.bloom = reader.bytes();
                    break;
                case 3:
                    message.txLogs = exports.TransactionLogs.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ret = reader.bytes();
                    break;
                case 5:
                    message.reverted = reader.bool();
                    break;
                case 6:
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
        const obj = createBaseTxResult();
        if ((0, helpers_1.isSet)(object.contractAddress))
            obj.contractAddress = String(object.contractAddress);
        if ((0, helpers_1.isSet)(object.bloom))
            obj.bloom = (0, helpers_1.bytesFromBase64)(object.bloom);
        if ((0, helpers_1.isSet)(object.txLogs))
            obj.txLogs = exports.TransactionLogs.fromJSON(object.txLogs);
        if ((0, helpers_1.isSet)(object.ret))
            obj.ret = (0, helpers_1.bytesFromBase64)(object.ret);
        if ((0, helpers_1.isSet)(object.reverted))
            obj.reverted = Boolean(object.reverted);
        if ((0, helpers_1.isSet)(object.gasUsed))
            obj.gasUsed = BigInt(object.gasUsed.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.bloom !== undefined &&
            (obj.bloom = (0, helpers_1.base64FromBytes)(message.bloom !== undefined ? message.bloom : new Uint8Array()));
        message.txLogs !== undefined &&
            (obj.txLogs = message.txLogs ? exports.TransactionLogs.toJSON(message.txLogs) : undefined);
        message.ret !== undefined &&
            (obj.ret = (0, helpers_1.base64FromBytes)(message.ret !== undefined ? message.ret : new Uint8Array()));
        message.reverted !== undefined && (obj.reverted = message.reverted);
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.contractAddress = object.contractAddress ?? "";
        message.bloom = object.bloom ?? new Uint8Array();
        if (object.txLogs !== undefined && object.txLogs !== null) {
            message.txLogs = exports.TransactionLogs.fromPartial(object.txLogs);
        }
        message.ret = object.ret ?? new Uint8Array();
        message.reverted = object.reverted ?? false;
        if (object.gasUsed !== undefined && object.gasUsed !== null) {
            message.gasUsed = BigInt(object.gasUsed.toString());
        }
        return message;
    },
};
function createBaseAccessTuple() {
    return {
        address: "",
        storageKeys: [],
    };
}
exports.AccessTuple = {
    typeUrl: "/ethermint.evm.v1.AccessTuple",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.storageKeys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTuple();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.storageKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAccessTuple();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        if (Array.isArray(object?.storageKeys))
            obj.storageKeys = object.storageKeys.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.storageKeys) {
            obj.storageKeys = message.storageKeys.map((e) => e);
        }
        else {
            obj.storageKeys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccessTuple();
        message.address = object.address ?? "";
        message.storageKeys = object.storageKeys?.map((e) => e) || [];
        return message;
    },
};
function createBaseTraceConfig() {
    return {
        tracer: "",
        timeout: "",
        reexec: BigInt(0),
        disableStack: false,
        disableStorage: false,
        debug: false,
        limit: 0,
        overrides: undefined,
        enableMemory: false,
        enableReturnData: false,
        tracerJsonConfig: "",
    };
}
exports.TraceConfig = {
    typeUrl: "/ethermint.evm.v1.TraceConfig",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tracer !== "") {
            writer.uint32(10).string(message.tracer);
        }
        if (message.timeout !== "") {
            writer.uint32(18).string(message.timeout);
        }
        if (message.reexec !== BigInt(0)) {
            writer.uint32(24).uint64(message.reexec);
        }
        if (message.disableStack === true) {
            writer.uint32(40).bool(message.disableStack);
        }
        if (message.disableStorage === true) {
            writer.uint32(48).bool(message.disableStorage);
        }
        if (message.debug === true) {
            writer.uint32(64).bool(message.debug);
        }
        if (message.limit !== 0) {
            writer.uint32(72).int32(message.limit);
        }
        if (message.overrides !== undefined) {
            exports.ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
        }
        if (message.enableMemory === true) {
            writer.uint32(88).bool(message.enableMemory);
        }
        if (message.enableReturnData === true) {
            writer.uint32(96).bool(message.enableReturnData);
        }
        if (message.tracerJsonConfig !== "") {
            writer.uint32(106).string(message.tracerJsonConfig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTraceConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tracer = reader.string();
                    break;
                case 2:
                    message.timeout = reader.string();
                    break;
                case 3:
                    message.reexec = reader.uint64();
                    break;
                case 5:
                    message.disableStack = reader.bool();
                    break;
                case 6:
                    message.disableStorage = reader.bool();
                    break;
                case 8:
                    message.debug = reader.bool();
                    break;
                case 9:
                    message.limit = reader.int32();
                    break;
                case 10:
                    message.overrides = exports.ChainConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.enableMemory = reader.bool();
                    break;
                case 12:
                    message.enableReturnData = reader.bool();
                    break;
                case 13:
                    message.tracerJsonConfig = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTraceConfig();
        if ((0, helpers_1.isSet)(object.tracer))
            obj.tracer = String(object.tracer);
        if ((0, helpers_1.isSet)(object.timeout))
            obj.timeout = String(object.timeout);
        if ((0, helpers_1.isSet)(object.reexec))
            obj.reexec = BigInt(object.reexec.toString());
        if ((0, helpers_1.isSet)(object.disableStack))
            obj.disableStack = Boolean(object.disableStack);
        if ((0, helpers_1.isSet)(object.disableStorage))
            obj.disableStorage = Boolean(object.disableStorage);
        if ((0, helpers_1.isSet)(object.debug))
            obj.debug = Boolean(object.debug);
        if ((0, helpers_1.isSet)(object.limit))
            obj.limit = Number(object.limit);
        if ((0, helpers_1.isSet)(object.overrides))
            obj.overrides = exports.ChainConfig.fromJSON(object.overrides);
        if ((0, helpers_1.isSet)(object.enableMemory))
            obj.enableMemory = Boolean(object.enableMemory);
        if ((0, helpers_1.isSet)(object.enableReturnData))
            obj.enableReturnData = Boolean(object.enableReturnData);
        if ((0, helpers_1.isSet)(object.tracerJsonConfig))
            obj.tracerJsonConfig = String(object.tracerJsonConfig);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tracer !== undefined && (obj.tracer = message.tracer);
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.reexec !== undefined && (obj.reexec = (message.reexec || BigInt(0)).toString());
        message.disableStack !== undefined && (obj.disableStack = message.disableStack);
        message.disableStorage !== undefined && (obj.disableStorage = message.disableStorage);
        message.debug !== undefined && (obj.debug = message.debug);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.overrides !== undefined &&
            (obj.overrides = message.overrides ? exports.ChainConfig.toJSON(message.overrides) : undefined);
        message.enableMemory !== undefined && (obj.enableMemory = message.enableMemory);
        message.enableReturnData !== undefined && (obj.enableReturnData = message.enableReturnData);
        message.tracerJsonConfig !== undefined && (obj.tracerJsonConfig = message.tracerJsonConfig);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTraceConfig();
        message.tracer = object.tracer ?? "";
        message.timeout = object.timeout ?? "";
        if (object.reexec !== undefined && object.reexec !== null) {
            message.reexec = BigInt(object.reexec.toString());
        }
        message.disableStack = object.disableStack ?? false;
        message.disableStorage = object.disableStorage ?? false;
        message.debug = object.debug ?? false;
        message.limit = object.limit ?? 0;
        if (object.overrides !== undefined && object.overrides !== null) {
            message.overrides = exports.ChainConfig.fromPartial(object.overrides);
        }
        message.enableMemory = object.enableMemory ?? false;
        message.enableReturnData = object.enableReturnData ?? false;
        message.tracerJsonConfig = object.tracerJsonConfig ?? "";
        return message;
    },
};
//# sourceMappingURL=evm.js.map