import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "osmosis.lockup";
export interface MsgLockTokens {
    owner: string;
    duration: Duration;
    coins: Coin[];
}
export interface MsgLockTokensResponse {
    ID: bigint;
}
export interface MsgBeginUnlockingAll {
    owner: string;
}
export interface MsgBeginUnlockingAllResponse {
    unlocks: PeriodLock[];
}
export interface MsgBeginUnlocking {
    owner: string;
    ID: bigint;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgBeginUnlockingResponse {
    success: boolean;
    unlockingLockID: bigint;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
    owner: string;
    ID: bigint;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration: Duration;
}
export interface MsgExtendLockupResponse {
    success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
    owner: string;
    ID: bigint;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgForceUnlockResponse {
    success: boolean;
}
export interface MsgSetRewardReceiverAddress {
    owner: string;
    lockID: bigint;
    rewardReceiver: string;
}
export interface MsgSetRewardReceiverAddressResponse {
    success: boolean;
}
export declare const MsgLockTokens: {
    typeUrl: string;
    encode(message: MsgLockTokens, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokens;
    fromJSON(object: any): MsgLockTokens;
    toJSON(message: MsgLockTokens): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        owner?: string | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
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
    } & Record<Exclude<keyof I, keyof MsgLockTokens>, never>>(object: I): MsgLockTokens;
};
export declare const MsgLockTokensResponse: {
    typeUrl: string;
    encode(message: MsgLockTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokensResponse;
    fromJSON(object: any): MsgLockTokensResponse;
    toJSON(message: MsgLockTokensResponse): unknown;
    fromPartial<I extends {
        ID?: bigint | undefined;
    } & {
        ID?: bigint | undefined;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgLockTokensResponse;
};
export declare const MsgBeginUnlockingAll: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingAll, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAll;
    fromJSON(object: any): MsgBeginUnlockingAll;
    toJSON(message: MsgBeginUnlockingAll): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
    } & {
        owner?: string | undefined;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): MsgBeginUnlockingAll;
};
export declare const MsgBeginUnlockingAllResponse: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingAllResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse;
    fromJSON(object: any): MsgBeginUnlockingAllResponse;
    toJSON(message: MsgBeginUnlockingAllResponse): unknown;
    fromPartial<I extends {
        unlocks?: {
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
        unlocks?: ({
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
            } & Record<Exclude<keyof I["unlocks"][number]["duration"], keyof Duration>, never>) | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["unlocks"][number]["endTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["unlocks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["unlocks"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            rewardReceiverAddress?: string | undefined;
        } & Record<Exclude<keyof I["unlocks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["unlocks"], keyof {
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
    } & Record<Exclude<keyof I, "unlocks">, never>>(object: I): MsgBeginUnlockingAllResponse;
};
export declare const MsgBeginUnlocking: {
    typeUrl: string;
    encode(message: MsgBeginUnlocking, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlocking;
    fromJSON(object: any): MsgBeginUnlocking;
    toJSON(message: MsgBeginUnlocking): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        ID?: bigint | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        owner?: string | undefined;
        ID?: bigint | undefined;
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
    } & Record<Exclude<keyof I, keyof MsgBeginUnlocking>, never>>(object: I): MsgBeginUnlocking;
};
export declare const MsgBeginUnlockingResponse: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingResponse;
    fromJSON(object: any): MsgBeginUnlockingResponse;
    toJSON(message: MsgBeginUnlockingResponse): unknown;
    fromPartial<I extends {
        success?: boolean | undefined;
        unlockingLockID?: bigint | undefined;
    } & {
        success?: boolean | undefined;
        unlockingLockID?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgBeginUnlockingResponse>, never>>(object: I): MsgBeginUnlockingResponse;
};
export declare const MsgExtendLockup: {
    typeUrl: string;
    encode(message: MsgExtendLockup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockup;
    fromJSON(object: any): MsgExtendLockup;
    toJSON(message: MsgExtendLockup): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        ID?: bigint | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        ID?: bigint | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgExtendLockup>, never>>(object: I): MsgExtendLockup;
};
export declare const MsgExtendLockupResponse: {
    typeUrl: string;
    encode(message: MsgExtendLockupResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockupResponse;
    fromJSON(object: any): MsgExtendLockupResponse;
    toJSON(message: MsgExtendLockupResponse): unknown;
    fromPartial<I extends {
        success?: boolean | undefined;
    } & {
        success?: boolean | undefined;
    } & Record<Exclude<keyof I, "success">, never>>(object: I): MsgExtendLockupResponse;
};
export declare const MsgForceUnlock: {
    typeUrl: string;
    encode(message: MsgForceUnlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlock;
    fromJSON(object: any): MsgForceUnlock;
    toJSON(message: MsgForceUnlock): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        ID?: bigint | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        owner?: string | undefined;
        ID?: bigint | undefined;
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
    } & Record<Exclude<keyof I, keyof MsgForceUnlock>, never>>(object: I): MsgForceUnlock;
};
export declare const MsgForceUnlockResponse: {
    typeUrl: string;
    encode(message: MsgForceUnlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlockResponse;
    fromJSON(object: any): MsgForceUnlockResponse;
    toJSON(message: MsgForceUnlockResponse): unknown;
    fromPartial<I extends {
        success?: boolean | undefined;
    } & {
        success?: boolean | undefined;
    } & Record<Exclude<keyof I, "success">, never>>(object: I): MsgForceUnlockResponse;
};
export declare const MsgSetRewardReceiverAddress: {
    typeUrl: string;
    encode(message: MsgSetRewardReceiverAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRewardReceiverAddress;
    fromJSON(object: any): MsgSetRewardReceiverAddress;
    toJSON(message: MsgSetRewardReceiverAddress): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        lockID?: bigint | undefined;
        rewardReceiver?: string | undefined;
    } & {
        owner?: string | undefined;
        lockID?: bigint | undefined;
        rewardReceiver?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetRewardReceiverAddress>, never>>(object: I): MsgSetRewardReceiverAddress;
};
export declare const MsgSetRewardReceiverAddressResponse: {
    typeUrl: string;
    encode(message: MsgSetRewardReceiverAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRewardReceiverAddressResponse;
    fromJSON(object: any): MsgSetRewardReceiverAddressResponse;
    toJSON(message: MsgSetRewardReceiverAddressResponse): unknown;
    fromPartial<I extends {
        success?: boolean | undefined;
    } & {
        success?: boolean | undefined;
    } & Record<Exclude<keyof I, "success">, never>>(object: I): MsgSetRewardReceiverAddressResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** LockTokens lock tokens */
    LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
    /** BeginUnlockingAll begin unlocking all tokens */
    BeginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
    /** MsgBeginUnlocking begins unlocking tokens by lock ID */
    BeginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
    /** MsgEditLockup edits the existing lockups by lock ID */
    ExtendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
    ForceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse>;
    /** SetRewardReceiverAddress edits the reward receiver for the given lock ID */
    SetRewardReceiverAddress(request: MsgSetRewardReceiverAddress): Promise<MsgSetRewardReceiverAddressResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
    BeginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;
    BeginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;
    ExtendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
    ForceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse>;
    SetRewardReceiverAddress(request: MsgSetRewardReceiverAddress): Promise<MsgSetRewardReceiverAddressResponse>;
}
