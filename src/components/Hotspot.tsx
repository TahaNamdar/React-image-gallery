import { FC, useState, useEffect, MouseEventHandler } from 'react'
import { ReactComponent as Benefit } from '../images/Photo.svg'
import { ReactComponent as Photo } from '../images/Photo.svg'
import { ReactComponent as Environment } from '../images/Environment.svg'
import Style from '../style/hotspot.module.sass'
import '../style/gallery.scss'

type HotspotType = 'benefit' | 'photo' | 'environment'

interface HotspotProps {
  hotspotType: HotspotType
  title:string
  count?: number
  onClick: () => void
  x: number
  y: number
  svgHover:{ svgIcon: string, x: number, y: number},
  openTooltip: (x: number, y: number, title: string) => void
  closeTooltip: () => void
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
  const [image, setImage] = useState("")
  const [isHover, setIsHover] = useState(false)


 


  useEffect(() => {
   const fetchImage = async () => {

     const svg = await import(`../images/${props.svgHover.svgIcon}`)

     setImage(svg.default)
   }

   fetchImage()
   
  }, [image, props.svgHover.svgIcon])


 
  
  const onMouseHandler = (e: any) =>{
    setIsHover(true)


    const openTooltip = props.openTooltip

    const y = e.pageX
    const x = e.pageY
    const title = props.title

    console.log(openTooltip)
    openTooltip(x, y, title)
  }


  const onMOuseLeaveHandler = () => {
    setIsHover(false)

    const closeTooltip = props.closeTooltip
    closeTooltip()
  }


  return (
<div  onMouseEnter={onMouseHandler} onMouseLeave={onMOuseLeaveHandler}>

<div style={{position:'absolute', top: props.svgHover.x + 'px', left: props.svgHover.y + 'px'}} className={`${isHover && 'hotspot_bg'}`}>
        <img src={image} alt="icon" />
    </div>
      
   <div className={Style.hotspot}  style={{ left: props.x + '%', top: props.y + '%' }}>

    {/* <span className="tooltiptext">{props.title}</span> */}
  <div className={getClass(props.hotspotType)} style={{pointerEvents: 'none'}}></div>
      {getInner(props.hotspotType, props.onClick)}
      {props.count && <span className={Style.count}>{props.count}</span>}
      
      {/* <div className={Style.popup}>
        <div className={Style.tip}></div>
        {props.children}
      </div> */}
  </div>



</div>
  


      
    // </div>
  )
}

export default Hotspot
