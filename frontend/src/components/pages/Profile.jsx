import React from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/profile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profileAction'

const Profile = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    console.log(state)
    return (
        <div>
            <div>Profile</div>
            <button onClick={() => dispatch(getProfile())}>Get Data</button>
        </div>
    )
}

export default Hoc(Profile)