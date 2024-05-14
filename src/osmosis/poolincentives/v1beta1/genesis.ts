/* eslint-disable */
import { Params, DistrInfo, AnyPoolToInternalGauges, ConcentratedPoolToNoLockGauges } from "./incentives";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  lockableDurations: Duration[];
  distrInfo?: DistrInfo;
  /**
   * any_pool_to_internal_gauges defines the gauges for any pool to internal
   * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
   * link
   */
  anyPoolToInternalGauges?: AnyPoolToInternalGauges;
  /**
   * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
   * concentrated pool. This only exists between concentrated pool and no lock
   * gauges. Both external and internal gauges are included.
   */
  concentratedPoolToNoLockGauges?: ConcentratedPoolToNoLockGauges;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lockableDurations: [],
    distrInfo: undefined,
    anyPoolToInternalGauges: undefined,
    concentratedPoolToNoLockGauges: undefined,
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.anyPoolToInternalGauges !== undefined) {
      AnyPoolToInternalGauges.encode(message.anyPoolToInternalGauges, writer.uint32(34).fork()).ldelim();
    }
    if (message.concentratedPoolToNoLockGauges !== undefined) {
      ConcentratedPoolToNoLockGauges.encode(
        message.concentratedPoolToNoLockGauges,
        writer.uint32(42).fork(),
      ).ldelim();
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
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 3:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.anyPoolToInternalGauges = AnyPoolToInternalGauges.decode(reader, reader.uint32());
          break;
        case 5:
          message.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.decode(
            reader,
            reader.uint32(),
          );
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
    if (Array.isArray(object?.lockableDurations))
      obj.lockableDurations = object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    if (isSet(object.distrInfo)) obj.distrInfo = DistrInfo.fromJSON(object.distrInfo);
    if (isSet(object.anyPoolToInternalGauges))
      obj.anyPoolToInternalGauges = AnyPoolToInternalGauges.fromJSON(object.anyPoolToInternalGauges);
    if (isSet(object.concentratedPoolToNoLockGauges))
      obj.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.fromJSON(
        object.concentratedPoolToNoLockGauges,
      );
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map((e) => (e ? Duration.toJSON(e) : undefined));
    } else {
      obj.lockableDurations = [];
    }
    message.distrInfo !== undefined &&
      (obj.distrInfo = message.distrInfo ? DistrInfo.toJSON(message.distrInfo) : undefined);
    message.anyPoolToInternalGauges !== undefined &&
      (obj.anyPoolToInternalGauges = message.anyPoolToInternalGauges
        ? AnyPoolToInternalGauges.toJSON(message.anyPoolToInternalGauges)
        : undefined);
    message.concentratedPoolToNoLockGauges !== undefined &&
      (obj.concentratedPoolToNoLockGauges = message.concentratedPoolToNoLockGauges
        ? ConcentratedPoolToNoLockGauges.toJSON(message.concentratedPoolToNoLockGauges)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.lockableDurations = object.lockableDurations?.map((e) => Duration.fromPartial(e)) || [];
    if (object.distrInfo !== undefined && object.distrInfo !== null) {
      message.distrInfo = DistrInfo.fromPartial(object.distrInfo);
    }
    if (object.anyPoolToInternalGauges !== undefined && object.anyPoolToInternalGauges !== null) {
      message.anyPoolToInternalGauges = AnyPoolToInternalGauges.fromPartial(object.anyPoolToInternalGauges);
    }
    if (
      object.concentratedPoolToNoLockGauges !== undefined &&
      object.concentratedPoolToNoLockGauges !== null
    ) {
      message.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.fromPartial(
        object.concentratedPoolToNoLockGauges,
      );
    }
    return message;
  },
};
