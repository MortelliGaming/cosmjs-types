import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "mineplex.mineplexchain.treasury";
/** Params defines the parameters for the module. */
export interface Params {
    owner: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
    } & {
        owner?: string | undefined;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): Params;
};
