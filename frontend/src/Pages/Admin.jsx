import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
const Admin = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <Outlet />
    </div>
  )
}
export default Admin