import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.ibchooks";
export interface Params {
    allowedAsyncAckContracts: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        allowedAsyncAckContracts?: string[] | undefined;
    } & {
        allowedAsyncAckContracts?: (string[] & string[] & Record<Exclude<keyof I["allowedAsyncAckContracts"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "allowedAsyncAckContracts">, never>>(object: I): Params;
};
