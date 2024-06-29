import React from 'react'
import AdminAddCategory from './AdminAddCategory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import { Col, Container, Row } from 'react-bootstrap'

 const AdminAddCategoryPage = () => {
    return (
        <div>
            <Container >
            <Row className='py-3'>
   <Col sm="3" xs="2" md="2">
    <AdminSideBar/>
   </Col>

   <Col sm="9" xs="10" md="10" >
   <AdminAddCategory/> 
     </Col>
            </Row>
        </Container>
            
        </div>
    )
}
export default AdminAddCategoryPage