const getImages = (imageId: string, imageCount: number) => {
  const gallery = []

  for (let i = 0; i < imageCount; i++) {
    gallery.push({
      original: `${imageId}/original/${i + 1}.jpg`,
      thumbnail: `${imageId}/thumbnail/${i + 1}.jpg`,
    })
  }

  return gallery
}

const galleryFactory = (
  title: string,
  caption: string,
  { x, y }: { x: number; y: number },
  { imageId, imageCount }: { imageId: string; imageCount: number }
) => {
  const images = getImages(imageId, imageCount)

  console.log(images)
  return {
    title,
    caption,
    x,
    y,
    images,
  }
}

export const gallery_test = {
  gallery1: galleryFactory(
    'Gallery 1',
    'caption',
    { x: 9, y: 45 },
    { imageId: 'gallery1', imageCount: 37 }
  ),
  gallery2: galleryFactory(
    'Gallery 2',
    'caption',
    { x: 30, y: 28 },
    { imageId: 'gallery2', imageCount: 4 }
  ),gallery3: galleryFactory(
    'Gallery 3',
    'caption',
    { x: 50, y: 27 },
    { imageId: 'gallery3', imageCount: 5 }
  ),
}
