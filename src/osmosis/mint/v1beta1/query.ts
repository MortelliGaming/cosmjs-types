/* eslint-disable */
import { Params } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.mint.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsRequest {}
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 */
export interface QueryEpochProvisionsResponse {
  /** epoch_provisions is the current minting per epoch provisions value. */
  epochProvisions: Uint8Array;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.mint.v1beta1.QueryParamsRequest",
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
  typeUrl: "/osmosis.mint.v1beta1.QueryParamsResponse",
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
function createBaseQueryEpochProvisionsRequest(): QueryEpochProvisionsRequest {
  return {};
}
export const QueryEpochProvisionsRequest = {
  typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsRequest",
  encode(_: QueryEpochProvisionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsRequest();
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
  fromJSON(_: any): QueryEpochProvisionsRequest {
    const obj = createBaseQueryEpochProvisionsRequest();
    return obj;
  },
  toJSON(_: QueryEpochProvisionsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEpochProvisionsRequest>, I>>(
    _: I,
  ): QueryEpochProvisionsRequest {
    const message = createBaseQueryEpochProvisionsRequest();
    return message;
  },
};
function createBaseQueryEpochProvisionsResponse(): QueryEpochProvisionsResponse {
  return {
    epochProvisions: new Uint8Array(),
  };
}
export const QueryEpochProvisionsResponse = {
  typeUrl: "/osmosis.mint.v1beta1.QueryEpochProvisionsResponse",
  encode(message: QueryEpochProvisionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochProvisions.length !== 0) {
      writer.uint32(10).bytes(message.epochProvisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochProvisionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochProvisionsResponse {
    const obj = createBaseQueryEpochProvisionsResponse();
    if (isSet(object.epochProvisions)) obj.epochProvisions = bytesFromBase64(object.epochProvisions);
    return obj;
  },
  toJSON(message: QueryEpochProvisionsResponse): unknown {
    const obj: any = {};
    message.epochProvisions !== undefined &&
      (obj.epochProvisions = base64FromBytes(
        message.epochProvisions !== undefined ? message.epochProvisions : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEpochProvisionsResponse>, I>>(
    object: I,
  ): QueryEpochProvisionsResponse {
    const message = createBaseQueryEpochProvisionsResponse();
    message.epochProvisions = object.epochProvisions ?? new Uint8Array();
    return message;
  },
};
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EpochProvisions returns the current minting epoch provisions value. */
  EpochProvisions(request?: QueryEpochProvisionsRequest): Promise<QueryEpochProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EpochProvisions = this.EpochProvisions.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  EpochProvisions(request: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponse> {
    const data = QueryEpochProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.mint.v1beta1.Query", "EpochProvisions", data);
    return promise.then((data) => QueryEpochProvisionsResponse.decode(new BinaryReader(data)));
  }
}
