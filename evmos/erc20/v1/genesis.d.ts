import { TokenPair } from "./erc20";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.erc20.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the erc20 module parameters at genesis */
    params: Params;
    /** token_pairs is a slice of the registered token pairs at genesis */
    tokenPairs: TokenPair[];
}
/** Params defines the erc20 module params */
export interface Params {
    /** enable_erc20 is the parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
    enableErc20: boolean;
    /**
     * enable_evm_hook is the parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
     * Coin by transferring the Tokens through a MsgEthereumTx to the ModuleAddress Ethereum address.
     */
    enableEvmHook: boolean;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } | undefined;
        tokenPairs?: {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        }[] | undefined;
    } & {
        params?: ({
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } & {
            enableErc20?: boolean | undefined;
            enableEvmHook?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        tokenPairs?: ({
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        }[] & ({
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        } & {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        } & Record<Exclude<keyof I["tokenPairs"][number], keyof TokenPair>, never>)[] & Record<Exclude<keyof I["tokenPairs"], keyof {
            erc20Address?: string | undefined;
            denom?: string | undefined;
            enabled?: boolean | undefined;
            contractOwner?: import("./erc20").Owner | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        enableErc20?: boolean | undefined;
        enableEvmHook?: boolean | undefined;
    } & {
        enableErc20?: boolean | undefined;
        enableEvmHook?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
