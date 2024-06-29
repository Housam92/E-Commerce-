import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../hook/products/view-product-details-hook';

 const ProductText = () => {

  const { id } = useParams();
  const [item,images,cat,brand] = ViewProductDetailsHook(id);
  if(cat.name)
console.log(cat.name)
    return (
        <div>
        <Row className="mt-2">
          <div className="cat-text">{cat.name}:</div>
        </Row>

        <Row>
          <Col md="8">
            <div className="cat-title d-inline">
              {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md="8" className="mt-4">
            <div className="cat-text d-inline">Brand : </div>
            <div className="barnd-text d-inline mx-1">{brand.name} </div>
          </Col>
        </Row>

        <Row>
          <Col md="8" className="mt-1 d-flex">

            {
              item.availableColors ? (item.availableColors.map((color,index)=>{return(
              <div
              key={index}
                className="color ms-2 border"
                style={{ backgroundColor: color }}></div>)})) :null
            }
            
            
          </Col>
        </Row>
  
        <Row className="mt-4">
          <div className="cat-text">Features :</div>
        </Row>

        <Row className="mt-2">
          <Col md="10">
            <div className="product-description d-inline">
                        {item.description}
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col md="12">
            <div className="product-price d-inline px-3 py-3 border">{item.price} USD</div>
            <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to Basket </div>
          </Col>
        </Row>
      </div>
    )
}
export default ProductText