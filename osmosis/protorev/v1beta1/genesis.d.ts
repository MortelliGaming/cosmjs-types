import { Params } from "./params";
import { TokenPairArbRoutes, BaseDenom, InfoByPoolType, CyclicArbTracker } from "./protorev";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.protorev.v1beta1";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
    /** Parameters for the protorev module. */
    params: Params;
    /** Token pair arb routes for the protorev module (hot routes). */
    tokenPairArbRoutes: TokenPairArbRoutes[];
    /**
     * The base denominations being used to create cyclic arbitrage routes via the
     * highest liquidity method.
     */
    baseDenoms: BaseDenom[];
    /** The number of days since module genesis. */
    daysSinceModuleGenesis: bigint;
    /** The fees the developer account has accumulated over time. */
    developerFees: Coin[];
    /** The latest block height that the module has processed. */
    latestBlockHeight: bigint;
    /** The developer account address of the module. */
    developerAddress: string;
    /**
     * Max pool points per block i.e. the maximum compute time (in ms)
     * that protorev can use per block.
     */
    maxPoolPointsPerBlock: bigint;
    /**
     * Max pool points per tx i.e. the maximum compute time (in ms) that
     * protorev can use per tx.
     */
    maxPoolPointsPerTx: bigint;
    /** The number of pool points that have been consumed in the current block. */
    pointCountForBlock: bigint;
    /** All of the profits that have been accumulated by the module. */
    profits: Coin[];
    /**
     * Information that is used to estimate execution time / gas
     * consumption of a swap on a given pool type.
     */
    infoByPoolType: InfoByPoolType;
    cyclicArbTracker?: CyclicArbTracker;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            enabled?: boolean | undefined;
            admin?: string | undefined;
        } | undefined;
        tokenPairArbRoutes?: {
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
        baseDenoms?: {
            denom?: string | undefined;
            stepSize?: string | undefined;
        }[] | undefined;
        daysSinceModuleGenesis?: bigint | undefined;
        developerFees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        latestBlockHeight?: bigint | undefined;
        developerAddress?: string | undefined;
        maxPoolPointsPerBlock?: bigint | undefined;
        maxPoolPointsPerTx?: bigint | undefined;
        pointCountForBlock?: bigint | undefined;
        profits?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
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
        cyclicArbTracker?: {
            cyclicArb?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            heightAccountingStartsFrom?: bigint | undefined;
        } | undefined;
    } & {
        params?: ({
            enabled?: boolean | undefined;
            admin?: string | undefined;
        } & {
            enabled?: boolean | undefined;
            admin?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        tokenPairArbRoutes?: ({
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
                } & Record<Exclude<keyof I["tokenPairArbRoutes"][number]["arbRoutes"][number]["trades"][number], keyof import("./protorev").Trade>, never>)[] & Record<Exclude<keyof I["tokenPairArbRoutes"][number]["arbRoutes"][number]["trades"], keyof {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[]>, never>) | undefined;
                stepSize?: string | undefined;
            } & Record<Exclude<keyof I["tokenPairArbRoutes"][number]["arbRoutes"][number], keyof import("./protorev").Route>, never>)[] & Record<Exclude<keyof I["tokenPairArbRoutes"][number]["arbRoutes"], keyof {
                trades?: {
                    pool?: bigint | undefined;
                    tokenIn?: string | undefined;
                    tokenOut?: string | undefined;
                }[] | undefined;
                stepSize?: string | undefined;
            }[]>, never>) | undefined;
            tokenIn?: string | undefined;
            tokenOut?: string | undefined;
        } & Record<Exclude<keyof I["tokenPairArbRoutes"][number], keyof TokenPairArbRoutes>, never>)[] & Record<Exclude<keyof I["tokenPairArbRoutes"], keyof {
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
        daysSinceModuleGenesis?: bigint | undefined;
        developerFees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["developerFees"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["developerFees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        latestBlockHeight?: bigint | undefined;
        developerAddress?: string | undefined;
        maxPoolPointsPerBlock?: bigint | undefined;
        maxPoolPointsPerTx?: bigint | undefined;
        pointCountForBlock?: bigint | undefined;
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
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
