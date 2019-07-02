import * as $protobuf from "protobufjs";
/** Namespace admission_control. */
export namespace admission_control {

    /** Properties of a SubmitTransactionRequest. */
    interface ISubmitTransactionRequest {

        /** SubmitTransactionRequest signedTxn */
        signedTxn?: (types.ISignedTransaction|null);
    }

    /** Represents a SubmitTransactionRequest. */
    class SubmitTransactionRequest implements ISubmitTransactionRequest {

        /**
         * Constructs a new SubmitTransactionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: admission_control.ISubmitTransactionRequest);

        /** SubmitTransactionRequest signedTxn. */
        public signedTxn?: (types.ISignedTransaction|null);

        /**
         * Creates a new SubmitTransactionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubmitTransactionRequest instance
         */
        public static create(properties?: admission_control.ISubmitTransactionRequest): admission_control.SubmitTransactionRequest;

        /**
         * Encodes the specified SubmitTransactionRequest message. Does not implicitly {@link admission_control.SubmitTransactionRequest.verify|verify} messages.
         * @param message SubmitTransactionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: admission_control.ISubmitTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubmitTransactionRequest message, length delimited. Does not implicitly {@link admission_control.SubmitTransactionRequest.verify|verify} messages.
         * @param message SubmitTransactionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: admission_control.ISubmitTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubmitTransactionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubmitTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): admission_control.SubmitTransactionRequest;

        /**
         * Decodes a SubmitTransactionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubmitTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): admission_control.SubmitTransactionRequest;

        /**
         * Verifies a SubmitTransactionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubmitTransactionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmitTransactionRequest
         */
        public static fromObject(object: { [k: string]: any }): admission_control.SubmitTransactionRequest;

        /**
         * Creates a plain object from a SubmitTransactionRequest message. Also converts values to other types if specified.
         * @param message SubmitTransactionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: admission_control.SubmitTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmitTransactionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AdmissionControlStatus enum. */
    enum AdmissionControlStatus {
        Accepted = 0,
        Blacklisted = 1,
        Rejected = 2
    }

    /** Properties of a SubmitTransactionResponse. */
    interface ISubmitTransactionResponse {

        /** SubmitTransactionResponse vmStatus */
        vmStatus?: (types.IVMStatus|null);

        /** SubmitTransactionResponse acStatus */
        acStatus?: (admission_control.AdmissionControlStatus|null);

        /** SubmitTransactionResponse mempoolStatus */
        mempoolStatus?: (mempool.MempoolAddTransactionStatus|null);

        /** SubmitTransactionResponse validatorId */
        validatorId?: (Uint8Array|null);
    }

    /** Represents a SubmitTransactionResponse. */
    class SubmitTransactionResponse implements ISubmitTransactionResponse {

        /**
         * Constructs a new SubmitTransactionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: admission_control.ISubmitTransactionResponse);

        /** SubmitTransactionResponse vmStatus. */
        public vmStatus?: (types.IVMStatus|null);

        /** SubmitTransactionResponse acStatus. */
        public acStatus: admission_control.AdmissionControlStatus;

        /** SubmitTransactionResponse mempoolStatus. */
        public mempoolStatus: mempool.MempoolAddTransactionStatus;

        /** SubmitTransactionResponse validatorId. */
        public validatorId: Uint8Array;

        /** SubmitTransactionResponse status. */
        public status?: ("vmStatus"|"acStatus"|"mempoolStatus");

        /**
         * Creates a new SubmitTransactionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubmitTransactionResponse instance
         */
        public static create(properties?: admission_control.ISubmitTransactionResponse): admission_control.SubmitTransactionResponse;

        /**
         * Encodes the specified SubmitTransactionResponse message. Does not implicitly {@link admission_control.SubmitTransactionResponse.verify|verify} messages.
         * @param message SubmitTransactionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: admission_control.ISubmitTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubmitTransactionResponse message, length delimited. Does not implicitly {@link admission_control.SubmitTransactionResponse.verify|verify} messages.
         * @param message SubmitTransactionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: admission_control.ISubmitTransactionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubmitTransactionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubmitTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): admission_control.SubmitTransactionResponse;

        /**
         * Decodes a SubmitTransactionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubmitTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): admission_control.SubmitTransactionResponse;

        /**
         * Verifies a SubmitTransactionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubmitTransactionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmitTransactionResponse
         */
        public static fromObject(object: { [k: string]: any }): admission_control.SubmitTransactionResponse;

        /**
         * Creates a plain object from a SubmitTransactionResponse message. Also converts values to other types if specified.
         * @param message SubmitTransactionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: admission_control.SubmitTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmitTransactionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an AdmissionControl */
    class AdmissionControl extends $protobuf.rpc.Service {

        /**
         * Constructs a new AdmissionControl service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AdmissionControl service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AdmissionControl;

        /**
         * Calls SubmitTransaction.
         * @param request SubmitTransactionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SubmitTransactionResponse
         */
        public submitTransaction(request: admission_control.ISubmitTransactionRequest, callback: admission_control.AdmissionControl.SubmitTransactionCallback): void;

        /**
         * Calls SubmitTransaction.
         * @param request SubmitTransactionRequest message or plain object
         * @returns Promise
         */
        public submitTransaction(request: admission_control.ISubmitTransactionRequest): Promise<admission_control.SubmitTransactionResponse>;

        /**
         * Calls UpdateToLatestLedger.
         * @param request UpdateToLatestLedgerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateToLatestLedgerResponse
         */
        public updateToLatestLedger(request: types.IUpdateToLatestLedgerRequest, callback: admission_control.AdmissionControl.UpdateToLatestLedgerCallback): void;

        /**
         * Calls UpdateToLatestLedger.
         * @param request UpdateToLatestLedgerRequest message or plain object
         * @returns Promise
         */
        public updateToLatestLedger(request: types.IUpdateToLatestLedgerRequest): Promise<types.UpdateToLatestLedgerResponse>;
    }

    namespace AdmissionControl {

        /**
         * Callback as used by {@link admission_control.AdmissionControl#submitTransaction}.
         * @param error Error, if any
         * @param [response] SubmitTransactionResponse
         */
        type SubmitTransactionCallback = (error: (Error|null), response?: admission_control.SubmitTransactionResponse) => void;

        /**
         * Callback as used by {@link admission_control.AdmissionControl#updateToLatestLedger}.
         * @param error Error, if any
         * @param [response] UpdateToLatestLedgerResponse
         */
        type UpdateToLatestLedgerCallback = (error: (Error|null), response?: types.UpdateToLatestLedgerResponse) => void;
    }
}

/** Namespace types. */
export namespace types {

    /** Properties of an UpdateToLatestLedgerRequest. */
    interface IUpdateToLatestLedgerRequest {

        /** UpdateToLatestLedgerRequest clientKnownVersion */
        clientKnownVersion?: (number|Long|null);

        /** UpdateToLatestLedgerRequest requestedItems */
        requestedItems?: (types.IRequestItem[]|null);
    }

    /** Represents an UpdateToLatestLedgerRequest. */
    class UpdateToLatestLedgerRequest implements IUpdateToLatestLedgerRequest {

        /**
         * Constructs a new UpdateToLatestLedgerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IUpdateToLatestLedgerRequest);

        /** UpdateToLatestLedgerRequest clientKnownVersion. */
        public clientKnownVersion: (number|Long);

        /** UpdateToLatestLedgerRequest requestedItems. */
        public requestedItems: types.IRequestItem[];

        /**
         * Creates a new UpdateToLatestLedgerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateToLatestLedgerRequest instance
         */
        public static create(properties?: types.IUpdateToLatestLedgerRequest): types.UpdateToLatestLedgerRequest;

        /**
         * Encodes the specified UpdateToLatestLedgerRequest message. Does not implicitly {@link types.UpdateToLatestLedgerRequest.verify|verify} messages.
         * @param message UpdateToLatestLedgerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IUpdateToLatestLedgerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateToLatestLedgerRequest message, length delimited. Does not implicitly {@link types.UpdateToLatestLedgerRequest.verify|verify} messages.
         * @param message UpdateToLatestLedgerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IUpdateToLatestLedgerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateToLatestLedgerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateToLatestLedgerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.UpdateToLatestLedgerRequest;

        /**
         * Decodes an UpdateToLatestLedgerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateToLatestLedgerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.UpdateToLatestLedgerRequest;

        /**
         * Verifies an UpdateToLatestLedgerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateToLatestLedgerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateToLatestLedgerRequest
         */
        public static fromObject(object: { [k: string]: any }): types.UpdateToLatestLedgerRequest;

        /**
         * Creates a plain object from an UpdateToLatestLedgerRequest message. Also converts values to other types if specified.
         * @param message UpdateToLatestLedgerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.UpdateToLatestLedgerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateToLatestLedgerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestItem. */
    interface IRequestItem {

        /** RequestItem getAccountStateRequest */
        getAccountStateRequest?: (types.IGetAccountStateRequest|null);

        /** RequestItem getAccountTransactionBySequenceNumberRequest */
        getAccountTransactionBySequenceNumberRequest?: (types.IGetAccountTransactionBySequenceNumberRequest|null);

        /** RequestItem getEventsByEventAccessPathRequest */
        getEventsByEventAccessPathRequest?: (types.IGetEventsByEventAccessPathRequest|null);

        /** RequestItem getTransactionsRequest */
        getTransactionsRequest?: (types.IGetTransactionsRequest|null);
    }

    /** Represents a RequestItem. */
    class RequestItem implements IRequestItem {

        /**
         * Constructs a new RequestItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestItem);

        /** RequestItem getAccountStateRequest. */
        public getAccountStateRequest?: (types.IGetAccountStateRequest|null);

        /** RequestItem getAccountTransactionBySequenceNumberRequest. */
        public getAccountTransactionBySequenceNumberRequest?: (types.IGetAccountTransactionBySequenceNumberRequest|null);

        /** RequestItem getEventsByEventAccessPathRequest. */
        public getEventsByEventAccessPathRequest?: (types.IGetEventsByEventAccessPathRequest|null);

        /** RequestItem getTransactionsRequest. */
        public getTransactionsRequest?: (types.IGetTransactionsRequest|null);

        /** RequestItem requestedItems. */
        public requestedItems?: ("getAccountStateRequest"|"getAccountTransactionBySequenceNumberRequest"|"getEventsByEventAccessPathRequest"|"getTransactionsRequest");

        /**
         * Creates a new RequestItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestItem instance
         */
        public static create(properties?: types.IRequestItem): types.RequestItem;

        /**
         * Encodes the specified RequestItem message. Does not implicitly {@link types.RequestItem.verify|verify} messages.
         * @param message RequestItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestItem message, length delimited. Does not implicitly {@link types.RequestItem.verify|verify} messages.
         * @param message RequestItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestItem;

        /**
         * Decodes a RequestItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestItem;

        /**
         * Verifies a RequestItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestItem
         */
        public static fromObject(object: { [k: string]: any }): types.RequestItem;

        /**
         * Creates a plain object from a RequestItem message. Also converts values to other types if specified.
         * @param message RequestItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateToLatestLedgerResponse. */
    interface IUpdateToLatestLedgerResponse {

        /** UpdateToLatestLedgerResponse responseItems */
        responseItems?: (types.IResponseItem[]|null);

        /** UpdateToLatestLedgerResponse ledgerInfoWithSigs */
        ledgerInfoWithSigs?: (types.ILedgerInfoWithSignatures|null);

        /** UpdateToLatestLedgerResponse validatorChangeEvents */
        validatorChangeEvents?: (types.IValidatorChangeEventWithProof[]|null);
    }

    /** Represents an UpdateToLatestLedgerResponse. */
    class UpdateToLatestLedgerResponse implements IUpdateToLatestLedgerResponse {

        /**
         * Constructs a new UpdateToLatestLedgerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IUpdateToLatestLedgerResponse);

        /** UpdateToLatestLedgerResponse responseItems. */
        public responseItems: types.IResponseItem[];

        /** UpdateToLatestLedgerResponse ledgerInfoWithSigs. */
        public ledgerInfoWithSigs?: (types.ILedgerInfoWithSignatures|null);

        /** UpdateToLatestLedgerResponse validatorChangeEvents. */
        public validatorChangeEvents: types.IValidatorChangeEventWithProof[];

        /**
         * Creates a new UpdateToLatestLedgerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateToLatestLedgerResponse instance
         */
        public static create(properties?: types.IUpdateToLatestLedgerResponse): types.UpdateToLatestLedgerResponse;

