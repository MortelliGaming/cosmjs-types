/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
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
export interface MsgTransferPositionsResponse {}
function createBaseMsgCreatePosition(): MsgCreatePosition {
  return {
    poolId: BigInt(0),
    sender: "",
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
    tokensProvided: [],
    tokenMinAmount0: "",
    tokenMinAmount1: "",
  };
}
export const MsgCreatePosition = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
  encode(message: MsgCreatePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(24).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(32).int64(message.upperTick);
    }
    for (const v of message.tokensProvided) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.tokenMinAmount0 !== "") {
      writer.uint32(50).string(message.tokenMinAmount0);
    }
    if (message.tokenMinAmount1 !== "") {
      writer.uint32(58).string(message.tokenMinAmount1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.lowerTick = reader.int64();
          break;
        case 4:
          message.upperTick = reader.int64();
          break;
        case 5:
          message.tokensProvided.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.tokenMinAmount0 = reader.string();
          break;
        case 7:
          message.tokenMinAmount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePosition {
    const obj = createBaseMsgCreatePosition();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lowerTick)) obj.lowerTick = BigInt(object.lowerTick.toString());
    if (isSet(object.upperTick)) obj.upperTick = BigInt(object.upperTick.toString());
    if (Array.isArray(object?.tokensProvided))
      obj.tokensProvided = object.tokensProvided.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.tokenMinAmount0)) obj.tokenMinAmount0 = String(object.tokenMinAmount0);
    if (isSet(object.tokenMinAmount1)) obj.tokenMinAmount1 = String(object.tokenMinAmount1);
    return obj;
  },
  toJSON(message: MsgCreatePosition): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    if (message.tokensProvided) {
      obj.tokensProvided = message.tokensProvided.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.tokensProvided = [];
    }
    message.tokenMinAmount0 !== undefined && (obj.tokenMinAmount0 = message.tokenMinAmount0);
    message.tokenMinAmount1 !== undefined && (obj.tokenMinAmount1 = message.tokenMinAmount1);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePosition>, I>>(object: I): MsgCreatePosition {
    const message = createBaseMsgCreatePosition();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.sender = object.sender ?? "";
    if (object.lowerTick !== undefined && object.lowerTick !== null) {
      message.lowerTick = BigInt(object.lowerTick.toString());
    }
    if (object.upperTick !== undefined && object.upperTick !== null) {
      message.upperTick = BigInt(object.upperTick.toString());
    }
    message.tokensProvided = object.tokensProvided?.map((e) => Coin.fromPartial(e)) || [];
    message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
    message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
    return message;
  },
};
function createBaseMsgCreatePositionResponse(): MsgCreatePositionResponse {
  return {
    positionId: BigInt(0),
    amount0: "",
    amount1: "",
    liquidityCreated: "",
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
  };
}
export const MsgCreatePositionResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse",
  encode(message: MsgCreatePositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    if (message.liquidityCreated !== "") {
      writer.uint32(42).string(message.liquidityCreated);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(48).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(56).int64(message.upperTick);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.amount0 = reader.string();
          break;
        case 3:
          message.amount1 = reader.string();
          break;
        case 5:
          message.liquidityCreated = reader.string();
          break;
        case 6:
          message.lowerTick = reader.int64();
          break;
        case 7:
          message.upperTick = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePositionResponse {
    const obj = createBaseMsgCreatePositionResponse();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.amount0)) obj.amount0 = String(object.amount0);
    if (isSet(object.amount1)) obj.amount1 = String(object.amount1);
    if (isSet(object.liquidityCreated)) obj.liquidityCreated = String(object.liquidityCreated);
    if (isSet(object.lowerTick)) obj.lowerTick = BigInt(object.lowerTick.toString());
    if (isSet(object.upperTick)) obj.upperTick = BigInt(object.upperTick.toString());
    return obj;
  },
  toJSON(message: MsgCreatePositionResponse): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    message.liquidityCreated !== undefined && (obj.liquidityCreated = message.liquidityCreated);
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePositionResponse>, I>>(
    object: I,
  ): MsgCreatePositionResponse {
    const message = createBaseMsgCreatePositionResponse();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.liquidityCreated = object.liquidityCreated ?? "";
    if (object.lowerTick !== undefined && object.lowerTick !== null) {
      message.lowerTick = BigInt(object.lowerTick.toString());
    }
    if (object.upperTick !== undefined && object.upperTick !== null) {
      message.upperTick = BigInt(object.upperTick.toString());
    }
    return message;
  },
};
function createBaseMsgAddToPosition(): MsgAddToPosition {
  return {
    positionId: BigInt(0),
    sender: "",
    amount0: "",
    amount1: "",
    tokenMinAmount0: "",
    tokenMinAmount1: "",
  };
}
export const MsgAddToPosition = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition",
  encode(message: MsgAddToPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.amount0 !== "") {
      writer.uint32(26).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(34).string(message.amount1);
    }
    if (message.tokenMinAmount0 !== "") {
      writer.uint32(42).string(message.tokenMinAmount0);
    }
    if (message.tokenMinAmount1 !== "") {
      writer.uint32(50).string(message.tokenMinAmount1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.amount0 = reader.string();
          break;
        case 4:
          message.amount1 = reader.string();
          break;
        case 5:
          message.tokenMinAmount0 = reader.string();
          break;
        case 6:
          message.tokenMinAmount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddToPosition {
    const obj = createBaseMsgAddToPosition();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.amount0)) obj.amount0 = String(object.amount0);
    if (isSet(object.amount1)) obj.amount1 = String(object.amount1);
    if (isSet(object.tokenMinAmount0)) obj.tokenMinAmount0 = String(object.tokenMinAmount0);
    if (isSet(object.tokenMinAmount1)) obj.tokenMinAmount1 = String(object.tokenMinAmount1);
    return obj;
  },
  toJSON(message: MsgAddToPosition): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    message.tokenMinAmount0 !== undefined && (obj.tokenMinAmount0 = message.tokenMinAmount0);
    message.tokenMinAmount1 !== undefined && (obj.tokenMinAmount1 = message.tokenMinAmount1);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddToPosition>, I>>(object: I): MsgAddToPosition {
    const message = createBaseMsgAddToPosition();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    message.sender = object.sender ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
    message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
    return message;
  },
};
function createBaseMsgAddToPositionResponse(): MsgAddToPositionResponse {
  return {
    positionId: BigInt(0),
    amount0: "",
    amount1: "",
  };
}
export const MsgAddToPositionResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse",
  encode(message: MsgAddToPositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.amount0 = reader.string();
          break;
        case 3:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddToPositionResponse {
    const obj = createBaseMsgAddToPositionResponse();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.amount0)) obj.amount0 = String(object.amount0);
    if (isSet(object.amount1)) obj.amount1 = String(object.amount1);
    return obj;
  },
  toJSON(message: MsgAddToPositionResponse): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddToPositionResponse>, I>>(
    object: I,
  ): MsgAddToPositionResponse {
    const message = createBaseMsgAddToPositionResponse();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};
function createBaseMsgWithdrawPosition(): MsgWithdrawPosition {
  return {
    positionId: BigInt(0),
    sender: "",
    liquidityAmount: "",
  };
}
export const MsgWithdrawPosition = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
  encode(message: MsgWithdrawPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.liquidityAmount !== "") {
      writer.uint32(26).string(message.liquidityAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.liquidityAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawPosition {
    const obj = createBaseMsgWithdrawPosition();
    if (isSet(object.positionId)) obj.positionId = BigInt(object.positionId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.liquidityAmount)) obj.liquidityAmount = String(object.liquidityAmount);
    return obj;
  },
  toJSON(message: MsgWithdrawPosition): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.liquidityAmount !== undefined && (obj.liquidityAmount = message.liquidityAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawPosition>, I>>(object: I): MsgWithdrawPosition {
    const message = createBaseMsgWithdrawPosition();
    if (object.positionId !== undefined && object.positionId !== null) {
      message.positionId = BigInt(object.positionId.toString());
    }
    message.sender = object.sender ?? "";
    message.liquidityAmount = object.liquidityAmount ?? "";
    return message;
  },
};
function createBaseMsgWithdrawPositionResponse(): MsgWithdrawPositionResponse {
  return {
    amount0: "",
    amount1: "",
  };
}
export const MsgWithdrawPositionResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse",
  encode(message: MsgWithdrawPositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount0 = reader.string();
          break;
        case 2:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawPositionResponse {
    const obj = createBaseMsgWithdrawPositionResponse();
    if (isSet(object.amount0)) obj.amount0 = String(object.amount0);
    if (isSet(object.amount1)) obj.amount1 = String(object.amount1);
    return obj;
  },
  toJSON(message: MsgWithdrawPositionResponse): unknown {
    const obj: any = {};
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawPositionResponse>, I>>(
    object: I,
  ): MsgWithdrawPositionResponse {
    const message = createBaseMsgWithdrawPositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};
function createBaseMsgCollectSpreadRewards(): MsgCollectSpreadRewards {
  return {
    positionIds: [],
    sender: "",
  };
}
export const MsgCollectSpreadRewards = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
  encode(message: MsgCollectSpreadRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectSpreadRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectSpreadRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.positionIds.push(reader.uint64());
            }
          } else {
            message.positionIds.push(reader.uint64());
          }
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectSpreadRewards {
    const obj = createBaseMsgCollectSpreadRewards();
    if (Array.isArray(object?.positionIds))
      obj.positionIds = object.positionIds.map((e: any) => BigInt(e.toString()));
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgCollectSpreadRewards): unknown {
    const obj: any = {};
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.positionIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCollectSpreadRewards>, I>>(object: I): MsgCollectSpreadRewards {
    const message = createBaseMsgCollectSpreadRewards();
    message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgCollectSpreadRewardsResponse(): MsgCollectSpreadRewardsResponse {
  return {
    collectedSpreadRewards: [],
  };
}
export const MsgCollectSpreadRewardsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse",
  encode(
    message: MsgCollectSpreadRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.collectedSpreadRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectSpreadRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectSpreadRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectedSpreadRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectSpreadRewardsResponse {
    const obj = createBaseMsgCollectSpreadRewardsResponse();
    if (Array.isArray(object?.collectedSpreadRewards))
      obj.collectedSpreadRewards = object.collectedSpreadRewards.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgCollectSpreadRewardsResponse): unknown {
    const obj: any = {};
    if (message.collectedSpreadRewards) {
      obj.collectedSpreadRewards = message.collectedSpreadRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.collectedSpreadRewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCollectSpreadRewardsResponse>, I>>(
    object: I,
  ): MsgCollectSpreadRewardsResponse {
    const message = createBaseMsgCollectSpreadRewardsResponse();
    message.collectedSpreadRewards = object.collectedSpreadRewards?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgCollectIncentives(): MsgCollectIncentives {
  return {
    positionIds: [],
    sender: "",
  };
}
export const MsgCollectIncentives = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
  encode(message: MsgCollectIncentives, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectIncentives {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectIncentives();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.positionIds.push(reader.uint64());
            }
          } else {
            message.positionIds.push(reader.uint64());
          }
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectIncentives {
    const obj = createBaseMsgCollectIncentives();
    if (Array.isArray(object?.positionIds))
      obj.positionIds = object.positionIds.map((e: any) => BigInt(e.toString()));
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgCollectIncentives): unknown {
    const obj: any = {};
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.positionIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCollectIncentives>, I>>(object: I): MsgCollectIncentives {
    const message = createBaseMsgCollectIncentives();
    message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgCollectIncentivesResponse(): MsgCollectIncentivesResponse {
  return {
    collectedIncentives: [],
    forfeitedIncentives: [],
  };
}
export const MsgCollectIncentivesResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse",
  encode(message: MsgCollectIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collectedIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectIncentivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.forfeitedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectIncentivesResponse {
    const obj = createBaseMsgCollectIncentivesResponse();
    if (Array.isArray(object?.collectedIncentives))
      obj.collectedIncentives = object.collectedIncentives.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.forfeitedIncentives))
      obj.forfeitedIncentives = object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgCollectIncentivesResponse): unknown {
    const obj: any = {};
    if (message.collectedIncentives) {
      obj.collectedIncentives = message.collectedIncentives.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.collectedIncentives = [];
    }
    if (message.forfeitedIncentives) {
      obj.forfeitedIncentives = message.forfeitedIncentives.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.forfeitedIncentives = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCollectIncentivesResponse>, I>>(
    object: I,
  ): MsgCollectIncentivesResponse {
    const message = createBaseMsgCollectIncentivesResponse();
    message.collectedIncentives = object.collectedIncentives?.map((e) => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgFungifyChargedPositions(): MsgFungifyChargedPositions {
  return {
    positionIds: [],
    sender: "",
  };
}
export const MsgFungifyChargedPositions = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions",
  encode(message: MsgFungifyChargedPositions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFungifyChargedPositions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFungifyChargedPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.positionIds.push(reader.uint64());
            }
          } else {
            message.positionIds.push(reader.uint64());
          }
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFungifyChargedPositions {
    const obj = createBaseMsgFungifyChargedPositions();
    if (Array.isArray(object?.positionIds))
      obj.positionIds = object.positionIds.map((e: any) => BigInt(e.toString()));
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgFungifyChargedPositions): unknown {
    const obj: any = {};
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.positionIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFungifyChargedPositions>, I>>(
    object: I,
  ): MsgFungifyChargedPositions {
    const message = createBaseMsgFungifyChargedPositions();
    message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgFungifyChargedPositionsResponse(): MsgFungifyChargedPositionsResponse {
  return {
    newPositionId: BigInt(0),
  };
}
export const MsgFungifyChargedPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse",
  encode(
    message: MsgFungifyChargedPositionsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.newPositionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.newPositionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFungifyChargedPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFungifyChargedPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPositionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFungifyChargedPositionsResponse {
    const obj = createBaseMsgFungifyChargedPositionsResponse();
    if (isSet(object.newPositionId)) obj.newPositionId = BigInt(object.newPositionId.toString());
    return obj;
  },
  toJSON(message: MsgFungifyChargedPositionsResponse): unknown {
    const obj: any = {};
    message.newPositionId !== undefined &&
      (obj.newPositionId = (message.newPositionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFungifyChargedPositionsResponse>, I>>(
    object: I,
  ): MsgFungifyChargedPositionsResponse {
    const message = createBaseMsgFungifyChargedPositionsResponse();
    if (object.newPositionId !== undefined && object.newPositionId !== null) {
      message.newPositionId = BigInt(object.newPositionId.toString());
    }
    return message;
  },
};
function createBaseMsgTransferPositions(): MsgTransferPositions {
  return {
    positionIds: [],
    sender: "",
    newOwner: "",
  };
}
export const MsgTransferPositions = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions",
  encode(message: MsgTransferPositions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferPositions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.positionIds.push(reader.uint64());
            }
          } else {
            message.positionIds.push(reader.uint64());
          }
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferPositions {
    const obj = createBaseMsgTransferPositions();
    if (Array.isArray(object?.positionIds))
      obj.positionIds = object.positionIds.map((e: any) => BigInt(e.toString()));
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.newOwner)) obj.newOwner = String(object.newOwner);
    return obj;
  },
  toJSON(message: MsgTransferPositions): unknown {
    const obj: any = {};
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.positionIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferPositions>, I>>(object: I): MsgTransferPositions {
    const message = createBaseMsgTransferPositions();
    message.positionIds = object.positionIds?.map((e) => BigInt(e.toString())) || [];
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};
function createBaseMsgTransferPositionsResponse(): MsgTransferPositionsResponse {
  return {};
}
export const MsgTransferPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse",
  encode(_: MsgTransferPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTransferPositionsResponse {
    const obj = createBaseMsgTransferPositionsResponse();
    return obj;
  },
  toJSON(_: MsgTransferPositionsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferPositionsResponse>, I>>(
    _: I,
  ): MsgTransferPositionsResponse {
    const message = createBaseMsgTransferPositionsResponse();
    return message;
  },
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePosition = this.CreatePosition.bind(this);
    this.WithdrawPosition = this.WithdrawPosition.bind(this);
    this.AddToPosition = this.AddToPosition.bind(this);
    this.CollectSpreadRewards = this.CollectSpreadRewards.bind(this);
    this.CollectIncentives = this.CollectIncentives.bind(this);
    this.TransferPositions = this.TransferPositions.bind(this);
  }
  CreatePosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse> {
    const data = MsgCreatePosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CreatePosition", data);
    return promise.then((data) => MsgCreatePositionResponse.decode(new BinaryReader(data)));
  }
  WithdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse> {
    const data = MsgWithdrawPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "WithdrawPosition", data);
    return promise.then((data) => MsgWithdrawPositionResponse.decode(new BinaryReader(data)));
  }
  AddToPosition(request: MsgAddToPosition): Promise<MsgAddToPositionResponse> {
    const data = MsgAddToPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "AddToPosition", data);
    return promise.then((data) => MsgAddToPositionResponse.decode(new BinaryReader(data)));
  }
  CollectSpreadRewards(request: MsgCollectSpreadRewards): Promise<MsgCollectSpreadRewardsResponse> {
    const data = MsgCollectSpreadRewards.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.concentratedliquidity.v1beta1.Msg",
      "CollectSpreadRewards",
      data,
    );
    return promise.then((data) => MsgCollectSpreadRewardsResponse.decode(new BinaryReader(data)));
  }
  CollectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse> {
    const data = MsgCollectIncentives.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectIncentives", data);
    return promise.then((data) => MsgCollectIncentivesResponse.decode(new BinaryReader(data)));
  }
  TransferPositions(request: MsgTransferPositions): Promise<MsgTransferPositionsResponse> {
    const data = MsgTransferPositions.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "TransferPositions", data);
    return promise.then((data) => MsgTransferPositionsResponse.decode(new BinaryReader(data)));
  }
}
