import { Params } from "./feemarket";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the feemarket module. */
    params: Params;
    /**
     * block_gas is the amount of gas wanted on the last block before the upgrade.
     * Zero by default.
     */
    blockGas: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            noBaseFee?: boolean | undefined;
            baseFeeChangeDenominator?: number | undefined;
            elasticityMultiplier?: number | undefined;
            enableHeight?: bigint | undefined;
            baseFee?: string | undefined;
            minGasPrice?: string | undefined;
            minGasMultiplier?: string | undefined;
        } | undefined;
        blockGas?: bigint | undefined;
    } & {
        params?: ({
            noBaseFee?: boolean | undefined;
            baseFeeChangeDenominator?: number | undefined;
            elasticityMultiplier?: number | undefined;
            enableHeight?: bigint | undefined;
            baseFee?: string | undefined;
            minGasPrice?: string | undefined;
            minGasMultiplier?: string | undefined;
        } & {
            noBaseFee?: boolean | undefined;
            baseFeeChangeDenominator?: number | undefined;
            elasticityMultiplier?: number | undefined;
            enableHeight?: bigint | undefined;
            baseFee?: string | undefined;
            minGasPrice?: string | undefined;
            minGasMultiplier?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        blockGas?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
