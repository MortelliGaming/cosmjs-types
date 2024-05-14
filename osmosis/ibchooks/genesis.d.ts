import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.ibchooks";
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
            allowedAsyncAckContracts?: string[] | undefined;
        } | undefined;
    } & {
        params?: ({
            allowedAsyncAckContracts?: string[] | undefined;
        } & {
            allowedAsyncAckContracts?: (string[] & string[] & Record<Exclude<keyof I["params"]["allowedAsyncAckContracts"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "allowedAsyncAckContracts">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): GenesisState;
};
