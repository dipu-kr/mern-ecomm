import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Layout title="Go Back-Page not found">
      <div className="h-[calc(100vh-60px-90px)] flex justify-center items-center flex-col">
        <h1 className="text-[50px] font-extrabold text-gray-700">404</h1>
        <h3 className="text-[25px] font-semibold text-gray-700">Oops ! Page Not Found</h3>
        <Link to="/">
          <button className="border-2 border-gray-700 px-4 py-1 mt-6 text-gray-700 hover:bg-slate-600 hover:text-white">Go Back</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
