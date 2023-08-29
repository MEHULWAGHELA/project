import React, { useEffect } from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/profile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profileAction'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

const Profile = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    useEffect(() => {
        console.log(state.profile.profileData)

    }, [state])
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    return (
        <>
            <div>
                <Container>
                    <Row>
                        {state.profile.profileData.map((x, i) => {
                            return (
                                <Col xs={12} sm={10} md={4} className='offset-0 offset-sm-1 offset-md-4'>
                                    <Card>
                                        <CardImg
                                            alt="Card image cap"
                                            src={x.userImage}
                                            top
                                            width="50%"
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {x.userName}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                {x.birthDate}
                                                {x.address}
                                                {x.state}
                                                {x.postalCode}
                                                {x.officeContact}
                                                {x.state}
                                                {x.email}
                                                {x.qualification}
                                                {x.country}
                                                {x.mobile}
                                                {x.gender}
                                            </CardSubtitle>
                                            <CardText>
                                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            </CardText>
                                            <Button>
                                                Button
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}






                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Hoc(Profile)