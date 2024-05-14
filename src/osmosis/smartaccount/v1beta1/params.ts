/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.smartaccount.v1beta1";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * MaximumUnauthenticatedGas defines the maximum amount of gas that can be
   * used to authenticate a transaction in ante handler without having fee payer
   * authenticated.
   */
  maximumUnauthenticatedGas: bigint;
  /**
   * IsSmartAccountActive defines the state of the authenticator.
   * If set to false, the authenticator module will not be used
   * and the classic cosmos sdk authentication will be used instead.
   */
  isSmartAccountActive: boolean;
  /**
   * CircuitBreakerControllers defines list of addresses that are allowed to
   * set is_smart_account_active without going through governance.
   */
  circuitBreakerControllers: string[];
}
function createBaseParams(): Params {
  return {
    maximumUnauthenticatedGas: BigInt(0),
    isSmartAccountActive: false,
    circuitBreakerControllers: [],
  };
}
export const Params = {
  typeUrl: "/osmosis.smartaccount.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maximumUnauthenticatedGas !== BigInt(0)) {
      writer.uint32(8).uint64(message.maximumUnauthenticatedGas);
    }
    if (message.isSmartAccountActive === true) {
      writer.uint32(16).bool(message.isSmartAccountActive);
    }
    for (const v of message.circuitBreakerControllers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximumUnauthenticatedGas = reader.uint64();
          break;
        case 2:
          message.isSmartAccountActive = reader.bool();
          break;
        case 3:
          message.circuitBreakerControllers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.maximumUnauthenticatedGas))
      obj.maximumUnauthenticatedGas = BigInt(object.maximumUnauthenticatedGas.toString());
    if (isSet(object.isSmartAccountActive)) obj.isSmartAccountActive = Boolean(object.isSmartAccountActive);
    if (Array.isArray(object?.circuitBreakerControllers))
      obj.circuitBreakerControllers = object.circuitBreakerControllers.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maximumUnauthenticatedGas !== undefined &&
      (obj.maximumUnauthenticatedGas = (message.maximumUnauthenticatedGas || BigInt(0)).toString());
    message.isSmartAccountActive !== undefined && (obj.isSmartAccountActive = message.isSmartAccountActive);
    if (message.circuitBreakerControllers) {
      obj.circuitBreakerControllers = message.circuitBreakerControllers.map((e) => e);
    } else {
      obj.circuitBreakerControllers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.maximumUnauthenticatedGas !== undefined && object.maximumUnauthenticatedGas !== null) {
      message.maximumUnauthenticatedGas = BigInt(object.maximumUnauthenticatedGas.toString());
    }
    message.isSmartAccountActive = object.isSmartAccountActive ?? false;
    message.circuitBreakerControllers = object.circuitBreakerControllers?.map((e) => e) || [];
    return message;
  },
};
