import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "mineplex.mineplexchain.treasury";
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisState {
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
            owner?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            owner?: string | undefined;
        } & {
            owner?: string | undefined;
        } & Record<Exclude<keyof I["params"], "owner">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): GenesisState;
};
