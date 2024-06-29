import React from 'react'
import CartItem from '../../Page/Cart/CartItem'
import { Col, Row } from 'react-bootstrap'

 const AdminOrderDetails = () => {
    return (
        <div>
                    <div className='admin-content-text'>Details order No. #123</div>
<CartItem/>
<CartItem/>
<CartItem/>
<CartItem/>
<Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2"> Client Details</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "roboto",
                            fontSize: "16px",
                            fontWeight:"bold"
                        }}>
                        Name:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                            

                        }}
                        className="mx-2">
                        Housam Abdallah 
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            fontWeight:"bold"

                        }}>
                        Phone Number :
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                           

                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                            fontWeight:"bold"

                        }}>
                        Email:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                          

                        }}
                        className="mx-2">
                        housam@gmail.com
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    Total 9000 usd
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val"> Order Status</option>
                        <option value="val2">On Process </option>
                        <option value="val2">Done </option>
                        <option value="val2">Cancel</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">Save </button>
                </div>
            </Row>
        </div>
    )
}
export default AdminOrderDetails