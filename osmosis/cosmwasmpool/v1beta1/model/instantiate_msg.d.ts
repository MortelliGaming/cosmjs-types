import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/** ===================== InstantiateMsg */
export interface InstantiateMsg {
    /**
     * pool_asset_denoms is the list of asset denoms that are initialized
     * at pool creation time.
     */
    poolAssetDenoms: string[];
}
export declare const InstantiateMsg: {
    typeUrl: string;
    encode(message: InstantiateMsg, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InstantiateMsg;
    fromJSON(object: any): InstantiateMsg;
    toJSON(message: InstantiateMsg): unknown;
    fromPartial<I extends {
        poolAssetDenoms?: string[] | undefined;
    } & {
        poolAssetDenoms?: (string[] & string[] & Record<Exclude<keyof I["poolAssetDenoms"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "poolAssetDenoms">, never>>(object: I): InstantiateMsg;
};
