import React, { useEffect } from 'react';  // Import useEffect from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productsAction';

const ViewHomeProductHook = () => {

const dispatch = useDispatch();

useEffect(() => {
dispatch (getAllProducts())
}, [])

const allProducts = useSelector((state)=>state.allProducts.allproducts)

let items = allProducts?.data?.slice(0, 4) || [];

  
        
    return [items]
}
export default ViewHomeProductHook