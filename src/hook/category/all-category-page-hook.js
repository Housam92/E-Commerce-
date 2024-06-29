import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllCategory, { getAllCategoryPage } from '../../redux/actions/categoryAction';

 const AllCategoryPageHook = () => {
       // we have moved this from categoryContainer in order to deal with pagination easly since pagination and categoryContainer are here.
       const dispatch = useDispatch();
       //on the first load
       useEffect(() => {
         dispatch(getAllCategory(6));
       }, []);
     // to get state from redux
       const category = useSelector((state) => state.allCategory.category);
       const loading = useSelector((state) => state.allCategory.loading);
   
       //to get page count
       let pageCount = 0;
       if(category.paginationResult){
          pageCount = category.paginationResult.numberOfPages
   
          //when press on pagination
         const getPage=(page)=>{
       dispatch(getAllCategoryPage(page))
       console.log(page)
   }
   return [category,loading,pageCount,getPage]

}}
export default AllCategoryPageHook