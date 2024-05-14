/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.valsetpref.v1beta1";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreference {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  valOperAddress: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */
  weight: string;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferences {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreference[];
}
function createBaseValidatorPreference(): ValidatorPreference {
  return {
    valOperAddress: "",
    weight: "",
  };
}
export const ValidatorPreference = {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
  encode(message: ValidatorPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valOperAddress !== "") {
      writer.uint32(10).string(message.valOperAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valOperAddress = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorPreference {
    const obj = createBaseValidatorPreference();
    if (isSet(object.valOperAddress)) obj.valOperAddress = String(object.valOperAddress);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: ValidatorPreference): unknown {
    const obj: any = {};
    message.valOperAddress !== undefined && (obj.valOperAddress = message.valOperAddress);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorPreference>, I>>(object: I): ValidatorPreference {
    const message = createBaseValidatorPreference();
    message.valOperAddress = object.valOperAddress ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
};
function createBaseValidatorSetPreferences(): ValidatorSetPreferences {
  return {
    preferences: [],
  };
}
export const ValidatorSetPreferences = {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
  encode(message: ValidatorSetPreferences, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSetPreferences {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSetPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSetPreferences {
    const obj = createBaseValidatorSetPreferences();
    if (Array.isArray(object?.preferences))
      obj.preferences = object.preferences.map((e: any) => ValidatorPreference.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorSetPreferences): unknown {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) => (e ? ValidatorPreference.toJSON(e) : undefined));
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorSetPreferences>, I>>(object: I): ValidatorSetPreferences {
    const message = createBaseValidatorSetPreferences();
    message.preferences = object.preferences?.map((e) => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
};