        /**
         * Encodes the specified UpdateToLatestLedgerResponse message. Does not implicitly {@link types.UpdateToLatestLedgerResponse.verify|verify} messages.
         * @param message UpdateToLatestLedgerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IUpdateToLatestLedgerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateToLatestLedgerResponse message, length delimited. Does not implicitly {@link types.UpdateToLatestLedgerResponse.verify|verify} messages.
         * @param message UpdateToLatestLedgerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IUpdateToLatestLedgerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateToLatestLedgerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateToLatestLedgerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.UpdateToLatestLedgerResponse;

        /**
         * Decodes an UpdateToLatestLedgerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateToLatestLedgerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.UpdateToLatestLedgerResponse;

        /**
         * Verifies an UpdateToLatestLedgerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateToLatestLedgerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateToLatestLedgerResponse
         */
        public static fromObject(object: { [k: string]: any }): types.UpdateToLatestLedgerResponse;

        /**
         * Creates a plain object from an UpdateToLatestLedgerResponse message. Also converts values to other types if specified.
         * @param message UpdateToLatestLedgerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.UpdateToLatestLedgerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateToLatestLedgerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseItem. */
    interface IResponseItem {

        /** ResponseItem getAccountStateResponse */
        getAccountStateResponse?: (types.IGetAccountStateResponse|null);

        /** ResponseItem getAccountTransactionBySequenceNumberResponse */
        getAccountTransactionBySequenceNumberResponse?: (types.IGetAccountTransactionBySequenceNumberResponse|null);

        /** ResponseItem getEventsByEventAccessPathResponse */
        getEventsByEventAccessPathResponse?: (types.IGetEventsByEventAccessPathResponse|null);

        /** ResponseItem getTransactionsResponse */
        getTransactionsResponse?: (types.IGetTransactionsResponse|null);
    }

    /** Represents a ResponseItem. */
    class ResponseItem implements IResponseItem {

        /**
         * Constructs a new ResponseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseItem);

        /** ResponseItem getAccountStateResponse. */
        public getAccountStateResponse?: (types.IGetAccountStateResponse|null);

        /** ResponseItem getAccountTransactionBySequenceNumberResponse. */
        public getAccountTransactionBySequenceNumberResponse?: (types.IGetAccountTransactionBySequenceNumberResponse|null);

        /** ResponseItem getEventsByEventAccessPathResponse. */
        public getEventsByEventAccessPathResponse?: (types.IGetEventsByEventAccessPathResponse|null);

        /** ResponseItem getTransactionsResponse. */
        public getTransactionsResponse?: (types.IGetTransactionsResponse|null);

        /** ResponseItem responseItems. */
        public responseItems?: ("getAccountStateResponse"|"getAccountTransactionBySequenceNumberResponse"|"getEventsByEventAccessPathResponse"|"getTransactionsResponse");

        /**
         * Creates a new ResponseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseItem instance
         */
        public static create(properties?: types.IResponseItem): types.ResponseItem;

        /**
         * Encodes the specified ResponseItem message. Does not implicitly {@link types.ResponseItem.verify|verify} messages.
         * @param message ResponseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseItem message, length delimited. Does not implicitly {@link types.ResponseItem.verify|verify} messages.
         * @param message ResponseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseItem;

        /**
         * Decodes a ResponseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseItem;

        /**
         * Verifies a ResponseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseItem
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseItem;

        /**
         * Creates a plain object from a ResponseItem message. Also converts values to other types if specified.
         * @param message ResponseItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountStateRequest. */
    interface IGetAccountStateRequest {

        /** GetAccountStateRequest address */
        address?: (Uint8Array|null);
    }

    /** Represents a GetAccountStateRequest. */
    class GetAccountStateRequest implements IGetAccountStateRequest {

        /**
         * Constructs a new GetAccountStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetAccountStateRequest);

        /** GetAccountStateRequest address. */
        public address: Uint8Array;

        /**
         * Creates a new GetAccountStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAccountStateRequest instance
         */
        public static create(properties?: types.IGetAccountStateRequest): types.GetAccountStateRequest;

        /**
         * Encodes the specified GetAccountStateRequest message. Does not implicitly {@link types.GetAccountStateRequest.verify|verify} messages.
         * @param message GetAccountStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetAccountStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAccountStateRequest message, length delimited. Does not implicitly {@link types.GetAccountStateRequest.verify|verify} messages.
         * @param message GetAccountStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetAccountStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAccountStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAccountStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetAccountStateRequest;

        /**
         * Decodes a GetAccountStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAccountStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetAccountStateRequest;

        /**
         * Verifies a GetAccountStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAccountStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountStateRequest
         */
        public static fromObject(object: { [k: string]: any }): types.GetAccountStateRequest;

        /**
         * Creates a plain object from a GetAccountStateRequest message. Also converts values to other types if specified.
         * @param message GetAccountStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetAccountStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountStateResponse. */
    interface IGetAccountStateResponse {

        /** GetAccountStateResponse accountStateWithProof */
        accountStateWithProof?: (types.IAccountStateWithProof|null);
    }

    /** Represents a GetAccountStateResponse. */
    class GetAccountStateResponse implements IGetAccountStateResponse {

        /**
         * Constructs a new GetAccountStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetAccountStateResponse);

        /** GetAccountStateResponse accountStateWithProof. */
        public accountStateWithProof?: (types.IAccountStateWithProof|null);

        /**
         * Creates a new GetAccountStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAccountStateResponse instance
         */
        public static create(properties?: types.IGetAccountStateResponse): types.GetAccountStateResponse;

        /**
         * Encodes the specified GetAccountStateResponse message. Does not implicitly {@link types.GetAccountStateResponse.verify|verify} messages.
         * @param message GetAccountStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetAccountStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAccountStateResponse message, length delimited. Does not implicitly {@link types.GetAccountStateResponse.verify|verify} messages.
         * @param message GetAccountStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetAccountStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAccountStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAccountStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetAccountStateResponse;

        /**
         * Decodes a GetAccountStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAccountStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetAccountStateResponse;

        /**
         * Verifies a GetAccountStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAccountStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountStateResponse
         */
        public static fromObject(object: { [k: string]: any }): types.GetAccountStateResponse;

        /**
         * Creates a plain object from a GetAccountStateResponse message. Also converts values to other types if specified.
         * @param message GetAccountStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetAccountStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountTransactionBySequenceNumberRequest. */
    interface IGetAccountTransactionBySequenceNumberRequest {

        /** GetAccountTransactionBySequenceNumberRequest account */
        account?: (Uint8Array|null);

        /** GetAccountTransactionBySequenceNumberRequest sequenceNumber */
        sequenceNumber?: (number|Long|null);

        /** GetAccountTransactionBySequenceNumberRequest fetchEvents */
        fetchEvents?: (boolean|null);
    }

    /** Represents a GetAccountTransactionBySequenceNumberRequest. */
    class GetAccountTransactionBySequenceNumberRequest implements IGetAccountTransactionBySequenceNumberRequest {

        /**
         * Constructs a new GetAccountTransactionBySequenceNumberRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetAccountTransactionBySequenceNumberRequest);

        /** GetAccountTransactionBySequenceNumberRequest account. */
        public account: Uint8Array;

        /** GetAccountTransactionBySequenceNumberRequest sequenceNumber. */
        public sequenceNumber: (number|Long);

        /** GetAccountTransactionBySequenceNumberRequest fetchEvents. */
        public fetchEvents: boolean;

        /**
         * Creates a new GetAccountTransactionBySequenceNumberRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAccountTransactionBySequenceNumberRequest instance
         */
        public static create(properties?: types.IGetAccountTransactionBySequenceNumberRequest): types.GetAccountTransactionBySequenceNumberRequest;

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberRequest message. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberRequest.verify|verify} messages.
         * @param message GetAccountTransactionBySequenceNumberRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetAccountTransactionBySequenceNumberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberRequest message, length delimited. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberRequest.verify|verify} messages.
         * @param message GetAccountTransactionBySequenceNumberRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetAccountTransactionBySequenceNumberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAccountTransactionBySequenceNumberRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAccountTransactionBySequenceNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetAccountTransactionBySequenceNumberRequest;

        /**
         * Decodes a GetAccountTransactionBySequenceNumberRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAccountTransactionBySequenceNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetAccountTransactionBySequenceNumberRequest;

        /**
         * Verifies a GetAccountTransactionBySequenceNumberRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAccountTransactionBySequenceNumberRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountTransactionBySequenceNumberRequest
         */
        public static fromObject(object: { [k: string]: any }): types.GetAccountTransactionBySequenceNumberRequest;

        /**
         * Creates a plain object from a GetAccountTransactionBySequenceNumberRequest message. Also converts values to other types if specified.
         * @param message GetAccountTransactionBySequenceNumberRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetAccountTransactionBySequenceNumberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountTransactionBySequenceNumberRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAccountTransactionBySequenceNumberResponse. */
    interface IGetAccountTransactionBySequenceNumberResponse {

        /** GetAccountTransactionBySequenceNumberResponse signedTransactionWithProof */
        signedTransactionWithProof?: (types.ISignedTransactionWithProof|null);

        /** GetAccountTransactionBySequenceNumberResponse proofOfCurrentSequenceNumber */
        proofOfCurrentSequenceNumber?: (types.IAccountStateWithProof|null);
    }

    /** Represents a GetAccountTransactionBySequenceNumberResponse. */
    class GetAccountTransactionBySequenceNumberResponse implements IGetAccountTransactionBySequenceNumberResponse {

        /**
         * Constructs a new GetAccountTransactionBySequenceNumberResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetAccountTransactionBySequenceNumberResponse);

        /** GetAccountTransactionBySequenceNumberResponse signedTransactionWithProof. */
        public signedTransactionWithProof?: (types.ISignedTransactionWithProof|null);

        /** GetAccountTransactionBySequenceNumberResponse proofOfCurrentSequenceNumber. */
        public proofOfCurrentSequenceNumber?: (types.IAccountStateWithProof|null);

        /**
         * Creates a new GetAccountTransactionBySequenceNumberResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAccountTransactionBySequenceNumberResponse instance
         */
        public static create(properties?: types.IGetAccountTransactionBySequenceNumberResponse): types.GetAccountTransactionBySequenceNumberResponse;

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberResponse message. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberResponse.verify|verify} messages.
         * @param message GetAccountTransactionBySequenceNumberResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetAccountTransactionBySequenceNumberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAccountTransactionBySequenceNumberResponse message, length delimited. Does not implicitly {@link types.GetAccountTransactionBySequenceNumberResponse.verify|verify} messages.
         * @param message GetAccountTransactionBySequenceNumberResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetAccountTransactionBySequenceNumberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAccountTransactionBySequenceNumberResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAccountTransactionBySequenceNumberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetAccountTransactionBySequenceNumberResponse;

        /**
         * Decodes a GetAccountTransactionBySequenceNumberResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAccountTransactionBySequenceNumberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetAccountTransactionBySequenceNumberResponse;

        /**
         * Verifies a GetAccountTransactionBySequenceNumberResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAccountTransactionBySequenceNumberResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAccountTransactionBySequenceNumberResponse
         */
        public static fromObject(object: { [k: string]: any }): types.GetAccountTransactionBySequenceNumberResponse;

        /**
         * Creates a plain object from a GetAccountTransactionBySequenceNumberResponse message. Also converts values to other types if specified.
         * @param message GetAccountTransactionBySequenceNumberResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetAccountTransactionBySequenceNumberResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAccountTransactionBySequenceNumberResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsByEventAccessPathRequest. */
    interface IGetEventsByEventAccessPathRequest {

        /** GetEventsByEventAccessPathRequest accessPath */
        accessPath?: (types.IAccessPath|null);

        /** GetEventsByEventAccessPathRequest startEventSeqNum */
        startEventSeqNum?: (number|Long|null);

        /** GetEventsByEventAccessPathRequest ascending */
        ascending?: (boolean|null);

        /** GetEventsByEventAccessPathRequest limit */
        limit?: (number|Long|null);
    }

    /** Represents a GetEventsByEventAccessPathRequest. */
    class GetEventsByEventAccessPathRequest implements IGetEventsByEventAccessPathRequest {

        /**
         * Constructs a new GetEventsByEventAccessPathRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetEventsByEventAccessPathRequest);

        /** GetEventsByEventAccessPathRequest accessPath. */
        public accessPath?: (types.IAccessPath|null);

        /** GetEventsByEventAccessPathRequest startEventSeqNum. */
        public startEventSeqNum: (number|Long);

        /** GetEventsByEventAccessPathRequest ascending. */
        public ascending: boolean;

        /** GetEventsByEventAccessPathRequest limit. */
        public limit: (number|Long);

        /**
         * Creates a new GetEventsByEventAccessPathRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsByEventAccessPathRequest instance
         */
        public static create(properties?: types.IGetEventsByEventAccessPathRequest): types.GetEventsByEventAccessPathRequest;

