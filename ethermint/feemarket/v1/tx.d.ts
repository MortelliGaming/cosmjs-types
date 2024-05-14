import { Params } from "./feemarket";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "ethermint.feemarket.v1";
/** MsgUpdateParams defines a Msg for updating the x/feemarket module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/feemarket parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            noBaseFee?: boolean | undefined;
            baseFeeChangeDenominator?: number | undefined;
            elasticityMultiplier?: number | undefined;
            enableHeight?: bigint | undefined;
            baseFee?: string | undefined;
            minGasPrice?: string | undefined;
            minGasMultiplier?: string | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof MsgUpdateParams>, never>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateParamsResponse;
};
/** Msg defines the erc20 Msg service. */
export interface Msg {
    /**
     * UpdateParams defined a governance operation for updating the x/feemarket module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
