import { Params } from "./params";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** GenesisState defines the cosmwasmpool module's genesis state. */
export interface GenesisState {
    /** params is the container of cosmwasmpool parameters. */
    params: Params;
    pools: Any[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            codeIdWhitelist?: bigint[] | undefined;
            poolMigrationLimit?: bigint | undefined;
        } | undefined;
        pools?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        params?: ({
            codeIdWhitelist?: bigint[] | undefined;
            poolMigrationLimit?: bigint | undefined;
        } & {
            codeIdWhitelist?: (bigint[] & bigint[] & Record<Exclude<keyof I["params"]["codeIdWhitelist"], keyof bigint[]>, never>) | undefined;
            poolMigrationLimit?: bigint | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        pools?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
