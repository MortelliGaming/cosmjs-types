import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPool {
    codeId: bigint;
    instantiateMsg: Uint8Array;
    sender: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponse {
    poolId: bigint;
}
export declare const MsgCreateCosmWasmPool: {
    typeUrl: string;
    encode(message: MsgCreateCosmWasmPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCosmWasmPool;
    fromJSON(object: any): MsgCreateCosmWasmPool;
    toJSON(message: MsgCreateCosmWasmPool): unknown;
    fromPartial<I extends {
        codeId?: bigint | undefined;
        instantiateMsg?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        codeId?: bigint | undefined;
        instantiateMsg?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateCosmWasmPool>, never>>(object: I): MsgCreateCosmWasmPool;
};
export declare const MsgCreateCosmWasmPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateCosmWasmPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCosmWasmPoolResponse;
    fromJSON(object: any): MsgCreateCosmWasmPoolResponse;
    toJSON(message: MsgCreateCosmWasmPoolResponse): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): MsgCreateCosmWasmPoolResponse;
};
