import Image from 'next/image'
import React from 'react'
// import logo from '../../../public/logo.png';
const Footer = () => {
  return (
    <footer className='footer border  border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent   text-white'>
        <div className='container p-12 flex justify-between '>
           
            <p className='text-slate-00' >All Rights Reserved </p>

            <span>
            <Image src="/logo.webp" width={60} height={60} alt="Logo"></Image>
            </span>
        </div>

    </footer>
  )
}

export default Footer