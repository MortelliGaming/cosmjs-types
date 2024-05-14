import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/**
 * CosmWasmPool represents the data serialized into state for each CW pool.
 *
 * Note: CW Pool has 2 pool models:
 * - CosmWasmPool which is a proto-generated store model used for serialization
 * into state.
 * - Pool struct that encapsulates the CosmWasmPool and wasmKeeper for calling
 * the contract.
 *
 * CosmWasmPool implements the poolmanager.PoolI interface but it panics on all
 * methods. The reason is that access to wasmKeeper is required to call the
 * contract.
 *
 * Instead, all interactions and poolmanager.PoolI methods are to be performed
 * on the Pool struct. The reason why we cannot have a Pool struct only is
 * because it cannot be serialized into state due to having a non-serializable
 * wasmKeeper field.
 */
export interface CosmWasmPool {
    contractAddress: string;
    poolId: bigint;
    codeId: bigint;
    instantiateMsg: Uint8Array;
}
export declare const CosmWasmPool: {
    typeUrl: string;
    encode(message: CosmWasmPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CosmWasmPool;
    fromJSON(object: any): CosmWasmPool;
    toJSON(message: CosmWasmPool): unknown;
    fromPartial<I extends {
        contractAddress?: string | undefined;
        poolId?: bigint | undefined;
        codeId?: bigint | undefined;
        instantiateMsg?: Uint8Array | undefined;
    } & {
        contractAddress?: string | undefined;
        poolId?: bigint | undefined;
        codeId?: bigint | undefined;
        instantiateMsg?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CosmWasmPool>, never>>(object: I): CosmWasmPool;
};
