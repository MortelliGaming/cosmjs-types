/* eslint-disable */
import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}
export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header: Header;
  valset: Validator[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  rate: string;
  maxRate: string;
  maxChangeRate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
  commissionRates: CommissionRates;
  updateTime: Timestamp;
}
/** Description defines a validator description. */
export interface Description {
  moniker: string;
  identity: string;
  website: string;
  securityContact: string;
  details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  operatorAddress: string;
  consensusPubkey?: Any;
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegatorShares: string;
  description: Description;
  unbondingHeight: bigint;
  unbondingTime: Timestamp;
  commission: Commission;
  minSelfDelegation: string;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  delegatorAddress: string;
  validatorAddress: string;
  shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  /** unbonding delegation entries */
  entries: UnbondingDelegationEntry[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  creationHeight: bigint;
  completionTime: Timestamp;
  initialBalance: string;
  balance: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  creationHeight: bigint;
  completionTime: Timestamp;
  initialBalance: string;
  sharesDst: string;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  /** redelegation entries */
  entries: RedelegationEntry[];
}
/** Params defines the parameters for the staking module. */
export interface Params {
  unbondingTime: Duration;
  maxValidators: number;
  maxEntries: number;
  historicalEntries: number;
  bondDenom: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegationEntry: RedelegationEntry;
  balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation: Redelegation;
  entries: RedelegationEntryResponse[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}
function createBaseHistoricalInfo(): HistoricalInfo {
  return {
    header: Header.fromPartial({}),
    valset: [],
  };
}
export const HistoricalInfo = {
  typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
  encode(message: HistoricalInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalInfo {
    const obj = createBaseHistoricalInfo();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (Array.isArray(object?.valset)) obj.valset = object.valset.map((e: any) => Validator.fromJSON(e));
    return obj;
  },
  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.valset = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HistoricalInfo>, I>>(object: I): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCommissionRates(): CommissionRates {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: "",
  };
}
export const CommissionRates = {
  typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
  encode(message: CommissionRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        case 2:
          message.maxRate = reader.string();
          break;
        case 3:
          message.maxChangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommissionRates {
    const obj = createBaseCommissionRates();
    if (isSet(object.rate)) obj.rate = String(object.rate);
    if (isSet(object.maxRate)) obj.maxRate = String(object.maxRate);
    if (isSet(object.maxChangeRate)) obj.maxChangeRate = String(object.maxChangeRate);
    return obj;
  },
  toJSON(message: CommissionRates): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CommissionRates>, I>>(object: I): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.maxRate = object.maxRate ?? "";
    message.maxChangeRate = object.maxChangeRate ?? "";
    return message;
  },
};
function createBaseCommission(): Commission {
  return {
    commissionRates: CommissionRates.fromPartial({}),
    updateTime: Timestamp.fromPartial({}),
  };
}
export const Commission = {
  typeUrl: "/cosmos.staking.v1beta1.Commission",
  encode(message: Commission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(message.updateTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commission {
    const obj = createBaseCommission();
    if (isSet(object.commissionRates)) obj.commissionRates = CommissionRates.fromJSON(object.commissionRates);
    if (isSet(object.updateTime)) obj.updateTime = fromJsonTimestamp(object.updateTime);
    return obj;
  },
  toJSON(message: Commission): unknown {
    const obj: any = {};
    message.commissionRates !== undefined &&
      (obj.commissionRates = message.commissionRates
        ? CommissionRates.toJSON(message.commissionRates)
        : undefined);
    message.updateTime !== undefined && (obj.updateTime = fromTimestamp(message.updateTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Commission>, I>>(object: I): Commission {
    const message = createBaseCommission();
    if (object.commissionRates !== undefined && object.commissionRates !== null) {
      message.commissionRates = CommissionRates.fromPartial(object.commissionRates);
    }
    if (object.updateTime !== undefined && object.updateTime !== null) {
      message.updateTime = Timestamp.fromPartial(object.updateTime);
    }
    return message;
  },
};
function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: "",
  };
}
export const Description = {
  typeUrl: "/cosmos.staking.v1beta1.Description",
  encode(message: Description, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Description {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Description {
    const obj = createBaseDescription();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.identity)) obj.identity = String(object.identity);
    if (isSet(object.website)) obj.website = String(object.website);
    if (isSet(object.securityContact)) obj.securityContact = String(object.securityContact);
    if (isSet(object.details)) obj.details = String(object.details);
    return obj;
  },
  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Description>, I>>(object: I): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
};
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    consensusPubkey: undefined,
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: Description.fromPartial({}),
    unbondingHeight: BigInt(0),
    unbondingTime: Timestamp.fromPartial({}),
    commission: Commission.fromPartial({}),
    minSelfDelegation: "",
  };
}
export const Validator = {
  typeUrl: "/cosmos.staking.v1beta1.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(message.unbondingTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = reader.string();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64();
          break;
        case 9:
          message.unbondingTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.operatorAddress)) obj.operatorAddress = String(object.operatorAddress);
    if (isSet(object.consensusPubkey)) obj.consensusPubkey = Any.fromJSON(object.consensusPubkey);
    if (isSet(object.jailed)) obj.jailed = Boolean(object.jailed);
    if (isSet(object.status)) obj.status = bondStatusFromJSON(object.status);
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    if (isSet(object.delegatorShares)) obj.delegatorShares = String(object.delegatorShares);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.unbondingHeight)) obj.unbondingHeight = BigInt(object.unbondingHeight.toString());
    if (isSet(object.unbondingTime)) obj.unbondingTime = fromJsonTimestamp(object.unbondingTime);
    if (isSet(object.commission)) obj.commission = Commission.fromJSON(object.commission);
    if (isSet(object.minSelfDelegation)) obj.minSelfDelegation = String(object.minSelfDelegation);
    return obj;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined &&
      (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.unbondingHeight !== undefined &&
      (obj.unbondingHeight = (message.unbondingHeight || BigInt(0)).toString());
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = fromTimestamp(message.unbondingTime).toISOString());
    message.commission !== undefined &&
      (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    if (object.consensusPubkey !== undefined && object.consensusPubkey !== null) {
      message.consensusPubkey = Any.fromPartial(object.consensusPubkey);
    }
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    if (object.unbondingHeight !== undefined && object.unbondingHeight !== null) {
      message.unbondingHeight = BigInt(object.unbondingHeight.toString());
    }
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Timestamp.fromPartial(object.unbondingTime);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Commission.fromPartial(object.commission);
    }
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
};
function createBaseValAddresses(): ValAddresses {
  return {
    addresses: [],
  };
}
export const ValAddresses = {
  typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
  encode(message: ValAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValAddresses {
    const obj = createBaseValAddresses();
    if (Array.isArray(object?.addresses)) obj.addresses = object.addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ValAddresses): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValAddresses>, I>>(object: I): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseDVPair(): DVPair {
  return {
    delegatorAddress: "",
    validatorAddress: "",
  };
}
export const DVPair = {
  typeUrl: "/cosmos.staking.v1beta1.DVPair",
  encode(message: DVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPair {
    const obj = createBaseDVPair();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: DVPair): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DVPair>, I>>(object: I): DVPair {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseDVPairs(): DVPairs {
  return {
    pairs: [],
  };
}
export const DVPairs = {
  typeUrl: "/cosmos.staking.v1beta1.DVPairs",
  encode(message: DVPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPairs {
    const obj = createBaseDVPairs();
    if (Array.isArray(object?.pairs)) obj.pairs = object.pairs.map((e: any) => DVPair.fromJSON(e));
    return obj;
  },
  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? DVPair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DVPairs>, I>>(object: I): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map((e) => DVPair.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDVVTriplet(): DVVTriplet {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
  };
}
export const DVVTriplet = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
  encode(message: DVVTriplet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplet {
    const obj = createBaseDVVTriplet();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorSrcAddress)) obj.validatorSrcAddress = String(object.validatorSrcAddress);
    if (isSet(object.validatorDstAddress)) obj.validatorDstAddress = String(object.validatorDstAddress);
    return obj;
  },
  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DVVTriplet>, I>>(object: I): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  },
};
function createBaseDVVTriplets(): DVVTriplets {
  return {
    triplets: [],
  };
}
export const DVVTriplets = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
  encode(message: DVVTriplets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplets {
    const obj = createBaseDVVTriplets();
    if (Array.isArray(object?.triplets))
      obj.triplets = object.triplets.map((e: any) => DVVTriplet.fromJSON(e));
    return obj;
  },
  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map((e) => (e ? DVVTriplet.toJSON(e) : undefined));
    } else {
      obj.triplets = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DVVTriplets>, I>>(object: I): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map((e) => DVVTriplet.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: "",
  };
}
export const Delegation = {
  typeUrl: "/cosmos.staking.v1beta1.Delegation",
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegation {
    const obj = createBaseDelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.shares)) obj.shares = String(object.shares);
    return obj;
  },
  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Delegation>, I>>(object: I): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: [],
  };
}
export const UnbondingDelegation = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
  encode(message: UnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegation {
    const obj = createBaseUnbondingDelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? UnbondingDelegationEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnbondingDelegation>, I>>(object: I): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map((e) => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: Timestamp.fromPartial({}),
    initialBalance: "",
    balance: "",
  };
}
export const UnbondingDelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
  encode(message: UnbondingDelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegationEntry {
    const obj = createBaseUnbondingDelegationEntry();
    if (isSet(object.creationHeight)) obj.creationHeight = BigInt(object.creationHeight.toString());
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    if (isSet(object.initialBalance)) obj.initialBalance = String(object.initialBalance);
    if (isSet(object.balance)) obj.balance = String(object.balance);
    return obj;
  },
  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnbondingDelegationEntry>, I>>(
    object: I,
  ): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight.toString());
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: Timestamp.fromPartial({}),
    initialBalance: "",
    sharesDst: "",
  };
}
export const RedelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
  encode(message: RedelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntry {
    const obj = createBaseRedelegationEntry();
    if (isSet(object.creationHeight)) obj.creationHeight = BigInt(object.creationHeight.toString());
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    if (isSet(object.initialBalance)) obj.initialBalance = String(object.initialBalance);
    if (isSet(object.sharesDst)) obj.sharesDst = String(object.sharesDst);
    return obj;
  },
  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RedelegationEntry>, I>>(object: I): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight.toString());
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    return message;
  },
};
function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: [],
  };
}
export const Redelegation = {
  typeUrl: "/cosmos.staking.v1beta1.Redelegation",
  encode(message: Redelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Redelegation {
    const obj = createBaseRedelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorSrcAddress)) obj.validatorSrcAddress = String(object.validatorSrcAddress);
    if (isSet(object.validatorDstAddress)) obj.validatorDstAddress = String(object.validatorDstAddress);
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => RedelegationEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? RedelegationEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Redelegation>, I>>(object: I): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseParams(): Params {
  return {
    unbondingTime: Duration.fromPartial({}),
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
  };
}
export const Params = {
  typeUrl: "/cosmos.staking.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
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
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
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
    if (isSet(object.unbondingTime)) obj.unbondingTime = Duration.fromJSON(object.unbondingTime);
    if (isSet(object.maxValidators)) obj.maxValidators = Number(object.maxValidators);
    if (isSet(object.maxEntries)) obj.maxEntries = Number(object.maxEntries);
    if (isSet(object.historicalEntries)) obj.historicalEntries = Number(object.historicalEntries);
    if (isSet(object.bondDenom)) obj.bondDenom = String(object.bondDenom);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = message.unbondingTime ? Duration.toJSON(message.unbondingTime) : undefined);
    message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
    message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = Math.round(message.historicalEntries));
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Duration.fromPartial(object.unbondingTime);
    }
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    return message;
  },
};
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({}),
  };
}
export const DelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationResponse {
    const obj = createBaseDelegationResponse();
    if (isSet(object.delegation)) obj.delegation = Delegation.fromJSON(object.delegation);
    if (isSet(object.balance)) obj.balance = Coin.fromJSON(object.balance);
    return obj;
  },
  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegationResponse>, I>>(object: I): DelegationResponse {
    const message = createBaseDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromPartial(object.delegation);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    }
    return message;
  },
};
function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return {
    redelegationEntry: RedelegationEntry.fromPartial({}),
    balance: "",
  };
}
export const RedelegationEntryResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
  encode(message: RedelegationEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntryResponse {
    const obj = createBaseRedelegationEntryResponse();
    if (isSet(object.redelegationEntry))
      obj.redelegationEntry = RedelegationEntry.fromJSON(object.redelegationEntry);
    if (isSet(object.balance)) obj.balance = String(object.balance);
    return obj;
  },
  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    message.redelegationEntry !== undefined &&
      (obj.redelegationEntry = message.redelegationEntry
        ? RedelegationEntry.toJSON(message.redelegationEntry)
        : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RedelegationEntryResponse>, I>>(
    object: I,
  ): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    if (object.redelegationEntry !== undefined && object.redelegationEntry !== null) {
      message.redelegationEntry = RedelegationEntry.fromPartial(object.redelegationEntry);
    }
    message.balance = object.balance ?? "";
    return message;
  },
};
function createBaseRedelegationResponse(): RedelegationResponse {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: [],
  };
}
export const RedelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
  encode(message: RedelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationResponse {
    const obj = createBaseRedelegationResponse();
    if (isSet(object.redelegation)) obj.redelegation = Redelegation.fromJSON(object.redelegation);
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e));
    return obj;
  },
  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    message.redelegation !== undefined &&
      (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? RedelegationEntryResponse.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RedelegationResponse>, I>>(object: I): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    if (object.redelegation !== undefined && object.redelegation !== null) {
      message.redelegation = Redelegation.fromPartial(object.redelegation);
    }
    message.entries = object.entries?.map((e) => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },
};
function createBasePool(): Pool {
  return {
    notBondedTokens: "",
    bondedTokens: "",
  };
}
export const Pool = {
  typeUrl: "/cosmos.staking.v1beta1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const obj = createBasePool();
    if (isSet(object.notBondedTokens)) obj.notBondedTokens = String(object.notBondedTokens);
    if (isSet(object.bondedTokens)) obj.bondedTokens = String(object.bondedTokens);
    return obj;
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.notBondedTokens !== undefined && (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== undefined && (obj.bondedTokens = message.bondedTokens);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
    return message;
  },
};
