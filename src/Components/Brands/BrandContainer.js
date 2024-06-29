import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'

 const BrandContainer = ({data,loading}) => {
    return (
        <Container> 
        <div className='admin-content-text-mt-2' >All Brands</div>
        <Row className=' my-2 d-flex jusify-content-btween'>
       
       {
        loading === false ? (
          data ? (
            data.map((item, index) => (
              <BrandCard key={index} img={item.image} />
            ))
          ) : (
            <h4>No Brands available</h4>
          )
        ) :<Spinner animation="border" variant="primary"  /> 
    }
        </Row>
        </Container>
    )
}
export default BrandContainer