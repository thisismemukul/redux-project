import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <img src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg' alt='logo' />
        </div>
      </Link>
    </div>
  )
}

export default Header