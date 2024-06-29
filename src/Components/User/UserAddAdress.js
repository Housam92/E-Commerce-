import React from 'react'
import { Col, Row } from 'react-bootstrap'

 const UserAddAdress = () => {
    return (
        <div>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-2"> Add New Adress</div>
            <Col sm="8">
                <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="  Type of Address ( Home - Work )"
                />
                <textarea
                    className="input-form-area p-2 mt-3"
                    rows="4"
                    cols="50"
                    placeholder=" Address Details..."
                />
                <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Phone Number "
                />
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 "> Add the Adress</button>
            </Col>
        </Row>
    </div>
    )
}
export default UserAddAdress