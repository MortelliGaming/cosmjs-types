/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.bank.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the coin. */
  balance?: Coin;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
  /** address is the address to query balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
  /** balances is the balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
  /** supply is the supply of the coins */
  supply: Coin[];
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
  /** denom is the coin denom to query balances for. */
  denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
  /** amount is the supply of the coin. */
  amount: Coin;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
  params: Params;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: "",
    denom: "",
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceRequest {
    const obj = createBaseQueryBalanceRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: undefined,
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    const obj = createBaseQueryBalanceResponse();
    if (isSet(object.balance)) obj.balance = Coin.fromJSON(object.balance);
    return obj;
  },
  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    }
    return message;
  },
};
function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryAllBalancesRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
  encode(message: QueryAllBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllBalancesRequest {
    const obj = createBaseQueryAllBalancesRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(object: I): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
  return {
    balances: [],
    pagination: undefined,
  };
}
export const QueryAllBalancesResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
  encode(message: QueryAllBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllBalancesResponse {
    const obj = createBaseQueryAllBalancesResponse();
    if (Array.isArray(object?.balances)) obj.balances = object.balances.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(
    object: I,
  ): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}
export const QueryTotalSupplyRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
  encode(_: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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
  fromJSON(_: any): QueryTotalSupplyRequest {
    const obj = createBaseQueryTotalSupplyRequest();
    return obj;
  },
  toJSON(_: QueryTotalSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(_: I): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    supply: [],
  };
}
export const QueryTotalSupplyResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSupplyResponse {
    const obj = createBaseQueryTotalSupplyResponse();
    if (Array.isArray(object?.supply)) obj.supply = object.supply.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.supply = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(
    object: I,
  ): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
  return {
    denom: "",
  };
}
export const QuerySupplyOfRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
  encode(message: QuerySupplyOfRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
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
  fromJSON(object: any): QuerySupplyOfRequest {
    const obj = createBaseQuerySupplyOfRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QuerySupplyOfRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(object: I): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QuerySupplyOfResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
  encode(message: QuerySupplyOfResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyOfResponse {
    const obj = createBaseQuerySupplyOfResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QuerySupplyOfResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(object: I): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
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
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all coins for a single account. */
  AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
  /** TotalSupply queries the total supply of all coins. */
  TotalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /** SupplyOf queries the supply of a single coin. */
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.SupplyOf = this.SupplyOf.bind(this);
    this.Params = this.Params.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then((data) => QueryAllBalancesResponse.decode(new BinaryReader(data)));
  }
  TotalSupply(request: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then((data) => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then((data) => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
