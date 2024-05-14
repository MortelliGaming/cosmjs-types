import { Params, State } from "./evm";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "ethermint.evm.v1";
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
    /** accounts is an array containing the ethereum genesis accounts. */
    accounts: GenesisAccount[];
    /** params defines all the parameters of the module. */
    params: Params;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccount {
    /** address defines an ethereum hex formated address of an account */
    address: string;
    /** code defines the hex bytes of the account code. */
    code: string;
    /** storage defines the set of state key values for the account. */
    storage: State[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        accounts?: {
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        params?: {
            evmDenom?: string | undefined;
            enableCreate?: boolean | undefined;
            enableCall?: boolean | undefined;
            extraEips?: bigint[] | undefined;
            chainConfig?: {
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                grayGlacierBlock?: string | undefined;
                mergeNetsplitBlock?: string | undefined;
                shanghaiBlock?: string | undefined;
                cancunBlock?: string | undefined;
            } | undefined;
            allowUnprotectedTxs?: boolean | undefined;
            activePrecompiles?: string[] | undefined;
            evmChannels?: string[] | undefined;
        } | undefined;
    } & {
        accounts?: ({
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            code?: string | undefined;
            storage?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["accounts"][number]["storage"][number], keyof State>, never>)[] & Record<Exclude<keyof I["accounts"][number]["storage"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["accounts"][number], keyof GenesisAccount>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        params?: ({
            evmDenom?: string | undefined;
            enableCreate?: boolean | undefined;
            enableCall?: boolean | undefined;
            extraEips?: bigint[] | undefined;
            chainConfig?: {
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                grayGlacierBlock?: string | undefined;
                mergeNetsplitBlock?: string | undefined;
                shanghaiBlock?: string | undefined;
                cancunBlock?: string | undefined;
            } | undefined;
            allowUnprotectedTxs?: boolean | undefined;
            activePrecompiles?: string[] | undefined;
            evmChannels?: string[] | undefined;
        } & {
            evmDenom?: string | undefined;
            enableCreate?: boolean | undefined;
            enableCall?: boolean | undefined;
            extraEips?: (bigint[] & bigint[] & Record<Exclude<keyof I["params"]["extraEips"], keyof bigint[]>, never>) | undefined;
            chainConfig?: ({
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                grayGlacierBlock?: string | undefined;
                mergeNetsplitBlock?: string | undefined;
                shanghaiBlock?: string | undefined;
                cancunBlock?: string | undefined;
            } & {
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                grayGlacierBlock?: string | undefined;
                mergeNetsplitBlock?: string | undefined;
                shanghaiBlock?: string | undefined;
                cancunBlock?: string | undefined;
            } & Record<Exclude<keyof I["params"]["chainConfig"], keyof import("./evm").ChainConfig>, never>) | undefined;
            allowUnprotectedTxs?: boolean | undefined;
            activePrecompiles?: (string[] & string[] & Record<Exclude<keyof I["params"]["activePrecompiles"], keyof string[]>, never>) | undefined;
            evmChannels?: (string[] & string[] & Record<Exclude<keyof I["params"]["evmChannels"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisAccount: {
    typeUrl: string;
    encode(message: GenesisAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisAccount;
    fromJSON(object: any): GenesisAccount;
    toJSON(message: GenesisAccount): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        code?: string | undefined;
        storage?: {
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        code?: string | undefined;
        storage?: ({
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["storage"][number], keyof State>, never>)[] & Record<Exclude<keyof I["storage"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisAccount>, never>>(object: I): GenesisAccount;
};
