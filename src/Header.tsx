import { FC, useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

import { ReactComponent as Logo } from './images/Logo.svg'
import { ReactComponent as Menu } from './images/Menu.svg'

import { ReactComponent as Home } from './images/Home.svg'
import { ReactComponent as Explore } from './images/Explore.svg'
import { ReactComponent as Info } from './images/Info.svg'

import { ReactComponent as Email } from './images/Email.svg'
import { ReactComponent as Twitter } from './images/Twitter.svg'
import { ReactComponent as Facebook } from './images/Facebook.svg'
import { ReactComponent as Linkedin } from './images/Linkedin.svg'

import Data from './data/data'
import Style from './style/header.module.sass'

const Header: FC = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const toggleSideMenu = () => setSideMenuOpen((prev) => !prev)

  const loc = useLocation()

  useEffect(() => {
    setSideMenuOpen(false)
  }, [loc])

  return (
    <>
      <div className={Style.header}>
        <a
          aria-label='Port Macquarie Breakwall Rock Art'
          href='https://www.transport.nsw.gov.au/projects/current-projects/port-macquarie-southern-breakwall-upgrade'
        >
          <Logo className={Style.logo} />
        </a>
        <Link to='/'>
          <h2>Port Macquarie Breakwall Upgrade</h2>
        </Link>
        <button title='Menu' className={Style.menu} onClick={toggleSideMenu}>
          <Menu />
        </button>
      </div>

      <div className={Style.sidemenu + (sideMenuOpen ? ' ' + Style.active : '')}>
        <h2>Wharves Upgrade Program</h2>
        <button className={Style.close} onClick={toggleSideMenu}>
          ✕
        </button>
        <div className={Style.container}>
          <div className={Style.links}>
            <NavLink activeClassName={Style.active} exact to='/'>
              <Home /> Home
            </NavLink>
            <NavLink activeClassName={Style.active} to='/Map'>
              <Explore /> Explore the Rockwall
            </NavLink>
            <a
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Port Macquarie Breakwall Rock Art'
              href='https://www.transport.nsw.gov.au/projects/current-projects/port-macquarie-southern-breakwall-upgrade'
            >
              <Info /> Project information
            </a>
          </div>
          <div className={Style.info}>
            <p>
              For further information about this project contact:{' '}
              <a href='mailto:portmacquariebreakwall @transport.nsw.gov.au'>
                portmacquariebreakwall
                <br />
                @transport.nsw.gov.au
              </a>{' '}
              <br /> or call <br />
              <a href='tel:1800571311'>1800 571 311</a> (toll free) during business hours.
            </p>
          </div>
          <div className={Style.share}>
            <p>Share via</p>
            <div className={Style.socials}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  'mailto:?Subject=' +
                  encodeURIComponent(Data.title) +
                  "&Body=I'd%20like%20to%20share%20this%20Transport%20for%20New%20South%20Wales%20interactive%20web%20portal%20with%20you%20that%20explains%20the%20proposed%20upgrade%20of%20" +
                  encodeURIComponent(Data.wharf) +
                  ':%20(https://wharvesupgrades.mycommunityengine.com/' +
                  Data.slug +
                  ')'
                }
              >
                <Email />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  "https://twitter.com/intent/tweet?text=I'd%20like%20to%20share%20this%20Transport%20for%20New%20South%20Wales%20interactive%20web%20portal%20with%20you%20that%20explains%20the%20proposed%20upgrade%20of%20" +
                  encodeURIComponent(Data.wharf) +
                  ':%20(https://wharvesupgrades.mycommunityengine.com/' +
                  Data.slug +
                  ')'
                }
              >
                <Twitter />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  'https://www.facebook.com/sharer/sharer.php?u=https://wharvesupgrades.mycommunityengine.com/' +
                  Data.slug +
                  ''
                }
              >
                <Facebook />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  'http://www.linkedin.com/shareArticle?mini=true&url=https://wharvesupgrades.mycommunityengine.com/' +
                  Data.slug +
                  "&title=I'd%20like%20to%20share%20this%20Transport%20for%20New%20South%20Wales%20interactive%20web%20portal%20with%20you%20that%20explains%20the%20proposed%20upgrade%20of%20" +
                  encodeURIComponent(Data.wharf) +
                  ':%20(https://wharvesupgrades.mycommunityengine.com/' +
                  Data.slug +
                  ')'
                }
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
