import { SuperfluidAsset } from "../superfluid";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.superfluid.v1beta1";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
    title: string;
    description: string;
    assets: SuperfluidAsset[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
    title: string;
    description: string;
    superfluidAssetDenoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
    title: string;
    description: string;
    ids: bigint[];
    isOverwrite: boolean;
}
export declare const SetSuperfluidAssetsProposal: {
    typeUrl: string;
    encode(message: SetSuperfluidAssetsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SetSuperfluidAssetsProposal;
    fromJSON(object: any): SetSuperfluidAssetsProposal;
    toJSON(message: SetSuperfluidAssetsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        assets?: {
            denom?: string | undefined;
            assetType?: import("../superfluid").SuperfluidAssetType | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        assets?: ({
            denom?: string | undefined;
            assetType?: import("../superfluid").SuperfluidAssetType | undefined;
        }[] & ({
            denom?: string | undefined;
            assetType?: import("../superfluid").SuperfluidAssetType | undefined;
        } & {
            denom?: string | undefined;
            assetType?: import("../superfluid").SuperfluidAssetType | undefined;
        } & Record<Exclude<keyof I["assets"][number], keyof SuperfluidAsset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
            denom?: string | undefined;
            assetType?: import("../superfluid").SuperfluidAssetType | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SetSuperfluidAssetsProposal>, never>>(object: I): SetSuperfluidAssetsProposal;
};
export declare const RemoveSuperfluidAssetsProposal: {
    typeUrl: string;
    encode(message: RemoveSuperfluidAssetsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RemoveSuperfluidAssetsProposal;
    fromJSON(object: any): RemoveSuperfluidAssetsProposal;
    toJSON(message: RemoveSuperfluidAssetsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        superfluidAssetDenoms?: string[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        superfluidAssetDenoms?: (string[] & string[] & Record<Exclude<keyof I["superfluidAssetDenoms"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RemoveSuperfluidAssetsProposal>, never>>(object: I): RemoveSuperfluidAssetsProposal;
};
export declare const UpdateUnpoolWhiteListProposal: {
    typeUrl: string;
    encode(message: UpdateUnpoolWhiteListProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateUnpoolWhiteListProposal;
    fromJSON(object: any): UpdateUnpoolWhiteListProposal;
    toJSON(message: UpdateUnpoolWhiteListProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        ids?: bigint[] | undefined;
        isOverwrite?: boolean | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        ids?: (bigint[] & bigint[] & Record<Exclude<keyof I["ids"], keyof bigint[]>, never>) | undefined;
        isOverwrite?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof UpdateUnpoolWhiteListProposal>, never>>(object: I): UpdateUnpoolWhiteListProposal;
};
