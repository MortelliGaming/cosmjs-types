import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.accum.v1beta1";
/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContent {
    accumValue: DecCoin[];
    totalShares: string;
}
export interface Options {
}
/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface Record {
    /**
     * num_shares is the number of shares belonging to the position associated
     * with this record.
     */
    numShares: string;
    /**
     * accum_value_per_share is the subset of coins per shar of the global
     * accumulator value that allows to infer how much a position is entitled to
     * per share that it owns.
     *
     * In the default case with no intervals, this value equals to the global
     * accumulator value at the time of the position creation, the last update or
     * reward claim.
     *
     * In the interval case such as concentrated liquidity, this value equals to
     * the global growth of rewards inside the interval during one of: the time of
     * the position creation, the last update or reward claim. Note, that
     * immediately prior to claiming or updating rewards, this value must be
     * updated to "the growth inside at the time of last update + the growth
     * outside at the time of the current block". This is so that the claiming
     * logic can subtract this updated value from the global accumulator value to
     * get the growth inside the interval from the time of last update up until
     * the current block time.
     */
    accumValuePerShare: DecCoin[];
    /**
     * unclaimed_rewards_total is the total amount of unclaimed rewards that the
     * position is entitled to. This value is updated whenever shares are added or
     * removed from an existing position. We also expose API for manually updating
     * this value for some custom use cases such as merging pre-existing positions
     * into a single one.
     */
    unclaimedRewardsTotal: DecCoin[];
    options?: Options;
}
export declare const AccumulatorContent: {
    typeUrl: string;
    encode(message: AccumulatorContent, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccumulatorContent;
    fromJSON(object: any): AccumulatorContent;
    toJSON(message: AccumulatorContent): unknown;
    fromPartial<I extends {
        accumValue?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        totalShares?: string | undefined;
    } & {
        accumValue?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & globalThis.Record<Exclude<keyof I["accumValue"][number], keyof DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["accumValue"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        totalShares?: string | undefined;
    } & globalThis.Record<Exclude<keyof I, keyof AccumulatorContent>, never>>(object: I): AccumulatorContent;
};
export declare const Options: {
    typeUrl: string;
    encode(_: Options, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Options;
    fromJSON(_: any): Options;
    toJSON(_: Options): unknown;
    fromPartial<I extends {} & {} & globalThis.Record<Exclude<keyof I, never>, never>>(_: I): Options;
};
export declare const Record: {
    typeUrl: string;
    encode(message: Record, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    fromPartial<I extends {
        numShares?: string | undefined;
        accumValuePerShare?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        unclaimedRewardsTotal?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        options?: {} | undefined;
    } & {
        numShares?: string | undefined;
        accumValuePerShare?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & globalThis.Record<Exclude<keyof I["accumValuePerShare"][number], keyof DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["accumValuePerShare"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        unclaimedRewardsTotal?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & globalThis.Record<Exclude<keyof I["unclaimedRewardsTotal"][number], keyof DecCoin>, never>)[] & globalThis.Record<Exclude<keyof I["unclaimedRewardsTotal"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        options?: ({} & {} & globalThis.Record<Exclude<keyof I["options"], never>, never>) | undefined;
    } & globalThis.Record<Exclude<keyof I, keyof Record>, never>>(object: I): Record;
};
