import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.smartaccount.v1beta1";
/**
 * AccountAuthenticator represents a foundational model for all authenticators.
 * It provides extensibility by allowing concrete types to interpret and
 * validate transactions based on the encapsulated data.
 */
export interface AccountAuthenticator {
    /** ID uniquely identifies the authenticator instance. */
    id: bigint;
    /**
     * Type specifies the category of the AccountAuthenticator.
     * This type information is essential for differentiating authenticators
     * and ensuring precise data retrieval from the storage layer.
     */
    type: string;
    /**
     * Config is a versatile field used in conjunction with the specific type of
     * account authenticator to facilitate complex authentication processes.
     * The interpretation of this field is overloaded, enabling multiple
     * authenticators to utilize it for their respective purposes.
     */
    config: Uint8Array;
}
export declare const AccountAuthenticator: {
    typeUrl: string;
    encode(message: AccountAuthenticator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountAuthenticator;
    fromJSON(object: any): AccountAuthenticator;
    toJSON(message: AccountAuthenticator): unknown;
    fromPartial<I extends {
        id?: bigint | undefined;
        type?: string | undefined;
        config?: Uint8Array | undefined;
    } & {
        id?: bigint | undefined;
        type?: string | undefined;
        config?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof AccountAuthenticator>, never>>(object: I): AccountAuthenticator;
};
