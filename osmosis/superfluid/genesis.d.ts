import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "./superfluid";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "osmosis.superfluid";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    params: Params;
    /**
     * superfluid_assets defines the registered superfluid assets that have been
     * registered via governance.
     */
    superfluidAssets: SuperfluidAsset[];
    /**
     * osmo_equivalent_multipliers is the records of osmo equivalent amount of
     * each superfluid registered pool, updated every epoch.
     */
    osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
    /**
     * intermediary_accounts is a secondary account for superfluid staking that
     * plays an intermediary role between validators and the delegators.
     */
    intermediaryAccounts: SuperfluidIntermediaryAccount[];
    intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            minimumRiskFactor?: string | undefined;
        } | undefined;
        superfluidAssets?: {
            denom?: string | undefined;
            assetType?: import("./superfluid").SuperfluidAssetType | undefined;
        }[] | undefined;
        osmoEquivalentMultipliers?: {
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        }[] | undefined;
        intermediaryAccounts?: {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
        }[] | undefined;
        intemediaryAccountConnections?: {
            lockId?: bigint | undefined;
            intermediaryAccount?: string | undefined;
        }[] | undefined;
    } & {
        params?: ({
            minimumRiskFactor?: string | undefined;
        } & {
            minimumRiskFactor?: string | undefined;
        } & Record<Exclude<keyof I["params"], "minimumRiskFactor">, never>) | undefined;
        superfluidAssets?: ({
            denom?: string | undefined;
            assetType?: import("./superfluid").SuperfluidAssetType | undefined;
        }[] & ({
            denom?: string | undefined;
            assetType?: import("./superfluid").SuperfluidAssetType | undefined;
        } & {
            denom?: string | undefined;
            assetType?: import("./superfluid").SuperfluidAssetType | undefined;
        } & Record<Exclude<keyof I["superfluidAssets"][number], keyof SuperfluidAsset>, never>)[] & Record<Exclude<keyof I["superfluidAssets"], keyof {
            denom?: string | undefined;
            assetType?: import("./superfluid").SuperfluidAssetType | undefined;
        }[]>, never>) | undefined;
        osmoEquivalentMultipliers?: ({
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        }[] & ({
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        } & {
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        } & Record<Exclude<keyof I["osmoEquivalentMultipliers"][number], keyof OsmoEquivalentMultiplierRecord>, never>)[] & Record<Exclude<keyof I["osmoEquivalentMultipliers"], keyof {
            epochNumber?: bigint | undefined;
            denom?: string | undefined;
            multiplier?: string | undefined;
        }[]>, never>) | undefined;
        intermediaryAccounts?: ({
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
        }[] & ({
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
        } & {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
        } & Record<Exclude<keyof I["intermediaryAccounts"][number], keyof SuperfluidIntermediaryAccount>, never>)[] & Record<Exclude<keyof I["intermediaryAccounts"], keyof {
            denom?: string | undefined;
            valAddr?: string | undefined;
            gaugeId?: bigint | undefined;
        }[]>, never>) | undefined;
        intemediaryAccountConnections?: ({
            lockId?: bigint | undefined;
            intermediaryAccount?: string | undefined;
        }[] & ({
            lockId?: bigint | undefined;
            intermediaryAccount?: string | undefined;
        } & {
            lockId?: bigint | undefined;
            intermediaryAccount?: string | undefined;
        } & Record<Exclude<keyof I["intemediaryAccountConnections"][number], keyof LockIdIntermediaryAccountConnection>, never>)[] & Record<Exclude<keyof I["intemediaryAccountConnections"], keyof {
            lockId?: bigint | undefined;
            intermediaryAccount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
