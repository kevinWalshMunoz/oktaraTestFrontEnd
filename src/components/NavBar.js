import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";

function NavBar() {
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars/>
        </Link>
      </div>
    </>
  )
}

export default NavBar