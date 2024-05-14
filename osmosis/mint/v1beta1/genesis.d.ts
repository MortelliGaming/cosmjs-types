import { Minter, Params } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.mint.v1beta1";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is an abstraction for holding current rewards information. */
    minter: Minter;
    /** params defines all the parameters of the mint module. */
    params: Params;
    /**
     * reduction_started_epoch is the first epoch in which the reduction of mint
     * begins.
     */
    reductionStartedEpoch: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        minter?: {
            epochProvisions?: string | undefined;
        } | undefined;
        params?: {
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
        } | undefined;
        reductionStartedEpoch?: bigint | undefined;
    } & {
        minter?: ({
            epochProvisions?: string | undefined;
        } & {
            epochProvisions?: string | undefined;
        } & Record<Exclude<keyof I["minter"], "epochProvisions">, never>) | undefined;
        params?: ({
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
            } & Record<Exclude<keyof I["params"]["distributionProportions"], keyof import("./mint").DistributionProportions>, never>) | undefined;
            weightedDeveloperRewardsReceivers?: ({
                address?: string | undefined;
                weight?: string | undefined;
            }[] & ({
                address?: string | undefined;
                weight?: string | undefined;
            } & {
                address?: string | undefined;
                weight?: string | undefined;
            } & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"][number], keyof import("./mint").WeightedAddress>, never>)[] & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"], keyof {
                address?: string | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
            mintingRewardsDistributionStartEpoch?: bigint | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        reductionStartedEpoch?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
