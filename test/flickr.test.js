import test from 'ava'
import flickr from '../src/flickr'

test(async t => {
  const image = await flickr()
  t.is(typeof image.url, 'string')
  t.truthy(image.url.length)
})
