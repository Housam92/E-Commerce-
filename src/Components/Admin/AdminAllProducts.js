import React from 'react';
import AdminAllProductsCard from './AdminAllProductsCard';
import { Row } from 'react-bootstrap';

const AdminAllProducts = ({ products }) => {
   

    return (
        <div>
            <div className='admin-content-text'>All Products Management</div>
            <Row className='justify-content-start'>
            { 
            products ? (
        products.map((item, index) => <AdminAllProductsCard key={index} item={item}/>)
    ) : 
        <h4>No Products Available</h4>
        
}
            </Row>
        </div>
    );
};

export default AdminAllProducts;
