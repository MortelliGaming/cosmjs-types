/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { MigrationRecords } from "./shared";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.gamm.v1beta1";
/** Params holds parameters for the incentives module */
export interface Params {
  poolCreationFee: Coin[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
  pools: Any[];
  /** will be renamed to next_pool_id in an upcoming version */
  nextPoolNumber: bigint;
  params: Params;
  migrationRecords?: MigrationRecords;
}
function createBaseParams(): Params {
  return {
    poolCreationFee: [],
  };
}
export const Params = {
  typeUrl: "/osmosis.gamm.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.poolCreationFee))
      obj.poolCreationFee = object.poolCreationFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.poolCreationFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.poolCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    nextPoolNumber: BigInt(0),
    params: Params.fromPartial({}),
    migrationRecords: undefined,
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPoolNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.migrationRecords !== undefined) {
      MigrationRecords.encode(message.migrationRecords, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPoolNumber = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.migrationRecords = MigrationRecords.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.pools)) obj.pools = object.pools.map((e: any) => Any.fromJSON(e));
    if (isSet(object.nextPoolNumber)) obj.nextPoolNumber = BigInt(object.nextPoolNumber.toString());
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.migrationRecords))
      obj.migrationRecords = MigrationRecords.fromJSON(object.migrationRecords);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.nextPoolNumber !== undefined &&
      (obj.nextPoolNumber = (message.nextPoolNumber || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.migrationRecords !== undefined &&
      (obj.migrationRecords = message.migrationRecords
        ? MigrationRecords.toJSON(message.migrationRecords)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map((e) => Any.fromPartial(e)) || [];
    if (object.nextPoolNumber !== undefined && object.nextPoolNumber !== null) {
      message.nextPoolNumber = BigInt(object.nextPoolNumber.toString());
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.migrationRecords !== undefined && object.migrationRecords !== null) {
      message.migrationRecords = MigrationRecords.fromPartial(object.migrationRecords);
    }
    return message;
  },
};
