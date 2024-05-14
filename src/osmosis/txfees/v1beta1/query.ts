/* eslint-disable */
import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.txfees.v1beta1";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
  denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
  poolID: bigint;
  spotPrice: string;
}
export interface QueryDenomPoolIdRequest {
  denom: string;
}
export interface QueryDenomPoolIdResponse {
  poolID: bigint;
}
export interface QueryBaseDenomRequest {}
export interface QueryBaseDenomResponse {
  baseDenom: string;
}
export interface QueryEipBaseFeeRequest {}
export interface QueryEipBaseFeeResponse {
  baseFee: string;
}
function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}
export const QueryFeeTokensRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
  encode(_: QueryFeeTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensRequest();
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
  fromJSON(_: any): QueryFeeTokensRequest {
    const obj = createBaseQueryFeeTokensRequest();
    return obj;
  },
  toJSON(_: QueryFeeTokensRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeeTokensRequest>, I>>(_: I): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },
};
function createBaseQueryFeeTokensResponse(): QueryFeeTokensResponse {
  return {
    feeTokens: [],
  };
}
export const QueryFeeTokensResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
  encode(message: QueryFeeTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeTokensResponse {
    const obj = createBaseQueryFeeTokensResponse();
    if (Array.isArray(object?.feeTokens))
      obj.feeTokens = object.feeTokens.map((e: any) => FeeToken.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryFeeTokensResponse): unknown {
    const obj: any = {};
    if (message.feeTokens) {
      obj.feeTokens = message.feeTokens.map((e) => (e ? FeeToken.toJSON(e) : undefined));
    } else {
      obj.feeTokens = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeeTokensResponse>, I>>(object: I): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.feeTokens?.map((e) => FeeToken.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryDenomSpotPriceRequest(): QueryDenomSpotPriceRequest {
  return {
    denom: "",
  };
}
export const QueryDenomSpotPriceRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
  encode(message: QueryDenomSpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceRequest();
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
  fromJSON(object: any): QueryDenomSpotPriceRequest {
    const obj = createBaseQueryDenomSpotPriceRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryDenomSpotPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomSpotPriceRequest>, I>>(
    object: I,
  ): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryDenomSpotPriceResponse(): QueryDenomSpotPriceResponse {
  return {
    poolID: BigInt(0),
    spotPrice: "",
  };
}
export const QueryDenomSpotPriceResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
  encode(message: QueryDenomSpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolID !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolID);
    }
    if (message.spotPrice !== "") {
      writer.uint32(18).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = reader.uint64();
          break;
        case 2:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomSpotPriceResponse {
    const obj = createBaseQueryDenomSpotPriceResponse();
    if (isSet(object.poolID)) obj.poolID = BigInt(object.poolID.toString());
    if (isSet(object.spotPrice)) obj.spotPrice = String(object.spotPrice);
    return obj;
  },
  toJSON(message: QueryDenomSpotPriceResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomSpotPriceResponse>, I>>(
    object: I,
  ): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = BigInt(object.poolID.toString());
    }
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
};
function createBaseQueryDenomPoolIdRequest(): QueryDenomPoolIdRequest {
  return {
    denom: "",
  };
}
export const QueryDenomPoolIdRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
  encode(message: QueryDenomPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdRequest();
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
  fromJSON(object: any): QueryDenomPoolIdRequest {
    const obj = createBaseQueryDenomPoolIdRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryDenomPoolIdRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomPoolIdRequest>, I>>(object: I): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryDenomPoolIdResponse(): QueryDenomPoolIdResponse {
  return {
    poolID: BigInt(0),
  };
}
export const QueryDenomPoolIdResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
  encode(message: QueryDenomPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolID !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomPoolIdResponse {
    const obj = createBaseQueryDenomPoolIdResponse();
    if (isSet(object.poolID)) obj.poolID = BigInt(object.poolID.toString());
    return obj;
  },
  toJSON(message: QueryDenomPoolIdResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomPoolIdResponse>, I>>(
    object: I,
  ): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = BigInt(object.poolID.toString());
    }
    return message;
  },
};
function createBaseQueryBaseDenomRequest(): QueryBaseDenomRequest {
  return {};
}
export const QueryBaseDenomRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
  encode(_: QueryBaseDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomRequest();
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
  fromJSON(_: any): QueryBaseDenomRequest {
    const obj = createBaseQueryBaseDenomRequest();
    return obj;
  },
  toJSON(_: QueryBaseDenomRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBaseDenomRequest>, I>>(_: I): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
  },
};
function createBaseQueryBaseDenomResponse(): QueryBaseDenomResponse {
  return {
    baseDenom: "",
  };
}
export const QueryBaseDenomResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
  encode(message: QueryBaseDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBaseDenomResponse {
    const obj = createBaseQueryBaseDenomResponse();
    if (isSet(object.baseDenom)) obj.baseDenom = String(object.baseDenom);
    return obj;
  },
  toJSON(message: QueryBaseDenomResponse): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBaseDenomResponse>, I>>(object: I): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};
function createBaseQueryEipBaseFeeRequest(): QueryEipBaseFeeRequest {
  return {};
}
export const QueryEipBaseFeeRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryEipBaseFeeRequest",
  encode(_: QueryEipBaseFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEipBaseFeeRequest();
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
  fromJSON(_: any): QueryEipBaseFeeRequest {
    const obj = createBaseQueryEipBaseFeeRequest();
    return obj;
  },
  toJSON(_: QueryEipBaseFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEipBaseFeeRequest>, I>>(_: I): QueryEipBaseFeeRequest {
    const message = createBaseQueryEipBaseFeeRequest();
    return message;
  },
};
function createBaseQueryEipBaseFeeResponse(): QueryEipBaseFeeResponse {
  return {
    baseFee: "",
  };
}
export const QueryEipBaseFeeResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryEipBaseFeeResponse",
  encode(message: QueryEipBaseFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEipBaseFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEipBaseFeeResponse {
    const obj = createBaseQueryEipBaseFeeResponse();
    if (isSet(object.baseFee)) obj.baseFee = String(object.baseFee);
    return obj;
  },
  toJSON(message: QueryEipBaseFeeResponse): unknown {
    const obj: any = {};
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEipBaseFeeResponse>, I>>(object: I): QueryEipBaseFeeResponse {
    const message = createBaseQueryEipBaseFeeResponse();
    message.baseFee = object.baseFee ?? "";
    return message;
  },
};
export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  FeeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  DenomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;
  /** Returns the poolID for a specified denom input. */
  DenomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;
  /** Returns a list of all base denom tokens and their corresponding pools. */
  BaseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
  /** Returns a list of all base denom tokens and their corresponding pools. */
  GetEipBaseFee(request?: QueryEipBaseFeeRequest): Promise<QueryEipBaseFeeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FeeTokens = this.FeeTokens.bind(this);
    this.DenomSpotPrice = this.DenomSpotPrice.bind(this);
    this.DenomPoolId = this.DenomPoolId.bind(this);
    this.BaseDenom = this.BaseDenom.bind(this);
    this.GetEipBaseFee = this.GetEipBaseFee.bind(this);
  }
  FeeTokens(request: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponse> {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
    return promise.then((data) => QueryFeeTokensResponse.decode(new BinaryReader(data)));
  }
  DenomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse> {
    const data = QueryDenomSpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
    return promise.then((data) => QueryDenomSpotPriceResponse.decode(new BinaryReader(data)));
  }
  DenomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> {
    const data = QueryDenomPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
    return promise.then((data) => QueryDenomPoolIdResponse.decode(new BinaryReader(data)));
  }
  BaseDenom(request: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponse> {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
    return promise.then((data) => QueryBaseDenomResponse.decode(new BinaryReader(data)));
  }
  GetEipBaseFee(request: QueryEipBaseFeeRequest = {}): Promise<QueryEipBaseFeeResponse> {
    const data = QueryEipBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "GetEipBaseFee", data);
    return promise.then((data) => QueryEipBaseFeeResponse.decode(new BinaryReader(data)));
  }
}
