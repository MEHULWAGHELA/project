import React, { Fragment } from 'react'
import '../../styles/common/sidebar.scss'
import { NavLink, Navigate } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { MdOutlineProductionQuantityLimits, MdOutlineIncompleteCircle } from 'react-icons/md'
import { BsCart4 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
const SidebarC = () => {
  return (
    <Fragment>
      <div>
        <NavLink to="/" className='text-white text-decoration-none fs-4'><RxDashboard /><span className='align-middle'>Dashboard</span></NavLink>
      </div>
      <div>
        <NavLink to="/product" className='text-white text-decoration-none fs-4'><MdOutlineProductionQuantityLimits /><span className='align-middle'>Product</span></NavLink>
      </div>
      <div>
        <NavLink to="/cart" className='text-white text-decoration-none fs-4'><BsCart4 /><span className='align-middle'>Cart</span></NavLink>
      </div>
      <div>
        <NavLink to="/completedOrder" className='text-white text-decoration-none fs-4'><MdOutlineIncompleteCircle /><span className='align-middle'>Completed Order</span></NavLink>
      </div>
      <div>
        <NavLink to="/profile" className='text-white text-decoration-none fs-4'><CgProfile /><span className='align-middle'>Profile</span></NavLink>
      </div>
    </Fragment>
  )
}

export default SidebarC