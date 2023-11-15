import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")

  const handleSubmit = () =>{
    console.log(name,email,password,phone,address)
    toast.success("submitted")
  }
  return (
    <Layout title="Register - Ecommerce App">
      <div className="w-full h-[calc(100vh-60px-90px)] flex justify-center items-center">
        <div className="border w-[400px] h-auto shadow-md p-6 rounded">
          <h2 className="text-[23px] font-medium text-center mb-6 text-gray-800">Register Here</h2>
          <div className="w-full">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Enter Your Name"  className="w-full border-2 py-2 px-3 rounded focus:ring outline-none"/>
          </div>
          <div className="w-full">
            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full border-2 py-2 px-3 rounded my-3 focus:ring outline-none"/>
          </div>
          <div className="w-full">
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Enter Your Password" className="w-full border-2 py-2 px-3 rounded focus:ring outline-none"/>
          </div>
          <div className="w-full">
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} required placeholder="Enter Your Phone Number " className="w-full border-2 py-2 px-3 rounded my-3 focus:ring outline-none"/>
          </div>
          <div className="w-full">
            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} required placeholder="Enter Your Address" className="w-full border-2 py-2 px-3 rounded focus:ring outline-none"/>
          </div>
          <div className="text-center">
            <button onClick={handleSubmit} className="border mt-6 px-6 py-2 bg-sky-500 hover:bg-sky-700 text-white shadow-md rounded focus:ring outline-none">Register</button>
          </div>
          <div className="w-full mt-4">
            <p className="text-center text-gray-500">
              Already have an account? <Link to="/login" className="text-sky-500">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster/>
    </Layout>
  );
};

export default Register;
