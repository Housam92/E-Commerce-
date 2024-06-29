import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTitle from '../Utility/SubTitle';
import CategoryCard from './../Category/CategoryCard';
import HomeCategoryHook from '../../hook/category/home-category-hook';

const HomeCategory = () => {

const [category,loading] = HomeCategoryHook();

  return (
    <Container>
      <SubTitle title="Categories" btntitle="more" pathText="/allcategory" />
      <Row className='my-2 d-flex justify-content-between'>
        
        {loading === false ? (
          category ? (
            category.data.slice(0,6).map((item, index) => (
              <CategoryCard key={item._id} title={item.name} img={item.image} />
            ))
          ) : (
            <h4>No categories available</h4>
          )
        ) :<Spinner animation="border" variant="primary"  /> 
    }
      </Row>
    </Container>
  );
};

export default HomeCategory;
