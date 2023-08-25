import '../../styles/login/signin.scss'
import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Form, FormGroup, input, Label, Row } from 'reactstrap'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa'
import { signin } from '../../redux/action/signInAction';
import { useCookies } from 'react-cookie';

const SignIn = () => {
  let [cookies, setcookies, removecookies] = useCookies()
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    console.log(state.signin)
  }, [state])

  const onSubmit = (data) => {
    dispatch(signin(data))
    // let expiryDate = new Date()
    // expiryDate.setMinutes(expiryDate.getMinutes() + 60)
    // setcookies('greet', 'Mehul Waghela', { path: '/', expires: expiryDate })
  }
  return (
    <Fragment>
      <Container fluid className='py-5 userForm'>
        <Container>
          <h1 className='text-center text-white mb-4'><FaUser /><span className='vertical-align-center'>Welcome to my website</span></h1>
          <Row>
            <Col xs={12} md={6}>
              <div className='w-100'>
                <img src={require("../../assets/images/Dashboard.jpg")} className='w-100' alt="" />
              </div>
            </Col>
            <Col xs={12} md={6} className='p-4 border border-4 border-dark'>
              <div className=''>
                <h1 className='text-center text-white mb-4 fs-3'><FaUser /><span className='vertical-align-center'>User Sign In</span></h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row className='gx-4 gy-3'>
                    <Col xs={12}>
                      <FormGroup floating>
                        <input
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          className='form-control'
                          {...register("email", { required: true })}
                        />
                        <Label for="email">
                          Email
                        </Label>
                        {errors.email && <span className='text-warning'>This field is required</span>}
                      </FormGroup>
                    </Col>
                    <Col xs={12} >
                      <FormGroup floating>
                        <input
                          id="password"
                          name="password"
                          placeholder="password"
                          type="number"
                          className='form-control'
                          {...register("password", { required: true })}
                        />
                        <Label for="password">
                          Password
                        </Label>
                        {errors.password && <span className='text-warning'>This field is required</span>}
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className='mt-3 '>
                    <input type="submit" className='form-control bg-secondary fw-bold text-white' />
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  )
}

export default SignIn

