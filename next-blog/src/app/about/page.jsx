import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className="relative w-[100%] h-[300px] md:h-[500px]">
        <Image 
          src={'https://images.pexels.com/photos/14742225/pexels-photo-14742225.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'}
          fill
          alt='pexels image'
          className='rounded-xl object-cover grayscale'
        />
        <div className="absolute bottom-5 left-5 bg-[#53c28b] text-white p-2">
          <h1 className="font-bold text-[30px]">Digital Story Tellers</h1>
          <h2 className="text-white font-semibold">Award winning Digital experts</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className='py-5 flex-1'>
          <h1 className="font-bold text-[25px] md:text-[40px]">See Our Works?</h1>
          <p className="mb-4 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam alias aliquam reprehenderit? Adipisci nemo aperiam, ad maxime, necessitatibus blanditiis, ipsam consequuntur nesciunt vel culpa quia omnis neque nulla. Ipsa officia doloribus, et distinctio vero eos sunt corrupti, hic ipsum aut repellat quam voluptates eius delectus natus molestiae laboriosam error. Ducimus perspiciatis facilis in vero, id veritatis modi iusto dolorem, commodi dolor quam molestias enim aliquam dicta repellendus obcaecati tempora repudiandae. Sit eligendi voluptatem ipsum ducimus dolor necessitatibus fuga totam modi iusto deserunt nihil, similique labore molestias sequi veritatis quo accusamus est voluptas dolorem, tenetur dicta fugiat maxime incidunt rerum. Nemo.
          </p>
          <Button url={"/portfolio"} text={"Portfolio"}/>
        </div>
        <div className='py-5 flex-1 gap-10'>
          <h1 className="font-bold text-[25px] md:text-[40px]">Who are We?</h1>
          <p className="mb-4 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam alias aliquam reprehenderit? Adipisci nemo aperiam, ad maxime, necessitatibus blanditiis, ipsam consequuntur nesciunt vel culpa quia omnis neque nulla. Ipsa officia doloribus, et distinctio vero eos sunt corrupti, hic ipsum aut repellat quam voluptates eius delectus natus molestiae laboriosam error. Ducimus perspiciatis facilis in vero, id veritatis modi iusto dolorem, commodi dolor quam molestias enim aliquam dicta repellendus obcaecati tempora repudiandae. Sit eligendi voluptatem ipsum ducimus dolor necessitatibus fuga totam modi iusto deserunt nihil, similique labore molestias sequi veritatis quo accusamus est voluptas dolorem, tenetur dicta fugiat maxime incidunt rerum. Nemo.
          </p>
          <Button url={"contact"} text={"Contact"}/>
        </div>
      </div>
    </div>
  )
}

export default About