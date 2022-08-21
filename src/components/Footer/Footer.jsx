import React from 'react'
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg' alt='logo' />
      </div>
      <div className='footer__copyright'>
        <p>© 2020 MovieDB</p>
      </div>
    </div>
  )
}

export default Footer