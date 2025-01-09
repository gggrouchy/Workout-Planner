import React from 'react'
import logo from '@/assets/R & O Logo .jpg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <Image src = {logo} alt="logo"/> 
      <Link href='/'>Home</Link>
      <Link href='/'>About</Link>
      <button>Sign Out</button>
    </nav>
  )
}

export default Navbar
