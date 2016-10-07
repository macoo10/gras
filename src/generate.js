import Canvas from 'canvas'
import got from 'got'
import async from 'async'
import coverAreaWithImage from './coverAreaWithImage'
import inflection from 'inflection'
import wrapText from './wrapText'

const Image = Canvas.Image
const HEIGHT = 303
const WIDTH = 212

let titleEndY = 0

export default function generate(props, callback) {
  const canvas = new Canvas(WIDTH, HEIGHT)
  const ctx = canvas.getContext('2d')

  const steps = [
    background,
    block,
    artwork,
    title,
    artist
  ]

  function step(fn, cb) {
    try {
      fn(canvas, ctx, props, cb)
    } catch (err) {
      cb(err)
    }
  }

  async.eachSeries(steps, step, err => {
    callback(err, canvas)
  })
}

function background(canvas, ctx, props, cb) {
  ctx.fillStyle = 'rgb(24, 24, 24)'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
  cb(null)
}

function block(canvas, ctx, props, cb) {
  ctx.fillStyle = 'rgb(40, 40, 40)'
  ctx.fillRect(6, 206, 200, 91)
  cb(null)
}

function artwork(canvas, ctx, props, cb) {
  got(props.artwork, {encoding: null})
  .then(response => {
    const image = new Image()

    image.onload = () => {
      coverAreaWithImage(ctx, image, 6, 6, 200, 200)
      cb(null)
    }

    image.src = response.body
  }).catch(cb)
}

function title(canvas, ctx, props, cb) {
  ctx.font = '14px Helvetica Neue'
  ctx.fillStyle = 'rgb(255, 255, 255)'

  wrapText(
    ctx,
    inflection.titleize(props.title),
    20, 230,
    172, 17,
    (text) => {
      titleEndY = text.endY
      cb(null)
    }
  )
}

function artist(canvas, ctx, props, cb) {
  ctx.font = '13px Helvetica Neue'
  ctx.fillStyle = 'rgb(185, 185, 185)'

  wrapText(
    ctx,
    inflection.titleize(props.artist),
    20, titleEndY + 10,
    172, 15
  )

  cb(null)
}
