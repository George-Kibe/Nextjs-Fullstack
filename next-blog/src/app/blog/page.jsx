import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className="">
      <h1 className=""></h1>
      {/* Loop through all blogs and show their images, title and short description */}
      <div className="flex flex-col md:flex-row items-center mb-4">
        <Link href={"/blog/testId"} className="md:mr-10 relative h-64 w-64 md:h-80 md:w-80">
          <Image src={"/illustration.png"} alt="Contact Image" fill className='object-contain'/>
        </Link>
        <div className="md:flex-1">
          <h1 className="font-bold text-[30px]">RealHive Application</h1>
          <p className="mb-2 md:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae saepe sequi? Ex voluptates tenetur adipisci. Provident quam, alias aperiam reprehenderit culpa eos ut? Repudiandae est ab sequi rem asperiores?
          </p>
          <Button text="Read More" url={"/blog/testid"}/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <Link href={"/blog/testId"} className="md:mr-10 relative h-64 w-64 md:h-80 md:w-80">
          <Image src={"/illustration.png"} alt="Contact Image" fill className='object-contain'/>
        </Link>
        <div className="md:flex-1">
          <h1 className="font-bold text-[30px]">RealHive Application</h1>
          <p className="mb-2 md:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae saepe sequi? Ex voluptates tenetur adipisci. Provident quam, alias aperiam reprehenderit culpa eos ut? Repudiandae est ab sequi rem asperiores?
          </p>
          <Button text="Read More" url={"/blog/testId"}/>
        </div>
      </div>
    </div>
  )
}

export default Blog