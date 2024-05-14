import { ValidatorPreference } from "./state";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.valsetpref.v1beta1";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceResponse {
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
    /** delegator is the user who is trying to delegate. */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin: Coin;
}
export interface MsgDelegateToValidatorSetResponse {
}
export interface MsgUndelegateFromValidatorSet {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin: Coin;
}
export interface MsgUndelegateFromValidatorSetResponse {
}
export interface MsgUndelegateFromRebalancedValidatorSet {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
     * Our undelegate logic would first check the current delegation balance.
     * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
     * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
     * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
     * undelegated from ValB.
     */
    coin: Coin;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponse {
}
export interface MsgRedelegateValidatorSet {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetResponse {
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
    /** delegator is the user who is trying to force unbond osmo and delegate. */
    delegator: string;
    /** lockup id of osmo in the pool */
    lockID: bigint;
}
export interface MsgDelegateBondedTokensResponse {
}
export declare const MsgSetValidatorSetPreference: {
    typeUrl: string;
    encode(message: MsgSetValidatorSetPreference, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference;
    fromJSON(object: any): MsgSetValidatorSetPreference;
    toJSON(message: MsgSetValidatorSetPreference): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        preferences?: {
            valOperAddress?: string | undefined;
            weight?: string | undefined;
        }[] | undefined;
    } & {
        delegator?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof MsgSetValidatorSetPreference>, never>>(object: I): MsgSetValidatorSetPreference;
};
export declare const MsgSetValidatorSetPreferenceResponse: {
    typeUrl: string;
    encode(_: MsgSetValidatorSetPreferenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse;
    fromJSON(_: any): MsgSetValidatorSetPreferenceResponse;
    toJSON(_: MsgSetValidatorSetPreferenceResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetValidatorSetPreferenceResponse;
};
export declare const MsgDelegateToValidatorSet: {
    typeUrl: string;
    encode(message: MsgDelegateToValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet;
    fromJSON(object: any): MsgDelegateToValidatorSet;
    toJSON(message: MsgDelegateToValidatorSet): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coin"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgDelegateToValidatorSet>, never>>(object: I): MsgDelegateToValidatorSet;
};
export declare const MsgDelegateToValidatorSetResponse: {
    typeUrl: string;
    encode(_: MsgDelegateToValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse;
    fromJSON(_: any): MsgDelegateToValidatorSetResponse;
    toJSON(_: MsgDelegateToValidatorSetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDelegateToValidatorSetResponse;
};
export declare const MsgUndelegateFromValidatorSet: {
    typeUrl: string;
    encode(message: MsgUndelegateFromValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet;
    fromJSON(object: any): MsgUndelegateFromValidatorSet;
    toJSON(message: MsgUndelegateFromValidatorSet): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coin"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUndelegateFromValidatorSet>, never>>(object: I): MsgUndelegateFromValidatorSet;
};
export declare const MsgUndelegateFromValidatorSetResponse: {
    typeUrl: string;
    encode(_: MsgUndelegateFromValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse;
    fromJSON(_: any): MsgUndelegateFromValidatorSetResponse;
    toJSON(_: MsgUndelegateFromValidatorSetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUndelegateFromValidatorSetResponse;
};
export declare const MsgUndelegateFromRebalancedValidatorSet: {
    typeUrl: string;
    encode(message: MsgUndelegateFromRebalancedValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSet;
    fromJSON(object: any): MsgUndelegateFromRebalancedValidatorSet;
    toJSON(message: MsgUndelegateFromRebalancedValidatorSet): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coin"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUndelegateFromRebalancedValidatorSet>, never>>(object: I): MsgUndelegateFromRebalancedValidatorSet;
};
export declare const MsgUndelegateFromRebalancedValidatorSetResponse: {
    typeUrl: string;
    encode(_: MsgUndelegateFromRebalancedValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSetResponse;
    fromJSON(_: any): MsgUndelegateFromRebalancedValidatorSetResponse;
    toJSON(_: MsgUndelegateFromRebalancedValidatorSetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUndelegateFromRebalancedValidatorSetResponse;
};
export declare const MsgRedelegateValidatorSet: {
    typeUrl: string;
    encode(message: MsgRedelegateValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet;
    fromJSON(object: any): MsgRedelegateValidatorSet;
    toJSON(message: MsgRedelegateValidatorSet): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        preferences?: {
            valOperAddress?: string | undefined;
            weight?: string | undefined;
        }[] | undefined;
    } & {
        delegator?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof MsgRedelegateValidatorSet>, never>>(object: I): MsgRedelegateValidatorSet;
};
export declare const MsgRedelegateValidatorSetResponse: {
    typeUrl: string;
    encode(_: MsgRedelegateValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse;
    fromJSON(_: any): MsgRedelegateValidatorSetResponse;
    toJSON(_: MsgRedelegateValidatorSetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRedelegateValidatorSetResponse;
};
export declare const MsgWithdrawDelegationRewards: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegationRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards;
    fromJSON(object: any): MsgWithdrawDelegationRewards;
    toJSON(message: MsgWithdrawDelegationRewards): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
    } & {
        delegator?: string | undefined;
    } & Record<Exclude<keyof I, "delegator">, never>>(object: I): MsgWithdrawDelegationRewards;
};
export declare const MsgWithdrawDelegationRewardsResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawDelegationRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse;
    fromJSON(_: any): MsgWithdrawDelegationRewardsResponse;
    toJSON(_: MsgWithdrawDelegationRewardsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawDelegationRewardsResponse;
};
export declare const MsgDelegateBondedTokens: {
    typeUrl: string;
    encode(message: MsgDelegateBondedTokens, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokens;
    fromJSON(object: any): MsgDelegateBondedTokens;
    toJSON(message: MsgDelegateBondedTokens): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        lockID?: bigint | undefined;
    } & {
        delegator?: string | undefined;
        lockID?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgDelegateBondedTokens>, never>>(object: I): MsgDelegateBondedTokens;
};
export declare const MsgDelegateBondedTokensResponse: {
    typeUrl: string;
    encode(_: MsgDelegateBondedTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokensResponse;
    fromJSON(_: any): MsgDelegateBondedTokensResponse;
    toJSON(_: MsgDelegateBondedTokensResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDelegateBondedTokensResponse;
};
/** Msg defines the valset-pref module's gRPC message service. */
export interface Msg {
    /**
     * SetValidatorSetPreference creates a set of validator preference.
     * This message will process both create + update request.
     */
    SetValidatorSetPreference(request: MsgSetValidatorSetPreference): Promise<MsgSetValidatorSetPreferenceResponse>;
    /**
     * DelegateToValidatorSet gets the owner, coins and delegates to a
     * validator-set.
     */
    DelegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse>;
    /**
     * UndelegateFromValidatorSet gets the owner and coins and undelegates from
     * validator-set. The unbonding logic will follow the `Undelegate` logic from
     * the sdk.
     */
    UndelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet): Promise<MsgUndelegateFromValidatorSetResponse>;
    /**
     * UndelegateFromRebalancedValidatorSet undelegates the proivded amount from
     * the validator set, but takes into consideration the current delegations
     * to the user's validator set to determine the weights assigned to each.
     */
    UndelegateFromRebalancedValidatorSet(request: MsgUndelegateFromRebalancedValidatorSet): Promise<MsgUndelegateFromRebalancedValidatorSetResponse>;
    /**
     * RedelegateValidatorSet takes the existing validator set and redelegates to
     * a new set.
     */
    RedelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse>;
    /**
     * WithdrawDelegationRewards allows users to claim rewards from the
     * validator-set.
     */
    WithdrawDelegationRewards(request: MsgWithdrawDelegationRewards): Promise<MsgWithdrawDelegationRewardsResponse>;
    /**
     * DelegateBondedTokens allows users to break the lockup bond and delegate
     * osmo tokens to a predefined validator-set.
     */
    DelegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetValidatorSetPreference(request: MsgSetValidatorSetPreference): Promise<MsgSetValidatorSetPreferenceResponse>;
    DelegateToValidatorSet(request: MsgDelegateToValidatorSet): Promise<MsgDelegateToValidatorSetResponse>;
    UndelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet): Promise<MsgUndelegateFromValidatorSetResponse>;
    UndelegateFromRebalancedValidatorSet(request: MsgUndelegateFromRebalancedValidatorSet): Promise<MsgUndelegateFromRebalancedValidatorSetResponse>;
    RedelegateValidatorSet(request: MsgRedelegateValidatorSet): Promise<MsgRedelegateValidatorSetResponse>;
    WithdrawDelegationRewards(request: MsgWithdrawDelegationRewards): Promise<MsgWithdrawDelegationRewardsResponse>;
    DelegateBondedTokens(request: MsgDelegateBondedTokens): Promise<MsgDelegateBondedTokensResponse>;
}
