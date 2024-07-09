import React from 'react'
import { FaFacebook, FaWhatsapp, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-navColor text-navText py-6'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='mb-4 md:mb-0'>
          &copy; 2024 All rights reserved
        </p>
        <div className='flex gap-4'>
          <a href='https://www.whatsapp.com' aria-label="WhatsApp"><FaWhatsapp size={24} /></a>
          <a href='https://www.facebook.com' aria-label="Facebook"><FaFacebook size={24} /></a>
          <a href='https://www.twitter.com' aria-label="Twitter"><FaTwitterSquare size={24} /></a>
          <a href='https://www.instagram.com' aria-label="Instagram"><FaInstagramSquare size={24} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;