        /**
         * Encodes the specified GetEventsByEventAccessPathRequest message. Does not implicitly {@link types.GetEventsByEventAccessPathRequest.verify|verify} messages.
         * @param message GetEventsByEventAccessPathRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetEventsByEventAccessPathRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsByEventAccessPathRequest message, length delimited. Does not implicitly {@link types.GetEventsByEventAccessPathRequest.verify|verify} messages.
         * @param message GetEventsByEventAccessPathRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetEventsByEventAccessPathRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsByEventAccessPathRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsByEventAccessPathRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetEventsByEventAccessPathRequest;

        /**
         * Decodes a GetEventsByEventAccessPathRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsByEventAccessPathRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetEventsByEventAccessPathRequest;

        /**
         * Verifies a GetEventsByEventAccessPathRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsByEventAccessPathRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsByEventAccessPathRequest
         */
        public static fromObject(object: { [k: string]: any }): types.GetEventsByEventAccessPathRequest;

        /**
         * Creates a plain object from a GetEventsByEventAccessPathRequest message. Also converts values to other types if specified.
         * @param message GetEventsByEventAccessPathRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetEventsByEventAccessPathRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsByEventAccessPathRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsByEventAccessPathResponse. */
    interface IGetEventsByEventAccessPathResponse {

        /** GetEventsByEventAccessPathResponse eventsWithProof */
        eventsWithProof?: (types.IEventWithProof[]|null);

        /** GetEventsByEventAccessPathResponse proofOfLatestEvent */
        proofOfLatestEvent?: (types.IAccountStateWithProof|null);
    }

    /** Represents a GetEventsByEventAccessPathResponse. */
    class GetEventsByEventAccessPathResponse implements IGetEventsByEventAccessPathResponse {

        /**
         * Constructs a new GetEventsByEventAccessPathResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetEventsByEventAccessPathResponse);

        /** GetEventsByEventAccessPathResponse eventsWithProof. */
        public eventsWithProof: types.IEventWithProof[];

        /** GetEventsByEventAccessPathResponse proofOfLatestEvent. */
        public proofOfLatestEvent?: (types.IAccountStateWithProof|null);

        /**
         * Creates a new GetEventsByEventAccessPathResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsByEventAccessPathResponse instance
         */
        public static create(properties?: types.IGetEventsByEventAccessPathResponse): types.GetEventsByEventAccessPathResponse;

        /**
         * Encodes the specified GetEventsByEventAccessPathResponse message. Does not implicitly {@link types.GetEventsByEventAccessPathResponse.verify|verify} messages.
         * @param message GetEventsByEventAccessPathResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetEventsByEventAccessPathResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsByEventAccessPathResponse message, length delimited. Does not implicitly {@link types.GetEventsByEventAccessPathResponse.verify|verify} messages.
         * @param message GetEventsByEventAccessPathResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetEventsByEventAccessPathResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsByEventAccessPathResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsByEventAccessPathResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetEventsByEventAccessPathResponse;

        /**
         * Decodes a GetEventsByEventAccessPathResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsByEventAccessPathResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetEventsByEventAccessPathResponse;

        /**
         * Verifies a GetEventsByEventAccessPathResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsByEventAccessPathResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsByEventAccessPathResponse
         */
        public static fromObject(object: { [k: string]: any }): types.GetEventsByEventAccessPathResponse;

        /**
         * Creates a plain object from a GetEventsByEventAccessPathResponse message. Also converts values to other types if specified.
         * @param message GetEventsByEventAccessPathResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetEventsByEventAccessPathResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsByEventAccessPathResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTransactionsRequest. */
    interface IGetTransactionsRequest {

        /** GetTransactionsRequest startVersion */
        startVersion?: (number|Long|null);

        /** GetTransactionsRequest limit */
        limit?: (number|Long|null);

        /** GetTransactionsRequest fetchEvents */
        fetchEvents?: (boolean|null);
    }

    /** Represents a GetTransactionsRequest. */
    class GetTransactionsRequest implements IGetTransactionsRequest {

        /**
         * Constructs a new GetTransactionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetTransactionsRequest);

        /** GetTransactionsRequest startVersion. */
        public startVersion: (number|Long);

        /** GetTransactionsRequest limit. */
        public limit: (number|Long);

        /** GetTransactionsRequest fetchEvents. */
        public fetchEvents: boolean;

        /**
         * Creates a new GetTransactionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTransactionsRequest instance
         */
        public static create(properties?: types.IGetTransactionsRequest): types.GetTransactionsRequest;

        /**
         * Encodes the specified GetTransactionsRequest message. Does not implicitly {@link types.GetTransactionsRequest.verify|verify} messages.
         * @param message GetTransactionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetTransactionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTransactionsRequest message, length delimited. Does not implicitly {@link types.GetTransactionsRequest.verify|verify} messages.
         * @param message GetTransactionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetTransactionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTransactionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTransactionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetTransactionsRequest;

        /**
         * Decodes a GetTransactionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTransactionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetTransactionsRequest;

        /**
         * Verifies a GetTransactionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTransactionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTransactionsRequest
         */
        public static fromObject(object: { [k: string]: any }): types.GetTransactionsRequest;

        /**
         * Creates a plain object from a GetTransactionsRequest message. Also converts values to other types if specified.
         * @param message GetTransactionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetTransactionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTransactionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTransactionsResponse. */
    interface IGetTransactionsResponse {

        /** GetTransactionsResponse txnListWithProof */
        txnListWithProof?: (types.ITransactionListWithProof|null);
    }

    /** Represents a GetTransactionsResponse. */
    class GetTransactionsResponse implements IGetTransactionsResponse {

        /**
         * Constructs a new GetTransactionsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGetTransactionsResponse);

        /** GetTransactionsResponse txnListWithProof. */
        public txnListWithProof?: (types.ITransactionListWithProof|null);

        /**
         * Creates a new GetTransactionsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTransactionsResponse instance
         */
        public static create(properties?: types.IGetTransactionsResponse): types.GetTransactionsResponse;

        /**
         * Encodes the specified GetTransactionsResponse message. Does not implicitly {@link types.GetTransactionsResponse.verify|verify} messages.
         * @param message GetTransactionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGetTransactionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTransactionsResponse message, length delimited. Does not implicitly {@link types.GetTransactionsResponse.verify|verify} messages.
         * @param message GetTransactionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGetTransactionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTransactionsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTransactionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GetTransactionsResponse;

        /**
         * Decodes a GetTransactionsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTransactionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GetTransactionsResponse;

        /**
         * Verifies a GetTransactionsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTransactionsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTransactionsResponse
         */
        public static fromObject(object: { [k: string]: any }): types.GetTransactionsResponse;

        /**
         * Creates a plain object from a GetTransactionsResponse message. Also converts values to other types if specified.
         * @param message GetTransactionsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GetTransactionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTransactionsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccessPath. */
    interface IAccessPath {

        /** AccessPath address */
        address?: (Uint8Array|null);

        /** AccessPath path */
        path?: (Uint8Array|null);
    }

    /** Represents an AccessPath. */
    class AccessPath implements IAccessPath {

        /**
         * Constructs a new AccessPath.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccessPath);

        /** AccessPath address. */
        public address: Uint8Array;

        /** AccessPath path. */
        public path: Uint8Array;

        /**
         * Creates a new AccessPath instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccessPath instance
         */
        public static create(properties?: types.IAccessPath): types.AccessPath;

        /**
         * Encodes the specified AccessPath message. Does not implicitly {@link types.AccessPath.verify|verify} messages.
         * @param message AccessPath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccessPath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccessPath message, length delimited. Does not implicitly {@link types.AccessPath.verify|verify} messages.
         * @param message AccessPath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccessPath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccessPath message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AccessPath;

        /**
         * Decodes an AccessPath message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AccessPath;

        /**
         * Verifies an AccessPath message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccessPath message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccessPath
         */
        public static fromObject(object: { [k: string]: any }): types.AccessPath;

        /**
         * Creates a plain object from an AccessPath message. Also converts values to other types if specified.
         * @param message AccessPath
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AccessPath, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccessPath to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountStateBlob. */
    interface IAccountStateBlob {

        /** AccountStateBlob blob */
        blob?: (Uint8Array|null);
    }

    /** Represents an AccountStateBlob. */
    class AccountStateBlob implements IAccountStateBlob {

        /**
         * Constructs a new AccountStateBlob.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccountStateBlob);

        /** AccountStateBlob blob. */
        public blob: Uint8Array;

        /**
         * Creates a new AccountStateBlob instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountStateBlob instance
         */
        public static create(properties?: types.IAccountStateBlob): types.AccountStateBlob;

        /**
         * Encodes the specified AccountStateBlob message. Does not implicitly {@link types.AccountStateBlob.verify|verify} messages.
         * @param message AccountStateBlob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccountStateBlob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountStateBlob message, length delimited. Does not implicitly {@link types.AccountStateBlob.verify|verify} messages.
         * @param message AccountStateBlob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccountStateBlob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountStateBlob message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountStateBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AccountStateBlob;

        /**
         * Decodes an AccountStateBlob message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountStateBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AccountStateBlob;

        /**
         * Verifies an AccountStateBlob message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountStateBlob message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountStateBlob
         */
        public static fromObject(object: { [k: string]: any }): types.AccountStateBlob;

        /**
         * Creates a plain object from an AccountStateBlob message. Also converts values to other types if specified.
         * @param message AccountStateBlob
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AccountStateBlob, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountStateBlob to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountStateWithProof. */
    interface IAccountStateWithProof {

        /** AccountStateWithProof version */
        version?: (number|Long|null);

        /** AccountStateWithProof blob */
        blob?: (types.IAccountStateBlob|null);

        /** AccountStateWithProof proof */
        proof?: (types.IAccountStateProof|null);
    }

    /** Represents an AccountStateWithProof. */
    class AccountStateWithProof implements IAccountStateWithProof {

        /**
         * Constructs a new AccountStateWithProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccountStateWithProof);

        /** AccountStateWithProof version. */
        public version: (number|Long);

        /** AccountStateWithProof blob. */
        public blob?: (types.IAccountStateBlob|null);

        /** AccountStateWithProof proof. */
        public proof?: (types.IAccountStateProof|null);

        /**
         * Creates a new AccountStateWithProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountStateWithProof instance
         */
        public static create(properties?: types.IAccountStateWithProof): types.AccountStateWithProof;

        /**
         * Encodes the specified AccountStateWithProof message. Does not implicitly {@link types.AccountStateWithProof.verify|verify} messages.
         * @param message AccountStateWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccountStateWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountStateWithProof message, length delimited. Does not implicitly {@link types.AccountStateWithProof.verify|verify} messages.
         * @param message AccountStateWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccountStateWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountStateWithProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountStateWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AccountStateWithProof;

        /**
         * Decodes an AccountStateWithProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountStateWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AccountStateWithProof;

        /**
         * Verifies an AccountStateWithProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountStateWithProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountStateWithProof
         */
        public static fromObject(object: { [k: string]: any }): types.AccountStateWithProof;

        /**
         * Creates a plain object from an AccountStateWithProof message. Also converts values to other types if specified.
         * @param message AccountStateWithProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AccountStateWithProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountStateWithProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccumulatorProof. */
    interface IAccumulatorProof {

        /** AccumulatorProof bitmap */
        bitmap?: (number|Long|null);

        /** AccumulatorProof nonDefaultSiblings */
        nonDefaultSiblings?: (Uint8Array[]|null);
    }

    /** Represents an AccumulatorProof. */
    class AccumulatorProof implements IAccumulatorProof {

        /**
         * Constructs a new AccumulatorProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccumulatorProof);

        /** AccumulatorProof bitmap. */
        public bitmap: (number|Long);

        /** AccumulatorProof nonDefaultSiblings. */
        public nonDefaultSiblings: Uint8Array[];

        /**
         * Creates a new AccumulatorProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccumulatorProof instance
         */
        public static create(properties?: types.IAccumulatorProof): types.AccumulatorProof;

        /**
         * Encodes the specified AccumulatorProof message. Does not implicitly {@link types.AccumulatorProof.verify|verify} messages.
         * @param message AccumulatorProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccumulatorProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccumulatorProof message, length delimited. Does not implicitly {@link types.AccumulatorProof.verify|verify} messages.
         * @param message AccumulatorProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccumulatorProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccumulatorProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccumulatorProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AccumulatorProof;

        /**
         * Decodes an AccumulatorProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccumulatorProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AccumulatorProof;

        /**
         * Verifies an AccumulatorProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccumulatorProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccumulatorProof
         */
        public static fromObject(object: { [k: string]: any }): types.AccumulatorProof;

