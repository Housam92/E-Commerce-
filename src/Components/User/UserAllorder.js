import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

 const UserAllorder = () => {
    return (
        <div>
            <div className='admin-content-text'>Welcome Housam Abdallah </div>
            <Row className='justify-content-between'>
                <UserAllOrderItem/>
                <UserAllOrderItem/>
               
            </Row>

        </div>
    )
}
export default UserAllorder