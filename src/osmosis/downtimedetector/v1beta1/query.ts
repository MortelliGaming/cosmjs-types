/* eslint-disable */
import { Downtime, downtimeFromJSON, downtimeToJSON } from "./downtime_duration";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.downtimedetector.v1beta1";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
  downtime: Downtime;
  recovery: Duration;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
  succesfullyRecovered: boolean;
}
function createBaseRecoveredSinceDowntimeOfLengthRequest(): RecoveredSinceDowntimeOfLengthRequest {
  return {
    downtime: 0,
    recovery: Duration.fromPartial({}),
  };
}
export const RecoveredSinceDowntimeOfLengthRequest = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
  encode(
    message: RecoveredSinceDowntimeOfLengthRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.downtime !== 0) {
      writer.uint32(8).int32(message.downtime);
    }
    if (message.recovery !== undefined) {
      Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtime = reader.int32() as any;
          break;
        case 2:
          message.recovery = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RecoveredSinceDowntimeOfLengthRequest {
    const obj = createBaseRecoveredSinceDowntimeOfLengthRequest();
    if (isSet(object.downtime)) obj.downtime = downtimeFromJSON(object.downtime);
    if (isSet(object.recovery)) obj.recovery = Duration.fromJSON(object.recovery);
    return obj;
  },
  toJSON(message: RecoveredSinceDowntimeOfLengthRequest): unknown {
    const obj: any = {};
    message.downtime !== undefined && (obj.downtime = downtimeToJSON(message.downtime));
    message.recovery !== undefined &&
      (obj.recovery = message.recovery ? Duration.toJSON(message.recovery) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RecoveredSinceDowntimeOfLengthRequest>, I>>(
    object: I,
  ): RecoveredSinceDowntimeOfLengthRequest {
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    message.downtime = object.downtime ?? 0;
    if (object.recovery !== undefined && object.recovery !== null) {
      message.recovery = Duration.fromPartial(object.recovery);
    }
    return message;
  },
};
function createBaseRecoveredSinceDowntimeOfLengthResponse(): RecoveredSinceDowntimeOfLengthResponse {
  return {
    succesfullyRecovered: false,
  };
}
export const RecoveredSinceDowntimeOfLengthResponse = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
  encode(
    message: RecoveredSinceDowntimeOfLengthResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.succesfullyRecovered === true) {
      writer.uint32(8).bool(message.succesfullyRecovered);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.succesfullyRecovered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RecoveredSinceDowntimeOfLengthResponse {
    const obj = createBaseRecoveredSinceDowntimeOfLengthResponse();
    if (isSet(object.succesfullyRecovered)) obj.succesfullyRecovered = Boolean(object.succesfullyRecovered);
    return obj;
  },
  toJSON(message: RecoveredSinceDowntimeOfLengthResponse): unknown {
    const obj: any = {};
    message.succesfullyRecovered !== undefined && (obj.succesfullyRecovered = message.succesfullyRecovered);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RecoveredSinceDowntimeOfLengthResponse>, I>>(
    object: I,
  ): RecoveredSinceDowntimeOfLengthResponse {
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    message.succesfullyRecovered = object.succesfullyRecovered ?? false;
    return message;
  },
};
export interface Query {
  RecoveredSinceDowntimeOfLength(
    request: RecoveredSinceDowntimeOfLengthRequest,
  ): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RecoveredSinceDowntimeOfLength = this.RecoveredSinceDowntimeOfLength.bind(this);
  }
  RecoveredSinceDowntimeOfLength(
    request: RecoveredSinceDowntimeOfLengthRequest,
  ): Promise<RecoveredSinceDowntimeOfLengthResponse> {
    const data = RecoveredSinceDowntimeOfLengthRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.downtimedetector.v1beta1.Query",
      "RecoveredSinceDowntimeOfLength",
      data,
    );
    return promise.then((data) => RecoveredSinceDowntimeOfLengthResponse.decode(new BinaryReader(data)));
  }
}
