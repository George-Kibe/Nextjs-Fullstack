import Image from 'next/image'
import React from 'react'
import {notFound} from "next/navigation";
import moment from 'moment';
import connect from '@/utils/db';
import Post from '@/models/Post';

async function getBlogData(id) {
  await connect()

  const response = await Post.findById(id);
  const blogData = JSON.parse(JSON.stringify(response))
  return blogData
  // const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
  //   // next: { revalidate:10}, revalidate after every 10 seconds
  //   cache: "no-store"
  // })
  // if(!res.ok) {
  //   return
  //   // throw new Error("Failed to fetch Data!")
  // }
  // const response = await res.json()
  // console.log("Response", response)
  
  // return response;
}

export async function generateMetadata({params}) {
  const post = await getBlogData(params.id)
  return{
    title: post?.title,
    description: post?.description
  }
}


const BlogPage = async({params}) => {
  // console.log(params)
  const blog = await getBlogData(params.id)
  // console.log("Blog from single Blog Page: ", blog)
  if(!blog){
    return(
      <p className="">404 Not Found</p>
    )
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse items-center mb-4">
        <div className="md:mx-10 relative h-64 w-64 md:h-80 md:w-80">
          <Image src={blog.image} alt="Contact Image" fill className='object-contain rounded-2xl'/>
        </div>
        <div className="md:flex-1">
          <h1 className="font-bold text-[30px]">{blog.title}</h1>
          <p className="mb-2 md:mb-4">
            {blog.description}
          </p>
          <div className="flex flex-row gap-2 items-center">
            <Image src={blog.image} alt="Contact Image" width={50} height={50} 
              className='object-contain rounded-full'/>
            <div className="">
              <p className="">{blog.username}</p>
              <p className="my-1 text-sm">Posted・{moment(blog.createdAt).calendar()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="">{blog.content} </p>
      </div>
    </div>
  )
}

export default BlogPage