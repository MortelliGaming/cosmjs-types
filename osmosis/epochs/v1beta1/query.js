"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCurrentEpochResponse = exports.QueryCurrentEpochRequest = exports.QueryEpochsInfoResponse = exports.QueryEpochsInfoRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.epochs.v1beta1";
function createBaseQueryEpochsInfoRequest() {
    return {};
}
exports.QueryEpochsInfoRequest = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoRequest();
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
        const obj = createBaseQueryEpochsInfoRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryEpochsInfoRequest();
        return message;
    },
};
function createBaseQueryEpochsInfoResponse() {
    return {
        epochs: [],
    };
}
exports.QueryEpochsInfoResponse = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.epochs) {
            genesis_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map((e) => genesis_1.EpochInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryCurrentEpochRequest() {
    return {
        identifier: "",
    };
}
exports.QueryCurrentEpochRequest = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest",
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
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse",
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
    EpochInfos(request = {}) {
        const data = exports.QueryEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "EpochInfos", data);
        return promise.then((data) => exports.QueryEpochsInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    CurrentEpoch(request) {
        const data = exports.QueryCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "CurrentEpoch", data);
        return promise.then((data) => exports.QueryCurrentEpochResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map