"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgChangeOwnerResponse = exports.MsgChangeOwner = exports.MsgBurnResponse = exports.MsgBurn = exports.MsgMintResponse = exports.MsgMint = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "mineplex.mineplexchain.treasury";
function createBaseMsgMint() {
    return {
        creator: "",
        amount: "",
    };
}
exports.MsgMint = {
    typeUrl: "/mineplex.mineplexchain.treasury.MsgMint",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgMint();
        if ((0, helpers_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.creator = object.creator ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
};
function createBaseMsgMintResponse() {
    return {};
}
exports.MsgMintResponse = {
    typeUrl: "/mineplex.mineplexchain.treasury.MsgMintResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintResponse();
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
        const obj = createBaseMsgMintResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgMintResponse();
        return message;
    },
};
function createBaseMsgBurn() {
    return {
        creator: "",
        amount: "",
    };
}
exports.MsgBurn = {
    typeUrl: "/mineplex.mineplexchain.treasury.MsgBurn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgBurn();
        if ((0, helpers_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.creator = object.creator ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
};
function createBaseMsgBurnResponse() {
    return {};
}
exports.MsgBurnResponse = {
    typeUrl: "/mineplex.mineplexchain.treasury.MsgBurnResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnResponse();
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
        const obj = createBaseMsgBurnResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgBurnResponse();
        return message;
    },
};
function createBaseMsgChangeOwner() {
    return {
        creator: "",
        newOwner: "",
    };
}
exports.MsgChangeOwner = {
    typeUrl: "/mineplex.mineplexchain.treasury.MsgChangeOwner",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.newOwner !== "") {
            writer.uint32(18).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.newOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgChangeOwner();
        if ((0, helpers_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_1.isSet)(object.newOwner))
            obj.newOwner = String(object.newOwner);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeOwner();
        message.creator = object.creator ?? "";
        message.newOwner = object.newOwner ?? "";
        return message;
    },
};
function createBaseMsgChangeOwnerResponse() {
    return {};
}
exports.MsgChangeOwnerResponse = {
    typeUrl: "/mineplex.mineplexchain.treasury.MsgChangeOwnerResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeOwnerResponse();
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
        const obj = createBaseMsgChangeOwnerResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgChangeOwnerResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Mint = this.Mint.bind(this);
        this.Burn = this.Burn.bind(this);
        this.ChangeOwner = this.ChangeOwner.bind(this);
    }
    Mint(request) {
        const data = exports.MsgMint.encode(request).finish();
        const promise = this.rpc.request("mineplex.mineplexchain.treasury.Msg", "Mint", data);
        return promise.then((data) => exports.MsgMintResponse.decode(new binary_1.BinaryReader(data)));
    }
    Burn(request) {
        const data = exports.MsgBurn.encode(request).finish();
        const promise = this.rpc.request("mineplex.mineplexchain.treasury.Msg", "Burn", data);
        return promise.then((data) => exports.MsgBurnResponse.decode(new binary_1.BinaryReader(data)));
    }
    ChangeOwner(request) {
        const data = exports.MsgChangeOwner.encode(request).finish();
        const promise = this.rpc.request("mineplex.mineplexchain.treasury.Msg", "ChangeOwner", data);
        return promise.then((data) => exports.MsgChangeOwnerResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map