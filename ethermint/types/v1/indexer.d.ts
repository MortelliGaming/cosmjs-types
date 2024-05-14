import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.types.v1";
/** TxResult is the value stored in eth tx indexer */
export interface TxResult {
    /** height of the blockchain */
    height: bigint;
    /** tx_index of the cosmos transaction */
    txIndex: number;
    /** msg_index in a batch transaction */
    msgIndex: number;
    /**
     * eth_tx_index is the index in the list of valid eth tx in the block,
     * aka. the transaction list returned by eth_getBlock api.
     */
    ethTxIndex: number;
    /** failed is true if the eth transaction did not go succeed */
    failed: boolean;
    /**
     * gas_used by the transaction. If it exceeds the block gas limit,
     * it's set to gas limit, which is what's actually deducted by ante handler.
     */
    gasUsed: bigint;
    /**
     * cumulative_gas_used specifies the cumulated amount of gas used for all
     * processed messages within the current batch transaction.
     */
    cumulativeGasUsed: bigint;
}
export declare const TxResult: {
    typeUrl: string;
    encode(message: TxResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    fromPartial<I extends {
        height?: bigint | undefined;
        txIndex?: number | undefined;
        msgIndex?: number | undefined;
        ethTxIndex?: number | undefined;
        failed?: boolean | undefined;
        gasUsed?: bigint | undefined;
        cumulativeGasUsed?: bigint | undefined;
    } & {
        height?: bigint | undefined;
        txIndex?: number | undefined;
        msgIndex?: number | undefined;
        ethTxIndex?: number | undefined;
        failed?: boolean | undefined;
        gasUsed?: bigint | undefined;
        cumulativeGasUsed?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof TxResult>, never>>(object: I): TxResult;
};
