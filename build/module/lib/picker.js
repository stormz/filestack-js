/*
 * Copyright (c) 2018 by Filestack
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
import { loadModule, knownModuleIds } from 'filestack-loader';
export var RotateDirection;
(function (RotateDirection) {
    RotateDirection["cw"] = "CW";
    RotateDirection["ccw"] = "CCW";
})(RotateDirection || (RotateDirection = {}));
export var PickerDisplayMode;
(function (PickerDisplayMode) {
    PickerDisplayMode["inline"] = "inline";
    PickerDisplayMode["overlay"] = "overlay";
    PickerDisplayMode["dropPane"] = "dropPane";
})(PickerDisplayMode || (PickerDisplayMode = {}));
/**
 * @private
 * A synchronous-looking wrapper for loading the picker and calling its methods.
 * This is currently needed because the picker module is loaded asynchronously.
 * Eventually we should offer a bundle with the picker module included.
 */
var PickerLoader = /** @class */ (function () {
    function PickerLoader(client, options) {
        this._initialized = this.loadModule(client, options);
    }
    PickerLoader.prototype.open = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var picker;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.open()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.crop = function (files) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var picker;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.crop(files)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.close = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var picker;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.close()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.cancel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var picker;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._initialized];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.cancel()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerLoader.prototype.loadModule = function (client, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, Picker;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = client.session.urls.pickerUrl;
                        return [4 /*yield*/, loadModule(options.pickerUrl || url, knownModuleIds.picker)];
                    case 1:
                        Picker = _a.sent();
                        return [2 /*return*/, new Picker(client, options)];
                }
            });
        });
    };
    return PickerLoader;
}());
/**
 * Loads and creates picker instance
 *
 * @private
 * @param client
 * @param options
 */
export var picker = function (client, options) {
    return new PickerLoader(client, options);
};
