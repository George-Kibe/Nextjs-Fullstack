'use client'

import Image from 'next/image'
import React from 'react'
import Avatar from "react-avatar"

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className='absolute top-0 left-0 w-full h-96 
                        bg-gradient-to-br from-pink-400
                        to-[#0055D1] rounded-md filter blur-3xl
                        opacity-50 -z-50 '
        />
        <Image 
            src="https://links.papareact.com/c2cdd5"
            alt='Trello Logo'
            width={300}
            height={100}
            className='w-44 md:w-56 pb-10 md:pb-0 object-contain'      
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
            <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0055D1" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
            <input 
                type="text" 
                placeholder='Search'
                className='flex-1 outline-none p-2'
            />
            <button type="submit" hidden>Search</button>
            </form>
            {/* Avatar */}
             <Avatar name="George Kibe" round size="50" color="#0055d1" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className='flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl
            w-fit bg-white italic max-w-3xl text-[#0055D1]'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0055D1" className="w-10 h-10">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
          </svg>
          GPT-4 is summarising your tasks for the day
        </p>
      </div>
    </header>
  )
}

export default Header