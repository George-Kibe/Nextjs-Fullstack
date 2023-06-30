import moment from 'moment'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import connect from '@/utils/db'
import Post from '@/models/Post'

async function getBlogsData() {
  await connect()
  const response = await Post.find();
  const blogsData = JSON.parse(JSON.stringify(response))
  return blogsData
}

const Blog = async() => {
  const blogs = await getBlogsData();
  // console.log("Blogs:",blogs)
  return (
    <div className="">
      <h1 className=""></h1>
      {/* Loop through all blogs and show their images, title and short description */}
      { blogs.map((blog) => (  
        <div className="flex flex-col md:flex-row items-center mb-4" key={blog._id}>
          <Link href={`/blog/${blog._id}`} className="md:mr-10 relative h-64 w-64 md:h-72 md:w-80">
            <Image src={blog.image} alt="Contact Image" fill className='object-contain'/>
          </Link>
          <div className="md:flex-1">
            <h1 className="font-bold text-[30px]">{blog.title}</h1>
            <p className="mb-2 md:mb-4">
              {blog.description}
            </p>
            <p className="my-2 text-sm">Posted・{moment(blog.createdAt).calendar()}</p>
            <Button text="Read More" url={`/blog/${blog._id}`}/>
          </div>
        </div>
      ))   
      }
    </div>
  )
}

export default Blog