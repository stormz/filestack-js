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
import * as tslib_1 from "tslib";
import { requestWithSource, request } from '../request';
import { getName } from './utils';
/**
 * @private
 */
/* istanbul ignore next */
export var getHost = function (host) {
    return process.env.TEST_ENV === 'unit' && host;
};
/**
 * @private
 */
/* istanbul ignore next */
export var getLocationURL = function (url) {
    return url && "https://" + url;
};
/**
 * Generates multi-part fields for all requests
 * @private
 * @param fields  Object containing form data keys
 * @param config  Upload config
 */
export var getFormData = function (fields, _a) {
    var store = _a.store;
    var fd = {};
    Object.keys(fields).forEach(function (key) {
        if (fields[key])
            fd[key] = fields[key];
    });
    Object.keys(store).forEach(function (key) {
        if (store[key])
            fd[key] = store[key];
    });
    return fd;
};
/**
 * Starts the multi-part upload flow (/multipart/start)
 * @private
 * @param file    Valid File instance
 * @param config  Upload config
 * @returns {Promise}
 */
export var start = function (_a) {
    var config = _a.config, file = _a.file;
    var fields = {
        apikey: config.apikey,
        filename: getName(file, config),
        mimetype: config.mimetype || file.type || 'application/octet-stream',
        size: file.size,
    };
    // Security
    if (config.policy && config.signature) {
        fields.policy = config.policy;
        fields.signature = config.signature;
    }
    // Intelligent Ingestion
    if (config.intelligent) {
        fields.multipart = true;
    }
    var formData = getFormData(fields, config);
    return requestWithSource('post', config.host + "/multipart/start")
        .timeout(config.timeout)
        .field(formData);
};
/**
 * Gets the S3 upload params for current part (/multipart/upload)
 * @private
 * @param startParams   Parameters returned from start call
 * @param partNumber    Current part number (1 - 10000)
 * @param size          Size of current part in bytes
 * @param md5           MD5 hash of part
 * @param config        Upload config
 * @param offset        Current offset if chunking a part.
 */
export var getS3PartData = function (part, _a) {
    var config = _a.config, params = _a.params;
    /* istanbul ignore next */
    var host = getHost(config.host) || getLocationURL(params.location_url);
    var locationRegion = params.location_region;
    var fields = tslib_1.__assign({ apikey: config.apikey, part: part.number + 1, size: part.size, md5: part.md5 }, params);
    // Intelligent Ingestion
    if (part.offset !== undefined) {
        fields.multipart = true;
        fields.offset = part.offset === 0 ? '0' : part.offset;
    }
    var formData = getFormData(fields, config);
    var req = requestWithSource('post', host + "/multipart/upload");
    /* istanbul ignore next */
    if (locationRegion) {
        req.set('Filestack-Upload-Region', locationRegion);
    }
    req.timeout(config.timeout);
    req.field(formData);
    return new Promise(function (resolve, reject) {
        req.end(function (err, res) {
            if (err)
                return reject(err);
            return resolve(res);
        });
    });
};
/**
 * Uploads bytes directly to S3 with HTTP PUT
 * @private
 * @param part        ArrayBuffer with part data
 * @param params      Params for this part returned by getS3PartData response
 * @param onProgress  A function to be called on progress event for this part
 * @param config
 */
export var uploadToS3 = function (part, params, onProgress, cfg) {
    /* istanbul ignore next */
    var host = getHost(cfg.host + "/fakeS3") || params.url;
    var timeout = cfg.timeout || (part.byteLength / 100);
    // console.log(part.byteLength );
    var req = request
        .put(host)
        .set(params.headers)
        .timeout(timeout)
        .send(part);
    // Don't call progress handler if user didn't specify a callback
    if (onProgress) {
        return req.on('progress', onProgress);
    }
    return req;
};
/**
 * Convert array of Etags into format for /multipart/complete call
 * @private
 * @param etags     Array of Etag strings
 */
var formatETags = function (etags) { return etags.map(function (tag, idx) { return idx + 1 + ":" + tag; }).join(';'); };
/**
 * Completes upload flow (/multipart/complete)
 * @private
 * @param file          File being uploaded
 * @param etags         An array of etags from each S3 part
 * @param startParams   Parameters returned from start call
 * @param config        Upload config
 */
export var complete = function (etags, _a) {
    var config = _a.config, file = _a.file, params = _a.params;
    /* istanbul ignore next */
    var host = getHost(config.host) || getLocationURL(params.location_url);
    var locationRegion = params.location_region;
    var fields = tslib_1.__assign({ apikey: config.apikey, size: file.size, filename: getName(file, config), mimetype: config.mimetype || file.type || 'application/octet-stream', parts: formatETags(etags) }, params);
    if (config.workflowIds && config.workflowIds.length) {
        fields['workflow_ids'] = JSON.stringify(config.workflowIds);
    }
    // Intelligent Ingestion
    if (config.intelligent) {
        fields.multipart = true;
        delete fields.parts;
    }
    var formData = getFormData(fields, config);
    var req = requestWithSource('post', host + "/multipart/complete");
    /* istanbul ignore next */
    if (locationRegion) {
        req.set('Filestack-Upload-Region', locationRegion);
    }
    req.timeout(config.timeout);
    return req.field(formData);
};
