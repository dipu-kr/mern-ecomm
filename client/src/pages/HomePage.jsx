import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth.jsx'

const HomePage = () => {
  const [auth,setAuth]  = useAuth()
  return (
    <Layout title="Best Offer for Sale">
        <h1>
           Home Page
        </h1>
        <p>{JSON.stringify(auth,null,4)}</p>
    </Layout>
  )
}

export default HomePage