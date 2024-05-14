import { BalancerToConcentratedPoolLink } from "./shared";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposal {
    title: string;
    description: string;
    records: BalancerToConcentratedPoolLink[];
}
export interface PoolRecordWithCFMMLink {
    denom0: string;
    denom1: string;
    tickSpacing: bigint;
    exponentAtPriceOne: string;
    spreadFactor: string;
    balancerPoolId: bigint;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    title: string;
    description: string;
    poolRecordsWithCfmmLink: PoolRecordWithCFMMLink[];
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposal {
    title: string;
    description: string;
    poolId: bigint;
    controllerAddress: string;
}
export declare const ReplaceMigrationRecordsProposal: {
    typeUrl: string;
    encode(message: ReplaceMigrationRecordsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ReplaceMigrationRecordsProposal;
    fromJSON(object: any): ReplaceMigrationRecordsProposal;
    toJSON(message: ReplaceMigrationRecordsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        records?: {
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        records?: ({
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        }[] & ({
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        } & {
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        } & Record<Exclude<keyof I["records"][number], keyof BalancerToConcentratedPoolLink>, never>)[] & Record<Exclude<keyof I["records"], keyof {
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ReplaceMigrationRecordsProposal>, never>>(object: I): ReplaceMigrationRecordsProposal;
};
export declare const UpdateMigrationRecordsProposal: {
    typeUrl: string;
    encode(message: UpdateMigrationRecordsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateMigrationRecordsProposal;
    fromJSON(object: any): UpdateMigrationRecordsProposal;
    toJSON(message: UpdateMigrationRecordsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        records?: {
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        records?: ({
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        }[] & ({
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        } & {
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        } & Record<Exclude<keyof I["records"][number], keyof BalancerToConcentratedPoolLink>, never>)[] & Record<Exclude<keyof I["records"], keyof {
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UpdateMigrationRecordsProposal>, never>>(object: I): UpdateMigrationRecordsProposal;
};
export declare const PoolRecordWithCFMMLink: {
    typeUrl: string;
    encode(message: PoolRecordWithCFMMLink, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolRecordWithCFMMLink;
    fromJSON(object: any): PoolRecordWithCFMMLink;
    toJSON(message: PoolRecordWithCFMMLink): unknown;
    fromPartial<I extends {
        denom0?: string | undefined;
        denom1?: string | undefined;
        tickSpacing?: bigint | undefined;
        exponentAtPriceOne?: string | undefined;
        spreadFactor?: string | undefined;
        balancerPoolId?: bigint | undefined;
    } & {
        denom0?: string | undefined;
        denom1?: string | undefined;
        tickSpacing?: bigint | undefined;
        exponentAtPriceOne?: string | undefined;
        spreadFactor?: string | undefined;
        balancerPoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof PoolRecordWithCFMMLink>, never>>(object: I): PoolRecordWithCFMMLink;
};
export declare const CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal: {
    typeUrl: string;
    encode(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    fromJSON(object: any): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    toJSON(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        poolRecordsWithCfmmLink?: {
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            exponentAtPriceOne?: string | undefined;
            spreadFactor?: string | undefined;
            balancerPoolId?: bigint | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        poolRecordsWithCfmmLink?: ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            exponentAtPriceOne?: string | undefined;
            spreadFactor?: string | undefined;
            balancerPoolId?: bigint | undefined;
        }[] & ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            exponentAtPriceOne?: string | undefined;
            spreadFactor?: string | undefined;
            balancerPoolId?: bigint | undefined;
        } & {
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            exponentAtPriceOne?: string | undefined;
            spreadFactor?: string | undefined;
            balancerPoolId?: bigint | undefined;
        } & Record<Exclude<keyof I["poolRecordsWithCfmmLink"][number], keyof PoolRecordWithCFMMLink>, never>)[] & Record<Exclude<keyof I["poolRecordsWithCfmmLink"], keyof {
            denom0?: string | undefined;
            denom1?: string | undefined;
            tickSpacing?: bigint | undefined;
            exponentAtPriceOne?: string | undefined;
            spreadFactor?: string | undefined;
            balancerPoolId?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal>, never>>(object: I): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
};
export declare const SetScalingFactorControllerProposal: {
    typeUrl: string;
    encode(message: SetScalingFactorControllerProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SetScalingFactorControllerProposal;
    fromJSON(object: any): SetScalingFactorControllerProposal;
    toJSON(message: SetScalingFactorControllerProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        poolId?: bigint | undefined;
        controllerAddress?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        poolId?: bigint | undefined;
        controllerAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof SetScalingFactorControllerProposal>, never>>(object: I): SetScalingFactorControllerProposal;
};
