import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { Rpc } from "../../../../../helpers";
export declare const protobufPackage = "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
    sender: string;
    denom0: string;
    denom1: string;
    tickSpacing: bigint;
    spreadFactor: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
    poolId: bigint;
}
export declare const MsgCreateConcentratedPool: {
    typeUrl: string;
    encode(message: MsgCreateConcentratedPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPool;
    fromJSON(object: any): MsgCreateConcentratedPool;
    toJSON(message: MsgCreateConcentratedPool): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom0?: string | undefined;
        denom1?: string | undefined;
        tickSpacing?: bigint | undefined;
        spreadFactor?: string | undefined;
    } & {
        sender?: string | undefined;
        denom0?: string | undefined;
        denom1?: string | undefined;
        tickSpacing?: bigint | undefined;
        spreadFactor?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateConcentratedPool>, never>>(object: I): MsgCreateConcentratedPool;
};
export declare const MsgCreateConcentratedPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateConcentratedPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse;
    fromJSON(object: any): MsgCreateConcentratedPoolResponse;
    toJSON(message: MsgCreateConcentratedPoolResponse): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): MsgCreateConcentratedPoolResponse;
};
export interface Msg {
    CreateConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateConcentratedPool(request: MsgCreateConcentratedPool): Promise<MsgCreateConcentratedPoolResponse>;
}
