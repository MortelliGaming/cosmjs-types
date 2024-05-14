"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreateBalancerPoolResponse = exports.MsgCreateBalancerPool = exports.protobufPackage = void 0;
/* eslint-disable */
const balancerPool_1 = require("../../../v1beta1/balancerPool");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
exports.protobufPackage = "osmosis.gamm.poolmodels.balancer.v1beta1";
function createBaseMsgCreateBalancerPool() {
    return {
        sender: "",
        poolParams: undefined,
        poolAssets: [],
        futurePoolGovernor: "",
    };
}
exports.MsgCreateBalancerPool = {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolParams !== undefined) {
            balancerPool_1.PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.poolAssets) {
            balancerPool_1.PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.futurePoolGovernor !== "") {
            writer.uint32(34).string(message.futurePoolGovernor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBalancerPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolParams = balancerPool_1.PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolAssets.push(balancerPool_1.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.futurePoolGovernor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateBalancerPool();
        if ((0, helpers_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_1.isSet)(object.poolParams))
            obj.poolParams = balancerPool_1.PoolParams.fromJSON(object.poolParams);
        if (Array.isArray(object?.poolAssets))
            obj.poolAssets = object.poolAssets.map((e) => balancerPool_1.PoolAsset.fromJSON(e));
        if ((0, helpers_1.isSet)(object.futurePoolGovernor))
            obj.futurePoolGovernor = String(object.futurePoolGovernor);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolParams !== undefined &&
            (obj.poolParams = message.poolParams ? balancerPool_1.PoolParams.toJSON(message.poolParams) : undefined);
        if (message.poolAssets) {
            obj.poolAssets = message.poolAssets.map((e) => (e ? balancerPool_1.PoolAsset.toJSON(e) : undefined));
        }
        else {
            obj.poolAssets = [];
        }
        message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBalancerPool();
        message.sender = object.sender ?? "";
        if (object.poolParams !== undefined && object.poolParams !== null) {
            message.poolParams = balancerPool_1.PoolParams.fromPartial(object.poolParams);
        }
        message.poolAssets = object.poolAssets?.map((e) => balancerPool_1.PoolAsset.fromPartial(e)) || [];
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        return message;
    },
};
function createBaseMsgCreateBalancerPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
exports.MsgCreateBalancerPoolResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBalancerPoolResponse();
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
        const obj = createBaseMsgCreateBalancerPoolResponse();
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
        const message = createBaseMsgCreateBalancerPoolResponse();
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateBalancerPool = this.CreateBalancerPool.bind(this);
    }
    CreateBalancerPool(request) {
        const data = exports.MsgCreateBalancerPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.balancer.v1beta1.Msg", "CreateBalancerPool", data);
        return promise.then((data) => exports.MsgCreateBalancerPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map