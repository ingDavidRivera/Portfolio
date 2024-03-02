// Link, Redes sociales, imágenes
import Image from 'next/image'
import React from 'react'
import { SocialMedia } from '../../../constants'

const Navbar = () => {
  return (
    <div className='fixed-top-0 w-full h-full flex'>
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative'>
              {/* <Image
              src= "/favicon"
              alt="logo"
              width={20}
              height={20}
              className='w-full h-full object-contain rounded-full'
              /> */}
            </div>
            <h1 className='text-white font-semibold'>
              My name 
              <span className='text-transparent bg-gradient-to-r from-purple-500 to-red-100'>
              Developer
              </span>

            </h1>
        </div>

        <div className='flex flex-row mb-2'>
          {SocialMedia.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={50}
              height={50}
            />
          ))
          }  
        </div>
    </div>
  )
}

export default Navbar
