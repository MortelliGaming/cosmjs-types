import { TokenPairArbRoutes, InfoByPoolType, BaseDenom } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.protorev.v1beta1";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developerAccount: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolType {
    /** admin is the account that is authorized to set the pool weights. */
    admin: string;
    /** info_by_pool_type contains information about the pool types. */
    infoByPoolType: InfoByPoolType;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponse {
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
    /** admin is the account that is authorized to set the max pool points per tx. */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     */
    maxPoolPointsPerTx: bigint;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlock {
    /**
     * admin is the account that is authorized to set the max pool points per
     * block.
     */
    admin: string;
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block.
     */
    maxPoolPointsPerBlock: bigint;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenoms {
    /** admin is the account that is authorized to set the base denoms. */
    admin: string;
    /** base_denoms is the list of base denoms to set. */
    baseDenoms: BaseDenom[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {
}
export declare const MsgSetHotRoutes: {
    typeUrl: string;
    encode(message: MsgSetHotRoutes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutes;
    fromJSON(object: any): MsgSetHotRoutes;
    toJSON(message: MsgSetHotRoutes): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        hotRoutes?: {
            arbRoutes?: {
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[] | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        }[] | undefined;
    } & {
        admin?: string | undefined;
        hotRoutes?: ({
            arbRoutes?: {
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[] | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        }[] & ({
            arbRoutes?: {
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[] | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        } & {
            arbRoutes?: ({
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[] & ({
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            } & {
                trades?: ({
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] & ({
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                } & {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                } & Record<Exclude<keyof I["hotRoutes"][number]["arbRoutes"][number]["trades"][number], keyof import("./protorev").Trade>, never>)[] & Record<Exclude<keyof I["hotRoutes"][number]["arbRoutes"][number]["trades"], keyof {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[]>, never>) | undefined;
                stepSize?: string | undefined;
            } & Record<Exclude<keyof I["hotRoutes"][number]["arbRoutes"][number], keyof import("./protorev").Route>, never>)[] & Record<Exclude<keyof I["hotRoutes"][number]["arbRoutes"], keyof {
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[]>, never>) | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        } & Record<Exclude<keyof I["hotRoutes"][number], keyof TokenPairArbRoutes>, never>)[] & Record<Exclude<keyof I["hotRoutes"], keyof {
            arbRoutes?: {
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[] | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetHotRoutes>, never>>(object: I): MsgSetHotRoutes;
};
export declare const MsgSetHotRoutesResponse: {
    typeUrl: string;
    encode(_: MsgSetHotRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutesResponse;
    fromJSON(_: any): MsgSetHotRoutesResponse;
    toJSON(_: MsgSetHotRoutesResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetHotRoutesResponse;
};
export declare const MsgSetDeveloperAccount: {
    typeUrl: string;
    encode(message: MsgSetDeveloperAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccount;
    fromJSON(object: any): MsgSetDeveloperAccount;
    toJSON(message: MsgSetDeveloperAccount): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        developerAccount?: string | undefined;
    } & {
        admin?: string | undefined;
        developerAccount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetDeveloperAccount>, never>>(object: I): MsgSetDeveloperAccount;
};
export declare const MsgSetDeveloperAccountResponse: {
    typeUrl: string;
    encode(_: MsgSetDeveloperAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse;
    fromJSON(_: any): MsgSetDeveloperAccountResponse;
    toJSON(_: MsgSetDeveloperAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetDeveloperAccountResponse;
};
export declare const MsgSetInfoByPoolType: {
    typeUrl: string;
    encode(message: MsgSetInfoByPoolType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInfoByPoolType;
    fromJSON(object: any): MsgSetInfoByPoolType;
    toJSON(message: MsgSetInfoByPoolType): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        infoByPoolType?: {
            stable?: {
                weight?: bigint | undefined;
            } | undefined;
            balancer?: {
                weight?: bigint | undefined;
            } | undefined;
            concentrated?: {
                weight?: bigint | undefined;
                maxTicksCrossed?: bigint | undefined;
            } | undefined;
            cosmwasm?: {
                weightMaps?: {
                    weight?: bigint | undefined;
                    contractAddress?: string | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        admin?: string | undefined;
        infoByPoolType?: ({
            stable?: {
                weight?: bigint | undefined;
            } | undefined;
            balancer?: {
                weight?: bigint | undefined;
            } | undefined;
            concentrated?: {
                weight?: bigint | undefined;
                maxTicksCrossed?: bigint | undefined;
            } | undefined;
            cosmwasm?: {
                weightMaps?: {
                    weight?: bigint | undefined;
                    contractAddress?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            stable?: ({
                weight?: bigint | undefined;
            } & {
                weight?: bigint | undefined;
            } & Record<Exclude<keyof I["infoByPoolType"]["stable"], "weight">, never>) | undefined;
            balancer?: ({
                weight?: bigint | undefined;
            } & {
                weight?: bigint | undefined;
            } & Record<Exclude<keyof I["infoByPoolType"]["balancer"], "weight">, never>) | undefined;
            concentrated?: ({
                weight?: bigint | undefined;
                maxTicksCrossed?: bigint | undefined;
            } & {
                weight?: bigint | undefined;
                maxTicksCrossed?: bigint | undefined;
            } & Record<Exclude<keyof I["infoByPoolType"]["concentrated"], keyof import("./protorev").ConcentratedPoolInfo>, never>) | undefined;
            cosmwasm?: ({
                weightMaps?: {
                    weight?: bigint | undefined;
                    contractAddress?: string | undefined;
                }[] | undefined;
            } & {
                weightMaps?: ({
                    weight?: bigint | undefined;
                    contractAddress?: string | undefined;
                }[] & ({
                    weight?: bigint | undefined;
                    contractAddress?: string | undefined;
                } & {
                    weight?: bigint | undefined;
                    contractAddress?: string | undefined;
                } & Record<Exclude<keyof I["infoByPoolType"]["cosmwasm"]["weightMaps"][number], keyof import("./protorev").WeightMap>, never>)[] & Record<Exclude<keyof I["infoByPoolType"]["cosmwasm"]["weightMaps"], keyof {
                    weight?: bigint | undefined;
                    contractAddress?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["infoByPoolType"]["cosmwasm"], "weightMaps">, never>) | undefined;
        } & Record<Exclude<keyof I["infoByPoolType"], keyof InfoByPoolType>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetInfoByPoolType>, never>>(object: I): MsgSetInfoByPoolType;
};
export declare const MsgSetInfoByPoolTypeResponse: {
    typeUrl: string;
    encode(_: MsgSetInfoByPoolTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInfoByPoolTypeResponse;
    fromJSON(_: any): MsgSetInfoByPoolTypeResponse;
    toJSON(_: MsgSetInfoByPoolTypeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetInfoByPoolTypeResponse;
};
export declare const MsgSetMaxPoolPointsPerTx: {
    typeUrl: string;
    encode(message: MsgSetMaxPoolPointsPerTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx;
    fromJSON(object: any): MsgSetMaxPoolPointsPerTx;
    toJSON(message: MsgSetMaxPoolPointsPerTx): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        maxPoolPointsPerTx?: bigint | undefined;
    } & {
        admin?: string | undefined;
        maxPoolPointsPerTx?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetMaxPoolPointsPerTx>, never>>(object: I): MsgSetMaxPoolPointsPerTx;
};
export declare const MsgSetMaxPoolPointsPerTxResponse: {
    typeUrl: string;
    encode(_: MsgSetMaxPoolPointsPerTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse;
    fromJSON(_: any): MsgSetMaxPoolPointsPerTxResponse;
    toJSON(_: MsgSetMaxPoolPointsPerTxResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetMaxPoolPointsPerTxResponse;
};
export declare const MsgSetMaxPoolPointsPerBlock: {
    typeUrl: string;
    encode(message: MsgSetMaxPoolPointsPerBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock;
    fromJSON(object: any): MsgSetMaxPoolPointsPerBlock;
    toJSON(message: MsgSetMaxPoolPointsPerBlock): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        maxPoolPointsPerBlock?: bigint | undefined;
    } & {
        admin?: string | undefined;
        maxPoolPointsPerBlock?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetMaxPoolPointsPerBlock>, never>>(object: I): MsgSetMaxPoolPointsPerBlock;
};
export declare const MsgSetMaxPoolPointsPerBlockResponse: {
    typeUrl: string;
    encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse;
    fromJSON(_: any): MsgSetMaxPoolPointsPerBlockResponse;
    toJSON(_: MsgSetMaxPoolPointsPerBlockResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetMaxPoolPointsPerBlockResponse;
};
export declare const MsgSetBaseDenoms: {
    typeUrl: string;
    encode(message: MsgSetBaseDenoms, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenoms;
    fromJSON(object: any): MsgSetBaseDenoms;
    toJSON(message: MsgSetBaseDenoms): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        baseDenoms?: {
            denom?: string | undefined;
            stepSize?: string | undefined;
        }[] | undefined;
    } & {
        admin?: string | undefined;
        baseDenoms?: ({
            denom?: string | undefined;
            stepSize?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            stepSize?: string | undefined;
        } & {
            denom?: string | undefined;
            stepSize?: string | undefined;
        } & Record<Exclude<keyof I["baseDenoms"][number], keyof BaseDenom>, never>)[] & Record<Exclude<keyof I["baseDenoms"], keyof {
            denom?: string | undefined;
            stepSize?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetBaseDenoms>, never>>(object: I): MsgSetBaseDenoms;
};
export declare const MsgSetBaseDenomsResponse: {
    typeUrl: string;
    encode(_: MsgSetBaseDenomsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenomsResponse;
    fromJSON(_: any): MsgSetBaseDenomsResponse;
    toJSON(_: MsgSetBaseDenomsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetBaseDenomsResponse;
};
export interface Msg {
    /**
     * SetHotRoutes sets the hot routes that will be explored when creating
     * cyclic arbitrage routes. Can only be called by the admin account.
     */
    SetHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse>;
    /**
     * SetDeveloperAccount sets the account that can withdraw a portion of the
     * profits from the protorev module. This will be Skip's address.
     */
    SetDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse>;
    /**
     * SetMaxPoolPointsPerTx sets the maximum number of pool points that can be
     * consumed per transaction. Can only be called by the admin account.
     */
    SetMaxPoolPointsPerTx(request: MsgSetMaxPoolPointsPerTx): Promise<MsgSetMaxPoolPointsPerTxResponse>;
    /**
     * SetMaxPoolPointsPerBlock sets the maximum number of pool points that can be
     * consumed per block. Can only be called by the admin account.
     */
    SetMaxPoolPointsPerBlock(request: MsgSetMaxPoolPointsPerBlock): Promise<MsgSetMaxPoolPointsPerBlockResponse>;
    /**
     * SetInfoByPoolType sets the pool type information needed to make smart
     * assumptions about swapping on different pool types
     */
    SetInfoByPoolType(request: MsgSetInfoByPoolType): Promise<MsgSetInfoByPoolTypeResponse>;
    /**
     * SetBaseDenoms sets the base denoms that will be used to create cyclic
     * arbitrage routes. Can only be called by the admin account.
     */
    SetBaseDenoms(request: MsgSetBaseDenoms): Promise<MsgSetBaseDenomsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse>;
    SetDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse>;
    SetMaxPoolPointsPerTx(request: MsgSetMaxPoolPointsPerTx): Promise<MsgSetMaxPoolPointsPerTxResponse>;
    SetMaxPoolPointsPerBlock(request: MsgSetMaxPoolPointsPerBlock): Promise<MsgSetMaxPoolPointsPerBlockResponse>;
    SetInfoByPoolType(request: MsgSetInfoByPoolType): Promise<MsgSetInfoByPoolTypeResponse>;
    SetBaseDenoms(request: MsgSetBaseDenoms): Promise<MsgSetBaseDenomsResponse>;
}
