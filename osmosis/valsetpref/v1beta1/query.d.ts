import { ValidatorPreference } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.valsetpref.v1beta1";
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
    /** user account address */
    address: string;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
    preferences: ValidatorPreference[];
}
export declare const UserValidatorPreferencesRequest: {
    typeUrl: string;
    encode(message: UserValidatorPreferencesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesRequest;
    fromJSON(object: any): UserValidatorPreferencesRequest;
    toJSON(message: UserValidatorPreferencesRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): UserValidatorPreferencesRequest;
};
export declare const UserValidatorPreferencesResponse: {
    typeUrl: string;
    encode(message: UserValidatorPreferencesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesResponse;
    fromJSON(object: any): UserValidatorPreferencesResponse;
    toJSON(message: UserValidatorPreferencesResponse): unknown;
    fromPartial<I extends {
        preferences?: {
            valOperAddress?: string | undefined;
            weight?: string | undefined;
        }[] | undefined;
    } & {
        preferences?: ({
            valOperAddress?: string | undefined;
            weight?: string | undefined;
        }[] & ({
            valOperAddress?: string | undefined;
            weight?: string | undefined;
        } & {
            valOperAddress?: string | undefined;
            weight?: string | undefined;
        } & Record<Exclude<keyof I["preferences"][number], keyof ValidatorPreference>, never>)[] & Record<Exclude<keyof I["preferences"], keyof {
            valOperAddress?: string | undefined;
            weight?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "preferences">, never>>(object: I): UserValidatorPreferencesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns the list of ValidatorPreferences for the user. */
    UserValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    UserValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
}