        /**
         * Creates a plain object from an AccumulatorProof message. Also converts values to other types if specified.
         * @param message AccumulatorProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AccumulatorProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccumulatorProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SparseMerkleProof. */
    interface ISparseMerkleProof {

        /** SparseMerkleProof leaf */
        leaf?: (Uint8Array|null);

        /** SparseMerkleProof bitmap */
        bitmap?: (Uint8Array|null);

        /** SparseMerkleProof nonDefaultSiblings */
        nonDefaultSiblings?: (Uint8Array[]|null);
    }

    /** Represents a SparseMerkleProof. */
    class SparseMerkleProof implements ISparseMerkleProof {

        /**
         * Constructs a new SparseMerkleProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ISparseMerkleProof);

        /** SparseMerkleProof leaf. */
        public leaf: Uint8Array;

        /** SparseMerkleProof bitmap. */
        public bitmap: Uint8Array;

        /** SparseMerkleProof nonDefaultSiblings. */
        public nonDefaultSiblings: Uint8Array[];

        /**
         * Creates a new SparseMerkleProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SparseMerkleProof instance
         */
        public static create(properties?: types.ISparseMerkleProof): types.SparseMerkleProof;

        /**
         * Encodes the specified SparseMerkleProof message. Does not implicitly {@link types.SparseMerkleProof.verify|verify} messages.
         * @param message SparseMerkleProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ISparseMerkleProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SparseMerkleProof message, length delimited. Does not implicitly {@link types.SparseMerkleProof.verify|verify} messages.
         * @param message SparseMerkleProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ISparseMerkleProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SparseMerkleProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SparseMerkleProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.SparseMerkleProof;

        /**
         * Decodes a SparseMerkleProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SparseMerkleProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.SparseMerkleProof;

        /**
         * Verifies a SparseMerkleProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SparseMerkleProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SparseMerkleProof
         */
        public static fromObject(object: { [k: string]: any }): types.SparseMerkleProof;

        /**
         * Creates a plain object from a SparseMerkleProof message. Also converts values to other types if specified.
         * @param message SparseMerkleProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.SparseMerkleProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SparseMerkleProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignedTransactionProof. */
    interface ISignedTransactionProof {

        /** SignedTransactionProof ledgerInfoToTransactionInfoProof */
        ledgerInfoToTransactionInfoProof?: (types.IAccumulatorProof|null);

        /** SignedTransactionProof transactionInfo */
        transactionInfo?: (types.ITransactionInfo|null);
    }

    /** Represents a SignedTransactionProof. */
    class SignedTransactionProof implements ISignedTransactionProof {

        /**
         * Constructs a new SignedTransactionProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ISignedTransactionProof);

        /** SignedTransactionProof ledgerInfoToTransactionInfoProof. */
        public ledgerInfoToTransactionInfoProof?: (types.IAccumulatorProof|null);

        /** SignedTransactionProof transactionInfo. */
        public transactionInfo?: (types.ITransactionInfo|null);

        /**
         * Creates a new SignedTransactionProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedTransactionProof instance
         */
        public static create(properties?: types.ISignedTransactionProof): types.SignedTransactionProof;

        /**
         * Encodes the specified SignedTransactionProof message. Does not implicitly {@link types.SignedTransactionProof.verify|verify} messages.
         * @param message SignedTransactionProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ISignedTransactionProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedTransactionProof message, length delimited. Does not implicitly {@link types.SignedTransactionProof.verify|verify} messages.
         * @param message SignedTransactionProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ISignedTransactionProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedTransactionProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedTransactionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.SignedTransactionProof;

        /**
         * Decodes a SignedTransactionProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedTransactionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.SignedTransactionProof;

        /**
         * Verifies a SignedTransactionProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedTransactionProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedTransactionProof
         */
        public static fromObject(object: { [k: string]: any }): types.SignedTransactionProof;

        /**
         * Creates a plain object from a SignedTransactionProof message. Also converts values to other types if specified.
         * @param message SignedTransactionProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.SignedTransactionProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedTransactionProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountStateProof. */
    interface IAccountStateProof {

        /** AccountStateProof ledgerInfoToTransactionInfoProof */
        ledgerInfoToTransactionInfoProof?: (types.IAccumulatorProof|null);

        /** AccountStateProof transactionInfo */
        transactionInfo?: (types.ITransactionInfo|null);

        /** AccountStateProof transactionInfoToAccountProof */
        transactionInfoToAccountProof?: (types.ISparseMerkleProof|null);
    }

    /** Represents an AccountStateProof. */
    class AccountStateProof implements IAccountStateProof {

        /**
         * Constructs a new AccountStateProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccountStateProof);

        /** AccountStateProof ledgerInfoToTransactionInfoProof. */
        public ledgerInfoToTransactionInfoProof?: (types.IAccumulatorProof|null);

        /** AccountStateProof transactionInfo. */
        public transactionInfo?: (types.ITransactionInfo|null);

        /** AccountStateProof transactionInfoToAccountProof. */
        public transactionInfoToAccountProof?: (types.ISparseMerkleProof|null);

        /**
         * Creates a new AccountStateProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountStateProof instance
         */
        public static create(properties?: types.IAccountStateProof): types.AccountStateProof;

        /**
         * Encodes the specified AccountStateProof message. Does not implicitly {@link types.AccountStateProof.verify|verify} messages.
         * @param message AccountStateProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccountStateProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountStateProof message, length delimited. Does not implicitly {@link types.AccountStateProof.verify|verify} messages.
         * @param message AccountStateProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccountStateProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountStateProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountStateProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AccountStateProof;

        /**
         * Decodes an AccountStateProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountStateProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AccountStateProof;

        /**
         * Verifies an AccountStateProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountStateProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountStateProof
         */
        public static fromObject(object: { [k: string]: any }): types.AccountStateProof;

        /**
         * Creates a plain object from an AccountStateProof message. Also converts values to other types if specified.
         * @param message AccountStateProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AccountStateProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountStateProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventProof. */
    interface IEventProof {

        /** EventProof ledgerInfoToTransactionInfoProof */
        ledgerInfoToTransactionInfoProof?: (types.IAccumulatorProof|null);

        /** EventProof transactionInfo */
        transactionInfo?: (types.ITransactionInfo|null);

        /** EventProof transactionInfoToEventProof */
        transactionInfoToEventProof?: (types.IAccumulatorProof|null);
    }

    /** Represents an EventProof. */
    class EventProof implements IEventProof {

        /**
         * Constructs a new EventProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEventProof);

        /** EventProof ledgerInfoToTransactionInfoProof. */
        public ledgerInfoToTransactionInfoProof?: (types.IAccumulatorProof|null);

        /** EventProof transactionInfo. */
        public transactionInfo?: (types.ITransactionInfo|null);

        /** EventProof transactionInfoToEventProof. */
        public transactionInfoToEventProof?: (types.IAccumulatorProof|null);

        /**
         * Creates a new EventProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventProof instance
         */
        public static create(properties?: types.IEventProof): types.EventProof;

        /**
         * Encodes the specified EventProof message. Does not implicitly {@link types.EventProof.verify|verify} messages.
         * @param message EventProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEventProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventProof message, length delimited. Does not implicitly {@link types.EventProof.verify|verify} messages.
         * @param message EventProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEventProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.EventProof;

        /**
         * Decodes an EventProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.EventProof;

        /**
         * Verifies an EventProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventProof
         */
        public static fromObject(object: { [k: string]: any }): types.EventProof;

        /**
         * Creates a plain object from an EventProof message. Also converts values to other types if specified.
         * @param message EventProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.EventProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransactionInfo. */
    interface ITransactionInfo {

        /** TransactionInfo signedTransactionHash */
        signedTransactionHash?: (Uint8Array|null);

        /** TransactionInfo stateRootHash */
        stateRootHash?: (Uint8Array|null);

        /** TransactionInfo eventRootHash */
        eventRootHash?: (Uint8Array|null);

        /** TransactionInfo gasUsed */
        gasUsed?: (number|Long|null);
    }

    /** Represents a TransactionInfo. */
    class TransactionInfo implements ITransactionInfo {

        /**
         * Constructs a new TransactionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ITransactionInfo);

        /** TransactionInfo signedTransactionHash. */
        public signedTransactionHash: Uint8Array;

        /** TransactionInfo stateRootHash. */
        public stateRootHash: Uint8Array;

        /** TransactionInfo eventRootHash. */
        public eventRootHash: Uint8Array;

        /** TransactionInfo gasUsed. */
        public gasUsed: (number|Long);

        /**
         * Creates a new TransactionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionInfo instance
         */
        public static create(properties?: types.ITransactionInfo): types.TransactionInfo;

        /**
         * Encodes the specified TransactionInfo message. Does not implicitly {@link types.TransactionInfo.verify|verify} messages.
         * @param message TransactionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ITransactionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionInfo message, length delimited. Does not implicitly {@link types.TransactionInfo.verify|verify} messages.
         * @param message TransactionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ITransactionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.TransactionInfo;

        /**
         * Decodes a TransactionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.TransactionInfo;

        /**
         * Verifies a TransactionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionInfo
         */
        public static fromObject(object: { [k: string]: any }): types.TransactionInfo;

        /**
         * Creates a plain object from a TransactionInfo message. Also converts values to other types if specified.
         * @param message TransactionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.TransactionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event accessPath */
        accessPath?: (types.IAccessPath|null);

        /** Event sequenceNumber */
        sequenceNumber?: (number|Long|null);

        /** Event eventData */
        eventData?: (Uint8Array|null);
    }

    /** Represents an Event. */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEvent);

        /** Event accessPath. */
        public accessPath?: (types.IAccessPath|null);

        /** Event sequenceNumber. */
        public sequenceNumber: (number|Long);

        /** Event eventData. */
        public eventData: Uint8Array;

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: types.IEvent): types.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link types.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link types.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): types.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventWithProof. */
    interface IEventWithProof {

        /** EventWithProof transactionVersion */
        transactionVersion?: (number|Long|null);

        /** EventWithProof eventIndex */
        eventIndex?: (number|Long|null);

        /** EventWithProof event */
        event?: (types.IEvent|null);

        /** EventWithProof proof */
        proof?: (types.IEventProof|null);
    }

    /** Represents an EventWithProof. */
    class EventWithProof implements IEventWithProof {

        /**
         * Constructs a new EventWithProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEventWithProof);

        /** EventWithProof transactionVersion. */
        public transactionVersion: (number|Long);

        /** EventWithProof eventIndex. */
        public eventIndex: (number|Long);

        /** EventWithProof event. */
        public event?: (types.IEvent|null);

        /** EventWithProof proof. */
        public proof?: (types.IEventProof|null);

        /**
         * Creates a new EventWithProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventWithProof instance
         */
        public static create(properties?: types.IEventWithProof): types.EventWithProof;

        /**
         * Encodes the specified EventWithProof message. Does not implicitly {@link types.EventWithProof.verify|verify} messages.
         * @param message EventWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEventWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventWithProof message, length delimited. Does not implicitly {@link types.EventWithProof.verify|verify} messages.
         * @param message EventWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEventWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventWithProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.EventWithProof;

        /**
         * Decodes an EventWithProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.EventWithProof;

        /**
         * Verifies an EventWithProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventWithProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventWithProof
         */
        public static fromObject(object: { [k: string]: any }): types.EventWithProof;

        /**
         * Creates a plain object from an EventWithProof message. Also converts values to other types if specified.
         * @param message EventWithProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.EventWithProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventWithProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventsList. */
    interface IEventsList {

        /** EventsList events */
        events?: (types.IEvent[]|null);
    }

    /** Represents an EventsList. */
    class EventsList implements IEventsList {

        /**
         * Constructs a new EventsList.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEventsList);

        /** EventsList events. */
        public events: types.IEvent[];

        /**
         * Creates a new EventsList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventsList instance
         */
        public static create(properties?: types.IEventsList): types.EventsList;

        /**
         * Encodes the specified EventsList message. Does not implicitly {@link types.EventsList.verify|verify} messages.
         * @param message EventsList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEventsList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventsList message, length delimited. Does not implicitly {@link types.EventsList.verify|verify} messages.
         * @param message EventsList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEventsList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventsList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.EventsList;

        /**
         * Decodes an EventsList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.EventsList;

        /**
         * Verifies an EventsList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventsList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventsList
         */
        public static fromObject(object: { [k: string]: any }): types.EventsList;

        /**
         * Creates a plain object from an EventsList message. Also converts values to other types if specified.
         * @param message EventsList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.EventsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventsList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventsForVersions. */
    interface IEventsForVersions {

