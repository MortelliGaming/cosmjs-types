import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.txfees.v1beta1";
/** ===================== MsgSetFeeTokens */
export interface MsgSetFeeTokens {
    feeTokens: FeeToken[];
    sender: string;
}
export interface MsgSetFeeTokensResponse {
}
export declare const MsgSetFeeTokens: {
    typeUrl: string;
    encode(message: MsgSetFeeTokens, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFeeTokens;
    fromJSON(object: any): MsgSetFeeTokens;
    toJSON(message: MsgSetFeeTokens): unknown;
    fromPartial<I extends {
        feeTokens?: {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        feeTokens?: ({
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[] & ({
            denom?: string | undefined;
            poolID?: bigint | undefined;
        } & {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        } & Record<Exclude<keyof I["feeTokens"][number], keyof FeeToken>, never>)[] & Record<Exclude<keyof I["feeTokens"], keyof {
            denom?: string | undefined;
            poolID?: bigint | undefined;
        }[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetFeeTokens>, never>>(object: I): MsgSetFeeTokens;
};
export declare const MsgSetFeeTokensResponse: {
    typeUrl: string;
    encode(_: MsgSetFeeTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFeeTokensResponse;
    fromJSON(_: any): MsgSetFeeTokensResponse;
    toJSON(_: MsgSetFeeTokensResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetFeeTokensResponse;
};
export interface Msg {
    SetFeeTokens(request: MsgSetFeeTokens): Promise<MsgSetFeeTokensResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetFeeTokens(request: MsgSetFeeTokens): Promise<MsgSetFeeTokensResponse>;
}
