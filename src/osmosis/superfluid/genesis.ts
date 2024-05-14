/* eslint-disable */
import { Params } from "./params";
import {
  SuperfluidAsset,
  OsmoEquivalentMultiplierRecord,
  SuperfluidIntermediaryAccount,
  LockIdIntermediaryAccountConnection,
} from "./superfluid";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params: Params;
  /**
   * superfluid_assets defines the registered superfluid assets that have been
   * registered via governance.
   */
  superfluidAssets: SuperfluidAsset[];
  /**
   * osmo_equivalent_multipliers is the records of osmo equivalent amount of
   * each superfluid registered pool, updated every epoch.
   */
  osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
  /**
   * intermediary_accounts is a secondary account for superfluid staking that
   * plays an intermediary role between validators and the delegators.
   */
  intermediaryAccounts: SuperfluidIntermediaryAccount[];
  intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    superfluidAssets: [],
    osmoEquivalentMultipliers: [],
    intermediaryAccounts: [],
    intemediaryAccountConnections: [],
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.superfluid.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.superfluidAssets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.osmoEquivalentMultipliers) {
      OsmoEquivalentMultiplierRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.intermediaryAccounts) {
      SuperfluidIntermediaryAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.intemediaryAccountConnections) {
      LockIdIntermediaryAccountConnection.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.superfluidAssets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.osmoEquivalentMultipliers.push(
            OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.intermediaryAccounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
          break;
        case 5:
          message.intemediaryAccountConnections.push(
            LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()),
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
    if (Array.isArray(object?.superfluidAssets))
      obj.superfluidAssets = object.superfluidAssets.map((e: any) => SuperfluidAsset.fromJSON(e));
    if (Array.isArray(object?.osmoEquivalentMultipliers))
      obj.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers.map((e: any) =>
        OsmoEquivalentMultiplierRecord.fromJSON(e),
      );
    if (Array.isArray(object?.intermediaryAccounts))
      obj.intermediaryAccounts = object.intermediaryAccounts.map((e: any) =>
        SuperfluidIntermediaryAccount.fromJSON(e),
      );
    if (Array.isArray(object?.intemediaryAccountConnections))
      obj.intemediaryAccountConnections = object.intemediaryAccountConnections.map((e: any) =>
        LockIdIntermediaryAccountConnection.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.superfluidAssets) {
      obj.superfluidAssets = message.superfluidAssets.map((e) => (e ? SuperfluidAsset.toJSON(e) : undefined));
    } else {
      obj.superfluidAssets = [];
    }
    if (message.osmoEquivalentMultipliers) {
      obj.osmoEquivalentMultipliers = message.osmoEquivalentMultipliers.map((e) =>
        e ? OsmoEquivalentMultiplierRecord.toJSON(e) : undefined,
      );
    } else {
      obj.osmoEquivalentMultipliers = [];
    }
    if (message.intermediaryAccounts) {
      obj.intermediaryAccounts = message.intermediaryAccounts.map((e) =>
        e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined,
      );
    } else {
      obj.intermediaryAccounts = [];
    }
    if (message.intemediaryAccountConnections) {
      obj.intemediaryAccountConnections = message.intemediaryAccountConnections.map((e) =>
        e ? LockIdIntermediaryAccountConnection.toJSON(e) : undefined,
      );
    } else {
      obj.intemediaryAccountConnections = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.superfluidAssets = object.superfluidAssets?.map((e) => SuperfluidAsset.fromPartial(e)) || [];
    message.osmoEquivalentMultipliers =
      object.osmoEquivalentMultipliers?.map((e) => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
    message.intermediaryAccounts =
      object.intermediaryAccounts?.map((e) => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
    message.intemediaryAccountConnections =
      object.intemediaryAccountConnections?.map((e) => LockIdIntermediaryAccountConnection.fromPartial(e)) ||
      [];
    return message;
  },
};
