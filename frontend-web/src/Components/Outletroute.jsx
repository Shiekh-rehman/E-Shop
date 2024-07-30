import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function Outletroute() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Outletroute
