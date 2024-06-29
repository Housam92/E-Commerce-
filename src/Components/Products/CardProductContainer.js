import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import SubTiltle from '../Utility/SubTitle'

 const CardProductContainer = ({btntitle,title,products}) => {
    return (
        <Container>
                {products ? (<SubTiltle title={title} btntitle={btntitle} pathText={"/products"} />) : null}
                <Row className='my-2 d-flex justify-content-between'>
                    {
                        products ? (
                            products.map((item, index) => <ProductCard key={index} item={item} />)
                        ) : null
                    }

                </Row>
            </Container>
    )
}
export default CardProductContainer

