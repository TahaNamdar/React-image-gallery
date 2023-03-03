import { FC, useState, useEffect, useRef, useLayoutEffect } from 'react'
import { ReactComponent as HelpIcon } from './images/Help.svg'
import { ReactComponent as Benefit } from './images/Benefit.svg'
import { ReactComponent as Photo } from './images/Photo.svg'
import { ReactComponent as Environment } from './images/Environment.svg'
import { ReactComponent as Pan } from './images/Hand Panning.svg'
import Hotspot from './components/Hotspot'
import Gallery from './components/Gallery'
import Data from './data/data'
import { gallery_test } from './data/dataGallery'
import Style from './style/wharf.module.sass'

const IMAGE_AR = 4000 / Data.imageHeight
const HEADER_HEIGHT = 72
const HEADER_HEIGHT_MOBILE = 64
const SCROLL_DIFF = 100

const getImageSize = () => {
  const windowHeight =
    document.body.clientHeight -
    (document.body.clientWidth <= 700 ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT)
  const windowAR = document.body.clientWidth / windowHeight

  if (windowAR < IMAGE_AR) {
    // Match height
    return {
      height: windowHeight,
      width: windowHeight * IMAGE_AR,
    }
  } else {
    // Match width
    return {
      width: document.body.clientWidth,
      height: document.body.clientWidth / IMAGE_AR,
    }
  }
}

const resizePage = (scrollDiv: HTMLDivElement, isPopup: boolean) => {
  const windowHeight =
    document.body.clientHeight -
    (document.body.clientWidth <= 700 ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT)
  const windowAR = document.body.clientWidth / windowHeight

  let diff

  if (windowAR < IMAGE_AR) {
    diff = scrollDiv.scrollWidth - scrollDiv.clientWidth
    scrollDiv.scrollLeft = diff * 0.5
  } else {
    diff = scrollDiv.scrollHeight - scrollDiv.clientHeight
    scrollDiv.scrollTop = diff * 0.5
  }

  scrollDiv.style.overflowX =
    isPopup || windowAR > IMAGE_AR || diff < SCROLL_DIFF ? 'hidden' : 'auto'
  scrollDiv.style.overflowY =
    isPopup || windowAR < IMAGE_AR || diff < SCROLL_DIFF ? 'hidden' : 'auto'
  scrollDiv.style.cursor = diff < SCROLL_DIFF ? 'default' : 'grab'
}

const Map: FC = () => {
  const [index, setIndex] = useState(1)
  const [showHelp, setShowHelp] = useState(false)
  const [gallery, setGallery] = useState(false)
  const [slider, setSlider] = useState(false)
  const [imageStyle, setImageStyle] = useState(() => getImageSize())
 

  const page = useRef<HTMLDivElement>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const toggleHelp = () => setShowHelp((prev) => !prev)

  const onClose = () => {
    setSlider(false)
    setGallery(false)
    setIndex(0)
  }

  useEffect(() => {
    const onResize = () => {
      setImageStyle(getImageSize())

      if (scroller.current !== null)
        resizePage(scroller.current, slider || gallery)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [gallery, slider])

  useEffect(() => {
    if (page.current !== null) {
      page.current.style.overflow = gallery || slider ? 'hidden' : 'auto'
      document.body.style.position = gallery || slider ? 'fixed' : 'initial'
      if (scroller.current !== null)
        resizePage(scroller.current, slider || gallery)
    }
  }, [gallery, slider])

  useLayoutEffect(() => {
    if (scroller.current !== null) resizePage(scroller.current, false)
  }, [])

  const onDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.buttons === 1 && (e.target as HTMLDivElement).id === 'background') {
      if (e.currentTarget.style.overflowX !== 'hidden')
        e.currentTarget.scrollLeft -= e.movementX

      if (e.currentTarget.style.overflowY !== 'hidden')
        e.currentTarget.scrollTop -= e.movementY

      e.preventDefault()
    }
  }

  return (
    <div id="wharf" className={Style.wharf} ref={page}>
      <div className={Style.scroller} ref={scroller} onMouseMove={onDrag}>
        <div className={Style.container} style={imageStyle}>
          <img
            id="background"
            src={Data.backgroundImage}
            alt={Data.title}
            onDragStart={(e) => e.preventDefault()}
          />

          {Object.keys(gallery_test).map((g, i) => {
            return <Hotspot
              key={i}
              hotspotType="benefit"
              onClick={() => {
                setIndex(i+1)
                setGallery(true)
              }}
              x={gallery_test[g].x}
              y={gallery_test[g].y}
              count={gallery_test[g].images.length}
              title = {gallery_test[g].title}
              
            >
              
            </Hotspot>
          })}
        </div>
      </div>

      {gallery && (

        <Gallery
          index={index}
          setIndex={(i) => setIndex(i)}
          gallery={(gallery_test)[`gallery${index}`].images}
          onClose={onClose}
          title={(gallery_test)[`gallery${index}`].title}
        />
      )}

      <div className={Style.helpButtons}>
        <button title="Help" onClick={toggleHelp}>
          <HelpIcon />
        </button>
      </div>

      <div className={Style.help + (showHelp ? ' ' + Style.active : '')}>
        <button title="Close" className={Style.close} onClick={toggleHelp}>
          ✕
        </button>
        <p className={Style.bold}>Note</p>
        <p>Artist impression for illustrative purposes only.</p>

        <p className={Style.bold}>How to navigate</p>
        <div className={Style.row}>
          <Pan />
          <p>Pan to look around</p>
        </div>

        <p>Find out more about the project by clicking on the hot spots.</p>

        <div className={Style.hotspotTypes}>
          <div className={Style.row}>
            <Photo />
            <p>Existing and proposed design</p>
          </div>
          <div className={Style.row}>
            <Benefit />
            <p>Design features</p>
          </div>
          {Data.gallery.some((g) => g.env) && (
            <div className={Style.row}>
              <Environment />
              <p>Review of environmental factors</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Map
