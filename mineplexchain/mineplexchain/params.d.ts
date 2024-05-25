import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "mineplex.mineplexchain.mineplexchain";
/** Params defines the parameters for the module. */
export interface Params {
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): Params;
};