        /** EventsForVersions eventsForVersion */
        eventsForVersion?: (types.IEventsList[]|null);
    }

    /** Represents an EventsForVersions. */
    class EventsForVersions implements IEventsForVersions {

        /**
         * Constructs a new EventsForVersions.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEventsForVersions);

        /** EventsForVersions eventsForVersion. */
        public eventsForVersion: types.IEventsList[];

        /**
         * Creates a new EventsForVersions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventsForVersions instance
         */
        public static create(properties?: types.IEventsForVersions): types.EventsForVersions;

        /**
         * Encodes the specified EventsForVersions message. Does not implicitly {@link types.EventsForVersions.verify|verify} messages.
         * @param message EventsForVersions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEventsForVersions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventsForVersions message, length delimited. Does not implicitly {@link types.EventsForVersions.verify|verify} messages.
         * @param message EventsForVersions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEventsForVersions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventsForVersions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventsForVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.EventsForVersions;

        /**
         * Decodes an EventsForVersions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventsForVersions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.EventsForVersions;

        /**
         * Verifies an EventsForVersions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventsForVersions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventsForVersions
         */
        public static fromObject(object: { [k: string]: any }): types.EventsForVersions;

        /**
         * Creates a plain object from an EventsForVersions message. Also converts values to other types if specified.
         * @param message EventsForVersions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.EventsForVersions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventsForVersions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LedgerInfo. */
    interface ILedgerInfo {

        /** LedgerInfo version */
        version?: (number|Long|null);

        /** LedgerInfo transactionAccumulatorHash */
        transactionAccumulatorHash?: (Uint8Array|null);

        /** LedgerInfo consensusDataHash */
        consensusDataHash?: (Uint8Array|null);

        /** LedgerInfo consensusBlockId */
        consensusBlockId?: (Uint8Array|null);

        /** LedgerInfo epochNum */
        epochNum?: (number|Long|null);

        /** LedgerInfo timestampUsecs */
        timestampUsecs?: (number|Long|null);
    }

    /** commit */
    class LedgerInfo implements ILedgerInfo {

        /**
         * Constructs a new LedgerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ILedgerInfo);

        /** LedgerInfo version. */
        public version: (number|Long);

        /** LedgerInfo transactionAccumulatorHash. */
        public transactionAccumulatorHash: Uint8Array;

        /** LedgerInfo consensusDataHash. */
        public consensusDataHash: Uint8Array;

        /** LedgerInfo consensusBlockId. */
        public consensusBlockId: Uint8Array;

        /** LedgerInfo epochNum. */
        public epochNum: (number|Long);

        /** LedgerInfo timestampUsecs. */
        public timestampUsecs: (number|Long);

        /**
         * Creates a new LedgerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LedgerInfo instance
         */
        public static create(properties?: types.ILedgerInfo): types.LedgerInfo;

        /**
         * Encodes the specified LedgerInfo message. Does not implicitly {@link types.LedgerInfo.verify|verify} messages.
         * @param message LedgerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ILedgerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LedgerInfo message, length delimited. Does not implicitly {@link types.LedgerInfo.verify|verify} messages.
         * @param message LedgerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ILedgerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LedgerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LedgerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.LedgerInfo;

        /**
         * Decodes a LedgerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LedgerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.LedgerInfo;

        /**
         * Verifies a LedgerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LedgerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LedgerInfo
         */
        public static fromObject(object: { [k: string]: any }): types.LedgerInfo;

        /**
         * Creates a plain object from a LedgerInfo message. Also converts values to other types if specified.
         * @param message LedgerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.LedgerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LedgerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LedgerInfoWithSignatures. */
    interface ILedgerInfoWithSignatures {

        /** LedgerInfoWithSignatures signatures */
        signatures?: (types.IValidatorSignature[]|null);

        /** LedgerInfoWithSignatures ledgerInfo */
        ledgerInfo?: (types.ILedgerInfo|null);
    }

    /** for the client to be able to verify the state */
    class LedgerInfoWithSignatures implements ILedgerInfoWithSignatures {

        /**
         * Constructs a new LedgerInfoWithSignatures.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ILedgerInfoWithSignatures);

        /** LedgerInfoWithSignatures signatures. */
        public signatures: types.IValidatorSignature[];

        /** LedgerInfoWithSignatures ledgerInfo. */
        public ledgerInfo?: (types.ILedgerInfo|null);

        /**
         * Creates a new LedgerInfoWithSignatures instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LedgerInfoWithSignatures instance
         */
        public static create(properties?: types.ILedgerInfoWithSignatures): types.LedgerInfoWithSignatures;

        /**
         * Encodes the specified LedgerInfoWithSignatures message. Does not implicitly {@link types.LedgerInfoWithSignatures.verify|verify} messages.
         * @param message LedgerInfoWithSignatures message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ILedgerInfoWithSignatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LedgerInfoWithSignatures message, length delimited. Does not implicitly {@link types.LedgerInfoWithSignatures.verify|verify} messages.
         * @param message LedgerInfoWithSignatures message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ILedgerInfoWithSignatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LedgerInfoWithSignatures message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LedgerInfoWithSignatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.LedgerInfoWithSignatures;

        /**
         * Decodes a LedgerInfoWithSignatures message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LedgerInfoWithSignatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.LedgerInfoWithSignatures;

        /**
         * Verifies a LedgerInfoWithSignatures message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LedgerInfoWithSignatures message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LedgerInfoWithSignatures
         */
        public static fromObject(object: { [k: string]: any }): types.LedgerInfoWithSignatures;

        /**
         * Creates a plain object from a LedgerInfoWithSignatures message. Also converts values to other types if specified.
         * @param message LedgerInfoWithSignatures
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.LedgerInfoWithSignatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LedgerInfoWithSignatures to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ValidatorSignature. */
    interface IValidatorSignature {

        /** ValidatorSignature validatorId */
        validatorId?: (Uint8Array|null);

        /** ValidatorSignature signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a ValidatorSignature. */
    class ValidatorSignature implements IValidatorSignature {

        /**
         * Constructs a new ValidatorSignature.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IValidatorSignature);

        /** ValidatorSignature validatorId. */
        public validatorId: Uint8Array;

        /** ValidatorSignature signature. */
        public signature: Uint8Array;

        /**
         * Creates a new ValidatorSignature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValidatorSignature instance
         */
        public static create(properties?: types.IValidatorSignature): types.ValidatorSignature;

        /**
         * Encodes the specified ValidatorSignature message. Does not implicitly {@link types.ValidatorSignature.verify|verify} messages.
         * @param message ValidatorSignature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IValidatorSignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValidatorSignature message, length delimited. Does not implicitly {@link types.ValidatorSignature.verify|verify} messages.
         * @param message ValidatorSignature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IValidatorSignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValidatorSignature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValidatorSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ValidatorSignature;

        /**
         * Decodes a ValidatorSignature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValidatorSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ValidatorSignature;

        /**
         * Verifies a ValidatorSignature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValidatorSignature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidatorSignature
         */
        public static fromObject(object: { [k: string]: any }): types.ValidatorSignature;

        /**
         * Creates a plain object from a ValidatorSignature message. Also converts values to other types if specified.
         * @param message ValidatorSignature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ValidatorSignature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidatorSignature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RawTransaction. */
    interface IRawTransaction {

        /** RawTransaction senderAccount */
        senderAccount?: (Uint8Array|null);

        /** RawTransaction sequenceNumber */
        sequenceNumber?: (number|Long|null);

        /** RawTransaction program */
        program?: (types.IProgram|null);

        /** RawTransaction writeSet */
        writeSet?: (types.IWriteSet|null);

        /** RawTransaction maxGasAmount */
        maxGasAmount?: (number|Long|null);

        /** RawTransaction gasUnitPrice */
        gasUnitPrice?: (number|Long|null);

        /** RawTransaction expirationTime */
        expirationTime?: (number|Long|null);
    }

    /** Represents a RawTransaction. */
    class RawTransaction implements IRawTransaction {

        /**
         * Constructs a new RawTransaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRawTransaction);

        /** RawTransaction senderAccount. */
        public senderAccount: Uint8Array;

        /** RawTransaction sequenceNumber. */
        public sequenceNumber: (number|Long);

        /** RawTransaction program. */
        public program?: (types.IProgram|null);

        /** RawTransaction writeSet. */
        public writeSet?: (types.IWriteSet|null);

        /** RawTransaction maxGasAmount. */
        public maxGasAmount: (number|Long);

        /** RawTransaction gasUnitPrice. */
        public gasUnitPrice: (number|Long);

        /** RawTransaction expirationTime. */
        public expirationTime: (number|Long);

        /** RawTransaction payload. */
        public payload?: ("program"|"writeSet");

        /**
         * Creates a new RawTransaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RawTransaction instance
         */
        public static create(properties?: types.IRawTransaction): types.RawTransaction;

        /**
         * Encodes the specified RawTransaction message. Does not implicitly {@link types.RawTransaction.verify|verify} messages.
         * @param message RawTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRawTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RawTransaction message, length delimited. Does not implicitly {@link types.RawTransaction.verify|verify} messages.
         * @param message RawTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRawTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RawTransaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RawTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RawTransaction;

        /**
         * Decodes a RawTransaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RawTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RawTransaction;

        /**
         * Verifies a RawTransaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RawTransaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RawTransaction
         */
        public static fromObject(object: { [k: string]: any }): types.RawTransaction;

        /**
         * Creates a plain object from a RawTransaction message. Also converts values to other types if specified.
         * @param message RawTransaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RawTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RawTransaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Program. */
    interface IProgram {

        /** Program code */
        code?: (Uint8Array|null);

        /** Program arguments */
        "arguments"?: (types.ITransactionArgument[]|null);

        /** Program modules */
        modules?: (Uint8Array[]|null);
    }

    /** Represents a Program. */
    class Program implements IProgram {

        /**
         * Constructs a new Program.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IProgram);

        /** Program code. */
        public code: Uint8Array;

        /** Program arguments. */
        public arguments: types.ITransactionArgument[];

        /** Program modules. */
        public modules: Uint8Array[];

        /**
         * Creates a new Program instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Program instance
         */
        public static create(properties?: types.IProgram): types.Program;

        /**
         * Encodes the specified Program message. Does not implicitly {@link types.Program.verify|verify} messages.
         * @param message Program message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IProgram, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Program message, length delimited. Does not implicitly {@link types.Program.verify|verify} messages.
         * @param message Program message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IProgram, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Program message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Program
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Program;

        /**
         * Decodes a Program message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Program
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Program;

        /**
         * Verifies a Program message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Program message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Program
         */
        public static fromObject(object: { [k: string]: any }): types.Program;

        /**
         * Creates a plain object from a Program message. Also converts values to other types if specified.
         * @param message Program
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Program, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Program to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransactionArgument. */
    interface ITransactionArgument {

        /** TransactionArgument type */
        type?: (types.TransactionArgument.ArgType|null);

        /** TransactionArgument data */
        data?: (Uint8Array|null);
    }

    /** Represents a TransactionArgument. */
    class TransactionArgument implements ITransactionArgument {

        /**
         * Constructs a new TransactionArgument.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ITransactionArgument);

        /** TransactionArgument type. */
        public type: types.TransactionArgument.ArgType;

        /** TransactionArgument data. */
        public data: Uint8Array;

        /**
         * Creates a new TransactionArgument instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionArgument instance
         */
        public static create(properties?: types.ITransactionArgument): types.TransactionArgument;

        /**
         * Encodes the specified TransactionArgument message. Does not implicitly {@link types.TransactionArgument.verify|verify} messages.
         * @param message TransactionArgument message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ITransactionArgument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionArgument message, length delimited. Does not implicitly {@link types.TransactionArgument.verify|verify} messages.
         * @param message TransactionArgument message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ITransactionArgument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionArgument message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionArgument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.TransactionArgument;

        /**
         * Decodes a TransactionArgument message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionArgument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.TransactionArgument;

        /**
         * Verifies a TransactionArgument message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionArgument message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionArgument
         */
        public static fromObject(object: { [k: string]: any }): types.TransactionArgument;

        /**
         * Creates a plain object from a TransactionArgument message. Also converts values to other types if specified.
         * @param message TransactionArgument
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.TransactionArgument, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionArgument to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace TransactionArgument {

        /** ArgType enum. */
        enum ArgType {
            U64 = 0,
            ADDRESS = 1,
            STRING = 2,
            BYTEARRAY = 3
        }
    }

    /** Properties of a SignedTransaction. */
    interface ISignedTransaction {

        /** SignedTransaction rawTxnBytes */
        rawTxnBytes?: (Uint8Array|null);

