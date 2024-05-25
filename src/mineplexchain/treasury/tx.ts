/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "mineplex.mineplexchain.treasury";
export interface MsgMint {
  creator: string;
  amount: string;
}
export interface MsgMintResponse {}
export interface MsgBurn {
  creator: string;
  amount: string;
}
export interface MsgBurnResponse {}
export interface MsgChangeOwner {
  creator: string;
  newOwner: string;
}
export interface MsgChangeOwnerResponse {}
function createBaseMsgMint(): MsgMint {
  return {
    creator: "",
    amount: "",
  };
}
export const MsgMint = {
  typeUrl: "/mineplex.mineplexchain.treasury.MsgMint",
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMint {
    const obj = createBaseMsgMint();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
export const MsgMintResponse = {
  typeUrl: "/mineplex.mineplexchain.treasury.MsgMintResponse",
  encode(_: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
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
  fromJSON(_: any): MsgMintResponse {
    const obj = createBaseMsgMintResponse();
    return obj;
  },
  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(_: I): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
};
function createBaseMsgBurn(): MsgBurn {
  return {
    creator: "",
    amount: "",
  };
}
export const MsgBurn = {
  typeUrl: "/mineplex.mineplexchain.treasury.MsgBurn",
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurn {
    const obj = createBaseMsgBurn();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  typeUrl: "/mineplex.mineplexchain.treasury.MsgBurnResponse",
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromJSON(_: any): MsgBurnResponse {
    const obj = createBaseMsgBurnResponse();
    return obj;
  },
  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(_: I): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
};
function createBaseMsgChangeOwner(): MsgChangeOwner {
  return {
    creator: "",
    newOwner: "",
  };
}
export const MsgChangeOwner = {
  typeUrl: "/mineplex.mineplexchain.treasury.MsgChangeOwner",
  encode(message: MsgChangeOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.newOwner !== "") {
      writer.uint32(18).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChangeOwner {
    const obj = createBaseMsgChangeOwner();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.newOwner)) obj.newOwner = String(object.newOwner);
    return obj;
  },
  toJSON(message: MsgChangeOwner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChangeOwner>, I>>(object: I): MsgChangeOwner {
    const message = createBaseMsgChangeOwner();
    message.creator = object.creator ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};
function createBaseMsgChangeOwnerResponse(): MsgChangeOwnerResponse {
  return {};
}
export const MsgChangeOwnerResponse = {
  typeUrl: "/mineplex.mineplexchain.treasury.MsgChangeOwnerResponse",
  encode(_: MsgChangeOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOwnerResponse();
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
  fromJSON(_: any): MsgChangeOwnerResponse {
    const obj = createBaseMsgChangeOwnerResponse();
    return obj;
  },
  toJSON(_: MsgChangeOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChangeOwnerResponse>, I>>(_: I): MsgChangeOwnerResponse {
    const message = createBaseMsgChangeOwnerResponse();
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  ChangeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
    this.ChangeOwner = this.ChangeOwner.bind(this);
  }
  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("mineplex.mineplexchain.treasury.Msg", "Mint", data);
    return promise.then((data) => MsgMintResponse.decode(new BinaryReader(data)));
  }
  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("mineplex.mineplexchain.treasury.Msg", "Burn", data);
    return promise.then((data) => MsgBurnResponse.decode(new BinaryReader(data)));
  }
  ChangeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse> {
    const data = MsgChangeOwner.encode(request).finish();
    const promise = this.rpc.request("mineplex.mineplexchain.treasury.Msg", "ChangeOwner", data);
    return promise.then((data) => MsgChangeOwnerResponse.decode(new BinaryReader(data)));
  }
}
