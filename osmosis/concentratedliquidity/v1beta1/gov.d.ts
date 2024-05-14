import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 */
export interface CreateConcentratedLiquidityPoolsProposal {
    title: string;
    description: string;
    poolRecords: PoolRecord[];
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 */
export interface TickSpacingDecreaseProposal {
    title: string;
    description: string;
    poolIdToTickSpacingRecords: PoolIdToTickSpacingRecord[];
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 */
export interface PoolIdToTickSpacingRecord {
    poolId: bigint;
    newTickSpacing: bigint;
}
export interface PoolRecord {
    denom0: string;
    denom1: string;
    tickSpacing: bigint;
    spreadFactor: string;
}
export declare const CreateConcentratedLiquidityPoolsProposal: {
    typeUrl: string;
    encode(message: CreateConcentratedLiquidityPoolsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreateConcentratedLiquidityPoolsProposal;
    fromJSON(object: any): CreateConcentratedLiquidityPoolsProposal;
    toJSON(message: CreateConcentratedLiquidityPoolsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        poolRecords?: {
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            spreadFactor?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        poolRecords?: ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            spreadFactor?: string | undefined;
        }[] & ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            spreadFactor?: string | undefined;
        } & {
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            spreadFactor?: string | undefined;
        } & Record<Exclude<keyof I["poolRecords"][number], keyof PoolRecord>, never>)[] & Record<Exclude<keyof I["poolRecords"], keyof {
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            spreadFactor?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CreateConcentratedLiquidityPoolsProposal>, never>>(object: I): CreateConcentratedLiquidityPoolsProposal;
};
export declare const TickSpacingDecreaseProposal: {
    typeUrl: string;
    encode(message: TickSpacingDecreaseProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickSpacingDecreaseProposal;
    fromJSON(object: any): TickSpacingDecreaseProposal;
    toJSON(message: TickSpacingDecreaseProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        poolIdToTickSpacingRecords?: {
            poolId?: bigint | undefined;
            newTickSpacing?: bigint | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        poolIdToTickSpacingRecords?: ({
            poolId?: bigint | undefined;
            newTickSpacing?: bigint | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            newTickSpacing?: bigint | undefined;
        } & {
            poolId?: bigint | undefined;
            newTickSpacing?: bigint | undefined;
        } & Record<Exclude<keyof I["poolIdToTickSpacingRecords"][number], keyof PoolIdToTickSpacingRecord>, never>)[] & Record<Exclude<keyof I["poolIdToTickSpacingRecords"], keyof {
            poolId?: bigint | undefined;
            newTickSpacing?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TickSpacingDecreaseProposal>, never>>(object: I): TickSpacingDecreaseProposal;
};
export declare const PoolIdToTickSpacingRecord: {
    typeUrl: string;
    encode(message: PoolIdToTickSpacingRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolIdToTickSpacingRecord;
    fromJSON(object: any): PoolIdToTickSpacingRecord;
    toJSON(message: PoolIdToTickSpacingRecord): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        newTickSpacing?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
        newTickSpacing?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof PoolIdToTickSpacingRecord>, never>>(object: I): PoolIdToTickSpacingRecord;
};
export declare const PoolRecord: {
    typeUrl: string;
    encode(message: PoolRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolRecord;
    fromJSON(object: any): PoolRecord;
    toJSON(message: PoolRecord): unknown;
    fromPartial<I extends {
        denom0?: string | undefined;
        denom1?: string | undefined;
        tickSpacing?: bigint | undefined;
        spreadFactor?: string | undefined;
    } & {
        denom0?: string | undefined;
        denom1?: string | undefined;
        tickSpacing?: bigint | undefined;
        spreadFactor?: string | undefined;
    } & Record<Exclude<keyof I, keyof PoolRecord>, never>>(object: I): PoolRecord;
};
