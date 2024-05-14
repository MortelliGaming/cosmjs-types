/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.smartaccount.v1beta1";
/**
 * AccountAuthenticator represents a foundational model for all authenticators.
 * It provides extensibility by allowing concrete types to interpret and
 * validate transactions based on the encapsulated data.
 */
export interface AccountAuthenticator {
  /** ID uniquely identifies the authenticator instance. */
  id: bigint;
  /**
   * Type specifies the category of the AccountAuthenticator.
   * This type information is essential for differentiating authenticators
   * and ensuring precise data retrieval from the storage layer.
   */
  type: string;
  /**
   * Config is a versatile field used in conjunction with the specific type of
   * account authenticator to facilitate complex authentication processes.
   * The interpretation of this field is overloaded, enabling multiple
   * authenticators to utilize it for their respective purposes.
   */
  config: Uint8Array;
}
function createBaseAccountAuthenticator(): AccountAuthenticator {
  return {
    id: BigInt(0),
    type: "",
    config: new Uint8Array(),
  };
}
export const AccountAuthenticator = {
  typeUrl: "/osmosis.smartaccount.v1beta1.AccountAuthenticator",
  encode(message: AccountAuthenticator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.config.length !== 0) {
      writer.uint32(26).bytes(message.config);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountAuthenticator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAuthenticator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.config = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountAuthenticator {
    const obj = createBaseAccountAuthenticator();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.config)) obj.config = bytesFromBase64(object.config);
    return obj;
  },
  toJSON(message: AccountAuthenticator): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.type !== undefined && (obj.type = message.type);
    message.config !== undefined &&
      (obj.config = base64FromBytes(message.config !== undefined ? message.config : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccountAuthenticator>, I>>(object: I): AccountAuthenticator {
    const message = createBaseAccountAuthenticator();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.type = object.type ?? "";
    message.config = object.config ?? new Uint8Array();
    return message;
  },
};
