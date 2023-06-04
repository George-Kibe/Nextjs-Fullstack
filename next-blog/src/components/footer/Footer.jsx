import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-{14px] flex items-center justify-between mb-1'>
      <div>©2023 Buenas Group. All Rights Reserved</div>
      <div className='flex gap-2'>
        <div className='h-5 w-5 relative'><Image fill className='cursor-pointer opacity-50' src={"/1.png"} alt='Buenas Facebook' /></div>
        <div className='h-5 w-5 relative'><Image fill className='cursor-pointer opacity-50' src={"/2.png"} alt='Buenas Instagram' /></div>
        <div className='h-5 w-5 relative'><Image fill className='cursor-pointer opacity-50' src={"/3.png"} alt='Buenas Twitter' /></div>
        <div className='h-5 w-5 relative'><Image fill className='cursor-pointer opacity-50' src={"/4.png"} alt='Buenas Youtube' /></div>
      </div>
    </div>
  )
}

export default Footer