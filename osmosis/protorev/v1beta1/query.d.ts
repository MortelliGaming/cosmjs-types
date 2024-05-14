import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, TokenPairArbRoutes, InfoByPoolType, BaseDenom, AllProtocolRevenue } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.protorev.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
    /** denom is the denom to query profits by */
    denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
    /** profit is the profits of the module by the selected denom */
    profit?: Coin;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
    /** profits is a list of all of the profits from the module */
    profits: Coin[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteRequest {
    /** route is the set of pool ids to query statistics by i.e. 1,2,3 */
    route: bigint[];
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 */
export interface QueryGetProtoRevStatisticsByRouteResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics: RouteStatistics;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsRequest {
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 */
export interface QueryGetProtoRevAllRouteStatisticsResponse {
    /**
     * statistics contains the number of trades/profits the module has executed on
     * all routes it has successfully executed a trade on
     */
    statistics: RouteStatistics[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     */
    routes: TokenPairArbRoutes[];
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountRequest {
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 */
export interface QueryGetProtoRevAdminAccountResponse {
    /** admin_account is the admin account of the module */
    adminAccount: string;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountRequest {
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 */
export interface QueryGetProtoRevDeveloperAccountResponse {
    /** developer_account is the developer account of the module */
    developerAccount: string;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeRequest {
}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 */
export interface QueryGetProtoRevInfoByPoolTypeResponse {
    /**
     * InfoByPoolType contains all information pertaining to how different
     * pool types are handled by the module.
     */
    infoByPoolType: InfoByPoolType;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockRequest {
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerBlockResponse {
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block
     */
    maxPoolPointsPerBlock: bigint;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxRequest {
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 */
export interface QueryGetProtoRevMaxPoolPointsPerTxResponse {
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction
     */
    maxPoolPointsPerTx: bigint;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsRequest {
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 */
export interface QueryGetProtoRevBaseDenomsResponse {
    /** base_denoms is a list of all of the base denoms and step sizes */
    baseDenoms: BaseDenom[];
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledRequest {
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 */
export interface QueryGetProtoRevEnabledResponse {
    /** enabled is whether the module is enabled */
    enabled: boolean;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolRequest {
    /**
     * base_denom is the base denom set in protorev for the denom pair to pool
     * mapping
     */
    baseDenom: string;
    /** other_denom is the other denom for the denom pair to pool mapping */
    otherDenom: string;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 */
export interface QueryGetProtoRevPoolResponse {
    /** pool_id is the pool_id stored for the denom pair */
    poolId: bigint;
}
export interface QueryGetAllProtocolRevenueRequest {
}
export interface QueryGetAllProtocolRevenueResponse {
    allProtocolRevenue: AllProtocolRevenue;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            enabled?: boolean | undefined;
            admin?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            enabled?: boolean | undefined;
            admin?: string | undefined;
        } & {
            enabled?: boolean | undefined;
            admin?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryGetProtoRevNumberOfTradesRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevNumberOfTradesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest;
    fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest;
    toJSON(_: QueryGetProtoRevNumberOfTradesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevNumberOfTradesRequest;
};
export declare const QueryGetProtoRevNumberOfTradesResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevNumberOfTradesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse;
    fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse;
    toJSON(message: QueryGetProtoRevNumberOfTradesResponse): unknown;
    fromPartial<I extends {
        numberOfTrades?: string | undefined;
    } & {
        numberOfTrades?: string | undefined;
    } & Record<Exclude<keyof I, "numberOfTrades">, never>>(object: I): QueryGetProtoRevNumberOfTradesResponse;
};
export declare const QueryGetProtoRevProfitsByDenomRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevProfitsByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest;
    toJSON(message: QueryGetProtoRevProfitsByDenomRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryGetProtoRevProfitsByDenomRequest;
};
export declare const QueryGetProtoRevProfitsByDenomResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevProfitsByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse;
    toJSON(message: QueryGetProtoRevProfitsByDenomResponse): unknown;
    fromPartial<I extends {
        profit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        profit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["profit"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, "profit">, never>>(object: I): QueryGetProtoRevProfitsByDenomResponse;
};
export declare const QueryGetProtoRevAllProfitsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAllProfitsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest;
    fromJSON(_: any): QueryGetProtoRevAllProfitsRequest;
    toJSON(_: QueryGetProtoRevAllProfitsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevAllProfitsRequest;
};
export declare const QueryGetProtoRevAllProfitsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAllProfitsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse;
    fromJSON(object: any): QueryGetProtoRevAllProfitsResponse;
    toJSON(message: QueryGetProtoRevAllProfitsResponse): unknown;
    fromPartial<I extends {
        profits?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        profits?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["profits"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["profits"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "profits">, never>>(object: I): QueryGetProtoRevAllProfitsResponse;
};
export declare const QueryGetProtoRevStatisticsByRouteRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevStatisticsByRouteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteRequest;
    fromJSON(object: any): QueryGetProtoRevStatisticsByRouteRequest;
    toJSON(message: QueryGetProtoRevStatisticsByRouteRequest): unknown;
    fromPartial<I extends {
        route?: bigint[] | undefined;
    } & {
        route?: (bigint[] & bigint[] & Record<Exclude<keyof I["route"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "route">, never>>(object: I): QueryGetProtoRevStatisticsByRouteRequest;
};
export declare const QueryGetProtoRevStatisticsByRouteResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevStatisticsByRouteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByRouteResponse;
    fromJSON(object: any): QueryGetProtoRevStatisticsByRouteResponse;
    toJSON(message: QueryGetProtoRevStatisticsByRouteResponse): unknown;
    fromPartial<I extends {
        statistics?: {
            profits?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            numberOfTrades?: string | undefined;
            route?: bigint[] | undefined;
        } | undefined;
    } & {
        statistics?: ({
            profits?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            numberOfTrades?: string | undefined;
            route?: bigint[] | undefined;
        } & {
            profits?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["statistics"]["profits"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["statistics"]["profits"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            numberOfTrades?: string | undefined;
            route?: (bigint[] & bigint[] & Record<Exclude<keyof I["statistics"]["route"], keyof bigint[]>, never>) | undefined;
        } & Record<Exclude<keyof I["statistics"], keyof RouteStatistics>, never>) | undefined;
    } & Record<Exclude<keyof I, "statistics">, never>>(object: I): QueryGetProtoRevStatisticsByRouteResponse;
};
export declare const QueryGetProtoRevAllRouteStatisticsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAllRouteStatisticsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsRequest;
    fromJSON(_: any): QueryGetProtoRevAllRouteStatisticsRequest;
    toJSON(_: QueryGetProtoRevAllRouteStatisticsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevAllRouteStatisticsRequest;
};
export declare const QueryGetProtoRevAllRouteStatisticsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAllRouteStatisticsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllRouteStatisticsResponse;
    fromJSON(object: any): QueryGetProtoRevAllRouteStatisticsResponse;
    toJSON(message: QueryGetProtoRevAllRouteStatisticsResponse): unknown;
    fromPartial<I extends {
        statistics?: {
            profits?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            numberOfTrades?: string | undefined;
            route?: bigint[] | undefined;
        }[] | undefined;
    } & {
        statistics?: ({
            profits?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            numberOfTrades?: string | undefined;
            route?: bigint[] | undefined;
        }[] & ({
            profits?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            numberOfTrades?: string | undefined;
            route?: bigint[] | undefined;
        } & {
            profits?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["statistics"][number]["profits"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["statistics"][number]["profits"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            numberOfTrades?: string | undefined;
            route?: (bigint[] & bigint[] & Record<Exclude<keyof I["statistics"][number]["route"], keyof bigint[]>, never>) | undefined;
        } & Record<Exclude<keyof I["statistics"][number], keyof RouteStatistics>, never>)[] & Record<Exclude<keyof I["statistics"], keyof {
            profits?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            numberOfTrades?: string | undefined;
            route?: bigint[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "statistics">, never>>(object: I): QueryGetProtoRevAllRouteStatisticsResponse;
};
export declare const QueryGetProtoRevTokenPairArbRoutesRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest;
    toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevTokenPairArbRoutesRequest;
};
export declare const QueryGetProtoRevTokenPairArbRoutesResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse;
    toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
    fromPartial<I extends {
        routes?: {
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
        routes?: ({
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
                } & Record<Exclude<keyof I["routes"][number]["arbRoutes"][number]["trades"][number], keyof import("./protorev").Trade>, never>)[] & Record<Exclude<keyof I["routes"][number]["arbRoutes"][number]["trades"], keyof {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[]>, never>) | undefined;
                stepSize?: string | undefined;
            } & Record<Exclude<keyof I["routes"][number]["arbRoutes"][number], keyof import("./protorev").Route>, never>)[] & Record<Exclude<keyof I["routes"][number]["arbRoutes"], keyof {
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[]>, never>) | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        } & Record<Exclude<keyof I["routes"][number], keyof TokenPairArbRoutes>, never>)[] & Record<Exclude<keyof I["routes"], keyof {
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
    } & Record<Exclude<keyof I, "routes">, never>>(object: I): QueryGetProtoRevTokenPairArbRoutesResponse;
};
export declare const QueryGetProtoRevAdminAccountRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAdminAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountRequest;
    fromJSON(_: any): QueryGetProtoRevAdminAccountRequest;
    toJSON(_: QueryGetProtoRevAdminAccountRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevAdminAccountRequest;
};
export declare const QueryGetProtoRevAdminAccountResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAdminAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAdminAccountResponse;
    fromJSON(object: any): QueryGetProtoRevAdminAccountResponse;
    toJSON(message: QueryGetProtoRevAdminAccountResponse): unknown;
    fromPartial<I extends {
        adminAccount?: string | undefined;
    } & {
        adminAccount?: string | undefined;
    } & Record<Exclude<keyof I, "adminAccount">, never>>(object: I): QueryGetProtoRevAdminAccountResponse;
};
export declare const QueryGetProtoRevDeveloperAccountRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevDeveloperAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountRequest;
    fromJSON(_: any): QueryGetProtoRevDeveloperAccountRequest;
    toJSON(_: QueryGetProtoRevDeveloperAccountRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevDeveloperAccountRequest;
};
export declare const QueryGetProtoRevDeveloperAccountResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevDeveloperAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevDeveloperAccountResponse;
    fromJSON(object: any): QueryGetProtoRevDeveloperAccountResponse;
    toJSON(message: QueryGetProtoRevDeveloperAccountResponse): unknown;
    fromPartial<I extends {
        developerAccount?: string | undefined;
    } & {
        developerAccount?: string | undefined;
    } & Record<Exclude<keyof I, "developerAccount">, never>>(object: I): QueryGetProtoRevDeveloperAccountResponse;
};
export declare const QueryGetProtoRevInfoByPoolTypeRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevInfoByPoolTypeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevInfoByPoolTypeRequest;
    fromJSON(_: any): QueryGetProtoRevInfoByPoolTypeRequest;
    toJSON(_: QueryGetProtoRevInfoByPoolTypeRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevInfoByPoolTypeRequest;
};
export declare const QueryGetProtoRevInfoByPoolTypeResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevInfoByPoolTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevInfoByPoolTypeResponse;
    fromJSON(object: any): QueryGetProtoRevInfoByPoolTypeResponse;
    toJSON(message: QueryGetProtoRevInfoByPoolTypeResponse): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "infoByPoolType">, never>>(object: I): QueryGetProtoRevInfoByPoolTypeResponse;
};
export declare const QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    toJSON(_: QueryGetProtoRevMaxPoolPointsPerBlockRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
};
export declare const QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    toJSON(message: QueryGetProtoRevMaxPoolPointsPerBlockResponse): unknown;
    fromPartial<I extends {
        maxPoolPointsPerBlock?: bigint | undefined;
    } & {
        maxPoolPointsPerBlock?: bigint | undefined;
    } & Record<Exclude<keyof I, "maxPoolPointsPerBlock">, never>>(object: I): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
};
export declare const QueryGetProtoRevMaxPoolPointsPerTxRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    fromJSON(_: any): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    toJSON(_: QueryGetProtoRevMaxPoolPointsPerTxRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevMaxPoolPointsPerTxRequest;
};
export declare const QueryGetProtoRevMaxPoolPointsPerTxResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    fromJSON(object: any): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    toJSON(message: QueryGetProtoRevMaxPoolPointsPerTxResponse): unknown;
    fromPartial<I extends {
        maxPoolPointsPerTx?: bigint | undefined;
    } & {
        maxPoolPointsPerTx?: bigint | undefined;
    } & Record<Exclude<keyof I, "maxPoolPointsPerTx">, never>>(object: I): QueryGetProtoRevMaxPoolPointsPerTxResponse;
};
export declare const QueryGetProtoRevBaseDenomsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevBaseDenomsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsRequest;
    fromJSON(_: any): QueryGetProtoRevBaseDenomsRequest;
    toJSON(_: QueryGetProtoRevBaseDenomsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevBaseDenomsRequest;
};
export declare const QueryGetProtoRevBaseDenomsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevBaseDenomsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevBaseDenomsResponse;
    fromJSON(object: any): QueryGetProtoRevBaseDenomsResponse;
    toJSON(message: QueryGetProtoRevBaseDenomsResponse): unknown;
    fromPartial<I extends {
        baseDenoms?: {
            denom?: string | undefined;
            stepSize?: string | undefined;
        }[] | undefined;
    } & {
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
    } & Record<Exclude<keyof I, "baseDenoms">, never>>(object: I): QueryGetProtoRevBaseDenomsResponse;
};
export declare const QueryGetProtoRevEnabledRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevEnabledRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledRequest;
    fromJSON(_: any): QueryGetProtoRevEnabledRequest;
    toJSON(_: QueryGetProtoRevEnabledRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetProtoRevEnabledRequest;
};
export declare const QueryGetProtoRevEnabledResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevEnabledResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevEnabledResponse;
    fromJSON(object: any): QueryGetProtoRevEnabledResponse;
    toJSON(message: QueryGetProtoRevEnabledResponse): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
    } & {
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "enabled">, never>>(object: I): QueryGetProtoRevEnabledResponse;
};
export declare const QueryGetProtoRevPoolRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolRequest;
    fromJSON(object: any): QueryGetProtoRevPoolRequest;
    toJSON(message: QueryGetProtoRevPoolRequest): unknown;
    fromPartial<I extends {
        baseDenom?: string | undefined;
        otherDenom?: string | undefined;
    } & {
        baseDenom?: string | undefined;
        otherDenom?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryGetProtoRevPoolRequest>, never>>(object: I): QueryGetProtoRevPoolRequest;
};
export declare const QueryGetProtoRevPoolResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevPoolResponse;
    fromJSON(object: any): QueryGetProtoRevPoolResponse;
    toJSON(message: QueryGetProtoRevPoolResponse): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryGetProtoRevPoolResponse;
};
export declare const QueryGetAllProtocolRevenueRequest: {
    typeUrl: string;
    encode(_: QueryGetAllProtocolRevenueRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllProtocolRevenueRequest;
    fromJSON(_: any): QueryGetAllProtocolRevenueRequest;
    toJSON(_: QueryGetAllProtocolRevenueRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryGetAllProtocolRevenueRequest;
};
export declare const QueryGetAllProtocolRevenueResponse: {
    typeUrl: string;
    encode(message: QueryGetAllProtocolRevenueResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllProtocolRevenueResponse;
    fromJSON(object: any): QueryGetAllProtocolRevenueResponse;
    toJSON(message: QueryGetAllProtocolRevenueResponse): unknown;
    fromPartial<I extends {
        allProtocolRevenue?: {
            takerFeesTracker?: {
                takerFeesToStakers?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                takerFeesToCommunityPool?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } | undefined;
            cyclicArbTracker?: {
                cyclicArb?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } | undefined;
        } | undefined;
    } & {
        allProtocolRevenue?: ({
            takerFeesTracker?: {
                takerFeesToStakers?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                takerFeesToCommunityPool?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } | undefined;
            cyclicArbTracker?: {
                cyclicArb?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } | undefined;
        } & {
            takerFeesTracker?: ({
                takerFeesToStakers?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                takerFeesToCommunityPool?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } & {
                takerFeesToStakers?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["allProtocolRevenue"]["takerFeesTracker"]["takerFeesToStakers"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["allProtocolRevenue"]["takerFeesTracker"]["takerFeesToStakers"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                takerFeesToCommunityPool?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["allProtocolRevenue"]["takerFeesTracker"]["takerFeesToCommunityPool"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["allProtocolRevenue"]["takerFeesTracker"]["takerFeesToCommunityPool"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } & Record<Exclude<keyof I["allProtocolRevenue"]["takerFeesTracker"], keyof import("../../poolmanager/v1beta1/genesis").TakerFeesTracker>, never>) | undefined;
            cyclicArbTracker?: ({
                cyclicArb?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } & {
                cyclicArb?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["allProtocolRevenue"]["cyclicArbTracker"]["cyclicArb"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["allProtocolRevenue"]["cyclicArbTracker"]["cyclicArb"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                heightAccountingStartsFrom?: bigint | undefined;
            } & Record<Exclude<keyof I["allProtocolRevenue"]["cyclicArbTracker"], keyof import("./protorev").CyclicArbTracker>, never>) | undefined;
        } & Record<Exclude<keyof I["allProtocolRevenue"], keyof AllProtocolRevenue>, never>) | undefined;
    } & Record<Exclude<keyof I, "allProtocolRevenue">, never>>(object: I): QueryGetAllProtocolRevenueResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of the module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    GetProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
    GetProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    /** GetProtoRevAllProfits queries all of the profits from the module */
    GetProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
    /**
     * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
     * that have been executed for a given route
     */
    GetProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
    /**
     * GetProtoRevAllRouteStatistics queries all of routes that the module has
     * arbitraged against and the number of trades and profits that have been
     * accumulated for each route
     */
    GetProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    GetProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
    /** GetProtoRevAdminAccount queries the admin account of the module */
    GetProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
    /** GetProtoRevDeveloperAccount queries the developer account of the module */
    GetProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
    /**
     * GetProtoRevInfoByPoolType queries pool type information that is currently
     * being utilized by the module
     */
    GetProtoRevInfoByPoolType(request?: QueryGetProtoRevInfoByPoolTypeRequest): Promise<QueryGetProtoRevInfoByPoolTypeResponse>;
    /**
     * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
     * that can be consumed per transaction
     */
    GetProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
    /**
     * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
     * that can consumed per block
     */
    GetProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
    /**
     * GetProtoRevBaseDenoms queries the base denoms that the module is currently
     * utilizing for arbitrage
     */
    GetProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
    /** GetProtoRevEnabled queries whether the module is enabled or not */
    GetProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
    /**
     * GetProtoRevPool queries the pool id used via the highest liquidity method
     * for arbitrage route building given a pair of denominations
     */
    GetProtoRevPool(request: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponse>;
    /**
     * GetAllProtocolRevenue queries all of the protocol revenue that has been
     * accumulated by any module
     */
    GetAllProtocolRevenue(request?: QueryGetAllProtocolRevenueRequest): Promise<QueryGetAllProtocolRevenueResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    GetProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    GetProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
    GetProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
    GetProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
    GetProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
    GetProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
    GetProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
    GetProtoRevInfoByPoolType(request?: QueryGetProtoRevInfoByPoolTypeRequest): Promise<QueryGetProtoRevInfoByPoolTypeResponse>;
    GetProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
    GetProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
    GetProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
    GetProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
    GetProtoRevPool(request: QueryGetProtoRevPoolRequest): Promise<QueryGetProtoRevPoolResponse>;
    GetAllProtocolRevenue(request?: QueryGetAllProtocolRevenueRequest): Promise<QueryGetAllProtocolRevenueResponse>;
}
