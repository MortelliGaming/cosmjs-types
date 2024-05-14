"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxResult = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "ethermint.types.v1";
function createBaseTxResult() {
    return {
        height: BigInt(0),
        txIndex: 0,
        msgIndex: 0,
        ethTxIndex: 0,
        failed: false,
        gasUsed: BigInt(0),
        cumulativeGasUsed: BigInt(0),
    };
}
exports.TxResult = {
    typeUrl: "/ethermint.types.v1.TxResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txIndex !== 0) {
            writer.uint32(16).uint32(message.txIndex);
        }
        if (message.msgIndex !== 0) {
            writer.uint32(24).uint32(message.msgIndex);
        }
        if (message.ethTxIndex !== 0) {
            writer.uint32(32).int32(message.ethTxIndex);
        }
        if (message.failed === true) {
            writer.uint32(40).bool(message.failed);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).uint64(message.gasUsed);
        }
        if (message.cumulativeGasUsed !== BigInt(0)) {
            writer.uint32(56).uint64(message.cumulativeGasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txIndex = reader.uint32();
                    break;
                case 3:
                    message.msgIndex = reader.uint32();
                    break;
                case 4:
                    message.ethTxIndex = reader.int32();
                    break;
                case 5:
                    message.failed = reader.bool();
                    break;
                case 6:
                    message.gasUsed = reader.uint64();
                    break;
                case 7:
                    message.cumulativeGasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTxResult();
        if ((0, helpers_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        if ((0, helpers_1.isSet)(object.txIndex))
            obj.txIndex = Number(object.txIndex);
        if ((0, helpers_1.isSet)(object.msgIndex))
            obj.msgIndex = Number(object.msgIndex);
        if ((0, helpers_1.isSet)(object.ethTxIndex))
            obj.ethTxIndex = Number(object.ethTxIndex);
        if ((0, helpers_1.isSet)(object.failed))
            obj.failed = Boolean(object.failed);
        if ((0, helpers_1.isSet)(object.gasUsed))
            obj.gasUsed = BigInt(object.gasUsed.toString());
        if ((0, helpers_1.isSet)(object.cumulativeGasUsed))
            obj.cumulativeGasUsed = BigInt(object.cumulativeGasUsed.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.txIndex !== undefined && (obj.txIndex = Math.round(message.txIndex));
        message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
        message.ethTxIndex !== undefined && (obj.ethTxIndex = Math.round(message.ethTxIndex));
        message.failed !== undefined && (obj.failed = message.failed);
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
        message.cumulativeGasUsed !== undefined &&
            (obj.cumulativeGasUsed = (message.cumulativeGasUsed || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        message.txIndex = object.txIndex ?? 0;
        message.msgIndex = object.msgIndex ?? 0;
        message.ethTxIndex = object.ethTxIndex ?? 0;
        message.failed = object.failed ?? false;
        if (object.gasUsed !== undefined && object.gasUsed !== null) {
            message.gasUsed = BigInt(object.gasUsed.toString());
        }
        if (object.cumulativeGasUsed !== undefined && object.cumulativeGasUsed !== null) {
            message.cumulativeGasUsed = BigInt(object.cumulativeGasUsed.toString());
        }
        return message;
    },
};
//# sourceMappingURL=indexer.js.map