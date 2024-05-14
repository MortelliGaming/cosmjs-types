"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.ParamsResponse = exports.ParamsRequest = exports.GeometricTwapToNowResponse = exports.GeometricTwapToNowRequest = exports.GeometricTwapResponse = exports.GeometricTwapRequest = exports.ArithmeticTwapToNowResponse = exports.ArithmeticTwapToNowRequest = exports.ArithmeticTwapResponse = exports.ArithmeticTwapRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.twap.v1beta1";
function createBaseArithmeticTwapRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: "",
        quoteAsset: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
        endTime: undefined,
    };
}
exports.ArithmeticTwapRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== "") {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== "") {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.endTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseArithmeticTwapRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.baseAsset))
            obj.baseAsset = String(object.baseAsset);
        if ((0, helpers_1.isSet)(object.quoteAsset))
            obj.quoteAsset = String(object.quoteAsset);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if ((0, helpers_1.isSet)(object.endTime))
            obj.endTime = (0, helpers_1.fromJsonTimestamp)(object.endTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
        message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        message.endTime !== undefined && (obj.endTime = (0, helpers_1.fromTimestamp)(message.endTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.baseAsset = object.baseAsset ?? "";
        message.quoteAsset = object.quoteAsset ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = timestamp_1.Timestamp.fromPartial(object.endTime);
        }
        return message;
    },
};
function createBaseArithmeticTwapResponse() {
    return {
        arithmeticTwap: "",
    };
}
exports.ArithmeticTwapResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmeticTwap !== "") {
            writer.uint32(10).string(message.arithmeticTwap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseArithmeticTwapResponse();
        if ((0, helpers_1.isSet)(object.arithmeticTwap))
            obj.arithmeticTwap = String(object.arithmeticTwap);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.arithmeticTwap !== undefined && (obj.arithmeticTwap = message.arithmeticTwap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapResponse();
        message.arithmeticTwap = object.arithmeticTwap ?? "";
        return message;
    },
};
function createBaseArithmeticTwapToNowRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: "",
        quoteAsset: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.ArithmeticTwapToNowRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== "") {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== "") {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseArithmeticTwapToNowRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.baseAsset))
            obj.baseAsset = String(object.baseAsset);
        if ((0, helpers_1.isSet)(object.quoteAsset))
            obj.quoteAsset = String(object.quoteAsset);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
        message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.baseAsset = object.baseAsset ?? "";
        message.quoteAsset = object.quoteAsset ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        return message;
    },
};
function createBaseArithmeticTwapToNowResponse() {
    return {
        arithmeticTwap: "",
    };
}
exports.ArithmeticTwapToNowResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmeticTwap !== "") {
            writer.uint32(10).string(message.arithmeticTwap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseArithmeticTwapToNowResponse();
        if ((0, helpers_1.isSet)(object.arithmeticTwap))
            obj.arithmeticTwap = String(object.arithmeticTwap);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.arithmeticTwap !== undefined && (obj.arithmeticTwap = message.arithmeticTwap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowResponse();
        message.arithmeticTwap = object.arithmeticTwap ?? "";
        return message;
    },
};
function createBaseGeometricTwapRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: "",
        quoteAsset: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
        endTime: undefined,
    };
}
exports.GeometricTwapRequest = {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== "") {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== "") {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.endTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGeometricTwapRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.baseAsset))
            obj.baseAsset = String(object.baseAsset);
        if ((0, helpers_1.isSet)(object.quoteAsset))
            obj.quoteAsset = String(object.quoteAsset);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        if ((0, helpers_1.isSet)(object.endTime))
            obj.endTime = (0, helpers_1.fromJsonTimestamp)(object.endTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
        message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        message.endTime !== undefined && (obj.endTime = (0, helpers_1.fromTimestamp)(message.endTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.baseAsset = object.baseAsset ?? "";
        message.quoteAsset = object.quoteAsset ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = timestamp_1.Timestamp.fromPartial(object.endTime);
        }
        return message;
    },
};
function createBaseGeometricTwapResponse() {
    return {
        geometricTwap: "",
    };
}
exports.GeometricTwapResponse = {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.geometricTwap !== "") {
            writer.uint32(10).string(message.geometricTwap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.geometricTwap = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGeometricTwapResponse();
        if ((0, helpers_1.isSet)(object.geometricTwap))
            obj.geometricTwap = String(object.geometricTwap);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.geometricTwap !== undefined && (obj.geometricTwap = message.geometricTwap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapResponse();
        message.geometricTwap = object.geometricTwap ?? "";
        return message;
    },
};
function createBaseGeometricTwapToNowRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: "",
        quoteAsset: "",
        startTime: timestamp_1.Timestamp.fromPartial({}),
    };
}
exports.GeometricTwapToNowRequest = {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== "") {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== "") {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapToNowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGeometricTwapToNowRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.baseAsset))
            obj.baseAsset = String(object.baseAsset);
        if ((0, helpers_1.isSet)(object.quoteAsset))
            obj.quoteAsset = String(object.quoteAsset);
        if ((0, helpers_1.isSet)(object.startTime))
            obj.startTime = (0, helpers_1.fromJsonTimestamp)(object.startTime);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
        message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
        message.startTime !== undefined && (obj.startTime = (0, helpers_1.fromTimestamp)(message.startTime).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapToNowRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        message.baseAsset = object.baseAsset ?? "";
        message.quoteAsset = object.quoteAsset ?? "";
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timestamp_1.Timestamp.fromPartial(object.startTime);
        }
        return message;
    },
};
function createBaseGeometricTwapToNowResponse() {
    return {
        geometricTwap: "",
    };
}
exports.GeometricTwapToNowResponse = {
    typeUrl: "/osmosis.twap.v1beta1.GeometricTwapToNowResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.geometricTwap !== "") {
            writer.uint32(10).string(message.geometricTwap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.geometricTwap = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGeometricTwapToNowResponse();
        if ((0, helpers_1.isSet)(object.geometricTwap))
            obj.geometricTwap = String(object.geometricTwap);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.geometricTwap !== undefined && (obj.geometricTwap = message.geometricTwap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapToNowResponse();
        message.geometricTwap = object.geometricTwap ?? "";
        return message;
    },
};
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const obj = createBaseParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
};
function createBaseParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
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
        const obj = createBaseParamsResponse();
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
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.ArithmeticTwap = this.ArithmeticTwap.bind(this);
        this.ArithmeticTwapToNow = this.ArithmeticTwapToNow.bind(this);
        this.GeometricTwap = this.GeometricTwap.bind(this);
        this.GeometricTwapToNow = this.GeometricTwapToNow.bind(this);
    }
    Params(request = {}) {
        const data = exports.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    ArithmeticTwap(request) {
        const data = exports.ArithmeticTwapRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
        return promise.then((data) => exports.ArithmeticTwapResponse.decode(new binary_1.BinaryReader(data)));
    }
    ArithmeticTwapToNow(request) {
        const data = exports.ArithmeticTwapToNowRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
        return promise.then((data) => exports.ArithmeticTwapToNowResponse.decode(new binary_1.BinaryReader(data)));
    }
    GeometricTwap(request) {
        const data = exports.GeometricTwapRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "GeometricTwap", data);
        return promise.then((data) => exports.GeometricTwapResponse.decode(new binary_1.BinaryReader(data)));
    }
    GeometricTwapToNow(request) {
        const data = exports.GeometricTwapToNowRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "GeometricTwapToNow", data);
        return promise.then((data) => exports.GeometricTwapToNowResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map