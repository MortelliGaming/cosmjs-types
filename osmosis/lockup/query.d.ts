import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, SyntheticLock } from "./lock";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "osmosis.lockup";
export interface ModuleBalanceRequest {
}
export interface ModuleBalanceResponse {
    coins: Coin[];
}
export interface ModuleLockedAmountRequest {
}
export interface ModuleLockedAmountResponse {
    coins: Coin[];
}
export interface AccountUnlockableCoinsRequest {
    owner: string;
}
export interface AccountUnlockableCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockingCoinsRequest {
    owner: string;
}
export interface AccountUnlockingCoinsResponse {
    coins: Coin[];
}
export interface AccountLockedCoinsRequest {
    owner: string;
}
export interface AccountLockedCoinsResponse {
    coins: Coin[];
}
export interface AccountLockedPastTimeRequest {
    owner: string;
    timestamp: Timestamp;
}
export interface AccountLockedPastTimeResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
    owner: string;
    timestamp: Timestamp;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeRequest {
    owner: string;
    timestamp: Timestamp;
}
export interface AccountUnlockedBeforeTimeResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomRequest {
    owner: string;
    timestamp: Timestamp;
    denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
    locks: PeriodLock[];
}
export interface LockedDenomRequest {
    denom: string;
    duration: Duration;
}
export interface LockedDenomResponse {
    amount: string;
}
export interface LockedRequest {
    lockId: bigint;
}
export interface LockedResponse {
    lock?: PeriodLock;
}
export interface LockRewardReceiverRequest {
    lockId: bigint;
}
export interface LockRewardReceiverResponse {
    rewardReceiver: string;
}
export interface NextLockIDRequest {
}
export interface NextLockIDResponse {
    lockId: bigint;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDRequest {
    lockId: bigint;
}
/** @deprecated */
export interface SyntheticLockupsByLockupIDResponse {
    syntheticLocks: SyntheticLock[];
}
export interface SyntheticLockupByLockupIDRequest {
    lockId: bigint;
}
export interface SyntheticLockupByLockupIDResponse {
    syntheticLock: SyntheticLock;
}
export interface AccountLockedLongerDurationRequest {
    owner: string;
    duration: Duration;
}
export interface AccountLockedLongerDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedDurationRequest {
    owner: string;
    duration: Duration;
}
export interface AccountLockedDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
    owner: string;
    duration: Duration;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomRequest {
    owner: string;
    duration: Duration;
    denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
    locks: PeriodLock[];
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const ModuleBalanceRequest: {
    typeUrl: string;
    encode(_: ModuleBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleBalanceRequest;
    fromJSON(_: any): ModuleBalanceRequest;
    toJSON(_: ModuleBalanceRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ModuleBalanceRequest;
};
export declare const ModuleBalanceResponse: {
    typeUrl: string;
    encode(message: ModuleBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleBalanceResponse;
    fromJSON(object: any): ModuleBalanceResponse;
    toJSON(message: ModuleBalanceResponse): unknown;
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
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): ModuleBalanceResponse;
};
export declare const ModuleLockedAmountRequest: {
    typeUrl: string;
    encode(_: ModuleLockedAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleLockedAmountRequest;
    fromJSON(_: any): ModuleLockedAmountRequest;
    toJSON(_: ModuleLockedAmountRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ModuleLockedAmountRequest;
};
export declare const ModuleLockedAmountResponse: {
    typeUrl: string;
    encode(message: ModuleLockedAmountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleLockedAmountResponse;
    fromJSON(object: any): ModuleLockedAmountResponse;
    toJSON(message: ModuleLockedAmountResponse): unknown;
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
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): ModuleLockedAmountResponse;
};
export declare const AccountUnlockableCoinsRequest: {
    typeUrl: string;
    encode(message: AccountUnlockableCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockableCoinsRequest;
    fromJSON(object: any): AccountUnlockableCoinsRequest;
    toJSON(message: AccountUnlockableCoinsRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
    } & {
        owner?: string | undefined;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): AccountUnlockableCoinsRequest;
};
export declare const AccountUnlockableCoinsResponse: {
    typeUrl: string;
    encode(message: AccountUnlockableCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockableCoinsResponse;
    fromJSON(object: any): AccountUnlockableCoinsResponse;
    toJSON(message: AccountUnlockableCoinsResponse): unknown;
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
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): AccountUnlockableCoinsResponse;
};
export declare const AccountUnlockingCoinsRequest: {
    typeUrl: string;
    encode(message: AccountUnlockingCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockingCoinsRequest;
    fromJSON(object: any): AccountUnlockingCoinsRequest;
    toJSON(message: AccountUnlockingCoinsRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
    } & {
        owner?: string | undefined;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): AccountUnlockingCoinsRequest;
};
export declare const AccountUnlockingCoinsResponse: {
    typeUrl: string;
    encode(message: AccountUnlockingCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockingCoinsResponse;
    fromJSON(object: any): AccountUnlockingCoinsResponse;
    toJSON(message: AccountUnlockingCoinsResponse): unknown;
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
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): AccountUnlockingCoinsResponse;
};
export declare const AccountLockedCoinsRequest: {
    typeUrl: string;
    encode(message: AccountLockedCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedCoinsRequest;
    fromJSON(object: any): AccountLockedCoinsRequest;
    toJSON(message: AccountLockedCoinsRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
    } & {
        owner?: string | undefined;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): AccountLockedCoinsRequest;
};
export declare const AccountLockedCoinsResponse: {
    typeUrl: string;
    encode(message: AccountLockedCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedCoinsResponse;
    fromJSON(object: any): AccountLockedCoinsResponse;
    toJSON(message: AccountLockedCoinsResponse): unknown;
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
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): AccountLockedCoinsResponse;
};
export declare const AccountLockedPastTimeRequest: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeRequest;
    fromJSON(object: any): AccountLockedPastTimeRequest;
    toJSON(message: AccountLockedPastTimeRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        timestamp?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        timestamp?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AccountLockedPastTimeRequest>, never>>(object: I): AccountLockedPastTimeRequest;
};
export declare const AccountLockedPastTimeResponse: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeResponse;
    fromJSON(object: any): AccountLockedPastTimeResponse;
    toJSON(message: AccountLockedPastTimeResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedPastTimeResponse;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyRequest: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        timestamp?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        timestamp?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AccountLockedPastTimeNotUnlockingOnlyRequest>, never>>(object: I): AccountLockedPastTimeNotUnlockingOnlyRequest;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyResponse: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedPastTimeNotUnlockingOnlyResponse;
};
export declare const AccountUnlockedBeforeTimeRequest: {
    typeUrl: string;
    encode(message: AccountUnlockedBeforeTimeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockedBeforeTimeRequest;
    fromJSON(object: any): AccountUnlockedBeforeTimeRequest;
    toJSON(message: AccountUnlockedBeforeTimeRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        timestamp?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        timestamp?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AccountUnlockedBeforeTimeRequest>, never>>(object: I): AccountUnlockedBeforeTimeRequest;
};
export declare const AccountUnlockedBeforeTimeResponse: {
    typeUrl: string;
    encode(message: AccountUnlockedBeforeTimeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountUnlockedBeforeTimeResponse;
    fromJSON(object: any): AccountUnlockedBeforeTimeResponse;
    toJSON(message: AccountUnlockedBeforeTimeResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountUnlockedBeforeTimeResponse;
};
export declare const AccountLockedPastTimeDenomRequest: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeDenomRequest;
    fromJSON(object: any): AccountLockedPastTimeDenomRequest;
    toJSON(message: AccountLockedPastTimeDenomRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        timestamp?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        denom?: string | undefined;
    } & {
        owner?: string | undefined;
        timestamp?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
        denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof AccountLockedPastTimeDenomRequest>, never>>(object: I): AccountLockedPastTimeDenomRequest;
};
export declare const AccountLockedPastTimeDenomResponse: {
    typeUrl: string;
    encode(message: AccountLockedPastTimeDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedPastTimeDenomResponse;
    fromJSON(object: any): AccountLockedPastTimeDenomResponse;
    toJSON(message: AccountLockedPastTimeDenomResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedPastTimeDenomResponse;
};
export declare const LockedDenomRequest: {
    typeUrl: string;
    encode(message: LockedDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedDenomRequest;
    fromJSON(object: any): LockedDenomRequest;
    toJSON(message: LockedDenomRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        denom?: string | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof LockedDenomRequest>, never>>(object: I): LockedDenomRequest;
};
export declare const LockedDenomResponse: {
    typeUrl: string;
    encode(message: LockedDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedDenomResponse;
    fromJSON(object: any): LockedDenomResponse;
    toJSON(message: LockedDenomResponse): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
    } & {
        amount?: string | undefined;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): LockedDenomResponse;
};
export declare const LockedRequest: {
    typeUrl: string;
    encode(message: LockedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedRequest;
    fromJSON(object: any): LockedRequest;
    toJSON(message: LockedRequest): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
    } & {
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): LockedRequest;
};
export declare const LockedResponse: {
    typeUrl: string;
    encode(message: LockedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedResponse;
    fromJSON(object: any): LockedResponse;
    toJSON(message: LockedResponse): unknown;
    fromPartial<I extends {
        lock?: {
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
        } | undefined;
    } & {
        lock?: ({
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
            } & Record<Exclude<keyof I["lock"]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["lock"]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["lock"]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["lock"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            rewardReceiverAddress?: string | undefined;
        } & Record<Exclude<keyof I["lock"], keyof PeriodLock>, never>) | undefined;
    } & Record<Exclude<keyof I, "lock">, never>>(object: I): LockedResponse;
};
export declare const LockRewardReceiverRequest: {
    typeUrl: string;
    encode(message: LockRewardReceiverRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockRewardReceiverRequest;
    fromJSON(object: any): LockRewardReceiverRequest;
    toJSON(message: LockRewardReceiverRequest): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
    } & {
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): LockRewardReceiverRequest;
};
export declare const LockRewardReceiverResponse: {
    typeUrl: string;
    encode(message: LockRewardReceiverResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockRewardReceiverResponse;
    fromJSON(object: any): LockRewardReceiverResponse;
    toJSON(message: LockRewardReceiverResponse): unknown;
    fromPartial<I extends {
        rewardReceiver?: string | undefined;
    } & {
        rewardReceiver?: string | undefined;
    } & Record<Exclude<keyof I, "rewardReceiver">, never>>(object: I): LockRewardReceiverResponse;
};
export declare const NextLockIDRequest: {
    typeUrl: string;
    encode(_: NextLockIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NextLockIDRequest;
    fromJSON(_: any): NextLockIDRequest;
    toJSON(_: NextLockIDRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): NextLockIDRequest;
};
export declare const NextLockIDResponse: {
    typeUrl: string;
    encode(message: NextLockIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NextLockIDResponse;
    fromJSON(object: any): NextLockIDResponse;
    toJSON(message: NextLockIDResponse): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
    } & {
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): NextLockIDResponse;
};
export declare const SyntheticLockupsByLockupIDRequest: {
    typeUrl: string;
    encode(message: SyntheticLockupsByLockupIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupsByLockupIDRequest;
    fromJSON(object: any): SyntheticLockupsByLockupIDRequest;
    toJSON(message: SyntheticLockupsByLockupIDRequest): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
    } & {
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): SyntheticLockupsByLockupIDRequest;
};
export declare const SyntheticLockupsByLockupIDResponse: {
    typeUrl: string;
    encode(message: SyntheticLockupsByLockupIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupsByLockupIDResponse;
    fromJSON(object: any): SyntheticLockupsByLockupIDResponse;
    toJSON(message: SyntheticLockupsByLockupIDResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["syntheticLocks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["syntheticLocks"][number]["duration"], keyof Duration>, never>) | undefined;
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
    } & Record<Exclude<keyof I, "syntheticLocks">, never>>(object: I): SyntheticLockupsByLockupIDResponse;
};
export declare const SyntheticLockupByLockupIDRequest: {
    typeUrl: string;
    encode(message: SyntheticLockupByLockupIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupByLockupIDRequest;
    fromJSON(object: any): SyntheticLockupByLockupIDRequest;
    toJSON(message: SyntheticLockupByLockupIDRequest): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
    } & {
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): SyntheticLockupByLockupIDRequest;
};
export declare const SyntheticLockupByLockupIDResponse: {
    typeUrl: string;
    encode(message: SyntheticLockupByLockupIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLockupByLockupIDResponse;
    fromJSON(object: any): SyntheticLockupByLockupIDResponse;
    toJSON(message: SyntheticLockupByLockupIDResponse): unknown;
    fromPartial<I extends {
        syntheticLock?: {
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
        } | undefined;
    } & {
        syntheticLock?: ({
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
            } & Record<Exclude<keyof I["syntheticLock"]["endTime"], keyof Timestamp>, never>) | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["syntheticLock"]["duration"], keyof Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["syntheticLock"], keyof SyntheticLock>, never>) | undefined;
    } & Record<Exclude<keyof I, "syntheticLock">, never>>(object: I): SyntheticLockupByLockupIDResponse;
};
export declare const AccountLockedLongerDurationRequest: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationRequest;
    fromJSON(object: any): AccountLockedLongerDurationRequest;
    toJSON(message: AccountLockedLongerDurationRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AccountLockedLongerDurationRequest>, never>>(object: I): AccountLockedLongerDurationRequest;
};
export declare const AccountLockedLongerDurationResponse: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationResponse;
    fromJSON(object: any): AccountLockedLongerDurationResponse;
    toJSON(message: AccountLockedLongerDurationResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedLongerDurationResponse;
};
export declare const AccountLockedDurationRequest: {
    typeUrl: string;
    encode(message: AccountLockedDurationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedDurationRequest;
    fromJSON(object: any): AccountLockedDurationRequest;
    toJSON(message: AccountLockedDurationRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AccountLockedDurationRequest>, never>>(object: I): AccountLockedDurationRequest;
};
export declare const AccountLockedDurationResponse: {
    typeUrl: string;
    encode(message: AccountLockedDurationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedDurationResponse;
    fromJSON(object: any): AccountLockedDurationResponse;
    toJSON(message: AccountLockedDurationResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedDurationResponse;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyRequest: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AccountLockedLongerDurationNotUnlockingOnlyRequest>, never>>(object: I): AccountLockedLongerDurationNotUnlockingOnlyRequest;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyResponse: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedLongerDurationNotUnlockingOnlyResponse;
};
export declare const AccountLockedLongerDurationDenomRequest: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationDenomRequest;
    fromJSON(object: any): AccountLockedLongerDurationDenomRequest;
    toJSON(message: AccountLockedLongerDurationDenomRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        denom?: string | undefined;
    } & {
        owner?: string | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
        denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof AccountLockedLongerDurationDenomRequest>, never>>(object: I): AccountLockedLongerDurationDenomRequest;
};
export declare const AccountLockedLongerDurationDenomResponse: {
    typeUrl: string;
    encode(message: AccountLockedLongerDurationDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccountLockedLongerDurationDenomResponse;
    fromJSON(object: any): AccountLockedLongerDurationDenomResponse;
    toJSON(message: AccountLockedLongerDurationDenomResponse): unknown;
    fromPartial<I extends {
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
    } & {
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
            } & Record<Exclude<keyof I["locks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["locks"][number]["endTime"], keyof Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
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
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedLongerDurationDenomResponse;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            forceUnlockAllowedAddresses?: string[] | undefined;
        } | undefined;
    } & {
        params?: ({
            forceUnlockAllowedAddresses?: string[] | undefined;
        } & {
            forceUnlockAllowedAddresses?: (string[] & string[] & Record<Exclude<keyof I["params"]["forceUnlockAllowedAddresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "forceUnlockAllowedAddresses">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Return full balance of the module */
    ModuleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
    /** Return locked balance of the module */
    ModuleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
    /** Returns unlockable coins which are not withdrawn yet */
    AccountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
    /** Returns unlocking coins */
    AccountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
    /** Return a locked coins that can't be withdrawn */
    AccountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
    /** Returns locked records of an account with unlock time beyond timestamp */
    AccountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    AccountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    /** Returns unlocked records with unlock time before timestamp */
    AccountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
    /** Returns lock records by address, timestamp, denom */
    AccountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
    /** Returns total locked per denom with longer past given time */
    LockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
    /** Returns lock record by id */
    LockedByID(request: LockedRequest): Promise<LockedResponse>;
    /** Returns lock record by id */
    LockRewardReceiver(request: LockRewardReceiverRequest): Promise<LockRewardReceiverResponse>;
    /** Returns next lock ID */
    NextLockID(request?: NextLockIDRequest): Promise<NextLockIDResponse>;
    /**
     * Returns synthetic lockup by native lockup id
     * Deprecated: use SyntheticLockupByLockupID instead
     */
    SyntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
    /** Returns synthetic lockup by native lockup id */
    SyntheticLockupByLockupID(request: SyntheticLockupByLockupIDRequest): Promise<SyntheticLockupByLockupIDResponse>;
    /** Returns account locked records with longer duration */
    AccountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
    /** Returns account locked records with a specific duration */
    AccountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    AccountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    /** Returns account's locked records for a denom with longer duration */
    AccountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
    /** Params returns lockup params. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ModuleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
    ModuleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
    AccountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
    AccountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
    AccountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
    AccountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
    AccountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    AccountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
    AccountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
    LockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
    LockedByID(request: LockedRequest): Promise<LockedResponse>;
    LockRewardReceiver(request: LockRewardReceiverRequest): Promise<LockRewardReceiverResponse>;
    NextLockID(request?: NextLockIDRequest): Promise<NextLockIDResponse>;
    SyntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
    SyntheticLockupByLockupID(request: SyntheticLockupByLockupIDRequest): Promise<SyntheticLockupByLockupIDResponse>;
    AccountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
    AccountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
    AccountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    AccountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
