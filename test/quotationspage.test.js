import test from 'ava'
import quotationspage from '../src/quotationspage'

test(async t => {
  const quote = await quotationspage()
  t.is(typeof quote.full, 'string')
  t.is(typeof quote.snippet, 'string')
  t.truthy(quote.full.length)
  t.truthy(quote.snippet.length)
})
