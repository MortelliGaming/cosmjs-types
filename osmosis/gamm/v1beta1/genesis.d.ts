import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { MigrationRecords } from "./shared";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.gamm.v1beta1";
/** Params holds parameters for the incentives module */
export interface Params {
    poolCreationFee: Coin[];
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
    pools: Any[];
    /** will be renamed to next_pool_id in an upcoming version */
    nextPoolNumber: bigint;
    params: Params;
    migrationRecords?: MigrationRecords;
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
    } & Record<Exclude<keyof I, "poolCreationFee">, never>>(object: I): Params;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        nextPoolNumber?: bigint | undefined;
        params?: {
            poolCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        migrationRecords?: {
            balancerToConcentratedPoolLinks?: {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        pools?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        nextPoolNumber?: bigint | undefined;
        params?: ({
            poolCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
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
        } & Record<Exclude<keyof I["params"], "poolCreationFee">, never>) | undefined;
        migrationRecords?: ({
            balancerToConcentratedPoolLinks?: {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[] | undefined;
        } & {
            balancerToConcentratedPoolLinks?: ({
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[] & ({
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            } & {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            } & Record<Exclude<keyof I["migrationRecords"]["balancerToConcentratedPoolLinks"][number], keyof import("./shared").BalancerToConcentratedPoolLink>, never>)[] & Record<Exclude<keyof I["migrationRecords"]["balancerToConcentratedPoolLinks"], keyof {
                balancerPoolId?: bigint | undefined;
                clPoolId?: bigint | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["migrationRecords"], "balancerToConcentratedPoolLinks">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
