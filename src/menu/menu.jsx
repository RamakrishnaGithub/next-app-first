import React from 'react'
import Link from "next/link";

import "./menu.css"

function Menu() {
  return (
    <div ><ol className="menu">
    <li> <Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/contact">Contact</Link></li>
  </ol></div>
    
  )
}

export default Menu
