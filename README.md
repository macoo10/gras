# Gras

> Generate random albums

![](http://i.imgur.com/8ws0UY3.png)

# Overview

Using a fun little method used a few years ago, this
generates random albums.

Your mileage may vary.

# Where does it come from?

## Artist Name

Artist name is based on a random wikipedia page, using 
Wikipedia's `Special:Random` page. It removes any
disambiguation from the title to ensure that you don't end
up with names like "John Doe (Politician)".

## Album Name

Album names are based on a random quotation from
[The Quotations Page](http://www.quotationspage.com/) random
page. The original rules stated that it should be the last
quote, which is what is being used here. But I don't see
why that could change at some point.

## Artwork

Artwork is based on the third image from Flickr's interesting
[https://www.flickr.com/explore/interesting/7days](last 7 days)
page. It's scaled and cropped to fit the given space.

# Generating the image

The image is generated with [node-canvas](https://github.com/Automattic/node-canvas),
and is rendered to mimic an album release within Spotify.

There is a lot of work that could be done here to clean it up,
but I don't see this project being used enough that someone feels
the need to add something like an iTunes Music generator etc.

