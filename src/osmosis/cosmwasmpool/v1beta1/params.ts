/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
export interface Params {
  /**
   * code_ide_whitelist contains the list of code ids that are allowed to be
   * instantiated.
   */
  codeIdWhitelist: bigint[];
  /**
   * pool_migration_limit is the maximum number of pools that can be migrated
   * at once via governance proposal. This is to have a constant bound on the
   * number of pools that can be migrated at once and remove the possibility
   * of an unlikely scenario of causing a chain halt due to a large migration.
   */
  poolMigrationLimit: bigint;
}
function createBaseParams(): Params {
  return {
    codeIdWhitelist: [],
    poolMigrationLimit: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.codeIdWhitelist) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.poolMigrationLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolMigrationLimit);
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIdWhitelist.push(reader.uint64());
            }
          } else {
            message.codeIdWhitelist.push(reader.uint64());
          }
          break;
        case 2:
          message.poolMigrationLimit = reader.uint64();
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
    if (Array.isArray(object?.codeIdWhitelist))
      obj.codeIdWhitelist = object.codeIdWhitelist.map((e: any) => BigInt(e.toString()));
    if (isSet(object.poolMigrationLimit))
      obj.poolMigrationLimit = BigInt(object.poolMigrationLimit.toString());
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.codeIdWhitelist) {
      obj.codeIdWhitelist = message.codeIdWhitelist.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.codeIdWhitelist = [];
    }
    message.poolMigrationLimit !== undefined &&
      (obj.poolMigrationLimit = (message.poolMigrationLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.codeIdWhitelist = object.codeIdWhitelist?.map((e) => BigInt(e.toString())) || [];
    if (object.poolMigrationLimit !== undefined && object.poolMigrationLimit !== null) {
      message.poolMigrationLimit = BigInt(object.poolMigrationLimit.toString());
    }
    return message;
  },
};
