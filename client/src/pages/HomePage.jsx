import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth.jsx'

const HomePage = () => {
  const [auth,setAuth]  = useAuth()
  return (
    <Layout title="Best Offer for Sale">
      <div className='w-full h-[calc(100vh-60px-90px)]'>
      <h1>
           Home Page
        </h1>
      </div>
    </Layout>
  )
}

export default HomePage