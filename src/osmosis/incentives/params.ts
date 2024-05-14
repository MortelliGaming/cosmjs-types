/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.incentives";
/** Params holds parameters for the incentives module */
export interface Params {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distrEpochIdentifier: string;
  /**
   * group_creation_fee is the fee required to create a new group
   * It is only charged to all addresses other than incentive module account
   * or addresses in the unrestricted_creator_whitelist
   */
  groupCreationFee: Coin[];
  /**
   * unrestricted_creator_whitelist is a list of addresses that are
   * allowed to bypass restrictions on permissionless Group
   * creation. In the future, we might expand these to creating gauges
   * as well.
   * The goal of this is to allow a subdao to manage incentives efficiently
   * without being stopped by 5 day governance process or a high fee.
   * At the same time, it prevents spam by having a fee for all
   * other users.
   */
  unrestrictedCreatorWhitelist: string[];
  /**
   * internal_uptime is the uptime used for internal incentives on pools that
   * use NoLock gauges (currently only Concentrated Liquidity pools).
   *
   * Since Group gauges route through internal gauges, this parameter affects
   * the uptime of those incentives as well (i.e. distributions through volume
   * splitting incentives will use this uptime).
   */
  internalUptime: Duration;
  /**
   * min_value_for_distribution is the minimum amount a token must be worth
   * in order to be eligible for distribution. If the token is worth
   * less than this amount (or the route between the two denoms is not
   * registered), it will not be distributed and is forfeited to the remaining
   * distributees that are eligible.
   */
  minValueForDistribution: Coin;
}
function createBaseParams(): Params {
  return {
    distrEpochIdentifier: "",
    groupCreationFee: [],
    unrestrictedCreatorWhitelist: [],
    internalUptime: Duration.fromPartial({}),
    minValueForDistribution: Coin.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/osmosis.incentives.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(10).string(message.distrEpochIdentifier);
    }
    for (const v of message.groupCreationFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unrestrictedCreatorWhitelist) {
      writer.uint32(26).string(v!);
    }
    if (message.internalUptime !== undefined) {
      Duration.encode(message.internalUptime, writer.uint32(34).fork()).ldelim();
    }
    if (message.minValueForDistribution !== undefined) {
      Coin.encode(message.minValueForDistribution, writer.uint32(42).fork()).ldelim();
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
          message.distrEpochIdentifier = reader.string();
          break;
        case 2:
          message.groupCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unrestrictedCreatorWhitelist.push(reader.string());
          break;
        case 4:
          message.internalUptime = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.minValueForDistribution = Coin.decode(reader, reader.uint32());
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
    if (isSet(object.distrEpochIdentifier)) obj.distrEpochIdentifier = String(object.distrEpochIdentifier);
    if (Array.isArray(object?.groupCreationFee))
      obj.groupCreationFee = object.groupCreationFee.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.unrestrictedCreatorWhitelist))
      obj.unrestrictedCreatorWhitelist = object.unrestrictedCreatorWhitelist.map((e: any) => String(e));
    if (isSet(object.internalUptime)) obj.internalUptime = Duration.fromJSON(object.internalUptime);
    if (isSet(object.minValueForDistribution))
      obj.minValueForDistribution = Coin.fromJSON(object.minValueForDistribution);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.distrEpochIdentifier !== undefined && (obj.distrEpochIdentifier = message.distrEpochIdentifier);
    if (message.groupCreationFee) {
      obj.groupCreationFee = message.groupCreationFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.groupCreationFee = [];
    }
    if (message.unrestrictedCreatorWhitelist) {
      obj.unrestrictedCreatorWhitelist = message.unrestrictedCreatorWhitelist.map((e) => e);
    } else {
      obj.unrestrictedCreatorWhitelist = [];
    }
    message.internalUptime !== undefined &&
      (obj.internalUptime = message.internalUptime ? Duration.toJSON(message.internalUptime) : undefined);
    message.minValueForDistribution !== undefined &&
      (obj.minValueForDistribution = message.minValueForDistribution
        ? Coin.toJSON(message.minValueForDistribution)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
    message.groupCreationFee = object.groupCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    message.unrestrictedCreatorWhitelist = object.unrestrictedCreatorWhitelist?.map((e) => e) || [];
    if (object.internalUptime !== undefined && object.internalUptime !== null) {
      message.internalUptime = Duration.fromPartial(object.internalUptime);
    }
    if (object.minValueForDistribution !== undefined && object.minValueForDistribution !== null) {
      message.minValueForDistribution = Coin.fromPartial(object.minValueForDistribution);
    }
    return message;
  },
};
