import { useEffect, useState } from 'react'

export const useImage = (fileNames: {original:string,thumbnail:string}[]) => {
  
  const [image, setImage] = useState([] as ({original: string, thumbnail: string}[]))

  useEffect(() => {
    const fetchImage = async () => {
      for (let i = 0; i < fileNames.length; i++) {
        const file: { original: string; thumbnail: string; } = fileNames[i]
        const res_original = await import(`../images/${file.original}`)
        const res_thumbnail = await import(`../images/${file.thumbnail}`)

        setImage((prev) => {
          return [
            ...prev,
            {
              original: res_original.default,
              thumbnail: res_thumbnail.default,
            },
          ]
        })
      }
    }

    fetchImage()
  }, [fileNames])
  return [image]
}
