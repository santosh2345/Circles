import React from 'react'
import SideBar from '../../components/sideBar/sideBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex flex-row w-full  h-screen'>
         <SideBar />
         <Outlet />

    </div>
  )
}

export default DashboardLayout