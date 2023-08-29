import React, { Fragment, useEffect } from 'react'
import '../../styles/common/header.scss'
import { Container, NavLink } from 'reactstrap'
import { RxDashboard } from 'react-icons/rx'
import { MdOutlineProductionQuantityLimits, MdOutlineIncompleteCircle } from 'react-icons/md'
import { BsCart4 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profileAction'
const HeaderC = () => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  useEffect(() => {
    console.log(state)
    dispatch(getProfile())
  }, [])
  return (
    <Fragment>
      <Container fluid className='header'>
        <div>
          <NavLink to="/profile" className='text-white text-decoration-none fs-4'>
            <div><img src='' alt="" /></div>
            <span className='align-middle'>Profile</span></NavLink>
        </div>
      </Container>
    </Fragment >
  )
}

export default HeaderC