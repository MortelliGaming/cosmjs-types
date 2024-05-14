import { DistrRecord } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.poolincentives.v1beta1";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposal {
    title: string;
    description: string;
    records: DistrRecord[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposal {
    title: string;
    description: string;
    records: DistrRecord[];
}
export declare const ReplacePoolIncentivesProposal: {
    typeUrl: string;
    encode(message: ReplacePoolIncentivesProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ReplacePoolIncentivesProposal;
    fromJSON(object: any): ReplacePoolIncentivesProposal;
    toJSON(message: ReplacePoolIncentivesProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        records?: {
            gaugeId?: bigint | undefined;
            weight?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof ReplacePoolIncentivesProposal>, never>>(object: I): ReplacePoolIncentivesProposal;
};
export declare const UpdatePoolIncentivesProposal: {
    typeUrl: string;
    encode(message: UpdatePoolIncentivesProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdatePoolIncentivesProposal;
    fromJSON(object: any): UpdatePoolIncentivesProposal;
    toJSON(message: UpdatePoolIncentivesProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        records?: {
            gaugeId?: bigint | undefined;
            weight?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof UpdatePoolIncentivesProposal>, never>>(object: I): UpdatePoolIncentivesProposal;
};
