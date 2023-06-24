'use client'
import moment from 'moment'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from "swr"

const DashBoard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const session = useSession()
  const router = useRouter()
  // console.log("Session:",session)
  const {data:blogs, mutate, error, isLoading} = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
  const handleDelete = async(id) =>{
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE"
      })
      mutate()
    } catch (error) {
      // toast for error
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;
    const username = session?.data.user.name

    const postBody = JSON.stringify({title, description, image, content, username})

    try {
      await fetch("api/posts", {
        method: "POST",
        body:postBody
      })
      mutate() //Add success toast message
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }
  if (session.status === "loading") {
    return <p>loading...</p>
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full md:w-1/2 xl:w-1/3">
          {
            blogs?.map((blog, index) => (
              <div className="flex flex-col sm:flex-row gap-2 items-center justify-around" key={blog._id}>
                <div className="w-[50%] h-40 sm:h-50 relative ">
                  <Image src={blog.image} alt={blog.image+index} fill className='rounded-2xl object-contain' />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="">
                    <h2 className="flex text-sm md:text-md flex-wrap">{blog.title}</h2>
                    <p className="my-1 text-xs text-[#53c28b]">Posted・{moment(blog.createdAt).calendar()}</p>
                    <p className="">{blog.username}</p>
                  </div>
                  <span className="px-4 py-2 text-white mr-2 rounded-full bg-red-500"onClick={() => handleDelete(blog._id)}>X</span>
                </div>                
                </div>
            ))
          }
        </div>
        <form className="flex flex-col flex-1 gap-2 bg-transparent" onSubmit={handleSubmit}>
          <h1 className="font-bold text-2xl md:text-5xl m-2 md:m-4">Add a New Post</h1>
          <input type="text" className="p-1 self-start border-2 rounded-md bg-transparent" placeholder='Title' />
          <input type="text" className="p-1 self-start border-2 rounded-md bg-transparent" placeholder='Description' />
          <input type="text" className="p-1 self-start border-2 rounded-md bg-transparent" placeholder='Image' />
          <textarea name="" className="p-1 border-2 rounded-md bg-transparent" id="" cols="30" rows="10" placeholder='BlogContent'></textarea>
          <button className="self-start border-2 rounded-md p-2 bg-[#53c28b] text-white" type='submit'>Save Post</button>
        </form>
      </div>
    )
  }
}

export default DashBoard