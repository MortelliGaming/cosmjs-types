import { MsgEthereumTx, MsgEthereumTxResponse } from "./tx";
import { TraceConfig, Log, Params } from "./evm";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export declare const protobufPackage = "ethermint.evm.v1";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
    /** code_hash is the hex-formatted code bytes from the EOA. */
    codeHash: string;
    /** nonce is the account's sequence number. */
    nonce: bigint;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
    /** cosmos_address is the cosmos address of the account. */
    cosmosAddress: string;
    /** sequence is the account's sequence number. */
    sequence: bigint;
    /** account_number is the account number */
    accountNumber: bigint;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
    /** cons_address is the validator cons address to query the account for. */
    consAddress: string;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
    /** account_address is the cosmos address of the account in bech32 format. */
    accountAddress: string;
    /** sequence is the account's sequence number. */
    sequence: bigint;
    /** account_number is the account number */
    accountNumber: bigint;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the ethereum hex address to query the balance for. */
    address: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
    /** address is the ethereum hex address to query the storage state for. */
    address: string;
    /** key defines the key of the storage state */
    key: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
    /** value defines the storage state value hash associated with the given key. */
    value: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
    /** address is the ethereum hex address to query the code for. */
    address: string;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
    /** code represents the code bytes from an ethereum address. */
    code: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
    /** hash is the ethereum transaction hex hash to query the logs for. */
    hash: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
    /** logs represents the ethereum logs generated from the given transaction. */
    logs: Log[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params: Params;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
    /** args uses the same json format as the json rpc api. */
    args: Uint8Array;
    /** gas_cap defines the default gas cap to be used */
    gasCap: bigint;
    /** proposer_address of the requested block in hex format */
    proposerAddress: Uint8Array;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chainId: bigint;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
    /** gas returns the estimated gas */
    gas: bigint;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
    /** msg is the MsgEthereumTx for the requested transaction */
    msg?: MsgEthereumTx;
    /** trace_config holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /**
     * predecessors is an array of transactions included in the same block
     * need to be replayed first to get correct context for tracing.
     */
    predecessors: MsgEthereumTx[];
    /** block_number of requested transaction */
    blockNumber: bigint;
    /** block_hash of requested transaction */
    blockHash: string;
    /** block_time of requested transaction */
    blockTime: Timestamp;
    /** proposer_address is the proposer of the requested block */
    proposerAddress: Uint8Array;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chainId: bigint;
    /** block_max_gas of the block of the requested transaction */
    blockMaxGas: bigint;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
    /** data is the response serialized in bytes */
    data: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
    /** txs is an array of messages in the block */
    txs: MsgEthereumTx[];
    /** trace_config holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /** block_number of the traced block */
    blockNumber: bigint;
    /** block_hash (hex) of the traced block */
    blockHash: string;
    /** block_time of the traced block */
    blockTime: Timestamp;
    /** proposer_address is the address of the requested block */
    proposerAddress: Uint8Array;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chainId: bigint;
    /** block_max_gas of the traced block */
    blockMaxGas: bigint;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
    /** data is the response serialized in bytes */
    data: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    /** base_fee is the EIP1559 base fee */
    baseFee: string;
}
export declare const QueryAccountRequest: {
    typeUrl: string;
    encode(message: QueryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    typeUrl: string;
    encode(message: QueryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial<I extends {
        balance?: string | undefined;
        codeHash?: string | undefined;
        nonce?: bigint | undefined;
    } & {
        balance?: string | undefined;
        codeHash?: string | undefined;
        nonce?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountResponse>, never>>(object: I): QueryAccountResponse;
};
export declare const QueryCosmosAccountRequest: {
    typeUrl: string;
    encode(message: QueryCosmosAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCosmosAccountRequest;
    fromJSON(object: any): QueryCosmosAccountRequest;
    toJSON(message: QueryCosmosAccountRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryCosmosAccountRequest;
};
export declare const QueryCosmosAccountResponse: {
    typeUrl: string;
    encode(message: QueryCosmosAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCosmosAccountResponse;
    fromJSON(object: any): QueryCosmosAccountResponse;
    toJSON(message: QueryCosmosAccountResponse): unknown;
    fromPartial<I extends {
        cosmosAddress?: string | undefined;
        sequence?: bigint | undefined;
        accountNumber?: bigint | undefined;
    } & {
        cosmosAddress?: string | undefined;
        sequence?: bigint | undefined;
        accountNumber?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof QueryCosmosAccountResponse>, never>>(object: I): QueryCosmosAccountResponse;
};
export declare const QueryValidatorAccountRequest: {
    typeUrl: string;
    encode(message: QueryValidatorAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorAccountRequest;
    fromJSON(object: any): QueryValidatorAccountRequest;
    toJSON(message: QueryValidatorAccountRequest): unknown;
    fromPartial<I extends {
        consAddress?: string | undefined;
    } & {
        consAddress?: string | undefined;
    } & Record<Exclude<keyof I, "consAddress">, never>>(object: I): QueryValidatorAccountRequest;
};
export declare const QueryValidatorAccountResponse: {
    typeUrl: string;
    encode(message: QueryValidatorAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorAccountResponse;
    fromJSON(object: any): QueryValidatorAccountResponse;
    toJSON(message: QueryValidatorAccountResponse): unknown;
    fromPartial<I extends {
        accountAddress?: string | undefined;
        sequence?: bigint | undefined;
        accountNumber?: bigint | undefined;
    } & {
        accountAddress?: string | undefined;
        sequence?: bigint | undefined;
        accountNumber?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof QueryValidatorAccountResponse>, never>>(object: I): QueryValidatorAccountResponse;
};
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial<I extends {
        balance?: string | undefined;
    } & {
        balance?: string | undefined;
    } & Record<Exclude<keyof I, "balance">, never>>(object: I): QueryBalanceResponse;
};
export declare const QueryStorageRequest: {
    typeUrl: string;
    encode(message: QueryStorageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageRequest;
    fromJSON(object: any): QueryStorageRequest;
    toJSON(message: QueryStorageRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        key?: string | undefined;
    } & {
        address?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryStorageRequest>, never>>(object: I): QueryStorageRequest;
};
export declare const QueryStorageResponse: {
    typeUrl: string;
    encode(message: QueryStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageResponse;
    fromJSON(object: any): QueryStorageResponse;
    toJSON(message: QueryStorageResponse): unknown;
    fromPartial<I extends {
        value?: string | undefined;
    } & {
        value?: string | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): QueryStorageResponse;
};
export declare const QueryCodeRequest: {
    typeUrl: string;
    encode(message: QueryCodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest;
    fromJSON(object: any): QueryCodeRequest;
    toJSON(message: QueryCodeRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryCodeRequest;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    encode(message: QueryCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial<I extends {
        code?: Uint8Array | undefined;
    } & {
        code?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "code">, never>>(object: I): QueryCodeResponse;
};
export declare const QueryTxLogsRequest: {
    typeUrl: string;
    encode(message: QueryTxLogsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTxLogsRequest;
    fromJSON(object: any): QueryTxLogsRequest;
    toJSON(message: QueryTxLogsRequest): unknown;
    fromPartial<I extends {
        hash?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: bigint | undefined;
            limit?: bigint | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        hash?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryTxLogsRequest>, never>>(object: I): QueryTxLogsRequest;
};
export declare const QueryTxLogsResponse: {
    typeUrl: string;
    encode(message: QueryTxLogsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTxLogsResponse;
    fromJSON(object: any): QueryTxLogsResponse;
    toJSON(message: QueryTxLogsResponse): unknown;
    fromPartial<I extends {
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } | undefined;
    } & {
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: bigint | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryTxLogsResponse>, never>>(object: I): QueryTxLogsResponse;
};
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
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const EthCallRequest: {
    typeUrl: string;
    encode(message: EthCallRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EthCallRequest;
    fromJSON(object: any): EthCallRequest;
    toJSON(message: EthCallRequest): unknown;
    fromPartial<I extends {
        args?: Uint8Array | undefined;
        gasCap?: bigint | undefined;
        proposerAddress?: Uint8Array | undefined;
        chainId?: bigint | undefined;
    } & {
        args?: Uint8Array | undefined;
        gasCap?: bigint | undefined;
        proposerAddress?: Uint8Array | undefined;
        chainId?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof EthCallRequest>, never>>(object: I): EthCallRequest;
};
export declare const EstimateGasResponse: {
    typeUrl: string;
    encode(message: EstimateGasResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateGasResponse;
    fromJSON(object: any): EstimateGasResponse;
    toJSON(message: EstimateGasResponse): unknown;
    fromPartial<I extends {
        gas?: bigint | undefined;
    } & {
        gas?: bigint | undefined;
    } & Record<Exclude<keyof I, "gas">, never>>(object: I): EstimateGasResponse;
};
export declare const QueryTraceTxRequest: {
    typeUrl: string;
    encode(message: QueryTraceTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceTxRequest;
    fromJSON(object: any): QueryTraceTxRequest;
    toJSON(message: QueryTraceTxRequest): unknown;
    fromPartial<I extends {
        msg?: {
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        } | undefined;
        traceConfig?: {
            tracer?: string | undefined;
            timeout?: string | undefined;
            reexec?: bigint | undefined;
            disableStack?: boolean | undefined;
            disableStorage?: boolean | undefined;
            debug?: boolean | undefined;
            limit?: number | undefined;
            overrides?: {
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
            enableMemory?: boolean | undefined;
            enableReturnData?: boolean | undefined;
            tracerJsonConfig?: string | undefined;
        } | undefined;
        predecessors?: {
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        }[] | undefined;
        blockNumber?: bigint | undefined;
        blockHash?: string | undefined;
        blockTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        proposerAddress?: Uint8Array | undefined;
        chainId?: bigint | undefined;
        blockMaxGas?: bigint | undefined;
    } & {
        msg?: ({
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
            } & Record<Exclude<keyof I["msg"]["data"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        } & Record<Exclude<keyof I["msg"], keyof MsgEthereumTx>, never>) | undefined;
        traceConfig?: ({
            tracer?: string | undefined;
            timeout?: string | undefined;
            reexec?: bigint | undefined;
            disableStack?: boolean | undefined;
            disableStorage?: boolean | undefined;
            debug?: boolean | undefined;
            limit?: number | undefined;
            overrides?: {
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
            enableMemory?: boolean | undefined;
            enableReturnData?: boolean | undefined;
            tracerJsonConfig?: string | undefined;
        } & {
            tracer?: string | undefined;
            timeout?: string | undefined;
            reexec?: bigint | undefined;
            disableStack?: boolean | undefined;
            disableStorage?: boolean | undefined;
            debug?: boolean | undefined;
            limit?: number | undefined;
            overrides?: ({
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
            } & Record<Exclude<keyof I["traceConfig"]["overrides"], keyof import("./evm").ChainConfig>, never>) | undefined;
            enableMemory?: boolean | undefined;
            enableReturnData?: boolean | undefined;
            tracerJsonConfig?: string | undefined;
        } & Record<Exclude<keyof I["traceConfig"], keyof TraceConfig>, never>) | undefined;
        predecessors?: ({
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        }[] & ({
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
            } & Record<Exclude<keyof I["predecessors"][number]["data"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        } & Record<Exclude<keyof I["predecessors"][number], keyof MsgEthereumTx>, never>)[] & Record<Exclude<keyof I["predecessors"], keyof {
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        }[]>, never>) | undefined;
        blockNumber?: bigint | undefined;
        blockHash?: string | undefined;
        blockTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["blockTime"], keyof Timestamp>, never>) | undefined;
        proposerAddress?: Uint8Array | undefined;
        chainId?: bigint | undefined;
        blockMaxGas?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof QueryTraceTxRequest>, never>>(object: I): QueryTraceTxRequest;
};
export declare const QueryTraceTxResponse: {
    typeUrl: string;
    encode(message: QueryTraceTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceTxResponse;
    fromJSON(object: any): QueryTraceTxResponse;
    toJSON(message: QueryTraceTxResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): QueryTraceTxResponse;
};
export declare const QueryTraceBlockRequest: {
    typeUrl: string;
    encode(message: QueryTraceBlockRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceBlockRequest;
    fromJSON(object: any): QueryTraceBlockRequest;
    toJSON(message: QueryTraceBlockRequest): unknown;
    fromPartial<I extends {
        txs?: {
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        }[] | undefined;
        traceConfig?: {
            tracer?: string | undefined;
            timeout?: string | undefined;
            reexec?: bigint | undefined;
            disableStack?: boolean | undefined;
            disableStorage?: boolean | undefined;
            debug?: boolean | undefined;
            limit?: number | undefined;
            overrides?: {
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
            enableMemory?: boolean | undefined;
            enableReturnData?: boolean | undefined;
            tracerJsonConfig?: string | undefined;
        } | undefined;
        blockNumber?: bigint | undefined;
        blockHash?: string | undefined;
        blockTime?: {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } | undefined;
        proposerAddress?: Uint8Array | undefined;
        chainId?: bigint | undefined;
        blockMaxGas?: bigint | undefined;
    } & {
        txs?: ({
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        }[] & ({
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
            } & Record<Exclude<keyof I["txs"][number]["data"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        } & Record<Exclude<keyof I["txs"][number], keyof MsgEthereumTx>, never>)[] & Record<Exclude<keyof I["txs"], keyof {
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        }[]>, never>) | undefined;
        traceConfig?: ({
            tracer?: string | undefined;
            timeout?: string | undefined;
            reexec?: bigint | undefined;
            disableStack?: boolean | undefined;
            disableStorage?: boolean | undefined;
            debug?: boolean | undefined;
            limit?: number | undefined;
            overrides?: {
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
            enableMemory?: boolean | undefined;
            enableReturnData?: boolean | undefined;
            tracerJsonConfig?: string | undefined;
        } & {
            tracer?: string | undefined;
            timeout?: string | undefined;
            reexec?: bigint | undefined;
            disableStack?: boolean | undefined;
            disableStorage?: boolean | undefined;
            debug?: boolean | undefined;
            limit?: number | undefined;
            overrides?: ({
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
            } & Record<Exclude<keyof I["traceConfig"]["overrides"], keyof import("./evm").ChainConfig>, never>) | undefined;
            enableMemory?: boolean | undefined;
            enableReturnData?: boolean | undefined;
            tracerJsonConfig?: string | undefined;
        } & Record<Exclude<keyof I["traceConfig"], keyof TraceConfig>, never>) | undefined;
        blockNumber?: bigint | undefined;
        blockHash?: string | undefined;
        blockTime?: ({
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: bigint | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["blockTime"], keyof Timestamp>, never>) | undefined;
        proposerAddress?: Uint8Array | undefined;
        chainId?: bigint | undefined;
        blockMaxGas?: bigint | undefined;
    } & Record<Exclude<keyof I, keyof QueryTraceBlockRequest>, never>>(object: I): QueryTraceBlockRequest;
};
export declare const QueryTraceBlockResponse: {
    typeUrl: string;
    encode(message: QueryTraceBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceBlockResponse;
    fromJSON(object: any): QueryTraceBlockResponse;
    toJSON(message: QueryTraceBlockResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): QueryTraceBlockResponse;
};
export declare const QueryBaseFeeRequest: {
    typeUrl: string;
    encode(_: QueryBaseFeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeRequest;
    fromJSON(_: any): QueryBaseFeeRequest;
    toJSON(_: QueryBaseFeeRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryBaseFeeRequest;
};
export declare const QueryBaseFeeResponse: {
    typeUrl: string;
    encode(message: QueryBaseFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeResponse;
    fromJSON(object: any): QueryBaseFeeResponse;
    toJSON(message: QueryBaseFeeResponse): unknown;
    fromPartial<I extends {
        baseFee?: string | undefined;
    } & {
        baseFee?: string | undefined;
    } & Record<Exclude<keyof I, "baseFee">, never>>(object: I): QueryBaseFeeResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Account queries an Ethereum account. */
    Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** CosmosAccount queries an Ethereum account's Cosmos Address. */
    CosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse>;
    /**
     * ValidatorAccount queries an Ethereum account's from a validator consensus
     * Address.
     */
    ValidatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse>;
    /**
     * Balance queries the balance of a the EVM denomination for a single
     * EthAccount.
     */
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Storage queries the balance of all coins for a single account. */
    Storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    /** Code queries the balance of all coins for a single account. */
    Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    /** Params queries the parameters of x/evm module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** EthCall implements the `eth_call` rpc api */
    EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
    /** EstimateGas implements the `eth_estimateGas` rpc api */
    EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
    /** TraceTx implements the `debug_traceTransaction` rpc api */
    TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
    /** TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
    TraceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
    /**
     * BaseFee queries the base fee of the parent block of the current block,
     * it's similar to feemarket module's method, but also checks london hardfork status.
     */
    BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    CosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse>;
    ValidatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse>;
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    Storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
    EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
    TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
    TraceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
    BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
}
