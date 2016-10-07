'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generate;

var _canvas = require('canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _coverAreaWithImage = require('./coverAreaWithImage');

var _coverAreaWithImage2 = _interopRequireDefault(_coverAreaWithImage);

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _wrapText = require('./wrapText');

var _wrapText2 = _interopRequireDefault(_wrapText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = _canvas2.default.Image;
var HEIGHT = 303;
var WIDTH = 212;

var titleEndY = 0;

function generate(props, callback) {
  var canvas = new _canvas2.default(WIDTH, HEIGHT);
  var ctx = canvas.getContext('2d');

  var steps = [background, block, artwork, title, artist];

  function step(fn, cb) {
    try {
      fn(canvas, ctx, props, cb);
    } catch (err) {
      cb(err);
    }
  }

  _async2.default.eachSeries(steps, step, function (err) {
    callback(err, canvas);
  });
}

function background(canvas, ctx, props, cb) {
  ctx.fillStyle = 'rgb(24, 24, 24)';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  cb(null);
}

function block(canvas, ctx, props, cb) {
  ctx.fillStyle = 'rgb(40, 40, 40)';
  ctx.fillRect(6, 206, 200, 91);
  cb(null);
}

function artwork(canvas, ctx, props, cb) {
  (0, _got2.default)(props.artwork, { encoding: null }).then(function (response) {
    var image = new Image();

    image.onload = function () {
      (0, _coverAreaWithImage2.default)(ctx, image, 6, 6, 200, 200);
      cb(null);
    };

    image.src = response.body;
  }).catch(cb);
}

function title(canvas, ctx, props, cb) {
  ctx.font = '14px Helvetica Neue';
  ctx.fillStyle = 'rgb(255, 255, 255)';

  (0, _wrapText2.default)(ctx, _inflection2.default.titleize(props.title), 20, 230, 172, 17, function (text) {
    titleEndY = text.endY;
    cb(null);
  });
}

function artist(canvas, ctx, props, cb) {
  ctx.font = '13px Helvetica Neue';
  ctx.fillStyle = 'rgb(185, 185, 185)';

  (0, _wrapText2.default)(ctx, _inflection2.default.titleize(props.artist), 20, titleEndY + 5, 172, 15);

  cb(null);
}
module.exports = exports['default'];