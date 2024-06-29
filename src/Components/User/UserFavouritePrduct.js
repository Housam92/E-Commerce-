import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../Products/ProductCard'
import PaginationComponent from '../Utility/Pagination'

export const UserFavouritePrduct = () => {
    return (
        <div>
 <div className='admin-content-text'>Favourit Products </div>
<Row className='justify-content-start'>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>

</Row>
<PaginationComponent/>
</div>
    )
}
