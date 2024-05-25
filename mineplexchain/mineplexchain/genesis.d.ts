import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "mineplex.mineplexchain.mineplexchain";
/** GenesisState defines the mineplexchain module's genesis state. */
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
        params?: {} | undefined;
    } & {
        params?: ({} & {} & Record<Exclude<keyof I["params"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): GenesisState;
};
