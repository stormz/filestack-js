/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _this = this;
import * as tslib_1 from "tslib";
import * as bowser from 'bowser';
import * as t from 'tcomb-validation';
import { getPart, getFile } from './file_utils';
import { getName } from './utils';
import { commitPart, slicePartIntoChunks, uploadChunk } from './intelligent';
import { start, getS3PartData, uploadToS3, complete } from './network';
import { checkOptions, range, throat, throttle } from '../../utils';
/**
 * @private
 */
var MIN_CHUNK_SIZE = 32 * 1024;
/**
 * @private
 */
var statuses = {
    INIT: "init" /* INIT */,
    RUNNING: "running" /* RUNNING */,
    DONE: "done" /* DONE */,
    FAILED: "failed" /* FAILED */,
    PAUSED: "paused" /* PAUSED */,
};
/**
 * Returns a Promise based on the flow state
 * If the flow is paused it will return a Promise that resolves when resumed
 * If the flow failed it will resolve harmlessly
 *
 * @private
 * @param func  function that returns a Promise
 */
var flowControl = function (ctx, func) {
    // console.log(ctx.state);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (ctx.state.status === statuses.FAILED) {
            return Promise.resolve();
        }
        return new Promise(function (resolve) {
            var check = function () {
                if (ctx.state.status === statuses.PAUSED) {
                    setTimeout(function () { return check(); }, 100);
                }
                else {
                    resolve(func.apply(void 0, args));
                }
            };
            check();
        });
    };
};
/**
 *
 * @private
 * @param num
 * @param ctx
 */
var makePart = function (num, ctx) {
    return {
        buffer: null,
        chunks: [],
        chunkSize: ctx.config.intelligentChunkSize
            ? ctx.config.intelligentChunkSize
            : bowser.mobile
                ? 1 * 1024 * 1024
                : 8 * 1024 * 1024,
        intelligentOverride: false,
        loaded: 0,
        number: num,
        request: null,
        size: 0,
    };
};
/**
 *
 * @private
 * @param part
 * @param ctx
 */
var uploadPart = function (part, ctx) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var cfg, goChunk, s3Data, onProgress;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cfg = ctx.config;
                if (!(cfg.intelligent === true || part.intelligentOverride)) return [3 /*break*/, 2];
                goChunk = flowControl(ctx, function (chunk) { return uploadChunk(chunk, ctx); });
                part.chunks = slicePartIntoChunks(part, part.chunkSize);
                return [4 /*yield*/, Promise.all(part.chunks.map(throat(cfg.concurrency, goChunk)))];
            case 1:
                _a.sent();
                return [2 /*return*/, commitPart(part, ctx)];
            case 2: return [4 /*yield*/, getS3PartData(part, ctx)];
            case 3:
                s3Data = (_a.sent()).body;
                if (cfg.onProgress) {
                    /* istanbul ignore next */
                    onProgress = throttle(function (evt) {
                        /* istanbul ignore next */
                        if (evt.loaded > part.loaded) {
                            part.loaded = evt.loaded;
                        }
                    }, cfg.progressInterval);
                }
                part.request = uploadToS3(part.buffer, s3Data, onProgress, cfg);
                return [2 /*return*/, part.request];
        }
    });
}); };
/**
 * Clean up array buffers in memory
 * Because promises aren't streams
 * @private
 */
var gc = function (part) {
    part.buffer = undefined;
    part.request = undefined;
    if (part.chunks && part.chunks.length) {
        part.chunks.forEach(gc);
    }
};
/**
 * Helpers to calculate total progress of file upload in bytes and percent
 * @private
 */
var sumBytes = function (bytes) { return bytes.reduce(function (a, b) { return a + b; }, 0); };
/**
 *
 * @private
 * @param bytes
 * @param file
 */
var percentOfFile = function (bytes, file) { return Math.round((bytes / file.size) * 100); };
/**
 *
 * @private
 * @param param0
 */
