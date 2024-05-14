/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.txfees.v1beta1";
/** Params holds parameters for the txfees module */
export interface Params {
  whitelistedFeeTokenSetters: string[];
}
function createBaseParams(): Params {
  return {
    whitelistedFeeTokenSetters: [],
  };
}
export const Params = {
  typeUrl: "/osmosis.txfees.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelistedFeeTokenSetters) {
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
          message.whitelistedFeeTokenSetters.push(reader.string());
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
    if (Array.isArray(object?.whitelistedFeeTokenSetters))
      obj.whitelistedFeeTokenSetters = object.whitelistedFeeTokenSetters.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.whitelistedFeeTokenSetters) {
      obj.whitelistedFeeTokenSetters = message.whitelistedFeeTokenSetters.map((e) => e);
    } else {
      obj.whitelistedFeeTokenSetters = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.whitelistedFeeTokenSetters = object.whitelistedFeeTokenSetters?.map((e) => e) || [];
    return message;
  },
};
