/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "../../lockup/lock";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 */
export interface Position {
  positionId: bigint;
  address: string;
  poolId: bigint;
  lowerTick: bigint;
  upperTick: bigint;
  joinTime: Timestamp;
  liquidity: string;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 */
export interface FullPositionBreakdown {
  position: Position;
  asset0: Coin;
  asset1: Coin;
  claimableSpreadRewards: Coin[];
  claimableIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
export interface PositionWithPeriodLock {
  position: Position;
  locks: PeriodLock;
}
function createBasePosition(): Position {
  return {
    positionId: BigInt(0),
    address: "",
    poolId: BigInt(0),
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
    joinTime: Timestamp.fromPartial({}),
    liquidity: "",
  };
}
export const Position = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Position",
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(32).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(40).int64(message.upperTick);
    }
    if (message.joinTime !== undefined) {
      Timestamp.encode(message.joinTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.liquidity !== "") {
      writer.uint32(58).string(message.liquidity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.lowerTick = reader.int64();
          break;
        case 5:
          message.upperTick = reader.int64();
          break;
        case 6:
          message.joinTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.liquidity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Position {
    const obj = createBasePosition();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.lowerTick)) obj.lowerTick = BigInt(object.lowerTick.toString());
    if (isSet(object.upperTick)) obj.upperTick = BigInt(object.upperTick.toString());
    if (isSet(object.joinTime)) obj.joinTime = fromJsonTimestamp(object.joinTime);
    if (isSet(object.liquidity)) obj.liquidity = String(object.liquidity);
    return obj;
  },
  toJSON(message: Position): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    message.joinTime !== undefined && (obj.joinTime = fromTimestamp(message.joinTime).toISOString());
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    message.address = object.address ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.lowerTick !== undefined && object.lowerTick !== null) {
      message.lowerTick = BigInt(object.lowerTick.toString());
    }
    if (object.upperTick !== undefined && object.upperTick !== null) {
      message.upperTick = BigInt(object.upperTick.toString());
    }
    if (object.joinTime !== undefined && object.joinTime !== null) {
      message.joinTime = Timestamp.fromPartial(object.joinTime);
    }
    message.liquidity = object.liquidity ?? "";
    return message;
  },
};
function createBaseFullPositionBreakdown(): FullPositionBreakdown {
  return {
    position: Position.fromPartial({}),
    asset0: Coin.fromPartial({}),
    asset1: Coin.fromPartial({}),
    claimableSpreadRewards: [],
    claimableIncentives: [],
    forfeitedIncentives: [],
  };
}
export const FullPositionBreakdown = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown",
  encode(message: FullPositionBreakdown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset0 !== undefined) {
      Coin.encode(message.asset0, writer.uint32(18).fork()).ldelim();
    }
    if (message.asset1 !== undefined) {
      Coin.encode(message.asset1, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.claimableSpreadRewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.claimableIncentives) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FullPositionBreakdown {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullPositionBreakdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.asset0 = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.asset1 = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.claimableSpreadRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.claimableIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.forfeitedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FullPositionBreakdown {
    const obj = createBaseFullPositionBreakdown();
    if (isSet(object.position)) obj.position = Position.fromJSON(object.position);
    if (isSet(object.asset0)) obj.asset0 = Coin.fromJSON(object.asset0);
    if (isSet(object.asset1)) obj.asset1 = Coin.fromJSON(object.asset1);
    if (Array.isArray(object?.claimableSpreadRewards))
      obj.claimableSpreadRewards = object.claimableSpreadRewards.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.claimableIncentives))
      obj.claimableIncentives = object.claimableIncentives.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.forfeitedIncentives))
      obj.forfeitedIncentives = object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: FullPositionBreakdown): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.asset0 !== undefined && (obj.asset0 = message.asset0 ? Coin.toJSON(message.asset0) : undefined);
    message.asset1 !== undefined && (obj.asset1 = message.asset1 ? Coin.toJSON(message.asset1) : undefined);
    if (message.claimableSpreadRewards) {
      obj.claimableSpreadRewards = message.claimableSpreadRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.claimableSpreadRewards = [];
    }
    if (message.claimableIncentives) {
      obj.claimableIncentives = message.claimableIncentives.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.claimableIncentives = [];
    }
    if (message.forfeitedIncentives) {
      obj.forfeitedIncentives = message.forfeitedIncentives.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.forfeitedIncentives = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FullPositionBreakdown>, I>>(object: I): FullPositionBreakdown {
    const message = createBaseFullPositionBreakdown();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromPartial(object.position);
    }
    if (object.asset0 !== undefined && object.asset0 !== null) {
      message.asset0 = Coin.fromPartial(object.asset0);
    }
    if (object.asset1 !== undefined && object.asset1 !== null) {
      message.asset1 = Coin.fromPartial(object.asset1);
    }
    message.claimableSpreadRewards = object.claimableSpreadRewards?.map((e) => Coin.fromPartial(e)) || [];
    message.claimableIncentives = object.claimableIncentives?.map((e) => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBasePositionWithPeriodLock(): PositionWithPeriodLock {
  return {
    position: Position.fromPartial({}),
    locks: PeriodLock.fromPartial({}),
  };
}
export const PositionWithPeriodLock = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock",
  encode(message: PositionWithPeriodLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.locks !== undefined) {
      PeriodLock.encode(message.locks, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionWithPeriodLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionWithPeriodLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.locks = PeriodLock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionWithPeriodLock {
    const obj = createBasePositionWithPeriodLock();
    if (isSet(object.position)) obj.position = Position.fromJSON(object.position);
    if (isSet(object.locks)) obj.locks = PeriodLock.fromJSON(object.locks);
    return obj;
  },
  toJSON(message: PositionWithPeriodLock): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.locks !== undefined && (obj.locks = message.locks ? PeriodLock.toJSON(message.locks) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PositionWithPeriodLock>, I>>(object: I): PositionWithPeriodLock {
    const message = createBasePositionWithPeriodLock();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromPartial(object.position);
    }
    if (object.locks !== undefined && object.locks !== null) {
      message.locks = PeriodLock.fromPartial(object.locks);
    }
    return message;
  },
};
