import React from 'react'
import { Col, Row } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import deleteicon from '../../images/delete.png'
import { Link } from 'react-router-dom'
 const AdminAllOrdersItem = () => {
    return (
        
        <Col sm="12">
            <Link
            to="/admin/orders/123"
            className="cart-item-body my-2 d-flex px-1"
            style={{textDecoration:"none"}}>             
        <img width="160px" height="197px" src={mobile} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">Order No #123</div>
              <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">Delete</div>
              </div>
            </Col>
          </Row>

        
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                You will be amazed with the new features of Iphone 14 pro max
              </div>
              <div className="d-inline pt-2 cat-rate me-2">4.5</div>
            </Col>
          </Row>
          
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">Brand :</div>
              <div className=" d-inline mx-1">Apple </div>
            </Col>
          </Row>

          <Row>
            <Col sm="12" className="mt-1 d-flex">
              <div
                className="color ms-2 border"
                style={{ backgroundColor: "black" }}></div>
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline">Quantity</div>
                <input
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
              </div>
              <div className="d-inline pt-2 barnd-text">1400 USD</div>
            </Col>
          </Row>
        </div>
        </Link>
      </Col>

    )
}
export default AdminAllOrdersItem