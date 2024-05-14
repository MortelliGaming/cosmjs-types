/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import {
  SuperfluidAssetType,
  SuperfluidAsset,
  OsmoEquivalentMultiplierRecord,
  SuperfluidDelegationRecord,
  ConcentratedPoolUserPositionRecord,
  superfluidAssetTypeFromJSON,
  superfluidAssetTypeToJSON,
} from "./superfluid";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { DelegationResponse } from "../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface AssetTypeRequest {
  denom: string;
}
export interface AssetTypeResponse {
  assetType: SuperfluidAssetType;
}
export interface AllAssetsRequest {}
export interface AllAssetsResponse {
  assets: SuperfluidAsset[];
}
export interface AssetMultiplierRequest {
  denom: string;
}
export interface AssetMultiplierResponse {
  osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface SuperfluidIntermediaryAccountInfo {
  denom: string;
  valAddr: string;
  gaugeId: bigint;
  address: string;
}
export interface AllIntermediaryAccountsRequest {
  pagination?: PageRequest;
}
export interface AllIntermediaryAccountsResponse {
  accounts: SuperfluidIntermediaryAccountInfo[];
  pagination?: PageResponse;
}
export interface ConnectedIntermediaryAccountRequest {
  lockId: bigint;
}
export interface ConnectedIntermediaryAccountResponse {
  account?: SuperfluidIntermediaryAccountInfo;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
  assets: Delegations[];
}
export interface Delegations {
  valAddr: string;
  amountSfsd: string;
  osmoEquivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {}
export interface TotalSuperfluidDelegationsResponse {
  totalDelegations: string;
}
export interface SuperfluidDelegationAmountRequest {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationAmountResponse {
  amount: Coin[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
  delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount: Coin;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
  delegatorAddress: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalUndelegatedCoins: Coin[];
  syntheticLocks: SyntheticLock[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  totalDelegatedCoins: Coin[];
}
export interface QueryTotalDelegationByDelegatorRequest {
  delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  delegationResponse: DelegationResponse[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount: Coin;
}
export interface QueryUnpoolWhitelistRequest {}
export interface QueryUnpoolWhitelistResponse {
  poolIds: bigint[];
}
export interface UserConcentratedSuperfluidPositionsDelegatedRequest {
  delegatorAddress: string;
}
export interface UserConcentratedSuperfluidPositionsDelegatedResponse {
  clPoolUserPositionRecords: ConcentratedPoolUserPositionRecord[];
}
export interface UserConcentratedSuperfluidPositionsUndelegatingRequest {
  delegatorAddress: string;
}
export interface UserConcentratedSuperfluidPositionsUndelegatingResponse {
  clPoolUserPositionRecords: ConcentratedPoolUserPositionRecord[];
}
/** THIS QUERY IS TEMPORARY */
export interface QueryRestSupplyRequest {
  /** THIS QUERY IS TEMPORARY */
  denom: string;
}
export interface QueryRestSupplyResponse {
  /** amount is the supply of the coin. */
  amount: Coin;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.superfluid.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.superfluid.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseAssetTypeRequest(): AssetTypeRequest {
  return {
    denom: "",
  };
}
export const AssetTypeRequest = {
  typeUrl: "/osmosis.superfluid.AssetTypeRequest",
  encode(message: AssetTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetTypeRequest {
    const obj = createBaseAssetTypeRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: AssetTypeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AssetTypeRequest>, I>>(object: I): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseAssetTypeResponse(): AssetTypeResponse {
  return {
    assetType: 0,
  };
}
export const AssetTypeResponse = {
  typeUrl: "/osmosis.superfluid.AssetTypeResponse",
  encode(message: AssetTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetTypeResponse {
    const obj = createBaseAssetTypeResponse();
    if (isSet(object.assetType)) obj.assetType = superfluidAssetTypeFromJSON(object.assetType);
    return obj;
  },
  toJSON(message: AssetTypeResponse): unknown {
    const obj: any = {};
    message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AssetTypeResponse>, I>>(object: I): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    message.assetType = object.assetType ?? 0;
    return message;
  },
};
function createBaseAllAssetsRequest(): AllAssetsRequest {
  return {};
}
export const AllAssetsRequest = {
  typeUrl: "/osmosis.superfluid.AllAssetsRequest",
  encode(_: AllAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllAssetsRequest {
    const obj = createBaseAllAssetsRequest();
    return obj;
  },
  toJSON(_: AllAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllAssetsRequest>, I>>(_: I): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },
};
function createBaseAllAssetsResponse(): AllAssetsResponse {
  return {
    assets: [],
  };
}
export const AllAssetsResponse = {
  typeUrl: "/osmosis.superfluid.AllAssetsResponse",
  encode(message: AllAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllAssetsResponse {
    const obj = createBaseAllAssetsResponse();
    if (Array.isArray(object?.assets))
      obj.assets = object.assets.map((e: any) => SuperfluidAsset.fromJSON(e));
    return obj;
  },
  toJSON(message: AllAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? SuperfluidAsset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllAssetsResponse>, I>>(object: I): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets = object.assets?.map((e) => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },
};
function createBaseAssetMultiplierRequest(): AssetMultiplierRequest {
  return {
    denom: "",
  };
}
export const AssetMultiplierRequest = {
  typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
  encode(message: AssetMultiplierRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetMultiplierRequest {
    const obj = createBaseAssetMultiplierRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: AssetMultiplierRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AssetMultiplierRequest>, I>>(object: I): AssetMultiplierRequest {
    const message = createBaseAssetMultiplierRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseAssetMultiplierResponse(): AssetMultiplierResponse {
  return {
    osmoEquivalentMultiplier: undefined,
  };
}
export const AssetMultiplierResponse = {
  typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
  encode(message: AssetMultiplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.osmoEquivalentMultiplier !== undefined) {
      OsmoEquivalentMultiplierRecord.encode(
        message.osmoEquivalentMultiplier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetMultiplierResponse {
    const obj = createBaseAssetMultiplierResponse();
    if (isSet(object.osmoEquivalentMultiplier))
      obj.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.fromJSON(object.osmoEquivalentMultiplier);
    return obj;
  },
  toJSON(message: AssetMultiplierResponse): unknown {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined &&
      (obj.osmoEquivalentMultiplier = message.osmoEquivalentMultiplier
        ? OsmoEquivalentMultiplierRecord.toJSON(message.osmoEquivalentMultiplier)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AssetMultiplierResponse>, I>>(object: I): AssetMultiplierResponse {
    const message = createBaseAssetMultiplierResponse();
    if (object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null) {
      message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.fromPartial(
        object.osmoEquivalentMultiplier,
      );
    }
    return message;
  },
};
function createBaseSuperfluidIntermediaryAccountInfo(): SuperfluidIntermediaryAccountInfo {
  return {
    denom: "",
    valAddr: "",
    gaugeId: BigInt(0),
    address: "",
  };
}
export const SuperfluidIntermediaryAccountInfo = {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
  encode(
    message: SuperfluidIntermediaryAccountInfo,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccountInfo();
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
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidIntermediaryAccountInfo {
    const obj = createBaseSuperfluidIntermediaryAccountInfo();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: SuperfluidIntermediaryAccountInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidIntermediaryAccountInfo>, I>>(
    object: I,
  ): SuperfluidIntermediaryAccountInfo {
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseAllIntermediaryAccountsRequest(): AllIntermediaryAccountsRequest {
  return {
    pagination: undefined,
  };
}
export const AllIntermediaryAccountsRequest = {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
  encode(
    message: AllIntermediaryAccountsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllIntermediaryAccountsRequest {
    const obj = createBaseAllIntermediaryAccountsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: AllIntermediaryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllIntermediaryAccountsRequest>, I>>(
    object: I,
  ): AllIntermediaryAccountsRequest {
    const message = createBaseAllIntermediaryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseAllIntermediaryAccountsResponse(): AllIntermediaryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined,
  };
}
export const AllIntermediaryAccountsResponse = {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
  encode(
    message: AllIntermediaryAccountsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.accounts) {
      SuperfluidIntermediaryAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllIntermediaryAccountsResponse {
    const obj = createBaseAllIntermediaryAccountsResponse();
    if (Array.isArray(object?.accounts))
      obj.accounts = object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: AllIntermediaryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined,
      );
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllIntermediaryAccountsResponse>, I>>(
    object: I,
  ): AllIntermediaryAccountsResponse {
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = object.accounts?.map((e) => SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseConnectedIntermediaryAccountRequest(): ConnectedIntermediaryAccountRequest {
  return {
    lockId: BigInt(0),
  };
}
export const ConnectedIntermediaryAccountRequest = {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
  encode(
    message: ConnectedIntermediaryAccountRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.lockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectedIntermediaryAccountRequest {
    const obj = createBaseConnectedIntermediaryAccountRequest();
    if (isSet(object.lockId)) obj.lockId = BigInt(object.lockId.toString());
    return obj;
  },
  toJSON(message: ConnectedIntermediaryAccountRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConnectedIntermediaryAccountRequest>, I>>(
    object: I,
  ): ConnectedIntermediaryAccountRequest {
    const message = createBaseConnectedIntermediaryAccountRequest();
    if (object.lockId !== undefined && object.lockId !== null) {
      message.lockId = BigInt(object.lockId.toString());
    }
    return message;
  },
};
function createBaseConnectedIntermediaryAccountResponse(): ConnectedIntermediaryAccountResponse {
  return {
    account: undefined,
  };
}
export const ConnectedIntermediaryAccountResponse = {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
  encode(
    message: ConnectedIntermediaryAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectedIntermediaryAccountResponse {
    const obj = createBaseConnectedIntermediaryAccountResponse();
    if (isSet(object.account)) obj.account = SuperfluidIntermediaryAccountInfo.fromJSON(object.account);
    return obj;
  },
  toJSON(message: ConnectedIntermediaryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConnectedIntermediaryAccountResponse>, I>>(
    object: I,
  ): ConnectedIntermediaryAccountResponse {
    const message = createBaseConnectedIntermediaryAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = SuperfluidIntermediaryAccountInfo.fromPartial(object.account);
    }
    return message;
  },
};
function createBaseQueryTotalDelegationByValidatorForDenomRequest(): QueryTotalDelegationByValidatorForDenomRequest {
  return {
    denom: "",
  };
}
export const QueryTotalDelegationByValidatorForDenomRequest = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
  encode(
    message: QueryTotalDelegationByValidatorForDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest {
    const obj = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>, I>>(
    object: I,
  ): QueryTotalDelegationByValidatorForDenomRequest {
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryTotalDelegationByValidatorForDenomResponse(): QueryTotalDelegationByValidatorForDenomResponse {
  return {
    assets: [],
  };
}
export const QueryTotalDelegationByValidatorForDenomResponse = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
  encode(
    message: QueryTotalDelegationByValidatorForDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.assets) {
      Delegations.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Delegations.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse {
    const obj = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    if (Array.isArray(object?.assets)) obj.assets = object.assets.map((e: any) => Delegations.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Delegations.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalDelegationByValidatorForDenomResponse>, I>>(
    object: I,
  ): QueryTotalDelegationByValidatorForDenomResponse {
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    message.assets = object.assets?.map((e) => Delegations.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDelegations(): Delegations {
  return {
    valAddr: "",
    amountSfsd: "",
    osmoEquivalent: "",
  };
}
export const Delegations = {
  typeUrl: "/osmosis.superfluid.Delegations",
  encode(message: Delegations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valAddr !== "") {
      writer.uint32(10).string(message.valAddr);
    }
    if (message.amountSfsd !== "") {
      writer.uint32(18).string(message.amountSfsd);
    }
    if (message.osmoEquivalent !== "") {
      writer.uint32(26).string(message.osmoEquivalent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valAddr = reader.string();
          break;
        case 2:
          message.amountSfsd = reader.string();
          break;
        case 3:
          message.osmoEquivalent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegations {
    const obj = createBaseDelegations();
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    if (isSet(object.amountSfsd)) obj.amountSfsd = String(object.amountSfsd);
    if (isSet(object.osmoEquivalent)) obj.osmoEquivalent = String(object.osmoEquivalent);
    return obj;
  },
  toJSON(message: Delegations): unknown {
    const obj: any = {};
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.amountSfsd !== undefined && (obj.amountSfsd = message.amountSfsd);
    message.osmoEquivalent !== undefined && (obj.osmoEquivalent = message.osmoEquivalent);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Delegations>, I>>(object: I): Delegations {
    const message = createBaseDelegations();
    message.valAddr = object.valAddr ?? "";
    message.amountSfsd = object.amountSfsd ?? "";
    message.osmoEquivalent = object.osmoEquivalent ?? "";
    return message;
  },
};
function createBaseTotalSuperfluidDelegationsRequest(): TotalSuperfluidDelegationsRequest {
  return {};
}
export const TotalSuperfluidDelegationsRequest = {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
  encode(_: TotalSuperfluidDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): TotalSuperfluidDelegationsRequest {
    const obj = createBaseTotalSuperfluidDelegationsRequest();
    return obj;
  },
  toJSON(_: TotalSuperfluidDelegationsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalSuperfluidDelegationsRequest>, I>>(
    _: I,
  ): TotalSuperfluidDelegationsRequest {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  },
};
function createBaseTotalSuperfluidDelegationsResponse(): TotalSuperfluidDelegationsResponse {
  return {
    totalDelegations: "",
  };
}
export const TotalSuperfluidDelegationsResponse = {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
  encode(
    message: TotalSuperfluidDelegationsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalSuperfluidDelegationsResponse {
    const obj = createBaseTotalSuperfluidDelegationsResponse();
    if (isSet(object.totalDelegations)) obj.totalDelegations = String(object.totalDelegations);
    return obj;
  },
  toJSON(message: TotalSuperfluidDelegationsResponse): unknown {
    const obj: any = {};
    message.totalDelegations !== undefined && (obj.totalDelegations = message.totalDelegations);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalSuperfluidDelegationsResponse>, I>>(
    object: I,
  ): TotalSuperfluidDelegationsResponse {
    const message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = object.totalDelegations ?? "";
    return message;
  },
};
function createBaseSuperfluidDelegationAmountRequest(): SuperfluidDelegationAmountRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: "",
  };
}
export const SuperfluidDelegationAmountRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
  encode(
    message: SuperfluidDelegationAmountRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountRequest();
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
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationAmountRequest {
    const obj = createBaseSuperfluidDelegationAmountRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: SuperfluidDelegationAmountRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationAmountRequest>, I>>(
    object: I,
  ): SuperfluidDelegationAmountRequest {
    const message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseSuperfluidDelegationAmountResponse(): SuperfluidDelegationAmountResponse {
  return {
    amount: [],
  };
}
export const SuperfluidDelegationAmountResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
  encode(
    message: SuperfluidDelegationAmountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationAmountResponse {
    const obj = createBaseSuperfluidDelegationAmountResponse();
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: SuperfluidDelegationAmountResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationAmountResponse>, I>>(
    object: I,
  ): SuperfluidDelegationAmountResponse {
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSuperfluidDelegationsByDelegatorRequest(): SuperfluidDelegationsByDelegatorRequest {
  return {
    delegatorAddress: "",
  };
}
export const SuperfluidDelegationsByDelegatorRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
  encode(
    message: SuperfluidDelegationsByDelegatorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest {
    const obj = createBaseSuperfluidDelegationsByDelegatorRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationsByDelegatorRequest>, I>>(
    object: I,
  ): SuperfluidDelegationsByDelegatorRequest {
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseSuperfluidDelegationsByDelegatorResponse(): SuperfluidDelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: Coin.fromPartial({}),
  };
}
export const SuperfluidDelegationsByDelegatorResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
  encode(
    message: SuperfluidDelegationsByDelegatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(
            SuperfluidDelegationRecord.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse {
    const obj = createBaseSuperfluidDelegationsByDelegatorResponse();
    if (Array.isArray(object?.superfluidDelegationRecords))
      obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) =>
        SuperfluidDelegationRecord.fromJSON(e),
      );
    if (Array.isArray(object?.totalDelegatedCoins))
      obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.totalEquivalentStakedAmount))
      obj.totalEquivalentStakedAmount = Coin.fromJSON(object.totalEquivalentStakedAmount);
    return obj;
  },
  toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) =>
        e ? SuperfluidDelegationRecord.toJSON(e) : undefined,
      );
    } else {
      obj.superfluidDelegationRecords = [];
    }
    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalDelegatedCoins = [];
    }
    message.totalEquivalentStakedAmount !== undefined &&
      (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount
        ? Coin.toJSON(message.totalEquivalentStakedAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationsByDelegatorResponse>, I>>(
    object: I,
  ): SuperfluidDelegationsByDelegatorResponse {
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords =
      object.superfluidDelegationRecords?.map((e) => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map((e) => Coin.fromPartial(e)) || [];
    if (object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null) {
      message.totalEquivalentStakedAmount = Coin.fromPartial(object.totalEquivalentStakedAmount);
    }
    return message;
  },
};
function createBaseSuperfluidUndelegationsByDelegatorRequest(): SuperfluidUndelegationsByDelegatorRequest {
  return {
    delegatorAddress: "",
    denom: "",
  };
}
export const SuperfluidUndelegationsByDelegatorRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
  encode(
    message: SuperfluidUndelegationsByDelegatorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest {
    const obj = createBaseSuperfluidUndelegationsByDelegatorRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidUndelegationsByDelegatorRequest>, I>>(
    object: I,
  ): SuperfluidUndelegationsByDelegatorRequest {
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseSuperfluidUndelegationsByDelegatorResponse(): SuperfluidUndelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: [],
  };
}
export const SuperfluidUndelegationsByDelegatorResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
  encode(
    message: SuperfluidUndelegationsByDelegatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalUndelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(
            SuperfluidDelegationRecord.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.totalUndelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse {
    const obj = createBaseSuperfluidUndelegationsByDelegatorResponse();
    if (Array.isArray(object?.superfluidDelegationRecords))
      obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) =>
        SuperfluidDelegationRecord.fromJSON(e),
      );
    if (Array.isArray(object?.totalUndelegatedCoins))
      obj.totalUndelegatedCoins = object.totalUndelegatedCoins.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.syntheticLocks))
      obj.syntheticLocks = object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e));
    return obj;
  },
  toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) =>
        e ? SuperfluidDelegationRecord.toJSON(e) : undefined,
      );
    } else {
      obj.superfluidDelegationRecords = [];
    }
    if (message.totalUndelegatedCoins) {
      obj.totalUndelegatedCoins = message.totalUndelegatedCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalUndelegatedCoins = [];
    }
    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map((e) => (e ? SyntheticLock.toJSON(e) : undefined));
    } else {
      obj.syntheticLocks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidUndelegationsByDelegatorResponse>, I>>(
    object: I,
  ): SuperfluidUndelegationsByDelegatorResponse {
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords =
      object.superfluidDelegationRecords?.map((e) => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalUndelegatedCoins = object.totalUndelegatedCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map((e) => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSuperfluidDelegationsByValidatorDenomRequest(): SuperfluidDelegationsByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: "",
  };
}
export const SuperfluidDelegationsByValidatorDenomRequest = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
  encode(
    message: SuperfluidDelegationsByValidatorDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest {
    const obj = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>, I>>(
    object: I,
  ): SuperfluidDelegationsByValidatorDenomRequest {
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseSuperfluidDelegationsByValidatorDenomResponse(): SuperfluidDelegationsByValidatorDenomResponse {
  return {
    superfluidDelegationRecords: [],
  };
}
export const SuperfluidDelegationsByValidatorDenomResponse = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
  encode(
    message: SuperfluidDelegationsByValidatorDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(
            SuperfluidDelegationRecord.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse {
    const obj = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    if (Array.isArray(object?.superfluidDelegationRecords))
      obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) =>
        SuperfluidDelegationRecord.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) =>
        e ? SuperfluidDelegationRecord.toJSON(e) : undefined,
      );
    } else {
      obj.superfluidDelegationRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SuperfluidDelegationsByValidatorDenomResponse>, I>>(
    object: I,
  ): SuperfluidDelegationsByValidatorDenomResponse {
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords =
      object.superfluidDelegationRecords?.map((e) => SuperfluidDelegationRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest(): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: "",
  };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
  encode(
    message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const obj = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, I>>(
    object: I,
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse(): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  return {
    totalDelegatedCoins: [],
  };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
  encode(
    message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const obj = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    if (Array.isArray(object?.totalDelegatedCoins))
      obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown {
    const obj: any = {};
    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalDelegatedCoins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>, I>>(
    object: I,
  ): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryTotalDelegationByDelegatorRequest(): QueryTotalDelegationByDelegatorRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryTotalDelegationByDelegatorRequest = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
  encode(
    message: QueryTotalDelegationByDelegatorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByDelegatorRequest {
    const obj = createBaseQueryTotalDelegationByDelegatorRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalDelegationByDelegatorRequest>, I>>(
    object: I,
  ): QueryTotalDelegationByDelegatorRequest {
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryTotalDelegationByDelegatorResponse(): QueryTotalDelegationByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    delegationResponse: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: Coin.fromPartial({}),
  };
}
export const QueryTotalDelegationByDelegatorResponse = {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
  encode(
    message: QueryTotalDelegationByDelegatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegationResponse) {
      DelegationResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(
            SuperfluidDelegationRecord.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.delegationResponse.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalDelegationByDelegatorResponse {
    const obj = createBaseQueryTotalDelegationByDelegatorResponse();
    if (Array.isArray(object?.superfluidDelegationRecords))
      obj.superfluidDelegationRecords = object.superfluidDelegationRecords.map((e: any) =>
        SuperfluidDelegationRecord.fromJSON(e),
      );
    if (Array.isArray(object?.delegationResponse))
      obj.delegationResponse = object.delegationResponse.map((e: any) => DelegationResponse.fromJSON(e));
    if (Array.isArray(object?.totalDelegatedCoins))
      obj.totalDelegatedCoins = object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.totalEquivalentStakedAmount))
      obj.totalEquivalentStakedAmount = Coin.fromJSON(object.totalEquivalentStakedAmount);
    return obj;
  },
  toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map((e) =>
        e ? SuperfluidDelegationRecord.toJSON(e) : undefined,
      );
    } else {
      obj.superfluidDelegationRecords = [];
    }
    if (message.delegationResponse) {
      obj.delegationResponse = message.delegationResponse.map((e) =>
        e ? DelegationResponse.toJSON(e) : undefined,
      );
    } else {
      obj.delegationResponse = [];
    }
    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalDelegatedCoins = [];
    }
    message.totalEquivalentStakedAmount !== undefined &&
      (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount
        ? Coin.toJSON(message.totalEquivalentStakedAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalDelegationByDelegatorResponse>, I>>(
    object: I,
  ): QueryTotalDelegationByDelegatorResponse {
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords =
      object.superfluidDelegationRecords?.map((e) => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.delegationResponse =
      object.delegationResponse?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map((e) => Coin.fromPartial(e)) || [];
    if (object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null) {
      message.totalEquivalentStakedAmount = Coin.fromPartial(object.totalEquivalentStakedAmount);
    }
    return message;
  },
};
function createBaseQueryUnpoolWhitelistRequest(): QueryUnpoolWhitelistRequest {
  return {};
}
export const QueryUnpoolWhitelistRequest = {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
  encode(_: QueryUnpoolWhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryUnpoolWhitelistRequest {
    const obj = createBaseQueryUnpoolWhitelistRequest();
    return obj;
  },
  toJSON(_: QueryUnpoolWhitelistRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnpoolWhitelistRequest>, I>>(
    _: I,
  ): QueryUnpoolWhitelistRequest {
    const message = createBaseQueryUnpoolWhitelistRequest();
    return message;
  },
};
function createBaseQueryUnpoolWhitelistResponse(): QueryUnpoolWhitelistResponse {
  return {
    poolIds: [],
  };
}
export const QueryUnpoolWhitelistResponse = {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
  encode(message: QueryUnpoolWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnpoolWhitelistResponse {
    const obj = createBaseQueryUnpoolWhitelistResponse();
    if (Array.isArray(object?.poolIds)) obj.poolIds = object.poolIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: QueryUnpoolWhitelistResponse): unknown {
    const obj: any = {};
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.poolIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnpoolWhitelistResponse>, I>>(
    object: I,
  ): QueryUnpoolWhitelistResponse {
    const message = createBaseQueryUnpoolWhitelistResponse();
    message.poolIds = object.poolIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseUserConcentratedSuperfluidPositionsDelegatedRequest(): UserConcentratedSuperfluidPositionsDelegatedRequest {
  return {
    delegatorAddress: "",
  };
}
export const UserConcentratedSuperfluidPositionsDelegatedRequest = {
  typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedRequest",
  encode(
    message: UserConcentratedSuperfluidPositionsDelegatedRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserConcentratedSuperfluidPositionsDelegatedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserConcentratedSuperfluidPositionsDelegatedRequest {
    const obj = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: UserConcentratedSuperfluidPositionsDelegatedRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserConcentratedSuperfluidPositionsDelegatedRequest>, I>>(
    object: I,
  ): UserConcentratedSuperfluidPositionsDelegatedRequest {
    const message = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseUserConcentratedSuperfluidPositionsDelegatedResponse(): UserConcentratedSuperfluidPositionsDelegatedResponse {
  return {
    clPoolUserPositionRecords: [],
  };
}
export const UserConcentratedSuperfluidPositionsDelegatedResponse = {
  typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedResponse",
  encode(
    message: UserConcentratedSuperfluidPositionsDelegatedResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.clPoolUserPositionRecords) {
      ConcentratedPoolUserPositionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserConcentratedSuperfluidPositionsDelegatedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clPoolUserPositionRecords.push(
            ConcentratedPoolUserPositionRecord.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserConcentratedSuperfluidPositionsDelegatedResponse {
    const obj = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
    if (Array.isArray(object?.clPoolUserPositionRecords))
      obj.clPoolUserPositionRecords = object.clPoolUserPositionRecords.map((e: any) =>
        ConcentratedPoolUserPositionRecord.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: UserConcentratedSuperfluidPositionsDelegatedResponse): unknown {
    const obj: any = {};
    if (message.clPoolUserPositionRecords) {
      obj.clPoolUserPositionRecords = message.clPoolUserPositionRecords.map((e) =>
        e ? ConcentratedPoolUserPositionRecord.toJSON(e) : undefined,
      );
    } else {
      obj.clPoolUserPositionRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserConcentratedSuperfluidPositionsDelegatedResponse>, I>>(
    object: I,
  ): UserConcentratedSuperfluidPositionsDelegatedResponse {
    const message = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
    message.clPoolUserPositionRecords =
      object.clPoolUserPositionRecords?.map((e) => ConcentratedPoolUserPositionRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest(): UserConcentratedSuperfluidPositionsUndelegatingRequest {
  return {
    delegatorAddress: "",
  };
}
export const UserConcentratedSuperfluidPositionsUndelegatingRequest = {
  typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingRequest",
  encode(
    message: UserConcentratedSuperfluidPositionsUndelegatingRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserConcentratedSuperfluidPositionsUndelegatingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserConcentratedSuperfluidPositionsUndelegatingRequest {
    const obj = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: UserConcentratedSuperfluidPositionsUndelegatingRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserConcentratedSuperfluidPositionsUndelegatingRequest>, I>>(
    object: I,
  ): UserConcentratedSuperfluidPositionsUndelegatingRequest {
    const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse(): UserConcentratedSuperfluidPositionsUndelegatingResponse {
  return {
    clPoolUserPositionRecords: [],
  };
}
export const UserConcentratedSuperfluidPositionsUndelegatingResponse = {
  typeUrl: "/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingResponse",
  encode(
    message: UserConcentratedSuperfluidPositionsUndelegatingResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.clPoolUserPositionRecords) {
      ConcentratedPoolUserPositionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserConcentratedSuperfluidPositionsUndelegatingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clPoolUserPositionRecords.push(
            ConcentratedPoolUserPositionRecord.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserConcentratedSuperfluidPositionsUndelegatingResponse {
    const obj = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
    if (Array.isArray(object?.clPoolUserPositionRecords))
      obj.clPoolUserPositionRecords = object.clPoolUserPositionRecords.map((e: any) =>
        ConcentratedPoolUserPositionRecord.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: UserConcentratedSuperfluidPositionsUndelegatingResponse): unknown {
    const obj: any = {};
    if (message.clPoolUserPositionRecords) {
      obj.clPoolUserPositionRecords = message.clPoolUserPositionRecords.map((e) =>
        e ? ConcentratedPoolUserPositionRecord.toJSON(e) : undefined,
      );
    } else {
      obj.clPoolUserPositionRecords = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserConcentratedSuperfluidPositionsUndelegatingResponse>, I>>(
    object: I,
  ): UserConcentratedSuperfluidPositionsUndelegatingResponse {
    const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
    message.clPoolUserPositionRecords =
      object.clPoolUserPositionRecords?.map((e) => ConcentratedPoolUserPositionRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryRestSupplyRequest(): QueryRestSupplyRequest {
  return {
    denom: "",
  };
}
export const QueryRestSupplyRequest = {
  typeUrl: "/osmosis.superfluid.QueryRestSupplyRequest",
  encode(message: QueryRestSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRestSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRestSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRestSupplyRequest {
    const obj = createBaseQueryRestSupplyRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryRestSupplyRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRestSupplyRequest>, I>>(object: I): QueryRestSupplyRequest {
    const message = createBaseQueryRestSupplyRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryRestSupplyResponse(): QueryRestSupplyResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QueryRestSupplyResponse = {
  typeUrl: "/osmosis.superfluid.QueryRestSupplyResponse",
  encode(message: QueryRestSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRestSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRestSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRestSupplyResponse {
    const obj = createBaseQueryRestSupplyResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QueryRestSupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRestSupplyResponse>, I>>(object: I): QueryRestSupplyResponse {
    const message = createBaseQueryRestSupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of superfluid parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * Returns superfluid asset type, whether if it's a native asset or an lp
   * share.
   */
  AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
  /** Returns all registered superfluid assets. */
  AllAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse>;
  /** Returns the osmo equivalent multiplier used in the most recent epoch. */
  AssetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse>;
  /** Returns all superfluid intermediary accounts. */
  AllIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse>;
  /** Returns intermediary account connected to a superfluid staked lock by id */
  ConnectedIntermediaryAccount(
    request: ConnectedIntermediaryAccountRequest,
  ): Promise<ConnectedIntermediaryAccountResponse>;
  /** Returns the amount of delegations of specific denom for all validators */
  TotalDelegationByValidatorForDenom(
    request: QueryTotalDelegationByValidatorForDenomRequest,
  ): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
  /**
   * Returns the total amount of osmo superfluidly staked.
   * Response is denominated in uosmo.
   */
  TotalSuperfluidDelegations(
    request?: TotalSuperfluidDelegationsRequest,
  ): Promise<TotalSuperfluidDelegationsResponse>;
  /**
   * Returns the coins superfluid delegated for the delegator, validator, denom
   * triplet
   */
  SuperfluidDelegationAmount(
    request: SuperfluidDelegationAmountRequest,
  ): Promise<SuperfluidDelegationAmountResponse>;
  /** Returns all the delegated superfluid positions for a specific delegator. */
  SuperfluidDelegationsByDelegator(
    request: SuperfluidDelegationsByDelegatorRequest,
  ): Promise<SuperfluidDelegationsByDelegatorResponse>;
  /** Returns all the undelegating superfluid positions for a specific delegator. */
  SuperfluidUndelegationsByDelegator(
    request: SuperfluidUndelegationsByDelegatorRequest,
  ): Promise<SuperfluidUndelegationsByDelegatorResponse>;
  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  SuperfluidDelegationsByValidatorDenom(
    request: SuperfluidDelegationsByValidatorDenomRequest,
  ): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  EstimateSuperfluidDelegatedAmountByValidatorDenom(
    request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest,
  ): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
  /** Returns the specified delegations for a specific delegator */
  TotalDelegationByDelegator(
    request: QueryTotalDelegationByDelegatorRequest,
  ): Promise<QueryTotalDelegationByDelegatorResponse>;
  /** Returns a list of whitelisted pool ids to unpool. */
  UnpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse>;
  /** Returns all of a user's full range CL positions that are superfluid staked. */
  UserConcentratedSuperfluidPositionsDelegated(
    request: UserConcentratedSuperfluidPositionsDelegatedRequest,
  ): Promise<UserConcentratedSuperfluidPositionsDelegatedResponse>;
  UserConcentratedSuperfluidPositionsUndelegating(
    request: UserConcentratedSuperfluidPositionsUndelegatingRequest,
  ): Promise<UserConcentratedSuperfluidPositionsUndelegatingResponse>;
  RestSupply(request: QueryRestSupplyRequest): Promise<QueryRestSupplyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AssetType = this.AssetType.bind(this);
    this.AllAssets = this.AllAssets.bind(this);
    this.AssetMultiplier = this.AssetMultiplier.bind(this);
    this.AllIntermediaryAccounts = this.AllIntermediaryAccounts.bind(this);
    this.ConnectedIntermediaryAccount = this.ConnectedIntermediaryAccount.bind(this);
    this.TotalDelegationByValidatorForDenom = this.TotalDelegationByValidatorForDenom.bind(this);
    this.TotalSuperfluidDelegations = this.TotalSuperfluidDelegations.bind(this);
    this.SuperfluidDelegationAmount = this.SuperfluidDelegationAmount.bind(this);
    this.SuperfluidDelegationsByDelegator = this.SuperfluidDelegationsByDelegator.bind(this);
    this.SuperfluidUndelegationsByDelegator = this.SuperfluidUndelegationsByDelegator.bind(this);
    this.SuperfluidDelegationsByValidatorDenom = this.SuperfluidDelegationsByValidatorDenom.bind(this);
    this.EstimateSuperfluidDelegatedAmountByValidatorDenom =
      this.EstimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
    this.TotalDelegationByDelegator = this.TotalDelegationByDelegator.bind(this);
    this.UnpoolWhitelist = this.UnpoolWhitelist.bind(this);
    this.UserConcentratedSuperfluidPositionsDelegated =
      this.UserConcentratedSuperfluidPositionsDelegated.bind(this);
    this.UserConcentratedSuperfluidPositionsUndelegating =
      this.UserConcentratedSuperfluidPositionsUndelegating.bind(this);
    this.RestSupply = this.RestSupply.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
    const data = AssetTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
    return promise.then((data) => AssetTypeResponse.decode(new BinaryReader(data)));
  }
  AllAssets(request: AllAssetsRequest = {}): Promise<AllAssetsResponse> {
    const data = AllAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
    return promise.then((data) => AllAssetsResponse.decode(new BinaryReader(data)));
  }
  AssetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
    const data = AssetMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
    return promise.then((data) => AssetMultiplierResponse.decode(new BinaryReader(data)));
  }
  AllIntermediaryAccounts(
    request: AllIntermediaryAccountsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<AllIntermediaryAccountsResponse> {
    const data = AllIntermediaryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
    return promise.then((data) => AllIntermediaryAccountsResponse.decode(new BinaryReader(data)));
  }
  ConnectedIntermediaryAccount(
    request: ConnectedIntermediaryAccountRequest,
  ): Promise<ConnectedIntermediaryAccountResponse> {
    const data = ConnectedIntermediaryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
    return promise.then((data) => ConnectedIntermediaryAccountResponse.decode(new BinaryReader(data)));
  }
  TotalDelegationByValidatorForDenom(
    request: QueryTotalDelegationByValidatorForDenomRequest,
  ): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
    const data = QueryTotalDelegationByValidatorForDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByValidatorForDenom", data);
    return promise.then((data) =>
      QueryTotalDelegationByValidatorForDenomResponse.decode(new BinaryReader(data)),
    );
  }
  TotalSuperfluidDelegations(
    request: TotalSuperfluidDelegationsRequest = {},
  ): Promise<TotalSuperfluidDelegationsResponse> {
    const data = TotalSuperfluidDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
    return promise.then((data) => TotalSuperfluidDelegationsResponse.decode(new BinaryReader(data)));
  }
  SuperfluidDelegationAmount(
    request: SuperfluidDelegationAmountRequest,
  ): Promise<SuperfluidDelegationAmountResponse> {
    const data = SuperfluidDelegationAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
    return promise.then((data) => SuperfluidDelegationAmountResponse.decode(new BinaryReader(data)));
  }
  SuperfluidDelegationsByDelegator(
    request: SuperfluidDelegationsByDelegatorRequest,
  ): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const data = SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
    return promise.then((data) => SuperfluidDelegationsByDelegatorResponse.decode(new BinaryReader(data)));
  }
  SuperfluidUndelegationsByDelegator(
    request: SuperfluidUndelegationsByDelegatorRequest,
  ): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    const data = SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
    return promise.then((data) => SuperfluidUndelegationsByDelegatorResponse.decode(new BinaryReader(data)));
  }
  SuperfluidDelegationsByValidatorDenom(
    request: SuperfluidDelegationsByValidatorDenomRequest,
  ): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    const data = SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "SuperfluidDelegationsByValidatorDenom",
      data,
    );
    return promise.then((data) =>
      SuperfluidDelegationsByValidatorDenomResponse.decode(new BinaryReader(data)),
    );
  }
  EstimateSuperfluidDelegatedAmountByValidatorDenom(
    request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest,
  ): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    const data = EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "EstimateSuperfluidDelegatedAmountByValidatorDenom",
      data,
    );
    return promise.then((data) =>
      EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new BinaryReader(data)),
    );
  }
  TotalDelegationByDelegator(
    request: QueryTotalDelegationByDelegatorRequest,
  ): Promise<QueryTotalDelegationByDelegatorResponse> {
    const data = QueryTotalDelegationByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
    return promise.then((data) => QueryTotalDelegationByDelegatorResponse.decode(new BinaryReader(data)));
  }
  UnpoolWhitelist(request: QueryUnpoolWhitelistRequest = {}): Promise<QueryUnpoolWhitelistResponse> {
    const data = QueryUnpoolWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "UnpoolWhitelist", data);
    return promise.then((data) => QueryUnpoolWhitelistResponse.decode(new BinaryReader(data)));
  }
  UserConcentratedSuperfluidPositionsDelegated(
    request: UserConcentratedSuperfluidPositionsDelegatedRequest,
  ): Promise<UserConcentratedSuperfluidPositionsDelegatedResponse> {
    const data = UserConcentratedSuperfluidPositionsDelegatedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "UserConcentratedSuperfluidPositionsDelegated",
      data,
    );
    return promise.then((data) =>
      UserConcentratedSuperfluidPositionsDelegatedResponse.decode(new BinaryReader(data)),
    );
  }
  UserConcentratedSuperfluidPositionsUndelegating(
    request: UserConcentratedSuperfluidPositionsUndelegatingRequest,
  ): Promise<UserConcentratedSuperfluidPositionsUndelegatingResponse> {
    const data = UserConcentratedSuperfluidPositionsUndelegatingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Query",
      "UserConcentratedSuperfluidPositionsUndelegating",
      data,
    );
    return promise.then((data) =>
      UserConcentratedSuperfluidPositionsUndelegatingResponse.decode(new BinaryReader(data)),
    );
  }
  RestSupply(request: QueryRestSupplyRequest): Promise<QueryRestSupplyResponse> {
    const data = QueryRestSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "RestSupply", data);
    return promise.then((data) => QueryRestSupplyResponse.decode(new BinaryReader(data)));
  }
}
