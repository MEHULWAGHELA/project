import React from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/product.scss'
import { getProduct } from '../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  console.log(state)
  return (
    <div>
      <div>Profile</div>
      <button onClick={() => dispatch(getProduct())}>Get Data</button>
    </div>
  )
}

export default Hoc(Product)