import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 const CategoryHeader = () => {
    return (
        <div style={{minHeight:"6PX"}}>
            <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All</div>
            <div className="cat-text-header">Electrical</div>
            <div className="cat-text-header">Cloths</div>
            <div className="cat-text-header">Electronics</div>
            <div className="cat-text-header">Discount</div>
            <div className="cat-text-header">Discount</div>
            <div className="cat-text-header">Home items</div>
            <div className="cat-text-header">Discount</div>
            <div className="cat-text-header">Discount</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
        </div>
    )
}
export default CategoryHeader