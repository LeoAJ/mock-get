'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mockData = require('./mockData');

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockGet = function mockGet() {
  var delay = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var response = arguments[1];
  var hasError = arguments[2];


  if (typeof response === 'boolean' && hasError === undefined) {
    hasError = response;
  }

  return new _bluebird2.default(function (resolve, reject) {
    return setTimeout(hasError ? reject.bind(null, new Error('Error from `mock-get` !')) : resolve.bind(null, response || _mockData2.default), delay);
  });
};

exports.default = mockGet;
module.exports = exports['default'];