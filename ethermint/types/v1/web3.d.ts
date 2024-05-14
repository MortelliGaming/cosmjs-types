import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.types.v1";
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3Tx {
    /**
     * typed_data_chain_id is used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     */
    typedDataChainId: bigint;
    /**
     * fee_payer is an account address for the fee payer. It will be validated
     * during EIP712 signature checking.
     */
    feePayer: string;
    /**
     * fee_payer_sig is a signature data from the fee paying account,
     * allows to perform fee delegation when using EIP712 Domain.
     */
    feePayerSig: Uint8Array;
}
export declare const ExtensionOptionsWeb3Tx: {
    typeUrl: string;
    encode(message: ExtensionOptionsWeb3Tx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx;
    fromJSON(object: any): ExtensionOptionsWeb3Tx;
    toJSON(message: ExtensionOptionsWeb3Tx): unknown;
    fromPartial<I extends {
        typedDataChainId?: bigint | undefined;
        feePayer?: string | undefined;
        feePayerSig?: Uint8Array | undefined;
    } & {
        typedDataChainId?: bigint | undefined;
        feePayer?: string | undefined;
        feePayerSig?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ExtensionOptionsWeb3Tx>, never>>(object: I): ExtensionOptionsWeb3Tx;
};
