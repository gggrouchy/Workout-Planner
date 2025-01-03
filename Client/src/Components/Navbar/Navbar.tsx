import React from 'react'
import logo from '@/assets/R & O Logo .jpg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Image src = {logo} alt="logo"/> 
    </div>
  )
}

export default Navbar
