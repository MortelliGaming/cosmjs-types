/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token, lp share of a pool, or concentrated share of a pool
 */
export enum SuperfluidAssetType {
  SuperfluidAssetTypeNative = 0,
  SuperfluidAssetTypeLPShare = 1,
  SuperfluidAssetTypeConcentratedShare = 2,
  UNRECOGNIZED = -1,
}
export function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;
    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
    case 2:
    case "SuperfluidAssetTypeConcentratedShare":
      return SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}
export function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";
    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";
    case SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare:
      return "SuperfluidAssetTypeConcentratedShare";
    case SuperfluidAssetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
  denom: string;
  /**
   * AssetType indicates whether the superfluid asset is a native token or an lp
   * share
   */
  assetType: SuperfluidAssetType;
  /**
   * For non-osmo native assets, we need a pool_id osmo/asset to determine the
   * twap of the asset
   */
  pricePoolId: bigint;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccount {
  /** Denom indicates the denom of the superfluid asset. */
  denom: string;
  valAddr: string;
  /** perpetual gauge for rewards distribution */
  gaugeId: bigint;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking what's in use for epoch N as based on the
 * prior epochs rewards) However for now, this is not the TWAP but instead the
 * spot price at the boundary. For different types of assets in the future, it
 * could change.
 */
