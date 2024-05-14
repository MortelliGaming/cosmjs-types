import { CreateGroup } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.incentives";
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposal {
    title: string;
    description: string;
    createGroups: CreateGroup[];
}
export declare const CreateGroupsProposal: {
    typeUrl: string;
    encode(message: CreateGroupsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreateGroupsProposal;
    fromJSON(object: any): CreateGroupsProposal;
    toJSON(message: CreateGroupsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        createGroups?: {
            poolIds?: bigint[] | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        createGroups?: ({
            poolIds?: bigint[] | undefined;
        }[] & ({
            poolIds?: bigint[] | undefined;
        } & {
            poolIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["createGroups"][number]["poolIds"], keyof bigint[]>, never>) | undefined;
        } & Record<Exclude<keyof I["createGroups"][number], "poolIds">, never>)[] & Record<Exclude<keyof I["createGroups"], keyof {
            poolIds?: bigint[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CreateGroupsProposal>, never>>(object: I): CreateGroupsProposal;
};
