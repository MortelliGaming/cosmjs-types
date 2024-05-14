"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryExternalIncentiveGaugesResponse = exports.QueryExternalIncentiveGaugesRequest = exports.QueryIncentivizedPoolsResponse = exports.IncentivizedPool = exports.QueryIncentivizedPoolsRequest = exports.QueryLockableDurationsResponse = exports.QueryLockableDurationsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDistrInfoResponse = exports.QueryDistrInfoRequest = exports.QueryGaugeIdsResponse_GaugeIdWithDuration = exports.QueryGaugeIdsResponse = exports.QueryGaugeIdsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../google/protobuf/duration");
const incentives_1 = require("./incentives");
const gauge_1 = require("../../incentives/gauge");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolincentives.v1beta1";
function createBaseQueryGaugeIdsRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryGaugeIdsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGaugeIdsRequest();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsRequest();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryGaugeIdsResponse() {
    return {
        gaugeIdsWithDuration: [],
    };
}
exports.QueryGaugeIdsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.gaugeIdsWithDuration) {
            exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeIdsWithDuration.push(exports.QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGaugeIdsResponse();
        if (Array.isArray(object?.gaugeIdsWithDuration))
            obj.gaugeIdsWithDuration = object.gaugeIdsWithDuration.map((e) => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.gaugeIdsWithDuration) {
            obj.gaugeIdsWithDuration = message.gaugeIdsWithDuration.map((e) => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toJSON(e) : undefined);
        }
        else {
            obj.gaugeIdsWithDuration = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gaugeIdsWithDuration =
            object.gaugeIdsWithDuration?.map((e) => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration() {
    return {
        gaugeId: BigInt(0),
        duration: duration_1.Duration.fromPartial({}),
        gaugeIncentivePercentage: "",
    };
}
exports.QueryGaugeIdsResponse_GaugeIdWithDuration = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeIncentivePercentage !== "") {
            writer.uint32(26).string(message.gaugeIncentivePercentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gaugeIncentivePercentage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        if ((0, helpers_1.isSet)(object.duration))
            obj.duration = duration_1.Duration.fromJSON(object.duration);
        if ((0, helpers_1.isSet)(object.gaugeIncentivePercentage))
            obj.gaugeIncentivePercentage = String(object.gaugeIncentivePercentage);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.gaugeIncentivePercentage !== undefined &&
            (obj.gaugeIncentivePercentage = message.gaugeIncentivePercentage);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        message.gaugeIncentivePercentage = object.gaugeIncentivePercentage ?? "";
        return message;
    },
};
function createBaseQueryDistrInfoRequest() {
    return {};
}
exports.QueryDistrInfoRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoRequest();
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
        const obj = createBaseQueryDistrInfoRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryDistrInfoRequest();
        return message;
    },
};
function createBaseQueryDistrInfoResponse() {
    return {
        distrInfo: incentives_1.DistrInfo.fromPartial({}),
    };
}
exports.QueryDistrInfoResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distrInfo !== undefined) {
            incentives_1.DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distrInfo = incentives_1.DistrInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDistrInfoResponse();
        if ((0, helpers_1.isSet)(object.distrInfo))
            obj.distrInfo = incentives_1.DistrInfo.fromJSON(object.distrInfo);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.distrInfo !== undefined &&
            (obj.distrInfo = message.distrInfo ? incentives_1.DistrInfo.toJSON(message.distrInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDistrInfoResponse();
        if (object.distrInfo !== undefined && object.distrInfo !== null) {
            message.distrInfo = incentives_1.DistrInfo.fromPartial(object.distrInfo);
        }
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
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
        params: incentives_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
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
            obj.params = incentives_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = incentives_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
exports.QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsRequest();
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
        const obj = createBaseQueryLockableDurationsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryLockableDurationsRequest();
        return message;
    },
};
function createBaseQueryLockableDurationsResponse() {
    return {
        lockableDurations: [],
    };
}
exports.QueryLockableDurationsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryLockableDurationsResponse();
        if (Array.isArray(object?.lockableDurations))
            obj.lockableDurations = object.lockableDurations.map((e) => duration_1.Duration.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockableDurations = message.lockableDurations.map((e) => (e ? duration_1.Duration.toJSON(e) : undefined));
        }
        else {
            obj.lockableDurations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockableDurations = object.lockableDurations?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryIncentivizedPoolsRequest() {
    return {};
}
exports.QueryIncentivizedPoolsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsRequest();
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
        const obj = createBaseQueryIncentivizedPoolsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryIncentivizedPoolsRequest();
        return message;
    },
};
function createBaseIncentivizedPool() {
    return {
        poolId: BigInt(0),
        lockableDuration: duration_1.Duration.fromPartial({}),
        gaugeId: BigInt(0),
    };
}
exports.IncentivizedPool = {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.lockableDuration !== undefined) {
            duration_1.Duration.encode(message.lockableDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.lockableDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseIncentivizedPool();
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        if ((0, helpers_1.isSet)(object.lockableDuration))
            obj.lockableDuration = duration_1.Duration.fromJSON(object.lockableDuration);
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
        message.lockableDuration !== undefined &&
            (obj.lockableDuration = message.lockableDuration
                ? duration_1.Duration.toJSON(message.lockableDuration)
                : undefined);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentivizedPool();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        if (object.lockableDuration !== undefined && object.lockableDuration !== null) {
            message.lockableDuration = duration_1.Duration.fromPartial(object.lockableDuration);
        }
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        return message;
    },
};
function createBaseQueryIncentivizedPoolsResponse() {
    return {
        incentivizedPools: [],
    };
}
exports.QueryIncentivizedPoolsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.incentivizedPools) {
            exports.IncentivizedPool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPools.push(exports.IncentivizedPool.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryIncentivizedPoolsResponse();
        if (Array.isArray(object?.incentivizedPools))
            obj.incentivizedPools = object.incentivizedPools.map((e) => exports.IncentivizedPool.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivizedPools) {
            obj.incentivizedPools = message.incentivizedPools.map((e) => e ? exports.IncentivizedPool.toJSON(e) : undefined);
        }
        else {
            obj.incentivizedPools = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivizedPools = object.incentivizedPools?.map((e) => exports.IncentivizedPool.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryExternalIncentiveGaugesRequest() {
    return {};
}
exports.QueryExternalIncentiveGaugesRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesRequest();
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
        const obj = createBaseQueryExternalIncentiveGaugesRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryExternalIncentiveGaugesRequest();
        return message;
    },
};
function createBaseQueryExternalIncentiveGaugesResponse() {
    return {
        data: [],
    };
}
exports.QueryExternalIncentiveGaugesResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryExternalIncentiveGaugesResponse();
        if (Array.isArray(object?.data))
            obj.data = object.data.map((e) => gauge_1.Gauge.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GaugeIds = this.GaugeIds.bind(this);
        this.DistrInfo = this.DistrInfo.bind(this);
        this.Params = this.Params.bind(this);
        this.LockableDurations = this.LockableDurations.bind(this);
        this.IncentivizedPools = this.IncentivizedPools.bind(this);
        this.ExternalIncentiveGauges = this.ExternalIncentiveGauges.bind(this);
    }
    GaugeIds(request) {
        const data = exports.QueryGaugeIdsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
        return promise.then((data) => exports.QueryGaugeIdsResponse.decode(new binary_1.BinaryReader(data)));
    }
    DistrInfo(request = {}) {
        const data = exports.QueryDistrInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
        return promise.then((data) => exports.QueryDistrInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    LockableDurations(request = {}) {
        const data = exports.QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
        return promise.then((data) => exports.QueryLockableDurationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    IncentivizedPools(request = {}) {
        const data = exports.QueryIncentivizedPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
        return promise.then((data) => exports.QueryIncentivizedPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    ExternalIncentiveGauges(request = {}) {
        const data = exports.QueryExternalIncentiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
        return promise.then((data) => exports.QueryExternalIncentiveGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map