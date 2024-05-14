"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryTokenPairResponse = exports.QueryTokenPairRequest = exports.QueryTokenPairsResponse = exports.QueryTokenPairsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const erc20_1 = require("./erc20");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.erc20.v1";
function createBaseQueryTokenPairsRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryTokenPairsRequest = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairsRequest();
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
        const obj = createBaseQueryTokenPairsRequest();
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
        const message = createBaseQueryTokenPairsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryTokenPairsResponse() {
    return {
        tokenPairs: [],
        pagination: undefined,
    };
}
exports.QueryTokenPairsResponse = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokenPairs) {
            erc20_1.TokenPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenPairs.push(erc20_1.TokenPair.decode(reader, reader.uint32()));
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
        const obj = createBaseQueryTokenPairsResponse();
        if (Array.isArray(object?.tokenPairs))
            obj.tokenPairs = object.tokenPairs.map((e) => erc20_1.TokenPair.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenPairs) {
            obj.tokenPairs = message.tokenPairs.map((e) => (e ? erc20_1.TokenPair.toJSON(e) : undefined));
        }
        else {
            obj.tokenPairs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenPairsResponse();
        message.tokenPairs = object.tokenPairs?.map((e) => erc20_1.TokenPair.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryTokenPairRequest() {
    return {
        token: "",
    };
}
exports.QueryTokenPairRequest = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTokenPairRequest();
        if ((0, helpers_1.isSet)(object.token))
            obj.token = String(object.token);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenPairRequest();
        message.token = object.token ?? "";
        return message;
    },
};
function createBaseQueryTokenPairResponse() {
    return {
        tokenPair: erc20_1.TokenPair.fromPartial({}),
    };
}
exports.QueryTokenPairResponse = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenPair !== undefined) {
            erc20_1.TokenPair.encode(message.tokenPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenPair = erc20_1.TokenPair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryTokenPairResponse();
        if ((0, helpers_1.isSet)(object.tokenPair))
            obj.tokenPair = erc20_1.TokenPair.fromJSON(object.tokenPair);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tokenPair !== undefined &&
            (obj.tokenPair = message.tokenPair ? erc20_1.TokenPair.toJSON(message.tokenPair) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenPairResponse();
        if (object.tokenPair !== undefined && object.tokenPair !== null) {
            message.tokenPair = erc20_1.TokenPair.fromPartial(object.tokenPair);
        }
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/evmos.erc20.v1.QueryParamsRequest",
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
        params: genesis_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/evmos.erc20.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_1.isSet)(object.params))
            obj.params = genesis_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? genesis_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.TokenPairs = this.TokenPairs.bind(this);
        this.TokenPair = this.TokenPair.bind(this);
        this.Params = this.Params.bind(this);
    }
    TokenPairs(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.QueryTokenPairsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPairs", data);
        return promise.then((data) => exports.QueryTokenPairsResponse.decode(new binary_1.BinaryReader(data)));
    }
    TokenPair(request) {
        const data = exports.QueryTokenPairRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPair", data);
        return promise.then((data) => exports.QueryTokenPairResponse.decode(new binary_1.BinaryReader(data)));
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map