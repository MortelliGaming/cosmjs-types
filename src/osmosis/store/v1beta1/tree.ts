/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "osmosis.store.v1beta1";
export interface Node {
  children: Child[];
}
export interface Child {
  index: Uint8Array;
  accumulation: string;
}
export interface Leaf {
  leaf?: Child;
}
function createBaseNode(): Node {
  return {
    children: [],
  };
}
export const Node = {
  typeUrl: "/osmosis.store.v1beta1.Node",
  encode(message: Node, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.children) {
      Child.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Node {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(Child.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Node {
    const obj = createBaseNode();
    if (Array.isArray(object?.children)) obj.children = object.children.map((e: any) => Child.fromJSON(e));
    return obj;
  },
  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map((e) => (e ? Child.toJSON(e) : undefined));
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node {
    const message = createBaseNode();
    message.children = object.children?.map((e) => Child.fromPartial(e)) || [];
    return message;
  },
};
function createBaseChild(): Child {
  return {
    index: new Uint8Array(),
    accumulation: "",
  };
}
export const Child = {
  typeUrl: "/osmosis.store.v1beta1.Child",
  encode(message: Child, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.accumulation !== "") {
      writer.uint32(18).string(message.accumulation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Child {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): Child {
    const obj = createBaseChild();
    if (isSet(object.index)) obj.index = bytesFromBase64(object.index);
    if (isSet(object.accumulation)) obj.accumulation = String(object.accumulation);
    return obj;
  },
  toJSON(message: Child): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = base64FromBytes(message.index !== undefined ? message.index : new Uint8Array()));
    message.accumulation !== undefined && (obj.accumulation = message.accumulation);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Child>, I>>(object: I): Child {
    const message = createBaseChild();
    message.index = object.index ?? new Uint8Array();
    message.accumulation = object.accumulation ?? "";
    return message;
  },
};
function createBaseLeaf(): Leaf {
  return {
    leaf: undefined,
  };
}
export const Leaf = {
  typeUrl: "/osmosis.store.v1beta1.Leaf",
  encode(message: Leaf, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaf !== undefined) {
      Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Leaf {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaf = Child.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Leaf {
    const obj = createBaseLeaf();
    if (isSet(object.leaf)) obj.leaf = Child.fromJSON(object.leaf);
    return obj;
  },
  toJSON(message: Leaf): unknown {
    const obj: any = {};
    message.leaf !== undefined && (obj.leaf = message.leaf ? Child.toJSON(message.leaf) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Leaf>, I>>(object: I): Leaf {
    const message = createBaseLeaf();
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = Child.fromPartial(object.leaf);
    }
    return message;
  },
};