var getProgress = function (_a) {
    var config = _a.config, state = _a.state, file = _a.file;
    var parts = Object.keys(state.parts).map(function (k) { return state.parts[k]; });
    var partsLoaded = parts.map(function (p) { return p.loaded; });
    var chunksLoaded = parts
        .map(function (p) { return p.chunks; })
        .reduce(function (a, b) { return a.concat(b); }, [])
        .map(function (c) { return c.loaded; })
        .filter(function (n) { return n; });
    var loaded = partsLoaded;
    if (config.intelligent === true) {
        loaded = chunksLoaded;
    }
    if (config.intelligent === 'fallback') {
        var partsWithoutChunks = parts
            .filter(function (p) { return !p.intelligentOverride; })
            .map(function (p) { return p.loaded; });
        loaded = partsWithoutChunks.concat(chunksLoaded);
    }
    var totalBytes = sumBytes(loaded);
    var totalPercent = percentOfFile(totalBytes, file);
    var payload = {
        totalBytes: totalBytes,
        totalPercent: totalPercent,
    };
    var prev = state.previousPayload || {};
    /* istanbul ignore next */
    if (totalPercent < prev.totalPercent) {
        payload.totalBytes = prev.totalBytes;
        payload.totalPercent = prev.totalPercent;
    }
    state.previousPayload = payload;
    return payload;
};
/**
 * Entry point for multi-part upload flow
 *
 * @private
 * @param file    File to upload
 * @param config  Upload config
 * @param token   Control token
 */
