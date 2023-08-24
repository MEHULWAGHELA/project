import React, { Fragment, useEffect, useState } from 'react'
import '../../styles/login/signup.scss'
import { Col, Container, Form, FormGroup, input, Label, Row } from 'reactstrap'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../redux/action/signUpAction';
const SignUp = () => {
  let [userData, setUserData] = useState()
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    setUserData(data)
  }
  useEffect(() => {
    dispatch(() => getUserData())
    console.log(state.userReducer.userData)
  }, [state])

  return (
    <Fragment>
      <Container className='bg-secondary py-5'>
        <h1 className='text-center'>User Sign Up</h1>
        <Row>
          <Col xs={10} className=' offset-1'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="userName"
                      name="userName"
                      placeholder="userName"
                      className='form-control'
                      type="text"
                      {...register("userName", { required: true })}
                    />
                    <Label for="userName">
                      User Name
                    </Label>
                    {errors.userName && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
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
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="mobile"
                      name="mobile"
                      placeholder="mobile"
                      type="tel"
                      className='form-control'
                      {...register("mobile", { required: true })}
                    />
                    <Label for="mobile">
                      Mobile
                    </Label>
                    {errors.mobile && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="postalCode"
                      name="postalCode"
                      placeholder="postalCode"
                      type="number"
                      className='form-control'
                      {...register("postalCode", { required: true })}
                    />
                    <Label for="postalCode">
                      Postal Code
                    </Label>
                    {errors.postalCode && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="birthDate"
                      name="birthDate"
                      placeholder="birthDate"
                      type="date"
                      className='form-control'
                      {...register("birthDate", { required: true })}
                    />
                    <Label for="birthDate">
                      birthDate
                    </Label>
                    {errors.birthDate && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="officeContact"
                      name="officeContact"
                      placeholder="officeContact"
                      type="tel"
                      className='form-control'
                      {...register("officeContact", { required: true })}
                    />
                    <Label for="officeContact">
                      Office Contact
                    </Label>
                    {errors.officeContact && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="qualification"
                      name="qualification"
                      placeholder="qualification"
                      type="text"
                      className='form-control'
                      {...register("qualification", { required: true })}
                    />
                    <Label for="qualification">
                      Qualification
                    </Label>
                    {errors.qualification && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="address"
                      name="address"
                      placeholder="address"
                      type="text"
                      className='form-control'
                      {...register("address", { required: true })}
                    />
                    <Label for="address">
                      Address
                    </Label>
                    {errors.address && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="password"
                      name="password"
                      placeholder="password"
                      type="password"
                      className='form-control'
                      {...register("password", { required: true })}
                    />
                    <Label for="password">
                      Password
                    </Label>
                    {errors.password && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="confirmPassword"
                      type="password"
                      className='form-control'
                      {...register("confirmPassword", { required: true })}
                    />
                    <Label for="confirmPassword">
                      Confirm Password
                    </Label>
                    {errors.confirmPassword && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup>
                    <Label>
                      Gender
                    </Label>
                    <div className='d-flex justify-content-between'>
                      <div>
                        <input
                          id="gender"
                          name="gender"
                          type="radio"
                          value='Male'
                        />
                        <Label for="gender">
                          Male
                        </Label>
                      </div>
                      <div>
                        <input
                          id="gender"
                          name="gender"
                          type="radio"
                          value='Female'
                        />
                        <Label for="gender">
                          Female
                        </Label>
                      </div>
                      <div>
                        <input
                          id="gender"
                          name="gender"
                          type="radio"
                          value='Trans'
                        />
                        <Label for="gender">
                          Trans
                        </Label>
                      </div>
                    </div>
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup floating>
                    <input
                      id="userImage"
                      name="userImage"
                      placeholder="userImage"
                      type="file"
                      className='form-control'
                      {...register("userImage", { required: true })}
                    />
                    <Label for="userImage">
                      User Image
                    </Label>
                    {errors.userImage && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup>
                    <Label for="city">
                      City
                    </Label>
                    <select
                      id="city"
                      name="city"
                      placeholder="city"
                      className='form-control'
                      {...register("city", { required: true })}
                    >
                      <option value="Surat">Surat</option>
                      <option value="Bharuch">Bharuch</option>
                      <option value="Vadodara">Vadodara</option>
                    </select>
                    {errors.city && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup>
                    <Label for="state">
                      State
                    </Label>
                    <select
                      id="state"
                      name="state"
                      placeholder="state"
                      className='form-control'
                      {...register("state", { required: true })}
                    >
                      <option value="Gujarat">Gujarat</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Kerla">Kerla</option>
                    </select>
                    {errors.state && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup>
                    <Label for="country">
                      Country
                    </Label>
                    <select
                      id="country"
                      name="country"
                      placeholder="country"
                      className='form-control'
                      {...register("country", { required: true })}
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Russia">Russia</option>
                    </select>
                    {errors.country && <span className='text-warning'>This field is required</span>}
                  </FormGroup>
                </Col>
              </Row>
              <div className='d-flex justify-content-between'>
                <input type="submit" className='form-control' />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default SignUp