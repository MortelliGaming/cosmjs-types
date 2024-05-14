"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryBalancesResponse = exports.QueryBalancesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.vesting.v2";
function createBaseQueryBalancesRequest() {
    return {
        address: "",
    };
}
exports.QueryBalancesRequest = {
    typeUrl: "/evmos.vesting.v2.QueryBalancesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBalancesRequest();
        if ((0, helpers_1.isSet)(object.address))
            obj.address = String(object.address);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalancesRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryBalancesResponse() {
    return {
        locked: [],
        unvested: [],
        vested: [],
    };
}
exports.QueryBalancesResponse = {
    typeUrl: "/evmos.vesting.v2.QueryBalancesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locked) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unvested) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.vested) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locked.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unvested.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.vested.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBalancesResponse();
        if (Array.isArray(object?.locked))
            obj.locked = object.locked.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.unvested))
            obj.unvested = object.unvested.map((e) => coin_1.Coin.fromJSON(e));
        if (Array.isArray(object?.vested))
            obj.vested = object.vested.map((e) => coin_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.locked) {
            obj.locked = message.locked.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.locked = [];
        }
        if (message.unvested) {
            obj.unvested = message.unvested.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.unvested = [];
        }
        if (message.vested) {
            obj.vested = message.vested.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.vested = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalancesResponse();
        message.locked = object.locked?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.unvested = object.unvested?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.vested = object.vested?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Balances = this.Balances.bind(this);
    }
    Balances(request) {
        const data = exports.QueryBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Query", "Balances", data);
        return promise.then((data) => exports.QueryBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map