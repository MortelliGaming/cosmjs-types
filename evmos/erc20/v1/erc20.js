"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleTokenConversionProposal = exports.RegisterERC20Proposal = exports.ProposalMetadata = exports.RegisterCoinProposal = exports.TokenPair = exports.ownerToJSON = exports.ownerFromJSON = exports.Owner = exports.protobufPackage = void 0;
/* eslint-disable */
const bank_1 = require("../../../cosmos/bank/v1beta1/bank");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "evmos.erc20.v1";
/** Owner enumerates the ownership of a ERC20 contract. */
var Owner;
(function (Owner) {
    /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
    Owner[Owner["OWNER_UNSPECIFIED"] = 0] = "OWNER_UNSPECIFIED";
    /** OWNER_MODULE - OWNER_MODULE - erc20 is owned by the erc20 module account. */
    Owner[Owner["OWNER_MODULE"] = 1] = "OWNER_MODULE";
    /** OWNER_EXTERNAL - OWNER_EXTERNAL - erc20 is owned by an external account. */
    Owner[Owner["OWNER_EXTERNAL"] = 2] = "OWNER_EXTERNAL";
    Owner[Owner["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Owner || (exports.Owner = Owner = {}));
function ownerFromJSON(object) {
    switch (object) {
        case 0:
        case "OWNER_UNSPECIFIED":
            return Owner.OWNER_UNSPECIFIED;
        case 1:
        case "OWNER_MODULE":
            return Owner.OWNER_MODULE;
        case 2:
        case "OWNER_EXTERNAL":
            return Owner.OWNER_EXTERNAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Owner.UNRECOGNIZED;
    }
}
exports.ownerFromJSON = ownerFromJSON;
function ownerToJSON(object) {
    switch (object) {
        case Owner.OWNER_UNSPECIFIED:
            return "OWNER_UNSPECIFIED";
        case Owner.OWNER_MODULE:
            return "OWNER_MODULE";
        case Owner.OWNER_EXTERNAL:
            return "OWNER_EXTERNAL";
        case Owner.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.ownerToJSON = ownerToJSON;
function createBaseTokenPair() {
    return {
        erc20Address: "",
        denom: "",
        enabled: false,
        contractOwner: 0,
    };
}
exports.TokenPair = {
    typeUrl: "/evmos.erc20.v1.TokenPair",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.erc20Address !== "") {
            writer.uint32(10).string(message.erc20Address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        if (message.contractOwner !== 0) {
            writer.uint32(32).int32(message.contractOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20Address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                case 4:
                    message.contractOwner = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTokenPair();
        if ((0, helpers_1.isSet)(object.erc20Address))
            obj.erc20Address = String(object.erc20Address);
        if ((0, helpers_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_1.isSet)(object.enabled))
            obj.enabled = Boolean(object.enabled);
        if ((0, helpers_1.isSet)(object.contractOwner))
            obj.contractOwner = ownerFromJSON(object.contractOwner);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        message.denom !== undefined && (obj.denom = message.denom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.contractOwner !== undefined && (obj.contractOwner = ownerToJSON(message.contractOwner));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenPair();
        message.erc20Address = object.erc20Address ?? "";
        message.denom = object.denom ?? "";
        message.enabled = object.enabled ?? false;
        message.contractOwner = object.contractOwner ?? 0;
        return message;
    },
};
function createBaseRegisterCoinProposal() {
    return {
        title: "",
        description: "",
        metadata: [],
    };
}
exports.RegisterCoinProposal = {
    typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.metadata) {
            bank_1.Metadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterCoinProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.metadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRegisterCoinProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.metadata))
            obj.metadata = object.metadata.map((e) => bank_1.Metadata.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.metadata) {
            obj.metadata = message.metadata.map((e) => (e ? bank_1.Metadata.toJSON(e) : undefined));
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterCoinProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.metadata = object.metadata?.map((e) => bank_1.Metadata.fromPartial(e)) || [];
        return message;
    },
};
function createBaseProposalMetadata() {
    return {
        metadata: [],
    };
}
exports.ProposalMetadata = {
    typeUrl: "/evmos.erc20.v1.ProposalMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.metadata) {
            bank_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseProposalMetadata();
        if (Array.isArray(object?.metadata))
            obj.metadata = object.metadata.map((e) => bank_1.Metadata.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map((e) => (e ? bank_1.Metadata.toJSON(e) : undefined));
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposalMetadata();
        message.metadata = object.metadata?.map((e) => bank_1.Metadata.fromPartial(e)) || [];
        return message;
    },
};
function createBaseRegisterERC20Proposal() {
    return {
        title: "",
        description: "",
        erc20addresses: [],
    };
}
exports.RegisterERC20Proposal = {
    typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.erc20addresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterERC20Proposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.erc20addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRegisterERC20Proposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if (Array.isArray(object?.erc20addresses))
            obj.erc20addresses = object.erc20addresses.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.erc20addresses) {
            obj.erc20addresses = message.erc20addresses.map((e) => e);
        }
        else {
            obj.erc20addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterERC20Proposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.erc20addresses = object.erc20addresses?.map((e) => e) || [];
        return message;
    },
};
function createBaseToggleTokenConversionProposal() {
    return {
        title: "",
        description: "",
        token: "",
    };
}
exports.ToggleTokenConversionProposal = {
    typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseToggleTokenConversionProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseToggleTokenConversionProposal();
        if ((0, helpers_1.isSet)(object.title))
            obj.title = String(object.title);
        if ((0, helpers_1.isSet)(object.description))
            obj.description = String(object.description);
        if ((0, helpers_1.isSet)(object.token))
            obj.token = String(object.token);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseToggleTokenConversionProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.token = object.token ?? "";
        return message;
    },
};
//# sourceMappingURL=erc20.js.map