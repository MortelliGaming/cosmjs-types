import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.smartaccount.v1beta1";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * MaximumUnauthenticatedGas defines the maximum amount of gas that can be
     * used to authenticate a transaction in ante handler without having fee payer
     * authenticated.
     */
    maximumUnauthenticatedGas: bigint;
    /**
     * IsSmartAccountActive defines the state of the authenticator.
     * If set to false, the authenticator module will not be used
     * and the classic cosmos sdk authentication will be used instead.
     */
    isSmartAccountActive: boolean;
    /**
     * CircuitBreakerControllers defines list of addresses that are allowed to
     * set is_smart_account_active without going through governance.
     */
    circuitBreakerControllers: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        maximumUnauthenticatedGas?: bigint | undefined;
        isSmartAccountActive?: boolean | undefined;
        circuitBreakerControllers?: string[] | undefined;
    } & {
        maximumUnauthenticatedGas?: bigint | undefined;
        isSmartAccountActive?: boolean | undefined;
        circuitBreakerControllers?: (string[] & string[] & Record<Exclude<keyof I["circuitBreakerControllers"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
