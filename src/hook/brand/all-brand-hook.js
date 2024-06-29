import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllBrand, { getAllBrandPage } from '../../redux/actions/brandActionAction';


 const AllBrandPageHook = () => {
       // we have moved this from categoryContainer in order to deal with pagination easly since pagination and categoryContainer are here.
       const dispatch = useDispatch();
       //on the first load
       useEffect(() => {
         dispatch(getAllBrand(6));
       }, []);
     // to get state from redux
       const brand = useSelector((state) => state.allBrand.category);
       const loading = useSelector((state) => state.allBrand.loading);
   
       //to get page count
       let pageCount = 0;
       if(brand.paginationResult){
          pageCount = brand.paginationResult.numberOfPages
   
          //when press on pagination
         const getPage=(page)=>{
       dispatch(getAllBrandPage(page))
       console.log(page)
   }
   return [brand,loading,pageCount,getPage]

}}
export default AllBrandPageHook