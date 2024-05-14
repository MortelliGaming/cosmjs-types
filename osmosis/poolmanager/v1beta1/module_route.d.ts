import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.poolmanager.v1beta1";
/** PoolType is an enumeration of all supported pool types. */
export declare enum PoolType {
    /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
    Balancer = 0,
    /**
     * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
     * in x/gamm.
     */
    Stableswap = 1,
    /**
     * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
     * defined in x/concentrated-liquidity.
     */
    Concentrated = 2,
    /**
     * CosmWasm - CosmWasm is the pool model specific to CosmWasm. It is defined in
     * x/cosmwasmpool.
     */
    CosmWasm = 3,
    UNRECOGNIZED = -1
}
export declare function poolTypeFromJSON(object: any): PoolType;
export declare function poolTypeToJSON(object: PoolType): string;
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
    /** pool_type specifies the type of the pool */
    poolType: PoolType;
    poolId?: bigint;
}
export declare const ModuleRoute: {
    typeUrl: string;
    encode(message: ModuleRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleRoute;
    fromJSON(object: any): ModuleRoute;
    toJSON(message: ModuleRoute): unknown;
    fromPartial<I extends {
        poolType?: PoolType | undefined;
        poolId?: bigint | undefined;
    } & {
        poolType?: PoolType | undefined;
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof ModuleRoute>, never>>(object: I): ModuleRoute;
};