export interface OsmoEquivalentMultiplierRecord {
  epochNumber: bigint;
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  multiplier: string;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecord {
  delegatorAddress: string;
  validatorAddress: string;
  delegationAmount: Coin;
  equivalentStakedAmount?: Coin;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnection {
  lockId: bigint;
  intermediaryAccount: string;
}
export interface UnpoolWhitelistedPools {
  ids: bigint[];
}
export interface ConcentratedPoolUserPositionRecord {
  validatorAddress: string;
  positionId: bigint;
  lockId: bigint;
  syntheticLock: SyntheticLock;
  delegationAmount: Coin;
  equivalentStakedAmount?: Coin;
}
/** The DenomRiskFactor stores the risk factor of a superfluid asset */
export interface DenomRiskFactor {
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  /**
   * risk_factor is to be cut on OSMO equivalent value of the denom tokens
   * for superfluid staking. It defaults to params.minimum_risk_factor
   */
  riskFactor: string;
}
function createBaseSuperfluidAsset(): SuperfluidAsset {
  return {
    denom: "",
    assetType: 0,
    pricePoolId: BigInt(0),
  };
}
export const SuperfluidAsset = {
  typeUrl: "/osmosis.superfluid.SuperfluidAsset",
  encode(message: SuperfluidAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.assetType !== 0) {
      writer.uint32(16).int32(message.assetType);
    }
    if (message.pricePoolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.pricePoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.assetType = reader.int32() as any;
          break;
        case 3:
          message.pricePoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidAsset {
    const obj = createBaseSuperfluidAsset();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.assetType)) obj.assetType = superfluidAssetTypeFromJSON(object.assetType);
    if (isSet(object.pricePoolId)) obj.pricePoolId = BigInt(object.pricePoolId.toString());
    return obj;
  },
  toJSON(message: SuperfluidAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    message.pricePoolId !== undefined && (obj.pricePoolId = (message.pricePoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidAsset>, I>>(object: I): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    message.denom = object.denom ?? "";
    message.assetType = object.assetType ?? 0;
    if (object.pricePoolId !== undefined && object.pricePoolId !== null) {
      message.pricePoolId = BigInt(object.pricePoolId.toString());
    }
    return message;
  },
};
function createBaseSuperfluidIntermediaryAccount(): SuperfluidIntermediaryAccount {
  return {
    denom: "",
    valAddr: "",
    gaugeId: BigInt(0),
  };
}
export const SuperfluidIntermediaryAccount = {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
  encode(message: SuperfluidIntermediaryAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.gaugeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidIntermediaryAccount {
    const obj = createBaseSuperfluidIntermediaryAccount();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    return obj;
  },
  toJSON(message: SuperfluidIntermediaryAccount): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidIntermediaryAccount>, I>>(
    object: I,
  ): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    return message;
  },
};
function createBaseOsmoEquivalentMultiplierRecord(): OsmoEquivalentMultiplierRecord {
  return {
    epochNumber: BigInt(0),
    denom: "",
    multiplier: "",
  };
}
export const OsmoEquivalentMultiplierRecord = {
  typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
  encode(
    message: OsmoEquivalentMultiplierRecord,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.multiplier !== "") {
      writer.uint32(26).string(message.multiplier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmoEquivalentMultiplierRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.multiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OsmoEquivalentMultiplierRecord {
    const obj = createBaseOsmoEquivalentMultiplierRecord();
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.multiplier)) obj.multiplier = String(object.multiplier);
    return obj;
  },
  toJSON(message: OsmoEquivalentMultiplierRecord): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OsmoEquivalentMultiplierRecord>, I>>(
    object: I,
  ): OsmoEquivalentMultiplierRecord {
    const message = createBaseOsmoEquivalentMultiplierRecord();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    message.denom = object.denom ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  },
};
function createBaseSuperfluidDelegationRecord(): SuperfluidDelegationRecord {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    delegationAmount: Coin.fromPartial({}),
    equivalentStakedAmount: undefined,
  };
}
export const SuperfluidDelegationRecord = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
  encode(message: SuperfluidDelegationRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.delegationAmount !== undefined) {
      Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.equivalentStakedAmount !== undefined) {
      Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationRecord();
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
          message.delegationAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.equivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationRecord {
    const obj = createBaseSuperfluidDelegationRecord();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.delegationAmount)) obj.delegationAmount = Coin.fromJSON(object.delegationAmount);
    if (isSet(object.equivalentStakedAmount))
      obj.equivalentStakedAmount = Coin.fromJSON(object.equivalentStakedAmount);
    return obj;
  },
  toJSON(message: SuperfluidDelegationRecord): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.delegationAmount !== undefined &&
      (obj.delegationAmount = message.delegationAmount ? Coin.toJSON(message.delegationAmount) : undefined);
    message.equivalentStakedAmount !== undefined &&
      (obj.equivalentStakedAmount = message.equivalentStakedAmount
        ? Coin.toJSON(message.equivalentStakedAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationRecord>, I>>(
    object: I,
  ): SuperfluidDelegationRecord {
    const message = createBaseSuperfluidDelegationRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.delegationAmount !== undefined && object.delegationAmount !== null) {
      message.delegationAmount = Coin.fromPartial(object.delegationAmount);
    }
    if (object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null) {
      message.equivalentStakedAmount = Coin.fromPartial(object.equivalentStakedAmount);
    }
    return message;
  },
};
function createBaseLockIdIntermediaryAccountConnection(): LockIdIntermediaryAccountConnection {
  return {
    lockId: BigInt(0),
    intermediaryAccount: "",
  };
}
export const LockIdIntermediaryAccountConnection = {
  typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
  encode(
    message: LockIdIntermediaryAccountConnection,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.lockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lockId);
    }
    if (message.intermediaryAccount !== "") {
      writer.uint32(18).string(message.intermediaryAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockIdIntermediaryAccountConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        case 2:
          message.intermediaryAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockIdIntermediaryAccountConnection {
    const obj = createBaseLockIdIntermediaryAccountConnection();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.intermediaryAccount)) obj.intermediaryAccount = String(object.intermediaryAccount);
    return obj;
  },
  toJSON(message: LockIdIntermediaryAccountConnection): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.intermediaryAccount !== undefined && (obj.intermediaryAccount = message.intermediaryAccount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LockIdIntermediaryAccountConnection>, I>>(
    object: I,
  ): LockIdIntermediaryAccountConnection {
    const message = createBaseLockIdIntermediaryAccountConnection();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    message.intermediaryAccount = object.intermediaryAccount ?? "";
    return message;
  },
};
function createBaseUnpoolWhitelistedPools(): UnpoolWhitelistedPools {
  return {
    ids: [],
  };
}
export const UnpoolWhitelistedPools = {
  typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
  encode(message: UnpoolWhitelistedPools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnpoolWhitelistedPools {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpoolWhitelistedPools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnpoolWhitelistedPools {
    const obj = createBaseUnpoolWhitelistedPools();
    if (Array.isArray(object?.ids)) obj.ids = object.ids.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: UnpoolWhitelistedPools): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnpoolWhitelistedPools>, I>>(object: I): UnpoolWhitelistedPools {
    const message = createBaseUnpoolWhitelistedPools();
    message.ids = object.ids?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseConcentratedPoolUserPositionRecord(): ConcentratedPoolUserPositionRecord {
  return {
    validatorAddress: "",
    positionId: BigInt(0),
    lockId: BigInt(0),
    syntheticLock: SyntheticLock.fromPartial({}),
    delegationAmount: Coin.fromPartial({}),
    equivalentStakedAmount: undefined,
  };
}
export const ConcentratedPoolUserPositionRecord = {
  typeUrl: "/osmosis.superfluid.ConcentratedPoolUserPositionRecord",
  encode(
    message: ConcentratedPoolUserPositionRecord,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.positionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.positionId);
    }
    if (message.lockId !== BigInt(0)) {
      writer.uint32(24).uint64(message.lockId);
    }
    if (message.syntheticLock !== undefined) {
      SyntheticLock.encode(message.syntheticLock, writer.uint32(34).fork()).ldelim();
    }
    if (message.delegationAmount !== undefined) {
      Coin.encode(message.delegationAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.equivalentStakedAmount !== undefined) {
      Coin.encode(message.equivalentStakedAmount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConcentratedPoolUserPositionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConcentratedPoolUserPositionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.positionId = reader.uint64();
          break;
        case 3:
          message.lockId = reader.uint64();
          break;
        case 4:
          message.syntheticLock = SyntheticLock.decode(reader, reader.uint32());
          break;
        case 5:
          message.delegationAmount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.equivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConcentratedPoolUserPositionRecord {
    const obj = createBaseConcentratedPoolUserPositionRecord();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    if (isSet(object.syntheticLock)) obj.syntheticLock = SyntheticLock.fromJSON(object.syntheticLock);
    if (isSet(object.delegationAmount)) obj.delegationAmount = Coin.fromJSON(object.delegationAmount);
    if (isSet(object.equivalentStakedAmount))
      obj.equivalentStakedAmount = Coin.fromJSON(object.equivalentStakedAmount);
    return obj;
  },
  toJSON(message: ConcentratedPoolUserPositionRecord): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    message.syntheticLock !== undefined &&
      (obj.syntheticLock = message.syntheticLock ? SyntheticLock.toJSON(message.syntheticLock) : undefined);
    message.delegationAmount !== undefined &&
      (obj.delegationAmount = message.delegationAmount ? Coin.toJSON(message.delegationAmount) : undefined);
    message.equivalentStakedAmount !== undefined &&
      (obj.equivalentStakedAmount = message.equivalentStakedAmount
        ? Coin.toJSON(message.equivalentStakedAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConcentratedPoolUserPositionRecord>, I>>(
    object: I,
  ): ConcentratedPoolUserPositionRecord {
    const message = createBaseConcentratedPoolUserPositionRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    if (object.syntheticLock !== undefined && object.syntheticLock !== null) {
      message.syntheticLock = SyntheticLock.fromPartial(object.syntheticLock);
    }
    if (object.delegationAmount !== undefined && object.delegationAmount !== null) {
      message.delegationAmount = Coin.fromPartial(object.delegationAmount);
    }
    if (object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null) {
      message.equivalentStakedAmount = Coin.fromPartial(object.equivalentStakedAmount);
    }
    return message;
  },
};
function createBaseDenomRiskFactor(): DenomRiskFactor {
  return {
    denom: "",
    riskFactor: "",
  };
}
export const DenomRiskFactor = {
  typeUrl: "/osmosis.superfluid.DenomRiskFactor",
  encode(message: DenomRiskFactor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.riskFactor !== "") {
      writer.uint32(18).string(message.riskFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomRiskFactor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomRiskFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.riskFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomRiskFactor {
    const obj = createBaseDenomRiskFactor();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.riskFactor)) obj.riskFactor = String(object.riskFactor);
    return obj;
  },
  toJSON(message: DenomRiskFactor): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.riskFactor !== undefined && (obj.riskFactor = message.riskFactor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DenomRiskFactor>, I>>(object: I): DenomRiskFactor {
    const message = createBaseDenomRiskFactor();
    message.denom = object.denom ?? "";
    message.riskFactor = object.riskFactor ?? "";
    return message;
  },
};
