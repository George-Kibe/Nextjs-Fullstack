"use client";
import { signIn } from 'next-auth/react'
import Link from 'next/link';
import React, { useState } from 'react'

const Login = () => {
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", {email, password})
  }
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="email" placeholder='email' className="p-1 bg-transparent border-gray-500 border-solid border-2" required />
      <input type="password" placeholder='Password' className="p-1 bg-transparent border-gray-500 border-solid border-2" required />
      <button type="submit" className='p-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-md'>
        Login
      </button>
    </form>
    { error && <p className='text-red-500'>Error Loggin User! Try Again</p>}
    
    <div>
      <button onClick={() => signIn("google")} className="">Login With Google</button>
    </div>
  </div>
  )
}

export default Login
