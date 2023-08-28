import React, { Fragment } from 'react'
import '../../styles/common/header.scss'
import { Container, NavLink } from 'reactstrap'
import { RxDashboard } from 'react-icons/rx'
import { MdOutlineProductionQuantityLimits, MdOutlineIncompleteCircle } from 'react-icons/md'
import { BsCart4 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
const HeaderC = () => {
  return (
    <Fragment>
      <Container fluid className='header'>
      <div>
        <NavLink to="/profile" className='text-white text-decoration-none fs-4'><CgProfile /><span className='align-middle'>Profile</span></NavLink>
      </div>
    </Container>
    </Fragment >
  )
}

export default HeaderC