import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      {
        return { right: !menuOpened && "-100%" }
      }
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexBetween paddings h-container innerWidth">
        <img src="./logo.png" alt="logo" width={200} />
        {/* <OutsideClickHandler onOutsideClick={() => {
          setMenuOpened(false)
        }}> */}
        <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
          <a href="#residencies" >Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#getStarted">Get Started</a>
          <button className='button'>
            <a href="#contact">Contact</a>
          </button>
        </div>
        {/* </OutsideClickHandler> */}

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </section>
  )
}

export default Header