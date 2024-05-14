import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
export interface Params {
    /**
     * code_ide_whitelist contains the list of code ids that are allowed to be
     * instantiated.
     */
    codeIdWhitelist: bigint[];
    /**
     * pool_migration_limit is the maximum number of pools that can be migrated
     * at once via governance proposal. This is to have a constant bound on the
     * number of pools that can be migrated at once and remove the possibility
     * of an unlikely scenario of causing a chain halt due to a large migration.
     */
    poolMigrationLimit: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        codeIdWhitelist?: bigint[] | undefined;
        poolMigrationLimit?: bigint | undefined;
    } & {
        codeIdWhitelist?: (bigint[] & bigint[] & Record<Exclude<keyof I["codeIdWhitelist"], keyof bigint[]>, never>) | undefined;
        poolMigrationLimit?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
