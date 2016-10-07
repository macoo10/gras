import flickr from './flickr'
import quotationspage from './quotationspage'
import wikipedia from './wikipedia'

export default async function generateRandomAlbum() {
  const image = await flickr()
  const quote = await quotationspage()
  const page = await wikipedia()

  return {
    artwork: image.url,
    title: quote.snippet,
    artist: page.title
  }
}
