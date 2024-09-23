import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
      <button className="p-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-md">{text}</button>
    </Link>
  )
}

export default Button