import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.valsetpref.v1beta1";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreference {
    /**
     * val_oper_address holds the validator address the user wants to delegate
     * funds to.
     */
    valOperAddress: string;
    /** weight is decimal between 0 and 1, and they all sum to 1. */
    weight: string;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferences {
    /** preference holds {valAddr, weight} for the user who created it. */
    preferences: ValidatorPreference[];
}
export declare const ValidatorPreference: {
    typeUrl: string;
    encode(message: ValidatorPreference, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorPreference;
    fromJSON(object: any): ValidatorPreference;
    toJSON(message: ValidatorPreference): unknown;
    fromPartial<I extends {
        valOperAddress?: string | undefined;
        weight?: string | undefined;
    } & {
        valOperAddress?: string | undefined;
        weight?: string | undefined;
    } & Record<Exclude<keyof I, keyof ValidatorPreference>, never>>(object: I): ValidatorPreference;
};
export declare const ValidatorSetPreferences: {
    typeUrl: string;
    encode(message: ValidatorSetPreferences, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSetPreferences;
    fromJSON(object: any): ValidatorSetPreferences;
    toJSON(message: ValidatorSetPreferences): unknown;
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
    } & Record<Exclude<keyof I, "preferences">, never>>(object: I): ValidatorSetPreferences;
};
