"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaf = exports.Child = exports.Node = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.store.v1beta1";
function createBaseNode() {
    return {
        children: [],
    };
}
exports.Node = {
    typeUrl: "/osmosis.store.v1beta1.Node",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.children) {
            exports.Child.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.children.push(exports.Child.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseNode();
        if (Array.isArray(object?.children))
            obj.children = object.children.map((e) => exports.Child.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.children) {
            obj.children = message.children.map((e) => (e ? exports.Child.toJSON(e) : undefined));
        }
        else {
            obj.children = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNode();
        message.children = object.children?.map((e) => exports.Child.fromPartial(e)) || [];
        return message;
    },
};
function createBaseChild() {
    return {
        index: new Uint8Array(),
        accumulation: "",
    };
}
exports.Child = {
    typeUrl: "/osmosis.store.v1beta1.Child",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index.length !== 0) {
            writer.uint32(10).bytes(message.index);
        }
        if (message.accumulation !== "") {
            writer.uint32(18).string(message.accumulation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChild();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.bytes();
                    break;
                case 2:
                    message.accumulation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseChild();
        if ((0, helpers_1.isSet)(object.index))
            obj.index = (0, helpers_1.bytesFromBase64)(object.index);
        if ((0, helpers_1.isSet)(object.accumulation))
            obj.accumulation = String(object.accumulation);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined &&
            (obj.index = (0, helpers_1.base64FromBytes)(message.index !== undefined ? message.index : new Uint8Array()));
        message.accumulation !== undefined && (obj.accumulation = message.accumulation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChild();
        message.index = object.index ?? new Uint8Array();
        message.accumulation = object.accumulation ?? "";
        return message;
    },
};
function createBaseLeaf() {
    return {
        leaf: undefined,
    };
}
exports.Leaf = {
    typeUrl: "/osmosis.store.v1beta1.Leaf",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.leaf !== undefined) {
            exports.Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaf();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaf = exports.Child.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLeaf();
        if ((0, helpers_1.isSet)(object.leaf))
            obj.leaf = exports.Child.fromJSON(object.leaf);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.leaf !== undefined && (obj.leaf = message.leaf ? exports.Child.toJSON(message.leaf) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLeaf();
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = exports.Child.fromPartial(object.leaf);
        }
        return message;
    },
};
//# sourceMappingURL=tree.js.map