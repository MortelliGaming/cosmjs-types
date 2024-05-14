/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPool {
  codeId: bigint;
  instantiateMsg: Uint8Array;
  sender: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponse {
  poolId: bigint;
}
function createBaseMsgCreateCosmWasmPool(): MsgCreateCosmWasmPool {
  return {
    codeId: BigInt(0),
    instantiateMsg: new Uint8Array(),
    sender: "",
  };
}
export const MsgCreateCosmWasmPool = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool",
  encode(message: MsgCreateCosmWasmPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.instantiateMsg.length !== 0) {
      writer.uint32(18).bytes(message.instantiateMsg);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCosmWasmPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCosmWasmPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.instantiateMsg = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateCosmWasmPool {
    const obj = createBaseMsgCreateCosmWasmPool();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.instantiateMsg)) obj.instantiateMsg = bytesFromBase64(object.instantiateMsg);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgCreateCosmWasmPool): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.instantiateMsg !== undefined &&
      (obj.instantiateMsg = base64FromBytes(
        message.instantiateMsg !== undefined ? message.instantiateMsg : new Uint8Array(),
      ));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateCosmWasmPool>, I>>(object: I): MsgCreateCosmWasmPool {
    const message = createBaseMsgCreateCosmWasmPool();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgCreateCosmWasmPoolResponse(): MsgCreateCosmWasmPoolResponse {
  return {
    poolId: BigInt(0),
  };
}
export const MsgCreateCosmWasmPoolResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse",
  encode(message: MsgCreateCosmWasmPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCosmWasmPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCosmWasmPoolResponse();
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
  fromJSON(object: any): MsgCreateCosmWasmPoolResponse {
    const obj = createBaseMsgCreateCosmWasmPoolResponse();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: MsgCreateCosmWasmPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateCosmWasmPoolResponse>, I>>(
    object: I,
  ): MsgCreateCosmWasmPoolResponse {
    const message = createBaseMsgCreateCosmWasmPoolResponse();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
