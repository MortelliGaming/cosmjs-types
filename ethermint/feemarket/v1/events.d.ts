import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarket {
    /** base_fee for EIP-1559 blocks */
    baseFee: string;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGas {
    /** height of the block */
    height: string;
    /** amount of gas wanted by the block */
    amount: string;
}
export declare const EventFeeMarket: {
    typeUrl: string;
    encode(message: EventFeeMarket, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventFeeMarket;
    fromJSON(object: any): EventFeeMarket;
    toJSON(message: EventFeeMarket): unknown;
    fromPartial<I extends {
        baseFee?: string | undefined;
    } & {
        baseFee?: string | undefined;
    } & Record<Exclude<keyof I, "baseFee">, never>>(object: I): EventFeeMarket;
};
export declare const EventBlockGas: {
    typeUrl: string;
    encode(message: EventBlockGas, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventBlockGas;
    fromJSON(object: any): EventBlockGas;
    toJSON(message: EventBlockGas): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        amount?: string | undefined;
    } & {
        height?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventBlockGas>, never>>(object: I): EventBlockGas;
};
