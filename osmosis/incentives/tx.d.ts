import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "osmosis.incentives";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    isPerpetual: boolean;
    /** owner is the address of gauge creator */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distributeTo: QueryCondition;
    /** coins are coin(s) to be distributed by the gauge */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime: Timestamp;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    numEpochsPaidOver: bigint;
    /**
     * pool_id is the ID of the pool that the gauge is meant to be associated
     * with. if pool_id is set, then the "QueryCondition.LockQueryType" must be
     * "NoLock" with all other fields of the "QueryCondition.LockQueryType" struct
     * unset, including "QueryCondition.Denom". However, note that, internally,
     * the empty string in "QueryCondition.Denom" ends up being overwritten with
     * incentivestypes.NoLockExternalGaugeDenom(<pool-id>) so that the gauges
     * associated with a pool can be queried by this prefix if needed.
     */
    poolId: bigint;
}
export interface MsgCreateGaugeResponse {
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gaugeId: bigint;
    /** rewards are the coin(s) to add to gauge */
    rewards: Coin[];
}
export interface MsgAddToGaugeResponse {
}
/** MsgCreateGroup creates a group to distribute rewards to a group of pools */
export interface MsgCreateGroup {
    /** coins are the provided coins that the group will distribute */
    coins: Coin[];
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * in. 0 means it's perpetual
     */
    numEpochsPaidOver: bigint;
    /** owner is the group owner's address */
    owner: string;
    /** pool_ids are the IDs of pools that the group is comprised of */
    poolIds: bigint[];
}
export interface MsgCreateGroupResponse {
    /** group_id is the ID of the group that is created from this msg */
    groupId: bigint;
}
export declare const MsgCreateGauge: {
    typeUrl: string;
    encode(message: MsgCreateGauge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGauge;
    fromJSON(object: any): MsgCreateGauge;
    toJSON(message: MsgCreateGauge): unknown;
    fromPartial<I extends {
        isPerpetual?: boolean | undefined;
        owner?: string | undefined;
        distributeTo?: {
            lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
            denom?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            timestamp?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        numEpochsPaidOver?: bigint | undefined;
        poolId?: bigint | undefined;
    } & {
        isPerpetual?: boolean | undefined;
        owner?: string | undefined;
        distributeTo?: ({
            lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
            denom?: string | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            timestamp?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            lockQueryType?: import("../lockup/lock").LockQueryType | undefined;
            denom?: string | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["distributeTo"]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            timestamp?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["distributeTo"]["timestamp"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["distributeTo"], keyof QueryCondition>, never>) | undefined;
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
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
        numEpochsPaidOver?: bigint | undefined;
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateGauge>, never>>(object: I): MsgCreateGauge;
};
export declare const MsgCreateGaugeResponse: {
    typeUrl: string;
    encode(_: MsgCreateGaugeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGaugeResponse;
    fromJSON(_: any): MsgCreateGaugeResponse;
    toJSON(_: MsgCreateGaugeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateGaugeResponse;
};
export declare const MsgAddToGauge: {
    typeUrl: string;
    encode(message: MsgAddToGauge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToGauge;
    fromJSON(object: any): MsgAddToGauge;
    toJSON(message: MsgAddToGauge): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        gaugeId?: bigint | undefined;
        rewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        owner?: string | undefined;
        gaugeId?: bigint | undefined;
        rewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["rewards"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["rewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddToGauge>, never>>(object: I): MsgAddToGauge;
};
export declare const MsgAddToGaugeResponse: {
    typeUrl: string;
    encode(_: MsgAddToGaugeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToGaugeResponse;
    fromJSON(_: any): MsgAddToGaugeResponse;
    toJSON(_: MsgAddToGaugeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgAddToGaugeResponse;
};
export declare const MsgCreateGroup: {
    typeUrl: string;
    encode(message: MsgCreateGroup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroup;
    fromJSON(object: any): MsgCreateGroup;
    toJSON(message: MsgCreateGroup): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        numEpochsPaidOver?: bigint | undefined;
        owner?: string | undefined;
        poolIds?: bigint[] | undefined;
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
        numEpochsPaidOver?: bigint | undefined;
        owner?: string | undefined;
        poolIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["poolIds"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateGroup>, never>>(object: I): MsgCreateGroup;
};
export declare const MsgCreateGroupResponse: {
    typeUrl: string;
    encode(message: MsgCreateGroupResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupResponse;
    fromJSON(object: any): MsgCreateGroupResponse;
    toJSON(message: MsgCreateGroupResponse): unknown;
    fromPartial<I extends {
        groupId?: bigint | undefined;
    } & {
        groupId?: bigint | undefined;
    } & Record<Exclude<keyof I, "groupId">, never>>(object: I): MsgCreateGroupResponse;
};
export interface Msg {
    CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
    AddToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
    CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
    AddToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
    CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
}
