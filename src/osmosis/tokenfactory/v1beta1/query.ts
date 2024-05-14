/* eslint-disable */
import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata: DenomAuthorityMetadata;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
export interface QueryBeforeSendHookAddressRequest {
  denom: string;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
  cosmwasmAddress: string;
}
export interface QueryAllBeforeSendHooksAddressesRequest {}
/**
 * QueryAllBeforeSendHooksAddressesResponse defines the response structure for
 * the AllBeforeSendHooksAddresses gRPC query.
 */
export interface QueryAllBeforeSendHooksAddressesResponse {
  denoms: string[];
  beforeSendHookAddresses: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
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
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
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
function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
  return {
    denom: "",
  };
}
export const QueryDenomAuthorityMetadataRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
  encode(
    message: QueryDenomAuthorityMetadataRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataRequest();
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
  fromJSON(object: any): QueryDenomAuthorityMetadataRequest {
    const obj = createBaseQueryDenomAuthorityMetadataRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryDenomAuthorityMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataRequest>, I>>(
    object: I,
  ): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
  return {
    authorityMetadata: DenomAuthorityMetadata.fromPartial({}),
  };
}
export const QueryDenomAuthorityMetadataResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
  encode(
    message: QueryDenomAuthorityMetadataResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomAuthorityMetadataResponse {
    const obj = createBaseQueryDenomAuthorityMetadataResponse();
    if (isSet(object.authorityMetadata))
      obj.authorityMetadata = DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
    return obj;
  },
  toJSON(message: QueryDenomAuthorityMetadataResponse): unknown {
    const obj: any = {};
    message.authorityMetadata !== undefined &&
      (obj.authorityMetadata = message.authorityMetadata
        ? DenomAuthorityMetadata.toJSON(message.authorityMetadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataResponse>, I>>(
    object: I,
  ): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
    }
    return message;
  },
};
function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: "",
  };
}
export const QueryDenomsFromCreatorRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
  encode(message: QueryDenomsFromCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomsFromCreatorRequest {
    const obj = createBaseQueryDenomsFromCreatorRequest();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    return obj;
  },
  toJSON(message: QueryDenomsFromCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorRequest>, I>>(
    object: I,
  ): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? "";
    return message;
  },
};
function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: [],
  };
}
export const QueryDenomsFromCreatorResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
  encode(
    message: QueryDenomsFromCreatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomsFromCreatorResponse {
    const obj = createBaseQueryDenomsFromCreatorResponse();
    if (Array.isArray(object?.denoms)) obj.denoms = object.denoms.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryDenomsFromCreatorResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorResponse>, I>>(
    object: I,
  ): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryBeforeSendHookAddressRequest(): QueryBeforeSendHookAddressRequest {
  return {
    denom: "",
  };
}
export const QueryBeforeSendHookAddressRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest",
  encode(
    message: QueryBeforeSendHookAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeforeSendHookAddressRequest();
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
  fromJSON(object: any): QueryBeforeSendHookAddressRequest {
    const obj = createBaseQueryBeforeSendHookAddressRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryBeforeSendHookAddressRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeforeSendHookAddressRequest>, I>>(
    object: I,
  ): QueryBeforeSendHookAddressRequest {
    const message = createBaseQueryBeforeSendHookAddressRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryBeforeSendHookAddressResponse(): QueryBeforeSendHookAddressResponse {
  return {
    cosmwasmAddress: "",
  };
}
export const QueryBeforeSendHookAddressResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse",
  encode(
    message: QueryBeforeSendHookAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.cosmwasmAddress !== "") {
      writer.uint32(10).string(message.cosmwasmAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeforeSendHookAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmwasmAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBeforeSendHookAddressResponse {
    const obj = createBaseQueryBeforeSendHookAddressResponse();
    if (isSet(object.cosmwasmAddress)) obj.cosmwasmAddress = String(object.cosmwasmAddress);
    return obj;
  },
  toJSON(message: QueryBeforeSendHookAddressResponse): unknown {
    const obj: any = {};
    message.cosmwasmAddress !== undefined && (obj.cosmwasmAddress = message.cosmwasmAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeforeSendHookAddressResponse>, I>>(
    object: I,
  ): QueryBeforeSendHookAddressResponse {
    const message = createBaseQueryBeforeSendHookAddressResponse();
    message.cosmwasmAddress = object.cosmwasmAddress ?? "";
    return message;
  },
};
function createBaseQueryAllBeforeSendHooksAddressesRequest(): QueryAllBeforeSendHooksAddressesRequest {
  return {};
}
export const QueryAllBeforeSendHooksAddressesRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest",
  encode(
    _: QueryAllBeforeSendHooksAddressesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBeforeSendHooksAddressesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
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
  fromJSON(_: any): QueryAllBeforeSendHooksAddressesRequest {
    const obj = createBaseQueryAllBeforeSendHooksAddressesRequest();
    return obj;
  },
  toJSON(_: QueryAllBeforeSendHooksAddressesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllBeforeSendHooksAddressesRequest>, I>>(
    _: I,
  ): QueryAllBeforeSendHooksAddressesRequest {
    const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
    return message;
  },
};
function createBaseQueryAllBeforeSendHooksAddressesResponse(): QueryAllBeforeSendHooksAddressesResponse {
  return {
    denoms: [],
    beforeSendHookAddresses: [],
  };
}
export const QueryAllBeforeSendHooksAddressesResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse",
  encode(
    message: QueryAllBeforeSendHooksAddressesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.beforeSendHookAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBeforeSendHooksAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 2:
          message.beforeSendHookAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllBeforeSendHooksAddressesResponse {
    const obj = createBaseQueryAllBeforeSendHooksAddressesResponse();
    if (Array.isArray(object?.denoms)) obj.denoms = object.denoms.map((e: any) => String(e));
    if (Array.isArray(object?.beforeSendHookAddresses))
      obj.beforeSendHookAddresses = object.beforeSendHookAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryAllBeforeSendHooksAddressesResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    if (message.beforeSendHookAddresses) {
      obj.beforeSendHookAddresses = message.beforeSendHookAddresses.map((e) => e);
    } else {
      obj.beforeSendHookAddresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllBeforeSendHooksAddressesResponse>, I>>(
    object: I,
  ): QueryAllBeforeSendHooksAddressesResponse {
    const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
    message.denoms = object.denoms?.map((e) => e) || [];
    message.beforeSendHookAddresses = object.beforeSendHookAddresses?.map((e) => e) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * DenomAuthorityMetadata defines a gRPC query method for fetching
   * DenomAuthorityMetadata for a particular denom.
   */
  DenomAuthorityMetadata(
    request: QueryDenomAuthorityMetadataRequest,
  ): Promise<QueryDenomAuthorityMetadataResponse>;
  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */
  DenomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
  /**
   * BeforeSendHookAddress defines a gRPC query method for
   * getting the address registered for the before send hook.
   */
  BeforeSendHookAddress(
    request: QueryBeforeSendHookAddressRequest,
  ): Promise<QueryBeforeSendHookAddressResponse>;
  /**
   * AllBeforeSendHooksAddresses defines a gRPC query method for
   * getting all addresses with before send hook registered.
   * The response returns two arrays, an array with a list of denom and an array
   * of before send hook addresses. The idx of denom corresponds to before send
   * hook addresse's idx.
   */
  AllBeforeSendHooksAddresses(
    request?: QueryAllBeforeSendHooksAddressesRequest,
  ): Promise<QueryAllBeforeSendHooksAddressesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.DenomAuthorityMetadata = this.DenomAuthorityMetadata.bind(this);
    this.DenomsFromCreator = this.DenomsFromCreator.bind(this);
    this.BeforeSendHookAddress = this.BeforeSendHookAddress.bind(this);
    this.AllBeforeSendHooksAddresses = this.AllBeforeSendHooksAddresses.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  DenomAuthorityMetadata(
    request: QueryDenomAuthorityMetadataRequest,
  ): Promise<QueryDenomAuthorityMetadataResponse> {
    const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
    return promise.then((data) => QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data)));
  }
  DenomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
    return promise.then((data) => QueryDenomsFromCreatorResponse.decode(new BinaryReader(data)));
  }
  BeforeSendHookAddress(
    request: QueryBeforeSendHookAddressRequest,
  ): Promise<QueryBeforeSendHookAddressResponse> {
    const data = QueryBeforeSendHookAddressRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "BeforeSendHookAddress", data);
    return promise.then((data) => QueryBeforeSendHookAddressResponse.decode(new BinaryReader(data)));
  }
  AllBeforeSendHooksAddresses(
    request: QueryAllBeforeSendHooksAddressesRequest = {},
  ): Promise<QueryAllBeforeSendHooksAddressesResponse> {
    const data = QueryAllBeforeSendHooksAddressesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.tokenfactory.v1beta1.Query",
      "AllBeforeSendHooksAddresses",
      data,
    );
    return promise.then((data) => QueryAllBeforeSendHooksAddressesResponse.decode(new BinaryReader(data)));
  }
}
