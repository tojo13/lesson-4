import React from 'react'
import Link from 'react-router-dom'

import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h1>
        <Link to='/'>
          <span className='car-word'>Pauline's</span>
          <span className='cdr-word'>Perfect Patisserie</span>
        </Link>
      </h1>
    </header>
  )
}

export default Header
