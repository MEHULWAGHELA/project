import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/product.scss'
import { deleteProduct, getProduct, setProduct } from '../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
  Row,
  Col,
  Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProductForm from '../other/ProductForm';
import { useCookies } from 'react-cookie';
import { authorise } from '../authorize/authorise';
import { GETPRODUCT } from '../../redux/type/type';

const Product = (props) => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  useEffect(() => {
    dispatch(getProduct())
  }, [])

  const editProductData=(id)=>{
    
  }
  const deleteProductData=(id)=>{
    dispatch(deleteProduct(id))
  }
  return (
    <div>
      {/* Modal  */}

      <div>
        <div className='my-3 d-flex justify-content-end'>
          <Button onClick={toggle}>
            Add Product
          </Button>
        </div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          backdrop={true}
          keyboard={true}
        >
          <ModalHeader toggle={toggle}>Product Info</ModalHeader>
          <ModalBody>
            <ProductForm toggle={toggle} />
          </ModalBody>
        </Modal>
      </div>

      {/* Modal  */}

      {/* CARD */}

      <Container fluid>
        <Row className='g-4 product_card'>
          {
            state.product.productData.map((x, i) => {
              return (
                <Col xs={12} md={6} lg={4} key={i}>
                  <Card className='position-relative' style={{ backgroundColor: x.color }}>
                    <img
                      alt="Sample"
                      src={x.productImage}
                    />
                    <div className='product_card_three_dot'>
                      <PiDotsThreeOutlineVerticalBold />
                      <dir className='product_card_three_dot_hover'>
                        <button onClick={()=>editProductData(x._id)}>Edit</button>
                        <button onClick={()=>deleteProductData(x._id)}>Delete</button>
                      </dir>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">
                        {x.productName}
                      </CardTitle>
                      <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                      >
                        {x.category}
                      </CardSubtitle>
                      <CardText>
                        {x.price}
                        <br />
                        {x.discription}
                        <br />
                        {x.shopname}
                        {x.mobile}
                        {x.discount}
                      </CardText>
                      <div className='d-flex justify-content-between'>
                        <Button >
                          Buy Now
                        </Button>
                        <Button>
                          Add To Cart
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>

      {/* CARD */}

    </div >
  )
}

export default Hoc(Product)

Product.propTypes = {
  className: PropTypes.string,
};


