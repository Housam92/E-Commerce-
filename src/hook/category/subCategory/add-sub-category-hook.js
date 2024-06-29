import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllCategory from '../../../redux/actions/categoryAction';
import { useState } from 'react';
import notify from '../../useNotification';
import { createSubCategory } from '../../../redux/actions/subCategoryAction';

 const Addsubcategoryhook = () => {

    const dispatch = useDispatch();
    // for internet connection
    useEffect(() => {
        if (!navigator.onLine )
        {
           notify('Internet Connection error','warn')
           return;
        }

    dispatch(getAllCategory());
    }, []);
    

    const[id,setID]=useState("0")
    const[name,setName]=useState("")
    const[loading,setLoading]= useState(true)

   //get last category state from redux
    const category = useSelector((state) => state.allCategory.category);
   
console.log(category)
    //get last sub category state from redux
    const subcategory = useSelector((state) => state.subCategory.subcategory);
    console.log(subcategory)
    
// on change drop down meneu
   const handleChange=(e)=>{
   
        setID(e.target.value)
   }
// to save the name 
   const onChangeName = (e)=>{
    e.persist()
    setName(e.target.value)
   }
   // on save data
   const handelSubmit = async(e)=>{

     e.preventDefault();
     if (!navigator.onLine )
     {
        notify('Internet Connection error','warn')
        return;
     }
     if (id === "0" )
     {
        
      notify('Please Select Main Category','warn')
      return;
     }

     if (name === "" )
     {
        
      notify('Please insert Category Name','warn')
      return;
     }

     setLoading(true)
     await dispatch(createSubCategory({
        name, // from postman we see the format of the data in create section ..
        category:id
     }))
     setLoading(false)
     
   }


   useEffect(() => {
    if (loading === false) {
        notify("new subcategory has been added","success")
        setName("");
        setID("0");
        
    }
}, [loading]);

return[id,name,loading, category, subcategory,handleChange,handelSubmit,onChangeName]
}
export default Addsubcategoryhook