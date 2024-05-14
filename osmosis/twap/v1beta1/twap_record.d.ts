import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.twap.v1beta1";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
    poolId: bigint;
    /** Lexicographically smaller denom of the pair */
    asset0Denom: string;
    /** Lexicographically larger denom of the pair */
    asset1Denom: string;
    /** height this record corresponds to, for debugging purposes */
    height: bigint;
    /**
     * This field should only exist until we have a global registry in the state
     * machine, mapping prior block heights within {TIME RANGE} to times.
     */
    time: Timestamp;
    /**
     * We store the last spot prices in the struct, so that we can interpolate
     * accumulator values for times between when accumulator records are stored.
     */
    p0LastSpotPrice: string;
    p1LastSpotPrice: string;
    p0ArithmeticTwapAccumulator: string;
    p1ArithmeticTwapAccumulator: string;
    geometricTwapAccumulator: string;
    /**
     * This field contains the time in which the last spot price error occurred.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     */
    lastErrorTime: Timestamp;
}
/**
 * PruningState allows us to spread out the pruning of TWAP records over time,
 * instead of pruning all at once at the end of the epoch.
 */
export interface PruningState {
    /**
     * is_pruning is true if the pruning process is ongoing.
     * This tells the module to continue pruning the TWAP records
     * at the EndBlock.
     */
    isPruning: boolean;
    /**
     * last_kept_time is the time of the last kept TWAP record.
     * This is used to determine all TWAP records that are older than
     * last_kept_time and should be pruned.
     */
    lastKeptTime: Timestamp;
    /** Deprecated: This field is deprecated. */
    /** @deprecated */
    lastKeySeen: Uint8Array;
    /**
     * last_seen_pool_id is the pool_id that we will begin pruning in the next
     * block. This value starts at the highest pool_id at time of epoch, and
     * decreases until it reaches 1. When it reaches 1, the pruning
     * process is complete.
     */
    lastSeenPoolId: bigint;
}
export declare const TwapRecord: {
    typeUrl: string;
    encode(message: TwapRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TwapRecord;
    fromJSON(object: any): TwapRecord;
    toJSON(message: TwapRecord): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        asset0Denom?: string | undefined;
        asset1Denom?: string | undefined;
        height?: bigint | undefined;
        time?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        p0LastSpotPrice?: string | undefined;
        p1LastSpotPrice?: string | undefined;
        p0ArithmeticTwapAccumulator?: string | undefined;
        p1ArithmeticTwapAccumulator?: string | undefined;
        geometricTwapAccumulator?: string | undefined;
        lastErrorTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        asset0Denom?: string | undefined;
        asset1Denom?: string | undefined;
        height?: bigint | undefined;
        time?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["time"], keyof Timestamp>, never>) | undefined;
        p0LastSpotPrice?: string | undefined;
        p1LastSpotPrice?: string | undefined;
        p0ArithmeticTwapAccumulator?: string | undefined;
        p1ArithmeticTwapAccumulator?: string | undefined;
        geometricTwapAccumulator?: string | undefined;
        lastErrorTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lastErrorTime"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TwapRecord>, never>>(object: I): TwapRecord;
};
export declare const PruningState: {
    typeUrl: string;
    encode(message: PruningState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PruningState;
    fromJSON(object: any): PruningState;
    toJSON(message: PruningState): unknown;
    fromPartial<I extends {
        isPruning?: boolean | undefined;
        lastKeptTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        lastKeySeen?: Uint8Array | undefined;
        lastSeenPoolId?: bigint | undefined;
    } & {
        isPruning?: boolean | undefined;
        lastKeptTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lastKeptTime"], keyof Timestamp>, never>) | undefined;
        lastKeySeen?: Uint8Array | undefined;
        lastSeenPoolId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof PruningState>, never>>(object: I): PruningState;
};
