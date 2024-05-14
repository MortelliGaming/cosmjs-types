/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
  sender: string;
  denom0: string;
  denom1: string;
  tickSpacing: bigint;
  spreadFactor: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
  poolId: bigint;
}
function createBaseMsgCreateConcentratedPool(): MsgCreateConcentratedPool {
  return {
    sender: "",
    denom0: "",
    denom1: "",
    tickSpacing: BigInt(0),
    spreadFactor: "",
  };
}
export const MsgCreateConcentratedPool = {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
  encode(message: MsgCreateConcentratedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(32).uint64(message.tickSpacing);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(message.spreadFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom0 = reader.string();
          break;
        case 3:
          message.denom1 = reader.string();
          break;
        case 4:
          message.tickSpacing = reader.uint64();
          break;
        case 5:
          message.spreadFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateConcentratedPool {
    const obj = createBaseMsgCreateConcentratedPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.denom0)) obj.denom0 = String(object.denom0);
    if (isSet(object.denom1)) obj.denom1 = String(object.denom1);
    if (isSet(object.tickSpacing)) obj.tickSpacing = BigInt(object.tickSpacing.toString());
    if (isSet(object.spreadFactor)) obj.spreadFactor = String(object.spreadFactor);
    return obj;
  },
  toJSON(message: MsgCreateConcentratedPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateConcentratedPool>, I>>(
    object: I,
  ): MsgCreateConcentratedPool {
    const message = createBaseMsgCreateConcentratedPool();
    message.sender = object.sender ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = BigInt(object.tickSpacing.toString());
    }
    message.spreadFactor = object.spreadFactor ?? "";
    return message;
  },
};
function createBaseMsgCreateConcentratedPoolResponse(): MsgCreateConcentratedPoolResponse {
  return {
    poolId: BigInt(0),
  };
}
export const MsgCreateConcentratedPoolResponse = {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse",
  encode(
    message: MsgCreateConcentratedPoolResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateConcentratedPoolResponse {
    const obj = createBaseMsgCreateConcentratedPoolResponse();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: MsgCreateConcentratedPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateConcentratedPoolResponse>, I>>(
    object: I,
  ): MsgCreateConcentratedPoolResponse {
    const message = createBaseMsgCreateConcentratedPoolResponse();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
export interface Msg {
  CreateConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateConcentratedPool = this.CreateConcentratedPool.bind(this);
  }
  CreateConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse> {
    const data = MsgCreateConcentratedPool.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.Msg",
      "CreateConcentratedPool",
      data,
    );
    return promise.then((data) => MsgCreateConcentratedPoolResponse.decode(new BinaryReader(data)));
  }
}
