import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className=''>
      <h1 className="mt-10 font-semibold text-[25px] mb-5">Choose a Gallery</h1>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap mb-10">
        <Link href={"/portfolio/illustrations"} className='relative hover:text-[#53c28b]'>
          <div className="relative h-80 w-80 md:h-96 md:w-96 border-[#bbb] border-2 border-solid">
            <Image src={"/illustration.png"} alt="Contact Image" fill className=''/>
          </div>
          <span className="absolute left-2 bottom-2 font-bold text-[20px] md:text-[30px]">Illustrations</span>
        </Link>
        <Link href={"/portfolio/websites"} className='relative hover:text-[#53c28b]'>
          <div className="relative h-80 w-80 md:h-96 md:w-96 border-[#bbb] border-2 border-solid">
            <Image src={"/websites.jpg"} alt="Websites Image" fill className=''/>
          </div>
          <span className="absolute left-2 bottom-2 font-bold text-[20px] md:text-[30px]">Websites</span>
        </Link>
        <Link href={"/portfolio/applications"} className='relative hover:text-[#53c28b]'>
          <div className="relative h-80 w-80 md:h-96 md:w-96 border-[#bbb] border-2 border-solid">
            <Image src={"/apps.jpg"} alt="Applicatons Image" fill className=''/>
          </div>
          <span className="absolute left-2 bottom-2 font-bold text-[20px] md:text-[30px] ">Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio