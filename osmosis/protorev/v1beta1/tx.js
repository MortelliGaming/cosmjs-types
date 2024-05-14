"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSetBaseDenomsResponse = exports.MsgSetBaseDenoms = exports.MsgSetMaxPoolPointsPerBlockResponse = exports.MsgSetMaxPoolPointsPerBlock = exports.MsgSetMaxPoolPointsPerTxResponse = exports.MsgSetMaxPoolPointsPerTx = exports.MsgSetInfoByPoolTypeResponse = exports.MsgSetInfoByPoolType = exports.MsgSetDeveloperAccountResponse = exports.MsgSetDeveloperAccount = exports.MsgSetHotRoutesResponse = exports.MsgSetHotRoutes = exports.protobufPackage = void 0;
/* eslint-disable */
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.protorev.v1beta1";
function createBaseMsgSetHotRoutes() {
    return {
        admin: "",
        hotRoutes: [],
    };
}
exports.MsgSetHotRoutes = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.hotRoutes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.hotRoutes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetHotRoutes();
        if ((0, helpers_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        if (Array.isArray(object?.hotRoutes))
            obj.hotRoutes = object.hotRoutes.map((e) => protorev_1.TokenPairArbRoutes.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.hotRoutes) {
            obj.hotRoutes = message.hotRoutes.map((e) => (e ? protorev_1.TokenPairArbRoutes.toJSON(e) : undefined));
        }
        else {
            obj.hotRoutes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetHotRoutes();
        message.admin = object.admin ?? "";
        message.hotRoutes = object.hotRoutes?.map((e) => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSetHotRoutesResponse() {
    return {};
}
exports.MsgSetHotRoutesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutesResponse();
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
        const obj = createBaseMsgSetHotRoutesResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetHotRoutesResponse();
        return message;
    },
};
function createBaseMsgSetDeveloperAccount() {
    return {
        admin: "",
        developerAccount: "",
    };
}
exports.MsgSetDeveloperAccount = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.developerAccount !== "") {
            writer.uint32(18).string(message.developerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.developerAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetDeveloperAccount();
        if ((0, helpers_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        if ((0, helpers_1.isSet)(object.developerAccount))
            obj.developerAccount = String(object.developerAccount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDeveloperAccount();
        message.admin = object.admin ?? "";
        message.developerAccount = object.developerAccount ?? "";
        return message;
    },
};
function createBaseMsgSetDeveloperAccountResponse() {
    return {};
}
exports.MsgSetDeveloperAccountResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccountResponse();
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
        const obj = createBaseMsgSetDeveloperAccountResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetDeveloperAccountResponse();
        return message;
    },
};
function createBaseMsgSetInfoByPoolType() {
    return {
        admin: "",
        infoByPoolType: protorev_1.InfoByPoolType.fromPartial({}),
    };
}
exports.MsgSetInfoByPoolType = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.infoByPoolType !== undefined) {
            protorev_1.InfoByPoolType.encode(message.infoByPoolType, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetInfoByPoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.infoByPoolType = protorev_1.InfoByPoolType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetInfoByPoolType();
        if ((0, helpers_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        if ((0, helpers_1.isSet)(object.infoByPoolType))
            obj.infoByPoolType = protorev_1.InfoByPoolType.fromJSON(object.infoByPoolType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.infoByPoolType !== undefined &&
            (obj.infoByPoolType = message.infoByPoolType
                ? protorev_1.InfoByPoolType.toJSON(message.infoByPoolType)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetInfoByPoolType();
        message.admin = object.admin ?? "";
        if (object.infoByPoolType !== undefined && object.infoByPoolType !== null) {
            message.infoByPoolType = protorev_1.InfoByPoolType.fromPartial(object.infoByPoolType);
        }
        return message;
    },
};
function createBaseMsgSetInfoByPoolTypeResponse() {
    return {};
}
exports.MsgSetInfoByPoolTypeResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetInfoByPoolTypeResponse();
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
        const obj = createBaseMsgSetInfoByPoolTypeResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetInfoByPoolTypeResponse();
        return message;
    },
};
function createBaseMsgSetMaxPoolPointsPerTx() {
    return {
        admin: "",
        maxPoolPointsPerTx: BigInt(0),
    };
}
exports.MsgSetMaxPoolPointsPerTx = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxPoolPointsPerTx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.maxPoolPointsPerTx = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetMaxPoolPointsPerTx();
        if ((0, helpers_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        if ((0, helpers_1.isSet)(object.maxPoolPointsPerTx))
            obj.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.maxPoolPointsPerTx !== undefined &&
            (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetMaxPoolPointsPerTx();
        message.admin = object.admin ?? "";
        if (object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null) {
            message.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
        }
        return message;
    },
};
function createBaseMsgSetMaxPoolPointsPerTxResponse() {
    return {};
}
exports.MsgSetMaxPoolPointsPerTxResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
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
        const obj = createBaseMsgSetMaxPoolPointsPerTxResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
        return message;
    },
};
function createBaseMsgSetMaxPoolPointsPerBlock() {
    return {
        admin: "",
        maxPoolPointsPerBlock: BigInt(0),
    };
}
exports.MsgSetMaxPoolPointsPerBlock = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.maxPoolPointsPerBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetMaxPoolPointsPerBlock();
        if ((0, helpers_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        if ((0, helpers_1.isSet)(object.maxPoolPointsPerBlock))
            obj.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.maxPoolPointsPerBlock !== undefined &&
            (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetMaxPoolPointsPerBlock();
        message.admin = object.admin ?? "";
        if (object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null) {
            message.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
        }
        return message;
    },
};
function createBaseMsgSetMaxPoolPointsPerBlockResponse() {
    return {};
}
exports.MsgSetMaxPoolPointsPerBlockResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
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
        const obj = createBaseMsgSetMaxPoolPointsPerBlockResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
        return message;
    },
};
function createBaseMsgSetBaseDenoms() {
    return {
        admin: "",
        baseDenoms: [],
    };
}
exports.MsgSetBaseDenoms = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.baseDenoms) {
            protorev_1.BaseDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBaseDenoms();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.baseDenoms.push(protorev_1.BaseDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetBaseDenoms();
        if ((0, helpers_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        if (Array.isArray(object?.baseDenoms))
            obj.baseDenoms = object.baseDenoms.map((e) => protorev_1.BaseDenom.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.baseDenoms) {
            obj.baseDenoms = message.baseDenoms.map((e) => (e ? protorev_1.BaseDenom.toJSON(e) : undefined));
        }
        else {
            obj.baseDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetBaseDenoms();
        message.admin = object.admin ?? "";
        message.baseDenoms = object.baseDenoms?.map((e) => protorev_1.BaseDenom.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSetBaseDenomsResponse() {
    return {};
}
exports.MsgSetBaseDenomsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBaseDenomsResponse();
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
        const obj = createBaseMsgSetBaseDenomsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetBaseDenomsResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SetHotRoutes = this.SetHotRoutes.bind(this);
        this.SetDeveloperAccount = this.SetDeveloperAccount.bind(this);
        this.SetMaxPoolPointsPerTx = this.SetMaxPoolPointsPerTx.bind(this);
        this.SetMaxPoolPointsPerBlock = this.SetMaxPoolPointsPerBlock.bind(this);
        this.SetInfoByPoolType = this.SetInfoByPoolType.bind(this);
        this.SetBaseDenoms = this.SetBaseDenoms.bind(this);
    }
    SetHotRoutes(request) {
        const data = exports.MsgSetHotRoutes.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetHotRoutes", data);
        return promise.then((data) => exports.MsgSetHotRoutesResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetDeveloperAccount(request) {
        const data = exports.MsgSetDeveloperAccount.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetDeveloperAccount", data);
        return promise.then((data) => exports.MsgSetDeveloperAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetMaxPoolPointsPerTx(request) {
        const data = exports.MsgSetMaxPoolPointsPerTx.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetMaxPoolPointsPerTx", data);
        return promise.then((data) => exports.MsgSetMaxPoolPointsPerTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetMaxPoolPointsPerBlock(request) {
        const data = exports.MsgSetMaxPoolPointsPerBlock.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetMaxPoolPointsPerBlock", data);
        return promise.then((data) => exports.MsgSetMaxPoolPointsPerBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetInfoByPoolType(request) {
        const data = exports.MsgSetInfoByPoolType.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetInfoByPoolType", data);
        return promise.then((data) => exports.MsgSetInfoByPoolTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetBaseDenoms(request) {
        const data = exports.MsgSetBaseDenoms.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetBaseDenoms", data);
        return promise.then((data) => exports.MsgSetBaseDenomsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map