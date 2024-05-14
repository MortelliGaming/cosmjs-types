import { Timestamp } from "../../../google/protobuf/timestamp";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "evmos.vesting.v2";
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccount {
    /** funder_address specifies the account that will be able to fund the vesting account */
    funderAddress: string;
    /** vesting_address specifies the address that will receive the vesting tokens */
    vestingAddress: string;
    /** enable_gov_clawback specifies whether the governance module can clawback this account */
    enableGovClawback: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {
}
/**
 * MsgFundVestingAccount defines a message that enables funding an existing clawback
 * vesting account.
 */
export interface MsgFundVestingAccount {
    /** funder_address specifies the account that funds the vesting account */
    funderAddress: string;
    /** vesting_address specifies the account that receives the funds */
    vestingAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime: Timestamp;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vestingPeriods: Period[];
}
/**
 * MsgFundVestingAccountResponse defines the
 * MsgFundVestingAccount response type.
 */
export interface MsgFundVestingAccountResponse {
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawback {
    /** funder_address is the address which funded the account */
    funderAddress: string;
    /**
     * account_address is the address of the ClawbackVestingAccount to claw back
     * from.
     */
    accountAddress: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    destAddress: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {
    /** coins is the slice of clawed back coins */
    coins: Coin[];
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunder {
    /** funder_address is the current funder address of the ClawbackVestingAccount */
    funderAddress: string;
    /** new_funder_address is the new address to replace the existing funder_address */
    newFunderAddress: string;
    /** vesting_address is the address of the ClawbackVestingAccount being updated */
    vestingAddress: string;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponse {
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to an eth account */
export interface MsgConvertVestingAccount {
    /** vesting_address is the address of the vesting account to convert */
    vestingAddress: string;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponse {
}
export declare const MsgCreateClawbackVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccount;
    fromJSON(object: any): MsgCreateClawbackVestingAccount;
    toJSON(message: MsgCreateClawbackVestingAccount): unknown;
    fromPartial<I extends {
        funderAddress?: string | undefined;
        vestingAddress?: string | undefined;
        enableGovClawback?: boolean | undefined;
    } & {
        funderAddress?: string | undefined;
        vestingAddress?: string | undefined;
        enableGovClawback?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateClawbackVestingAccount>, never>>(object: I): MsgCreateClawbackVestingAccount;
};
export declare const MsgCreateClawbackVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateClawbackVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccountResponse;
    fromJSON(_: any): MsgCreateClawbackVestingAccountResponse;
    toJSON(_: MsgCreateClawbackVestingAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateClawbackVestingAccountResponse;
};
export declare const MsgFundVestingAccount: {
    typeUrl: string;
    encode(message: MsgFundVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundVestingAccount;
    fromJSON(object: any): MsgFundVestingAccount;
    toJSON(message: MsgFundVestingAccount): unknown;
    fromPartial<I extends {
        funderAddress?: string | undefined;
        vestingAddress?: string | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        lockupPeriods?: {
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        vestingPeriods?: {
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        funderAddress?: string | undefined;
        vestingAddress?: string | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
        lockupPeriods?: ({
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            length?: bigint | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["lockupPeriods"][number]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["lockupPeriods"][number]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["lockupPeriods"][number], keyof Period>, never>)[] & Record<Exclude<keyof I["lockupPeriods"], keyof {
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        vestingPeriods?: ({
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            length?: bigint | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["vestingPeriods"][number]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["vestingPeriods"][number]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["vestingPeriods"][number], keyof Period>, never>)[] & Record<Exclude<keyof I["vestingPeriods"], keyof {
            length?: bigint | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgFundVestingAccount>, never>>(object: I): MsgFundVestingAccount;
};
export declare const MsgFundVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgFundVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundVestingAccountResponse;
    fromJSON(_: any): MsgFundVestingAccountResponse;
    toJSON(_: MsgFundVestingAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgFundVestingAccountResponse;
};
export declare const MsgClawback: {
    typeUrl: string;
    encode(message: MsgClawback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClawback;
    fromJSON(object: any): MsgClawback;
    toJSON(message: MsgClawback): unknown;
    fromPartial<I extends {
        funderAddress?: string | undefined;
        accountAddress?: string | undefined;
        destAddress?: string | undefined;
    } & {
        funderAddress?: string | undefined;
        accountAddress?: string | undefined;
        destAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgClawback>, never>>(object: I): MsgClawback;
};
export declare const MsgClawbackResponse: {
    typeUrl: string;
    encode(message: MsgClawbackResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClawbackResponse;
    fromJSON(object: any): MsgClawbackResponse;
    toJSON(message: MsgClawbackResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): MsgClawbackResponse;
};
export declare const MsgUpdateVestingFunder: {
    typeUrl: string;
    encode(message: MsgUpdateVestingFunder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVestingFunder;
    fromJSON(object: any): MsgUpdateVestingFunder;
    toJSON(message: MsgUpdateVestingFunder): unknown;
    fromPartial<I extends {
        funderAddress?: string | undefined;
        newFunderAddress?: string | undefined;
        vestingAddress?: string | undefined;
    } & {
        funderAddress?: string | undefined;
        newFunderAddress?: string | undefined;
        vestingAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateVestingFunder>, never>>(object: I): MsgUpdateVestingFunder;
};
export declare const MsgUpdateVestingFunderResponse: {
    typeUrl: string;
    encode(_: MsgUpdateVestingFunderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVestingFunderResponse;
    fromJSON(_: any): MsgUpdateVestingFunderResponse;
    toJSON(_: MsgUpdateVestingFunderResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateVestingFunderResponse;
};
export declare const MsgConvertVestingAccount: {
    typeUrl: string;
    encode(message: MsgConvertVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertVestingAccount;
    fromJSON(object: any): MsgConvertVestingAccount;
    toJSON(message: MsgConvertVestingAccount): unknown;
    fromPartial<I extends {
        vestingAddress?: string | undefined;
    } & {
        vestingAddress?: string | undefined;
    } & Record<Exclude<keyof I, "vestingAddress">, never>>(object: I): MsgConvertVestingAccount;
};
export declare const MsgConvertVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgConvertVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertVestingAccountResponse;
    fromJSON(_: any): MsgConvertVestingAccountResponse;
    toJSON(_: MsgConvertVestingAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConvertVestingAccountResponse;
};
/** Msg defines the vesting Msg service. */
export interface Msg {
    /** CreateClawbackVestingAccount creats a vesting account that is subject to clawback. */
    CreateClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
    /**
     * FundVestingAccount funds an existing ClawbackVestingAccount with tokens
     * according to the vesting and lockup schedules.
     */
    FundVestingAccount(request: MsgFundVestingAccount): Promise<MsgFundVestingAccountResponse>;
    /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
    Clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
    /**
     * UpdateVestingFunder updates the funder address of an existing
     * ClawbackVestingAccount.
     */
    UpdateVestingFunder(request: MsgUpdateVestingFunder): Promise<MsgUpdateVestingFunderResponse>;
    /** ConvertVestingAccount converts a ClawbackVestingAccount to an Eth account */
    ConvertVestingAccount(request: MsgConvertVestingAccount): Promise<MsgConvertVestingAccountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
    FundVestingAccount(request: MsgFundVestingAccount): Promise<MsgFundVestingAccountResponse>;
    Clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
    UpdateVestingFunder(request: MsgUpdateVestingFunder): Promise<MsgUpdateVestingFunderResponse>;
    ConvertVestingAccount(request: MsgConvertVestingAccount): Promise<MsgConvertVestingAccountResponse>;
}
