"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRoute = exports.poolTypeToJSON = exports.poolTypeFromJSON = exports.PoolType = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.poolmanager.v1beta1";
/** PoolType is an enumeration of all supported pool types. */
var PoolType;
(function (PoolType) {
    /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
    PoolType[PoolType["Balancer"] = 0] = "Balancer";
    /**
     * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
     * in x/gamm.
     */
    PoolType[PoolType["Stableswap"] = 1] = "Stableswap";
    /**
     * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
     * defined in x/concentrated-liquidity.
     */
    PoolType[PoolType["Concentrated"] = 2] = "Concentrated";
    /**
     * CosmWasm - CosmWasm is the pool model specific to CosmWasm. It is defined in
     * x/cosmwasmpool.
     */
    PoolType[PoolType["CosmWasm"] = 3] = "CosmWasm";
    PoolType[PoolType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PoolType || (exports.PoolType = PoolType = {}));
function poolTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "Balancer":
            return PoolType.Balancer;
        case 1:
        case "Stableswap":
            return PoolType.Stableswap;
        case 2:
        case "Concentrated":
            return PoolType.Concentrated;
        case 3:
        case "CosmWasm":
            return PoolType.CosmWasm;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PoolType.UNRECOGNIZED;
    }
}
exports.poolTypeFromJSON = poolTypeFromJSON;
function poolTypeToJSON(object) {
    switch (object) {
        case PoolType.Balancer:
            return "Balancer";
        case PoolType.Stableswap:
            return "Stableswap";
        case PoolType.Concentrated:
            return "Concentrated";
        case PoolType.CosmWasm:
            return "CosmWasm";
        case PoolType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.poolTypeToJSON = poolTypeToJSON;
function createBaseModuleRoute() {
    return {
        poolType: 0,
        poolId: undefined,
    };
}
exports.ModuleRoute = {
    typeUrl: "/osmosis.poolmanager.v1beta1.ModuleRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolType !== 0) {
            writer.uint32(8).int32(message.poolType);
        }
        if (message.poolId !== undefined) {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolType = reader.int32();
                    break;
                case 2:
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
        const obj = createBaseModuleRoute();
        if ((0, helpers_1.isSet)(object.poolType))
            obj.poolType = poolTypeFromJSON(object.poolType);
        if ((0, helpers_1.isSet)(object.poolId))
            obj.poolId = BigInt(object.poolId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
        if (message.poolId !== undefined) {
            obj.poolId = message.poolId.toString();
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleRoute();
        message.poolType = object.poolType ?? 0;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = BigInt(object.poolId.toString());
        }
        return message;
    },
};
//# sourceMappingURL=module_route.js.map