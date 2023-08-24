import { Fragment } from "react"
import SidebarC from "../common/SidebarC"
import { Col, Container, Row } from "reactstrap"
import HeaderC from "../common/HeaderC"
import '../../styles/hoc/hoc.scss'
export const Hoc = (Component) => {
    const NewComponent = () => {
        return (
            <Fragment>
                <Row className="g-0">
                    <Col xs={2} className='hoc_sidebar'>
                        <SidebarC />
                    </Col>
                    <Col xs={10} >
                        <HeaderC />
                        <Component />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    return NewComponent
}