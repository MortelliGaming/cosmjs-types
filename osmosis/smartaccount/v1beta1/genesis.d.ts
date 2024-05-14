import { AccountAuthenticator } from "./models";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.smartaccount.v1beta1";
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 */
export interface AuthenticatorData {
    /** address is an account address, one address can have many authenticators */
    address: string;
    /**
     * authenticators are the account's authenticators, these can be multiple
     * types including SignatureVerification, AllOfs, CosmWasmAuthenticators, etc
     */
    authenticators: AccountAuthenticator[];
}
/** GenesisState defines the authenticator module's genesis state. */
export interface GenesisState {
    /** params define the parameters for the authenticator module. */
    params: Params;
    /** next_authenticator_id is the next available authenticator ID. */
    nextAuthenticatorId: bigint;
    /**
     * authenticator_data contains the data for multiple accounts, each with their
     * authenticators.
     */
    authenticatorData: AuthenticatorData[];
}
export declare const AuthenticatorData: {
    typeUrl: string;
    encode(message: AuthenticatorData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AuthenticatorData;
    fromJSON(object: any): AuthenticatorData;
    toJSON(message: AuthenticatorData): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        authenticators?: {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        authenticators?: ({
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        }[] & ({
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        } & {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["authenticators"][number], keyof AccountAuthenticator>, never>)[] & Record<Exclude<keyof I["authenticators"], keyof {
            id?: bigint | undefined;
            type?: string | undefined;
            config?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AuthenticatorData>, never>>(object: I): AuthenticatorData;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            maximumUnauthenticatedGas?: bigint | undefined;
            isSmartAccountActive?: boolean | undefined;
            circuitBreakerControllers?: string[] | undefined;
        } | undefined;
        nextAuthenticatorId?: bigint | undefined;
        authenticatorData?: {
            address?: string | undefined;
            authenticators?: {
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        params?: ({
            maximumUnauthenticatedGas?: bigint | undefined;
            isSmartAccountActive?: boolean | undefined;
            circuitBreakerControllers?: string[] | undefined;
        } & {
            maximumUnauthenticatedGas?: bigint | undefined;
            isSmartAccountActive?: boolean | undefined;
            circuitBreakerControllers?: (string[] & string[] & Record<Exclude<keyof I["params"]["circuitBreakerControllers"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        nextAuthenticatorId?: bigint | undefined;
        authenticatorData?: ({
            address?: string | undefined;
            authenticators?: {
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            authenticators?: {
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            authenticators?: ({
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            }[] & ({
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            } & {
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["authenticatorData"][number]["authenticators"][number], keyof AccountAuthenticator>, never>)[] & Record<Exclude<keyof I["authenticatorData"][number]["authenticators"], keyof {
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["authenticatorData"][number], keyof AuthenticatorData>, never>)[] & Record<Exclude<keyof I["authenticatorData"], keyof {
            address?: string | undefined;
            authenticators?: {
                id?: bigint | undefined;
                type?: string | undefined;
                config?: Uint8Array | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
