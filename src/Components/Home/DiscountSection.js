import React from 'react'
import laptops from "../../images/labtop.png"
import { Col, Container, Row } from 'react-bootstrap'

 const DiscountSection = () => {
    return (
        <Container>
        <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
            <Col sm="6">
                <div className="discount-title">
                    Up tp 40 % Discount on Selected Laptops
                </div>
            </Col>
            <Col sm="6">
                <img className="dicount-img" src={laptops} alt="" />
            </Col>
        </Row>
    </Container>
    )
}
export default DiscountSection