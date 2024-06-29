import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 const ChoosePayMethod = () => {
    return (
        <Container>
        <div style={{minHeight:"590px"}}>
        <div className="admin-content-text pt-5"> Chooose Payment Method </div>
        <div className="user-address-card my-3 px-3">
            <Row className="d-flex justify-content-between ">
                <Col xs="12" className="my-4">
                    <input
                        name="group"
                        id="group1"
                        type="radio"
                        value="Visa Payment"
                        className="mt-2"
                    />
                    <label className="mx-2" for="group1">
                         Visa Payment   
                    </label>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <input
                        name="group"
                        id="group1"
                        type="radio"
                        value="Payment On Recive  "
                        className="mt-2"
                    />
                    <label className="mx-2" for="group1">
                         Payment After Delievery 
                    </label>
                </Col>
            </Row>
        </div>

        <Row>
            <Col xs="12" className="d-flex justify-content-end">
                <div className="product-price d-inline   border">2800 USD</div>
                <div className="product-cart-add px-3 pt-2 d-inline me-2"> Checkout </div>
            </Col>
        </Row>
    </div>
    </Container>
    )
}
export default ChoosePayMethod