/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools.
 *
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface MigrationRecords {
  balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 *
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface BalancerToConcentratedPoolLink {
  balancerPoolId: bigint;
  clPoolId: bigint;
}
function createBaseMigrationRecords(): MigrationRecords {
  return {
    balancerToConcentratedPoolLinks: [],
  };
}
export const MigrationRecords = {
  typeUrl: "/osmosis.poolincentives.v1beta1.MigrationRecords",
  encode(message: MigrationRecords, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balancerToConcentratedPoolLinks) {
      BalancerToConcentratedPoolLink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MigrationRecords {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationRecords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balancerToConcentratedPoolLinks.push(
            BalancerToConcentratedPoolLink.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MigrationRecords {
    const obj = createBaseMigrationRecords();
    if (Array.isArray(object?.balancerToConcentratedPoolLinks))
      obj.balancerToConcentratedPoolLinks = object.balancerToConcentratedPoolLinks.map((e: any) =>
        BalancerToConcentratedPoolLink.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: MigrationRecords): unknown {
    const obj: any = {};
    if (message.balancerToConcentratedPoolLinks) {
      obj.balancerToConcentratedPoolLinks = message.balancerToConcentratedPoolLinks.map((e) =>
        e ? BalancerToConcentratedPoolLink.toJSON(e) : undefined,
      );
    } else {
      obj.balancerToConcentratedPoolLinks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MigrationRecords>, I>>(object: I): MigrationRecords {
    const message = createBaseMigrationRecords();
    message.balancerToConcentratedPoolLinks =
      object.balancerToConcentratedPoolLinks?.map((e) => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
    return message;
  },
};
function createBaseBalancerToConcentratedPoolLink(): BalancerToConcentratedPoolLink {
  return {
    balancerPoolId: BigInt(0),
    clPoolId: BigInt(0),
  };
}
export const BalancerToConcentratedPoolLink = {
  typeUrl: "/osmosis.poolincentives.v1beta1.BalancerToConcentratedPoolLink",
  encode(
    message: BalancerToConcentratedPoolLink,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.balancerPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.balancerPoolId);
    }
    if (message.clPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.clPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalancerToConcentratedPoolLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerToConcentratedPoolLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balancerPoolId = reader.uint64();
          break;
        case 2:
          message.clPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BalancerToConcentratedPoolLink {
    const obj = createBaseBalancerToConcentratedPoolLink();
    if (isSet(object.balancerPoolId)) obj.balancerPoolId = BigInt(object.balancerPoolId.toString());
    if (isSet(object.clPoolId)) obj.clPoolId = BigInt(object.clPoolId.toString());
    return obj;
  },
  toJSON(message: BalancerToConcentratedPoolLink): unknown {
    const obj: any = {};
    message.balancerPoolId !== undefined &&
      (obj.balancerPoolId = (message.balancerPoolId || BigInt(0)).toString());
    message.clPoolId !== undefined && (obj.clPoolId = (message.clPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BalancerToConcentratedPoolLink>, I>>(
    object: I,
  ): BalancerToConcentratedPoolLink {
    const message = createBaseBalancerToConcentratedPoolLink();
    if (object.balancerPoolId !== undefined && object.balancerPoolId !== null) {
      message.balancerPoolId = BigInt(object.balancerPoolId.toString());
    }
    if (object.clPoolId !== undefined && object.clPoolId !== null) {
      message.clPoolId = BigInt(object.clPoolId.toString());
    }
    return message;
  },
};
