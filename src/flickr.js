import got from 'got'
import cheerio from 'cheerio'

export default function flickr() {
  return got('https://www.flickr.com/explore/interesting/7days')
  .then(response => {
    const $ = cheerio.load(response.body)
    const image = $('td.Photo').slice(2).eq(0)
    const url = image.find('img').attr('src').replace(/_m\.jpg$/, '.jpg')
    return {url}
  })
}
