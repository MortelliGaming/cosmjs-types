/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "osmosis.ibchooks";
export interface MsgEmitIBCAck {
  sender: string;
  packetSequence: bigint;
  channel: string;
}
export interface MsgEmitIBCAckResponse {
  contractResult: string;
  ibcAck: string;
}
function createBaseMsgEmitIBCAck(): MsgEmitIBCAck {
  return {
    sender: "",
    packetSequence: BigInt(0),
    channel: "",
  };
}
export const MsgEmitIBCAck = {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
  encode(message: MsgEmitIBCAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.packetSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.packetSequence);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEmitIBCAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmitIBCAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.packetSequence = reader.uint64();
          break;
        case 3:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEmitIBCAck {
    const obj = createBaseMsgEmitIBCAck();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.packetSequence)) obj.packetSequence = BigInt(object.packetSequence.toString());
    if (isSet(object.channel)) obj.channel = String(object.channel);
    return obj;
  },
  toJSON(message: MsgEmitIBCAck): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.packetSequence !== undefined &&
      (obj.packetSequence = (message.packetSequence || BigInt(0)).toString());
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEmitIBCAck>, I>>(object: I): MsgEmitIBCAck {
    const message = createBaseMsgEmitIBCAck();
    message.sender = object.sender ?? "";
    if (object.packetSequence !== undefined && object.packetSequence !== null) {
      message.packetSequence = BigInt(object.packetSequence.toString());
    }
    message.channel = object.channel ?? "";
    return message;
  },
};
function createBaseMsgEmitIBCAckResponse(): MsgEmitIBCAckResponse {
  return {
    contractResult: "",
    ibcAck: "",
  };
}
export const MsgEmitIBCAckResponse = {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAckResponse",
  encode(message: MsgEmitIBCAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractResult !== "") {
      writer.uint32(10).string(message.contractResult);
    }
    if (message.ibcAck !== "") {
      writer.uint32(18).string(message.ibcAck);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEmitIBCAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmitIBCAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractResult = reader.string();
          break;
        case 2:
          message.ibcAck = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEmitIBCAckResponse {
    const obj = createBaseMsgEmitIBCAckResponse();
    if (isSet(object.contractResult)) obj.contractResult = String(object.contractResult);
    if (isSet(object.ibcAck)) obj.ibcAck = String(object.ibcAck);
    return obj;
  },
  toJSON(message: MsgEmitIBCAckResponse): unknown {
    const obj: any = {};
    message.contractResult !== undefined && (obj.contractResult = message.contractResult);
    message.ibcAck !== undefined && (obj.ibcAck = message.ibcAck);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEmitIBCAckResponse>, I>>(object: I): MsgEmitIBCAckResponse {
    const message = createBaseMsgEmitIBCAckResponse();
    message.contractResult = object.contractResult ?? "";
    message.ibcAck = object.ibcAck ?? "";
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * EmitIBCAck checks the sender can emit the ack and writes the IBC
   * acknowledgement
   */
  EmitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EmitIBCAck = this.EmitIBCAck.bind(this);
  }
  EmitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse> {
    const data = MsgEmitIBCAck.encode(request).finish();
    const promise = this.rpc.request("osmosis.ibchooks.Msg", "EmitIBCAck", data);
    return promise.then((data) => MsgEmitIBCAckResponse.decode(new BinaryReader(data)));
  }
}
