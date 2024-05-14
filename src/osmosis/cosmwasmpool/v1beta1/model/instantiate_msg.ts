/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== InstantiateMsg */
export interface InstantiateMsg {
  /**
   * pool_asset_denoms is the list of asset denoms that are initialized
   * at pool creation time.
   */
  poolAssetDenoms: string[];
}
function createBaseInstantiateMsg(): InstantiateMsg {
  return {
    poolAssetDenoms: [],
  };
}
export const InstantiateMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg",
  encode(message: InstantiateMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolAssetDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolAssetDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InstantiateMsg {
    const obj = createBaseInstantiateMsg();
    if (Array.isArray(object?.poolAssetDenoms))
      obj.poolAssetDenoms = object.poolAssetDenoms.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: InstantiateMsg): unknown {
    const obj: any = {};
    if (message.poolAssetDenoms) {
      obj.poolAssetDenoms = message.poolAssetDenoms.map((e) => e);
    } else {
      obj.poolAssetDenoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InstantiateMsg>, I>>(object: I): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    message.poolAssetDenoms = object.poolAssetDenoms?.map((e) => e) || [];
    return message;
  },
};
