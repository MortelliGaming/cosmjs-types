import { PeriodLock, SyntheticLock } from "./lock";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.lockup";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: bigint;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
    params?: Params;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        lastLockId?: bigint | undefined;
        locks?: {
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            rewardReceiverAddress?: string | undefined;
        }[] | undefined;
        syntheticLocks?: {
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        params?: {
            forceUnlockAllowedAddresses?: string[] | undefined;
        } | undefined;
    } & {
        lastLockId?: bigint | undefined;
        locks?: ({
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            rewardReceiverAddress?: string | undefined;
        }[] & ({
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            rewardReceiverAddress?: string | undefined;
        } & {
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            rewardReceiverAddress?: string | undefined;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: bigint | undefined;
            owner?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            rewardReceiverAddress?: string | undefined;
        }[]>, never>) | undefined;
        syntheticLocks?: ({
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["syntheticLocks"][number]["endTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["syntheticLocks"][number]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["syntheticLocks"][number], keyof SyntheticLock>, never>)[] & Record<Exclude<keyof I["syntheticLocks"], keyof {
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        params?: ({
            forceUnlockAllowedAddresses?: string[] | undefined;
        } & {
            forceUnlockAllowedAddresses?: (string[] & string[] & Record<Exclude<keyof I["params"]["forceUnlockAllowedAddresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "forceUnlockAllowedAddresses">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
