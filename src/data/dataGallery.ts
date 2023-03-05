

const getImages = (imageId: string, imageCount: number) => {
  const gallery = []

  for (let i = 0; i < imageCount; i++) {
    gallery.push({
      original: `galleries/${imageId}/img/${i + 1}.jpg`,
      thumbnail: `galleries/${imageId}/thumb/${i + 1}.jpg`,
    })
  }

  return gallery
}

const galleryFactory = (
  title: string,
  caption: string,
  { x, y }: { x: number; y: number },
  { imageId, imageCount }: { imageId: string; imageCount: number },
  svg?: { svgIcon: string, x: number, y: number}
) => {
  const images = getImages(imageId, imageCount)

  return {
    title,
    caption,
    x,
    y,
    imageId,
    images,
    svg
  }
}

export const gallery_test = {
  gallery1: galleryFactory(
    'Gallery 1',
    'caption',
    { x: 7, y: 40 },
    { imageId: 'gallery1', imageCount: 37 },
    { svgIcon: 'svg/path/gallery1.svg' , x:260 ,y:80}
  ),
  gallery2: galleryFactory(
    'Gallery 2',
    'caption',
    { x: 14, y: 28 },
    { imageId: 'gallery2', imageCount: 28 },
    { svgIcon: 'svg/path/gallery2.svg' , x:10 ,y:18}
  )
}

