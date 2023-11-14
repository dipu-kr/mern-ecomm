import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children,title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author}></meta>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title:"Ecommerce App-Shop Now",
  description:'This is a Ecommerec App for new Fashion',
  keywords:'T-shirt, Shirt, Jeans, Mobile, LEd Tv, Laptop',
  author:'Dipu Kumar'
}

export default Layout;
