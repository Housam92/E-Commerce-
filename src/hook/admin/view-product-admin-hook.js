import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllProductsPge } from '../../redux/actions/productsAction';

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  
  const onPress = async (page)=>{ 
    await dispatch(getAllProductsPge(page,10)) 
  }
  let items = [];
  let pagination = []
  const allProducts = useSelector((state) => state.allProducts.allproducts);
 ;
try{
  if (allProducts.data) {
    items = allProducts.data;
  } else {
    items = [];
  }

  if (allProducts.paginationResult) {
    pagination = allProducts.paginationResult.numberOfPages;
  } else {
    pagination = [];
  }

} catch(e){}

  return [items, pagination,onPress];
};

export default ViewProductAdminHook;
