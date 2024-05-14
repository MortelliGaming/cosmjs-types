/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, Exact, isSet } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequest {}
export interface JoinPoolExecuteMsgRequest {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   */
  joinPool: EmptyRequest;
}
export interface JoinPoolExecuteMsgResponse {}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequest {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   */
  exitPool: EmptyRequest;
}
export interface ExitPoolExecuteMsgResponse {}
function createBaseEmptyRequest(): EmptyRequest {
  return {};
}
export const EmptyRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.EmptyRequest",
  encode(_: EmptyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EmptyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): EmptyRequest {
    const obj = createBaseEmptyRequest();
    return obj;
  },
  toJSON(_: EmptyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EmptyRequest>, I>>(_: I): EmptyRequest {
    const message = createBaseEmptyRequest();
    return message;
  },
};
function createBaseJoinPoolExecuteMsgRequest(): JoinPoolExecuteMsgRequest {
  return {
    joinPool: EmptyRequest.fromPartial({}),
  };
}
export const JoinPoolExecuteMsgRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest",
  encode(message: JoinPoolExecuteMsgRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.joinPool !== undefined) {
      EmptyRequest.encode(message.joinPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): JoinPoolExecuteMsgRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinPoolExecuteMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.joinPool = EmptyRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): JoinPoolExecuteMsgRequest {
    const obj = createBaseJoinPoolExecuteMsgRequest();
    if (isSet(object.joinPool)) obj.joinPool = EmptyRequest.fromJSON(object.joinPool);
    return obj;
  },
  toJSON(message: JoinPoolExecuteMsgRequest): unknown {
    const obj: any = {};
    message.joinPool !== undefined &&
      (obj.joinPool = message.joinPool ? EmptyRequest.toJSON(message.joinPool) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<JoinPoolExecuteMsgRequest>, I>>(
    object: I,
  ): JoinPoolExecuteMsgRequest {
    const message = createBaseJoinPoolExecuteMsgRequest();
    if (object.joinPool !== undefined && object.joinPool !== null) {
      message.joinPool = EmptyRequest.fromPartial(object.joinPool);
    }
    return message;
  },
};
function createBaseJoinPoolExecuteMsgResponse(): JoinPoolExecuteMsgResponse {
  return {};
}
export const JoinPoolExecuteMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse",
  encode(_: JoinPoolExecuteMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): JoinPoolExecuteMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): JoinPoolExecuteMsgResponse {
    const obj = createBaseJoinPoolExecuteMsgResponse();
    return obj;
  },
  toJSON(_: JoinPoolExecuteMsgResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<JoinPoolExecuteMsgResponse>, I>>(_: I): JoinPoolExecuteMsgResponse {
    const message = createBaseJoinPoolExecuteMsgResponse();
    return message;
  },
};
function createBaseExitPoolExecuteMsgRequest(): ExitPoolExecuteMsgRequest {
  return {
    exitPool: EmptyRequest.fromPartial({}),
  };
}
export const ExitPoolExecuteMsgRequest = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest",
  encode(message: ExitPoolExecuteMsgRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exitPool !== undefined) {
      EmptyRequest.encode(message.exitPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExitPoolExecuteMsgRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitPoolExecuteMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exitPool = EmptyRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExitPoolExecuteMsgRequest {
    const obj = createBaseExitPoolExecuteMsgRequest();
    if (isSet(object.exitPool)) obj.exitPool = EmptyRequest.fromJSON(object.exitPool);
    return obj;
  },
  toJSON(message: ExitPoolExecuteMsgRequest): unknown {
    const obj: any = {};
    message.exitPool !== undefined &&
      (obj.exitPool = message.exitPool ? EmptyRequest.toJSON(message.exitPool) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExitPoolExecuteMsgRequest>, I>>(
    object: I,
  ): ExitPoolExecuteMsgRequest {
    const message = createBaseExitPoolExecuteMsgRequest();
    if (object.exitPool !== undefined && object.exitPool !== null) {
      message.exitPool = EmptyRequest.fromPartial(object.exitPool);
    }
    return message;
  },
};
function createBaseExitPoolExecuteMsgResponse(): ExitPoolExecuteMsgResponse {
  return {};
}
export const ExitPoolExecuteMsgResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse",
  encode(_: ExitPoolExecuteMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExitPoolExecuteMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): ExitPoolExecuteMsgResponse {
    const obj = createBaseExitPoolExecuteMsgResponse();
    return obj;
  },
  toJSON(_: ExitPoolExecuteMsgResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExitPoolExecuteMsgResponse>, I>>(_: I): ExitPoolExecuteMsgResponse {
    const message = createBaseExitPoolExecuteMsgResponse();
    return message;
  },
};
