import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "osmosis.store.v1beta1";
export interface Node {
    children: Child[];
}
export interface Child {
    index: Uint8Array;
    accumulation: string;
}
export interface Leaf {
    leaf?: Child;
}
export declare const Node: {
    typeUrl: string;
    encode(message: Node, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial<I extends {
        children?: {
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        }[] | undefined;
    } & {
        children?: ({
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        }[] & ({
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        } & {
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        } & Record<Exclude<keyof I["children"][number], keyof Child>, never>)[] & Record<Exclude<keyof I["children"], keyof {
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "children">, never>>(object: I): Node;
};
export declare const Child: {
    typeUrl: string;
    encode(message: Child, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Child;
    fromJSON(object: any): Child;
    toJSON(message: Child): unknown;
    fromPartial<I extends {
        index?: Uint8Array | undefined;
        accumulation?: string | undefined;
    } & {
        index?: Uint8Array | undefined;
        accumulation?: string | undefined;
    } & Record<Exclude<keyof I, keyof Child>, never>>(object: I): Child;
};
export declare const Leaf: {
    typeUrl: string;
    encode(message: Leaf, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Leaf;
    fromJSON(object: any): Leaf;
    toJSON(message: Leaf): unknown;
    fromPartial<I extends {
        leaf?: {
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        } | undefined;
    } & {
        leaf?: ({
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        } & {
            index?: Uint8Array | undefined;
            accumulation?: string | undefined;
        } & Record<Exclude<keyof I["leaf"], keyof Child>, never>) | undefined;
    } & Record<Exclude<keyof I, "leaf">, never>>(object: I): Leaf;
};
