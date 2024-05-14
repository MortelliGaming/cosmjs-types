import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.ibcratelimit.v1beta1";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
    contractAddress: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        contractAddress?: string | undefined;
    } & {
        contractAddress?: string | undefined;
    } & Record<Exclude<keyof I, "contractAddress">, never>>(object: I): Params;
};
