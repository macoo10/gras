import test from 'ava'
import generate from '../src/generate'

const props = {
  artwork: 'https://i.imgur.com/T6C1VMd.jpg',
  artist: 'Anna Kendrick',
  title: 'Cups'
}

test(t => {
  generate(null, (err, canvas) => {
    t.truthy(err)
    t.end()
  })
})

test(t => {
  generate(props, (err, canvas) => {
    t.falsey(err)
    t.end()
  })
})
