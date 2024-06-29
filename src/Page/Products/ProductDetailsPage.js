import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from './ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../hook/products/view-product-details-hook'


 const ProductDetailsPage = () => {
    const { id } = useParams();
    const[item, images,cat,brand,prod]=ViewProductDetailsHook(id)
    if(prod)
    var items = prod.slice(0,4)
    return (
        <div style={{minHeight:"670px"}}>
            <CategoryHeader/>
            <Container>
            <ProductDetails/> 
            <RateContainer/>
            <CardProductContainer products={items} title="Products you may like"/>
            </Container>          
        </div>
    )
}
export default ProductDetailsPage