/* eslint-disable */
import { AccountAuthenticator } from "./models";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.smartaccount.v1beta1";
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 */
export interface AuthenticatorData {
  /** address is an account address, one address can have many authenticators */
  address: string;
  /**
   * authenticators are the account's authenticators, these can be multiple
   * types including SignatureVerification, AllOfs, CosmWasmAuthenticators, etc
   */
  authenticators: AccountAuthenticator[];
}
/** GenesisState defines the authenticator module's genesis state. */
export interface GenesisState {
  /** params define the parameters for the authenticator module. */
  params: Params;
  /** next_authenticator_id is the next available authenticator ID. */
  nextAuthenticatorId: bigint;
  /**
   * authenticator_data contains the data for multiple accounts, each with their
   * authenticators.
   */
  authenticatorData: AuthenticatorData[];
}
function createBaseAuthenticatorData(): AuthenticatorData {
  return {
    address: "",
    authenticators: [],
  };
}
export const AuthenticatorData = {
  typeUrl: "/osmosis.smartaccount.v1beta1.AuthenticatorData",
  encode(message: AuthenticatorData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.authenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthenticatorData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticatorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.authenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthenticatorData {
    const obj = createBaseAuthenticatorData();
    if (isSet(object.address)) obj.address = String(object.address);
    if (Array.isArray(object?.authenticators))
      obj.authenticators = object.authenticators.map((e: any) => AccountAuthenticator.fromJSON(e));
    return obj;
  },
  toJSON(message: AuthenticatorData): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.authenticators) {
      obj.authenticators = message.authenticators.map((e) =>
        e ? AccountAuthenticator.toJSON(e) : undefined,
      );
    } else {
      obj.authenticators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AuthenticatorData>, I>>(object: I): AuthenticatorData {
    const message = createBaseAuthenticatorData();
    message.address = object.address ?? "";
    message.authenticators = object.authenticators?.map((e) => AccountAuthenticator.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nextAuthenticatorId: BigInt(0),
    authenticatorData: [],
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.smartaccount.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextAuthenticatorId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextAuthenticatorId);
    }
    for (const v of message.authenticatorData) {
      AuthenticatorData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextAuthenticatorId = reader.uint64();
          break;
        case 3:
          message.authenticatorData.push(AuthenticatorData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.nextAuthenticatorId))
      obj.nextAuthenticatorId = BigInt(object.nextAuthenticatorId.toString());
    if (Array.isArray(object?.authenticatorData))
      obj.authenticatorData = object.authenticatorData.map((e: any) => AuthenticatorData.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nextAuthenticatorId !== undefined &&
      (obj.nextAuthenticatorId = (message.nextAuthenticatorId || BigInt(0)).toString());
    if (message.authenticatorData) {
      obj.authenticatorData = message.authenticatorData.map((e) =>
        e ? AuthenticatorData.toJSON(e) : undefined,
      );
    } else {
      obj.authenticatorData = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.nextAuthenticatorId !== undefined && object.nextAuthenticatorId !== null) {
      message.nextAuthenticatorId = BigInt(object.nextAuthenticatorId.toString());
    }
    message.authenticatorData = object.authenticatorData?.map((e) => AuthenticatorData.fromPartial(e)) || [];
    return message;
  },
};
