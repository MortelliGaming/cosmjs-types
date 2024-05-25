import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "mineplex.mineplexchain.treasury";
export interface MsgMint {
    creator: string;
    amount: string;
}
export interface MsgMintResponse {
}
export interface MsgBurn {
    creator: string;
    amount: string;
}
export interface MsgBurnResponse {
}
export interface MsgChangeOwner {
    creator: string;
    newOwner: string;
}
export interface MsgChangeOwnerResponse {
}
export declare const MsgMint: {
    typeUrl: string;
    encode(message: MsgMint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgMint>, never>>(object: I): MsgMint;
};
export declare const MsgMintResponse: {
    typeUrl: string;
    encode(_: MsgMintResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgMintResponse;
};
export declare const MsgBurn: {
    typeUrl: string;
    encode(message: MsgBurn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgBurn>, never>>(object: I): MsgBurn;
};
export declare const MsgBurnResponse: {
    typeUrl: string;
    encode(_: MsgBurnResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgBurnResponse;
};
export declare const MsgChangeOwner: {
    typeUrl: string;
    encode(message: MsgChangeOwner, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeOwner;
    fromJSON(object: any): MsgChangeOwner;
    toJSON(message: MsgChangeOwner): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        newOwner?: string | undefined;
    } & {
        creator?: string | undefined;
        newOwner?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChangeOwner>, never>>(object: I): MsgChangeOwner;
};
export declare const MsgChangeOwnerResponse: {
    typeUrl: string;
    encode(_: MsgChangeOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeOwnerResponse;
    fromJSON(_: any): MsgChangeOwnerResponse;
    toJSON(_: MsgChangeOwnerResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgChangeOwnerResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    Burn(request: MsgBurn): Promise<MsgBurnResponse>;
    ChangeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    Burn(request: MsgBurn): Promise<MsgBurnResponse>;
    ChangeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse>;
}
