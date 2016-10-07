import got from 'got'
import cheerio from 'cheerio'

export default function wikipedia() {
  return got('http://en.wikipedia.org/wiki/Special:Random')
  .then(response => {
    const $ = cheerio.load(response.body)
    const title = $('title').text()
    return {title: title.substr(0, title.indexOf(' - Wikipedia, the free encyclopedia')).replace(/ \(.+\)$/,'')}
  })
}
