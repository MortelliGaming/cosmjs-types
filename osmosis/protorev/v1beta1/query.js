"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetAllProtocolRevenueResponse = exports.QueryGetAllProtocolRevenueRequest = exports.QueryGetProtoRevPoolResponse = exports.QueryGetProtoRevPoolRequest = exports.QueryGetProtoRevEnabledResponse = exports.QueryGetProtoRevEnabledRequest = exports.QueryGetProtoRevBaseDenomsResponse = exports.QueryGetProtoRevBaseDenomsRequest = exports.QueryGetProtoRevMaxPoolPointsPerTxResponse = exports.QueryGetProtoRevMaxPoolPointsPerTxRequest = exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse = exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest = exports.QueryGetProtoRevInfoByPoolTypeResponse = exports.QueryGetProtoRevInfoByPoolTypeRequest = exports.QueryGetProtoRevDeveloperAccountResponse = exports.QueryGetProtoRevDeveloperAccountRequest = exports.QueryGetProtoRevAdminAccountResponse = exports.QueryGetProtoRevAdminAccountRequest = exports.QueryGetProtoRevTokenPairArbRoutesResponse = exports.QueryGetProtoRevTokenPairArbRoutesRequest = exports.QueryGetProtoRevAllRouteStatisticsResponse = exports.QueryGetProtoRevAllRouteStatisticsRequest = exports.QueryGetProtoRevStatisticsByRouteResponse = exports.QueryGetProtoRevStatisticsByRouteRequest = exports.QueryGetProtoRevAllProfitsResponse = exports.QueryGetProtoRevAllProfitsRequest = exports.QueryGetProtoRevProfitsByDenomResponse = exports.QueryGetProtoRevProfitsByDenomRequest = exports.QueryGetProtoRevNumberOfTradesResponse = exports.QueryGetProtoRevNumberOfTradesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.protorev.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
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
        params: params_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            obj.params = params_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryGetProtoRevNumberOfTradesRequest() {
    return {};
}
exports.QueryGetProtoRevNumberOfTradesRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
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
        const obj = createBaseQueryGetProtoRevNumberOfTradesRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevNumberOfTradesResponse() {
    return {
        numberOfTrades: "",
    };
}
exports.QueryGetProtoRevNumberOfTradesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numberOfTrades !== "") {
            writer.uint32(10).string(message.numberOfTrades);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numberOfTrades = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevNumberOfTradesResponse();
        if ((0, helpers_1.isSet)(object.numberOfTrades))
            obj.numberOfTrades = String(object.numberOfTrades);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        message.numberOfTrades = object.numberOfTrades ?? "";
        return message;
    },
};
function createBaseQueryGetProtoRevProfitsByDenomRequest() {
    return {
        denom: "",
    };
}
exports.QueryGetProtoRevProfitsByDenomRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevProfitsByDenomRequest();
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryGetProtoRevProfitsByDenomResponse() {
    return {
        profit: undefined,
    };
}
exports.QueryGetProtoRevProfitsByDenomResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.profit !== undefined) {
            coin_1.Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevProfitsByDenomResponse();
        if ((0, helpers_1.isSet)(object.profit))
            obj.profit = coin_1.Coin.fromJSON(object.profit);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.profit !== undefined && (obj.profit = message.profit ? coin_1.Coin.toJSON(message.profit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        if (object.profit !== undefined && object.profit !== null) {
            message.profit = coin_1.Coin.fromPartial(object.profit);
        }
        return message;
    },
};
function createBaseQueryGetProtoRevAllProfitsRequest() {
    return {};
}
exports.QueryGetProtoRevAllProfitsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
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
        const obj = createBaseQueryGetProtoRevAllProfitsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevAllProfitsResponse() {
    return {
        profits: [],
    };
}
exports.QueryGetProtoRevAllProfitsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevAllProfitsResponse();
        if (Array.isArray(object?.profits))
            obj.profits = object.profits.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.profits = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        message.profits = object.profits?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetProtoRevStatisticsByRouteRequest() {
    return {
        route: [],
    };
}
exports.QueryGetProtoRevStatisticsByRouteRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.route) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.route.push(reader.uint64());
                        }
                    }
                    else {
                        message.route.push(reader.uint64());
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
        const obj = createBaseQueryGetProtoRevStatisticsByRouteRequest();
        if (Array.isArray(object?.route))
            obj.route = object.route.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.route) {
            obj.route = message.route.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.route = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
        message.route = object.route?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseQueryGetProtoRevStatisticsByRouteResponse() {
    return {
        statistics: protorev_1.RouteStatistics.fromPartial({}),
    };
}
exports.QueryGetProtoRevStatisticsByRouteResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.statistics !== undefined) {
            protorev_1.RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics = protorev_1.RouteStatistics.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        if ((0, helpers_1.isSet)(object.statistics))
            obj.statistics = protorev_1.RouteStatistics.fromJSON(object.statistics);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.statistics !== undefined &&
            (obj.statistics = message.statistics ? protorev_1.RouteStatistics.toJSON(message.statistics) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        if (object.statistics !== undefined && object.statistics !== null) {
            message.statistics = protorev_1.RouteStatistics.fromPartial(object.statistics);
        }
        return message;
    },
};
function createBaseQueryGetProtoRevAllRouteStatisticsRequest() {
    return {};
}
exports.QueryGetProtoRevAllRouteStatisticsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
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
        const obj = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevAllRouteStatisticsResponse() {
    return {
        statistics: [],
    };
}
exports.QueryGetProtoRevAllRouteStatisticsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.statistics) {
            protorev_1.RouteStatistics.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics.push(protorev_1.RouteStatistics.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        if (Array.isArray(object?.statistics))
            obj.statistics = object.statistics.map((e) => protorev_1.RouteStatistics.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map((e) => (e ? protorev_1.RouteStatistics.toJSON(e) : undefined));
        }
        else {
            obj.statistics = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        message.statistics = object.statistics?.map((e) => protorev_1.RouteStatistics.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest() {
    return {};
}
exports.QueryGetProtoRevTokenPairArbRoutesRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
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
        const obj = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse() {
    return {
        routes: [],
    };
}
exports.QueryGetProtoRevTokenPairArbRoutesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.routes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => protorev_1.TokenPairArbRoutes.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? protorev_1.TokenPairArbRoutes.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        message.routes = object.routes?.map((e) => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetProtoRevAdminAccountRequest() {
    return {};
}
exports.QueryGetProtoRevAdminAccountRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAdminAccountRequest();
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
        const obj = createBaseQueryGetProtoRevAdminAccountRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevAdminAccountRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevAdminAccountResponse() {
    return {
        adminAccount: "",
    };
}
exports.QueryGetProtoRevAdminAccountResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.adminAccount !== "") {
            writer.uint32(10).string(message.adminAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAdminAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adminAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevAdminAccountResponse();
        if ((0, helpers_1.isSet)(object.adminAccount))
            obj.adminAccount = String(object.adminAccount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.adminAccount !== undefined && (obj.adminAccount = message.adminAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAdminAccountResponse();
        message.adminAccount = object.adminAccount ?? "";
        return message;
    },
};
function createBaseQueryGetProtoRevDeveloperAccountRequest() {
    return {};
}
exports.QueryGetProtoRevDeveloperAccountRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
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
        const obj = createBaseQueryGetProtoRevDeveloperAccountRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevDeveloperAccountResponse() {
    return {
        developerAccount: "",
    };
}
exports.QueryGetProtoRevDeveloperAccountResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.developerAccount !== "") {
            writer.uint32(10).string(message.developerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.developerAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevDeveloperAccountResponse();
        if ((0, helpers_1.isSet)(object.developerAccount))
            obj.developerAccount = String(object.developerAccount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
        message.developerAccount = object.developerAccount ?? "";
        return message;
    },
};
function createBaseQueryGetProtoRevInfoByPoolTypeRequest() {
    return {};
}
exports.QueryGetProtoRevInfoByPoolTypeRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
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
        const obj = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevInfoByPoolTypeResponse() {
    return {
        infoByPoolType: protorev_1.InfoByPoolType.fromPartial({}),
    };
}
exports.QueryGetProtoRevInfoByPoolTypeResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.infoByPoolType !== undefined) {
            protorev_1.InfoByPoolType.encode(message.infoByPoolType, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.infoByPoolType = protorev_1.InfoByPoolType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        if ((0, helpers_1.isSet)(object.infoByPoolType))
            obj.infoByPoolType = protorev_1.InfoByPoolType.fromJSON(object.infoByPoolType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.infoByPoolType !== undefined &&
            (obj.infoByPoolType = message.infoByPoolType
                ? protorev_1.InfoByPoolType.toJSON(message.infoByPoolType)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        if (object.infoByPoolType !== undefined && object.infoByPoolType !== null) {
            message.infoByPoolType = protorev_1.InfoByPoolType.fromPartial(object.infoByPoolType);
        }
        return message;
    },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest() {
    return {};
}
exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
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
        const obj = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse() {
    return {
        maxPoolPointsPerBlock: BigInt(0),
    };
}
exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPoolPointsPerBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
        if ((0, helpers_1.isSet)(object.maxPoolPointsPerBlock))
            obj.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.maxPoolPointsPerBlock !== undefined &&
            (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
        if (object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null) {
            message.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
        }
        return message;
    },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest() {
    return {};
}
exports.QueryGetProtoRevMaxPoolPointsPerTxRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
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
        const obj = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse() {
    return {
        maxPoolPointsPerTx: BigInt(0),
    };
}
exports.QueryGetProtoRevMaxPoolPointsPerTxResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxPoolPointsPerTx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPoolPointsPerTx = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
        if ((0, helpers_1.isSet)(object.maxPoolPointsPerTx))
            obj.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.maxPoolPointsPerTx !== undefined &&
            (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
        if (object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null) {
            message.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
        }
        return message;
    },
};
function createBaseQueryGetProtoRevBaseDenomsRequest() {
    return {};
}
exports.QueryGetProtoRevBaseDenomsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevBaseDenomsRequest();
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
        const obj = createBaseQueryGetProtoRevBaseDenomsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevBaseDenomsRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevBaseDenomsResponse() {
    return {
        baseDenoms: [],
    };
}
exports.QueryGetProtoRevBaseDenomsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.baseDenoms) {
            protorev_1.BaseDenom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevBaseDenomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenoms.push(protorev_1.BaseDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevBaseDenomsResponse();
        if (Array.isArray(object?.baseDenoms))
            obj.baseDenoms = object.baseDenoms.map((e) => protorev_1.BaseDenom.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.baseDenoms) {
            obj.baseDenoms = message.baseDenoms.map((e) => (e ? protorev_1.BaseDenom.toJSON(e) : undefined));
        }
        else {
            obj.baseDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevBaseDenomsResponse();
        message.baseDenoms = object.baseDenoms?.map((e) => protorev_1.BaseDenom.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetProtoRevEnabledRequest() {
    return {};
}
exports.QueryGetProtoRevEnabledRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevEnabledRequest();
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
        const obj = createBaseQueryGetProtoRevEnabledRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetProtoRevEnabledRequest();
        return message;
    },
};
function createBaseQueryGetProtoRevEnabledResponse() {
    return {
        enabled: false,
    };
}
exports.QueryGetProtoRevEnabledResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevEnabledResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevEnabledResponse();
        if ((0, helpers_1.isSet)(object.enabled))
            obj.enabled = Boolean(object.enabled);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevEnabledResponse();
        message.enabled = object.enabled ?? false;
        return message;
    },
};
function createBaseQueryGetProtoRevPoolRequest() {
    return {
        baseDenom: "",
        otherDenom: "",
    };
}
exports.QueryGetProtoRevPoolRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseDenom !== "") {
            writer.uint32(10).string(message.baseDenom);
        }
        if (message.otherDenom !== "") {
            writer.uint32(18).string(message.otherDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenom = reader.string();
                    break;
                case 2:
                    message.otherDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetProtoRevPoolRequest();
        if ((0, helpers_1.isSet)(object.baseDenom))
            obj.baseDenom = String(object.baseDenom);
        if ((0, helpers_1.isSet)(object.otherDenom))
            obj.otherDenom = String(object.otherDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.otherDenom !== undefined && (obj.otherDenom = message.otherDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevPoolRequest();
        message.baseDenom = object.baseDenom ?? "";
        message.otherDenom = object.otherDenom ?? "";
        return message;
    },
};
function createBaseQueryGetProtoRevPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryGetProtoRevPoolResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevPoolResponse();
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
        const obj = createBaseQueryGetProtoRevPoolResponse();
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
        const message = createBaseQueryGetProtoRevPoolResponse();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
function createBaseQueryGetAllProtocolRevenueRequest() {
    return {};
}
exports.QueryGetAllProtocolRevenueRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllProtocolRevenueRequest();
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
        const obj = createBaseQueryGetAllProtocolRevenueRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetAllProtocolRevenueRequest();
        return message;
    },
};
function createBaseQueryGetAllProtocolRevenueResponse() {
    return {
        allProtocolRevenue: protorev_1.AllProtocolRevenue.fromPartial({}),
    };
}
exports.QueryGetAllProtocolRevenueResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allProtocolRevenue !== undefined) {
            protorev_1.AllProtocolRevenue.encode(message.allProtocolRevenue, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllProtocolRevenueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allProtocolRevenue = protorev_1.AllProtocolRevenue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetAllProtocolRevenueResponse();
        if ((0, helpers_1.isSet)(object.allProtocolRevenue))
            obj.allProtocolRevenue = protorev_1.AllProtocolRevenue.fromJSON(object.allProtocolRevenue);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.allProtocolRevenue !== undefined &&
            (obj.allProtocolRevenue = message.allProtocolRevenue
                ? protorev_1.AllProtocolRevenue.toJSON(message.allProtocolRevenue)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllProtocolRevenueResponse();
        if (object.allProtocolRevenue !== undefined && object.allProtocolRevenue !== null) {
            message.allProtocolRevenue = protorev_1.AllProtocolRevenue.fromPartial(object.allProtocolRevenue);
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.GetProtoRevNumberOfTrades = this.GetProtoRevNumberOfTrades.bind(this);
        this.GetProtoRevProfitsByDenom = this.GetProtoRevProfitsByDenom.bind(this);
        this.GetProtoRevAllProfits = this.GetProtoRevAllProfits.bind(this);
        this.GetProtoRevStatisticsByRoute = this.GetProtoRevStatisticsByRoute.bind(this);
        this.GetProtoRevAllRouteStatistics = this.GetProtoRevAllRouteStatistics.bind(this);
        this.GetProtoRevTokenPairArbRoutes = this.GetProtoRevTokenPairArbRoutes.bind(this);
        this.GetProtoRevAdminAccount = this.GetProtoRevAdminAccount.bind(this);
        this.GetProtoRevDeveloperAccount = this.GetProtoRevDeveloperAccount.bind(this);
        this.GetProtoRevInfoByPoolType = this.GetProtoRevInfoByPoolType.bind(this);
        this.GetProtoRevMaxPoolPointsPerTx = this.GetProtoRevMaxPoolPointsPerTx.bind(this);
        this.GetProtoRevMaxPoolPointsPerBlock = this.GetProtoRevMaxPoolPointsPerBlock.bind(this);
        this.GetProtoRevBaseDenoms = this.GetProtoRevBaseDenoms.bind(this);
        this.GetProtoRevEnabled = this.GetProtoRevEnabled.bind(this);
        this.GetProtoRevPool = this.GetProtoRevPool.bind(this);
        this.GetAllProtocolRevenue = this.GetAllProtocolRevenue.bind(this);
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevNumberOfTrades(request = {}) {
        const data = exports.QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
        return promise.then((data) => exports.QueryGetProtoRevNumberOfTradesResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevProfitsByDenom(request) {
        const data = exports.QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
        return promise.then((data) => exports.QueryGetProtoRevProfitsByDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevAllProfits(request = {}) {
        const data = exports.QueryGetProtoRevAllProfitsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
        return promise.then((data) => exports.QueryGetProtoRevAllProfitsResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevStatisticsByRoute(request) {
        const data = exports.QueryGetProtoRevStatisticsByRouteRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByRoute", data);
        return promise.then((data) => exports.QueryGetProtoRevStatisticsByRouteResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevAllRouteStatistics(request = {}) {
        const data = exports.QueryGetProtoRevAllRouteStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllRouteStatistics", data);
        return promise.then((data) => exports.QueryGetProtoRevAllRouteStatisticsResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevTokenPairArbRoutes(request = {}) {
        const data = exports.QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
        return promise.then((data) => exports.QueryGetProtoRevTokenPairArbRoutesResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevAdminAccount(request = {}) {
        const data = exports.QueryGetProtoRevAdminAccountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAdminAccount", data);
        return promise.then((data) => exports.QueryGetProtoRevAdminAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevDeveloperAccount(request = {}) {
        const data = exports.QueryGetProtoRevDeveloperAccountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevDeveloperAccount", data);
        return promise.then((data) => exports.QueryGetProtoRevDeveloperAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevInfoByPoolType(request = {}) {
        const data = exports.QueryGetProtoRevInfoByPoolTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevInfoByPoolType", data);
        return promise.then((data) => exports.QueryGetProtoRevInfoByPoolTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevMaxPoolPointsPerTx(request = {}) {
        const data = exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerTx", data);
        return promise.then((data) => exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevMaxPoolPointsPerBlock(request = {}) {
        const data = exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerBlock", data);
        return promise.then((data) => exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevBaseDenoms(request = {}) {
        const data = exports.QueryGetProtoRevBaseDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevBaseDenoms", data);
        return promise.then((data) => exports.QueryGetProtoRevBaseDenomsResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevEnabled(request = {}) {
        const data = exports.QueryGetProtoRevEnabledRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevEnabled", data);
        return promise.then((data) => exports.QueryGetProtoRevEnabledResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetProtoRevPool(request) {
        const data = exports.QueryGetProtoRevPoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevPool", data);
        return promise.then((data) => exports.QueryGetProtoRevPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    GetAllProtocolRevenue(request = {}) {
        const data = exports.QueryGetAllProtocolRevenueRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetAllProtocolRevenue", data);
        return promise.then((data) => exports.QueryGetAllProtocolRevenueResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map