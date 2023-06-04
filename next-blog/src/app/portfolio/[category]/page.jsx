import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Category = ({params}) => {
  console.log(params)
  return (
    <div className=''>
      <h1 className="text-[#53c58b] font-semibold text-[20px] md:text-[40px]">{params.category}</h1>
      {/* Loop through a list of all application details and row reverse the even numbers */}
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="md:flex-1">
          <h1 className="font-bold text-[30px]">RealHive Application</h1>
          <p className="mb-2 md:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae saepe sequi? Ex voluptates tenetur adipisci. Provident quam, alias aperiam reprehenderit culpa eos ut? Repudiandae est ab sequi rem asperiores?
          </p>
          <Button text="See More" url={"#"}/>
        </div>
        <div className="md:flex-1 relative h-80 w-80 md:h-96 md:w-96">
          <Image src={"/illustration.png"} alt="Contact Image" fill className='object-contain'/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center mb-4">
        <div className="md:flex-1">
          <h1 className="font-bold text-[30px]">RealHive Application</h1>
          <p className="mb-2 md:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae saepe sequi? Ex voluptates tenetur adipisci. Provident quam, alias aperiam reprehenderit culpa eos ut? Repudiandae est ab sequi rem asperiores?
          </p>
          <Button text="See More" url={"#"}/>
        </div>
        <div className="md:flex-1 relative h-80 w-80 md:h-96 md:w-96">
          <Image src={"/illustration.png"} alt="Contact Image" fill className='object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default Category