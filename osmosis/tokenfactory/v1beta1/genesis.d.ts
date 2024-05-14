import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the parameters of the module. */
    params: Params;
    factoryDenoms: GenesisDenom[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authorityMetadata: DenomAuthorityMetadata;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            denomCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            denomCreationGasConsume?: bigint | undefined;
        } | undefined;
        factoryDenoms?: {
            denom?: string | undefined;
            authorityMetadata?: {
                admin?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        params?: ({
            denomCreationFee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            denomCreationGasConsume?: bigint | undefined;
        } & {
            denomCreationFee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["params"]["denomCreationFee"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["params"]["denomCreationFee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            denomCreationGasConsume?: bigint | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        factoryDenoms?: ({
            denom?: string | undefined;
            authorityMetadata?: {
                admin?: string | undefined;
            } | undefined;
        }[] & ({
            denom?: string | undefined;
            authorityMetadata?: {
                admin?: string | undefined;
            } | undefined;
        } & {
            denom?: string | undefined;
            authorityMetadata?: ({
                admin?: string | undefined;
            } & {
                admin?: string | undefined;
            } & Record<Exclude<keyof I["factoryDenoms"][number]["authorityMetadata"], "admin">, never>) | undefined;
        } & Record<Exclude<keyof I["factoryDenoms"][number], keyof GenesisDenom>, never>)[] & Record<Exclude<keyof I["factoryDenoms"], keyof {
            denom?: string | undefined;
            authorityMetadata?: {
                admin?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisDenom: {
    typeUrl: string;
    encode(message: GenesisDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisDenom;
    fromJSON(object: any): GenesisDenom;
    toJSON(message: GenesisDenom): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        authorityMetadata?: {
            admin?: string | undefined;
        } | undefined;
    } & {
        denom?: string | undefined;
        authorityMetadata?: ({
            admin?: string | undefined;
        } & {
            admin?: string | undefined;
        } & Record<Exclude<keyof I["authorityMetadata"], "admin">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisDenom>, never>>(object: I): GenesisDenom;
};
