import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat];
  if(data){
    return data;
  }
  
  return notFound()
  
}
const Category = ({params}) => {
  // console.log(params)
  const data = getData(params.category)
  console.log(data)
  return (
    <div className=''>
      <h1 className="text-[#53c58b] font-semibold text-[20px] md:text-[40px]">{params.category}</h1>
      {/* Loop through a list of all application details and row reverse the even numbers */}
      {
        data.map((item, index) => (
          <div className={`flex flex-col ${index%2 === 0 ?"md:flex-row-reverse":"md:flex-row" } items-center mb-4`} key={item.id}>
            <div className="md:flex-1 relative h-80 w-80 md:h-96 md:w-96">
              <Image src={item.image} alt="Contact Image" fill className='object-contain'/>
            </div>
            <div className="md:flex-1">
              <h1 className="font-bold text-[30px]">{item.title}</h1>
              <p className="mb-2 md:mb-4">
                {item.description} sequi? Ex voluptates tenetur adipisci. Provident quam, alias aperiam reprehenderit culpa eos ut? Repudiandae est ab sequi rem asperiores?
              </p>
              <Button text="See More" url={"#"}/>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default Category