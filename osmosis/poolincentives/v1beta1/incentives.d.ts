import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.poolincentives.v1beta1";
export interface Params {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    mintedDenom: string;
}
export interface LockableDurationsInfo {
    lockableDurations: Duration[];
}
export interface DistrInfo {
    totalWeight: string;
    records: DistrRecord[];
}
export interface DistrRecord {
    gaugeId: bigint;
    weight: string;
}
export interface PoolToGauge {
    poolId: bigint;
    gaugeId: bigint;
    duration: Duration;
}
export interface AnyPoolToInternalGauges {
    poolToGauge: PoolToGauge[];
}
export interface ConcentratedPoolToNoLockGauges {
    poolToGauge: PoolToGauge[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        mintedDenom?: string | undefined;
    } & {
        mintedDenom?: string | undefined;
    } & Record<Exclude<keyof I, "mintedDenom">, never>>(object: I): Params;
};
export declare const LockableDurationsInfo: {
    typeUrl: string;
    encode(message: LockableDurationsInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo;
    fromJSON(object: any): LockableDurationsInfo;
    toJSON(message: LockableDurationsInfo): unknown;
    fromPartial<I extends {
        lockableDurations?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] | undefined;
    } & {
        lockableDurations?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] & ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["lockableDurations"][number], keyof Duration>, never>)[] & Record<Exclude<keyof I["lockableDurations"], keyof {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "lockableDurations">, never>>(object: I): LockableDurationsInfo;
};
export declare const DistrInfo: {
    typeUrl: string;
    encode(message: DistrInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistrInfo;
    fromJSON(object: any): DistrInfo;
    toJSON(message: DistrInfo): unknown;
    fromPartial<I extends {
        totalWeight?: string | undefined;
        records?: {
            gaugeId?: bigint | undefined;
            weight?: string | undefined;
        }[] | undefined;
    } & {
        totalWeight?: string | undefined;
        records?: ({
            gaugeId?: bigint | undefined;
            weight?: string | undefined;
        }[] & ({
            gaugeId?: bigint | undefined;
            weight?: string | undefined;
        } & {
            gaugeId?: bigint | undefined;
            weight?: string | undefined;
        } & Record<Exclude<keyof I["records"][number], keyof DistrRecord>, never>)[] & Record<Exclude<keyof I["records"], keyof {
            gaugeId?: bigint | undefined;
            weight?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DistrInfo>, never>>(object: I): DistrInfo;
};
export declare const DistrRecord: {
    typeUrl: string;
    encode(message: DistrRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistrRecord;
    fromJSON(object: any): DistrRecord;
    toJSON(message: DistrRecord): unknown;
    fromPartial<I extends {
        gaugeId?: bigint | undefined;
        weight?: string | undefined;
    } & {
        gaugeId?: bigint | undefined;
        weight?: string | undefined;
    } & Record<Exclude<keyof I, keyof DistrRecord>, never>>(object: I): DistrRecord;
};
export declare const PoolToGauge: {
    typeUrl: string;
    encode(message: PoolToGauge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauge;
    fromJSON(object: any): PoolToGauge;
    toJSON(message: PoolToGauge): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        gaugeId?: bigint | undefined;
        duration?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        poolId?: bigint | undefined;
        gaugeId?: bigint | undefined;
        duration?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PoolToGauge>, never>>(object: I): PoolToGauge;
};
export declare const AnyPoolToInternalGauges: {
    typeUrl: string;
    encode(message: AnyPoolToInternalGauges, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AnyPoolToInternalGauges;
    fromJSON(object: any): AnyPoolToInternalGauges;
    toJSON(message: AnyPoolToInternalGauges): unknown;
    fromPartial<I extends {
        poolToGauge?: {
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        poolToGauge?: ({
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["poolToGauge"][number]["duration"], keyof Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["poolToGauge"][number], keyof PoolToGauge>, never>)[] & Record<Exclude<keyof I["poolToGauge"], keyof {
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "poolToGauge">, never>>(object: I): AnyPoolToInternalGauges;
};
export declare const ConcentratedPoolToNoLockGauges: {
    typeUrl: string;
    encode(message: ConcentratedPoolToNoLockGauges, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConcentratedPoolToNoLockGauges;
    fromJSON(object: any): ConcentratedPoolToNoLockGauges;
    toJSON(message: ConcentratedPoolToNoLockGauges): unknown;
    fromPartial<I extends {
        poolToGauge?: {
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        poolToGauge?: ({
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["poolToGauge"][number]["duration"], keyof Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["poolToGauge"][number], keyof PoolToGauge>, never>)[] & Record<Exclude<keyof I["poolToGauge"], keyof {
            poolId?: bigint | undefined;
            gaugeId?: bigint | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "poolToGauge">, never>>(object: I): ConcentratedPoolToNoLockGauges;
};
