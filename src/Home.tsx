import { FC, useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Data from './data/data'

import Style from './style/wharf.module.sass'

const IMAGE_AR = 4000 / Data.imageHeight
const HEADER_HEIGHT = 72
const HEADER_HEIGHT_MOBILE = 64
const SCROLL_DIFF = 100

const getImageSize = () => {
  const windowHeight =
    document.body.clientHeight - (document.body.clientWidth <= 700 ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT)
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
    document.body.clientHeight - (document.body.clientWidth <= 700 ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT)
  const windowAR = document.body.clientWidth / windowHeight

  let diff

  if (windowAR < IMAGE_AR) {
    diff = scrollDiv.scrollWidth - scrollDiv.clientWidth
    scrollDiv.scrollLeft = diff * 0.5
  } else {
    diff = scrollDiv.scrollHeight - scrollDiv.clientHeight
    scrollDiv.scrollTop = diff * 0.5
  }

  scrollDiv.style.overflowX = isPopup || windowAR > IMAGE_AR || diff < SCROLL_DIFF ? 'hidden' : 'auto'
  scrollDiv.style.overflowY = isPopup || windowAR < IMAGE_AR || diff < SCROLL_DIFF ? 'hidden' : 'auto'
  scrollDiv.style.cursor = diff < SCROLL_DIFF ? 'default' : 'grab'
}

const Home: FC = () => {
  const [gallery] = useState(false)
  const [slider] = useState(false)
  const [imageStyle, setImageStyle] = useState(() => getImageSize())
  const page = useRef<HTMLDivElement>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const info = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onResize = () => {
      setImageStyle(getImageSize())

      if (scroller.current !== null) resizePage(scroller.current, slider || gallery)
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
      if (scroller.current !== null) resizePage(scroller.current, slider || gallery)
    }
  }, [gallery, slider])

  useLayoutEffect(() => {
    if (scroller.current !== null) resizePage(scroller.current, false)
  }, [])

  return (
    <div id='wharf' className={Style.wharf} ref={page}>
      <div className={Style.info} ref={info}>
        <h1>Port Macquarie</h1>
        <h1>Breakwall Rock Art</h1>
        <p>{Data.info}</p>
        <div className={Style.infoButtons}>
          <Link to='/Map'>
            <button className={Style.btn}>Explore the Rockwall</button>
          </Link>
        </div>
      </div>

      <div className={Style.scroller} ref={scroller}>
        <div className={Style.container} style={imageStyle}>
          <img id='background' src={Data.homebgimage} alt={Data.title} />
        </div>
      </div>
    </div>
  )
}

export default Home
