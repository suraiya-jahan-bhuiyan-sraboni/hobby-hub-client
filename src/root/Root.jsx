import React from 'react'
import Navbar from '../components/root_components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/root_components/Footer'

const Root = () => {
  return (
      <div>
          <Navbar />
          <Outlet />
          <Footer />
    </div>
  )
}

export default Root