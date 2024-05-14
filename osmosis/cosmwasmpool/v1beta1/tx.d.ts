import { Rpc } from "../../../helpers";
export declare const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
export interface Msg {
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
}
