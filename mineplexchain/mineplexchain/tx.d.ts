import { Rpc } from "../../helpers";
export declare const protobufPackage = "mineplex.mineplexchain.mineplexchain";
/** Msg defines the Msg service. */
export interface Msg {
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
}
