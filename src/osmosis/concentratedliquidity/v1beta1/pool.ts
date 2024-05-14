/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
export interface Pool {
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentivesAddress: string;
  /** address holding spread rewards from swaps. */
  spreadRewardsAddress: string;
  id: bigint;
  /** Amount of total liquidity */
  currentTickLiquidity: string;
  token0: string;
  token1: string;
  currentSqrtPrice: string;
  currentTick: bigint;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tickSpacing: bigint;
  exponentAtPriceOne: bigint;
  /** spread_factor is the ratio that is charged on the amount of token in. */
  spreadFactor: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  lastLiquidityUpdate: Timestamp;
}
function createBasePool(): Pool {
  return {
    address: "",
    incentivesAddress: "",
    spreadRewardsAddress: "",
    id: BigInt(0),
    currentTickLiquidity: "",
    token0: "",
    token1: "",
    currentSqrtPrice: "",
    currentTick: BigInt(0),
    tickSpacing: BigInt(0),
    exponentAtPriceOne: BigInt(0),
    spreadFactor: "",
    lastLiquidityUpdate: Timestamp.fromPartial({}),
  };
}
export const Pool = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.incentivesAddress !== "") {
      writer.uint32(18).string(message.incentivesAddress);
    }
    if (message.spreadRewardsAddress !== "") {
      writer.uint32(26).string(message.spreadRewardsAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.currentTickLiquidity !== "") {
      writer.uint32(42).string(message.currentTickLiquidity);
    }
    if (message.token0 !== "") {
      writer.uint32(50).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(58).string(message.token1);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(66).string(message.currentSqrtPrice);
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(72).int64(message.currentTick);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(80).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== BigInt(0)) {
      writer.uint32(88).int64(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(98).string(message.spreadFactor);
    }
    if (message.lastLiquidityUpdate !== undefined) {
      Timestamp.encode(message.lastLiquidityUpdate, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.incentivesAddress = reader.string();
          break;
        case 3:
          message.spreadRewardsAddress = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        case 5:
          message.currentTickLiquidity = reader.string();
          break;
        case 6:
          message.token0 = reader.string();
          break;
        case 7:
          message.token1 = reader.string();
          break;
        case 8:
          message.currentSqrtPrice = reader.string();
          break;
        case 9:
          message.currentTick = reader.int64();
          break;
        case 10:
          message.tickSpacing = reader.uint64();
          break;
        case 11:
          message.exponentAtPriceOne = reader.int64();
          break;
        case 12:
          message.spreadFactor = reader.string();
          break;
        case 13:
          message.lastLiquidityUpdate = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const obj = createBasePool();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.incentivesAddress)) obj.incentivesAddress = String(object.incentivesAddress);
    if (isSet(object.spreadRewardsAddress)) obj.spreadRewardsAddress = String(object.spreadRewardsAddress);
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.currentTickLiquidity)) obj.currentTickLiquidity = String(object.currentTickLiquidity);
    if (isSet(object.token0)) obj.token0 = String(object.token0);
    if (isSet(object.token1)) obj.token1 = String(object.token1);
    if (isSet(object.currentSqrtPrice)) obj.currentSqrtPrice = String(object.currentSqrtPrice);
    if (isSet(object.currentTick)) obj.currentTick = BigInt(object.currentTick.toString());
    if (isSet(object.tickSpacing)) obj.tickSpacing = BigInt(object.tickSpacing.toString());
    if (isSet(object.exponentAtPriceOne))
      obj.exponentAtPriceOne = BigInt(object.exponentAtPriceOne.toString());
    if (isSet(object.spreadFactor)) obj.spreadFactor = String(object.spreadFactor);
    if (isSet(object.lastLiquidityUpdate))
      obj.lastLiquidityUpdate = fromJsonTimestamp(object.lastLiquidityUpdate);
    return obj;
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.incentivesAddress !== undefined && (obj.incentivesAddress = message.incentivesAddress);
    message.spreadRewardsAddress !== undefined && (obj.spreadRewardsAddress = message.spreadRewardsAddress);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.currentTickLiquidity !== undefined && (obj.currentTickLiquidity = message.currentTickLiquidity);
    message.token0 !== undefined && (obj.token0 = message.token0);
    message.token1 !== undefined && (obj.token1 = message.token1);
    message.currentSqrtPrice !== undefined && (obj.currentSqrtPrice = message.currentSqrtPrice);
    message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.exponentAtPriceOne !== undefined &&
      (obj.exponentAtPriceOne = (message.exponentAtPriceOne || BigInt(0)).toString());
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    message.lastLiquidityUpdate !== undefined &&
      (obj.lastLiquidityUpdate = fromTimestamp(message.lastLiquidityUpdate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.incentivesAddress = object.incentivesAddress ?? "";
    message.spreadRewardsAddress = object.spreadRewardsAddress ?? "";
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.currentTickLiquidity = object.currentTickLiquidity ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    if (object.currentTick !== undefined && object.currentTick !== null) {
      message.currentTick = BigInt(object.currentTick.toString());
    }
    if (object.tickSpacing !== undefined && object.tickSpacing !== null) {
      message.tickSpacing = BigInt(object.tickSpacing.toString());
    }
    if (object.exponentAtPriceOne !== undefined && object.exponentAtPriceOne !== null) {
      message.exponentAtPriceOne = BigInt(object.exponentAtPriceOne.toString());
    }
    message.spreadFactor = object.spreadFactor ?? "";
    if (object.lastLiquidityUpdate !== undefined && object.lastLiquidityUpdate !== null) {
      message.lastLiquidityUpdate = Timestamp.fromPartial(object.lastLiquidityUpdate);
    }
    return message;
  },
};
