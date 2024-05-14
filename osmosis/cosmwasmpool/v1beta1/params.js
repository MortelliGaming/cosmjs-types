"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseParams() {
    return {
        codeIdWhitelist: [],
        poolMigrationLimit: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.codeIdWhitelist) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.poolMigrationLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolMigrationLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIdWhitelist.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIdWhitelist.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.poolMigrationLimit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if (Array.isArray(object?.codeIdWhitelist))
            obj.codeIdWhitelist = object.codeIdWhitelist.map((e) => BigInt(e.toString()));
        if ((0, helpers_1.isSet)(object.poolMigrationLimit))
            obj.poolMigrationLimit = BigInt(object.poolMigrationLimit.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.codeIdWhitelist) {
            obj.codeIdWhitelist = message.codeIdWhitelist.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.codeIdWhitelist = [];
        }
        message.poolMigrationLimit !== undefined &&
            (obj.poolMigrationLimit = (message.poolMigrationLimit || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.codeIdWhitelist = object.codeIdWhitelist?.map((e) => BigInt(e.toString())) || [];
        if (object.poolMigrationLimit !== undefined && object.poolMigrationLimit !== null) {
            message.poolMigrationLimit = BigInt(object.poolMigrationLimit.toString());
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map