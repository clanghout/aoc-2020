"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
exports.__esModule = true;
var fs = require('fs');
/**
 * Parameter: async iterable of chunks (strings)
 * Result: async iterable of lines (incl. newlines)
 */
function chunksToLines(chunksAsync) {
    return __asyncGenerator(this, arguments, function chunksToLines_1() {
        var previous, chunksAsync_1, chunksAsync_1_1, chunk, eolIndex, line, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    previous = '';
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 9, 10, 15]);
                    chunksAsync_1 = __asyncValues(chunksAsync);
                    _b.label = 2;
                case 2: return [4 /*yield*/, __await(chunksAsync_1.next())];
                case 3:
                    if (!(chunksAsync_1_1 = _b.sent(), !chunksAsync_1_1.done)) return [3 /*break*/, 8];
                    chunk = chunksAsync_1_1.value;
                    previous += chunk;
                    eolIndex = void 0;
                    _b.label = 4;
                case 4:
                    if (!((eolIndex = previous.indexOf('\n')) >= 0)) return [3 /*break*/, 7];
                    line = previous.slice(0, eolIndex);
                    return [4 /*yield*/, __await(line)];
                case 5: return [4 /*yield*/, _b.sent()];
                case 6:
                    _b.sent();
                    previous = previous.slice(eolIndex + 1);
                    return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 2];
                case 8: return [3 /*break*/, 15];
                case 9:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 15];
                case 10:
                    _b.trys.push([10, , 13, 14]);
                    if (!(chunksAsync_1_1 && !chunksAsync_1_1.done && (_a = chunksAsync_1["return"]))) return [3 /*break*/, 12];
                    return [4 /*yield*/, __await(_a.call(chunksAsync_1))];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 14: return [7 /*endfinally*/];
                case 15:
                    if (!(previous.length > 0)) return [3 /*break*/, 18];
                    return [4 /*yield*/, __await(previous)];
                case 16: return [4 /*yield*/, _b.sent()];
                case 17:
                    _b.sent();
                    _b.label = 18;
                case 18: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function getRowId(line) {
            return parseInt(Array.from(line.slice(0, 7))
                .map(function (char) { return char == 'F' ? 0 : 1; }) // convert to binary numbers
                .join(''), // make it one string
            2); // radix 2 for binary number
        }
        function getColId(line) {
            return parseInt(Array.from(line.slice(-3))
                .map(function (char) { return char == 'L' ? 0 : 1; }) // convert to binary numbers
                .join(''), // make it one string
            2); // radix 2 for binary number
        }
        function computePart1(inputFilePath) {
            var e_2, _a;
            return __awaiter(this, void 0, void 0, function () {
                function getSeatId(line) {
                    var rowId = getRowId(line);
                    var colId = getColId(line);
                    return rowId * 8 + colId;
                }
                var readStream, maxId, _b, _c, line, newId, e_2_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            readStream = fs.createReadStream(inputFilePath, { encoding: 'utf8', highWaterMark: 256 });
                            maxId = 0;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 6, 7, 12]);
                            _b = __asyncValues(chunksToLines(readStream));
                            _d.label = 2;
                        case 2: return [4 /*yield*/, _b.next()];
                        case 3:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 5];
                            line = _c.value;
                            newId = getSeatId(line);
                            if (maxId < newId) {
                                maxId = newId;
                            }
                            _d.label = 4;
                        case 4: return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_2_1 = _d.sent();
                            e_2 = { error: e_2_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _d.trys.push([7, , 10, 11]);
                            if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _a.call(_b)];
                        case 8:
                            _d.sent();
                            _d.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_2) throw e_2.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12: return [2 /*return*/, maxId];
                    }
                });
            });
        }
        function computePart2(inputFilePath) {
            var e_3, _a;
            var _b;
            return __awaiter(this, void 0, void 0, function () {
                var readStream, minRow, maxRow, lines, seats, lines_1, lines_1_1, line, rowNr, e_3_1, missingSeatRowId, missingSeatColId;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            readStream = fs.createReadStream(inputFilePath, { encoding: 'utf8', highWaterMark: 256 });
                            minRow = 200;
                            maxRow = 0;
                            lines = chunksToLines(readStream);
                            seats = {};
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 6, 7, 12]);
                            lines_1 = __asyncValues(lines);
                            _c.label = 2;
                        case 2: return [4 /*yield*/, lines_1.next()];
                        case 3:
                            if (!(lines_1_1 = _c.sent(), !lines_1_1.done)) return [3 /*break*/, 5];
                            line = lines_1_1.value;
                            rowNr = getRowId(line);
                            minRow = minRow < rowNr ? minRow : rowNr;
                            maxRow = maxRow < rowNr ? rowNr : maxRow;
                            seats[rowNr] = (_b = seats[rowNr]) !== null && _b !== void 0 ? _b : [];
                            seats[rowNr].push(getColId(line));
                            _c.label = 4;
                        case 4: return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_3_1 = _c.sent();
                            e_3 = { error: e_3_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _c.trys.push([7, , 10, 11]);
                            if (!(lines_1_1 && !lines_1_1.done && (_a = lines_1["return"]))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _a.call(lines_1)];
                        case 8:
                            _c.sent();
                            _c.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_3) throw e_3.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12:
                            delete seats[minRow];
                            delete seats[maxRow];
                            missingSeatRowId = parseInt(Object.keys(seats).filter(function (filledSeats) { return seats[filledSeats].length < 8; })[0]);
                            missingSeatColId = Array.from({ length: 10 }, function (_, i) { return i + 1; }).filter(function (seatnr) { return !seats[missingSeatRowId].includes(seatnr); })[0];
                            return [2 /*return*/, missingSeatRowId * 8 + missingSeatColId];
                    }
                });
            });
        }
        var test, input, _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    test = 'day5test.txt';
                    input = 'day5.txt';
                    console.log('Part 1');
                    console.log('test: ');
                    _b = (_a = console).log;
                    return [4 /*yield*/, computePart1(test)];
                case 1:
                    _b.apply(_a, [_g.sent()]);
                    console.log('Expecting 820');
                    console.log('\nInput:');
                    _d = (_c = console).log;
                    return [4 /*yield*/, computePart1(input)];
                case 2:
                    _d.apply(_c, [_g.sent()]);
                    console.log('Part 2');
                    console.log('Expecting 0');
                    console.log('\nInput:');
                    _f = (_e = console).log;
                    return [4 /*yield*/, computePart2(input)];
                case 3:
                    _f.apply(_e, [_g.sent()]);
                    return [2 /*return*/];
            }
        });
    });
}
main();
