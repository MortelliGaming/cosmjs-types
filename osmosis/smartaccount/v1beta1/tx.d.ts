import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.smartaccount.v1beta1";
/** MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type. */
export interface MsgAddAuthenticator {
    sender: string;
    type: string;
    data: Uint8Array;
}
/** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
export interface MsgAddAuthenticatorResponse {
    /** MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type. */
    success: boolean;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 */
export interface MsgRemoveAuthenticator {
    sender: string;
    id: bigint;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 */
export interface MsgRemoveAuthenticatorResponse {
    /**
     * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
     * type.
     */
    success: boolean;
}
export interface MsgSetActiveState {
    sender: string;
    active: boolean;
}
export interface MsgSetActiveStateResponse {
}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 */
export interface TxExtension {
    /**
     * selected_authenticators holds the authenticator_id for the chosen
     * authenticator per message.
     */
    selectedAuthenticators: bigint[];
}
export declare const MsgAddAuthenticator: {
    typeUrl: string;
    encode(message: MsgAddAuthenticator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAuthenticator;
    fromJSON(object: any): MsgAddAuthenticator;
    toJSON(message: MsgAddAuthenticator): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        type?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        sender?: string | undefined;
        type?: string | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddAuthenticator>, never>>(object: I): MsgAddAuthenticator;
};
export declare const MsgAddAuthenticatorResponse: {
    typeUrl: string;
    encode(message: MsgAddAuthenticatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAuthenticatorResponse;
    fromJSON(object: any): MsgAddAuthenticatorResponse;
    toJSON(message: MsgAddAuthenticatorResponse): unknown;
    fromPartial<I extends {
        success?: boolean | undefined;
    } & {
        success?: boolean | undefined;
    } & Record<Exclude<keyof I, "success">, never>>(object: I): MsgAddAuthenticatorResponse;
};
export declare const MsgRemoveAuthenticator: {
    typeUrl: string;
    encode(message: MsgRemoveAuthenticator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAuthenticator;
    fromJSON(object: any): MsgRemoveAuthenticator;
    toJSON(message: MsgRemoveAuthenticator): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: bigint | undefined;
    } & {
        sender?: string | undefined;
        id?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgRemoveAuthenticator>, never>>(object: I): MsgRemoveAuthenticator;
};
export declare const MsgRemoveAuthenticatorResponse: {
    typeUrl: string;
    encode(message: MsgRemoveAuthenticatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAuthenticatorResponse;
    fromJSON(object: any): MsgRemoveAuthenticatorResponse;
    toJSON(message: MsgRemoveAuthenticatorResponse): unknown;
    fromPartial<I extends {
        success?: boolean | undefined;
    } & {
        success?: boolean | undefined;
    } & Record<Exclude<keyof I, "success">, never>>(object: I): MsgRemoveAuthenticatorResponse;
};
export declare const MsgSetActiveState: {
    typeUrl: string;
    encode(message: MsgSetActiveState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActiveState;
    fromJSON(object: any): MsgSetActiveState;
    toJSON(message: MsgSetActiveState): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        active?: boolean | undefined;
    } & {
        sender?: string | undefined;
        active?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetActiveState>, never>>(object: I): MsgSetActiveState;
};
export declare const MsgSetActiveStateResponse: {
    typeUrl: string;
    encode(_: MsgSetActiveStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActiveStateResponse;
    fromJSON(_: any): MsgSetActiveStateResponse;
    toJSON(_: MsgSetActiveStateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetActiveStateResponse;
};
export declare const TxExtension: {
    typeUrl: string;
    encode(message: TxExtension, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxExtension;
    fromJSON(object: any): TxExtension;
    toJSON(message: TxExtension): unknown;
    fromPartial<I extends {
        selectedAuthenticators?: bigint[] | undefined;
    } & {
        selectedAuthenticators?: (bigint[] & bigint[] & Record<Exclude<keyof I["selectedAuthenticators"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "selectedAuthenticators">, never>>(object: I): TxExtension;
};
/** Msg defines the Msg service. */
export interface Msg {
    AddAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse>;
    RemoveAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse>;
    /**
     * SetActiveState sets the active state of the authenticator.
     * Primarily used for circuit breaking.
     */
    SetActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AddAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse>;
    RemoveAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse>;
    SetActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse>;
}
