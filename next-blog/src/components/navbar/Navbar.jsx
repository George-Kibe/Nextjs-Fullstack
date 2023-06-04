"use client"

import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
  { id: 1, title: "Home", url: "/"},
  { id: 2, title: "About", url: "/about"},
  { id: 3, title: "Blog", url: "/blog"},
  { id: 4, title: "Dashboard", url: "/dashboard"},
  { id: 5, title: "Contact", url: "/contact"},
  { id: 6, title: "Portfolio", url: "/portfolio"},
]

const Navbar = () => {
  const logoutUser = () => {
    console.log("user Logged out!")
  }

  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/"  className="font-bold text-[22px]">Buenas Blog</Link>
      <div className="flex gap-5 items-center">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}  className="">{link.title}</Link>
        ))}
        <button onClick={logoutUser} className="p-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-md">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar