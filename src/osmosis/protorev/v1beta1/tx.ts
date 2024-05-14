/* eslint-disable */
import { TokenPairArbRoutes, InfoByPoolType, BaseDenom } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {}
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
export interface MsgSetDeveloperAccountResponse {}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolType {
  /** admin is the account that is authorized to set the pool weights. */
  admin: string;
  /** info_by_pool_type contains information about the pool types. */
  infoByPoolType: InfoByPoolType;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponse {}
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
export interface MsgSetMaxPoolPointsPerTxResponse {}
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
export interface MsgSetMaxPoolPointsPerBlockResponse {}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenoms {
  /** admin is the account that is authorized to set the base denoms. */
  admin: string;
  /** base_denoms is the list of base denoms to set. */
  baseDenoms: BaseDenom[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {}
function createBaseMsgSetHotRoutes(): MsgSetHotRoutes {
  return {
    admin: "",
    hotRoutes: [],
  };
}
export const MsgSetHotRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
  encode(message: MsgSetHotRoutes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.hotRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetHotRoutes {
    const obj = createBaseMsgSetHotRoutes();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (Array.isArray(object?.hotRoutes))
      obj.hotRoutes = object.hotRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSetHotRoutes): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.hotRoutes) {
      obj.hotRoutes = message.hotRoutes.map((e) => (e ? TokenPairArbRoutes.toJSON(e) : undefined));
    } else {
      obj.hotRoutes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetHotRoutes>, I>>(object: I): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    message.admin = object.admin ?? "";
    message.hotRoutes = object.hotRoutes?.map((e) => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgSetHotRoutesResponse(): MsgSetHotRoutesResponse {
  return {};
}
export const MsgSetHotRoutesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
  encode(_: MsgSetHotRoutesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutesResponse();
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
  fromJSON(_: any): MsgSetHotRoutesResponse {
    const obj = createBaseMsgSetHotRoutesResponse();
    return obj;
  },
  toJSON(_: MsgSetHotRoutesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetHotRoutesResponse>, I>>(_: I): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  },
};
function createBaseMsgSetDeveloperAccount(): MsgSetDeveloperAccount {
  return {
    admin: "",
    developerAccount: "",
  };
}
export const MsgSetDeveloperAccount = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
  encode(message: MsgSetDeveloperAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDeveloperAccount {
    const obj = createBaseMsgSetDeveloperAccount();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.developerAccount)) obj.developerAccount = String(object.developerAccount);
    return obj;
  },
  toJSON(message: MsgSetDeveloperAccount): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetDeveloperAccount>, I>>(object: I): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = object.admin ?? "";
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
};
function createBaseMsgSetDeveloperAccountResponse(): MsgSetDeveloperAccountResponse {
  return {};
}
export const MsgSetDeveloperAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
  encode(_: MsgSetDeveloperAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccountResponse();
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
  fromJSON(_: any): MsgSetDeveloperAccountResponse {
    const obj = createBaseMsgSetDeveloperAccountResponse();
    return obj;
  },
  toJSON(_: MsgSetDeveloperAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetDeveloperAccountResponse>, I>>(
    _: I,
  ): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  },
};
function createBaseMsgSetInfoByPoolType(): MsgSetInfoByPoolType {
  return {
    admin: "",
    infoByPoolType: InfoByPoolType.fromPartial({}),
  };
}
export const MsgSetInfoByPoolType = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType",
  encode(message: MsgSetInfoByPoolType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.infoByPoolType !== undefined) {
      InfoByPoolType.encode(message.infoByPoolType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInfoByPoolType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInfoByPoolType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetInfoByPoolType {
    const obj = createBaseMsgSetInfoByPoolType();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.infoByPoolType)) obj.infoByPoolType = InfoByPoolType.fromJSON(object.infoByPoolType);
    return obj;
  },
  toJSON(message: MsgSetInfoByPoolType): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.infoByPoolType !== undefined &&
      (obj.infoByPoolType = message.infoByPoolType
        ? InfoByPoolType.toJSON(message.infoByPoolType)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetInfoByPoolType>, I>>(object: I): MsgSetInfoByPoolType {
    const message = createBaseMsgSetInfoByPoolType();
    message.admin = object.admin ?? "";
    if (object.infoByPoolType !== undefined && object.infoByPoolType !== null) {
      message.infoByPoolType = InfoByPoolType.fromPartial(object.infoByPoolType);
    }
    return message;
  },
};
function createBaseMsgSetInfoByPoolTypeResponse(): MsgSetInfoByPoolTypeResponse {
  return {};
}
export const MsgSetInfoByPoolTypeResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse",
  encode(_: MsgSetInfoByPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetInfoByPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInfoByPoolTypeResponse();
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
  fromJSON(_: any): MsgSetInfoByPoolTypeResponse {
    const obj = createBaseMsgSetInfoByPoolTypeResponse();
    return obj;
  },
  toJSON(_: MsgSetInfoByPoolTypeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetInfoByPoolTypeResponse>, I>>(
    _: I,
  ): MsgSetInfoByPoolTypeResponse {
    const message = createBaseMsgSetInfoByPoolTypeResponse();
    return message;
  },
};
function createBaseMsgSetMaxPoolPointsPerTx(): MsgSetMaxPoolPointsPerTx {
  return {
    admin: "",
    maxPoolPointsPerTx: BigInt(0),
  };
}
export const MsgSetMaxPoolPointsPerTx = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx",
  encode(message: MsgSetMaxPoolPointsPerTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerTx {
    const obj = createBaseMsgSetMaxPoolPointsPerTx();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.maxPoolPointsPerTx))
      obj.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
    return obj;
  },
  toJSON(message: MsgSetMaxPoolPointsPerTx): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerTx !== undefined &&
      (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetMaxPoolPointsPerTx>, I>>(
    object: I,
  ): MsgSetMaxPoolPointsPerTx {
    const message = createBaseMsgSetMaxPoolPointsPerTx();
    message.admin = object.admin ?? "";
    if (object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
    }
    return message;
  },
};
function createBaseMsgSetMaxPoolPointsPerTxResponse(): MsgSetMaxPoolPointsPerTxResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerTxResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse",
  encode(_: MsgSetMaxPoolPointsPerTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerTxResponse {
    const obj = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return obj;
  },
  toJSON(_: MsgSetMaxPoolPointsPerTxResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetMaxPoolPointsPerTxResponse>, I>>(
    _: I,
  ): MsgSetMaxPoolPointsPerTxResponse {
    const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
    return message;
  },
};
function createBaseMsgSetMaxPoolPointsPerBlock(): MsgSetMaxPoolPointsPerBlock {
  return {
    admin: "",
    maxPoolPointsPerBlock: BigInt(0),
  };
}
export const MsgSetMaxPoolPointsPerBlock = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock",
  encode(message: MsgSetMaxPoolPointsPerBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetMaxPoolPointsPerBlock {
    const obj = createBaseMsgSetMaxPoolPointsPerBlock();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.maxPoolPointsPerBlock))
      obj.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
    return obj;
  },
  toJSON(message: MsgSetMaxPoolPointsPerBlock): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.maxPoolPointsPerBlock !== undefined &&
      (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetMaxPoolPointsPerBlock>, I>>(
    object: I,
  ): MsgSetMaxPoolPointsPerBlock {
    const message = createBaseMsgSetMaxPoolPointsPerBlock();
    message.admin = object.admin ?? "";
    if (object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
    }
    return message;
  },
};
function createBaseMsgSetMaxPoolPointsPerBlockResponse(): MsgSetMaxPoolPointsPerBlockResponse {
  return {};
}
export const MsgSetMaxPoolPointsPerBlockResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse",
  encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMaxPoolPointsPerBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
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
  fromJSON(_: any): MsgSetMaxPoolPointsPerBlockResponse {
    const obj = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return obj;
  },
  toJSON(_: MsgSetMaxPoolPointsPerBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetMaxPoolPointsPerBlockResponse>, I>>(
    _: I,
  ): MsgSetMaxPoolPointsPerBlockResponse {
    const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
    return message;
  },
};
function createBaseMsgSetBaseDenoms(): MsgSetBaseDenoms {
  return {
    admin: "",
    baseDenoms: [],
  };
}
export const MsgSetBaseDenoms = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms",
  encode(message: MsgSetBaseDenoms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenoms {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenoms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetBaseDenoms {
    const obj = createBaseMsgSetBaseDenoms();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (Array.isArray(object?.baseDenoms))
      obj.baseDenoms = object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSetBaseDenoms): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map((e) => (e ? BaseDenom.toJSON(e) : undefined));
    } else {
      obj.baseDenoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetBaseDenoms>, I>>(object: I): MsgSetBaseDenoms {
    const message = createBaseMsgSetBaseDenoms();
    message.admin = object.admin ?? "";
    message.baseDenoms = object.baseDenoms?.map((e) => BaseDenom.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgSetBaseDenomsResponse(): MsgSetBaseDenomsResponse {
  return {};
}
export const MsgSetBaseDenomsResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse",
  encode(_: MsgSetBaseDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetBaseDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseDenomsResponse();
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
  fromJSON(_: any): MsgSetBaseDenomsResponse {
    const obj = createBaseMsgSetBaseDenomsResponse();
    return obj;
  },
  toJSON(_: MsgSetBaseDenomsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetBaseDenomsResponse>, I>>(_: I): MsgSetBaseDenomsResponse {
    const message = createBaseMsgSetBaseDenomsResponse();
    return message;
  },
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
  SetMaxPoolPointsPerBlock(
    request: MsgSetMaxPoolPointsPerBlock,
  ): Promise<MsgSetMaxPoolPointsPerBlockResponse>;
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetHotRoutes = this.SetHotRoutes.bind(this);
    this.SetDeveloperAccount = this.SetDeveloperAccount.bind(this);
    this.SetMaxPoolPointsPerTx = this.SetMaxPoolPointsPerTx.bind(this);
    this.SetMaxPoolPointsPerBlock = this.SetMaxPoolPointsPerBlock.bind(this);
    this.SetInfoByPoolType = this.SetInfoByPoolType.bind(this);
    this.SetBaseDenoms = this.SetBaseDenoms.bind(this);
  }
  SetHotRoutes(request: MsgSetHotRoutes): Promise<MsgSetHotRoutesResponse> {
    const data = MsgSetHotRoutes.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetHotRoutes", data);
    return promise.then((data) => MsgSetHotRoutesResponse.decode(new BinaryReader(data)));
  }
  SetDeveloperAccount(request: MsgSetDeveloperAccount): Promise<MsgSetDeveloperAccountResponse> {
    const data = MsgSetDeveloperAccount.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetDeveloperAccount", data);
    return promise.then((data) => MsgSetDeveloperAccountResponse.decode(new BinaryReader(data)));
  }
  SetMaxPoolPointsPerTx(request: MsgSetMaxPoolPointsPerTx): Promise<MsgSetMaxPoolPointsPerTxResponse> {
    const data = MsgSetMaxPoolPointsPerTx.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetMaxPoolPointsPerTx", data);
    return promise.then((data) => MsgSetMaxPoolPointsPerTxResponse.decode(new BinaryReader(data)));
  }
  SetMaxPoolPointsPerBlock(
    request: MsgSetMaxPoolPointsPerBlock,
  ): Promise<MsgSetMaxPoolPointsPerBlockResponse> {
    const data = MsgSetMaxPoolPointsPerBlock.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetMaxPoolPointsPerBlock", data);
    return promise.then((data) => MsgSetMaxPoolPointsPerBlockResponse.decode(new BinaryReader(data)));
  }
  SetInfoByPoolType(request: MsgSetInfoByPoolType): Promise<MsgSetInfoByPoolTypeResponse> {
    const data = MsgSetInfoByPoolType.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetInfoByPoolType", data);
    return promise.then((data) => MsgSetInfoByPoolTypeResponse.decode(new BinaryReader(data)));
  }
  SetBaseDenoms(request: MsgSetBaseDenoms): Promise<MsgSetBaseDenomsResponse> {
    const data = MsgSetBaseDenoms.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetBaseDenoms", data);
    return promise.then((data) => MsgSetBaseDenomsResponse.decode(new BinaryReader(data)));
  }
}