        /** SignedTransaction senderPublicKey */
        senderPublicKey?: (Uint8Array|null);

        /** SignedTransaction senderSignature */
        senderSignature?: (Uint8Array|null);
    }

    /** Represents a SignedTransaction. */
    class SignedTransaction implements ISignedTransaction {

        /**
         * Constructs a new SignedTransaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ISignedTransaction);

        /** SignedTransaction rawTxnBytes. */
        public rawTxnBytes: Uint8Array;

        /** SignedTransaction senderPublicKey. */
        public senderPublicKey: Uint8Array;

        /** SignedTransaction senderSignature. */
        public senderSignature: Uint8Array;

        /**
         * Creates a new SignedTransaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedTransaction instance
         */
        public static create(properties?: types.ISignedTransaction): types.SignedTransaction;

        /**
         * Encodes the specified SignedTransaction message. Does not implicitly {@link types.SignedTransaction.verify|verify} messages.
         * @param message SignedTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ISignedTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedTransaction message, length delimited. Does not implicitly {@link types.SignedTransaction.verify|verify} messages.
         * @param message SignedTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ISignedTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedTransaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.SignedTransaction;

        /**
         * Decodes a SignedTransaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.SignedTransaction;

        /**
         * Verifies a SignedTransaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedTransaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedTransaction
         */
        public static fromObject(object: { [k: string]: any }): types.SignedTransaction;

        /**
         * Creates a plain object from a SignedTransaction message. Also converts values to other types if specified.
         * @param message SignedTransaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.SignedTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedTransaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignedTransactionWithProof. */
    interface ISignedTransactionWithProof {

        /** SignedTransactionWithProof version */
        version?: (number|Long|null);

        /** SignedTransactionWithProof signedTransaction */
        signedTransaction?: (types.ISignedTransaction|null);

        /** SignedTransactionWithProof proof */
        proof?: (types.ISignedTransactionProof|null);

        /** SignedTransactionWithProof events */
        events?: (types.IEventsList|null);
    }

    /** Represents a SignedTransactionWithProof. */
    class SignedTransactionWithProof implements ISignedTransactionWithProof {

        /**
         * Constructs a new SignedTransactionWithProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ISignedTransactionWithProof);

        /** SignedTransactionWithProof version. */
        public version: (number|Long);

        /** SignedTransactionWithProof signedTransaction. */
        public signedTransaction?: (types.ISignedTransaction|null);

        /** SignedTransactionWithProof proof. */
        public proof?: (types.ISignedTransactionProof|null);

        /** SignedTransactionWithProof events. */
        public events?: (types.IEventsList|null);

        /**
         * Creates a new SignedTransactionWithProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedTransactionWithProof instance
         */
        public static create(properties?: types.ISignedTransactionWithProof): types.SignedTransactionWithProof;

        /**
         * Encodes the specified SignedTransactionWithProof message. Does not implicitly {@link types.SignedTransactionWithProof.verify|verify} messages.
         * @param message SignedTransactionWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ISignedTransactionWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedTransactionWithProof message, length delimited. Does not implicitly {@link types.SignedTransactionWithProof.verify|verify} messages.
         * @param message SignedTransactionWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ISignedTransactionWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedTransactionWithProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedTransactionWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.SignedTransactionWithProof;

        /**
         * Decodes a SignedTransactionWithProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedTransactionWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.SignedTransactionWithProof;

        /**
         * Verifies a SignedTransactionWithProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedTransactionWithProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedTransactionWithProof
         */
        public static fromObject(object: { [k: string]: any }): types.SignedTransactionWithProof;

        /**
         * Creates a plain object from a SignedTransactionWithProof message. Also converts values to other types if specified.
         * @param message SignedTransactionWithProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.SignedTransactionWithProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedTransactionWithProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignedTransactionsBlock. */
    interface ISignedTransactionsBlock {

        /** SignedTransactionsBlock transactions */
        transactions?: (types.ISignedTransaction[]|null);

        /** SignedTransactionsBlock validatorPublicKey */
        validatorPublicKey?: (Uint8Array|null);

        /** SignedTransactionsBlock validatorSignature */
        validatorSignature?: (Uint8Array|null);
    }

    /** Represents a SignedTransactionsBlock. */
    class SignedTransactionsBlock implements ISignedTransactionsBlock {

        /**
         * Constructs a new SignedTransactionsBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ISignedTransactionsBlock);

        /** SignedTransactionsBlock transactions. */
        public transactions: types.ISignedTransaction[];

        /** SignedTransactionsBlock validatorPublicKey. */
        public validatorPublicKey: Uint8Array;

        /** SignedTransactionsBlock validatorSignature. */
        public validatorSignature: Uint8Array;

        /**
         * Creates a new SignedTransactionsBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedTransactionsBlock instance
         */
        public static create(properties?: types.ISignedTransactionsBlock): types.SignedTransactionsBlock;

        /**
         * Encodes the specified SignedTransactionsBlock message. Does not implicitly {@link types.SignedTransactionsBlock.verify|verify} messages.
         * @param message SignedTransactionsBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ISignedTransactionsBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedTransactionsBlock message, length delimited. Does not implicitly {@link types.SignedTransactionsBlock.verify|verify} messages.
         * @param message SignedTransactionsBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ISignedTransactionsBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedTransactionsBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedTransactionsBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.SignedTransactionsBlock;

        /**
         * Decodes a SignedTransactionsBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedTransactionsBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.SignedTransactionsBlock;

        /**
         * Verifies a SignedTransactionsBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedTransactionsBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedTransactionsBlock
         */
        public static fromObject(object: { [k: string]: any }): types.SignedTransactionsBlock;

        /**
         * Creates a plain object from a SignedTransactionsBlock message. Also converts values to other types if specified.
         * @param message SignedTransactionsBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.SignedTransactionsBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedTransactionsBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WriteSet. */
    interface IWriteSet {

        /** WriteSet writeSet */
        writeSet?: (types.IWriteOp[]|null);
    }

    /** Represents a WriteSet. */
    class WriteSet implements IWriteSet {

        /**
         * Constructs a new WriteSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IWriteSet);

        /** WriteSet writeSet. */
        public writeSet: types.IWriteOp[];

        /**
         * Creates a new WriteSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteSet instance
         */
        public static create(properties?: types.IWriteSet): types.WriteSet;

        /**
         * Encodes the specified WriteSet message. Does not implicitly {@link types.WriteSet.verify|verify} messages.
         * @param message WriteSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IWriteSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteSet message, length delimited. Does not implicitly {@link types.WriteSet.verify|verify} messages.
         * @param message WriteSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IWriteSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.WriteSet;

        /**
         * Decodes a WriteSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.WriteSet;

        /**
         * Verifies a WriteSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteSet
         */
        public static fromObject(object: { [k: string]: any }): types.WriteSet;

        /**
         * Creates a plain object from a WriteSet message. Also converts values to other types if specified.
         * @param message WriteSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.WriteSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WriteOp. */
    interface IWriteOp {

        /** WriteOp accessPath */
        accessPath?: (types.IAccessPath|null);

        /** WriteOp value */
        value?: (Uint8Array|null);

        /** WriteOp type */
        type?: (types.WriteOpType|null);
    }

    /** Represents a WriteOp. */
    class WriteOp implements IWriteOp {

        /**
         * Constructs a new WriteOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IWriteOp);

        /** WriteOp accessPath. */
        public accessPath?: (types.IAccessPath|null);

        /** WriteOp value. */
        public value: Uint8Array;

        /** WriteOp type. */
        public type: types.WriteOpType;

        /**
         * Creates a new WriteOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteOp instance
         */
        public static create(properties?: types.IWriteOp): types.WriteOp;

        /**
         * Encodes the specified WriteOp message. Does not implicitly {@link types.WriteOp.verify|verify} messages.
         * @param message WriteOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IWriteOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteOp message, length delimited. Does not implicitly {@link types.WriteOp.verify|verify} messages.
         * @param message WriteOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IWriteOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.WriteOp;

        /**
         * Decodes a WriteOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.WriteOp;

        /**
         * Verifies a WriteOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteOp
         */
        public static fromObject(object: { [k: string]: any }): types.WriteOp;

        /**
         * Creates a plain object from a WriteOp message. Also converts values to other types if specified.
         * @param message WriteOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.WriteOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** WriteOpType enum. */
    enum WriteOpType {
        Write = 0,
        Delete = 1
    }

    /** Properties of an AccountState. */
    interface IAccountState {

        /** AccountState address */
        address?: (Uint8Array|null);

        /** AccountState blob */
        blob?: (Uint8Array|null);
    }

    /** Represents an AccountState. */
    class AccountState implements IAccountState {

        /**
         * Constructs a new AccountState.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccountState);

        /** AccountState address. */
        public address: Uint8Array;

        /** AccountState blob. */
        public blob: Uint8Array;

        /**
         * Creates a new AccountState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountState instance
         */
        public static create(properties?: types.IAccountState): types.AccountState;

        /**
         * Encodes the specified AccountState message. Does not implicitly {@link types.AccountState.verify|verify} messages.
         * @param message AccountState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccountState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountState message, length delimited. Does not implicitly {@link types.AccountState.verify|verify} messages.
         * @param message AccountState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccountState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AccountState;

        /**
         * Decodes an AccountState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AccountState;

        /**
         * Verifies an AccountState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountState
         */
        public static fromObject(object: { [k: string]: any }): types.AccountState;

        /**
         * Creates a plain object from an AccountState message. Also converts values to other types if specified.
         * @param message AccountState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AccountState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransactionToCommit. */
    interface ITransactionToCommit {

        /** TransactionToCommit signedTxn */
        signedTxn?: (types.ISignedTransaction|null);

        /** TransactionToCommit accountStates */
        accountStates?: (types.IAccountState[]|null);

        /** TransactionToCommit events */
        events?: (types.IEvent[]|null);

        /** TransactionToCommit gasUsed */
        gasUsed?: (number|Long|null);
    }

    /** Represents a TransactionToCommit. */
    class TransactionToCommit implements ITransactionToCommit {

        /**
         * Constructs a new TransactionToCommit.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ITransactionToCommit);

        /** TransactionToCommit signedTxn. */
        public signedTxn?: (types.ISignedTransaction|null);

        /** TransactionToCommit accountStates. */
        public accountStates: types.IAccountState[];

        /** TransactionToCommit events. */
        public events: types.IEvent[];

        /** TransactionToCommit gasUsed. */
        public gasUsed: (number|Long);

        /**
         * Creates a new TransactionToCommit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionToCommit instance
         */
        public static create(properties?: types.ITransactionToCommit): types.TransactionToCommit;

        /**
         * Encodes the specified TransactionToCommit message. Does not implicitly {@link types.TransactionToCommit.verify|verify} messages.
         * @param message TransactionToCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ITransactionToCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionToCommit message, length delimited. Does not implicitly {@link types.TransactionToCommit.verify|verify} messages.
         * @param message TransactionToCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ITransactionToCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionToCommit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionToCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.TransactionToCommit;

        /**
         * Decodes a TransactionToCommit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionToCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.TransactionToCommit;

        /**
         * Verifies a TransactionToCommit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionToCommit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionToCommit
         */
        public static fromObject(object: { [k: string]: any }): types.TransactionToCommit;

        /**
         * Creates a plain object from a TransactionToCommit message. Also converts values to other types if specified.
         * @param message TransactionToCommit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.TransactionToCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionToCommit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransactionListWithProof. */
    interface ITransactionListWithProof {

        /** TransactionListWithProof transactions */
        transactions?: (types.ISignedTransaction[]|null);

        /** TransactionListWithProof infos */
        infos?: (types.ITransactionInfo[]|null);

        /** TransactionListWithProof eventsForVersions */
        eventsForVersions?: (types.IEventsForVersions|null);

        /** TransactionListWithProof firstTransactionVersion */
        firstTransactionVersion?: (google.protobuf.IUInt64Value|null);

        /** TransactionListWithProof proofOfFirstTransaction */
        proofOfFirstTransaction?: (types.IAccumulatorProof|null);

        /** TransactionListWithProof proofOfLastTransaction */
        proofOfLastTransaction?: (types.IAccumulatorProof|null);
    }

    /** Represents a TransactionListWithProof. */
    class TransactionListWithProof implements ITransactionListWithProof {

        /**
         * Constructs a new TransactionListWithProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ITransactionListWithProof);

        /** TransactionListWithProof transactions. */
        public transactions: types.ISignedTransaction[];

        /** TransactionListWithProof infos. */
        public infos: types.ITransactionInfo[];

        /** TransactionListWithProof eventsForVersions. */
        public eventsForVersions?: (types.IEventsForVersions|null);

