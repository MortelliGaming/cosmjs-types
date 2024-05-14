"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.TxExtension = exports.MsgSetActiveStateResponse = exports.MsgSetActiveState = exports.MsgRemoveAuthenticatorResponse = exports.MsgRemoveAuthenticator = exports.MsgAddAuthenticatorResponse = exports.MsgAddAuthenticator = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.smartaccount.v1beta1";
function createBaseMsgAddAuthenticator() {
    return {
        sender: "",
        type: "",
        data: new Uint8Array(),
    };
}
exports.MsgAddAuthenticator = {
    typeUrl: "/osmosis.smartaccount.v1beta1.MsgAddAuthenticator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAuthenticator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
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
        const obj = createBaseMsgAddAuthenticator();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.type))
            obj.type = String(object.type);
        if ((0, helpers_1.isSet)(object.data))
            obj.data = (0, helpers_1.bytesFromBase64)(object.data);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.type !== undefined && (obj.type = message.type);
        message.data !== undefined &&
            (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddAuthenticator();
        message.sender = object.sender ?? "";
        message.type = object.type ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgAddAuthenticatorResponse() {
    return {
        success: false,
    };
}
exports.MsgAddAuthenticatorResponse = {
    typeUrl: "/osmosis.smartaccount.v1beta1.MsgAddAuthenticatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAuthenticatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddAuthenticatorResponse();
        if ((0, helpers_1.isSet)(object.success))
            obj.success = Boolean(object.success);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddAuthenticatorResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function createBaseMsgRemoveAuthenticator() {
    return {
        sender: "",
        id: BigInt(0),
    };
}
exports.MsgRemoveAuthenticator = {
    typeUrl: "/osmosis.smartaccount.v1beta1.MsgRemoveAuthenticator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveAuthenticator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRemoveAuthenticator();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveAuthenticator();
        message.sender = object.sender ?? "";
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseMsgRemoveAuthenticatorResponse() {
    return {
        success: false,
    };
}
exports.MsgRemoveAuthenticatorResponse = {
    typeUrl: "/osmosis.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveAuthenticatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRemoveAuthenticatorResponse();
        if ((0, helpers_1.isSet)(object.success))
            obj.success = Boolean(object.success);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveAuthenticatorResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function createBaseMsgSetActiveState() {
    return {
        sender: "",
        active: false,
    };
}
exports.MsgSetActiveState = {
    typeUrl: "/osmosis.smartaccount.v1beta1.MsgSetActiveState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.active === true) {
            writer.uint32(16).bool(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetActiveState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.active = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetActiveState();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.active))
            obj.active = Boolean(object.active);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.active !== undefined && (obj.active = message.active);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetActiveState();
        message.sender = object.sender ?? "";
        message.active = object.active ?? false;
        return message;
    },
};
function createBaseMsgSetActiveStateResponse() {
    return {};
}
exports.MsgSetActiveStateResponse = {
    typeUrl: "/osmosis.smartaccount.v1beta1.MsgSetActiveStateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetActiveStateResponse();
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
        const obj = createBaseMsgSetActiveStateResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetActiveStateResponse();
        return message;
    },
};
function createBaseTxExtension() {
    return {
        selectedAuthenticators: [],
    };
}
exports.TxExtension = {
    typeUrl: "/osmosis.smartaccount.v1beta1.TxExtension",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.selectedAuthenticators) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxExtension();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.selectedAuthenticators.push(reader.uint64());
                        }
                    }
                    else {
                        message.selectedAuthenticators.push(reader.uint64());
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
        const obj = createBaseTxExtension();
        if (Array.isArray(object?.selectedAuthenticators))
            obj.selectedAuthenticators = object.selectedAuthenticators.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.selectedAuthenticators) {
            obj.selectedAuthenticators = message.selectedAuthenticators.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.selectedAuthenticators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxExtension();
        message.selectedAuthenticators = object.selectedAuthenticators?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.AddAuthenticator = this.AddAuthenticator.bind(this);
        this.RemoveAuthenticator = this.RemoveAuthenticator.bind(this);
        this.SetActiveState = this.SetActiveState.bind(this);
    }
    AddAuthenticator(request) {
        const data = exports.MsgAddAuthenticator.encode(request).finish();
        const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Msg", "AddAuthenticator", data);
        return promise.then((data) => exports.MsgAddAuthenticatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    RemoveAuthenticator(request) {
        const data = exports.MsgRemoveAuthenticator.encode(request).finish();
        const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Msg", "RemoveAuthenticator", data);
        return promise.then((data) => exports.MsgRemoveAuthenticatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    SetActiveState(request) {
        const data = exports.MsgSetActiveState.encode(request).finish();
        const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Msg", "SetActiveState", data);
        return promise.then((data) => exports.MsgSetActiveStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map