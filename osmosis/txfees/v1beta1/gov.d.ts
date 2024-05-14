import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.txfees.v1beta1";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
    title: string;
    description: string;
    feetokens: FeeToken[];
}
export declare const UpdateFeeTokenProposal: {
    typeUrl: string;
    encode(message: UpdateFeeTokenProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateFeeTokenProposal;
    fromJSON(object: any): UpdateFeeTokenProposal;
    toJSON(message: UpdateFeeTokenProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        feetokens?: {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        feetokens?: ({
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[] & ({
            denom?: string | undefined;
            poolID?: bigint | undefined;
        } & {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        } & Record<Exclude<keyof I["feetokens"][number], keyof FeeToken>, never>)[] & Record<Exclude<keyof I["feetokens"], keyof {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UpdateFeeTokenProposal>, never>>(object: I): UpdateFeeTokenProposal;
};
