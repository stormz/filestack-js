"use strict";
/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Original implementation of throat by Forbes Lindesay
 * https://github.com/ForbesLindesay/throat
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
var assert = require("assert");
var throat_1 = require("./throat");
var sentA = {};
var sentB = {};
var sentC = {};
var Processed = /** @class */ (function () {
    function Processed(val) {
        this.val = val;
    }
    return Processed;
}());
function worker(max) {
    var concurrent = 0;
    function execute() {
        concurrent++;
        if (concurrent > max)
            throw new Error('Extra processes were run in parallel.');
        var res = new Processed(Array.prototype.slice.call(arguments));
        return new Promise(function (resolve) {
            setTimeout(function () {
                concurrent--;
                resolve(res);
            }, 100);
        });
    }
    return execute;
}
describe('throat(n, fn)', function () {
    this.timeout(10000);
    it('throat(1, fn) acts as a sequential worker', function () {
        return Promise.all([sentA, sentB, sentC].map(throat_1.default(1, worker(1))))
            .then(function (res) {
            assert.ok(res[0] instanceof Processed && res[0].val.length > 1 && res[0].val[0] === sentA);
            assert.ok(res[1] instanceof Processed && res[1].val.length > 1 && res[1].val[0] === sentB);
            assert.ok(res[2] instanceof Processed && res[2].val.length > 1 && res[2].val[0] === sentC);
        });
    });
    it('throat(2, fn) works on two inputs in parallel', function () {
        return Promise.all([sentA, sentB, sentC].map(throat_1.default(2, worker(2))))
            .then(function (res) {
            assert.ok(res[0] instanceof Processed && res[0].val.length > 1 && res[0].val[0] === sentA);
            assert.ok(res[1] instanceof Processed && res[1].val.length > 1 && res[1].val[0] === sentB);
            assert.ok(res[2] instanceof Processed && res[2].val.length > 1 && res[2].val[0] === sentC);
        });
    });
    it('throat(3, fn) works on three inputs in parallel', function () {
        return Promise.all([sentA, sentB, sentC].map(throat_1.default(3, worker(3))))
            .then(function (res) {
            assert.ok(res[0] instanceof Processed && res[0].val.length > 1 && res[0].val[0] === sentA);
            assert.ok(res[1] instanceof Processed && res[1].val.length > 1 && res[1].val[0] === sentB);
            assert.ok(res[2] instanceof Processed && res[2].val.length > 1 && res[2].val[0] === sentC);
        });
    });
    it('should reject fn as a string', function () {
        try {
            throat_1.default(2, 'foo');
        }
        catch (ex) {
            assert.ok(/Expected throat fn to be a function/.test(ex.message));
            return;
        }
        throw new Error('Expected a failure');
    });
});
