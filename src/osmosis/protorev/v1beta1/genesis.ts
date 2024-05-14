/* eslint-disable */
import { Params } from "./params";
import { TokenPairArbRoutes, BaseDenom, InfoByPoolType, CyclicArbTracker } from "./protorev";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairArbRoutes: [],
    baseDenoms: [],
    daysSinceModuleGenesis: BigInt(0),
    developerFees: [],
    latestBlockHeight: BigInt(0),
    developerAddress: "",
    maxPoolPointsPerBlock: BigInt(0),
    maxPoolPointsPerTx: BigInt(0),
    pointCountForBlock: BigInt(0),
    profits: [],
    infoByPoolType: InfoByPoolType.fromPartial({}),
    cyclicArbTracker: undefined,
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairArbRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.daysSinceModuleGenesis !== BigInt(0)) {
      writer.uint32(40).uint64(message.daysSinceModuleGenesis);
    }
    for (const v of message.developerFees) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestBlockHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.latestBlockHeight);
    }
    if (message.developerAddress !== "") {
      writer.uint32(66).string(message.developerAddress);
    }
    if (message.maxPoolPointsPerBlock !== BigInt(0)) {
      writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
    }
    if (message.maxPoolPointsPerTx !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxPoolPointsPerTx);
    }
    if (message.pointCountForBlock !== BigInt(0)) {
      writer.uint32(88).uint64(message.pointCountForBlock);
    }
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.infoByPoolType !== undefined) {
      InfoByPoolType.encode(message.infoByPoolType, writer.uint32(106).fork()).ldelim();
    }
    if (message.cyclicArbTracker !== undefined) {
      CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairArbRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        case 3:
          message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
          break;
        case 5:
          message.daysSinceModuleGenesis = reader.uint64();
          break;
        case 6:
          message.developerFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.latestBlockHeight = reader.uint64();
          break;
        case 8:
          message.developerAddress = reader.string();
          break;
        case 9:
          message.maxPoolPointsPerBlock = reader.uint64();
          break;
        case 10:
          message.maxPoolPointsPerTx = reader.uint64();
          break;
        case 11:
          message.pointCountForBlock = reader.uint64();
          break;
        case 12:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 13:
          message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
          break;
        case 14:
          message.cyclicArbTracker = CyclicArbTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.tokenPairArbRoutes))
      obj.tokenPairArbRoutes = object.tokenPairArbRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e));
    if (Array.isArray(object?.baseDenoms))
      obj.baseDenoms = object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e));
    if (isSet(object.daysSinceModuleGenesis))
      obj.daysSinceModuleGenesis = BigInt(object.daysSinceModuleGenesis.toString());
    if (Array.isArray(object?.developerFees))
      obj.developerFees = object.developerFees.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.latestBlockHeight)) obj.latestBlockHeight = BigInt(object.latestBlockHeight.toString());
    if (isSet(object.developerAddress)) obj.developerAddress = String(object.developerAddress);
    if (isSet(object.maxPoolPointsPerBlock))
      obj.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
    if (isSet(object.maxPoolPointsPerTx))
      obj.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
    if (isSet(object.pointCountForBlock))
      obj.pointCountForBlock = BigInt(object.pointCountForBlock.toString());
    if (Array.isArray(object?.profits)) obj.profits = object.profits.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.infoByPoolType)) obj.infoByPoolType = InfoByPoolType.fromJSON(object.infoByPoolType);
    if (isSet(object.cyclicArbTracker))
      obj.cyclicArbTracker = CyclicArbTracker.fromJSON(object.cyclicArbTracker);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenPairArbRoutes) {
      obj.tokenPairArbRoutes = message.tokenPairArbRoutes.map((e) =>
        e ? TokenPairArbRoutes.toJSON(e) : undefined,
      );
    } else {
      obj.tokenPairArbRoutes = [];
    }
    if (message.baseDenoms) {
      obj.baseDenoms = message.baseDenoms.map((e) => (e ? BaseDenom.toJSON(e) : undefined));
    } else {
      obj.baseDenoms = [];
    }
    message.daysSinceModuleGenesis !== undefined &&
      (obj.daysSinceModuleGenesis = (message.daysSinceModuleGenesis || BigInt(0)).toString());
    if (message.developerFees) {
      obj.developerFees = message.developerFees.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.developerFees = [];
    }
    message.latestBlockHeight !== undefined &&
      (obj.latestBlockHeight = (message.latestBlockHeight || BigInt(0)).toString());
    message.developerAddress !== undefined && (obj.developerAddress = message.developerAddress);
    message.maxPoolPointsPerBlock !== undefined &&
      (obj.maxPoolPointsPerBlock = (message.maxPoolPointsPerBlock || BigInt(0)).toString());
    message.maxPoolPointsPerTx !== undefined &&
      (obj.maxPoolPointsPerTx = (message.maxPoolPointsPerTx || BigInt(0)).toString());
    message.pointCountForBlock !== undefined &&
      (obj.pointCountForBlock = (message.pointCountForBlock || BigInt(0)).toString());
    if (message.profits) {
      obj.profits = message.profits.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.profits = [];
    }
    message.infoByPoolType !== undefined &&
      (obj.infoByPoolType = message.infoByPoolType
        ? InfoByPoolType.toJSON(message.infoByPoolType)
        : undefined);
    message.cyclicArbTracker !== undefined &&
      (obj.cyclicArbTracker = message.cyclicArbTracker
        ? CyclicArbTracker.toJSON(message.cyclicArbTracker)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.tokenPairArbRoutes =
      object.tokenPairArbRoutes?.map((e) => TokenPairArbRoutes.fromPartial(e)) || [];
    message.baseDenoms = object.baseDenoms?.map((e) => BaseDenom.fromPartial(e)) || [];
    if (object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null) {
      message.daysSinceModuleGenesis = BigInt(object.daysSinceModuleGenesis.toString());
    }
    message.developerFees = object.developerFees?.map((e) => Coin.fromPartial(e)) || [];
    if (object.latestBlockHeight !== undefined && object.latestBlockHeight !== null) {
      message.latestBlockHeight = BigInt(object.latestBlockHeight.toString());
    }
    message.developerAddress = object.developerAddress ?? "";
    if (object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null) {
      message.maxPoolPointsPerBlock = BigInt(object.maxPoolPointsPerBlock.toString());
    }
    if (object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null) {
      message.maxPoolPointsPerTx = BigInt(object.maxPoolPointsPerTx.toString());
    }
    if (object.pointCountForBlock !== undefined && object.pointCountForBlock !== null) {
      message.pointCountForBlock = BigInt(object.pointCountForBlock.toString());
    }
    message.profits = object.profits?.map((e) => Coin.fromPartial(e)) || [];
    if (object.infoByPoolType !== undefined && object.infoByPoolType !== null) {
      message.infoByPoolType = InfoByPoolType.fromPartial(object.infoByPoolType);
    }
    if (object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null) {
      message.cyclicArbTracker = CyclicArbTracker.fromPartial(object.cyclicArbTracker);
    }
    return message;
  },
};
