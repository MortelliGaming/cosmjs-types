/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "osmosis.mint.v1beta1";
/** Minter represents the minting state. */
export interface Minter {
  /** epoch_provisions represent rewards for the current epoch. */
  epochProvisions: string;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddress {
  address: string;
  weight: string;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted mint_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * pool_incentives defines the proportion of the minted mint_denom that is
   * to be allocated as pool incentives.
   */
  poolIncentives: string;
  /**
   * developer_rewards defines the proportion of the minted mint_denom that is
   * to be allocated to developer rewards address.
   */
  developerRewards: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool.
   */
  communityPool: string;
}
/** Params holds parameters for the x/mint module. */
export interface Params {
  /** mint_denom is the denom of the coin to mint. */
  mintDenom: string;
  /** genesis_epoch_provisions epoch provisions from the first epoch. */
  genesisEpochProvisions: string;
  /** epoch_identifier mint epoch identifier e.g. (day, week). */
  epochIdentifier: string;
  /**
   * reduction_period_in_epochs the number of epochs it takes
   * to reduce the rewards.
   */
  reductionPeriodInEpochs: bigint;
  /**
   * reduction_factor is the reduction multiplier to execute
   * at the end of each period set by reduction_period_in_epochs.
   */
  reductionFactor: string;
  /**
   * distribution_proportions defines the distribution proportions of the minted
   * denom. In other words, defines which stakeholders will receive the minted
   * denoms and how much.
   */
  distributionProportions: DistributionProportions;
  /**
   * weighted_developer_rewards_receivers is the address to receive developer
   * rewards with weights assignedt to each address. The final amount that each
   * address receives is: epoch_provisions *
   * distribution_proportions.developer_rewards * Address's Weight.
   */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /**
   * minting_rewards_distribution_start_epoch start epoch to distribute minting
   * rewards
   */
  mintingRewardsDistributionStartEpoch: bigint;
}
function createBaseMinter(): Minter {
  return {
    epochProvisions: "",
  };
}
export const Minter = {
  typeUrl: "/osmosis.mint.v1beta1.Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Minter {
    const obj = createBaseMinter();
    if (isSet(object.epochProvisions)) obj.epochProvisions = String(object.epochProvisions);
    return obj;
  },
  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.epochProvisions !== undefined && (obj.epochProvisions = message.epochProvisions);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Minter>, I>>(object: I): Minter {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  },
};
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: "",
  };
}
export const WeightedAddress = {
  typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedAddress {
    const obj = createBaseWeightedAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: WeightedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WeightedAddress>, I>>(object: I): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    poolIncentives: "",
    developerRewards: "",
    communityPool: "",
  };
}
export const DistributionProportions = {
  typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.poolIncentives !== "") {
      writer.uint32(18).string(message.poolIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(26).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(34).string(message.communityPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;
        case 2:
          message.poolIncentives = reader.string();
          break;
        case 3:
          message.developerRewards = reader.string();
          break;
        case 4:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistributionProportions {
    const obj = createBaseDistributionProportions();
    if (isSet(object.staking)) obj.staking = String(object.staking);
    if (isSet(object.poolIncentives)) obj.poolIncentives = String(object.poolIncentives);
    if (isSet(object.developerRewards)) obj.developerRewards = String(object.developerRewards);
    if (isSet(object.communityPool)) obj.communityPool = String(object.communityPool);
    return obj;
  },
  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking);
    message.poolIncentives !== undefined && (obj.poolIncentives = message.poolIncentives);
    message.developerRewards !== undefined && (obj.developerRewards = message.developerRewards);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DistributionProportions>, I>>(object: I): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.poolIncentives = object.poolIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: BigInt(0),
    reductionFactor: "",
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    mintingRewardsDistributionStartEpoch: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/osmosis.mint.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.reductionPeriodInEpochs !== BigInt(0)) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(message.reductionFactor);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
      writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.genesisEpochProvisions = reader.string();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.reductionPeriodInEpochs = reader.int64();
          break;
        case 5:
          message.reductionFactor = reader.string();
          break;
        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 7:
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 8:
          message.mintingRewardsDistributionStartEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.mintDenom)) obj.mintDenom = String(object.mintDenom);
    if (isSet(object.genesisEpochProvisions))
      obj.genesisEpochProvisions = String(object.genesisEpochProvisions);
    if (isSet(object.epochIdentifier)) obj.epochIdentifier = String(object.epochIdentifier);
    if (isSet(object.reductionPeriodInEpochs))
      obj.reductionPeriodInEpochs = BigInt(object.reductionPeriodInEpochs.toString());
    if (isSet(object.reductionFactor)) obj.reductionFactor = String(object.reductionFactor);
    if (isSet(object.distributionProportions))
      obj.distributionProportions = DistributionProportions.fromJSON(object.distributionProportions);
    if (Array.isArray(object?.weightedDeveloperRewardsReceivers))
      obj.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers.map((e: any) =>
        WeightedAddress.fromJSON(e),
      );
    if (isSet(object.mintingRewardsDistributionStartEpoch))
      obj.mintingRewardsDistributionStartEpoch = BigInt(
        object.mintingRewardsDistributionStartEpoch.toString(),
      );
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.genesisEpochProvisions !== undefined &&
      (obj.genesisEpochProvisions = message.genesisEpochProvisions);
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    message.reductionPeriodInEpochs !== undefined &&
      (obj.reductionPeriodInEpochs = (message.reductionPeriodInEpochs || BigInt(0)).toString());
    message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
    message.distributionProportions !== undefined &&
      (obj.distributionProportions = message.distributionProportions
        ? DistributionProportions.toJSON(message.distributionProportions)
        : undefined);
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map((e) =>
        e ? WeightedAddress.toJSON(e) : undefined,
      );
    } else {
      obj.weightedDeveloperRewardsReceivers = [];
    }
    message.mintingRewardsDistributionStartEpoch !== undefined &&
      (obj.mintingRewardsDistributionStartEpoch = (
        message.mintingRewardsDistributionStartEpoch || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    if (object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null) {
      message.reductionPeriodInEpochs = BigInt(object.reductionPeriodInEpochs.toString());
    }
    message.reductionFactor = object.reductionFactor ?? "";
    if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
      message.distributionProportions = DistributionProportions.fromPartial(object.distributionProportions);
    }
    message.weightedDeveloperRewardsReceivers =
      object.weightedDeveloperRewardsReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    if (
      object.mintingRewardsDistributionStartEpoch !== undefined &&
      object.mintingRewardsDistributionStartEpoch !== null
    ) {
      message.mintingRewardsDistributionStartEpoch = BigInt(
        object.mintingRewardsDistributionStartEpoch.toString(),
      );
    }
    return message;
  },
};
