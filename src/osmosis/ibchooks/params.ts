/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.ibchooks";
export interface Params {
  allowedAsyncAckContracts: string[];
}
function createBaseParams(): Params {
  return {
    allowedAsyncAckContracts: [],
  };
}
export const Params = {
  typeUrl: "/osmosis.ibchooks.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedAsyncAckContracts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedAsyncAckContracts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.allowedAsyncAckContracts))
      obj.allowedAsyncAckContracts = object.allowedAsyncAckContracts.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.allowedAsyncAckContracts) {
      obj.allowedAsyncAckContracts = message.allowedAsyncAckContracts.map((e) => e);
    } else {
      obj.allowedAsyncAckContracts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.allowedAsyncAckContracts = object.allowedAsyncAckContracts?.map((e) => e) || [];
    return message;
  },
};
