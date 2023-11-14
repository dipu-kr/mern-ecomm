import React from 'react'
import Layout from '../components/Layout/Layout'
import {HiOutlineMail} from "react-icons/hi"
import {BiPhoneCall} from "react-icons/bi"
import {BsHeadset} from "react-icons/bs"
import contact from "../assets/contact.webp"

const Contact = () => {
  return (
    <Layout title="Contact Us Now">
      <div className='h-[calc(100vh-60px-90px)] flex justify-center items-center gap-8 flex-col sm:flex-row'>
      <div className='w-[300px] sm:w-[400px] md:w-[500px]'>
          <img src={contact} className='w-full object-cover' alt="call-img"/>
      </div>
      <div>
        <div>
          <h1 className='w-max bg-gray-800 py-3 px-10 text-white uppercase text-[23px] mb-4'>contact us</h1>
        </div>
        <p>Any query and info about product feel free to call anytime, we 24x7 available.</p>
        <div className='flex items-center my-4 gap-2'>
          <span><HiOutlineMail size={20}/></span><span>  : www.help@ecommerceapp.com</span>
        </div>
        <div className='flex items-center mb-4 gap-2'>
          <span><BiPhoneCall size={20}/></span><span>  : 012-3456789</span>
        </div>
        <div className='flex items-center gap-2'>
          <span><BsHeadset size={20}/></span><span>  : 1800-0000-0000 (toll free)</span>
        </div>
        
      </div>
      </div>
        
    </Layout>
  )
}

export default Contact