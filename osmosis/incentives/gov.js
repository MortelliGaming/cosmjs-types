"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const group_1 = require("./group");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "osmosis.incentives";
function createBaseCreateGroupsProposal() {
    return {
        title: "",
        description: "",
        createGroups: [],
    };
}
exports.CreateGroupsProposal = {
    typeUrl: "/osmosis.incentives.CreateGroupsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.createGroups) {
            group_1.CreateGroup.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGroupsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.createGroups.push(group_1.CreateGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCreateGroupsProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.createGroups))
            obj.createGroups = object.createGroups.map((e) => group_1.CreateGroup.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.createGroups) {
            obj.createGroups = message.createGroups.map((e) => (e ? group_1.CreateGroup.toJSON(e) : undefined));
        }
        else {
            obj.createGroups = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateGroupsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.createGroups = object.createGroups?.map((e) => group_1.CreateGroup.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=gov.js.map