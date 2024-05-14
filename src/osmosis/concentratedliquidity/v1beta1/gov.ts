/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposal {
  title: string;
  description: string;
  poolRecords: PoolRecord[];
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposal {
  title: string;
  description: string;
  poolIdToTickSpacingRecords: PoolIdToTickSpacingRecord[];
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecord {
  poolId: bigint;
  newTickSpacing: bigint;
}
export interface PoolRecord {
  denom0: string;
  denom1: string;
  tickSpacing: bigint;
  spreadFactor: string;
}
function createBaseCreateConcentratedLiquidityPoolsProposal(): CreateConcentratedLiquidityPoolsProposal {
  return {
    title: "",
    description: "",
    poolRecords: [],
  };
}
export const CreateConcentratedLiquidityPoolsProposal = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal",
  encode(
    message: CreateConcentratedLiquidityPoolsProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolRecords) {
      PoolRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateConcentratedLiquidityPoolsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConcentratedLiquidityPoolsProposal();
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
          message.poolRecords.push(PoolRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateConcentratedLiquidityPoolsProposal {
    const obj = createBaseCreateConcentratedLiquidityPoolsProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.poolRecords))
      obj.poolRecords = object.poolRecords.map((e: any) => PoolRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: CreateConcentratedLiquidityPoolsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.poolRecords) {
      obj.poolRecords = message.poolRecords.map((e) => (e ? PoolRecord.toJSON(e) : undefined));
    } else {
      obj.poolRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CreateConcentratedLiquidityPoolsProposal>, I>>(
    object: I,
  ): CreateConcentratedLiquidityPoolsProposal {
    const message = createBaseCreateConcentratedLiquidityPoolsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolRecords = object.poolRecords?.map((e) => PoolRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTickSpacingDecreaseProposal(): TickSpacingDecreaseProposal {
  return {
    title: "",
    description: "",
    poolIdToTickSpacingRecords: [],
  };
}
export const TickSpacingDecreaseProposal = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal",
  encode(message: TickSpacingDecreaseProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolIdToTickSpacingRecords) {
      PoolIdToTickSpacingRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickSpacingDecreaseProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickSpacingDecreaseProposal();
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
          message.poolIdToTickSpacingRecords.push(PoolIdToTickSpacingRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickSpacingDecreaseProposal {
    const obj = createBaseTickSpacingDecreaseProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.poolIdToTickSpacingRecords))
      obj.poolIdToTickSpacingRecords = object.poolIdToTickSpacingRecords.map((e: any) =>
        PoolIdToTickSpacingRecord.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: TickSpacingDecreaseProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.poolIdToTickSpacingRecords) {
      obj.poolIdToTickSpacingRecords = message.poolIdToTickSpacingRecords.map((e) =>
        e ? PoolIdToTickSpacingRecord.toJSON(e) : undefined,
      );
    } else {
      obj.poolIdToTickSpacingRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickSpacingDecreaseProposal>, I>>(
    object: I,
  ): TickSpacingDecreaseProposal {
    const message = createBaseTickSpacingDecreaseProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolIdToTickSpacingRecords =
      object.poolIdToTickSpacingRecords?.map((e) => PoolIdToTickSpacingRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBasePoolIdToTickSpacingRecord(): PoolIdToTickSpacingRecord {
  return {
    poolId: BigInt(0),
    newTickSpacing: BigInt(0),
  };
}
export const PoolIdToTickSpacingRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord",
  encode(message: PoolIdToTickSpacingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.newTickSpacing !== BigInt(0)) {
      writer.uint32(16).uint64(message.newTickSpacing);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolIdToTickSpacingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolIdToTickSpacingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.newTickSpacing = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolIdToTickSpacingRecord {
    const obj = createBasePoolIdToTickSpacingRecord();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.newTickSpacing)) obj.newTickSpacing = BigInt(object.newTickSpacing.toString());
    return obj;
  },
  toJSON(message: PoolIdToTickSpacingRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.newTickSpacing !== undefined &&
      (obj.newTickSpacing = (message.newTickSpacing || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolIdToTickSpacingRecord>, I>>(
    object: I,
  ): PoolIdToTickSpacingRecord {
    const message = createBasePoolIdToTickSpacingRecord();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.newTickSpacing !== undefined && object.newTickSpacing !== null) {
      message.newTickSpacing = BigInt(object.newTickSpacing.toString());
    }
    return message;
  },
};
function createBasePoolRecord(): PoolRecord {
  return {
    denom0: "",
    denom1: "",
    tickSpacing: BigInt(0),
    spreadFactor: "",
  };
}
export const PoolRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolRecord",
  encode(message: PoolRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(24).uint64(message.tickSpacing);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(message.spreadFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
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
  fromJSON(object: any): PoolRecord {
    const obj = createBasePoolRecord();
    if (isSet(object.denom0)) obj.denom0 = String(object.denom0);
    if (isSet(object.denom1)) obj.denom1 = String(object.denom1);
    if (isSet(object.tickSpacing)) obj.tickSpacing = BigInt(object.tickSpacing.toString());
    if (isSet(object.spreadFactor)) obj.spreadFactor = String(object.spreadFactor);
    return obj;
  },
  toJSON(message: PoolRecord): unknown {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolRecord>, I>>(object: I): PoolRecord {
    const message = createBasePoolRecord();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = BigInt(object.tickSpacing.toString());
    }
    message.spreadFactor = object.spreadFactor ?? "";
    return message;
  },
};
