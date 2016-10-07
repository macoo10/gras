const OFFSET_X = 0.5
const OFFSET_Y = 0.5

export default function coverAreaWithImage(ctx, image, dx, dy, dw, dh) {
  const imageWidth = image.width
  const imageHeight = image.height
  const ratio = Math.min(dw / imageWidth, dh / imageHeight)

  let nw = imageWidth * ratio
  let nh = imageHeight * ratio
  let ar = 1

  if (nw < dw) ar = dw / nw
  if (Math.abs(ar - 1) < 1e-14 && nh < dh) ar = dh / nh
  nw *= ar
  nh *= ar

  let cw = imageWidth / (nw / dw)
  let ch = imageHeight / (nh / dh)
  let cx = (imageWidth - cw) * OFFSET_X
  let cy = (imageHeight - ch) * OFFSET_Y

  if (cx < 0) cx = 0
  if (cy < 0) cy = 0
  if (cw > imageWidth) cw = imageWidth
  if (ch > imageHeight) ch = imageHeight

  ctx.drawImage(image, cx, cy, cw, ch, dx, dy, dw, dh)
}
