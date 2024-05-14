"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryInflationRateResponse = exports.QueryInflationRateRequest = exports.QueryCirculatingSupplyResponse = exports.QueryCirculatingSupplyRequest = exports.QuerySkippedEpochsResponse = exports.QuerySkippedEpochsRequest = exports.QueryEpochMintProvisionResponse = exports.QueryEpochMintProvisionRequest = exports.QueryPeriodResponse = exports.QueryPeriodRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.inflation.v1";
function createBaseQueryPeriodRequest() {
    return {};
}
exports.QueryPeriodRequest = {
    typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPeriodRequest();
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
        const obj = createBaseQueryPeriodRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryPeriodRequest();
        return message;
    },
};
function createBaseQueryPeriodResponse() {
    return {
        period: BigInt(0),
    };
}
exports.QueryPeriodResponse = {
    typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.period !== BigInt(0)) {
            writer.uint32(8).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPeriodResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.period = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPeriodResponse();
        if ((0, helpers_1.isSet)(object.period))
            obj.period = BigInt(object.period.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPeriodResponse();
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period.toString());
        }
        return message;
    },
};
function createBaseQueryEpochMintProvisionRequest() {
    return {};
}
exports.QueryEpochMintProvisionRequest = {
    typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochMintProvisionRequest();
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
        const obj = createBaseQueryEpochMintProvisionRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryEpochMintProvisionRequest();
        return message;
    },
};
function createBaseQueryEpochMintProvisionResponse() {
    return {
        epochMintProvision: coin_1.DecCoin.fromPartial({}),
    };
}
exports.QueryEpochMintProvisionResponse = {
    typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.epochMintProvision !== undefined) {
            coin_1.DecCoin.encode(message.epochMintProvision, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochMintProvisionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochMintProvision = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryEpochMintProvisionResponse();
        if ((0, helpers_1.isSet)(object.epochMintProvision))
            obj.epochMintProvision = coin_1.DecCoin.fromJSON(object.epochMintProvision);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.epochMintProvision !== undefined &&
            (obj.epochMintProvision = message.epochMintProvision
                ? coin_1.DecCoin.toJSON(message.epochMintProvision)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochMintProvisionResponse();
        if (object.epochMintProvision !== undefined && object.epochMintProvision !== null) {
            message.epochMintProvision = coin_1.DecCoin.fromPartial(object.epochMintProvision);
        }
        return message;
    },
};
function createBaseQuerySkippedEpochsRequest() {
    return {};
}
exports.QuerySkippedEpochsRequest = {
    typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySkippedEpochsRequest();
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
        const obj = createBaseQuerySkippedEpochsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQuerySkippedEpochsRequest();
        return message;
    },
};
function createBaseQuerySkippedEpochsResponse() {
    return {
        skippedEpochs: BigInt(0),
    };
}
exports.QuerySkippedEpochsResponse = {
    typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.skippedEpochs !== BigInt(0)) {
            writer.uint32(8).uint64(message.skippedEpochs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySkippedEpochsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skippedEpochs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySkippedEpochsResponse();
        if ((0, helpers_1.isSet)(object.skippedEpochs))
            obj.skippedEpochs = BigInt(object.skippedEpochs.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.skippedEpochs !== undefined &&
            (obj.skippedEpochs = (message.skippedEpochs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySkippedEpochsResponse();
        if (object.skippedEpochs !== undefined && object.skippedEpochs !== null) {
            message.skippedEpochs = BigInt(object.skippedEpochs.toString());
        }
        return message;
    },
};
function createBaseQueryCirculatingSupplyRequest() {
    return {};
}
exports.QueryCirculatingSupplyRequest = {
    typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCirculatingSupplyRequest();
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
        const obj = createBaseQueryCirculatingSupplyRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryCirculatingSupplyRequest();
        return message;
    },
};
function createBaseQueryCirculatingSupplyResponse() {
    return {
        circulatingSupply: coin_1.DecCoin.fromPartial({}),
    };
}
exports.QueryCirculatingSupplyResponse = {
    typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.circulatingSupply !== undefined) {
            coin_1.DecCoin.encode(message.circulatingSupply, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCirculatingSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.circulatingSupply = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCirculatingSupplyResponse();
        if ((0, helpers_1.isSet)(object.circulatingSupply))
            obj.circulatingSupply = coin_1.DecCoin.fromJSON(object.circulatingSupply);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.circulatingSupply !== undefined &&
            (obj.circulatingSupply = message.circulatingSupply
                ? coin_1.DecCoin.toJSON(message.circulatingSupply)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCirculatingSupplyResponse();
        if (object.circulatingSupply !== undefined && object.circulatingSupply !== null) {
            message.circulatingSupply = coin_1.DecCoin.fromPartial(object.circulatingSupply);
        }
        return message;
    },
};
function createBaseQueryInflationRateRequest() {
    return {};
}
exports.QueryInflationRateRequest = {
    typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationRateRequest();
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
        const obj = createBaseQueryInflationRateRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryInflationRateRequest();
        return message;
    },
};
function createBaseQueryInflationRateResponse() {
    return {
        inflationRate: "",
    };
}
exports.QueryInflationRateResponse = {
    typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inflationRate !== "") {
            writer.uint32(10).string(message.inflationRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationRateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflationRate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryInflationRateResponse();
        if ((0, helpers_1.isSet)(object.inflationRate))
            obj.inflationRate = String(object.inflationRate);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inflationRate !== undefined && (obj.inflationRate = message.inflationRate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInflationRateResponse();
        message.inflationRate = object.inflationRate ?? "";
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/evmos.inflation.v1.QueryParamsRequest",
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
    typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
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
        this.Period = this.Period.bind(this);
        this.EpochMintProvision = this.EpochMintProvision.bind(this);
        this.SkippedEpochs = this.SkippedEpochs.bind(this);
        this.CirculatingSupply = this.CirculatingSupply.bind(this);
        this.InflationRate = this.InflationRate.bind(this);
        this.Params = this.Params.bind(this);
    }
    Period(request = {}) {
        const data = exports.QueryPeriodRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "Period", data);
        return promise.then((data) => exports.QueryPeriodResponse.decode(new binary_1.BinaryReader(data)));
    }
    EpochMintProvision(request = {}) {
        const data = exports.QueryEpochMintProvisionRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "EpochMintProvision", data);
        return promise.then((data) => exports.QueryEpochMintProvisionResponse.decode(new binary_1.BinaryReader(data)));
    }
    SkippedEpochs(request = {}) {
        const data = exports.QuerySkippedEpochsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "SkippedEpochs", data);
        return promise.then((data) => exports.QuerySkippedEpochsResponse.decode(new binary_1.BinaryReader(data)));
    }
    CirculatingSupply(request = {}) {
        const data = exports.QueryCirculatingSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "CirculatingSupply", data);
        return promise.then((data) => exports.QueryCirculatingSupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    InflationRate(request = {}) {
        const data = exports.QueryInflationRateRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "InflationRate", data);
        return promise.then((data) => exports.QueryInflationRateResponse.decode(new binary_1.BinaryReader(data)));
    }
    Params(request = {}) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.inflation.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map