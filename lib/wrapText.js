'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapText;
function wrapText(ctx, text, x, y, maxWidth, lineHeight, cb) {
  var callback = cb || function () {};
  var words = text.split(' ');

  var line = '';
  var lineY = y;
  var numberOfLines = 1;

  words.forEach(function (word, wordIndex) {
    var testLine = line + word + ' '
    var metrics = ctx.measureText(testLine)

    if (metrics.width > maxWidth && wordIndex > 0) {
      ctx.fillText(line, x, lineY)
      lineY += lineHeight
      line = words[wordIndex] + ' '
      numberOfLines += 1
    } else {
      line = testLine
    }
  });

  ctx.fillText(line, x, lineY)
  lineY += lineHeight

  callback({
    startY: y,
    endY: lineY,
    lines: numberOfLines
  });
}
module.exports = exports['default'];