var uploadFile = function (ctx, token) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var file, state, config, startProgress, finishProgress, cancelAllRequests, failAndCleanUp, cancel, cancellable, retry, params, goPart, totalParts, allParts, partsFlow, etags, goComplete;
    var _this = this;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                file = ctx.file, state = ctx.state, config = ctx.config;
                startProgress = function (onProgress) {
                    if (onProgress) {
                        state.progressTick = setInterval(function () {
                            var payload = getProgress(ctx);
                            if (payload.totalPercent === 100) {
                                clearInterval(state.progressTick);
                            }
                            onProgress(payload);
                        }, config.progressInterval);
                    }
                };
                finishProgress = function (onProgress) {
                    if (onProgress) {
                        onProgress({
                            totalBytes: file.size,
                            totalPercent: 100,
                        });
                        clearInterval(state.progressTick);
                    }
                };
                /**
                 * Will pause progress tick and set state
                 */
                token.pause = function () {
                    if (state.status === statuses.RUNNING) {
                        state.status = statuses.PAUSED;
                        clearInterval(state.progressTick);
                    }
                };
                /**
                 * Will resume flow and start progress tick again
                 */
                token.resume = function () {
                    if (state.status === statuses.PAUSED) {
                        state.status = statuses.RUNNING;
                        startProgress(config.onProgress);
                    }
                };
                cancelAllRequests = function () {
                    var parts = Object.keys(state.parts).map(function (k) { return state.parts[k]; });
                    parts.forEach(function (part) {
                        if (part.request)
                            part.request.abort();
                        part.chunks.forEach(function (chunk) {
                            if (chunk.request)
                                chunk.request.abort();
                        });
                        gc(part);
                    });
                };
                failAndCleanUp = function () {
                    cancelAllRequests();
                    clearInterval(state.progressTick);
                    state.status = statuses.FAILED;
                    if (file.buffer) {
                        file.buffer = null;
                    }
                };
                cancel = new Promise(function (_, reject) {
                    token.cancel = function () {
                        if (state.status === statuses.RUNNING || state.status === statuses.PAUSED) {
                            failAndCleanUp();
                            reject(new Error('Upload cancelled'));
                        }
                    };
                });
                cancellable = function (p) {
                    return Promise.race([cancel, p]);
                };
                retry = function (location, func, err, part) {
                    var attempt = state.retries[location] || 0;
                    var waitTime = Math.min(config.retryMaxTime, (Math.pow(config.retryFactor, attempt)) * 1000);
                    var promise = new Promise(function (resolve, reject) {
                        if (attempt === config.retry
                            || (err.status === 400 && err.method !== 'PUT')
                            || err.status === 401
                            || err.status === 403
                            || err.status === 404
                            || part && part.chunkSize <= MIN_CHUNK_SIZE) {
                            failAndCleanUp();
                            return reject(err);
                        }
                        var exec = function () { return setTimeout(function () { return resolve(func()); }, waitTime); };
                        // FII S3 retry (resize chunk)
                        if (part && (config.intelligent || part.intelligentOverride) && (
                        // Browser S3 network error
                        (err.method === 'PUT' && (err.crossDomain || err.status === 400 || err.timeout))
                            // Node S3 network error
                            || (err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT'))) {
                            part.chunkSize /= 2;
                            if (config.onRetry) {
                                config.onRetry({
                                    location: location,
                                    parts: state.parts,
                                    filename: getName(file, config),
                                    chunkSize: part.chunkSize,
                                    attempt: undefined,
                                });
                            }
                            if (config.intelligent === 'fallback') {
                                part.intelligentOverride = true;
                            }
                            return exec();
                        }
                        // Normal retry (with retry limit)
                        attempt += 1;
                        state.retries[location] = attempt;
                        if (config.onRetry) {
                            config.onRetry({
                                location: location,
                                parts: state.parts,
                                filename: getName(file, config),
                                attempt: attempt,
                            });
                        }
                        return exec();
                    });
                    return cancellable(promise);
                };
                // Here we go
                state.status = statuses.RUNNING;
                return [4 /*yield*/, cancellable(start(ctx))];
            case 1:
                params = (_a.sent()).body;
                ctx.params = params;
                goPart = flowControl(ctx, function (partObj) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var part, location, _a, etag, status_1, err, err_1;
                    return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, getPart(partObj, ctx)];
                            case 1:
                                part = _b.sent();
                                if (part.size === 0) {
                                    return [2 /*return*/, Promise.reject(new Error('Upload aborted due to empty chunk.'))];
                                }
                                location = "upload part " + (part.number + 1);
                                state.parts[part.number] = part;
                                _b.label = 2;
                            case 2:
                                _b.trys.push([2, 4, , 5]);
                                return [4 /*yield*/, uploadPart(part, ctx)];
                            case 3:
                                _a = _b.sent(), etag = _a.headers.etag, status_1 = _a.status;
                                if (status_1 === 206) {
                                    err = new Error('Intelligent part failed to commit');
                                    return [2 /*return*/, retry(location, function () { return goPart(part); }, err, part)];
                                }
                                part.loaded = part.size;
                                gc(part);
                                if (!config.intelligent && !etag) {
                                    return [2 /*return*/, Promise.reject(new Error('Response from S3 is missing ETag header.'))];
                                }
                                return [2 /*return*/, etag];
                            case 4:
                                err_1 = _b.sent();
                                return [2 /*return*/, retry(location, function () { return goPart(part); }, err_1, part)];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                totalParts = Math.ceil(file.size / config.partSize);
                allParts = range(0, totalParts).map(function (p) { return makePart(p, ctx); });
                partsFlow = Promise.all(allParts.map(throat(config.concurrency, goPart)));
                startProgress(config.onProgress);
                return [4 /*yield*/, cancellable(partsFlow)];
            case 2:
                etags = _a.sent();
                goComplete = flowControl(ctx, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var res, err_2;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, complete(etags, ctx)];
                            case 1:
                                res = _a.sent();
                                if (res.status === 202) {
                                    return [2 /*return*/, new Promise(function (resolve) {
                                            setTimeout(function () { return resolve(goComplete()); }, 1000);
                                        })];
                                }
                                state.status = statuses.DONE;
                                finishProgress(config.onProgress);
                                if (file.buffer) {
                                    file.buffer = null;
                                }
                                if (res.body && res.body.error && res.body.error.text) {
                                    return [2 /*return*/, Promise.reject(new Error("File upload error: " + res.body.error.text))];
                                }
                                return [2 /*return*/, res.body];
                            case 2:
                                err_2 = _a.sent();
                                return [2 /*return*/, retry('complete', goComplete, err_2)];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, cancellable(goComplete())];
        }
    });
}); };
/**
 * User facing method to upload a single file
 * @private
 * @param session Session object that contains apikey
 * @param file A valid file path (in Node). In browsers a File, Blob, or base64 encoded string
 * @param options Configures the uploader
 * @param storeOptions Storage options for the backend
 * @param token Control token
 */
