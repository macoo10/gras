import test from 'ava'
import wikipedia from '../src/wikipedia'

test(async t => {
  const page = await wikipedia()
  t.is(typeof page.title, 'string')
  t.truthy(page.title.length)
})
