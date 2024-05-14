import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    /**
     * DenomCreationFee defines the fee to be charged on the creation of a new
     * denom. The fee is drawn from the MsgCreateDenom's sender account, and
     * transferred to the community pool.
     */
    denomCreationFee: Coin[];
    /**
     * DenomCreationGasConsume defines the gas cost for creating a new denom.
     * This is intended as a spam deterrence mechanism.
     *
     * See: https://github.com/CosmWasm/token-factory/issues/11
     */
    denomCreationGasConsume?: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["denomCreationFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["denomCreationFee"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        denomCreationGasConsume?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
