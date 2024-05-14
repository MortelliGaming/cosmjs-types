import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.evm.v1";
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTx {
    /** amount */
    amount: string;
    /** eth_hash is the Ethereum hash of the transaction */
    ethHash: string;
    /** index of the transaction in the block */
    index: string;
    /** gas_used is the amount of gas used by the transaction */
    gasUsed: string;
    /** hash is the Tendermint hash of the transaction */
    hash: string;
    /** recipient of the transaction */
    recipient: string;
    /** eth_tx_failed contains a VM error should it occur */
    ethTxFailed: string;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLog {
    /** tx_logs is an array of transaction logs */
    txLogs: string[];
}
/** EventMessage */
export interface EventMessage {
    /** module which emits the event */
    module: string;
    /** sender of the message */
    sender: string;
    /** tx_type is the type of the message */
    txType: string;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloom {
    /** bloom is the bloom filter of the block */
    bloom: string;
}
export declare const EventEthereumTx: {
    typeUrl: string;
    encode(message: EventEthereumTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventEthereumTx;
    fromJSON(object: any): EventEthereumTx;
    toJSON(message: EventEthereumTx): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
        ethHash?: string | undefined;
        index?: string | undefined;
        gasUsed?: string | undefined;
        hash?: string | undefined;
        recipient?: string | undefined;
        ethTxFailed?: string | undefined;
    } & {
        amount?: string | undefined;
        ethHash?: string | undefined;
        index?: string | undefined;
        gasUsed?: string | undefined;
        hash?: string | undefined;
        recipient?: string | undefined;
        ethTxFailed?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventEthereumTx>, never>>(object: I): EventEthereumTx;
};
export declare const EventTxLog: {
    typeUrl: string;
    encode(message: EventTxLog, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventTxLog;
    fromJSON(object: any): EventTxLog;
    toJSON(message: EventTxLog): unknown;
    fromPartial<I extends {
        txLogs?: string[] | undefined;
    } & {
        txLogs?: (string[] & string[] & Record<Exclude<keyof I["txLogs"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "txLogs">, never>>(object: I): EventTxLog;
};
export declare const EventMessage: {
    typeUrl: string;
    encode(message: EventMessage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventMessage;
    fromJSON(object: any): EventMessage;
    toJSON(message: EventMessage): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        sender?: string | undefined;
        txType?: string | undefined;
    } & {
        module?: string | undefined;
        sender?: string | undefined;
        txType?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventMessage>, never>>(object: I): EventMessage;
};
export declare const EventBlockBloom: {
    typeUrl: string;
    encode(message: EventBlockBloom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventBlockBloom;
    fromJSON(object: any): EventBlockBloom;
    toJSON(message: EventBlockBloom): unknown;
    fromPartial<I extends {
        bloom?: string | undefined;
    } & {
        bloom?: string | undefined;
    } & Record<Exclude<keyof I, "bloom">, never>>(object: I): EventBlockBloom;
};
