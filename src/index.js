import flickr from './flickr'
import quotationspage from './quotationspage'
import wikipedia from './wikipedia'
import generate from './generate'

export default async function generateRandomAlbum(callback) {
  const image = await flickr()
  const quote = await quotationspage()
  const page = await wikipedia()

  return generate({
    artwork: image.url,
    title: quote.snippet,
    artist: page.title
  }, callback)
}
