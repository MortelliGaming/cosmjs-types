import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 */
export interface UploadCosmWasmPoolCodeAndWhiteListProposal {
    title: string;
    description: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 */
export interface MigratePoolContractsProposal {
    title: string;
    description: string;
    /**
     * pool_ids are the pool ids of the contracts to be migrated
     * either to the new_code_id that is already uploaded to chain or to
     * the given wasm_byte_code.
     */
    poolIds: bigint[];
    /**
     * new_code_id is the code id of the contract code to migrate to.
     * Assumes that the code is already uploaded to chain. Only one of
     * new_code_id and wasm_byte_code should be set.
     */
    newCodeId: bigint;
    /**
     * WASMByteCode can be raw or gzip compressed. Assumes that the code id
     * has not been uploaded yet so uploads the given code and migrates to it.
     * Only one of new_code_id and wasm_byte_code should be set.
     */
    wasmByteCode: Uint8Array;
    /** MigrateMsg migrate message to be used for migrating the pool contracts. */
    migrateMsg: Uint8Array;
}
export declare const UploadCosmWasmPoolCodeAndWhiteListProposal: {
    typeUrl: string;
    encode(message: UploadCosmWasmPoolCodeAndWhiteListProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UploadCosmWasmPoolCodeAndWhiteListProposal;
    fromJSON(object: any): UploadCosmWasmPoolCodeAndWhiteListProposal;
    toJSON(message: UploadCosmWasmPoolCodeAndWhiteListProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof UploadCosmWasmPoolCodeAndWhiteListProposal>, never>>(object: I): UploadCosmWasmPoolCodeAndWhiteListProposal;
};
export declare const MigratePoolContractsProposal: {
    typeUrl: string;
    encode(message: MigratePoolContractsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MigratePoolContractsProposal;
    fromJSON(object: any): MigratePoolContractsProposal;
    toJSON(message: MigratePoolContractsProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        poolIds?: bigint[] | undefined;
        newCodeId?: bigint | undefined;
        wasmByteCode?: Uint8Array | undefined;
        migrateMsg?: Uint8Array | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        poolIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["poolIds"], keyof bigint[]>, never>) | undefined;
        newCodeId?: bigint | undefined;
        wasmByteCode?: Uint8Array | undefined;
        migrateMsg?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MigratePoolContractsProposal>, never>>(object: I): MigratePoolContractsProposal;
};
