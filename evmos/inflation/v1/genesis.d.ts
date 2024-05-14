import { ExponentialCalculation, InflationDistribution } from "./inflation";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.inflation.v1";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** period is the amount of past periods, based on the epochs per period param */
    period: bigint;
    /** epoch_identifier for inflation */
    epochIdentifier: string;
    /** epochs_per_period is the number of epochs after which inflation is recalculated */
    epochsPerPeriod: bigint;
    /** skipped_epochs is the number of epochs that have passed while inflation is disabled */
    skippedEpochs: bigint;
}
/** Params holds parameters for the inflation module. */
export interface Params {
    /** mint_denom specifies the type of coin to mint */
    mintDenom: string;
    /** exponential_calculation takes in the variables to calculate exponential inflation */
    exponentialCalculation: ExponentialCalculation;
    /** inflation_distribution of the minted denom */
    inflationDistribution: InflationDistribution;
    /** enable_inflation is the parameter that enables inflation and halts increasing the skipped_epochs */
    enableInflation: boolean;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            mintDenom?: string | undefined;
            exponentialCalculation?: {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } | undefined;
            inflationDistribution?: {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            enableInflation?: boolean | undefined;
        } | undefined;
        period?: bigint | undefined;
        epochIdentifier?: string | undefined;
        epochsPerPeriod?: bigint | undefined;
        skippedEpochs?: bigint | undefined;
    } & {
        params?: ({
            mintDenom?: string | undefined;
            exponentialCalculation?: {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } | undefined;
            inflationDistribution?: {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            enableInflation?: boolean | undefined;
        } & {
            mintDenom?: string | undefined;
            exponentialCalculation?: ({
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
            } & Record<Exclude<keyof I["params"]["exponentialCalculation"], keyof ExponentialCalculation>, never>) | undefined;
            inflationDistribution?: ({
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } & {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } & Record<Exclude<keyof I["params"]["inflationDistribution"], keyof InflationDistribution>, never>) | undefined;
            enableInflation?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        period?: bigint | undefined;
        epochIdentifier?: string | undefined;
        epochsPerPeriod?: bigint | undefined;
        skippedEpochs?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        mintDenom?: string | undefined;
        exponentialCalculation?: {
            a?: string | undefined;
            r?: string | undefined;
            c?: string | undefined;
            bondingTarget?: string | undefined;
            maxVariance?: string | undefined;
        } | undefined;
        inflationDistribution?: {
            stakingRewards?: string | undefined;
            usageIncentives?: string | undefined;
            communityPool?: string | undefined;
        } | undefined;
        enableInflation?: boolean | undefined;
    } & {
        mintDenom?: string | undefined;
        exponentialCalculation?: ({
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
        } & Record<Exclude<keyof I["exponentialCalculation"], keyof ExponentialCalculation>, never>) | undefined;
        inflationDistribution?: ({
            stakingRewards?: string | undefined;
            usageIncentives?: string | undefined;
            communityPool?: string | undefined;
        } & {
            stakingRewards?: string | undefined;
            usageIncentives?: string | undefined;
            communityPool?: string | undefined;
        } & Record<Exclude<keyof I["inflationDistribution"], keyof InflationDistribution>, never>) | undefined;
        enableInflation?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
