/* eslint-disable */
import { Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
export interface Msg {}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}
