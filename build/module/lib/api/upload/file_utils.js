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
import * as fs from 'fs';
import * as path from 'path';
// import * as mime from 'mime';
import * as mimetype from 'file-type';
import { calcMD5 } from './md5';
import * as isutf8 from 'isutf8';
import * as isSvg from 'is-svg';
/**
 * Given a file with a valid descriptor this will return a part object
 * The part object represents a chunk of the file
 * @private
 * @param file    File object that contains a descriptor
 * @param part    Part object that contains a number field
 * @param config  Current upload configuration settings
 */
export var getPart = function (part, _a) {
    var config = _a.config, file = _a.file;
    return new Promise(function (resolve) {
        var alloc = config.partSize;
        // for last part we need to allocate buffer memory that we need
        if (file.buffer.byteLength - part.number * config.partSize < alloc) {
            alloc = file.buffer.byteLength - part.number * config.partSize;
        }
        var filePart = Buffer.alloc(alloc);
        file.buffer.copy(filePart, 0, part.number * config.partSize, config.partSize);
        filePart = filePart.slice(0, filePart.byteLength);
        var partObj = tslib_1.__assign({}, part, { buffer: filePart, size: filePart.byteLength, md5: calcMD5(filePart.buffer) });
        return resolve(partObj);
    });
};
/**
 * Given a file path, returns a file object
 * @private
 * @param inputFile  A valid path to a file on your filesystem or buffer.
 */
export var getFile = function (inputFile) {
    if (inputFile instanceof Buffer) {
        return Promise.resolve({
            buffer: inputFile,
            name: undefined,
            size: inputFile.byteLength,
            type: getMimetype(inputFile),
        });
    }
    return new Promise(function (resolve, reject) {
        fs.readFile(inputFile, function (err, buffer) {
            if (err)
                return reject(err);
            var stats = fs.statSync(inputFile);
            var file = {
                buffer: buffer,
                name: path.basename(inputFile),
                size: stats.size,
                type: getMimetype(buffer),
            };
            return resolve(file);
        });
    });
};
var getMimetype = function (buffer) {
    var meta = mimetype(buffer);
    if (meta) {
        return meta.mime;
    }
    if (isSvg(buffer)) {
        return 'image/svg+xml';
    }
    if (isutf8(buffer)) {
        return 'text/plain';
    }
    return 'application/octet-stream';
};
