"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderDataClient = void 0;
var HeaderDataClient;
(function (HeaderDataClient) {
    async function getHeadersContentType() {
        const headers = {
            'content-type': 'application/json',
        };
        return headers;
    }
    HeaderDataClient.getHeadersContentType = getHeadersContentType;
    async function getHeadersAuthorization(token) {
        const headers = {
            'content-type': 'application/json',
            authorization: token,
        };
        return headers;
    }
    HeaderDataClient.getHeadersAuthorization = getHeadersAuthorization;
})(HeaderDataClient = exports.HeaderDataClient || (exports.HeaderDataClient = {}));
