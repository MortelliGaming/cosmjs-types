"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.GaugeWeight = exports.QueryCurrentWeightByGroupGaugeIDResponse = exports.QueryCurrentWeightByGroupGaugeIDRequest = exports.QueryGroupByGroupGaugeIDResponse = exports.QueryGroupByGroupGaugeIDRequest = exports.QueryAllGroupsWithGaugeResponse = exports.QueryAllGroupsWithGaugeRequest = exports.QueryAllGroupsGaugesResponse = exports.QueryAllGroupsGaugesRequest = exports.QueryAllGroupsResponse = exports.QueryAllGroupsRequest = exports.QueryLockableDurationsResponse = exports.QueryLockableDurationsRequest = exports.RewardsEstResponse = exports.RewardsEstRequest = exports.UpcomingGaugesPerDenomResponse = exports.UpcomingGaugesPerDenomRequest = exports.UpcomingGaugesResponse = exports.UpcomingGaugesRequest = exports.ActiveGaugesPerDenomResponse = exports.ActiveGaugesPerDenomRequest = exports.ActiveGaugesResponse = exports.ActiveGaugesRequest = exports.GaugesResponse = exports.GaugesRequest = exports.GaugeByIDResponse = exports.GaugeByIDRequest = exports.ModuleToDistributeCoinsResponse = exports.ModuleToDistributeCoinsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const gauge_1 = require("./gauge");
const duration_1 = require("../../google/protobuf/duration");
const group_1 = require("./group");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.incentives";
function createBaseModuleToDistributeCoinsRequest() {
    return {};
}
exports.ModuleToDistributeCoinsRequest = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsRequest();
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
        const obj = createBaseModuleToDistributeCoinsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseModuleToDistributeCoinsRequest();
        return message;
    },
};
function createBaseModuleToDistributeCoinsResponse() {
    return {
        coins: [],
    };
}
exports.ModuleToDistributeCoinsResponse = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModuleToDistributeCoinsResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGaugeByIDRequest() {
    return {
        id: BigInt(0),
    };
}
exports.GaugeByIDRequest = {
    typeUrl: "/osmosis.incentives.GaugeByIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseGaugeByIDRequest();
        if ((0, helpers_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseGaugeByIDResponse() {
    return {
        gauge: undefined,
    };
}
exports.GaugeByIDResponse = {
    typeUrl: "/osmosis.incentives.GaugeByIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gauge !== undefined) {
            gauge_1.Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge = gauge_1.Gauge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGaugeByIDResponse();
        if ((0, helpers_1.isSet)(object.gauge))
            obj.gauge = gauge_1.Gauge.fromJSON(object.gauge);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.gauge !== undefined && (obj.gauge = message.gauge ? gauge_1.Gauge.toJSON(message.gauge) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDResponse();
        if (object.gauge !== undefined && object.gauge !== null) {
            message.gauge = gauge_1.Gauge.fromPartial(object.gauge);
        }
        return message;
    },
};
function createBaseGaugesRequest() {
    return {
        pagination: undefined,
    };
}
exports.GaugesRequest = {
    typeUrl: "/osmosis.incentives.GaugesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesRequest();
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
        const obj = createBaseGaugesRequest();
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
        const message = createBaseGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseGaugesResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
exports.GaugesResponse = {
    typeUrl: "/osmosis.incentives.GaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
        const obj = createBaseGaugesResponse();
        if (Array.isArray(object?.data))
            obj.data = object.data.map((e) => gauge_1.Gauge.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugesResponse();
        message.data = object.data?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseActiveGaugesRequest() {
    return {
        pagination: undefined,
    };
}
exports.ActiveGaugesRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesRequest();
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
        const obj = createBaseActiveGaugesRequest();
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
        const message = createBaseActiveGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseActiveGaugesResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
exports.ActiveGaugesResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
        const obj = createBaseActiveGaugesResponse();
        if (Array.isArray(object?.data))
            obj.data = object.data.map((e) => gauge_1.Gauge.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseActiveGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined,
    };
}
exports.ActiveGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
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
        const obj = createBaseActiveGaugesPerDenomRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesPerDenomRequest();
        message.denom = object.denom ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseActiveGaugesPerDenomResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
exports.ActiveGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
        const obj = createBaseActiveGaugesPerDenomResponse();
        if (Array.isArray(object?.data))
            obj.data = object.data.map((e) => gauge_1.Gauge.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseUpcomingGaugesRequest() {
    return {
        pagination: undefined,
    };
}
exports.UpcomingGaugesRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesRequest();
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
        const obj = createBaseUpcomingGaugesRequest();
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
        const message = createBaseUpcomingGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseUpcomingGaugesResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
exports.UpcomingGaugesResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
        const obj = createBaseUpcomingGaugesResponse();
        if (Array.isArray(object?.data))
            obj.data = object.data.map((e) => gauge_1.Gauge.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseUpcomingGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined,
    };
}
exports.UpcomingGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
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
        const obj = createBaseUpcomingGaugesPerDenomRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesPerDenomRequest();
        message.denom = object.denom ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseUpcomingGaugesPerDenomResponse() {
    return {
        upcomingGauges: [],
        pagination: undefined,
    };
}
exports.UpcomingGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.upcomingGauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upcomingGauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
        const obj = createBaseUpcomingGaugesPerDenomResponse();
        if (Array.isArray(object?.upcomingGauges))
            obj.upcomingGauges = object.upcomingGauges.map((e) => gauge_1.Gauge.fromJSON(e));
        if ((0, helpers_1.isSet)(object.pagination))
            obj.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.upcomingGauges) {
            obj.upcomingGauges = message.upcomingGauges.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.upcomingGauges = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges = object.upcomingGauges?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseRewardsEstRequest() {
    return {
        owner: "",
        lockIds: [],
        endEpoch: BigInt(0),
    };
}
exports.RewardsEstRequest = {
    typeUrl: "/osmosis.incentives.RewardsEstRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.lockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.endEpoch !== BigInt(0)) {
            writer.uint32(24).int64(message.endEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.lockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.lockIds.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.endEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRewardsEstRequest();
        if ((0, helpers_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if (Array.isArray(object?.lockIds))
            obj.lockIds = object.lockIds.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.endEpoch))
            obj.endEpoch = BigInt(object.endEpoch.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.lockIds) {
            obj.lockIds = message.lockIds.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.lockIds = [];
        }
        message.endEpoch !== undefined && (obj.endEpoch = (message.endEpoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstRequest();
        message.owner = object.owner ?? "";
        message.lockIds = object.lockIds?.map((e) => BigInt(e.toString())) || [];
        if (object.endEpoch !== undefined && object.endEpoch !== null) {
            message.endEpoch = BigInt(object.endEpoch.toString());
        }
        return message;
    },
};
function createBaseRewardsEstResponse() {
    return {
        coins: [],
    };
}
exports.RewardsEstResponse = {
    typeUrl: "/osmosis.incentives.RewardsEstResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRewardsEstResponse();
        if (Array.isArray(object?.coins))
            obj.coins = object.coins.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
exports.QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
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
    typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
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
function createBaseQueryAllGroupsRequest() {
    return {};
}
exports.QueryAllGroupsRequest = {
    typeUrl: "/osmosis.incentives.QueryAllGroupsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsRequest();
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
        const obj = createBaseQueryAllGroupsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryAllGroupsRequest();
        return message;
    },
};
function createBaseQueryAllGroupsResponse() {
    return {
        groups: [],
    };
}
exports.QueryAllGroupsResponse = {
    typeUrl: "/osmosis.incentives.QueryAllGroupsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllGroupsResponse();
        if (Array.isArray(object?.groups))
            obj.groups = object.groups.map((e) => group_1.Group.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? group_1.Group.toJSON(e) : undefined));
        }
        else {
            obj.groups = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllGroupsResponse();
        message.groups = object.groups?.map((e) => group_1.Group.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryAllGroupsGaugesRequest() {
    return {};
}
exports.QueryAllGroupsGaugesRequest = {
    typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsGaugesRequest();
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
        const obj = createBaseQueryAllGroupsGaugesRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryAllGroupsGaugesRequest();
        return message;
    },
};
function createBaseQueryAllGroupsGaugesResponse() {
    return {
        gauges: [],
    };
}
exports.QueryAllGroupsGaugesResponse = {
    typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllGroupsGaugesResponse();
        if (Array.isArray(object?.gauges))
            obj.gauges = object.gauges.map((e) => gauge_1.Gauge.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.gauges) {
            obj.gauges = message.gauges.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.gauges = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllGroupsGaugesResponse();
        message.gauges = object.gauges?.map((e) => gauge_1.Gauge.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryAllGroupsWithGaugeRequest() {
    return {};
}
exports.QueryAllGroupsWithGaugeRequest = {
    typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsWithGaugeRequest();
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
        const obj = createBaseQueryAllGroupsWithGaugeRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryAllGroupsWithGaugeRequest();
        return message;
    },
};
function createBaseQueryAllGroupsWithGaugeResponse() {
    return {
        groupsWithGauge: [],
    };
}
exports.QueryAllGroupsWithGaugeResponse = {
    typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groupsWithGauge) {
            group_1.GroupsWithGauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsWithGaugeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupsWithGauge.push(group_1.GroupsWithGauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllGroupsWithGaugeResponse();
        if (Array.isArray(object?.groupsWithGauge))
            obj.groupsWithGauge = object.groupsWithGauge.map((e) => group_1.GroupsWithGauge.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.groupsWithGauge) {
            obj.groupsWithGauge = message.groupsWithGauge.map((e) => (e ? group_1.GroupsWithGauge.toJSON(e) : undefined));
        }
        else {
            obj.groupsWithGauge = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllGroupsWithGaugeResponse();
        message.groupsWithGauge = object.groupsWithGauge?.map((e) => group_1.GroupsWithGauge.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGroupByGroupGaugeIDRequest() {
    return {
        id: BigInt(0),
    };
}
exports.QueryGroupByGroupGaugeIDRequest = {
    typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupByGroupGaugeIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryGroupByGroupGaugeIDRequest();
        if ((0, helpers_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupByGroupGaugeIDRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseQueryGroupByGroupGaugeIDResponse() {
    return {
        group: group_1.Group.fromPartial({}),
    };
}
exports.QueryGroupByGroupGaugeIDResponse = {
    typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group !== undefined) {
            group_1.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupByGroupGaugeIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = group_1.Group.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGroupByGroupGaugeIDResponse();
        if ((0, helpers_1.isSet)(object.group))
            obj.group = group_1.Group.fromJSON(object.group);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.group !== undefined && (obj.group = message.group ? group_1.Group.toJSON(message.group) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupByGroupGaugeIDResponse();
        if (object.group !== undefined && object.group !== null) {
            message.group = group_1.Group.fromPartial(object.group);
        }
        return message;
    },
};
function createBaseQueryCurrentWeightByGroupGaugeIDRequest() {
    return {
        groupGaugeId: BigInt(0),
    };
}
exports.QueryCurrentWeightByGroupGaugeIDRequest = {
    typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupGaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupGaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupGaugeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
        if ((0, helpers_1.isSet)(object.groupGaugeId))
            obj.groupGaugeId = BigInt(object.groupGaugeId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.groupGaugeId !== undefined && (obj.groupGaugeId = (message.groupGaugeId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
        if (object.groupGaugeId !== undefined && object.groupGaugeId !== null) {
            message.groupGaugeId = BigInt(object.groupGaugeId.toString());
        }
        return message;
    },
};
function createBaseQueryCurrentWeightByGroupGaugeIDResponse() {
    return {
        gaugeWeight: [],
    };
}
exports.QueryCurrentWeightByGroupGaugeIDResponse = {
    typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.gaugeWeight) {
            exports.GaugeWeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeWeight.push(exports.GaugeWeight.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
        if (Array.isArray(object?.gaugeWeight))
            obj.gaugeWeight = object.gaugeWeight.map((e) => exports.GaugeWeight.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.gaugeWeight) {
            obj.gaugeWeight = message.gaugeWeight.map((e) => (e ? exports.GaugeWeight.toJSON(e) : undefined));
        }
        else {
            obj.gaugeWeight = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
        message.gaugeWeight = object.gaugeWeight?.map((e) => exports.GaugeWeight.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGaugeWeight() {
    return {
        gaugeId: BigInt(0),
        weightRatio: "",
    };
}
exports.GaugeWeight = {
    typeUrl: "/osmosis.incentives.GaugeWeight",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.weightRatio !== "") {
            writer.uint32(18).string(message.weightRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeWeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.weightRatio = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGaugeWeight();
        if ((0, helpers_1.isSet)(object.gaugeId))
            obj.gaugeId = BigInt(object.gaugeId.toString());
        if ((0, helpers_1.isSet)(object.weightRatio))
            obj.weightRatio = String(object.weightRatio);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        message.weightRatio !== undefined && (obj.weightRatio = message.weightRatio);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGaugeWeight();
        if (object.gaugeId !== undefined && object.gaugeId !== null) {
            message.gaugeId = BigInt(object.gaugeId.toString());
        }
        message.weightRatio = object.weightRatio ?? "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ModuleToDistributeCoins = this.ModuleToDistributeCoins.bind(this);
        this.GaugeByID = this.GaugeByID.bind(this);
        this.Gauges = this.Gauges.bind(this);
        this.ActiveGauges = this.ActiveGauges.bind(this);
        this.ActiveGaugesPerDenom = this.ActiveGaugesPerDenom.bind(this);
        this.UpcomingGauges = this.UpcomingGauges.bind(this);
        this.UpcomingGaugesPerDenom = this.UpcomingGaugesPerDenom.bind(this);
        this.RewardsEst = this.RewardsEst.bind(this);
        this.LockableDurations = this.LockableDurations.bind(this);
        this.AllGroups = this.AllGroups.bind(this);
        this.AllGroupsGauges = this.AllGroupsGauges.bind(this);
        this.AllGroupsWithGauge = this.AllGroupsWithGauge.bind(this);
        this.GroupByGroupGaugeID = this.GroupByGroupGaugeID.bind(this);
        this.CurrentWeightByGroupGaugeID = this.CurrentWeightByGroupGaugeID.bind(this);
    }
    ModuleToDistributeCoins(request = {}) {
        const data = exports.ModuleToDistributeCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "ModuleToDistributeCoins", data);
        return promise.then((data) => exports.ModuleToDistributeCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    GaugeByID(request) {
        const data = exports.GaugeByIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "GaugeByID", data);
        return promise.then((data) => exports.GaugeByIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    Gauges(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.GaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "Gauges", data);
        return promise.then((data) => exports.GaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    ActiveGauges(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.ActiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGauges", data);
        return promise.then((data) => exports.ActiveGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    ActiveGaugesPerDenom(request) {
        const data = exports.ActiveGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGaugesPerDenom", data);
        return promise.then((data) => exports.ActiveGaugesPerDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    UpcomingGauges(request = {
        pagination: pagination_1.PageRequest.fromPartial({}),
    }) {
        const data = exports.UpcomingGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGauges", data);
        return promise.then((data) => exports.UpcomingGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    UpcomingGaugesPerDenom(request) {
        const data = exports.UpcomingGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGaugesPerDenom", data);
        return promise.then((data) => exports.UpcomingGaugesPerDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    RewardsEst(request) {
        const data = exports.RewardsEstRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "RewardsEst", data);
        return promise.then((data) => exports.RewardsEstResponse.decode(new binary_1.BinaryReader(data)));
    }
    LockableDurations(request = {}) {
        const data = exports.QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "LockableDurations", data);
        return promise.then((data) => exports.QueryLockableDurationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    AllGroups(request = {}) {
        const data = exports.QueryAllGroupsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "AllGroups", data);
        return promise.then((data) => exports.QueryAllGroupsResponse.decode(new binary_1.BinaryReader(data)));
    }
    AllGroupsGauges(request = {}) {
        const data = exports.QueryAllGroupsGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "AllGroupsGauges", data);
        return promise.then((data) => exports.QueryAllGroupsGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    AllGroupsWithGauge(request = {}) {
        const data = exports.QueryAllGroupsWithGaugeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "AllGroupsWithGauge", data);
        return promise.then((data) => exports.QueryAllGroupsWithGaugeResponse.decode(new binary_1.BinaryReader(data)));
    }
    GroupByGroupGaugeID(request) {
        const data = exports.QueryGroupByGroupGaugeIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "GroupByGroupGaugeID", data);
        return promise.then((data) => exports.QueryGroupByGroupGaugeIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    CurrentWeightByGroupGaugeID(request) {
        const data = exports.QueryCurrentWeightByGroupGaugeIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.incentives.Query", "CurrentWeightByGroupGaugeID", data);
        return promise.then((data) => exports.QueryCurrentWeightByGroupGaugeIDResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map