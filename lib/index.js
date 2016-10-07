'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _flickr = require('./flickr');

var _flickr2 = _interopRequireDefault(_flickr);

var _quotationspage = require('./quotationspage');

var _quotationspage2 = _interopRequireDefault(_quotationspage);

var _wikipedia = require('./wikipedia');

var _wikipedia2 = _interopRequireDefault(_wikipedia);

var _generate = require('./generate');

var _generate2 = _interopRequireDefault(_generate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(callback) {
    var image, quote, page;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _flickr2.default)();

          case 2:
            image = _context.sent;
            _context.next = 5;
            return (0, _quotationspage2.default)();

          case 5:
            quote = _context.sent;
            _context.next = 8;
            return (0, _wikipedia2.default)();

          case 8:
            page = _context.sent;
            return _context.abrupt('return', (0, _generate2.default)({
              artwork: image.url,
              title: quote.snippet,
              artist: page.title
            }, callback));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function generateRandomAlbum(_x) {
    return _ref.apply(this, arguments);
  }

  return generateRandomAlbum;
}();

module.exports = exports['default'];