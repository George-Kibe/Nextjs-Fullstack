import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getBlogsData() {
  const res = await fetch("http://localhost:3000/api/posts") // { next: { revalidate:10}, revalidate after every 10 seconds
    // cache: "no-store"}
  if(!res.ok) {
    throw new Error("Failed to fetch Data!")
  }
  const response = await res.json()
  console.log("Response", response)
  
  return response;
}

const Blog = async() => {
  const blogs = await getBlogsData();
  console.log("Blogs:" ,blogs)
  return (
    <div className="">
      <h1 className=""></h1>
      {/* Loop through all blogs and show their images, title and short description */}
      {/* { blogs.map((blog) => (  ))   } */}
      <p>{blogs.length}{blogs[0].title}</p>
      <div className="flex flex-col md:flex-row items-center mb-4">
            <Link href={`/blog/testId`} className="md:mr-10 relative h-64 w-64 md:h-80 md:w-80">
              <Image src={"/illustration.png"} alt="Contact Image" fill className='object-contain'/>
            </Link>
            <div className="md:flex-1">
              <h1 className="font-bold text-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corrupti?</h1>
              <p className="mb-2 md:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam molestiae velit nulla explicabo rerum accusantium error corporis porro. Provident reprehenderit sapiente fuga sit minima pariatur soluta tempora dolor aperiam? Mollitia alias voluptatem perferendis earum ratione numquam, tenetur, doloremque dolorem deserunt incidunt saepe sunt quam eligendi illo, deleniti ullam! Facilis?
              </p>
              <Button text="Read More" url={`/blog/testId`}/>
            </div>
          </div>
      
    </div>
  )
}

export default Blog