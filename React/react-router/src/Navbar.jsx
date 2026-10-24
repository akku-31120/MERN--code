import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home Page</Link>
      <Link to='/about'>about Page</Link>
    </div>
  )
}

export default Navbar
