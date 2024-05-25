import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "evmos.erc20.v1";
/** Owner enumerates the ownership of a ERC20 contract. */
export declare enum Owner {
    /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
    OWNER_UNSPECIFIED = 0,
    /** OWNER_MODULE - OWNER_MODULE - erc20 is owned by the erc20 module account. */
    OWNER_MODULE = 1,
    /** OWNER_EXTERNAL - OWNER_EXTERNAL - erc20 is owned by an external account. */
    OWNER_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function ownerFromJSON(object: any): Owner;
export declare function ownerToJSON(object: Owner): string;
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 * Cosmos Coin and an ERC20 token address.
 */
export interface TokenPair {
    /** erc20_address is the hex address of ERC20 contract token */
    erc20Address: string;
    /** denom defines the cosmos base denomination to be mapped to */
    denom: string;
    /** enabled defines the token mapping enable status */
    enabled: boolean;
    /** contract_owner is the an ENUM specifying the type of ERC20 owner (0 invalid, 1 ModuleAccount, 2 external address) */
    contractOwner: Owner;
}
/**
 * Deprecated: RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin. We're keeping it to remove the existing proposals from
 * store. After that, remove this message.
 */
export interface RegisterCoinProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** metadata slice of the native Cosmos coins */
    metadata: Metadata[];
}
/**
 * Deprecated: ProposalMetadata is used to parse a slice of denom metadata and generate
 * the RegisterCoinProposal content. We're keeping it to remove the existing proposals from
 * store. After that, remove this message.
 */
export interface ProposalMetadata {
    /** metadata slice of the native Cosmos coins */
    metadata: Metadata[];
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20Proposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** erc20addresses is a slice of  ERC20 token contract addresses */
    erc20addresses: string[];
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
}
export declare const TokenPair: {
    typeUrl: string;
    encode(message: TokenPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenPair;
    fromJSON(object: any): TokenPair;
    toJSON(message: TokenPair): unknown;
    fromPartial<I extends {
        erc20Address?: string | undefined;
        denom?: string | undefined;
        enabled?: boolean | undefined;
        contractOwner?: Owner | undefined;
    } & {
        erc20Address?: string | undefined;
        denom?: string | undefined;
        enabled?: boolean | undefined;
        contractOwner?: Owner | undefined;
    } & Record<Exclude<keyof I, keyof TokenPair>, never>>(object: I): TokenPair;
};
export declare const RegisterCoinProposal: {
    typeUrl: string;
    encode(message: RegisterCoinProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RegisterCoinProposal;
    fromJSON(object: any): RegisterCoinProposal;
    toJSON(message: RegisterCoinProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        metadata?: {
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        metadata?: ({
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        }[] & ({
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        } & {
            description?: string | undefined;
            denomUnits?: ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] & ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            } & {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: (string[] & string[] & Record<Exclude<keyof I["metadata"][number]["denomUnits"][number]["aliases"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["metadata"][number]["denomUnits"][number], keyof import("../../../cosmos/bank/v1beta1/bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["metadata"][number]["denomUnits"], keyof {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[]>, never>) | undefined;
            base?: string | undefined;
            display?: string | undefined;
        } & Record<Exclude<keyof I["metadata"][number], keyof Metadata>, never>)[] & Record<Exclude<keyof I["metadata"], keyof {
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RegisterCoinProposal>, never>>(object: I): RegisterCoinProposal;
};
export declare const ProposalMetadata: {
    typeUrl: string;
    encode(message: ProposalMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProposalMetadata;
    fromJSON(object: any): ProposalMetadata;
    toJSON(message: ProposalMetadata): unknown;
    fromPartial<I extends {
        metadata?: {
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        }[] | undefined;
    } & {
        metadata?: ({
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        }[] & ({
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        } & {
            description?: string | undefined;
            denomUnits?: ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] & ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            } & {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: (string[] & string[] & Record<Exclude<keyof I["metadata"][number]["denomUnits"][number]["aliases"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["metadata"][number]["denomUnits"][number], keyof import("../../../cosmos/bank/v1beta1/bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["metadata"][number]["denomUnits"], keyof {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[]>, never>) | undefined;
            base?: string | undefined;
            display?: string | undefined;
        } & Record<Exclude<keyof I["metadata"][number], keyof Metadata>, never>)[] & Record<Exclude<keyof I["metadata"], keyof {
            description?: string | undefined;
            denomUnits?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "metadata">, never>>(object: I): ProposalMetadata;
};
export declare const RegisterERC20Proposal: {
    typeUrl: string;
    encode(message: RegisterERC20Proposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RegisterERC20Proposal;
    fromJSON(object: any): RegisterERC20Proposal;
    toJSON(message: RegisterERC20Proposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        erc20addresses?: string[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        erc20addresses?: (string[] & string[] & Record<Exclude<keyof I["erc20addresses"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RegisterERC20Proposal>, never>>(object: I): RegisterERC20Proposal;
};
export declare const ToggleTokenConversionProposal: {
    typeUrl: string;
    encode(message: ToggleTokenConversionProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ToggleTokenConversionProposal;
    fromJSON(object: any): ToggleTokenConversionProposal;
    toJSON(message: ToggleTokenConversionProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        token?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        token?: string | undefined;
    } & Record<Exclude<keyof I, keyof ToggleTokenConversionProposal>, never>>(object: I): ToggleTokenConversionProposal;
};
