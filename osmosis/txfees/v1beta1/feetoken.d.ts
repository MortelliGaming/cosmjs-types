import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.txfees.v1beta1";
/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeToken {
    denom: string;
    poolID: bigint;
}
export declare const FeeToken: {
    typeUrl: string;
    encode(message: FeeToken, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeeToken;
    fromJSON(object: any): FeeToken;
    toJSON(message: FeeToken): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        poolID?: bigint | undefined;
    } & {
        denom?: string | undefined;
        poolID?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof FeeToken>, never>>(object: I): FeeToken;
};
