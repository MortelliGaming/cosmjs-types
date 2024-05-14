import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
export interface TickInfo {
    liquidityGross: string;
    liquidityNet: string;
    spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
    /**
     * uptime_trackers is a container encapsulating the uptime trackers.
     * We use a container instead of a "repeated UptimeTracker" directly
     * because we need the ability to serialize and deserialize the
     * container easily for events when crossing a tick.
     */
    uptimeTrackers: UptimeTrackers;
}
export interface UptimeTrackers {
    list: UptimeTracker[];
}
export interface UptimeTracker {
    uptimeGrowthOutside: DecCoin[];
}
export declare const TickInfo: {
    typeUrl: string;
    encode(message: TickInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickInfo;
    fromJSON(object: any): TickInfo;
    toJSON(message: TickInfo): unknown;
    fromPartial<I extends {
        liquidityGross?: string | undefined;
        liquidityNet?: string | undefined;
        spreadRewardGrowthOppositeDirectionOfLastTraversal?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        uptimeTrackers?: {
            list?: {
                uptimeGrowthOutside?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        liquidityGross?: string | undefined;
        liquidityNet?: string | undefined;
        spreadRewardGrowthOppositeDirectionOfLastTraversal?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["spreadRewardGrowthOppositeDirectionOfLastTraversal"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["spreadRewardGrowthOppositeDirectionOfLastTraversal"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        uptimeTrackers?: ({
            list?: {
                uptimeGrowthOutside?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            list?: ({
                uptimeGrowthOutside?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                uptimeGrowthOutside?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                uptimeGrowthOutside?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["uptimeTrackers"]["list"][number]["uptimeGrowthOutside"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["uptimeTrackers"]["list"][number], "uptimeGrowthOutside">, never>)[] & Record<Exclude<keyof I["uptimeTrackers"]["list"], keyof {
                uptimeGrowthOutside?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["uptimeTrackers"], "list">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TickInfo>, never>>(object: I): TickInfo;
};
export declare const UptimeTrackers: {
    typeUrl: string;
    encode(message: UptimeTrackers, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UptimeTrackers;
    fromJSON(object: any): UptimeTrackers;
    toJSON(message: UptimeTrackers): unknown;
    fromPartial<I extends {
        list?: {
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        list?: ({
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            uptimeGrowthOutside?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["list"][number]["uptimeGrowthOutside"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["list"][number]["uptimeGrowthOutside"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["list"][number], "uptimeGrowthOutside">, never>)[] & Record<Exclude<keyof I["list"], keyof {
            uptimeGrowthOutside?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "list">, never>>(object: I): UptimeTrackers;
};
export declare const UptimeTracker: {
    typeUrl: string;
    encode(message: UptimeTracker, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UptimeTracker;
    fromJSON(object: any): UptimeTracker;
    toJSON(message: UptimeTracker): unknown;
    fromPartial<I extends {
        uptimeGrowthOutside?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        uptimeGrowthOutside?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["uptimeGrowthOutside"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["uptimeGrowthOutside"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "uptimeGrowthOutside">, never>>(object: I): UptimeTracker;
};
