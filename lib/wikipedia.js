'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wikipedia;

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wikipedia() {
  return (0, _got2.default)('http://en.wikipedia.org/wiki/Special:Random').then(function (response) {
    var $ = _cheerio2.default.load(response.body);
    var title = $('title').text();
    return { title: title.substr(0, title.indexOf(' - Wikipedia, the free encyclopedia')).replace(/ \(.+\)$/, '') };
  });
}
module.exports = exports['default'];