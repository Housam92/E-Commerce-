import React from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import rate from '../../images/rate.png';
import favoff from '../../images/fav-off.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/productsAction';
 const AdminAllProductsCard = ({item}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const dispatch = useDispatch()
  const handelDelete =  async()=>{
 
 await   dispatch(deleteProduct(item._id))
setShow(false)
window.location.reload()
  }
    return (
        
            
  <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handelDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
  
      <Card
        className="my-2"
        style={{
          width: '100%',
          height: '345px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 2px 0 rgba(151, 151, 151, 0.5)',
        }}
      >
        <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShow}  className="d-inline item-delete-edit">delete</div>
                        <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">edit</div>
                        </Link>
                    </Col>
                </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
          <Card.Img style={{ height: '228px', width: '100%' }} src={item.imageCover} />
        </Link>

        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: '24px',
              width: '26px',
            }}
          />
        </div>

        <Card.Body>
          <Card.Title>
            <div className="card-title">{item.title}</div>
          </Card.Title>

          <Card.Text>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{item.ratingsQuantity}</div>
              </div>

              <div className="d-flex">
                <div className="card-price">{item.price}</div>
                <div className="card-currency mx-1">USD</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    )
}
export default AdminAllProductsCard