import { FC, useState, useRef, useEffect } from 'react'
import Style from '../style/slider.module.sass'
import { ReactComponent as LeftChevron } from '../images/Left_Chevron.svg'
import { ReactComponent as RightChevron } from '../images/Right_Chevron.svg'
import { ReactComponent as LeftArrow } from '../images/Left_Arrow.svg'
import { ReactComponent as RightArrow } from '../images/Right_Arrow.svg'

interface ISlider {
  img1: string
  img2?: string
  title: string
  caption: string
  options?: { img: string; name: string }[]
}

interface SliderProps {
  sliders: ISlider[]
  index: number
  setIndex: (index: number) => void
  onClose: () => void
}

const getWidth = (scrollDiv: HTMLDivElement | null) => {
  if (scrollDiv !== null) return scrollDiv.clientWidth
  else if (window.innerWidth > 768) return Math.min(window.innerWidth * 0.8, 2000)
  else return window.innerWidth - 32
}

const Slider: FC<SliderProps> = (props) => {
  const after = useRef<HTMLImageElement>(null)
  const [width, setWidth] = useState(() => getWidth(after.current))
  const [pct, setPct] = useState(0.5)
  const [downElem, setDownElem] = useState<HTMLElement>()
  const existing = useRef<HTMLParagraphElement>(null)
  const proposed = useRef<HTMLParagraphElement>(null)
  const background = useRef<HTMLDivElement>(null)
  const [optionIndex, setOptionIndex] = useState(0)

  const slider = props.sliders[props.index]
  const hasOptions = !!slider.options
  const showLeftArrow = props.index > 0 || (hasOptions && optionIndex > 0)
  const showRightArrow =
    props.index < props.sliders.length - 1 || (hasOptions && optionIndex < slider.options!.length - 1)

  useEffect(() => {
    if (after.current !== null) after.current.style.clip = 'rect(0px ' + width + 'px auto ' + width * pct + 'px)'

    // Clip text
    if (proposed.current !== null && existing.current !== null) {
      const clipX = proposed.current.clientWidth - (width - width * pct)
      proposed.current.style.clip = 'rect(0 auto auto ' + clipX + 'px)'
      existing.current.style.clip = 'rect(0 ' + width * pct + 'px auto 0)'
    }
  }, [pct, width])

  useEffect(() => {
    const onResize = () => setWidth(getWidth(after.current))

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      setDownElem(e.target as HTMLElement)
    }

    window.addEventListener('mousedown', onMouseDown)
    return () => {
      window.removeEventListener('mousedown', onMouseDown)
    }
  }, [])

  const positionLineMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.buttons === 1) {
      const rect = e.currentTarget.getBoundingClientRect()
      const newPct = (e.clientX - rect.left) / rect.width
      setPct(newPct)
    }

    e.preventDefault()
  }

  const positionLineTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const newPct = Math.min(1, Math.max(0, x / width))
    setPct(newPct)
    e.preventDefault()
  }

  const changeImage = (add: number) => {
    if (hasOptions) {
      if (optionIndex === 0 && add === -1) {
        props.setIndex(props.index - 1)
        setOptionIndex(0)
      } else if (optionIndex === slider.options!.length - 1 && add === 1) {
        props.setIndex(props.index + 1)
        setOptionIndex(0)
      } else setOptionIndex((i) => i + add)
    } else props.setIndex(props.index + add)

    setPct(0.5)
  }

  const onClickBackground = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLDivElement).id === 'slider' && downElem?.id === 'slider') props.onClose()
  }

  const renderDots = () => {
    if (hasOptions)
      return slider.options!.map((s, i) => (
        <button key={i} disabled={i === optionIndex} onClick={() => setOptionIndex(i)}></button>
      ))
    else
      return props.sliders.map((s, i) => (
        <button key={i} disabled={i === props.index} onClick={() => props.setIndex(i)}></button>
      ))
  }

  return (
    <div id='slider' className={Style.slider} ref={background} onClick={onClickBackground}>
      <button title='Close' className={Style.close} onClick={props.onClose}>
        ✕
      </button>

      <div className={Style.container}>
        <div className={Style.heading}>
          <h2>
            {slider.title}
            {hasOptions ? ` - ${slider.options![optionIndex].name}` : ''}
          </h2>
        </div>

        <div
          className={Style.imageContainer}
          onMouseDown={positionLineMouse}
          onMouseMove={positionLineMouse}
          onTouchStart={positionLineTouch}
          onTouchMove={positionLineTouch}
        >
          <img
            className={Style.after}
            alt='Proposed'
            ref={after}
            src={hasOptions ? slider.options![optionIndex].img : slider.img2}
            style={{ clip: 'rect(0px ' + width + 'px auto ' + width * pct + 'px)' }}
          />
          <img className={Style.before} alt='Existing' src={slider.img1} />
          <p className={Style.leftText} ref={existing}>
            Existing
          </p>
          <p className={Style.rightText} ref={proposed}>
            Proposed
          </p>
          <div className={Style.line} style={{ left: pct * 100 + '%' }}>
            <div className={Style.background}>
              <div className={Style.circle}></div>
              <LeftArrow className={Style.left} />
              <RightArrow className={Style.right} />
            </div>
          </div>
        </div>

        <p className={Style.description}>{slider.caption}</p>

        <div className={Style.nav}>
          {showLeftArrow ? (
            <button className={Style.previous} title='Previous' onClick={() => changeImage(-1)}>
              <LeftChevron />
            </button>
          ) : (
            <div className={Style.blocker} />
          )}

          <div className={Style.dots}>{renderDots()}</div>

          {showRightArrow ? (
            <button className={Style.next} title='Next' onClick={() => changeImage(1)}>
              <RightChevron />
            </button>
          ) : (
            <div className={Style.blocker} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Slider
