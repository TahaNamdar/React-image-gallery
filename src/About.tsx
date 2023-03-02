import { FC } from 'react'

import Data from './data/data'

import Benefit1 from './images/Benefits illustration-01.jpg'
import Benefit1Lift from './images/Benefits illustration-01-lift.jpg'
import Benefit2 from './images/Benefits illustration-02.jpg'
import Benefit3 from './images/Benefits illustration-03.jpg'
import Benefit4 from './images/Benefits illustration-04.jpg'
import Benefit5 from './images/Benefits illustration-05.jpg'
import Benefit6 from './images/Benefits illustration-06.jpg'
import Benefit7 from './images/Benefits illustration-07.jpg'

import Style from './style/about.module.sass'

const About: FC = () => {
  return (
    <div className={Style.about}>
      <div className={Style.container}>
        <h2>{Data.wharf}</h2>
        <p>{Data.about}</p>

        <h2>{Data.wharfHeader}</h2>
        <p>{Data.wharfDesc}</p>

        <div className={Style.images}>
          <img
            src={Data.lift ? Benefit1Lift : Benefit1}
            alt='Access for customers with assisted and unassisted mobility needs'
          />
          <img src={Benefit2} alt='Improved access for customers with prams and luggage' />
          <img src={Benefit3} alt='Protection from the weather' />
          <img src={Benefit4} alt='Seating and waiting areas' />
          <img src={Benefit5} alt='Safety for customers and staff' />
          <img src={Benefit6} alt='Efficiency of ferry pick-up and drop-off' />
          <img src={Benefit7} alt='Improved pedestrian access to the wharf.' />
        </div>

        <ul>
          {Data.aboutPoints.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