        /** TransactionListWithProof firstTransactionVersion. */
        public firstTransactionVersion?: (google.protobuf.IUInt64Value|null);

        /** TransactionListWithProof proofOfFirstTransaction. */
        public proofOfFirstTransaction?: (types.IAccumulatorProof|null);

        /** TransactionListWithProof proofOfLastTransaction. */
        public proofOfLastTransaction?: (types.IAccumulatorProof|null);

        /**
         * Creates a new TransactionListWithProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionListWithProof instance
         */
        public static create(properties?: types.ITransactionListWithProof): types.TransactionListWithProof;

        /**
         * Encodes the specified TransactionListWithProof message. Does not implicitly {@link types.TransactionListWithProof.verify|verify} messages.
         * @param message TransactionListWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ITransactionListWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionListWithProof message, length delimited. Does not implicitly {@link types.TransactionListWithProof.verify|verify} messages.
         * @param message TransactionListWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ITransactionListWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionListWithProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionListWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.TransactionListWithProof;

        /**
         * Decodes a TransactionListWithProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionListWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.TransactionListWithProof;

        /**
         * Verifies a TransactionListWithProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionListWithProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionListWithProof
         */
        public static fromObject(object: { [k: string]: any }): types.TransactionListWithProof;

        /**
         * Creates a plain object from a TransactionListWithProof message. Also converts values to other types if specified.
         * @param message TransactionListWithProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.TransactionListWithProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionListWithProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ValidatorChangeEventWithProof. */
    interface IValidatorChangeEventWithProof {

        /** ValidatorChangeEventWithProof ledgerInfoWithSigs */
        ledgerInfoWithSigs?: (types.ILedgerInfoWithSignatures|null);

        /** ValidatorChangeEventWithProof eventWithProof */
        eventWithProof?: (types.IEventWithProof|null);
    }

    /** Represents a ValidatorChangeEventWithProof. */
    class ValidatorChangeEventWithProof implements IValidatorChangeEventWithProof {

        /**
         * Constructs a new ValidatorChangeEventWithProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IValidatorChangeEventWithProof);

        /** ValidatorChangeEventWithProof ledgerInfoWithSigs. */
        public ledgerInfoWithSigs?: (types.ILedgerInfoWithSignatures|null);

        /** ValidatorChangeEventWithProof eventWithProof. */
        public eventWithProof?: (types.IEventWithProof|null);

        /**
         * Creates a new ValidatorChangeEventWithProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValidatorChangeEventWithProof instance
         */
        public static create(properties?: types.IValidatorChangeEventWithProof): types.ValidatorChangeEventWithProof;

        /**
         * Encodes the specified ValidatorChangeEventWithProof message. Does not implicitly {@link types.ValidatorChangeEventWithProof.verify|verify} messages.
         * @param message ValidatorChangeEventWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IValidatorChangeEventWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValidatorChangeEventWithProof message, length delimited. Does not implicitly {@link types.ValidatorChangeEventWithProof.verify|verify} messages.
         * @param message ValidatorChangeEventWithProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IValidatorChangeEventWithProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValidatorChangeEventWithProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValidatorChangeEventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ValidatorChangeEventWithProof;

        /**
         * Decodes a ValidatorChangeEventWithProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValidatorChangeEventWithProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ValidatorChangeEventWithProof;

        /**
         * Verifies a ValidatorChangeEventWithProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValidatorChangeEventWithProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidatorChangeEventWithProof
         */
        public static fromObject(object: { [k: string]: any }): types.ValidatorChangeEventWithProof;

        /**
         * Creates a plain object from a ValidatorChangeEventWithProof message. Also converts values to other types if specified.
         * @param message ValidatorChangeEventWithProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ValidatorChangeEventWithProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidatorChangeEventWithProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** VMValidationStatusCode enum. */
    enum VMValidationStatusCode {
        UnknownValidationStatus = 0,
        InvalidSignature = 1,
        InvalidAuthKey = 2,
        SequenceNumberTooOld = 3,
        SequenceNumberTooNew = 4,
        InsufficientBalanceForTransactionFee = 5,
        TransactionExpired = 6,
        SendingAccountDoesNotExist = 7,
        RejectedWriteSet = 8,
        InvalidWriteSet = 9,
        ExceededMaxTransactionSize = 10,
        UnknownScript = 11,
        UnknownModule = 12,
        MaxGasUnitsExceedsMaxGasUnitsBound = 13,
        MaxGasUnitsBelowMinTransactionGasUnits = 14,
        GasUnitPriceBelowMinBound = 15,
        GasUnitPriceAboveMaxBound = 16
    }

    /** Properties of a VMValidationStatus. */
    interface IVMValidationStatus {

        /** VMValidationStatus code */
        code?: (types.VMValidationStatusCode|null);

        /** VMValidationStatus message */
        message?: (string|null);
    }

    /** Represents a VMValidationStatus. */
    class VMValidationStatus implements IVMValidationStatus {

        /**
         * Constructs a new VMValidationStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVMValidationStatus);

        /** VMValidationStatus code. */
        public code: types.VMValidationStatusCode;

        /** VMValidationStatus message. */
        public message: string;

        /**
         * Creates a new VMValidationStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VMValidationStatus instance
         */
        public static create(properties?: types.IVMValidationStatus): types.VMValidationStatus;

        /**
         * Encodes the specified VMValidationStatus message. Does not implicitly {@link types.VMValidationStatus.verify|verify} messages.
         * @param message VMValidationStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVMValidationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VMValidationStatus message, length delimited. Does not implicitly {@link types.VMValidationStatus.verify|verify} messages.
         * @param message VMValidationStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVMValidationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VMValidationStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VMValidationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VMValidationStatus;

        /**
         * Decodes a VMValidationStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VMValidationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VMValidationStatus;

        /**
         * Verifies a VMValidationStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VMValidationStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VMValidationStatus
         */
        public static fromObject(object: { [k: string]: any }): types.VMValidationStatus;

        /**
         * Creates a plain object from a VMValidationStatus message. Also converts values to other types if specified.
         * @param message VMValidationStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VMValidationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VMValidationStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VMVerificationStatusList. */
    interface IVMVerificationStatusList {

        /** VMVerificationStatusList statusList */
        statusList?: (types.IVMVerificationStatus[]|null);
    }

    /** Represents a VMVerificationStatusList. */
    class VMVerificationStatusList implements IVMVerificationStatusList {

        /**
         * Constructs a new VMVerificationStatusList.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVMVerificationStatusList);

        /** VMVerificationStatusList statusList. */
        public statusList: types.IVMVerificationStatus[];

        /**
         * Creates a new VMVerificationStatusList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VMVerificationStatusList instance
         */
        public static create(properties?: types.IVMVerificationStatusList): types.VMVerificationStatusList;

        /**
         * Encodes the specified VMVerificationStatusList message. Does not implicitly {@link types.VMVerificationStatusList.verify|verify} messages.
         * @param message VMVerificationStatusList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVMVerificationStatusList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VMVerificationStatusList message, length delimited. Does not implicitly {@link types.VMVerificationStatusList.verify|verify} messages.
         * @param message VMVerificationStatusList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVMVerificationStatusList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VMVerificationStatusList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VMVerificationStatusList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VMVerificationStatusList;

        /**
         * Decodes a VMVerificationStatusList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VMVerificationStatusList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VMVerificationStatusList;

        /**
         * Verifies a VMVerificationStatusList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VMVerificationStatusList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VMVerificationStatusList
         */
        public static fromObject(object: { [k: string]: any }): types.VMVerificationStatusList;

        /**
         * Creates a plain object from a VMVerificationStatusList message. Also converts values to other types if specified.
         * @param message VMVerificationStatusList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VMVerificationStatusList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VMVerificationStatusList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VMVerificationStatus. */
    interface IVMVerificationStatus {

        /** VMVerificationStatus statusKind */
        statusKind?: (types.VMVerificationStatus.StatusKind|null);

        /** VMVerificationStatus moduleIdx */
        moduleIdx?: (number|null);

        /** VMVerificationStatus errorKind */
        errorKind?: (types.VMVerificationErrorKind|null);

        /** VMVerificationStatus message */
        message?: (string|null);

        /** VMVerificationStatus dependencyId */
        dependencyId?: (types.IModuleId|null);
    }

    /** Represents a VMVerificationStatus. */
    class VMVerificationStatus implements IVMVerificationStatus {

        /**
         * Constructs a new VMVerificationStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVMVerificationStatus);

        /** VMVerificationStatus statusKind. */
        public statusKind: types.VMVerificationStatus.StatusKind;

        /** VMVerificationStatus moduleIdx. */
        public moduleIdx: number;

        /** VMVerificationStatus errorKind. */
        public errorKind: types.VMVerificationErrorKind;

        /** VMVerificationStatus message. */
        public message: string;

        /** VMVerificationStatus dependencyId. */
        public dependencyId?: (types.IModuleId|null);

        /**
         * Creates a new VMVerificationStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VMVerificationStatus instance
         */
        public static create(properties?: types.IVMVerificationStatus): types.VMVerificationStatus;

        /**
         * Encodes the specified VMVerificationStatus message. Does not implicitly {@link types.VMVerificationStatus.verify|verify} messages.
         * @param message VMVerificationStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVMVerificationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VMVerificationStatus message, length delimited. Does not implicitly {@link types.VMVerificationStatus.verify|verify} messages.
         * @param message VMVerificationStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVMVerificationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VMVerificationStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VMVerificationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VMVerificationStatus;

        /**
         * Decodes a VMVerificationStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VMVerificationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VMVerificationStatus;

        /**
         * Verifies a VMVerificationStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VMVerificationStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VMVerificationStatus
         */
        public static fromObject(object: { [k: string]: any }): types.VMVerificationStatus;

        /**
         * Creates a plain object from a VMVerificationStatus message. Also converts values to other types if specified.
         * @param message VMVerificationStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VMVerificationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VMVerificationStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace VMVerificationStatus {

        /** StatusKind enum. */
        enum StatusKind {
            SCRIPT = 0,
            MODULE = 1,
            DEPENDENCY = 2
        }
    }

    /** VMVerificationErrorKind enum. */
    enum VMVerificationErrorKind {
        UnknownVerificationError = 0,
        IndexOutOfBounds = 1,
        RangeOutOfBounds = 2,
        InvalidSignatureToken = 3,
        InvalidFieldDefReference = 4,
        RecursiveStructDefinition = 5,
        InvalidResourceField = 6,
        InvalidFallThrough = 7,
        JoinFailure = 8,
        NegativeStackSizeWithinBlock = 9,
        UnbalancedStack = 10,
        InvalidMainFunctionSignature = 11,
        DuplicateElement = 12,
        InvalidModuleHandle = 13,
        UnimplementedHandle = 14,
        InconsistentFields = 15,
        UnusedFields = 16,
        LookupFailed = 17,
        VisibilityMismatch = 18,
        TypeResolutionFailure = 19,
        TypeMismatch = 20,
        MissingDependency = 21,
        PopReferenceError = 22,
        PopResourceError = 23,
        ReleaseRefTypeMismatchError = 24,
        BrTypeMismatchError = 25,
        AssertTypeMismatchError = 26,
        StLocTypeMismatchError = 27,
        StLocUnsafeToDestroyError = 28,
        RetUnsafeToDestroyError = 29,
        RetTypeMismatchError = 30,
        FreezeRefTypeMismatchError = 31,
        FreezeRefExistsMutableBorrowError = 32,
        BorrowFieldTypeMismatchError = 33,
        BorrowFieldBadFieldError = 34,
        BorrowFieldExistsMutableBorrowError = 35,
        CopyLocUnavailableError = 36,
        CopyLocResourceError = 37,
        CopyLocExistsBorrowError = 38,
        MoveLocUnavailableError = 39,
        MoveLocExistsBorrowError = 40,
        BorrowLocReferenceError = 41,
        BorrowLocUnavailableError = 42,
        BorrowLocExistsBorrowError = 43,
        CallTypeMismatchError = 44,
        CallBorrowedMutableReferenceError = 45,
        PackTypeMismatchError = 46,
        UnpackTypeMismatchError = 47,
        ReadRefTypeMismatchError = 48,
        ReadRefResourceError = 49,
        ReadRefExistsMutableBorrowError = 50,
        WriteRefTypeMismatchError = 51,
        WriteRefResourceError = 52,
        WriteRefExistsBorrowError = 53,
        WriteRefNoMutableReferenceError = 54,
        IntegerOpTypeMismatchError = 55,
        BooleanOpTypeMismatchError = 56,
        EqualityOpTypeMismatchError = 57,
        ExistsResourceTypeMismatchError = 58,
        BorrowGlobalTypeMismatchError = 59,
        BorrowGlobalNoResourceError = 60,
        MoveFromTypeMismatchError = 61,
        MoveFromNoResourceError = 62,
        MoveToSenderTypeMismatchError = 63,
        MoveToSenderNoResourceError = 64,
        CreateAccountTypeMismatchError = 65,
        ModuleAddressDoesNotMatchSender = 66,
        NoModuleHandles = 67
    }

