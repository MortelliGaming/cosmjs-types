import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "osmosis.superfluid";
export interface MsgSuperfluidDelegate {
    sender: string;
    lockId: bigint;
    valAddr: string;
}
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: bigint;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: bigint;
}
export interface MsgSuperfluidUnbondLockResponse {
}
export interface MsgSuperfluidUndelegateAndUnbondLock {
    sender: string;
    lockId: bigint;
    /** Amount of unlocking coin. */
    coin: Coin;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponse {
    /**
     * lock id of the new lock created for the remaining amount.
     * returns the original lockid if the unlocked amount is equal to the
     * original lock's amount.
     */
    lockId: bigint;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
    ID: bigint;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
    poolId: bigint;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
    lockID: bigint;
    positionID: bigint;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
    sender: string;
    poolId: bigint;
}
export interface MsgUnPoolWhitelistedPoolResponse {
    exitedLockIds: bigint[];
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
    sender: string;
    lockId: bigint;
    sharesToMigrate: Coin;
    /** token_out_mins indicates minimum token to exit Balancer pool with. */
    tokenOutMins: Coin[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
    amount0: string;
    amount1: string;
    liquidityCreated: string;
    joinTime: Timestamp;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPosition {
    positionId: bigint;
    sender: string;
    tokenDesired0: Coin;
    tokenDesired1: Coin;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
    positionId: bigint;
    amount0: string;
    amount1: string;
    /**
     * new_liquidity is the final liquidity after the add.
     * It includes the liquidity that existed before in the position
     * and the new liquidity that was added to the position.
     */
    newLiquidity: string;
    lockId: bigint;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStake {
    /**
     * lock ID to convert and stake.
     * lock id with 0 should be provided if converting liquid gamm shares to stake
     */
    lockId: bigint;
    sender: string;
    /**
     * validator address to delegate to.
     * If provided empty string, we use the validators returned from
     * valset-preference module.
     */
    valAddr: string;
    /** min_amt_to_stake indicates the minimum amount to stake after conversion */
    minAmtToStake: string;
    /**
     * shares_to_convert indicates shares wanted to stake.
     * Note that this field is only used for liquid(unlocked) gamm shares.
     * For all other cases, this field would be disregarded.
     */
    sharesToConvert: Coin;
}
export interface MsgUnbondConvertAndStakeResponse {
    totalAmtStaked: string;
}
export declare const MsgSuperfluidDelegate: {
    typeUrl: string;
    encode(message: MsgSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegate;
    fromJSON(object: any): MsgSuperfluidDelegate;
    toJSON(message: MsgSuperfluidDelegate): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        lockId?: bigint | undefined;
        valAddr?: string | undefined;
    } & {
        sender?: string | undefined;
        lockId?: bigint | undefined;
        valAddr?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidDelegate>, never>>(object: I): MsgSuperfluidDelegate;
};
export declare const MsgSuperfluidDelegateResponse: {
    typeUrl: string;
    encode(_: MsgSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse;
    fromJSON(_: any): MsgSuperfluidDelegateResponse;
    toJSON(_: MsgSuperfluidDelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidDelegateResponse;
};
export declare const MsgSuperfluidUndelegate: {
    typeUrl: string;
    encode(message: MsgSuperfluidUndelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegate;
    fromJSON(object: any): MsgSuperfluidUndelegate;
    toJSON(message: MsgSuperfluidUndelegate): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        lockId?: bigint | undefined;
    } & {
        sender?: string | undefined;
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidUndelegate>, never>>(object: I): MsgSuperfluidUndelegate;
};
export declare const MsgSuperfluidUndelegateResponse: {
    typeUrl: string;
    encode(_: MsgSuperfluidUndelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse;
    fromJSON(_: any): MsgSuperfluidUndelegateResponse;
    toJSON(_: MsgSuperfluidUndelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidUndelegateResponse;
};
export declare const MsgSuperfluidUnbondLock: {
    typeUrl: string;
    encode(message: MsgSuperfluidUnbondLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLock;
    fromJSON(object: any): MsgSuperfluidUnbondLock;
    toJSON(message: MsgSuperfluidUnbondLock): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        lockId?: bigint | undefined;
    } & {
        sender?: string | undefined;
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidUnbondLock>, never>>(object: I): MsgSuperfluidUnbondLock;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    typeUrl: string;
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse;
    fromJSON(_: any): MsgSuperfluidUnbondLockResponse;
    toJSON(_: MsgSuperfluidUnbondLockResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidUnbondLockResponse;
};
export declare const MsgSuperfluidUndelegateAndUnbondLock: {
    typeUrl: string;
    encode(message: MsgSuperfluidUndelegateAndUnbondLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateAndUnbondLock;
    fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLock;
    toJSON(message: MsgSuperfluidUndelegateAndUnbondLock): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        lockId?: bigint | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        lockId?: bigint | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coin"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidUndelegateAndUnbondLock>, never>>(object: I): MsgSuperfluidUndelegateAndUnbondLock;
};
export declare const MsgSuperfluidUndelegateAndUnbondLockResponse: {
    typeUrl: string;
    encode(message: MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateAndUnbondLockResponse;
    fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLockResponse;
    toJSON(message: MsgSuperfluidUndelegateAndUnbondLockResponse): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
    } & {
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): MsgSuperfluidUndelegateAndUnbondLockResponse;
};
export declare const MsgLockAndSuperfluidDelegate: {
    typeUrl: string;
    encode(message: MsgLockAndSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate;
    fromJSON(object: any): MsgLockAndSuperfluidDelegate;
    toJSON(message: MsgLockAndSuperfluidDelegate): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        valAddr?: string | undefined;
    } & {
        sender?: string | undefined;
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
        valAddr?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgLockAndSuperfluidDelegate>, never>>(object: I): MsgLockAndSuperfluidDelegate;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    typeUrl: string;
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse;
    fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse;
    toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown;
    fromPartial<I extends {
        ID?: bigint | undefined;
    } & {
        ID?: bigint | undefined;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgLockAndSuperfluidDelegateResponse;
};
export declare const MsgCreateFullRangePositionAndSuperfluidDelegate: {
    typeUrl: string;
    encode(message: MsgCreateFullRangePositionAndSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFullRangePositionAndSuperfluidDelegate;
    fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegate;
    toJSON(message: MsgCreateFullRangePositionAndSuperfluidDelegate): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        valAddr?: string | undefined;
        poolId?: bigint | undefined;
    } & {
        sender?: string | undefined;
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
        valAddr?: string | undefined;
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateFullRangePositionAndSuperfluidDelegate>, never>>(object: I): MsgCreateFullRangePositionAndSuperfluidDelegate;
};
export declare const MsgCreateFullRangePositionAndSuperfluidDelegateResponse: {
    typeUrl: string;
    encode(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    toJSON(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse): unknown;
    fromPartial<I extends {
        lockID?: bigint | undefined;
        positionID?: bigint | undefined;
    } & {
        lockID?: bigint | undefined;
        positionID?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateFullRangePositionAndSuperfluidDelegateResponse>, never>>(object: I): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
};
export declare const MsgUnPoolWhitelistedPool: {
    typeUrl: string;
    encode(message: MsgUnPoolWhitelistedPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool;
    fromJSON(object: any): MsgUnPoolWhitelistedPool;
    toJSON(message: MsgUnPoolWhitelistedPool): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolId?: bigint | undefined;
    } & {
        sender?: string | undefined;
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgUnPoolWhitelistedPool>, never>>(object: I): MsgUnPoolWhitelistedPool;
};
export declare const MsgUnPoolWhitelistedPoolResponse: {
    typeUrl: string;
    encode(message: MsgUnPoolWhitelistedPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse;
    fromJSON(object: any): MsgUnPoolWhitelistedPoolResponse;
    toJSON(message: MsgUnPoolWhitelistedPoolResponse): unknown;
    fromPartial<I extends {
        exitedLockIds?: bigint[] | undefined;
    } & {
        exitedLockIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["exitedLockIds"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "exitedLockIds">, never>>(object: I): MsgUnPoolWhitelistedPoolResponse;
};
export declare const MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
    typeUrl: string;
    encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    toJSON(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        lockId?: bigint | undefined;
        sharesToMigrate?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        tokenOutMins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        lockId?: bigint | undefined;
        sharesToMigrate?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["sharesToMigrate"], keyof Coin>, never>) | undefined;
        tokenOutMins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenOutMins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokenOutMins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>, never>>(object: I): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
};
export declare const MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
    typeUrl: string;
    encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    toJSON(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): unknown;
    fromPartial<I extends {
        amount0?: string | undefined;
        amount1?: string | undefined;
        liquidityCreated?: string | undefined;
        joinTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        amount0?: string | undefined;
        amount1?: string | undefined;
        liquidityCreated?: string | undefined;
        joinTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["joinTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>, never>>(object: I): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
};
export declare const MsgAddToConcentratedLiquiditySuperfluidPosition: {
    typeUrl: string;
    encode(message: MsgAddToConcentratedLiquiditySuperfluidPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToConcentratedLiquiditySuperfluidPosition;
    fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPosition;
    toJSON(message: MsgAddToConcentratedLiquiditySuperfluidPosition): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
        sender?: string | undefined;
        tokenDesired0?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        tokenDesired1?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        positionId?: bigint | undefined;
        sender?: string | undefined;
        tokenDesired0?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenDesired0"], keyof Coin>, never>) | undefined;
        tokenDesired1?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenDesired1"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddToConcentratedLiquiditySuperfluidPosition>, never>>(object: I): MsgAddToConcentratedLiquiditySuperfluidPosition;
};
export declare const MsgAddToConcentratedLiquiditySuperfluidPositionResponse: {
    typeUrl: string;
    encode(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    toJSON(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
        newLiquidity?: string | undefined;
        lockId?: bigint | undefined;
    } & {
        positionId?: bigint | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
        newLiquidity?: string | undefined;
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddToConcentratedLiquiditySuperfluidPositionResponse>, never>>(object: I): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
};
export declare const MsgUnbondConvertAndStake: {
    typeUrl: string;
    encode(message: MsgUnbondConvertAndStake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondConvertAndStake;
    fromJSON(object: any): MsgUnbondConvertAndStake;
    toJSON(message: MsgUnbondConvertAndStake): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
        sender?: string | undefined;
        valAddr?: string | undefined;
        minAmtToStake?: string | undefined;
        sharesToConvert?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        lockId?: bigint | undefined;
        sender?: string | undefined;
        valAddr?: string | undefined;
        minAmtToStake?: string | undefined;
        sharesToConvert?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["sharesToConvert"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUnbondConvertAndStake>, never>>(object: I): MsgUnbondConvertAndStake;
};
export declare const MsgUnbondConvertAndStakeResponse: {
    typeUrl: string;
    encode(message: MsgUnbondConvertAndStakeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondConvertAndStakeResponse;
    fromJSON(object: any): MsgUnbondConvertAndStakeResponse;
    toJSON(message: MsgUnbondConvertAndStakeResponse): unknown;
    fromPartial<I extends {
        totalAmtStaked?: string | undefined;
    } & {
        totalAmtStaked?: string | undefined;
    } & Record<Exclude<keyof I, "totalAmtStaked">, never>>(object: I): MsgUnbondConvertAndStakeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** Execute superfluid delegation for a lockup */
    SuperfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
    /** Execute superfluid undelegation for a lockup */
    SuperfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
    /**
     * For a given lock that is being superfluidly undelegated,
     * also unbond the underlying lock.
     */
    SuperfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
    /** Superfluid undelegate and unbond partial amount of the underlying lock. */
    SuperfluidUndelegateAndUnbondLock(request: MsgSuperfluidUndelegateAndUnbondLock): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse>;
    /** Execute lockup lock and superfluid delegation in a single msg */
    LockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
    CreateFullRangePositionAndSuperfluidDelegate(request: MsgCreateFullRangePositionAndSuperfluidDelegate): Promise<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>;
    UnPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
    UnlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;
    AddToConcentratedLiquiditySuperfluidPosition(request: MsgAddToConcentratedLiquiditySuperfluidPosition): Promise<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>;
    /**
     * UnbondConvertAndStake breaks all locks / superfluid staked assets,
     * converts them to osmo then stakes the osmo to the designated validator.
     */
    UnbondConvertAndStake(request: MsgUnbondConvertAndStake): Promise<MsgUnbondConvertAndStakeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SuperfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
    SuperfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
    SuperfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
    SuperfluidUndelegateAndUnbondLock(request: MsgSuperfluidUndelegateAndUnbondLock): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse>;
    LockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
    CreateFullRangePositionAndSuperfluidDelegate(request: MsgCreateFullRangePositionAndSuperfluidDelegate): Promise<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>;
    UnPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
    UnlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;
    AddToConcentratedLiquiditySuperfluidPosition(request: MsgAddToConcentratedLiquiditySuperfluidPosition): Promise<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>;
    UnbondConvertAndStake(request: MsgUnbondConvertAndStake): Promise<MsgUnbondConvertAndStakeResponse>;
}
