"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryBlockGasResponse = exports.QueryBlockGasRequest = exports.QueryBaseFeeResponse = exports.QueryBaseFeeRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const feemarket_1 = require("./feemarket");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.feemarket.v1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsRequest",
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
        params: feemarket_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            feemarket_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = feemarket_1.Params.decode(reader, reader.uint32());
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
            obj.params = feemarket_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? feemarket_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = feemarket_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryBaseFeeRequest() {
    return {};
}
exports.QueryBaseFeeRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeRequest",
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
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeResponse",
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
function createBaseQueryBlockGasRequest() {
    return {};
}
exports.QueryBlockGasRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockGasRequest();
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
        const obj = createBaseQueryBlockGasRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryBlockGasRequest();
        return message;
    },
};
function createBaseQueryBlockGasResponse() {
    return {
        gas: BigInt(0),
    };
}
exports.QueryBlockGasResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gas !== BigInt(0)) {
            writer.uint32(8).int64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockGasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBlockGasResponse();
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
        const message = createBaseQueryBlockGasResponse();
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas.toString());
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.BaseFee = this.BaseFee.bind(this);
        this.BlockGas = this.BlockGas.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    BaseFee(request = {}) {
        const data = exports.QueryBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BaseFee", data);
        return promise.then((data) => exports.QueryBaseFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
    BlockGas(request = {}) {
        const data = exports.QueryBlockGasRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BlockGas", data);
        return promise.then((data) => exports.QueryBlockGasResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map