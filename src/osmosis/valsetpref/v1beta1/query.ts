/* eslint-disable */
import { ValidatorPreference } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.valsetpref.v1beta1";
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
  /** user account address */
  address: string;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
  preferences: ValidatorPreference[];
}
function createBaseUserValidatorPreferencesRequest(): UserValidatorPreferencesRequest {
  return {
    address: "",
  };
}
export const UserValidatorPreferencesRequest = {
  typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest",
  encode(
    message: UserValidatorPreferencesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserValidatorPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserValidatorPreferencesRequest {
    const obj = createBaseUserValidatorPreferencesRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: UserValidatorPreferencesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserValidatorPreferencesRequest>, I>>(
    object: I,
  ): UserValidatorPreferencesRequest {
    const message = createBaseUserValidatorPreferencesRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseUserValidatorPreferencesResponse(): UserValidatorPreferencesResponse {
  return {
    preferences: [],
  };
}
export const UserValidatorPreferencesResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse",
  encode(
    message: UserValidatorPreferencesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserValidatorPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserValidatorPreferencesResponse {
    const obj = createBaseUserValidatorPreferencesResponse();
    if (Array.isArray(object?.preferences))
      obj.preferences = object.preferences.map((e: any) => ValidatorPreference.fromJSON(e));
    return obj;
  },
  toJSON(message: UserValidatorPreferencesResponse): unknown {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) => (e ? ValidatorPreference.toJSON(e) : undefined));
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserValidatorPreferencesResponse>, I>>(
    object: I,
  ): UserValidatorPreferencesResponse {
    const message = createBaseUserValidatorPreferencesResponse();
    message.preferences = object.preferences?.map((e) => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns the list of ValidatorPreferences for the user. */
  UserValidatorPreferences(
    request: UserValidatorPreferencesRequest,
  ): Promise<UserValidatorPreferencesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UserValidatorPreferences = this.UserValidatorPreferences.bind(this);
  }
  UserValidatorPreferences(
    request: UserValidatorPreferencesRequest,
  ): Promise<UserValidatorPreferencesResponse> {
    const data = UserValidatorPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Query", "UserValidatorPreferences", data);
    return promise.then((data) => UserValidatorPreferencesResponse.decode(new BinaryReader(data)));
  }
}
