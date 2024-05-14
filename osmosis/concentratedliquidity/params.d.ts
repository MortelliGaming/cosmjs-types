import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.concentratedliquidity";
export interface Params {
    /**
     * authorized_tick_spacing is an array of uint64s that represents the tick
     * spacing values concentrated-liquidity pools can be created with. For
     * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
     * to be created with tick spacing of 1, 10, or 30.
     */
    authorizedTickSpacing: bigint[];
    authorizedSpreadFactors: string[];
    /**
     * balancer_shares_reward_discount is the rate by which incentives flowing
     * from CL to Balancer pools will be discounted to encourage LPs to migrate.
     * e.g. a rate of 0.05 means Balancer LPs get 5% less incentives than full
     * range CL LPs.
     * This field can range from (0,1]. If set to 1, it indicates that all
     * incentives stay at cl pool.
     */
    balancerSharesRewardDiscount: string;
    /**
     * authorized_quote_denoms is a list of quote denoms that can be used as
     * token1 when creating a pool. We limit the quote assets to a small set for
     * the purposes of having convenient price increments stemming from tick to
     * price conversion. These increments are in a human readable magnitude only
     * for token1 as a quote. For limit orders in the future, this will be a
     * desirable property in terms of UX as to allow users to set limit orders at
     * prices in terms of token1 (quote asset) that are easy to reason about.
     */
    authorizedQuoteDenoms: string[];
    authorizedUptimes: Duration[];
    /**
     * is_permissionless_pool_creation_enabled is a boolean that determines if
     * concentrated liquidity pools can be created via message. At launch,
     * we consider allowing only governance to create pools, and then later
     * allowing permissionless pool creation by switching this flag to true
     * with a governance proposal.
     */
    isPermissionlessPoolCreationEnabled: boolean;
    /**
     * unrestricted_pool_creator_whitelist is a list of addresses that are
     * allowed to bypass restrictions on permissionless supercharged pool
     * creation, like pool_creation_enabled, restricted quote assets, no
     * double creation of pools, etc.
     */
    unrestrictedPoolCreatorWhitelist: string[];
    hookGasLimit: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        authorizedTickSpacing?: bigint[] | undefined;
        authorizedSpreadFactors?: string[] | undefined;
        balancerSharesRewardDiscount?: string | undefined;
        authorizedQuoteDenoms?: string[] | undefined;
        authorizedUptimes?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] | undefined;
        isPermissionlessPoolCreationEnabled?: boolean | undefined;
        unrestrictedPoolCreatorWhitelist?: string[] | undefined;
        hookGasLimit?: bigint | undefined;
    } & {
        authorizedTickSpacing?: (bigint[] & bigint[] & Record<Exclude<keyof I["authorizedTickSpacing"], keyof bigint[]>, never>) | undefined;
        authorizedSpreadFactors?: (string[] & string[] & Record<Exclude<keyof I["authorizedSpreadFactors"], keyof string[]>, never>) | undefined;
        balancerSharesRewardDiscount?: string | undefined;
        authorizedQuoteDenoms?: (string[] & string[] & Record<Exclude<keyof I["authorizedQuoteDenoms"], keyof string[]>, never>) | undefined;
        authorizedUptimes?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] & ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["authorizedUptimes"][number], keyof Duration>, never>)[] & Record<Exclude<keyof I["authorizedUptimes"], keyof {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[]>, never>) | undefined;
        isPermissionlessPoolCreationEnabled?: boolean | undefined;
        unrestrictedPoolCreatorWhitelist?: (string[] & string[] & Record<Exclude<keyof I["unrestrictedPoolCreatorWhitelist"], keyof string[]>, never>) | undefined;
        hookGasLimit?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
