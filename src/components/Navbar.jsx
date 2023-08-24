import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <ul>
            <li className='nav-ltem'>
                <NavLink to="">HOME</NavLink>
            </li>
            <li className='nav-ltem'>
                <NavLink to="movies">Movies</NavLink>
            </li>
            <li className='nav-ltem'>
                <NavLink to="users">Users</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar