import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/home'>Home </Link>
      <Link to='/movies'>Movies </Link>
    </div>
  )
}

export default Nav
