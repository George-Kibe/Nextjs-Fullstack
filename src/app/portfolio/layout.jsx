import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <h1 className="font-bold text-[25px] md:text-[50px]">Our Works</h1>
      {children}
    </div>
  )
}

export default layout