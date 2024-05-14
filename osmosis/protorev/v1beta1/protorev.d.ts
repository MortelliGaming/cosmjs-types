import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { TakerFeesTracker } from "../../poolmanager/v1beta1/genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.protorev.v1beta1";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arbRoutes: Route[];
    /** Token denomination of the first asset */
    tokenIn: string;
    /** Token denomination of the second asset */
    tokenOut: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
    /**
     * The pool IDs that are traversed in the directed cyclic graph (traversed
     * left
     * -> right)
     */
    trades: Trade[];
    /**
     * The step size that will be used to find the optimal swap amount in the
     * binary search
     */
    stepSize: string;
}
/** Trade is a single trade in a route */
export interface Trade {
    /** The pool id of the pool that is traded on */
    pool: bigint;
    /** The denom of the token that is traded */
    tokenIn: string;
    /** The denom of the token that is received */
    tokenOut: string;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 */
export interface RouteStatistics {
    /** profits is the total profit from all trades on this route */
    profits: Coin[];
    /**
     * number_of_trades is the number of trades the module has executed using this
     * route
     */
    numberOfTrades: string;
    /** route is the route that was used (pool ids along the arbitrage route) */
    route: bigint[];
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 *
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 */
export interface PoolWeights {
    /** The weight of a stableswap pool */
    stableWeight: bigint;
    /** The weight of a balancer pool */
    balancerWeight: bigint;
    /** The weight of a concentrated pool */
    concentratedWeight: bigint;
    /** The weight of a cosmwasm pool */
    cosmwasmWeight: bigint;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 */
export interface InfoByPoolType {
    /** The stable pool info */
    stable: StablePoolInfo;
    /** The balancer pool info */
    balancer: BalancerPoolInfo;
    /** The concentrated pool info */
    concentrated: ConcentratedPoolInfo;
    /** The cosmwasm pool info */
    cosmwasm: CosmwasmPoolInfo;
}
/** StablePoolInfo contains meta data pertaining to a stableswap pool type. */
export interface StablePoolInfo {
    /** The weight of a stableswap pool */
    weight: bigint;
}
/** BalancerPoolInfo contains meta data pertaining to a balancer pool type. */
export interface BalancerPoolInfo {
    /** The weight of a balancer pool */
    weight: bigint;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 */
export interface ConcentratedPoolInfo {
    /** The weight of a concentrated pool */
    weight: bigint;
    /** The maximum number of ticks we can move when rebalancing */
    maxTicksCrossed: bigint;
}
/** CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type. */
export interface CosmwasmPoolInfo {
    /** The weight of a cosmwasm pool (by contract address) */
    weightMaps: WeightMap[];
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 */
export interface WeightMap {
    /** The weight of a cosmwasm pool (by contract address) */
    weight: bigint;
    /** The contract address */
    contractAddress: string;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 */
export interface BaseDenom {
    /** The denom i.e. name of the base denom (ex. uosmo) */
    denom: string;
    /**
     * The step size of the binary search that is used to find the optimal swap
     * amount
     */
    stepSize: string;
}
/**
 * BaseDenoms represents all of the base denoms that the module uses for its
 * arbitrage trades.
 */
export interface BaseDenoms {
    baseDenoms: BaseDenom[];
}
export interface AllProtocolRevenue {
    takerFeesTracker: TakerFeesTracker;
    cyclicArbTracker: CyclicArbTracker;
}
export interface CyclicArbTracker {
    cyclicArb: Coin[];
    heightAccountingStartsFrom: bigint;
}
export declare const TokenPairArbRoutes: {
    typeUrl: string;
    encode(message: TokenPairArbRoutes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenPairArbRoutes;
    fromJSON(object: any): TokenPairArbRoutes;
    toJSON(message: TokenPairArbRoutes): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["arbRoutes"][number]["trades"][number], keyof Trade>, never>)[] & Record<Exclude<keyof I["arbRoutes"][number]["trades"], keyof {
                pool?: bigint | undefined;
                tokenIn?: string | undefined;
                tokenOut?: string | undefined;
            }[]>, never>) | undefined;
            stepSize?: string | undefined;
        } & Record<Exclude<keyof I["arbRoutes"][number], keyof Route>, never>)[] & Record<Exclude<keyof I["arbRoutes"], keyof {
            trades?: {
                pool?: bigint | undefined;
                tokenIn?: string | undefined;
                tokenOut?: string | undefined;
            }[] | undefined;
            stepSize?: string | undefined;
        }[]>, never>) | undefined;
        tokenIn?: string | undefined;
        tokenOut?: string | undefined;
    } & Record<Exclude<keyof I, keyof TokenPairArbRoutes>, never>>(object: I): TokenPairArbRoutes;
};
export declare const Route: {
    typeUrl: string;
    encode(message: Route, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Route;
    fromJSON(object: any): Route;
    toJSON(message: Route): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["trades"][number], keyof Trade>, never>)[] & Record<Exclude<keyof I["trades"], keyof {
            pool?: bigint | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        }[]>, never>) | undefined;
        stepSize?: string | undefined;
    } & Record<Exclude<keyof I, keyof Route>, never>>(object: I): Route;
};
export declare const Trade: {
    typeUrl: string;
    encode(message: Trade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    fromPartial<I extends {
        pool?: bigint | undefined;
        tokenIn?: string | undefined;
        tokenOut?: string | undefined;
    } & {
        pool?: bigint | undefined;
        tokenIn?: string | undefined;
        tokenOut?: string | undefined;
    } & Record<Exclude<keyof I, keyof Trade>, never>>(object: I): Trade;
};
export declare const RouteStatistics: {
    typeUrl: string;
    encode(message: RouteStatistics, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RouteStatistics;
    fromJSON(object: any): RouteStatistics;
    toJSON(message: RouteStatistics): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["profits"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["profits"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        numberOfTrades?: string | undefined;
        route?: (bigint[] & bigint[] & Record<Exclude<keyof I["route"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RouteStatistics>, never>>(object: I): RouteStatistics;
};
export declare const PoolWeights: {
    typeUrl: string;
    encode(message: PoolWeights, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolWeights;
    fromJSON(object: any): PoolWeights;
    toJSON(message: PoolWeights): unknown;
    fromPartial<I extends {
        stableWeight?: bigint | undefined;
        balancerWeight?: bigint | undefined;
        concentratedWeight?: bigint | undefined;
        cosmwasmWeight?: bigint | undefined;
    } & {
        stableWeight?: bigint | undefined;
        balancerWeight?: bigint | undefined;
        concentratedWeight?: bigint | undefined;
        cosmwasmWeight?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof PoolWeights>, never>>(object: I): PoolWeights;
};
export declare const InfoByPoolType: {
    typeUrl: string;
    encode(message: InfoByPoolType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InfoByPoolType;
    fromJSON(object: any): InfoByPoolType;
    toJSON(message: InfoByPoolType): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["stable"], "weight">, never>) | undefined;
        balancer?: ({
            weight?: bigint | undefined;
        } & {
            weight?: bigint | undefined;
        } & Record<Exclude<keyof I["balancer"], "weight">, never>) | undefined;
        concentrated?: ({
            weight?: bigint | undefined;
            maxTicksCrossed?: bigint | undefined;
        } & {
            weight?: bigint | undefined;
            maxTicksCrossed?: bigint | undefined;
        } & Record<Exclude<keyof I["concentrated"], keyof ConcentratedPoolInfo>, never>) | undefined;
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
            } & Record<Exclude<keyof I["cosmwasm"]["weightMaps"][number], keyof WeightMap>, never>)[] & Record<Exclude<keyof I["cosmwasm"]["weightMaps"], keyof {
                weight?: bigint | undefined;
                contractAddress?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["cosmwasm"], "weightMaps">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof InfoByPoolType>, never>>(object: I): InfoByPoolType;
};
export declare const StablePoolInfo: {
    typeUrl: string;
    encode(message: StablePoolInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StablePoolInfo;
    fromJSON(object: any): StablePoolInfo;
    toJSON(message: StablePoolInfo): unknown;
    fromPartial<I extends {
        weight?: bigint | undefined;
    } & {
        weight?: bigint | undefined;
    } & Record<Exclude<keyof I, "weight">, never>>(object: I): StablePoolInfo;
};
export declare const BalancerPoolInfo: {
    typeUrl: string;
    encode(message: BalancerPoolInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BalancerPoolInfo;
    fromJSON(object: any): BalancerPoolInfo;
    toJSON(message: BalancerPoolInfo): unknown;
    fromPartial<I extends {
        weight?: bigint | undefined;
    } & {
        weight?: bigint | undefined;
    } & Record<Exclude<keyof I, "weight">, never>>(object: I): BalancerPoolInfo;
};
export declare const ConcentratedPoolInfo: {
    typeUrl: string;
    encode(message: ConcentratedPoolInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConcentratedPoolInfo;
    fromJSON(object: any): ConcentratedPoolInfo;
    toJSON(message: ConcentratedPoolInfo): unknown;
    fromPartial<I extends {
        weight?: bigint | undefined;
        maxTicksCrossed?: bigint | undefined;
    } & {
        weight?: bigint | undefined;
        maxTicksCrossed?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof ConcentratedPoolInfo>, never>>(object: I): ConcentratedPoolInfo;
};
export declare const CosmwasmPoolInfo: {
    typeUrl: string;
    encode(message: CosmwasmPoolInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CosmwasmPoolInfo;
    fromJSON(object: any): CosmwasmPoolInfo;
    toJSON(message: CosmwasmPoolInfo): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["weightMaps"][number], keyof WeightMap>, never>)[] & Record<Exclude<keyof I["weightMaps"], keyof {
            weight?: bigint | undefined;
            contractAddress?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "weightMaps">, never>>(object: I): CosmwasmPoolInfo;
};
export declare const WeightMap: {
    typeUrl: string;
    encode(message: WeightMap, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WeightMap;
    fromJSON(object: any): WeightMap;
    toJSON(message: WeightMap): unknown;
    fromPartial<I extends {
        weight?: bigint | undefined;
        contractAddress?: string | undefined;
    } & {
        weight?: bigint | undefined;
        contractAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof WeightMap>, never>>(object: I): WeightMap;
};
export declare const BaseDenom: {
    typeUrl: string;
    encode(message: BaseDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseDenom;
    fromJSON(object: any): BaseDenom;
    toJSON(message: BaseDenom): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        stepSize?: string | undefined;
    } & {
        denom?: string | undefined;
        stepSize?: string | undefined;
    } & Record<Exclude<keyof I, keyof BaseDenom>, never>>(object: I): BaseDenom;
};
export declare const BaseDenoms: {
    typeUrl: string;
    encode(message: BaseDenoms, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseDenoms;
    fromJSON(object: any): BaseDenoms;
    toJSON(message: BaseDenoms): unknown;
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
    } & Record<Exclude<keyof I, "baseDenoms">, never>>(object: I): BaseDenoms;
};
export declare const AllProtocolRevenue: {
    typeUrl: string;
    encode(message: AllProtocolRevenue, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllProtocolRevenue;
    fromJSON(object: any): AllProtocolRevenue;
    toJSON(message: AllProtocolRevenue): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToStakers"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToStakers"], keyof {
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
            } & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToCommunityPool"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["takerFeesTracker"]["takerFeesToCommunityPool"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            heightAccountingStartsFrom?: bigint | undefined;
        } & Record<Exclude<keyof I["takerFeesTracker"], keyof TakerFeesTracker>, never>) | undefined;
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
            } & Record<Exclude<keyof I["cyclicArbTracker"]["cyclicArb"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["cyclicArbTracker"]["cyclicArb"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            heightAccountingStartsFrom?: bigint | undefined;
        } & Record<Exclude<keyof I["cyclicArbTracker"], keyof CyclicArbTracker>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AllProtocolRevenue>, never>>(object: I): AllProtocolRevenue;
};
export declare const CyclicArbTracker: {
    typeUrl: string;
    encode(message: CyclicArbTracker, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CyclicArbTracker;
    fromJSON(object: any): CyclicArbTracker;
    toJSON(message: CyclicArbTracker): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["cyclicArb"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["cyclicArb"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        heightAccountingStartsFrom?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof CyclicArbTracker>, never>>(object: I): CyclicArbTracker;
};
