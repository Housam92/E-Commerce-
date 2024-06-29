import React from 'react'
import UserAddressCard from './UserAddressCard'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

 const UserAllAdress = () => {
    return (
        <div>
        <div className='admin-content-text'>All Addresses</div>
      <UserAddressCard/>
      <UserAddressCard/>
      <UserAddressCard/>
      <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">  Add New Address</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}
export default UserAllAdress