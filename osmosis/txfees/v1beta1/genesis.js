"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const feetoken_1 = require("./feetoken");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "osmosis.txfees.v1beta1";
function createBaseGenesisState() {
    return {
        basedenom: "",
        feetokens: [],
        params: params_1.Params.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basedenom !== "") {
            writer.uint32(10).string(message.basedenom);
        }
        for (const v of message.feetokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basedenom = reader.string();
                    break;
                case 2:
                    message.feetokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if ((0, helpers_1.isSet)(object.basedenom))
            obj.basedenom = String(object.basedenom);
        if (Array.isArray(object?.feetokens))
            obj.feetokens = object.feetokens.map((e) => feetoken_1.FeeToken.fromJSON(e));
        if ((0, helpers_1.isSet)(object.params))
            obj.params = params_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.basedenom !== undefined && (obj.basedenom = message.basedenom);
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map((e) => (e ? feetoken_1.FeeToken.toJSON(e) : undefined));
        }
        else {
            obj.feetokens = [];
        }
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.basedenom = object.basedenom ?? "";
        message.feetokens = object.feetokens?.map((e) => feetoken_1.FeeToken.fromPartial(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map