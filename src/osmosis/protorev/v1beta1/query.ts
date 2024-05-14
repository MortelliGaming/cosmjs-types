/* eslint-disable */
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import {
  RouteStatistics,
  TokenPairArbRoutes,
  InfoByPoolType,
  BaseDenom,
  AllProtocolRevenue,
} from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
  /** number_of_trades is the number of trades the module has executed */
  numberOfTrades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
  /** denom is the denom to query profits by */
  denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
  /** profit is the profits of the module by the selected denom */
  profit?: Coin;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
  /** profits is a list of all of the profits from the module */
  profits: Coin[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequest {
  /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
  route: bigint[];
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponse {
  /**
   * statistics contains the number of trades the module has executed after a
   * swap on a given pool and the profits from the trades
   */
  statistics: RouteStatistics;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequest {}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponse {
  /**
   * statistics contains the number of trades/profits the module has executed on
   * all routes it has successfully executed a trade on
   */
  statistics: RouteStatistics[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
  /**
   * routes is a list of all of the hot routes that the module is currently
   * arbitraging
   */
  routes: TokenPairArbRoutes[];
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequest {}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponse {
  /** admin_account is the admin account of the module */
  adminAccount: string;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequest {}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponse {
  /** developer_account is the developer account of the module */
  developerAccount: string;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequest {}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponse {
  /**
   * InfoByPoolType contains all information pertaining to how different
   * pool types are handled by the module.
   */
  infoByPoolType: InfoByPoolType;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequest {}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  /**
   * max_pool_points_per_block is the maximum number of pool points that can be
   * consumed per block
   */
  maxPoolPointsPerBlock: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequest {}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponse {
  /**
   * max_pool_points_per_tx is the maximum number of pool points that can be
   * consumed per transaction
   */
  maxPoolPointsPerTx: bigint;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequest {}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponse {
  /** base_denoms is a list of all of the base denoms and step sizes */
  baseDenoms: BaseDenom[];
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequest {}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponse {
  /** enabled is whether the module is enabled */
  enabled: boolean;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequest {
  /**
   * base_denom is the base denom set in protorev for the denom pair to pool
   * mapping
   */
  baseDenom: string;
  /** other_denom is the other denom for the denom pair to pool mapping */
  otherDenom: string;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponse {
  /** pool_id is the pool_id stored for the denom pair */
  poolId: bigint;
}
export interface QueryGetAllProtocolRevenueRequest {}
export interface QueryGetAllProtocolRevenueResponse {
  allProtocolRevenue: AllProtocolRevenue;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryGetProtoRevNumberOfTradesRequest(): QueryGetProtoRevNumberOfTradesRequest {
  return {};
}
export const QueryGetProtoRevNumberOfTradesRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
  encode(
    _: QueryGetProtoRevNumberOfTradesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest {
    const obj = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevNumberOfTradesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevNumberOfTradesRequest>, I>>(
    _: I,
  ): QueryGetProtoRevNumberOfTradesRequest {
    const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevNumberOfTradesResponse(): QueryGetProtoRevNumberOfTradesResponse {
  return {
    numberOfTrades: "",
  };
}
export const QueryGetProtoRevNumberOfTradesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
  encode(
    message: QueryGetProtoRevNumberOfTradesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.numberOfTrades !== "") {
      writer.uint32(10).string(message.numberOfTrades);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfTrades = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse {
    const obj = createBaseQueryGetProtoRevNumberOfTradesResponse();
    if (isSet(object.numberOfTrades)) obj.numberOfTrades = String(object.numberOfTrades);
    return obj;
  },
  toJSON(message: QueryGetProtoRevNumberOfTradesResponse): unknown {
    const obj: any = {};
    message.numberOfTrades !== undefined && (obj.numberOfTrades = message.numberOfTrades);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevNumberOfTradesResponse>, I>>(
    object: I,
  ): QueryGetProtoRevNumberOfTradesResponse {
    const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
    message.numberOfTrades = object.numberOfTrades ?? "";
    return message;
  },
};
function createBaseQueryGetProtoRevProfitsByDenomRequest(): QueryGetProtoRevProfitsByDenomRequest {
  return {
    denom: "",
  };
}
export const QueryGetProtoRevProfitsByDenomRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
  encode(
    message: QueryGetProtoRevProfitsByDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest {
    const obj = createBaseQueryGetProtoRevProfitsByDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevProfitsByDenomRequest>, I>>(
    object: I,
  ): QueryGetProtoRevProfitsByDenomRequest {
    const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryGetProtoRevProfitsByDenomResponse(): QueryGetProtoRevProfitsByDenomResponse {
  return {
    profit: undefined,
  };
}
export const QueryGetProtoRevProfitsByDenomResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
  encode(
    message: QueryGetProtoRevProfitsByDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.profit !== undefined) {
      Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse {
    const obj = createBaseQueryGetProtoRevProfitsByDenomResponse();
    if (isSet(object.profit)) obj.profit = Coin.fromJSON(object.profit);
    return obj;
  },
  toJSON(message: QueryGetProtoRevProfitsByDenomResponse): unknown {
    const obj: any = {};
    message.profit !== undefined && (obj.profit = message.profit ? Coin.toJSON(message.profit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevProfitsByDenomResponse>, I>>(
    object: I,
  ): QueryGetProtoRevProfitsByDenomResponse {
    const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
    if (object.profit !== undefined && object.profit !== null) {
      message.profit = Coin.fromPartial(object.profit);
    }
    return message;
  },
};
function createBaseQueryGetProtoRevAllProfitsRequest(): QueryGetProtoRevAllProfitsRequest {
  return {};
}
export const QueryGetProtoRevAllProfitsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
  encode(_: QueryGetProtoRevAllProfitsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAllProfitsRequest {
    const obj = createBaseQueryGetProtoRevAllProfitsRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevAllProfitsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevAllProfitsRequest>, I>>(
    _: I,
  ): QueryGetProtoRevAllProfitsRequest {
    const message = createBaseQueryGetProtoRevAllProfitsRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevAllProfitsResponse(): QueryGetProtoRevAllProfitsResponse {
  return {
    profits: [],
  };
}
export const QueryGetProtoRevAllProfitsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
  encode(
    message: QueryGetProtoRevAllProfitsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllProfitsResponse {
    const obj = createBaseQueryGetProtoRevAllProfitsResponse();
    if (Array.isArray(object?.profits)) obj.profits = object.profits.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryGetProtoRevAllProfitsResponse): unknown {
    const obj: any = {};
    if (message.profits) {
      obj.profits = message.profits.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.profits = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevAllProfitsResponse>, I>>(
    object: I,
  ): QueryGetProtoRevAllProfitsResponse {
    const message = createBaseQueryGetProtoRevAllProfitsResponse();
    message.profits = object.profits?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryGetProtoRevStatisticsByRouteRequest(): QueryGetProtoRevStatisticsByRouteRequest {
  return {
    route: [],
  };
}
export const QueryGetProtoRevStatisticsByRouteRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest",
  encode(
    message: QueryGetProtoRevStatisticsByRouteRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.route) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteRequest {
    const obj = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    if (Array.isArray(object?.route)) obj.route = object.route.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteRequest): unknown {
    const obj: any = {};
    if (message.route) {
      obj.route = message.route.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.route = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevStatisticsByRouteRequest>, I>>(
    object: I,
  ): QueryGetProtoRevStatisticsByRouteRequest {
    const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
    message.route = object.route?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseQueryGetProtoRevStatisticsByRouteResponse(): QueryGetProtoRevStatisticsByRouteResponse {
  return {
    statistics: RouteStatistics.fromPartial({}),
  };
}
export const QueryGetProtoRevStatisticsByRouteResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse",
  encode(
    message: QueryGetProtoRevStatisticsByRouteResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.statistics !== undefined) {
      RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics = RouteStatistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevStatisticsByRouteResponse {
    const obj = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    if (isSet(object.statistics)) obj.statistics = RouteStatistics.fromJSON(object.statistics);
    return obj;
  },
  toJSON(message: QueryGetProtoRevStatisticsByRouteResponse): unknown {
    const obj: any = {};
    message.statistics !== undefined &&
      (obj.statistics = message.statistics ? RouteStatistics.toJSON(message.statistics) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevStatisticsByRouteResponse>, I>>(
    object: I,
  ): QueryGetProtoRevStatisticsByRouteResponse {
    const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
    if (object.statistics !== undefined && object.statistics !== null) {
      message.statistics = RouteStatistics.fromPartial(object.statistics);
    }
    return message;
  },
};
function createBaseQueryGetProtoRevAllRouteStatisticsRequest(): QueryGetProtoRevAllRouteStatisticsRequest {
  return {};
}
export const QueryGetProtoRevAllRouteStatisticsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest",
  encode(
    _: QueryGetProtoRevAllRouteStatisticsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequest {
    const obj = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevAllRouteStatisticsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevAllRouteStatisticsRequest>, I>>(
    _: I,
  ): QueryGetProtoRevAllRouteStatisticsRequest {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevAllRouteStatisticsResponse(): QueryGetProtoRevAllRouteStatisticsResponse {
  return {
    statistics: [],
  };
}
export const QueryGetProtoRevAllRouteStatisticsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse",
  encode(
    message: QueryGetProtoRevAllRouteStatisticsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.statistics) {
      RouteStatistics.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics.push(RouteStatistics.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponse {
    const obj = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    if (Array.isArray(object?.statistics))
      obj.statistics = object.statistics.map((e: any) => RouteStatistics.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryGetProtoRevAllRouteStatisticsResponse): unknown {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map((e) => (e ? RouteStatistics.toJSON(e) : undefined));
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevAllRouteStatisticsResponse>, I>>(
    object: I,
  ): QueryGetProtoRevAllRouteStatisticsResponse {
    const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
    message.statistics = object.statistics?.map((e) => RouteStatistics.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest(): QueryGetProtoRevTokenPairArbRoutesRequest {
  return {};
}
export const QueryGetProtoRevTokenPairArbRoutesRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
  encode(
    _: QueryGetProtoRevTokenPairArbRoutesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest {
    const obj = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevTokenPairArbRoutesRequest>, I>>(
    _: I,
  ): QueryGetProtoRevTokenPairArbRoutesRequest {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse(): QueryGetProtoRevTokenPairArbRoutesResponse {
  return {
    routes: [],
  };
}
export const QueryGetProtoRevTokenPairArbRoutesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
  encode(
    message: QueryGetProtoRevTokenPairArbRoutesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.routes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse {
    const obj = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    if (Array.isArray(object?.routes))
      obj.routes = object.routes.map((e: any) => TokenPairArbRoutes.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): unknown {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map((e) => (e ? TokenPairArbRoutes.toJSON(e) : undefined));
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevTokenPairArbRoutesResponse>, I>>(
    object: I,
  ): QueryGetProtoRevTokenPairArbRoutesResponse {
    const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
    message.routes = object.routes?.map((e) => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryGetProtoRevAdminAccountRequest(): QueryGetProtoRevAdminAccountRequest {
  return {};
}
export const QueryGetProtoRevAdminAccountRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest",
  encode(_: QueryGetProtoRevAdminAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevAdminAccountRequest {
    const obj = createBaseQueryGetProtoRevAdminAccountRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevAdminAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevAdminAccountRequest>, I>>(
    _: I,
  ): QueryGetProtoRevAdminAccountRequest {
    const message = createBaseQueryGetProtoRevAdminAccountRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevAdminAccountResponse(): QueryGetProtoRevAdminAccountResponse {
  return {
    adminAccount: "",
  };
}
export const QueryGetProtoRevAdminAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse",
  encode(
    message: QueryGetProtoRevAdminAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.adminAccount !== "") {
      writer.uint32(10).string(message.adminAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevAdminAccountResponse {
    const obj = createBaseQueryGetProtoRevAdminAccountResponse();
    if (isSet(object.adminAccount)) obj.adminAccount = String(object.adminAccount);
    return obj;
  },
  toJSON(message: QueryGetProtoRevAdminAccountResponse): unknown {
    const obj: any = {};
    message.adminAccount !== undefined && (obj.adminAccount = message.adminAccount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevAdminAccountResponse>, I>>(
    object: I,
  ): QueryGetProtoRevAdminAccountResponse {
    const message = createBaseQueryGetProtoRevAdminAccountResponse();
    message.adminAccount = object.adminAccount ?? "";
    return message;
  },
};
function createBaseQueryGetProtoRevDeveloperAccountRequest(): QueryGetProtoRevDeveloperAccountRequest {
  return {};
}
export const QueryGetProtoRevDeveloperAccountRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest",
  encode(
    _: QueryGetProtoRevDeveloperAccountRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevDeveloperAccountRequest {
    const obj = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevDeveloperAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevDeveloperAccountRequest>, I>>(
    _: I,
  ): QueryGetProtoRevDeveloperAccountRequest {
    const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevDeveloperAccountResponse(): QueryGetProtoRevDeveloperAccountResponse {
  return {
    developerAccount: "",
  };
}
export const QueryGetProtoRevDeveloperAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse",
  encode(
    message: QueryGetProtoRevDeveloperAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.developerAccount !== "") {
      writer.uint32(10).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevDeveloperAccountResponse {
    const obj = createBaseQueryGetProtoRevDeveloperAccountResponse();
    if (isSet(object.developerAccount)) obj.developerAccount = String(object.developerAccount);
    return obj;
  },
  toJSON(message: QueryGetProtoRevDeveloperAccountResponse): unknown {
    const obj: any = {};
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevDeveloperAccountResponse>, I>>(
    object: I,
  ): QueryGetProtoRevDeveloperAccountResponse {
    const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
};
function createBaseQueryGetProtoRevInfoByPoolTypeRequest(): QueryGetProtoRevInfoByPoolTypeRequest {
  return {};
}
export const QueryGetProtoRevInfoByPoolTypeRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest",
  encode(
    _: QueryGetProtoRevInfoByPoolTypeRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevInfoByPoolTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevInfoByPoolTypeRequest {
    const obj = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevInfoByPoolTypeRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevInfoByPoolTypeRequest>, I>>(
    _: I,
  ): QueryGetProtoRevInfoByPoolTypeRequest {
    const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevInfoByPoolTypeResponse(): QueryGetProtoRevInfoByPoolTypeResponse {
  return {
    infoByPoolType: InfoByPoolType.fromPartial({}),
  };
}
export const QueryGetProtoRevInfoByPoolTypeResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse",
  encode(
    message: QueryGetProtoRevInfoByPoolTypeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.infoByPoolType !== undefined) {
      InfoByPoolType.encode(message.infoByPoolType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevInfoByPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevInfoByPoolTypeResponse {
    const obj = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
    if (isSet(object.infoByPoolType)) obj.infoByPoolType = InfoByPoolType.fromJSON(object.infoByPoolType);
    return obj;
  },
  toJSON(message: QueryGetProtoRevInfoByPoolTypeResponse): unknown {
    const obj: any = {};
    message.infoByPoolType !== undefined &&
      (obj.infoByPoolType = message.infoByPoolType
        ? InfoByPoolType.toJSON(message.infoByPoolType)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevInfoByPoolTypeResponse>, I>>(
    object: I,
  ): QueryGetProtoRevInfoByPoolTypeResponse {
    const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
    if (object.infoByPoolType !== undefined && object.infoByPoolType !== null) {
      message.infoByPoolType = InfoByPoolType.fromPartial(object.infoByPoolType);
    }
    return message;
  },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest(): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest",
  encode(
    _: QueryGetProtoRevMaxPoolPointsPerBlockRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const obj = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevMaxPoolPointsPerBlockRequest>, I>>(
    _: I,
  ): QueryGetProtoRevMaxPoolPointsPerBlockRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse(): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
  return {
    maxPoolPointsPerBlock: BigInt(0),
  };
}
export const QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse",
  encode(
    message: QueryGetProtoRevMaxPoolPointsPerBlockResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const obj = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    if (isSet(object.maxPoolPointsPerBlock))
      obj.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
    return obj;
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): unknown {
    const obj: any = {};
    message.maxPoolPointsPerBlock !== undefined &&
      (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevMaxPoolPointsPerBlockResponse>, I>>(
    object: I,
  ): QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
    if (object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
    }
    return message;
  },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest(): QueryGetProtoRevMaxPoolPointsPerTxRequest {
  return {};
}
export const QueryGetProtoRevMaxPoolPointsPerTxRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest",
  encode(
    _: QueryGetProtoRevMaxPoolPointsPerTxRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const obj = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevMaxPoolPointsPerTxRequest>, I>>(
    _: I,
  ): QueryGetProtoRevMaxPoolPointsPerTxRequest {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse(): QueryGetProtoRevMaxPoolPointsPerTxResponse {
  return {
    maxPoolPointsPerTx: BigInt(0),
  };
}
export const QueryGetProtoRevMaxPoolPointsPerTxResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse",
  encode(
    message: QueryGetProtoRevMaxPoolPointsPerTxResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const obj = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    if (isSet(object.maxPoolPointsPerTx))
      obj.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
    return obj;
  },
  toJSON(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): unknown {
    const obj: any = {};
    message.maxPoolPointsPerTx !== undefined &&
      (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevMaxPoolPointsPerTxResponse>, I>>(
    object: I,
  ): QueryGetProtoRevMaxPoolPointsPerTxResponse {
    const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
    if (object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
    }
    return message;
  },
};
function createBaseQueryGetProtoRevBaseDenomsRequest(): QueryGetProtoRevBaseDenomsRequest {
  return {};
}
export const QueryGetProtoRevBaseDenomsRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest",
  encode(_: QueryGetProtoRevBaseDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevBaseDenomsRequest {
    const obj = createBaseQueryGetProtoRevBaseDenomsRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevBaseDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevBaseDenomsRequest>, I>>(
    _: I,
  ): QueryGetProtoRevBaseDenomsRequest {
    const message = createBaseQueryGetProtoRevBaseDenomsRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevBaseDenomsResponse(): QueryGetProtoRevBaseDenomsResponse {
  return {
    baseDenoms: [],
  };
}
export const QueryGetProtoRevBaseDenomsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse",
  encode(
    message: QueryGetProtoRevBaseDenomsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
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
  fromJSON(object: any): QueryGetProtoRevBaseDenomsResponse {
    const obj = createBaseQueryGetProtoRevBaseDenomsResponse();
    if (Array.isArray(object?.baseDenoms))
      obj.baseDenoms = object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryGetProtoRevBaseDenomsResponse): unknown {
    const obj: any = {};
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map((e) => (e ? BaseDenom.toJSON(e) : undefined));
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevBaseDenomsResponse>, I>>(
    object: I,
  ): QueryGetProtoRevBaseDenomsResponse {
    const message = createBaseQueryGetProtoRevBaseDenomsResponse();
    message.baseDenoms = object.baseDenoms?.map((e) => BaseDenom.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryGetProtoRevEnabledRequest(): QueryGetProtoRevEnabledRequest {
  return {};
}
export const QueryGetProtoRevEnabledRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest",
  encode(_: QueryGetProtoRevEnabledRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetProtoRevEnabledRequest {
    const obj = createBaseQueryGetProtoRevEnabledRequest();
    return obj;
  },
  toJSON(_: QueryGetProtoRevEnabledRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevEnabledRequest>, I>>(
    _: I,
  ): QueryGetProtoRevEnabledRequest {
    const message = createBaseQueryGetProtoRevEnabledRequest();
    return message;
  },
};
function createBaseQueryGetProtoRevEnabledResponse(): QueryGetProtoRevEnabledResponse {
  return {
    enabled: false,
  };
}
export const QueryGetProtoRevEnabledResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse",
  encode(
    message: QueryGetProtoRevEnabledResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevEnabledResponse {
    const obj = createBaseQueryGetProtoRevEnabledResponse();
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    return obj;
  },
  toJSON(message: QueryGetProtoRevEnabledResponse): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevEnabledResponse>, I>>(
    object: I,
  ): QueryGetProtoRevEnabledResponse {
    const message = createBaseQueryGetProtoRevEnabledResponse();
    message.enabled = object.enabled ?? false;
    return message;
  },
};
function createBaseQueryGetProtoRevPoolRequest(): QueryGetProtoRevPoolRequest {
  return {
    baseDenom: "",
    otherDenom: "",
  };
}
export const QueryGetProtoRevPoolRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest",
  encode(message: QueryGetProtoRevPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.otherDenom !== "") {
      writer.uint32(18).string(message.otherDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.otherDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetProtoRevPoolRequest {
    const obj = createBaseQueryGetProtoRevPoolRequest();
    if (isSet(object.baseDenom)) obj.baseDenom = String(object.baseDenom);
    if (isSet(object.otherDenom)) obj.otherDenom = String(object.otherDenom);
    return obj;
  },
  toJSON(message: QueryGetProtoRevPoolRequest): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.otherDenom !== undefined && (obj.otherDenom = message.otherDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevPoolRequest>, I>>(
    object: I,
  ): QueryGetProtoRevPoolRequest {
    const message = createBaseQueryGetProtoRevPoolRequest();
    message.baseDenom = object.baseDenom ?? "";
    message.otherDenom = object.otherDenom ?? "";
    return message;
  },
};
function createBaseQueryGetProtoRevPoolResponse(): QueryGetProtoRevPoolResponse {
  return {
    poolId: BigInt(0),
  };
}
export const QueryGetProtoRevPoolResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse",
  encode(message: QueryGetProtoRevPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProtoRevPoolResponse();
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
  fromJSON(object: any): QueryGetProtoRevPoolResponse {
    const obj = createBaseQueryGetProtoRevPoolResponse();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: QueryGetProtoRevPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetProtoRevPoolResponse>, I>>(
    object: I,
  ): QueryGetProtoRevPoolResponse {
    const message = createBaseQueryGetProtoRevPoolResponse();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
};
function createBaseQueryGetAllProtocolRevenueRequest(): QueryGetAllProtocolRevenueRequest {
  return {};
}
export const QueryGetAllProtocolRevenueRequest = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest",
  encode(_: QueryGetAllProtocolRevenueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllProtocolRevenueRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllProtocolRevenueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryGetAllProtocolRevenueRequest {
    const obj = createBaseQueryGetAllProtocolRevenueRequest();
    return obj;
  },
  toJSON(_: QueryGetAllProtocolRevenueRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllProtocolRevenueRequest>, I>>(
    _: I,
  ): QueryGetAllProtocolRevenueRequest {
    const message = createBaseQueryGetAllProtocolRevenueRequest();
    return message;
  },
};
function createBaseQueryGetAllProtocolRevenueResponse(): QueryGetAllProtocolRevenueResponse {
  return {
    allProtocolRevenue: AllProtocolRevenue.fromPartial({}),
  };
}
export const QueryGetAllProtocolRevenueResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse",
  encode(
    message: QueryGetAllProtocolRevenueResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.allProtocolRevenue !== undefined) {
      AllProtocolRevenue.encode(message.allProtocolRevenue, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllProtocolRevenueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllProtocolRevenueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allProtocolRevenue = AllProtocolRevenue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAllProtocolRevenueResponse {
    const obj = createBaseQueryGetAllProtocolRevenueResponse();
    if (isSet(object.allProtocolRevenue))
      obj.allProtocolRevenue = AllProtocolRevenue.fromJSON(object.allProtocolRevenue);
    return obj;
  },
  toJSON(message: QueryGetAllProtocolRevenueResponse): unknown {
    const obj: any = {};
    message.allProtocolRevenue !== undefined &&
      (obj.allProtocolRevenue = message.allProtocolRevenue
        ? AllProtocolRevenue.toJSON(message.allProtocolRevenue)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllProtocolRevenueResponse>, I>>(
    object: I,
  ): QueryGetAllProtocolRevenueResponse {
    const message = createBaseQueryGetAllProtocolRevenueResponse();
    if (object.allProtocolRevenue !== undefined && object.allProtocolRevenue !== null) {
      message.allProtocolRevenue = AllProtocolRevenue.fromPartial(object.allProtocolRevenue);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  GetProtoRevNumberOfTrades(
    request?: QueryGetProtoRevNumberOfTradesRequest,
  ): Promise<QueryGetProtoRevNumberOfTradesResponse>;
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  GetProtoRevProfitsByDenom(
    request: QueryGetProtoRevProfitsByDenomRequest,
  ): Promise<QueryGetProtoRevProfitsByDenomResponse>;
  /** GetProtoRevAllProfits queries all of the profits from the module */
  GetProtoRevAllProfits(
    request?: QueryGetProtoRevAllProfitsRequest,
  ): Promise<QueryGetProtoRevAllProfitsResponse>;
  /**
   * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
   * that have been executed for a given route
   */
  GetProtoRevStatisticsByRoute(
    request: QueryGetProtoRevStatisticsByRouteRequest,
  ): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
  /**
   * GetProtoRevAllRouteStatistics queries all of routes that the module has
   * arbitraged against and the number of trades and profits that have been
   * accumulated for each route
   */
  GetProtoRevAllRouteStatistics(
    request?: QueryGetProtoRevAllRouteStatisticsRequest,
  ): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  GetProtoRevTokenPairArbRoutes(
    request?: QueryGetProtoRevTokenPairArbRoutesRequest,
  ): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
  /** GetProtoRevAdminAccount queries the admin account of the module */
  GetProtoRevAdminAccount(
    request?: QueryGetProtoRevAdminAccountRequest,
  ): Promise<QueryGetProtoRevAdminAccountResponse>;
  /** GetProtoRevDeveloperAccount queries the developer account of the module */
  GetProtoRevDeveloperAccount(
    request?: QueryGetProtoRevDeveloperAccountRequest,
  ): Promise<QueryGetProtoRevDeveloperAccountResponse>;
  /**
   * GetProtoRevInfoByPoolType queries pool type information that is currently
   * being utilized by the module
   */
  GetProtoRevInfoByPoolType(
    request?: QueryGetProtoRevInfoByPoolTypeRequest,
  ): Promise<QueryGetProtoRevInfoByPoolTypeResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
   * that can be consumed per transaction
   */
  GetProtoRevMaxPoolPointsPerTx(
    request?: QueryGetProtoRevMaxPoolPointsPerTxRequest,
  ): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
   * that can consumed per block
   */
  GetProtoRevMaxPoolPointsPerBlock(
    request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest,
  ): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
  /**
   * GetProtoRevBaseDenoms queries the base denoms that the module is currently
   * utilizing for arbitrage
   */
  GetProtoRevBaseDenoms(
    request?: QueryGetProtoRevBaseDenomsRequest,
  ): Promise<QueryGetProtoRevBaseDenomsResponse>;
  /** GetProtoRevEnabled queries whether the module is enabled or not */
  GetProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
  /**
   * GetProtoRevPool queries the pool id used via the highest liquidity method
   * for arbitrage route building given a pair of denominations
   */
  GetProtoRevPool(request: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponse>;
  /**
   * GetAllProtocolRevenue queries all of the protocol revenue that has been
   * accumulated by any module
   */
  GetAllProtocolRevenue(
    request?: QueryGetAllProtocolRevenueRequest,
  ): Promise<QueryGetAllProtocolRevenueResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GetProtoRevNumberOfTrades = this.GetProtoRevNumberOfTrades.bind(this);
    this.GetProtoRevProfitsByDenom = this.GetProtoRevProfitsByDenom.bind(this);
    this.GetProtoRevAllProfits = this.GetProtoRevAllProfits.bind(this);
    this.GetProtoRevStatisticsByRoute = this.GetProtoRevStatisticsByRoute.bind(this);
    this.GetProtoRevAllRouteStatistics = this.GetProtoRevAllRouteStatistics.bind(this);
    this.GetProtoRevTokenPairArbRoutes = this.GetProtoRevTokenPairArbRoutes.bind(this);
    this.GetProtoRevAdminAccount = this.GetProtoRevAdminAccount.bind(this);
    this.GetProtoRevDeveloperAccount = this.GetProtoRevDeveloperAccount.bind(this);
    this.GetProtoRevInfoByPoolType = this.GetProtoRevInfoByPoolType.bind(this);
    this.GetProtoRevMaxPoolPointsPerTx = this.GetProtoRevMaxPoolPointsPerTx.bind(this);
    this.GetProtoRevMaxPoolPointsPerBlock = this.GetProtoRevMaxPoolPointsPerBlock.bind(this);
    this.GetProtoRevBaseDenoms = this.GetProtoRevBaseDenoms.bind(this);
    this.GetProtoRevEnabled = this.GetProtoRevEnabled.bind(this);
    this.GetProtoRevPool = this.GetProtoRevPool.bind(this);
    this.GetAllProtocolRevenue = this.GetAllProtocolRevenue.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevNumberOfTrades(
    request: QueryGetProtoRevNumberOfTradesRequest = {},
  ): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
    return promise.then((data) => QueryGetProtoRevNumberOfTradesResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevProfitsByDenom(
    request: QueryGetProtoRevProfitsByDenomRequest,
  ): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
    return promise.then((data) => QueryGetProtoRevProfitsByDenomResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevAllProfits(
    request: QueryGetProtoRevAllProfitsRequest = {},
  ): Promise<QueryGetProtoRevAllProfitsResponse> {
    const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
    return promise.then((data) => QueryGetProtoRevAllProfitsResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevStatisticsByRoute(
    request: QueryGetProtoRevStatisticsByRouteRequest,
  ): Promise<QueryGetProtoRevStatisticsByRouteResponse> {
    const data = QueryGetProtoRevStatisticsByRouteRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByRoute", data);
    return promise.then((data) => QueryGetProtoRevStatisticsByRouteResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevAllRouteStatistics(
    request: QueryGetProtoRevAllRouteStatisticsRequest = {},
  ): Promise<QueryGetProtoRevAllRouteStatisticsResponse> {
    const data = QueryGetProtoRevAllRouteStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllRouteStatistics", data);
    return promise.then((data) => QueryGetProtoRevAllRouteStatisticsResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevTokenPairArbRoutes(
    request: QueryGetProtoRevTokenPairArbRoutesRequest = {},
  ): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
    return promise.then((data) => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevAdminAccount(
    request: QueryGetProtoRevAdminAccountRequest = {},
  ): Promise<QueryGetProtoRevAdminAccountResponse> {
    const data = QueryGetProtoRevAdminAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAdminAccount", data);
    return promise.then((data) => QueryGetProtoRevAdminAccountResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevDeveloperAccount(
    request: QueryGetProtoRevDeveloperAccountRequest = {},
  ): Promise<QueryGetProtoRevDeveloperAccountResponse> {
    const data = QueryGetProtoRevDeveloperAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevDeveloperAccount", data);
    return promise.then((data) => QueryGetProtoRevDeveloperAccountResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevInfoByPoolType(
    request: QueryGetProtoRevInfoByPoolTypeRequest = {},
  ): Promise<QueryGetProtoRevInfoByPoolTypeResponse> {
    const data = QueryGetProtoRevInfoByPoolTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevInfoByPoolType", data);
    return promise.then((data) => QueryGetProtoRevInfoByPoolTypeResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevMaxPoolPointsPerTx(
    request: QueryGetProtoRevMaxPoolPointsPerTxRequest = {},
  ): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerTx", data);
    return promise.then((data) => QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevMaxPoolPointsPerBlock(
    request: QueryGetProtoRevMaxPoolPointsPerBlockRequest = {},
  ): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.protorev.v1beta1.Query",
      "GetProtoRevMaxPoolPointsPerBlock",
      data,
    );
    return promise.then((data) =>
      QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(new BinaryReader(data)),
    );
  }
  GetProtoRevBaseDenoms(
    request: QueryGetProtoRevBaseDenomsRequest = {},
  ): Promise<QueryGetProtoRevBaseDenomsResponse> {
    const data = QueryGetProtoRevBaseDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevBaseDenoms", data);
    return promise.then((data) => QueryGetProtoRevBaseDenomsResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevEnabled(request: QueryGetProtoRevEnabledRequest = {}): Promise<QueryGetProtoRevEnabledResponse> {
    const data = QueryGetProtoRevEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevEnabled", data);
    return promise.then((data) => QueryGetProtoRevEnabledResponse.decode(new BinaryReader(data)));
  }
  GetProtoRevPool(request: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponse> {
    const data = QueryGetProtoRevPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevPool", data);
    return promise.then((data) => QueryGetProtoRevPoolResponse.decode(new BinaryReader(data)));
  }
  GetAllProtocolRevenue(
    request: QueryGetAllProtocolRevenueRequest = {},
  ): Promise<QueryGetAllProtocolRevenueResponse> {
    const data = QueryGetAllProtocolRevenueRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetAllProtocolRevenue", data);
    return promise.then((data) => QueryGetAllProtocolRevenueResponse.decode(new BinaryReader(data)));
  }
}
