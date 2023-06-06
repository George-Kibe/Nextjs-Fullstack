"use client"
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {
  const [error, setError] = useState(true);
  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try {
      const response = await fetch("/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, password
        })
      });
      response.status === 201 && router.push("/dashboard/login?success=Account has been successfully created")
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className="p-1 bg-transparent border-gray-500 border-solid border-2" required />
        <input type="email" placeholder='email' className="p-1 bg-transparent border-gray-500 border-solid border-2" required />
        <input type="password" placeholder='Password' className="p-1 bg-transparent border-gray-500 border-solid border-2" required />
        <button type="submit" className='p-2 border-none bg-[#53c28b] text-white cursor-pointer rounded-md'>
          Register
        </button>
      </form>
      { error && <p className='text-red-500'>Error creating User! Try Again</p>}
      <Link href={"/dashboard/login"}>Login with an Existing Account</Link>
    </div>
  )
}

export default Register