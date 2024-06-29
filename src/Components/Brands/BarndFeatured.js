import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'
import SubTiltle from '../Utility/SubTitle'
import HomeBrandHook from '../../hook/brand/home-brand-hook'

 const BrandFeatures = ({btntitle,title}) => {
 const[brand,loading]= HomeBrandHook()
console.log(brand)
    return (
        <Container> 
        <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
        <Row className=' my-2 d-flex jusify-content-btween'>

    {
        loading === false ? (
          brand ? (
            brand.data.slice(0,6).map((item, index) => (
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
export default BrandFeatures