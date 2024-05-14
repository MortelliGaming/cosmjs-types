import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.mint.v1beta1";
/** Minter represents the minting state. */
export interface Minter {
    /** epoch_provisions represent rewards for the current epoch. */
    epochProvisions: string;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddress {
    address: string;
    weight: string;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportions {
    /**
     * staking defines the proportion of the minted mint_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * pool_incentives defines the proportion of the minted mint_denom that is
     * to be allocated as pool incentives.
     */
    poolIncentives: string;
    /**
     * developer_rewards defines the proportion of the minted mint_denom that is
     * to be allocated to developer rewards address.
     */
    developerRewards: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool.
     */
    communityPool: string;
}
/** Params holds parameters for the x/mint module. */
export interface Params {
    /** mint_denom is the denom of the coin to mint. */
    mintDenom: string;
    /** genesis_epoch_provisions epoch provisions from the first epoch. */
    genesisEpochProvisions: string;
    /** epoch_identifier mint epoch identifier e.g. (day, week). */
    epochIdentifier: string;
    /**
     * reduction_period_in_epochs the number of epochs it takes
     * to reduce the rewards.
     */
    reductionPeriodInEpochs: bigint;
    /**
     * reduction_factor is the reduction multiplier to execute
     * at the end of each period set by reduction_period_in_epochs.
     */
    reductionFactor: string;
    /**
     * distribution_proportions defines the distribution proportions of the minted
     * denom. In other words, defines which stakeholders will receive the minted
     * denoms and how much.
     */
    distributionProportions: DistributionProportions;
    /**
     * weighted_developer_rewards_receivers is the address to receive developer
     * rewards with weights assignedt to each address. The final amount that each
     * address receives is: epoch_provisions *
     * distribution_proportions.developer_rewards * Address's Weight.
     */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
    /**
     * minting_rewards_distribution_start_epoch start epoch to distribute minting
     * rewards
     */
    mintingRewardsDistributionStartEpoch: bigint;
}
export declare const Minter: {
    typeUrl: string;
    encode(message: Minter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial<I extends {
        epochProvisions?: string | undefined;
    } & {
        epochProvisions?: string | undefined;
    } & Record<Exclude<keyof I, "epochProvisions">, never>>(object: I): Minter;
};
export declare const WeightedAddress: {
    typeUrl: string;
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress;
    fromJSON(object: any): WeightedAddress;
    toJSON(message: WeightedAddress): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        weight?: string | undefined;
    } & {
        address?: string | undefined;
        weight?: string | undefined;
    } & Record<Exclude<keyof I, keyof WeightedAddress>, never>>(object: I): WeightedAddress;
};
export declare const DistributionProportions: {
    typeUrl: string;
    encode(message: DistributionProportions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions;
    fromJSON(object: any): DistributionProportions;
    toJSON(message: DistributionProportions): unknown;
    fromPartial<I extends {
        staking?: string | undefined;
        poolIncentives?: string | undefined;
        developerRewards?: string | undefined;
        communityPool?: string | undefined;
    } & {
        staking?: string | undefined;
        poolIncentives?: string | undefined;
        developerRewards?: string | undefined;
        communityPool?: string | undefined;
    } & Record<Exclude<keyof I, keyof DistributionProportions>, never>>(object: I): DistributionProportions;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        mintDenom?: string | undefined;
        genesisEpochProvisions?: string | undefined;
        epochIdentifier?: string | undefined;
        reductionPeriodInEpochs?: bigint | undefined;
        reductionFactor?: string | undefined;
        distributionProportions?: {
            staking?: string | undefined;
            poolIncentives?: string | undefined;
            developerRewards?: string | undefined;
            communityPool?: string | undefined;
        } | undefined;
        weightedDeveloperRewardsReceivers?: {
            address?: string | undefined;
            weight?: string | undefined;
        }[] | undefined;
        mintingRewardsDistributionStartEpoch?: bigint | undefined;
    } & {
        mintDenom?: string | undefined;
        genesisEpochProvisions?: string | undefined;
        epochIdentifier?: string | undefined;
        reductionPeriodInEpochs?: bigint | undefined;
        reductionFactor?: string | undefined;
        distributionProportions?: ({
            staking?: string | undefined;
            poolIncentives?: string | undefined;
            developerRewards?: string | undefined;
            communityPool?: string | undefined;
        } & {
            staking?: string | undefined;
            poolIncentives?: string | undefined;
            developerRewards?: string | undefined;
            communityPool?: string | undefined;
        } & Record<Exclude<keyof I["distributionProportions"], keyof DistributionProportions>, never>) | undefined;
        weightedDeveloperRewardsReceivers?: ({
            address?: string | undefined;
            weight?: string | undefined;
        }[] & ({
            address?: string | undefined;
            weight?: string | undefined;
        } & {
            address?: string | undefined;
            weight?: string | undefined;
        } & Record<Exclude<keyof I["weightedDeveloperRewardsReceivers"][number], keyof WeightedAddress>, never>)[] & Record<Exclude<keyof I["weightedDeveloperRewardsReceivers"], keyof {
            address?: string | undefined;
            weight?: string | undefined;
        }[]>, never>) | undefined;
        mintingRewardsDistributionStartEpoch?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
