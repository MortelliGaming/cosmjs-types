import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.ibcratelimit.v1beta1";
/** GenesisState defines the ibc-rate-limit module's genesis state. */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            contractAddress?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            contractAddress?: string | undefined;
        } & {
            contractAddress?: string | undefined;
        } & Record<Exclude<keyof I["params"], "contractAddress">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): GenesisState;
};
