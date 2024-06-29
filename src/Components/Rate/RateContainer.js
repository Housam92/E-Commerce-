import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../images/rate.png'
import RateItem from './RateItem'
import RatePost from './RatePost'
import PaginationComponent from '../Utility/Pagination'
 const RateContainer = () => {
    return (
        <Container className='rate-container'>
      <Row>
      <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Rates</div>
                    <img className=" pl-2 mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 rate)</div>              
      </Col>
      </Row>
      <RatePost/>
      <RateItem/>
      <RateItem/>
      <RateItem/>
      <PaginationComponent/>
        </Container>
    )
}
export default RateContainer