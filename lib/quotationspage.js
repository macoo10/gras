'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quotationspage;

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function quotationspage() {
  return (0, _got2.default)('http://www.quotationspage.com/random.php3').then(function (response) {
    var $ = _cheerio2.default.load(response.body);
    var quote = $('dt.quote a').slice(-1).eq(0);
    var full = quote.text();
    var snippet = full.split(' ').slice(-4).join(' ').replace(/\.$/, '');
    return { full: full, snippet: snippet };
  });
}
module.exports = exports['default'];