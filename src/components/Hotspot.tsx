import { FC } from 'react'
import { ReactComponent as Benefit } from '../images/Photo.svg'
import { ReactComponent as Photo } from '../images/Photo.svg'
import { ReactComponent as Environment } from '../images/Environment.svg'
import Style from '../style/hotspot.module.sass'

type HotspotType = 'benefit' | 'photo' | 'environment'

interface HotspotProps {
  hotspotType: HotspotType
  count?: number
  onClick: () => void
  x: number
  y: number
}

const getInner = (hotspotType: HotspotType, onClick: () => void) => {
  switch (hotspotType) {
    case 'benefit':
      return (
        <button  onClick={onClick}>
          <Benefit />
        </button>
      )
    case 'environment':
      return (
        <button  onClick={onClick}>
          <Environment />
        </button>
      )
    case 'photo':
      return (
        <button  onClick={onClick}>
          <Photo />
        </button>
      )
  }
}

const getClass = (type: HotspotType) => {
  let className = Style.burst
  if (type === 'benefit') className += ' ' + Style.blue
  else if (type === 'environment') className += ' ' + Style.green

  return className
}

const Hotspot: FC<HotspotProps> = (props) => {
  return (
    <div className={Style.hotspot} style={{ left: props.x + '%', top: props.y + '%' }}>
      <div className={getClass(props.hotspotType)}></div>
      {getInner(props.hotspotType, props.onClick)}
      {props.count && <span className={Style.count}>{props.count}</span>}
      <div className={Style.popup}>
        <div className={Style.tip}></div>
        {props.children}
      </div>
    </div>
  )
}

export default Hotspot
