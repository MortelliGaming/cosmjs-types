"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCurrentEpochResponse = exports.QueryCurrentEpochRequest = exports.QueryEpochsInfoResponse = exports.QueryEpochsInfoRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.epochs.v1";
function createBaseQueryEpochsInfoRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryEpochsInfoRequest = {
    typeUrl: "/evmos.epochs.v1.QueryEpochsInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoRequest();
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
        const obj = createBaseQueryEpochsInfoRequest();
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
        const message = createBaseQueryEpochsInfoRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryEpochsInfoResponse() {
    return {
        epochs: [],
        pagination: undefined,
    };
}
exports.QueryEpochsInfoResponse = {
    typeUrl: "/evmos.epochs.v1.QueryEpochsInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.epochs) {
            genesis_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochs.push(genesis_1.EpochInfo.decode(reader, reader.uint32()));
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
        const obj = createBaseQueryEpochsInfoResponse();
        if (Array.isArray(object?.epochs))
            obj.epochs = object.epochs.map((e) => genesis_1.EpochInfo.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map((e) => (e ? genesis_1.EpochInfo.toJSON(e) : undefined));
        }
        else {
            obj.epochs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map((e) => genesis_1.EpochInfo.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryCurrentEpochRequest() {
    return {
        identifier: "",
    };
}
exports.QueryCurrentEpochRequest = {
    typeUrl: "/evmos.epochs.v1.QueryCurrentEpochRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCurrentEpochRequest();
        if ((0, helpers_1.isSet)(object.identifier))
            obj.identifier = String(object.identifier);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochRequest();
        message.identifier = object.identifier ?? "";
        return message;
    },
};
function createBaseQueryCurrentEpochResponse() {
    return {
        currentEpoch: BigInt(0),
    };
}
exports.QueryCurrentEpochResponse = {
    typeUrl: "/evmos.epochs.v1.QueryCurrentEpochResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.currentEpoch !== BigInt(0)) {
            writer.uint32(8).int64(message.currentEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCurrentEpochResponse();
        if ((0, helpers_1.isSet)(object.currentEpoch))
            obj.currentEpoch = BigInt(object.currentEpoch.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochResponse();
        if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
            message.currentEpoch = BigInt(object.currentEpoch.toString());
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.EpochInfos = this.EpochInfos.bind(this);
        this.CurrentEpoch = this.CurrentEpoch.bind(this);
    }
    EpochInfos(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.QueryEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.epochs.v1.Query", "EpochInfos", data);
        return promise.then((data) => exports.QueryEpochsInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    CurrentEpoch(request) {
        const data = exports.QueryCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.epochs.v1.Query", "CurrentEpoch", data);
        return promise.then((data) => exports.QueryCurrentEpochResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map