    /** VMInvariantViolationError enum. */
    enum VMInvariantViolationError {
        UnknownInvariantViolationError = 0,
        OutOfBoundsIndex = 1,
        OutOfBoundsRange = 2,
        EmptyValueStack = 3,
        EmptyCallStack = 4,
        PCOverflow = 5,
        LinkerError = 6,
        LocalReferenceError = 7,
        StorageError = 8
    }

    /** BinaryError enum. */
    enum BinaryError {
        UnknownBinaryError = 0,
        Malformed = 1,
        BadMagic = 2,
        UnknownVersion = 3,
        UnknownTableType = 4,
        UnknownSignatureType = 5,
        UnknownSerializedType = 6,
        UnknownOpcode = 7,
        BadHeaderTable = 8,
        UnexpectedSignatureType = 9,
        DuplicateTable = 10
    }

    /** RuntimeStatus enum. */
    enum RuntimeStatus {
        UnknownRuntimeStatus = 0,
        Executed = 1,
        OutOfGas = 2,
        ResourceDoesNotExist = 3,
        ResourceAlreadyExists = 4,
        EvictedAccountAccess = 5,
        AccountAddressAlreadyExists = 6,
        TypeError = 7,
        MissingData = 8,
        DataFormatError = 9,
        InvalidData = 10,
        RemoteDataError = 11,
        CannotWriteExistingResource = 12,
        ValueSerializationError = 13,
        ValueDeserializationError = 14,
        DuplicateModuleName = 15
    }

    /** Properties of an AssertionFailure. */
    interface IAssertionFailure {

        /** AssertionFailure assertionErrorCode */
        assertionErrorCode?: (number|Long|null);
    }

    /** Represents an AssertionFailure. */
    class AssertionFailure implements IAssertionFailure {

        /**
         * Constructs a new AssertionFailure.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAssertionFailure);

        /** AssertionFailure assertionErrorCode. */
        public assertionErrorCode: (number|Long);

        /**
         * Creates a new AssertionFailure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssertionFailure instance
         */
        public static create(properties?: types.IAssertionFailure): types.AssertionFailure;

        /**
         * Encodes the specified AssertionFailure message. Does not implicitly {@link types.AssertionFailure.verify|verify} messages.
         * @param message AssertionFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAssertionFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssertionFailure message, length delimited. Does not implicitly {@link types.AssertionFailure.verify|verify} messages.
         * @param message AssertionFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAssertionFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssertionFailure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssertionFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AssertionFailure;

        /**
         * Decodes an AssertionFailure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssertionFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AssertionFailure;

        /**
         * Verifies an AssertionFailure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssertionFailure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssertionFailure
         */
        public static fromObject(object: { [k: string]: any }): types.AssertionFailure;

        /**
         * Creates a plain object from an AssertionFailure message. Also converts values to other types if specified.
         * @param message AssertionFailure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AssertionFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssertionFailure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArithmeticError. */
    interface IArithmeticError {

        /** ArithmeticError errorCode */
        errorCode?: (types.ArithmeticError.ArithmeticErrorType|null);
    }

    /** Represents an ArithmeticError. */
    class ArithmeticError implements IArithmeticError {

        /**
         * Constructs a new ArithmeticError.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IArithmeticError);

        /** ArithmeticError errorCode. */
        public errorCode: types.ArithmeticError.ArithmeticErrorType;

        /**
         * Creates a new ArithmeticError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArithmeticError instance
         */
        public static create(properties?: types.IArithmeticError): types.ArithmeticError;

        /**
         * Encodes the specified ArithmeticError message. Does not implicitly {@link types.ArithmeticError.verify|verify} messages.
         * @param message ArithmeticError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IArithmeticError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArithmeticError message, length delimited. Does not implicitly {@link types.ArithmeticError.verify|verify} messages.
         * @param message ArithmeticError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IArithmeticError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArithmeticError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArithmeticError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ArithmeticError;

        /**
         * Decodes an ArithmeticError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArithmeticError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ArithmeticError;

        /**
         * Verifies an ArithmeticError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArithmeticError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArithmeticError
         */
        public static fromObject(object: { [k: string]: any }): types.ArithmeticError;

        /**
         * Creates a plain object from an ArithmeticError message. Also converts values to other types if specified.
         * @param message ArithmeticError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ArithmeticError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArithmeticError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ArithmeticError {

        /** ArithmeticErrorType enum. */
        enum ArithmeticErrorType {
            UnknownArithmeticError = 0,
            Underflow = 1,
            Overflow = 2,
            DivisionByZero = 3
        }
    }

    /** Properties of a DynamicReferenceError. */
    interface IDynamicReferenceError {

        /** DynamicReferenceError errorCode */
        errorCode?: (types.DynamicReferenceError.DynamicReferenceErrorType|null);
    }

    /** Represents a DynamicReferenceError. */
    class DynamicReferenceError implements IDynamicReferenceError {

        /**
         * Constructs a new DynamicReferenceError.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IDynamicReferenceError);

        /** DynamicReferenceError errorCode. */
        public errorCode: types.DynamicReferenceError.DynamicReferenceErrorType;

        /**
         * Creates a new DynamicReferenceError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DynamicReferenceError instance
         */
        public static create(properties?: types.IDynamicReferenceError): types.DynamicReferenceError;

        /**
         * Encodes the specified DynamicReferenceError message. Does not implicitly {@link types.DynamicReferenceError.verify|verify} messages.
         * @param message DynamicReferenceError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IDynamicReferenceError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DynamicReferenceError message, length delimited. Does not implicitly {@link types.DynamicReferenceError.verify|verify} messages.
         * @param message DynamicReferenceError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IDynamicReferenceError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DynamicReferenceError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DynamicReferenceError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.DynamicReferenceError;

        /**
         * Decodes a DynamicReferenceError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DynamicReferenceError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.DynamicReferenceError;

        /**
         * Verifies a DynamicReferenceError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DynamicReferenceError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DynamicReferenceError
         */
        public static fromObject(object: { [k: string]: any }): types.DynamicReferenceError;

        /**
         * Creates a plain object from a DynamicReferenceError message. Also converts values to other types if specified.
         * @param message DynamicReferenceError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.DynamicReferenceError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DynamicReferenceError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DynamicReferenceError {

        /** DynamicReferenceErrorType enum. */
        enum DynamicReferenceErrorType {
            UnknownDynamicReferenceError = 0,
            MoveOfBorrowedResource = 1,
            GlobalRefAlreadyReleased = 2,
            MissingReleaseRef = 3,
            GlobalAlreadyBorrowed = 4
        }
    }

    /** Properties of an ExecutionStatus. */
    interface IExecutionStatus {

        /** ExecutionStatus runtimeStatus */
        runtimeStatus?: (types.RuntimeStatus|null);

        /** ExecutionStatus assertionFailure */
        assertionFailure?: (types.IAssertionFailure|null);

        /** ExecutionStatus arithmeticError */
        arithmeticError?: (types.IArithmeticError|null);

        /** ExecutionStatus referenceError */
        referenceError?: (types.IDynamicReferenceError|null);
    }

    /** Represents an ExecutionStatus. */
    class ExecutionStatus implements IExecutionStatus {

        /**
         * Constructs a new ExecutionStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IExecutionStatus);

        /** ExecutionStatus runtimeStatus. */
        public runtimeStatus: types.RuntimeStatus;

        /** ExecutionStatus assertionFailure. */
        public assertionFailure?: (types.IAssertionFailure|null);

        /** ExecutionStatus arithmeticError. */
        public arithmeticError?: (types.IArithmeticError|null);

        /** ExecutionStatus referenceError. */
        public referenceError?: (types.IDynamicReferenceError|null);

        /** ExecutionStatus executionStatus. */
        public executionStatus?: ("runtimeStatus"|"assertionFailure"|"arithmeticError"|"referenceError");

        /**
         * Creates a new ExecutionStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecutionStatus instance
         */
        public static create(properties?: types.IExecutionStatus): types.ExecutionStatus;

        /**
         * Encodes the specified ExecutionStatus message. Does not implicitly {@link types.ExecutionStatus.verify|verify} messages.
         * @param message ExecutionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IExecutionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecutionStatus message, length delimited. Does not implicitly {@link types.ExecutionStatus.verify|verify} messages.
         * @param message ExecutionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IExecutionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecutionStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecutionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ExecutionStatus;

        /**
         * Decodes an ExecutionStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecutionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ExecutionStatus;

        /**
         * Verifies an ExecutionStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecutionStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecutionStatus
         */
        public static fromObject(object: { [k: string]: any }): types.ExecutionStatus;

        /**
         * Creates a plain object from an ExecutionStatus message. Also converts values to other types if specified.
         * @param message ExecutionStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ExecutionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecutionStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VMStatus. */
    interface IVMStatus {

        /** VMStatus validation */
        validation?: (types.IVMValidationStatus|null);

        /** VMStatus verification */
        verification?: (types.IVMVerificationStatusList|null);

        /** VMStatus invariantViolation */
        invariantViolation?: (types.VMInvariantViolationError|null);

        /** VMStatus deserialization */
        deserialization?: (types.BinaryError|null);

        /** VMStatus execution */
        execution?: (types.IExecutionStatus|null);
    }

    /** Represents a VMStatus. */
    class VMStatus implements IVMStatus {

        /**
         * Constructs a new VMStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVMStatus);

        /** VMStatus validation. */
        public validation?: (types.IVMValidationStatus|null);

        /** VMStatus verification. */
        public verification?: (types.IVMVerificationStatusList|null);

        /** VMStatus invariantViolation. */
        public invariantViolation: types.VMInvariantViolationError;

        /** VMStatus deserialization. */
        public deserialization: types.BinaryError;

        /** VMStatus execution. */
        public execution?: (types.IExecutionStatus|null);

        /** VMStatus errorType. */
        public errorType?: ("validation"|"verification"|"invariantViolation"|"deserialization"|"execution");

        /**
         * Creates a new VMStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VMStatus instance
         */
        public static create(properties?: types.IVMStatus): types.VMStatus;

        /**
         * Encodes the specified VMStatus message. Does not implicitly {@link types.VMStatus.verify|verify} messages.
         * @param message VMStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVMStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VMStatus message, length delimited. Does not implicitly {@link types.VMStatus.verify|verify} messages.
         * @param message VMStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVMStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VMStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VMStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VMStatus;

        /**
         * Decodes a VMStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VMStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VMStatus;

        /**
         * Verifies a VMStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VMStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VMStatus
         */
        public static fromObject(object: { [k: string]: any }): types.VMStatus;

        /**
         * Creates a plain object from a VMStatus message. Also converts values to other types if specified.
         * @param message VMStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VMStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VMStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModuleId. */
    interface IModuleId {

        /** ModuleId address */
        address?: (Uint8Array|null);

        /** ModuleId name */
        name?: (string|null);
    }

    /** The unique identifier for a module on the chain. */
    class ModuleId implements IModuleId {

        /**
         * Constructs a new ModuleId.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IModuleId);

        /** ModuleId address. */
        public address: Uint8Array;

        /** ModuleId name. */
        public name: string;

        /**
         * Creates a new ModuleId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModuleId instance
         */
        public static create(properties?: types.IModuleId): types.ModuleId;

        /**
         * Encodes the specified ModuleId message. Does not implicitly {@link types.ModuleId.verify|verify} messages.
         * @param message ModuleId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IModuleId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModuleId message, length delimited. Does not implicitly {@link types.ModuleId.verify|verify} messages.
         * @param message ModuleId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IModuleId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModuleId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModuleId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ModuleId;

        /**
         * Decodes a ModuleId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModuleId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ModuleId;

        /**
         * Verifies a ModuleId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModuleId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModuleId
         */
        public static fromObject(object: { [k: string]: any }): types.ModuleId;

        /**
         * Creates a plain object from a ModuleId message. Also converts values to other types if specified.
         * @param message ModuleId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ModuleId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModuleId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace mempool. */
export namespace mempool {

    /** MempoolAddTransactionStatus enum. */
    enum MempoolAddTransactionStatus {
        Valid = 0,
        InsufficientBalance = 1,
        InvalidSeqNumber = 2,
        MempoolIsFull = 3,
        TooManyTransactions = 4,
        InvalidUpdate = 5
    }
}
