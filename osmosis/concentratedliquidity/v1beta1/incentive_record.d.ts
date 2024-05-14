import { Duration } from "../../../google/protobuf/duration";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
    /** incentive_id is the id uniquely identifying this incentive record. */
    incentiveId: bigint;
    poolId: bigint;
    /** incentive record body holds necessary */
    incentiveRecordBody: IncentiveRecordBody;
    /**
     * min_uptime is the minimum uptime required for liquidity to qualify for this
     * incentive. It should be always be one of the supported uptimes in
     * types.SupportedUptimes
     */
    minUptime: Duration;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
    /** remaining_coin is the total amount of incentives to be distributed */
    remainingCoin: DecCoin;
    /** emission_rate is the incentive emission rate per second */
    emissionRate: string;
    /** start_time is the time when the incentive starts distributing */
    startTime: Timestamp;
}
export declare const IncentiveRecord: {
    typeUrl: string;
    encode(message: IncentiveRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecord;
    fromJSON(object: any): IncentiveRecord;
    toJSON(message: IncentiveRecord): unknown;
    fromPartial<I extends {
        incentiveId?: bigint | undefined;
        poolId?: bigint | undefined;
        incentiveRecordBody?: {
            remainingCoin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            emissionRate?: string | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        minUptime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        incentiveId?: bigint | undefined;
        poolId?: bigint | undefined;
        incentiveRecordBody?: ({
            remainingCoin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            emissionRate?: string | undefined;
            startTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            remainingCoin?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["incentiveRecordBody"]["remainingCoin"], keyof DecCoin>, never>) | undefined;
            emissionRate?: string | undefined;
            startTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["incentiveRecordBody"]["startTime"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["incentiveRecordBody"], keyof IncentiveRecordBody>, never>) | undefined;
        minUptime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["minUptime"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof IncentiveRecord>, never>>(object: I): IncentiveRecord;
};
export declare const IncentiveRecordBody: {
    typeUrl: string;
    encode(message: IncentiveRecordBody, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordBody;
    fromJSON(object: any): IncentiveRecordBody;
    toJSON(message: IncentiveRecordBody): unknown;
    fromPartial<I extends {
        remainingCoin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        emissionRate?: string | undefined;
        startTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        remainingCoin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["remainingCoin"], keyof DecCoin>, never>) | undefined;
        emissionRate?: string | undefined;
        startTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof IncentiveRecordBody>, never>>(object: I): IncentiveRecordBody;
};
