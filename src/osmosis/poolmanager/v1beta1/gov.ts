/* eslint-disable */
import { DenomPairTakerFee } from "./tx";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposal {
  title: string;
  description: string;
  denomPairTakerFee: DenomPairTakerFee[];
}
function createBaseDenomPairTakerFeeProposal(): DenomPairTakerFeeProposal {
  return {
    title: "",
    description: "",
    denomPairTakerFee: [],
  };
}
export const DenomPairTakerFeeProposal = {
  typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal",
  encode(message: DenomPairTakerFeeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.denomPairTakerFee) {
      DenomPairTakerFee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomPairTakerFeeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomPairTakerFeeProposal();
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
          message.denomPairTakerFee.push(DenomPairTakerFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomPairTakerFeeProposal {
    const obj = createBaseDenomPairTakerFeeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.denomPairTakerFee))
      obj.denomPairTakerFee = object.denomPairTakerFee.map((e: any) => DenomPairTakerFee.fromJSON(e));
    return obj;
  },
  toJSON(message: DenomPairTakerFeeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.denomPairTakerFee) {
      obj.denomPairTakerFee = message.denomPairTakerFee.map((e) =>
        e ? DenomPairTakerFee.toJSON(e) : undefined,
      );
    } else {
      obj.denomPairTakerFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DenomPairTakerFeeProposal>, I>>(
    object: I,
  ): DenomPairTakerFeeProposal {
    const message = createBaseDenomPairTakerFeeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denomPairTakerFee = object.denomPairTakerFee?.map((e) => DenomPairTakerFee.fromPartial(e)) || [];
    return message;
  },
};
