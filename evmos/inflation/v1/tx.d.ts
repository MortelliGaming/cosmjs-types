import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "evmos.inflation.v1";
/** MsgUpdateParams defines a Msg for updating the x/inflation module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/inflation parameters to update.
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
            mintDenom?: string | undefined;
            exponentialCalculation?: {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } | undefined;
            inflationDistribution?: {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            enableInflation?: boolean | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            mintDenom?: string | undefined;
            exponentialCalculation?: {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } | undefined;
            inflationDistribution?: {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } | undefined;
            enableInflation?: boolean | undefined;
        } & {
            mintDenom?: string | undefined;
            exponentialCalculation?: ({
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } & {
                a?: string | undefined;
                r?: string | undefined;
                c?: string | undefined;
                bondingTarget?: string | undefined;
                maxVariance?: string | undefined;
            } & Record<Exclude<keyof I["params"]["exponentialCalculation"], keyof import("./inflation").ExponentialCalculation>, never>) | undefined;
            inflationDistribution?: ({
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } & {
                stakingRewards?: string | undefined;
                usageIncentives?: string | undefined;
                communityPool?: string | undefined;
            } & Record<Exclude<keyof I["params"]["inflationDistribution"], keyof import("./inflation").InflationDistribution>, never>) | undefined;
            enableInflation?: boolean | undefined;
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
/** Msg defines the evm Msg service. */
export interface Msg {
    /**
     * UpdateParams defined a governance operation for updating the x/inflation module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
