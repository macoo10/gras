import got from 'got'
import cheerio from 'cheerio'

export default function quotationspage() {
  return got('http://www.quotationspage.com/random.php3')
  .then(response => {
    const $ = cheerio.load(response.body)
    const quote = $('dt.quote a').slice(-1).eq(0)
    const full = quote.text()
    const snippet = full.split(' ').slice(-4).join(' ')
    return {full, snippet}
  })
}
