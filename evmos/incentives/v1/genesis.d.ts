import { Incentive, GasMeter } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.incentives.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the incentives module parameters */
    params: Params;
    /** incentives is a slice of active incentives */
    incentives: Incentive[];
    /** gas_meters is a slice of active Gasmeters */
    gasMeters: GasMeter[];
}
/** Params defines the incentives module params */
export interface Params {
    /** enable_incentives is the parameter to enable incentives */
    enableIncentives: boolean;
    /** allocation_limit is the maximum percentage an incentive can allocate per denomination */
    allocationLimit: string;
    /** incentives_epoch_identifier for the epochs module hooks */
    incentivesEpochIdentifier: string;
    /** reward_scaler is the scaling factor for capping rewards */
    rewardScaler: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            enableIncentives?: boolean | undefined;
            allocationLimit?: string | undefined;
            incentivesEpochIdentifier?: string | undefined;
            rewardScaler?: string | undefined;
        } | undefined;
        incentives?: {
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
        }[] | undefined;
        gasMeters?: {
            contract?: string | undefined;
            participant?: string | undefined;
            cumulativeGas?: bigint | undefined;
        }[] | undefined;
    } & {
        params?: ({
            enableIncentives?: boolean | undefined;
            allocationLimit?: string | undefined;
            incentivesEpochIdentifier?: string | undefined;
            rewardScaler?: string | undefined;
        } & {
            enableIncentives?: boolean | undefined;
            allocationLimit?: string | undefined;
            incentivesEpochIdentifier?: string | undefined;
            rewardScaler?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        incentives?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["incentives"][number]["allocations"][number], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>)[] & Record<Exclude<keyof I["incentives"][number]["allocations"], keyof {
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
            } & Record<Exclude<keyof I["incentives"][number]["startTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            totalGas?: bigint | undefined;
        } & Record<Exclude<keyof I["incentives"][number], keyof Incentive>, never>)[] & Record<Exclude<keyof I["incentives"], keyof {
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
        }[]>, never>) | undefined;
        gasMeters?: ({
            contract?: string | undefined;
            participant?: string | undefined;
            cumulativeGas?: bigint | undefined;
        }[] & ({
            contract?: string | undefined;
            participant?: string | undefined;
            cumulativeGas?: bigint | undefined;
        } & {
            contract?: string | undefined;
            participant?: string | undefined;
            cumulativeGas?: bigint | undefined;
        } & Record<Exclude<keyof I["gasMeters"][number], keyof GasMeter>, never>)[] & Record<Exclude<keyof I["gasMeters"], keyof {
            contract?: string | undefined;
            participant?: string | undefined;
            cumulativeGas?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        enableIncentives?: boolean | undefined;
        allocationLimit?: string | undefined;
        incentivesEpochIdentifier?: string | undefined;
        rewardScaler?: string | undefined;
    } & {
        enableIncentives?: boolean | undefined;
        allocationLimit?: string | undefined;
        incentivesEpochIdentifier?: string | undefined;
        rewardScaler?: string | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
