"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = coverAreaWithImage;
var OFFSET_X = 0.5;
var OFFSET_Y = 0.5;

function coverAreaWithImage(ctx, image, dx, dy, dw, dh) {
  var imageWidth = image.width;
  var imageHeight = image.height;
  var ratio = Math.min(dw / imageWidth, dh / imageHeight);

  var nw = imageWidth * ratio;
  var nh = imageHeight * ratio;
  var ar = 1;

  if (nw < dw) ar = dw / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < dh) ar = dh / nh;
  nw *= ar;
  nh *= ar;

  var cw = imageWidth / (nw / dw);
  var ch = imageHeight / (nh / dh);
  var cx = (imageWidth - cw) * OFFSET_X;
  var cy = (imageHeight - ch) * OFFSET_Y;

  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > imageWidth) cw = imageWidth;
  if (ch > imageHeight) ch = imageHeight;

  ctx.drawImage(image, cx, cy, cw, ch, dx, dy, dw, dh);
}
module.exports = exports["default"];