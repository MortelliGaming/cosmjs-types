import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidDelegationRecord, ConcentratedPoolUserPositionRecord } from "./superfluid";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { DelegationResponse } from "../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "osmosis.superfluid";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface AssetTypeRequest {
    denom: string;
}
export interface AssetTypeResponse {
    assetType: SuperfluidAssetType;
}
export interface AllAssetsRequest {
}
export interface AllAssetsResponse {
    assets: SuperfluidAsset[];
}
export interface AssetMultiplierRequest {
    denom: string;
}
export interface AssetMultiplierResponse {
    osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface SuperfluidIntermediaryAccountInfo {
    denom: string;
    valAddr: string;
    gaugeId: bigint;
    address: string;
}
export interface AllIntermediaryAccountsRequest {
    pagination?: PageRequest;
}
export interface AllIntermediaryAccountsResponse {
    accounts: SuperfluidIntermediaryAccountInfo[];
    pagination?: PageResponse;
}
export interface ConnectedIntermediaryAccountRequest {
    lockId: bigint;
}
export interface ConnectedIntermediaryAccountResponse {
    account?: SuperfluidIntermediaryAccountInfo;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
    assets: Delegations[];
}
export interface Delegations {
    valAddr: string;
    amountSfsd: string;
    osmoEquivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {
}
export interface TotalSuperfluidDelegationsResponse {
    totalDelegations: string;
}
export interface SuperfluidDelegationAmountRequest {
    delegatorAddress: string;
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationAmountResponse {
    amount: Coin[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
    delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount: Coin;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
    delegatorAddress: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalUndelegatedCoins: Coin[];
    syntheticLocks: SyntheticLock[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    totalDelegatedCoins: Coin[];
}
export interface QueryTotalDelegationByDelegatorRequest {
    delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    delegationResponse: DelegationResponse[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount: Coin;
}
export interface QueryUnpoolWhitelistRequest {
}
export interface QueryUnpoolWhitelistResponse {
    poolIds: bigint[];
}
export interface UserConcentratedSuperfluidPositionsDelegatedRequest {
    delegatorAddress: string;
}
export interface UserConcentratedSuperfluidPositionsDelegatedResponse {
    clPoolUserPositionRecords: ConcentratedPoolUserPositionRecord[];
}
export interface UserConcentratedSuperfluidPositionsUndelegatingRequest {
    delegatorAddress: string;
}
export interface UserConcentratedSuperfluidPositionsUndelegatingResponse {
    clPoolUserPositionRecords: ConcentratedPoolUserPositionRecord[];
}
/** THIS QUERY IS TEMPORARY */
export interface QueryRestSupplyRequest {
    /** THIS QUERY IS TEMPORARY */
    denom: string;
}
export interface QueryRestSupplyResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            minimumRiskFactor?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            minimumRiskFactor?: string | undefined;
        } & {
            minimumRiskFactor?: string | undefined;
        } & Record<Exclude<keyof I["params"], "minimumRiskFactor">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const AssetTypeRequest: {
    typeUrl: string;
    encode(message: AssetTypeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeRequest;
    fromJSON(object: any): AssetTypeRequest;
    toJSON(message: AssetTypeRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): AssetTypeRequest;
};
export declare const AssetTypeResponse: {
    typeUrl: string;
    encode(message: AssetTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeResponse;
    fromJSON(object: any): AssetTypeResponse;
    toJSON(message: AssetTypeResponse): unknown;
    fromPartial<I extends {
        assetType?: SuperfluidAssetType | undefined;
    } & {
        assetType?: SuperfluidAssetType | undefined;
    } & Record<Exclude<keyof I, "assetType">, never>>(object: I): AssetTypeResponse;
};
export declare const AllAssetsRequest: {
    typeUrl: string;
    encode(_: AllAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsRequest;
    fromJSON(_: any): AllAssetsRequest;
    toJSON(_: AllAssetsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): AllAssetsRequest;
};
export declare const AllAssetsResponse: {
    typeUrl: string;
    encode(message: AllAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsResponse;
    fromJSON(object: any): AllAssetsResponse;
    toJSON(message: AllAssetsResponse): unknown;
    fromPartial<I extends {
        assets?: {
            denom?: string | undefined;
            assetType?: SuperfluidAssetType | undefined;
        }[] | undefined;
    } & {
        assets?: ({
            denom?: string | undefined;
            assetType?: SuperfluidAssetType | undefined;
        }[] & ({
            denom?: string | undefined;
            assetType?: SuperfluidAssetType | undefined;
        } & {
            denom?: string | undefined;
            assetType?: SuperfluidAssetType | undefined;
        } & Record<Exclude<keyof I["assets"][number], keyof SuperfluidAsset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
            denom?: string | undefined;
            assetType?: SuperfluidAssetType | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "assets">, never>>(object: I): AllAssetsResponse;
};
export declare const AssetMultiplierRequest: {
    typeUrl: string;
    encode(message: AssetMultiplierRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierRequest;
    fromJSON(object: any): AssetMultiplierRequest;
    toJSON(message: AssetMultiplierRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): AssetMultiplierRequest;
};
export declare const AssetMultiplierResponse: {
    typeUrl: string;
    encode(message: AssetMultiplierResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierResponse;
    fromJSON(object: any): AssetMultiplierResponse;
    toJSON(message: AssetMultiplierResponse): unknown;
    fromPartial<I extends {
        osmoEquivalentMultiplier?: {
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        } | undefined;
    } & {
        osmoEquivalentMultiplier?: ({
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        } & {
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        } & Record<Exclude<keyof I["osmoEquivalentMultiplier"], keyof OsmoEquivalentMultiplierRecord>, never>) | undefined;
    } & Record<Exclude<keyof I, "osmoEquivalentMultiplier">, never>>(object: I): AssetMultiplierResponse;
};
export declare const SuperfluidIntermediaryAccountInfo: {
    typeUrl: string;
    encode(message: SuperfluidIntermediaryAccountInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo;
    fromJSON(object: any): SuperfluidIntermediaryAccountInfo;
    toJSON(message: SuperfluidIntermediaryAccountInfo): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        valAddr?: string | undefined;
        gaugeId?: bigint | undefined;
        address?: string | undefined;
    } & {
        denom?: string | undefined;
        valAddr?: string | undefined;
        gaugeId?: bigint | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidIntermediaryAccountInfo>, never>>(object: I): SuperfluidIntermediaryAccountInfo;
};
export declare const AllIntermediaryAccountsRequest: {
    typeUrl: string;
    encode(message: AllIntermediaryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsRequest;
    fromJSON(object: any): AllIntermediaryAccountsRequest;
    toJSON(message: AllIntermediaryAccountsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): AllIntermediaryAccountsRequest;
};
export declare const AllIntermediaryAccountsResponse: {
    typeUrl: string;
    encode(message: AllIntermediaryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsResponse;
    fromJSON(object: any): AllIntermediaryAccountsResponse;
    toJSON(message: AllIntermediaryAccountsResponse): unknown;
    fromPartial<I extends {
        accounts?: {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
        accounts?: ({
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        } & {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["accounts"][number], keyof SuperfluidIntermediaryAccountInfo>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AllIntermediaryAccountsResponse>, never>>(object: I): AllIntermediaryAccountsResponse;
};
export declare const ConnectedIntermediaryAccountRequest: {
    typeUrl: string;
    encode(message: ConnectedIntermediaryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest;
    fromJSON(object: any): ConnectedIntermediaryAccountRequest;
    toJSON(message: ConnectedIntermediaryAccountRequest): unknown;
    fromPartial<I extends {
        lockId?: bigint | undefined;
    } & {
        lockId?: bigint | undefined;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): ConnectedIntermediaryAccountRequest;
};
export declare const ConnectedIntermediaryAccountResponse: {
    typeUrl: string;
    encode(message: ConnectedIntermediaryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse;
    fromJSON(object: any): ConnectedIntermediaryAccountResponse;
    toJSON(message: ConnectedIntermediaryAccountResponse): unknown;
    fromPartial<I extends {
        account?: {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        } | undefined;
    } & {
        account?: ({
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        } & {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["account"], keyof SuperfluidIntermediaryAccountInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, "account">, never>>(object: I): ConnectedIntermediaryAccountResponse;
};
export declare const QueryTotalDelegationByValidatorForDenomRequest: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest;
    toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryTotalDelegationByValidatorForDenomRequest;
};
export declare const QueryTotalDelegationByValidatorForDenomResponse: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse;
    toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown;
    fromPartial<I extends {
        assets?: {
            valAddr?: string | undefined;
            amountSfsd?: string | undefined;
            osmoEquivalent?: string | undefined;
        }[] | undefined;
    } & {
        assets?: ({
            valAddr?: string | undefined;
            amountSfsd?: string | undefined;
            osmoEquivalent?: string | undefined;
        }[] & ({
            valAddr?: string | undefined;
            amountSfsd?: string | undefined;
            osmoEquivalent?: string | undefined;
        } & {
            valAddr?: string | undefined;
            amountSfsd?: string | undefined;
            osmoEquivalent?: string | undefined;
        } & Record<Exclude<keyof I["assets"][number], keyof Delegations>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
            valAddr?: string | undefined;
            amountSfsd?: string | undefined;
            osmoEquivalent?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "assets">, never>>(object: I): QueryTotalDelegationByValidatorForDenomResponse;
};
export declare const Delegations: {
    typeUrl: string;
    encode(message: Delegations, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Delegations;
    fromJSON(object: any): Delegations;
    toJSON(message: Delegations): unknown;
    fromPartial<I extends {
        valAddr?: string | undefined;
        amountSfsd?: string | undefined;
        osmoEquivalent?: string | undefined;
    } & {
        valAddr?: string | undefined;
        amountSfsd?: string | undefined;
        osmoEquivalent?: string | undefined;
    } & Record<Exclude<keyof I, keyof Delegations>, never>>(object: I): Delegations;
};
export declare const TotalSuperfluidDelegationsRequest: {
    typeUrl: string;
    encode(_: TotalSuperfluidDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest;
    fromJSON(_: any): TotalSuperfluidDelegationsRequest;
    toJSON(_: TotalSuperfluidDelegationsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): TotalSuperfluidDelegationsRequest;
};
export declare const TotalSuperfluidDelegationsResponse: {
    typeUrl: string;
    encode(message: TotalSuperfluidDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse;
    fromJSON(object: any): TotalSuperfluidDelegationsResponse;
    toJSON(message: TotalSuperfluidDelegationsResponse): unknown;
    fromPartial<I extends {
        totalDelegations?: string | undefined;
    } & {
        totalDelegations?: string | undefined;
    } & Record<Exclude<keyof I, "totalDelegations">, never>>(object: I): TotalSuperfluidDelegationsResponse;
};
export declare const SuperfluidDelegationAmountRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest;
    fromJSON(object: any): SuperfluidDelegationAmountRequest;
    toJSON(message: SuperfluidDelegationAmountRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
        validatorAddress?: string | undefined;
        denom?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
        validatorAddress?: string | undefined;
        denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidDelegationAmountRequest>, never>>(object: I): SuperfluidDelegationAmountRequest;
};
export declare const SuperfluidDelegationAmountResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationAmountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse;
    fromJSON(object: any): SuperfluidDelegationAmountResponse;
    toJSON(message: SuperfluidDelegationAmountResponse): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): SuperfluidDelegationAmountResponse;
};
export declare const SuperfluidDelegationsByDelegatorRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest;
    toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): SuperfluidDelegationsByDelegatorRequest;
};
export declare const SuperfluidDelegationsByDelegatorResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse;
    toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown;
    fromPartial<I extends {
        superfluidDelegationRecords?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        totalDelegatedCoins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        totalEquivalentStakedAmount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        superfluidDelegationRecords?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["delegationAmount"], keyof Coin>, never>) | undefined;
            equivalentStakedAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["superfluidDelegationRecords"][number], keyof SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I["superfluidDelegationRecords"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        totalDelegatedCoins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalDelegatedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalDelegatedCoins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        totalEquivalentStakedAmount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalEquivalentStakedAmount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidDelegationsByDelegatorResponse>, never>>(object: I): SuperfluidDelegationsByDelegatorResponse;
};
export declare const SuperfluidUndelegationsByDelegatorRequest: {
    typeUrl: string;
    encode(message: SuperfluidUndelegationsByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest;
    toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
        denom?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
        denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidUndelegationsByDelegatorRequest>, never>>(object: I): SuperfluidUndelegationsByDelegatorRequest;
};
export declare const SuperfluidUndelegationsByDelegatorResponse: {
    typeUrl: string;
    encode(message: SuperfluidUndelegationsByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse;
    toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown;
    fromPartial<I extends {
        superfluidDelegationRecords?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        totalUndelegatedCoins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        syntheticLocks?: {
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        superfluidDelegationRecords?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["delegationAmount"], keyof Coin>, never>) | undefined;
            equivalentStakedAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["superfluidDelegationRecords"][number], keyof SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I["superfluidDelegationRecords"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        totalUndelegatedCoins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalUndelegatedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalUndelegatedCoins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        syntheticLocks?: ({
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["syntheticLocks"][number]["endTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            duration?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["syntheticLocks"][number]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["syntheticLocks"][number], keyof SyntheticLock>, never>)[] & Record<Exclude<keyof I["syntheticLocks"], keyof {
            underlyingLockId?: bigint | undefined;
            synthDenom?: string | undefined;
            endTime?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidUndelegationsByDelegatorResponse>, never>>(object: I): SuperfluidUndelegationsByDelegatorResponse;
};
export declare const SuperfluidDelegationsByValidatorDenomRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest;
    toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown;
    fromPartial<I extends {
        validatorAddress?: string | undefined;
        denom?: string | undefined;
    } & {
        validatorAddress?: string | undefined;
        denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof SuperfluidDelegationsByValidatorDenomRequest>, never>>(object: I): SuperfluidDelegationsByValidatorDenomRequest;
};
export declare const SuperfluidDelegationsByValidatorDenomResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse;
    toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown;
    fromPartial<I extends {
        superfluidDelegationRecords?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        superfluidDelegationRecords?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["delegationAmount"], keyof Coin>, never>) | undefined;
            equivalentStakedAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["superfluidDelegationRecords"][number], keyof SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I["superfluidDelegationRecords"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "superfluidDelegationRecords">, never>>(object: I): SuperfluidDelegationsByValidatorDenomResponse;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
    typeUrl: string;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
    fromPartial<I extends {
        validatorAddress?: string | undefined;
        denom?: string | undefined;
    } & {
        validatorAddress?: string | undefined;
        denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, never>>(object: I): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
    typeUrl: string;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
    fromPartial<I extends {
        totalDelegatedCoins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        totalDelegatedCoins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalDelegatedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalDelegatedCoins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "totalDelegatedCoins">, never>>(object: I): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
};
export declare const QueryTotalDelegationByDelegatorRequest: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest;
    fromJSON(object: any): QueryTotalDelegationByDelegatorRequest;
    toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): QueryTotalDelegationByDelegatorRequest;
};
export declare const QueryTotalDelegationByDelegatorResponse: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse;
    fromJSON(object: any): QueryTotalDelegationByDelegatorResponse;
    toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown;
    fromPartial<I extends {
        superfluidDelegationRecords?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        delegationResponse?: {
            delegation?: {
                delegatorAddress?: string | undefined;
                validatorAddress?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        totalDelegatedCoins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        totalEquivalentStakedAmount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        superfluidDelegationRecords?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["delegationAmount"], keyof Coin>, never>) | undefined;
            equivalentStakedAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["superfluidDelegationRecords"][number]["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["superfluidDelegationRecords"][number], keyof SuperfluidDelegationRecord>, never>)[] & Record<Exclude<keyof I["superfluidDelegationRecords"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        delegationResponse?: ({
            delegation?: {
                delegatorAddress?: string | undefined;
                validatorAddress?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            delegation?: {
                delegatorAddress?: string | undefined;
                validatorAddress?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegation?: ({
                delegatorAddress?: string | undefined;
                validatorAddress?: string | undefined;
                shares?: string | undefined;
            } & {
                delegatorAddress?: string | undefined;
                validatorAddress?: string | undefined;
                shares?: string | undefined;
            } & Record<Exclude<keyof I["delegationResponse"][number]["delegation"], keyof import("../../cosmos/staking/v1beta1/staking").Delegation>, never>) | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["delegationResponse"][number]["balance"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["delegationResponse"][number], keyof DelegationResponse>, never>)[] & Record<Exclude<keyof I["delegationResponse"], keyof {
            delegation?: {
                delegatorAddress?: string | undefined;
                validatorAddress?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        totalDelegatedCoins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalDelegatedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["totalDelegatedCoins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        totalEquivalentStakedAmount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["totalEquivalentStakedAmount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryTotalDelegationByDelegatorResponse>, never>>(object: I): QueryTotalDelegationByDelegatorResponse;
};
export declare const QueryUnpoolWhitelistRequest: {
    typeUrl: string;
    encode(_: QueryUnpoolWhitelistRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest;
    fromJSON(_: any): QueryUnpoolWhitelistRequest;
    toJSON(_: QueryUnpoolWhitelistRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryUnpoolWhitelistRequest;
};
export declare const QueryUnpoolWhitelistResponse: {
    typeUrl: string;
    encode(message: QueryUnpoolWhitelistResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse;
    fromJSON(object: any): QueryUnpoolWhitelistResponse;
    toJSON(message: QueryUnpoolWhitelistResponse): unknown;
    fromPartial<I extends {
        poolIds?: bigint[] | undefined;
    } & {
        poolIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["poolIds"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "poolIds">, never>>(object: I): QueryUnpoolWhitelistResponse;
};
export declare const UserConcentratedSuperfluidPositionsDelegatedRequest: {
    typeUrl: string;
    encode(message: UserConcentratedSuperfluidPositionsDelegatedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserConcentratedSuperfluidPositionsDelegatedRequest;
    fromJSON(object: any): UserConcentratedSuperfluidPositionsDelegatedRequest;
    toJSON(message: UserConcentratedSuperfluidPositionsDelegatedRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): UserConcentratedSuperfluidPositionsDelegatedRequest;
};
export declare const UserConcentratedSuperfluidPositionsDelegatedResponse: {
    typeUrl: string;
    encode(message: UserConcentratedSuperfluidPositionsDelegatedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserConcentratedSuperfluidPositionsDelegatedResponse;
    fromJSON(object: any): UserConcentratedSuperfluidPositionsDelegatedResponse;
    toJSON(message: UserConcentratedSuperfluidPositionsDelegatedResponse): unknown;
    fromPartial<I extends {
        clPoolUserPositionRecords?: {
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        clPoolUserPositionRecords?: ({
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: ({
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["syntheticLock"]["endTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["syntheticLock"]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["syntheticLock"], keyof SyntheticLock>, never>) | undefined;
            delegationAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["delegationAmount"], keyof Coin>, never>) | undefined;
            equivalentStakedAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number], keyof ConcentratedPoolUserPositionRecord>, never>)[] & Record<Exclude<keyof I["clPoolUserPositionRecords"], keyof {
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "clPoolUserPositionRecords">, never>>(object: I): UserConcentratedSuperfluidPositionsDelegatedResponse;
};
export declare const UserConcentratedSuperfluidPositionsUndelegatingRequest: {
    typeUrl: string;
    encode(message: UserConcentratedSuperfluidPositionsUndelegatingRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserConcentratedSuperfluidPositionsUndelegatingRequest;
    fromJSON(object: any): UserConcentratedSuperfluidPositionsUndelegatingRequest;
    toJSON(message: UserConcentratedSuperfluidPositionsUndelegatingRequest): unknown;
    fromPartial<I extends {
        delegatorAddress?: string | undefined;
    } & {
        delegatorAddress?: string | undefined;
    } & Record<Exclude<keyof I, "delegatorAddress">, never>>(object: I): UserConcentratedSuperfluidPositionsUndelegatingRequest;
};
export declare const UserConcentratedSuperfluidPositionsUndelegatingResponse: {
    typeUrl: string;
    encode(message: UserConcentratedSuperfluidPositionsUndelegatingResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserConcentratedSuperfluidPositionsUndelegatingResponse;
    fromJSON(object: any): UserConcentratedSuperfluidPositionsUndelegatingResponse;
    toJSON(message: UserConcentratedSuperfluidPositionsUndelegatingResponse): unknown;
    fromPartial<I extends {
        clPoolUserPositionRecords?: {
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        clPoolUserPositionRecords?: ({
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: ({
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["syntheticLock"]["endTime"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                duration?: ({
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["syntheticLock"]["duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
            } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["syntheticLock"], keyof SyntheticLock>, never>) | undefined;
            delegationAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["delegationAmount"], keyof Coin>, never>) | undefined;
            equivalentStakedAmount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number]["equivalentStakedAmount"], keyof Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["clPoolUserPositionRecords"][number], keyof ConcentratedPoolUserPositionRecord>, never>)[] & Record<Exclude<keyof I["clPoolUserPositionRecords"], keyof {
            validatorAddress?: string | undefined;
            positionId?: bigint | undefined;
            lockId?: bigint | undefined;
            syntheticLock?: {
                underlyingLockId?: bigint | undefined;
                synthDenom?: string | undefined;
                endTime?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: bigint | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            delegationAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            equivalentStakedAmount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "clPoolUserPositionRecords">, never>>(object: I): UserConcentratedSuperfluidPositionsUndelegatingResponse;
};
export declare const QueryRestSupplyRequest: {
    typeUrl: string;
    encode(message: QueryRestSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRestSupplyRequest;
    fromJSON(object: any): QueryRestSupplyRequest;
    toJSON(message: QueryRestSupplyRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryRestSupplyRequest;
};
export declare const QueryRestSupplyResponse: {
    typeUrl: string;
    encode(message: QueryRestSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRestSupplyResponse;
    fromJSON(object: any): QueryRestSupplyResponse;
    toJSON(message: QueryRestSupplyResponse): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): QueryRestSupplyResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of superfluid parameters. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
    /** Returns all registered superfluid assets. */
    AllAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse>;
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */
    AssetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse>;
    /** Returns all superfluid intermediary accounts. */
    AllIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse>;
    /** Returns intermediary account connected to a superfluid staked lock by id */
    ConnectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse>;
    /** Returns the amount of delegations of specific denom for all validators */
    TotalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    TotalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse>;
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    SuperfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse>;
    /** Returns all the delegated superfluid positions for a specific delegator. */
    SuperfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse>;
    /** Returns all the undelegating superfluid positions for a specific delegator. */
    SuperfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse>;
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    SuperfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    EstimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
    /** Returns the specified delegations for a specific delegator */
    TotalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse>;
    /** Returns a list of whitelisted pool ids to unpool. */
    UnpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse>;
    /** Returns all of a user's full range CL positions that are superfluid staked. */
    UserConcentratedSuperfluidPositionsDelegated(request: UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<UserConcentratedSuperfluidPositionsDelegatedResponse>;
    UserConcentratedSuperfluidPositionsUndelegating(request: UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<UserConcentratedSuperfluidPositionsUndelegatingResponse>;
    RestSupply(request: QueryRestSupplyRequest): Promise<QueryRestSupplyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    AssetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
    AllAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse>;
    AssetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse>;
    AllIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse>;
    ConnectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse>;
    TotalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
    TotalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse>;
    SuperfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse>;
    SuperfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse>;
    SuperfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse>;
    SuperfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
    EstimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
    TotalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse>;
    UnpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse>;
    UserConcentratedSuperfluidPositionsDelegated(request: UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<UserConcentratedSuperfluidPositionsDelegatedResponse>;
    UserConcentratedSuperfluidPositionsUndelegating(request: UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<UserConcentratedSuperfluidPositionsUndelegatingResponse>;
    RestSupply(request: QueryRestSupplyRequest): Promise<QueryRestSupplyResponse>;
}
