import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/product.scss'
import { getProduct, setProduct } from '../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'
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
  Col
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
    console.log(state.product)
  }, [state])

  useEffect(() => {
    dispatch(getProduct())
    console.log(state)
  }, [])

  return (
    <div>
      {/* Modal  */}

      <div>
        <Button onClick={toggle}>
          Add Product
        </Button>
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
      {console.log(state.product.productData)}
      {
        state.product.productData.map((x, i) => {
          <div key={i}>
            <Card
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {x.productName}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          </div>

        })
      }

      {/* CARD */}

    </div>
  )
}

export default Hoc(Product)

Product.propTypes = {
  className: PropTypes.string,
};


