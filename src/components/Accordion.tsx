import { FC, useState, useRef } from 'react'
import { ReactComponent as DownChevron } from '../images/Down_Chevron.svg'

import Style from '../style/accordion.module.sass'

interface AccordionProps {
  title: string
  body: string
}

const Accordion: FC<AccordionProps> = (props) => {
  const [open, setOpen] = useState(false)
  const panel = useRef<HTMLDivElement>(null)

  const onToggle = () => {
    setOpen((prev) => {
      if (panel.current !== null) panel.current.style.maxHeight = prev ? '' : panel.current.scrollHeight + 'px'

      return !prev
    })
  }

  return (
    <div className={Style.accordion + (open ? ' ' + Style.open : '')}>
      <div className={Style.header} onClick={onToggle}>
        <h3>{props.title}</h3>
        <button title={open ? 'Close' : 'Open'}>
          <DownChevron />
        </button>
      </div>
      <div className={Style.panel} ref={panel}>
        <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
      </div>
    </div>
  )
}

export default Accordion
