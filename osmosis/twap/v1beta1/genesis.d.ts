import { Duration } from "../../../google/protobuf/duration";
import { TwapRecord } from "./twap_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.twap.v1beta1";
/** Params holds parameters for the twap module */
export interface Params {
    pruneEpochIdentifier: string;
    recordHistoryKeepPeriod: Duration;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
    /** twaps is the collection of all twap records. */
    twaps: TwapRecord[];
    /** params is the container of twap parameters. */
    params: Params;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        pruneEpochIdentifier?: string | undefined;
        recordHistoryKeepPeriod?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        pruneEpochIdentifier?: string | undefined;
        recordHistoryKeepPeriod?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["recordHistoryKeepPeriod"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        twaps?: {
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
        }[] | undefined;
        params?: {
            pruneEpochIdentifier?: string | undefined;
            recordHistoryKeepPeriod?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
    } & {
        twaps?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["twaps"][number]["time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["twaps"][number]["lastErrorTime"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["twaps"][number], keyof TwapRecord>, never>)[] & Record<Exclude<keyof I["twaps"], keyof {
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
        }[]>, never>) | undefined;
        params?: ({
            pruneEpochIdentifier?: string | undefined;
            recordHistoryKeepPeriod?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            pruneEpochIdentifier?: string | undefined;
            recordHistoryKeepPeriod?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["recordHistoryKeepPeriod"], keyof Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
