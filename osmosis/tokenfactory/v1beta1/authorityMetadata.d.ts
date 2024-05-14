import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid osmosis address */
    admin: string;
}
export declare const DenomAuthorityMetadata: {
    typeUrl: string;
    encode(message: DenomAuthorityMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromJSON(object: any): DenomAuthorityMetadata;
    toJSON(message: DenomAuthorityMetadata): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
    } & {
        admin?: string | undefined;
    } & Record<Exclude<keyof I, "admin">, never>>(object: I): DenomAuthorityMetadata;
};
