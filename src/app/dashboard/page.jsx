'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from "swr"

const DashBoard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const session = useSession()
  const router = useRouter()
  console.log("Session:",session)
  const {data, error, isLoading} = useSWR(`/api/posts/username=${session?.data?.user.name}`, fetcher);
  console.log(data)
  if (session.status === "loading") {
    return <p>loading...</p>
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return <div>DashBoard</div>
  }
}

export default DashBoard