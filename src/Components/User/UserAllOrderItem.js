import React from 'react'
import UserAllOrderCard from './UserAllOrderCard'
import { Col, Row } from 'react-bootstrap'
 const UserAllOrderItem = () => {
    return (
        <div className='user-order mt-2'>
            <Row>
                <div className="py-2 order-title"> Order Number #234556</div>
            </Row>
      
        <UserAllOrderCard/>
        <UserAllOrderCard/>
        <UserAllOrderCard/>

        <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">Status</div>
                        <div className="d-inline mx-2 stat"> In Progress... </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">4000 $</div>
                    </div>
                </Col>
            </Row>
    </div>
    )
}
export default UserAllOrderItem