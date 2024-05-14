import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "evmos.erc20.v1";
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
    /**
     * coin is a Cosmos coin whose denomination is registered in a token pair. The coin
     * amount defines the amount of coins to convert.
     */
    coin: Coin;
    /** receiver is the hex address to receive ERC20 token */
    receiver: string;
    /** sender is the cosmos bech32 address from the owner of the given Cosmos coins */
    sender: string;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
    /** contract_address of an ERC20 token contract, that is registered in a token pair */
    contractAddress: string;
    /** amount of ERC20 tokens to convert */
    amount: string;
    /** receiver is the bech32 address to receive native Cosmos coins */
    receiver: string;
    /** sender is the hex address from the owner of the given ERC20 tokens */
    sender: string;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgConvertCoin: {
    typeUrl: string;
    encode(message: MsgConvertCoin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoin;
    fromJSON(object: any): MsgConvertCoin;
    toJSON(message: MsgConvertCoin): unknown;
    fromPartial<I extends {
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        receiver?: string | undefined;
        sender?: string | undefined;
    } & {
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coin"], keyof Coin>, never>) | undefined;
        receiver?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgConvertCoin>, never>>(object: I): MsgConvertCoin;
};
export declare const MsgConvertCoinResponse: {
    typeUrl: string;
    encode(_: MsgConvertCoinResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinResponse;
    fromJSON(_: any): MsgConvertCoinResponse;
    toJSON(_: MsgConvertCoinResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConvertCoinResponse;
};
export declare const MsgConvertERC20: {
    typeUrl: string;
    encode(message: MsgConvertERC20, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20;
    fromJSON(object: any): MsgConvertERC20;
    toJSON(message: MsgConvertERC20): unknown;
    fromPartial<I extends {
        contractAddress?: string | undefined;
        amount?: string | undefined;
        receiver?: string | undefined;
        sender?: string | undefined;
    } & {
        contractAddress?: string | undefined;
        amount?: string | undefined;
        receiver?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgConvertERC20>, never>>(object: I): MsgConvertERC20;
};
export declare const MsgConvertERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertERC20Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20Response;
    fromJSON(_: any): MsgConvertERC20Response;
    toJSON(_: MsgConvertERC20Response): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConvertERC20Response;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } & {
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateParams>, never>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateParamsResponse;
};
/** Msg defines the erc20 Msg service. */
export interface Msg {
    /**
     * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
     * that is registered on the token mapping.
     */
    ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
    /**
     * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
     * contract that is registered on the token mapping.
     */
    ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
    /**
     * UpdateParams defined a governance operation for updating the x/erc20 module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
    ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
