import React, { Fragment, useEffect, useState } from 'react'
import '../../styles/login/signup.scss'
import { Col, Container, Form, FormGroup, input, Label, Row } from 'reactstrap'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, setUserData } from '../../redux/action/signUpAction';
import { FaUser } from 'react-icons/fa'
const SignUp = () => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    let formData = new FormData()
    formData.append('address', data.userName)
    formData.append('email', data.email)
    formData.append('mobile', data.mobile)
    formData.append('postalCode', data.postalCode)
    formData.append('birthDate', data.birthDate)
    formData.append('officeContact', data.officeContact)
    formData.append('qualification', data.qualification)
    formData.append('address', data.address)
    formData.append('password', data.password)
    formData.append('confirmPassword', data.confirmPassword)
    formData.append('userName', data.gender)
    formData.append('userImage', data.userImage)
    formData.append('city', data.city)
    formData.append('state', data.state)
    formData.append('address', data.country)
    for (let x of formData.entries()) {
      console.log(x)
    }
    dispatch(setUserData(data))
  }
  useEffect(() => {
    dispatch(getUserData())
  }, [state])

  return (
    <Fragment>
      <Container fluid className='py-5 userForm'>
        <Container>
          <h1 className='text-center text-white mb-4'><FaUser /><span className='vertical-align-center'>User Sign Up</span></h1>
          <Row>
            <Col xs={12} md={10} className='offset-md-1'>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className='gx-4 gy-3'>
                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
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

                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <FormGroup floating>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="confirmPassword"
                        type="number"
                        className='form-control'
                        {...register("confirmPassword", { required: true })}
                      />
                      <Label for="confirmPassword">
                        Confirm Password
                      </Label>
                      {errors.confirmPassword && <span className='text-warning'>This field is required</span>}
                    </FormGroup>
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6}>
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
                </Row>
                <Row className='mb-3'>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <FormGroup>
                      <Label for="city" className='text-white fw-medium'>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <FormGroup>
                      <Label for="state" className='text-white fw-medium'>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <FormGroup>
                      <Label for="country" className='text-white fw-medium'>
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
                  <Col xs={6} sm={6} md={4} lg={3}>
                    <FormGroup>
                      <Label className='text-white fw-medium'>
                        Gender
                      </Label>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <input
                            id="male"
                            name="gender"
                            type="radio"
                            value='Male'
                          />
                          <Label for="male" className='text-white ms-1'>
                            Male
                          </Label>
                        </div>
                        <div>
                          <input
                            id="female"
                            name="gender"
                            type="radio"
                            value='Female'
                          />
                          <Label for="female" className='text-white ms-1'>
                            Female
                          </Label>
                        </div>
                        <div>
                          <input
                            id="trans"
                            name="gender"
                            type="radio"
                            value='Trans'
                          />
                          <Label for="trans" className='text-white ms-1'>
                            Trans
                          </Label>
                        </div>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <div className=''>
                  <input type="submit" className='form-control' />
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  )
}

export default SignUp