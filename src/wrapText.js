export default function wrapText(ctx, text, x, y, maxWidth, lineHeight, cb) {
  const callback = cb || function() {}
  const words = text.split(' ')

  let line = ''
  let lineY = y
  let numberOfLines = 1

  words.forEach((word, wordIndex) => {
    const testLine = line + word + ' '
    const metrics = ctx.measureText(testLine)

    if(metrics.width > maxWidth && wordIndex > 0) {
      ctx.fillText(line, x, lineY)
      lineY += lineHeight
      line = words[wordIndex] + ' '
      numberOfLines += 1
    } else {
      line = testLine
    }
  })

  ctx.fillText(line, x, lineY)
  lineY += lineHeight

  callback({
    startY: y,
    endY: lineY,
    lines: numberOfLines
  })
}
