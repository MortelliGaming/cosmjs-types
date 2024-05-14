/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute } from "./module_route";
import { DenomPairTakerFee } from "./tx";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
/** Params holds parameters for the poolmanager module */
export interface Params {
  poolCreationFee: Coin[];
  /** taker_fee_params is the container of taker fee parameters. */
  takerFeeParams: TakerFeeParams;
  /**
   * authorized_quote_denoms is a list of quote denoms that can be used as
   * token1 when creating a concentrated pool. We limit the quote assets to a
   * small set for the purposes of having convenient price increments stemming
   * from tick to price conversion. These increments are in a human readable
   * magnitude only for token1 as a quote. For limit orders in the future, this
   * will be a desirable property in terms of UX as to allow users to set limit
   * orders at prices in terms of token1 (quote asset) that are easy to reason
   * about.
   */
  authorizedQuoteDenoms: string[];
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisState {
  /** the next_pool_id */
  nextPoolId: bigint;
  /** params is the container of poolmanager parameters. */
  params: Params;
  /** pool_routes is the container of the mappings from pool id to pool type. */
  poolRoutes: ModuleRoute[];
  /** KVStore state */
  takerFeesTracker?: TakerFeesTracker;
  poolVolumes: PoolVolume[];
  denomPairTakerFeeStore: DenomPairTakerFee[];
}
/** TakerFeeParams consolidates the taker fee parameters for the poolmanager. */
export interface TakerFeeParams {
  /**
   * default_taker_fee is the fee used when creating a new pool that doesn't
   * fall under a custom pool taker fee or stableswap taker fee category.
   */
  defaultTakerFee: string;
  /**
   * osmo_taker_fee_distribution defines the distribution of taker fees
   * generated in OSMO. As of this writing, it has two categories:
   * - staking_rewards: the percent of the taker fee that gets distributed to
   *   stakers.
   * - community_pool: the percent of the taker fee that gets sent to the
   *   community pool.
   */
  osmoTakerFeeDistribution: TakerFeeDistributionPercentage;
  /**
   * non_osmo_taker_fee_distribution defines the distribution of taker fees
   * generated in non-OSMO. As of this writing, it has two categories:
   * - staking_rewards: the percent of the taker fee that gets swapped to OSMO
   *   and then distributed to stakers.
   * - community_pool: the percent of the taker fee that gets sent to the
   *   community pool. Note: If the non-OSMO asset is an authorized_quote_denom,
   *   that denom is sent directly to the community pool. Otherwise, it is
   *   swapped to the community_pool_denom_to_swap_non_whitelisted_assets_to and
   *   then sent to the community pool as that denom.
   */
  nonOsmoTakerFeeDistribution: TakerFeeDistributionPercentage;
  /**
   * admin_addresses is a list of addresses that are allowed to set and remove
   * custom taker fees for denom pairs. Governance also has the ability to set
   * and remove custom taker fees for denom pairs, but with the normal
   * governance delay.
   */
  adminAddresses: string[];
  /**
   * community_pool_denom_to_swap_non_whitelisted_assets_to is the denom that
   * non-whitelisted taker fees will be swapped to before being sent to
   * the community pool.
   */
  communityPoolDenomToSwapNonWhitelistedAssetsTo: string;
  /**
   * reduced_fee_whitelist is a list of addresses that are
   * allowed to pay a reduce taker fee when performing a swap
   * (i.e. swap without paying the taker fee).
   * It is intended to be used for integrators who meet qualifying factors
   * that are approved by governance.
   * Initially, the taker fee is allowed to be bypassed completely. However
   * In the future, we will charge a reduced taker fee instead of no fee at all.
   */
  reducedFeeWhitelist: string[];
}
/**
 * TakerFeeDistributionPercentage defines what percent of the taker fee category
 * gets distributed to the available categories.
 */
export interface TakerFeeDistributionPercentage {
  stakingRewards: string;
  communityPool: string;
}
export interface TakerFeesTracker {
  takerFeesToStakers: Coin[];
  takerFeesToCommunityPool: Coin[];
  heightAccountingStartsFrom: bigint;
}
/**
 * PoolVolume stores the KVStore entries for each pool's volume, which
 * is used in export/import genesis.
 */
export interface PoolVolume {
  /** pool_id is the id of the pool. */
  poolId: bigint;
  /** pool_volume is the cumulative volume of the pool. */
  poolVolume: Coin[];
}
function createBaseParams(): Params {
  return {
    poolCreationFee: [],
    takerFeeParams: TakerFeeParams.fromPartial({}),
    authorizedQuoteDenoms: [],
  };
}
export const Params = {
  typeUrl: "/osmosis.poolmanager.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.takerFeeParams !== undefined) {
      TakerFeeParams.encode(message.takerFeeParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.authorizedQuoteDenoms) {
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
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.takerFeeParams = TakerFeeParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.authorizedQuoteDenoms.push(reader.string());
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
    if (Array.isArray(object?.poolCreationFee))
      obj.poolCreationFee = object.poolCreationFee.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.takerFeeParams)) obj.takerFeeParams = TakerFeeParams.fromJSON(object.takerFeeParams);
    if (Array.isArray(object?.authorizedQuoteDenoms))
      obj.authorizedQuoteDenoms = object.authorizedQuoteDenoms.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.poolCreationFee = [];
    }
    message.takerFeeParams !== undefined &&
      (obj.takerFeeParams = message.takerFeeParams
        ? TakerFeeParams.toJSON(message.takerFeeParams)
        : undefined);
    if (message.authorizedQuoteDenoms) {
      obj.authorizedQuoteDenoms = message.authorizedQuoteDenoms.map((e) => e);
    } else {
      obj.authorizedQuoteDenoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.poolCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    if (object.takerFeeParams !== undefined && object.takerFeeParams !== null) {
      message.takerFeeParams = TakerFeeParams.fromPartial(object.takerFeeParams);
    }
    message.authorizedQuoteDenoms = object.authorizedQuoteDenoms?.map((e) => e) || [];
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    nextPoolId: BigInt(0),
    params: Params.fromPartial({}),
    poolRoutes: [],
    takerFeesTracker: undefined,
    poolVolumes: [],
    denomPairTakerFeeStore: [],
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.poolmanager.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextPoolId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolRoutes) {
      ModuleRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.takerFeesTracker !== undefined) {
      TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolVolumes) {
      PoolVolume.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.denomPairTakerFeeStore) {
      DenomPairTakerFee.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.nextPoolId = reader.uint64();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolRoutes.push(ModuleRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.takerFeesTracker = TakerFeesTracker.decode(reader, reader.uint32());
          break;
        case 5:
          message.poolVolumes.push(PoolVolume.decode(reader, reader.uint32()));
          break;
        case 6:
          message.denomPairTakerFeeStore.push(DenomPairTakerFee.decode(reader, reader.uint32()));
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
    if (isSet(object.nextPoolId)) obj.nextPoolId = BigInt(object.nextPoolId.toString());
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.poolRoutes))
      obj.poolRoutes = object.poolRoutes.map((e: any) => ModuleRoute.fromJSON(e));
    if (isSet(object.takerFeesTracker))
      obj.takerFeesTracker = TakerFeesTracker.fromJSON(object.takerFeesTracker);
    if (Array.isArray(object?.poolVolumes))
      obj.poolVolumes = object.poolVolumes.map((e: any) => PoolVolume.fromJSON(e));
    if (Array.isArray(object?.denomPairTakerFeeStore))
      obj.denomPairTakerFeeStore = object.denomPairTakerFeeStore.map((e: any) =>
        DenomPairTakerFee.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.nextPoolId !== undefined && (obj.nextPoolId = (message.nextPoolId || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolRoutes) {
      obj.poolRoutes = message.poolRoutes.map((e) => (e ? ModuleRoute.toJSON(e) : undefined));
    } else {
      obj.poolRoutes = [];
    }
    message.takerFeesTracker !== undefined &&
      (obj.takerFeesTracker = message.takerFeesTracker
        ? TakerFeesTracker.toJSON(message.takerFeesTracker)
        : undefined);
    if (message.poolVolumes) {
      obj.poolVolumes = message.poolVolumes.map((e) => (e ? PoolVolume.toJSON(e) : undefined));
    } else {
      obj.poolVolumes = [];
    }
    if (message.denomPairTakerFeeStore) {
      obj.denomPairTakerFeeStore = message.denomPairTakerFeeStore.map((e) =>
        e ? DenomPairTakerFee.toJSON(e) : undefined,
      );
    } else {
      obj.denomPairTakerFeeStore = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.nextPoolId !== undefined && object.nextPoolId !== null) {
      message.nextPoolId = BigInt(object.nextPoolId.toString());
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.poolRoutes = object.poolRoutes?.map((e) => ModuleRoute.fromPartial(e)) || [];
    if (object.takerFeesTracker !== undefined && object.takerFeesTracker !== null) {
      message.takerFeesTracker = TakerFeesTracker.fromPartial(object.takerFeesTracker);
    }
    message.poolVolumes = object.poolVolumes?.map((e) => PoolVolume.fromPartial(e)) || [];
    message.denomPairTakerFeeStore =
      object.denomPairTakerFeeStore?.map((e) => DenomPairTakerFee.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTakerFeeParams(): TakerFeeParams {
  return {
    defaultTakerFee: "",
    osmoTakerFeeDistribution: TakerFeeDistributionPercentage.fromPartial({}),
    nonOsmoTakerFeeDistribution: TakerFeeDistributionPercentage.fromPartial({}),
    adminAddresses: [],
    communityPoolDenomToSwapNonWhitelistedAssetsTo: "",
    reducedFeeWhitelist: [],
  };
}
export const TakerFeeParams = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeParams",
  encode(message: TakerFeeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultTakerFee !== "") {
      writer.uint32(10).string(message.defaultTakerFee);
    }
    if (message.osmoTakerFeeDistribution !== undefined) {
      TakerFeeDistributionPercentage.encode(
        message.osmoTakerFeeDistribution,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.nonOsmoTakerFeeDistribution !== undefined) {
      TakerFeeDistributionPercentage.encode(
        message.nonOsmoTakerFeeDistribution,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.adminAddresses) {
      writer.uint32(34).string(v!);
    }
    if (message.communityPoolDenomToSwapNonWhitelistedAssetsTo !== "") {
      writer.uint32(42).string(message.communityPoolDenomToSwapNonWhitelistedAssetsTo);
    }
    for (const v of message.reducedFeeWhitelist) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultTakerFee = reader.string();
          break;
        case 2:
          message.osmoTakerFeeDistribution = TakerFeeDistributionPercentage.decode(reader, reader.uint32());
          break;
        case 3:
          message.nonOsmoTakerFeeDistribution = TakerFeeDistributionPercentage.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.adminAddresses.push(reader.string());
          break;
        case 5:
          message.communityPoolDenomToSwapNonWhitelistedAssetsTo = reader.string();
          break;
        case 6:
          message.reducedFeeWhitelist.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeParams {
    const obj = createBaseTakerFeeParams();
    if (isSet(object.defaultTakerFee)) obj.defaultTakerFee = String(object.defaultTakerFee);
    if (isSet(object.osmoTakerFeeDistribution))
      obj.osmoTakerFeeDistribution = TakerFeeDistributionPercentage.fromJSON(object.osmoTakerFeeDistribution);
    if (isSet(object.nonOsmoTakerFeeDistribution))
      obj.nonOsmoTakerFeeDistribution = TakerFeeDistributionPercentage.fromJSON(
        object.nonOsmoTakerFeeDistribution,
      );
    if (Array.isArray(object?.adminAddresses))
      obj.adminAddresses = object.adminAddresses.map((e: any) => String(e));
    if (isSet(object.communityPoolDenomToSwapNonWhitelistedAssetsTo))
      obj.communityPoolDenomToSwapNonWhitelistedAssetsTo = String(
        object.communityPoolDenomToSwapNonWhitelistedAssetsTo,
      );
    if (Array.isArray(object?.reducedFeeWhitelist))
      obj.reducedFeeWhitelist = object.reducedFeeWhitelist.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: TakerFeeParams): unknown {
    const obj: any = {};
    message.defaultTakerFee !== undefined && (obj.defaultTakerFee = message.defaultTakerFee);
    message.osmoTakerFeeDistribution !== undefined &&
      (obj.osmoTakerFeeDistribution = message.osmoTakerFeeDistribution
        ? TakerFeeDistributionPercentage.toJSON(message.osmoTakerFeeDistribution)
        : undefined);
    message.nonOsmoTakerFeeDistribution !== undefined &&
      (obj.nonOsmoTakerFeeDistribution = message.nonOsmoTakerFeeDistribution
        ? TakerFeeDistributionPercentage.toJSON(message.nonOsmoTakerFeeDistribution)
        : undefined);
    if (message.adminAddresses) {
      obj.adminAddresses = message.adminAddresses.map((e) => e);
    } else {
      obj.adminAddresses = [];
    }
    message.communityPoolDenomToSwapNonWhitelistedAssetsTo !== undefined &&
      (obj.communityPoolDenomToSwapNonWhitelistedAssetsTo =
        message.communityPoolDenomToSwapNonWhitelistedAssetsTo);
    if (message.reducedFeeWhitelist) {
      obj.reducedFeeWhitelist = message.reducedFeeWhitelist.map((e) => e);
    } else {
      obj.reducedFeeWhitelist = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeParams>, I>>(object: I): TakerFeeParams {
    const message = createBaseTakerFeeParams();
    message.defaultTakerFee = object.defaultTakerFee ?? "";
    if (object.osmoTakerFeeDistribution !== undefined && object.osmoTakerFeeDistribution !== null) {
      message.osmoTakerFeeDistribution = TakerFeeDistributionPercentage.fromPartial(
        object.osmoTakerFeeDistribution,
      );
    }
    if (object.nonOsmoTakerFeeDistribution !== undefined && object.nonOsmoTakerFeeDistribution !== null) {
      message.nonOsmoTakerFeeDistribution = TakerFeeDistributionPercentage.fromPartial(
        object.nonOsmoTakerFeeDistribution,
      );
    }
    message.adminAddresses = object.adminAddresses?.map((e) => e) || [];
    message.communityPoolDenomToSwapNonWhitelistedAssetsTo =
      object.communityPoolDenomToSwapNonWhitelistedAssetsTo ?? "";
    message.reducedFeeWhitelist = object.reducedFeeWhitelist?.map((e) => e) || [];
    return message;
  },
};
function createBaseTakerFeeDistributionPercentage(): TakerFeeDistributionPercentage {
  return {
    stakingRewards: "",
    communityPool: "",
  };
}
export const TakerFeeDistributionPercentage = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage",
  encode(
    message: TakerFeeDistributionPercentage,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(18).string(message.communityPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeDistributionPercentage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeDistributionPercentage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingRewards = reader.string();
          break;
        case 2:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeDistributionPercentage {
    const obj = createBaseTakerFeeDistributionPercentage();
    if (isSet(object.stakingRewards)) obj.stakingRewards = String(object.stakingRewards);
    if (isSet(object.communityPool)) obj.communityPool = String(object.communityPool);
    return obj;
  },
  toJSON(message: TakerFeeDistributionPercentage): unknown {
    const obj: any = {};
    message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeDistributionPercentage>, I>>(
    object: I,
  ): TakerFeeDistributionPercentage {
    const message = createBaseTakerFeeDistributionPercentage();
    message.stakingRewards = object.stakingRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
};
function createBaseTakerFeesTracker(): TakerFeesTracker {
  return {
    takerFeesToStakers: [],
    takerFeesToCommunityPool: [],
    heightAccountingStartsFrom: BigInt(0),
  };
}
export const TakerFeesTracker = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeesTracker",
  encode(message: TakerFeesTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.takerFeesToStakers) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.takerFeesToCommunityPool) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.heightAccountingStartsFrom !== BigInt(0)) {
      writer.uint32(24).int64(message.heightAccountingStartsFrom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeesTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeesTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeesToStakers.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.takerFeesToCommunityPool.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.heightAccountingStartsFrom = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeesTracker {
    const obj = createBaseTakerFeesTracker();
    if (Array.isArray(object?.takerFeesToStakers))
      obj.takerFeesToStakers = object.takerFeesToStakers.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.takerFeesToCommunityPool))
      obj.takerFeesToCommunityPool = object.takerFeesToCommunityPool.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.heightAccountingStartsFrom))
      obj.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
    return obj;
  },
  toJSON(message: TakerFeesTracker): unknown {
    const obj: any = {};
    if (message.takerFeesToStakers) {
      obj.takerFeesToStakers = message.takerFeesToStakers.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.takerFeesToStakers = [];
    }
    if (message.takerFeesToCommunityPool) {
      obj.takerFeesToCommunityPool = message.takerFeesToCommunityPool.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.takerFeesToCommunityPool = [];
    }
    message.heightAccountingStartsFrom !== undefined &&
      (obj.heightAccountingStartsFrom = (message.heightAccountingStartsFrom || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeesTracker>, I>>(object: I): TakerFeesTracker {
    const message = createBaseTakerFeesTracker();
    message.takerFeesToStakers = object.takerFeesToStakers?.map((e) => Coin.fromPartial(e)) || [];
    message.takerFeesToCommunityPool = object.takerFeesToCommunityPool?.map((e) => Coin.fromPartial(e)) || [];
    if (object.heightAccountingStartsFrom !== undefined && object.heightAccountingStartsFrom !== null) {
      message.heightAccountingStartsFrom = BigInt(object.heightAccountingStartsFrom.toString());
    }
    return message;
  },
};
function createBasePoolVolume(): PoolVolume {
  return {
    poolId: BigInt(0),
    poolVolume: [],
  };
}
export const PoolVolume = {
  typeUrl: "/osmosis.poolmanager.v1beta1.PoolVolume",
  encode(message: PoolVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.poolVolume) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.poolVolume.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolVolume {
    const obj = createBasePoolVolume();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (Array.isArray(object?.poolVolume))
      obj.poolVolume = object.poolVolume.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: PoolVolume): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.poolVolume) {
      obj.poolVolume = message.poolVolume.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.poolVolume = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolVolume>, I>>(object: I): PoolVolume {
    const message = createBasePoolVolume();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.poolVolume = object.poolVolume?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
