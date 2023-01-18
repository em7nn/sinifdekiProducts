import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {
  return (
    <>
    <div>
    <Link className='stil' to="/">Products</Link>
    </div>
    </>
  )
}

export default Navbar