import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.txfees.v1beta1";
/** Params holds parameters for the txfees module */
export interface Params {
    whitelistedFeeTokenSetters: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        whitelistedFeeTokenSetters?: string[] | undefined;
    } & {
        whitelistedFeeTokenSetters?: (string[] & string[] & Record<Exclude<keyof I["whitelistedFeeTokenSetters"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "whitelistedFeeTokenSetters">, never>>(object: I): Params;
};
