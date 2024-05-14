import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.vesting.v2";
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccount {
    /** funder is the address of the funder */
    funder: string;
    /** vesting_account is the address of the created vesting account */
    vestingAccount: string;
}
/** EventFundVestingAccount defines the event type for funding a vesting account */
export interface EventFundVestingAccount {
    /** funder is the address of the funder */
    funder: string;
    /** coins to be vested */
    coins: string;
    /** start_time is the time when the coins start to vest */
    startTime: string;
    /** vesting_account is the address of the recipient */
    vestingAccount: string;
}
/** EventClawback defines the event type for clawback */
export interface EventClawback {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** destination is the address of the destination */
    destination: string;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunder {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** new_funder is the address of the new funder */
    newFunder: string;
}
export declare const EventCreateClawbackVestingAccount: {
    typeUrl: string;
    encode(message: EventCreateClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateClawbackVestingAccount;
    fromJSON(object: any): EventCreateClawbackVestingAccount;
    toJSON(message: EventCreateClawbackVestingAccount): unknown;
    fromPartial<I extends {
        funder?: string | undefined;
        vestingAccount?: string | undefined;
    } & {
        funder?: string | undefined;
        vestingAccount?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventCreateClawbackVestingAccount>, never>>(object: I): EventCreateClawbackVestingAccount;
};
export declare const EventFundVestingAccount: {
    typeUrl: string;
    encode(message: EventFundVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventFundVestingAccount;
    fromJSON(object: any): EventFundVestingAccount;
    toJSON(message: EventFundVestingAccount): unknown;
    fromPartial<I extends {
        funder?: string | undefined;
        coins?: string | undefined;
        startTime?: string | undefined;
        vestingAccount?: string | undefined;
    } & {
        funder?: string | undefined;
        coins?: string | undefined;
        startTime?: string | undefined;
        vestingAccount?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventFundVestingAccount>, never>>(object: I): EventFundVestingAccount;
};
export declare const EventClawback: {
    typeUrl: string;
    encode(message: EventClawback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventClawback;
    fromJSON(object: any): EventClawback;
    toJSON(message: EventClawback): unknown;
    fromPartial<I extends {
        funder?: string | undefined;
        account?: string | undefined;
        destination?: string | undefined;
    } & {
        funder?: string | undefined;
        account?: string | undefined;
        destination?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventClawback>, never>>(object: I): EventClawback;
};
export declare const EventUpdateVestingFunder: {
    typeUrl: string;
    encode(message: EventUpdateVestingFunder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateVestingFunder;
    fromJSON(object: any): EventUpdateVestingFunder;
    toJSON(message: EventUpdateVestingFunder): unknown;
    fromPartial<I extends {
        funder?: string | undefined;
        account?: string | undefined;
        newFunder?: string | undefined;
    } & {
        funder?: string | undefined;
        account?: string | undefined;
        newFunder?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventUpdateVestingFunder>, never>>(object: I): EventUpdateVestingFunder;
};
