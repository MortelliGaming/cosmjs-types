import { BaseVestingAccount, Period } from "../../../cosmos/vesting/v1beta1/vesting";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.vesting.v2";
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccount {
    /**
     * base_vesting_account implements the VestingAccount interface. It contains
     * all the necessary fields needed for any vesting account implementation
     */
    baseVestingAccount?: BaseVestingAccount;
    /** funder_address specifies the account which can perform clawback */
    funderAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime: Timestamp;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vestingPeriods: Period[];
}
/**
 * ClawbackProposal is a gov Content type to clawback funds
 * from a vesting account that has this functionality enabled.
 */
export interface ClawbackProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /**
     * address is the vesting account address
     * to clawback the funds from
     */
    address: string;
    /**
     * destination_address is the address that will receive
     * the clawbacked funds from the given vesting account. When
     * empty, proposal will return the coins to the vesting
     * account funder.
     */
    destinationAddress: string;
}
export declare const ClawbackVestingAccount: {
    typeUrl: string;
    encode(message: ClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClawbackVestingAccount;
    fromJSON(object: any): ClawbackVestingAccount;
    toJSON(message: ClawbackVestingAccount): unknown;
    fromPartial<I extends {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string | undefined;
                pubKey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                accountNumber?: bigint | undefined;
                sequence?: bigint | undefined;
            } | undefined;
            originalVesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegatedFree?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegatedVesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            endTime?: bigint | undefined;
        } | undefined;
        funderAddress?: string | undefined;
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
        baseVestingAccount?: ({
            baseAccount?: {
                address?: string | undefined;
                pubKey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                accountNumber?: bigint | undefined;
                sequence?: bigint | undefined;
            } | undefined;
            originalVesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegatedFree?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegatedVesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            endTime?: bigint | undefined;
        } & {
            baseAccount?: ({
                address?: string | undefined;
                pubKey?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                accountNumber?: bigint | undefined;
                sequence?: bigint | undefined;
            } & {
                address?: string | undefined;
                pubKey?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"]["pubKey"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
                accountNumber?: bigint | undefined;
                sequence?: bigint | undefined;
            } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"], keyof import("../../../cosmos/auth/v1beta1/auth").BaseAccount>, never>) | undefined;
            originalVesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegatedFree?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegatedVesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            endTime?: bigint | undefined;
        } & Record<Exclude<keyof I["baseVestingAccount"], keyof BaseVestingAccount>, never>) | undefined;
        funderAddress?: string | undefined;
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
            } & Record<Exclude<keyof I["lockupPeriods"][number]["amount"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["lockupPeriods"][number]["amount"], keyof {
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
            } & Record<Exclude<keyof I["vestingPeriods"][number]["amount"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["vestingPeriods"][number]["amount"], keyof {
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
    } & Record<Exclude<keyof I, keyof ClawbackVestingAccount>, never>>(object: I): ClawbackVestingAccount;
};
export declare const ClawbackProposal: {
    typeUrl: string;
    encode(message: ClawbackProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClawbackProposal;
    fromJSON(object: any): ClawbackProposal;
    toJSON(message: ClawbackProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
        destinationAddress?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
        destinationAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof ClawbackProposal>, never>>(object: I): ClawbackProposal;
};
