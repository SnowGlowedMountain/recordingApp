import React from 'react'

const Layout = (props) => {
  const {
    children,
    toolbar,
    sidebar,
    chatbar,
    settingbar,
  } = props
  return (
    <div className=" h-auto flex flex-row justify-between bg-sky-100">
      <div className='bg-white h-[64px] w-full fixed top-0  z-10 drop-shadow-lg'>
        {toolbar}
      </div>
      <div className='min-w-[250px] bg-white h-auto pt-[64px]'>
        {sidebar}
      </div>
      <div className="bg-gray-100 w-full min-w-[200px] p-10 h-screen relative pt-[64px]">
        {children}
      </div>
      <div className="min-w-[300px] bg-white h-auto pt-[64px]">
        {chatbar}
      </div>
      <div className="min-w-[100px] bg-gray-100 h-auto pt-[64px]">
        {settingbar}
      </div>
    </div>
  )
}

export default Layout;
