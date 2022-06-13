/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"1c3d1a441540e6ec1926688b876a7f0f","url":"404.html"},{"revision":"fd731bf28649e9392ce6e9cc98c8a284","url":"anderesoftware/affinity/index.html"},{"revision":"0c6cf11cec0cd0ae8334d6cc12cc2b14","url":"anderesoftware/browser/auto_uebers/index.html"},{"revision":"ba9f04f968ccff5dd9dd09f2b4932816","url":"anderesoftware/browser/index.html"},{"revision":"60916c0099020f9dbf28f1b9333dd2d0","url":"anderesoftware/dateien/dateitypen/index.html"},{"revision":"dcfa7cfd944daec8123f29f1c2040044","url":"anderesoftware/dateien/index.html"},{"revision":"e49d9e46d11cf30ebba796b92391edaa","url":"anderesoftware/dateien/macos/index.html"},{"revision":"ae3d12f6c9fd0179752bbcdbc21b65f0","url":"anderesoftware/dateien/windows/index.html"},{"revision":"49c36d7bb85b6ba15eb7322f275f1018","url":"anderesoftware/index.html"},{"revision":"fa63d3fbd3092e43d9edea73533affd1","url":"anderesoftware/istest2/anmelden/index.html"},{"revision":"473ba7ba5c4ce7912edbdf015482d382","url":"anderesoftware/istest2/index.html"},{"revision":"63401c7798b77fb9b16b4addaa55e332","url":"anderesoftware/istest2/seb/index.html"},{"revision":"155ff8f6a40541fee1e305627d518e58","url":"anderesoftware/istest2/verwenden/Bsp01/index.html"},{"revision":"d241497eb3ad2961fa07aa34c464e54d","url":"anderesoftware/istest2/verwenden/Bsp02/index.html"},{"revision":"c0af8f3e6df98843dac6d754c4afa394","url":"anderesoftware/istest2/verwenden/Bsp03/index.html"},{"revision":"c24068644661a5f1081c594f3bcc2070","url":"anderesoftware/istest2/verwenden/Bsp04/index.html"},{"revision":"ea9b4db3c2ab8e2a42c9e00646d2382a","url":"anderesoftware/istest2/verwenden/Bsp05/index.html"},{"revision":"8de3184a17cd99f9b83ca7ee29cc4f03","url":"anderesoftware/istest2/verwenden/Bsp06/index.html"},{"revision":"6c9b4fa2da64e9b399cffb33bd83f08b","url":"anderesoftware/istest2/verwenden/Bsp07/index.html"},{"revision":"dfc26edc744b41a23023267e693f6790","url":"anderesoftware/istest2/verwenden/Bsp08/index.html"},{"revision":"b436f03366d4b4ee10581add7346968c","url":"anderesoftware/istest2/verwenden/Bsp09/index.html"},{"revision":"7f0da9c088b2074e63e15159401d4f78","url":"anderesoftware/istest2/verwenden/index.html"},{"revision":"ead95abd7e68c52ab9c79767cfbddddb","url":"anderesoftware/OCR/index.html"},{"revision":"c35b3b99937ba89b26ceea47da5c21cb","url":"anderesoftware/PDF/drawboard/index.html"},{"revision":"da524fc206d6162cebca6e200ee56f34","url":"anderesoftware/PDF/index.html"},{"revision":"53bb4cf7fddbbe5f63a780abcd9e5d74","url":"anderesoftware/PDF/PDF24/index.html"},{"revision":"3ac25ef34c99ca573fff4b25f37d0ec2","url":"anderesoftware/video-audio/audio-CD/index.html"},{"revision":"5ee6ab3a7dfeff42d932f5643b7f4a1d","url":"anderesoftware/video-audio/audio-CD/macOS/index.html"},{"revision":"6ec741794c4ad3f50295608209ea166e","url":"anderesoftware/video-audio/audio-CD/windows/index.html"},{"revision":"d26ce6ffaa429d1b4f5bda621fbba5f1","url":"anderesoftware/video-audio/dvd/index.html"},{"revision":"f19e7ab62e0c71ba5bed5fb41727b44c","url":"anderesoftware/video-audio/index.html"},{"revision":"1717afc9f6fdfb07a8775a5f8383f7f5","url":"anderesoftware/video-audio/stream/index.html"},{"revision":"ab55dd072e9dfbb94cb8c09599d7ecca","url":"anderesoftware/video-audio/video-mediathek/index.html"},{"revision":"42b729735698268d06b5dbbe9e35fa36","url":"anderesoftware/video-audio/youtube/index.html"},{"revision":"be304fb1bab6ea90a97a7d0b2f9b4628","url":"assets/css/styles.8b883a1f.css"},{"revision":"5b64a0298933ad2101f53d89a4c895d8","url":"assets/js/001960da.8df7eedd.js"},{"revision":"8c8dc0bd4f01c0442331c24d97cb2ff2","url":"assets/js/0295e404.22501f1c.js"},{"revision":"5d132acb089eba0ce10ba18aaceeda27","url":"assets/js/0342e56b.5ba2e477.js"},{"revision":"d536b84c455b0d542a4aef929ec223c7","url":"assets/js/03788197.d4d8a773.js"},{"revision":"c64f52312f9e5792e24e104e708e2f29","url":"assets/js/047560af.68ea99e3.js"},{"revision":"a6793fa3c9448bb7e5e45b4b1e14c33e","url":"assets/js/0583c0a4.92f3b345.js"},{"revision":"4853069af13880b83b56b2a84b66e97c","url":"assets/js/073771c9.171e5789.js"},{"revision":"bf5769656809afd94e09cc9306e0c628","url":"assets/js/074709fd.e4668f46.js"},{"revision":"eeac2fc3bbb6d25a5f7859fcdfba3160","url":"assets/js/0861bc88.4024b49f.js"},{"revision":"58da2cafeaeeb1bc90b593db28e36e7f","url":"assets/js/0883dcaf.d311db90.js"},{"revision":"23fd9ad180e25dae497740d5e0ba7f09","url":"assets/js/090db9de.66d37b1e.js"},{"revision":"4327e6798ecec9ec9b38ccbeb3dfb804","url":"assets/js/09c77264.6fbb71f1.js"},{"revision":"8a9c07bd698f09db07e29a8c09bf803e","url":"assets/js/0b431031.0a49f107.js"},{"revision":"cb88ed7286d904261a5faccda5fc73dd","url":"assets/js/0e1026af.4f82f410.js"},{"revision":"63ced47bba73cf36a98a2f165cbcc794","url":"assets/js/0e427c9e.9b12a26d.js"},{"revision":"45bf6779ecdb8aa04aebba01c664324b","url":"assets/js/0e6b82aa.335a5063.js"},{"revision":"4ea7f50d4f2d1c5029c7470c3dc97291","url":"assets/js/0e88f429.1d2af5de.js"},{"revision":"a5caeb01bca5903cca6dcdc5ae913157","url":"assets/js/0e9736e0.601565f0.js"},{"revision":"4943058b237aeb7aaca5a25134a2b575","url":"assets/js/0f9aec09.a14e290b.js"},{"revision":"808b0a414ea880df46283e9696a8f4b6","url":"assets/js/104210b9.587381db.js"},{"revision":"d0d7da60258b6843b4c77e679ba9bbb8","url":"assets/js/1137b3d4.d704bfa8.js"},{"revision":"99acebf787d6ef7f9c08f8f2987fa97e","url":"assets/js/11f95cb5.1aed72c8.js"},{"revision":"d88263d9daff41456bc0752760b8ee0f","url":"assets/js/1259a77e.3bffc3db.js"},{"revision":"f5041c99415f4e476bcee9f83a304293","url":"assets/js/12680cb2.92541b53.js"},{"revision":"902cc918cb56e9c21689b2a91b27686c","url":"assets/js/13e868c3.82c22211.js"},{"revision":"a322ff75edcc45ae6a4bb94746a677ad","url":"assets/js/15403081.cbed2cc9.js"},{"revision":"540500d0a1da5de96afcce115eaf1438","url":"assets/js/1555702f.9dda3320.js"},{"revision":"23ed63b9f2cf97b3b34a803c546865ef","url":"assets/js/16916628.63f07091.js"},{"revision":"47a5cb3ab2e764019c7e3a9ddef58c2f","url":"assets/js/173813d8.efc1d366.js"},{"revision":"591833068ef420d485c52ebb9c163548","url":"assets/js/17896441.8d89b99f.js"},{"revision":"5e57399d02f732d76da9e22508656a45","url":"assets/js/17eb1fbe.530ac052.js"},{"revision":"e8f9dd771539b7d3f2e0d9039f540e45","url":"assets/js/1922.2f1c745e.js"},{"revision":"fcea8ecd5ed5eeeeddd64778dfda02fd","url":"assets/js/1a8d237b.d1892a2f.js"},{"revision":"3fe36de07759e7790b5e6d4277afaadc","url":"assets/js/1af68e8c.5d8eb029.js"},{"revision":"d515c5c761f0af94c028d2c2876f7c60","url":"assets/js/1be78505.cd16da0d.js"},{"revision":"1b4615ca298749a56fe717075a18c012","url":"assets/js/1df93b7f.517bb878.js"},{"revision":"95a9fb3bdcf15e79712360c74c6f6e2b","url":"assets/js/200507f0.dd3a93c0.js"},{"revision":"bb9b2bc5588911fa099d142184683a9d","url":"assets/js/20b14dec.a26557af.js"},{"revision":"30d54169c0139a2df15df04e90580c15","url":"assets/js/22448d72.59d45462.js"},{"revision":"d66bde26270bd3b3385703d9cd744078","url":"assets/js/22e5ce53.e93ee04b.js"},{"revision":"2c0a214664959d04e6c4145540c5bf6f","url":"assets/js/230.7b7258a2.js"},{"revision":"5527c7e91cf2e1e84ca01f3a25fb3673","url":"assets/js/2389d8c5.25a41f0b.js"},{"revision":"c47d1c975940111f92cfc1ea76f5bd9e","url":"assets/js/23a6a5dd.1f846f4c.js"},{"revision":"cbb4c8b2bf4790f4bf0db88182312e35","url":"assets/js/2535a97e.ff4f8de5.js"},{"revision":"b9e4db0b0aa568c402a4ec95e4f12183","url":"assets/js/257c484f.8065323d.js"},{"revision":"fedd4ea1faec95e8b69375aa028bdbfb","url":"assets/js/27313b13.1b2677a6.js"},{"revision":"93365cc679d9137d097e7e8274910a46","url":"assets/js/29c393b2.2c6fbceb.js"},{"revision":"da19734feddc520b93fa0ed2b36e6588","url":"assets/js/2a658307.d4d307d3.js"},{"revision":"23267baf319a4dc0fa49d1e635d53a33","url":"assets/js/2a8f6418.5b124ed2.js"},{"revision":"a228b2b31535621713b24332d295ee02","url":"assets/js/2af55f1e.34a5e5a9.js"},{"revision":"6d75f14d0363acf066bce67bec4b3a84","url":"assets/js/2b730051.7dce69c2.js"},{"revision":"6dacf02880b6ae64829ec21ce7e24d87","url":"assets/js/2bce6341.30843654.js"},{"revision":"45d304ff0472b92c0d5e99b513c8b1ba","url":"assets/js/2ec5f76c.43074e07.js"},{"revision":"d16bf4cf23b8ea645410b713f7abf474","url":"assets/js/2f0c7ba1.1d367c3f.js"},{"revision":"f27dae5c8f115614a6ed6aa5022073cf","url":"assets/js/2fb98691.4b73c519.js"},{"revision":"6fcb417c1b0fc111f1081c43e04e3739","url":"assets/js/30751783.ba6aa108.js"},{"revision":"424aa48d20ee234e7bbae0c37b1d1809","url":"assets/js/30768015.0db8f117.js"},{"revision":"386798ed70c2c2ab8ae55323c24ed047","url":"assets/js/31a24281.551e567d.js"},{"revision":"d685e9a4eede48b045624009c264affb","url":"assets/js/324cc436.d36a4f4d.js"},{"revision":"015f4dd6f9de2f7aa89c496dafe2712e","url":"assets/js/326b21ac.16135f1a.js"},{"revision":"cddd85a2caaafdbec1189189bda2560c","url":"assets/js/3490d146.4ecbefcc.js"},{"revision":"589d4e734006198147513633662d2cab","url":"assets/js/3720c009.cb2d518e.js"},{"revision":"7c64aef996192bdaca4f092a75527e76","url":"assets/js/374f3402.35bdb2dc.js"},{"revision":"f92ff08f2da9a6f793d61824af3d628b","url":"assets/js/37760bb8.20fd61a7.js"},{"revision":"132d454a36f7bb1862540ddc0875fa88","url":"assets/js/3940710e.76684030.js"},{"revision":"72c3e4a1fbf8a7661bae0a32134f7b49","url":"assets/js/39cc9d58.3c094c72.js"},{"revision":"85726637281085536c0025dacc6bb3c5","url":"assets/js/3ad355a3.19f3b7a3.js"},{"revision":"17db012e1f389f5edf6aaa5e777435c1","url":"assets/js/3b3c0309.f8c399c7.js"},{"revision":"43b96648cb57feaa8ffc4f78484ea522","url":"assets/js/3b892c8b.1315eb65.js"},{"revision":"5b0b4fcf127fd99139b147364f52264f","url":"assets/js/3c9db5c5.68fab228.js"},{"revision":"1a383a91d5e26775f54330e73650e2b1","url":"assets/js/3ded73ff.12c90c93.js"},{"revision":"3052622176583c137d1d3e28e2da25be","url":"assets/js/3ee261d1.5c44e743.js"},{"revision":"6af4b8f19620ef13e2a0eff573a9ea75","url":"assets/js/3f4524db.1ebcad86.js"},{"revision":"cb157a4fe5163deeb8e403d267e74045","url":"assets/js/3f767828.03900d73.js"},{"revision":"0031e0ad64a764d35ea4d8e3287ec5f7","url":"assets/js/406c8a9d.55d0237a.js"},{"revision":"48924c2bed99b804edeb6544814342e3","url":"assets/js/40ad00af.a745e2f4.js"},{"revision":"2d2ac043d3d806d0d19e4808a5582c7b","url":"assets/js/41319489.3d56848a.js"},{"revision":"825df9762b219cedd0619eddd75e7c6d","url":"assets/js/440afbe8.d43428bb.js"},{"revision":"6110ef8920e7a6b94c3cfc872fbaf8f1","url":"assets/js/4948dd86.ebaf2b0d.js"},{"revision":"507812aa3b1dfb75fab3a7faf3548227","url":"assets/js/4972.c81afb61.js"},{"revision":"9f4bc7484ea90fb8c48ace0533b53a58","url":"assets/js/4dfd6c1d.ba0bf407.js"},{"revision":"ba760b1437f3d687d35f1ae09ae0101b","url":"assets/js/4f176d96.bc0445d1.js"},{"revision":"4a3443b4705754828b90fcb8c3f242a3","url":"assets/js/5131.becf9657.js"},{"revision":"74c78c382ce8fb165ec29996c450fad8","url":"assets/js/525b50ef.bdf17df7.js"},{"revision":"c7955eaa99b995db42d882fe49b5f6a1","url":"assets/js/527dec92.7b0114cf.js"},{"revision":"e3361c75993f821fc977325a4aa07b8f","url":"assets/js/5283.84f917b8.js"},{"revision":"644fff6be9d59bff4b1dc393cdf1a5b1","url":"assets/js/531ebcfd.2ce68ff9.js"},{"revision":"56fa15b5847ca2e05b0c2babbe51d8db","url":"assets/js/53ad85e5.df2aeee4.js"},{"revision":"cc0dac1d1c77934842b46171f8aa4b92","url":"assets/js/540e2458.6c8bc805.js"},{"revision":"d0755b60214f1de9d8755e6f35fe6dbc","url":"assets/js/5419b405.acff8900.js"},{"revision":"64777f6579048e0239df8d949305ddd4","url":"assets/js/54266f02.4d9de2f7.js"},{"revision":"6a5a49f3ef9f056a9bff7d7ac76db20c","url":"assets/js/54d663c4.cc4c5ec3.js"},{"revision":"352f14ecbef22422a06a1f34949bde28","url":"assets/js/5571c435.f296ed81.js"},{"revision":"f99b07b4c73f0860c2dbad26e0cebbd8","url":"assets/js/55960ee5.fb0a21e1.js"},{"revision":"7aed9ade4d07e67a4039d0a5d731d1bc","url":"assets/js/559fd16c.1a2c79ac.js"},{"revision":"13e78be59f8cc0f469f934adf5d071c8","url":"assets/js/56140ec3.aa16553f.js"},{"revision":"9a0b9b611315939065478a0fcc1d3536","url":"assets/js/5631e250.6e16bfed.js"},{"revision":"dee486c079cb957b0cb22ec367b058ae","url":"assets/js/56c13682.348623fa.js"},{"revision":"f6ae4ee279167f401a04393c1869b31d","url":"assets/js/56d8ed21.d82fdbf5.js"},{"revision":"f6bd7201da831b99db7000de2858dc83","url":"assets/js/572dca06.34453c36.js"},{"revision":"3c708540bb0cec051a9fa3abbb898ba1","url":"assets/js/57f934de.cca8b789.js"},{"revision":"66bea3ddaade0d5975e3718e59c0b90c","url":"assets/js/58a14cfa.4b73b451.js"},{"revision":"783fa460527d917026990d27e4084f48","url":"assets/js/5a30a154.570437ad.js"},{"revision":"3495a5d08af5d0e1442137aeb39d9697","url":"assets/js/5a35f648.9a9354e5.js"},{"revision":"4659232f1eafe562f802649193f7ffa1","url":"assets/js/5a6e6122.6f8be6b0.js"},{"revision":"cdc8940d03152e885557dde3d7f68783","url":"assets/js/5a8b4b95.f34c9098.js"},{"revision":"ffc090578099ac4d566e3703e9f59f29","url":"assets/js/5b3e5d8a.04eb54a8.js"},{"revision":"93fa8eed06ba659f85f29762c809ceb5","url":"assets/js/5ea6720a.2f4d1b41.js"},{"revision":"01262403ff76f8f1e1bea7c14e84d69c","url":"assets/js/60b06fea.137837c3.js"},{"revision":"c359f307a79ae17b63e31046d0839128","url":"assets/js/6206d1d9.1d006093.js"},{"revision":"507184c7e8f0482fd97044b9f589af1e","url":"assets/js/6390743a.4f0d4f1e.js"},{"revision":"73e4b105d1d1a080428b0bee903029df","url":"assets/js/63b408fa.0bb2c6cb.js"},{"revision":"735b6009f6198ddc8182ff6131d27721","url":"assets/js/63d9d22f.38ea4bdc.js"},{"revision":"299c8583e2708bc8cba225e7065cd496","url":"assets/js/63e83aab.d0802b50.js"},{"revision":"bf3f53f237109a0412fe9bf93373604d","url":"assets/js/65b26e5c.ffab6e18.js"},{"revision":"1d2769ca5fb23e7e9b9e7fe23fc2bf57","url":"assets/js/65c9e0ae.ebdfa260.js"},{"revision":"39fd66653414f1903dd65c1e95bee738","url":"assets/js/6688bcad.9a4caf63.js"},{"revision":"b3578bf4c7600b4407b029afd41d62b1","url":"assets/js/66e51ced.ef10e50a.js"},{"revision":"0d0b1f0a61493a8724d1da6eb6ba9531","url":"assets/js/68072e60.a728ad0e.js"},{"revision":"9afc0c86a42e822dab67849890b18125","url":"assets/js/6bc546f5.abf3a51f.js"},{"revision":"a4984e9fde24ba1c00647fccce7a8142","url":"assets/js/6c0d2a46.266df3e8.js"},{"revision":"43d1de18e3d778956ec592ce93028d9e","url":"assets/js/6c2a56a0.0484f749.js"},{"revision":"ffe01c52855ff2cbe2227b14cad9b9b4","url":"assets/js/6c97cf4e.f5ef5980.js"},{"revision":"827998a2886f432dfc54ba8ab83ea880","url":"assets/js/6cc98c46.c8ba57de.js"},{"revision":"836adea3bea4167b91d2730e27bacb71","url":"assets/js/6cd46a4e.1c8b2317.js"},{"revision":"38fbe50bca93daa9ad6910747e341593","url":"assets/js/6ed14791.030db249.js"},{"revision":"7da239eca405f05952ae2cdef65fbc18","url":"assets/js/6ed94677.32bd3a92.js"},{"revision":"b454000bec88c88461a3c9388d49855b","url":"assets/js/700294bf.9bb8fd56.js"},{"revision":"34b1332d3518a81ede8c7f1ef1053027","url":"assets/js/715609aa.aa16fe1d.js"},{"revision":"33b593506c638c1e47ddfc1aeacf9863","url":"assets/js/71605500.43024206.js"},{"revision":"489941b7b9e4ddc391f8539ab0b414da","url":"assets/js/7210159a.3bc4d13d.js"},{"revision":"a80e402bf98de01308f5a854817e4492","url":"assets/js/7210a078.ba096ef6.js"},{"revision":"8d99004f0f562c07a5673bbc441a2544","url":"assets/js/72ae391e.53f1abc9.js"},{"revision":"ae6ae5d5ffff562acb7e9ae657e50c59","url":"assets/js/75fd33e3.37f8b180.js"},{"revision":"fe57a041eaeffce746173824e93f6ccc","url":"assets/js/7793169e.1e18899c.js"},{"revision":"b78ca33b819e44ff85a7ce17f5416c42","url":"assets/js/77dadf86.8e33c198.js"},{"revision":"7224e4918167136161b4ebe1f58af79f","url":"assets/js/788ad50c.37c66af1.js"},{"revision":"3fb04ce8d963a57aa7f9142efeffb303","url":"assets/js/78b4ef02.e88ca6e8.js"},{"revision":"d7c1edab7faef9b6143cc35d700609ca","url":"assets/js/796f3f94.e35970e8.js"},{"revision":"5c2bd2e35f77d72a788e2c41c5785e54","url":"assets/js/7b5fe785.9bee3ecf.js"},{"revision":"c6742feb23ad5991a72c015c35edec93","url":"assets/js/7d0578a8.8db38880.js"},{"revision":"f69f72b4ec74026e33919bbca89633a6","url":"assets/js/7e6a2ab4.8b4396a7.js"},{"revision":"df1ff0169716a55e40127a694892b184","url":"assets/js/7ecdf80c.c976ea7b.js"},{"revision":"7d8a4da8d1b66cbeed5ac039a59464ad","url":"assets/js/7f2c5ff6.34262758.js"},{"revision":"c53ab92e3a597ea6194e9418cba3fb6b","url":"assets/js/7f756d44.c78c08a1.js"},{"revision":"0427f2d3dc071a9f260e18271bcacfeb","url":"assets/js/81698897.8edf0259.js"},{"revision":"ff8dd6f52166bcab050dd8c93a0c570d","url":"assets/js/828bef50.a1e05cc9.js"},{"revision":"7e0c40d4d36db9a19f87718561b604ab","url":"assets/js/85cd31fb.c23f5398.js"},{"revision":"d504d9846922eae8524afc124540b86c","url":"assets/js/85dd5025.0af8f21d.js"},{"revision":"ce160c2fc9df1cfe09d1c81b0d8a5da6","url":"assets/js/85f13097.59d43aaf.js"},{"revision":"051eb2633073020ddafc9d2cc5a2f9ce","url":"assets/js/8955033b.8e8068da.js"},{"revision":"34c357f2347575549ac7212ba047f413","url":"assets/js/899c71e3.ba0248e6.js"},{"revision":"ffe4d4ad8d6c166e7966daec6b6f941b","url":"assets/js/89cea0e1.a3cc00d6.js"},{"revision":"a5b935bb452ade6ddbfb822b82633176","url":"assets/js/8eb7ccb0.c9fe5b12.js"},{"revision":"4a85e971ced3628fa0fcbc316973c5f6","url":"assets/js/8ed8ab38.ce69bed8.js"},{"revision":"48603d7881f75fab7c6730d6b75ffc70","url":"assets/js/8ede265c.9e601b07.js"},{"revision":"446da45048ba9dd94a72a772b5fb336c","url":"assets/js/8f53c84e.cceb9a58.js"},{"revision":"eaa4c717ae53dca48f97732b73d48c12","url":"assets/js/91efa535.871b82f2.js"},{"revision":"12db34a52733ec2326593cf93941efa9","url":"assets/js/935f2afb.dfb18124.js"},{"revision":"2ffe50c09a104cb54036d50bb78dec0f","url":"assets/js/9372da8b.93827a56.js"},{"revision":"3149ebc24ff5e7b68db37af9885f4fe7","url":"assets/js/94b32a99.a64981e5.js"},{"revision":"8beb195f034531c354d4a6784e77e828","url":"assets/js/958ce3ce.f5a32405.js"},{"revision":"e019f21d8bcc087f591249dd6c54aeb7","url":"assets/js/97d195f0.cbc2a774.js"},{"revision":"7dbc342bdf1cf9d67ec1ce72c359a261","url":"assets/js/9a38f1b1.5159b53a.js"},{"revision":"08053dc8509d6f664c930114465907b8","url":"assets/js/9a3e9f3b.ac1cd414.js"},{"revision":"f6aba30d797d19d12f25d0782290289d","url":"assets/js/9a77a71c.9a8b91c3.js"},{"revision":"e6c24315dbf980cbedb7d92d1f337c72","url":"assets/js/9b238df3.363121c5.js"},{"revision":"1bfdb5546f14fc1ab5b19ed8c4a86834","url":"assets/js/9caadc55.b9d94599.js"},{"revision":"12469836d85de3acbf09d1f5a15a49ef","url":"assets/js/9d63f616.99d5356c.js"},{"revision":"693937548d59c88b6113991df28facc7","url":"assets/js/9dabd32e.1302b30f.js"},{"revision":"65125da26bcf3ca8f5acaf6c107507a7","url":"assets/js/9fb1989b.880925be.js"},{"revision":"c4faf3a45114f1b0b707105246933b81","url":"assets/js/a00377fb.1111edab.js"},{"revision":"cac4015691cfffdf4a3da3fe97d0e9d6","url":"assets/js/a0f5e28d.ed2f2e04.js"},{"revision":"4067a4136b5dce5557045f973dac6ae0","url":"assets/js/a15a0b2a.407e5a4a.js"},{"revision":"fd00615a0d60d371181a829156f711c0","url":"assets/js/a19130d1.cffc71d8.js"},{"revision":"ad986dd41c40696142040696c0d72056","url":"assets/js/a1b5c26c.c4c20b04.js"},{"revision":"b081d7e36cf084ae76088dfe91b47117","url":"assets/js/a61beeff.21fe8b69.js"},{"revision":"ba9129305190899eb8e280e66a9e44fc","url":"assets/js/a726f516.d327ec28.js"},{"revision":"04a7d9e95af19e41987f59f1907c0e76","url":"assets/js/a8ad4c70.4ee51781.js"},{"revision":"9798305c46c74291bf79bd5ad39f9f87","url":"assets/js/a8bc6dde.2cec8716.js"},{"revision":"c0dc85b6a0b459d64f03e8d37261d1fb","url":"assets/js/a8f9a901.02ca0e4e.js"},{"revision":"5e933f2018732b89e85369b95aefe5d4","url":"assets/js/a9889bc9.72444630.js"},{"revision":"23fe28acfb68b381251695f2ec3d2a76","url":"assets/js/a996e693.02ec99d3.js"},{"revision":"93ee3b3e88e67fcf5f32dfff58b03e1f","url":"assets/js/a99d28bc.a64ee77e.js"},{"revision":"b20340c8580dae8a9c76a6c1ff52c6c5","url":"assets/js/aba018d2.12481f26.js"},{"revision":"7e48861d5ffb87d5542253a3fb04c282","url":"assets/js/abe34320.8d8488aa.js"},{"revision":"87533759a6cb144e749e5e5eb6c332e5","url":"assets/js/ac5561d9.d190fe4a.js"},{"revision":"920c587162a707f34bacdaac3009f9c1","url":"assets/js/ad0066d7.24068688.js"},{"revision":"d89f7df5b6c9acb8cc49a176c127a4e3","url":"assets/js/ad5a0f3e.2e353703.js"},{"revision":"054dfcdc052113b7ce9f1c12e32c1be0","url":"assets/js/ad78f47f.f37b415f.js"},{"revision":"9222179bdcadfe8f6f8c7ccf56a7ed4a","url":"assets/js/adaf495a.d7a33141.js"},{"revision":"cc814a3154c61dff3acb2b5da1af6bbb","url":"assets/js/ae4a4d9f.9ad906b8.js"},{"revision":"ab8f49c6fdeb5438e73d3f1b5b35d4bb","url":"assets/js/aff90464.6792ae4d.js"},{"revision":"deb3be5cdf4a4faf06c076829359b786","url":"assets/js/b02e85ef.8c9b8bda.js"},{"revision":"a611df863210a57b7229eaba5403302e","url":"assets/js/b1f41763.03f34ce4.js"},{"revision":"3c6a035bb777a3a3f9ed7081bdef0ddf","url":"assets/js/b244f35b.bc53a7dd.js"},{"revision":"1d199477bb64acb33c71d84cde404792","url":"assets/js/b25f9474.5911caca.js"},{"revision":"74737f9f97b2b319eeb3fd2a3e26df33","url":"assets/js/b3f9c94f.1a149e70.js"},{"revision":"6b4b78284b1eff58e978531133ab7ee3","url":"assets/js/b4e2efd9.5c5177bc.js"},{"revision":"d9d20a083e122ddc58f6962ac6218458","url":"assets/js/b54d20df.6f0b22b8.js"},{"revision":"25a360df7c82ff3ce66adb53d7ea031d","url":"assets/js/b5b88de9.3a195b08.js"},{"revision":"81b01fc9979918580a35aa251fabf23a","url":"assets/js/bc471623.71d98836.js"},{"revision":"292224d970b0a310f96c78a3af524dac","url":"assets/js/bdd0bc28.430984c5.js"},{"revision":"6dcbf108130a9500bea056ff7902f052","url":"assets/js/bed79c07.f4023390.js"},{"revision":"2b4a5949c25bf7408fd2d53c7cc2f2d2","url":"assets/js/c067b687.10dcd985.js"},{"revision":"3714f3d896175be0a097b10ded05fc64","url":"assets/js/c08dca81.b68442e3.js"},{"revision":"3af0fa44ddf5bbdcc770d73bf66fde0c","url":"assets/js/c0c61808.8c5798fe.js"},{"revision":"3f2911d3b2770bab08faaf9a0ac560c5","url":"assets/js/c12819b1.8c955c61.js"},{"revision":"ea7287a8c2bed3c75393497183ea19a2","url":"assets/js/c150b365.3d909fe4.js"},{"revision":"96690fe51dfaed9d273865bb5f0c51c3","url":"assets/js/c19610b7.605626c4.js"},{"revision":"7b4969427b3d08670f59aaa3bb3dda9c","url":"assets/js/c327cb3a.57a29689.js"},{"revision":"a17813f918d5e7958be1d3277770d36f","url":"assets/js/c412bce4.bd9f1ba3.js"},{"revision":"0cd05f8ac5cf1fd6b0aeb167531cc5aa","url":"assets/js/c4365516.e6a9d745.js"},{"revision":"c04c044581b06648d125e10764832773","url":"assets/js/c62c0524.abb6d65b.js"},{"revision":"12bfa056224175452f47782d1995f6c8","url":"assets/js/c646b7a0.a572bd4b.js"},{"revision":"adcb7cb7dcdad34118973f64ed3d33ba","url":"assets/js/c6c68afe.eb35a662.js"},{"revision":"d97506eb09793b9ba2331c7b503ddeae","url":"assets/js/c8773ca1.a31c137f.js"},{"revision":"68df9aaae713736a1d430de2502d2793","url":"assets/js/cac34802.aa473898.js"},{"revision":"d7a0667f88f85234cc6209effd91fda0","url":"assets/js/cb6da118.b2fba4aa.js"},{"revision":"e9e81c633d94d3e22d7c8f4cd0a37678","url":"assets/js/cdb3ac36.5f7e658a.js"},{"revision":"5aed27427d70f8388e0ed13c1fb33ab5","url":"assets/js/ce3bca1c.3b8081f0.js"},{"revision":"3bd572656929d21ea42c4a6d21e81634","url":"assets/js/cf8a05db.88dae27d.js"},{"revision":"0396d16dd57022f878b56a3fa461d3a3","url":"assets/js/cfae828f.53ef2b94.js"},{"revision":"25b8a7c5f914b9279fed2e11ed2d14da","url":"assets/js/d0bd8561.8a2ebfcb.js"},{"revision":"fdfcdadc61cd6e7d0458f687a4f8ee4e","url":"assets/js/d2918bca.aeb854a2.js"},{"revision":"a9a9fc1335c47c070d47bb5e2a330e8a","url":"assets/js/d29cdc1a.f507512c.js"},{"revision":"c5a8c970985155f046eacf028983e149","url":"assets/js/d2ebbae2.3289d804.js"},{"revision":"275f5ef4879f98ee9f4ca6d265b8d006","url":"assets/js/d47d2f43.7aef7e6d.js"},{"revision":"011be6ef3857072abd810c68cac7fa88","url":"assets/js/d4e49632.8420ee62.js"},{"revision":"f898172fd8e05d6b039b1453202b77e0","url":"assets/js/d64fb844.3de0f110.js"},{"revision":"5c8bf60016b01606f47bda7bca05ef19","url":"assets/js/d70561c2.126fd592.js"},{"revision":"0d0f0453ee274e4bc4914a0f64b0768a","url":"assets/js/d717a7dd.be9a8d37.js"},{"revision":"261bee4e3990e41af96d54a7bad4f52e","url":"assets/js/d81c7a5f.04d96486.js"},{"revision":"280b972c389f3f8d2d8b8e306d09da8c","url":"assets/js/d8c1a9a5.5ee8ad40.js"},{"revision":"98e1cf2dedb1fdaf3284b3bd2b33eea7","url":"assets/js/d9309e8b.8c1566d6.js"},{"revision":"f2bd6989df1ea7fdd38985ebfd3a0e50","url":"assets/js/db05d509.57ec9e84.js"},{"revision":"d04087c4d210913011fab2982b6e2b7c","url":"assets/js/db0c504a.41c0f917.js"},{"revision":"a330b360ebc1119561cb38ad1246eeab","url":"assets/js/db48f004.e7a030fd.js"},{"revision":"0d2becee6e4c612189952d1550d0a7b1","url":"assets/js/dc1f7c1d.f5b1201c.js"},{"revision":"b8d1b07c3e16cb02d0c66ab792857d96","url":"assets/js/df203c0f.12496ac4.js"},{"revision":"6ce55570e4141059113a85dec0b08f6d","url":"assets/js/df2213e9.b5a479e4.js"},{"revision":"82219dfc23cbd8428f7f71df8df9cb17","url":"assets/js/df5a28a5.c88e4b74.js"},{"revision":"882a79b355fb339002d9d2c16259df62","url":"assets/js/dfd667ca.a6e1b31b.js"},{"revision":"2fc5d2dd39a7a80466a42713319a967e","url":"assets/js/dfd7e537.5b3198fe.js"},{"revision":"f53d47168ea3aa13e93afb67d9223003","url":"assets/js/e01b72a1.90ff4703.js"},{"revision":"8e549312107c73fc72fd71b38e7e6e91","url":"assets/js/e061fa96.1f17a45b.js"},{"revision":"4a2cbb7ef8cb82477c4de10034d5a782","url":"assets/js/e0f4d198.f0b6b49f.js"},{"revision":"6a7d91ab9634778e33e2499994fff391","url":"assets/js/e149b0ac.1b2bab81.js"},{"revision":"aa75cac250355be62f0cba390411dd15","url":"assets/js/e3473e72.6fa99b24.js"},{"revision":"621356a95cb7b91a7a919d95a09234fb","url":"assets/js/e3e0f0e5.c019a83d.js"},{"revision":"c61d070ce4feaa8f49660aaa27c5f2af","url":"assets/js/e4092fbb.223da6f4.js"},{"revision":"ce6abc2b2d0c3f85895b87126e1b1dbd","url":"assets/js/e8367a44.128db3df.js"},{"revision":"177e710d1b5971694ef2d801126657bb","url":"assets/js/e87ddcc8.c19a742e.js"},{"revision":"9a6381cb77a431e99c17de420fe99dc0","url":"assets/js/e98b71bb.d9fa25b9.js"},{"revision":"a92c3d6485c679ed66b467e950940843","url":"assets/js/ea01aec8.e51ab9d1.js"},{"revision":"d364102a7eba733eacd36c3e6cf39a80","url":"assets/js/ea434370.76ca2f5b.js"},{"revision":"fd8c66f736da76a288036815520e99d9","url":"assets/js/ead2252b.5e28e72c.js"},{"revision":"aec4abe230bbf118bbeedba71d3ddc68","url":"assets/js/ebe98788.8f2c3a80.js"},{"revision":"7e0d3c54b046cf4b1af1382e91d1e40a","url":"assets/js/ecfa339a.2c50cf7a.js"},{"revision":"9988d294b2dbf16d81e44cdf95f0ba39","url":"assets/js/ed76f4fe.50a343b9.js"},{"revision":"a0d6ef357c34d9b40a39e88f2f7c5947","url":"assets/js/ee0ebd45.3f0de471.js"},{"revision":"299048da22d8a8d83892b9286eed600d","url":"assets/js/ee1b8e13.2bde3847.js"},{"revision":"d3c899f3a44937531117aabcd7421f25","url":"assets/js/ee4a5a68.3addacc5.js"},{"revision":"9fbe343c8f15f3df433a3a391fbe8457","url":"assets/js/ef19120a.0430679b.js"},{"revision":"24968295b364010a94969149a6329868","url":"assets/js/efa2ac5f.91d92bb8.js"},{"revision":"1cb70e8a71a19c48864e5da6fb103281","url":"assets/js/f03351fd.35a02db1.js"},{"revision":"475fb3fac0d057307bc5a77e96bff066","url":"assets/js/f09a3766.69e04d91.js"},{"revision":"cb8d10452bc0278ac7acac2801db4c74","url":"assets/js/f215c7fb.07be2289.js"},{"revision":"374e604142eba8755dca43ed857f2119","url":"assets/js/f3605c2b.fb3047c4.js"},{"revision":"8ff062a95dd28c1807069d6584e3a516","url":"assets/js/f41ee934.cba96bef.js"},{"revision":"9527930f3e50a6e5e9f95f184d715eda","url":"assets/js/f5308358.fa4b760c.js"},{"revision":"ada2cd8ac3ea4e4c2fbb2646d94d0556","url":"assets/js/f58ab962.ce35cbc2.js"},{"revision":"c475a63a393176cf2436ef1fdd843fcd","url":"assets/js/f59457ae.ecf37e4a.js"},{"revision":"49c8a2b40fd63272a78aee783136cc4d","url":"assets/js/f7dbce41.393e2438.js"},{"revision":"c4602c979bf52954c7f17e5081ba8f00","url":"assets/js/f80dc1bd.45d0b7fd.js"},{"revision":"b36fa62d0cf858757a3c38a42c2c8338","url":"assets/js/fb2159c1.46a76ce0.js"},{"revision":"64ce2bbb97e715c7af0f08630c121355","url":"assets/js/fb2e5caf.cd8901a9.js"},{"revision":"0824f16a3d2d2b53576d8e5c87babbba","url":"assets/js/fcb4230e.acbb949b.js"},{"revision":"4473e9332a19823778818b2f2814f3e7","url":"assets/js/fd745aac.39277cd8.js"},{"revision":"4063d3fa947fd7cd407d6e46264840b1","url":"assets/js/fdb2d6f4.5cf734f9.js"},{"revision":"b540b03efd45febe3e532a6365d06278","url":"assets/js/ff4c89c2.4b298518.js"},{"revision":"f01311f065737aa0c205fd7cbf4d3a66","url":"assets/js/ff60b09b.4322c786.js"},{"revision":"16f06a7896c0232b5e205b0f30d94649","url":"assets/js/ff646237.e323d0c5.js"},{"revision":"23a5078bd0a8bb1a68a4a91ac1ccda46","url":"assets/js/ff8924f1.6d1c7133.js"},{"revision":"068bd4a4db1b4e2cb6fda2f14172d5bc","url":"assets/js/main.d57cf4c0.js"},{"revision":"5dc88b455422b3ad975bd3a8b4236f35","url":"assets/js/runtime~main.219d5a4c.js"},{"revision":"e11822c9d4d3b4062cd9edc599d74e8e","url":"byod/android/e-mail/index.html"},{"revision":"30716da284bb8516182f31fc66191ba5","url":"byod/android/index.html"},{"revision":"d4fd37d38e0d6b7ee56fe6a156f8d779","url":"byod/android/intern/index.html"},{"revision":"61f9942326d061c86d1ad91f9b4a0561","url":"byod/android/onedrive/index.html"},{"revision":"d3f6d7a13c085c83e1ef160bb2938e54","url":"byod/android/qrscanner/index.html"},{"revision":"9c072974009c65f6035283a18fbd8655","url":"byod/android/teams/index.html"},{"revision":"5c1704fc9cc495904a32a79bc7061c63","url":"byod/android/wlan/index.html"},{"revision":"fe4766affede5d77826e06664be21407","url":"byod/index.html"},{"revision":"c28654568be08b3e42b797b086ba0fbe","url":"byod/ios/365/index.html"},{"revision":"865e94a6937ef1ff6544bf0f5a000c00","url":"byod/ios/e-mail/index.html"},{"revision":"829281d874fe41602b11a424a5fbc24e","url":"byod/ios/index.html"},{"revision":"90744ee5c760af86bd92566a32920d72","url":"byod/ios/intern/index.html"},{"revision":"35a9fd5033aa5fd6c61d74d96ea52b15","url":"byod/ios/onedrive/index.html"},{"revision":"44bf4395bae4ceb23a8b701fcdc7ff30","url":"byod/ios/qrscanner/index.html"},{"revision":"9fd790de28991dac4e633aee3df03b7e","url":"byod/ios/teams/index.html"},{"revision":"2343ec95c51f70c0bb3374c451566d20","url":"byod/ios/wlan/index.html"},{"revision":"9e5732151d6bbce6594650220e7d1251","url":"byod/konto/index.html"},{"revision":"db69f8ab1efef0a170a6b1eba67765d4","url":"byod/linux/drucker/index.html"},{"revision":"03c56fa0df2f064a459c27a8e39af895","url":"byod/linux/index.html"},{"revision":"ffdb60ea85ca435216930d3bc78d1e36","url":"byod/linux/onedrive/index.html"},{"revision":"0362b94f5c34fa4ee7cad08014e1ac53","url":"byod/linux/repo/index.html"},{"revision":"4067648264af739ea72e085556836913","url":"byod/linux/teams/index.html"},{"revision":"c84d2906236d5457d22e67ba51521737","url":"byod/linux/wlan/index.html"},{"revision":"142e2b74204f73b9d080bb54c75e691f","url":"byod/macos/365/index.html"},{"revision":"a72b515af8eea827916b1756ec0378a3","url":"byod/macos/drucker/index.html"},{"revision":"d0e4668e67f10e799a5f742755ca3f76","url":"byod/macos/e-mail/index.html"},{"revision":"2ede9205c9a333dd7ffd813e857659ca","url":"byod/macos/index.html"},{"revision":"0deacf6e98de3ac59ddbc566a5533a5b","url":"byod/macos/onedrive/index.html"},{"revision":"336ff3aa718b27c8744a226b7fb50e22","url":"byod/macos/teams/index.html"},{"revision":"d05510a84eb2c9e1a99ccbd9d69980e7","url":"byod/macos/updates/index.html"},{"revision":"9fcdbf8f5c0247fa267dcfd34a8ba3fd","url":"byod/macos/wlan/index.html"},{"revision":"416669780a4e73962b66c7e17cf5bb8a","url":"byod/mail/e-mail-einstellungen/index.html"},{"revision":"b3579b8c6c507f935beb89f048732c65","url":"byod/mail/e-mail-vergleich/index.html"},{"revision":"80ad0d9ae408f345cad4480587c85525","url":"byod/mail/index.html"},{"revision":"dc5393dcaeae1de4be6869ba8a60de2d","url":"byod/mail/outlook-web/index.html"},{"revision":"888cd21ece203fcb4d30775a62988ecb","url":"byod/mail/thunderbird/index.html"},{"revision":"281af098220d159a58e8c58039c863de","url":"byod/windows/365/index.html"},{"revision":"42de2114649204fb3212161a73996798","url":"byod/windows/drucker/index.html"},{"revision":"d9415f4b0b9a87223839f5d1fcdd9ae9","url":"byod/windows/e-mail/index.html"},{"revision":"ecee548a4afef9af8c7938a4d5156418","url":"byod/windows/firefox/index.html"},{"revision":"40db4815eec65916218e9234fe3058f0","url":"byod/windows/index.html"},{"revision":"7a3db830a71385c66e369ac194a48dc4","url":"byod/windows/onedrive/index.html"},{"revision":"c220b0c94d878aa037ea0cb294c9e6a4","url":"byod/windows/pdf/index.html"},{"revision":"25134b130227aaf76c1b5faea7a57c3d","url":"byod/windows/teams/index.html"},{"revision":"032f5d02d64b07ba0ffca1d2586e5992","url":"byod/windows/updates/index.html"},{"revision":"f8c1d7667f915ab352265c0e800240d6","url":"byod/windows/wlan/index.html"},{"revision":"2f80ee8e2c748d233a810129fc5b7990","url":"dokumentation/components/index.html"},{"revision":"0c5b72d0888bf76665cdc17c2f4c4708","url":"dokumentation/index.html"},{"revision":"67b2c1ca25d4c61cb2da27084b9bf632","url":"dokumentation/markdown/index.html"},{"revision":"ed52d5f7cf6e85f34f1a0a9a71e3b258","url":"dokumentation/md-extensions/index.html"},{"revision":"d0c97192301dadd95b4d96ae12614fe1","url":"index.html"},{"revision":"cdafb253628e92ef1c56f491d70e5de7","url":"infra/austritt/index.html"},{"revision":"ad7c2bd9dec9f9eb01d39ebad8410fc4","url":"infra/email/dateien-versenden/index.html"},{"revision":"c7aefae38c00e08b2f85ff1c0f4d093e","url":"infra/email/empfaenger/index.html"},{"revision":"be41af99d71a9077a2edc83f2868d2b0","url":"infra/email/index.html"},{"revision":"52752ef2e3fdc76aa23db056e7034780","url":"infra/email/netiquette/index.html"},{"revision":"6f5d29cc165ec826242ed39d29431f22","url":"infra/email/signatur/index.html"},{"revision":"e2905caea65577cc591f8f5862aadaa9","url":"infra/geraete/beamer/index.html"},{"revision":"5f6faeec29c78f8e6d513ec9fb36d089","url":"infra/geraete/drucker/druck_lul/index.html"},{"revision":"c774d1b3cd02266a6d4e3f8eb63849ee","url":"infra/geraete/drucker/druck_sus/index.html"},{"revision":"c66beb7b32c7155e819e5ea41aa4080e","url":"infra/geraete/drucker/index.html"},{"revision":"be347051f9c0e16c66738bb796a5f984","url":"infra/geraete/index.html"},{"revision":"b180921fb315fc71e475ca135dd0c93e","url":"infra/geraete/konf/index.html"},{"revision":"d5ff19079c11c7e9080c0465de54c14c","url":"infra/geraete/konf/jabra/index.html"},{"revision":"781ad1644c2e5391f9823512c7a82a1c","url":"infra/geraete/konf/logitech/index.html"},{"revision":"ab665a77b5d19b16fcb671771ab28518","url":"infra/geraete/konf/owl/index.html"},{"revision":"491610ee78ac8a9a9f4bf08b308a02cf","url":"infra/geraete/stehpult/index.html"},{"revision":"889dd415f45b55df06bce28c21b37672","url":"infra/geraete/visualizer/elmointeractive/index.html"},{"revision":"b69c5638fe3fc5b71983a3ba8fa65c45","url":"infra/geraete/visualizer/elmol12f/index.html"},{"revision":"09980a7268b831d29dc9a03bf7352846","url":"infra/geraete/visualizer/elmol12id/index.html"},{"revision":"38f36e2ed030849106167b34c3875095","url":"infra/geraete/visualizer/elmomo1/index.html"},{"revision":"1838def8b8ef3a019096dfa878b56252","url":"infra/geraete/visualizer/index.html"},{"revision":"e44fb32bdf614395cdaf10c6b0ba3419","url":"infra/index.html"},{"revision":"c01cd7d2e6aba0e7feb93ce86e493b8f","url":"infra/konto/index.html"},{"revision":"fd98994127387eb01ec565611f5cbb1c","url":"infra/mediothek/ethek/index.html"},{"revision":"98fb31392d8fe0763ffc8a43beaa7150","url":"internet/favoriten/index.html"},{"revision":"36bc5f1ca2ffe81a1c0267e44e069675","url":"internet/index.html"},{"revision":"1a88eea30674bd640d376c71223903c1","url":"internet/internetadressen/index.html"},{"revision":"64d336ff1ce657f508d20ece6adb28dd","url":"internet/lizenzen/index.html"},{"revision":"c8cc4d533dff94e7afc66026162683c6","url":"internet/quellen/index.html"},{"revision":"fd5a7760f86a1a6e3a9e41a8755f4a3d","url":"internet/recherche/index.html"},{"revision":"bea40f146994aaae0383435907bf4cd3","url":"manifest.json"},{"revision":"47002355009edd8a7b72dc34f696017f","url":"microsoft365/bitlocker/index.html"},{"revision":"26d9e1c5a37e7764f65a2ff8f425a857","url":"microsoft365/index.html"},{"revision":"b64256a93e08464b20c20a6d8f9eb256","url":"microsoft365/onedrive/index.html"},{"revision":"5e06337d9d5a62747c5ee549523c6529","url":"microsoft365/onedrive/sync/index.html"},{"revision":"559e2c68a1891b3198a2f411eaa69a6a","url":"microsoft365/onedrive/teilen/index.html"},{"revision":"adbc04c0608a4a73a1f270cc7b608464","url":"microsoft365/onenote/index.html"},{"revision":"e1f02852136d1f13a949382ba9a91d1a","url":"microsoft365/teams/aufgaben-l/index.html"},{"revision":"cb4b2e22720c1f3b593d1713cb229caf","url":"microsoft365/teams/aufgaben-s/index.html"},{"revision":"1fb2df31d833c9a99970a963eaf7de7a","url":"microsoft365/teams/dateien-hochladen/index.html"},{"revision":"cc8718fa08d5c853d17911466930c916","url":"microsoft365/teams/externe/index.html"},{"revision":"850951846d98b444802eacbcd0a2d4e2","url":"microsoft365/teams/gruppenraeume/index.html"},{"revision":"30dee38ce42ec2345fa847c67e474829","url":"microsoft365/teams/index.html"},{"revision":"744f2a836d6a3e806b092230ebe2fe63","url":"microsoft365/teams/layout/index.html"},{"revision":"4704a12eff4749d0347a91a06e6312b4","url":"microsoft365/teams/ton-einstellen/index.html"},{"revision":"da068b31e4c6d8d1109f2b189e92669c","url":"microsoft365/teams/ton-video-teilen/index.html"},{"revision":"960ca68a03ef82ed8f653e7b6b724d9b","url":"praesentation/allgemein/bilder/index.html"},{"revision":"f07b6987a3716879e33599cdb7ddce35","url":"praesentation/allgemein/erstellen/index.html"},{"revision":"ba43cb52b89e15ceb833cda4e4775740","url":"praesentation/allgemein/index.html"},{"revision":"c603dc6a1148f8b9b315f0d9712d2e0c","url":"praesentation/allgemein/praesentiertipps/index.html"},{"revision":"dc7c0f3e0c7f80bd3d517a3c056330cb","url":"praesentation/allgemein/zwei-bildschirme/index.html"},{"revision":"ec55282c6cb872ca7f40a181ce946d00","url":"praesentation/impress/animation/index.html"},{"revision":"e8b8f0c8cef361e79e52999ba11277ce","url":"praesentation/impress/aufzaehlung/index.html"},{"revision":"69cc8b645e110cd05f71223ecc2c214a","url":"praesentation/impress/drucken/index.html"},{"revision":"fb765d23e54b96aa2b7ead12be9ced58","url":"praesentation/impress/folienlayout/index.html"},{"revision":"0e898813ff4e30770689734c3d91b65c","url":"praesentation/impress/index.html"},{"revision":"9dafe07f908943e311d316b8393a6abd","url":"praesentation/impress/master/index.html"},{"revision":"5ce6f70fb4a73983b7754d00b9cda4e3","url":"praesentation/impress/notizen/index.html"},{"revision":"72a2c5083d2d56321caf765be055f1cd","url":"praesentation/impress/referentenansicht/index.html"},{"revision":"a748199d945256eaac4a92c90121886f","url":"praesentation/impress/videos/index.html"},{"revision":"e3195bf2a81541fc0acab05edbd73dcc","url":"praesentation/index.html"},{"revision":"1e5b34d3b809951841c44a99385f1049","url":"praesentation/powerpoint/animation/index.html"},{"revision":"3a15e4f3d0435eee05981a0b4ce32239","url":"praesentation/powerpoint/aufzaehlung/index.html"},{"revision":"ab475e917d173cef623029428fc498a1","url":"praesentation/powerpoint/drucken/index.html"},{"revision":"85384aa6f4afa59eb6decba04d71532b","url":"praesentation/powerpoint/folienlayout/index.html"},{"revision":"ce73ed5dd2dd772dc8242dd116176262","url":"praesentation/powerpoint/index.html"},{"revision":"4f3acb9af1e694d9b364767d8bb75338","url":"praesentation/powerpoint/master/index.html"},{"revision":"010f24368b6f548a980211a5c1db67b9","url":"praesentation/powerpoint/notizen/index.html"},{"revision":"41b92ba7eb18a17d719b5c6ec1e4c027","url":"praesentation/powerpoint/referentenansicht/index.html"},{"revision":"733cf5fcec13abb4e4596c1cec9cdf28","url":"praesentation/powerpoint/slidecast/index.html"},{"revision":"88962201264ee29446744ccdd2359b93","url":"praesentation/powerpoint/videos/index.html"},{"revision":"9453171db6db7e5ceafefb2d1d2382e6","url":"praesentation/praesentieren/index.html"},{"revision":"c91bf3754ce09080780f2665eb6a4e1e","url":"search-index-docs-default-current.json"},{"revision":"4d61b301f96f4afadee1e793e1fb9dfc","url":"sicherheit/antivirus/index.html"},{"revision":"1ca67bb2d3df740dae457fa8bd19ba3e","url":"sicherheit/app-permissions/index.html"},{"revision":"b53c76159c7232a9e1304bfdfc1fcb51","url":"sicherheit/backup/index.html"},{"revision":"7c615f5e2ece19696537b7f26ef2cb54","url":"sicherheit/datenspeicherorte/index.html"},{"revision":"c5ba101bf6308c9d22a06be9d29f6bcd","url":"sicherheit/do-not-track/index.html"},{"revision":"e66cacedbcd7908ff6b89d4d7f948e91","url":"sicherheit/downloads/index.html"},{"revision":"42e636e12ef644885683eb3303f79168","url":"sicherheit/email-attachements/index.html"},{"revision":"b1395dded99e59d9771090ad9cd7f10b","url":"sicherheit/filterblase/index.html"},{"revision":"8c588c18d5adece35e3dd2bac7233f05","url":"sicherheit/index.html"},{"revision":"9788d2ab6cfafba7e82456d8c9c47927","url":"sicherheit/internet-hibp/index.html"},{"revision":"57b0c76f78e41767dc4c38469bfe5dfe","url":"sicherheit/internet-passwort/index.html"},{"revision":"03487e1e0b81dacbd864b9d67e13df8e","url":"sicherheit/phishing/index.html"},{"revision":"e3f3982f2334f4095fbd79de55833f9b","url":"sicherheit/tracking/index.html"},{"revision":"4a2c29bbfc1c9f5260c5afabb91de5af","url":"sicherheit/updates/index.html"},{"revision":"1f004b0c0d893a6f02f6267e9288519d","url":"sicherheit/zertifikate/index.html"},{"revision":"27912958defeea082c1b6546a05c38aa","url":"tabellenkalkulation/allgemein/arbeitsmappe/index.html"},{"revision":"644007e1e914f0293f5f26dcb20e22a4","url":"tabellenkalkulation/allgemein/aufbau-diagramm/index.html"},{"revision":"41111410786eceaa7d8bd6d6fcb9fc1f","url":"tabellenkalkulation/allgemein/datum-zeit/index.html"},{"revision":"8457ba8338e4d3118fe1006f24249538","url":"tabellenkalkulation/allgemein/diagrammtypen/index.html"},{"revision":"461cafacab0bb6b3a7222799359a3d5f","url":"tabellenkalkulation/allgemein/index.html"},{"revision":"fe5f3ac53f3281f6499e161edf41d268","url":"tabellenkalkulation/allgemein/punkt-linien-diagramm/index.html"},{"revision":"1e545e3d602d8af4f4c0567675cfef11","url":"tabellenkalkulation/allgemein/zellinhalt/index.html"},{"revision":"eca9b49dce25be23cf11f3d240073ee0","url":"tabellenkalkulation/calc/achsen/index.html"},{"revision":"7acdfb9ab01acfe5b43f0cd4756e8a6c","url":"tabellenkalkulation/calc/achsentitel/index.html"},{"revision":"2288b21b237f636ec5327ff0eb6bb00c","url":"tabellenkalkulation/calc/automatisches-ausfuellen/index.html"},{"revision":"773603e00532f90eb26d8b247075bbbd","url":"tabellenkalkulation/calc/datenbeschriftungen/index.html"},{"revision":"f807c1599d41f45809a5168d76206be8","url":"tabellenkalkulation/calc/diagramm-erstellen/index.html"},{"revision":"98c9319b02642c48009622d1bdbb1521","url":"tabellenkalkulation/calc/diagrammtitel/index.html"},{"revision":"0955f4769c8718d24cb300567807e6d8","url":"tabellenkalkulation/calc/formeln/index.html"},{"revision":"9f8244fce23fb09003d06b63c87df147","url":"tabellenkalkulation/calc/funktionen/index.html"},{"revision":"34ee7a9d33cfe471f1aaf3e4266568ff","url":"tabellenkalkulation/calc/index.html"},{"revision":"13e9a994f263d7b86b4c37f1ccef33c9","url":"tabellenkalkulation/calc/sortierung/index.html"},{"revision":"0f886acfd040b17a5b90648725b620c4","url":"tabellenkalkulation/calc/weitere-funktionen/index.html"},{"revision":"d46b85baef121451fdcbc7721128bca0","url":"tabellenkalkulation/calc/zahlenformate/index.html"},{"revision":"ec3f8ad28383166d82aa4c69e03e5b5b","url":"tabellenkalkulation/calc/zellen-benennen/index.html"},{"revision":"17c5190c87e6beb7f6fbd47cbb35a005","url":"tabellenkalkulation/excel/achsen/index.html"},{"revision":"0aaa52260555ad58ba21bf18290d210d","url":"tabellenkalkulation/excel/achsentitel/index.html"},{"revision":"2dfc166bccf037d5717108cf668a22fe","url":"tabellenkalkulation/excel/automatisches-ausfuellen/index.html"},{"revision":"846f71765958610a738cdb431eff3c59","url":"tabellenkalkulation/excel/datenbeschriftungen/index.html"},{"revision":"604327bb3bc159515d63b62e5ea2871a","url":"tabellenkalkulation/excel/diagramm-erstellen/index.html"},{"revision":"f89e617230d3e4741e8687b9892cef86","url":"tabellenkalkulation/excel/diagrammtitel/index.html"},{"revision":"3889a74c838bf50e176234d34696b860","url":"tabellenkalkulation/excel/formeln/index.html"},{"revision":"e259a1b4ab9bae9c4576fa8867272fb5","url":"tabellenkalkulation/excel/funktionen/index.html"},{"revision":"473aeae879abb0810b64cd6b471dda03","url":"tabellenkalkulation/excel/index.html"},{"revision":"61c4d42844ee25062b92a3725ba969c2","url":"tabellenkalkulation/excel/sortierung/index.html"},{"revision":"538ebce82ee09c0137a8874cee74f7fc","url":"tabellenkalkulation/excel/weitere-funktionen/index.html"},{"revision":"7efd8384a32f5e10a0b32f1a62e39b59","url":"tabellenkalkulation/excel/zahlenformate/index.html"},{"revision":"7136539f136cddd1c827a2c5b849239e","url":"tabellenkalkulation/excel/zellen-benennen/index.html"},{"revision":"c5fd13dd5ed0485dacc4fdfb63d90d34","url":"tabellenkalkulation/index.html"},{"revision":"10bef59e86dba18c3b6bf722e6ce58db","url":"tags/absatzwechsel/index.html"},{"revision":"4bd809aef041f45b008a5556ecad5291","url":"tags/bilder/index.html"},{"revision":"2ea162ac22151ea401cf770563460f1d","url":"tags/bindestrich/index.html"},{"revision":"a1ac7462aa4234c7e4e00a8f31a43c9f","url":"tags/copy-paste/index.html"},{"revision":"42ea92fc71e93f33525d3356df0ec54e","url":"tags/einfugen/index.html"},{"revision":"5ed03b8518ab1f9bc5872cc17bc43a5e","url":"tags/endnoten/index.html"},{"revision":"daa9ed2260308cdd8a55928bf63744b7","url":"tags/felder/index.html"},{"revision":"53c0f5f4f4cfc31c3d297d7c7878a147","url":"tags/formatierung-entfernen/index.html"},{"revision":"918ee1d9f20e3fbaa3421e1fbc90f16c","url":"tags/formatierungszeichen/index.html"},{"revision":"c69c5599a8c1f99988984ca6b2ef4fca","url":"tags/fussnoten/index.html"},{"revision":"88066148c387c8fef3cb405b90234689","url":"tags/fusszeile/index.html"},{"revision":"f556ff2292f544db41e21f2f94d55417","url":"tags/index.html"},{"revision":"5db91491b0d555c9a27e02383baa674b","url":"tags/kopfzeile/index.html"},{"revision":"0898c1a2d9685075211d46360abe0cda","url":"tags/leerschlag/index.html"},{"revision":"ced53b72c94b79b75c7539552ca726e6","url":"tags/leerzeichen/index.html"},{"revision":"b684efa105eca26f1141a9eff4dc7d1c","url":"tags/seitenzahlen/index.html"},{"revision":"8daa6c238f42845201edb2e5e4dcdc58","url":"tags/tabellen/index.html"},{"revision":"a2180b5b4d04878c7942145d1daea93b","url":"tags/textfluss/index.html"},{"revision":"e890b58f99064a57b5fb52a060857466","url":"tags/trennstrich/index.html"},{"revision":"e071eaf15a77a90eae007ddf3b64d3a9","url":"tags/versteckte-zeichen/index.html"},{"revision":"7a9133c69020c68a13e920bd9514f664","url":"tags/vuejs/index.html"},{"revision":"bb97a59c252bcfcabcfde297c9cd2d5e","url":"tags/vuepress/index.html"},{"revision":"7ee4190259cd8f4367345f5dcf4a5f2e","url":"tags/zeilenumbruch/index.html"},{"revision":"120e59106cb05a626b6930bd7ed885b4","url":"tags/zeilenwechsel/index.html"},{"revision":"fd5566a25994fd054e20ac9a7faf0690","url":"textverarbeitung/allgemein/absatz-vs-zeilenwechsel/index.html"},{"revision":"4f53b7429775b5421cfbefe8a4e83073","url":"textverarbeitung/allgemein/formatvorlagen/index.html"},{"revision":"f08236245f972729082aecb10f2fae4b","url":"textverarbeitung/allgemein/index.html"},{"revision":"ab39057612fb209c9e52fbad7ea1567f","url":"textverarbeitung/index.html"},{"revision":"6fc27aaba0ea1bf6e346b27238c8fe27","url":"textverarbeitung/word-1/beschriftungen/index.html"},{"revision":"73cc22a59a1a69d262b528e29b92395c","url":"textverarbeitung/word-1/bilder/index.html"},{"revision":"0431049a063b4c95483283eecaf73073","url":"textverarbeitung/word-1/formatierungszeichen/index.html"},{"revision":"4b3e61eed7d9ae5f16e4a15310cdab3b","url":"textverarbeitung/word-1/formatvorlagen-aendern/index.html"},{"revision":"3c28ec474276c379e5aa9b1768076868","url":"textverarbeitung/word-1/formatvorlagen-zuweisen/index.html"},{"revision":"9cabbf27d93678588840a4e956a7a9d0","url":"textverarbeitung/word-1/formatvorlagensatz-waehlen/index.html"},{"revision":"d2d67244eaac6319276a7805ccdacd19","url":"textverarbeitung/word-1/fussnoten/index.html"},{"revision":"ebf128bcfe7fb827a153f85018eea4b8","url":"textverarbeitung/word-1/index.html"},{"revision":"fc96a0981a44d565d48d1bd77293eb06","url":"textverarbeitung/word-1/kopf-und-fusszeile/index.html"},{"revision":"a75fc37f1c2b200040fe4ba6c0fd379a","url":"textverarbeitung/word-1/rechtschreibekorrektur/index.html"},{"revision":"5845a4233ff01e4168be62c9336635fe","url":"textverarbeitung/word-2/anfuehrungszeichen/index.html"},{"revision":"de9d3df70452f9872b1835b39beae0a1","url":"textverarbeitung/word-2/endprodukt-als-pdf/index.html"},{"revision":"08076bcf46ed40961c25809aa28adbaa","url":"textverarbeitung/word-2/felder-einfuegen/index.html"},{"revision":"c294659fd14f5c44d256624067204d5a","url":"textverarbeitung/word-2/index.html"},{"revision":"20d38e5175e7f9f040d10a2ed218be49","url":"textverarbeitung/word-2/serienbrief-erstellen/index.html"},{"revision":"d355b24b28e4c5c5bc6e661ddae593d6","url":"textverarbeitung/word-2/tabellen-einfuegen/index.html"},{"revision":"8e9e2ee205c195c86a033802c35e6cae","url":"textverarbeitung/word-2/tastenkuerzel/index.html"},{"revision":"27a221538c7f068015b23186033cb1c6","url":"textverarbeitung/word-2/text-saeubern/index.html"},{"revision":"747aa80b97416ae922ae6be4883f09f6","url":"textverarbeitung/word-3/abbildungsverzeichnis/index.html"},{"revision":"d96fb206fcbb53a8e6356c3b04015b92","url":"textverarbeitung/word-3/index.html"},{"revision":"958dccdc51bc0e5a2f46d68b3371a7e3","url":"textverarbeitung/word-3/inhaltsverzeichnis/index.html"},{"revision":"88ffe24672f81f9646716b0a31c8cf15","url":"textverarbeitung/word-3/literaturverwaltung/index.html"},{"revision":"9078b58f7cc049068578bc60ef44d31e","url":"textverarbeitung/word-3/quellen-erfassen/index.html"},{"revision":"c8a61c12c3027bcf3c42034e5e2a5671","url":"textverarbeitung/word-3/seitennummerierung/index.html"},{"revision":"698fa1dd61a75f5faabdade145d94abe","url":"textverarbeitung/word-3/zitierstile/index.html"},{"revision":"ab9c2443cb6e777c75019f2f8b854d5f","url":"textverarbeitung/writer/anfuehrungszeichen/index.html"},{"revision":"da353dc6f80110705253f4e24d636083","url":"textverarbeitung/writer/beschriftungen-einfuegen/index.html"},{"revision":"9dc4c29275ec3825c42ddfe9da875039","url":"textverarbeitung/writer/bilder-einfuegen/index.html"},{"revision":"495b575373e9519c0ecd5a68527995cb","url":"textverarbeitung/writer/endprodukt-als-pdf/index.html"},{"revision":"0ac2cc1f7b1367131f074bc2db0bbfd3","url":"textverarbeitung/writer/felder-einfuegen/index.html"},{"revision":"44227d4b358fec19dc3fdb44386d2d4a","url":"textverarbeitung/writer/formatvorlagen-anpassen/index.html"},{"revision":"6ba9a4dce88ac03c1e612f0c4132838a","url":"textverarbeitung/writer/formatvorlagen-zuweisen/index.html"},{"revision":"d9d95640ee902d890b163a1c4a71640e","url":"textverarbeitung/writer/fussnoten-einfuegen/index.html"},{"revision":"ec23cca6e7bf11f3234ab14b0d968eab","url":"textverarbeitung/writer/index.html"},{"revision":"82e1f72472d332747254e777992a9b2e","url":"textverarbeitung/writer/inhaltsverzeichnis-einfuegen/index.html"},{"revision":"3952c8b2e9354f86f9bd14fc257c02e1","url":"textverarbeitung/writer/rechtschreibekorrektur/index.html"},{"revision":"ca99463d51057ad7f3c29c83bc3f0c5f","url":"textverarbeitung/writer/tabellen-einfuegen/index.html"},{"revision":"2e180eee84860e5b6475a3567cd431a0","url":"textverarbeitung/writer/tastenkuerzel/index.html"},{"revision":"98c9614bce95748305270e39d8685fc9","url":"textverarbeitung/writer/text-saeubern/index.html"},{"revision":"7efa35f6df8dc37f02772e7b238620e5","url":"textverarbeitung/writer/versteckte-zeichen/index.html"},{"revision":"3ca2c1449acfd056deb8a7abe7ade7c4","url":"assets/images/01-be.ch-markiert-dc44b7f60b4b384ca8e47ff1fea25665.png"},{"revision":"076b0312de75a2299bad4996b54f549b","url":"assets/images/02-intern-markiert-655ffdcf320cae7dde54c51804ed32f0.png"},{"revision":"29338ed4a4db8308449be219dde61df5","url":"assets/images/03-ubs-markiert-2b3c243258e44ee18bbe11154f3c7a8a.png"},{"revision":"ab57fb2197c5aa8d42c38dc412f05913","url":"assets/images/16zu9-89a17fa06002bcc9a1aa8e14f4e30a92.png"},{"revision":"d17ab90b1a3b332e9ced5a470694c60a","url":"assets/images/4zu3-906f10432e9d85c74d34b0a3d3e7c9d8.png"},{"revision":"81977a3aa590e1da0fcae6a2eda57b55","url":"assets/images/abbildungsverzeichnis-einfuegen-3044230d1a46de5c8c49606b1b15a0c5.png"},{"revision":"bb44a2b10b6e6e508cb7ce2ab30b31d1","url":"assets/images/acrobat-1-9fba67850a90680262ebfdeba69317fa.png"},{"revision":"5cddb085bfb36e561bfa400b09288232","url":"assets/images/acrobat-2-cba821a9945f8842670d258fd05ff594.png"},{"revision":"dedf63fd3e74b2fecafc099bb722284d","url":"assets/images/acrobat-3-ad039cad277e4b96eb5a58a22b73e43e.png"},{"revision":"ad6b6a40648e19746867250024f4ceda","url":"assets/images/add-to-home-f52e4251959dcdf2cf24870c13113ca1.png"},{"revision":"22e70b74e616e5e88497c62e5a71db5f","url":"assets/images/android-1a-23164cc848a554e628de559a5c994883.png"},{"revision":"c303a2f99b4fb2e5a8a9ad78aa0f67bb","url":"assets/images/android-2a-7d9389ba24f7b5274f54e877c429e4f0.png"},{"revision":"db6997d52e74aebc40dafc2457ae493f","url":"assets/images/android-3a-9d821f7e9c03ebf1fae6ec83e684974f.png"},{"revision":"3e352fa85f3dae8226f332e99a5bb786","url":"assets/images/android-4a-73cd3c41060c5130d3720b07e63b6594.png"},{"revision":"c9ed8d7c1a707729ef0340f5e8ef6a68","url":"assets/images/android-5a-44578af53453f684b89b4af6037fea3b.png"},{"revision":"3a96f11b6f8a16e28d562fb29abcd815","url":"assets/images/android-6a-988c125c367661ce7ac585e17a898551.png"},{"revision":"7ad2a8b0a518ed3f01423b6d1c6a7bbc","url":"assets/images/animation-80f474dd482b90db9c40ac80e19bf98a.png"},{"revision":"94b4b2a65b4b6af0512e60d356c70a9b","url":"assets/images/animation.lo-959037dae420656b8356fb5705803bba.png"},{"revision":"c1a7c53960f64f209d4d47dcab9f47bf","url":"assets/images/aufgabel-l-01-317952e6a66b9855ea6c274885538c73.png"},{"revision":"91c2ec12f156951b0291295c19b0a0a8","url":"assets/images/aufgabel-l-02-54d93ffe8794d4b660646fd4006b62e5.png"},{"revision":"68f2f9842651c3236cee4a2910132739","url":"assets/images/aufgabel-l-03-bbb78e95225441c7928edb51eab532bf.png"},{"revision":"bfaa33f696dc7431b4c9ed673ae82b76","url":"assets/images/aufgabel-l-05-376116b6d008dd55cf65442eac8950b6.png"},{"revision":"9a7783b50ef456f46c41c0a7f24b0fc0","url":"assets/images/autokorrektur-benutzerdefiniert.ms-3ce7b0d71e0229ec6d04ecda4960ea30.png"},{"revision":"d94f929676b484f70176e8c04cc1d8c3","url":"assets/images/autokorrektur-typographisch.ms-a412427ed75c30c60388721d6d13ec74.png"},{"revision":"c9bed4351dcfd4c4911075418edc5cb7","url":"assets/images/autokorrektur.lo-df4d26438c2e199fcdc841b769b7644f.png"},{"revision":"483a1ea314af287804aa8e326d8d57ec","url":"assets/images/axis-title.lo-522108982cd5f0a2d9f27262b8bba691.png"},{"revision":"32e322adaebd1433655541b96204f53a","url":"assets/images/axis-title.ms-dc0a4c804e4008215f102308bdc5c3ab.png"},{"revision":"898f8d03aa907334564d89ed02b8ba88","url":"assets/images/bar-chart-53d8405dde463c010d56335dab070950.png"},{"revision":"c83e03da3bc50612b9bdf42ffdd9432b","url":"assets/images/barkmann-2013-1bb6060fc55e9b921335ff143a7ecea8.png"},{"revision":"255a6e141d14d925093af288d5dc5a36","url":"assets/images/Beispiel_1_auswahl-1-moeglich-e8c556727ce6f91ed1aae4106c5e3bc6.png"},{"revision":"132b05474f0e95c81b744531f648c44a","url":"assets/images/Beispiel_2_einfacher-text-b0f48ab503c048c6276b783111056d95.png"},{"revision":"0ee948e44a72c6ff3e990bef18c8d81d","url":"assets/images/Beispiel_3_1_Lueckentext-a9b403fa3f4c16bfb45bb7f1e939c78c.png"},{"revision":"039e019063fdfc807c67b2e7bdda60e4","url":"assets/images/Beispiel_3_2_Lueckentext-eadf714bdcc9cf7f9d1b8f0e1449da7c.png"},{"revision":"138e2bbd3743998e1c633f9ad447470b","url":"assets/images/Beispiel_4_AuswahlVertLoesungen-09f0fbc0889dee5a729e08acf1269bb7.png"},{"revision":"10969c240b2716e428f152e1cbfdaeaa","url":"assets/images/Beispiel_5_mathAusdruck_1-812517913ecab6ef59b396ef5d16bfa9.png"},{"revision":"5880af468d92322379bfc902d629244f","url":"assets/images/Beispiel_5_mathAusdruck_3-7b32e6331093ac8629fe3c08abc0b7c2.png"},{"revision":"2faa8a98878b298a700fdb1f510d2d56","url":"assets/images/Beispiel_6_numerischeAntwort-2b86859eb750947ef18c1b0e4ca5dd00.png"},{"revision":"46b6a8b510377291c3b0c08435061208","url":"assets/images/Beispiel_7_1_Regex-b705c41ef48d32a67b9e2dde61f8dfe1.png"},{"revision":"1e030f0c5c2671a26e55c13a2438f479","url":"assets/images/Beispiel_7_2_Regex-12ece0282b3ff1a18c374326a2c81f89.png"},{"revision":"464aa425e0fea70089dd8686cd2839fc","url":"assets/images/Beispiel_8_2_ZuordnungEingabezugeordTexte-dcee8bbf5fa672903066e991d18f6584.png"},{"revision":"5c7603c9b2eb0217d8527db19bc9702a","url":"assets/images/Beispiel_8_ZuordnungEingabedzugeordTexte-08659f7aa7795f006a90740d013aef56.png"},{"revision":"ca4649962bef2c8f1318f508e3afb12b","url":"assets/images/Beispiel_9_1_zuordnungMN-20b991b05bad571edbce2c42d0f865aa.png"},{"revision":"abf489144cdde02b8c92ee69b72423e6","url":"assets/images/Beispiel_9_2_zuordnungMN-7f5cf5d2fca9157ebd9be7f967bc2e07.png"},{"revision":"9035cf85dbd3676ffa7f8651226a8fa9","url":"assets/images/beschriftung-einfuegen-20bb5968cfbcb20f6b1f93d5ba529bb3.png"},{"revision":"aca6a42f62175b32d60d9cfd04fba1a9","url":"assets/images/beschriftung-einfuegen.lo-c6cd047f6f792a5250b4c1508c40113c.png"},{"revision":"f490365db611a4201d038e4bab13ada1","url":"assets/images/bild-beschriftet-zentriert-577b97c785d6c4ff6cb4be12814bb03b.png"},{"revision":"9de76e9a7a80228e078942036064e468","url":"assets/images/bild-beschriftet.lo-14835e6c7e3a869aabd68b314d7f4e51.png"},{"revision":"f5f8d1d7cb0a3df6c60aa693802e7f20","url":"assets/images/bild-eigenschaften-fce17ecded0da59848e8cadd7e17e391.png"},{"revision":"4c471669391f083d8019e533e6999317","url":"assets/images/bild-eigenschaften.lo-800994cbf68ef04a70f58f33664fb0ef.png"},{"revision":"61b04639170f6704b4b5d38b73d476ed","url":"assets/images/bild-einfuegen-92fabfcc6ca30a10765f40f8a07104ea.png"},{"revision":"b2f2000e2c91532cd0e869ca19b54034","url":"assets/images/bild-einfuegen.lo-14b513ce1efbdcda417f3276a5665ac3.png"},{"revision":"3bca4f4f7f3a61606b98941433e0b312","url":"assets/images/bild-textfluss-9312ed6e3087eae9ce754d0a760ace9b.png"},{"revision":"69493499c39d587ac74abf6ab624ac69","url":"assets/images/bild-textfluss.lo-9ef1206fa1d31f409da5def384e01509.png"},{"revision":"b1df570399e6e7d547d56ec704ebe3b0","url":"assets/images/bitlocker03-30316772f7e8a378ea7a45ce96f0ca79.png"},{"revision":"b8d191d397d68ab840a7932dead3249d","url":"assets/images/bitlocker04-9db9bc980560911580e9c924b6d71316.png"},{"revision":"4da83e0b3aa42aa48f694565047d66ea","url":"assets/images/bitlocker05-4fdf395970bd2f3d2e6d2d8410757a3c.png"},{"revision":"2a85f4fff55f0e43fc2bd2513e72d0d9","url":"assets/images/bitlocker06-55c2c54d56fb67868640cae55c477a9d.png"},{"revision":"a996c73cf63735c4e94f0420100f408c","url":"assets/images/bitlocker07-8aed5e358ea4148912f6d0c399eb1bc8.png"},{"revision":"009a8941512d917099b35121e335254b","url":"assets/images/bitlocker08-bbe316a6f2b090fd016817f674df0d17.png"},{"revision":"02c2ab7acc91e4c726e7ea9118d01d12","url":"assets/images/bitlocker09-1a3000ade449329568436adf48c779c3.png"},{"revision":"5168f6de8432488f7dd48c1128ece414","url":"assets/images/bitlocker10-43df86d39f3012538f2a3ae2646c93bc.png"},{"revision":"7b308a194323a89a35f017ab9c3dfd23","url":"assets/images/bitlockericon-90c49bb348c7907ea6249cf0fd7abeb2.png"},{"revision":"1dcac4ebb05849111b1b3748ef1a2393","url":"assets/images/broschuere_mac_01-445b1855b0aee9ab198565b57f75735e.png"},{"revision":"dbda8b248afe3a7efe7e77c77d12bb5d","url":"assets/images/broschuere_mac_02-f75dd65798039936f48b73764b22ab51.png"},{"revision":"9898bbfb8ca1c6ee016394cfa511b508","url":"assets/images/broschuere_mac_03-545ce747b5ad6300c43484bc56544226.png"},{"revision":"0e0a78a1ae6e84ad63b042f78800b839","url":"assets/images/broschuere_mac_04-31e39f45838260b6cb54c1390792e891.png"},{"revision":"5ba2b83e6e1dc77a552b26ed33d75310","url":"assets/images/broschuere_mac_05-84dbbc6bda9a63a793a12dd13d538cb1.png"},{"revision":"7d998adceaa1b3f106de844debe0bd75","url":"assets/images/bullet-points-e8ac2dc6df216db45a18627a874a8291.png"},{"revision":"4829ee035b910025a017f02067aa62d6","url":"assets/images/bullet-points-fenster-ebbd21bfc684d9bfcb2ccc1bd191728d.png"},{"revision":"98836bc1a2514bd4b6420adfe6538334","url":"assets/images/bullet-points-fenster.lo-bf01200b77c3e4cd4e6f2ea4bba8f8c8.png"},{"revision":"95160e19b4dbe911ad1ab9d445170fea","url":"assets/images/bullet-points.lo-c246a11e96a48c9e68d0df0821dab532.png"},{"revision":"cb93d54d973c7675565f583771aff0a9","url":"assets/images/canon-1-ecaad3a1c52dde171f0b39d298a2f916.png"},{"revision":"b5169f5b2de6e1f4262181573a72a98e","url":"assets/images/canon-2-778a47fa0fde77899199d8233ff90138.png"},{"revision":"38f6a8352c860c630a70af90414c4d4d","url":"assets/images/canon-3-f9cc471fb5b0c76f066f5bf55f4962d6.png"},{"revision":"272fba59bd716a2da574b601d0445e88","url":"assets/images/canon-4-70d7f428cfe9aec7dff0e3dceaae7e2e.png"},{"revision":"cc22526ac98609102c91703745db18fa","url":"assets/images/canon-5-294033a4b22659184c25173898fefc75.png"},{"revision":"42a3e5a6e9059f7bf4e2a7cdd5f2883c","url":"assets/images/canon-6-5d9000d7594a9b006f24eb7ad3d6a925.png"},{"revision":"fae7f11e37a8d010f43b2faff0a6bf10","url":"assets/images/canon-7-7eac3ff6650d1c0884acecb094e38089.png"},{"revision":"6e804230c28c6590dae10908cb20c25c","url":"assets/images/CD-kopieren02-2c9f426ffbf0931df2fe9d60b274f3a5.png"},{"revision":"a4a4f0895a01934bdf8a7d573950b9e1","url":"assets/images/CD-kopieren03-740c62aeea44f6be9d598badc8230761.png"},{"revision":"95e93f5de47d6a2e4d948c1c6b17eb0f","url":"assets/images/CD-kopieren05-d3b2b22a1e77e77ffeeb603ebea5c209.png"},{"revision":"ac38be2a757c4d42543d7acbd4ae20ac","url":"assets/images/CD-kopieren06-1ed6c724a8a7da65f112db3fa9e3c54b.png"},{"revision":"8c66c7e2716b9603a976cc328ce23e28","url":"assets/images/CD-kopieren07-d7179e9bf932d6eb81f0a28cb2a46669.png"},{"revision":"74469d89630208b020cc247b4f33422e","url":"assets/images/CD-kopieren11-d31c69316a73162908e49194bfd53609.png"},{"revision":"5c27e5e9f0e08ad7f547367d70aabdcd","url":"assets/images/CDkopieren-mac01-5850d0b7bad226e13c8e9a49e6052c90.png"},{"revision":"24665051e9907eb04ca48f2930f81541","url":"assets/images/CDkopieren-mac02-5e95e766658bb50d3b3d0ab7a6363350.png"},{"revision":"b84b85a89c86eae8e7d62e1843ff2456","url":"assets/images/CDkopieren-mac03-80cf0144ef0be06bf78695cdf3f4859f.png"},{"revision":"ea56fb95f94a73c910089f4243076e14","url":"assets/images/CDkopieren-mac04-f4ab663d9f9805ce16fbdea360fa5d85.png"},{"revision":"fd6418aac937e8b684927013f926ee9a","url":"assets/images/chrome_001-a2b41de502f4846a556763706103859a.png"},{"revision":"3ef2dac6bf41a8cdef13c4dff8b10088","url":"assets/images/chrome_002-2069a805e6d90c49cb986e531e1a765f.png"},{"revision":"360a81c605a9a0a1061ced40e1ce0433","url":"assets/images/chrome_logo2-5257bfa979ea5841a609ebd313e0757a.png"},{"revision":"b7fbb55233a921a169c5ba0fc68f5591","url":"assets/images/chrome-add-to-home-88740decab705a8bf8cfb7001843a46f.svg"},{"revision":"43b1dd24073c06f0456d1aae602ac5dc","url":"assets/images/cloud-link-onedrive-535af1d4d057fb5897a13b7d2f6c4c11.png"},{"revision":"8da5632ea0edc4b1754e9f68f1b36c2d","url":"assets/images/confirm-installation-4675600fd17891ef5ee3dfaf723b4eb2.png"},{"revision":"72581ae3e9d172b78689325553ef557a","url":"assets/images/confirm-installation-619cc678407e339a53fb0e9f6e12bdfd.png"},{"revision":"f211e784ab588fba7a8459bd5432a2d3","url":"assets/images/create-diagram.lo-575b1828af7ced49655b221da89d94d4.png"},{"revision":"19979c5357d971e677a1adff2f7bd5af","url":"assets/images/create-diagram.ms-d21542e385fb4cb903288764b2cbd88f.png"},{"revision":"5327f0eb165f1e309d5b718d25c3a664","url":"assets/images/creativecommons-infografik-efb0c12167d7ace185ac8c6bf260d36b.jpg"},{"revision":"a318f36ae15aa1b30adcc7fbfc5a204a","url":"assets/images/data-labels.lo-3fbc322b566ccc5c83a61773780349b4.png"},{"revision":"48f52bd33eb761e38850002b97c09b69","url":"assets/images/data-labels.ms-88c43c9955c98b124fec78dcdecedfd0.png"},{"revision":"69d3afef31c3632fd60c6141e1a1dca6","url":"assets/images/datei-exportieren.ms-185ca824d25ee43b63261d368ed28667.png"},{"revision":"74ff46e62df751ba0b83774c09db7dde","url":"assets/images/dateien-hochladen01-9c813bacbed17bb0572b29e11983cc75.png"},{"revision":"50ea8bafeec6937b478313175acf33cc","url":"assets/images/dateien-hochladen02-cc71f3c1357d2cee9c60ba0151674c18.png"},{"revision":"fe793ca963f3017a410eb9ab4575a9db","url":"assets/images/dateien-hochladen03-763ac80a4a4a90e73bddc68a2e508ee9.png"},{"revision":"628a3f49940d52ca3c6982d241961168","url":"assets/images/dateiendungen-anzeigen-1-f3a70f9af9419df587ddf07690b2b4a3.png"},{"revision":"f4bb96b702ae4d590d84675e05d0fac9","url":"assets/images/dateiendungen-anzeigen-2-e19073440853828bebc549443a4586fc.png"},{"revision":"7c9559e3f58ca81782632c9b16207655","url":"assets/images/designer-820ce8d175a19132d738c7bc996a875e.png"},{"revision":"789622490d9993aae2eb3eec07ba8497","url":"assets/images/diagram-parts-fd93d0a4307fdabc29fdc2812ea0ff8e.png"},{"revision":"9f46d60d0dbef79d35247da4b865ca64","url":"assets/images/diagram-series-ea580c1ee39750d5de080ca28b9d3bcd.png"},{"revision":"cbf2a4c7f6aabb2903ec45cca99ae782","url":"assets/images/diagram-title.lo-b9ac59ea3ded10e7898308be90c0f8cb.png"},{"revision":"b9e8b5efe48afed76946c3105427a028","url":"assets/images/diagram-title.ms-26034433848e2dafbc4faa051319b1c1.png"},{"revision":"7c188717f82eddac4c1adfad2a7e9498","url":"assets/images/drawboard01-d32d2d1deb8a0103888c1bbe62f13046.png"},{"revision":"f24553cbbbd41de493eeb74e301430f2","url":"assets/images/drawboard02-a0486e29b0bf424563492cae944729cb.png"},{"revision":"bf55eb48060bedbcbbb3d0e98d92f955","url":"assets/images/drawboard03-1ff27b8d9c8dd0cb381d6e2b353ddcc9.png"},{"revision":"bfcba9854c4226b8d7e9e28021782f30","url":"assets/images/drawboard05-6552115e6123f26c0c243d3dc1b0d150.png"},{"revision":"af30d922079ed8083ca3be805503a470","url":"assets/images/drawboard06-4af021ab4c9a395a296e8d17cac35317.png"},{"revision":"a04de990af26d227248d56d4546fcef5","url":"assets/images/drawboard07-1e6733af9cb6e996a5f0172525ed89ac.png"},{"revision":"b8f5ff5ba4c6c377e4b96d9c2678d1ac","url":"assets/images/drawboard08-6af9f2a378ee7c080bde78a2f548cdb3.png"},{"revision":"47e16976c0806d078772089ac534f81c","url":"assets/images/drawboard09-5a8ba2b2db412813392fb64841ae4776.png"},{"revision":"52afc57a7c7c8d6688ca3b395150b7d4","url":"assets/images/drawboard10-2828eb9e19c739e2f17a1f8b98699926.png"},{"revision":"b5dc0bc19c606c3789d262ea8a608caa","url":"assets/images/drawboard11-b1537a3a640453a46fb6bfd6f6d3a483.png"},{"revision":"150f8b0e5fd126f6c96f402cbc83a1f4","url":"assets/images/drawboard13-d5a13e157a10699e3226b926bbaf0f5c.png"},{"revision":"e21361a92fbec8b5928be9b9ec2bde09","url":"assets/images/drawboard14-e306b8d20fe74eba43a7626b7c57f9be.png"},{"revision":"b3bd6d60edc2f2e6a1e94ffb8456ff8b","url":"assets/images/drawboard15-7a9f2f0c982d144fcee64b6bff3c3f68.png"},{"revision":"f9d96ee9cc7e550f14fdcf59b6a4dddf","url":"assets/images/drawboard16-656690e605d8482bef52b54bc8f904fc.png"},{"revision":"49d26a1a92ff9c7662f54beaae1ba83a","url":"assets/images/drawboard19-b573c3548ec3a2b28309b3079bca0053.png"},{"revision":"b1a0bfb5c7c2f4ba1ff01ee76e2b6abf","url":"assets/images/drawboard20-560d465410cca128bdfb856f1775153c.png"},{"revision":"2064fbbfb22bec0b6f071638ce84ae72","url":"assets/images/drawboard22-a5331be6cef6bb7b06be2ad6488947fd.png"},{"revision":"dc9703cf859cf157a94780238e0cb43b","url":"assets/images/drawboard23-687aa0b63ac6ffc629b7ef28a1330b7e.png"},{"revision":"2fad478de49f0f69e221abec08931336","url":"assets/images/drawboard26-33b70f11696d9eb5f74e0624f78b996e.png"},{"revision":"78f57059473760af637613f63a8f510b","url":"assets/images/drawboard28-41e6e604e584376eea484f52680c2cd8.png"},{"revision":"b29e32b71a45c4d6a8e303b9232005c3","url":"assets/images/dropdown.ms-b901e43c1044028b8dcaebc2c74e9346.png"},{"revision":"2eedd112ac2d783e53da935e6c337240","url":"assets/images/drucken-76fac3c9a9c4cca854ba570dd697ce78.png"},{"revision":"241faae7347f5714d03e9971fb7c8c2e","url":"assets/images/drucken-varianten-9e90bb5bb677f812791f75b4103f78e8.png"},{"revision":"39ed62456fa35d4b41bc61e312b1c4e9","url":"assets/images/drucken-win01-cc6ee107ec01c277d6bfcece230dd94c.png"},{"revision":"0d0c0762c60474bf47bd1a183b67607f","url":"assets/images/drucken.lo-9c14c1d9e59450a49d17d336d304e514.png"},{"revision":"d1c9b2b3d87c0ccc5bd8242f6e3f0cf1","url":"assets/images/drucken01-3fb3432f5903842bda2b10fd6689b16e.png"},{"revision":"74533cd8f0d6711927db86fe0cbca64e","url":"assets/images/drucken02-6e586354f3dcf5253a827d84817bfe38.png"},{"revision":"21d257fb358c2f994a1c5a6d67a35906","url":"assets/images/drucken03-57b324bdd865344124b74b7e330d2307.png"},{"revision":"ed27af1453eea4d7c7e37e43833d62ae","url":"assets/images/drucken04-6a2289409006c9d366e6d2a77daf7f04.png"},{"revision":"f068f7bb96de906145bd9a5c88ea041d","url":"assets/images/drucken05-67a4ac40e6433181791fd740124f3ec3.png"},{"revision":"506658fd9df018bd5d65e2f394b5120d","url":"assets/images/drucken06-3f369b11696591cb6b2803b3d189c8a4.png"},{"revision":"136d0142c81af5212d7c6d15514fd3aa","url":"assets/images/drucken07-96573fdb21c1410ef6431d6a5a63a1b6.png"},{"revision":"8cf898475ce2c2ed6f9606182c2d1555","url":"assets/images/drucken09-a08bb3a2b3d24c9732a2358374952a60.png"},{"revision":"317c4aa5283b67eb18b07ea68f71e04c","url":"assets/images/drucken10-9707bac6d4a95ac58131d525fb1c1bc2.png"},{"revision":"6fdefd99a48b5a081a579caa667d9b69","url":"assets/images/drucken11-88c22583c4fffdfafd6149c2f6756add.png"},{"revision":"8fefc585b898a1f1f732637288f45342","url":"assets/images/drucken12-e1a8f06c424172743cb5a627300d151c.png"},{"revision":"5389a329c7eb35f170665881569e435a","url":"assets/images/drucken13-c93f17775a88296169d080330dd60fb3.png"},{"revision":"e8ab553def1fd4e09001e3fe7a1d84b7","url":"assets/images/drucken14-74ca47da18912d66ba3d1847527e069d.png"},{"revision":"dc3e260c88fc25d5a7b74295e2a35f80","url":"assets/images/drucken15-bb1b62b6ee5d54b71a159b26c1095677.png"},{"revision":"89acaaf87e0c9b72440b99ddc0881a56","url":"assets/images/drucken16-547b8a72345e496576fb78690ac5e816.png"},{"revision":"9a3a6fc8f3b75c6aa2b11ae820d5a60f","url":"assets/images/drucker-allgemein-1-fb710be9f73a2d11f855233058de0426.png"},{"revision":"7b92bd76dfb02376e856045bf585d0fd","url":"assets/images/drucker-allgemein-2-854d10f73b086645a55a0838e54ab4bc.png"},{"revision":"c1089382c8494d4d7dd904a5d8dd780d","url":"assets/images/drucker-allgemein-3-59ca899a648c5c65b7431b5b7a43d37b.png"},{"revision":"a43ac94af865a0bf830730fe342d93b7","url":"assets/images/drucker-allgemein-4-078b0e68624777baa9ded1d494bfd309.png"},{"revision":"2f82268ebacd5d05b43996dcaf213caf","url":"assets/images/drucker-allgemein-5-9feed0051febbfca8bda83e82c7b7e51.png"},{"revision":"0885319c8c7561f7626f7a52642c1c06","url":"assets/images/drucker-allgemein-6-633207e68532525d051740f7cc2f2c6f.png"},{"revision":"980f2cfb6e22000c05aa16a2cbf03f7f","url":"assets/images/drucker-arbeitszimmer01-7fff3a1a7e83e72281786b54e454edb6.png"},{"revision":"b6833da3acfa613bccfcb9336bbccaeb","url":"assets/images/drucker-kopierraum-1-f522b12456f262b6e5ff7d8f416ccaa6.png"},{"revision":"3e4e36d24e27493df26ce3a10b84fc32","url":"assets/images/drucker-kopierraum-2-3cb0026cf65818b1102054c33591b855.png"},{"revision":"16f872cc9ec680180ff06f38f466f22f","url":"assets/images/drucker-kopierraum-4-88f2e8ca7e4e86f2a9922db004f27e74.png"},{"revision":"134fb3878f9198a028cd6f1b371f7936","url":"assets/images/drucker-kopierraum-5-fbb64205295833628570f3148cba771c.png"},{"revision":"f5788a301bc76cd721af54bb957a30b4","url":"assets/images/dvd-02-08a9e8fc38c4e819ec44a9ce2c4ad037.png"},{"revision":"1664c551c34fe526eb6a8ebe24d404d5","url":"assets/images/dvd-03-66005b6ab2266673f3bffca5b57295d3.png"},{"revision":"62543f668225ad6a906a597a092cd7e7","url":"assets/images/dvd-04-ba9e1ade68ec44a08e8c83e4502c52c2.png"},{"revision":"46aa7d27e507b82ad548c7a50a8a6ec5","url":"assets/images/dvd-09-99b17883c9b2407fbeea7cdb24775c06.png"},{"revision":"96b7e0e06a1fa0236d4db729c0372a81","url":"assets/images/dvd-10-56343c92b69a9a0c1b2f3d55cc4f0391.png"},{"revision":"3fce3be3789b82f6cc24be63c359b41d","url":"assets/images/edge_001-11edaf5c204718772678a46925b206a5.png"},{"revision":"a1a3f0b9a686aaecae0ec0bac463df7b","url":"assets/images/edge_002-f88367c146dbc107ac1577815d84a7a4.png"},{"revision":"8e8f284034de32f4f95e10fe31a0eb9b","url":"assets/images/edge_003-7d34b11d586a711ff08fa1388b0585c5.png"},{"revision":"bf5cdcdd15eb28931aed8bae6d091b18","url":"assets/images/edge_004-56436dabb22e989a16f9cd4b080aa08a.png"},{"revision":"3e3b9bb7629ee2ee4524e278d4d82bb6","url":"assets/images/edge_logo2-6b18af2b3dd09c737176d2b33a497219.png"},{"revision":"b5e05961ba8c05f357d51dfa512b458b","url":"assets/images/edge-add-favourite-b713badfcb0dc02743c0017adf4580c0.png"},{"revision":"92942e97bb80273c465f52cc7b93280f","url":"assets/images/edge-favourites-7b07fb693aa74eeb85cdb230cd9dac02.png"},{"revision":"8673ea08bbd86d8535563d06f6a6169a","url":"assets/images/einfuegen-feld.lo-5b783ead5d8bfe7cc3ce18c015cc15d7.png"},{"revision":"927c3033c77a2bf09cd84610f52efa04","url":"assets/images/einfuegen.lo-d50f016920654983271cea0a5b41170a.png"},{"revision":"ef26e30b80d7ec4ba207981ba17319f9","url":"assets/images/einstellungen-90e3480924755c75bb59e63e66147dc0.png"},{"revision":"99041fca6c6f94e5e0caa56017015a23","url":"assets/images/einstellungen.lo-c49543f989132d248b4aca35b30b7be1.png"},{"revision":"764c5009088fd5699a5323816e58b2b2","url":"assets/images/elmol12f-01-f3d6a30885e2221fdb1d3441c3bab404.png"},{"revision":"70a59e82a5b8dbcb087a67bbb6be1673","url":"assets/images/elmol12f-02-502c914cd710912af639b12acd416fb9.png"},{"revision":"dfe29f7a0a67f1582a06802abee6e28e","url":"assets/images/elmol12f-03-229b71efd84dff421b7dfceb48d3b468.png"},{"revision":"7770c8f8f432643b7a288d70ed883aa8","url":"assets/images/elmol12f-04-949a5f62f0b9110a6d401beb0690c420.png"},{"revision":"1a4a1089c3ede7cdffde4569908fa0e3","url":"assets/images/elmol12f-05-d4e78917bd5a40ece5144954d2890483.png"},{"revision":"3c909b02b9d93eeb4fc1c93db5cbac53","url":"assets/images/elmol12f-06-78515ae2564f8879f56d2fb570bf144e.png"},{"revision":"ce41e45caff2da305af00e455bfd7680","url":"assets/images/elmol12id-01-79dfa5594ba583f9fe78de93036ed656.png"},{"revision":"70a59e82a5b8dbcb087a67bbb6be1673","url":"assets/images/elmol12id-02-502c914cd710912af639b12acd416fb9.png"},{"revision":"a9a3512721e48e791eaccdb14741fe77","url":"assets/images/elmol12id-03-f4df57fb5c06222be675b00b2a22c924.png"},{"revision":"992241a60d352e221f6d3545ccc50828","url":"assets/images/elmol12id-04-03c9c1661fedd4baab8cc7adf4d4cd09.png"},{"revision":"5c8d7297f1491a9a3a784b8f93dccf97","url":"assets/images/elmol12id-05-42a6254f5f31d0b566ca29a3ade78036.png"},{"revision":"b49fe0d23eee8c3118ee8c69a65c06e8","url":"assets/images/elmol12id-06-4ef10cb62cc328419a7b39a5d1dbfc1a.png"},{"revision":"619f0b09fc4a5ce921b623f14dfac9cc","url":"assets/images/elmol12id-07-5af5a8a258640eb1dc208e3362193b9e.png"},{"revision":"9c7aaab7e3b59397733dd09cf72d6e66","url":"assets/images/elmomo1-01-fdf3611314e553fb07413770b2799e4a.png"},{"revision":"e15deb4e4780f910698635c80493da9a","url":"assets/images/elmomo1-02-c30db60f6a2e336cfbba6c4643f18fd0.png"},{"revision":"c44a218215819cc20bca5f96653e54ac","url":"assets/images/elmomo1-03-98cfcc2761334ef95f94fc3875c476dd.png"},{"revision":"a6d20f3b599d63b291afb4cd6f578211","url":"assets/images/elmomo1-04-8a93be9b43e541d2887ec83d79021503.png"},{"revision":"93acae8cdae8c15d4edd060fed08c1ac","url":"assets/images/email-1-d23a5d6bf464e1782d4e8bbb3defce46.png"},{"revision":"55b427d50672ce5de27647432f3dd20a","url":"assets/images/email-2-fad347990bdbb69436c508b7112c096e.png"},{"revision":"8656d41e114c654abb7bf1f4fc36b289","url":"assets/images/email-3-88a1233a3cc4f89609f33124883194a8.png"},{"revision":"51c913b7eef25541131bec93cb53c080","url":"assets/images/email-4-c33a454baf5e3be8dd180fb33e4e2b8d.png"},{"revision":"e2f7ff3d6db11ca1eecf5ae059e95a42","url":"assets/images/email-5-461021da46337137fcbec44b80f9a875.png"},{"revision":"b43e54c6059c706dbd9bbaa5fb019082","url":"assets/images/email-setup-1-53ad5f7ca8c27e76844609b63a3921aa.png"},{"revision":"7851f3d59c97f83016d95b382bcc2863","url":"assets/images/email-setup-6-69862ad389490ea706ecd2c96664b87d.png"},{"revision":"4400703ef62d822ef78ad7b208a55683","url":"assets/images/email-setup-e3e67fb64973209e61e3dac675d76489.svg"},{"revision":"ea5693a83b3bab2fdbcacbc77d639a01","url":"assets/images/erweiterter-desktop-513d86d41e60b43ecf53c21d1d161488.png"},{"revision":"a005f461af32cf6d47a67e8b94129a52","url":"assets/images/excel-arbeitsmappe-bfdcf79b8db62b8478d0d94d78768a64.png"},{"revision":"4fb8d940bb135c40489cc68a939fb948","url":"assets/images/export-8ad7e5365a9d5a65da7186fc0229ab77.png"},{"revision":"a2d4b9e0089e27736b7e1b7487aa8386","url":"assets/images/fehler-teil1-b4452c6ce525ce51fc7a839865850ed4.png"},{"revision":"60dac8e103e7e6ceaf792d65b7ffd11d","url":"assets/images/fehler-teil2-bernmobil-fa60d880eaacbe74a58e52d8167c0a52.png"},{"revision":"0db8302a9187ade115ca3fb6f58a186d","url":"assets/images/fehler-teil2-google-9530477302ae073ee5aac3bc41014a7b.png"},{"revision":"046f7968ead92b7f049bd8f7309c2efa","url":"assets/images/felder-einfuegen.lo-c3458fbe1c41ec8e729aeba9ea35e0dd.png"},{"revision":"7e99dbdf8d835ab6a29093d2c3734b9d","url":"assets/images/felder-einfuegen.ms-732c906927f11649f6abdbf6045d391c.png"},{"revision":"10032418ef3da23c906cd227f67b40cd","url":"assets/images/fill-5e340408ddcec3516aa02f1a822ae321.png"},{"revision":"55aefdf6ca7efd5b0c540ed2712d01d1","url":"assets/images/fill-diff-2f13e567c87530e83d9ee6b7f0f8ad56.png"},{"revision":"c3ee1ef6608f686439fab7c2ecba0fda","url":"assets/images/fill-formula-a7dfa6990ab90020d65f05a94a1737aa.png"},{"revision":"0160874a1dec34523cef64ff68dfe259","url":"assets/images/firefox-1-488e7ed91a60a028c1f58b21dbbb5dfd.png"},{"revision":"aefe9e2ba09186bf4c625d6c1a0c17ae","url":"assets/images/firefox-2-1b7ccc9126f8a54762f57e4bb46592c8.png"},{"revision":"a9fb5bada1e50c08d6ee8b919a7d96ed","url":"assets/images/firefox-add-favourite-a6c1fe6cc2104de40881159719c70982.png"},{"revision":"1499b26a1ff7f30f97748db79ba330a1","url":"assets/images/firefox-add-to-home-78222a2628ef9e4da3e1e00444289fbe.svg"},{"revision":"1d4ed567a5b409346c104b5aed7216ca","url":"assets/images/firefox-menu-c64bc51db7c65e85a90d2e7a2f602f51.png"},{"revision":"a072065f43c50afe970657e6bf26f6cf","url":"assets/images/firefox-ublock-1-576e2d2c81d934881346847116da720e.png"},{"revision":"1f3117d3240799e7d34575fc12328ef4","url":"assets/images/firefox-ublock-2-f87ac093e458bc9697a8231080de658f.png"},{"revision":"cd1141fe5359dafb6a90f64aff33c4de","url":"assets/images/firefox-ublock-3-37894a46a92a7d70691ba869bafe4639.png"},{"revision":"9f9c3506086ef3dbbcde81a7bb926137","url":"assets/images/firefox-ublock-4-19fa1be5a1c79366e354eb85562be9c1.png"},{"revision":"4ab2b73c8a9e708a08c699ca94a071b8","url":"assets/images/flannery-2015-a6c14a230724fd5265aa776a3b6b6994.png"},{"revision":"7e04b27be902df04b40e54a59d5f677f","url":"assets/images/folie-einfuegen-b8d089130911af0ba89db10fe1a3f98b.png"},{"revision":"27f4d1099a4968ea3f5104436c4bc42d","url":"assets/images/folie-einfuegen.lo-acee64f51a0630cbd79659ab26523dfe.png"},{"revision":"ceeb72591ca253b07e637972d7ed9723","url":"assets/images/folienlayout-d7042b7d378df845a2eb96b15999c510.png"},{"revision":"6137bf64536d675e8b437fb58e7db969","url":"assets/images/folienmaster-anzeigen-d480eb651fd6d92155babb83c22d137b.png"},{"revision":"1d22ea7e6e78f673fc5736a035a98000","url":"assets/images/folienmaster-anzeigen.lo-4ef0febfaf8ce4e4a3081d351230c6dc.png"},{"revision":"d0f6f3dd4d884426fe16d85769620cfc","url":"assets/images/folienmaster-schliessen-a9d2ab8baa5c713c1b501da9489d5e0d.png"},{"revision":"63e622e42d383f08a157b0f7b995930b","url":"assets/images/folienmaster-schliessen.lo-eaf6cb712c70fda6ebc66edc26f92ca9.png"},{"revision":"5da181052be6c824b999e3db562e3842","url":"assets/images/format-axis.lo-b6d4c7ac91e6b29f91008e72b7dea756.png"},{"revision":"ce0b3ab1f0d0d9e823b8ca25b90ba0c1","url":"assets/images/format-axis.ms-3ede52837ed0ae3e94f05d16f6abaffb.png"},{"revision":"2e9c57d1de0d2e7ceecf4e667e9f09c8","url":"assets/images/format-stufe-absatz-768b5c7b7ddff57915cc1d71eaa36bf9.png"},{"revision":"3fd7bfea89c09d05fcb665d1756a21b3","url":"assets/images/format-stufe-zeichen-984d95adc555c2684469dbaee809712f.png"},{"revision":"96440a065dffb7ab206080d836add65f","url":"assets/images/format.lo-0062217ba3ecfcd6e12158b6a2652851.png"},{"revision":"8618b0249f724f9512bcf14d8958d713","url":"assets/images/formatierung-entfernen.lo-2d47f955a23bcb161a0f056bb5922075.png"},{"revision":"4c0f1f1e8a90ca01dad241e51acf2529","url":"assets/images/formatierung-entfernen.ms-0c1ce1e41f35cc31a8669caaca8b7515.png"},{"revision":"3e4b6584d915eba6eacebb5861d71901","url":"assets/images/formatvorlage-aendern-21b34847005d587b5fa7e8dc750f9329.svg"},{"revision":"f9b7b85bc90ce163b2ed320042da25f3","url":"assets/images/formatvorlage-aendern-fenster-ef12d053430fa9ec148c9fd9e1dbf86e.png"},{"revision":"7fe0a5bcc5e08bfd7f8f2537ba100900","url":"assets/images/formatvorlage-aendern-fenster.lo-9a4ced03f735516c9a96705c5929bef4.png"},{"revision":"ab30283fb6e7ee041c1bdc8532fff42d","url":"assets/images/formatvorlage-aendern-menu.lo-73413261581a412830ac6d7f21556ba2.png"},{"revision":"fb224f6830ec5d1217d34cd8e2f73a53","url":"assets/images/formatvorlage-aendern-register-c6cc3db940242d70b6885a6d631539f1.png"},{"revision":"19410b82e9c2d6f8f1dae80a5572d6fe","url":"assets/images/formatvorlage-aendern.lo-671551507a4ab9cafab9c2aca2c08c8a.png"},{"revision":"8111cdd122e27b24017eab42e1a67ff5","url":"assets/images/formatvorlage-zuweisen-ce9049f1c5c9babe492ed14f960028cf.gif"},{"revision":"a696104bf32e7adc19e0e5d3a078a8f3","url":"assets/images/formatvorlagen-einblenden-d0157d7adf9d3cca110b1c5c10e7689f.gif"},{"revision":"b67f11f0eb7e746392dfd15cbc7b242a","url":"assets/images/formatvorlagen-fenster.lo-32dc176b43962ea1de0677b3910fd10a.png"},{"revision":"4a5ad2c5ee36f9c3a3e68b43275346b8","url":"assets/images/formatvorlagen-optionen-f5d0a9dba08e39a4009f8baa5b2ddb08.png"},{"revision":"5f6d09e7ec7aa94512d9d76b8d599daa","url":"assets/images/formatvorlagensatz-4a7ea4a8f7fee0cf6bf7d36634b06ea1.png"},{"revision":"d0be5f88f074557f0e974b1d05878620","url":"assets/images/fussnote-einfuegen-f18f1e45b15a021fa4942c3964079fa7.png"},{"revision":"f823430aefd85c63d24f53d7e0cfb578","url":"assets/images/fx-dialog-f883eb09f92e784cc8c135c68f1c57b4.png"},{"revision":"8938164ded06c2bfa3620b925a2cd18d","url":"assets/images/fx-e702c7ec69530fd1e3fe268fa89057e5.png"},{"revision":"f624e1fd353b744deeed449a2a9015b3","url":"assets/images/gmail-1-dc5f2d8c8957b984ff2b248a1e26271c.png"},{"revision":"0a82e4743ce10ae47c01554d22275178","url":"assets/images/gmail-2-db05e179ead20867ec6ab368a19d5b99.png"},{"revision":"f94148c910190c218778af7a40c3c1c6","url":"assets/images/gmail-3-94cd4e03d367b6820d6f09fe5eb55258.png"},{"revision":"5515f0f619ad01347368731ce39383ab","url":"assets/images/gmail-4-60e44ff8156917df85f99a7ae9c8f95f.jpg"},{"revision":"73524148d1f74babc8a1edefbfa67f3e","url":"assets/images/gmail-5-65e62d85b65fc2d774eb52b7fdbaa442.png"},{"revision":"ca0575793082cb86dc236f032e8bf78c","url":"assets/images/gmail-6-e15f22a6582c8fd0be948a05a578a163.png"},{"revision":"ad862be191c000386c55b16d70240962","url":"assets/images/gmail-7-8fb9bba5e3d33e8413bb40279a90a125.jpg"},{"revision":"c37f0fafe7955f5ae8366751d1b6dd7a","url":"assets/images/google-timeline-fa83a1f6c5f1d25127449f87019a59e0.png"},{"revision":"f71fb1a45f95effbf283930a31e2e90c","url":"assets/images/gormann-2021-7cca969916cf0f5e7db3b60de2cf5ac7.png"},{"revision":"bfcf924e409425a4667b36c0e7ed7146","url":"assets/images/grammatik-5dabc50d5dc2c9c99e7e078c4aea3c4b.png"},{"revision":"de459e03d9c8d833721ef03362a20fa5","url":"assets/images/gruppieren-1920a76f032190a4847ea65e9c424b4d.gif"},{"revision":"fe8e39a7773d373433f603f0d047006a","url":"assets/images/harvard-bib-51b1905e93d2ab4ed74f7d22cfdc71dd.png"},{"revision":"4deff9393db2fa569f404416c7b279ad","url":"assets/images/howsecureismypassword-bad-547bfb4037ef0c5fd10c7b9f61b1dfc2.png"},{"revision":"b54623e37d22f28fd4506546c0c83e74","url":"assets/images/icon-settings-c79e6aa4cd32a236da4b951c2af426ba.png"},{"revision":"6251314a838ad8caf32276841a044b59","url":"assets/images/inhaltsverzeichnis-aktualisieren-065e6db4704caf99bf68da158202c232.svg"},{"revision":"e9b6e584452cdaf0873e69a88f6911da","url":"assets/images/inhaltsverzeichnis-einfuegen-0040051d2c983ae9d4bfa26f5a4d07aa.png"},{"revision":"bc22267eab5117fb4e9c044f343bca1b","url":"assets/images/inhaltsverzeichnis-einfuegen-dialog.lo-470cb92b467ad9025ef3eb8ca11d737d.png"},{"revision":"889048632e5a44f3c3a7f0db538b3f42","url":"assets/images/inhaltsverzeichnis-einfuegen.lo-58ea7b3c7d2326c10068ab1820317725.png"},{"revision":"178e244e66f6411082a9cc1817d6506d","url":"assets/images/install-macos-4f955f2a0f10dbbe4a673fca5851c377.png"},{"revision":"096a2235201e325b7d63a128a1807893","url":"assets/images/install-windows-1-8c0dbe91ebded2c32ffd06b48bc6e737.png"},{"revision":"99728a4eed8b65163a42d6cf1bdc551b","url":"assets/images/install-windows-2-2e4917a81ecf6bdcb30c7876b328433a.png"},{"revision":"4b92192db2d494dcad9be4b625cc5913","url":"assets/images/interactivetoolbox-02-814d1c841927adfe4a7b3264fca6865c.png"},{"revision":"8c859a82c03cd5da563b8706de9f4869","url":"assets/images/interactivetoolbox-03-29911a25c72b34f09d9d57ae24ce002f.png"},{"revision":"5e0b04c17c89fd699f14796bab5c4530","url":"assets/images/interactivetoolbox-04-6d72ff980c2981fd0d0c76e390a49659.png"},{"revision":"fa25e4553319db41978358f8ad1897ab","url":"assets/images/interactivetoolbox-05-d1303a71836f2289186a73744c189441.png"},{"revision":"d20f41d94c71dd62d6126ef2e271f0cc","url":"assets/images/interactivetoolbox-06-d8b56517e2480e68fd0253fab5279646.png"},{"revision":"59694d59c09cd4c49cf6f40eb20bf1f3","url":"assets/images/interactivetoolbox-07-6307d9a45f1831f3bd566fe4b98a1009.png"},{"revision":"2512bce2ba7d9010b31ac228b0cea4b1","url":"assets/images/interactivetoolbox-08-43446f33df1da5b2bfbacef54c0995ee.png"},{"revision":"121d2cd58e487b25b77c909e9c1c35a6","url":"assets/images/isTest_001-136fd65a203484e0a5bb6d9dfafc2aa3.png"},{"revision":"9cc62f5778006e01ce72340ddeae440e","url":"assets/images/isTest_005-b36336ded46cce8ed0328321882c2027.png"},{"revision":"452e3039852da1388a6d8d6261974366","url":"assets/images/isTest_006-f8a238d6f783b4400b9f8c9096b3535c.png"},{"revision":"3dab807e988e48461c3bfb3aff5764f2","url":"assets/images/isTest_008-e3630e104e141776c99cfb6ae65d6842.png"},{"revision":"8eb147cfd1a3355cf719a2440830d94a","url":"assets/images/isTest_009-d61a29484442a8ae33e014b6d0d0277c.png"},{"revision":"f709e87e8df6530ad002cab0ddc91b4a","url":"assets/images/isTest_010-6bca03dc667a81b819629ff8054e926c.png"},{"revision":"5e7c7f656e102a0493e09f1bf552c018","url":"assets/images/isTest_011-5f19e4374d152552baef38d1cb85a653.png"},{"revision":"6d02465b650a92c3f8a551d54f323351","url":"assets/images/isTest_012-f202ea455b94f021170fc48997260a19.png"},{"revision":"d311fc7704566f8a9e8c7654755d859c","url":"assets/images/isTest_013-6eec3b62605b29e11b642cbb4c0fa8f9.png"},{"revision":"835e5e6b129a984a34153120a22efe01","url":"assets/images/isTest_014-1ccfe880fd10b31127eb382ff3d6b336.png"},{"revision":"712745f0fa39ce30acb7b19d68626689","url":"assets/images/isTest_015-1cdf59a2cec0f154688522e220432da7.png"},{"revision":"c90fc6ed19e25b8fe45f9f7b04c76345","url":"assets/images/isTest_016-040a8b46f9192f6ee4973a7aa2e23d62.png"},{"revision":"7155d3ae3014318921e28d2db2ed3cfc","url":"assets/images/isTest_017-118a58bc7fbeb1c5b70c013ce1557485.png"},{"revision":"c520f412bf48eed47e61d061a515d5f5","url":"assets/images/isTest_018-c44d14d0532ed5b408d824af728f2879.png"},{"revision":"63efc466ebeb66f8d6dbc7495f6cada2","url":"assets/images/isTest_020-9e493d2dc1ebcec85b17d97d1624c4e7.png"},{"revision":"955e926e6e50279430196c54b0dba0b2","url":"assets/images/isTest_021-38ef0e51989bb70c16ede4266d4ae454.png"},{"revision":"8a738cda0e9c959c6d7a2750e82dfb8d","url":"assets/images/isTest_022-ea1405c46cce97b22c297855bd190415.png"},{"revision":"3e98b90674abd971f30ddab92b5a04ca","url":"assets/images/isTest_023-6e7ba1db42086f7bb1a8ff70d9c5da03.png"},{"revision":"080106f2f57ae9bee3459fffe3fac4d5","url":"assets/images/isTest_024-b3a4a5305b19f6ac087d2799bd52ba5c.png"},{"revision":"377791114e03c76063ea769fc8a9fa3d","url":"assets/images/isTest_025-cf6cbf967427574c054102b45df86405.png"},{"revision":"458bad69cb985b59572b0adcde06fd03","url":"assets/images/isTest_026-295175f2a4b8f2333e29ac093a03fb15.png"},{"revision":"809b0fbedb3e940948cbcd91374851b1","url":"assets/images/isTest_027-10d2b9cd22d9b3914dddcefc8c6912d5.png"},{"revision":"1109cb1f9076675538ac2f2fd8a99d7a","url":"assets/images/isTest_028-b96c5206b2637b9459cd0854a7fa65fa.png"},{"revision":"ddea48a766904d8d367e1dacb8676f7c","url":"assets/images/isTest_029-0493fd32cd9997e1bfdb3df2bc7ae5bd.png"},{"revision":"205bcd3c142bb24e086ceb21f2be1932","url":"assets/images/isTest_030-c3b14c3dafef53ca8091e806d8e78740.png"},{"revision":"05934e06cebf42ec6e337e391887e493","url":"assets/images/isTest_041-d2e9fb6ddc73e77a7097ab575cbbfce8.png"},{"revision":"d6818a6ead4d1173a26f789953dfb2ed","url":"assets/images/isTest_042-582ac27ac2033ad9e15ad3e0367a3ddb.png"},{"revision":"5ab345476bfe32f28e89bfc31e49b59c","url":"assets/images/isTest_044-39d40f2e38f9cd5d4b0889626da784f4.png"},{"revision":"7b3b25855ee6dfd4fde5807fdb3cd45d","url":"assets/images/istest01-c1640465727507ccdb51c94fb376d8b4.png"},{"revision":"c1e0185c4fe03c267724aacd32013417","url":"assets/images/jabra-1-7a138f130595917ed4ac42c216f8abe5.png"},{"revision":"7d11f1d504f81be00ddec1681b3ac219","url":"assets/images/jabra-11-93fea6b798b646107593dd9be7754f39.png"},{"revision":"1f9dbdea2148fbce179ad4df36dad956","url":"assets/images/jabra-2-c83bc649c4576ad789b6a973a84550f2.png"},{"revision":"1060b33fbb521b9b0838945d55d807e3","url":"assets/images/jabra-3-9708308d2ece067261bcf017384a3eac.png"},{"revision":"d7b6a19f7b7941e1d83cfabcc1977dd1","url":"assets/images/jabra-4-2684e446cec0a0e6cbf946dcea950929.png"},{"revision":"12d26eda75f7173bccc35726106ee2b1","url":"assets/images/jabra-5-4068929b4efb0d71fc85420882ebc594.png"},{"revision":"2c1823cc61327a3d6c05ad26ccd1451d","url":"assets/images/karbonkopia-cdbb5c061eb7bee3d363e520b1762a78.jpg"},{"revision":"3fa560c3193a5e5dd96cf00097543f31","url":"assets/images/keyboard-alt-a5db0b1f4b9c8f7f8b1b2e83c5d51605.svg"},{"revision":"885f5f2fdec93eafca8ab835b4797952","url":"assets/images/keyboard-control-62fe500fcd1a4c9c6b55c2798958f551.svg"},{"revision":"87b8a4b5e00933e67d73b0fc13e791f2","url":"assets/images/keyboard-shift-return-858e284c0b89a031ffbc2dfc9832a90d.svg"},{"revision":"08a2ca4318ed4337ab98fc62d6ac6b32","url":"assets/images/klonen-03454989ee4290d084eb0bde12f7cdbe.png"},{"revision":"4330b956d737bf742b9f2fabfaa4d041","url":"assets/images/koffer01-7947aea31e6ce5573ac947fc8a7fdbff.png"},{"revision":"050eb59dc170cbdcff988d3ee8a2cbe1","url":"assets/images/koffer04-4cca30ecb442ec43c292e6b162acb1b2.png"},{"revision":"10ddb22bdb4be07fddac132d8454215a","url":"assets/images/koffer05-3f0fd2c0039b4c3d47514aedadfb89b0.png"},{"revision":"62522a2c371925f8fc14506c156302e4","url":"assets/images/koffer06-4c5101a4a4b546ff822434cb0a4039fd.png"},{"revision":"952354fe3f218ea76c7879d0567ed531","url":"assets/images/koffer07-f5ed1755d5dc5d75d16980a9bc14393f.png"},{"revision":"f7a7a5a55cd1729c18b594372bf4e52a","url":"assets/images/koffer08-0c6ff1559e8c1de31e9c77646be98465.png"},{"revision":"edeee4412ca0e61f13073d338812cf8e","url":"assets/images/kopf-und-fusszeile-db15a9b76d8546d2a43cfbc48c09ca22.png"},{"revision":"52e1f790bbf5f911cbda5747533fc074","url":"assets/images/kopfzeile-bearbeiten-f9696dc7f4a929f44f225f917ca30935.png"},{"revision":"7342e042a5c1f00d7d0755393a9882c5","url":"assets/images/kopfzeile-bearbeiten.lo-f85660bfa0f4d8ac7965e6708e895794.png"},{"revision":"52e1f790bbf5f911cbda5747533fc074","url":"assets/images/kopfzeile-bearbeiten.ms-f9696dc7f4a929f44f225f917ca30935.png"},{"revision":"6419be13b4f6d73b3a6c347934b54ec6","url":"assets/images/laufwerke-f3f772fa3045f53be7b71936cccb26a4.png"},{"revision":"6d121f12a059c702c426fdc04175d02b","url":"assets/images/layout-waehlen-81d6c745e9b7cfbcd769d919b0d968f1.png"},{"revision":"cccea79da770011a7db8445b674a97e8","url":"assets/images/layout-waehlen.lo-87bd00d91d4c19c568611c062878427b.png"},{"revision":"efde9f23997fc5ed89a824d2b2557796","url":"assets/images/layout-zuruecksetzen-1b84238d479ff35bffecb4ef1266069d.png"},{"revision":"bf9292fe848a14676224516bc778031a","url":"assets/images/layout-zuruecksetzen.lo-18615433850f25cca2022e0942bed260.png"},{"revision":"79f28301e128b1af2066428b2f4e83f9","url":"assets/images/leseansicht-firefox-fe68f856676e818ac701637074158c6f.png"},{"revision":"8b2999f709659de1d303e27c52f5f792","url":"assets/images/line-chart-f9cb2ba51e2be734bae02329adf6590f.png"},{"revision":"16328bb18f8e97250b4c39a55f9b5d9c","url":"assets/images/linux-drucker001-60ca3677c4adabce975a83fa7cc21666.png"},{"revision":"4613d81e4eb2a8feef58d396f5df2888","url":"assets/images/linux-drucker002-5f7ca377c5519c003a729d0bf49f846f.png"},{"revision":"6f248018924b8924a203285efba071c5","url":"assets/images/linux-drucker003-d681d17572e2d34d665acf080d998a84.png"},{"revision":"c5c0f05c37ba76156a3598a8bb3cd56d","url":"assets/images/liste-mehrere-ebenen-7a4647b2c8f82ef648997b8d3a28564f.svg"},{"revision":"8aa37b37b4971375a90462537f16c6af","url":"assets/images/literaturverzeichnis-423428b8867199f58a8a013b03f83674.png"},{"revision":"a6e92f5e1562535339d09495fdfbdeab","url":"assets/images/literaturverzeichnis-erstellen-6ec1c95b9ad6e8f4316199973df71732.png"},{"revision":"aa4ed9776d7144e2e2d0dd6130349d1e","url":"assets/images/logi05-43d47bbe4b48d021cf6af281025a02fb.png"},{"revision":"32d80f7884a3159bcb158961637d35ff","url":"assets/images/logi06-38925ceb04c8d6401534520af97fc097.png"},{"revision":"7c0b81259eb150f1a64d60d803d0ed5b","url":"assets/images/logi10-e5a4531fe5fa40e8ebbe2647ee1a6296.png"},{"revision":"e34bd6f9d74872f1f269b39890c0b49c","url":"assets/images/macos-check-b49ad9296b2c39a237c4178e6c2ce31a.png"},{"revision":"8748796082dbf33641f1643df3b33e03","url":"assets/images/macos-install-big-sur-b8c9b5fd3e7659977ed7c7f542416478.png"},{"revision":"3ce36158545047a90fd7498952c6deed","url":"assets/images/macos-open-with-816f91b416f1d0ca302c9a3191c81df2.png"},{"revision":"44d2772c85c5c1d50d81051b694129d4","url":"assets/images/macos-show-fileextension-c389b9dccc540d323b25314e06917f62.png"},{"revision":"1ce77282e6b1be431ee8932f2a71498f","url":"assets/images/master-anpassen-e6651d0d66b264a5879e5ca8a2f0d2c4.png"},{"revision":"c3036d69b68e25db101615e528d558d4","url":"assets/images/master-anpassen.lo-5ba3085c72913743a824384dcb7f04ec.png"},{"revision":"771a115fcbfc68672ab6a64ccd644771","url":"assets/images/medio01-2b54556bef0007118f10910fc04e4917.png"},{"revision":"eafbf8b7f6bdaed3094534a7161c200e","url":"assets/images/medio03-25f85d12a68ec5d361085ed5594beb6b.png"},{"revision":"1ffd6761c46ed3ea7df6dc523f6d5ba6","url":"assets/images/medio07-3d1850a9fb38f85658412639404b41ca.png"},{"revision":"1d2893b3c46e25698ff7437c44599746","url":"assets/images/medio08-d8aecdb47b0ae2a30b8914432f1be201.png"},{"revision":"7a30ee64380486ab23184ee42be968b2","url":"assets/images/medio09-0d24b52ac29e93a087405eeb3c541e85.png"},{"revision":"6b78c2f0f131589b5e0321bdf6081db4","url":"assets/images/medio10-e847c52e82aa3f405c7adf351bf696e4.png"},{"revision":"4f707762797fb43551e8852e988e478b","url":"assets/images/medio11-dbfc1bf85602b3342646aafd73e3e1d0.png"},{"revision":"86e24424721a0f82ad48e4ba92c5a5f2","url":"assets/images/medio12-c144c0cfaf6420b9e2c66839172eda7c.png"},{"revision":"45d753de9f955f019ccecda4bee032f7","url":"assets/images/medio14-d8d0b37f407ad9ea9059437a4b5ae920.png"},{"revision":"84a55e9d63411515bbd1ce1cd3de36d3","url":"assets/images/medio15-d8b23142f88186921f47f440c6651fb2.png"},{"revision":"93513ea07c0b737e40da3b8c6eb9f1de","url":"assets/images/medio16-5552097faaf6fdedf185916bd4bb5dbe.png"},{"revision":"6a99f383e2213d3d69cff5d411b1393a","url":"assets/images/medio17-1741d7b602563ee5705082cddfcd22bf.png"},{"revision":"6b22d038d713ba7d6e1ca156e9c718bc","url":"assets/images/medio21-6e0ca9bd3cb4222359e31648b4f9010f.png"},{"revision":"306f060c871a72e16b94180a931de161","url":"assets/images/menue-beschriftungen-4963502a30dcb82b508a5fe25b89875f.png"},{"revision":"b6f92f105d8f3a725f913a0a484c4579","url":"assets/images/menuebereich-zitate-289f159ca05e96609b9f6b2fba2e1393.png"},{"revision":"afaa3d6cee825f6c1db788eaefba71f5","url":"assets/images/minion-c14c8d75537e6ac7332d324019cace03.png"},{"revision":"5d24f4646f23a0030a42f465e65467ed","url":"assets/images/notizen-79e424ea222e27e4dc2d3e6880df626f.png"},{"revision":"c318ec65f1f2825f794a1bec084140b7","url":"assets/images/notizen.lo-f5f957e002ce1e00ba9238465bf8515c.png"},{"revision":"94c6416cccce48fd2dfcb49d7facb642","url":"assets/images/OCR_006-215cc4d2e89b1407319a4f7799cca596.png"},{"revision":"62821ab2b3dac55675ab2849315ad7e7","url":"assets/images/office-1-e4e9dc8dcab7c5dc327218889ab771cd.png"},{"revision":"8082d48fe9a0efef6f315d378d2c0730","url":"assets/images/office-3-38e0e9f165db17fd2d14362bd1736af0.png"},{"revision":"3582cf91a4c3227e8faef84b07c1cd4b","url":"assets/images/office-deinstall02-b84b559b0dd9f0acd0e0f15b137e5057.png"},{"revision":"403677f8580978278dee3cdc4c9653f4","url":"assets/images/office-deinstall03-d01e012872b39db11598b931dff394cb.png"},{"revision":"55bb57f11cbd3de76ae3a161bce51e51","url":"assets/images/office-deinstall04-ecbed3ff6dbe5d503686c28a8fe81487.png"},{"revision":"bd6d75683e1b2ab21f3dbcba47127793","url":"assets/images/office-login-1-69e5a1438677108e17ff787f381f0ee3.png"},{"revision":"bde71d4474fa26d2377aa50e9d0fbfb3","url":"assets/images/office-login-2-677e9bca2c0dd1307310d8846c303c0f.png"},{"revision":"e10770beece8d3715e04534e8996cd3f","url":"assets/images/office-login-3-67c4b5d58e8f740f4ea9a1f77f9a3065.png"},{"revision":"cb617014e5684dd08174437ab79eb8cd","url":"assets/images/office-login-4-53e339eaded9bd51fb4d6047bfa54209.png"},{"revision":"13ba2328410e412c6d12b74abc166bb2","url":"assets/images/office-login-5-e36266b97dcd269973f4df1d95460bd2.png"},{"revision":"ac915ee51c1c128419f84aa98af3528f","url":"assets/images/onedrive-10-d774683402934c2cfff864ef8ea235f6.png"},{"revision":"7fda14ab7ac56212a820d462ce7ff06e","url":"assets/images/onedrive-11-e0808f871472fdd136b5174a24d1fea8.png"},{"revision":"e8e49b6becae4cd0b95fe445e725ff2c","url":"assets/images/onedrive-12-9c34569bcd57936d55791847bbfe30f1.png"},{"revision":"09a63033166872c33fb0bfadaeac80f4","url":"assets/images/onedrive-2-9ddcf7072605d9f6063d879a2c415cdb.png"},{"revision":"46da774cc24bb0351be54e689bc43a8a","url":"assets/images/onedrive-3-a5538f0811790520ed7043b13d70110c.png"},{"revision":"6c963c96197d523beb507dd21dfdcbd1","url":"assets/images/onedrive-4-fe77a8d0b8786512faf5cf32de253413.png"},{"revision":"b367e45b9b3ed12861526d42f7ca78bb","url":"assets/images/onedrive-5-f644c6025b459a965296c94408e0eddf.png"},{"revision":"7b8482aae1605fdaf5a52d4a306e37f6","url":"assets/images/onedrive-9-8acafdc28cfb588f88c1cdc5a332f818.png"},{"revision":"707160ecca1d6aea7c3ef629209d84ba","url":"assets/images/onedrive-course-sync-chrome-689fafe8eab6dedce2a72eece6035b64.png"},{"revision":"4f94a1f999f3596b67ffec011ee8dd65","url":"assets/images/onedrive-course-sync-edge-25d98580a9d9a7ecf5b86a58b26cd953.png"},{"revision":"327da981669aa7c5de3c597d5a1982c3","url":"assets/images/onedrive-course-sync-fa2607ee50b4e0ed151d748aae7c4f4d.svg"},{"revision":"bfd3b1bb6f50e56d217185855f2add2d","url":"assets/images/onedrive-course-sync-firefox-e0f81ce7c2c4ad15471e496ce05d2e1f.png"},{"revision":"ca248b7179b2135847a8e1cc7279ffc6","url":"assets/images/onedrive-login-1-53750649fc0083b90d0b59dddaa8d540.png"},{"revision":"d5a4b95bcaffb974a4a7f5019523265f","url":"assets/images/onedrive-login-2-9ab74d3c9a9d1d0e57071f2a8e6e9c4e.png"},{"revision":"2cd66724f26e375b9324e23a28de20a2","url":"assets/images/onedrive-login-3-1be84e926c53e60d7e3d86417ce688f9.png"},{"revision":"901620761c755aa66831f32dceea5af2","url":"assets/images/onedrive-login-4-02e5982c2440d5070bec9679cf224413.png"},{"revision":"d1b8340e9918ef457ebd26715942d3e4","url":"assets/images/onedrive-login-5-2933960e077e5c107c073507b72f88ee.png"},{"revision":"b6dec8341f4f02db01ccddeb65d628f0","url":"assets/images/onedrive-login-6-cd3906e740f3e649477b3c5e5f643272.png"},{"revision":"a505ea562d5d37137e2a8878e0797d3d","url":"assets/images/onedrive-nichtsync-c06f3ce8da516badeca04c426a8e9376.png"},{"revision":"93daac3c70acbb2b8dd569556d4dd230","url":"assets/images/onedrive-teilen01-2faadf4e2e21c77035d5abe0add1bd59.png"},{"revision":"138e1b0ae46a4f8f98cd853fa68e36a1","url":"assets/images/onedrive-teilen02-eba55ec97c5166ea55d31627698fb03e.png"},{"revision":"ab6179f57aaec2b6ac02ed0dbac0d1d4","url":"assets/images/onedrive-teilen03-ba93c90be0d58f3eb8b5dc471aadf504.png"},{"revision":"09ab3088ec261dab875fd9dfaf4a7130","url":"assets/images/onedrive-teilen04-dbbc51a35052b0b442cd6edf60e8e6c1.png"},{"revision":"bca4052baa1b001eaff0d2140dae975c","url":"assets/images/onedrive-teilen05-925697973ed902e7e7d1deac7efc1a2d.png"},{"revision":"7cc3babd5ac0873909f3b2e7ea6e3e78","url":"assets/images/onedrive-teilen06-b01e9842ce19508cd397e3e7d1b714e2.png"},{"revision":"cef42f7d8d2c0f6d379a49d6a2d81983","url":"assets/images/onedrive-teilen07-c1340c4f7a5b87b28453633254888688.png"},{"revision":"f165c768dd4cde64446563e623b86fbd","url":"assets/images/onedrive-win-manage-194c3af1d9e59cdec3556827f988e613.svg"},{"revision":"0eef4dcb481e469c5dabb584f08b16d9","url":"assets/images/outlook-2-a903c9f86754f4c13800bfe729df2b38.png"},{"revision":"bd3579a3a658769746b49413b81b6f06","url":"assets/images/outlook-3-3a13bae6fe640deecb2f225404f1656a.png"},{"revision":"2e06d4314311b6b62ae52dfe9446b7f9","url":"assets/images/outlook-dcaea3561dae501381816c17f0f9490d.svg"},{"revision":"36bee31a2142e21b3c17b34a5b0297bc","url":"assets/images/outlook-web-1-ac964b962dd073176a4b301571f3c0e8.png"},{"revision":"464e23c4dcb1614d34d75f6b87573900","url":"assets/images/outlook-web-reply-dbda5c7b6cc7d7eb20de484602e0ad6e.svg"},{"revision":"fe367a87a1b382db02be214f86013b36","url":"assets/images/outlook-web-write-1206a5ca333a75e54ba6c5305ad59d93.svg"},{"revision":"deea6c94e9e00bd9053c9f7aeb6fe603","url":"assets/images/owl-1-292133a9b7e5c76c38f7f28c6f258f9f.png"},{"revision":"4d50edcc6f89db6e993083921d2cd47d","url":"assets/images/owl-2-83ad8077afbde58724e05542070a57f0.png"},{"revision":"3d9a7849b2189131eaba1c45f02837ab","url":"assets/images/owl-3-2e9ab1194ef884f67c3c924b6652b678.png"},{"revision":"f38a1c1c3d29692093408b26186735a3","url":"assets/images/owl-4-4b649e74736b419e1a3d1eb353db4c9d.png"},{"revision":"f9e75cf6f51b305bbf8cac39a198bc26","url":"assets/images/owl-5-cf34ff9a9fea3b9ab7814e8a5d46b34b.png"},{"revision":"c4407cd7d7b3fce50dfa7edcfb485d21","url":"assets/images/owl-6-10c5e03cd9f9909dad476c7507614d79.png"},{"revision":"b622d223beb15b57e9fae68a241d35fb","url":"assets/images/pdf-erstellen.lo-bf3bbe0677a474dc25ef17330638deac.png"},{"revision":"cd377e0023fe38795bef0ab95e418674","url":"assets/images/pdf-veroeffentlichen.ms-e19efd0c535ffd24218a7ff34a092cba.png"},{"revision":"de0ccd3efb22555036c8d2f995f773b4","url":"assets/images/pdf24_001-50e4863007f7d278d26dc0501da431e1.png"},{"revision":"2e22bc19c36f9458f872bb32e9a75ede","url":"assets/images/pdf24_002-217e8cbef6e402eaf430ffc6a620f125.png"},{"revision":"0eadb8b50ae3112345d717e46b930fb1","url":"assets/images/pdf24_003-2479ad8fd09b943480459212e5dfed39.png"},{"revision":"6756e55874bed1bedd3e85bdb8417db0","url":"assets/images/photo-2d78721b9dbde65462aab281a81dd552.png"},{"revision":"2440d8e447909dc5f49456036330c12c","url":"assets/images/pie-chart-078968269dc433339aadda24a8361225.png"},{"revision":"f87ad84e9d246b7a3fc8e70d0e872783","url":"assets/images/posterdruck01-6865efea377788adfad33487e91e2ca4.png"},{"revision":"9b091906c196f5513be81843b33ad99a","url":"assets/images/posterdruck02-80632efa0035a81d619c6da7c85b81af.png"},{"revision":"5c2354c507599d2e74b90aa850673a27","url":"assets/images/posterdruck04-80d5cb4dfc59e489d73745b398e765e3.png"},{"revision":"7ed728fd8a548c250c2735ae8ca278e8","url":"assets/images/presentation-ed7a573d5289e6000afd7a7de75a43f5.jpg"},{"revision":"a0133aecc5e51758207a6424aa547323","url":"assets/images/print-1-1d5212f6ee0eaa2843f30feec299379e.png"},{"revision":"f1f7b12784fa861ceb36ac2868f540f1","url":"assets/images/print-1-4816413d224200819a3a1f04919b119d.png"},{"revision":"e26d3e19ddd7a218d232433bb46b6437","url":"assets/images/print-2-a2c4ad2e67f8183b768a8df17cfd1e40.png"},{"revision":"f8f881ca35ee19357e4d0b0231d7c95a","url":"assets/images/print-2-ede3f668bf61e2e723c7d3d15b5c7c18.png"},{"revision":"dab69ede97801ff221b5bb203eb12ad8","url":"assets/images/print-3-7925f068e1088ea678ea459861cce495.png"},{"revision":"acf5dd333d73aa960034ec5a8706364a","url":"assets/images/print-4-28c65c8e7be6cab8b5c489f291a586fc.png"},{"revision":"c53b7669cda90f2a9a8a1128d54613fb","url":"assets/images/print-5-a476c58def022822f430de6a2da8f0e2.png"},{"revision":"59023c9eef02f0022850e9ffde94073f","url":"assets/images/print-6-452a7d0b7d12e487f521f0dc46fa3a2d.png"},{"revision":"21e06a167ddbbd45c9199966bfb5d368","url":"assets/images/print-login-235f13f0ca9a0939cb56ac7c9ae50b94.jpg"},{"revision":"9594aa0a930ec62e570b66beb66e29b7","url":"assets/images/print-menu-aec173431c640c6c1f7b45c7261d5318.png"},{"revision":"cd1b74c22a558cb303a6527f33bc1a3a","url":"assets/images/print-printer-116d07ed6df5ee832d4d8ec7c2d45595.png"},{"revision":"6eca3636fb6373067993f10b4dac17fb","url":"assets/images/print-value-loader-5dbb557283005bef86462944e5d36995.png"},{"revision":"53c1d1f0e5dbcdd10b5932ff41f39667","url":"assets/images/publisher-2e06533dd5896a30893825e87c4645ba.png"},{"revision":"d3ce9944c233165cabb87bb2ba817b72","url":"assets/images/pw-03-69b041a778ce11dfba20cb92d2acc313.png"},{"revision":"7b21af9c90cb10d6ab422e7f971270c6","url":"assets/images/pw-04-af350d34a174c52095357ea866e362d1.png"},{"revision":"3c817ce3ad921de407f5cc83edba87de","url":"assets/images/pw-05-4d5df40973bd9f7efc72879ba043f216.png"},{"revision":"e13f0292a4eabdfc6c02e7194e0f6a7b","url":"assets/images/qr-blank-logo-58e2848524531c7cdea51c5d892e5df3.png"},{"revision":"3544c950e3dcd39b82334633cf23a42e","url":"assets/images/qr-blank-settings-46213fbe2ea8d4a73ff779046596bdae.png"},{"revision":"bcc7fad0e1d3f2528731995a447a6bb9","url":"assets/images/qr-code-70864945471368be908e5185b53ab550.png"},{"revision":"97de6e77137eb7faa49c4459963cb5a9","url":"assets/images/qr-code-cert-42d1fa24ae13c48c85ec6fdf96c544ff.svg"},{"revision":"12a2b594aa8c1f314301e8489a30059f","url":"assets/images/qr-code-enterprise-wifi-7766f7948499f2d983cc049da16473a3.svg"},{"revision":"d8b24e3ecfb9f35c8885154301f2c717","url":"assets/images/qr-scanner-banner-68ddc4405418449806d4ba03abec4a23.png"},{"revision":"8402b6cc0f85eb7f407f3941d4ca435a","url":"assets/images/quelle-bearbeiten-105d16b89c140909ca36400df4523abd.png"},{"revision":"a704cecf1ecd89f1db95dedc8a0bfc5e","url":"assets/images/quellen-manager-58ba7b75bbd695c09f52ed6d76a6c97c.png"},{"revision":"85156f6377fde999b5cdf376eaebc8d1","url":"assets/images/quellenangabe-einfuegen-5889cda0f4d156e5c6f720e723d44ae0.png"},{"revision":"8fe06e4c5c043b1a4832426e0ccc503d","url":"assets/images/quellenangabe-menue-c3811b0643392d4434c222e4c7a5d211.png"},{"revision":"83c349c298a96ae4c914462dc3e2b803","url":"assets/images/rechtschreibung-253e07f9ff88d4389c09b6196c520fcf.png"},{"revision":"823c310d63e710b3ce0d19a313fe632c","url":"assets/images/rechtschreibung.lo-96bd6a08fb9bea79bb5c649d872e181c.png"},{"revision":"7da9538173db9c89fc9111fc1e861b62","url":"assets/images/record-5b8a52c4ab16a1a49a971f688368bf56.png"},{"revision":"18cc48c8da9e6361c2e59652e92c6afe","url":"assets/images/referentenansicht-435aeae259f3adddc3e35a069d17212e.png"},{"revision":"dab16e5dc2e2ace4b65b3b6955b9b729","url":"assets/images/referentenansicht1.lo-d7d0ea2fe1b7eb9cf082d87446011f03.png"},{"revision":"7696f49d6a0bfe9a178342f45eddd0b5","url":"assets/images/referentenansicht2.lo-5aa1488756d8e7268b553ebddb5e609a.png"},{"revision":"b1a973d7ec04e1c69f32eee8fcbbd68e","url":"assets/images/remote-69d81d02a3609dbc1576bce302a3b4da.png"},{"revision":"b04020001fcf0f198ad2cb3c2a1a1e54","url":"assets/images/ribbon-c086dd822c967424ebb7b173d02010e0.png"},{"revision":"8fd4ef013ded5fc6fdaee9fd499829bc","url":"assets/images/runden-6cb4087d4d8f378c5c6918f23cee963f.png"},{"revision":"12c89494ee8998c5f2d30a8934772389","url":"assets/images/russel-2012-d419864246daf3672e0c09881c351c38.png"},{"revision":"552887ac8e2546a54ad5c9e289737cbe","url":"assets/images/screenshot.lo-22348f9dc8e605d04c877a5cea8ced1f.png"},{"revision":"403140f9345cb3d634aa80dc29f2cd6a","url":"assets/images/select-table.lo-3a6c39774f71cc3dbddf303dabce1776.png"},{"revision":"029d4c161e03446c8078d1f09dc80881","url":"assets/images/select-table.ms-6c540754e778b6ff5042043dbb8bc160.png"},{"revision":"0ed02ac795c419cc60e31868e2965c85","url":"assets/images/Slide01-fdb5f3b9bbcab65e1d633dc6851badc1.jpg"},{"revision":"0fd15bef957567aa8b29bfea20c1a4c7","url":"assets/images/Slide02-984cde896b1e3424d4c7529623d5a29b.jpg"},{"revision":"9c662f2b2c0b0f373b7671d198fee249","url":"assets/images/Slide03-005f4312f2ca2c13cbd9bfad86990364.jpg"},{"revision":"ec7b7f42ec21ec4e1ad62e99ad7d3b6f","url":"assets/images/Slide04-d317f028128773f68b7bdbed72b0b191.jpg"},{"revision":"fc7efb0df5fce73f18e35982b10a5542","url":"assets/images/Slide05-3a3258d4998a68e87d6228a678495bd3.jpg"},{"revision":"e3b3ad697051a36f1322ebd4d02add1d","url":"assets/images/Slide06-5eea4b9ec1398b2f8849fa688f7175be.jpg"},{"revision":"e4915b0d4f930e0f8fb5dba31cc13073","url":"assets/images/Slide07-041d0ff1fafa6af3783351b3d261e0df.jpg"},{"revision":"6c8baba07e096aaa71f3bf5d11aea730","url":"assets/images/Slide08-0a198e21fec7471edccc9e7bfe0d0b4e.jpg"},{"revision":"dfa00c820d202f07326662253fbe1fc1","url":"assets/images/Slide09-9c4a2a8492eff8a2d695efa32b4e5cfd.jpg"},{"revision":"b41e0add9524e3e61537916aaa1e07fa","url":"assets/images/Slide1-14e322ce16e2f01aa6524692b4084543.jpg"},{"revision":"8738c8b342801dd8a0876e60c776477c","url":"assets/images/Slide1-38c675ce0602b68c859168ffb4d104bd.jpg"},{"revision":"7e2f552a3d4b532f2d8e7371962249b5","url":"assets/images/Slide1-4cab3e46f76ba72689e019bf412a40b4.jpg"},{"revision":"49ce6f14bad1ff05d8beecc06892b3c2","url":"assets/images/Slide1-4e3f7d308bf03a1413c88514eae58edc.jpg"},{"revision":"8488726dcaefce0766f1406916db8162","url":"assets/images/Slide1-6ae83c9392ee098a252ad82bf5c9c436.jpg"},{"revision":"8c5d97328e8b4e6abfca96b3ad6a4f59","url":"assets/images/Slide1-7d6588a676d19f93d66bb3ced3846b7e.jpg"},{"revision":"a15a4d8b3d8a390b77214f1cf7023d63","url":"assets/images/Slide1-cbcce805ccb81b1b1025a589fb8fac2d.jpg"},{"revision":"91a67148d39bb856317565cb409a44e8","url":"assets/images/Slide2-5bb3896bcf0fe4c25ea96e7ba422a691.jpg"},{"revision":"75ce7c572b71ecb619e50e5a6b302c5d","url":"assets/images/Slide2-67e0b6310017189585819bb18027466e.jpg"},{"revision":"bbeb84141db1ab3cb3f068ae17b2068f","url":"assets/images/Slide2-80ef4f19f6b30f40022fd902d9161519.jpg"},{"revision":"58b6d23dac0eafc4a717259f6a6b5232","url":"assets/images/Slide2-87c84a8ee2b76c6de1b38126f25d020c.jpg"},{"revision":"6b7da3bcc0772c11eb685fc82134af74","url":"assets/images/Slide2-b861f425ab9b2e910d4d510840112193.jpg"},{"revision":"1764645e072364213af7c922dd004b24","url":"assets/images/Slide2-e09f28b2172ee4b1289f3acc24951589.jpg"},{"revision":"23d4d1b0edcaac69aaa0c24cecd2d507","url":"assets/images/Slide2-f58298b5c80987c46b46e5bd685186c9.jpg"},{"revision":"bee8acbff2188d8194e6b79d2b0ccd8b","url":"assets/images/Slide3-39c9e8a2aa67ff6f59094a4fe90b91c2.jpg"},{"revision":"c898f43fbc5cd083eed2ea7065b88de3","url":"assets/images/Slide3-5890c4f270ecdbe6cd65a0ca656f5b8d.jpg"},{"revision":"0ba15b65ef40a4e66bae1302dd1a07df","url":"assets/images/Slide3-981349ec9c4bcb6c7d839a828019114b.jpg"},{"revision":"9f83c5016671e39435c11fbce9f3b809","url":"assets/images/Slide4-324731f4aadcb6351433118397827541.jpg"},{"revision":"d9347b6d7b8d00a0c8c9b9a330cfc078","url":"assets/images/Slide4-f26fc2407812c010a93dab1e5d91db05.jpg"},{"revision":"4347c11cdf864f974bfeae69e253be59","url":"assets/images/Slide4-fe58fe550543cbbd24cdc80a167359fe.jpg"},{"revision":"086eedd4b29ff845e15400f58bb39a36","url":"assets/images/Slide5-03ea8d8d056cf9125ca8c88056064777.jpg"},{"revision":"1e03821944539dc486cc71b33abb5e3d","url":"assets/images/Slide5-8559eea4faf6dc48b72b936400cea2be.jpg"},{"revision":"fce48380315300b4d12390e4b4a443c3","url":"assets/images/Slide5-a477a198d64136f5ff1ab3c1d98bca51.jpg"},{"revision":"7a58392591012cdaa6d35703316e0a60","url":"assets/images/Slide6-b99a664c8aa3c9b7eb9eff963cf5192d.jpg"},{"revision":"874c274956f97a59bca305bd381236a9","url":"assets/images/Slide6-ed78f690623e0600fe705e7b63f50c87.jpg"},{"revision":"bc2bc84229162faa82ecccdfe8deaac2","url":"assets/images/Slide7-eadedf15dd9f2bb2f5ec602d4f9ad78c.jpg"},{"revision":"c3a96591a00d12df71d821f7322348fb","url":"assets/images/Slide8-02b6711b64800e9e1f2ef5d9747f0152.jpg"},{"revision":"0f897424fe6f7822b1912b3fdc312c69","url":"assets/images/slidecast-3809014ed2eaf2f961cdb967245c1008.jpg"},{"revision":"2408b309b1d9526cddf01113c6c80ac3","url":"assets/images/smiley-pixel-vektor-e7d40023efc98095e91df540880c5ab7.png"},{"revision":"c1a6659445022b3f4961abcbecf92848","url":"assets/images/sort-dialog.lo-1b6edefe5573b42b66c32e8199fa4c68.png"},{"revision":"f036403c428632dc344c3741b914c835","url":"assets/images/sort-dialog.ms-d13bf20c188a482d2df4826f0bfe755c.png"},{"revision":"9b5d644d908d5bb7db1439d146068fbf","url":"assets/images/sort-menu.ms-3fb6022d355877cdf70a4d67ac1f6917.png"},{"revision":"6e259fcf22f5c7012c43e4e3eef9f540","url":"assets/images/start.ms-138453e4b905c9263a382cfae827c34f.png"},{"revision":"bf16b1836c5da68de713313517d2201d","url":"assets/images/stehpult-01-3d435d3c6eeb8a6b1a7f4a54ceae32e1.png"},{"revision":"2ba4eec206786c625800f699abf1c8bf","url":"assets/images/stehpult-02-881a0075e2d0b3ad793b86b4694ee3f4.png"},{"revision":"4435d4ca36d589fa80121bc366bf2d86","url":"assets/images/stehpult-03-0801458360f1c218c9f623ec7cbfd553.png"},{"revision":"0527192a8296985c28f48b0eb31c9d9d","url":"assets/images/stehpult-04-ce9fda92d5e3fc19da2c94f69a2624e3.png"},{"revision":"90eca5f9ec4e9f17ce3946abe99a5c7d","url":"assets/images/stehpult-05-4e444d67f8b530a2281b4dce21f6e56b.png"},{"revision":"540135ada4ac37810fd0cbd03cedde5b","url":"assets/images/stehpult-06-968bd60fc62ab612d9921d53952f8c6a.png"},{"revision":"20341485eef06f1e8de7b3c4f664c901","url":"assets/images/stehpult-07-f06d786334a418e188eb17667b17b969.png"},{"revision":"6960b9bebb7dae17d889a60c6f7ad2bc","url":"assets/images/stehpult-08-87e3385836a29e7dc5ad71427b46b4a5.png"},{"revision":"fe458e7e25c40617f76a36f3c34a95ba","url":"assets/images/stehpult-11-a103513e7ebedf71308235597809e5c2.png"},{"revision":"ceb35c4178e2d26fd866ea573972734e","url":"assets/images/stehpult-12-810660ede07511622b1187c135f9f0d5.png"},{"revision":"671958380eeb413502b4faa7b451a131","url":"assets/images/stehpult-13-e508e039c23b7e4edddace11508ca6f3.png"},{"revision":"d0158b2e784c82714abeca1d3c44e9a3","url":"assets/images/stehpult-14-8e85d7efd86436fa3be3ec399da78536.png"},{"revision":"6f4bfabb12b8997a003b9ec6aff8b107","url":"assets/images/stormtroopocat-15a6c64031c7b2dad4d7b88a914a6333.jpg"},{"revision":"ef8a4378600f9dbfba59cec791357a13","url":"assets/images/stream-01-c150e44846de93cf1a46ea63efa98506.png"},{"revision":"442afc3ff70a89d26c81ae6f239fd640","url":"assets/images/stream-02-ccd5057c10f828b447e473f1df679d40.png"},{"revision":"1abb85d8466ba50a7c25c378b3ead69e","url":"assets/images/stream-06-d9be75aa0e060c43b40e2c6d9b7cba5d.png"},{"revision":"28d137d8869e8ef2781adb21a21bc7b2","url":"assets/images/stream-08-a326ef1ba0e547808f340154b7a3a9f7.png"},{"revision":"dc96a7d7f5a7728898b0e22156a3d42d","url":"assets/images/stream-10-93b85cb11fad79ef0afa016e466c9e75.png"},{"revision":"295ffe830f0f59865744a1e17c968789","url":"assets/images/student-card-9695d4d7d6005d4896209640b86b7a5e.png"},{"revision":"feb465d38484415cf8759aacd35cc0c5","url":"assets/images/stylus-6e9317d41cad11f47eb3bec3ec89a02b.png"},{"revision":"834f4c916c671ca8b2f505094db80973","url":"assets/images/summe-3182e2f797293cf2a97bc7af61f5c983.png"},{"revision":"730d0dc9b2fd35da8db643e3577cde5d","url":"assets/images/symbol-einfuegen-b7c5564554cca5944984ab8b30e802aa.png"},{"revision":"8a5d716547ebdc97ae70c3235d37d070","url":"assets/images/tabelle-2642e8dbcc13aa210b6cb70b44929b0c.png"},{"revision":"8fa116248ea58e186082b68c0f2c41df","url":"assets/images/tabelle-einfuegen.lo-c9e4d4fecfe7632a074a70f701816211.png"},{"revision":"71bbd887426916e28c8530f000da25ff","url":"assets/images/tabelle-einfuegen.ms-909046e1b40ba3bee4c707592eb0895d.png"},{"revision":"dddf60dd90ba5920f86dbbcb064c2d9d","url":"assets/images/tabelle-formatieren.lo-0f56dd890b8024fcc64288f8cf9d5185.png"},{"revision":"08aae17a16f52ee3ea10b25472375a34","url":"assets/images/tabelle-formatieren1.ms-63f279e0cacdc49c4cafd90d01b420ad.png"},{"revision":"189c913af9bb5a844c92f6693c066a89","url":"assets/images/tabelle-formatieren2.ms-72781eda1dc9b784c8b4c454b985ad4d.png"},{"revision":"655d19c4bf5f6ba019c96745974db436","url":"assets/images/tagi-mit-werbung-e231d033b7e2647c570b94388ee53eba.png"},{"revision":"d49c55cf856fb1f28652a48f39877c54","url":"assets/images/tagi-ohne-werbung-fff81ba1b56ffab6e056965cc606c3cd.png"},{"revision":"5543db20309761a5e87d6bb2646b0291","url":"assets/images/tb-2-ba4251900e79b721bbe56ff55b01443a.png"},{"revision":"193205a16f61fff9265cf5b1af9382d6","url":"assets/images/tb-addons-7db2271aa2642a08ea7289b4de906db8.png"},{"revision":"83a82bcd08064c7c32d7ec77255ea1a9","url":"assets/images/tb-sent-6a3ea2b2c17c912ac241d75e8da8b44d.png"},{"revision":"365a087ecd22e207d5279c66feead47c","url":"assets/images/tb-subscribe-b8e45db03707993a8535647a09cd83ef.png"},{"revision":"d54f62d368f32e2101ddf0d956892cc9","url":"assets/images/tb-trash-378396611529d5ea5384452ebbddf2ec.png"},{"revision":"fcd976df53d9c31fb544f496bb603861","url":"assets/images/tb-version-f83923742d8fc65d60f9f0acdae724b7.png"},{"revision":"23262525369532b1cd5a96f64347f37e","url":"assets/images/tbsync-1-4925432473fa5a220a25df455f884bf8.png"},{"revision":"519afaf1971434874878e33198d48dbe","url":"assets/images/tbsync-2-5aef3600c5ac0040f67cb532589ca6a4.png"},{"revision":"ca15eaeb893be04d7c354c5ab04ff648","url":"assets/images/tbsync-3-a953af831f741e2515802dbba9f48345.png"},{"revision":"e12bc50a43484f9a919f30a513b4955e","url":"assets/images/teams_einstellunge_experience-638a47a995bb0eb0cf032ed2fd34a66e.png"},{"revision":"986cf5c8728e79e163dc6fcd1d760710","url":"assets/images/teams_einstellungen-e7ffb527b10c7a083c7f47caf5eb7012.png"},{"revision":"2e7b6f3d6d7b9e547780c6409ec92383","url":"assets/images/teams_gruppenraum_betreten-5a7f5a5c77bda5a5bea31df4b44d0745.png"},{"revision":"557e2c7cea004abc49c5fa7d9d4d6d98","url":"assets/images/teams_gruppenraum_erstellen-5f8ca964b0cba0d73adef96331175225.png"},{"revision":"9fbf0e373a5b5ef4c32ae916d6fc1aa7","url":"assets/images/teams_gruppenraum_symbol-e2ad73f89ad0444d51aba16dcf9d2e05.png"},{"revision":"57bc094bb0d71fe74e1f48e297c6ac98","url":"assets/images/teams_updates-1b9a0f66155f7f5393fa96735a517588.png"},{"revision":"edfdd47dfecf9017c0370cb40f4725d8","url":"assets/images/teams-1-4d54f4a65f87906e5a7bdce676b5ab4b.png"},{"revision":"1302d41ea5e1186bc86921a78d8fbd26","url":"assets/images/teams-1-ac77193b879b35214f0801cbe8fac3a9.png"},{"revision":"1668e821e342853037247963770cf103","url":"assets/images/teams-2-6e3d4aefa984e3cb914847b353cc6e53.png"},{"revision":"27ed65ab1c9a1045ae42c16a921f327b","url":"assets/images/teams-3-b7e823ad094717c50322280a515c8db3.png"},{"revision":"4e3bcc759fe136357c9ccf88736a9113","url":"assets/images/teams-4-97c55fa20a646c52c87aca0912209718.png"},{"revision":"878efae50323861804febbc24d374d94","url":"assets/images/teams-5-1b059713ef51c209d1d4ccb98b7e58f7.png"},{"revision":"0759531c181e38949fcedb6045a70993","url":"assets/images/teams-ansicht2-ec9621c363ef2d3d70ac01995ae8bf1d.png"},{"revision":"3a52a60584369ce2d3fdd5b6520b7315","url":"assets/images/teams-ansicht3-e85ea2f1230e70f75c478a90a3478a79.png"},{"revision":"5f8cee6c17c84073b31dd44df7246db0","url":"assets/images/teams-aufgabe-s-3e7a4571e30dec485ee0ac790a198fd6.svg"},{"revision":"1acb31bd1ae5aefdf774a546ea2bde74","url":"assets/images/teams-extern01-d4df9d00a23817ee2b13284d2d35f965.png"},{"revision":"5ea78a4e816b9c290e917649f73af96e","url":"assets/images/teams-extern07-f9ede372177c4004c0ba3e71f5b16de4.png"},{"revision":"e559464abac65e93e17a0b9b5f8d10b0","url":"assets/images/teams-extern08-ed9469de097cc937358d2d45b34b9701.png"},{"revision":"3900fc92b34dac08c2ad4f2fb7f12919","url":"assets/images/teams-extern09-84d8b041ebdcd5816a46a0aa200099db.png"},{"revision":"dfe2f48447bfa240ca0b022650b0a6a9","url":"assets/images/teams-install-1-b8889d0e8b90f3bb92dcb185bef55d73.png"},{"revision":"1ba18446d71befb5046635a9faa64198","url":"assets/images/teams-install-2-b42ab4f1cb26e633e0688e0b6956b016.png"},{"revision":"8a66aa03538e32c78bb282d6be4ee7e4","url":"assets/images/teams-install-3-f310b98d0989d19a2fc9f9a6f328cabf.png"},{"revision":"fe60e65472948aa30bb8173605e2133f","url":"assets/images/teams-install-4-29a3735b46c13d81c3c3b192e8d9dacf.png"},{"revision":"8ef8fa5971a19cc0257fe814d448814d","url":"assets/images/teams-login-1-83aee4aa86ec98ceafa5dc1702567c4d.png"},{"revision":"b07186b29211eaf10e58262f53664b7d","url":"assets/images/teams-login-2-1a829e0fce9b5de31ac44481139fb366.png"},{"revision":"3de56ed5f7206937da5553ddf4de94e9","url":"assets/images/teams-teilen01-c73a1138661346bcc6d97a5389cc2b72.png"},{"revision":"b8da1a18e413bbaf634793f68d4e5d49","url":"assets/images/teams-teilen03-97fe626a9449b54a206218294cb4b13d.png"},{"revision":"e91f88d25e94270076444f932835cb9c","url":"assets/images/teams-teilen05-e48ad32869dcb81eee0490a7ddc676d9.png"},{"revision":"340affa9ae920dd57c446698ebee1be8","url":"assets/images/teams-teilen06-f5b337d51b423dc36a43eb68174df90b.png"},{"revision":"9a62969d8b533776ece23f2c931df5f0","url":"assets/images/teams-verwenden01-0d0de2b6aec2cf69032509963ad7d831.png"},{"revision":"5038ef54dd80fc9322d44faa81076a79","url":"assets/images/teams-verwenden03-a99b8025ec1bfffdeb08a00a77c7b4d3.png"},{"revision":"1e8eb679f677c1109462cf2a8ec575d9","url":"assets/images/teams-verwenden05-9ee87dff86bf04335e0dd150da5b4b5f.png"},{"revision":"a814d999c2f474a627aaa0b44d7f503a","url":"assets/images/teams-verwenden06-e5a755c1f8c709b7d4029f7ab8ab8f24.png"},{"revision":"0ed67feec3361ea900f291fbb238a06a","url":"assets/images/teams-verwenden07-55a45e5914cc53229d4fc9a0f23eaf6d.png"},{"revision":"671958380eeb413502b4faa7b451a131","url":"assets/images/teams-verwenden08-e508e039c23b7e4edddace11508ca6f3.png"},{"revision":"d0158b2e784c82714abeca1d3c44e9a3","url":"assets/images/teams-verwenden09-8e85d7efd86436fa3be3ec399da78536.png"},{"revision":"ceb35c4178e2d26fd866ea573972734e","url":"assets/images/teams-verwenden10-810660ede07511622b1187c135f9f0d5.png"},{"revision":"84706e9fc562596eeb258414e71c2e57","url":"assets/images/textstruktur-4907afafacb40cfa82ff5d3f1e53b55d.png"},{"revision":"8fbf330782d16ea1c6e8530ea673a943","url":"assets/images/thesaurus-47af276d91024dbb66dc62b0b26109a8.png"},{"revision":"01b2d942217c49029a883283f32d07c0","url":"assets/images/thesaurus.lo-547b24a066f1009923d2ca9ca9ed7894.png"},{"revision":"d8082f881f5f96c8201fb937c26c4a50","url":"assets/images/thousand-and-decimals.ms-73da3ad44569095beee6f91fc89af910.png"},{"revision":"c4c30f53f97f48a66c68d2941fc4e84a","url":"assets/images/url-1e694757a3b972eec7e68e45effcf863.png"},{"revision":"da6d59394f234d2228a6dfdd1c73c65c","url":"assets/images/vancouver-bib-2a8ba505c71dc9e3ecd939a320ee7dbd.png"},{"revision":"be9d7665e6325e17876287a889c152e6","url":"assets/images/verschiedene-layoutvorlagen-a25cde7b63078e14c98db5bcaef9772d.png"},{"revision":"88e7f37f91d9006ce70606b4107a627e","url":"assets/images/verschiedene-layoutvorlagen.lo-613ae585da54128fb6eff4b02c1ce64f.png"},{"revision":"360e73d67d02a82531549588899e9ceb","url":"assets/images/video-4812396e1a58925075620ba8858803ff.png"},{"revision":"296e55e6278e62f7733739b29a40db94","url":"assets/images/video-einfuegen-92cf32eb88472c87ae82c2fd21e2ac40.png"},{"revision":"06083188c0a21203236f35a591bad8db","url":"assets/images/video-einfuegen.lo-b285281084b5b803f1d05eea00ca1c55.png"},{"revision":"941879e19bfb6918f8a87a02eb6d04da","url":"assets/images/video-media01-0cef14c1272adf259d103eaae9763dd9.png"},{"revision":"cfa92d809b013ba7335a5e0f918790f1","url":"assets/images/video-media02-ce78f7e8b4d8542c49caebac43b282f0.png"},{"revision":"2278aef4592f922f0190c394c13fbece","url":"assets/images/video-media03-4a89ac6a6f4daba658ffddb982dbcc22.png"},{"revision":"88e0282f238535f6c6a690e45fb7e7e7","url":"assets/images/video.lo-c81bb2f0eaeb9f283edab371782081b0.png"},{"revision":"20e436a2826134341b367d19a015eda9","url":"assets/images/visualizer-01-73cf72060ec21b6ed72bf68efafeebee.png"},{"revision":"2ff609e0a9ba28db0ebfb443890a6c03","url":"assets/images/visualizer-02-2b719bf0a97f30c07a341bc0b80f77ed.png"},{"revision":"9c7aaab7e3b59397733dd09cf72d6e66","url":"assets/images/visualizer-03-fdf3611314e553fb07413770b2799e4a.png"},{"revision":"269c865b07bea99ae541d51349b23a70","url":"assets/images/weitere-shortcuts.lo-69538b8ab35b790f4d5e4923c718d8b8.png"},{"revision":"9af5dfb40db79b78731046ecc95f015c","url":"assets/images/weitere-shortcuts.ms-887afbd321a7aecced5c371a6e6b842f.png"},{"revision":"2cd96727dbceaa98b4046d0d185414df","url":"assets/images/wifi-1-4b63f0c04227ebd63c1b2ca4275e53c0.png"},{"revision":"ba8e4f3ee67abec2519528a8d59c9a2e","url":"assets/images/wifi-2-66c0c2994be8d37fd62e936b7f439ecd.png"},{"revision":"8db3e2221bbdb1935540816eda1ff98f","url":"assets/images/wifi-3-d02cfc16bb11f173874ad186640c1753.png"},{"revision":"cdb15a5da5fb55149d82467fe56fb827","url":"assets/images/wifi-4-c21dbc71f928b17f1cb90b297a795f3e.png"},{"revision":"9058b8b259fd908fab1958d1b610f443","url":"assets/images/wifi-5-ebd3c553ecdd476c03b68cadd05830a4.png"},{"revision":"a2979a4d2bbac63ab1f0019dfea3cc07","url":"assets/images/wifi-6-6d16147edaa653f2c403877800da4922.png"},{"revision":"346884ff44919e914239e4f0fb6bc993","url":"assets/images/wifi-7-34208d2d3e94eda8128ba9e79d35ee9c.png"},{"revision":"bf2ad0d03b4742c2a73977b173873eea","url":"assets/images/windows-10-update-2004-660b05da4e26455684a33785549ff060.png"},{"revision":"244656b434416fbd07f86b6d738e8f60","url":"assets/images/windows-check-24c25f3d43db1e65e8915bd977904e4a.png"},{"revision":"3f8b86c5c85603311662fc3adb6762bb","url":"assets/images/windows-open-with-1-544461d247c1801450e0d203d829a91d.png"},{"revision":"656e89590f1bbb256b2b9212fbdc8dbf","url":"assets/images/windows-open-with-2-a25af35fed866d6f2526e0f0421c233f.png"},{"revision":"21ea4cc85f47548d457d1e36793b801f","url":"assets/images/windows-p-b621cc8ce96f6a6c35896243490f5649.jpg"},{"revision":"7b148bf348c5d00c849f0f7cb238aa36","url":"assets/images/wlan-1-651f2952f386e7c065dc3d903553cea5.png"},{"revision":"88df4bc4a5f463a6536fab7a481263ca","url":"assets/images/wlan-1-cfadf109ee05f974840004c6cfdb8fda.png"},{"revision":"5e906ebbb688b7372df7f51a97fa73fd","url":"assets/images/wlan-2-e6e438aad2123e1ad25e1346950a9221.png"},{"revision":"cb8455d74ec3f714544aec125fadec32","url":"assets/images/wlan-2a-3b3bc433301394821d3cf8a6e1fc138a.png"},{"revision":"3a9950394088f58ae90f1591e8b8775a","url":"assets/images/wlan-3-5dfffa13946af76acaa8a320b982e802.png"},{"revision":"1be6ed80a9e9985edb31dcbe52490af0","url":"assets/images/wlan-3-815c1ea626cd9b04a07df64e1fda1d71.png"},{"revision":"c4d0de5f4660a9a21bc036fc13016d4b","url":"assets/images/wlan-4-10ce08d51a36703a0bc294a38a32b837.png"},{"revision":"49f02c7f844833f615403a662c8edf70","url":"assets/images/wlan-4-3e7c536ea26f9fe4428a46c12c3fc142.png"},{"revision":"a18705d9a9c435ac10be43c510011450","url":"assets/images/wlan-5-83ced3c4e28ed784fd9cee17c8f9eaf1.png"},{"revision":"b920571d8863f2d3e4594ddc48252191","url":"assets/images/wlan-5-9c67995f5b16fe181c1c9535752b70ab.png"},{"revision":"a9b3502fbfbc788a4c8bc5c3fd41014f","url":"assets/images/wlan-6a-d4febf8dcabc3d3787eaf04497e2259a.png"},{"revision":"d6d9cf1b7118cef9ef94d2dc26e271b9","url":"assets/images/wlan-7-60f89a4a6993b5ab76d83783d39f4e31.png"},{"revision":"1636d01d367cb6872fd9cfc26cd3f8ad","url":"assets/images/wlan-7-b5adf2bc8e7b8b4d9d6f63f0cc8d75d5.png"},{"revision":"647260f8434d3ec357d25ebb8d6c4bd1","url":"assets/images/wlan-8-b6b3c5357e4684ebfd1d1d021a652e1b.png"},{"revision":"4d8ecec03b6b6348b544f79789e10f8a","url":"assets/images/wlan-96293abd14effd44798fa88d86776696.png"},{"revision":"726567bc168901bbba3fdb4792f29898","url":"assets/images/word-drucken-1-5c10b8e212603ff45d8b8217af0e74c0.png"},{"revision":"c47f2e9e019ac62ea09ba04b47128355","url":"assets/images/word-drucken-2-28d71693ffd7a4879e7088e349446405.png"},{"revision":"d4046aa6a204129b5dde35f9b147fa1b","url":"assets/images/writing-1457278ae321c9590c02f551a5298b34.jpg"},{"revision":"14e0702a61166897893c04d24120996a","url":"assets/images/xy-chart-38469bceb1c473efa6102f2e2742c4cc.png"},{"revision":"57078884d7e4b5137bfc13a0aed96a92","url":"assets/images/xy-chart-continuous-3e51e3dcc30e637ab324073cdb093048.png"},{"revision":"3a13e92996328f4ccf1fbacf34a37e38","url":"assets/images/xy-chart-discontinuous-724c941343360f86c0fa601525382409.png"},{"revision":"1e74a5ed688f4ab8bba47310680be36d","url":"assets/images/youtube-01-e046fc75221d30fd3f3d2cf782cc6242.png"},{"revision":"06bd97c4ba476c1e8219727a0d44b9ea","url":"assets/images/youtube-03-07f2f800daad54e32a396966582e8700.png"},{"revision":"08bee0cb13ca5b4c78a8bfff2f1787cd","url":"assets/images/youtube-04-e92fb3296243c484d970417b75d0916d.png"},{"revision":"9454e462e8e3c142a1d5ff73876f906c","url":"assets/images/youtube-05-4eb060b0380be59bc30b43de10890ee1.png"},{"revision":"28c386222f7fc8bf46535496e3854f26","url":"assets/images/youtube-06-55102c215da5fa77f9f161b1bc9068cd.png"},{"revision":"50a53b94e3cef7d1f708c73982e14733","url":"assets/images/youtube-07-a562a9a3bc98e9c498125bb73ecee43f.png"},{"revision":"bdb0fee6c130dc07876115b535b7a141","url":"assets/images/youtube-396445d945ba3b478970c735130e7307.png"},{"revision":"7034cfc3f1a986132b378329a091011f","url":"assets/images/zitierstil-waehlen-b124f24f116dc27d5ce0061710a1fe7a.png"},{"revision":"7fdb32b80434168cebd2edd7c668abae","url":"assets/images/zwei-bildschirme-fb2513fcc18697019142a685a4839dc9.png"},{"revision":"cb2251a7127a73cb02424b53069e1f1c","url":"assets/images/zwei-bildschirme.lo-14a846e43a049d64e8f59f026f20e294.png"},{"revision":"d146b752545b36e8ad320e17140dd8df","url":"img/by-nc-sa.eu.svg"},{"revision":"975bb83a10c84f619443128fe24c2488","url":"img/favicon.ico"},{"revision":"c0ecb849b1093c427c855bdfecb8c42f","url":"img/icon_x128.png"},{"revision":"1db79a6ab72d74b9a9d2989237888930","url":"img/icon_x192.png"},{"revision":"179ec16eb5ce8877abdc69cafd814b08","url":"img/icon_x384.png"},{"revision":"39e3643d651724896d544fba75deddaf","url":"img/icon_x48.png"},{"revision":"941e4a093c3776b31f976d15380af3dd","url":"img/icon_x512.png"},{"revision":"ba4a75d39d4afbfa4a1e6e253cd7e69b","url":"img/icon_x72.png"},{"revision":"94bc5c11089f0cbb15dadc11cf09f48b","url":"img/icon_x96.png"},{"revision":"6c3c9ed927ed38e467e1343bd03aa968","url":"img/logo.png"},{"revision":"e38dc2b098d6aa3cbde869b63566bc1e","url":"img/logo.svg"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"62ff6e3aa8fe89abb298262eeadc357f","url":"assets/fonts/materialdesignicons-webfont-11e44ec7bb075f6083ac8d895c711704.woff2"},{"revision":"0a2d736efa9f1e8e4656a1bcce9280e6","url":"assets/fonts/materialdesignicons-webfont-6708c81cdf01cae30bb04c3c8a71d573.eot"},{"revision":"0e77e9c840132a335542552151bc1fe8","url":"assets/fonts/materialdesignicons-webfont-6c8bd008756911fb19394e6e4b09e28f.ttf"},{"revision":"d7928196ce1d1b1c246e499d6b3cef7b","url":"assets/fonts/materialdesignicons-webfont-c5b8047c33997d2bc442c9fedf354d43.woff"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map