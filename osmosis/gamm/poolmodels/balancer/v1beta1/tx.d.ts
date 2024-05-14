import { PoolParams, PoolAsset } from "../../../v1beta1/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { Rpc } from "../../../../../helpers";
export declare const protobufPackage = "osmosis.gamm.poolmodels.balancer.v1beta1";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams?: PoolParams;
    poolAssets: PoolAsset[];
    futurePoolGovernor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
    poolId: bigint;
}
export declare const MsgCreateBalancerPool: {
    typeUrl: string;
    encode(message: MsgCreateBalancerPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPool;
    fromJSON(object: any): MsgCreateBalancerPool;
    toJSON(message: MsgCreateBalancerPool): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        poolParams?: {
            swapFee?: string | undefined;
            exitFee?: string | undefined;
            smoothWeightChangeParams?: {
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialPoolWeights?: {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] | undefined;
                targetPoolWeights?: {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        poolAssets?: {
            token?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            weight?: string | undefined;
        }[] | undefined;
        futurePoolGovernor?: string | undefined;
    } & {
        sender?: string | undefined;
        poolParams?: ({
            swapFee?: string | undefined;
            exitFee?: string | undefined;
            smoothWeightChangeParams?: {
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialPoolWeights?: {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] | undefined;
                targetPoolWeights?: {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            swapFee?: string | undefined;
            exitFee?: string | undefined;
            smoothWeightChangeParams?: ({
                startTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initialPoolWeights?: {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] | undefined;
                targetPoolWeights?: {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] | undefined;
            } & {
                startTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["startTime"], keyof import("../../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["duration"], keyof import("../../../../../google/protobuf/duration").Duration>, never>) | undefined;
                initialPoolWeights?: ({
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] & ({
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                } & {
                    token?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number]["token"], keyof import("../../../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
                    weight?: string | undefined;
                } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof PoolAsset>, never>)[] & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[]>, never>) | undefined;
                targetPoolWeights?: ({
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[] & ({
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                } & {
                    token?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number]["token"], keyof import("../../../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
                    weight?: string | undefined;
                } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof PoolAsset>, never>)[] & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                    token?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    weight?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["poolParams"]["smoothWeightChangeParams"], keyof import("../../../v1beta1/balancerPool").SmoothWeightChangeParams>, never>) | undefined;
        } & Record<Exclude<keyof I["poolParams"], keyof PoolParams>, never>) | undefined;
        poolAssets?: ({
            token?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            weight?: string | undefined;
        }[] & ({
            token?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            weight?: string | undefined;
        } & {
            token?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["poolAssets"][number]["token"], keyof import("../../../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            weight?: string | undefined;
        } & Record<Exclude<keyof I["poolAssets"][number], keyof PoolAsset>, never>)[] & Record<Exclude<keyof I["poolAssets"], keyof {
            token?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            weight?: string | undefined;
        }[]>, never>) | undefined;
        futurePoolGovernor?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateBalancerPool>, never>>(object: I): MsgCreateBalancerPool;
};
export declare const MsgCreateBalancerPoolResponse: {
    typeUrl: string;
    encode(message: MsgCreateBalancerPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse;
    fromJSON(object: any): MsgCreateBalancerPoolResponse;
    toJSON(message: MsgCreateBalancerPoolResponse): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
    } & {
        poolId?: bigint | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): MsgCreateBalancerPoolResponse;
};
export interface Msg {
    CreateBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
