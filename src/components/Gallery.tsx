import { FC, useState } from 'react'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import '../style/gallery.scss'
import ImageGallery from 'react-image-gallery'
import Style from '../style/gallery.module.sass'
import '../style/gallery.scss'
import { useImage} from '../hooks/useImage'


interface GalleryProps {
  gallery: {original: string, thumbnail: string}[]
  index: number
  title:string
  setIndex: (index: number) => void
  onClose: () => void
}

const Gallery: FC<GalleryProps> = ({...props}:GalleryProps) => {
  const onClickBackground = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((e.target as HTMLDivElement).id === 'gallery') props.onClose()
  }


  const [image] = useImage(props.gallery)
  const [getCurrentImage, setCurrentImage] = useState("")


  const downloadImage = () => {
    // active imag
    const activeImage = (document.querySelector(".image-gallery-thumbnail.active > span > img")as HTMLImageElement).src
    setCurrentImage(activeImage)
}
  return (
    <div id="gallery" className={Style.gallery} onClick={onClickBackground}>
      <section className='iconWrapper'>             
    <div>
        <h3 style={{color:'white'}}>{props.title}</h3>
    </div>
      
    <div className='shareIcon'>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}} >
          <path d="M3.2857 6.11429C4.00951 6.11429 4.65713 5.82857 5.15237 5.38095L11.9428 9.33334C11.8952 9.55238 11.8571 9.77143 11.8571 10C11.8571 10.2286 11.8952 10.4476 11.9428 10.6667L5.22856 14.581C4.71427 14.1048 4.03808 13.8095 3.2857 13.8095C2.52794 13.8095 1.80121 14.1105 1.26539 14.6464C0.729576 15.1822 0.428557 15.9089 0.428557 16.6667C0.428557 17.4244 0.729576 18.1512 1.26539 18.687C1.80121 19.2228 2.52794 19.5238 3.2857 19.5238C4.04346 19.5238 4.77019 19.2228 5.306 18.687C5.84182 18.1512 6.14284 17.4244 6.14284 16.6667C6.14284 16.4381 6.10475 16.219 6.05713 16L12.7714 12.0857C13.2857 12.5619 13.9619 12.8571 14.7143 12.8571C15.472 12.8571 16.1988 12.5561 16.7346 12.0203C17.2704 11.4845 17.5714 10.7578 17.5714 10C17.5714 9.24224 17.2704 8.51552 16.7346 7.9797C16.1988 7.44388 15.472 7.14286 14.7143 7.14286C13.9619 7.14286 13.2857 7.4381 12.7714 7.91429L5.99046 3.96191C6.03808 3.76191 6.06665 3.55238 6.06665 3.33334C6.06665 1.8 4.81903 0.561908 3.2857 0.561907C1.75237 0.561907 0.504749 1.8 0.504749 3.33334C0.504749 4.07089 0.79774 4.77824 1.31927 5.29977C1.8408 5.8213 2.54815 6.11429 3.2857 6.11429Z" fill="white"/>
          </svg>

          <a href={getCurrentImage} download onClick={downloadImage}>
          <svg  width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mLeft' style={{cursor:'pointer'}}>
          <path d="M13.6666 15.619L13.6666 13.7143L0.333293 13.7143L0.333293 15.619L13.6666 15.619ZM13.6666 6.09524L9.8571 6.09524L9.8571 0.380953L4.14282 0.380953L4.14282 6.09524L0.333293 6.09524L6.99996 12.7619L13.6666 6.09524Z" fill="white"/>
          </svg>

          </a>
    </div>

      </section>
  
      <div className='galleryWrapperStyle'>
        <ImageGallery showIndex={true} items={image} />
      </div>

      <button title="Close" className={Style.close} onClick={props.onClose}>
        ✕
      </button>

    </div>
  )
}

export default Gallery
