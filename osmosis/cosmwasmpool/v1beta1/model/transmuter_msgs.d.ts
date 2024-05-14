import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequest {
}
export interface JoinPoolExecuteMsgRequest {
    /**
     * join_pool is the structure containing all request fields of the join pool
     * execute message.
     */
    joinPool: EmptyRequest;
}
export interface JoinPoolExecuteMsgResponse {
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequest {
    /**
     * exit_pool is the structure containing all request fields of the exit pool
     * execute message.
     */
    exitPool: EmptyRequest;
}
export interface ExitPoolExecuteMsgResponse {
}
export declare const EmptyRequest: {
    typeUrl: string;
    encode(_: EmptyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EmptyRequest;
    fromJSON(_: any): EmptyRequest;
    toJSON(_: EmptyRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): EmptyRequest;
};
export declare const JoinPoolExecuteMsgRequest: {
    typeUrl: string;
    encode(message: JoinPoolExecuteMsgRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): JoinPoolExecuteMsgRequest;
    fromJSON(object: any): JoinPoolExecuteMsgRequest;
    toJSON(message: JoinPoolExecuteMsgRequest): unknown;
    fromPartial<I extends {
        joinPool?: {} | undefined;
    } & {
        joinPool?: ({} & {} & Record<Exclude<keyof I["joinPool"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "joinPool">, never>>(object: I): JoinPoolExecuteMsgRequest;
};
export declare const JoinPoolExecuteMsgResponse: {
    typeUrl: string;
    encode(_: JoinPoolExecuteMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): JoinPoolExecuteMsgResponse;
    fromJSON(_: any): JoinPoolExecuteMsgResponse;
    toJSON(_: JoinPoolExecuteMsgResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): JoinPoolExecuteMsgResponse;
};
export declare const ExitPoolExecuteMsgRequest: {
    typeUrl: string;
    encode(message: ExitPoolExecuteMsgRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExitPoolExecuteMsgRequest;
    fromJSON(object: any): ExitPoolExecuteMsgRequest;
    toJSON(message: ExitPoolExecuteMsgRequest): unknown;
    fromPartial<I extends {
        exitPool?: {} | undefined;
    } & {
        exitPool?: ({} & {} & Record<Exclude<keyof I["exitPool"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "exitPool">, never>>(object: I): ExitPoolExecuteMsgRequest;
};
export declare const ExitPoolExecuteMsgResponse: {
    typeUrl: string;
    encode(_: ExitPoolExecuteMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExitPoolExecuteMsgResponse;
    fromJSON(_: any): ExitPoolExecuteMsgResponse;
    toJSON(_: ExitPoolExecuteMsgResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ExitPoolExecuteMsgResponse;
};
