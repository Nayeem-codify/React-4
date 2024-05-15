import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div class="container">
            <div class="nav_wrapper">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contant">Contant</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
