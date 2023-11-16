import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        { name, email, password, phone, address }
      );
      
      if(res && res.data.success){
        toast.success(res.data && res.data.message)
        setTimeout(()=>{
          navigate("/login")
        },1000)
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommerce App">
      <div className="w-full h-[calc(100vh-60px-90px)] flex justify-center items-center">
        <div className="border w-[400px] h-auto shadow-md p-6 rounded">
          <h2 className="text-[23px] font-medium text-center mb-6 text-gray-800">
            Register Here
          </h2>
          <div className="w-full">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter Your Name"
              className="w-full border-2 py-2 px-3 rounded focus:ring outline-none text-[14px]"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 py-2 px-3 rounded my-3 focus:ring outline-none text-[14px]"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
              className="w-full border-2 py-2 px-3 rounded focus:ring outline-none text-[14px]"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Enter Your Phone Number "
              className="w-full border-2 py-2 px-3 rounded my-3 focus:ring outline-none text-[14px]"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter Your Address"
              className="w-full border-2 py-2 px-3 rounded focus:ring outline-none text-[14px]"
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="border mt-6 px-6 py-2 bg-sky-500 hover:bg-sky-700 text-white shadow-md rounded focus:ring outline-none"
            >
              Register
            </button>
          </div>
          <div className="w-full mt-4">
            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-sky-500">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
     
    </Layout>
  );
};

export default Register;
