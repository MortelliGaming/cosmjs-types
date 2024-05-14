import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ModuleRoute } from "./module_route";
import { DenomPairTakerFee } from "./tx";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.poolmanager.v1beta1";
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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        poolCreationFee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        takerFeeParams?: {
            defaultTakerFee?: string | undefined;
            osmoTakerFeeDistribution?: {
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            nonOsmoTakerFeeDistribution?: {
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            adminAddresses?: string[] | undefined;
            communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
            reducedFeeWhitelist?: string[] | undefined;
        } | undefined;
        authorizedQuoteDenoms?: string[] | undefined;
    } & {
        poolCreationFee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["poolCreationFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["poolCreationFee"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        takerFeeParams?: ({
            defaultTakerFee?: string | undefined;
            osmoTakerFeeDistribution?: {
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            nonOsmoTakerFeeDistribution?: {
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            adminAddresses?: string[] | undefined;
            communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
            reducedFeeWhitelist?: string[] | undefined;
        } & {
            defaultTakerFee?: string | undefined;
            osmoTakerFeeDistribution?: ({
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } & {
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } & Record<Exclude<keyof I["takerFeeParams"]["osmoTakerFeeDistribution"], keyof TakerFeeDistributionPercentage>, never>) | undefined;
            nonOsmoTakerFeeDistribution?: ({
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } & {
                stakingRewards?: string | undefined;
                communityPool?: string | undefined;
            } & Record<Exclude<keyof I["takerFeeParams"]["nonOsmoTakerFeeDistribution"], keyof TakerFeeDistributionPercentage>, never>) | undefined;
            adminAddresses?: (string[] & string[] & Record<Exclude<keyof I["takerFeeParams"]["adminAddresses"], keyof string[]>, never>) | undefined;
            communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
            reducedFeeWhitelist?: (string[] & string[] & Record<Exclude<keyof I["takerFeeParams"]["reducedFeeWhitelist"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["takerFeeParams"], keyof TakerFeeParams>, never>) | undefined;
        authorizedQuoteDenoms?: (string[] & string[] & Record<Exclude<keyof I["authorizedQuoteDenoms"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        nextPoolId?: bigint | undefined;
        params?: {
            poolCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            takerFeeParams?: {
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                nonOsmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                adminAddresses?: string[] | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: string[] | undefined;
            } | undefined;
            authorizedQuoteDenoms?: string[] | undefined;
        } | undefined;
        poolRoutes?: {
            poolType?: import("./module_route").PoolType | undefined;
            poolId?: bigint | undefined;
        }[] | undefined;
        takerFeesTracker?: {
            takerFeesToStakers?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            takerFeesToCommunityPool?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            heightAccountingStartsFrom?: bigint | undefined;
        } | undefined;
        poolVolumes?: {
            poolId?: bigint | undefined;
            poolVolume?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        denomPairTakerFeeStore?: {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[] | undefined;
    } & {
        nextPoolId?: bigint | undefined;
        params?: ({
            poolCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            takerFeeParams?: {
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                nonOsmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                adminAddresses?: string[] | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: string[] | undefined;
            } | undefined;
            authorizedQuoteDenoms?: string[] | undefined;
        } & {
            poolCreationFee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["poolCreationFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["params"]["poolCreationFee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            takerFeeParams?: ({
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                nonOsmoTakerFeeDistribution?: {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } | undefined;
                adminAddresses?: string[] | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: string[] | undefined;
            } & {
                defaultTakerFee?: string | undefined;
                osmoTakerFeeDistribution?: ({
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & Record<Exclude<keyof I["params"]["takerFeeParams"]["osmoTakerFeeDistribution"], keyof TakerFeeDistributionPercentage>, never>) | undefined;
                nonOsmoTakerFeeDistribution?: ({
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & {
                    stakingRewards?: string | undefined;
                    communityPool?: string | undefined;
                } & Record<Exclude<keyof I["params"]["takerFeeParams"]["nonOsmoTakerFeeDistribution"], keyof TakerFeeDistributionPercentage>, never>) | undefined;
                adminAddresses?: (string[] & string[] & Record<Exclude<keyof I["params"]["takerFeeParams"]["adminAddresses"], keyof string[]>, never>) | undefined;
                communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
                reducedFeeWhitelist?: (string[] & string[] & Record<Exclude<keyof I["params"]["takerFeeParams"]["reducedFeeWhitelist"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["takerFeeParams"], keyof TakerFeeParams>, never>) | undefined;
            authorizedQuoteDenoms?: (string[] & string[] & Record<Exclude<keyof I["params"]["authorizedQuoteDenoms"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        poolRoutes?: ({
            poolType?: import("./module_route").PoolType | undefined;
            poolId?: bigint | undefined;
        }[] & ({
            poolType?: import("./module_route").PoolType | undefined;
            poolId?: bigint | undefined;
        } & {
            poolType?: import("./module_route").PoolType | undefined;
            poolId?: bigint | undefined;
        } & Record<Exclude<keyof I["poolRoutes"][number], keyof ModuleRoute>, never>)[] & Record<Exclude<keyof I["poolRoutes"], keyof {
            poolType?: import("./module_route").PoolType | undefined;
            poolId?: bigint | undefined;
        }[]>, never>) | undefined;
        takerFeesTracker?: ({
            takerFeesToStakers?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            takerFeesToCommunityPool?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            heightAccountingStartsFrom?: bigint | undefined;
        } & {
            takerFeesToStakers?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToStakers"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToStakers"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            takerFeesToCommunityPool?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToCommunityPool"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToCommunityPool"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            heightAccountingStartsFrom?: bigint | undefined;
        } & Record<Exclude<keyof I["takerFeesTracker"], keyof TakerFeesTracker>, never>) | undefined;
        poolVolumes?: ({
            poolId?: bigint | undefined;
            poolVolume?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            poolVolume?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            poolId?: bigint | undefined;
            poolVolume?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["poolVolumes"][number]["poolVolume"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["poolVolumes"][number]["poolVolume"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["poolVolumes"][number], keyof PoolVolume>, never>)[] & Record<Exclude<keyof I["poolVolumes"], keyof {
            poolId?: bigint | undefined;
            poolVolume?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        denomPairTakerFeeStore?: ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[] & ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        } & {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        } & Record<Exclude<keyof I["denomPairTakerFeeStore"][number], keyof DenomPairTakerFee>, never>)[] & Record<Exclude<keyof I["denomPairTakerFeeStore"], keyof {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const TakerFeeParams: {
    typeUrl: string;
    encode(message: TakerFeeParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeParams;
    fromJSON(object: any): TakerFeeParams;
    toJSON(message: TakerFeeParams): unknown;
    fromPartial<I extends {
        defaultTakerFee?: string | undefined;
        osmoTakerFeeDistribution?: {
            stakingRewards?: string | undefined;
            communityPool?: string | undefined;
        } | undefined;
        nonOsmoTakerFeeDistribution?: {
            stakingRewards?: string | undefined;
            communityPool?: string | undefined;
        } | undefined;
        adminAddresses?: string[] | undefined;
        communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
        reducedFeeWhitelist?: string[] | undefined;
    } & {
        defaultTakerFee?: string | undefined;
        osmoTakerFeeDistribution?: ({
            stakingRewards?: string | undefined;
            communityPool?: string | undefined;
        } & {
            stakingRewards?: string | undefined;
            communityPool?: string | undefined;
        } & Record<Exclude<keyof I["osmoTakerFeeDistribution"], keyof TakerFeeDistributionPercentage>, never>) | undefined;
        nonOsmoTakerFeeDistribution?: ({
            stakingRewards?: string | undefined;
            communityPool?: string | undefined;
        } & {
            stakingRewards?: string | undefined;
            communityPool?: string | undefined;
        } & Record<Exclude<keyof I["nonOsmoTakerFeeDistribution"], keyof TakerFeeDistributionPercentage>, never>) | undefined;
        adminAddresses?: (string[] & string[] & Record<Exclude<keyof I["adminAddresses"], keyof string[]>, never>) | undefined;
        communityPoolDenomToSwapNonWhitelistedAssetsTo?: string | undefined;
        reducedFeeWhitelist?: (string[] & string[] & Record<Exclude<keyof I["reducedFeeWhitelist"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TakerFeeParams>, never>>(object: I): TakerFeeParams;
};
export declare const TakerFeeDistributionPercentage: {
    typeUrl: string;
    encode(message: TakerFeeDistributionPercentage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeDistributionPercentage;
    fromJSON(object: any): TakerFeeDistributionPercentage;
    toJSON(message: TakerFeeDistributionPercentage): unknown;
    fromPartial<I extends {
        stakingRewards?: string | undefined;
        communityPool?: string | undefined;
    } & {
        stakingRewards?: string | undefined;
        communityPool?: string | undefined;
    } & Record<Exclude<keyof I, keyof TakerFeeDistributionPercentage>, never>>(object: I): TakerFeeDistributionPercentage;
};
export declare const TakerFeesTracker: {
    typeUrl: string;
    encode(message: TakerFeesTracker, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TakerFeesTracker;
    fromJSON(object: any): TakerFeesTracker;
    toJSON(message: TakerFeesTracker): unknown;
    fromPartial<I extends {
        takerFeesToStakers?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        takerFeesToCommunityPool?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        heightAccountingStartsFrom?: bigint | undefined;
    } & {
        takerFeesToStakers?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["takerFeesToStakers"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["takerFeesToStakers"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        takerFeesToCommunityPool?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["takerFeesToCommunityPool"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["takerFeesToCommunityPool"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        heightAccountingStartsFrom?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof TakerFeesTracker>, never>>(object: I): TakerFeesTracker;
};
export declare const PoolVolume: {
    typeUrl: string;
    encode(message: PoolVolume, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolVolume;
    fromJSON(object: any): PoolVolume;
    toJSON(message: PoolVolume): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        poolVolume?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        poolId?: bigint | undefined;
        poolVolume?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["poolVolume"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["poolVolume"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PoolVolume>, never>>(object: I): PoolVolume;
};
