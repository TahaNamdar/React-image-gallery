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
    { x: 8, y: 40 },
    { imageId: 'gallery1', imageCount: 37 }
  ),
  gallery2: galleryFactory(
    'Gallery 2',
    'caption',
    { x: 14, y: 30 },
    { imageId: 'gallery2', imageCount: 28 }
  ),gallery3: galleryFactory(
    'Gallery 3',
    'caption',
    { x: 20, y: 27 },
    { imageId: 'gallery3', imageCount: 32 }
  ),gallery4: galleryFactory(
    'Gallery 4',
    'caption',
    { x: 25, y: 27 },
    { imageId: 'gallery4', imageCount: 29 }
  ),gallery5: galleryFactory(
    'Gallery 5',
    'caption',
    { x: 30, y: 27 },
    { imageId: 'gallery5', imageCount: 33 }
  ),gallery6: galleryFactory(
    'Gallery 6',
    'caption',
    { x: 35, y: 27 },
    { imageId: 'gallery6', imageCount: 27 }
  ),gallery7: galleryFactory(
    'Gallery 7',
    'caption',
    { x: 40, y: 27 },
    { imageId: 'gallery7', imageCount: 36 }
  ),gallery8: galleryFactory(
    'Gallery 8',
    'caption',
    { x: 45, y: 27 },
    { imageId: 'gallery8', imageCount: 33 }
  ),gallery9: galleryFactory(
    'Gallery 9',
    'caption',
    { x: 50, y: 27 },
    { imageId: 'gallery9', imageCount: 32 }
  ),gallery10: galleryFactory(
    'Gallery 10',
    'caption',
    { x: 55, y: 27 },
    { imageId: 'gallery10', imageCount: 32 }
  ),gallery11: galleryFactory(
    'Gallery 11',
    'caption',
    { x: 60, y: 27 },
    { imageId: 'gallery11', imageCount: 23 }
  ),gallery12: galleryFactory(
    'Gallery 12',
    'caption',
    { x: 65, y: 27 },
    { imageId: 'gallery12', imageCount: 28 }
  ),gallery13: galleryFactory(
    'Gallery 13',
    'caption',
    { x: 70, y: 27 },
    { imageId: 'gallery13', imageCount: 21 }
  ),gallery14: galleryFactory(
    'Gallery 14',
    'caption',
    { x: 75, y: 27 },
    { imageId: 'gallery14', imageCount: 23 }
  ),gallery15: galleryFactory(
    'Gallery 15',
    'caption',
    { x: 80, y: 27 },
    { imageId: 'gallery15', imageCount: 30 }
  ),gallery16: galleryFactory(
    'Gallery 16',
    'caption',
    { x: 170, y: 27 },
    { imageId: 'gallery16', imageCount: 16 }
  ),
}
