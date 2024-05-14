import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.inflation.v1";
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
    /**
     * staking_rewards defines the proportion of the minted minted_denom that is
     * to be allocated as staking rewards
     */
    stakingRewards: string;
    /**
     * Deprecated: usage_incentives defines the proportion of the minted minted_denom that is
     * to be allocated to the incentives module address
     */
    /** @deprecated */
    usageIncentives: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is to
     * be allocated to the community pool
     */
    communityPool: string;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
    /** a defines the initial value */
    a: string;
    /** r defines the reduction factor */
    r: string;
    /** c defines the parameter for long term inflation */
    c: string;
    /** bonding_target */
    bondingTarget: string;
    /** max_variance */
    maxVariance: string;
}
export declare const InflationDistribution: {
    typeUrl: string;
    encode(message: InflationDistribution, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InflationDistribution;
    fromJSON(object: any): InflationDistribution;
    toJSON(message: InflationDistribution): unknown;
    fromPartial<I extends {
        stakingRewards?: string | undefined;
        usageIncentives?: string | undefined;
        communityPool?: string | undefined;
    } & {
        stakingRewards?: string | undefined;
        usageIncentives?: string | undefined;
        communityPool?: string | undefined;
    } & Record<Exclude<keyof I, keyof InflationDistribution>, never>>(object: I): InflationDistribution;
};
export declare const ExponentialCalculation: {
    typeUrl: string;
    encode(message: ExponentialCalculation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExponentialCalculation;
    fromJSON(object: any): ExponentialCalculation;
    toJSON(message: ExponentialCalculation): unknown;
    fromPartial<I extends {
        a?: string | undefined;
        r?: string | undefined;
        c?: string | undefined;
        bondingTarget?: string | undefined;
        maxVariance?: string | undefined;
    } & {
        a?: string | undefined;
        r?: string | undefined;
        c?: string | undefined;
        bondingTarget?: string | undefined;
        maxVariance?: string | undefined;
    } & Record<Exclude<keyof I, keyof ExponentialCalculation>, never>>(object: I): ExponentialCalculation;
};
