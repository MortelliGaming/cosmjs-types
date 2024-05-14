/* eslint-disable */
import { CreateGroup } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.incentives";
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposal {
  title: string;
  description: string;
  createGroups: CreateGroup[];
}
function createBaseCreateGroupsProposal(): CreateGroupsProposal {
  return {
    title: "",
    description: "",
    createGroups: [],
  };
}
export const CreateGroupsProposal = {
  typeUrl: "/osmosis.incentives.CreateGroupsProposal",
  encode(message: CreateGroupsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.createGroups) {
      CreateGroup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateGroupsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.createGroups.push(CreateGroup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateGroupsProposal {
    const obj = createBaseCreateGroupsProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.createGroups))
      obj.createGroups = object.createGroups.map((e: any) => CreateGroup.fromJSON(e));
    return obj;
  },
  toJSON(message: CreateGroupsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.createGroups) {
      obj.createGroups = message.createGroups.map((e) => (e ? CreateGroup.toJSON(e) : undefined));
    } else {
      obj.createGroups = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupsProposal>, I>>(object: I): CreateGroupsProposal {
    const message = createBaseCreateGroupsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.createGroups = object.createGroups?.map((e) => CreateGroup.fromPartial(e)) || [];
    return message;
  },
};
