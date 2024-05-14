/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/**
 * CosmWasmPool represents the data serialized into state for each CW pool.
 *
 * Note: CW Pool has 2 pool models:
 * - CosmWasmPool which is a proto-generated store model used for serialization
 * into state.
 * - Pool struct that encapsulates the CosmWasmPool and wasmKeeper for calling
 * the contract.
 *
 * CosmWasmPool implements the poolmanager.PoolI interface but it panics on all
 * methods. The reason is that access to wasmKeeper is required to call the
 * contract.
 *
 * Instead, all interactions and poolmanager.PoolI methods are to be performed
 * on the Pool struct. The reason why we cannot have a Pool struct only is
 * because it cannot be serialized into state due to having a non-serializable
 * wasmKeeper field.
 */
export interface CosmWasmPool {
  contractAddress: string;
  poolId: bigint;
  codeId: bigint;
  instantiateMsg: Uint8Array;
}
function createBaseCosmWasmPool(): CosmWasmPool {
  return {
    contractAddress: "",
    poolId: BigInt(0),
    codeId: BigInt(0),
    instantiateMsg: new Uint8Array(),
  };
}
export const CosmWasmPool = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool",
  encode(message: CosmWasmPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.instantiateMsg.length !== 0) {
      writer.uint32(34).bytes(message.instantiateMsg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmWasmPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmWasmPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.instantiateMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CosmWasmPool {
    const obj = createBaseCosmWasmPool();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.instantiateMsg)) obj.instantiateMsg = bytesFromBase64(object.instantiateMsg);
    return obj;
  },
  toJSON(message: CosmWasmPool): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.instantiateMsg !== undefined &&
      (obj.instantiateMsg = base64FromBytes(
        message.instantiateMsg !== undefined ? message.instantiateMsg : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CosmWasmPool>, I>>(object: I): CosmWasmPool {
    const message = createBaseCosmWasmPool();
    message.contractAddress = object.contractAddress ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
    return message;
  },
};
