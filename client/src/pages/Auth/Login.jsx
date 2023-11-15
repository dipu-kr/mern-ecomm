import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Layout title="Login - Ecommerec App">
      <div className="w-full h-[calc(100vh-60px-90px)] flex justify-center items-center">
        <div className="border w-[400px] h-auto shadow-md p-6 rounded">
          <h2 className="text-[23px] font-medium text-center mb-6 text-gray-800">Login Here</h2>
          <div className="w-full">
            <input type="email" placeholder="Enter Your Email" className="w-full border-2 py-2 px-3 rounded my-3 focus:ring outline-none"/>
          </div>
          <div className="w-full">
            <input type="password" placeholder="Enter Your Password" className="w-full border-2 py-2 px-3 rounded focus:ring outline-none"/>
          </div>
          <div className="text-center">
            <button className="border mt-6 px-6 py-2 bg-sky-500 hover:bg-sky-700 text-white shadow-md rounded focus:ring outline-none">Login</button>
          </div>
          <div className="w-full mt-4">
            <p className="text-center text-gray-500">
              Don't have an account? <Link to="/register" className="text-sky-500">Register Here</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
    
  )
}

export default Login