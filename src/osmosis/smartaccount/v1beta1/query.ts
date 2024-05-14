/* eslint-disable */
import { Params } from "./params";
import { AccountAuthenticator } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.smartaccount.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequest {
  /** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
  account: string;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponse {
  accountAuthenticators: AccountAuthenticator[];
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */
export interface GetAuthenticatorRequest {
  account: string;
  authenticatorId: bigint;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */
export interface GetAuthenticatorResponse {
  accountAuthenticator?: AccountAuthenticator;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsRequest",
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
  typeUrl: "/osmosis.smartaccount.v1beta1.QueryParamsResponse",
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
function createBaseGetAuthenticatorsRequest(): GetAuthenticatorsRequest {
  return {
    account: "",
  };
}
export const GetAuthenticatorsRequest = {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsRequest",
  encode(message: GetAuthenticatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAuthenticatorsRequest {
    const obj = createBaseGetAuthenticatorsRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    return obj;
  },
  toJSON(message: GetAuthenticatorsRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAuthenticatorsRequest>, I>>(
    object: I,
  ): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    message.account = object.account ?? "";
    return message;
  },
};
function createBaseGetAuthenticatorsResponse(): GetAuthenticatorsResponse {
  return {
    accountAuthenticators: [],
  };
}
export const GetAuthenticatorsResponse = {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorsResponse",
  encode(message: GetAuthenticatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountAuthenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAuthenticatorsResponse {
    const obj = createBaseGetAuthenticatorsResponse();
    if (Array.isArray(object?.accountAuthenticators))
      obj.accountAuthenticators = object.accountAuthenticators.map((e: any) =>
        AccountAuthenticator.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GetAuthenticatorsResponse): unknown {
    const obj: any = {};
    if (message.accountAuthenticators) {
      obj.accountAuthenticators = message.accountAuthenticators.map((e) =>
        e ? AccountAuthenticator.toJSON(e) : undefined,
      );
    } else {
      obj.accountAuthenticators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAuthenticatorsResponse>, I>>(
    object: I,
  ): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators =
      object.accountAuthenticators?.map((e) => AccountAuthenticator.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGetAuthenticatorRequest(): GetAuthenticatorRequest {
  return {
    account: "",
    authenticatorId: BigInt(0),
  };
}
export const GetAuthenticatorRequest = {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorRequest",
  encode(message: GetAuthenticatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.authenticatorId !== BigInt(0)) {
      writer.uint32(16).uint64(message.authenticatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.authenticatorId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAuthenticatorRequest {
    const obj = createBaseGetAuthenticatorRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.authenticatorId)) obj.authenticatorId = BigInt(object.authenticatorId.toString());
    return obj;
  },
  toJSON(message: GetAuthenticatorRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.authenticatorId !== undefined &&
      (obj.authenticatorId = (message.authenticatorId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAuthenticatorRequest>, I>>(object: I): GetAuthenticatorRequest {
    const message = createBaseGetAuthenticatorRequest();
    message.account = object.account ?? "";
    if (object.authenticatorId !== undefined && object.authenticatorId !== null) {
      message.authenticatorId = BigInt(object.authenticatorId.toString());
    }
    return message;
  },
};
function createBaseGetAuthenticatorResponse(): GetAuthenticatorResponse {
  return {
    accountAuthenticator: undefined,
  };
}
export const GetAuthenticatorResponse = {
  typeUrl: "/osmosis.smartaccount.v1beta1.GetAuthenticatorResponse",
  encode(message: GetAuthenticatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAuthenticator !== undefined) {
      AccountAuthenticator.encode(message.accountAuthenticator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticator = AccountAuthenticator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAuthenticatorResponse {
    const obj = createBaseGetAuthenticatorResponse();
    if (isSet(object.accountAuthenticator))
      obj.accountAuthenticator = AccountAuthenticator.fromJSON(object.accountAuthenticator);
    return obj;
  },
  toJSON(message: GetAuthenticatorResponse): unknown {
    const obj: any = {};
    message.accountAuthenticator !== undefined &&
      (obj.accountAuthenticator = message.accountAuthenticator
        ? AccountAuthenticator.toJSON(message.accountAuthenticator)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAuthenticatorResponse>, I>>(
    object: I,
  ): GetAuthenticatorResponse {
    const message = createBaseGetAuthenticatorResponse();
    if (object.accountAuthenticator !== undefined && object.accountAuthenticator !== null) {
      message.accountAuthenticator = AccountAuthenticator.fromPartial(object.accountAuthenticator);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  GetAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
  GetAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GetAuthenticator = this.GetAuthenticator.bind(this);
    this.GetAuthenticators = this.GetAuthenticators.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  GetAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse> {
    const data = GetAuthenticatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "GetAuthenticator", data);
    return promise.then((data) => GetAuthenticatorResponse.decode(new BinaryReader(data)));
  }
  GetAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse> {
    const data = GetAuthenticatorsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.smartaccount.v1beta1.Query", "GetAuthenticators", data);
    return promise.then((data) => GetAuthenticatorsResponse.decode(new BinaryReader(data)));
  }
}
