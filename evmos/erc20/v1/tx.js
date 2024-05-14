"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgConvertERC20Response = exports.MsgConvertERC20 = exports.MsgConvertCoinResponse = exports.MsgConvertCoin = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.erc20.v1";
function createBaseMsgConvertCoin() {
    return {
        coin: coin_1.Coin.fromPartial({}),
        receiver: "",
        sender: "",
    };
}
exports.MsgConvertCoin = {
    typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgConvertCoin();
        if ((0, helpers_1.isSet)(object.coin))
            obj.coin = coin_1.Coin.fromJSON(object.coin);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertCoin();
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromPartial(object.coin);
        }
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgConvertCoinResponse() {
    return {};
}
exports.MsgConvertCoinResponse = {
    typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCoinResponse();
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
        const obj = createBaseMsgConvertCoinResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertCoinResponse();
        return message;
    },
};
function createBaseMsgConvertERC20() {
    return {
        contractAddress: "",
        amount: "",
        receiver: "",
        sender: "",
    };
}
exports.MsgConvertERC20 = {
    typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.receiver !== "") {
            writer.uint32(26).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertERC20();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.receiver = reader.string();
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgConvertERC20();
        if ((0, helpers_1.isSet)(object.contractAddress))
            obj.contractAddress = String(object.contractAddress);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertERC20();
        message.contractAddress = object.contractAddress ?? "";
        message.amount = object.amount ?? "";
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgConvertERC20Response() {
    return {};
}
exports.MsgConvertERC20Response = {
    typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertERC20Response();
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
        const obj = createBaseMsgConvertERC20Response();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertERC20Response();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: genesis_1.Params.fromPartial({}),
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
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
            obj.params = genesis_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? genesis_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/evmos.erc20.v1.MsgUpdateParamsResponse",
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
        this.ConvertCoin = this.ConvertCoin.bind(this);
        this.ConvertERC20 = this.ConvertERC20.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    ConvertCoin(request) {
        const data = exports.MsgConvertCoin.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertCoin", data);
        return promise.then((data) => exports.MsgConvertCoinResponse.decode(new binary_1.BinaryReader(data)));
    }
    ConvertERC20(request) {
        const data = exports.MsgConvertERC20.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertERC20", data);
        return promise.then((data) => exports.MsgConvertERC20Response.decode(new binary_1.BinaryReader(data)));
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Msg", "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map