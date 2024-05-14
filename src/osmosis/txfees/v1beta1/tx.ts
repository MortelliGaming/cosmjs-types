/* eslint-disable */
import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.txfees.v1beta1";
/** ===================== MsgSetFeeTokens */
export interface MsgSetFeeTokens {
  feeTokens: FeeToken[];
  sender: string;
}
export interface MsgSetFeeTokensResponse {}
function createBaseMsgSetFeeTokens(): MsgSetFeeTokens {
  return {
    feeTokens: [],
    sender: "",
  };
}
export const MsgSetFeeTokens = {
  typeUrl: "/osmosis.txfees.v1beta1.MsgSetFeeTokens",
  encode(message: MsgSetFeeTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFeeTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFeeTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetFeeTokens {
    const obj = createBaseMsgSetFeeTokens();
    if (Array.isArray(object?.feeTokens))
      obj.feeTokens = object.feeTokens.map((e: any) => FeeToken.fromJSON(e));
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgSetFeeTokens): unknown {
    const obj: any = {};
    if (message.feeTokens) {
      obj.feeTokens = message.feeTokens.map((e) => (e ? FeeToken.toJSON(e) : undefined));
    } else {
      obj.feeTokens = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetFeeTokens>, I>>(object: I): MsgSetFeeTokens {
    const message = createBaseMsgSetFeeTokens();
    message.feeTokens = object.feeTokens?.map((e) => FeeToken.fromPartial(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgSetFeeTokensResponse(): MsgSetFeeTokensResponse {
  return {};
}
export const MsgSetFeeTokensResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.MsgSetFeeTokensResponse",
  encode(_: MsgSetFeeTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFeeTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFeeTokensResponse();
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
  fromJSON(_: any): MsgSetFeeTokensResponse {
    const obj = createBaseMsgSetFeeTokensResponse();
    return obj;
  },
  toJSON(_: MsgSetFeeTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetFeeTokensResponse>, I>>(_: I): MsgSetFeeTokensResponse {
    const message = createBaseMsgSetFeeTokensResponse();
    return message;
  },
};
export interface Msg {
  SetFeeTokens(request: MsgSetFeeTokens): Promise<MsgSetFeeTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetFeeTokens = this.SetFeeTokens.bind(this);
  }
  SetFeeTokens(request: MsgSetFeeTokens): Promise<MsgSetFeeTokensResponse> {
    const data = MsgSetFeeTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Msg", "SetFeeTokens", data);
    return promise.then((data) => MsgSetFeeTokensResponse.decode(new BinaryReader(data)));
  }
}
