import { useEffect, useState } from 'react'

export const useImage = (fileNames: []) => {
  const [image, setImage] = useState([] as any)

  useEffect(() => {
    const fetchImage = async () => {
      console.log(fileNames)
      for (let i = 0; i < fileNames.length; i++) {
        const file: { original: string; thumbnail: string } = fileNames[i]
        const res_original = await import(`../images/${file.original}`)
        const res_thumbnail = await import(`../images/${file.thumbnail}`)

        setImage((prev: any) => {
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
