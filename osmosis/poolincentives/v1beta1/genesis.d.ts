import { Params, DistrInfo, AnyPoolToInternalGauges, ConcentratedPoolToNoLockGauges } from "./incentives";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.poolincentives.v1beta1";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    lockableDurations: Duration[];
    distrInfo?: DistrInfo;
    /**
     * any_pool_to_internal_gauges defines the gauges for any pool to internal
     * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
     * link
     */
    anyPoolToInternalGauges?: AnyPoolToInternalGauges;
    /**
     * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
     * concentrated pool. This only exists between concentrated pool and no lock
     * gauges. Both external and internal gauges are included.
     */
    concentratedPoolToNoLockGauges?: ConcentratedPoolToNoLockGauges;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            mintedDenom?: string | undefined;
        } | undefined;
        lockableDurations?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        }[] | undefined;
        distrInfo?: {
            totalWeight?: string | undefined;
            records?: {
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } | undefined;
        anyPoolToInternalGauges?: {
            poolToGauge?: {
                poolId?: bigint | undefined;
                gaugeId?: bigint | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        concentratedPoolToNoLockGauges?: {
            poolToGauge?: {
                poolId?: bigint | undefined;
                gaugeId?: bigint | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        params?: ({
            mintedDenom?: string | undefined;
        } & {
            mintedDenom?: string | undefined;
        } & Record<Exclude<keyof I["params"], "mintedDenom">, never>) | undefined;
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
        distrInfo?: ({
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
            } & Record<Exclude<keyof I["distrInfo"]["records"][number], keyof import("./incentives").DistrRecord>, never>)[] & Record<Exclude<keyof I["distrInfo"]["records"], keyof {
                gaugeId?: bigint | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["distrInfo"], keyof DistrInfo>, never>) | undefined;
        anyPoolToInternalGauges?: ({
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
                } & Record<Exclude<keyof I["anyPoolToInternalGauges"]["poolToGauge"][number]["duration"], keyof Duration>, never>) | undefined;
            } & Record<Exclude<keyof I["anyPoolToInternalGauges"]["poolToGauge"][number], keyof import("./incentives").PoolToGauge>, never>)[] & Record<Exclude<keyof I["anyPoolToInternalGauges"]["poolToGauge"], keyof {
                poolId?: bigint | undefined;
                gaugeId?: bigint | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["anyPoolToInternalGauges"], "poolToGauge">, never>) | undefined;
        concentratedPoolToNoLockGauges?: ({
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
                } & Record<Exclude<keyof I["concentratedPoolToNoLockGauges"]["poolToGauge"][number]["duration"], keyof Duration>, never>) | undefined;
            } & Record<Exclude<keyof I["concentratedPoolToNoLockGauges"]["poolToGauge"][number], keyof import("./incentives").PoolToGauge>, never>)[] & Record<Exclude<keyof I["concentratedPoolToNoLockGauges"]["poolToGauge"], keyof {
                poolId?: bigint | undefined;
                gaugeId?: bigint | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["concentratedPoolToNoLockGauges"], "poolToGauge">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
