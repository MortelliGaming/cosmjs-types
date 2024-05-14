import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.
 * Only the admin of the token factory denom has permission to mint unless
 * the denom does not have any admin.
 */
export interface MsgMint {
    sender: string;
    amount: Coin;
    mintToAddress: string;
}
export interface MsgMintResponse {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.
 * Only the admin of the token factory denom has permission to burn unless
 * the denom does not have any admin.
 */
export interface MsgBurn {
    sender: string;
    amount: Coin;
    burnFromAddress: string;
}
export interface MsgBurnResponse {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
/**
 * MsgSetBeforeSendHook is the sdk.Msg type for allowing an admin account to
 * assign a CosmWasm contract to call with a BeforeSend hook
 */
export interface MsgSetBeforeSendHook {
    sender: string;
    denom: string;
    cosmwasmAddress: string;
}
/**
 * MsgSetBeforeSendHookResponse defines the response structure for an executed
 * MsgSetBeforeSendHook message.
 */
export interface MsgSetBeforeSendHookResponse {
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
    sender: string;
    metadata: Metadata;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {
}
export interface MsgForceTransfer {
    sender: string;
    amount: Coin;
    transferFromAddress: string;
    transferToAddress: string;
}
export interface MsgForceTransferResponse {
}
export declare const MsgCreateDenom: {
    typeUrl: string;
    encode(message: MsgCreateDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        subdenom?: string | undefined;
    } & {
        sender?: string | undefined;
        subdenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateDenom>, never>>(object: I): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    typeUrl: string;
    encode(message: MsgCreateDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(object: any): MsgCreateDenomResponse;
    toJSON(message: MsgCreateDenomResponse): unknown;
    fromPartial<I extends {
        newTokenDenom?: string | undefined;
    } & {
        newTokenDenom?: string | undefined;
    } & Record<Exclude<keyof I, "newTokenDenom">, never>>(object: I): MsgCreateDenomResponse;
};
export declare const MsgMint: {
    typeUrl: string;
    encode(message: MsgMint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        mintToAddress?: string | undefined;
    } & {
        sender?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
        mintToAddress?: string | undefined;
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
        sender?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        burnFromAddress?: string | undefined;
    } & {
        sender?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
        burnFromAddress?: string | undefined;
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
export declare const MsgChangeAdmin: {
    typeUrl: string;
    encode(message: MsgChangeAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        newAdmin?: string | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        newAdmin?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChangeAdmin>, never>>(object: I): MsgChangeAdmin;
};
export declare const MsgChangeAdminResponse: {
    typeUrl: string;
    encode(_: MsgChangeAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdminResponse;
    fromJSON(_: any): MsgChangeAdminResponse;
    toJSON(_: MsgChangeAdminResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgChangeAdminResponse;
};
export declare const MsgSetBeforeSendHook: {
    typeUrl: string;
    encode(message: MsgSetBeforeSendHook, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBeforeSendHook;
    fromJSON(object: any): MsgSetBeforeSendHook;
    toJSON(message: MsgSetBeforeSendHook): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        cosmwasmAddress?: string | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        cosmwasmAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetBeforeSendHook>, never>>(object: I): MsgSetBeforeSendHook;
};
export declare const MsgSetBeforeSendHookResponse: {
    typeUrl: string;
    encode(_: MsgSetBeforeSendHookResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBeforeSendHookResponse;
    fromJSON(_: any): MsgSetBeforeSendHookResponse;
    toJSON(_: MsgSetBeforeSendHookResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetBeforeSendHookResponse;
};
export declare const MsgSetDenomMetadata: {
    typeUrl: string;
    encode(message: MsgSetDenomMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata;
    fromJSON(object: any): MsgSetDenomMetadata;
    toJSON(message: MsgSetDenomMetadata): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        metadata?: {
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        metadata?: ({
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
        } & {
            description?: string | undefined;
            denomUnits?: ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] & ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            } & {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: (string[] & string[] & Record<Exclude<keyof I["metadata"]["denomUnits"][number]["aliases"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["metadata"]["denomUnits"][number], keyof import("../../../cosmos/bank/v1beta1/bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["metadata"]["denomUnits"], keyof {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[]>, never>) | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
        } & Record<Exclude<keyof I["metadata"], keyof Metadata>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetDenomMetadata>, never>>(object: I): MsgSetDenomMetadata;
};
export declare const MsgSetDenomMetadataResponse: {
    typeUrl: string;
    encode(_: MsgSetDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse;
    fromJSON(_: any): MsgSetDenomMetadataResponse;
    toJSON(_: MsgSetDenomMetadataResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetDenomMetadataResponse;
};
export declare const MsgForceTransfer: {
    typeUrl: string;
    encode(message: MsgForceTransfer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransfer;
    fromJSON(object: any): MsgForceTransfer;
    toJSON(message: MsgForceTransfer): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        transferFromAddress?: string | undefined;
        transferToAddress?: string | undefined;
    } & {
        sender?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
        transferFromAddress?: string | undefined;
        transferToAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgForceTransfer>, never>>(object: I): MsgForceTransfer;
};
export declare const MsgForceTransferResponse: {
    typeUrl: string;
    encode(_: MsgForceTransferResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransferResponse;
    fromJSON(_: any): MsgForceTransferResponse;
    toJSON(_: MsgForceTransferResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgForceTransferResponse;
};
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    Burn(request: MsgBurn): Promise<MsgBurnResponse>;
    ChangeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
    SetDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    SetBeforeSendHook(request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse>;
    ForceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    Burn(request: MsgBurn): Promise<MsgBurnResponse>;
    ChangeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
    SetDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
    SetBeforeSendHook(request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse>;
    ForceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
