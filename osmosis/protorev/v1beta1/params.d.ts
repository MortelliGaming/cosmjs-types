import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.protorev.v1beta1";
/** Params defines the parameters for the module. */
export interface Params {
    /** Boolean whether the protorev module is enabled. */
    enabled: boolean;
    /** The admin account (settings manager) of the protorev module. */
    admin: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        admin?: string | undefined;
    } & {
        enabled?: boolean | undefined;
        admin?: string | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
