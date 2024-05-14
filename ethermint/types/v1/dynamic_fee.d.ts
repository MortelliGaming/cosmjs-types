import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.types.v1";
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTx {
    /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
    maxPriorityPrice: string;
}
export declare const ExtensionOptionDynamicFeeTx: {
    typeUrl: string;
    encode(message: ExtensionOptionDynamicFeeTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionDynamicFeeTx;
    fromJSON(object: any): ExtensionOptionDynamicFeeTx;
    toJSON(message: ExtensionOptionDynamicFeeTx): unknown;
    fromPartial<I extends {
        maxPriorityPrice?: string | undefined;
    } & {
        maxPriorityPrice?: string | undefined;
    } & Record<Exclude<keyof I, "maxPriorityPrice">, never>>(object: I): ExtensionOptionDynamicFeeTx;
};
