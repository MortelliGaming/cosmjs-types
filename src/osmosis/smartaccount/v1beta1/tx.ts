/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.smartaccount.v1beta1";
/** MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type. */
export interface MsgAddAuthenticator {
  sender: string;
  type: string;
  data: Uint8Array;
}
/** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
export interface MsgAddAuthenticatorResponse {
  /** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
  success: boolean;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 */
export interface MsgRemoveAuthenticator {
  sender: string;
  id: bigint;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 */
export interface MsgRemoveAuthenticatorResponse {
  /**
   * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
   * type.
   */
  success: boolean;
}
export interface MsgSetActiveState {
  sender: string;
  active: boolean;
}
export interface MsgSetActiveStateResponse {}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 */
export interface TxExtension {
  /**
   * selected_authenticators holds the authenticator_id for the chosen
   * authenticator per message.
   */
  selectedAuthenticators: bigint[];
}
function createBaseMsgAddAuthenticator(): MsgAddAuthenticator {
  return {
    sender: "",
    type: "",
    data: new Uint8Array(),
  };
}
export const MsgAddAuthenticator = {
  typeUrl: "/osmosis.smartaccount.v1beta1.MsgAddAuthenticator",
  encode(message: MsgAddAuthenticator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAuthenticator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAuthenticator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddAuthenticator {
    const obj = createBaseMsgAddAuthenticator();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: MsgAddAuthenticator): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddAuthenticator>, I>>(object: I): MsgAddAuthenticator {
    const message = createBaseMsgAddAuthenticator();
    message.sender = object.sender ?? "";
    message.type = object.type ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseMsgAddAuthenticatorResponse(): MsgAddAuthenticatorResponse {
  return {
    success: false,
  };
}
export const MsgAddAuthenticatorResponse = {
  typeUrl: "/osmosis.smartaccount.v1beta1.MsgAddAuthenticatorResponse",
  encode(message: MsgAddAuthenticatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAuthenticatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddAuthenticatorResponse {
    const obj = createBaseMsgAddAuthenticatorResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgAddAuthenticatorResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddAuthenticatorResponse>, I>>(
    object: I,
  ): MsgAddAuthenticatorResponse {
    const message = createBaseMsgAddAuthenticatorResponse();
    message.success = object.success ?? false;
    return message;
  },
};
function createBaseMsgRemoveAuthenticator(): MsgRemoveAuthenticator {
  return {
    sender: "",
    id: BigInt(0),
  };
}
export const MsgRemoveAuthenticator = {
  typeUrl: "/osmosis.smartaccount.v1beta1.MsgRemoveAuthenticator",
  encode(message: MsgRemoveAuthenticator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAuthenticator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAuthenticator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveAuthenticator {
    const obj = createBaseMsgRemoveAuthenticator();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: MsgRemoveAuthenticator): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveAuthenticator>, I>>(object: I): MsgRemoveAuthenticator {
    const message = createBaseMsgRemoveAuthenticator();
    message.sender = object.sender ?? "";
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseMsgRemoveAuthenticatorResponse(): MsgRemoveAuthenticatorResponse {
  return {
    success: false,
  };
}
export const MsgRemoveAuthenticatorResponse = {
  typeUrl: "/osmosis.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse",
  encode(
    message: MsgRemoveAuthenticatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAuthenticatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveAuthenticatorResponse {
    const obj = createBaseMsgRemoveAuthenticatorResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgRemoveAuthenticatorResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveAuthenticatorResponse>, I>>(
    object: I,
  ): MsgRemoveAuthenticatorResponse {
    const message = createBaseMsgRemoveAuthenticatorResponse();
    message.success = object.success ?? false;
    return message;
  },
};
function createBaseMsgSetActiveState(): MsgSetActiveState {
  return {
    sender: "",
    active: false,
  };
}
export const MsgSetActiveState = {
  typeUrl: "/osmosis.smartaccount.v1beta1.MsgSetActiveState",
  encode(message: MsgSetActiveState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActiveState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActiveState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetActiveState {
    const obj = createBaseMsgSetActiveState();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.active)) obj.active = Boolean(object.active);
    return obj;
  },
  toJSON(message: MsgSetActiveState): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetActiveState>, I>>(object: I): MsgSetActiveState {
    const message = createBaseMsgSetActiveState();
    message.sender = object.sender ?? "";
    message.active = object.active ?? false;
    return message;
  },
};
function createBaseMsgSetActiveStateResponse(): MsgSetActiveStateResponse {
  return {};
}
export const MsgSetActiveStateResponse = {
  typeUrl: "/osmosis.smartaccount.v1beta1.MsgSetActiveStateResponse",
  encode(_: MsgSetActiveStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActiveStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActiveStateResponse();
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
  fromJSON(_: any): MsgSetActiveStateResponse {
    const obj = createBaseMsgSetActiveStateResponse();
    return obj;
  },
  toJSON(_: MsgSetActiveStateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetActiveStateResponse>, I>>(_: I): MsgSetActiveStateResponse {
    const message = createBaseMsgSetActiveStateResponse();
    return message;
  },
};
function createBaseTxExtension(): TxExtension {
  return {
    selectedAuthenticators: [],
  };
}
export const TxExtension = {
  typeUrl: "/osmosis.smartaccount.v1beta1.TxExtension",
  encode(message: TxExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.selectedAuthenticators) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.selectedAuthenticators.push(reader.uint64());
            }
          } else {
            message.selectedAuthenticators.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxExtension {
    const obj = createBaseTxExtension();
    if (Array.isArray(object?.selectedAuthenticators))
      obj.selectedAuthenticators = object.selectedAuthenticators.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: TxExtension): unknown {
    const obj: any = {};
    if (message.selectedAuthenticators) {
      obj.selectedAuthenticators = message.selectedAuthenticators.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.selectedAuthenticators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxExtension>, I>>(object: I): TxExtension {
    const message = createBaseTxExtension();
    message.selectedAuthenticators = object.selectedAuthenticators?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  AddAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse>;
  RemoveAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse>;
  /**
   * SetActiveState sets the active state of the authenticator.
   * Primarily used for circuit breaking.
   */
  SetActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddAuthenticator = this.AddAuthenticator.bind(this);
    this.RemoveAuthenticator = this.RemoveAuthenticator.bind(this);
    this.SetActiveState = this.SetActiveState.bind(this);
  }
  AddAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse> {
    const data = MsgAddAuthenticator.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Msg", "AddAuthenticator", data);
    return promise.then((data) => MsgAddAuthenticatorResponse.decode(new BinaryReader(data)));
  }
  RemoveAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse> {
    const data = MsgRemoveAuthenticator.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Msg", "RemoveAuthenticator", data);
    return promise.then((data) => MsgRemoveAuthenticatorResponse.decode(new BinaryReader(data)));
  }
  SetActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse> {
    const data = MsgSetActiveState.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Msg", "SetActiveState", data);
    return promise.then((data) => MsgSetActiveStateResponse.decode(new BinaryReader(data)));
  }
}
