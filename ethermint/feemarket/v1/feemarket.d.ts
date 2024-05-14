import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** Params defines the EVM module parameters */
export interface Params {
    /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
    noBaseFee: boolean;
    /**
     * base_fee_change_denominator bounds the amount the base fee can change
     * between blocks.
     */
    baseFeeChangeDenominator: number;
    /**
     * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     */
    elasticityMultiplier: number;
    /** enable_height defines at which block height the base fee calculation is enabled. */
    enableHeight: bigint;
    /** base_fee for EIP-1559 blocks. */
    baseFee: string;
    /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
    minGasPrice: string;
    /**
     * min_gas_multiplier bounds the minimum gas used to be charged
     * to senders based on gas limit
     */
    minGasMultiplier: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
