import test from 'ava'
import generateRandomAlbum from '../src'

test(async t => {
  const attributes = await generateRandomAlbum()
  t.is(typeof attributes.artwork, 'string')
  t.is(typeof attributes.title, 'string')
  t.is(typeof attributes.artist, 'string')
})
