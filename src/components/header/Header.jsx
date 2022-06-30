import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.jpeg'
import HeaderSocial from './Header socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sachin Girish</h1>
        <h5 classNames="text-light">Frontend Devoleper</h5>
        {<CTA/>}
        <HeaderSocial />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" classname='scroll_dowm'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header