export var upload = function (session, fileOrString, options, storeOptions, token, security) {
    if (options === void 0) { options = {}; }
    if (storeOptions === void 0) { storeOptions = {}; }
    if (token === void 0) { token = {}; }
    return getFile(fileOrString).then(function (file) {
        if ((file.size !== undefined && file.size === 0) || file.length === 0) {
            return Promise.reject(new Error('file has a size of 0.'));
        }
        var allowedOptions = [
            { name: 'host', type: t.String },
            { name: 'path', type: t.Boolean },
            { name: 'mimetype', type: t.String },
            { name: 'partSize', type: t.Number },
            { name: 'concurrency', type: t.refinement(t.Integer, function (n) { return n > 0; }) },
            { name: 'onProgress', type: t.Function },
            { name: 'progressInterval', type: t.Integer },
            { name: 'onRetry', type: t.Function },
            { name: 'retry', type: t.Integer },
            { name: 'retryFactor', type: t.Integer },
            { name: 'retryMaxTime', type: t.Integer },
            { name: 'timeout', type: t.Integer },
            { name: 'intelligent', type: t.union([t.Boolean, t.enums.of('fallback')]) },
            { name: 'intelligentChunkSize', type: t.Number },
            { name: 'workflowIds', type: t.list(t.String) },
        ];
        var allowedStoreOptions = [
            { name: 'location', type: t.enums.of('s3 gcs rackspace azure dropbox') },
            { name: 'region', type: t.String },
            { name: 'path', type: t.String },
            { name: 'container', type: t.String },
            { name: 'filename', type: t.String },
            { name: 'access', type: t.enums.of('public private') },
        ];
        // Throw if any options are invalid
        checkOptions('upload (options)', allowedOptions, options);
        checkOptions('upload (storeOptions)', allowedStoreOptions, storeOptions);
        // Custom filename option
        var storeOpts = tslib_1.__assign({}, storeOptions);
        var opts = tslib_1.__assign({}, options);
        var customName;
        if (storeOpts.filename) {
            customName = storeOpts.filename;
        }
        else if (file.name === undefined) {
            // Blobs and buffers don't have names, Files do. Give a placeholder name for blobs.
            if (file.type) {
                var ext = file.type.split('/').pop();
                customName = "untitled." + ext;
            }
            else {
                customName = 'untitled';
            }
        }
        // Default location param
        if (storeOpts.location === undefined) {
            storeOpts.location = 's3';
        }
        // Intelligent Ingestion requires part size of exactly 8MB
        if (opts.intelligent) {
            opts.partSize = 8 * 1024 * 1024;
        }
        // Set security if on session or override
        var policy = security && security.policy || session.policy;
        var signature = security && security.signature || session.signature;
        // Configurables
        var config = tslib_1.__assign({ host: session.urls.uploadApiUrl, apikey: session.apikey, policy: policy,
            signature: signature, partSize: 6 * 1024 * 1024, concurrency: 3, progressInterval: 1000, retry: 10, retryFactor: 2, retryMaxTime: 15000, customName: customName, mimetype: options.mimetype, store: {
                store_location: storeOpts.location,
                store_region: storeOpts.region,
                store_container: storeOpts.container,
                store_path: storeOpts.path,
                store_access: storeOpts.access,
            }, timeout: 120000 }, opts);
        var initialState = {
            parts: {},
            progressTick: null,
            previousPayload: null,
            retries: {},
            status: statuses.INIT,
        };
        var context = {
            file: file,
            config: config,
            state: initialState,
        };
        return uploadFile(context, token);
    });
};
