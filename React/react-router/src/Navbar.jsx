import React from 'react'
import { Link } from 'react-router'
import Header from './Header'

const Navbar = () => {
  return (
    <div className='header'>

      <div>
        <Link className='link' to={'/'}> <h2>Logo</h2> </Link>
      </div>

    <div>
      <ul>
        <li>
          <Link className='link' to="/">Home</Link>
        </li>

        <li>
        <Link  className='link' to='/about'>about</Link>
        </li>

        <li>
        <Link  className='link' to='/Login'>Login</Link>
        </li>

      </ul>
    </div>
      
      
    </div>
  )
}

export default Navbar
