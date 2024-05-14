import { Any } from "../../../google/protobuf/any";
import { Params, AccessTuple, Log } from "./evm";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "ethermint.evm.v1";
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
    /** data is inner transaction data of the Ethereum transaction */
    data?: Any;
    /** size is the encoded storage size of the transaction (DEPRECATED) */
    size: number;
    /** hash of the transaction in hex format */
    hash: string;
    /**
     * from is the ethereum signer address in hex format. This address value is checked
     * against the address derived from the signature (V, R, S) using the
     * secp256k1 elliptic curve
     */
    from: string;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTx {
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: bigint;
    /** gas_price defines the value for each gas unit */
    gasPrice: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: bigint;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTx {
    /** chain_id of the destination EVM chain */
    chainId: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: bigint;
    /** gas_price defines the value for each gas unit */
    gasPrice: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: bigint;
    /** to is the recipient address in hex format */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** accesses is an array of access tuples */
    accesses: AccessTuple[];
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dynamic fee transactions. */
export interface DynamicFeeTx {
    /** chain_id of the destination EVM chain */
    chainId: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: bigint;
    /** gas_tip_cap defines the max value for the gas tip */
    gasTipCap: string;
    /** gas_fee_cap defines the max value for the gas fee */
    gasFeeCap: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: bigint;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** accesses is an array of access tuples */
    accesses: AccessTuple[];
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTx {
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
    /**
     * hash of the ethereum transaction in hex format. This hash differs from the
     * Tendermint sha256 hash of the transaction bytes. See
     * https://github.com/tendermint/tendermint/issues/6539 for reference
     */
    hash: string;
    /**
     * logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    logs: Log[];
    /**
     * ret is the returned data from evm function (result or data supplied with revert
     * opcode)
     */
    ret: Uint8Array;
    /** vm_error is the error returned by vm execution */
    vmError: string;
    /** gas_used specifies how much gas was consumed by the transaction */
    gasUsed: bigint;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgEthereumTx: {
    typeUrl: string;
    encode(message: MsgEthereumTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEthereumTx;
    fromJSON(object: any): MsgEthereumTx;
    toJSON(message: MsgEthereumTx): unknown;
    fromPartial<I extends {
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        size?: number | undefined;
        hash?: string | undefined;
        from?: string | undefined;
    } & {
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
        size?: number | undefined;
        hash?: string | undefined;
        from?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgEthereumTx>, never>>(object: I): MsgEthereumTx;
};
export declare const LegacyTx: {
    typeUrl: string;
    encode(message: LegacyTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LegacyTx;
    fromJSON(object: any): LegacyTx;
    toJSON(message: LegacyTx): unknown;
    fromPartial<I extends {
        nonce?: bigint | undefined;
        gasPrice?: string | undefined;
        gas?: bigint | undefined;
        to?: string | undefined;
        value?: string | undefined;
        data?: Uint8Array | undefined;
        v?: Uint8Array | undefined;
        r?: Uint8Array | undefined;
        s?: Uint8Array | undefined;
    } & {
        nonce?: bigint | undefined;
        gasPrice?: string | undefined;
        gas?: bigint | undefined;
        to?: string | undefined;
        value?: string | undefined;
        data?: Uint8Array | undefined;
        v?: Uint8Array | undefined;
        r?: Uint8Array | undefined;
        s?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof LegacyTx>, never>>(object: I): LegacyTx;
};
export declare const AccessListTx: {
    typeUrl: string;
    encode(message: AccessListTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccessListTx;
    fromJSON(object: any): AccessListTx;
    toJSON(message: AccessListTx): unknown;
    fromPartial<I extends {
        chainId?: string | undefined;
        nonce?: bigint | undefined;
        gasPrice?: string | undefined;
        gas?: bigint | undefined;
        to?: string | undefined;
        value?: string | undefined;
        data?: Uint8Array | undefined;
        accesses?: {
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        }[] | undefined;
        v?: Uint8Array | undefined;
        r?: Uint8Array | undefined;
        s?: Uint8Array | undefined;
    } & {
        chainId?: string | undefined;
        nonce?: bigint | undefined;
        gasPrice?: string | undefined;
        gas?: bigint | undefined;
        to?: string | undefined;
        value?: string | undefined;
        data?: Uint8Array | undefined;
        accesses?: ({
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        }[] & ({
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        } & {
            address?: string | undefined;
            storageKeys?: (string[] & string[] & Record<Exclude<keyof I["accesses"][number]["storageKeys"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["accesses"][number], keyof AccessTuple>, never>)[] & Record<Exclude<keyof I["accesses"], keyof {
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        }[]>, never>) | undefined;
        v?: Uint8Array | undefined;
        r?: Uint8Array | undefined;
        s?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof AccessListTx>, never>>(object: I): AccessListTx;
};
export declare const DynamicFeeTx: {
    typeUrl: string;
    encode(message: DynamicFeeTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DynamicFeeTx;
    fromJSON(object: any): DynamicFeeTx;
    toJSON(message: DynamicFeeTx): unknown;
    fromPartial<I extends {
        chainId?: string | undefined;
        nonce?: bigint | undefined;
        gasTipCap?: string | undefined;
        gasFeeCap?: string | undefined;
        gas?: bigint | undefined;
        to?: string | undefined;
        value?: string | undefined;
        data?: Uint8Array | undefined;
        accesses?: {
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        }[] | undefined;
        v?: Uint8Array | undefined;
        r?: Uint8Array | undefined;
        s?: Uint8Array | undefined;
    } & {
        chainId?: string | undefined;
        nonce?: bigint | undefined;
        gasTipCap?: string | undefined;
        gasFeeCap?: string | undefined;
        gas?: bigint | undefined;
        to?: string | undefined;
        value?: string | undefined;
        data?: Uint8Array | undefined;
        accesses?: ({
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        }[] & ({
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        } & {
            address?: string | undefined;
            storageKeys?: (string[] & string[] & Record<Exclude<keyof I["accesses"][number]["storageKeys"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["accesses"][number], keyof AccessTuple>, never>)[] & Record<Exclude<keyof I["accesses"], keyof {
            address?: string | undefined;
            storageKeys?: string[] | undefined;
        }[]>, never>) | undefined;
        v?: Uint8Array | undefined;
        r?: Uint8Array | undefined;
        s?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof DynamicFeeTx>, never>>(object: I): DynamicFeeTx;
};
export declare const ExtensionOptionsEthereumTx: {
    typeUrl: string;
    encode(_: ExtensionOptionsEthereumTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionsEthereumTx;
    fromJSON(_: any): ExtensionOptionsEthereumTx;
    toJSON(_: ExtensionOptionsEthereumTx): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ExtensionOptionsEthereumTx;
};
export declare const MsgEthereumTxResponse: {
    typeUrl: string;
    encode(message: MsgEthereumTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEthereumTxResponse;
    fromJSON(object: any): MsgEthereumTxResponse;
    toJSON(message: MsgEthereumTxResponse): unknown;
    fromPartial<I extends {
        hash?: string | undefined;
        logs?: {
            address?: string | undefined;
            topics?: string[] | undefined;
            data?: Uint8Array | undefined;
            blockNumber?: bigint | undefined;
            txHash?: string | undefined;
            txIndex?: bigint | undefined;
            blockHash?: string | undefined;
            index?: bigint | undefined;
            removed?: boolean | undefined;
        }[] | undefined;
        ret?: Uint8Array | undefined;
        vmError?: string | undefined;
        gasUsed?: bigint | undefined;
    } & {
        hash?: string | undefined;
        logs?: ({
            address?: string | undefined;
            topics?: string[] | undefined;
            data?: Uint8Array | undefined;
            blockNumber?: bigint | undefined;
            txHash?: string | undefined;
            txIndex?: bigint | undefined;
            blockHash?: string | undefined;
            index?: bigint | undefined;
            removed?: boolean | undefined;
        }[] & ({
            address?: string | undefined;
            topics?: string[] | undefined;
            data?: Uint8Array | undefined;
            blockNumber?: bigint | undefined;
            txHash?: string | undefined;
            txIndex?: bigint | undefined;
            blockHash?: string | undefined;
            index?: bigint | undefined;
            removed?: boolean | undefined;
        } & {
            address?: string | undefined;
            topics?: (string[] & string[] & Record<Exclude<keyof I["logs"][number]["topics"], keyof string[]>, never>) | undefined;
            data?: Uint8Array | undefined;
            blockNumber?: bigint | undefined;
            txHash?: string | undefined;
            txIndex?: bigint | undefined;
            blockHash?: string | undefined;
            index?: bigint | undefined;
            removed?: boolean | undefined;
        } & Record<Exclude<keyof I["logs"][number], keyof Log>, never>)[] & Record<Exclude<keyof I["logs"], keyof {
            address?: string | undefined;
            topics?: string[] | undefined;
            data?: Uint8Array | undefined;
            blockNumber?: bigint | undefined;
            txHash?: string | undefined;
            txIndex?: bigint | undefined;
            blockHash?: string | undefined;
            index?: bigint | undefined;
            removed?: boolean | undefined;
        }[]>, never>) | undefined;
        ret?: Uint8Array | undefined;
        vmError?: string | undefined;
        gasUsed?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof MsgEthereumTxResponse>, never>>(object: I): MsgEthereumTxResponse;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
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
        authority?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof MsgUpdateParams>, never>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateParamsResponse;
};
/** Msg defines the evm Msg service. */
export interface Msg {
    /** EthereumTx defines a method submitting Ethereum transactions. */
    EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
    /**
     * UpdateParams defined a governance operation for updating the x/evm module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
