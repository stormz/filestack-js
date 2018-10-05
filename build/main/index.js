"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var security_1 = require("./lib/api/security");
exports.getSecurity = security_1.getSecurity;
var client_1 = require("./lib/client");
var transform_1 = require("./lib/api/transform");
exports.EStyleType = transform_1.EStyleType;
exports.EShapeType = transform_1.EShapeType;
exports.ENoiseType = transform_1.ENoiseType;
exports.EFitOptions = transform_1.EFitOptions;
exports.EColorspaceType = transform_1.EColorspaceType;
exports.EBlurMode = transform_1.EBlurMode;
exports.EAlignOptions = transform_1.EAlignOptions;
exports.EAlignFacesOptions = transform_1.EAlignFacesOptions;
exports.ECropfacesType = transform_1.ECropfacesType;
/**
 * Initialize client with given config
 *
 * @param apikey
 * @param options
 */
exports.init = function (apikey, options) {
    return new client_1.Client(apikey, options);
};
/**
 * filestack-js version. Interpolated at build time.
 */
exports.version = '1.6.1';
