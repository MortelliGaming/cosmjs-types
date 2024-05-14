import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.incentives.v1";
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface Incentive {
    /** contract address of the smart contract to be incentivized */
    contract: string;
    /** allocations is a slice of denoms and percentages of rewards to be allocated */
    allocations: DecCoin[];
    /** epochs defines the number of remaining epochs for the incentive */
    epochs: number;
    /** start_time of the incentive distribution */
    startTime: Timestamp;
    /** total_gas is the cumulative gas spent by all gas meters of the incentive during the epoch */
    totalGas: bigint;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeter {
    /** contract is the hex address of the incentivized smart contract */
    contract: string;
    /** participant address that interacts with the incentive */
    participant: string;
    /** cumulative_gas spent during the epoch */
    cumulativeGas: bigint;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** contract address to be registered */
    contract: string;
    /** allocations defines the denoms and percentage of rewards to be allocated */
    allocations: DecCoin[];
    /** epochs is the number of remaining epochs for the incentive */
    epochs: number;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** contract address of the incentivized smart contract */
    contract: string;
}
export declare const Incentive: {
    typeUrl: string;
    encode(message: Incentive, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Incentive;
    fromJSON(object: any): Incentive;
    toJSON(message: Incentive): unknown;
    fromPartial<I extends {
        contract?: string | undefined;
        allocations?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        epochs?: number | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        totalGas?: bigint | undefined;
    } & {
        contract?: string | undefined;
        allocations?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["allocations"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["allocations"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        epochs?: number | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
        totalGas?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof Incentive>, never>>(object: I): Incentive;
};
export declare const GasMeter: {
    typeUrl: string;
    encode(message: GasMeter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GasMeter;
    fromJSON(object: any): GasMeter;
    toJSON(message: GasMeter): unknown;
    fromPartial<I extends {
        contract?: string | undefined;
        participant?: string | undefined;
        cumulativeGas?: bigint | undefined;
    } & {
        contract?: string | undefined;
        participant?: string | undefined;
        cumulativeGas?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof GasMeter>, never>>(object: I): GasMeter;
};
export declare const RegisterIncentiveProposal: {
    typeUrl: string;
    encode(message: RegisterIncentiveProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RegisterIncentiveProposal;
    fromJSON(object: any): RegisterIncentiveProposal;
    toJSON(message: RegisterIncentiveProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
        allocations?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        epochs?: number | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
        allocations?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["allocations"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["allocations"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        epochs?: number | undefined;
    } & Record<Exclude<keyof I, keyof RegisterIncentiveProposal>, never>>(object: I): RegisterIncentiveProposal;
};
export declare const CancelIncentiveProposal: {
    typeUrl: string;
    encode(message: CancelIncentiveProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CancelIncentiveProposal;
    fromJSON(object: any): CancelIncentiveProposal;
    toJSON(message: CancelIncentiveProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I, keyof CancelIncentiveProposal>, never>>(object: I): CancelIncentiveProposal;
};
