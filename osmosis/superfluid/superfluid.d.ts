import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.superfluid";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token, lp share of a pool, or concentrated share of a pool
 */
export declare enum SuperfluidAssetType {
    SuperfluidAssetTypeNative = 0,
    SuperfluidAssetTypeLPShare = 1,
    SuperfluidAssetTypeConcentratedShare = 2,
    UNRECOGNIZED = -1
}
export declare function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType;
export declare function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string;
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
    denom: string;
    /**
     * AssetType indicates whether the superfluid asset is a native token or an lp
     * share
     */
    assetType: SuperfluidAssetType;
    /**
     * For non-osmo native assets, we need a pool_id osmo/asset to determine the
     * twap of the asset
     */
    pricePoolId: bigint;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccount {
    /** Denom indicates the denom of the superfluid asset. */
    denom: string;
    valAddr: string;
    /** perpetual gauge for rewards distribution */
    gaugeId: bigint;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking what's in use for epoch N as based on the
 * prior epochs rewards) However for now, this is not the TWAP but instead the
 * spot price at the boundary. For different types of assets in the future, it
 * could change.
 */
export interface OsmoEquivalentMultiplierRecord {
    epochNumber: bigint;
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    multiplier: string;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecord {
    delegatorAddress: string;
    validatorAddress: string;
    delegationAmount: Coin;
    equivalentStakedAmount?: Coin;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnection {
    lockId: bigint;
    intermediaryAccount: string;
}
export interface UnpoolWhitelistedPools {
    ids: bigint[];
}
export interface ConcentratedPoolUserPositionRecord {
    validatorAddress: string;
    positionId: bigint;
    lockId: bigint;
    syntheticLock: SyntheticLock;
    delegationAmount: Coin;
    equivalentStakedAmount?: Coin;
}
/** The DenomRiskFactor stores the risk factor of a superfluid asset */
export interface DenomRiskFactor {
    /** superfluid asset denom, can be LP token or native token */
    denom: string;
    /**
     * risk_factor is to be cut on OSMO equivalent value of the denom tokens
     * for superfluid staking. It defaults to params.minimum_risk_factor
     */
    riskFactor: string;
}
export declare const SuperfluidAsset: {
    typeUrl: string;
    encode(message: SuperfluidAsset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidAsset;
    fromJSON(object: any): SuperfluidAsset;
    toJSON(message: SuperfluidAsset): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        assetType?: SuperfluidAssetType | undefined;
        pricePoolId?: bigint | undefined;
    } & {
        denom?: string | undefined;
        assetType?: SuperfluidAssetType | undefined;
        pricePoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidAsset>, never>>(object: I): SuperfluidAsset;
};
export declare const SuperfluidIntermediaryAccount: {
    typeUrl: string;
    encode(message: SuperfluidIntermediaryAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccount;
    fromJSON(object: any): SuperfluidIntermediaryAccount;
    toJSON(message: SuperfluidIntermediaryAccount): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        valAddr?: string | undefined;
        gaugeId?: bigint | undefined;
    } & {
        denom?: string | undefined;
        valAddr?: string | undefined;
        gaugeId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidIntermediaryAccount>, never>>(object: I): SuperfluidIntermediaryAccount;
};
export declare const OsmoEquivalentMultiplierRecord: {
    typeUrl: string;
    encode(message: OsmoEquivalentMultiplierRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord;
    fromJSON(object: any): OsmoEquivalentMultiplierRecord;
    toJSON(message: OsmoEquivalentMultiplierRecord): unknown;
    fromPartial<I extends {
        epochNumber?: bigint | undefined;
        denom?: string | undefined;
        multiplier?: string | undefined;
    } & {
        epochNumber?: bigint | undefined;
        denom?: string | undefined;
        multiplier?: string | undefined;
    } & Record<Exclude<keyof I, keyof OsmoEquivalentMultiplierRecord>, never>>(object: I): OsmoEquivalentMultiplierRecord;
};
export declare const SuperfluidDelegationRecord: {
    typeUrl: string;
    encode(message: SuperfluidDelegationRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationRecord;
    fromJSON(object: any): SuperfluidDelegationRecord;
    toJSON(message: SuperfluidDelegationRecord): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
        validatorAddress?: string | undefined;
        delegationAmount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        equivalentStakedAmount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegatorAddress?: string | undefined;
        validatorAddress?: string | undefined;
        delegationAmount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["delegationAmount"], keyof Coin>, never>) | undefined;
        equivalentStakedAmount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidDelegationRecord>, never>>(object: I): SuperfluidDelegationRecord;
};
export declare const LockIdIntermediaryAccountConnection: {
    typeUrl: string;
    encode(message: LockIdIntermediaryAccountConnection, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection;
    fromJSON(object: any): LockIdIntermediaryAccountConnection;
    toJSON(message: LockIdIntermediaryAccountConnection): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
        intermediaryAccount?: string | undefined;
    } & {
        lockId?: bigint | undefined;
        intermediaryAccount?: string | undefined;
    } & Record<Exclude<keyof I, keyof LockIdIntermediaryAccountConnection>, never>>(object: I): LockIdIntermediaryAccountConnection;
};
export declare const UnpoolWhitelistedPools: {
    typeUrl: string;
    encode(message: UnpoolWhitelistedPools, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnpoolWhitelistedPools;
    fromJSON(object: any): UnpoolWhitelistedPools;
    toJSON(message: UnpoolWhitelistedPools): unknown;
    fromPartial<I extends {
        ids?: bigint[] | undefined;
    } & {
        ids?: (bigint[] & bigint[] & Record<Exclude<keyof I["ids"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "ids">, never>>(object: I): UnpoolWhitelistedPools;
};
export declare const ConcentratedPoolUserPositionRecord: {
    typeUrl: string;
    encode(message: ConcentratedPoolUserPositionRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConcentratedPoolUserPositionRecord;
    fromJSON(object: any): ConcentratedPoolUserPositionRecord;
    toJSON(message: ConcentratedPoolUserPositionRecord): unknown;
    fromPartial<I extends {
        validatorAddress?: string | undefined;
        positionId?: bigint | undefined;
        lockId?: bigint | undefined;
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
        delegationAmount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        equivalentStakedAmount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        validatorAddress?: string | undefined;
        positionId?: bigint | undefined;
        lockId?: bigint | undefined;
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
            } & Record<Exclude<keyof I["syntheticLock"]["endTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["syntheticLock"]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["syntheticLock"], keyof SyntheticLock>, never>) | undefined;
        delegationAmount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["delegationAmount"], keyof Coin>, never>) | undefined;
        equivalentStakedAmount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConcentratedPoolUserPositionRecord>, never>>(object: I): ConcentratedPoolUserPositionRecord;
};
export declare const DenomRiskFactor: {
    typeUrl: string;
    encode(message: DenomRiskFactor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomRiskFactor;
    fromJSON(object: any): DenomRiskFactor;
    toJSON(message: DenomRiskFactor): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        riskFactor?: string | undefined;
    } & {
        denom?: string | undefined;
        riskFactor?: string | undefined;
    } & Record<Exclude<keyof I, keyof DenomRiskFactor>, never>>(object: I): DenomRiskFactor;
};
