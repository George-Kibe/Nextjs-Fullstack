import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getBlogsData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    // next: { revalidate:10}, revalidate after every 10 seconds
    cache: "no-store",
  })
  console.log("Response", res)
  // if(!res.ok) {
  //   throw new Error("Failed to fetch Data!")
  // }
  return res.json();
}

const Blog = async() => {
  const blogs = await getBlogsData();
  console.log(blogs)
  return (
    <div className="">
      <h1 className=""></h1>
      {/* Loop through all blogs and show their images, title and short description */}
      {
        blogs && blogs.map((blog) => (
          <div className="flex flex-col md:flex-row items-center mb-4" key={blog.id}>
            <Link href={`/blog/${blog.id}`} className="md:mr-10 relative h-64 w-64 md:h-80 md:w-80">
              <Image src={blog.image||"/illustration.png"} alt="Contact Image" fill className='object-contain'/>
            </Link>
            <div className="md:flex-1">
              <h1 className="font-bold text-[30px]">{blog.title}</h1>
              <p className="mb-2 md:mb-4">
                {blog.body}
              </p>
              <Button text="Read More" url={`/blog/${blog.id}`}/>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default Blog