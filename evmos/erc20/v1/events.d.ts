import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.erc20.v1";
/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPair {
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20Address: string;
}
/** EventToggleTokenConversion is an event emitted when a coin's token conversion is toggled. */
export interface EventToggleTokenConversion {
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20Address: string;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoin {
    /** sender is the sender's address. */
    sender: string;
    /** receiver is the receiver's address. */
    receiver: string;
    /** amount is the amount of coins to be converted. */
    amount: string;
    /** denom is the coin's denomination. */
    denom: string;
    /** erc20_address is the ERC20 contract address. */
    erc20Address: string;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20 {
    /** sender is the sender's address. */
    sender: string;
    /** receiver is the receiver's address. */
    receiver: string;
    /** amount is the amount of coins to be converted. */
    amount: string;
    /** denom is the coin's denomination. */
    denom: string;
    /** contract_address of an ERC20 token contract, that is registered in a token pair */
    contractAddress: string;
}
export declare const EventRegisterPair: {
    typeUrl: string;
    encode(message: EventRegisterPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRegisterPair;
    fromJSON(object: any): EventRegisterPair;
    toJSON(message: EventRegisterPair): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        erc20Address?: string | undefined;
    } & {
        denom?: string | undefined;
        erc20Address?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventRegisterPair>, never>>(object: I): EventRegisterPair;
};
export declare const EventToggleTokenConversion: {
    typeUrl: string;
    encode(message: EventToggleTokenConversion, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventToggleTokenConversion;
    fromJSON(object: any): EventToggleTokenConversion;
    toJSON(message: EventToggleTokenConversion): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        erc20Address?: string | undefined;
    } & {
        denom?: string | undefined;
        erc20Address?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventToggleTokenConversion>, never>>(object: I): EventToggleTokenConversion;
};
export declare const EventConvertCoin: {
    typeUrl: string;
    encode(message: EventConvertCoin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventConvertCoin;
    fromJSON(object: any): EventConvertCoin;
    toJSON(message: EventConvertCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        receiver?: string | undefined;
        amount?: string | undefined;
        denom?: string | undefined;
        erc20Address?: string | undefined;
    } & {
        sender?: string | undefined;
        receiver?: string | undefined;
        amount?: string | undefined;
        denom?: string | undefined;
        erc20Address?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventConvertCoin>, never>>(object: I): EventConvertCoin;
};
export declare const EventConvertERC20: {
    typeUrl: string;
    encode(message: EventConvertERC20, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventConvertERC20;
    fromJSON(object: any): EventConvertERC20;
    toJSON(message: EventConvertERC20): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        receiver?: string | undefined;
        amount?: string | undefined;
        denom?: string | undefined;
        contractAddress?: string | undefined;
    } & {
        sender?: string | undefined;
        receiver?: string | undefined;
        amount?: string | undefined;
        denom?: string | undefined;
        contractAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventConvertERC20>, never>>(object: I): EventConvertERC20;
};
