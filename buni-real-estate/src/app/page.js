'use client'

import Image from "next/image"

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Example() {
  return (
    <div className="h-full w-full overflow-hidden py-24 sm:py-32">
      <Image
        alt="background"
        src="/properties/p1.jpeg"
        fill
        className="-z-10 h-full w-full object-cover brightness-50 opacity-80"
      />    
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="">
          <Image
            src="/properties/p2.jpeg"
            alt="logo"
            width={200}
            height={200}
            className="mb-4 md:mb-20 opacity-70"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">REAL ESTATE CONSULT</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="h-1 w-1/6 bg-white" />
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          </dl>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Your partner in sustainable property development</h2>
      </div>
    </div>
  )
}
