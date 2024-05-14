import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.superfluid";
/** Params holds parameters for the superfluid module */
export interface Params {
    /**
     * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
     * superfluid staking, default: 5%. The minimum risk factor works
     * to counter-balance the staked amount on chain's exposure to various asset
     * volatilities, and have base staking be 'resistant' to volatility.
     */
    minimumRiskFactor: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        minimumRiskFactor?: string | undefined;
    } & {
        minimumRiskFactor?: string | undefined;
    } & Record<Exclude<keyof I, "minimumRiskFactor">, never>>(object: I): Params;
};
