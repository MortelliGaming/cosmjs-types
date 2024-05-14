import { DenomPairTakerFee } from "./tx";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.poolmanager.v1beta1";
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposal {
    title: string;
    description: string;
    denomPairTakerFee: DenomPairTakerFee[];
}
export declare const DenomPairTakerFeeProposal: {
    typeUrl: string;
    encode(message: DenomPairTakerFeeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomPairTakerFeeProposal;
    fromJSON(object: any): DenomPairTakerFeeProposal;
    toJSON(message: DenomPairTakerFeeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        denomPairTakerFee?: {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        denomPairTakerFee?: ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[] & ({
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        } & {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        } & Record<Exclude<keyof I["denomPairTakerFee"][number], keyof DenomPairTakerFee>, never>)[] & Record<Exclude<keyof I["denomPairTakerFee"], keyof {
            denom0?: string | undefined;
            denom1?: string | undefined;
            takerFee?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DenomPairTakerFeeProposal>, never>>(object: I): DenomPairTakerFeeProposal;
};
