import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 */
export interface MigrationRecords {
    balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 */
export interface BalancerToConcentratedPoolLink {
    balancerPoolId: bigint;
    clPoolId: bigint;
}
export declare const MigrationRecords: {
    typeUrl: string;
    encode(message: MigrationRecords, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MigrationRecords;
    fromJSON(object: any): MigrationRecords;
    toJSON(message: MigrationRecords): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["balancerToConcentratedPoolLinks"][number], keyof BalancerToConcentratedPoolLink>, never>)[] & Record<Exclude<keyof I["balancerToConcentratedPoolLinks"], keyof {
            balancerPoolId?: bigint | undefined;
            clPoolId?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "balancerToConcentratedPoolLinks">, never>>(object: I): MigrationRecords;
};
export declare const BalancerToConcentratedPoolLink: {
    typeUrl: string;
    encode(message: BalancerToConcentratedPoolLink, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BalancerToConcentratedPoolLink;
    fromJSON(object: any): BalancerToConcentratedPoolLink;
    toJSON(message: BalancerToConcentratedPoolLink): unknown;
    fromPartial<I extends {
        balancerPoolId?: bigint | undefined;
        clPoolId?: bigint | undefined;
    } & {
        balancerPoolId?: bigint | undefined;
        clPoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof BalancerToConcentratedPoolLink>, never>>(object: I): BalancerToConcentratedPoolLink;
};
