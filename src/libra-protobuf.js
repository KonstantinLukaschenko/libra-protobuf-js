/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.admission_control = (function() {

    /**
     * Namespace admission_control.
     * @exports admission_control
     * @namespace
     */
    var admission_control = {};

    admission_control.SubmitTransactionRequest = (function() {

        /**
         * Properties of a SubmitTransactionRequest.
         * @memberof admission_control
         * @interface ISubmitTransactionRequest
         * @property {types.ISignedTransaction|null} [signedTxn] SubmitTransactionRequest signedTxn
         */

        /**
         * Constructs a new SubmitTransactionRequest.
         * @memberof admission_control
         * @classdesc Represents a SubmitTransactionRequest.
         * @implements ISubmitTransactionRequest
         * @constructor
         * @param {admission_control.ISubmitTransactionRequest=} [properties] Properties to set
         */
        function SubmitTransactionRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmitTransactionRequest signedTxn.
         * @member {types.ISignedTransaction|null|undefined} signedTxn
         * @memberof admission_control.SubmitTransactionRequest
         * @instance
         */
        SubmitTransactionRequest.prototype.signedTxn = null;

        /**
         * Creates a new SubmitTransactionRequest instance using the specified properties.
         * @function create
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {admission_control.ISubmitTransactionRequest=} [properties] Properties to set
         * @returns {admission_control.SubmitTransactionRequest} SubmitTransactionRequest instance
         */
        SubmitTransactionRequest.create = function create(properties) {
            return new SubmitTransactionRequest(properties);
        };

        /**
         * Encodes the specified SubmitTransactionRequest message. Does not implicitly {@link admission_control.SubmitTransactionRequest.verify|verify} messages.
         * @function encode
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {admission_control.ISubmitTransactionRequest} message SubmitTransactionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmitTransactionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signedTxn != null && message.hasOwnProperty("signedTxn"))
                $root.types.SignedTransaction.encode(message.signedTxn, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SubmitTransactionRequest message, length delimited. Does not implicitly {@link admission_control.SubmitTransactionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {admission_control.ISubmitTransactionRequest} message SubmitTransactionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmitTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubmitTransactionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {admission_control.SubmitTransactionRequest} SubmitTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmitTransactionRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.admission_control.SubmitTransactionRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signedTxn = $root.types.SignedTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubmitTransactionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {admission_control.SubmitTransactionRequest} SubmitTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmitTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmitTransactionRequest message.
         * @function verify
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmitTransactionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signedTxn != null && message.hasOwnProperty("signedTxn")) {
                var error = $root.types.SignedTransaction.verify(message.signedTxn);
                if (error)
                    return "signedTxn." + error;
            }
            return null;
        };

        /**
         * Creates a SubmitTransactionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {admission_control.SubmitTransactionRequest} SubmitTransactionRequest
         */
        SubmitTransactionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.admission_control.SubmitTransactionRequest)
                return object;
            var message = new $root.admission_control.SubmitTransactionRequest();
            if (object.signedTxn != null) {
                if (typeof object.signedTxn !== "object")
                    throw TypeError(".admission_control.SubmitTransactionRequest.signedTxn: object expected");
                message.signedTxn = $root.types.SignedTransaction.fromObject(object.signedTxn);
            }
            return message;
        };

        /**
         * Creates a plain object from a SubmitTransactionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof admission_control.SubmitTransactionRequest
         * @static
         * @param {admission_control.SubmitTransactionRequest} message SubmitTransactionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmitTransactionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.signedTxn = null;
            if (message.signedTxn != null && message.hasOwnProperty("signedTxn"))
                object.signedTxn = $root.types.SignedTransaction.toObject(message.signedTxn, options);
            return object;
        };

        /**
         * Converts this SubmitTransactionRequest to JSON.
         * @function toJSON
         * @memberof admission_control.SubmitTransactionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmitTransactionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubmitTransactionRequest;
    })();

    /**
     * AdmissionControlStatus enum.
     * @name admission_control.AdmissionControlStatus
     * @enum {string}
     * @property {number} Accepted=0 Accepted value
     * @property {number} Blacklisted=1 Blacklisted value
     * @property {number} Rejected=2 Rejected value
     */
    admission_control.AdmissionControlStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Accepted"] = 0;
        values[valuesById[1] = "Blacklisted"] = 1;
        values[valuesById[2] = "Rejected"] = 2;
        return values;
    })();

    admission_control.SubmitTransactionResponse = (function() {

        /**
         * Properties of a SubmitTransactionResponse.
         * @memberof admission_control
         * @interface ISubmitTransactionResponse
         * @property {types.IVMStatus|null} [vmStatus] SubmitTransactionResponse vmStatus
         * @property {admission_control.AdmissionControlStatus|null} [acStatus] SubmitTransactionResponse acStatus
         * @property {mempool.MempoolAddTransactionStatus|null} [mempoolStatus] SubmitTransactionResponse mempoolStatus
         * @property {Uint8Array|null} [validatorId] SubmitTransactionResponse validatorId
         */

        /**
         * Constructs a new SubmitTransactionResponse.
         * @memberof admission_control
         * @classdesc Represents a SubmitTransactionResponse.
         * @implements ISubmitTransactionResponse
         * @constructor
         * @param {admission_control.ISubmitTransactionResponse=} [properties] Properties to set
         */
        function SubmitTransactionResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubmitTransactionResponse vmStatus.
         * @member {types.IVMStatus|null|undefined} vmStatus
         * @memberof admission_control.SubmitTransactionResponse
         * @instance
         */
        SubmitTransactionResponse.prototype.vmStatus = null;

        /**
         * SubmitTransactionResponse acStatus.
         * @member {admission_control.AdmissionControlStatus} acStatus
         * @memberof admission_control.SubmitTransactionResponse
         * @instance
         */
        SubmitTransactionResponse.prototype.acStatus = 0;

        /**
         * SubmitTransactionResponse mempoolStatus.
         * @member {mempool.MempoolAddTransactionStatus} mempoolStatus
         * @memberof admission_control.SubmitTransactionResponse
         * @instance
         */
        SubmitTransactionResponse.prototype.mempoolStatus = 0;

        /**
         * SubmitTransactionResponse validatorId.
         * @member {Uint8Array} validatorId
         * @memberof admission_control.SubmitTransactionResponse
         * @instance
         */
        SubmitTransactionResponse.prototype.validatorId = $util.newBuffer([]);

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SubmitTransactionResponse status.
         * @member {"vmStatus"|"acStatus"|"mempoolStatus"|undefined} status
         * @memberof admission_control.SubmitTransactionResponse
         * @instance
         */
        Object.defineProperty(SubmitTransactionResponse.prototype, "status", {
            get: $util.oneOfGetter($oneOfFields = ["vmStatus", "acStatus", "mempoolStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SubmitTransactionResponse instance using the specified properties.
         * @function create
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {admission_control.ISubmitTransactionResponse=} [properties] Properties to set
         * @returns {admission_control.SubmitTransactionResponse} SubmitTransactionResponse instance
         */
        SubmitTransactionResponse.create = function create(properties) {
            return new SubmitTransactionResponse(properties);
        };

        /**
         * Encodes the specified SubmitTransactionResponse message. Does not implicitly {@link admission_control.SubmitTransactionResponse.verify|verify} messages.
         * @function encode
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {admission_control.ISubmitTransactionResponse} message SubmitTransactionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmitTransactionResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vmStatus != null && message.hasOwnProperty("vmStatus"))
                $root.types.VMStatus.encode(message.vmStatus, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.acStatus != null && message.hasOwnProperty("acStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.acStatus);
            if (message.mempoolStatus != null && message.hasOwnProperty("mempoolStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mempoolStatus);
            if (message.validatorId != null && message.hasOwnProperty("validatorId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.validatorId);
            return writer;
        };

        /**
         * Encodes the specified SubmitTransactionResponse message, length delimited. Does not implicitly {@link admission_control.SubmitTransactionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {admission_control.ISubmitTransactionResponse} message SubmitTransactionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmitTransactionResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubmitTransactionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {admission_control.SubmitTransactionResponse} SubmitTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmitTransactionResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.admission_control.SubmitTransactionResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.vmStatus = $root.types.VMStatus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acStatus = reader.int32();
                    break;
                case 3:
                    message.mempoolStatus = reader.int32();
                    break;
                case 4:
                    message.validatorId = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubmitTransactionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {admission_control.SubmitTransactionResponse} SubmitTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmitTransactionResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmitTransactionResponse message.
         * @function verify
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmitTransactionResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.vmStatus != null && message.hasOwnProperty("vmStatus")) {
                properties.status = 1;
                {
                    var error = $root.types.VMStatus.verify(message.vmStatus);
                    if (error)
                        return "vmStatus." + error;
                }
            }
            if (message.acStatus != null && message.hasOwnProperty("acStatus")) {
                if (properties.status === 1)
                    return "status: multiple values";
                properties.status = 1;
                switch (message.acStatus) {
                default:
                    return "acStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.mempoolStatus != null && message.hasOwnProperty("mempoolStatus")) {
                if (properties.status === 1)
                    return "status: multiple values";
                properties.status = 1;
                switch (message.mempoolStatus) {
                default:
                    return "mempoolStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            }
            if (message.validatorId != null && message.hasOwnProperty("validatorId"))
                if (!(message.validatorId && typeof message.validatorId.length === "number" || $util.isString(message.validatorId)))
                    return "validatorId: buffer expected";
            return null;
        };

        /**
         * Creates a SubmitTransactionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {admission_control.SubmitTransactionResponse} SubmitTransactionResponse
         */
        SubmitTransactionResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.admission_control.SubmitTransactionResponse)
                return object;
            var message = new $root.admission_control.SubmitTransactionResponse();
            if (object.vmStatus != null) {
                if (typeof object.vmStatus !== "object")
                    throw TypeError(".admission_control.SubmitTransactionResponse.vmStatus: object expected");
                message.vmStatus = $root.types.VMStatus.fromObject(object.vmStatus);
            }
            switch (object.acStatus) {
            case "Accepted":
            case 0:
                message.acStatus = 0;
                break;
            case "Blacklisted":
            case 1:
                message.acStatus = 1;
                break;
            case "Rejected":
            case 2:
                message.acStatus = 2;
                break;
            }
            switch (object.mempoolStatus) {
            case "Valid":
            case 0:
                message.mempoolStatus = 0;
                break;
            case "InsufficientBalance":
            case 1:
                message.mempoolStatus = 1;
                break;
            case "InvalidSeqNumber":
            case 2:
                message.mempoolStatus = 2;
                break;
            case "MempoolIsFull":
            case 3:
                message.mempoolStatus = 3;
                break;
            case "TooManyTransactions":
            case 4:
                message.mempoolStatus = 4;
                break;
            case "InvalidUpdate":
            case 5:
                message.mempoolStatus = 5;
                break;
            }
            if (object.validatorId != null)
                if (typeof object.validatorId === "string")
                    $util.base64.decode(object.validatorId, message.validatorId = $util.newBuffer($util.base64.length(object.validatorId)), 0);
                else if (object.validatorId.length)
                    message.validatorId = object.validatorId;
            return message;
        };

        /**
         * Creates a plain object from a SubmitTransactionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof admission_control.SubmitTransactionResponse
         * @static
         * @param {admission_control.SubmitTransactionResponse} message SubmitTransactionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmitTransactionResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.validatorId = "";
                else {
                    object.validatorId = [];
                    if (options.bytes !== Array)
                        object.validatorId = $util.newBuffer(object.validatorId);
                }
            if (message.vmStatus != null && message.hasOwnProperty("vmStatus")) {
                object.vmStatus = $root.types.VMStatus.toObject(message.vmStatus, options);
                if (options.oneofs)
                    object.status = "vmStatus";
            }
            if (message.acStatus != null && message.hasOwnProperty("acStatus")) {
                object.acStatus = options.enums === String ? $root.admission_control.AdmissionControlStatus[message.acStatus] : message.acStatus;
                if (options.oneofs)
                    object.status = "acStatus";
            }
            if (message.mempoolStatus != null && message.hasOwnProperty("mempoolStatus")) {
                object.mempoolStatus = options.enums === String ? $root.mempool.MempoolAddTransactionStatus[message.mempoolStatus] : message.mempoolStatus;
                if (options.oneofs)
                    object.status = "mempoolStatus";
            }
            if (message.validatorId != null && message.hasOwnProperty("validatorId"))
                object.validatorId = options.bytes === String ? $util.base64.encode(message.validatorId, 0, message.validatorId.length) : options.bytes === Array ? Array.prototype.slice.call(message.validatorId) : message.validatorId;
            return object;
        };

        /**
         * Converts this SubmitTransactionResponse to JSON.
         * @function toJSON
         * @memberof admission_control.SubmitTransactionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmitTransactionResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubmitTransactionResponse;
    })();

    admission_control.AdmissionControl = (function() {

        /**
         * Constructs a new AdmissionControl service.
         * @memberof admission_control
         * @classdesc Represents an AdmissionControl
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AdmissionControl(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AdmissionControl.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AdmissionControl;

        /**
         * Creates new AdmissionControl service using the specified rpc implementation.
         * @function create
         * @memberof admission_control.AdmissionControl
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AdmissionControl} RPC service. Useful where requests and/or responses are streamed.
         */
        AdmissionControl.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link admission_control.AdmissionControl#submitTransaction}.
         * @memberof admission_control.AdmissionControl
         * @typedef SubmitTransactionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {admission_control.SubmitTransactionResponse} [response] SubmitTransactionResponse
         */

        /**
         * Calls SubmitTransaction.
         * @function submitTransaction
         * @memberof admission_control.AdmissionControl
         * @instance
         * @param {admission_control.ISubmitTransactionRequest} request SubmitTransactionRequest message or plain object
         * @param {admission_control.AdmissionControl.SubmitTransactionCallback} callback Node-style callback called with the error, if any, and SubmitTransactionResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AdmissionControl.prototype.submitTransaction = function submitTransaction(request, callback) {
            return this.rpcCall(submitTransaction, $root.admission_control.SubmitTransactionRequest, $root.admission_control.SubmitTransactionResponse, request, callback);
        }, "name", { value: "SubmitTransaction" });

        /**
         * Calls SubmitTransaction.
         * @function submitTransaction
         * @memberof admission_control.AdmissionControl
         * @instance
         * @param {admission_control.ISubmitTransactionRequest} request SubmitTransactionRequest message or plain object
         * @returns {Promise<admission_control.SubmitTransactionResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link admission_control.AdmissionControl#updateToLatestLedger}.
         * @memberof admission_control.AdmissionControl
         * @typedef UpdateToLatestLedgerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {types.UpdateToLatestLedgerResponse} [response] UpdateToLatestLedgerResponse
         */

        /**
         * Calls UpdateToLatestLedger.
         * @function updateToLatestLedger
         * @memberof admission_control.AdmissionControl
         * @instance
         * @param {types.IUpdateToLatestLedgerRequest} request UpdateToLatestLedgerRequest message or plain object
         * @param {admission_control.AdmissionControl.UpdateToLatestLedgerCallback} callback Node-style callback called with the error, if any, and UpdateToLatestLedgerResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AdmissionControl.prototype.updateToLatestLedger = function updateToLatestLedger(request, callback) {
            return this.rpcCall(updateToLatestLedger, $root.types.UpdateToLatestLedgerRequest, $root.types.UpdateToLatestLedgerResponse, request, callback);
        }, "name", { value: "UpdateToLatestLedger" });

        /**
         * Calls UpdateToLatestLedger.
         * @function updateToLatestLedger
         * @memberof admission_control.AdmissionControl
         * @instance
         * @param {types.IUpdateToLatestLedgerRequest} request UpdateToLatestLedgerRequest message or plain object
         * @returns {Promise<types.UpdateToLatestLedgerResponse>} Promise
         * @variation 2
         */

        return AdmissionControl;
    })();

    return admission_control;
})();

$root.types = (function() {

    /**
     * Namespace types.
     * @exports types
     * @namespace
     */
    var types = {};

    types.UpdateToLatestLedgerRequest = (function() {

        /**
         * Properties of an UpdateToLatestLedgerRequest.
         * @memberof types
         * @interface IUpdateToLatestLedgerRequest
         * @property {number|Long|null} [clientKnownVersion] UpdateToLatestLedgerRequest clientKnownVersion
         * @property {Array.<types.IRequestItem>|null} [requestedItems] UpdateToLatestLedgerRequest requestedItems
         */

        /**
         * Constructs a new UpdateToLatestLedgerRequest.
         * @memberof types
         * @classdesc Represents an UpdateToLatestLedgerRequest.
         * @implements IUpdateToLatestLedgerRequest
         * @constructor
         * @param {types.IUpdateToLatestLedgerRequest=} [properties] Properties to set
         */
        function UpdateToLatestLedgerRequest(properties) {
            this.requestedItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateToLatestLedgerRequest clientKnownVersion.
         * @member {number|Long} clientKnownVersion
         * @memberof types.UpdateToLatestLedgerRequest
         * @instance
         */
        UpdateToLatestLedgerRequest.prototype.clientKnownVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UpdateToLatestLedgerRequest requestedItems.
         * @member {Array.<types.IRequestItem>} requestedItems
         * @memberof types.UpdateToLatestLedgerRequest
         * @instance
         */
        UpdateToLatestLedgerRequest.prototype.requestedItems = $util.emptyArray;

        /**
         * Creates a new UpdateToLatestLedgerRequest instance using the specified properties.
         * @function create
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {types.IUpdateToLatestLedgerRequest=} [properties] Properties to set
         * @returns {types.UpdateToLatestLedgerRequest} UpdateToLatestLedgerRequest instance
         */
        UpdateToLatestLedgerRequest.create = function create(properties) {
            return new UpdateToLatestLedgerRequest(properties);
        };

        /**
         * Encodes the specified UpdateToLatestLedgerRequest message. Does not implicitly {@link types.UpdateToLatestLedgerRequest.verify|verify} messages.
         * @function encode
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {types.IUpdateToLatestLedgerRequest} message UpdateToLatestLedgerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateToLatestLedgerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientKnownVersion != null && message.hasOwnProperty("clientKnownVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.clientKnownVersion);
            if (message.requestedItems != null && message.requestedItems.length)
                for (var i = 0; i < message.requestedItems.length; ++i)
                    $root.types.RequestItem.encode(message.requestedItems[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateToLatestLedgerRequest message, length delimited. Does not implicitly {@link types.UpdateToLatestLedgerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {types.IUpdateToLatestLedgerRequest} message UpdateToLatestLedgerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateToLatestLedgerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateToLatestLedgerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.UpdateToLatestLedgerRequest} UpdateToLatestLedgerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateToLatestLedgerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.UpdateToLatestLedgerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientKnownVersion = reader.uint64();
                    break;
                case 2:
                    if (!(message.requestedItems && message.requestedItems.length))
                        message.requestedItems = [];
                    message.requestedItems.push($root.types.RequestItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateToLatestLedgerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.UpdateToLatestLedgerRequest} UpdateToLatestLedgerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateToLatestLedgerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateToLatestLedgerRequest message.
         * @function verify
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateToLatestLedgerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientKnownVersion != null && message.hasOwnProperty("clientKnownVersion"))
                if (!$util.isInteger(message.clientKnownVersion) && !(message.clientKnownVersion && $util.isInteger(message.clientKnownVersion.low) && $util.isInteger(message.clientKnownVersion.high)))
                    return "clientKnownVersion: integer|Long expected";
            if (message.requestedItems != null && message.hasOwnProperty("requestedItems")) {
                if (!Array.isArray(message.requestedItems))
                    return "requestedItems: array expected";
                for (var i = 0; i < message.requestedItems.length; ++i) {
                    var error = $root.types.RequestItem.verify(message.requestedItems[i]);
                    if (error)
                        return "requestedItems." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateToLatestLedgerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.UpdateToLatestLedgerRequest} UpdateToLatestLedgerRequest
         */
        UpdateToLatestLedgerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.UpdateToLatestLedgerRequest)
                return object;
            var message = new $root.types.UpdateToLatestLedgerRequest();
            if (object.clientKnownVersion != null)
                if ($util.Long)
                    (message.clientKnownVersion = $util.Long.fromValue(object.clientKnownVersion)).unsigned = true;
                else if (typeof object.clientKnownVersion === "string")
                    message.clientKnownVersion = parseInt(object.clientKnownVersion, 10);
                else if (typeof object.clientKnownVersion === "number")
                    message.clientKnownVersion = object.clientKnownVersion;
                else if (typeof object.clientKnownVersion === "object")
                    message.clientKnownVersion = new $util.LongBits(object.clientKnownVersion.low >>> 0, object.clientKnownVersion.high >>> 0).toNumber(true);
            if (object.requestedItems) {
                if (!Array.isArray(object.requestedItems))
                    throw TypeError(".types.UpdateToLatestLedgerRequest.requestedItems: array expected");
                message.requestedItems = [];
                for (var i = 0; i < object.requestedItems.length; ++i) {
                    if (typeof object.requestedItems[i] !== "object")
                        throw TypeError(".types.UpdateToLatestLedgerRequest.requestedItems: object expected");
                    message.requestedItems[i] = $root.types.RequestItem.fromObject(object.requestedItems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateToLatestLedgerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.UpdateToLatestLedgerRequest
         * @static
         * @param {types.UpdateToLatestLedgerRequest} message UpdateToLatestLedgerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateToLatestLedgerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.requestedItems = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.clientKnownVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientKnownVersion = options.longs === String ? "0" : 0;
            if (message.clientKnownVersion != null && message.hasOwnProperty("clientKnownVersion"))
                if (typeof message.clientKnownVersion === "number")
                    object.clientKnownVersion = options.longs === String ? String(message.clientKnownVersion) : message.clientKnownVersion;
                else
                    object.clientKnownVersion = options.longs === String ? $util.Long.prototype.toString.call(message.clientKnownVersion) : options.longs === Number ? new $util.LongBits(message.clientKnownVersion.low >>> 0, message.clientKnownVersion.high >>> 0).toNumber(true) : message.clientKnownVersion;
            if (message.requestedItems && message.requestedItems.length) {
                object.requestedItems = [];
                for (var j = 0; j < message.requestedItems.length; ++j)
                    object.requestedItems[j] = $root.types.RequestItem.toObject(message.requestedItems[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateToLatestLedgerRequest to JSON.
         * @function toJSON
         * @memberof types.UpdateToLatestLedgerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateToLatestLedgerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateToLatestLedgerRequest;
    })();

    types.RequestItem = (function() {

        /**
         * Properties of a RequestItem.
         * @memberof types
         * @interface IRequestItem
         * @property {types.IGetAccountStateRequest|null} [getAccountStateRequest] RequestItem getAccountStateRequest
         * @property {types.IGetAccountTransactionBySequenceNumberRequest|null} [getAccountTransactionBySequenceNumberRequest] RequestItem getAccountTransactionBySequenceNumberRequest
         * @property {types.IGetEventsByEventAccessPathRequest|null} [getEventsByEventAccessPathRequest] RequestItem getEventsByEventAccessPathRequest
         * @property {types.IGetTransactionsRequest|null} [getTransactionsRequest] RequestItem getTransactionsRequest
         */

        /**
         * Constructs a new RequestItem.
         * @memberof types
         * @classdesc Represents a RequestItem.
         * @implements IRequestItem
         * @constructor
         * @param {types.IRequestItem=} [properties] Properties to set
         */
        function RequestItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestItem getAccountStateRequest.
         * @member {types.IGetAccountStateRequest|null|undefined} getAccountStateRequest
         * @memberof types.RequestItem
         * @instance
         */
        RequestItem.prototype.getAccountStateRequest = null;

        /**
         * RequestItem getAccountTransactionBySequenceNumberRequest.
         * @member {types.IGetAccountTransactionBySequenceNumberRequest|null|undefined} getAccountTransactionBySequenceNumberRequest
         * @memberof types.RequestItem
         * @instance
         */
        RequestItem.prototype.getAccountTransactionBySequenceNumberRequest = null;

        /**
         * RequestItem getEventsByEventAccessPathRequest.
         * @member {types.IGetEventsByEventAccessPathRequest|null|undefined} getEventsByEventAccessPathRequest
         * @memberof types.RequestItem
         * @instance
         */
        RequestItem.prototype.getEventsByEventAccessPathRequest = null;

        /**
         * RequestItem getTransactionsRequest.
         * @member {types.IGetTransactionsRequest|null|undefined} getTransactionsRequest
         * @memberof types.RequestItem
         * @instance
         */
        RequestItem.prototype.getTransactionsRequest = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RequestItem requestedItems.
         * @member {"getAccountStateRequest"|"getAccountTransactionBySequenceNumberRequest"|"getEventsByEventAccessPathRequest"|"getTransactionsRequest"|undefined} requestedItems
         * @memberof types.RequestItem
         * @instance
         */
        Object.defineProperty(RequestItem.prototype, "requestedItems", {
            get: $util.oneOfGetter($oneOfFields = ["getAccountStateRequest", "getAccountTransactionBySequenceNumberRequest", "getEventsByEventAccessPathRequest", "getTransactionsRequest"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RequestItem instance using the specified properties.
         * @function create
         * @memberof types.RequestItem
         * @static
         * @param {types.IRequestItem=} [properties] Properties to set
         * @returns {types.RequestItem} RequestItem instance
         */
        RequestItem.create = function create(properties) {
            return new RequestItem(properties);
        };

        /**
         * Encodes the specified RequestItem message. Does not implicitly {@link types.RequestItem.verify|verify} messages.
         * @function encode
         * @memberof types.RequestItem
         * @static
         * @param {types.IRequestItem} message RequestItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.getAccountStateRequest != null && message.hasOwnProperty("getAccountStateRequest"))
                $root.types.GetAccountStateRequest.encode(message.getAccountStateRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.getAccountTransactionBySequenceNumberRequest != null && message.hasOwnProperty("getAccountTransactionBySequenceNumberRequest"))
                $root.types.GetAccountTransactionBySequenceNumberRequest.encode(message.getAccountTransactionBySequenceNumberRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.getEventsByEventAccessPathRequest != null && message.hasOwnProperty("getEventsByEventAccessPathRequest"))
                $root.types.GetEventsByEventAccessPathRequest.encode(message.getEventsByEventAccessPathRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.getTransactionsRequest != null && message.hasOwnProperty("getTransactionsRequest"))
                $root.types.GetTransactionsRequest.encode(message.getTransactionsRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RequestItem message, length delimited. Does not implicitly {@link types.RequestItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.RequestItem
         * @static
         * @param {types.IRequestItem} message RequestItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestItem message from the specified reader or buffer.
         * @function decode
         * @memberof types.RequestItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.RequestItem} RequestItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.RequestItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.getAccountStateRequest = $root.types.GetAccountStateRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getAccountTransactionBySequenceNumberRequest = $root.types.GetAccountTransactionBySequenceNumberRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.getEventsByEventAccessPathRequest = $root.types.GetEventsByEventAccessPathRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.getTransactionsRequest = $root.types.GetTransactionsRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.RequestItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.RequestItem} RequestItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestItem message.
         * @function verify
         * @memberof types.RequestItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.getAccountStateRequest != null && message.hasOwnProperty("getAccountStateRequest")) {
                properties.requestedItems = 1;
                {
                    var error = $root.types.GetAccountStateRequest.verify(message.getAccountStateRequest);
                    if (error)
                        return "getAccountStateRequest." + error;
                }
            }
            if (message.getAccountTransactionBySequenceNumberRequest != null && message.hasOwnProperty("getAccountTransactionBySequenceNumberRequest")) {
                if (properties.requestedItems === 1)
                    return "requestedItems: multiple values";
                properties.requestedItems = 1;
                {
                    var error = $root.types.GetAccountTransactionBySequenceNumberRequest.verify(message.getAccountTransactionBySequenceNumberRequest);
                    if (error)
                        return "getAccountTransactionBySequenceNumberRequest." + error;
                }
            }
            if (message.getEventsByEventAccessPathRequest != null && message.hasOwnProperty("getEventsByEventAccessPathRequest")) {
                if (properties.requestedItems === 1)
                    return "requestedItems: multiple values";
                properties.requestedItems = 1;
                {
                    var error = $root.types.GetEventsByEventAccessPathRequest.verify(message.getEventsByEventAccessPathRequest);
                    if (error)
                        return "getEventsByEventAccessPathRequest." + error;
                }
            }
            if (message.getTransactionsRequest != null && message.hasOwnProperty("getTransactionsRequest")) {
                if (properties.requestedItems === 1)
                    return "requestedItems: multiple values";
                properties.requestedItems = 1;
                {
                    var error = $root.types.GetTransactionsRequest.verify(message.getTransactionsRequest);
                    if (error)
                        return "getTransactionsRequest." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RequestItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.RequestItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.RequestItem} RequestItem
         */
        RequestItem.fromObject = function fromObject(object) {
            if (object instanceof $root.types.RequestItem)
                return object;
            var message = new $root.types.RequestItem();
            if (object.getAccountStateRequest != null) {
                if (typeof object.getAccountStateRequest !== "object")
                    throw TypeError(".types.RequestItem.getAccountStateRequest: object expected");
                message.getAccountStateRequest = $root.types.GetAccountStateRequest.fromObject(object.getAccountStateRequest);
            }
            if (object.getAccountTransactionBySequenceNumberRequest != null) {
                if (typeof object.getAccountTransactionBySequenceNumberRequest !== "object")
                    throw TypeError(".types.RequestItem.getAccountTransactionBySequenceNumberRequest: object expected");
                message.getAccountTransactionBySequenceNumberRequest = $root.types.GetAccountTransactionBySequenceNumberRequest.fromObject(object.getAccountTransactionBySequenceNumberRequest);
            }
            if (object.getEventsByEventAccessPathRequest != null) {
                if (typeof object.getEventsByEventAccessPathRequest !== "object")
                    throw TypeError(".types.RequestItem.getEventsByEventAccessPathRequest: object expected");
                message.getEventsByEventAccessPathRequest = $root.types.GetEventsByEventAccessPathRequest.fromObject(object.getEventsByEventAccessPathRequest);
            }
            if (object.getTransactionsRequest != null) {
                if (typeof object.getTransactionsRequest !== "object")
                    throw TypeError(".types.RequestItem.getTransactionsRequest: object expected");
                message.getTransactionsRequest = $root.types.GetTransactionsRequest.fromObject(object.getTransactionsRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a RequestItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.RequestItem
         * @static
         * @param {types.RequestItem} message RequestItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.getAccountStateRequest != null && message.hasOwnProperty("getAccountStateRequest")) {
                object.getAccountStateRequest = $root.types.GetAccountStateRequest.toObject(message.getAccountStateRequest, options);
                if (options.oneofs)
                    object.requestedItems = "getAccountStateRequest";
            }
            if (message.getAccountTransactionBySequenceNumberRequest != null && message.hasOwnProperty("getAccountTransactionBySequenceNumberRequest")) {
                object.getAccountTransactionBySequenceNumberRequest = $root.types.GetAccountTransactionBySequenceNumberRequest.toObject(message.getAccountTransactionBySequenceNumberRequest, options);
                if (options.oneofs)
                    object.requestedItems = "getAccountTransactionBySequenceNumberRequest";
            }
            if (message.getEventsByEventAccessPathRequest != null && message.hasOwnProperty("getEventsByEventAccessPathRequest")) {
                object.getEventsByEventAccessPathRequest = $root.types.GetEventsByEventAccessPathRequest.toObject(message.getEventsByEventAccessPathRequest, options);
                if (options.oneofs)
                    object.requestedItems = "getEventsByEventAccessPathRequest";
            }
            if (message.getTransactionsRequest != null && message.hasOwnProperty("getTransactionsRequest")) {
                object.getTransactionsRequest = $root.types.GetTransactionsRequest.toObject(message.getTransactionsRequest, options);
                if (options.oneofs)
                    object.requestedItems = "getTransactionsRequest";
            }
            return object;
        };

        /**
         * Converts this RequestItem to JSON.
         * @function toJSON
         * @memberof types.RequestItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestItem;
    })();

    types.UpdateToLatestLedgerResponse = (function() {

        /**
         * Properties of an UpdateToLatestLedgerResponse.
         * @memberof types
         * @interface IUpdateToLatestLedgerResponse
         * @property {Array.<types.IResponseItem>|null} [responseItems] UpdateToLatestLedgerResponse responseItems
         * @property {types.ILedgerInfoWithSignatures|null} [ledgerInfoWithSigs] UpdateToLatestLedgerResponse ledgerInfoWithSigs
         * @property {Array.<types.IValidatorChangeEventWithProof>|null} [validatorChangeEvents] UpdateToLatestLedgerResponse validatorChangeEvents
         */

        /**
         * Constructs a new UpdateToLatestLedgerResponse.
         * @memberof types
         * @classdesc Represents an UpdateToLatestLedgerResponse.
         * @implements IUpdateToLatestLedgerResponse
         * @constructor
         * @param {types.IUpdateToLatestLedgerResponse=} [properties] Properties to set
         */
        function UpdateToLatestLedgerResponse(properties) {
            this.responseItems = [];
            this.validatorChangeEvents = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateToLatestLedgerResponse responseItems.
         * @member {Array.<types.IResponseItem>} responseItems
         * @memberof types.UpdateToLatestLedgerResponse
         * @instance
         */
        UpdateToLatestLedgerResponse.prototype.responseItems = $util.emptyArray;

        /**
         * UpdateToLatestLedgerResponse ledgerInfoWithSigs.
         * @member {types.ILedgerInfoWithSignatures|null|undefined} ledgerInfoWithSigs
         * @memberof types.UpdateToLatestLedgerResponse
         * @instance
         */
        UpdateToLatestLedgerResponse.prototype.ledgerInfoWithSigs = null;

        /**
         * UpdateToLatestLedgerResponse validatorChangeEvents.
         * @member {Array.<types.IValidatorChangeEventWithProof>} validatorChangeEvents
         * @memberof types.UpdateToLatestLedgerResponse
         * @instance
         */
        UpdateToLatestLedgerResponse.prototype.validatorChangeEvents = $util.emptyArray;

        /**
         * Creates a new UpdateToLatestLedgerResponse instance using the specified properties.
         * @function create
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {types.IUpdateToLatestLedgerResponse=} [properties] Properties to set
         * @returns {types.UpdateToLatestLedgerResponse} UpdateToLatestLedgerResponse instance
         */
        UpdateToLatestLedgerResponse.create = function create(properties) {
            return new UpdateToLatestLedgerResponse(properties);
        };

        /**
         * Encodes the specified UpdateToLatestLedgerResponse message. Does not implicitly {@link types.UpdateToLatestLedgerResponse.verify|verify} messages.
         * @function encode
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {types.IUpdateToLatestLedgerResponse} message UpdateToLatestLedgerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateToLatestLedgerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.responseItems != null && message.responseItems.length)
                for (var i = 0; i < message.responseItems.length; ++i)
                    $root.types.ResponseItem.encode(message.responseItems[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ledgerInfoWithSigs != null && message.hasOwnProperty("ledgerInfoWithSigs"))
                $root.types.LedgerInfoWithSignatures.encode(message.ledgerInfoWithSigs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.validatorChangeEvents != null && message.validatorChangeEvents.length)
                for (var i = 0; i < message.validatorChangeEvents.length; ++i)
                    $root.types.ValidatorChangeEventWithProof.encode(message.validatorChangeEvents[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateToLatestLedgerResponse message, length delimited. Does not implicitly {@link types.UpdateToLatestLedgerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {types.IUpdateToLatestLedgerResponse} message UpdateToLatestLedgerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateToLatestLedgerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateToLatestLedgerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.UpdateToLatestLedgerResponse} UpdateToLatestLedgerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateToLatestLedgerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.UpdateToLatestLedgerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.responseItems && message.responseItems.length))
                        message.responseItems = [];
                    message.responseItems.push($root.types.ResponseItem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ledgerInfoWithSigs = $root.types.LedgerInfoWithSignatures.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.validatorChangeEvents && message.validatorChangeEvents.length))
                        message.validatorChangeEvents = [];
                    message.validatorChangeEvents.push($root.types.ValidatorChangeEventWithProof.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateToLatestLedgerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.UpdateToLatestLedgerResponse} UpdateToLatestLedgerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateToLatestLedgerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateToLatestLedgerResponse message.
         * @function verify
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateToLatestLedgerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.responseItems != null && message.hasOwnProperty("responseItems")) {
                if (!Array.isArray(message.responseItems))
                    return "responseItems: array expected";
                for (var i = 0; i < message.responseItems.length; ++i) {
                    var error = $root.types.ResponseItem.verify(message.responseItems[i]);
                    if (error)
                        return "responseItems." + error;
                }
            }
            if (message.ledgerInfoWithSigs != null && message.hasOwnProperty("ledgerInfoWithSigs")) {
                var error = $root.types.LedgerInfoWithSignatures.verify(message.ledgerInfoWithSigs);
                if (error)
                    return "ledgerInfoWithSigs." + error;
            }
            if (message.validatorChangeEvents != null && message.hasOwnProperty("validatorChangeEvents")) {
                if (!Array.isArray(message.validatorChangeEvents))
                    return "validatorChangeEvents: array expected";
                for (var i = 0; i < message.validatorChangeEvents.length; ++i) {
                    var error = $root.types.ValidatorChangeEventWithProof.verify(message.validatorChangeEvents[i]);
                    if (error)
                        return "validatorChangeEvents." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UpdateToLatestLedgerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.UpdateToLatestLedgerResponse} UpdateToLatestLedgerResponse
         */
        UpdateToLatestLedgerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.UpdateToLatestLedgerResponse)
                return object;
            var message = new $root.types.UpdateToLatestLedgerResponse();
            if (object.responseItems) {
                if (!Array.isArray(object.responseItems))
                    throw TypeError(".types.UpdateToLatestLedgerResponse.responseItems: array expected");
                message.responseItems = [];
                for (var i = 0; i < object.responseItems.length; ++i) {
                    if (typeof object.responseItems[i] !== "object")
                        throw TypeError(".types.UpdateToLatestLedgerResponse.responseItems: object expected");
                    message.responseItems[i] = $root.types.ResponseItem.fromObject(object.responseItems[i]);
                }
            }
            if (object.ledgerInfoWithSigs != null) {
                if (typeof object.ledgerInfoWithSigs !== "object")
                    throw TypeError(".types.UpdateToLatestLedgerResponse.ledgerInfoWithSigs: object expected");
                message.ledgerInfoWithSigs = $root.types.LedgerInfoWithSignatures.fromObject(object.ledgerInfoWithSigs);
            }
            if (object.validatorChangeEvents) {
                if (!Array.isArray(object.validatorChangeEvents))
                    throw TypeError(".types.UpdateToLatestLedgerResponse.validatorChangeEvents: array expected");
                message.validatorChangeEvents = [];
                for (var i = 0; i < object.validatorChangeEvents.length; ++i) {
                    if (typeof object.validatorChangeEvents[i] !== "object")
                        throw TypeError(".types.UpdateToLatestLedgerResponse.validatorChangeEvents: object expected");
                    message.validatorChangeEvents[i] = $root.types.ValidatorChangeEventWithProof.fromObject(object.validatorChangeEvents[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateToLatestLedgerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.UpdateToLatestLedgerResponse
         * @static
         * @param {types.UpdateToLatestLedgerResponse} message UpdateToLatestLedgerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateToLatestLedgerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.responseItems = [];
                object.validatorChangeEvents = [];
            }
            if (options.defaults)
                object.ledgerInfoWithSigs = null;
            if (message.responseItems && message.responseItems.length) {
                object.responseItems = [];
                for (var j = 0; j < message.responseItems.length; ++j)
                    object.responseItems[j] = $root.types.ResponseItem.toObject(message.responseItems[j], options);
            }
            if (message.ledgerInfoWithSigs != null && message.hasOwnProperty("ledgerInfoWithSigs"))
                object.ledgerInfoWithSigs = $root.types.LedgerInfoWithSignatures.toObject(message.ledgerInfoWithSigs, options);
            if (message.validatorChangeEvents && message.validatorChangeEvents.length) {
                object.validatorChangeEvents = [];
                for (var j = 0; j < message.validatorChangeEvents.length; ++j)
                    object.validatorChangeEvents[j] = $root.types.ValidatorChangeEventWithProof.toObject(message.validatorChangeEvents[j], options);
            }
            return object;
        };

        /**
         * Converts this UpdateToLatestLedgerResponse to JSON.
         * @function toJSON
         * @memberof types.UpdateToLatestLedgerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateToLatestLedgerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateToLatestLedgerResponse;
    })();

    types.ResponseItem = (function() {

        /**
         * Properties of a ResponseItem.
         * @memberof types
         * @interface IResponseItem
         * @property {types.IGetAccountStateResponse|null} [getAccountStateResponse] ResponseItem getAccountStateResponse
         * @property {types.IGetAccountTransactionBySequenceNumberResponse|null} [getAccountTransactionBySequenceNumberResponse] ResponseItem getAccountTransactionBySequenceNumberResponse
         * @property {types.IGetEventsByEventAccessPathResponse|null} [getEventsByEventAccessPathResponse] ResponseItem getEventsByEventAccessPathResponse
         * @property {types.IGetTransactionsResponse|null} [getTransactionsResponse] ResponseItem getTransactionsResponse
         */

        /**
         * Constructs a new ResponseItem.
         * @memberof types
         * @classdesc Represents a ResponseItem.
         * @implements IResponseItem
         * @constructor
         * @param {types.IResponseItem=} [properties] Properties to set
         */
        function ResponseItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseItem getAccountStateResponse.
         * @member {types.IGetAccountStateResponse|null|undefined} getAccountStateResponse
         * @memberof types.ResponseItem
         * @instance
         */
        ResponseItem.prototype.getAccountStateResponse = null;

        /**
         * ResponseItem getAccountTransactionBySequenceNumberResponse.
         * @member {types.IGetAccountTransactionBySequenceNumberResponse|null|undefined} getAccountTransactionBySequenceNumberResponse
         * @memberof types.ResponseItem
         * @instance
         */
        ResponseItem.prototype.getAccountTransactionBySequenceNumberResponse = null;

        /**
         * ResponseItem getEventsByEventAccessPathResponse.
         * @member {types.IGetEventsByEventAccessPathResponse|null|undefined} getEventsByEventAccessPathResponse
         * @memberof types.ResponseItem
         * @instance
         */
        ResponseItem.prototype.getEventsByEventAccessPathResponse = null;

        /**
         * ResponseItem getTransactionsResponse.
         * @member {types.IGetTransactionsResponse|null|undefined} getTransactionsResponse
         * @memberof types.ResponseItem
         * @instance
         */
        ResponseItem.prototype.getTransactionsResponse = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ResponseItem responseItems.
         * @member {"getAccountStateResponse"|"getAccountTransactionBySequenceNumberResponse"|"getEventsByEventAccessPathResponse"|"getTransactionsResponse"|undefined} responseItems
         * @memberof types.ResponseItem
         * @instance
         */
        Object.defineProperty(ResponseItem.prototype, "responseItems", {
            get: $util.oneOfGetter($oneOfFields = ["getAccountStateResponse", "getAccountTransactionBySequenceNumberResponse", "getEventsByEventAccessPathResponse", "getTransactionsResponse"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ResponseItem instance using the specified properties.
         * @function create
         * @memberof types.ResponseItem
         * @static
         * @param {types.IResponseItem=} [properties] Properties to set
         * @returns {types.ResponseItem} ResponseItem instance
         */
        ResponseItem.create = function create(properties) {
            return new ResponseItem(properties);
        };

        /**
         * Encodes the specified ResponseItem message. Does not implicitly {@link types.ResponseItem.verify|verify} messages.
         * @function encode
         * @memberof types.ResponseItem
         * @static
         * @param {types.IResponseItem} message ResponseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.getAccountStateResponse != null && message.hasOwnProperty("getAccountStateResponse"))
                $root.types.GetAccountStateResponse.encode(message.getAccountStateResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.getAccountTransactionBySequenceNumberResponse != null && message.hasOwnProperty("getAccountTransactionBySequenceNumberResponse"))
                $root.types.GetAccountTransactionBySequenceNumberResponse.encode(message.getAccountTransactionBySequenceNumberResponse, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.getEventsByEventAccessPathResponse != null && message.hasOwnProperty("getEventsByEventAccessPathResponse"))
                $root.types.GetEventsByEventAccessPathResponse.encode(message.getEventsByEventAccessPathResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.getTransactionsResponse != null && message.hasOwnProperty("getTransactionsResponse"))
                $root.types.GetTransactionsResponse.encode(message.getTransactionsResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseItem message, length delimited. Does not implicitly {@link types.ResponseItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ResponseItem
         * @static
         * @param {types.IResponseItem} message ResponseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseItem message from the specified reader or buffer.
         * @function decode
         * @memberof types.ResponseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ResponseItem} ResponseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ResponseItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.getAccountStateResponse = $root.types.GetAccountStateResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.getAccountTransactionBySequenceNumberResponse = $root.types.GetAccountTransactionBySequenceNumberResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.getEventsByEventAccessPathResponse = $root.types.GetEventsByEventAccessPathResponse.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.getTransactionsResponse = $root.types.GetTransactionsResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ResponseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ResponseItem} ResponseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseItem message.
         * @function verify
         * @memberof types.ResponseItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.getAccountStateResponse != null && message.hasOwnProperty("getAccountStateResponse")) {
                properties.responseItems = 1;
                {
                    var error = $root.types.GetAccountStateResponse.verify(message.getAccountStateResponse);
                    if (error)
                        return "getAccountStateResponse." + error;
                }
            }
            if (message.getAccountTransactionBySequenceNumberResponse != null && message.hasOwnProperty("getAccountTransactionBySequenceNumberResponse")) {
                if (properties.responseItems === 1)
                    return "responseItems: multiple values";
                properties.responseItems = 1;
                {
                    var error = $root.types.GetAccountTransactionBySequenceNumberResponse.verify(message.getAccountTransactionBySequenceNumberResponse);
                    if (error)
                        return "getAccountTransactionBySequenceNumberResponse." + error;
                }
            }
            if (message.getEventsByEventAccessPathResponse != null && message.hasOwnProperty("getEventsByEventAccessPathResponse")) {
                if (properties.responseItems === 1)
                    return "responseItems: multiple values";
                properties.responseItems = 1;
                {
                    var error = $root.types.GetEventsByEventAccessPathResponse.verify(message.getEventsByEventAccessPathResponse);
                    if (error)
                        return "getEventsByEventAccessPathResponse." + error;
                }
            }
            if (message.getTransactionsResponse != null && message.hasOwnProperty("getTransactionsResponse")) {
                if (properties.responseItems === 1)
                    return "responseItems: multiple values";
                properties.responseItems = 1;
                {
                    var error = $root.types.GetTransactionsResponse.verify(message.getTransactionsResponse);
                    if (error)
                        return "getTransactionsResponse." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ResponseItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ResponseItem} ResponseItem
         */
        ResponseItem.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ResponseItem)
                return object;
            var message = new $root.types.ResponseItem();
            if (object.getAccountStateResponse != null) {
                if (typeof object.getAccountStateResponse !== "object")
                    throw TypeError(".types.ResponseItem.getAccountStateResponse: object expected");
                message.getAccountStateResponse = $root.types.GetAccountStateResponse.fromObject(object.getAccountStateResponse);
            }
            if (object.getAccountTransactionBySequenceNumberResponse != null) {
                if (typeof object.getAccountTransactionBySequenceNumberResponse !== "object")
                    throw TypeError(".types.ResponseItem.getAccountTransactionBySequenceNumberResponse: object expected");
                message.getAccountTransactionBySequenceNumberResponse = $root.types.GetAccountTransactionBySequenceNumberResponse.fromObject(object.getAccountTransactionBySequenceNumberResponse);
            }
            if (object.getEventsByEventAccessPathResponse != null) {
                if (typeof object.getEventsByEventAccessPathResponse !== "object")
                    throw TypeError(".types.ResponseItem.getEventsByEventAccessPathResponse: object expected");
                message.getEventsByEventAccessPathResponse = $root.types.GetEventsByEventAccessPathResponse.fromObject(object.getEventsByEventAccessPathResponse);
            }
            if (object.getTransactionsResponse != null) {
                if (typeof object.getTransactionsResponse !== "object")
                    throw TypeError(".types.ResponseItem.getTransactionsResponse: object expected");
                message.getTransactionsResponse = $root.types.GetTransactionsResponse.fromObject(object.getTransactionsResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ResponseItem
         * @static
         * @param {types.ResponseItem} message ResponseItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.getAccountStateResponse != null && message.hasOwnProperty("getAccountStateResponse")) {
                object.getAccountStateResponse = $root.types.GetAccountStateResponse.toObject(message.getAccountStateResponse, options);
                if (options.oneofs)
                    object.responseItems = "getAccountStateResponse";
            }
            if (message.getAccountTransactionBySequenceNumberResponse != null && message.hasOwnProperty("getAccountTransactionBySequenceNumberResponse")) {
                object.getAccountTransactionBySequenceNumberResponse = $root.types.GetAccountTransactionBySequenceNumberResponse.toObject(message.getAccountTransactionBySequenceNumberResponse, options);
                if (options.oneofs)
                    object.responseItems = "getAccountTransactionBySequenceNumberResponse";
            }
            if (message.getEventsByEventAccessPathResponse != null && message.hasOwnProperty("getEventsByEventAccessPathResponse")) {
                object.getEventsByEventAccessPathResponse = $root.types.GetEventsByEventAccessPathResponse.toObject(message.getEventsByEventAccessPathResponse, options);
                if (options.oneofs)
                    object.responseItems = "getEventsByEventAccessPathResponse";
            }
            if (message.getTransactionsResponse != null && message.hasOwnProperty("getTransactionsResponse")) {
                object.getTransactionsResponse = $root.types.GetTransactionsResponse.toObject(message.getTransactionsResponse, options);
                if (options.oneofs)
                    object.responseItems = "getTransactionsResponse";
            }
            return object;
        };

        /**
         * Converts this ResponseItem to JSON.
         * @function toJSON
         * @memberof types.ResponseItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResponseItem;
    })();

    types.GetAccountStateRequest = (function() {

        /**
         * Properties of a GetAccountStateRequest.
         * @memberof types
         * @interface IGetAccountStateRequest
         * @property {Uint8Array|null} [address] GetAccountStateRequest address
         */

        /**
         * Constructs a new GetAccountStateRequest.
         * @memberof types
         * @classdesc Represents a GetAccountStateRequest.
         * @implements IGetAccountStateRequest
         * @constructor
         * @param {types.IGetAccountStateRequest=} [properties] Properties to set
         */
        function GetAccountStateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountStateRequest address.
         * @member {Uint8Array} address
         * @memberof types.GetAccountStateRequest
         * @instance
         */
        GetAccountStateRequest.prototype.address = $util.newBuffer([]);

        /**
         * Creates a new GetAccountStateRequest instance using the specified properties.
         * @function create
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {types.IGetAccountStateRequest=} [properties] Properties to set
         * @returns {types.GetAccountStateRequest} GetAccountStateRequest instance
         */
        GetAccountStateRequest.create = function create(properties) {
            return new GetAccountStateRequest(properties);
        };

        /**
         * Encodes the specified GetAccountStateRequest message. Does not implicitly {@link types.GetAccountStateRequest.verify|verify} messages.
         * @function encode
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {types.IGetAccountStateRequest} message GetAccountStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            return writer;
        };

        /**
         * Encodes the specified GetAccountStateRequest message, length delimited. Does not implicitly {@link types.GetAccountStateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {types.IGetAccountStateRequest} message GetAccountStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAccountStateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetAccountStateRequest} GetAccountStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountStateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetAccountStateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAccountStateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetAccountStateRequest} GetAccountStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAccountStateRequest message.
         * @function verify
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAccountStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            return null;
        };

        /**
         * Creates a GetAccountStateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetAccountStateRequest} GetAccountStateRequest
         */
        GetAccountStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetAccountStateRequest)
                return object;
            var message = new $root.types.GetAccountStateRequest();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            return message;
        };

        /**
         * Creates a plain object from a GetAccountStateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetAccountStateRequest
         * @static
         * @param {types.GetAccountStateRequest} message GetAccountStateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountStateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            return object;
        };

        /**
         * Converts this GetAccountStateRequest to JSON.
         * @function toJSON
         * @memberof types.GetAccountStateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountStateRequest;
    })();

    types.GetAccountStateResponse = (function() {

        /**
         * Properties of a GetAccountStateResponse.
         * @memberof types
         * @interface IGetAccountStateResponse
         * @property {types.IAccountStateWithProof|null} [accountStateWithProof] GetAccountStateResponse accountStateWithProof
         */

        /**
         * Constructs a new GetAccountStateResponse.
         * @memberof types
         * @classdesc Represents a GetAccountStateResponse.
         * @implements IGetAccountStateResponse
         * @constructor
         * @param {types.IGetAccountStateResponse=} [properties] Properties to set
         */
        function GetAccountStateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountStateResponse accountStateWithProof.
         * @member {types.IAccountStateWithProof|null|undefined} accountStateWithProof
         * @memberof types.GetAccountStateResponse
         * @instance
         */
        GetAccountStateResponse.prototype.accountStateWithProof = null;

        /**
         * Creates a new GetAccountStateResponse instance using the specified properties.
         * @function create
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {types.IGetAccountStateResponse=} [properties] Properties to set
         * @returns {types.GetAccountStateResponse} GetAccountStateResponse instance
         */
        GetAccountStateResponse.create = function create(properties) {
            return new GetAccountStateResponse(properties);
        };

        /**
         * Encodes the specified GetAccountStateResponse message. Does not implicitly {@link types.GetAccountStateResponse.verify|verify} messages.
         * @function encode
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {types.IGetAccountStateResponse} message GetAccountStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountStateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountStateWithProof != null && message.hasOwnProperty("accountStateWithProof"))
                $root.types.AccountStateWithProof.encode(message.accountStateWithProof, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAccountStateResponse message, length delimited. Does not implicitly {@link types.GetAccountStateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {types.IGetAccountStateResponse} message GetAccountStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAccountStateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetAccountStateResponse} GetAccountStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountStateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetAccountStateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountStateWithProof = $root.types.AccountStateWithProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAccountStateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetAccountStateResponse} GetAccountStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountStateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAccountStateResponse message.
         * @function verify
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAccountStateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountStateWithProof != null && message.hasOwnProperty("accountStateWithProof")) {
                var error = $root.types.AccountStateWithProof.verify(message.accountStateWithProof);
                if (error)
                    return "accountStateWithProof." + error;
            }
            return null;
        };

        /**
         * Creates a GetAccountStateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetAccountStateResponse} GetAccountStateResponse
         */
        GetAccountStateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetAccountStateResponse)
                return object;
            var message = new $root.types.GetAccountStateResponse();
            if (object.accountStateWithProof != null) {
                if (typeof object.accountStateWithProof !== "object")
                    throw TypeError(".types.GetAccountStateResponse.accountStateWithProof: object expected");
                message.accountStateWithProof = $root.types.AccountStateWithProof.fromObject(object.accountStateWithProof);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAccountStateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetAccountStateResponse
         * @static
         * @param {types.GetAccountStateResponse} message GetAccountStateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountStateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.accountStateWithProof = null;
            if (message.accountStateWithProof != null && message.hasOwnProperty("accountStateWithProof"))
                object.accountStateWithProof = $root.types.AccountStateWithProof.toObject(message.accountStateWithProof, options);
            return object;
        };

        /**
         * Converts this GetAccountStateResponse to JSON.
         * @function toJSON
         * @memberof types.GetAccountStateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountStateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountStateResponse;
    })();

    types.GetAccountTransactionBySequenceNumberRequest = (function() {

        /**
         * Properties of a GetAccountTransactionBySequenceNumberRequest.
         * @memberof types
         * @interface IGetAccountTransactionBySequenceNumberRequest
         * @property {Uint8Array|null} [account] GetAccountTransactionBySequenceNumberRequest account
         * @property {number|Long|null} [sequenceNumber] GetAccountTransactionBySequenceNumberRequest sequenceNumber
         * @property {boolean|null} [fetchEvents] GetAccountTransactionBySequenceNumberRequest fetchEvents
         */

        /**
         * Constructs a new GetAccountTransactionBySequenceNumberRequest.
         * @memberof types
         * @classdesc Represents a GetAccountTransactionBySequenceNumberRequest.
         * @implements IGetAccountTransactionBySequenceNumberRequest
         * @constructor
         * @param {types.IGetAccountTransactionBySequenceNumberRequest=} [properties] Properties to set
         */
        function GetAccountTransactionBySequenceNumberRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountTransactionBySequenceNumberRequest account.
         * @member {Uint8Array} account
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @instance
         */
        GetAccountTransactionBySequenceNumberRequest.prototype.account = $util.newBuffer([]);

        /**
         * GetAccountTransactionBySequenceNumberRequest sequenceNumber.
         * @member {number|Long} sequenceNumber
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @instance
         */
        GetAccountTransactionBySequenceNumberRequest.prototype.sequenceNumber = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetAccountTransactionBySequenceNumberRequest fetchEvents.
         * @member {boolean} fetchEvents
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @instance
         */
        GetAccountTransactionBySequenceNumberRequest.prototype.fetchEvents = false;

        /**
         * Creates a new GetAccountTransactionBySequenceNumberRequest instance using the specified properties.
         * @function create
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {types.IGetAccountTransactionBySequenceNumberRequest=} [properties] Properties to set
         * @returns {types.GetAccountTransactionBySequenceNumberRequest} GetAccountTransactionBySequenceNumberRequest instance
         */
        GetAccountTransactionBySequenceNumberRequest.create = function create(properties) {
            return new GetAccountTransactionBySequenceNumberRequest(properties);
        };

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberRequest message. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberRequest.verify|verify} messages.
         * @function encode
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {types.IGetAccountTransactionBySequenceNumberRequest} message GetAccountTransactionBySequenceNumberRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountTransactionBySequenceNumberRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.account);
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.sequenceNumber);
            if (message.fetchEvents != null && message.hasOwnProperty("fetchEvents"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.fetchEvents);
            return writer;
        };

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberRequest message, length delimited. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {types.IGetAccountTransactionBySequenceNumberRequest} message GetAccountTransactionBySequenceNumberRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountTransactionBySequenceNumberRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAccountTransactionBySequenceNumberRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetAccountTransactionBySequenceNumberRequest} GetAccountTransactionBySequenceNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountTransactionBySequenceNumberRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetAccountTransactionBySequenceNumberRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.bytes();
                    break;
                case 2:
                    message.sequenceNumber = reader.uint64();
                    break;
                case 3:
                    message.fetchEvents = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAccountTransactionBySequenceNumberRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetAccountTransactionBySequenceNumberRequest} GetAccountTransactionBySequenceNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountTransactionBySequenceNumberRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAccountTransactionBySequenceNumberRequest message.
         * @function verify
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAccountTransactionBySequenceNumberRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!(message.account && typeof message.account.length === "number" || $util.isString(message.account)))
                    return "account: buffer expected";
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                if (!$util.isInteger(message.sequenceNumber) && !(message.sequenceNumber && $util.isInteger(message.sequenceNumber.low) && $util.isInteger(message.sequenceNumber.high)))
                    return "sequenceNumber: integer|Long expected";
            if (message.fetchEvents != null && message.hasOwnProperty("fetchEvents"))
                if (typeof message.fetchEvents !== "boolean")
                    return "fetchEvents: boolean expected";
            return null;
        };

        /**
         * Creates a GetAccountTransactionBySequenceNumberRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetAccountTransactionBySequenceNumberRequest} GetAccountTransactionBySequenceNumberRequest
         */
        GetAccountTransactionBySequenceNumberRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetAccountTransactionBySequenceNumberRequest)
                return object;
            var message = new $root.types.GetAccountTransactionBySequenceNumberRequest();
            if (object.account != null)
                if (typeof object.account === "string")
                    $util.base64.decode(object.account, message.account = $util.newBuffer($util.base64.length(object.account)), 0);
                else if (object.account.length)
                    message.account = object.account;
            if (object.sequenceNumber != null)
                if ($util.Long)
                    (message.sequenceNumber = $util.Long.fromValue(object.sequenceNumber)).unsigned = true;
                else if (typeof object.sequenceNumber === "string")
                    message.sequenceNumber = parseInt(object.sequenceNumber, 10);
                else if (typeof object.sequenceNumber === "number")
                    message.sequenceNumber = object.sequenceNumber;
                else if (typeof object.sequenceNumber === "object")
                    message.sequenceNumber = new $util.LongBits(object.sequenceNumber.low >>> 0, object.sequenceNumber.high >>> 0).toNumber(true);
            if (object.fetchEvents != null)
                message.fetchEvents = Boolean(object.fetchEvents);
            return message;
        };

        /**
         * Creates a plain object from a GetAccountTransactionBySequenceNumberRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @static
         * @param {types.GetAccountTransactionBySequenceNumberRequest} message GetAccountTransactionBySequenceNumberRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountTransactionBySequenceNumberRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.account = "";
                else {
                    object.account = [];
                    if (options.bytes !== Array)
                        object.account = $util.newBuffer(object.account);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sequenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequenceNumber = options.longs === String ? "0" : 0;
                object.fetchEvents = false;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = options.bytes === String ? $util.base64.encode(message.account, 0, message.account.length) : options.bytes === Array ? Array.prototype.slice.call(message.account) : message.account;
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                if (typeof message.sequenceNumber === "number")
                    object.sequenceNumber = options.longs === String ? String(message.sequenceNumber) : message.sequenceNumber;
                else
                    object.sequenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceNumber) : options.longs === Number ? new $util.LongBits(message.sequenceNumber.low >>> 0, message.sequenceNumber.high >>> 0).toNumber(true) : message.sequenceNumber;
            if (message.fetchEvents != null && message.hasOwnProperty("fetchEvents"))
                object.fetchEvents = message.fetchEvents;
            return object;
        };

        /**
         * Converts this GetAccountTransactionBySequenceNumberRequest to JSON.
         * @function toJSON
         * @memberof types.GetAccountTransactionBySequenceNumberRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountTransactionBySequenceNumberRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountTransactionBySequenceNumberRequest;
    })();

    types.GetAccountTransactionBySequenceNumberResponse = (function() {

        /**
         * Properties of a GetAccountTransactionBySequenceNumberResponse.
         * @memberof types
         * @interface IGetAccountTransactionBySequenceNumberResponse
         * @property {types.ISignedTransactionWithProof|null} [signedTransactionWithProof] GetAccountTransactionBySequenceNumberResponse signedTransactionWithProof
         * @property {types.IAccountStateWithProof|null} [proofOfCurrentSequenceNumber] GetAccountTransactionBySequenceNumberResponse proofOfCurrentSequenceNumber
         */

        /**
         * Constructs a new GetAccountTransactionBySequenceNumberResponse.
         * @memberof types
         * @classdesc Represents a GetAccountTransactionBySequenceNumberResponse.
         * @implements IGetAccountTransactionBySequenceNumberResponse
         * @constructor
         * @param {types.IGetAccountTransactionBySequenceNumberResponse=} [properties] Properties to set
         */
        function GetAccountTransactionBySequenceNumberResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAccountTransactionBySequenceNumberResponse signedTransactionWithProof.
         * @member {types.ISignedTransactionWithProof|null|undefined} signedTransactionWithProof
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @instance
         */
        GetAccountTransactionBySequenceNumberResponse.prototype.signedTransactionWithProof = null;

        /**
         * GetAccountTransactionBySequenceNumberResponse proofOfCurrentSequenceNumber.
         * @member {types.IAccountStateWithProof|null|undefined} proofOfCurrentSequenceNumber
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @instance
         */
        GetAccountTransactionBySequenceNumberResponse.prototype.proofOfCurrentSequenceNumber = null;

        /**
         * Creates a new GetAccountTransactionBySequenceNumberResponse instance using the specified properties.
         * @function create
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {types.IGetAccountTransactionBySequenceNumberResponse=} [properties] Properties to set
         * @returns {types.GetAccountTransactionBySequenceNumberResponse} GetAccountTransactionBySequenceNumberResponse instance
         */
        GetAccountTransactionBySequenceNumberResponse.create = function create(properties) {
            return new GetAccountTransactionBySequenceNumberResponse(properties);
        };

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberResponse message. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberResponse.verify|verify} messages.
         * @function encode
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {types.IGetAccountTransactionBySequenceNumberResponse} message GetAccountTransactionBySequenceNumberResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountTransactionBySequenceNumberResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signedTransactionWithProof != null && message.hasOwnProperty("signedTransactionWithProof"))
                $root.types.SignedTransactionWithProof.encode(message.signedTransactionWithProof, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.proofOfCurrentSequenceNumber != null && message.hasOwnProperty("proofOfCurrentSequenceNumber"))
                $root.types.AccountStateWithProof.encode(message.proofOfCurrentSequenceNumber, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberResponse message, length delimited. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {types.IGetAccountTransactionBySequenceNumberResponse} message GetAccountTransactionBySequenceNumberResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAccountTransactionBySequenceNumberResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAccountTransactionBySequenceNumberResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetAccountTransactionBySequenceNumberResponse} GetAccountTransactionBySequenceNumberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountTransactionBySequenceNumberResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetAccountTransactionBySequenceNumberResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.signedTransactionWithProof = $root.types.SignedTransactionWithProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.proofOfCurrentSequenceNumber = $root.types.AccountStateWithProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAccountTransactionBySequenceNumberResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetAccountTransactionBySequenceNumberResponse} GetAccountTransactionBySequenceNumberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAccountTransactionBySequenceNumberResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAccountTransactionBySequenceNumberResponse message.
         * @function verify
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAccountTransactionBySequenceNumberResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signedTransactionWithProof != null && message.hasOwnProperty("signedTransactionWithProof")) {
                var error = $root.types.SignedTransactionWithProof.verify(message.signedTransactionWithProof);
                if (error)
                    return "signedTransactionWithProof." + error;
            }
            if (message.proofOfCurrentSequenceNumber != null && message.hasOwnProperty("proofOfCurrentSequenceNumber")) {
                var error = $root.types.AccountStateWithProof.verify(message.proofOfCurrentSequenceNumber);
                if (error)
                    return "proofOfCurrentSequenceNumber." + error;
            }
            return null;
        };

        /**
         * Creates a GetAccountTransactionBySequenceNumberResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetAccountTransactionBySequenceNumberResponse} GetAccountTransactionBySequenceNumberResponse
         */
        GetAccountTransactionBySequenceNumberResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetAccountTransactionBySequenceNumberResponse)
                return object;
            var message = new $root.types.GetAccountTransactionBySequenceNumberResponse();
            if (object.signedTransactionWithProof != null) {
                if (typeof object.signedTransactionWithProof !== "object")
                    throw TypeError(".types.GetAccountTransactionBySequenceNumberResponse.signedTransactionWithProof: object expected");
                message.signedTransactionWithProof = $root.types.SignedTransactionWithProof.fromObject(object.signedTransactionWithProof);
            }
            if (object.proofOfCurrentSequenceNumber != null) {
                if (typeof object.proofOfCurrentSequenceNumber !== "object")
                    throw TypeError(".types.GetAccountTransactionBySequenceNumberResponse.proofOfCurrentSequenceNumber: object expected");
                message.proofOfCurrentSequenceNumber = $root.types.AccountStateWithProof.fromObject(object.proofOfCurrentSequenceNumber);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAccountTransactionBySequenceNumberResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @static
         * @param {types.GetAccountTransactionBySequenceNumberResponse} message GetAccountTransactionBySequenceNumberResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAccountTransactionBySequenceNumberResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.signedTransactionWithProof = null;
                object.proofOfCurrentSequenceNumber = null;
            }
            if (message.signedTransactionWithProof != null && message.hasOwnProperty("signedTransactionWithProof"))
                object.signedTransactionWithProof = $root.types.SignedTransactionWithProof.toObject(message.signedTransactionWithProof, options);
            if (message.proofOfCurrentSequenceNumber != null && message.hasOwnProperty("proofOfCurrentSequenceNumber"))
                object.proofOfCurrentSequenceNumber = $root.types.AccountStateWithProof.toObject(message.proofOfCurrentSequenceNumber, options);
            return object;
        };

        /**
         * Converts this GetAccountTransactionBySequenceNumberResponse to JSON.
         * @function toJSON
         * @memberof types.GetAccountTransactionBySequenceNumberResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAccountTransactionBySequenceNumberResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetAccountTransactionBySequenceNumberResponse;
    })();

    types.GetEventsByEventAccessPathRequest = (function() {

        /**
         * Properties of a GetEventsByEventAccessPathRequest.
         * @memberof types
         * @interface IGetEventsByEventAccessPathRequest
         * @property {types.IAccessPath|null} [accessPath] GetEventsByEventAccessPathRequest accessPath
         * @property {number|Long|null} [startEventSeqNum] GetEventsByEventAccessPathRequest startEventSeqNum
         * @property {boolean|null} [ascending] GetEventsByEventAccessPathRequest ascending
         * @property {number|Long|null} [limit] GetEventsByEventAccessPathRequest limit
         */

        /**
         * Constructs a new GetEventsByEventAccessPathRequest.
         * @memberof types
         * @classdesc Represents a GetEventsByEventAccessPathRequest.
         * @implements IGetEventsByEventAccessPathRequest
         * @constructor
         * @param {types.IGetEventsByEventAccessPathRequest=} [properties] Properties to set
         */
        function GetEventsByEventAccessPathRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetEventsByEventAccessPathRequest accessPath.
         * @member {types.IAccessPath|null|undefined} accessPath
         * @memberof types.GetEventsByEventAccessPathRequest
         * @instance
         */
        GetEventsByEventAccessPathRequest.prototype.accessPath = null;

        /**
         * GetEventsByEventAccessPathRequest startEventSeqNum.
         * @member {number|Long} startEventSeqNum
         * @memberof types.GetEventsByEventAccessPathRequest
         * @instance
         */
        GetEventsByEventAccessPathRequest.prototype.startEventSeqNum = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetEventsByEventAccessPathRequest ascending.
         * @member {boolean} ascending
         * @memberof types.GetEventsByEventAccessPathRequest
         * @instance
         */
        GetEventsByEventAccessPathRequest.prototype.ascending = false;

        /**
         * GetEventsByEventAccessPathRequest limit.
         * @member {number|Long} limit
         * @memberof types.GetEventsByEventAccessPathRequest
         * @instance
         */
        GetEventsByEventAccessPathRequest.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GetEventsByEventAccessPathRequest instance using the specified properties.
         * @function create
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {types.IGetEventsByEventAccessPathRequest=} [properties] Properties to set
         * @returns {types.GetEventsByEventAccessPathRequest} GetEventsByEventAccessPathRequest instance
         */
        GetEventsByEventAccessPathRequest.create = function create(properties) {
            return new GetEventsByEventAccessPathRequest(properties);
        };

        /**
         * Encodes the specified GetEventsByEventAccessPathRequest message. Does not implicitly {@link types.GetEventsByEventAccessPathRequest.verify|verify} messages.
         * @function encode
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {types.IGetEventsByEventAccessPathRequest} message GetEventsByEventAccessPathRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEventsByEventAccessPathRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accessPath != null && message.hasOwnProperty("accessPath"))
                $root.types.AccessPath.encode(message.accessPath, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.startEventSeqNum != null && message.hasOwnProperty("startEventSeqNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.startEventSeqNum);
            if (message.ascending != null && message.hasOwnProperty("ascending"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ascending);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.limit);
            return writer;
        };

        /**
         * Encodes the specified GetEventsByEventAccessPathRequest message, length delimited. Does not implicitly {@link types.GetEventsByEventAccessPathRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {types.IGetEventsByEventAccessPathRequest} message GetEventsByEventAccessPathRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEventsByEventAccessPathRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetEventsByEventAccessPathRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetEventsByEventAccessPathRequest} GetEventsByEventAccessPathRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEventsByEventAccessPathRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetEventsByEventAccessPathRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accessPath = $root.types.AccessPath.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startEventSeqNum = reader.uint64();
                    break;
                case 3:
                    message.ascending = reader.bool();
                    break;
                case 4:
                    message.limit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetEventsByEventAccessPathRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetEventsByEventAccessPathRequest} GetEventsByEventAccessPathRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEventsByEventAccessPathRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetEventsByEventAccessPathRequest message.
         * @function verify
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetEventsByEventAccessPathRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accessPath != null && message.hasOwnProperty("accessPath")) {
                var error = $root.types.AccessPath.verify(message.accessPath);
                if (error)
                    return "accessPath." + error;
            }
            if (message.startEventSeqNum != null && message.hasOwnProperty("startEventSeqNum"))
                if (!$util.isInteger(message.startEventSeqNum) && !(message.startEventSeqNum && $util.isInteger(message.startEventSeqNum.low) && $util.isInteger(message.startEventSeqNum.high)))
                    return "startEventSeqNum: integer|Long expected";
            if (message.ascending != null && message.hasOwnProperty("ascending"))
                if (typeof message.ascending !== "boolean")
                    return "ascending: boolean expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                    return "limit: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetEventsByEventAccessPathRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetEventsByEventAccessPathRequest} GetEventsByEventAccessPathRequest
         */
        GetEventsByEventAccessPathRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetEventsByEventAccessPathRequest)
                return object;
            var message = new $root.types.GetEventsByEventAccessPathRequest();
            if (object.accessPath != null) {
                if (typeof object.accessPath !== "object")
                    throw TypeError(".types.GetEventsByEventAccessPathRequest.accessPath: object expected");
                message.accessPath = $root.types.AccessPath.fromObject(object.accessPath);
            }
            if (object.startEventSeqNum != null)
                if ($util.Long)
                    (message.startEventSeqNum = $util.Long.fromValue(object.startEventSeqNum)).unsigned = true;
                else if (typeof object.startEventSeqNum === "string")
                    message.startEventSeqNum = parseInt(object.startEventSeqNum, 10);
                else if (typeof object.startEventSeqNum === "number")
                    message.startEventSeqNum = object.startEventSeqNum;
                else if (typeof object.startEventSeqNum === "object")
                    message.startEventSeqNum = new $util.LongBits(object.startEventSeqNum.low >>> 0, object.startEventSeqNum.high >>> 0).toNumber(true);
            if (object.ascending != null)
                message.ascending = Boolean(object.ascending);
            if (object.limit != null)
                if ($util.Long)
                    (message.limit = $util.Long.fromValue(object.limit)).unsigned = true;
                else if (typeof object.limit === "string")
                    message.limit = parseInt(object.limit, 10);
                else if (typeof object.limit === "number")
                    message.limit = object.limit;
                else if (typeof object.limit === "object")
                    message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GetEventsByEventAccessPathRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetEventsByEventAccessPathRequest
         * @static
         * @param {types.GetEventsByEventAccessPathRequest} message GetEventsByEventAccessPathRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetEventsByEventAccessPathRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accessPath = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.startEventSeqNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startEventSeqNum = options.longs === String ? "0" : 0;
                object.ascending = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.limit = options.longs === String ? "0" : 0;
            }
            if (message.accessPath != null && message.hasOwnProperty("accessPath"))
                object.accessPath = $root.types.AccessPath.toObject(message.accessPath, options);
            if (message.startEventSeqNum != null && message.hasOwnProperty("startEventSeqNum"))
                if (typeof message.startEventSeqNum === "number")
                    object.startEventSeqNum = options.longs === String ? String(message.startEventSeqNum) : message.startEventSeqNum;
                else
                    object.startEventSeqNum = options.longs === String ? $util.Long.prototype.toString.call(message.startEventSeqNum) : options.longs === Number ? new $util.LongBits(message.startEventSeqNum.low >>> 0, message.startEventSeqNum.high >>> 0).toNumber(true) : message.startEventSeqNum;
            if (message.ascending != null && message.hasOwnProperty("ascending"))
                object.ascending = message.ascending;
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (typeof message.limit === "number")
                    object.limit = options.longs === String ? String(message.limit) : message.limit;
                else
                    object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber(true) : message.limit;
            return object;
        };

        /**
         * Converts this GetEventsByEventAccessPathRequest to JSON.
         * @function toJSON
         * @memberof types.GetEventsByEventAccessPathRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetEventsByEventAccessPathRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetEventsByEventAccessPathRequest;
    })();

    types.GetEventsByEventAccessPathResponse = (function() {

        /**
         * Properties of a GetEventsByEventAccessPathResponse.
         * @memberof types
         * @interface IGetEventsByEventAccessPathResponse
         * @property {Array.<types.IEventWithProof>|null} [eventsWithProof] GetEventsByEventAccessPathResponse eventsWithProof
         * @property {types.IAccountStateWithProof|null} [proofOfLatestEvent] GetEventsByEventAccessPathResponse proofOfLatestEvent
         */

        /**
         * Constructs a new GetEventsByEventAccessPathResponse.
         * @memberof types
         * @classdesc Represents a GetEventsByEventAccessPathResponse.
         * @implements IGetEventsByEventAccessPathResponse
         * @constructor
         * @param {types.IGetEventsByEventAccessPathResponse=} [properties] Properties to set
         */
        function GetEventsByEventAccessPathResponse(properties) {
            this.eventsWithProof = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetEventsByEventAccessPathResponse eventsWithProof.
         * @member {Array.<types.IEventWithProof>} eventsWithProof
         * @memberof types.GetEventsByEventAccessPathResponse
         * @instance
         */
        GetEventsByEventAccessPathResponse.prototype.eventsWithProof = $util.emptyArray;

        /**
         * GetEventsByEventAccessPathResponse proofOfLatestEvent.
         * @member {types.IAccountStateWithProof|null|undefined} proofOfLatestEvent
         * @memberof types.GetEventsByEventAccessPathResponse
         * @instance
         */
        GetEventsByEventAccessPathResponse.prototype.proofOfLatestEvent = null;

        /**
         * Creates a new GetEventsByEventAccessPathResponse instance using the specified properties.
         * @function create
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {types.IGetEventsByEventAccessPathResponse=} [properties] Properties to set
         * @returns {types.GetEventsByEventAccessPathResponse} GetEventsByEventAccessPathResponse instance
         */
        GetEventsByEventAccessPathResponse.create = function create(properties) {
            return new GetEventsByEventAccessPathResponse(properties);
        };

        /**
         * Encodes the specified GetEventsByEventAccessPathResponse message. Does not implicitly {@link types.GetEventsByEventAccessPathResponse.verify|verify} messages.
         * @function encode
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {types.IGetEventsByEventAccessPathResponse} message GetEventsByEventAccessPathResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEventsByEventAccessPathResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventsWithProof != null && message.eventsWithProof.length)
                for (var i = 0; i < message.eventsWithProof.length; ++i)
                    $root.types.EventWithProof.encode(message.eventsWithProof[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.proofOfLatestEvent != null && message.hasOwnProperty("proofOfLatestEvent"))
                $root.types.AccountStateWithProof.encode(message.proofOfLatestEvent, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetEventsByEventAccessPathResponse message, length delimited. Does not implicitly {@link types.GetEventsByEventAccessPathResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {types.IGetEventsByEventAccessPathResponse} message GetEventsByEventAccessPathResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEventsByEventAccessPathResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetEventsByEventAccessPathResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetEventsByEventAccessPathResponse} GetEventsByEventAccessPathResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEventsByEventAccessPathResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetEventsByEventAccessPathResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.eventsWithProof && message.eventsWithProof.length))
                        message.eventsWithProof = [];
                    message.eventsWithProof.push($root.types.EventWithProof.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proofOfLatestEvent = $root.types.AccountStateWithProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetEventsByEventAccessPathResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetEventsByEventAccessPathResponse} GetEventsByEventAccessPathResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEventsByEventAccessPathResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetEventsByEventAccessPathResponse message.
         * @function verify
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetEventsByEventAccessPathResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventsWithProof != null && message.hasOwnProperty("eventsWithProof")) {
                if (!Array.isArray(message.eventsWithProof))
                    return "eventsWithProof: array expected";
                for (var i = 0; i < message.eventsWithProof.length; ++i) {
                    var error = $root.types.EventWithProof.verify(message.eventsWithProof[i]);
                    if (error)
                        return "eventsWithProof." + error;
                }
            }
            if (message.proofOfLatestEvent != null && message.hasOwnProperty("proofOfLatestEvent")) {
                var error = $root.types.AccountStateWithProof.verify(message.proofOfLatestEvent);
                if (error)
                    return "proofOfLatestEvent." + error;
            }
            return null;
        };

        /**
         * Creates a GetEventsByEventAccessPathResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetEventsByEventAccessPathResponse} GetEventsByEventAccessPathResponse
         */
        GetEventsByEventAccessPathResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetEventsByEventAccessPathResponse)
                return object;
            var message = new $root.types.GetEventsByEventAccessPathResponse();
            if (object.eventsWithProof) {
                if (!Array.isArray(object.eventsWithProof))
                    throw TypeError(".types.GetEventsByEventAccessPathResponse.eventsWithProof: array expected");
                message.eventsWithProof = [];
                for (var i = 0; i < object.eventsWithProof.length; ++i) {
                    if (typeof object.eventsWithProof[i] !== "object")
                        throw TypeError(".types.GetEventsByEventAccessPathResponse.eventsWithProof: object expected");
                    message.eventsWithProof[i] = $root.types.EventWithProof.fromObject(object.eventsWithProof[i]);
                }
            }
            if (object.proofOfLatestEvent != null) {
                if (typeof object.proofOfLatestEvent !== "object")
                    throw TypeError(".types.GetEventsByEventAccessPathResponse.proofOfLatestEvent: object expected");
                message.proofOfLatestEvent = $root.types.AccountStateWithProof.fromObject(object.proofOfLatestEvent);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetEventsByEventAccessPathResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetEventsByEventAccessPathResponse
         * @static
         * @param {types.GetEventsByEventAccessPathResponse} message GetEventsByEventAccessPathResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetEventsByEventAccessPathResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.eventsWithProof = [];
            if (options.defaults)
                object.proofOfLatestEvent = null;
            if (message.eventsWithProof && message.eventsWithProof.length) {
                object.eventsWithProof = [];
                for (var j = 0; j < message.eventsWithProof.length; ++j)
                    object.eventsWithProof[j] = $root.types.EventWithProof.toObject(message.eventsWithProof[j], options);
            }
            if (message.proofOfLatestEvent != null && message.hasOwnProperty("proofOfLatestEvent"))
                object.proofOfLatestEvent = $root.types.AccountStateWithProof.toObject(message.proofOfLatestEvent, options);
            return object;
        };

        /**
         * Converts this GetEventsByEventAccessPathResponse to JSON.
         * @function toJSON
         * @memberof types.GetEventsByEventAccessPathResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetEventsByEventAccessPathResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetEventsByEventAccessPathResponse;
    })();

    types.GetTransactionsRequest = (function() {

        /**
         * Properties of a GetTransactionsRequest.
         * @memberof types
         * @interface IGetTransactionsRequest
         * @property {number|Long|null} [startVersion] GetTransactionsRequest startVersion
         * @property {number|Long|null} [limit] GetTransactionsRequest limit
         * @property {boolean|null} [fetchEvents] GetTransactionsRequest fetchEvents
         */

        /**
         * Constructs a new GetTransactionsRequest.
         * @memberof types
         * @classdesc Represents a GetTransactionsRequest.
         * @implements IGetTransactionsRequest
         * @constructor
         * @param {types.IGetTransactionsRequest=} [properties] Properties to set
         */
        function GetTransactionsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTransactionsRequest startVersion.
         * @member {number|Long} startVersion
         * @memberof types.GetTransactionsRequest
         * @instance
         */
        GetTransactionsRequest.prototype.startVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetTransactionsRequest limit.
         * @member {number|Long} limit
         * @memberof types.GetTransactionsRequest
         * @instance
         */
        GetTransactionsRequest.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetTransactionsRequest fetchEvents.
         * @member {boolean} fetchEvents
         * @memberof types.GetTransactionsRequest
         * @instance
         */
        GetTransactionsRequest.prototype.fetchEvents = false;

        /**
         * Creates a new GetTransactionsRequest instance using the specified properties.
         * @function create
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {types.IGetTransactionsRequest=} [properties] Properties to set
         * @returns {types.GetTransactionsRequest} GetTransactionsRequest instance
         */
        GetTransactionsRequest.create = function create(properties) {
            return new GetTransactionsRequest(properties);
        };

        /**
         * Encodes the specified GetTransactionsRequest message. Does not implicitly {@link types.GetTransactionsRequest.verify|verify} messages.
         * @function encode
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {types.IGetTransactionsRequest} message GetTransactionsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTransactionsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startVersion != null && message.hasOwnProperty("startVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startVersion);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.limit);
            if (message.fetchEvents != null && message.hasOwnProperty("fetchEvents"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.fetchEvents);
            return writer;
        };

        /**
         * Encodes the specified GetTransactionsRequest message, length delimited. Does not implicitly {@link types.GetTransactionsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {types.IGetTransactionsRequest} message GetTransactionsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTransactionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTransactionsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetTransactionsRequest} GetTransactionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTransactionsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetTransactionsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.startVersion = reader.uint64();
                    break;
                case 2:
                    message.limit = reader.uint64();
                    break;
                case 3:
                    message.fetchEvents = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTransactionsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetTransactionsRequest} GetTransactionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTransactionsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTransactionsRequest message.
         * @function verify
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTransactionsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startVersion != null && message.hasOwnProperty("startVersion"))
                if (!$util.isInteger(message.startVersion) && !(message.startVersion && $util.isInteger(message.startVersion.low) && $util.isInteger(message.startVersion.high)))
                    return "startVersion: integer|Long expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                    return "limit: integer|Long expected";
            if (message.fetchEvents != null && message.hasOwnProperty("fetchEvents"))
                if (typeof message.fetchEvents !== "boolean")
                    return "fetchEvents: boolean expected";
            return null;
        };

        /**
         * Creates a GetTransactionsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetTransactionsRequest} GetTransactionsRequest
         */
        GetTransactionsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetTransactionsRequest)
                return object;
            var message = new $root.types.GetTransactionsRequest();
            if (object.startVersion != null)
                if ($util.Long)
                    (message.startVersion = $util.Long.fromValue(object.startVersion)).unsigned = true;
                else if (typeof object.startVersion === "string")
                    message.startVersion = parseInt(object.startVersion, 10);
                else if (typeof object.startVersion === "number")
                    message.startVersion = object.startVersion;
                else if (typeof object.startVersion === "object")
                    message.startVersion = new $util.LongBits(object.startVersion.low >>> 0, object.startVersion.high >>> 0).toNumber(true);
            if (object.limit != null)
                if ($util.Long)
                    (message.limit = $util.Long.fromValue(object.limit)).unsigned = true;
                else if (typeof object.limit === "string")
                    message.limit = parseInt(object.limit, 10);
                else if (typeof object.limit === "number")
                    message.limit = object.limit;
                else if (typeof object.limit === "object")
                    message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber(true);
            if (object.fetchEvents != null)
                message.fetchEvents = Boolean(object.fetchEvents);
            return message;
        };

        /**
         * Creates a plain object from a GetTransactionsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetTransactionsRequest
         * @static
         * @param {types.GetTransactionsRequest} message GetTransactionsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTransactionsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.startVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startVersion = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.limit = options.longs === String ? "0" : 0;
                object.fetchEvents = false;
            }
            if (message.startVersion != null && message.hasOwnProperty("startVersion"))
                if (typeof message.startVersion === "number")
                    object.startVersion = options.longs === String ? String(message.startVersion) : message.startVersion;
                else
                    object.startVersion = options.longs === String ? $util.Long.prototype.toString.call(message.startVersion) : options.longs === Number ? new $util.LongBits(message.startVersion.low >>> 0, message.startVersion.high >>> 0).toNumber(true) : message.startVersion;
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (typeof message.limit === "number")
                    object.limit = options.longs === String ? String(message.limit) : message.limit;
                else
                    object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber(true) : message.limit;
            if (message.fetchEvents != null && message.hasOwnProperty("fetchEvents"))
                object.fetchEvents = message.fetchEvents;
            return object;
        };

        /**
         * Converts this GetTransactionsRequest to JSON.
         * @function toJSON
         * @memberof types.GetTransactionsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTransactionsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTransactionsRequest;
    })();

    types.GetTransactionsResponse = (function() {

        /**
         * Properties of a GetTransactionsResponse.
         * @memberof types
         * @interface IGetTransactionsResponse
         * @property {types.ITransactionListWithProof|null} [txnListWithProof] GetTransactionsResponse txnListWithProof
         */

        /**
         * Constructs a new GetTransactionsResponse.
         * @memberof types
         * @classdesc Represents a GetTransactionsResponse.
         * @implements IGetTransactionsResponse
         * @constructor
         * @param {types.IGetTransactionsResponse=} [properties] Properties to set
         */
        function GetTransactionsResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTransactionsResponse txnListWithProof.
         * @member {types.ITransactionListWithProof|null|undefined} txnListWithProof
         * @memberof types.GetTransactionsResponse
         * @instance
         */
        GetTransactionsResponse.prototype.txnListWithProof = null;

        /**
         * Creates a new GetTransactionsResponse instance using the specified properties.
         * @function create
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {types.IGetTransactionsResponse=} [properties] Properties to set
         * @returns {types.GetTransactionsResponse} GetTransactionsResponse instance
         */
        GetTransactionsResponse.create = function create(properties) {
            return new GetTransactionsResponse(properties);
        };

        /**
         * Encodes the specified GetTransactionsResponse message. Does not implicitly {@link types.GetTransactionsResponse.verify|verify} messages.
         * @function encode
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {types.IGetTransactionsResponse} message GetTransactionsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTransactionsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.txnListWithProof != null && message.hasOwnProperty("txnListWithProof"))
                $root.types.TransactionListWithProof.encode(message.txnListWithProof, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetTransactionsResponse message, length delimited. Does not implicitly {@link types.GetTransactionsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {types.IGetTransactionsResponse} message GetTransactionsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTransactionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetTransactionsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GetTransactionsResponse} GetTransactionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTransactionsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GetTransactionsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.txnListWithProof = $root.types.TransactionListWithProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetTransactionsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GetTransactionsResponse} GetTransactionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTransactionsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetTransactionsResponse message.
         * @function verify
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetTransactionsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.txnListWithProof != null && message.hasOwnProperty("txnListWithProof")) {
                var error = $root.types.TransactionListWithProof.verify(message.txnListWithProof);
                if (error)
                    return "txnListWithProof." + error;
            }
            return null;
        };

        /**
         * Creates a GetTransactionsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GetTransactionsResponse} GetTransactionsResponse
         */
        GetTransactionsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GetTransactionsResponse)
                return object;
            var message = new $root.types.GetTransactionsResponse();
            if (object.txnListWithProof != null) {
                if (typeof object.txnListWithProof !== "object")
                    throw TypeError(".types.GetTransactionsResponse.txnListWithProof: object expected");
                message.txnListWithProof = $root.types.TransactionListWithProof.fromObject(object.txnListWithProof);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTransactionsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GetTransactionsResponse
         * @static
         * @param {types.GetTransactionsResponse} message GetTransactionsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTransactionsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.txnListWithProof = null;
            if (message.txnListWithProof != null && message.hasOwnProperty("txnListWithProof"))
                object.txnListWithProof = $root.types.TransactionListWithProof.toObject(message.txnListWithProof, options);
            return object;
        };

        /**
         * Converts this GetTransactionsResponse to JSON.
         * @function toJSON
         * @memberof types.GetTransactionsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTransactionsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTransactionsResponse;
    })();

    types.AccessPath = (function() {

        /**
         * Properties of an AccessPath.
         * @memberof types
         * @interface IAccessPath
         * @property {Uint8Array|null} [address] AccessPath address
         * @property {Uint8Array|null} [path] AccessPath path
         */

        /**
         * Constructs a new AccessPath.
         * @memberof types
         * @classdesc Represents an AccessPath.
         * @implements IAccessPath
         * @constructor
         * @param {types.IAccessPath=} [properties] Properties to set
         */
        function AccessPath(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessPath address.
         * @member {Uint8Array} address
         * @memberof types.AccessPath
         * @instance
         */
        AccessPath.prototype.address = $util.newBuffer([]);

        /**
         * AccessPath path.
         * @member {Uint8Array} path
         * @memberof types.AccessPath
         * @instance
         */
        AccessPath.prototype.path = $util.newBuffer([]);

        /**
         * Creates a new AccessPath instance using the specified properties.
         * @function create
         * @memberof types.AccessPath
         * @static
         * @param {types.IAccessPath=} [properties] Properties to set
         * @returns {types.AccessPath} AccessPath instance
         */
        AccessPath.create = function create(properties) {
            return new AccessPath(properties);
        };

        /**
         * Encodes the specified AccessPath message. Does not implicitly {@link types.AccessPath.verify|verify} messages.
         * @function encode
         * @memberof types.AccessPath
         * @static
         * @param {types.IAccessPath} message AccessPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessPath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.path);
            return writer;
        };

        /**
         * Encodes the specified AccessPath message, length delimited. Does not implicitly {@link types.AccessPath.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AccessPath
         * @static
         * @param {types.IAccessPath} message AccessPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessPath.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessPath message from the specified reader or buffer.
         * @function decode
         * @memberof types.AccessPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AccessPath} AccessPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessPath.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AccessPath();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.path = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessPath message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AccessPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AccessPath} AccessPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessPath.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessPath message.
         * @function verify
         * @memberof types.AccessPath
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessPath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!(message.path && typeof message.path.length === "number" || $util.isString(message.path)))
                    return "path: buffer expected";
            return null;
        };

        /**
         * Creates an AccessPath message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AccessPath
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AccessPath} AccessPath
         */
        AccessPath.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AccessPath)
                return object;
            var message = new $root.types.AccessPath();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.path != null)
                if (typeof object.path === "string")
                    $util.base64.decode(object.path, message.path = $util.newBuffer($util.base64.length(object.path)), 0);
                else if (object.path.length)
                    message.path = object.path;
            return message;
        };

        /**
         * Creates a plain object from an AccessPath message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AccessPath
         * @static
         * @param {types.AccessPath} message AccessPath
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessPath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                if (options.bytes === String)
                    object.path = "";
                else {
                    object.path = [];
                    if (options.bytes !== Array)
                        object.path = $util.newBuffer(object.path);
                }
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = options.bytes === String ? $util.base64.encode(message.path, 0, message.path.length) : options.bytes === Array ? Array.prototype.slice.call(message.path) : message.path;
            return object;
        };

        /**
         * Converts this AccessPath to JSON.
         * @function toJSON
         * @memberof types.AccessPath
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessPath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccessPath;
    })();

    types.AccountStateBlob = (function() {

        /**
         * Properties of an AccountStateBlob.
         * @memberof types
         * @interface IAccountStateBlob
         * @property {Uint8Array|null} [blob] AccountStateBlob blob
         */

        /**
         * Constructs a new AccountStateBlob.
         * @memberof types
         * @classdesc Represents an AccountStateBlob.
         * @implements IAccountStateBlob
         * @constructor
         * @param {types.IAccountStateBlob=} [properties] Properties to set
         */
        function AccountStateBlob(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountStateBlob blob.
         * @member {Uint8Array} blob
         * @memberof types.AccountStateBlob
         * @instance
         */
        AccountStateBlob.prototype.blob = $util.newBuffer([]);

        /**
         * Creates a new AccountStateBlob instance using the specified properties.
         * @function create
         * @memberof types.AccountStateBlob
         * @static
         * @param {types.IAccountStateBlob=} [properties] Properties to set
         * @returns {types.AccountStateBlob} AccountStateBlob instance
         */
        AccountStateBlob.create = function create(properties) {
            return new AccountStateBlob(properties);
        };

        /**
         * Encodes the specified AccountStateBlob message. Does not implicitly {@link types.AccountStateBlob.verify|verify} messages.
         * @function encode
         * @memberof types.AccountStateBlob
         * @static
         * @param {types.IAccountStateBlob} message AccountStateBlob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountStateBlob.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blob != null && message.hasOwnProperty("blob"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.blob);
            return writer;
        };

        /**
         * Encodes the specified AccountStateBlob message, length delimited. Does not implicitly {@link types.AccountStateBlob.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AccountStateBlob
         * @static
         * @param {types.IAccountStateBlob} message AccountStateBlob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountStateBlob.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountStateBlob message from the specified reader or buffer.
         * @function decode
         * @memberof types.AccountStateBlob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AccountStateBlob} AccountStateBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountStateBlob.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AccountStateBlob();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.blob = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountStateBlob message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AccountStateBlob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AccountStateBlob} AccountStateBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountStateBlob.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountStateBlob message.
         * @function verify
         * @memberof types.AccountStateBlob
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountStateBlob.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blob != null && message.hasOwnProperty("blob"))
                if (!(message.blob && typeof message.blob.length === "number" || $util.isString(message.blob)))
                    return "blob: buffer expected";
            return null;
        };

        /**
         * Creates an AccountStateBlob message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AccountStateBlob
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AccountStateBlob} AccountStateBlob
         */
        AccountStateBlob.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AccountStateBlob)
                return object;
            var message = new $root.types.AccountStateBlob();
            if (object.blob != null)
                if (typeof object.blob === "string")
                    $util.base64.decode(object.blob, message.blob = $util.newBuffer($util.base64.length(object.blob)), 0);
                else if (object.blob.length)
                    message.blob = object.blob;
            return message;
        };

        /**
         * Creates a plain object from an AccountStateBlob message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AccountStateBlob
         * @static
         * @param {types.AccountStateBlob} message AccountStateBlob
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountStateBlob.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.blob = "";
                else {
                    object.blob = [];
                    if (options.bytes !== Array)
                        object.blob = $util.newBuffer(object.blob);
                }
            if (message.blob != null && message.hasOwnProperty("blob"))
                object.blob = options.bytes === String ? $util.base64.encode(message.blob, 0, message.blob.length) : options.bytes === Array ? Array.prototype.slice.call(message.blob) : message.blob;
            return object;
        };

        /**
         * Converts this AccountStateBlob to JSON.
         * @function toJSON
         * @memberof types.AccountStateBlob
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountStateBlob.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountStateBlob;
    })();

    types.AccountStateWithProof = (function() {

        /**
         * Properties of an AccountStateWithProof.
         * @memberof types
         * @interface IAccountStateWithProof
         * @property {number|Long|null} [version] AccountStateWithProof version
         * @property {types.IAccountStateBlob|null} [blob] AccountStateWithProof blob
         * @property {types.IAccountStateProof|null} [proof] AccountStateWithProof proof
         */

        /**
         * Constructs a new AccountStateWithProof.
         * @memberof types
         * @classdesc Represents an AccountStateWithProof.
         * @implements IAccountStateWithProof
         * @constructor
         * @param {types.IAccountStateWithProof=} [properties] Properties to set
         */
        function AccountStateWithProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountStateWithProof version.
         * @member {number|Long} version
         * @memberof types.AccountStateWithProof
         * @instance
         */
        AccountStateWithProof.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AccountStateWithProof blob.
         * @member {types.IAccountStateBlob|null|undefined} blob
         * @memberof types.AccountStateWithProof
         * @instance
         */
        AccountStateWithProof.prototype.blob = null;

        /**
         * AccountStateWithProof proof.
         * @member {types.IAccountStateProof|null|undefined} proof
         * @memberof types.AccountStateWithProof
         * @instance
         */
        AccountStateWithProof.prototype.proof = null;

        /**
         * Creates a new AccountStateWithProof instance using the specified properties.
         * @function create
         * @memberof types.AccountStateWithProof
         * @static
         * @param {types.IAccountStateWithProof=} [properties] Properties to set
         * @returns {types.AccountStateWithProof} AccountStateWithProof instance
         */
        AccountStateWithProof.create = function create(properties) {
            return new AccountStateWithProof(properties);
        };

        /**
         * Encodes the specified AccountStateWithProof message. Does not implicitly {@link types.AccountStateWithProof.verify|verify} messages.
         * @function encode
         * @memberof types.AccountStateWithProof
         * @static
         * @param {types.IAccountStateWithProof} message AccountStateWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountStateWithProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.blob != null && message.hasOwnProperty("blob"))
                $root.types.AccountStateBlob.encode(message.blob, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.proof != null && message.hasOwnProperty("proof"))
                $root.types.AccountStateProof.encode(message.proof, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccountStateWithProof message, length delimited. Does not implicitly {@link types.AccountStateWithProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AccountStateWithProof
         * @static
         * @param {types.IAccountStateWithProof} message AccountStateWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountStateWithProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountStateWithProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.AccountStateWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AccountStateWithProof} AccountStateWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountStateWithProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AccountStateWithProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint64();
                    break;
                case 2:
                    message.blob = $root.types.AccountStateBlob.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.proof = $root.types.AccountStateProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountStateWithProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AccountStateWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AccountStateWithProof} AccountStateWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountStateWithProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountStateWithProof message.
         * @function verify
         * @memberof types.AccountStateWithProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountStateWithProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.blob != null && message.hasOwnProperty("blob")) {
                var error = $root.types.AccountStateBlob.verify(message.blob);
                if (error)
                    return "blob." + error;
            }
            if (message.proof != null && message.hasOwnProperty("proof")) {
                var error = $root.types.AccountStateProof.verify(message.proof);
                if (error)
                    return "proof." + error;
            }
            return null;
        };

        /**
         * Creates an AccountStateWithProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AccountStateWithProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AccountStateWithProof} AccountStateWithProof
         */
        AccountStateWithProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AccountStateWithProof)
                return object;
            var message = new $root.types.AccountStateWithProof();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.blob != null) {
                if (typeof object.blob !== "object")
                    throw TypeError(".types.AccountStateWithProof.blob: object expected");
                message.blob = $root.types.AccountStateBlob.fromObject(object.blob);
            }
            if (object.proof != null) {
                if (typeof object.proof !== "object")
                    throw TypeError(".types.AccountStateWithProof.proof: object expected");
                message.proof = $root.types.AccountStateProof.fromObject(object.proof);
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountStateWithProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AccountStateWithProof
         * @static
         * @param {types.AccountStateWithProof} message AccountStateWithProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountStateWithProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.blob = null;
                object.proof = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.blob != null && message.hasOwnProperty("blob"))
                object.blob = $root.types.AccountStateBlob.toObject(message.blob, options);
            if (message.proof != null && message.hasOwnProperty("proof"))
                object.proof = $root.types.AccountStateProof.toObject(message.proof, options);
            return object;
        };

        /**
         * Converts this AccountStateWithProof to JSON.
         * @function toJSON
         * @memberof types.AccountStateWithProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountStateWithProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountStateWithProof;
    })();

    types.AccumulatorProof = (function() {

        /**
         * Properties of an AccumulatorProof.
         * @memberof types
         * @interface IAccumulatorProof
         * @property {number|Long|null} [bitmap] AccumulatorProof bitmap
         * @property {Array.<Uint8Array>|null} [nonDefaultSiblings] AccumulatorProof nonDefaultSiblings
         */

        /**
         * Constructs a new AccumulatorProof.
         * @memberof types
         * @classdesc Represents an AccumulatorProof.
         * @implements IAccumulatorProof
         * @constructor
         * @param {types.IAccumulatorProof=} [properties] Properties to set
         */
        function AccumulatorProof(properties) {
            this.nonDefaultSiblings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccumulatorProof bitmap.
         * @member {number|Long} bitmap
         * @memberof types.AccumulatorProof
         * @instance
         */
        AccumulatorProof.prototype.bitmap = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AccumulatorProof nonDefaultSiblings.
         * @member {Array.<Uint8Array>} nonDefaultSiblings
         * @memberof types.AccumulatorProof
         * @instance
         */
        AccumulatorProof.prototype.nonDefaultSiblings = $util.emptyArray;

        /**
         * Creates a new AccumulatorProof instance using the specified properties.
         * @function create
         * @memberof types.AccumulatorProof
         * @static
         * @param {types.IAccumulatorProof=} [properties] Properties to set
         * @returns {types.AccumulatorProof} AccumulatorProof instance
         */
        AccumulatorProof.create = function create(properties) {
            return new AccumulatorProof(properties);
        };

        /**
         * Encodes the specified AccumulatorProof message. Does not implicitly {@link types.AccumulatorProof.verify|verify} messages.
         * @function encode
         * @memberof types.AccumulatorProof
         * @static
         * @param {types.IAccumulatorProof} message AccumulatorProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccumulatorProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bitmap);
            if (message.nonDefaultSiblings != null && message.nonDefaultSiblings.length)
                for (var i = 0; i < message.nonDefaultSiblings.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nonDefaultSiblings[i]);
            return writer;
        };

        /**
         * Encodes the specified AccumulatorProof message, length delimited. Does not implicitly {@link types.AccumulatorProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AccumulatorProof
         * @static
         * @param {types.IAccumulatorProof} message AccumulatorProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccumulatorProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccumulatorProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.AccumulatorProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AccumulatorProof} AccumulatorProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccumulatorProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AccumulatorProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bitmap = reader.uint64();
                    break;
                case 2:
                    if (!(message.nonDefaultSiblings && message.nonDefaultSiblings.length))
                        message.nonDefaultSiblings = [];
                    message.nonDefaultSiblings.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccumulatorProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AccumulatorProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AccumulatorProof} AccumulatorProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccumulatorProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccumulatorProof message.
         * @function verify
         * @memberof types.AccumulatorProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccumulatorProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                if (!$util.isInteger(message.bitmap) && !(message.bitmap && $util.isInteger(message.bitmap.low) && $util.isInteger(message.bitmap.high)))
                    return "bitmap: integer|Long expected";
            if (message.nonDefaultSiblings != null && message.hasOwnProperty("nonDefaultSiblings")) {
                if (!Array.isArray(message.nonDefaultSiblings))
                    return "nonDefaultSiblings: array expected";
                for (var i = 0; i < message.nonDefaultSiblings.length; ++i)
                    if (!(message.nonDefaultSiblings[i] && typeof message.nonDefaultSiblings[i].length === "number" || $util.isString(message.nonDefaultSiblings[i])))
                        return "nonDefaultSiblings: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an AccumulatorProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AccumulatorProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AccumulatorProof} AccumulatorProof
         */
        AccumulatorProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AccumulatorProof)
                return object;
            var message = new $root.types.AccumulatorProof();
            if (object.bitmap != null)
                if ($util.Long)
                    (message.bitmap = $util.Long.fromValue(object.bitmap)).unsigned = true;
                else if (typeof object.bitmap === "string")
                    message.bitmap = parseInt(object.bitmap, 10);
                else if (typeof object.bitmap === "number")
                    message.bitmap = object.bitmap;
                else if (typeof object.bitmap === "object")
                    message.bitmap = new $util.LongBits(object.bitmap.low >>> 0, object.bitmap.high >>> 0).toNumber(true);
            if (object.nonDefaultSiblings) {
                if (!Array.isArray(object.nonDefaultSiblings))
                    throw TypeError(".types.AccumulatorProof.nonDefaultSiblings: array expected");
                message.nonDefaultSiblings = [];
                for (var i = 0; i < object.nonDefaultSiblings.length; ++i)
                    if (typeof object.nonDefaultSiblings[i] === "string")
                        $util.base64.decode(object.nonDefaultSiblings[i], message.nonDefaultSiblings[i] = $util.newBuffer($util.base64.length(object.nonDefaultSiblings[i])), 0);
                    else if (object.nonDefaultSiblings[i].length)
                        message.nonDefaultSiblings[i] = object.nonDefaultSiblings[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an AccumulatorProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AccumulatorProof
         * @static
         * @param {types.AccumulatorProof} message AccumulatorProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccumulatorProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nonDefaultSiblings = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bitmap = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bitmap = options.longs === String ? "0" : 0;
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                if (typeof message.bitmap === "number")
                    object.bitmap = options.longs === String ? String(message.bitmap) : message.bitmap;
                else
                    object.bitmap = options.longs === String ? $util.Long.prototype.toString.call(message.bitmap) : options.longs === Number ? new $util.LongBits(message.bitmap.low >>> 0, message.bitmap.high >>> 0).toNumber(true) : message.bitmap;
            if (message.nonDefaultSiblings && message.nonDefaultSiblings.length) {
                object.nonDefaultSiblings = [];
                for (var j = 0; j < message.nonDefaultSiblings.length; ++j)
                    object.nonDefaultSiblings[j] = options.bytes === String ? $util.base64.encode(message.nonDefaultSiblings[j], 0, message.nonDefaultSiblings[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.nonDefaultSiblings[j]) : message.nonDefaultSiblings[j];
            }
            return object;
        };

        /**
         * Converts this AccumulatorProof to JSON.
         * @function toJSON
         * @memberof types.AccumulatorProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccumulatorProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccumulatorProof;
    })();

    types.SparseMerkleProof = (function() {

        /**
         * Properties of a SparseMerkleProof.
         * @memberof types
         * @interface ISparseMerkleProof
         * @property {Uint8Array|null} [leaf] SparseMerkleProof leaf
         * @property {Uint8Array|null} [bitmap] SparseMerkleProof bitmap
         * @property {Array.<Uint8Array>|null} [nonDefaultSiblings] SparseMerkleProof nonDefaultSiblings
         */

        /**
         * Constructs a new SparseMerkleProof.
         * @memberof types
         * @classdesc Represents a SparseMerkleProof.
         * @implements ISparseMerkleProof
         * @constructor
         * @param {types.ISparseMerkleProof=} [properties] Properties to set
         */
        function SparseMerkleProof(properties) {
            this.nonDefaultSiblings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SparseMerkleProof leaf.
         * @member {Uint8Array} leaf
         * @memberof types.SparseMerkleProof
         * @instance
         */
        SparseMerkleProof.prototype.leaf = $util.newBuffer([]);

        /**
         * SparseMerkleProof bitmap.
         * @member {Uint8Array} bitmap
         * @memberof types.SparseMerkleProof
         * @instance
         */
        SparseMerkleProof.prototype.bitmap = $util.newBuffer([]);

        /**
         * SparseMerkleProof nonDefaultSiblings.
         * @member {Array.<Uint8Array>} nonDefaultSiblings
         * @memberof types.SparseMerkleProof
         * @instance
         */
        SparseMerkleProof.prototype.nonDefaultSiblings = $util.emptyArray;

        /**
         * Creates a new SparseMerkleProof instance using the specified properties.
         * @function create
         * @memberof types.SparseMerkleProof
         * @static
         * @param {types.ISparseMerkleProof=} [properties] Properties to set
         * @returns {types.SparseMerkleProof} SparseMerkleProof instance
         */
        SparseMerkleProof.create = function create(properties) {
            return new SparseMerkleProof(properties);
        };

        /**
         * Encodes the specified SparseMerkleProof message. Does not implicitly {@link types.SparseMerkleProof.verify|verify} messages.
         * @function encode
         * @memberof types.SparseMerkleProof
         * @static
         * @param {types.ISparseMerkleProof} message SparseMerkleProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparseMerkleProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leaf != null && message.hasOwnProperty("leaf"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.leaf);
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bitmap);
            if (message.nonDefaultSiblings != null && message.nonDefaultSiblings.length)
                for (var i = 0; i < message.nonDefaultSiblings.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.nonDefaultSiblings[i]);
            return writer;
        };

        /**
         * Encodes the specified SparseMerkleProof message, length delimited. Does not implicitly {@link types.SparseMerkleProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.SparseMerkleProof
         * @static
         * @param {types.ISparseMerkleProof} message SparseMerkleProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparseMerkleProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SparseMerkleProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.SparseMerkleProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.SparseMerkleProof} SparseMerkleProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparseMerkleProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.SparseMerkleProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.leaf = reader.bytes();
                    break;
                case 2:
                    message.bitmap = reader.bytes();
                    break;
                case 3:
                    if (!(message.nonDefaultSiblings && message.nonDefaultSiblings.length))
                        message.nonDefaultSiblings = [];
                    message.nonDefaultSiblings.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SparseMerkleProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.SparseMerkleProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.SparseMerkleProof} SparseMerkleProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparseMerkleProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SparseMerkleProof message.
         * @function verify
         * @memberof types.SparseMerkleProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SparseMerkleProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.leaf != null && message.hasOwnProperty("leaf"))
                if (!(message.leaf && typeof message.leaf.length === "number" || $util.isString(message.leaf)))
                    return "leaf: buffer expected";
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                if (!(message.bitmap && typeof message.bitmap.length === "number" || $util.isString(message.bitmap)))
                    return "bitmap: buffer expected";
            if (message.nonDefaultSiblings != null && message.hasOwnProperty("nonDefaultSiblings")) {
                if (!Array.isArray(message.nonDefaultSiblings))
                    return "nonDefaultSiblings: array expected";
                for (var i = 0; i < message.nonDefaultSiblings.length; ++i)
                    if (!(message.nonDefaultSiblings[i] && typeof message.nonDefaultSiblings[i].length === "number" || $util.isString(message.nonDefaultSiblings[i])))
                        return "nonDefaultSiblings: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a SparseMerkleProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.SparseMerkleProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.SparseMerkleProof} SparseMerkleProof
         */
        SparseMerkleProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.SparseMerkleProof)
                return object;
            var message = new $root.types.SparseMerkleProof();
            if (object.leaf != null)
                if (typeof object.leaf === "string")
                    $util.base64.decode(object.leaf, message.leaf = $util.newBuffer($util.base64.length(object.leaf)), 0);
                else if (object.leaf.length)
                    message.leaf = object.leaf;
            if (object.bitmap != null)
                if (typeof object.bitmap === "string")
                    $util.base64.decode(object.bitmap, message.bitmap = $util.newBuffer($util.base64.length(object.bitmap)), 0);
                else if (object.bitmap.length)
                    message.bitmap = object.bitmap;
            if (object.nonDefaultSiblings) {
                if (!Array.isArray(object.nonDefaultSiblings))
                    throw TypeError(".types.SparseMerkleProof.nonDefaultSiblings: array expected");
                message.nonDefaultSiblings = [];
                for (var i = 0; i < object.nonDefaultSiblings.length; ++i)
                    if (typeof object.nonDefaultSiblings[i] === "string")
                        $util.base64.decode(object.nonDefaultSiblings[i], message.nonDefaultSiblings[i] = $util.newBuffer($util.base64.length(object.nonDefaultSiblings[i])), 0);
                    else if (object.nonDefaultSiblings[i].length)
                        message.nonDefaultSiblings[i] = object.nonDefaultSiblings[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a SparseMerkleProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.SparseMerkleProof
         * @static
         * @param {types.SparseMerkleProof} message SparseMerkleProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SparseMerkleProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nonDefaultSiblings = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.leaf = "";
                else {
                    object.leaf = [];
                    if (options.bytes !== Array)
                        object.leaf = $util.newBuffer(object.leaf);
                }
                if (options.bytes === String)
                    object.bitmap = "";
                else {
                    object.bitmap = [];
                    if (options.bytes !== Array)
                        object.bitmap = $util.newBuffer(object.bitmap);
                }
            }
            if (message.leaf != null && message.hasOwnProperty("leaf"))
                object.leaf = options.bytes === String ? $util.base64.encode(message.leaf, 0, message.leaf.length) : options.bytes === Array ? Array.prototype.slice.call(message.leaf) : message.leaf;
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                object.bitmap = options.bytes === String ? $util.base64.encode(message.bitmap, 0, message.bitmap.length) : options.bytes === Array ? Array.prototype.slice.call(message.bitmap) : message.bitmap;
            if (message.nonDefaultSiblings && message.nonDefaultSiblings.length) {
                object.nonDefaultSiblings = [];
                for (var j = 0; j < message.nonDefaultSiblings.length; ++j)
                    object.nonDefaultSiblings[j] = options.bytes === String ? $util.base64.encode(message.nonDefaultSiblings[j], 0, message.nonDefaultSiblings[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.nonDefaultSiblings[j]) : message.nonDefaultSiblings[j];
            }
            return object;
        };

        /**
         * Converts this SparseMerkleProof to JSON.
         * @function toJSON
         * @memberof types.SparseMerkleProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SparseMerkleProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SparseMerkleProof;
    })();

    types.SignedTransactionProof = (function() {

        /**
         * Properties of a SignedTransactionProof.
         * @memberof types
         * @interface ISignedTransactionProof
         * @property {types.IAccumulatorProof|null} [ledgerInfoToTransactionInfoProof] SignedTransactionProof ledgerInfoToTransactionInfoProof
         * @property {types.ITransactionInfo|null} [transactionInfo] SignedTransactionProof transactionInfo
         */

        /**
         * Constructs a new SignedTransactionProof.
         * @memberof types
         * @classdesc Represents a SignedTransactionProof.
         * @implements ISignedTransactionProof
         * @constructor
         * @param {types.ISignedTransactionProof=} [properties] Properties to set
         */
        function SignedTransactionProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignedTransactionProof ledgerInfoToTransactionInfoProof.
         * @member {types.IAccumulatorProof|null|undefined} ledgerInfoToTransactionInfoProof
         * @memberof types.SignedTransactionProof
         * @instance
         */
        SignedTransactionProof.prototype.ledgerInfoToTransactionInfoProof = null;

        /**
         * SignedTransactionProof transactionInfo.
         * @member {types.ITransactionInfo|null|undefined} transactionInfo
         * @memberof types.SignedTransactionProof
         * @instance
         */
        SignedTransactionProof.prototype.transactionInfo = null;

        /**
         * Creates a new SignedTransactionProof instance using the specified properties.
         * @function create
         * @memberof types.SignedTransactionProof
         * @static
         * @param {types.ISignedTransactionProof=} [properties] Properties to set
         * @returns {types.SignedTransactionProof} SignedTransactionProof instance
         */
        SignedTransactionProof.create = function create(properties) {
            return new SignedTransactionProof(properties);
        };

        /**
         * Encodes the specified SignedTransactionProof message. Does not implicitly {@link types.SignedTransactionProof.verify|verify} messages.
         * @function encode
         * @memberof types.SignedTransactionProof
         * @static
         * @param {types.ISignedTransactionProof} message SignedTransactionProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransactionProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof"))
                $root.types.AccumulatorProof.encode(message.ledgerInfoToTransactionInfoProof, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo"))
                $root.types.TransactionInfo.encode(message.transactionInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SignedTransactionProof message, length delimited. Does not implicitly {@link types.SignedTransactionProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.SignedTransactionProof
         * @static
         * @param {types.ISignedTransactionProof} message SignedTransactionProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransactionProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignedTransactionProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.SignedTransactionProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.SignedTransactionProof} SignedTransactionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransactionProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.SignedTransactionProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.transactionInfo = $root.types.TransactionInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignedTransactionProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.SignedTransactionProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.SignedTransactionProof} SignedTransactionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransactionProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignedTransactionProof message.
         * @function verify
         * @memberof types.SignedTransactionProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedTransactionProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof")) {
                var error = $root.types.AccumulatorProof.verify(message.ledgerInfoToTransactionInfoProof);
                if (error)
                    return "ledgerInfoToTransactionInfoProof." + error;
            }
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo")) {
                var error = $root.types.TransactionInfo.verify(message.transactionInfo);
                if (error)
                    return "transactionInfo." + error;
            }
            return null;
        };

        /**
         * Creates a SignedTransactionProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.SignedTransactionProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.SignedTransactionProof} SignedTransactionProof
         */
        SignedTransactionProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.SignedTransactionProof)
                return object;
            var message = new $root.types.SignedTransactionProof();
            if (object.ledgerInfoToTransactionInfoProof != null) {
                if (typeof object.ledgerInfoToTransactionInfoProof !== "object")
                    throw TypeError(".types.SignedTransactionProof.ledgerInfoToTransactionInfoProof: object expected");
                message.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.fromObject(object.ledgerInfoToTransactionInfoProof);
            }
            if (object.transactionInfo != null) {
                if (typeof object.transactionInfo !== "object")
                    throw TypeError(".types.SignedTransactionProof.transactionInfo: object expected");
                message.transactionInfo = $root.types.TransactionInfo.fromObject(object.transactionInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a SignedTransactionProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.SignedTransactionProof
         * @static
         * @param {types.SignedTransactionProof} message SignedTransactionProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedTransactionProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ledgerInfoToTransactionInfoProof = null;
                object.transactionInfo = null;
            }
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof"))
                object.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.toObject(message.ledgerInfoToTransactionInfoProof, options);
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo"))
                object.transactionInfo = $root.types.TransactionInfo.toObject(message.transactionInfo, options);
            return object;
        };

        /**
         * Converts this SignedTransactionProof to JSON.
         * @function toJSON
         * @memberof types.SignedTransactionProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedTransactionProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignedTransactionProof;
    })();

    types.AccountStateProof = (function() {

        /**
         * Properties of an AccountStateProof.
         * @memberof types
         * @interface IAccountStateProof
         * @property {types.IAccumulatorProof|null} [ledgerInfoToTransactionInfoProof] AccountStateProof ledgerInfoToTransactionInfoProof
         * @property {types.ITransactionInfo|null} [transactionInfo] AccountStateProof transactionInfo
         * @property {types.ISparseMerkleProof|null} [transactionInfoToAccountProof] AccountStateProof transactionInfoToAccountProof
         */

        /**
         * Constructs a new AccountStateProof.
         * @memberof types
         * @classdesc Represents an AccountStateProof.
         * @implements IAccountStateProof
         * @constructor
         * @param {types.IAccountStateProof=} [properties] Properties to set
         */
        function AccountStateProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountStateProof ledgerInfoToTransactionInfoProof.
         * @member {types.IAccumulatorProof|null|undefined} ledgerInfoToTransactionInfoProof
         * @memberof types.AccountStateProof
         * @instance
         */
        AccountStateProof.prototype.ledgerInfoToTransactionInfoProof = null;

        /**
         * AccountStateProof transactionInfo.
         * @member {types.ITransactionInfo|null|undefined} transactionInfo
         * @memberof types.AccountStateProof
         * @instance
         */
        AccountStateProof.prototype.transactionInfo = null;

        /**
         * AccountStateProof transactionInfoToAccountProof.
         * @member {types.ISparseMerkleProof|null|undefined} transactionInfoToAccountProof
         * @memberof types.AccountStateProof
         * @instance
         */
        AccountStateProof.prototype.transactionInfoToAccountProof = null;

        /**
         * Creates a new AccountStateProof instance using the specified properties.
         * @function create
         * @memberof types.AccountStateProof
         * @static
         * @param {types.IAccountStateProof=} [properties] Properties to set
         * @returns {types.AccountStateProof} AccountStateProof instance
         */
        AccountStateProof.create = function create(properties) {
            return new AccountStateProof(properties);
        };

        /**
         * Encodes the specified AccountStateProof message. Does not implicitly {@link types.AccountStateProof.verify|verify} messages.
         * @function encode
         * @memberof types.AccountStateProof
         * @static
         * @param {types.IAccountStateProof} message AccountStateProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountStateProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof"))
                $root.types.AccumulatorProof.encode(message.ledgerInfoToTransactionInfoProof, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo"))
                $root.types.TransactionInfo.encode(message.transactionInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.transactionInfoToAccountProof != null && message.hasOwnProperty("transactionInfoToAccountProof"))
                $root.types.SparseMerkleProof.encode(message.transactionInfoToAccountProof, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccountStateProof message, length delimited. Does not implicitly {@link types.AccountStateProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AccountStateProof
         * @static
         * @param {types.IAccountStateProof} message AccountStateProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountStateProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountStateProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.AccountStateProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AccountStateProof} AccountStateProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountStateProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AccountStateProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.transactionInfo = $root.types.TransactionInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.transactionInfoToAccountProof = $root.types.SparseMerkleProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountStateProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AccountStateProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AccountStateProof} AccountStateProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountStateProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountStateProof message.
         * @function verify
         * @memberof types.AccountStateProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountStateProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof")) {
                var error = $root.types.AccumulatorProof.verify(message.ledgerInfoToTransactionInfoProof);
                if (error)
                    return "ledgerInfoToTransactionInfoProof." + error;
            }
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo")) {
                var error = $root.types.TransactionInfo.verify(message.transactionInfo);
                if (error)
                    return "transactionInfo." + error;
            }
            if (message.transactionInfoToAccountProof != null && message.hasOwnProperty("transactionInfoToAccountProof")) {
                var error = $root.types.SparseMerkleProof.verify(message.transactionInfoToAccountProof);
                if (error)
                    return "transactionInfoToAccountProof." + error;
            }
            return null;
        };

        /**
         * Creates an AccountStateProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AccountStateProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AccountStateProof} AccountStateProof
         */
        AccountStateProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AccountStateProof)
                return object;
            var message = new $root.types.AccountStateProof();
            if (object.ledgerInfoToTransactionInfoProof != null) {
                if (typeof object.ledgerInfoToTransactionInfoProof !== "object")
                    throw TypeError(".types.AccountStateProof.ledgerInfoToTransactionInfoProof: object expected");
                message.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.fromObject(object.ledgerInfoToTransactionInfoProof);
            }
            if (object.transactionInfo != null) {
                if (typeof object.transactionInfo !== "object")
                    throw TypeError(".types.AccountStateProof.transactionInfo: object expected");
                message.transactionInfo = $root.types.TransactionInfo.fromObject(object.transactionInfo);
            }
            if (object.transactionInfoToAccountProof != null) {
                if (typeof object.transactionInfoToAccountProof !== "object")
                    throw TypeError(".types.AccountStateProof.transactionInfoToAccountProof: object expected");
                message.transactionInfoToAccountProof = $root.types.SparseMerkleProof.fromObject(object.transactionInfoToAccountProof);
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountStateProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AccountStateProof
         * @static
         * @param {types.AccountStateProof} message AccountStateProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountStateProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ledgerInfoToTransactionInfoProof = null;
                object.transactionInfo = null;
                object.transactionInfoToAccountProof = null;
            }
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof"))
                object.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.toObject(message.ledgerInfoToTransactionInfoProof, options);
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo"))
                object.transactionInfo = $root.types.TransactionInfo.toObject(message.transactionInfo, options);
            if (message.transactionInfoToAccountProof != null && message.hasOwnProperty("transactionInfoToAccountProof"))
                object.transactionInfoToAccountProof = $root.types.SparseMerkleProof.toObject(message.transactionInfoToAccountProof, options);
            return object;
        };

        /**
         * Converts this AccountStateProof to JSON.
         * @function toJSON
         * @memberof types.AccountStateProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountStateProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountStateProof;
    })();

    types.EventProof = (function() {

        /**
         * Properties of an EventProof.
         * @memberof types
         * @interface IEventProof
         * @property {types.IAccumulatorProof|null} [ledgerInfoToTransactionInfoProof] EventProof ledgerInfoToTransactionInfoProof
         * @property {types.ITransactionInfo|null} [transactionInfo] EventProof transactionInfo
         * @property {types.IAccumulatorProof|null} [transactionInfoToEventProof] EventProof transactionInfoToEventProof
         */

        /**
         * Constructs a new EventProof.
         * @memberof types
         * @classdesc Represents an EventProof.
         * @implements IEventProof
         * @constructor
         * @param {types.IEventProof=} [properties] Properties to set
         */
        function EventProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventProof ledgerInfoToTransactionInfoProof.
         * @member {types.IAccumulatorProof|null|undefined} ledgerInfoToTransactionInfoProof
         * @memberof types.EventProof
         * @instance
         */
        EventProof.prototype.ledgerInfoToTransactionInfoProof = null;

        /**
         * EventProof transactionInfo.
         * @member {types.ITransactionInfo|null|undefined} transactionInfo
         * @memberof types.EventProof
         * @instance
         */
        EventProof.prototype.transactionInfo = null;

        /**
         * EventProof transactionInfoToEventProof.
         * @member {types.IAccumulatorProof|null|undefined} transactionInfoToEventProof
         * @memberof types.EventProof
         * @instance
         */
        EventProof.prototype.transactionInfoToEventProof = null;

        /**
         * Creates a new EventProof instance using the specified properties.
         * @function create
         * @memberof types.EventProof
         * @static
         * @param {types.IEventProof=} [properties] Properties to set
         * @returns {types.EventProof} EventProof instance
         */
        EventProof.create = function create(properties) {
            return new EventProof(properties);
        };

        /**
         * Encodes the specified EventProof message. Does not implicitly {@link types.EventProof.verify|verify} messages.
         * @function encode
         * @memberof types.EventProof
         * @static
         * @param {types.IEventProof} message EventProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof"))
                $root.types.AccumulatorProof.encode(message.ledgerInfoToTransactionInfoProof, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo"))
                $root.types.TransactionInfo.encode(message.transactionInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.transactionInfoToEventProof != null && message.hasOwnProperty("transactionInfoToEventProof"))
                $root.types.AccumulatorProof.encode(message.transactionInfoToEventProof, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EventProof message, length delimited. Does not implicitly {@link types.EventProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.EventProof
         * @static
         * @param {types.IEventProof} message EventProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.EventProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.EventProof} EventProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.EventProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.transactionInfo = $root.types.TransactionInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.transactionInfoToEventProof = $root.types.AccumulatorProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.EventProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.EventProof} EventProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventProof message.
         * @function verify
         * @memberof types.EventProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof")) {
                var error = $root.types.AccumulatorProof.verify(message.ledgerInfoToTransactionInfoProof);
                if (error)
                    return "ledgerInfoToTransactionInfoProof." + error;
            }
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo")) {
                var error = $root.types.TransactionInfo.verify(message.transactionInfo);
                if (error)
                    return "transactionInfo." + error;
            }
            if (message.transactionInfoToEventProof != null && message.hasOwnProperty("transactionInfoToEventProof")) {
                var error = $root.types.AccumulatorProof.verify(message.transactionInfoToEventProof);
                if (error)
                    return "transactionInfoToEventProof." + error;
            }
            return null;
        };

        /**
         * Creates an EventProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.EventProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.EventProof} EventProof
         */
        EventProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.EventProof)
                return object;
            var message = new $root.types.EventProof();
            if (object.ledgerInfoToTransactionInfoProof != null) {
                if (typeof object.ledgerInfoToTransactionInfoProof !== "object")
                    throw TypeError(".types.EventProof.ledgerInfoToTransactionInfoProof: object expected");
                message.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.fromObject(object.ledgerInfoToTransactionInfoProof);
            }
            if (object.transactionInfo != null) {
                if (typeof object.transactionInfo !== "object")
                    throw TypeError(".types.EventProof.transactionInfo: object expected");
                message.transactionInfo = $root.types.TransactionInfo.fromObject(object.transactionInfo);
            }
            if (object.transactionInfoToEventProof != null) {
                if (typeof object.transactionInfoToEventProof !== "object")
                    throw TypeError(".types.EventProof.transactionInfoToEventProof: object expected");
                message.transactionInfoToEventProof = $root.types.AccumulatorProof.fromObject(object.transactionInfoToEventProof);
            }
            return message;
        };

        /**
         * Creates a plain object from an EventProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.EventProof
         * @static
         * @param {types.EventProof} message EventProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ledgerInfoToTransactionInfoProof = null;
                object.transactionInfo = null;
                object.transactionInfoToEventProof = null;
            }
            if (message.ledgerInfoToTransactionInfoProof != null && message.hasOwnProperty("ledgerInfoToTransactionInfoProof"))
                object.ledgerInfoToTransactionInfoProof = $root.types.AccumulatorProof.toObject(message.ledgerInfoToTransactionInfoProof, options);
            if (message.transactionInfo != null && message.hasOwnProperty("transactionInfo"))
                object.transactionInfo = $root.types.TransactionInfo.toObject(message.transactionInfo, options);
            if (message.transactionInfoToEventProof != null && message.hasOwnProperty("transactionInfoToEventProof"))
                object.transactionInfoToEventProof = $root.types.AccumulatorProof.toObject(message.transactionInfoToEventProof, options);
            return object;
        };

        /**
         * Converts this EventProof to JSON.
         * @function toJSON
         * @memberof types.EventProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventProof;
    })();

    types.TransactionInfo = (function() {

        /**
         * Properties of a TransactionInfo.
         * @memberof types
         * @interface ITransactionInfo
         * @property {Uint8Array|null} [signedTransactionHash] TransactionInfo signedTransactionHash
         * @property {Uint8Array|null} [stateRootHash] TransactionInfo stateRootHash
         * @property {Uint8Array|null} [eventRootHash] TransactionInfo eventRootHash
         * @property {number|Long|null} [gasUsed] TransactionInfo gasUsed
         */

        /**
         * Constructs a new TransactionInfo.
         * @memberof types
         * @classdesc Represents a TransactionInfo.
         * @implements ITransactionInfo
         * @constructor
         * @param {types.ITransactionInfo=} [properties] Properties to set
         */
        function TransactionInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransactionInfo signedTransactionHash.
         * @member {Uint8Array} signedTransactionHash
         * @memberof types.TransactionInfo
         * @instance
         */
        TransactionInfo.prototype.signedTransactionHash = $util.newBuffer([]);

        /**
         * TransactionInfo stateRootHash.
         * @member {Uint8Array} stateRootHash
         * @memberof types.TransactionInfo
         * @instance
         */
        TransactionInfo.prototype.stateRootHash = $util.newBuffer([]);

        /**
         * TransactionInfo eventRootHash.
         * @member {Uint8Array} eventRootHash
         * @memberof types.TransactionInfo
         * @instance
         */
        TransactionInfo.prototype.eventRootHash = $util.newBuffer([]);

        /**
         * TransactionInfo gasUsed.
         * @member {number|Long} gasUsed
         * @memberof types.TransactionInfo
         * @instance
         */
        TransactionInfo.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TransactionInfo instance using the specified properties.
         * @function create
         * @memberof types.TransactionInfo
         * @static
         * @param {types.ITransactionInfo=} [properties] Properties to set
         * @returns {types.TransactionInfo} TransactionInfo instance
         */
        TransactionInfo.create = function create(properties) {
            return new TransactionInfo(properties);
        };

        /**
         * Encodes the specified TransactionInfo message. Does not implicitly {@link types.TransactionInfo.verify|verify} messages.
         * @function encode
         * @memberof types.TransactionInfo
         * @static
         * @param {types.ITransactionInfo} message TransactionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signedTransactionHash != null && message.hasOwnProperty("signedTransactionHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.signedTransactionHash);
            if (message.stateRootHash != null && message.hasOwnProperty("stateRootHash"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.stateRootHash);
            if (message.eventRootHash != null && message.hasOwnProperty("eventRootHash"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eventRootHash);
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.gasUsed);
            return writer;
        };

        /**
         * Encodes the specified TransactionInfo message, length delimited. Does not implicitly {@link types.TransactionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.TransactionInfo
         * @static
         * @param {types.ITransactionInfo} message TransactionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransactionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof types.TransactionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.TransactionInfo} TransactionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.TransactionInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signedTransactionHash = reader.bytes();
                    break;
                case 2:
                    message.stateRootHash = reader.bytes();
                    break;
                case 3:
                    message.eventRootHash = reader.bytes();
                    break;
                case 4:
                    message.gasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransactionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.TransactionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.TransactionInfo} TransactionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransactionInfo message.
         * @function verify
         * @memberof types.TransactionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransactionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signedTransactionHash != null && message.hasOwnProperty("signedTransactionHash"))
                if (!(message.signedTransactionHash && typeof message.signedTransactionHash.length === "number" || $util.isString(message.signedTransactionHash)))
                    return "signedTransactionHash: buffer expected";
            if (message.stateRootHash != null && message.hasOwnProperty("stateRootHash"))
                if (!(message.stateRootHash && typeof message.stateRootHash.length === "number" || $util.isString(message.stateRootHash)))
                    return "stateRootHash: buffer expected";
            if (message.eventRootHash != null && message.hasOwnProperty("eventRootHash"))
                if (!(message.eventRootHash && typeof message.eventRootHash.length === "number" || $util.isString(message.eventRootHash)))
                    return "eventRootHash: buffer expected";
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                if (!$util.isInteger(message.gasUsed) && !(message.gasUsed && $util.isInteger(message.gasUsed.low) && $util.isInteger(message.gasUsed.high)))
                    return "gasUsed: integer|Long expected";
            return null;
        };

        /**
         * Creates a TransactionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.TransactionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.TransactionInfo} TransactionInfo
         */
        TransactionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.types.TransactionInfo)
                return object;
            var message = new $root.types.TransactionInfo();
            if (object.signedTransactionHash != null)
                if (typeof object.signedTransactionHash === "string")
                    $util.base64.decode(object.signedTransactionHash, message.signedTransactionHash = $util.newBuffer($util.base64.length(object.signedTransactionHash)), 0);
                else if (object.signedTransactionHash.length)
                    message.signedTransactionHash = object.signedTransactionHash;
            if (object.stateRootHash != null)
                if (typeof object.stateRootHash === "string")
                    $util.base64.decode(object.stateRootHash, message.stateRootHash = $util.newBuffer($util.base64.length(object.stateRootHash)), 0);
                else if (object.stateRootHash.length)
                    message.stateRootHash = object.stateRootHash;
            if (object.eventRootHash != null)
                if (typeof object.eventRootHash === "string")
                    $util.base64.decode(object.eventRootHash, message.eventRootHash = $util.newBuffer($util.base64.length(object.eventRootHash)), 0);
                else if (object.eventRootHash.length)
                    message.eventRootHash = object.eventRootHash;
            if (object.gasUsed != null)
                if ($util.Long)
                    (message.gasUsed = $util.Long.fromValue(object.gasUsed)).unsigned = true;
                else if (typeof object.gasUsed === "string")
                    message.gasUsed = parseInt(object.gasUsed, 10);
                else if (typeof object.gasUsed === "number")
                    message.gasUsed = object.gasUsed;
                else if (typeof object.gasUsed === "object")
                    message.gasUsed = new $util.LongBits(object.gasUsed.low >>> 0, object.gasUsed.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a TransactionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.TransactionInfo
         * @static
         * @param {types.TransactionInfo} message TransactionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransactionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.signedTransactionHash = "";
                else {
                    object.signedTransactionHash = [];
                    if (options.bytes !== Array)
                        object.signedTransactionHash = $util.newBuffer(object.signedTransactionHash);
                }
                if (options.bytes === String)
                    object.stateRootHash = "";
                else {
                    object.stateRootHash = [];
                    if (options.bytes !== Array)
                        object.stateRootHash = $util.newBuffer(object.stateRootHash);
                }
                if (options.bytes === String)
                    object.eventRootHash = "";
                else {
                    object.eventRootHash = [];
                    if (options.bytes !== Array)
                        object.eventRootHash = $util.newBuffer(object.eventRootHash);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gasUsed = options.longs === String ? "0" : 0;
            }
            if (message.signedTransactionHash != null && message.hasOwnProperty("signedTransactionHash"))
                object.signedTransactionHash = options.bytes === String ? $util.base64.encode(message.signedTransactionHash, 0, message.signedTransactionHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.signedTransactionHash) : message.signedTransactionHash;
            if (message.stateRootHash != null && message.hasOwnProperty("stateRootHash"))
                object.stateRootHash = options.bytes === String ? $util.base64.encode(message.stateRootHash, 0, message.stateRootHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateRootHash) : message.stateRootHash;
            if (message.eventRootHash != null && message.hasOwnProperty("eventRootHash"))
                object.eventRootHash = options.bytes === String ? $util.base64.encode(message.eventRootHash, 0, message.eventRootHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.eventRootHash) : message.eventRootHash;
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                if (typeof message.gasUsed === "number")
                    object.gasUsed = options.longs === String ? String(message.gasUsed) : message.gasUsed;
                else
                    object.gasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.gasUsed) : options.longs === Number ? new $util.LongBits(message.gasUsed.low >>> 0, message.gasUsed.high >>> 0).toNumber(true) : message.gasUsed;
            return object;
        };

        /**
         * Converts this TransactionInfo to JSON.
         * @function toJSON
         * @memberof types.TransactionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransactionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransactionInfo;
    })();

    types.Event = (function() {

        /**
         * Properties of an Event.
         * @memberof types
         * @interface IEvent
         * @property {types.IAccessPath|null} [accessPath] Event accessPath
         * @property {number|Long|null} [sequenceNumber] Event sequenceNumber
         * @property {Uint8Array|null} [eventData] Event eventData
         */

        /**
         * Constructs a new Event.
         * @memberof types
         * @classdesc Represents an Event.
         * @implements IEvent
         * @constructor
         * @param {types.IEvent=} [properties] Properties to set
         */
        function Event(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Event accessPath.
         * @member {types.IAccessPath|null|undefined} accessPath
         * @memberof types.Event
         * @instance
         */
        Event.prototype.accessPath = null;

        /**
         * Event sequenceNumber.
         * @member {number|Long} sequenceNumber
         * @memberof types.Event
         * @instance
         */
        Event.prototype.sequenceNumber = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Event eventData.
         * @member {Uint8Array} eventData
         * @memberof types.Event
         * @instance
         */
        Event.prototype.eventData = $util.newBuffer([]);

        /**
         * Creates a new Event instance using the specified properties.
         * @function create
         * @memberof types.Event
         * @static
         * @param {types.IEvent=} [properties] Properties to set
         * @returns {types.Event} Event instance
         */
        Event.create = function create(properties) {
            return new Event(properties);
        };

        /**
         * Encodes the specified Event message. Does not implicitly {@link types.Event.verify|verify} messages.
         * @function encode
         * @memberof types.Event
         * @static
         * @param {types.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accessPath != null && message.hasOwnProperty("accessPath"))
                $root.types.AccessPath.encode(message.accessPath, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.sequenceNumber);
            if (message.eventData != null && message.hasOwnProperty("eventData"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eventData);
            return writer;
        };

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link types.Event.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Event
         * @static
         * @param {types.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @function decode
         * @memberof types.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Event();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accessPath = $root.types.AccessPath.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sequenceNumber = reader.uint64();
                    break;
                case 3:
                    message.eventData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Event message.
         * @function verify
         * @memberof types.Event
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Event.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accessPath != null && message.hasOwnProperty("accessPath")) {
                var error = $root.types.AccessPath.verify(message.accessPath);
                if (error)
                    return "accessPath." + error;
            }
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                if (!$util.isInteger(message.sequenceNumber) && !(message.sequenceNumber && $util.isInteger(message.sequenceNumber.low) && $util.isInteger(message.sequenceNumber.high)))
                    return "sequenceNumber: integer|Long expected";
            if (message.eventData != null && message.hasOwnProperty("eventData"))
                if (!(message.eventData && typeof message.eventData.length === "number" || $util.isString(message.eventData)))
                    return "eventData: buffer expected";
            return null;
        };

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Event
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Event} Event
         */
        Event.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Event)
                return object;
            var message = new $root.types.Event();
            if (object.accessPath != null) {
                if (typeof object.accessPath !== "object")
                    throw TypeError(".types.Event.accessPath: object expected");
                message.accessPath = $root.types.AccessPath.fromObject(object.accessPath);
            }
            if (object.sequenceNumber != null)
                if ($util.Long)
                    (message.sequenceNumber = $util.Long.fromValue(object.sequenceNumber)).unsigned = true;
                else if (typeof object.sequenceNumber === "string")
                    message.sequenceNumber = parseInt(object.sequenceNumber, 10);
                else if (typeof object.sequenceNumber === "number")
                    message.sequenceNumber = object.sequenceNumber;
                else if (typeof object.sequenceNumber === "object")
                    message.sequenceNumber = new $util.LongBits(object.sequenceNumber.low >>> 0, object.sequenceNumber.high >>> 0).toNumber(true);
            if (object.eventData != null)
                if (typeof object.eventData === "string")
                    $util.base64.decode(object.eventData, message.eventData = $util.newBuffer($util.base64.length(object.eventData)), 0);
                else if (object.eventData.length)
                    message.eventData = object.eventData;
            return message;
        };

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Event
         * @static
         * @param {types.Event} message Event
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Event.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accessPath = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sequenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequenceNumber = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.eventData = "";
                else {
                    object.eventData = [];
                    if (options.bytes !== Array)
                        object.eventData = $util.newBuffer(object.eventData);
                }
            }
            if (message.accessPath != null && message.hasOwnProperty("accessPath"))
                object.accessPath = $root.types.AccessPath.toObject(message.accessPath, options);
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                if (typeof message.sequenceNumber === "number")
                    object.sequenceNumber = options.longs === String ? String(message.sequenceNumber) : message.sequenceNumber;
                else
                    object.sequenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceNumber) : options.longs === Number ? new $util.LongBits(message.sequenceNumber.low >>> 0, message.sequenceNumber.high >>> 0).toNumber(true) : message.sequenceNumber;
            if (message.eventData != null && message.hasOwnProperty("eventData"))
                object.eventData = options.bytes === String ? $util.base64.encode(message.eventData, 0, message.eventData.length) : options.bytes === Array ? Array.prototype.slice.call(message.eventData) : message.eventData;
            return object;
        };

        /**
         * Converts this Event to JSON.
         * @function toJSON
         * @memberof types.Event
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Event.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Event;
    })();

    types.EventWithProof = (function() {

        /**
         * Properties of an EventWithProof.
         * @memberof types
         * @interface IEventWithProof
         * @property {number|Long|null} [transactionVersion] EventWithProof transactionVersion
         * @property {number|Long|null} [eventIndex] EventWithProof eventIndex
         * @property {types.IEvent|null} [event] EventWithProof event
         * @property {types.IEventProof|null} [proof] EventWithProof proof
         */

        /**
         * Constructs a new EventWithProof.
         * @memberof types
         * @classdesc Represents an EventWithProof.
         * @implements IEventWithProof
         * @constructor
         * @param {types.IEventWithProof=} [properties] Properties to set
         */
        function EventWithProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventWithProof transactionVersion.
         * @member {number|Long} transactionVersion
         * @memberof types.EventWithProof
         * @instance
         */
        EventWithProof.prototype.transactionVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * EventWithProof eventIndex.
         * @member {number|Long} eventIndex
         * @memberof types.EventWithProof
         * @instance
         */
        EventWithProof.prototype.eventIndex = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * EventWithProof event.
         * @member {types.IEvent|null|undefined} event
         * @memberof types.EventWithProof
         * @instance
         */
        EventWithProof.prototype.event = null;

        /**
         * EventWithProof proof.
         * @member {types.IEventProof|null|undefined} proof
         * @memberof types.EventWithProof
         * @instance
         */
        EventWithProof.prototype.proof = null;

        /**
         * Creates a new EventWithProof instance using the specified properties.
         * @function create
         * @memberof types.EventWithProof
         * @static
         * @param {types.IEventWithProof=} [properties] Properties to set
         * @returns {types.EventWithProof} EventWithProof instance
         */
        EventWithProof.create = function create(properties) {
            return new EventWithProof(properties);
        };

        /**
         * Encodes the specified EventWithProof message. Does not implicitly {@link types.EventWithProof.verify|verify} messages.
         * @function encode
         * @memberof types.EventWithProof
         * @static
         * @param {types.IEventWithProof} message EventWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventWithProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transactionVersion != null && message.hasOwnProperty("transactionVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.transactionVersion);
            if (message.eventIndex != null && message.hasOwnProperty("eventIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.eventIndex);
            if (message.event != null && message.hasOwnProperty("event"))
                $root.types.Event.encode(message.event, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.proof != null && message.hasOwnProperty("proof"))
                $root.types.EventProof.encode(message.proof, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EventWithProof message, length delimited. Does not implicitly {@link types.EventWithProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.EventWithProof
         * @static
         * @param {types.IEventWithProof} message EventWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventWithProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventWithProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.EventWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.EventWithProof} EventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventWithProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.EventWithProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.transactionVersion = reader.uint64();
                    break;
                case 2:
                    message.eventIndex = reader.uint64();
                    break;
                case 3:
                    message.event = $root.types.Event.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proof = $root.types.EventProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventWithProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.EventWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.EventWithProof} EventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventWithProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventWithProof message.
         * @function verify
         * @memberof types.EventWithProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventWithProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transactionVersion != null && message.hasOwnProperty("transactionVersion"))
                if (!$util.isInteger(message.transactionVersion) && !(message.transactionVersion && $util.isInteger(message.transactionVersion.low) && $util.isInteger(message.transactionVersion.high)))
                    return "transactionVersion: integer|Long expected";
            if (message.eventIndex != null && message.hasOwnProperty("eventIndex"))
                if (!$util.isInteger(message.eventIndex) && !(message.eventIndex && $util.isInteger(message.eventIndex.low) && $util.isInteger(message.eventIndex.high)))
                    return "eventIndex: integer|Long expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                var error = $root.types.Event.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.proof != null && message.hasOwnProperty("proof")) {
                var error = $root.types.EventProof.verify(message.proof);
                if (error)
                    return "proof." + error;
            }
            return null;
        };

        /**
         * Creates an EventWithProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.EventWithProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.EventWithProof} EventWithProof
         */
        EventWithProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.EventWithProof)
                return object;
            var message = new $root.types.EventWithProof();
            if (object.transactionVersion != null)
                if ($util.Long)
                    (message.transactionVersion = $util.Long.fromValue(object.transactionVersion)).unsigned = true;
                else if (typeof object.transactionVersion === "string")
                    message.transactionVersion = parseInt(object.transactionVersion, 10);
                else if (typeof object.transactionVersion === "number")
                    message.transactionVersion = object.transactionVersion;
                else if (typeof object.transactionVersion === "object")
                    message.transactionVersion = new $util.LongBits(object.transactionVersion.low >>> 0, object.transactionVersion.high >>> 0).toNumber(true);
            if (object.eventIndex != null)
                if ($util.Long)
                    (message.eventIndex = $util.Long.fromValue(object.eventIndex)).unsigned = true;
                else if (typeof object.eventIndex === "string")
                    message.eventIndex = parseInt(object.eventIndex, 10);
                else if (typeof object.eventIndex === "number")
                    message.eventIndex = object.eventIndex;
                else if (typeof object.eventIndex === "object")
                    message.eventIndex = new $util.LongBits(object.eventIndex.low >>> 0, object.eventIndex.high >>> 0).toNumber(true);
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".types.EventWithProof.event: object expected");
                message.event = $root.types.Event.fromObject(object.event);
            }
            if (object.proof != null) {
                if (typeof object.proof !== "object")
                    throw TypeError(".types.EventWithProof.proof: object expected");
                message.proof = $root.types.EventProof.fromObject(object.proof);
            }
            return message;
        };

        /**
         * Creates a plain object from an EventWithProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.EventWithProof
         * @static
         * @param {types.EventWithProof} message EventWithProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventWithProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.transactionVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.transactionVersion = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.eventIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.eventIndex = options.longs === String ? "0" : 0;
                object.event = null;
                object.proof = null;
            }
            if (message.transactionVersion != null && message.hasOwnProperty("transactionVersion"))
                if (typeof message.transactionVersion === "number")
                    object.transactionVersion = options.longs === String ? String(message.transactionVersion) : message.transactionVersion;
                else
                    object.transactionVersion = options.longs === String ? $util.Long.prototype.toString.call(message.transactionVersion) : options.longs === Number ? new $util.LongBits(message.transactionVersion.low >>> 0, message.transactionVersion.high >>> 0).toNumber(true) : message.transactionVersion;
            if (message.eventIndex != null && message.hasOwnProperty("eventIndex"))
                if (typeof message.eventIndex === "number")
                    object.eventIndex = options.longs === String ? String(message.eventIndex) : message.eventIndex;
                else
                    object.eventIndex = options.longs === String ? $util.Long.prototype.toString.call(message.eventIndex) : options.longs === Number ? new $util.LongBits(message.eventIndex.low >>> 0, message.eventIndex.high >>> 0).toNumber(true) : message.eventIndex;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.types.Event.toObject(message.event, options);
            if (message.proof != null && message.hasOwnProperty("proof"))
                object.proof = $root.types.EventProof.toObject(message.proof, options);
            return object;
        };

        /**
         * Converts this EventWithProof to JSON.
         * @function toJSON
         * @memberof types.EventWithProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventWithProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventWithProof;
    })();

    types.EventsList = (function() {

        /**
         * Properties of an EventsList.
         * @memberof types
         * @interface IEventsList
         * @property {Array.<types.IEvent>|null} [events] EventsList events
         */

        /**
         * Constructs a new EventsList.
         * @memberof types
         * @classdesc Represents an EventsList.
         * @implements IEventsList
         * @constructor
         * @param {types.IEventsList=} [properties] Properties to set
         */
        function EventsList(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventsList events.
         * @member {Array.<types.IEvent>} events
         * @memberof types.EventsList
         * @instance
         */
        EventsList.prototype.events = $util.emptyArray;

        /**
         * Creates a new EventsList instance using the specified properties.
         * @function create
         * @memberof types.EventsList
         * @static
         * @param {types.IEventsList=} [properties] Properties to set
         * @returns {types.EventsList} EventsList instance
         */
        EventsList.create = function create(properties) {
            return new EventsList(properties);
        };

        /**
         * Encodes the specified EventsList message. Does not implicitly {@link types.EventsList.verify|verify} messages.
         * @function encode
         * @memberof types.EventsList
         * @static
         * @param {types.IEventsList} message EventsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventsList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.types.Event.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EventsList message, length delimited. Does not implicitly {@link types.EventsList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.EventsList
         * @static
         * @param {types.IEventsList} message EventsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventsList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventsList message from the specified reader or buffer.
         * @function decode
         * @memberof types.EventsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.EventsList} EventsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventsList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.EventsList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.events && message.events.length))
                        message.events = [];
                    message.events.push($root.types.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventsList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.EventsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.EventsList} EventsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventsList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventsList message.
         * @function verify
         * @memberof types.EventsList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventsList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.types.Event.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EventsList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.EventsList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.EventsList} EventsList
         */
        EventsList.fromObject = function fromObject(object) {
            if (object instanceof $root.types.EventsList)
                return object;
            var message = new $root.types.EventsList();
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".types.EventsList.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".types.EventsList.events: object expected");
                    message.events[i] = $root.types.Event.fromObject(object.events[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EventsList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.EventsList
         * @static
         * @param {types.EventsList} message EventsList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventsList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.types.Event.toObject(message.events[j], options);
            }
            return object;
        };

        /**
         * Converts this EventsList to JSON.
         * @function toJSON
         * @memberof types.EventsList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventsList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventsList;
    })();

    types.EventsForVersions = (function() {

        /**
         * Properties of an EventsForVersions.
         * @memberof types
         * @interface IEventsForVersions
         * @property {Array.<types.IEventsList>|null} [eventsForVersion] EventsForVersions eventsForVersion
         */

        /**
         * Constructs a new EventsForVersions.
         * @memberof types
         * @classdesc Represents an EventsForVersions.
         * @implements IEventsForVersions
         * @constructor
         * @param {types.IEventsForVersions=} [properties] Properties to set
         */
        function EventsForVersions(properties) {
            this.eventsForVersion = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventsForVersions eventsForVersion.
         * @member {Array.<types.IEventsList>} eventsForVersion
         * @memberof types.EventsForVersions
         * @instance
         */
        EventsForVersions.prototype.eventsForVersion = $util.emptyArray;

        /**
         * Creates a new EventsForVersions instance using the specified properties.
         * @function create
         * @memberof types.EventsForVersions
         * @static
         * @param {types.IEventsForVersions=} [properties] Properties to set
         * @returns {types.EventsForVersions} EventsForVersions instance
         */
        EventsForVersions.create = function create(properties) {
            return new EventsForVersions(properties);
        };

        /**
         * Encodes the specified EventsForVersions message. Does not implicitly {@link types.EventsForVersions.verify|verify} messages.
         * @function encode
         * @memberof types.EventsForVersions
         * @static
         * @param {types.IEventsForVersions} message EventsForVersions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventsForVersions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventsForVersion != null && message.eventsForVersion.length)
                for (var i = 0; i < message.eventsForVersion.length; ++i)
                    $root.types.EventsList.encode(message.eventsForVersion[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EventsForVersions message, length delimited. Does not implicitly {@link types.EventsForVersions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.EventsForVersions
         * @static
         * @param {types.IEventsForVersions} message EventsForVersions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventsForVersions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventsForVersions message from the specified reader or buffer.
         * @function decode
         * @memberof types.EventsForVersions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.EventsForVersions} EventsForVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventsForVersions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.EventsForVersions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.eventsForVersion && message.eventsForVersion.length))
                        message.eventsForVersion = [];
                    message.eventsForVersion.push($root.types.EventsList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventsForVersions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.EventsForVersions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.EventsForVersions} EventsForVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventsForVersions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventsForVersions message.
         * @function verify
         * @memberof types.EventsForVersions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventsForVersions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventsForVersion != null && message.hasOwnProperty("eventsForVersion")) {
                if (!Array.isArray(message.eventsForVersion))
                    return "eventsForVersion: array expected";
                for (var i = 0; i < message.eventsForVersion.length; ++i) {
                    var error = $root.types.EventsList.verify(message.eventsForVersion[i]);
                    if (error)
                        return "eventsForVersion." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EventsForVersions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.EventsForVersions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.EventsForVersions} EventsForVersions
         */
        EventsForVersions.fromObject = function fromObject(object) {
            if (object instanceof $root.types.EventsForVersions)
                return object;
            var message = new $root.types.EventsForVersions();
            if (object.eventsForVersion) {
                if (!Array.isArray(object.eventsForVersion))
                    throw TypeError(".types.EventsForVersions.eventsForVersion: array expected");
                message.eventsForVersion = [];
                for (var i = 0; i < object.eventsForVersion.length; ++i) {
                    if (typeof object.eventsForVersion[i] !== "object")
                        throw TypeError(".types.EventsForVersions.eventsForVersion: object expected");
                    message.eventsForVersion[i] = $root.types.EventsList.fromObject(object.eventsForVersion[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EventsForVersions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.EventsForVersions
         * @static
         * @param {types.EventsForVersions} message EventsForVersions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventsForVersions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.eventsForVersion = [];
            if (message.eventsForVersion && message.eventsForVersion.length) {
                object.eventsForVersion = [];
                for (var j = 0; j < message.eventsForVersion.length; ++j)
                    object.eventsForVersion[j] = $root.types.EventsList.toObject(message.eventsForVersion[j], options);
            }
            return object;
        };

        /**
         * Converts this EventsForVersions to JSON.
         * @function toJSON
         * @memberof types.EventsForVersions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventsForVersions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EventsForVersions;
    })();

    types.LedgerInfo = (function() {

        /**
         * Properties of a LedgerInfo.
         * @memberof types
         * @interface ILedgerInfo
         * @property {number|Long|null} [version] LedgerInfo version
         * @property {Uint8Array|null} [transactionAccumulatorHash] LedgerInfo transactionAccumulatorHash
         * @property {Uint8Array|null} [consensusDataHash] LedgerInfo consensusDataHash
         * @property {Uint8Array|null} [consensusBlockId] LedgerInfo consensusBlockId
         * @property {number|Long|null} [epochNum] LedgerInfo epochNum
         * @property {number|Long|null} [timestampUsecs] LedgerInfo timestampUsecs
         */

        /**
         * Constructs a new LedgerInfo.
         * @memberof types
         * @classdesc commit
         * @implements ILedgerInfo
         * @constructor
         * @param {types.ILedgerInfo=} [properties] Properties to set
         */
        function LedgerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LedgerInfo version.
         * @member {number|Long} version
         * @memberof types.LedgerInfo
         * @instance
         */
        LedgerInfo.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LedgerInfo transactionAccumulatorHash.
         * @member {Uint8Array} transactionAccumulatorHash
         * @memberof types.LedgerInfo
         * @instance
         */
        LedgerInfo.prototype.transactionAccumulatorHash = $util.newBuffer([]);

        /**
         * LedgerInfo consensusDataHash.
         * @member {Uint8Array} consensusDataHash
         * @memberof types.LedgerInfo
         * @instance
         */
        LedgerInfo.prototype.consensusDataHash = $util.newBuffer([]);

        /**
         * LedgerInfo consensusBlockId.
         * @member {Uint8Array} consensusBlockId
         * @memberof types.LedgerInfo
         * @instance
         */
        LedgerInfo.prototype.consensusBlockId = $util.newBuffer([]);

        /**
         * LedgerInfo epochNum.
         * @member {number|Long} epochNum
         * @memberof types.LedgerInfo
         * @instance
         */
        LedgerInfo.prototype.epochNum = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LedgerInfo timestampUsecs.
         * @member {number|Long} timestampUsecs
         * @memberof types.LedgerInfo
         * @instance
         */
        LedgerInfo.prototype.timestampUsecs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new LedgerInfo instance using the specified properties.
         * @function create
         * @memberof types.LedgerInfo
         * @static
         * @param {types.ILedgerInfo=} [properties] Properties to set
         * @returns {types.LedgerInfo} LedgerInfo instance
         */
        LedgerInfo.create = function create(properties) {
            return new LedgerInfo(properties);
        };

        /**
         * Encodes the specified LedgerInfo message. Does not implicitly {@link types.LedgerInfo.verify|verify} messages.
         * @function encode
         * @memberof types.LedgerInfo
         * @static
         * @param {types.ILedgerInfo} message LedgerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LedgerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.transactionAccumulatorHash != null && message.hasOwnProperty("transactionAccumulatorHash"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.transactionAccumulatorHash);
            if (message.consensusDataHash != null && message.hasOwnProperty("consensusDataHash"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.consensusDataHash);
            if (message.consensusBlockId != null && message.hasOwnProperty("consensusBlockId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.consensusBlockId);
            if (message.epochNum != null && message.hasOwnProperty("epochNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.epochNum);
            if (message.timestampUsecs != null && message.hasOwnProperty("timestampUsecs"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.timestampUsecs);
            return writer;
        };

        /**
         * Encodes the specified LedgerInfo message, length delimited. Does not implicitly {@link types.LedgerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.LedgerInfo
         * @static
         * @param {types.ILedgerInfo} message LedgerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LedgerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LedgerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof types.LedgerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.LedgerInfo} LedgerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LedgerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.LedgerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint64();
                    break;
                case 2:
                    message.transactionAccumulatorHash = reader.bytes();
                    break;
                case 3:
                    message.consensusDataHash = reader.bytes();
                    break;
                case 4:
                    message.consensusBlockId = reader.bytes();
                    break;
                case 5:
                    message.epochNum = reader.uint64();
                    break;
                case 6:
                    message.timestampUsecs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LedgerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.LedgerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.LedgerInfo} LedgerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LedgerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LedgerInfo message.
         * @function verify
         * @memberof types.LedgerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LedgerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.transactionAccumulatorHash != null && message.hasOwnProperty("transactionAccumulatorHash"))
                if (!(message.transactionAccumulatorHash && typeof message.transactionAccumulatorHash.length === "number" || $util.isString(message.transactionAccumulatorHash)))
                    return "transactionAccumulatorHash: buffer expected";
            if (message.consensusDataHash != null && message.hasOwnProperty("consensusDataHash"))
                if (!(message.consensusDataHash && typeof message.consensusDataHash.length === "number" || $util.isString(message.consensusDataHash)))
                    return "consensusDataHash: buffer expected";
            if (message.consensusBlockId != null && message.hasOwnProperty("consensusBlockId"))
                if (!(message.consensusBlockId && typeof message.consensusBlockId.length === "number" || $util.isString(message.consensusBlockId)))
                    return "consensusBlockId: buffer expected";
            if (message.epochNum != null && message.hasOwnProperty("epochNum"))
                if (!$util.isInteger(message.epochNum) && !(message.epochNum && $util.isInteger(message.epochNum.low) && $util.isInteger(message.epochNum.high)))
                    return "epochNum: integer|Long expected";
            if (message.timestampUsecs != null && message.hasOwnProperty("timestampUsecs"))
                if (!$util.isInteger(message.timestampUsecs) && !(message.timestampUsecs && $util.isInteger(message.timestampUsecs.low) && $util.isInteger(message.timestampUsecs.high)))
                    return "timestampUsecs: integer|Long expected";
            return null;
        };

        /**
         * Creates a LedgerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.LedgerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.LedgerInfo} LedgerInfo
         */
        LedgerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.types.LedgerInfo)
                return object;
            var message = new $root.types.LedgerInfo();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.transactionAccumulatorHash != null)
                if (typeof object.transactionAccumulatorHash === "string")
                    $util.base64.decode(object.transactionAccumulatorHash, message.transactionAccumulatorHash = $util.newBuffer($util.base64.length(object.transactionAccumulatorHash)), 0);
                else if (object.transactionAccumulatorHash.length)
                    message.transactionAccumulatorHash = object.transactionAccumulatorHash;
            if (object.consensusDataHash != null)
                if (typeof object.consensusDataHash === "string")
                    $util.base64.decode(object.consensusDataHash, message.consensusDataHash = $util.newBuffer($util.base64.length(object.consensusDataHash)), 0);
                else if (object.consensusDataHash.length)
                    message.consensusDataHash = object.consensusDataHash;
            if (object.consensusBlockId != null)
                if (typeof object.consensusBlockId === "string")
                    $util.base64.decode(object.consensusBlockId, message.consensusBlockId = $util.newBuffer($util.base64.length(object.consensusBlockId)), 0);
                else if (object.consensusBlockId.length)
                    message.consensusBlockId = object.consensusBlockId;
            if (object.epochNum != null)
                if ($util.Long)
                    (message.epochNum = $util.Long.fromValue(object.epochNum)).unsigned = true;
                else if (typeof object.epochNum === "string")
                    message.epochNum = parseInt(object.epochNum, 10);
                else if (typeof object.epochNum === "number")
                    message.epochNum = object.epochNum;
                else if (typeof object.epochNum === "object")
                    message.epochNum = new $util.LongBits(object.epochNum.low >>> 0, object.epochNum.high >>> 0).toNumber(true);
            if (object.timestampUsecs != null)
                if ($util.Long)
                    (message.timestampUsecs = $util.Long.fromValue(object.timestampUsecs)).unsigned = true;
                else if (typeof object.timestampUsecs === "string")
                    message.timestampUsecs = parseInt(object.timestampUsecs, 10);
                else if (typeof object.timestampUsecs === "number")
                    message.timestampUsecs = object.timestampUsecs;
                else if (typeof object.timestampUsecs === "object")
                    message.timestampUsecs = new $util.LongBits(object.timestampUsecs.low >>> 0, object.timestampUsecs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LedgerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.LedgerInfo
         * @static
         * @param {types.LedgerInfo} message LedgerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LedgerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.transactionAccumulatorHash = "";
                else {
                    object.transactionAccumulatorHash = [];
                    if (options.bytes !== Array)
                        object.transactionAccumulatorHash = $util.newBuffer(object.transactionAccumulatorHash);
                }
                if (options.bytes === String)
                    object.consensusDataHash = "";
                else {
                    object.consensusDataHash = [];
                    if (options.bytes !== Array)
                        object.consensusDataHash = $util.newBuffer(object.consensusDataHash);
                }
                if (options.bytes === String)
                    object.consensusBlockId = "";
                else {
                    object.consensusBlockId = [];
                    if (options.bytes !== Array)
                        object.consensusBlockId = $util.newBuffer(object.consensusBlockId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.epochNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.epochNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestampUsecs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestampUsecs = options.longs === String ? "0" : 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.transactionAccumulatorHash != null && message.hasOwnProperty("transactionAccumulatorHash"))
                object.transactionAccumulatorHash = options.bytes === String ? $util.base64.encode(message.transactionAccumulatorHash, 0, message.transactionAccumulatorHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionAccumulatorHash) : message.transactionAccumulatorHash;
            if (message.consensusDataHash != null && message.hasOwnProperty("consensusDataHash"))
                object.consensusDataHash = options.bytes === String ? $util.base64.encode(message.consensusDataHash, 0, message.consensusDataHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.consensusDataHash) : message.consensusDataHash;
            if (message.consensusBlockId != null && message.hasOwnProperty("consensusBlockId"))
                object.consensusBlockId = options.bytes === String ? $util.base64.encode(message.consensusBlockId, 0, message.consensusBlockId.length) : options.bytes === Array ? Array.prototype.slice.call(message.consensusBlockId) : message.consensusBlockId;
            if (message.epochNum != null && message.hasOwnProperty("epochNum"))
                if (typeof message.epochNum === "number")
                    object.epochNum = options.longs === String ? String(message.epochNum) : message.epochNum;
                else
                    object.epochNum = options.longs === String ? $util.Long.prototype.toString.call(message.epochNum) : options.longs === Number ? new $util.LongBits(message.epochNum.low >>> 0, message.epochNum.high >>> 0).toNumber(true) : message.epochNum;
            if (message.timestampUsecs != null && message.hasOwnProperty("timestampUsecs"))
                if (typeof message.timestampUsecs === "number")
                    object.timestampUsecs = options.longs === String ? String(message.timestampUsecs) : message.timestampUsecs;
                else
                    object.timestampUsecs = options.longs === String ? $util.Long.prototype.toString.call(message.timestampUsecs) : options.longs === Number ? new $util.LongBits(message.timestampUsecs.low >>> 0, message.timestampUsecs.high >>> 0).toNumber(true) : message.timestampUsecs;
            return object;
        };

        /**
         * Converts this LedgerInfo to JSON.
         * @function toJSON
         * @memberof types.LedgerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LedgerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LedgerInfo;
    })();

    types.LedgerInfoWithSignatures = (function() {

        /**
         * Properties of a LedgerInfoWithSignatures.
         * @memberof types
         * @interface ILedgerInfoWithSignatures
         * @property {Array.<types.IValidatorSignature>|null} [signatures] LedgerInfoWithSignatures signatures
         * @property {types.ILedgerInfo|null} [ledgerInfo] LedgerInfoWithSignatures ledgerInfo
         */

        /**
         * Constructs a new LedgerInfoWithSignatures.
         * @memberof types
         * @classdesc for the client to be able to verify the state
         * @implements ILedgerInfoWithSignatures
         * @constructor
         * @param {types.ILedgerInfoWithSignatures=} [properties] Properties to set
         */
        function LedgerInfoWithSignatures(properties) {
            this.signatures = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LedgerInfoWithSignatures signatures.
         * @member {Array.<types.IValidatorSignature>} signatures
         * @memberof types.LedgerInfoWithSignatures
         * @instance
         */
        LedgerInfoWithSignatures.prototype.signatures = $util.emptyArray;

        /**
         * LedgerInfoWithSignatures ledgerInfo.
         * @member {types.ILedgerInfo|null|undefined} ledgerInfo
         * @memberof types.LedgerInfoWithSignatures
         * @instance
         */
        LedgerInfoWithSignatures.prototype.ledgerInfo = null;

        /**
         * Creates a new LedgerInfoWithSignatures instance using the specified properties.
         * @function create
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {types.ILedgerInfoWithSignatures=} [properties] Properties to set
         * @returns {types.LedgerInfoWithSignatures} LedgerInfoWithSignatures instance
         */
        LedgerInfoWithSignatures.create = function create(properties) {
            return new LedgerInfoWithSignatures(properties);
        };

        /**
         * Encodes the specified LedgerInfoWithSignatures message. Does not implicitly {@link types.LedgerInfoWithSignatures.verify|verify} messages.
         * @function encode
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {types.ILedgerInfoWithSignatures} message LedgerInfoWithSignatures message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LedgerInfoWithSignatures.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signatures != null && message.signatures.length)
                for (var i = 0; i < message.signatures.length; ++i)
                    $root.types.ValidatorSignature.encode(message.signatures[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ledgerInfo != null && message.hasOwnProperty("ledgerInfo"))
                $root.types.LedgerInfo.encode(message.ledgerInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LedgerInfoWithSignatures message, length delimited. Does not implicitly {@link types.LedgerInfoWithSignatures.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {types.ILedgerInfoWithSignatures} message LedgerInfoWithSignatures message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LedgerInfoWithSignatures.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LedgerInfoWithSignatures message from the specified reader or buffer.
         * @function decode
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.LedgerInfoWithSignatures} LedgerInfoWithSignatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LedgerInfoWithSignatures.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.LedgerInfoWithSignatures();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.signatures && message.signatures.length))
                        message.signatures = [];
                    message.signatures.push($root.types.ValidatorSignature.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ledgerInfo = $root.types.LedgerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LedgerInfoWithSignatures message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.LedgerInfoWithSignatures} LedgerInfoWithSignatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LedgerInfoWithSignatures.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LedgerInfoWithSignatures message.
         * @function verify
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LedgerInfoWithSignatures.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signatures != null && message.hasOwnProperty("signatures")) {
                if (!Array.isArray(message.signatures))
                    return "signatures: array expected";
                for (var i = 0; i < message.signatures.length; ++i) {
                    var error = $root.types.ValidatorSignature.verify(message.signatures[i]);
                    if (error)
                        return "signatures." + error;
                }
            }
            if (message.ledgerInfo != null && message.hasOwnProperty("ledgerInfo")) {
                var error = $root.types.LedgerInfo.verify(message.ledgerInfo);
                if (error)
                    return "ledgerInfo." + error;
            }
            return null;
        };

        /**
         * Creates a LedgerInfoWithSignatures message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.LedgerInfoWithSignatures} LedgerInfoWithSignatures
         */
        LedgerInfoWithSignatures.fromObject = function fromObject(object) {
            if (object instanceof $root.types.LedgerInfoWithSignatures)
                return object;
            var message = new $root.types.LedgerInfoWithSignatures();
            if (object.signatures) {
                if (!Array.isArray(object.signatures))
                    throw TypeError(".types.LedgerInfoWithSignatures.signatures: array expected");
                message.signatures = [];
                for (var i = 0; i < object.signatures.length; ++i) {
                    if (typeof object.signatures[i] !== "object")
                        throw TypeError(".types.LedgerInfoWithSignatures.signatures: object expected");
                    message.signatures[i] = $root.types.ValidatorSignature.fromObject(object.signatures[i]);
                }
            }
            if (object.ledgerInfo != null) {
                if (typeof object.ledgerInfo !== "object")
                    throw TypeError(".types.LedgerInfoWithSignatures.ledgerInfo: object expected");
                message.ledgerInfo = $root.types.LedgerInfo.fromObject(object.ledgerInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a LedgerInfoWithSignatures message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.LedgerInfoWithSignatures
         * @static
         * @param {types.LedgerInfoWithSignatures} message LedgerInfoWithSignatures
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LedgerInfoWithSignatures.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.signatures = [];
            if (options.defaults)
                object.ledgerInfo = null;
            if (message.signatures && message.signatures.length) {
                object.signatures = [];
                for (var j = 0; j < message.signatures.length; ++j)
                    object.signatures[j] = $root.types.ValidatorSignature.toObject(message.signatures[j], options);
            }
            if (message.ledgerInfo != null && message.hasOwnProperty("ledgerInfo"))
                object.ledgerInfo = $root.types.LedgerInfo.toObject(message.ledgerInfo, options);
            return object;
        };

        /**
         * Converts this LedgerInfoWithSignatures to JSON.
         * @function toJSON
         * @memberof types.LedgerInfoWithSignatures
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LedgerInfoWithSignatures.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LedgerInfoWithSignatures;
    })();

    types.ValidatorSignature = (function() {

        /**
         * Properties of a ValidatorSignature.
         * @memberof types
         * @interface IValidatorSignature
         * @property {Uint8Array|null} [validatorId] ValidatorSignature validatorId
         * @property {Uint8Array|null} [signature] ValidatorSignature signature
         */

        /**
         * Constructs a new ValidatorSignature.
         * @memberof types
         * @classdesc Represents a ValidatorSignature.
         * @implements IValidatorSignature
         * @constructor
         * @param {types.IValidatorSignature=} [properties] Properties to set
         */
        function ValidatorSignature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidatorSignature validatorId.
         * @member {Uint8Array} validatorId
         * @memberof types.ValidatorSignature
         * @instance
         */
        ValidatorSignature.prototype.validatorId = $util.newBuffer([]);

        /**
         * ValidatorSignature signature.
         * @member {Uint8Array} signature
         * @memberof types.ValidatorSignature
         * @instance
         */
        ValidatorSignature.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new ValidatorSignature instance using the specified properties.
         * @function create
         * @memberof types.ValidatorSignature
         * @static
         * @param {types.IValidatorSignature=} [properties] Properties to set
         * @returns {types.ValidatorSignature} ValidatorSignature instance
         */
        ValidatorSignature.create = function create(properties) {
            return new ValidatorSignature(properties);
        };

        /**
         * Encodes the specified ValidatorSignature message. Does not implicitly {@link types.ValidatorSignature.verify|verify} messages.
         * @function encode
         * @memberof types.ValidatorSignature
         * @static
         * @param {types.IValidatorSignature} message ValidatorSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorSignature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.validatorId != null && message.hasOwnProperty("validatorId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.validatorId);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified ValidatorSignature message, length delimited. Does not implicitly {@link types.ValidatorSignature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ValidatorSignature
         * @static
         * @param {types.IValidatorSignature} message ValidatorSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorSignature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValidatorSignature message from the specified reader or buffer.
         * @function decode
         * @memberof types.ValidatorSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ValidatorSignature} ValidatorSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorSignature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ValidatorSignature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.validatorId = reader.bytes();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValidatorSignature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ValidatorSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ValidatorSignature} ValidatorSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorSignature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValidatorSignature message.
         * @function verify
         * @memberof types.ValidatorSignature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValidatorSignature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.validatorId != null && message.hasOwnProperty("validatorId"))
                if (!(message.validatorId && typeof message.validatorId.length === "number" || $util.isString(message.validatorId)))
                    return "validatorId: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a ValidatorSignature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ValidatorSignature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ValidatorSignature} ValidatorSignature
         */
        ValidatorSignature.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ValidatorSignature)
                return object;
            var message = new $root.types.ValidatorSignature();
            if (object.validatorId != null)
                if (typeof object.validatorId === "string")
                    $util.base64.decode(object.validatorId, message.validatorId = $util.newBuffer($util.base64.length(object.validatorId)), 0);
                else if (object.validatorId.length)
                    message.validatorId = object.validatorId;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a ValidatorSignature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ValidatorSignature
         * @static
         * @param {types.ValidatorSignature} message ValidatorSignature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidatorSignature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.validatorId = "";
                else {
                    object.validatorId = [];
                    if (options.bytes !== Array)
                        object.validatorId = $util.newBuffer(object.validatorId);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.validatorId != null && message.hasOwnProperty("validatorId"))
                object.validatorId = options.bytes === String ? $util.base64.encode(message.validatorId, 0, message.validatorId.length) : options.bytes === Array ? Array.prototype.slice.call(message.validatorId) : message.validatorId;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this ValidatorSignature to JSON.
         * @function toJSON
         * @memberof types.ValidatorSignature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidatorSignature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidatorSignature;
    })();

    types.RawTransaction = (function() {

        /**
         * Properties of a RawTransaction.
         * @memberof types
         * @interface IRawTransaction
         * @property {Uint8Array|null} [senderAccount] RawTransaction senderAccount
         * @property {number|Long|null} [sequenceNumber] RawTransaction sequenceNumber
         * @property {types.IProgram|null} [program] RawTransaction program
         * @property {types.IWriteSet|null} [writeSet] RawTransaction writeSet
         * @property {number|Long|null} [maxGasAmount] RawTransaction maxGasAmount
         * @property {number|Long|null} [gasUnitPrice] RawTransaction gasUnitPrice
         * @property {number|Long|null} [expirationTime] RawTransaction expirationTime
         */

        /**
         * Constructs a new RawTransaction.
         * @memberof types
         * @classdesc Represents a RawTransaction.
         * @implements IRawTransaction
         * @constructor
         * @param {types.IRawTransaction=} [properties] Properties to set
         */
        function RawTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RawTransaction senderAccount.
         * @member {Uint8Array} senderAccount
         * @memberof types.RawTransaction
         * @instance
         */
        RawTransaction.prototype.senderAccount = $util.newBuffer([]);

        /**
         * RawTransaction sequenceNumber.
         * @member {number|Long} sequenceNumber
         * @memberof types.RawTransaction
         * @instance
         */
        RawTransaction.prototype.sequenceNumber = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RawTransaction program.
         * @member {types.IProgram|null|undefined} program
         * @memberof types.RawTransaction
         * @instance
         */
        RawTransaction.prototype.program = null;

        /**
         * RawTransaction writeSet.
         * @member {types.IWriteSet|null|undefined} writeSet
         * @memberof types.RawTransaction
         * @instance
         */
        RawTransaction.prototype.writeSet = null;

        /**
         * RawTransaction maxGasAmount.
         * @member {number|Long} maxGasAmount
         * @memberof types.RawTransaction
         * @instance
         */
        RawTransaction.prototype.maxGasAmount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RawTransaction gasUnitPrice.
         * @member {number|Long} gasUnitPrice
         * @memberof types.RawTransaction
         * @instance
         */
        RawTransaction.prototype.gasUnitPrice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RawTransaction expirationTime.
         * @member {number|Long} expirationTime
         * @memberof types.RawTransaction
         * @instance
         */
        RawTransaction.prototype.expirationTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RawTransaction payload.
         * @member {"program"|"writeSet"|undefined} payload
         * @memberof types.RawTransaction
         * @instance
         */
        Object.defineProperty(RawTransaction.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["program", "writeSet"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RawTransaction instance using the specified properties.
         * @function create
         * @memberof types.RawTransaction
         * @static
         * @param {types.IRawTransaction=} [properties] Properties to set
         * @returns {types.RawTransaction} RawTransaction instance
         */
        RawTransaction.create = function create(properties) {
            return new RawTransaction(properties);
        };

        /**
         * Encodes the specified RawTransaction message. Does not implicitly {@link types.RawTransaction.verify|verify} messages.
         * @function encode
         * @memberof types.RawTransaction
         * @static
         * @param {types.IRawTransaction} message RawTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RawTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderAccount != null && message.hasOwnProperty("senderAccount"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.senderAccount);
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.sequenceNumber);
            if (message.program != null && message.hasOwnProperty("program"))
                $root.types.Program.encode(message.program, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.writeSet != null && message.hasOwnProperty("writeSet"))
                $root.types.WriteSet.encode(message.writeSet, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.maxGasAmount != null && message.hasOwnProperty("maxGasAmount"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.maxGasAmount);
            if (message.gasUnitPrice != null && message.hasOwnProperty("gasUnitPrice"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.gasUnitPrice);
            if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.expirationTime);
            return writer;
        };

        /**
         * Encodes the specified RawTransaction message, length delimited. Does not implicitly {@link types.RawTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.RawTransaction
         * @static
         * @param {types.IRawTransaction} message RawTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RawTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RawTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof types.RawTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.RawTransaction} RawTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RawTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.RawTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.senderAccount = reader.bytes();
                    break;
                case 2:
                    message.sequenceNumber = reader.uint64();
                    break;
                case 3:
                    message.program = $root.types.Program.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.writeSet = $root.types.WriteSet.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxGasAmount = reader.uint64();
                    break;
                case 6:
                    message.gasUnitPrice = reader.uint64();
                    break;
                case 7:
                    message.expirationTime = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RawTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.RawTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.RawTransaction} RawTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RawTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RawTransaction message.
         * @function verify
         * @memberof types.RawTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RawTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.senderAccount != null && message.hasOwnProperty("senderAccount"))
                if (!(message.senderAccount && typeof message.senderAccount.length === "number" || $util.isString(message.senderAccount)))
                    return "senderAccount: buffer expected";
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                if (!$util.isInteger(message.sequenceNumber) && !(message.sequenceNumber && $util.isInteger(message.sequenceNumber.low) && $util.isInteger(message.sequenceNumber.high)))
                    return "sequenceNumber: integer|Long expected";
            if (message.program != null && message.hasOwnProperty("program")) {
                properties.payload = 1;
                {
                    var error = $root.types.Program.verify(message.program);
                    if (error)
                        return "program." + error;
                }
            }
            if (message.writeSet != null && message.hasOwnProperty("writeSet")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.WriteSet.verify(message.writeSet);
                    if (error)
                        return "writeSet." + error;
                }
            }
            if (message.maxGasAmount != null && message.hasOwnProperty("maxGasAmount"))
                if (!$util.isInteger(message.maxGasAmount) && !(message.maxGasAmount && $util.isInteger(message.maxGasAmount.low) && $util.isInteger(message.maxGasAmount.high)))
                    return "maxGasAmount: integer|Long expected";
            if (message.gasUnitPrice != null && message.hasOwnProperty("gasUnitPrice"))
                if (!$util.isInteger(message.gasUnitPrice) && !(message.gasUnitPrice && $util.isInteger(message.gasUnitPrice.low) && $util.isInteger(message.gasUnitPrice.high)))
                    return "gasUnitPrice: integer|Long expected";
            if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                if (!$util.isInteger(message.expirationTime) && !(message.expirationTime && $util.isInteger(message.expirationTime.low) && $util.isInteger(message.expirationTime.high)))
                    return "expirationTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a RawTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.RawTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.RawTransaction} RawTransaction
         */
        RawTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.types.RawTransaction)
                return object;
            var message = new $root.types.RawTransaction();
            if (object.senderAccount != null)
                if (typeof object.senderAccount === "string")
                    $util.base64.decode(object.senderAccount, message.senderAccount = $util.newBuffer($util.base64.length(object.senderAccount)), 0);
                else if (object.senderAccount.length)
                    message.senderAccount = object.senderAccount;
            if (object.sequenceNumber != null)
                if ($util.Long)
                    (message.sequenceNumber = $util.Long.fromValue(object.sequenceNumber)).unsigned = true;
                else if (typeof object.sequenceNumber === "string")
                    message.sequenceNumber = parseInt(object.sequenceNumber, 10);
                else if (typeof object.sequenceNumber === "number")
                    message.sequenceNumber = object.sequenceNumber;
                else if (typeof object.sequenceNumber === "object")
                    message.sequenceNumber = new $util.LongBits(object.sequenceNumber.low >>> 0, object.sequenceNumber.high >>> 0).toNumber(true);
            if (object.program != null) {
                if (typeof object.program !== "object")
                    throw TypeError(".types.RawTransaction.program: object expected");
                message.program = $root.types.Program.fromObject(object.program);
            }
            if (object.writeSet != null) {
                if (typeof object.writeSet !== "object")
                    throw TypeError(".types.RawTransaction.writeSet: object expected");
                message.writeSet = $root.types.WriteSet.fromObject(object.writeSet);
            }
            if (object.maxGasAmount != null)
                if ($util.Long)
                    (message.maxGasAmount = $util.Long.fromValue(object.maxGasAmount)).unsigned = true;
                else if (typeof object.maxGasAmount === "string")
                    message.maxGasAmount = parseInt(object.maxGasAmount, 10);
                else if (typeof object.maxGasAmount === "number")
                    message.maxGasAmount = object.maxGasAmount;
                else if (typeof object.maxGasAmount === "object")
                    message.maxGasAmount = new $util.LongBits(object.maxGasAmount.low >>> 0, object.maxGasAmount.high >>> 0).toNumber(true);
            if (object.gasUnitPrice != null)
                if ($util.Long)
                    (message.gasUnitPrice = $util.Long.fromValue(object.gasUnitPrice)).unsigned = true;
                else if (typeof object.gasUnitPrice === "string")
                    message.gasUnitPrice = parseInt(object.gasUnitPrice, 10);
                else if (typeof object.gasUnitPrice === "number")
                    message.gasUnitPrice = object.gasUnitPrice;
                else if (typeof object.gasUnitPrice === "object")
                    message.gasUnitPrice = new $util.LongBits(object.gasUnitPrice.low >>> 0, object.gasUnitPrice.high >>> 0).toNumber(true);
            if (object.expirationTime != null)
                if ($util.Long)
                    (message.expirationTime = $util.Long.fromValue(object.expirationTime)).unsigned = true;
                else if (typeof object.expirationTime === "string")
                    message.expirationTime = parseInt(object.expirationTime, 10);
                else if (typeof object.expirationTime === "number")
                    message.expirationTime = object.expirationTime;
                else if (typeof object.expirationTime === "object")
                    message.expirationTime = new $util.LongBits(object.expirationTime.low >>> 0, object.expirationTime.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RawTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.RawTransaction
         * @static
         * @param {types.RawTransaction} message RawTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RawTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.senderAccount = "";
                else {
                    object.senderAccount = [];
                    if (options.bytes !== Array)
                        object.senderAccount = $util.newBuffer(object.senderAccount);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sequenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequenceNumber = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.maxGasAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxGasAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gasUnitPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gasUnitPrice = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.expirationTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expirationTime = options.longs === String ? "0" : 0;
            }
            if (message.senderAccount != null && message.hasOwnProperty("senderAccount"))
                object.senderAccount = options.bytes === String ? $util.base64.encode(message.senderAccount, 0, message.senderAccount.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderAccount) : message.senderAccount;
            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                if (typeof message.sequenceNumber === "number")
                    object.sequenceNumber = options.longs === String ? String(message.sequenceNumber) : message.sequenceNumber;
                else
                    object.sequenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceNumber) : options.longs === Number ? new $util.LongBits(message.sequenceNumber.low >>> 0, message.sequenceNumber.high >>> 0).toNumber(true) : message.sequenceNumber;
            if (message.program != null && message.hasOwnProperty("program")) {
                object.program = $root.types.Program.toObject(message.program, options);
                if (options.oneofs)
                    object.payload = "program";
            }
            if (message.writeSet != null && message.hasOwnProperty("writeSet")) {
                object.writeSet = $root.types.WriteSet.toObject(message.writeSet, options);
                if (options.oneofs)
                    object.payload = "writeSet";
            }
            if (message.maxGasAmount != null && message.hasOwnProperty("maxGasAmount"))
                if (typeof message.maxGasAmount === "number")
                    object.maxGasAmount = options.longs === String ? String(message.maxGasAmount) : message.maxGasAmount;
                else
                    object.maxGasAmount = options.longs === String ? $util.Long.prototype.toString.call(message.maxGasAmount) : options.longs === Number ? new $util.LongBits(message.maxGasAmount.low >>> 0, message.maxGasAmount.high >>> 0).toNumber(true) : message.maxGasAmount;
            if (message.gasUnitPrice != null && message.hasOwnProperty("gasUnitPrice"))
                if (typeof message.gasUnitPrice === "number")
                    object.gasUnitPrice = options.longs === String ? String(message.gasUnitPrice) : message.gasUnitPrice;
                else
                    object.gasUnitPrice = options.longs === String ? $util.Long.prototype.toString.call(message.gasUnitPrice) : options.longs === Number ? new $util.LongBits(message.gasUnitPrice.low >>> 0, message.gasUnitPrice.high >>> 0).toNumber(true) : message.gasUnitPrice;
            if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                if (typeof message.expirationTime === "number")
                    object.expirationTime = options.longs === String ? String(message.expirationTime) : message.expirationTime;
                else
                    object.expirationTime = options.longs === String ? $util.Long.prototype.toString.call(message.expirationTime) : options.longs === Number ? new $util.LongBits(message.expirationTime.low >>> 0, message.expirationTime.high >>> 0).toNumber(true) : message.expirationTime;
            return object;
        };

        /**
         * Converts this RawTransaction to JSON.
         * @function toJSON
         * @memberof types.RawTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RawTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RawTransaction;
    })();

    types.Program = (function() {

        /**
         * Properties of a Program.
         * @memberof types
         * @interface IProgram
         * @property {Uint8Array|null} [code] Program code
         * @property {Array.<types.ITransactionArgument>|null} ["arguments"] Program arguments
         * @property {Array.<Uint8Array>|null} [modules] Program modules
         */

        /**
         * Constructs a new Program.
         * @memberof types
         * @classdesc Represents a Program.
         * @implements IProgram
         * @constructor
         * @param {types.IProgram=} [properties] Properties to set
         */
        function Program(properties) {
            this["arguments"] = [];
            this.modules = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Program code.
         * @member {Uint8Array} code
         * @memberof types.Program
         * @instance
         */
        Program.prototype.code = $util.newBuffer([]);

        /**
         * Program arguments.
         * @member {Array.<types.ITransactionArgument>} arguments
         * @memberof types.Program
         * @instance
         */
        Program.prototype["arguments"] = $util.emptyArray;

        /**
         * Program modules.
         * @member {Array.<Uint8Array>} modules
         * @memberof types.Program
         * @instance
         */
        Program.prototype.modules = $util.emptyArray;

        /**
         * Creates a new Program instance using the specified properties.
         * @function create
         * @memberof types.Program
         * @static
         * @param {types.IProgram=} [properties] Properties to set
         * @returns {types.Program} Program instance
         */
        Program.create = function create(properties) {
            return new Program(properties);
        };

        /**
         * Encodes the specified Program message. Does not implicitly {@link types.Program.verify|verify} messages.
         * @function encode
         * @memberof types.Program
         * @static
         * @param {types.IProgram} message Program message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Program.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.code);
            if (message["arguments"] != null && message["arguments"].length)
                for (var i = 0; i < message["arguments"].length; ++i)
                    $root.types.TransactionArgument.encode(message["arguments"][i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.modules != null && message.modules.length)
                for (var i = 0; i < message.modules.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.modules[i]);
            return writer;
        };

        /**
         * Encodes the specified Program message, length delimited. Does not implicitly {@link types.Program.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Program
         * @static
         * @param {types.IProgram} message Program message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Program.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Program message from the specified reader or buffer.
         * @function decode
         * @memberof types.Program
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Program} Program
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Program.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Program();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.bytes();
                    break;
                case 2:
                    if (!(message["arguments"] && message["arguments"].length))
                        message["arguments"] = [];
                    message["arguments"].push($root.types.TransactionArgument.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.modules && message.modules.length))
                        message.modules = [];
                    message.modules.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Program message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Program
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Program} Program
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Program.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Program message.
         * @function verify
         * @memberof types.Program
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Program.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!(message.code && typeof message.code.length === "number" || $util.isString(message.code)))
                    return "code: buffer expected";
            if (message["arguments"] != null && message.hasOwnProperty("arguments")) {
                if (!Array.isArray(message["arguments"]))
                    return "arguments: array expected";
                for (var i = 0; i < message["arguments"].length; ++i) {
                    var error = $root.types.TransactionArgument.verify(message["arguments"][i]);
                    if (error)
                        return "arguments." + error;
                }
            }
            if (message.modules != null && message.hasOwnProperty("modules")) {
                if (!Array.isArray(message.modules))
                    return "modules: array expected";
                for (var i = 0; i < message.modules.length; ++i)
                    if (!(message.modules[i] && typeof message.modules[i].length === "number" || $util.isString(message.modules[i])))
                        return "modules: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a Program message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Program
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Program} Program
         */
        Program.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Program)
                return object;
            var message = new $root.types.Program();
            if (object.code != null)
                if (typeof object.code === "string")
                    $util.base64.decode(object.code, message.code = $util.newBuffer($util.base64.length(object.code)), 0);
                else if (object.code.length)
                    message.code = object.code;
            if (object["arguments"]) {
                if (!Array.isArray(object["arguments"]))
                    throw TypeError(".types.Program.arguments: array expected");
                message["arguments"] = [];
                for (var i = 0; i < object["arguments"].length; ++i) {
                    if (typeof object["arguments"][i] !== "object")
                        throw TypeError(".types.Program.arguments: object expected");
                    message["arguments"][i] = $root.types.TransactionArgument.fromObject(object["arguments"][i]);
                }
            }
            if (object.modules) {
                if (!Array.isArray(object.modules))
                    throw TypeError(".types.Program.modules: array expected");
                message.modules = [];
                for (var i = 0; i < object.modules.length; ++i)
                    if (typeof object.modules[i] === "string")
                        $util.base64.decode(object.modules[i], message.modules[i] = $util.newBuffer($util.base64.length(object.modules[i])), 0);
                    else if (object.modules[i].length)
                        message.modules[i] = object.modules[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a Program message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Program
         * @static
         * @param {types.Program} message Program
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Program.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object["arguments"] = [];
                object.modules = [];
            }
            if (options.defaults)
                if (options.bytes === String)
                    object.code = "";
                else {
                    object.code = [];
                    if (options.bytes !== Array)
                        object.code = $util.newBuffer(object.code);
                }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.bytes === String ? $util.base64.encode(message.code, 0, message.code.length) : options.bytes === Array ? Array.prototype.slice.call(message.code) : message.code;
            if (message["arguments"] && message["arguments"].length) {
                object["arguments"] = [];
                for (var j = 0; j < message["arguments"].length; ++j)
                    object["arguments"][j] = $root.types.TransactionArgument.toObject(message["arguments"][j], options);
            }
            if (message.modules && message.modules.length) {
                object.modules = [];
                for (var j = 0; j < message.modules.length; ++j)
                    object.modules[j] = options.bytes === String ? $util.base64.encode(message.modules[j], 0, message.modules[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.modules[j]) : message.modules[j];
            }
            return object;
        };

        /**
         * Converts this Program to JSON.
         * @function toJSON
         * @memberof types.Program
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Program.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Program;
    })();

    types.TransactionArgument = (function() {

        /**
         * Properties of a TransactionArgument.
         * @memberof types
         * @interface ITransactionArgument
         * @property {types.TransactionArgument.ArgType|null} [type] TransactionArgument type
         * @property {Uint8Array|null} [data] TransactionArgument data
         */

        /**
         * Constructs a new TransactionArgument.
         * @memberof types
         * @classdesc Represents a TransactionArgument.
         * @implements ITransactionArgument
         * @constructor
         * @param {types.ITransactionArgument=} [properties] Properties to set
         */
        function TransactionArgument(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransactionArgument type.
         * @member {types.TransactionArgument.ArgType} type
         * @memberof types.TransactionArgument
         * @instance
         */
        TransactionArgument.prototype.type = 0;

        /**
         * TransactionArgument data.
         * @member {Uint8Array} data
         * @memberof types.TransactionArgument
         * @instance
         */
        TransactionArgument.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new TransactionArgument instance using the specified properties.
         * @function create
         * @memberof types.TransactionArgument
         * @static
         * @param {types.ITransactionArgument=} [properties] Properties to set
         * @returns {types.TransactionArgument} TransactionArgument instance
         */
        TransactionArgument.create = function create(properties) {
            return new TransactionArgument(properties);
        };

        /**
         * Encodes the specified TransactionArgument message. Does not implicitly {@link types.TransactionArgument.verify|verify} messages.
         * @function encode
         * @memberof types.TransactionArgument
         * @static
         * @param {types.ITransactionArgument} message TransactionArgument message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionArgument.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified TransactionArgument message, length delimited. Does not implicitly {@link types.TransactionArgument.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.TransactionArgument
         * @static
         * @param {types.ITransactionArgument} message TransactionArgument message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionArgument.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransactionArgument message from the specified reader or buffer.
         * @function decode
         * @memberof types.TransactionArgument
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.TransactionArgument} TransactionArgument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionArgument.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.TransactionArgument();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransactionArgument message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.TransactionArgument
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.TransactionArgument} TransactionArgument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionArgument.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransactionArgument message.
         * @function verify
         * @memberof types.TransactionArgument
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransactionArgument.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a TransactionArgument message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.TransactionArgument
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.TransactionArgument} TransactionArgument
         */
        TransactionArgument.fromObject = function fromObject(object) {
            if (object instanceof $root.types.TransactionArgument)
                return object;
            var message = new $root.types.TransactionArgument();
            switch (object.type) {
            case "U64":
            case 0:
                message.type = 0;
                break;
            case "ADDRESS":
            case 1:
                message.type = 1;
                break;
            case "STRING":
            case 2:
                message.type = 2;
                break;
            case "BYTEARRAY":
            case 3:
                message.type = 3;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a TransactionArgument message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.TransactionArgument
         * @static
         * @param {types.TransactionArgument} message TransactionArgument
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransactionArgument.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "U64" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.types.TransactionArgument.ArgType[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this TransactionArgument to JSON.
         * @function toJSON
         * @memberof types.TransactionArgument
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransactionArgument.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ArgType enum.
         * @name types.TransactionArgument.ArgType
         * @enum {string}
         * @property {number} U64=0 U64 value
         * @property {number} ADDRESS=1 ADDRESS value
         * @property {number} STRING=2 STRING value
         * @property {number} BYTEARRAY=3 BYTEARRAY value
         */
        TransactionArgument.ArgType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "U64"] = 0;
            values[valuesById[1] = "ADDRESS"] = 1;
            values[valuesById[2] = "STRING"] = 2;
            values[valuesById[3] = "BYTEARRAY"] = 3;
            return values;
        })();

        return TransactionArgument;
    })();

    types.SignedTransaction = (function() {

        /**
         * Properties of a SignedTransaction.
         * @memberof types
         * @interface ISignedTransaction
         * @property {Uint8Array|null} [rawTxnBytes] SignedTransaction rawTxnBytes
         * @property {Uint8Array|null} [senderPublicKey] SignedTransaction senderPublicKey
         * @property {Uint8Array|null} [senderSignature] SignedTransaction senderSignature
         */

        /**
         * Constructs a new SignedTransaction.
         * @memberof types
         * @classdesc Represents a SignedTransaction.
         * @implements ISignedTransaction
         * @constructor
         * @param {types.ISignedTransaction=} [properties] Properties to set
         */
        function SignedTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignedTransaction rawTxnBytes.
         * @member {Uint8Array} rawTxnBytes
         * @memberof types.SignedTransaction
         * @instance
         */
        SignedTransaction.prototype.rawTxnBytes = $util.newBuffer([]);

        /**
         * SignedTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof types.SignedTransaction
         * @instance
         */
        SignedTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * SignedTransaction senderSignature.
         * @member {Uint8Array} senderSignature
         * @memberof types.SignedTransaction
         * @instance
         */
        SignedTransaction.prototype.senderSignature = $util.newBuffer([]);

        /**
         * Creates a new SignedTransaction instance using the specified properties.
         * @function create
         * @memberof types.SignedTransaction
         * @static
         * @param {types.ISignedTransaction=} [properties] Properties to set
         * @returns {types.SignedTransaction} SignedTransaction instance
         */
        SignedTransaction.create = function create(properties) {
            return new SignedTransaction(properties);
        };

        /**
         * Encodes the specified SignedTransaction message. Does not implicitly {@link types.SignedTransaction.verify|verify} messages.
         * @function encode
         * @memberof types.SignedTransaction
         * @static
         * @param {types.ISignedTransaction} message SignedTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rawTxnBytes != null && message.hasOwnProperty("rawTxnBytes"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.rawTxnBytes);
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.senderSignature != null && message.hasOwnProperty("senderSignature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderSignature);
            return writer;
        };

        /**
         * Encodes the specified SignedTransaction message, length delimited. Does not implicitly {@link types.SignedTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.SignedTransaction
         * @static
         * @param {types.ISignedTransaction} message SignedTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignedTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof types.SignedTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.SignedTransaction} SignedTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.SignedTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rawTxnBytes = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.senderSignature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignedTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.SignedTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.SignedTransaction} SignedTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignedTransaction message.
         * @function verify
         * @memberof types.SignedTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rawTxnBytes != null && message.hasOwnProperty("rawTxnBytes"))
                if (!(message.rawTxnBytes && typeof message.rawTxnBytes.length === "number" || $util.isString(message.rawTxnBytes)))
                    return "rawTxnBytes: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.senderSignature != null && message.hasOwnProperty("senderSignature"))
                if (!(message.senderSignature && typeof message.senderSignature.length === "number" || $util.isString(message.senderSignature)))
                    return "senderSignature: buffer expected";
            return null;
        };

        /**
         * Creates a SignedTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.SignedTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.SignedTransaction} SignedTransaction
         */
        SignedTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.types.SignedTransaction)
                return object;
            var message = new $root.types.SignedTransaction();
            if (object.rawTxnBytes != null)
                if (typeof object.rawTxnBytes === "string")
                    $util.base64.decode(object.rawTxnBytes, message.rawTxnBytes = $util.newBuffer($util.base64.length(object.rawTxnBytes)), 0);
                else if (object.rawTxnBytes.length)
                    message.rawTxnBytes = object.rawTxnBytes;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.senderSignature != null)
                if (typeof object.senderSignature === "string")
                    $util.base64.decode(object.senderSignature, message.senderSignature = $util.newBuffer($util.base64.length(object.senderSignature)), 0);
                else if (object.senderSignature.length)
                    message.senderSignature = object.senderSignature;
            return message;
        };

        /**
         * Creates a plain object from a SignedTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.SignedTransaction
         * @static
         * @param {types.SignedTransaction} message SignedTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.rawTxnBytes = "";
                else {
                    object.rawTxnBytes = [];
                    if (options.bytes !== Array)
                        object.rawTxnBytes = $util.newBuffer(object.rawTxnBytes);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.senderSignature = "";
                else {
                    object.senderSignature = [];
                    if (options.bytes !== Array)
                        object.senderSignature = $util.newBuffer(object.senderSignature);
                }
            }
            if (message.rawTxnBytes != null && message.hasOwnProperty("rawTxnBytes"))
                object.rawTxnBytes = options.bytes === String ? $util.base64.encode(message.rawTxnBytes, 0, message.rawTxnBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawTxnBytes) : message.rawTxnBytes;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.senderSignature != null && message.hasOwnProperty("senderSignature"))
                object.senderSignature = options.bytes === String ? $util.base64.encode(message.senderSignature, 0, message.senderSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderSignature) : message.senderSignature;
            return object;
        };

        /**
         * Converts this SignedTransaction to JSON.
         * @function toJSON
         * @memberof types.SignedTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignedTransaction;
    })();

    types.SignedTransactionWithProof = (function() {

        /**
         * Properties of a SignedTransactionWithProof.
         * @memberof types
         * @interface ISignedTransactionWithProof
         * @property {number|Long|null} [version] SignedTransactionWithProof version
         * @property {types.ISignedTransaction|null} [signedTransaction] SignedTransactionWithProof signedTransaction
         * @property {types.ISignedTransactionProof|null} [proof] SignedTransactionWithProof proof
         * @property {types.IEventsList|null} [events] SignedTransactionWithProof events
         */

        /**
         * Constructs a new SignedTransactionWithProof.
         * @memberof types
         * @classdesc Represents a SignedTransactionWithProof.
         * @implements ISignedTransactionWithProof
         * @constructor
         * @param {types.ISignedTransactionWithProof=} [properties] Properties to set
         */
        function SignedTransactionWithProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignedTransactionWithProof version.
         * @member {number|Long} version
         * @memberof types.SignedTransactionWithProof
         * @instance
         */
        SignedTransactionWithProof.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SignedTransactionWithProof signedTransaction.
         * @member {types.ISignedTransaction|null|undefined} signedTransaction
         * @memberof types.SignedTransactionWithProof
         * @instance
         */
        SignedTransactionWithProof.prototype.signedTransaction = null;

        /**
         * SignedTransactionWithProof proof.
         * @member {types.ISignedTransactionProof|null|undefined} proof
         * @memberof types.SignedTransactionWithProof
         * @instance
         */
        SignedTransactionWithProof.prototype.proof = null;

        /**
         * SignedTransactionWithProof events.
         * @member {types.IEventsList|null|undefined} events
         * @memberof types.SignedTransactionWithProof
         * @instance
         */
        SignedTransactionWithProof.prototype.events = null;

        /**
         * Creates a new SignedTransactionWithProof instance using the specified properties.
         * @function create
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {types.ISignedTransactionWithProof=} [properties] Properties to set
         * @returns {types.SignedTransactionWithProof} SignedTransactionWithProof instance
         */
        SignedTransactionWithProof.create = function create(properties) {
            return new SignedTransactionWithProof(properties);
        };

        /**
         * Encodes the specified SignedTransactionWithProof message. Does not implicitly {@link types.SignedTransactionWithProof.verify|verify} messages.
         * @function encode
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {types.ISignedTransactionWithProof} message SignedTransactionWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransactionWithProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.signedTransaction != null && message.hasOwnProperty("signedTransaction"))
                $root.types.SignedTransaction.encode(message.signedTransaction, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.proof != null && message.hasOwnProperty("proof"))
                $root.types.SignedTransactionProof.encode(message.proof, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.events != null && message.hasOwnProperty("events"))
                $root.types.EventsList.encode(message.events, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SignedTransactionWithProof message, length delimited. Does not implicitly {@link types.SignedTransactionWithProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {types.ISignedTransactionWithProof} message SignedTransactionWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransactionWithProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignedTransactionWithProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.SignedTransactionWithProof} SignedTransactionWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransactionWithProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.SignedTransactionWithProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint64();
                    break;
                case 2:
                    message.signedTransaction = $root.types.SignedTransaction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.proof = $root.types.SignedTransactionProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.events = $root.types.EventsList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignedTransactionWithProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.SignedTransactionWithProof} SignedTransactionWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransactionWithProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignedTransactionWithProof message.
         * @function verify
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedTransactionWithProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.signedTransaction != null && message.hasOwnProperty("signedTransaction")) {
                var error = $root.types.SignedTransaction.verify(message.signedTransaction);
                if (error)
                    return "signedTransaction." + error;
            }
            if (message.proof != null && message.hasOwnProperty("proof")) {
                var error = $root.types.SignedTransactionProof.verify(message.proof);
                if (error)
                    return "proof." + error;
            }
            if (message.events != null && message.hasOwnProperty("events")) {
                var error = $root.types.EventsList.verify(message.events);
                if (error)
                    return "events." + error;
            }
            return null;
        };

        /**
         * Creates a SignedTransactionWithProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.SignedTransactionWithProof} SignedTransactionWithProof
         */
        SignedTransactionWithProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.SignedTransactionWithProof)
                return object;
            var message = new $root.types.SignedTransactionWithProof();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.signedTransaction != null) {
                if (typeof object.signedTransaction !== "object")
                    throw TypeError(".types.SignedTransactionWithProof.signedTransaction: object expected");
                message.signedTransaction = $root.types.SignedTransaction.fromObject(object.signedTransaction);
            }
            if (object.proof != null) {
                if (typeof object.proof !== "object")
                    throw TypeError(".types.SignedTransactionWithProof.proof: object expected");
                message.proof = $root.types.SignedTransactionProof.fromObject(object.proof);
            }
            if (object.events != null) {
                if (typeof object.events !== "object")
                    throw TypeError(".types.SignedTransactionWithProof.events: object expected");
                message.events = $root.types.EventsList.fromObject(object.events);
            }
            return message;
        };

        /**
         * Creates a plain object from a SignedTransactionWithProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.SignedTransactionWithProof
         * @static
         * @param {types.SignedTransactionWithProof} message SignedTransactionWithProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedTransactionWithProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.signedTransaction = null;
                object.proof = null;
                object.events = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.signedTransaction != null && message.hasOwnProperty("signedTransaction"))
                object.signedTransaction = $root.types.SignedTransaction.toObject(message.signedTransaction, options);
            if (message.proof != null && message.hasOwnProperty("proof"))
                object.proof = $root.types.SignedTransactionProof.toObject(message.proof, options);
            if (message.events != null && message.hasOwnProperty("events"))
                object.events = $root.types.EventsList.toObject(message.events, options);
            return object;
        };

        /**
         * Converts this SignedTransactionWithProof to JSON.
         * @function toJSON
         * @memberof types.SignedTransactionWithProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedTransactionWithProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignedTransactionWithProof;
    })();

    types.SignedTransactionsBlock = (function() {

        /**
         * Properties of a SignedTransactionsBlock.
         * @memberof types
         * @interface ISignedTransactionsBlock
         * @property {Array.<types.ISignedTransaction>|null} [transactions] SignedTransactionsBlock transactions
         * @property {Uint8Array|null} [validatorPublicKey] SignedTransactionsBlock validatorPublicKey
         * @property {Uint8Array|null} [validatorSignature] SignedTransactionsBlock validatorSignature
         */

        /**
         * Constructs a new SignedTransactionsBlock.
         * @memberof types
         * @classdesc Represents a SignedTransactionsBlock.
         * @implements ISignedTransactionsBlock
         * @constructor
         * @param {types.ISignedTransactionsBlock=} [properties] Properties to set
         */
        function SignedTransactionsBlock(properties) {
            this.transactions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignedTransactionsBlock transactions.
         * @member {Array.<types.ISignedTransaction>} transactions
         * @memberof types.SignedTransactionsBlock
         * @instance
         */
        SignedTransactionsBlock.prototype.transactions = $util.emptyArray;

        /**
         * SignedTransactionsBlock validatorPublicKey.
         * @member {Uint8Array} validatorPublicKey
         * @memberof types.SignedTransactionsBlock
         * @instance
         */
        SignedTransactionsBlock.prototype.validatorPublicKey = $util.newBuffer([]);

        /**
         * SignedTransactionsBlock validatorSignature.
         * @member {Uint8Array} validatorSignature
         * @memberof types.SignedTransactionsBlock
         * @instance
         */
        SignedTransactionsBlock.prototype.validatorSignature = $util.newBuffer([]);

        /**
         * Creates a new SignedTransactionsBlock instance using the specified properties.
         * @function create
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {types.ISignedTransactionsBlock=} [properties] Properties to set
         * @returns {types.SignedTransactionsBlock} SignedTransactionsBlock instance
         */
        SignedTransactionsBlock.create = function create(properties) {
            return new SignedTransactionsBlock(properties);
        };

        /**
         * Encodes the specified SignedTransactionsBlock message. Does not implicitly {@link types.SignedTransactionsBlock.verify|verify} messages.
         * @function encode
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {types.ISignedTransactionsBlock} message SignedTransactionsBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransactionsBlock.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transactions != null && message.transactions.length)
                for (var i = 0; i < message.transactions.length; ++i)
                    $root.types.SignedTransaction.encode(message.transactions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.validatorPublicKey != null && message.hasOwnProperty("validatorPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.validatorPublicKey);
            if (message.validatorSignature != null && message.hasOwnProperty("validatorSignature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.validatorSignature);
            return writer;
        };

        /**
         * Encodes the specified SignedTransactionsBlock message, length delimited. Does not implicitly {@link types.SignedTransactionsBlock.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {types.ISignedTransactionsBlock} message SignedTransactionsBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedTransactionsBlock.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignedTransactionsBlock message from the specified reader or buffer.
         * @function decode
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.SignedTransactionsBlock} SignedTransactionsBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransactionsBlock.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.SignedTransactionsBlock();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.transactions && message.transactions.length))
                        message.transactions = [];
                    message.transactions.push($root.types.SignedTransaction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.validatorPublicKey = reader.bytes();
                    break;
                case 3:
                    message.validatorSignature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignedTransactionsBlock message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.SignedTransactionsBlock} SignedTransactionsBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedTransactionsBlock.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignedTransactionsBlock message.
         * @function verify
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedTransactionsBlock.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transactions != null && message.hasOwnProperty("transactions")) {
                if (!Array.isArray(message.transactions))
                    return "transactions: array expected";
                for (var i = 0; i < message.transactions.length; ++i) {
                    var error = $root.types.SignedTransaction.verify(message.transactions[i]);
                    if (error)
                        return "transactions." + error;
                }
            }
            if (message.validatorPublicKey != null && message.hasOwnProperty("validatorPublicKey"))
                if (!(message.validatorPublicKey && typeof message.validatorPublicKey.length === "number" || $util.isString(message.validatorPublicKey)))
                    return "validatorPublicKey: buffer expected";
            if (message.validatorSignature != null && message.hasOwnProperty("validatorSignature"))
                if (!(message.validatorSignature && typeof message.validatorSignature.length === "number" || $util.isString(message.validatorSignature)))
                    return "validatorSignature: buffer expected";
            return null;
        };

        /**
         * Creates a SignedTransactionsBlock message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.SignedTransactionsBlock} SignedTransactionsBlock
         */
        SignedTransactionsBlock.fromObject = function fromObject(object) {
            if (object instanceof $root.types.SignedTransactionsBlock)
                return object;
            var message = new $root.types.SignedTransactionsBlock();
            if (object.transactions) {
                if (!Array.isArray(object.transactions))
                    throw TypeError(".types.SignedTransactionsBlock.transactions: array expected");
                message.transactions = [];
                for (var i = 0; i < object.transactions.length; ++i) {
                    if (typeof object.transactions[i] !== "object")
                        throw TypeError(".types.SignedTransactionsBlock.transactions: object expected");
                    message.transactions[i] = $root.types.SignedTransaction.fromObject(object.transactions[i]);
                }
            }
            if (object.validatorPublicKey != null)
                if (typeof object.validatorPublicKey === "string")
                    $util.base64.decode(object.validatorPublicKey, message.validatorPublicKey = $util.newBuffer($util.base64.length(object.validatorPublicKey)), 0);
                else if (object.validatorPublicKey.length)
                    message.validatorPublicKey = object.validatorPublicKey;
            if (object.validatorSignature != null)
                if (typeof object.validatorSignature === "string")
                    $util.base64.decode(object.validatorSignature, message.validatorSignature = $util.newBuffer($util.base64.length(object.validatorSignature)), 0);
                else if (object.validatorSignature.length)
                    message.validatorSignature = object.validatorSignature;
            return message;
        };

        /**
         * Creates a plain object from a SignedTransactionsBlock message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.SignedTransactionsBlock
         * @static
         * @param {types.SignedTransactionsBlock} message SignedTransactionsBlock
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedTransactionsBlock.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.transactions = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.validatorPublicKey = "";
                else {
                    object.validatorPublicKey = [];
                    if (options.bytes !== Array)
                        object.validatorPublicKey = $util.newBuffer(object.validatorPublicKey);
                }
                if (options.bytes === String)
                    object.validatorSignature = "";
                else {
                    object.validatorSignature = [];
                    if (options.bytes !== Array)
                        object.validatorSignature = $util.newBuffer(object.validatorSignature);
                }
            }
            if (message.transactions && message.transactions.length) {
                object.transactions = [];
                for (var j = 0; j < message.transactions.length; ++j)
                    object.transactions[j] = $root.types.SignedTransaction.toObject(message.transactions[j], options);
            }
            if (message.validatorPublicKey != null && message.hasOwnProperty("validatorPublicKey"))
                object.validatorPublicKey = options.bytes === String ? $util.base64.encode(message.validatorPublicKey, 0, message.validatorPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.validatorPublicKey) : message.validatorPublicKey;
            if (message.validatorSignature != null && message.hasOwnProperty("validatorSignature"))
                object.validatorSignature = options.bytes === String ? $util.base64.encode(message.validatorSignature, 0, message.validatorSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.validatorSignature) : message.validatorSignature;
            return object;
        };

        /**
         * Converts this SignedTransactionsBlock to JSON.
         * @function toJSON
         * @memberof types.SignedTransactionsBlock
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedTransactionsBlock.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignedTransactionsBlock;
    })();

    types.WriteSet = (function() {

        /**
         * Properties of a WriteSet.
         * @memberof types
         * @interface IWriteSet
         * @property {Array.<types.IWriteOp>|null} [writeSet] WriteSet writeSet
         */

        /**
         * Constructs a new WriteSet.
         * @memberof types
         * @classdesc Represents a WriteSet.
         * @implements IWriteSet
         * @constructor
         * @param {types.IWriteSet=} [properties] Properties to set
         */
        function WriteSet(properties) {
            this.writeSet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteSet writeSet.
         * @member {Array.<types.IWriteOp>} writeSet
         * @memberof types.WriteSet
         * @instance
         */
        WriteSet.prototype.writeSet = $util.emptyArray;

        /**
         * Creates a new WriteSet instance using the specified properties.
         * @function create
         * @memberof types.WriteSet
         * @static
         * @param {types.IWriteSet=} [properties] Properties to set
         * @returns {types.WriteSet} WriteSet instance
         */
        WriteSet.create = function create(properties) {
            return new WriteSet(properties);
        };

        /**
         * Encodes the specified WriteSet message. Does not implicitly {@link types.WriteSet.verify|verify} messages.
         * @function encode
         * @memberof types.WriteSet
         * @static
         * @param {types.IWriteSet} message WriteSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.writeSet != null && message.writeSet.length)
                for (var i = 0; i < message.writeSet.length; ++i)
                    $root.types.WriteOp.encode(message.writeSet[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WriteSet message, length delimited. Does not implicitly {@link types.WriteSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.WriteSet
         * @static
         * @param {types.IWriteSet} message WriteSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteSet message from the specified reader or buffer.
         * @function decode
         * @memberof types.WriteSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.WriteSet} WriteSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.WriteSet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.writeSet && message.writeSet.length))
                        message.writeSet = [];
                    message.writeSet.push($root.types.WriteOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WriteSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.WriteSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.WriteSet} WriteSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteSet message.
         * @function verify
         * @memberof types.WriteSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.writeSet != null && message.hasOwnProperty("writeSet")) {
                if (!Array.isArray(message.writeSet))
                    return "writeSet: array expected";
                for (var i = 0; i < message.writeSet.length; ++i) {
                    var error = $root.types.WriteOp.verify(message.writeSet[i]);
                    if (error)
                        return "writeSet." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WriteSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.WriteSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.WriteSet} WriteSet
         */
        WriteSet.fromObject = function fromObject(object) {
            if (object instanceof $root.types.WriteSet)
                return object;
            var message = new $root.types.WriteSet();
            if (object.writeSet) {
                if (!Array.isArray(object.writeSet))
                    throw TypeError(".types.WriteSet.writeSet: array expected");
                message.writeSet = [];
                for (var i = 0; i < object.writeSet.length; ++i) {
                    if (typeof object.writeSet[i] !== "object")
                        throw TypeError(".types.WriteSet.writeSet: object expected");
                    message.writeSet[i] = $root.types.WriteOp.fromObject(object.writeSet[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WriteSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.WriteSet
         * @static
         * @param {types.WriteSet} message WriteSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.writeSet = [];
            if (message.writeSet && message.writeSet.length) {
                object.writeSet = [];
                for (var j = 0; j < message.writeSet.length; ++j)
                    object.writeSet[j] = $root.types.WriteOp.toObject(message.writeSet[j], options);
            }
            return object;
        };

        /**
         * Converts this WriteSet to JSON.
         * @function toJSON
         * @memberof types.WriteSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WriteSet;
    })();

    types.WriteOp = (function() {

        /**
         * Properties of a WriteOp.
         * @memberof types
         * @interface IWriteOp
         * @property {types.IAccessPath|null} [accessPath] WriteOp accessPath
         * @property {Uint8Array|null} [value] WriteOp value
         * @property {types.WriteOpType|null} [type] WriteOp type
         */

        /**
         * Constructs a new WriteOp.
         * @memberof types
         * @classdesc Represents a WriteOp.
         * @implements IWriteOp
         * @constructor
         * @param {types.IWriteOp=} [properties] Properties to set
         */
        function WriteOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteOp accessPath.
         * @member {types.IAccessPath|null|undefined} accessPath
         * @memberof types.WriteOp
         * @instance
         */
        WriteOp.prototype.accessPath = null;

        /**
         * WriteOp value.
         * @member {Uint8Array} value
         * @memberof types.WriteOp
         * @instance
         */
        WriteOp.prototype.value = $util.newBuffer([]);

        /**
         * WriteOp type.
         * @member {types.WriteOpType} type
         * @memberof types.WriteOp
         * @instance
         */
        WriteOp.prototype.type = 0;

        /**
         * Creates a new WriteOp instance using the specified properties.
         * @function create
         * @memberof types.WriteOp
         * @static
         * @param {types.IWriteOp=} [properties] Properties to set
         * @returns {types.WriteOp} WriteOp instance
         */
        WriteOp.create = function create(properties) {
            return new WriteOp(properties);
        };

        /**
         * Encodes the specified WriteOp message. Does not implicitly {@link types.WriteOp.verify|verify} messages.
         * @function encode
         * @memberof types.WriteOp
         * @static
         * @param {types.IWriteOp} message WriteOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accessPath != null && message.hasOwnProperty("accessPath"))
                $root.types.AccessPath.encode(message.accessPath, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified WriteOp message, length delimited. Does not implicitly {@link types.WriteOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.WriteOp
         * @static
         * @param {types.IWriteOp} message WriteOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteOp message from the specified reader or buffer.
         * @function decode
         * @memberof types.WriteOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.WriteOp} WriteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.WriteOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accessPath = $root.types.AccessPath.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WriteOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.WriteOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.WriteOp} WriteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteOp message.
         * @function verify
         * @memberof types.WriteOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accessPath != null && message.hasOwnProperty("accessPath")) {
                var error = $root.types.AccessPath.verify(message.accessPath);
                if (error)
                    return "accessPath." + error;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a WriteOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.WriteOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.WriteOp} WriteOp
         */
        WriteOp.fromObject = function fromObject(object) {
            if (object instanceof $root.types.WriteOp)
                return object;
            var message = new $root.types.WriteOp();
            if (object.accessPath != null) {
                if (typeof object.accessPath !== "object")
                    throw TypeError(".types.WriteOp.accessPath: object expected");
                message.accessPath = $root.types.AccessPath.fromObject(object.accessPath);
            }
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length)
                    message.value = object.value;
            switch (object.type) {
            case "Write":
            case 0:
                message.type = 0;
                break;
            case "Delete":
            case 1:
                message.type = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a WriteOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.WriteOp
         * @static
         * @param {types.WriteOp} message WriteOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accessPath = null;
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
                object.type = options.enums === String ? "Write" : 0;
            }
            if (message.accessPath != null && message.hasOwnProperty("accessPath"))
                object.accessPath = $root.types.AccessPath.toObject(message.accessPath, options);
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.types.WriteOpType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this WriteOp to JSON.
         * @function toJSON
         * @memberof types.WriteOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WriteOp;
    })();

    /**
     * WriteOpType enum.
     * @name types.WriteOpType
     * @enum {string}
     * @property {number} Write=0 Write value
     * @property {number} Delete=1 Delete value
     */
    types.WriteOpType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Write"] = 0;
        values[valuesById[1] = "Delete"] = 1;
        return values;
    })();

    types.AccountState = (function() {

        /**
         * Properties of an AccountState.
         * @memberof types
         * @interface IAccountState
         * @property {Uint8Array|null} [address] AccountState address
         * @property {Uint8Array|null} [blob] AccountState blob
         */

        /**
         * Constructs a new AccountState.
         * @memberof types
         * @classdesc Represents an AccountState.
         * @implements IAccountState
         * @constructor
         * @param {types.IAccountState=} [properties] Properties to set
         */
        function AccountState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountState address.
         * @member {Uint8Array} address
         * @memberof types.AccountState
         * @instance
         */
        AccountState.prototype.address = $util.newBuffer([]);

        /**
         * AccountState blob.
         * @member {Uint8Array} blob
         * @memberof types.AccountState
         * @instance
         */
        AccountState.prototype.blob = $util.newBuffer([]);

        /**
         * Creates a new AccountState instance using the specified properties.
         * @function create
         * @memberof types.AccountState
         * @static
         * @param {types.IAccountState=} [properties] Properties to set
         * @returns {types.AccountState} AccountState instance
         */
        AccountState.create = function create(properties) {
            return new AccountState(properties);
        };

        /**
         * Encodes the specified AccountState message. Does not implicitly {@link types.AccountState.verify|verify} messages.
         * @function encode
         * @memberof types.AccountState
         * @static
         * @param {types.IAccountState} message AccountState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            if (message.blob != null && message.hasOwnProperty("blob"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.blob);
            return writer;
        };

        /**
         * Encodes the specified AccountState message, length delimited. Does not implicitly {@link types.AccountState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AccountState
         * @static
         * @param {types.IAccountState} message AccountState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountState message from the specified reader or buffer.
         * @function decode
         * @memberof types.AccountState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AccountState} AccountState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AccountState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.blob = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AccountState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AccountState} AccountState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountState message.
         * @function verify
         * @memberof types.AccountState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.blob != null && message.hasOwnProperty("blob"))
                if (!(message.blob && typeof message.blob.length === "number" || $util.isString(message.blob)))
                    return "blob: buffer expected";
            return null;
        };

        /**
         * Creates an AccountState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AccountState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AccountState} AccountState
         */
        AccountState.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AccountState)
                return object;
            var message = new $root.types.AccountState();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.blob != null)
                if (typeof object.blob === "string")
                    $util.base64.decode(object.blob, message.blob = $util.newBuffer($util.base64.length(object.blob)), 0);
                else if (object.blob.length)
                    message.blob = object.blob;
            return message;
        };

        /**
         * Creates a plain object from an AccountState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AccountState
         * @static
         * @param {types.AccountState} message AccountState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                if (options.bytes === String)
                    object.blob = "";
                else {
                    object.blob = [];
                    if (options.bytes !== Array)
                        object.blob = $util.newBuffer(object.blob);
                }
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.blob != null && message.hasOwnProperty("blob"))
                object.blob = options.bytes === String ? $util.base64.encode(message.blob, 0, message.blob.length) : options.bytes === Array ? Array.prototype.slice.call(message.blob) : message.blob;
            return object;
        };

        /**
         * Converts this AccountState to JSON.
         * @function toJSON
         * @memberof types.AccountState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountState;
    })();

    types.TransactionToCommit = (function() {

        /**
         * Properties of a TransactionToCommit.
         * @memberof types
         * @interface ITransactionToCommit
         * @property {types.ISignedTransaction|null} [signedTxn] TransactionToCommit signedTxn
         * @property {Array.<types.IAccountState>|null} [accountStates] TransactionToCommit accountStates
         * @property {Array.<types.IEvent>|null} [events] TransactionToCommit events
         * @property {number|Long|null} [gasUsed] TransactionToCommit gasUsed
         */

        /**
         * Constructs a new TransactionToCommit.
         * @memberof types
         * @classdesc Represents a TransactionToCommit.
         * @implements ITransactionToCommit
         * @constructor
         * @param {types.ITransactionToCommit=} [properties] Properties to set
         */
        function TransactionToCommit(properties) {
            this.accountStates = [];
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransactionToCommit signedTxn.
         * @member {types.ISignedTransaction|null|undefined} signedTxn
         * @memberof types.TransactionToCommit
         * @instance
         */
        TransactionToCommit.prototype.signedTxn = null;

        /**
         * TransactionToCommit accountStates.
         * @member {Array.<types.IAccountState>} accountStates
         * @memberof types.TransactionToCommit
         * @instance
         */
        TransactionToCommit.prototype.accountStates = $util.emptyArray;

        /**
         * TransactionToCommit events.
         * @member {Array.<types.IEvent>} events
         * @memberof types.TransactionToCommit
         * @instance
         */
        TransactionToCommit.prototype.events = $util.emptyArray;

        /**
         * TransactionToCommit gasUsed.
         * @member {number|Long} gasUsed
         * @memberof types.TransactionToCommit
         * @instance
         */
        TransactionToCommit.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TransactionToCommit instance using the specified properties.
         * @function create
         * @memberof types.TransactionToCommit
         * @static
         * @param {types.ITransactionToCommit=} [properties] Properties to set
         * @returns {types.TransactionToCommit} TransactionToCommit instance
         */
        TransactionToCommit.create = function create(properties) {
            return new TransactionToCommit(properties);
        };

        /**
         * Encodes the specified TransactionToCommit message. Does not implicitly {@link types.TransactionToCommit.verify|verify} messages.
         * @function encode
         * @memberof types.TransactionToCommit
         * @static
         * @param {types.ITransactionToCommit} message TransactionToCommit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionToCommit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signedTxn != null && message.hasOwnProperty("signedTxn"))
                $root.types.SignedTransaction.encode(message.signedTxn, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.accountStates != null && message.accountStates.length)
                for (var i = 0; i < message.accountStates.length; ++i)
                    $root.types.AccountState.encode(message.accountStates[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.types.Event.encode(message.events[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.gasUsed);
            return writer;
        };

        /**
         * Encodes the specified TransactionToCommit message, length delimited. Does not implicitly {@link types.TransactionToCommit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.TransactionToCommit
         * @static
         * @param {types.ITransactionToCommit} message TransactionToCommit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionToCommit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransactionToCommit message from the specified reader or buffer.
         * @function decode
         * @memberof types.TransactionToCommit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.TransactionToCommit} TransactionToCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionToCommit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.TransactionToCommit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signedTxn = $root.types.SignedTransaction.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.accountStates && message.accountStates.length))
                        message.accountStates = [];
                    message.accountStates.push($root.types.AccountState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.events && message.events.length))
                        message.events = [];
                    message.events.push($root.types.Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.gasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransactionToCommit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.TransactionToCommit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.TransactionToCommit} TransactionToCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionToCommit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransactionToCommit message.
         * @function verify
         * @memberof types.TransactionToCommit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransactionToCommit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signedTxn != null && message.hasOwnProperty("signedTxn")) {
                var error = $root.types.SignedTransaction.verify(message.signedTxn);
                if (error)
                    return "signedTxn." + error;
            }
            if (message.accountStates != null && message.hasOwnProperty("accountStates")) {
                if (!Array.isArray(message.accountStates))
                    return "accountStates: array expected";
                for (var i = 0; i < message.accountStates.length; ++i) {
                    var error = $root.types.AccountState.verify(message.accountStates[i]);
                    if (error)
                        return "accountStates." + error;
                }
            }
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.types.Event.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                if (!$util.isInteger(message.gasUsed) && !(message.gasUsed && $util.isInteger(message.gasUsed.low) && $util.isInteger(message.gasUsed.high)))
                    return "gasUsed: integer|Long expected";
            return null;
        };

        /**
         * Creates a TransactionToCommit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.TransactionToCommit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.TransactionToCommit} TransactionToCommit
         */
        TransactionToCommit.fromObject = function fromObject(object) {
            if (object instanceof $root.types.TransactionToCommit)
                return object;
            var message = new $root.types.TransactionToCommit();
            if (object.signedTxn != null) {
                if (typeof object.signedTxn !== "object")
                    throw TypeError(".types.TransactionToCommit.signedTxn: object expected");
                message.signedTxn = $root.types.SignedTransaction.fromObject(object.signedTxn);
            }
            if (object.accountStates) {
                if (!Array.isArray(object.accountStates))
                    throw TypeError(".types.TransactionToCommit.accountStates: array expected");
                message.accountStates = [];
                for (var i = 0; i < object.accountStates.length; ++i) {
                    if (typeof object.accountStates[i] !== "object")
                        throw TypeError(".types.TransactionToCommit.accountStates: object expected");
                    message.accountStates[i] = $root.types.AccountState.fromObject(object.accountStates[i]);
                }
            }
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".types.TransactionToCommit.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".types.TransactionToCommit.events: object expected");
                    message.events[i] = $root.types.Event.fromObject(object.events[i]);
                }
            }
            if (object.gasUsed != null)
                if ($util.Long)
                    (message.gasUsed = $util.Long.fromValue(object.gasUsed)).unsigned = true;
                else if (typeof object.gasUsed === "string")
                    message.gasUsed = parseInt(object.gasUsed, 10);
                else if (typeof object.gasUsed === "number")
                    message.gasUsed = object.gasUsed;
                else if (typeof object.gasUsed === "object")
                    message.gasUsed = new $util.LongBits(object.gasUsed.low >>> 0, object.gasUsed.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a TransactionToCommit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.TransactionToCommit
         * @static
         * @param {types.TransactionToCommit} message TransactionToCommit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransactionToCommit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.accountStates = [];
                object.events = [];
            }
            if (options.defaults) {
                object.signedTxn = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gasUsed = options.longs === String ? "0" : 0;
            }
            if (message.signedTxn != null && message.hasOwnProperty("signedTxn"))
                object.signedTxn = $root.types.SignedTransaction.toObject(message.signedTxn, options);
            if (message.accountStates && message.accountStates.length) {
                object.accountStates = [];
                for (var j = 0; j < message.accountStates.length; ++j)
                    object.accountStates[j] = $root.types.AccountState.toObject(message.accountStates[j], options);
            }
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.types.Event.toObject(message.events[j], options);
            }
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                if (typeof message.gasUsed === "number")
                    object.gasUsed = options.longs === String ? String(message.gasUsed) : message.gasUsed;
                else
                    object.gasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.gasUsed) : options.longs === Number ? new $util.LongBits(message.gasUsed.low >>> 0, message.gasUsed.high >>> 0).toNumber(true) : message.gasUsed;
            return object;
        };

        /**
         * Converts this TransactionToCommit to JSON.
         * @function toJSON
         * @memberof types.TransactionToCommit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransactionToCommit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransactionToCommit;
    })();

    types.TransactionListWithProof = (function() {

        /**
         * Properties of a TransactionListWithProof.
         * @memberof types
         * @interface ITransactionListWithProof
         * @property {Array.<types.ISignedTransaction>|null} [transactions] TransactionListWithProof transactions
         * @property {Array.<types.ITransactionInfo>|null} [infos] TransactionListWithProof infos
         * @property {types.IEventsForVersions|null} [eventsForVersions] TransactionListWithProof eventsForVersions
         * @property {google.protobuf.IUInt64Value|null} [firstTransactionVersion] TransactionListWithProof firstTransactionVersion
         * @property {types.IAccumulatorProof|null} [proofOfFirstTransaction] TransactionListWithProof proofOfFirstTransaction
         * @property {types.IAccumulatorProof|null} [proofOfLastTransaction] TransactionListWithProof proofOfLastTransaction
         */

        /**
         * Constructs a new TransactionListWithProof.
         * @memberof types
         * @classdesc Represents a TransactionListWithProof.
         * @implements ITransactionListWithProof
         * @constructor
         * @param {types.ITransactionListWithProof=} [properties] Properties to set
         */
        function TransactionListWithProof(properties) {
            this.transactions = [];
            this.infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransactionListWithProof transactions.
         * @member {Array.<types.ISignedTransaction>} transactions
         * @memberof types.TransactionListWithProof
         * @instance
         */
        TransactionListWithProof.prototype.transactions = $util.emptyArray;

        /**
         * TransactionListWithProof infos.
         * @member {Array.<types.ITransactionInfo>} infos
         * @memberof types.TransactionListWithProof
         * @instance
         */
        TransactionListWithProof.prototype.infos = $util.emptyArray;

        /**
         * TransactionListWithProof eventsForVersions.
         * @member {types.IEventsForVersions|null|undefined} eventsForVersions
         * @memberof types.TransactionListWithProof
         * @instance
         */
        TransactionListWithProof.prototype.eventsForVersions = null;

        /**
         * TransactionListWithProof firstTransactionVersion.
         * @member {google.protobuf.IUInt64Value|null|undefined} firstTransactionVersion
         * @memberof types.TransactionListWithProof
         * @instance
         */
        TransactionListWithProof.prototype.firstTransactionVersion = null;

        /**
         * TransactionListWithProof proofOfFirstTransaction.
         * @member {types.IAccumulatorProof|null|undefined} proofOfFirstTransaction
         * @memberof types.TransactionListWithProof
         * @instance
         */
        TransactionListWithProof.prototype.proofOfFirstTransaction = null;

        /**
         * TransactionListWithProof proofOfLastTransaction.
         * @member {types.IAccumulatorProof|null|undefined} proofOfLastTransaction
         * @memberof types.TransactionListWithProof
         * @instance
         */
        TransactionListWithProof.prototype.proofOfLastTransaction = null;

        /**
         * Creates a new TransactionListWithProof instance using the specified properties.
         * @function create
         * @memberof types.TransactionListWithProof
         * @static
         * @param {types.ITransactionListWithProof=} [properties] Properties to set
         * @returns {types.TransactionListWithProof} TransactionListWithProof instance
         */
        TransactionListWithProof.create = function create(properties) {
            return new TransactionListWithProof(properties);
        };

        /**
         * Encodes the specified TransactionListWithProof message. Does not implicitly {@link types.TransactionListWithProof.verify|verify} messages.
         * @function encode
         * @memberof types.TransactionListWithProof
         * @static
         * @param {types.ITransactionListWithProof} message TransactionListWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionListWithProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transactions != null && message.transactions.length)
                for (var i = 0; i < message.transactions.length; ++i)
                    $root.types.SignedTransaction.encode(message.transactions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.infos != null && message.infos.length)
                for (var i = 0; i < message.infos.length; ++i)
                    $root.types.TransactionInfo.encode(message.infos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.eventsForVersions != null && message.hasOwnProperty("eventsForVersions"))
                $root.types.EventsForVersions.encode(message.eventsForVersions, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.firstTransactionVersion != null && message.hasOwnProperty("firstTransactionVersion"))
                $root.google.protobuf.UInt64Value.encode(message.firstTransactionVersion, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.proofOfFirstTransaction != null && message.hasOwnProperty("proofOfFirstTransaction"))
                $root.types.AccumulatorProof.encode(message.proofOfFirstTransaction, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.proofOfLastTransaction != null && message.hasOwnProperty("proofOfLastTransaction"))
                $root.types.AccumulatorProof.encode(message.proofOfLastTransaction, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TransactionListWithProof message, length delimited. Does not implicitly {@link types.TransactionListWithProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.TransactionListWithProof
         * @static
         * @param {types.ITransactionListWithProof} message TransactionListWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionListWithProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransactionListWithProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.TransactionListWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.TransactionListWithProof} TransactionListWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionListWithProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.TransactionListWithProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.transactions && message.transactions.length))
                        message.transactions = [];
                    message.transactions.push($root.types.SignedTransaction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.infos && message.infos.length))
                        message.infos = [];
                    message.infos.push($root.types.TransactionInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.eventsForVersions = $root.types.EventsForVersions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.firstTransactionVersion = $root.google.protobuf.UInt64Value.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proofOfFirstTransaction = $root.types.AccumulatorProof.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.proofOfLastTransaction = $root.types.AccumulatorProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransactionListWithProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.TransactionListWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.TransactionListWithProof} TransactionListWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionListWithProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransactionListWithProof message.
         * @function verify
         * @memberof types.TransactionListWithProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransactionListWithProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transactions != null && message.hasOwnProperty("transactions")) {
                if (!Array.isArray(message.transactions))
                    return "transactions: array expected";
                for (var i = 0; i < message.transactions.length; ++i) {
                    var error = $root.types.SignedTransaction.verify(message.transactions[i]);
                    if (error)
                        return "transactions." + error;
                }
            }
            if (message.infos != null && message.hasOwnProperty("infos")) {
                if (!Array.isArray(message.infos))
                    return "infos: array expected";
                for (var i = 0; i < message.infos.length; ++i) {
                    var error = $root.types.TransactionInfo.verify(message.infos[i]);
                    if (error)
                        return "infos." + error;
                }
            }
            if (message.eventsForVersions != null && message.hasOwnProperty("eventsForVersions")) {
                var error = $root.types.EventsForVersions.verify(message.eventsForVersions);
                if (error)
                    return "eventsForVersions." + error;
            }
            if (message.firstTransactionVersion != null && message.hasOwnProperty("firstTransactionVersion")) {
                var error = $root.google.protobuf.UInt64Value.verify(message.firstTransactionVersion);
                if (error)
                    return "firstTransactionVersion." + error;
            }
            if (message.proofOfFirstTransaction != null && message.hasOwnProperty("proofOfFirstTransaction")) {
                var error = $root.types.AccumulatorProof.verify(message.proofOfFirstTransaction);
                if (error)
                    return "proofOfFirstTransaction." + error;
            }
            if (message.proofOfLastTransaction != null && message.hasOwnProperty("proofOfLastTransaction")) {
                var error = $root.types.AccumulatorProof.verify(message.proofOfLastTransaction);
                if (error)
                    return "proofOfLastTransaction." + error;
            }
            return null;
        };

        /**
         * Creates a TransactionListWithProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.TransactionListWithProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.TransactionListWithProof} TransactionListWithProof
         */
        TransactionListWithProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.TransactionListWithProof)
                return object;
            var message = new $root.types.TransactionListWithProof();
            if (object.transactions) {
                if (!Array.isArray(object.transactions))
                    throw TypeError(".types.TransactionListWithProof.transactions: array expected");
                message.transactions = [];
                for (var i = 0; i < object.transactions.length; ++i) {
                    if (typeof object.transactions[i] !== "object")
                        throw TypeError(".types.TransactionListWithProof.transactions: object expected");
                    message.transactions[i] = $root.types.SignedTransaction.fromObject(object.transactions[i]);
                }
            }
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".types.TransactionListWithProof.infos: array expected");
                message.infos = [];
                for (var i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".types.TransactionListWithProof.infos: object expected");
                    message.infos[i] = $root.types.TransactionInfo.fromObject(object.infos[i]);
                }
            }
            if (object.eventsForVersions != null) {
                if (typeof object.eventsForVersions !== "object")
                    throw TypeError(".types.TransactionListWithProof.eventsForVersions: object expected");
                message.eventsForVersions = $root.types.EventsForVersions.fromObject(object.eventsForVersions);
            }
            if (object.firstTransactionVersion != null) {
                if (typeof object.firstTransactionVersion !== "object")
                    throw TypeError(".types.TransactionListWithProof.firstTransactionVersion: object expected");
                message.firstTransactionVersion = $root.google.protobuf.UInt64Value.fromObject(object.firstTransactionVersion);
            }
            if (object.proofOfFirstTransaction != null) {
                if (typeof object.proofOfFirstTransaction !== "object")
                    throw TypeError(".types.TransactionListWithProof.proofOfFirstTransaction: object expected");
                message.proofOfFirstTransaction = $root.types.AccumulatorProof.fromObject(object.proofOfFirstTransaction);
            }
            if (object.proofOfLastTransaction != null) {
                if (typeof object.proofOfLastTransaction !== "object")
                    throw TypeError(".types.TransactionListWithProof.proofOfLastTransaction: object expected");
                message.proofOfLastTransaction = $root.types.AccumulatorProof.fromObject(object.proofOfLastTransaction);
            }
            return message;
        };

        /**
         * Creates a plain object from a TransactionListWithProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.TransactionListWithProof
         * @static
         * @param {types.TransactionListWithProof} message TransactionListWithProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransactionListWithProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.transactions = [];
                object.infos = [];
            }
            if (options.defaults) {
                object.eventsForVersions = null;
                object.firstTransactionVersion = null;
                object.proofOfFirstTransaction = null;
                object.proofOfLastTransaction = null;
            }
            if (message.transactions && message.transactions.length) {
                object.transactions = [];
                for (var j = 0; j < message.transactions.length; ++j)
                    object.transactions[j] = $root.types.SignedTransaction.toObject(message.transactions[j], options);
            }
            if (message.infos && message.infos.length) {
                object.infos = [];
                for (var j = 0; j < message.infos.length; ++j)
                    object.infos[j] = $root.types.TransactionInfo.toObject(message.infos[j], options);
            }
            if (message.eventsForVersions != null && message.hasOwnProperty("eventsForVersions"))
                object.eventsForVersions = $root.types.EventsForVersions.toObject(message.eventsForVersions, options);
            if (message.firstTransactionVersion != null && message.hasOwnProperty("firstTransactionVersion"))
                object.firstTransactionVersion = $root.google.protobuf.UInt64Value.toObject(message.firstTransactionVersion, options);
            if (message.proofOfFirstTransaction != null && message.hasOwnProperty("proofOfFirstTransaction"))
                object.proofOfFirstTransaction = $root.types.AccumulatorProof.toObject(message.proofOfFirstTransaction, options);
            if (message.proofOfLastTransaction != null && message.hasOwnProperty("proofOfLastTransaction"))
                object.proofOfLastTransaction = $root.types.AccumulatorProof.toObject(message.proofOfLastTransaction, options);
            return object;
        };

        /**
         * Converts this TransactionListWithProof to JSON.
         * @function toJSON
         * @memberof types.TransactionListWithProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransactionListWithProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransactionListWithProof;
    })();

    types.ValidatorChangeEventWithProof = (function() {

        /**
         * Properties of a ValidatorChangeEventWithProof.
         * @memberof types
         * @interface IValidatorChangeEventWithProof
         * @property {types.ILedgerInfoWithSignatures|null} [ledgerInfoWithSigs] ValidatorChangeEventWithProof ledgerInfoWithSigs
         * @property {types.IEventWithProof|null} [eventWithProof] ValidatorChangeEventWithProof eventWithProof
         */

        /**
         * Constructs a new ValidatorChangeEventWithProof.
         * @memberof types
         * @classdesc Represents a ValidatorChangeEventWithProof.
         * @implements IValidatorChangeEventWithProof
         * @constructor
         * @param {types.IValidatorChangeEventWithProof=} [properties] Properties to set
         */
        function ValidatorChangeEventWithProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidatorChangeEventWithProof ledgerInfoWithSigs.
         * @member {types.ILedgerInfoWithSignatures|null|undefined} ledgerInfoWithSigs
         * @memberof types.ValidatorChangeEventWithProof
         * @instance
         */
        ValidatorChangeEventWithProof.prototype.ledgerInfoWithSigs = null;

        /**
         * ValidatorChangeEventWithProof eventWithProof.
         * @member {types.IEventWithProof|null|undefined} eventWithProof
         * @memberof types.ValidatorChangeEventWithProof
         * @instance
         */
        ValidatorChangeEventWithProof.prototype.eventWithProof = null;

        /**
         * Creates a new ValidatorChangeEventWithProof instance using the specified properties.
         * @function create
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {types.IValidatorChangeEventWithProof=} [properties] Properties to set
         * @returns {types.ValidatorChangeEventWithProof} ValidatorChangeEventWithProof instance
         */
        ValidatorChangeEventWithProof.create = function create(properties) {
            return new ValidatorChangeEventWithProof(properties);
        };

        /**
         * Encodes the specified ValidatorChangeEventWithProof message. Does not implicitly {@link types.ValidatorChangeEventWithProof.verify|verify} messages.
         * @function encode
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {types.IValidatorChangeEventWithProof} message ValidatorChangeEventWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorChangeEventWithProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ledgerInfoWithSigs != null && message.hasOwnProperty("ledgerInfoWithSigs"))
                $root.types.LedgerInfoWithSignatures.encode(message.ledgerInfoWithSigs, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.eventWithProof != null && message.hasOwnProperty("eventWithProof"))
                $root.types.EventWithProof.encode(message.eventWithProof, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ValidatorChangeEventWithProof message, length delimited. Does not implicitly {@link types.ValidatorChangeEventWithProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {types.IValidatorChangeEventWithProof} message ValidatorChangeEventWithProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorChangeEventWithProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValidatorChangeEventWithProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ValidatorChangeEventWithProof} ValidatorChangeEventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorChangeEventWithProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ValidatorChangeEventWithProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ledgerInfoWithSigs = $root.types.LedgerInfoWithSignatures.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.eventWithProof = $root.types.EventWithProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValidatorChangeEventWithProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ValidatorChangeEventWithProof} ValidatorChangeEventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorChangeEventWithProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValidatorChangeEventWithProof message.
         * @function verify
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValidatorChangeEventWithProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ledgerInfoWithSigs != null && message.hasOwnProperty("ledgerInfoWithSigs")) {
                var error = $root.types.LedgerInfoWithSignatures.verify(message.ledgerInfoWithSigs);
                if (error)
                    return "ledgerInfoWithSigs." + error;
            }
            if (message.eventWithProof != null && message.hasOwnProperty("eventWithProof")) {
                var error = $root.types.EventWithProof.verify(message.eventWithProof);
                if (error)
                    return "eventWithProof." + error;
            }
            return null;
        };

        /**
         * Creates a ValidatorChangeEventWithProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ValidatorChangeEventWithProof} ValidatorChangeEventWithProof
         */
        ValidatorChangeEventWithProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ValidatorChangeEventWithProof)
                return object;
            var message = new $root.types.ValidatorChangeEventWithProof();
            if (object.ledgerInfoWithSigs != null) {
                if (typeof object.ledgerInfoWithSigs !== "object")
                    throw TypeError(".types.ValidatorChangeEventWithProof.ledgerInfoWithSigs: object expected");
                message.ledgerInfoWithSigs = $root.types.LedgerInfoWithSignatures.fromObject(object.ledgerInfoWithSigs);
            }
            if (object.eventWithProof != null) {
                if (typeof object.eventWithProof !== "object")
                    throw TypeError(".types.ValidatorChangeEventWithProof.eventWithProof: object expected");
                message.eventWithProof = $root.types.EventWithProof.fromObject(object.eventWithProof);
            }
            return message;
        };

        /**
         * Creates a plain object from a ValidatorChangeEventWithProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ValidatorChangeEventWithProof
         * @static
         * @param {types.ValidatorChangeEventWithProof} message ValidatorChangeEventWithProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidatorChangeEventWithProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ledgerInfoWithSigs = null;
                object.eventWithProof = null;
            }
            if (message.ledgerInfoWithSigs != null && message.hasOwnProperty("ledgerInfoWithSigs"))
                object.ledgerInfoWithSigs = $root.types.LedgerInfoWithSignatures.toObject(message.ledgerInfoWithSigs, options);
            if (message.eventWithProof != null && message.hasOwnProperty("eventWithProof"))
                object.eventWithProof = $root.types.EventWithProof.toObject(message.eventWithProof, options);
            return object;
        };

        /**
         * Converts this ValidatorChangeEventWithProof to JSON.
         * @function toJSON
         * @memberof types.ValidatorChangeEventWithProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidatorChangeEventWithProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidatorChangeEventWithProof;
    })();

    /**
     * VMValidationStatusCode enum.
     * @name types.VMValidationStatusCode
     * @enum {string}
     * @property {number} UnknownValidationStatus=0 UnknownValidationStatus value
     * @property {number} InvalidSignature=1 InvalidSignature value
     * @property {number} InvalidAuthKey=2 InvalidAuthKey value
     * @property {number} SequenceNumberTooOld=3 SequenceNumberTooOld value
     * @property {number} SequenceNumberTooNew=4 SequenceNumberTooNew value
     * @property {number} InsufficientBalanceForTransactionFee=5 InsufficientBalanceForTransactionFee value
     * @property {number} TransactionExpired=6 TransactionExpired value
     * @property {number} SendingAccountDoesNotExist=7 SendingAccountDoesNotExist value
     * @property {number} RejectedWriteSet=8 RejectedWriteSet value
     * @property {number} InvalidWriteSet=9 InvalidWriteSet value
     * @property {number} ExceededMaxTransactionSize=10 ExceededMaxTransactionSize value
     * @property {number} UnknownScript=11 UnknownScript value
     * @property {number} UnknownModule=12 UnknownModule value
     * @property {number} MaxGasUnitsExceedsMaxGasUnitsBound=13 MaxGasUnitsExceedsMaxGasUnitsBound value
     * @property {number} MaxGasUnitsBelowMinTransactionGasUnits=14 MaxGasUnitsBelowMinTransactionGasUnits value
     * @property {number} GasUnitPriceBelowMinBound=15 GasUnitPriceBelowMinBound value
     * @property {number} GasUnitPriceAboveMaxBound=16 GasUnitPriceAboveMaxBound value
     */
    types.VMValidationStatusCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnknownValidationStatus"] = 0;
        values[valuesById[1] = "InvalidSignature"] = 1;
        values[valuesById[2] = "InvalidAuthKey"] = 2;
        values[valuesById[3] = "SequenceNumberTooOld"] = 3;
        values[valuesById[4] = "SequenceNumberTooNew"] = 4;
        values[valuesById[5] = "InsufficientBalanceForTransactionFee"] = 5;
        values[valuesById[6] = "TransactionExpired"] = 6;
        values[valuesById[7] = "SendingAccountDoesNotExist"] = 7;
        values[valuesById[8] = "RejectedWriteSet"] = 8;
        values[valuesById[9] = "InvalidWriteSet"] = 9;
        values[valuesById[10] = "ExceededMaxTransactionSize"] = 10;
        values[valuesById[11] = "UnknownScript"] = 11;
        values[valuesById[12] = "UnknownModule"] = 12;
        values[valuesById[13] = "MaxGasUnitsExceedsMaxGasUnitsBound"] = 13;
        values[valuesById[14] = "MaxGasUnitsBelowMinTransactionGasUnits"] = 14;
        values[valuesById[15] = "GasUnitPriceBelowMinBound"] = 15;
        values[valuesById[16] = "GasUnitPriceAboveMaxBound"] = 16;
        return values;
    })();

    types.VMValidationStatus = (function() {

        /**
         * Properties of a VMValidationStatus.
         * @memberof types
         * @interface IVMValidationStatus
         * @property {types.VMValidationStatusCode|null} [code] VMValidationStatus code
         * @property {string|null} [message] VMValidationStatus message
         */

        /**
         * Constructs a new VMValidationStatus.
         * @memberof types
         * @classdesc Represents a VMValidationStatus.
         * @implements IVMValidationStatus
         * @constructor
         * @param {types.IVMValidationStatus=} [properties] Properties to set
         */
        function VMValidationStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VMValidationStatus code.
         * @member {types.VMValidationStatusCode} code
         * @memberof types.VMValidationStatus
         * @instance
         */
        VMValidationStatus.prototype.code = 0;

        /**
         * VMValidationStatus message.
         * @member {string} message
         * @memberof types.VMValidationStatus
         * @instance
         */
        VMValidationStatus.prototype.message = "";

        /**
         * Creates a new VMValidationStatus instance using the specified properties.
         * @function create
         * @memberof types.VMValidationStatus
         * @static
         * @param {types.IVMValidationStatus=} [properties] Properties to set
         * @returns {types.VMValidationStatus} VMValidationStatus instance
         */
        VMValidationStatus.create = function create(properties) {
            return new VMValidationStatus(properties);
        };

        /**
         * Encodes the specified VMValidationStatus message. Does not implicitly {@link types.VMValidationStatus.verify|verify} messages.
         * @function encode
         * @memberof types.VMValidationStatus
         * @static
         * @param {types.IVMValidationStatus} message VMValidationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMValidationStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified VMValidationStatus message, length delimited. Does not implicitly {@link types.VMValidationStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.VMValidationStatus
         * @static
         * @param {types.IVMValidationStatus} message VMValidationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMValidationStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VMValidationStatus message from the specified reader or buffer.
         * @function decode
         * @memberof types.VMValidationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.VMValidationStatus} VMValidationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMValidationStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.VMValidationStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VMValidationStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.VMValidationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.VMValidationStatus} VMValidationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMValidationStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VMValidationStatus message.
         * @function verify
         * @memberof types.VMValidationStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VMValidationStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a VMValidationStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.VMValidationStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.VMValidationStatus} VMValidationStatus
         */
        VMValidationStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.types.VMValidationStatus)
                return object;
            var message = new $root.types.VMValidationStatus();
            switch (object.code) {
            case "UnknownValidationStatus":
            case 0:
                message.code = 0;
                break;
            case "InvalidSignature":
            case 1:
                message.code = 1;
                break;
            case "InvalidAuthKey":
            case 2:
                message.code = 2;
                break;
            case "SequenceNumberTooOld":
            case 3:
                message.code = 3;
                break;
            case "SequenceNumberTooNew":
            case 4:
                message.code = 4;
                break;
            case "InsufficientBalanceForTransactionFee":
            case 5:
                message.code = 5;
                break;
            case "TransactionExpired":
            case 6:
                message.code = 6;
                break;
            case "SendingAccountDoesNotExist":
            case 7:
                message.code = 7;
                break;
            case "RejectedWriteSet":
            case 8:
                message.code = 8;
                break;
            case "InvalidWriteSet":
            case 9:
                message.code = 9;
                break;
            case "ExceededMaxTransactionSize":
            case 10:
                message.code = 10;
                break;
            case "UnknownScript":
            case 11:
                message.code = 11;
                break;
            case "UnknownModule":
            case 12:
                message.code = 12;
                break;
            case "MaxGasUnitsExceedsMaxGasUnitsBound":
            case 13:
                message.code = 13;
                break;
            case "MaxGasUnitsBelowMinTransactionGasUnits":
            case 14:
                message.code = 14;
                break;
            case "GasUnitPriceBelowMinBound":
            case 15:
                message.code = 15;
                break;
            case "GasUnitPriceAboveMaxBound":
            case 16:
                message.code = 16;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a VMValidationStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.VMValidationStatus
         * @static
         * @param {types.VMValidationStatus} message VMValidationStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VMValidationStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "UnknownValidationStatus" : 0;
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.types.VMValidationStatusCode[message.code] : message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this VMValidationStatus to JSON.
         * @function toJSON
         * @memberof types.VMValidationStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VMValidationStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VMValidationStatus;
    })();

    types.VMVerificationStatusList = (function() {

        /**
         * Properties of a VMVerificationStatusList.
         * @memberof types
         * @interface IVMVerificationStatusList
         * @property {Array.<types.IVMVerificationStatus>|null} [statusList] VMVerificationStatusList statusList
         */

        /**
         * Constructs a new VMVerificationStatusList.
         * @memberof types
         * @classdesc Represents a VMVerificationStatusList.
         * @implements IVMVerificationStatusList
         * @constructor
         * @param {types.IVMVerificationStatusList=} [properties] Properties to set
         */
        function VMVerificationStatusList(properties) {
            this.statusList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VMVerificationStatusList statusList.
         * @member {Array.<types.IVMVerificationStatus>} statusList
         * @memberof types.VMVerificationStatusList
         * @instance
         */
        VMVerificationStatusList.prototype.statusList = $util.emptyArray;

        /**
         * Creates a new VMVerificationStatusList instance using the specified properties.
         * @function create
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {types.IVMVerificationStatusList=} [properties] Properties to set
         * @returns {types.VMVerificationStatusList} VMVerificationStatusList instance
         */
        VMVerificationStatusList.create = function create(properties) {
            return new VMVerificationStatusList(properties);
        };

        /**
         * Encodes the specified VMVerificationStatusList message. Does not implicitly {@link types.VMVerificationStatusList.verify|verify} messages.
         * @function encode
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {types.IVMVerificationStatusList} message VMVerificationStatusList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMVerificationStatusList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.statusList != null && message.statusList.length)
                for (var i = 0; i < message.statusList.length; ++i)
                    $root.types.VMVerificationStatus.encode(message.statusList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VMVerificationStatusList message, length delimited. Does not implicitly {@link types.VMVerificationStatusList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {types.IVMVerificationStatusList} message VMVerificationStatusList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMVerificationStatusList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VMVerificationStatusList message from the specified reader or buffer.
         * @function decode
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.VMVerificationStatusList} VMVerificationStatusList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMVerificationStatusList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.VMVerificationStatusList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.statusList && message.statusList.length))
                        message.statusList = [];
                    message.statusList.push($root.types.VMVerificationStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VMVerificationStatusList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.VMVerificationStatusList} VMVerificationStatusList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMVerificationStatusList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VMVerificationStatusList message.
         * @function verify
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VMVerificationStatusList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.statusList != null && message.hasOwnProperty("statusList")) {
                if (!Array.isArray(message.statusList))
                    return "statusList: array expected";
                for (var i = 0; i < message.statusList.length; ++i) {
                    var error = $root.types.VMVerificationStatus.verify(message.statusList[i]);
                    if (error)
                        return "statusList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VMVerificationStatusList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.VMVerificationStatusList} VMVerificationStatusList
         */
        VMVerificationStatusList.fromObject = function fromObject(object) {
            if (object instanceof $root.types.VMVerificationStatusList)
                return object;
            var message = new $root.types.VMVerificationStatusList();
            if (object.statusList) {
                if (!Array.isArray(object.statusList))
                    throw TypeError(".types.VMVerificationStatusList.statusList: array expected");
                message.statusList = [];
                for (var i = 0; i < object.statusList.length; ++i) {
                    if (typeof object.statusList[i] !== "object")
                        throw TypeError(".types.VMVerificationStatusList.statusList: object expected");
                    message.statusList[i] = $root.types.VMVerificationStatus.fromObject(object.statusList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a VMVerificationStatusList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.VMVerificationStatusList
         * @static
         * @param {types.VMVerificationStatusList} message VMVerificationStatusList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VMVerificationStatusList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.statusList = [];
            if (message.statusList && message.statusList.length) {
                object.statusList = [];
                for (var j = 0; j < message.statusList.length; ++j)
                    object.statusList[j] = $root.types.VMVerificationStatus.toObject(message.statusList[j], options);
            }
            return object;
        };

        /**
         * Converts this VMVerificationStatusList to JSON.
         * @function toJSON
         * @memberof types.VMVerificationStatusList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VMVerificationStatusList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VMVerificationStatusList;
    })();

    types.VMVerificationStatus = (function() {

        /**
         * Properties of a VMVerificationStatus.
         * @memberof types
         * @interface IVMVerificationStatus
         * @property {types.VMVerificationStatus.StatusKind|null} [statusKind] VMVerificationStatus statusKind
         * @property {number|null} [moduleIdx] VMVerificationStatus moduleIdx
         * @property {types.VMVerificationErrorKind|null} [errorKind] VMVerificationStatus errorKind
         * @property {string|null} [message] VMVerificationStatus message
         * @property {types.IModuleId|null} [dependencyId] VMVerificationStatus dependencyId
         */

        /**
         * Constructs a new VMVerificationStatus.
         * @memberof types
         * @classdesc Represents a VMVerificationStatus.
         * @implements IVMVerificationStatus
         * @constructor
         * @param {types.IVMVerificationStatus=} [properties] Properties to set
         */
        function VMVerificationStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VMVerificationStatus statusKind.
         * @member {types.VMVerificationStatus.StatusKind} statusKind
         * @memberof types.VMVerificationStatus
         * @instance
         */
        VMVerificationStatus.prototype.statusKind = 0;

        /**
         * VMVerificationStatus moduleIdx.
         * @member {number} moduleIdx
         * @memberof types.VMVerificationStatus
         * @instance
         */
        VMVerificationStatus.prototype.moduleIdx = 0;

        /**
         * VMVerificationStatus errorKind.
         * @member {types.VMVerificationErrorKind} errorKind
         * @memberof types.VMVerificationStatus
         * @instance
         */
        VMVerificationStatus.prototype.errorKind = 0;

        /**
         * VMVerificationStatus message.
         * @member {string} message
         * @memberof types.VMVerificationStatus
         * @instance
         */
        VMVerificationStatus.prototype.message = "";

        /**
         * VMVerificationStatus dependencyId.
         * @member {types.IModuleId|null|undefined} dependencyId
         * @memberof types.VMVerificationStatus
         * @instance
         */
        VMVerificationStatus.prototype.dependencyId = null;

        /**
         * Creates a new VMVerificationStatus instance using the specified properties.
         * @function create
         * @memberof types.VMVerificationStatus
         * @static
         * @param {types.IVMVerificationStatus=} [properties] Properties to set
         * @returns {types.VMVerificationStatus} VMVerificationStatus instance
         */
        VMVerificationStatus.create = function create(properties) {
            return new VMVerificationStatus(properties);
        };

        /**
         * Encodes the specified VMVerificationStatus message. Does not implicitly {@link types.VMVerificationStatus.verify|verify} messages.
         * @function encode
         * @memberof types.VMVerificationStatus
         * @static
         * @param {types.IVMVerificationStatus} message VMVerificationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMVerificationStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.statusKind != null && message.hasOwnProperty("statusKind"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.statusKind);
            if (message.moduleIdx != null && message.hasOwnProperty("moduleIdx"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.moduleIdx);
            if (message.errorKind != null && message.hasOwnProperty("errorKind"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.errorKind);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.dependencyId != null && message.hasOwnProperty("dependencyId"))
                $root.types.ModuleId.encode(message.dependencyId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VMVerificationStatus message, length delimited. Does not implicitly {@link types.VMVerificationStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.VMVerificationStatus
         * @static
         * @param {types.IVMVerificationStatus} message VMVerificationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMVerificationStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VMVerificationStatus message from the specified reader or buffer.
         * @function decode
         * @memberof types.VMVerificationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.VMVerificationStatus} VMVerificationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMVerificationStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.VMVerificationStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.statusKind = reader.int32();
                    break;
                case 2:
                    message.moduleIdx = reader.uint32();
                    break;
                case 3:
                    message.errorKind = reader.int32();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                case 5:
                    message.dependencyId = $root.types.ModuleId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VMVerificationStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.VMVerificationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.VMVerificationStatus} VMVerificationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMVerificationStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VMVerificationStatus message.
         * @function verify
         * @memberof types.VMVerificationStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VMVerificationStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.statusKind != null && message.hasOwnProperty("statusKind"))
                switch (message.statusKind) {
                default:
                    return "statusKind: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.moduleIdx != null && message.hasOwnProperty("moduleIdx"))
                if (!$util.isInteger(message.moduleIdx))
                    return "moduleIdx: integer expected";
            if (message.errorKind != null && message.hasOwnProperty("errorKind"))
                switch (message.errorKind) {
                default:
                    return "errorKind: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.dependencyId != null && message.hasOwnProperty("dependencyId")) {
                var error = $root.types.ModuleId.verify(message.dependencyId);
                if (error)
                    return "dependencyId." + error;
            }
            return null;
        };

        /**
         * Creates a VMVerificationStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.VMVerificationStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.VMVerificationStatus} VMVerificationStatus
         */
        VMVerificationStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.types.VMVerificationStatus)
                return object;
            var message = new $root.types.VMVerificationStatus();
            switch (object.statusKind) {
            case "SCRIPT":
            case 0:
                message.statusKind = 0;
                break;
            case "MODULE":
            case 1:
                message.statusKind = 1;
                break;
            case "DEPENDENCY":
            case 2:
                message.statusKind = 2;
                break;
            }
            if (object.moduleIdx != null)
                message.moduleIdx = object.moduleIdx >>> 0;
            switch (object.errorKind) {
            case "UnknownVerificationError":
            case 0:
                message.errorKind = 0;
                break;
            case "IndexOutOfBounds":
            case 1:
                message.errorKind = 1;
                break;
            case "RangeOutOfBounds":
            case 2:
                message.errorKind = 2;
                break;
            case "InvalidSignatureToken":
            case 3:
                message.errorKind = 3;
                break;
            case "InvalidFieldDefReference":
            case 4:
                message.errorKind = 4;
                break;
            case "RecursiveStructDefinition":
            case 5:
                message.errorKind = 5;
                break;
            case "InvalidResourceField":
            case 6:
                message.errorKind = 6;
                break;
            case "InvalidFallThrough":
            case 7:
                message.errorKind = 7;
                break;
            case "JoinFailure":
            case 8:
                message.errorKind = 8;
                break;
            case "NegativeStackSizeWithinBlock":
            case 9:
                message.errorKind = 9;
                break;
            case "UnbalancedStack":
            case 10:
                message.errorKind = 10;
                break;
            case "InvalidMainFunctionSignature":
            case 11:
                message.errorKind = 11;
                break;
            case "DuplicateElement":
            case 12:
                message.errorKind = 12;
                break;
            case "InvalidModuleHandle":
            case 13:
                message.errorKind = 13;
                break;
            case "UnimplementedHandle":
            case 14:
                message.errorKind = 14;
                break;
            case "InconsistentFields":
            case 15:
                message.errorKind = 15;
                break;
            case "UnusedFields":
            case 16:
                message.errorKind = 16;
                break;
            case "LookupFailed":
            case 17:
                message.errorKind = 17;
                break;
            case "VisibilityMismatch":
            case 18:
                message.errorKind = 18;
                break;
            case "TypeResolutionFailure":
            case 19:
                message.errorKind = 19;
                break;
            case "TypeMismatch":
            case 20:
                message.errorKind = 20;
                break;
            case "MissingDependency":
            case 21:
                message.errorKind = 21;
                break;
            case "PopReferenceError":
            case 22:
                message.errorKind = 22;
                break;
            case "PopResourceError":
            case 23:
                message.errorKind = 23;
                break;
            case "ReleaseRefTypeMismatchError":
            case 24:
                message.errorKind = 24;
                break;
            case "BrTypeMismatchError":
            case 25:
                message.errorKind = 25;
                break;
            case "AssertTypeMismatchError":
            case 26:
                message.errorKind = 26;
                break;
            case "StLocTypeMismatchError":
            case 27:
                message.errorKind = 27;
                break;
            case "StLocUnsafeToDestroyError":
            case 28:
                message.errorKind = 28;
                break;
            case "RetUnsafeToDestroyError":
            case 29:
                message.errorKind = 29;
                break;
            case "RetTypeMismatchError":
            case 30:
                message.errorKind = 30;
                break;
            case "FreezeRefTypeMismatchError":
            case 31:
                message.errorKind = 31;
                break;
            case "FreezeRefExistsMutableBorrowError":
            case 32:
                message.errorKind = 32;
                break;
            case "BorrowFieldTypeMismatchError":
            case 33:
                message.errorKind = 33;
                break;
            case "BorrowFieldBadFieldError":
            case 34:
                message.errorKind = 34;
                break;
            case "BorrowFieldExistsMutableBorrowError":
            case 35:
                message.errorKind = 35;
                break;
            case "CopyLocUnavailableError":
            case 36:
                message.errorKind = 36;
                break;
            case "CopyLocResourceError":
            case 37:
                message.errorKind = 37;
                break;
            case "CopyLocExistsBorrowError":
            case 38:
                message.errorKind = 38;
                break;
            case "MoveLocUnavailableError":
            case 39:
                message.errorKind = 39;
                break;
            case "MoveLocExistsBorrowError":
            case 40:
                message.errorKind = 40;
                break;
            case "BorrowLocReferenceError":
            case 41:
                message.errorKind = 41;
                break;
            case "BorrowLocUnavailableError":
            case 42:
                message.errorKind = 42;
                break;
            case "BorrowLocExistsBorrowError":
            case 43:
                message.errorKind = 43;
                break;
            case "CallTypeMismatchError":
            case 44:
                message.errorKind = 44;
                break;
            case "CallBorrowedMutableReferenceError":
            case 45:
                message.errorKind = 45;
                break;
            case "PackTypeMismatchError":
            case 46:
                message.errorKind = 46;
                break;
            case "UnpackTypeMismatchError":
            case 47:
                message.errorKind = 47;
                break;
            case "ReadRefTypeMismatchError":
            case 48:
                message.errorKind = 48;
                break;
            case "ReadRefResourceError":
            case 49:
                message.errorKind = 49;
                break;
            case "ReadRefExistsMutableBorrowError":
            case 50:
                message.errorKind = 50;
                break;
            case "WriteRefTypeMismatchError":
            case 51:
                message.errorKind = 51;
                break;
            case "WriteRefResourceError":
            case 52:
                message.errorKind = 52;
                break;
            case "WriteRefExistsBorrowError":
            case 53:
                message.errorKind = 53;
                break;
            case "WriteRefNoMutableReferenceError":
            case 54:
                message.errorKind = 54;
                break;
            case "IntegerOpTypeMismatchError":
            case 55:
                message.errorKind = 55;
                break;
            case "BooleanOpTypeMismatchError":
            case 56:
                message.errorKind = 56;
                break;
            case "EqualityOpTypeMismatchError":
            case 57:
                message.errorKind = 57;
                break;
            case "ExistsResourceTypeMismatchError":
            case 58:
                message.errorKind = 58;
                break;
            case "BorrowGlobalTypeMismatchError":
            case 59:
                message.errorKind = 59;
                break;
            case "BorrowGlobalNoResourceError":
            case 60:
                message.errorKind = 60;
                break;
            case "MoveFromTypeMismatchError":
            case 61:
                message.errorKind = 61;
                break;
            case "MoveFromNoResourceError":
            case 62:
                message.errorKind = 62;
                break;
            case "MoveToSenderTypeMismatchError":
            case 63:
                message.errorKind = 63;
                break;
            case "MoveToSenderNoResourceError":
            case 64:
                message.errorKind = 64;
                break;
            case "CreateAccountTypeMismatchError":
            case 65:
                message.errorKind = 65;
                break;
            case "ModuleAddressDoesNotMatchSender":
            case 66:
                message.errorKind = 66;
                break;
            case "NoModuleHandles":
            case 67:
                message.errorKind = 67;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            if (object.dependencyId != null) {
                if (typeof object.dependencyId !== "object")
                    throw TypeError(".types.VMVerificationStatus.dependencyId: object expected");
                message.dependencyId = $root.types.ModuleId.fromObject(object.dependencyId);
            }
            return message;
        };

        /**
         * Creates a plain object from a VMVerificationStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.VMVerificationStatus
         * @static
         * @param {types.VMVerificationStatus} message VMVerificationStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VMVerificationStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.statusKind = options.enums === String ? "SCRIPT" : 0;
                object.moduleIdx = 0;
                object.errorKind = options.enums === String ? "UnknownVerificationError" : 0;
                object.message = "";
                object.dependencyId = null;
            }
            if (message.statusKind != null && message.hasOwnProperty("statusKind"))
                object.statusKind = options.enums === String ? $root.types.VMVerificationStatus.StatusKind[message.statusKind] : message.statusKind;
            if (message.moduleIdx != null && message.hasOwnProperty("moduleIdx"))
                object.moduleIdx = message.moduleIdx;
            if (message.errorKind != null && message.hasOwnProperty("errorKind"))
                object.errorKind = options.enums === String ? $root.types.VMVerificationErrorKind[message.errorKind] : message.errorKind;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.dependencyId != null && message.hasOwnProperty("dependencyId"))
                object.dependencyId = $root.types.ModuleId.toObject(message.dependencyId, options);
            return object;
        };

        /**
         * Converts this VMVerificationStatus to JSON.
         * @function toJSON
         * @memberof types.VMVerificationStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VMVerificationStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * StatusKind enum.
         * @name types.VMVerificationStatus.StatusKind
         * @enum {string}
         * @property {number} SCRIPT=0 SCRIPT value
         * @property {number} MODULE=1 MODULE value
         * @property {number} DEPENDENCY=2 DEPENDENCY value
         */
        VMVerificationStatus.StatusKind = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SCRIPT"] = 0;
            values[valuesById[1] = "MODULE"] = 1;
            values[valuesById[2] = "DEPENDENCY"] = 2;
            return values;
        })();

        return VMVerificationStatus;
    })();

    /**
     * VMVerificationErrorKind enum.
     * @name types.VMVerificationErrorKind
     * @enum {string}
     * @property {number} UnknownVerificationError=0 UnknownVerificationError value
     * @property {number} IndexOutOfBounds=1 IndexOutOfBounds value
     * @property {number} RangeOutOfBounds=2 RangeOutOfBounds value
     * @property {number} InvalidSignatureToken=3 InvalidSignatureToken value
     * @property {number} InvalidFieldDefReference=4 InvalidFieldDefReference value
     * @property {number} RecursiveStructDefinition=5 RecursiveStructDefinition value
     * @property {number} InvalidResourceField=6 InvalidResourceField value
     * @property {number} InvalidFallThrough=7 InvalidFallThrough value
     * @property {number} JoinFailure=8 JoinFailure value
     * @property {number} NegativeStackSizeWithinBlock=9 NegativeStackSizeWithinBlock value
     * @property {number} UnbalancedStack=10 UnbalancedStack value
     * @property {number} InvalidMainFunctionSignature=11 InvalidMainFunctionSignature value
     * @property {number} DuplicateElement=12 DuplicateElement value
     * @property {number} InvalidModuleHandle=13 InvalidModuleHandle value
     * @property {number} UnimplementedHandle=14 UnimplementedHandle value
     * @property {number} InconsistentFields=15 InconsistentFields value
     * @property {number} UnusedFields=16 UnusedFields value
     * @property {number} LookupFailed=17 LookupFailed value
     * @property {number} VisibilityMismatch=18 VisibilityMismatch value
     * @property {number} TypeResolutionFailure=19 TypeResolutionFailure value
     * @property {number} TypeMismatch=20 TypeMismatch value
     * @property {number} MissingDependency=21 MissingDependency value
     * @property {number} PopReferenceError=22 PopReferenceError value
     * @property {number} PopResourceError=23 PopResourceError value
     * @property {number} ReleaseRefTypeMismatchError=24 ReleaseRefTypeMismatchError value
     * @property {number} BrTypeMismatchError=25 BrTypeMismatchError value
     * @property {number} AssertTypeMismatchError=26 AssertTypeMismatchError value
     * @property {number} StLocTypeMismatchError=27 StLocTypeMismatchError value
     * @property {number} StLocUnsafeToDestroyError=28 StLocUnsafeToDestroyError value
     * @property {number} RetUnsafeToDestroyError=29 RetUnsafeToDestroyError value
     * @property {number} RetTypeMismatchError=30 RetTypeMismatchError value
     * @property {number} FreezeRefTypeMismatchError=31 FreezeRefTypeMismatchError value
     * @property {number} FreezeRefExistsMutableBorrowError=32 FreezeRefExistsMutableBorrowError value
     * @property {number} BorrowFieldTypeMismatchError=33 BorrowFieldTypeMismatchError value
     * @property {number} BorrowFieldBadFieldError=34 BorrowFieldBadFieldError value
     * @property {number} BorrowFieldExistsMutableBorrowError=35 BorrowFieldExistsMutableBorrowError value
     * @property {number} CopyLocUnavailableError=36 CopyLocUnavailableError value
     * @property {number} CopyLocResourceError=37 CopyLocResourceError value
     * @property {number} CopyLocExistsBorrowError=38 CopyLocExistsBorrowError value
     * @property {number} MoveLocUnavailableError=39 MoveLocUnavailableError value
     * @property {number} MoveLocExistsBorrowError=40 MoveLocExistsBorrowError value
     * @property {number} BorrowLocReferenceError=41 BorrowLocReferenceError value
     * @property {number} BorrowLocUnavailableError=42 BorrowLocUnavailableError value
     * @property {number} BorrowLocExistsBorrowError=43 BorrowLocExistsBorrowError value
     * @property {number} CallTypeMismatchError=44 CallTypeMismatchError value
     * @property {number} CallBorrowedMutableReferenceError=45 CallBorrowedMutableReferenceError value
     * @property {number} PackTypeMismatchError=46 PackTypeMismatchError value
     * @property {number} UnpackTypeMismatchError=47 UnpackTypeMismatchError value
     * @property {number} ReadRefTypeMismatchError=48 ReadRefTypeMismatchError value
     * @property {number} ReadRefResourceError=49 ReadRefResourceError value
     * @property {number} ReadRefExistsMutableBorrowError=50 ReadRefExistsMutableBorrowError value
     * @property {number} WriteRefTypeMismatchError=51 WriteRefTypeMismatchError value
     * @property {number} WriteRefResourceError=52 WriteRefResourceError value
     * @property {number} WriteRefExistsBorrowError=53 WriteRefExistsBorrowError value
     * @property {number} WriteRefNoMutableReferenceError=54 WriteRefNoMutableReferenceError value
     * @property {number} IntegerOpTypeMismatchError=55 IntegerOpTypeMismatchError value
     * @property {number} BooleanOpTypeMismatchError=56 BooleanOpTypeMismatchError value
     * @property {number} EqualityOpTypeMismatchError=57 EqualityOpTypeMismatchError value
     * @property {number} ExistsResourceTypeMismatchError=58 ExistsResourceTypeMismatchError value
     * @property {number} BorrowGlobalTypeMismatchError=59 BorrowGlobalTypeMismatchError value
     * @property {number} BorrowGlobalNoResourceError=60 BorrowGlobalNoResourceError value
     * @property {number} MoveFromTypeMismatchError=61 MoveFromTypeMismatchError value
     * @property {number} MoveFromNoResourceError=62 MoveFromNoResourceError value
     * @property {number} MoveToSenderTypeMismatchError=63 MoveToSenderTypeMismatchError value
     * @property {number} MoveToSenderNoResourceError=64 MoveToSenderNoResourceError value
     * @property {number} CreateAccountTypeMismatchError=65 CreateAccountTypeMismatchError value
     * @property {number} ModuleAddressDoesNotMatchSender=66 ModuleAddressDoesNotMatchSender value
     * @property {number} NoModuleHandles=67 NoModuleHandles value
     */
    types.VMVerificationErrorKind = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnknownVerificationError"] = 0;
        values[valuesById[1] = "IndexOutOfBounds"] = 1;
        values[valuesById[2] = "RangeOutOfBounds"] = 2;
        values[valuesById[3] = "InvalidSignatureToken"] = 3;
        values[valuesById[4] = "InvalidFieldDefReference"] = 4;
        values[valuesById[5] = "RecursiveStructDefinition"] = 5;
        values[valuesById[6] = "InvalidResourceField"] = 6;
        values[valuesById[7] = "InvalidFallThrough"] = 7;
        values[valuesById[8] = "JoinFailure"] = 8;
        values[valuesById[9] = "NegativeStackSizeWithinBlock"] = 9;
        values[valuesById[10] = "UnbalancedStack"] = 10;
        values[valuesById[11] = "InvalidMainFunctionSignature"] = 11;
        values[valuesById[12] = "DuplicateElement"] = 12;
        values[valuesById[13] = "InvalidModuleHandle"] = 13;
        values[valuesById[14] = "UnimplementedHandle"] = 14;
        values[valuesById[15] = "InconsistentFields"] = 15;
        values[valuesById[16] = "UnusedFields"] = 16;
        values[valuesById[17] = "LookupFailed"] = 17;
        values[valuesById[18] = "VisibilityMismatch"] = 18;
        values[valuesById[19] = "TypeResolutionFailure"] = 19;
        values[valuesById[20] = "TypeMismatch"] = 20;
        values[valuesById[21] = "MissingDependency"] = 21;
        values[valuesById[22] = "PopReferenceError"] = 22;
        values[valuesById[23] = "PopResourceError"] = 23;
        values[valuesById[24] = "ReleaseRefTypeMismatchError"] = 24;
        values[valuesById[25] = "BrTypeMismatchError"] = 25;
        values[valuesById[26] = "AssertTypeMismatchError"] = 26;
        values[valuesById[27] = "StLocTypeMismatchError"] = 27;
        values[valuesById[28] = "StLocUnsafeToDestroyError"] = 28;
        values[valuesById[29] = "RetUnsafeToDestroyError"] = 29;
        values[valuesById[30] = "RetTypeMismatchError"] = 30;
        values[valuesById[31] = "FreezeRefTypeMismatchError"] = 31;
        values[valuesById[32] = "FreezeRefExistsMutableBorrowError"] = 32;
        values[valuesById[33] = "BorrowFieldTypeMismatchError"] = 33;
        values[valuesById[34] = "BorrowFieldBadFieldError"] = 34;
        values[valuesById[35] = "BorrowFieldExistsMutableBorrowError"] = 35;
        values[valuesById[36] = "CopyLocUnavailableError"] = 36;
        values[valuesById[37] = "CopyLocResourceError"] = 37;
        values[valuesById[38] = "CopyLocExistsBorrowError"] = 38;
        values[valuesById[39] = "MoveLocUnavailableError"] = 39;
        values[valuesById[40] = "MoveLocExistsBorrowError"] = 40;
        values[valuesById[41] = "BorrowLocReferenceError"] = 41;
        values[valuesById[42] = "BorrowLocUnavailableError"] = 42;
        values[valuesById[43] = "BorrowLocExistsBorrowError"] = 43;
        values[valuesById[44] = "CallTypeMismatchError"] = 44;
        values[valuesById[45] = "CallBorrowedMutableReferenceError"] = 45;
        values[valuesById[46] = "PackTypeMismatchError"] = 46;
        values[valuesById[47] = "UnpackTypeMismatchError"] = 47;
        values[valuesById[48] = "ReadRefTypeMismatchError"] = 48;
        values[valuesById[49] = "ReadRefResourceError"] = 49;
        values[valuesById[50] = "ReadRefExistsMutableBorrowError"] = 50;
        values[valuesById[51] = "WriteRefTypeMismatchError"] = 51;
        values[valuesById[52] = "WriteRefResourceError"] = 52;
        values[valuesById[53] = "WriteRefExistsBorrowError"] = 53;
        values[valuesById[54] = "WriteRefNoMutableReferenceError"] = 54;
        values[valuesById[55] = "IntegerOpTypeMismatchError"] = 55;
        values[valuesById[56] = "BooleanOpTypeMismatchError"] = 56;
        values[valuesById[57] = "EqualityOpTypeMismatchError"] = 57;
        values[valuesById[58] = "ExistsResourceTypeMismatchError"] = 58;
        values[valuesById[59] = "BorrowGlobalTypeMismatchError"] = 59;
        values[valuesById[60] = "BorrowGlobalNoResourceError"] = 60;
        values[valuesById[61] = "MoveFromTypeMismatchError"] = 61;
        values[valuesById[62] = "MoveFromNoResourceError"] = 62;
        values[valuesById[63] = "MoveToSenderTypeMismatchError"] = 63;
        values[valuesById[64] = "MoveToSenderNoResourceError"] = 64;
        values[valuesById[65] = "CreateAccountTypeMismatchError"] = 65;
        values[valuesById[66] = "ModuleAddressDoesNotMatchSender"] = 66;
        values[valuesById[67] = "NoModuleHandles"] = 67;
        return values;
    })();

    /**
     * VMInvariantViolationError enum.
     * @name types.VMInvariantViolationError
     * @enum {string}
     * @property {number} UnknownInvariantViolationError=0 UnknownInvariantViolationError value
     * @property {number} OutOfBoundsIndex=1 OutOfBoundsIndex value
     * @property {number} OutOfBoundsRange=2 OutOfBoundsRange value
     * @property {number} EmptyValueStack=3 EmptyValueStack value
     * @property {number} EmptyCallStack=4 EmptyCallStack value
     * @property {number} PCOverflow=5 PCOverflow value
     * @property {number} LinkerError=6 LinkerError value
     * @property {number} LocalReferenceError=7 LocalReferenceError value
     * @property {number} StorageError=8 StorageError value
     */
    types.VMInvariantViolationError = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnknownInvariantViolationError"] = 0;
        values[valuesById[1] = "OutOfBoundsIndex"] = 1;
        values[valuesById[2] = "OutOfBoundsRange"] = 2;
        values[valuesById[3] = "EmptyValueStack"] = 3;
        values[valuesById[4] = "EmptyCallStack"] = 4;
        values[valuesById[5] = "PCOverflow"] = 5;
        values[valuesById[6] = "LinkerError"] = 6;
        values[valuesById[7] = "LocalReferenceError"] = 7;
        values[valuesById[8] = "StorageError"] = 8;
        return values;
    })();

    /**
     * BinaryError enum.
     * @name types.BinaryError
     * @enum {string}
     * @property {number} UnknownBinaryError=0 UnknownBinaryError value
     * @property {number} Malformed=1 Malformed value
     * @property {number} BadMagic=2 BadMagic value
     * @property {number} UnknownVersion=3 UnknownVersion value
     * @property {number} UnknownTableType=4 UnknownTableType value
     * @property {number} UnknownSignatureType=5 UnknownSignatureType value
     * @property {number} UnknownSerializedType=6 UnknownSerializedType value
     * @property {number} UnknownOpcode=7 UnknownOpcode value
     * @property {number} BadHeaderTable=8 BadHeaderTable value
     * @property {number} UnexpectedSignatureType=9 UnexpectedSignatureType value
     * @property {number} DuplicateTable=10 DuplicateTable value
     */
    types.BinaryError = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnknownBinaryError"] = 0;
        values[valuesById[1] = "Malformed"] = 1;
        values[valuesById[2] = "BadMagic"] = 2;
        values[valuesById[3] = "UnknownVersion"] = 3;
        values[valuesById[4] = "UnknownTableType"] = 4;
        values[valuesById[5] = "UnknownSignatureType"] = 5;
        values[valuesById[6] = "UnknownSerializedType"] = 6;
        values[valuesById[7] = "UnknownOpcode"] = 7;
        values[valuesById[8] = "BadHeaderTable"] = 8;
        values[valuesById[9] = "UnexpectedSignatureType"] = 9;
        values[valuesById[10] = "DuplicateTable"] = 10;
        return values;
    })();

    /**
     * RuntimeStatus enum.
     * @name types.RuntimeStatus
     * @enum {string}
     * @property {number} UnknownRuntimeStatus=0 UnknownRuntimeStatus value
     * @property {number} Executed=1 Executed value
     * @property {number} OutOfGas=2 OutOfGas value
     * @property {number} ResourceDoesNotExist=3 ResourceDoesNotExist value
     * @property {number} ResourceAlreadyExists=4 ResourceAlreadyExists value
     * @property {number} EvictedAccountAccess=5 EvictedAccountAccess value
     * @property {number} AccountAddressAlreadyExists=6 AccountAddressAlreadyExists value
     * @property {number} TypeError=7 TypeError value
     * @property {number} MissingData=8 MissingData value
     * @property {number} DataFormatError=9 DataFormatError value
     * @property {number} InvalidData=10 InvalidData value
     * @property {number} RemoteDataError=11 RemoteDataError value
     * @property {number} CannotWriteExistingResource=12 CannotWriteExistingResource value
     * @property {number} ValueSerializationError=13 ValueSerializationError value
     * @property {number} ValueDeserializationError=14 ValueDeserializationError value
     * @property {number} DuplicateModuleName=15 DuplicateModuleName value
     */
    types.RuntimeStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnknownRuntimeStatus"] = 0;
        values[valuesById[1] = "Executed"] = 1;
        values[valuesById[2] = "OutOfGas"] = 2;
        values[valuesById[3] = "ResourceDoesNotExist"] = 3;
        values[valuesById[4] = "ResourceAlreadyExists"] = 4;
        values[valuesById[5] = "EvictedAccountAccess"] = 5;
        values[valuesById[6] = "AccountAddressAlreadyExists"] = 6;
        values[valuesById[7] = "TypeError"] = 7;
        values[valuesById[8] = "MissingData"] = 8;
        values[valuesById[9] = "DataFormatError"] = 9;
        values[valuesById[10] = "InvalidData"] = 10;
        values[valuesById[11] = "RemoteDataError"] = 11;
        values[valuesById[12] = "CannotWriteExistingResource"] = 12;
        values[valuesById[13] = "ValueSerializationError"] = 13;
        values[valuesById[14] = "ValueDeserializationError"] = 14;
        values[valuesById[15] = "DuplicateModuleName"] = 15;
        return values;
    })();

    types.AssertionFailure = (function() {

        /**
         * Properties of an AssertionFailure.
         * @memberof types
         * @interface IAssertionFailure
         * @property {number|Long|null} [assertionErrorCode] AssertionFailure assertionErrorCode
         */

        /**
         * Constructs a new AssertionFailure.
         * @memberof types
         * @classdesc Represents an AssertionFailure.
         * @implements IAssertionFailure
         * @constructor
         * @param {types.IAssertionFailure=} [properties] Properties to set
         */
        function AssertionFailure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssertionFailure assertionErrorCode.
         * @member {number|Long} assertionErrorCode
         * @memberof types.AssertionFailure
         * @instance
         */
        AssertionFailure.prototype.assertionErrorCode = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new AssertionFailure instance using the specified properties.
         * @function create
         * @memberof types.AssertionFailure
         * @static
         * @param {types.IAssertionFailure=} [properties] Properties to set
         * @returns {types.AssertionFailure} AssertionFailure instance
         */
        AssertionFailure.create = function create(properties) {
            return new AssertionFailure(properties);
        };

        /**
         * Encodes the specified AssertionFailure message. Does not implicitly {@link types.AssertionFailure.verify|verify} messages.
         * @function encode
         * @memberof types.AssertionFailure
         * @static
         * @param {types.IAssertionFailure} message AssertionFailure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssertionFailure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.assertionErrorCode != null && message.hasOwnProperty("assertionErrorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.assertionErrorCode);
            return writer;
        };

        /**
         * Encodes the specified AssertionFailure message, length delimited. Does not implicitly {@link types.AssertionFailure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AssertionFailure
         * @static
         * @param {types.IAssertionFailure} message AssertionFailure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssertionFailure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssertionFailure message from the specified reader or buffer.
         * @function decode
         * @memberof types.AssertionFailure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AssertionFailure} AssertionFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssertionFailure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AssertionFailure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.assertionErrorCode = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssertionFailure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AssertionFailure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AssertionFailure} AssertionFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssertionFailure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssertionFailure message.
         * @function verify
         * @memberof types.AssertionFailure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssertionFailure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.assertionErrorCode != null && message.hasOwnProperty("assertionErrorCode"))
                if (!$util.isInteger(message.assertionErrorCode) && !(message.assertionErrorCode && $util.isInteger(message.assertionErrorCode.low) && $util.isInteger(message.assertionErrorCode.high)))
                    return "assertionErrorCode: integer|Long expected";
            return null;
        };

        /**
         * Creates an AssertionFailure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AssertionFailure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AssertionFailure} AssertionFailure
         */
        AssertionFailure.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AssertionFailure)
                return object;
            var message = new $root.types.AssertionFailure();
            if (object.assertionErrorCode != null)
                if ($util.Long)
                    (message.assertionErrorCode = $util.Long.fromValue(object.assertionErrorCode)).unsigned = true;
                else if (typeof object.assertionErrorCode === "string")
                    message.assertionErrorCode = parseInt(object.assertionErrorCode, 10);
                else if (typeof object.assertionErrorCode === "number")
                    message.assertionErrorCode = object.assertionErrorCode;
                else if (typeof object.assertionErrorCode === "object")
                    message.assertionErrorCode = new $util.LongBits(object.assertionErrorCode.low >>> 0, object.assertionErrorCode.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AssertionFailure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AssertionFailure
         * @static
         * @param {types.AssertionFailure} message AssertionFailure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssertionFailure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.assertionErrorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.assertionErrorCode = options.longs === String ? "0" : 0;
            if (message.assertionErrorCode != null && message.hasOwnProperty("assertionErrorCode"))
                if (typeof message.assertionErrorCode === "number")
                    object.assertionErrorCode = options.longs === String ? String(message.assertionErrorCode) : message.assertionErrorCode;
                else
                    object.assertionErrorCode = options.longs === String ? $util.Long.prototype.toString.call(message.assertionErrorCode) : options.longs === Number ? new $util.LongBits(message.assertionErrorCode.low >>> 0, message.assertionErrorCode.high >>> 0).toNumber(true) : message.assertionErrorCode;
            return object;
        };

        /**
         * Converts this AssertionFailure to JSON.
         * @function toJSON
         * @memberof types.AssertionFailure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssertionFailure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssertionFailure;
    })();

    types.ArithmeticError = (function() {

        /**
         * Properties of an ArithmeticError.
         * @memberof types
         * @interface IArithmeticError
         * @property {types.ArithmeticError.ArithmeticErrorType|null} [errorCode] ArithmeticError errorCode
         */

        /**
         * Constructs a new ArithmeticError.
         * @memberof types
         * @classdesc Represents an ArithmeticError.
         * @implements IArithmeticError
         * @constructor
         * @param {types.IArithmeticError=} [properties] Properties to set
         */
        function ArithmeticError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArithmeticError errorCode.
         * @member {types.ArithmeticError.ArithmeticErrorType} errorCode
         * @memberof types.ArithmeticError
         * @instance
         */
        ArithmeticError.prototype.errorCode = 0;

        /**
         * Creates a new ArithmeticError instance using the specified properties.
         * @function create
         * @memberof types.ArithmeticError
         * @static
         * @param {types.IArithmeticError=} [properties] Properties to set
         * @returns {types.ArithmeticError} ArithmeticError instance
         */
        ArithmeticError.create = function create(properties) {
            return new ArithmeticError(properties);
        };

        /**
         * Encodes the specified ArithmeticError message. Does not implicitly {@link types.ArithmeticError.verify|verify} messages.
         * @function encode
         * @memberof types.ArithmeticError
         * @static
         * @param {types.IArithmeticError} message ArithmeticError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArithmeticError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified ArithmeticError message, length delimited. Does not implicitly {@link types.ArithmeticError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ArithmeticError
         * @static
         * @param {types.IArithmeticError} message ArithmeticError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArithmeticError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArithmeticError message from the specified reader or buffer.
         * @function decode
         * @memberof types.ArithmeticError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ArithmeticError} ArithmeticError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArithmeticError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ArithmeticError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArithmeticError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ArithmeticError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ArithmeticError} ArithmeticError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArithmeticError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArithmeticError message.
         * @function verify
         * @memberof types.ArithmeticError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArithmeticError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                switch (message.errorCode) {
                default:
                    return "errorCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates an ArithmeticError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ArithmeticError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ArithmeticError} ArithmeticError
         */
        ArithmeticError.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ArithmeticError)
                return object;
            var message = new $root.types.ArithmeticError();
            switch (object.errorCode) {
            case "UnknownArithmeticError":
            case 0:
                message.errorCode = 0;
                break;
            case "Underflow":
            case 1:
                message.errorCode = 1;
                break;
            case "Overflow":
            case 2:
                message.errorCode = 2;
                break;
            case "DivisionByZero":
            case 3:
                message.errorCode = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an ArithmeticError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ArithmeticError
         * @static
         * @param {types.ArithmeticError} message ArithmeticError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArithmeticError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errorCode = options.enums === String ? "UnknownArithmeticError" : 0;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.types.ArithmeticError.ArithmeticErrorType[message.errorCode] : message.errorCode;
            return object;
        };

        /**
         * Converts this ArithmeticError to JSON.
         * @function toJSON
         * @memberof types.ArithmeticError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArithmeticError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ArithmeticErrorType enum.
         * @name types.ArithmeticError.ArithmeticErrorType
         * @enum {string}
         * @property {number} UnknownArithmeticError=0 UnknownArithmeticError value
         * @property {number} Underflow=1 Underflow value
         * @property {number} Overflow=2 Overflow value
         * @property {number} DivisionByZero=3 DivisionByZero value
         */
        ArithmeticError.ArithmeticErrorType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UnknownArithmeticError"] = 0;
            values[valuesById[1] = "Underflow"] = 1;
            values[valuesById[2] = "Overflow"] = 2;
            values[valuesById[3] = "DivisionByZero"] = 3;
            return values;
        })();

        return ArithmeticError;
    })();

    types.DynamicReferenceError = (function() {

        /**
         * Properties of a DynamicReferenceError.
         * @memberof types
         * @interface IDynamicReferenceError
         * @property {types.DynamicReferenceError.DynamicReferenceErrorType|null} [errorCode] DynamicReferenceError errorCode
         */

        /**
         * Constructs a new DynamicReferenceError.
         * @memberof types
         * @classdesc Represents a DynamicReferenceError.
         * @implements IDynamicReferenceError
         * @constructor
         * @param {types.IDynamicReferenceError=} [properties] Properties to set
         */
        function DynamicReferenceError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DynamicReferenceError errorCode.
         * @member {types.DynamicReferenceError.DynamicReferenceErrorType} errorCode
         * @memberof types.DynamicReferenceError
         * @instance
         */
        DynamicReferenceError.prototype.errorCode = 0;

        /**
         * Creates a new DynamicReferenceError instance using the specified properties.
         * @function create
         * @memberof types.DynamicReferenceError
         * @static
         * @param {types.IDynamicReferenceError=} [properties] Properties to set
         * @returns {types.DynamicReferenceError} DynamicReferenceError instance
         */
        DynamicReferenceError.create = function create(properties) {
            return new DynamicReferenceError(properties);
        };

        /**
         * Encodes the specified DynamicReferenceError message. Does not implicitly {@link types.DynamicReferenceError.verify|verify} messages.
         * @function encode
         * @memberof types.DynamicReferenceError
         * @static
         * @param {types.IDynamicReferenceError} message DynamicReferenceError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicReferenceError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified DynamicReferenceError message, length delimited. Does not implicitly {@link types.DynamicReferenceError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.DynamicReferenceError
         * @static
         * @param {types.IDynamicReferenceError} message DynamicReferenceError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicReferenceError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DynamicReferenceError message from the specified reader or buffer.
         * @function decode
         * @memberof types.DynamicReferenceError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.DynamicReferenceError} DynamicReferenceError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicReferenceError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.DynamicReferenceError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DynamicReferenceError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.DynamicReferenceError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.DynamicReferenceError} DynamicReferenceError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicReferenceError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DynamicReferenceError message.
         * @function verify
         * @memberof types.DynamicReferenceError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DynamicReferenceError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                switch (message.errorCode) {
                default:
                    return "errorCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a DynamicReferenceError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.DynamicReferenceError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.DynamicReferenceError} DynamicReferenceError
         */
        DynamicReferenceError.fromObject = function fromObject(object) {
            if (object instanceof $root.types.DynamicReferenceError)
                return object;
            var message = new $root.types.DynamicReferenceError();
            switch (object.errorCode) {
            case "UnknownDynamicReferenceError":
            case 0:
                message.errorCode = 0;
                break;
            case "MoveOfBorrowedResource":
            case 1:
                message.errorCode = 1;
                break;
            case "GlobalRefAlreadyReleased":
            case 2:
                message.errorCode = 2;
                break;
            case "MissingReleaseRef":
            case 3:
                message.errorCode = 3;
                break;
            case "GlobalAlreadyBorrowed":
            case 4:
                message.errorCode = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DynamicReferenceError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.DynamicReferenceError
         * @static
         * @param {types.DynamicReferenceError} message DynamicReferenceError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DynamicReferenceError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errorCode = options.enums === String ? "UnknownDynamicReferenceError" : 0;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.types.DynamicReferenceError.DynamicReferenceErrorType[message.errorCode] : message.errorCode;
            return object;
        };

        /**
         * Converts this DynamicReferenceError to JSON.
         * @function toJSON
         * @memberof types.DynamicReferenceError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DynamicReferenceError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DynamicReferenceErrorType enum.
         * @name types.DynamicReferenceError.DynamicReferenceErrorType
         * @enum {string}
         * @property {number} UnknownDynamicReferenceError=0 UnknownDynamicReferenceError value
         * @property {number} MoveOfBorrowedResource=1 MoveOfBorrowedResource value
         * @property {number} GlobalRefAlreadyReleased=2 GlobalRefAlreadyReleased value
         * @property {number} MissingReleaseRef=3 MissingReleaseRef value
         * @property {number} GlobalAlreadyBorrowed=4 GlobalAlreadyBorrowed value
         */
        DynamicReferenceError.DynamicReferenceErrorType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UnknownDynamicReferenceError"] = 0;
            values[valuesById[1] = "MoveOfBorrowedResource"] = 1;
            values[valuesById[2] = "GlobalRefAlreadyReleased"] = 2;
            values[valuesById[3] = "MissingReleaseRef"] = 3;
            values[valuesById[4] = "GlobalAlreadyBorrowed"] = 4;
            return values;
        })();

        return DynamicReferenceError;
    })();

    types.ExecutionStatus = (function() {

        /**
         * Properties of an ExecutionStatus.
         * @memberof types
         * @interface IExecutionStatus
         * @property {types.RuntimeStatus|null} [runtimeStatus] ExecutionStatus runtimeStatus
         * @property {types.IAssertionFailure|null} [assertionFailure] ExecutionStatus assertionFailure
         * @property {types.IArithmeticError|null} [arithmeticError] ExecutionStatus arithmeticError
         * @property {types.IDynamicReferenceError|null} [referenceError] ExecutionStatus referenceError
         */

        /**
         * Constructs a new ExecutionStatus.
         * @memberof types
         * @classdesc Represents an ExecutionStatus.
         * @implements IExecutionStatus
         * @constructor
         * @param {types.IExecutionStatus=} [properties] Properties to set
         */
        function ExecutionStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecutionStatus runtimeStatus.
         * @member {types.RuntimeStatus} runtimeStatus
         * @memberof types.ExecutionStatus
         * @instance
         */
        ExecutionStatus.prototype.runtimeStatus = 0;

        /**
         * ExecutionStatus assertionFailure.
         * @member {types.IAssertionFailure|null|undefined} assertionFailure
         * @memberof types.ExecutionStatus
         * @instance
         */
        ExecutionStatus.prototype.assertionFailure = null;

        /**
         * ExecutionStatus arithmeticError.
         * @member {types.IArithmeticError|null|undefined} arithmeticError
         * @memberof types.ExecutionStatus
         * @instance
         */
        ExecutionStatus.prototype.arithmeticError = null;

        /**
         * ExecutionStatus referenceError.
         * @member {types.IDynamicReferenceError|null|undefined} referenceError
         * @memberof types.ExecutionStatus
         * @instance
         */
        ExecutionStatus.prototype.referenceError = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ExecutionStatus executionStatus.
         * @member {"runtimeStatus"|"assertionFailure"|"arithmeticError"|"referenceError"|undefined} executionStatus
         * @memberof types.ExecutionStatus
         * @instance
         */
        Object.defineProperty(ExecutionStatus.prototype, "executionStatus", {
            get: $util.oneOfGetter($oneOfFields = ["runtimeStatus", "assertionFailure", "arithmeticError", "referenceError"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ExecutionStatus instance using the specified properties.
         * @function create
         * @memberof types.ExecutionStatus
         * @static
         * @param {types.IExecutionStatus=} [properties] Properties to set
         * @returns {types.ExecutionStatus} ExecutionStatus instance
         */
        ExecutionStatus.create = function create(properties) {
            return new ExecutionStatus(properties);
        };

        /**
         * Encodes the specified ExecutionStatus message. Does not implicitly {@link types.ExecutionStatus.verify|verify} messages.
         * @function encode
         * @memberof types.ExecutionStatus
         * @static
         * @param {types.IExecutionStatus} message ExecutionStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutionStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.runtimeStatus != null && message.hasOwnProperty("runtimeStatus"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.runtimeStatus);
            if (message.assertionFailure != null && message.hasOwnProperty("assertionFailure"))
                $root.types.AssertionFailure.encode(message.assertionFailure, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.arithmeticError != null && message.hasOwnProperty("arithmeticError"))
                $root.types.ArithmeticError.encode(message.arithmeticError, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.referenceError != null && message.hasOwnProperty("referenceError"))
                $root.types.DynamicReferenceError.encode(message.referenceError, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExecutionStatus message, length delimited. Does not implicitly {@link types.ExecutionStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ExecutionStatus
         * @static
         * @param {types.IExecutionStatus} message ExecutionStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutionStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecutionStatus message from the specified reader or buffer.
         * @function decode
         * @memberof types.ExecutionStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ExecutionStatus} ExecutionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutionStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ExecutionStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.runtimeStatus = reader.int32();
                    break;
                case 2:
                    message.assertionFailure = $root.types.AssertionFailure.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.arithmeticError = $root.types.ArithmeticError.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.referenceError = $root.types.DynamicReferenceError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecutionStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ExecutionStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ExecutionStatus} ExecutionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutionStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecutionStatus message.
         * @function verify
         * @memberof types.ExecutionStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecutionStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.runtimeStatus != null && message.hasOwnProperty("runtimeStatus")) {
                properties.executionStatus = 1;
                switch (message.runtimeStatus) {
                default:
                    return "runtimeStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            }
            if (message.assertionFailure != null && message.hasOwnProperty("assertionFailure")) {
                if (properties.executionStatus === 1)
                    return "executionStatus: multiple values";
                properties.executionStatus = 1;
                {
                    var error = $root.types.AssertionFailure.verify(message.assertionFailure);
                    if (error)
                        return "assertionFailure." + error;
                }
            }
            if (message.arithmeticError != null && message.hasOwnProperty("arithmeticError")) {
                if (properties.executionStatus === 1)
                    return "executionStatus: multiple values";
                properties.executionStatus = 1;
                {
                    var error = $root.types.ArithmeticError.verify(message.arithmeticError);
                    if (error)
                        return "arithmeticError." + error;
                }
            }
            if (message.referenceError != null && message.hasOwnProperty("referenceError")) {
                if (properties.executionStatus === 1)
                    return "executionStatus: multiple values";
                properties.executionStatus = 1;
                {
                    var error = $root.types.DynamicReferenceError.verify(message.referenceError);
                    if (error)
                        return "referenceError." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ExecutionStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ExecutionStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ExecutionStatus} ExecutionStatus
         */
        ExecutionStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ExecutionStatus)
                return object;
            var message = new $root.types.ExecutionStatus();
            switch (object.runtimeStatus) {
            case "UnknownRuntimeStatus":
            case 0:
                message.runtimeStatus = 0;
                break;
            case "Executed":
            case 1:
                message.runtimeStatus = 1;
                break;
            case "OutOfGas":
            case 2:
                message.runtimeStatus = 2;
                break;
            case "ResourceDoesNotExist":
            case 3:
                message.runtimeStatus = 3;
                break;
            case "ResourceAlreadyExists":
            case 4:
                message.runtimeStatus = 4;
                break;
            case "EvictedAccountAccess":
            case 5:
                message.runtimeStatus = 5;
                break;
            case "AccountAddressAlreadyExists":
            case 6:
                message.runtimeStatus = 6;
                break;
            case "TypeError":
            case 7:
                message.runtimeStatus = 7;
                break;
            case "MissingData":
            case 8:
                message.runtimeStatus = 8;
                break;
            case "DataFormatError":
            case 9:
                message.runtimeStatus = 9;
                break;
            case "InvalidData":
            case 10:
                message.runtimeStatus = 10;
                break;
            case "RemoteDataError":
            case 11:
                message.runtimeStatus = 11;
                break;
            case "CannotWriteExistingResource":
            case 12:
                message.runtimeStatus = 12;
                break;
            case "ValueSerializationError":
            case 13:
                message.runtimeStatus = 13;
                break;
            case "ValueDeserializationError":
            case 14:
                message.runtimeStatus = 14;
                break;
            case "DuplicateModuleName":
            case 15:
                message.runtimeStatus = 15;
                break;
            }
            if (object.assertionFailure != null) {
                if (typeof object.assertionFailure !== "object")
                    throw TypeError(".types.ExecutionStatus.assertionFailure: object expected");
                message.assertionFailure = $root.types.AssertionFailure.fromObject(object.assertionFailure);
            }
            if (object.arithmeticError != null) {
                if (typeof object.arithmeticError !== "object")
                    throw TypeError(".types.ExecutionStatus.arithmeticError: object expected");
                message.arithmeticError = $root.types.ArithmeticError.fromObject(object.arithmeticError);
            }
            if (object.referenceError != null) {
                if (typeof object.referenceError !== "object")
                    throw TypeError(".types.ExecutionStatus.referenceError: object expected");
                message.referenceError = $root.types.DynamicReferenceError.fromObject(object.referenceError);
            }
            return message;
        };

        /**
         * Creates a plain object from an ExecutionStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ExecutionStatus
         * @static
         * @param {types.ExecutionStatus} message ExecutionStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecutionStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.runtimeStatus != null && message.hasOwnProperty("runtimeStatus")) {
                object.runtimeStatus = options.enums === String ? $root.types.RuntimeStatus[message.runtimeStatus] : message.runtimeStatus;
                if (options.oneofs)
                    object.executionStatus = "runtimeStatus";
            }
            if (message.assertionFailure != null && message.hasOwnProperty("assertionFailure")) {
                object.assertionFailure = $root.types.AssertionFailure.toObject(message.assertionFailure, options);
                if (options.oneofs)
                    object.executionStatus = "assertionFailure";
            }
            if (message.arithmeticError != null && message.hasOwnProperty("arithmeticError")) {
                object.arithmeticError = $root.types.ArithmeticError.toObject(message.arithmeticError, options);
                if (options.oneofs)
                    object.executionStatus = "arithmeticError";
            }
            if (message.referenceError != null && message.hasOwnProperty("referenceError")) {
                object.referenceError = $root.types.DynamicReferenceError.toObject(message.referenceError, options);
                if (options.oneofs)
                    object.executionStatus = "referenceError";
            }
            return object;
        };

        /**
         * Converts this ExecutionStatus to JSON.
         * @function toJSON
         * @memberof types.ExecutionStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecutionStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExecutionStatus;
    })();

    types.VMStatus = (function() {

        /**
         * Properties of a VMStatus.
         * @memberof types
         * @interface IVMStatus
         * @property {types.IVMValidationStatus|null} [validation] VMStatus validation
         * @property {types.IVMVerificationStatusList|null} [verification] VMStatus verification
         * @property {types.VMInvariantViolationError|null} [invariantViolation] VMStatus invariantViolation
         * @property {types.BinaryError|null} [deserialization] VMStatus deserialization
         * @property {types.IExecutionStatus|null} [execution] VMStatus execution
         */

        /**
         * Constructs a new VMStatus.
         * @memberof types
         * @classdesc Represents a VMStatus.
         * @implements IVMStatus
         * @constructor
         * @param {types.IVMStatus=} [properties] Properties to set
         */
        function VMStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VMStatus validation.
         * @member {types.IVMValidationStatus|null|undefined} validation
         * @memberof types.VMStatus
         * @instance
         */
        VMStatus.prototype.validation = null;

        /**
         * VMStatus verification.
         * @member {types.IVMVerificationStatusList|null|undefined} verification
         * @memberof types.VMStatus
         * @instance
         */
        VMStatus.prototype.verification = null;

        /**
         * VMStatus invariantViolation.
         * @member {types.VMInvariantViolationError} invariantViolation
         * @memberof types.VMStatus
         * @instance
         */
        VMStatus.prototype.invariantViolation = 0;

        /**
         * VMStatus deserialization.
         * @member {types.BinaryError} deserialization
         * @memberof types.VMStatus
         * @instance
         */
        VMStatus.prototype.deserialization = 0;

        /**
         * VMStatus execution.
         * @member {types.IExecutionStatus|null|undefined} execution
         * @memberof types.VMStatus
         * @instance
         */
        VMStatus.prototype.execution = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * VMStatus errorType.
         * @member {"validation"|"verification"|"invariantViolation"|"deserialization"|"execution"|undefined} errorType
         * @memberof types.VMStatus
         * @instance
         */
        Object.defineProperty(VMStatus.prototype, "errorType", {
            get: $util.oneOfGetter($oneOfFields = ["validation", "verification", "invariantViolation", "deserialization", "execution"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new VMStatus instance using the specified properties.
         * @function create
         * @memberof types.VMStatus
         * @static
         * @param {types.IVMStatus=} [properties] Properties to set
         * @returns {types.VMStatus} VMStatus instance
         */
        VMStatus.create = function create(properties) {
            return new VMStatus(properties);
        };

        /**
         * Encodes the specified VMStatus message. Does not implicitly {@link types.VMStatus.verify|verify} messages.
         * @function encode
         * @memberof types.VMStatus
         * @static
         * @param {types.IVMStatus} message VMStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.validation != null && message.hasOwnProperty("validation"))
                $root.types.VMValidationStatus.encode(message.validation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.verification != null && message.hasOwnProperty("verification"))
                $root.types.VMVerificationStatusList.encode(message.verification, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.invariantViolation != null && message.hasOwnProperty("invariantViolation"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.invariantViolation);
            if (message.deserialization != null && message.hasOwnProperty("deserialization"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.deserialization);
            if (message.execution != null && message.hasOwnProperty("execution"))
                $root.types.ExecutionStatus.encode(message.execution, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VMStatus message, length delimited. Does not implicitly {@link types.VMStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.VMStatus
         * @static
         * @param {types.IVMStatus} message VMStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VMStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VMStatus message from the specified reader or buffer.
         * @function decode
         * @memberof types.VMStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.VMStatus} VMStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.VMStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.validation = $root.types.VMValidationStatus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.verification = $root.types.VMVerificationStatusList.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.invariantViolation = reader.int32();
                    break;
                case 4:
                    message.deserialization = reader.int32();
                    break;
                case 5:
                    message.execution = $root.types.ExecutionStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VMStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.VMStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.VMStatus} VMStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VMStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VMStatus message.
         * @function verify
         * @memberof types.VMStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VMStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.validation != null && message.hasOwnProperty("validation")) {
                properties.errorType = 1;
                {
                    var error = $root.types.VMValidationStatus.verify(message.validation);
                    if (error)
                        return "validation." + error;
                }
            }
            if (message.verification != null && message.hasOwnProperty("verification")) {
                if (properties.errorType === 1)
                    return "errorType: multiple values";
                properties.errorType = 1;
                {
                    var error = $root.types.VMVerificationStatusList.verify(message.verification);
                    if (error)
                        return "verification." + error;
                }
            }
            if (message.invariantViolation != null && message.hasOwnProperty("invariantViolation")) {
                if (properties.errorType === 1)
                    return "errorType: multiple values";
                properties.errorType = 1;
                switch (message.invariantViolation) {
                default:
                    return "invariantViolation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            }
            if (message.deserialization != null && message.hasOwnProperty("deserialization")) {
                if (properties.errorType === 1)
                    return "errorType: multiple values";
                properties.errorType = 1;
                switch (message.deserialization) {
                default:
                    return "deserialization: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            }
            if (message.execution != null && message.hasOwnProperty("execution")) {
                if (properties.errorType === 1)
                    return "errorType: multiple values";
                properties.errorType = 1;
                {
                    var error = $root.types.ExecutionStatus.verify(message.execution);
                    if (error)
                        return "execution." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VMStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.VMStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.VMStatus} VMStatus
         */
        VMStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.types.VMStatus)
                return object;
            var message = new $root.types.VMStatus();
            if (object.validation != null) {
                if (typeof object.validation !== "object")
                    throw TypeError(".types.VMStatus.validation: object expected");
                message.validation = $root.types.VMValidationStatus.fromObject(object.validation);
            }
            if (object.verification != null) {
                if (typeof object.verification !== "object")
                    throw TypeError(".types.VMStatus.verification: object expected");
                message.verification = $root.types.VMVerificationStatusList.fromObject(object.verification);
            }
            switch (object.invariantViolation) {
            case "UnknownInvariantViolationError":
            case 0:
                message.invariantViolation = 0;
                break;
            case "OutOfBoundsIndex":
            case 1:
                message.invariantViolation = 1;
                break;
            case "OutOfBoundsRange":
            case 2:
                message.invariantViolation = 2;
                break;
            case "EmptyValueStack":
            case 3:
                message.invariantViolation = 3;
                break;
            case "EmptyCallStack":
            case 4:
                message.invariantViolation = 4;
                break;
            case "PCOverflow":
            case 5:
                message.invariantViolation = 5;
                break;
            case "LinkerError":
            case 6:
                message.invariantViolation = 6;
                break;
            case "LocalReferenceError":
            case 7:
                message.invariantViolation = 7;
                break;
            case "StorageError":
            case 8:
                message.invariantViolation = 8;
                break;
            }
            switch (object.deserialization) {
            case "UnknownBinaryError":
            case 0:
                message.deserialization = 0;
                break;
            case "Malformed":
            case 1:
                message.deserialization = 1;
                break;
            case "BadMagic":
            case 2:
                message.deserialization = 2;
                break;
            case "UnknownVersion":
            case 3:
                message.deserialization = 3;
                break;
            case "UnknownTableType":
            case 4:
                message.deserialization = 4;
                break;
            case "UnknownSignatureType":
            case 5:
                message.deserialization = 5;
                break;
            case "UnknownSerializedType":
            case 6:
                message.deserialization = 6;
                break;
            case "UnknownOpcode":
            case 7:
                message.deserialization = 7;
                break;
            case "BadHeaderTable":
            case 8:
                message.deserialization = 8;
                break;
            case "UnexpectedSignatureType":
            case 9:
                message.deserialization = 9;
                break;
            case "DuplicateTable":
            case 10:
                message.deserialization = 10;
                break;
            }
            if (object.execution != null) {
                if (typeof object.execution !== "object")
                    throw TypeError(".types.VMStatus.execution: object expected");
                message.execution = $root.types.ExecutionStatus.fromObject(object.execution);
            }
            return message;
        };

        /**
         * Creates a plain object from a VMStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.VMStatus
         * @static
         * @param {types.VMStatus} message VMStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VMStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.validation != null && message.hasOwnProperty("validation")) {
                object.validation = $root.types.VMValidationStatus.toObject(message.validation, options);
                if (options.oneofs)
                    object.errorType = "validation";
            }
            if (message.verification != null && message.hasOwnProperty("verification")) {
                object.verification = $root.types.VMVerificationStatusList.toObject(message.verification, options);
                if (options.oneofs)
                    object.errorType = "verification";
            }
            if (message.invariantViolation != null && message.hasOwnProperty("invariantViolation")) {
                object.invariantViolation = options.enums === String ? $root.types.VMInvariantViolationError[message.invariantViolation] : message.invariantViolation;
                if (options.oneofs)
                    object.errorType = "invariantViolation";
            }
            if (message.deserialization != null && message.hasOwnProperty("deserialization")) {
                object.deserialization = options.enums === String ? $root.types.BinaryError[message.deserialization] : message.deserialization;
                if (options.oneofs)
                    object.errorType = "deserialization";
            }
            if (message.execution != null && message.hasOwnProperty("execution")) {
                object.execution = $root.types.ExecutionStatus.toObject(message.execution, options);
                if (options.oneofs)
                    object.errorType = "execution";
            }
            return object;
        };

        /**
         * Converts this VMStatus to JSON.
         * @function toJSON
         * @memberof types.VMStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VMStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VMStatus;
    })();

    types.ModuleId = (function() {

        /**
         * Properties of a ModuleId.
         * @memberof types
         * @interface IModuleId
         * @property {Uint8Array|null} [address] ModuleId address
         * @property {string|null} [name] ModuleId name
         */

        /**
         * Constructs a new ModuleId.
         * @memberof types
         * @classdesc The unique identifier for a module on the chain.
         * @implements IModuleId
         * @constructor
         * @param {types.IModuleId=} [properties] Properties to set
         */
        function ModuleId(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModuleId address.
         * @member {Uint8Array} address
         * @memberof types.ModuleId
         * @instance
         */
        ModuleId.prototype.address = $util.newBuffer([]);

        /**
         * ModuleId name.
         * @member {string} name
         * @memberof types.ModuleId
         * @instance
         */
        ModuleId.prototype.name = "";

        /**
         * Creates a new ModuleId instance using the specified properties.
         * @function create
         * @memberof types.ModuleId
         * @static
         * @param {types.IModuleId=} [properties] Properties to set
         * @returns {types.ModuleId} ModuleId instance
         */
        ModuleId.create = function create(properties) {
            return new ModuleId(properties);
        };

        /**
         * Encodes the specified ModuleId message. Does not implicitly {@link types.ModuleId.verify|verify} messages.
         * @function encode
         * @memberof types.ModuleId
         * @static
         * @param {types.IModuleId} message ModuleId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModuleId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ModuleId message, length delimited. Does not implicitly {@link types.ModuleId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ModuleId
         * @static
         * @param {types.IModuleId} message ModuleId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModuleId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModuleId message from the specified reader or buffer.
         * @function decode
         * @memberof types.ModuleId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ModuleId} ModuleId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModuleId.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ModuleId();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModuleId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ModuleId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ModuleId} ModuleId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModuleId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModuleId message.
         * @function verify
         * @memberof types.ModuleId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModuleId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a ModuleId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ModuleId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ModuleId} ModuleId
         */
        ModuleId.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ModuleId)
                return object;
            var message = new $root.types.ModuleId();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ModuleId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ModuleId
         * @static
         * @param {types.ModuleId} message ModuleId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModuleId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                object.name = "";
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ModuleId to JSON.
         * @function toJSON
         * @memberof types.ModuleId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModuleId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModuleId;
    })();

    return types;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                var message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                var message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                var message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                var message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                var message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                var message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                var message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                var message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                var message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

$root.mempool = (function() {

    /**
     * Namespace mempool.
     * @exports mempool
     * @namespace
     */
    var mempool = {};

    /**
     * MempoolAddTransactionStatus enum.
     * @name mempool.MempoolAddTransactionStatus
     * @enum {string}
     * @property {number} Valid=0 Valid value
     * @property {number} InsufficientBalance=1 InsufficientBalance value
     * @property {number} InvalidSeqNumber=2 InvalidSeqNumber value
     * @property {number} MempoolIsFull=3 MempoolIsFull value
     * @property {number} TooManyTransactions=4 TooManyTransactions value
     * @property {number} InvalidUpdate=5 InvalidUpdate value
     */
    mempool.MempoolAddTransactionStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Valid"] = 0;
        values[valuesById[1] = "InsufficientBalance"] = 1;
        values[valuesById[2] = "InvalidSeqNumber"] = 2;
        values[valuesById[3] = "MempoolIsFull"] = 3;
        values[valuesById[4] = "TooManyTransactions"] = 4;
        values[valuesById[5] = "InvalidUpdate"] = 5;
        return values;
    })();

    return mempool;
})();

module.exports = $root;
