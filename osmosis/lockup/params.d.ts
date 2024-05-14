import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.lockup";
export interface Params {
    forceUnlockAllowedAddresses: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        forceUnlockAllowedAddresses?: string[] | undefined;
    } & {
        forceUnlockAllowedAddresses?: (string[] & string[] & Record<Exclude<keyof I["forceUnlockAllowedAddresses"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "forceUnlockAllowedAddresses">, never>>(object: I): Params;
};
