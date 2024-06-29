import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import { Container, Row,Col } from 'react-bootstrap'
import SideFilter from '../../Components/Utility/SideFilter'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import PaginationComponent from '../../Components/Utility/Pagination'
import ViewSearchProductHook from '../../hook/products/view-search-product-hook'

 const ShopProductsPage = () => {
  const [items,pagination,onPress,getProduct,results] = ViewSearchProductHook()
  if(pagination)
  var pageCount = pagination;
  else
  pageCount = 0;

    return (
    <Container>
  <CategoryHeader /> 
    <SearchCountResult onClick={getProduct} title={`there is ${results} result`} />
  <Row className='d-flex flex-row'>
  <Col sm="2" xs="2" md="2" className='d-flex'>   
    <SideFilter />  
  </Col>
  <Col sm="10" xs="10" md="10" className='d-flex'>
    <CardProductContainer products={items} title="" /> 
  </Col>
</Row>
  <PaginationComponent pageCount={pageCount} onPress={onPress} />
  </Container>
    )
}
export default ShopProductsPage