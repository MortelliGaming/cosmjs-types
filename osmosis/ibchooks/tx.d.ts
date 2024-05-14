import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "osmosis.ibchooks";
export interface MsgEmitIBCAck {
    sender: string;
    packetSequence: bigint;
    channel: string;
}
export interface MsgEmitIBCAckResponse {
    contractResult: string;
    ibcAck: string;
}
export declare const MsgEmitIBCAck: {
    typeUrl: string;
    encode(message: MsgEmitIBCAck, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEmitIBCAck;
    fromJSON(object: any): MsgEmitIBCAck;
    toJSON(message: MsgEmitIBCAck): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        packetSequence?: bigint | undefined;
        channel?: string | undefined;
    } & {
        sender?: string | undefined;
        packetSequence?: bigint | undefined;
        channel?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgEmitIBCAck>, never>>(object: I): MsgEmitIBCAck;
};
export declare const MsgEmitIBCAckResponse: {
    typeUrl: string;
    encode(message: MsgEmitIBCAckResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEmitIBCAckResponse;
    fromJSON(object: any): MsgEmitIBCAckResponse;
    toJSON(message: MsgEmitIBCAckResponse): unknown;
    fromPartial<I extends {
        contractResult?: string | undefined;
        ibcAck?: string | undefined;
    } & {
        contractResult?: string | undefined;
        ibcAck?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgEmitIBCAckResponse>, never>>(object: I): MsgEmitIBCAckResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * EmitIBCAck checks the sender can emit the ack and writes the IBC
     * acknowledgement
     */
    EmitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    EmitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse>;
}
