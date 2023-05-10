import React from 'react'
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className=" h-auto flex h-64 content-wrapper justify-between  bg-gray-100">
      <Navbar />
      <div className="right-content w-full p-10 h-screen relative">
        {children}
      </div>
    </div>
  )
}

export default Layout;
