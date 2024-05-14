import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/** ===================== MsgCreatePosition */
export interface MsgCreatePosition {
    poolId: bigint;
    sender: string;
    lowerTick: bigint;
    upperTick: bigint;
    /**
     * tokens_provided is the amount of tokens provided for the position.
     * It must at a minimum be of length 1 (for a single sided position)
     * and at a maximum be of length 2 (for a position that straddles the current
     * tick).
     */
    tokensProvided: Coin[];
    tokenMinAmount0: string;
    tokenMinAmount1: string;
}
export interface MsgCreatePositionResponse {
    positionId: bigint;
    amount0: string;
    amount1: string;
    liquidityCreated: string;
    /**
     * the lower and upper tick are in the response because there are
     * instances in which multiple ticks represent the same price, so
     * we may move their provided tick to the canonical tick that represents
     * the same price.
     */
    lowerTick: bigint;
    upperTick: bigint;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPosition {
    positionId: bigint;
    sender: string;
    /** amount0 represents the amount of token0 willing to put in. */
    amount0: string;
    /** amount1 represents the amount of token1 willing to put in. */
    amount1: string;
    /**
     * token_min_amount0 represents the minimum amount of token0 desired from the
     * new position being created. Note that this field indicates the min amount0
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     */
    tokenMinAmount0: string;
    /**
     * token_min_amount1 represents the minimum amount of token1 desired from the
     * new position being created. Note that this field indicates the min amount1
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     */
    tokenMinAmount1: string;
}
export interface MsgAddToPositionResponse {
    positionId: bigint;
    amount0: string;
    amount1: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
    positionId: bigint;
    sender: string;
    liquidityAmount: string;
}
export interface MsgWithdrawPositionResponse {
    amount0: string;
    amount1: string;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewards {
    positionIds: bigint[];
    sender: string;
}
export interface MsgCollectSpreadRewardsResponse {
    collectedSpreadRewards: Coin[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
    positionIds: bigint[];
    sender: string;
}
export interface MsgCollectIncentivesResponse {
    collectedIncentives: Coin[];
    forfeitedIncentives: Coin[];
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositions {
    positionIds: bigint[];
    sender: string;
}
export interface MsgFungifyChargedPositionsResponse {
    newPositionId: bigint;
}
/** ===================== MsgTransferPositions */
export interface MsgTransferPositions {
    positionIds: bigint[];
    sender: string;
    newOwner: string;
}
export interface MsgTransferPositionsResponse {
}
export declare const MsgCreatePosition: {
    typeUrl: string;
    encode(message: MsgCreatePosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePosition;
    fromJSON(object: any): MsgCreatePosition;
    toJSON(message: MsgCreatePosition): unknown;
    fromPartial<I extends {
        poolId?: bigint | undefined;
        sender?: string | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
        tokensProvided?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        tokenMinAmount0?: string | undefined;
        tokenMinAmount1?: string | undefined;
    } & {
        poolId?: bigint | undefined;
        sender?: string | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
        tokensProvided?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokensProvided"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokensProvided"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        tokenMinAmount0?: string | undefined;
        tokenMinAmount1?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreatePosition>, never>>(object: I): MsgCreatePosition;
};
export declare const MsgCreatePositionResponse: {
    typeUrl: string;
    encode(message: MsgCreatePositionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePositionResponse;
    fromJSON(object: any): MsgCreatePositionResponse;
    toJSON(message: MsgCreatePositionResponse): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
        liquidityCreated?: string | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
    } & {
        positionId?: bigint | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
        liquidityCreated?: string | undefined;
        lowerTick?: bigint | undefined;
        upperTick?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreatePositionResponse>, never>>(object: I): MsgCreatePositionResponse;
};
export declare const MsgAddToPosition: {
    typeUrl: string;
    encode(message: MsgAddToPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToPosition;
    fromJSON(object: any): MsgAddToPosition;
    toJSON(message: MsgAddToPosition): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
        sender?: string | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
        tokenMinAmount0?: string | undefined;
        tokenMinAmount1?: string | undefined;
    } & {
        positionId?: bigint | undefined;
        sender?: string | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
        tokenMinAmount0?: string | undefined;
        tokenMinAmount1?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddToPosition>, never>>(object: I): MsgAddToPosition;
};
export declare const MsgAddToPositionResponse: {
    typeUrl: string;
    encode(message: MsgAddToPositionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToPositionResponse;
    fromJSON(object: any): MsgAddToPositionResponse;
    toJSON(message: MsgAddToPositionResponse): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
    } & {
        positionId?: bigint | undefined;
        amount0?: string | undefined;
        amount1?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgAddToPositionResponse>, never>>(object: I): MsgAddToPositionResponse;
};
export declare const MsgWithdrawPosition: {
    typeUrl: string;
    encode(message: MsgWithdrawPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawPosition;
    fromJSON(object: any): MsgWithdrawPosition;
    toJSON(message: MsgWithdrawPosition): unknown;
    fromPartial<I extends {
        positionId?: bigint | undefined;
        sender?: string | undefined;
        liquidityAmount?: string | undefined;
    } & {
        positionId?: bigint | undefined;
        sender?: string | undefined;
        liquidityAmount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgWithdrawPosition>, never>>(object: I): MsgWithdrawPosition;
};
export declare const MsgWithdrawPositionResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawPositionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawPositionResponse;
    fromJSON(object: any): MsgWithdrawPositionResponse;
    toJSON(message: MsgWithdrawPositionResponse): unknown;
    fromPartial<I extends {
        amount0?: string | undefined;
        amount1?: string | undefined;
    } & {
        amount0?: string | undefined;
        amount1?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgWithdrawPositionResponse>, never>>(object: I): MsgWithdrawPositionResponse;
};
export declare const MsgCollectSpreadRewards: {
    typeUrl: string;
    encode(message: MsgCollectSpreadRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectSpreadRewards;
    fromJSON(object: any): MsgCollectSpreadRewards;
    toJSON(message: MsgCollectSpreadRewards): unknown;
    fromPartial<I extends {
        positionIds?: bigint[] | undefined;
        sender?: string | undefined;
    } & {
        positionIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["positionIds"], keyof bigint[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCollectSpreadRewards>, never>>(object: I): MsgCollectSpreadRewards;
};
export declare const MsgCollectSpreadRewardsResponse: {
    typeUrl: string;
    encode(message: MsgCollectSpreadRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectSpreadRewardsResponse;
    fromJSON(object: any): MsgCollectSpreadRewardsResponse;
    toJSON(message: MsgCollectSpreadRewardsResponse): unknown;
    fromPartial<I extends {
        collectedSpreadRewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        collectedSpreadRewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["collectedSpreadRewards"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["collectedSpreadRewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "collectedSpreadRewards">, never>>(object: I): MsgCollectSpreadRewardsResponse;
};
export declare const MsgCollectIncentives: {
    typeUrl: string;
    encode(message: MsgCollectIncentives, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectIncentives;
    fromJSON(object: any): MsgCollectIncentives;
    toJSON(message: MsgCollectIncentives): unknown;
    fromPartial<I extends {
        positionIds?: bigint[] | undefined;
        sender?: string | undefined;
    } & {
        positionIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["positionIds"], keyof bigint[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCollectIncentives>, never>>(object: I): MsgCollectIncentives;
};
export declare const MsgCollectIncentivesResponse: {
    typeUrl: string;
    encode(message: MsgCollectIncentivesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectIncentivesResponse;
    fromJSON(object: any): MsgCollectIncentivesResponse;
    toJSON(message: MsgCollectIncentivesResponse): unknown;
    fromPartial<I extends {
        collectedIncentives?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        forfeitedIncentives?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        collectedIncentives?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["collectedIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["collectedIncentives"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        forfeitedIncentives?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["forfeitedIncentives"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["forfeitedIncentives"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCollectIncentivesResponse>, never>>(object: I): MsgCollectIncentivesResponse;
};
export declare const MsgFungifyChargedPositions: {
    typeUrl: string;
    encode(message: MsgFungifyChargedPositions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFungifyChargedPositions;
    fromJSON(object: any): MsgFungifyChargedPositions;
    toJSON(message: MsgFungifyChargedPositions): unknown;
    fromPartial<I extends {
        positionIds?: bigint[] | undefined;
        sender?: string | undefined;
    } & {
        positionIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["positionIds"], keyof bigint[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgFungifyChargedPositions>, never>>(object: I): MsgFungifyChargedPositions;
};
export declare const MsgFungifyChargedPositionsResponse: {
    typeUrl: string;
    encode(message: MsgFungifyChargedPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFungifyChargedPositionsResponse;
    fromJSON(object: any): MsgFungifyChargedPositionsResponse;
    toJSON(message: MsgFungifyChargedPositionsResponse): unknown;
    fromPartial<I extends {
        newPositionId?: bigint | undefined;
    } & {
        newPositionId?: bigint | undefined;
    } & Record<Exclude<keyof I, "newPositionId">, never>>(object: I): MsgFungifyChargedPositionsResponse;
};
export declare const MsgTransferPositions: {
    typeUrl: string;
    encode(message: MsgTransferPositions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferPositions;
    fromJSON(object: any): MsgTransferPositions;
    toJSON(message: MsgTransferPositions): unknown;
    fromPartial<I extends {
        positionIds?: bigint[] | undefined;
        sender?: string | undefined;
        newOwner?: string | undefined;
    } & {
        positionIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["positionIds"], keyof bigint[]>, never>) | undefined;
        sender?: string | undefined;
        newOwner?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgTransferPositions>, never>>(object: I): MsgTransferPositions;
};
export declare const MsgTransferPositionsResponse: {
    typeUrl: string;
    encode(_: MsgTransferPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferPositionsResponse;
    fromJSON(_: any): MsgTransferPositionsResponse;
    toJSON(_: MsgTransferPositionsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgTransferPositionsResponse;
};
export interface Msg {
    CreatePosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
    WithdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
    /**
     * AddToPosition attempts to add amount0 and amount1 to a position
     * with the given position id.
     * To maintain backwards-compatibility with future implementations of
     * charging, this function deletes the old position and creates a new one with
     * the resulting amount after addition.
     */
    AddToPosition(request: MsgAddToPosition): Promise<MsgAddToPositionResponse>;
    CollectSpreadRewards(request: MsgCollectSpreadRewards): Promise<MsgCollectSpreadRewardsResponse>;
    CollectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
    /**
     * TransferPositions transfers ownership of a set of one or more positions
     * from a sender to a recipient.
     */
    TransferPositions(request: MsgTransferPositions): Promise<MsgTransferPositionsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
    WithdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
    AddToPosition(request: MsgAddToPosition): Promise<MsgAddToPositionResponse>;
    CollectSpreadRewards(request: MsgCollectSpreadRewards): Promise<MsgCollectSpreadRewardsResponse>;
    CollectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
    TransferPositions(request: MsgTransferPositions): Promise<MsgTransferPositionsResponse>;
}
