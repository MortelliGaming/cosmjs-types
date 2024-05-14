import { FeeToken } from "./feetoken";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.txfees.v1beta1";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
    basedenom: string;
    feetokens: FeeToken[];
    /** params is the container of txfees parameters. */
    params: Params;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        basedenom?: string | undefined;
        feetokens?: {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[] | undefined;
        params?: {
            whitelistedFeeTokenSetters?: string[] | undefined;
        } | undefined;
    } & {
        basedenom?: string | undefined;
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
        params?: ({
            whitelistedFeeTokenSetters?: string[] | undefined;
        } & {
            whitelistedFeeTokenSetters?: (string[] & string[] & Record<Exclude<keyof I["params"]["whitelistedFeeTokenSetters"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "whitelistedFeeTokenSetters">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
