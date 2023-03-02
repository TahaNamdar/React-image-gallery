import { FC } from 'react'
import Accordion from './components/Accordion'
import Data from './data/data'

import Style from './style/faq.module.sass'

const FAQ: FC = () => {
  return (
    <div className={Style.faq}>
      <div className={Style.container}>
        <h2>Frequently Asked Questions (FAQs)</h2>
        {Data.faq.map((faq, i) => (
          <Accordion key={i} title={faq.title} body={faq.body} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
