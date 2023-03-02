import { FC } from 'react'
import Style from '../style/single_image.module.sass'

interface SingleImageProps {
  image: string
  onClose: () => void
}

const SingleImage: FC<SingleImageProps> = (props) => {
  const onClickBackground = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLDivElement).id === 'image') props.onClose()
  }

  return (
    <div id='image' className={Style.image} onClick={onClickBackground}>
      <button title='Close' className={Style.close} onClick={props.onClose}>
        ✕
      </button>
      <div className={Style.imageHolder} style={{ backgroundImage: 'url("' + props.image + '")' }} />
    </div>
  )
}

export default SingleImage
