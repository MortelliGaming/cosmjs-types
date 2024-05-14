/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { TakerFeesTracker } from "../../poolmanager/v1beta1/genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arbRoutes: Route[];
  /** Token denomination of the first asset */
  tokenIn: string;
  /** Token denomination of the second asset */
  tokenOut: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
  /**
   * The pool IDs that are traversed in the directed cyclic graph (traversed
   * left
   * -> right)
   */
  trades: Trade[];
  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   */
  stepSize: string;
}
/** Trade is a single trade in a route */
export interface Trade {
  /** The pool id of the pool that is traded on */
  pool: bigint;
  /** The denom of the token that is traded */
  tokenIn: string;
  /** The denom of the token that is received */
  tokenOut: string;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatistics {
  /** profits is the total profit from all trades on this route */
  profits: Coin[];
  /**
   * number_of_trades is the number of trades the module has executed using this
   * route
   */
  numberOfTrades: string;
  /** route is the route that was used (pool ids along the arbitrage route) */
  route: bigint[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 *
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeights {
  /** The weight of a stableswap pool */
  stableWeight: bigint;
  /** The weight of a balancer pool */
  balancerWeight: bigint;
  /** The weight of a concentrated pool */
  concentratedWeight: bigint;
  /** The weight of a cosmwasm pool */
  cosmwasmWeight: bigint;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolType {
  /** The stable pool info */
  stable: StablePoolInfo;
  /** The balancer pool info */
  balancer: BalancerPoolInfo;
  /** The concentrated pool info */
  concentrated: ConcentratedPoolInfo;
  /** The cosmwasm pool info */
  cosmwasm: CosmwasmPoolInfo;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfo {
  /** The weight of a stableswap pool */
  weight: bigint;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfo {
  /** The weight of a balancer pool */
  weight: bigint;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfo {
  /** The weight of a concentrated pool */
  weight: bigint;
  /** The maximum number of ticks we can move when rebalancing */
  maxTicksCrossed: bigint;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfo {
  /** The weight of a cosmwasm pool (by contract address) */
  weightMaps: WeightMap[];
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMap {
  /** The weight of a cosmwasm pool (by contract address) */
  weight: bigint;
  /** The contract address */
  contractAddress: string;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenom {
  /** The denom i.e. name of the base denom (ex. uosmo) */
  denom: string;
  /**
   * The step size of the binary search that is used to find the optimal swap
   * amount
   */
  stepSize: string;
}
/**
 * BaseDenoms represents all of the base denoms that the module uses for its
 * arbitrage trades.
 */
export interface BaseDenoms {
  baseDenoms: BaseDenom[];
}
export interface AllProtocolRevenue {
  takerFeesTracker: TakerFeesTracker;
  cyclicArbTracker: CyclicArbTracker;
}
export interface CyclicArbTracker {
  cyclicArb: Coin[];
  heightAccountingStartsFrom: bigint;
}
function createBaseTokenPairArbRoutes(): TokenPairArbRoutes {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: "",
  };
}
export const TokenPairArbRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
  encode(message: TokenPairArbRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.arbRoutes) {
      Route.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPairArbRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairArbRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arbRoutes.push(Route.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPairArbRoutes {
    const obj = createBaseTokenPairArbRoutes();
    if (Array.isArray(object?.arbRoutes)) obj.arbRoutes = object.arbRoutes.map((e: any) => Route.fromJSON(e));
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    return obj;
  },
  toJSON(message: TokenPairArbRoutes): unknown {
    const obj: any = {};
    if (message.arbRoutes) {
      obj.arbRoutes = message.arbRoutes.map((e) => (e ? Route.toJSON(e) : undefined));
    } else {
      obj.arbRoutes = [];
    }
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TokenPairArbRoutes>, I>>(object: I): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arbRoutes?.map((e) => Route.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};
function createBaseRoute(): Route {
  return {
    trades: [],
    stepSize: "",
  };
}
export const Route = {
  typeUrl: "/osmosis.protorev.v1beta1.Route",
  encode(message: Route, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Route {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stepSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Route {
    const obj = createBaseRoute();
    if (Array.isArray(object?.trades)) obj.trades = object.trades.map((e: any) => Trade.fromJSON(e));
    if (isSet(object.stepSize)) obj.stepSize = String(object.stepSize);
    return obj;
  },
  toJSON(message: Route): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    message.stepSize !== undefined && (obj.stepSize = message.stepSize);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Route>, I>>(object: I): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map((e) => Trade.fromPartial(e)) || [];
    message.stepSize = object.stepSize ?? "";
    return message;
  },
};
function createBaseTrade(): Trade {
  return {
    pool: BigInt(0),
    tokenIn: "",
    tokenOut: "",
  };
}
export const Trade = {
  typeUrl: "/osmosis.protorev.v1beta1.Trade",
  encode(message: Trade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Trade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Trade {
    const obj = createBaseTrade();
    if (isSet(object.pool)) obj.pool = BigInt(object.pool.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = String(object.tokenIn);
    if (isSet(object.tokenOut)) obj.tokenOut = String(object.tokenOut);
    return obj;
  },
  toJSON(message: Trade): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = (message.pool || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Trade>, I>>(object: I): Trade {
    const message = createBaseTrade();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = BigInt(object.pool.toString());
    }
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
};
function createBaseRouteStatistics(): RouteStatistics {
  return {
    profits: [],
    numberOfTrades: "",
    route: [],
  };
}
export const RouteStatistics = {
  typeUrl: "/osmosis.protorev.v1beta1.RouteStatistics",
  encode(message: RouteStatistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }
    writer.uint32(26).fork();
    for (const v of message.route) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouteStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.numberOfTrades = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.route.push(reader.uint64());
            }
          } else {
            message.route.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RouteStatistics {
    const obj = createBaseRouteStatistics();
    if (Array.isArray(object?.profits)) obj.profits = object.profits.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.numberOfTrades)) obj.numberOfTrades = String(object.numberOfTrades);
    if (Array.isArray(object?.route)) obj.route = object.route.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: RouteStatistics): unknown {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.profits = [];
    }
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    if (message.route) {
      obj.route = message.route.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RouteStatistics>, I>>(object: I): RouteStatistics {
    const message = createBaseRouteStatistics();
    message.profits = object.profits?.map((e) => Coin.fromPartial(e)) || [];
    message.numberOfTrades = object.numberOfTrades ?? "";
    message.route = object.route?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBasePoolWeights(): PoolWeights {
  return {
    stableWeight: BigInt(0),
    balancerWeight: BigInt(0),
    concentratedWeight: BigInt(0),
    cosmwasmWeight: BigInt(0),
  };
}
export const PoolWeights = {
  typeUrl: "/osmosis.protorev.v1beta1.PoolWeights",
  encode(message: PoolWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stableWeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.stableWeight);
    }
    if (message.balancerWeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.balancerWeight);
    }
    if (message.concentratedWeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.concentratedWeight);
    }
    if (message.cosmwasmWeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.cosmwasmWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolWeights {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableWeight = reader.uint64();
          break;
        case 2:
          message.balancerWeight = reader.uint64();
          break;
        case 3:
          message.concentratedWeight = reader.uint64();
          break;
        case 4:
          message.cosmwasmWeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolWeights {
    const obj = createBasePoolWeights();
    if (isSet(object.stableWeight)) obj.stableWeight = BigInt(object.stableWeight.toString());
    if (isSet(object.balancerWeight)) obj.balancerWeight = BigInt(object.balancerWeight.toString());
    if (isSet(object.concentratedWeight))
      obj.concentratedWeight = BigInt(object.concentratedWeight.toString());
    if (isSet(object.cosmwasmWeight)) obj.cosmwasmWeight = BigInt(object.cosmwasmWeight.toString());
    return obj;
  },
  toJSON(message: PoolWeights): unknown {
    const obj: any = {};
    message.stableWeight !== undefined && (obj.stableWeight = (message.stableWeight || BigInt(0)).toString());
    message.balancerWeight !== undefined &&
      (obj.balancerWeight = (message.balancerWeight || BigInt(0)).toString());
    message.concentratedWeight !== undefined &&
      (obj.concentratedWeight = (message.concentratedWeight || BigInt(0)).toString());
    message.cosmwasmWeight !== undefined &&
      (obj.cosmwasmWeight = (message.cosmwasmWeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolWeights>, I>>(object: I): PoolWeights {
    const message = createBasePoolWeights();
    if (object.stableWeight !== undefined && object.stableWeight !== null) {
      message.stableWeight = BigInt(object.stableWeight.toString());
    }
    if (object.balancerWeight !== undefined && object.balancerWeight !== null) {
      message.balancerWeight = BigInt(object.balancerWeight.toString());
    }
    if (object.concentratedWeight !== undefined && object.concentratedWeight !== null) {
      message.concentratedWeight = BigInt(object.concentratedWeight.toString());
    }
    if (object.cosmwasmWeight !== undefined && object.cosmwasmWeight !== null) {
      message.cosmwasmWeight = BigInt(object.cosmwasmWeight.toString());
    }
    return message;
  },
};
function createBaseInfoByPoolType(): InfoByPoolType {
  return {
    stable: StablePoolInfo.fromPartial({}),
    balancer: BalancerPoolInfo.fromPartial({}),
    concentrated: ConcentratedPoolInfo.fromPartial({}),
    cosmwasm: CosmwasmPoolInfo.fromPartial({}),
  };
}
export const InfoByPoolType = {
  typeUrl: "/osmosis.protorev.v1beta1.InfoByPoolType",
  encode(message: InfoByPoolType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stable !== undefined) {
      StablePoolInfo.encode(message.stable, writer.uint32(10).fork()).ldelim();
    }
    if (message.balancer !== undefined) {
      BalancerPoolInfo.encode(message.balancer, writer.uint32(18).fork()).ldelim();
    }
    if (message.concentrated !== undefined) {
      ConcentratedPoolInfo.encode(message.concentrated, writer.uint32(26).fork()).ldelim();
    }
    if (message.cosmwasm !== undefined) {
      CosmwasmPoolInfo.encode(message.cosmwasm, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InfoByPoolType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoByPoolType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stable = StablePoolInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.balancer = BalancerPoolInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.concentrated = ConcentratedPoolInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.cosmwasm = CosmwasmPoolInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InfoByPoolType {
    const obj = createBaseInfoByPoolType();
    if (isSet(object.stable)) obj.stable = StablePoolInfo.fromJSON(object.stable);
    if (isSet(object.balancer)) obj.balancer = BalancerPoolInfo.fromJSON(object.balancer);
    if (isSet(object.concentrated)) obj.concentrated = ConcentratedPoolInfo.fromJSON(object.concentrated);
    if (isSet(object.cosmwasm)) obj.cosmwasm = CosmwasmPoolInfo.fromJSON(object.cosmwasm);
    return obj;
  },
  toJSON(message: InfoByPoolType): unknown {
    const obj: any = {};
    message.stable !== undefined &&
      (obj.stable = message.stable ? StablePoolInfo.toJSON(message.stable) : undefined);
    message.balancer !== undefined &&
      (obj.balancer = message.balancer ? BalancerPoolInfo.toJSON(message.balancer) : undefined);
    message.concentrated !== undefined &&
      (obj.concentrated = message.concentrated
        ? ConcentratedPoolInfo.toJSON(message.concentrated)
        : undefined);
    message.cosmwasm !== undefined &&
      (obj.cosmwasm = message.cosmwasm ? CosmwasmPoolInfo.toJSON(message.cosmwasm) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InfoByPoolType>, I>>(object: I): InfoByPoolType {
    const message = createBaseInfoByPoolType();
    if (object.stable !== undefined && object.stable !== null) {
      message.stable = StablePoolInfo.fromPartial(object.stable);
    }
    if (object.balancer !== undefined && object.balancer !== null) {
      message.balancer = BalancerPoolInfo.fromPartial(object.balancer);
    }
    if (object.concentrated !== undefined && object.concentrated !== null) {
      message.concentrated = ConcentratedPoolInfo.fromPartial(object.concentrated);
    }
    if (object.cosmwasm !== undefined && object.cosmwasm !== null) {
      message.cosmwasm = CosmwasmPoolInfo.fromPartial(object.cosmwasm);
    }
    return message;
  },
};
function createBaseStablePoolInfo(): StablePoolInfo {
  return {
    weight: BigInt(0),
  };
}
export const StablePoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.StablePoolInfo",
  encode(message: StablePoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StablePoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStablePoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StablePoolInfo {
    const obj = createBaseStablePoolInfo();
    if (isSet(object.weight)) obj.weight = BigInt(object.weight.toString());
    return obj;
  },
  toJSON(message: StablePoolInfo): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StablePoolInfo>, I>>(object: I): StablePoolInfo {
    const message = createBaseStablePoolInfo();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight.toString());
    }
    return message;
  },
};
function createBaseBalancerPoolInfo(): BalancerPoolInfo {
  return {
    weight: BigInt(0),
  };
}
export const BalancerPoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.BalancerPoolInfo",
  encode(message: BalancerPoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalancerPoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancerPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BalancerPoolInfo {
    const obj = createBaseBalancerPoolInfo();
    if (isSet(object.weight)) obj.weight = BigInt(object.weight.toString());
    return obj;
  },
  toJSON(message: BalancerPoolInfo): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BalancerPoolInfo>, I>>(object: I): BalancerPoolInfo {
    const message = createBaseBalancerPoolInfo();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight.toString());
    }
    return message;
  },
};
function createBaseConcentratedPoolInfo(): ConcentratedPoolInfo {
  return {
    weight: BigInt(0),
    maxTicksCrossed: BigInt(0),
  };
}
export const ConcentratedPoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.ConcentratedPoolInfo",
  encode(message: ConcentratedPoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    if (message.maxTicksCrossed !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxTicksCrossed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConcentratedPoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConcentratedPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        case 2:
          message.maxTicksCrossed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConcentratedPoolInfo {
    const obj = createBaseConcentratedPoolInfo();
    if (isSet(object.weight)) obj.weight = BigInt(object.weight.toString());
    if (isSet(object.maxTicksCrossed)) obj.maxTicksCrossed = BigInt(object.maxTicksCrossed.toString());
    return obj;
  },
  toJSON(message: ConcentratedPoolInfo): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    message.maxTicksCrossed !== undefined &&
      (obj.maxTicksCrossed = (message.maxTicksCrossed || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConcentratedPoolInfo>, I>>(object: I): ConcentratedPoolInfo {
    const message = createBaseConcentratedPoolInfo();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight.toString());
    }
    if (object.maxTicksCrossed !== undefined && object.maxTicksCrossed !== null) {
      message.maxTicksCrossed = BigInt(object.maxTicksCrossed.toString());
    }
    return message;
  },
};
function createBaseCosmwasmPoolInfo(): CosmwasmPoolInfo {
  return {
    weightMaps: [],
  };
}
export const CosmwasmPoolInfo = {
  typeUrl: "/osmosis.protorev.v1beta1.CosmwasmPoolInfo",
  encode(message: CosmwasmPoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.weightMaps) {
      WeightMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmwasmPoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmwasmPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightMaps.push(WeightMap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CosmwasmPoolInfo {
    const obj = createBaseCosmwasmPoolInfo();
    if (Array.isArray(object?.weightMaps))
      obj.weightMaps = object.weightMaps.map((e: any) => WeightMap.fromJSON(e));
    return obj;
  },
  toJSON(message: CosmwasmPoolInfo): unknown {
    const obj: any = {};
    if (message.weightMaps) {
      obj.weightMaps = message.weightMaps.map((e) => (e ? WeightMap.toJSON(e) : undefined));
    } else {
      obj.weightMaps = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CosmwasmPoolInfo>, I>>(object: I): CosmwasmPoolInfo {
    const message = createBaseCosmwasmPoolInfo();
    message.weightMaps = object.weightMaps?.map((e) => WeightMap.fromPartial(e)) || [];
    return message;
  },
};
function createBaseWeightMap(): WeightMap {
  return {
    weight: BigInt(0),
    contractAddress: "",
  };
}
export const WeightMap = {
  typeUrl: "/osmosis.protorev.v1beta1.WeightMap",
  encode(message: WeightMap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== BigInt(0)) {
      writer.uint32(8).uint64(message.weight);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightMap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightMap {
    const obj = createBaseWeightMap();
    if (isSet(object.weight)) obj.weight = BigInt(object.weight.toString());
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(message: WeightMap): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = (message.weight || BigInt(0)).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WeightMap>, I>>(object: I): WeightMap {
    const message = createBaseWeightMap();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight.toString());
    }
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseBaseDenom(): BaseDenom {
  return {
    denom: "",
    stepSize: "",
  };
}
export const BaseDenom = {
  typeUrl: "/osmosis.protorev.v1beta1.BaseDenom",
  encode(message: BaseDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.stepSize !== "") {
      writer.uint32(18).string(message.stepSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.stepSize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseDenom {
    const obj = createBaseBaseDenom();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.stepSize)) obj.stepSize = String(object.stepSize);
    return obj;
  },
  toJSON(message: BaseDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.stepSize !== undefined && (obj.stepSize = message.stepSize);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BaseDenom>, I>>(object: I): BaseDenom {
    const message = createBaseBaseDenom();
    message.denom = object.denom ?? "";
    message.stepSize = object.stepSize ?? "";
    return message;
  },
};
function createBaseBaseDenoms(): BaseDenoms {
  return {
    baseDenoms: [],
  };
}
export const BaseDenoms = {
  typeUrl: "/osmosis.protorev.v1beta1.BaseDenoms",
  encode(message: BaseDenoms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseDenoms {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseDenoms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseDenoms {
    const obj = createBaseBaseDenoms();
    if (Array.isArray(object?.baseDenoms))
      obj.baseDenoms = object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e));
    return obj;
  },
  toJSON(message: BaseDenoms): unknown {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map((e) => (e ? BaseDenom.toJSON(e) : undefined));
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BaseDenoms>, I>>(object: I): BaseDenoms {
    const message = createBaseBaseDenoms();
    message.baseDenoms = object.baseDenoms?.map((e) => BaseDenom.fromPartial(e)) || [];
    return message;
  },
};
function createBaseAllProtocolRevenue(): AllProtocolRevenue {
  return {
    takerFeesTracker: TakerFeesTracker.fromPartial({}),
    cyclicArbTracker: CyclicArbTracker.fromPartial({}),
  };
}
export const AllProtocolRevenue = {
  typeUrl: "/osmosis.protorev.v1beta1.AllProtocolRevenue",
  encode(message: AllProtocolRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerFeesTracker !== undefined) {
      TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(10).fork()).ldelim();
    }
    if (message.cyclicArbTracker !== undefined) {
      CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllProtocolRevenue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllProtocolRevenue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeesTracker = TakerFeesTracker.decode(reader, reader.uint32());
          break;
        case 3:
          message.cyclicArbTracker = CyclicArbTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllProtocolRevenue {
    const obj = createBaseAllProtocolRevenue();
    if (isSet(object.takerFeesTracker))
      obj.takerFeesTracker = TakerFeesTracker.fromJSON(object.takerFeesTracker);
    if (isSet(object.cyclicArbTracker))
      obj.cyclicArbTracker = CyclicArbTracker.fromJSON(object.cyclicArbTracker);
    return obj;
  },
  toJSON(message: AllProtocolRevenue): unknown {
    const obj: any = {};
    message.takerFeesTracker !== undefined &&
      (obj.takerFeesTracker = message.takerFeesTracker
        ? TakerFeesTracker.toJSON(message.takerFeesTracker)
        : undefined);
    message.cyclicArbTracker !== undefined &&
      (obj.cyclicArbTracker = message.cyclicArbTracker
        ? CyclicArbTracker.toJSON(message.cyclicArbTracker)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllProtocolRevenue>, I>>(object: I): AllProtocolRevenue {
    const message = createBaseAllProtocolRevenue();
    if (object.takerFeesTracker !== undefined && object.takerFeesTracker !== null) {
      message.takerFeesTracker = TakerFeesTracker.fromPartial(object.takerFeesTracker);
    }
    if (object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null) {
      message.cyclicArbTracker = CyclicArbTracker.fromPartial(object.cyclicArbTracker);
    }
    return message;
  },
};
function createBaseCyclicArbTracker(): CyclicArbTracker {
  return {
    cyclicArb: [],
    heightAccountingStartsFrom: BigInt(0),
  };
}
export const CyclicArbTracker = {
  typeUrl: "/osmosis.protorev.v1beta1.CyclicArbTracker",
  encode(message: CyclicArbTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cyclicArb) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.heightAccountingStartsFrom !== BigInt(0)) {
      writer.uint32(16).int64(message.heightAccountingStartsFrom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CyclicArbTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCyclicArbTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cyclicArb.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.heightAccountingStartsFrom = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CyclicArbTracker {
    const obj = createBaseCyclicArbTracker();
    if (Array.isArray(object?.cyclicArb)) obj.cyclicArb = object.cyclicArb.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.heightAccountingStartsFrom))
      obj.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
    return obj;
  },
  toJSON(message: CyclicArbTracker): unknown {
    const obj: any = {};
    if (message.cyclicArb) {
      obj.cyclicArb = message.cyclicArb.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.cyclicArb = [];
    }
    message.heightAccountingStartsFrom !== undefined &&
      (obj.heightAccountingStartsFrom = (message.heightAccountingStartsFrom || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CyclicArbTracker>, I>>(object: I): CyclicArbTracker {
    const message = createBaseCyclicArbTracker();
    message.cyclicArb = object.cyclicArb?.map((e) => Coin.fromPartial(e)) || [];
    if (object.heightAccountingStartsFrom !== undefined && object.heightAccountingStartsFrom !== null) {
      message.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
    }
    return message;
  },
};
