import React from 'react'
import { Col, Row } from 'react-bootstrap'

 const UserEditAddress = () => {
    return (
        <div>
             <Row className="justify-content-start ">
                <div className="admin-content-text pb-2"> Edit Address </div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        value="Home"
                        placeholder="Type of the Address ( Home -  Work )"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        value=" English Village villa 70  "
                        placeholder="Address Details "
                    />
                    <input
                        type="text"
                        value="01213621735"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" Phone Number"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">  Save Editeds</button>
                </Col>
            </Row>
        </div>
    )
}
export default UserEditAddress