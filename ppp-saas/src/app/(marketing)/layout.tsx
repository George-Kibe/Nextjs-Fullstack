import React, { ReactNode } from 'react'
import { NavBar } from './_components/Navbar'

const MarketingLayout = ({children} : { children: ReactNode }) => {
  return (
    <div className="select:bg-[#d34d9633">
      <NavBar />
      {children}
    </div>
  )
}

export default MarketingLayout
