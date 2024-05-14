import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.protorev.v1beta1";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposal {
    title: string;
    description: string;
    enabled: boolean;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposal {
    title: string;
    description: string;
    account: string;
}
export declare const SetProtoRevEnabledProposal: {
    typeUrl: string;
    encode(message: SetProtoRevEnabledProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SetProtoRevEnabledProposal;
    fromJSON(object: any): SetProtoRevEnabledProposal;
    toJSON(message: SetProtoRevEnabledProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        enabled?: boolean | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof SetProtoRevEnabledProposal>, never>>(object: I): SetProtoRevEnabledProposal;
};
export declare const SetProtoRevAdminAccountProposal: {
    typeUrl: string;
    encode(message: SetProtoRevAdminAccountProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SetProtoRevAdminAccountProposal;
    fromJSON(object: any): SetProtoRevAdminAccountProposal;
    toJSON(message: SetProtoRevAdminAccountProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        account?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        account?: string | undefined;
    } & Record<Exclude<keyof I, keyof SetProtoRevAdminAccountProposal>, never>>(object: I): SetProtoRevAdminAccountProposal;
};
