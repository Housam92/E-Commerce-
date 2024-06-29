
import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
 const CategoryContainer = ({data,loading}) => {

 
    return (
        <Container> 
        <Row className=' my-2 d-flex jusify-content-between'>
        <div className='admin-content-text mt-2'>All Categories</div>
        {loading === false ? (
          data ? (
            data.map((item, index) => (
              <CategoryCard key={item.id} title={item.name} img={item.image} />
            ))
          ) : (
            <h4>No categories available</h4>
          )
        ) :<Spinner animation="border" variant="primary"  /> 
    }
        
       
        </Row>
        </Container>
    )
}
export default CategoryContainer