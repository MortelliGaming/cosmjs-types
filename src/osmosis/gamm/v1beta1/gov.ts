/* eslint-disable */
import { BalancerToConcentratedPoolLink } from "./shared";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLink[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposal {
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLink[];
}
export interface PoolRecordWithCFMMLink {
  denom0: string;
  denom1: string;
  tickSpacing: bigint;
  exponentAtPriceOne: string;
  spreadFactor: string;
  balancerPoolId: bigint;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
  title: string;
  description: string;
  poolRecordsWithCfmmLink: PoolRecordWithCFMMLink[];
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposal {
  title: string;
  description: string;
  poolId: bigint;
  controllerAddress: string;
}
function createBaseReplaceMigrationRecordsProposal(): ReplaceMigrationRecordsProposal {
  return {
    title: "",
    description: "",
    records: [],
  };
}
export const ReplaceMigrationRecordsProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
  encode(
    message: ReplaceMigrationRecordsProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      BalancerToConcentratedPoolLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReplaceMigrationRecordsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplaceMigrationRecordsProposal();
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
          message.records.push(BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReplaceMigrationRecordsProposal {
    const obj = createBaseReplaceMigrationRecordsProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.records))
      obj.records = object.records.map((e: any) => BalancerToConcentratedPoolLink.fromJSON(e));
    return obj;
  },
  toJSON(message: ReplaceMigrationRecordsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.records) {
      obj.records = message.records.map((e) => (e ? BalancerToConcentratedPoolLink.toJSON(e) : undefined));
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ReplaceMigrationRecordsProposal>, I>>(
    object: I,
  ): ReplaceMigrationRecordsProposal {
    const message = createBaseReplaceMigrationRecordsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.records = object.records?.map((e) => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUpdateMigrationRecordsProposal(): UpdateMigrationRecordsProposal {
  return {
    title: "",
    description: "",
    records: [],
  };
}
export const UpdateMigrationRecordsProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
  encode(
    message: UpdateMigrationRecordsProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      BalancerToConcentratedPoolLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateMigrationRecordsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMigrationRecordsProposal();
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
          message.records.push(BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateMigrationRecordsProposal {
    const obj = createBaseUpdateMigrationRecordsProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.records))
      obj.records = object.records.map((e: any) => BalancerToConcentratedPoolLink.fromJSON(e));
    return obj;
  },
  toJSON(message: UpdateMigrationRecordsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.records) {
      obj.records = message.records.map((e) => (e ? BalancerToConcentratedPoolLink.toJSON(e) : undefined));
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UpdateMigrationRecordsProposal>, I>>(
    object: I,
  ): UpdateMigrationRecordsProposal {
    const message = createBaseUpdateMigrationRecordsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.records = object.records?.map((e) => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
    return message;
  },
};
function createBasePoolRecordWithCFMMLink(): PoolRecordWithCFMMLink {
  return {
    denom0: "",
    denom1: "",
    tickSpacing: BigInt(0),
    exponentAtPriceOne: "",
    spreadFactor: "",
    balancerPoolId: BigInt(0),
  };
}
export const PoolRecordWithCFMMLink = {
  typeUrl: "/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink",
  encode(message: PoolRecordWithCFMMLink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(24).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== "") {
      writer.uint32(34).string(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(message.spreadFactor);
    }
    if (message.balancerPoolId !== BigInt(0)) {
      writer.uint32(48).uint64(message.balancerPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRecordWithCFMMLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRecordWithCFMMLink();
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
        case 4:
          message.exponentAtPriceOne = reader.string();
          break;
        case 5:
          message.spreadFactor = reader.string();
          break;
        case 6:
          message.balancerPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRecordWithCFMMLink {
    const obj = createBasePoolRecordWithCFMMLink();
    if (isSet(object.denom0)) obj.denom0 = String(object.denom0);
    if (isSet(object.denom1)) obj.denom1 = String(object.denom1);
    if (isSet(object.tickSpacing)) obj.tickSpacing = BigInt(object.tickSpacing.toString());
    if (isSet(object.exponentAtPriceOne)) obj.exponentAtPriceOne = String(object.exponentAtPriceOne);
    if (isSet(object.spreadFactor)) obj.spreadFactor = String(object.spreadFactor);
    if (isSet(object.balancerPoolId)) obj.balancerPoolId = BigInt(object.balancerPoolId.toString());
    return obj;
  },
  toJSON(message: PoolRecordWithCFMMLink): unknown {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.exponentAtPriceOne !== undefined && (obj.exponentAtPriceOne = message.exponentAtPriceOne);
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    message.balancerPoolId !== undefined &&
      (obj.balancerPoolId = (message.balancerPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolRecordWithCFMMLink>, I>>(object: I): PoolRecordWithCFMMLink {
    const message = createBasePoolRecordWithCFMMLink();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = BigInt(object.tickSpacing.toString());
    }
    message.exponentAtPriceOne = object.exponentAtPriceOne ?? "";
    message.spreadFactor = object.spreadFactor ?? "";
    if (object.balancerPoolId !== undefined && object.balancerPoolId !== null) {
      message.balancerPoolId = BigInt(object.balancerPoolId.toString());
    }
    return message;
  },
};
function createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal(): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
  return {
    title: "",
    description: "",
    poolRecordsWithCfmmLink: [],
  };
}
export const CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
  encode(
    message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolRecordsWithCfmmLink) {
      PoolRecordWithCFMMLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
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
          message.poolRecordsWithCfmmLink.push(PoolRecordWithCFMMLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    const obj = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.poolRecordsWithCfmmLink))
      obj.poolRecordsWithCfmmLink = object.poolRecordsWithCfmmLink.map((e: any) =>
        PoolRecordWithCFMMLink.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.poolRecordsWithCfmmLink) {
      obj.poolRecordsWithCfmmLink = message.poolRecordsWithCfmmLink.map((e) =>
        e ? PoolRecordWithCFMMLink.toJSON(e) : undefined,
      );
    } else {
      obj.poolRecordsWithCfmmLink = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal>, I>>(
    object: I,
  ): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolRecordsWithCfmmLink =
      object.poolRecordsWithCfmmLink?.map((e) => PoolRecordWithCFMMLink.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSetScalingFactorControllerProposal(): SetScalingFactorControllerProposal {
  return {
    title: "",
    description: "",
    poolId: BigInt(0),
    controllerAddress: "",
  };
}
export const SetScalingFactorControllerProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal",
  encode(
    message: SetScalingFactorControllerProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.controllerAddress !== "") {
      writer.uint32(34).string(message.controllerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetScalingFactorControllerProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetScalingFactorControllerProposal();
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
          message.poolId = reader.uint64();
          break;
        case 4:
          message.controllerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SetScalingFactorControllerProposal {
    const obj = createBaseSetScalingFactorControllerProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.controllerAddress)) obj.controllerAddress = String(object.controllerAddress);
    return obj;
  },
  toJSON(message: SetScalingFactorControllerProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SetScalingFactorControllerProposal>, I>>(
    object: I,
  ): SetScalingFactorControllerProposal {
    const message = createBaseSetScalingFactorControllerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  },
};
