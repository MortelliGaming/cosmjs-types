"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitPoolExecuteMsgResponse = exports.ExitPoolExecuteMsgRequest = exports.JoinPoolExecuteMsgResponse = exports.JoinPoolExecuteMsgRequest = exports.EmptyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "osmosis.cosmwasmpool.v1beta1";
function createBaseEmptyRequest() {
    return {};
}
exports.EmptyRequest = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.EmptyRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyRequest();
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
        const obj = createBaseEmptyRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseEmptyRequest();
        return message;
    },
};
function createBaseJoinPoolExecuteMsgRequest() {
    return {
        joinPool: exports.EmptyRequest.fromPartial({}),
    };
}
exports.JoinPoolExecuteMsgRequest = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.joinPool !== undefined) {
            exports.EmptyRequest.encode(message.joinPool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinPoolExecuteMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.joinPool = exports.EmptyRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseJoinPoolExecuteMsgRequest();
        if ((0, helpers_1.isSet)(object.joinPool))
            obj.joinPool = exports.EmptyRequest.fromJSON(object.joinPool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.joinPool !== undefined &&
            (obj.joinPool = message.joinPool ? exports.EmptyRequest.toJSON(message.joinPool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseJoinPoolExecuteMsgRequest();
        if (object.joinPool !== undefined && object.joinPool !== null) {
            message.joinPool = exports.EmptyRequest.fromPartial(object.joinPool);
        }
        return message;
    },
};
function createBaseJoinPoolExecuteMsgResponse() {
    return {};
}
exports.JoinPoolExecuteMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinPoolExecuteMsgResponse();
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
        const obj = createBaseJoinPoolExecuteMsgResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseJoinPoolExecuteMsgResponse();
        return message;
    },
};
function createBaseExitPoolExecuteMsgRequest() {
    return {
        exitPool: exports.EmptyRequest.fromPartial({}),
    };
}
exports.ExitPoolExecuteMsgRequest = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exitPool !== undefined) {
            exports.EmptyRequest.encode(message.exitPool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExitPoolExecuteMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exitPool = exports.EmptyRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseExitPoolExecuteMsgRequest();
        if ((0, helpers_1.isSet)(object.exitPool))
            obj.exitPool = exports.EmptyRequest.fromJSON(object.exitPool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.exitPool !== undefined &&
            (obj.exitPool = message.exitPool ? exports.EmptyRequest.toJSON(message.exitPool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExitPoolExecuteMsgRequest();
        if (object.exitPool !== undefined && object.exitPool !== null) {
            message.exitPool = exports.EmptyRequest.fromPartial(object.exitPool);
        }
        return message;
    },
};
function createBaseExitPoolExecuteMsgResponse() {
    return {};
}
exports.ExitPoolExecuteMsgResponse = {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExitPoolExecuteMsgResponse();
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
        const obj = createBaseExitPoolExecuteMsgResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseExitPoolExecuteMsgResponse();
        return message;
    },
};
//# sourceMappingURL=transmuter_msgs.js.map