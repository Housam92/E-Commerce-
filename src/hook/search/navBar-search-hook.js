import React from 'react'
import { useState } from 'react'
import ViewSearchProductHook from '../products/view-search-product-hook'
import { useEffect } from 'react'
 const NavBarSearchHook = () => {

const[items,pagination,onPress,getProduct]=ViewSearchProductHook()

 const [searchWord,setSearchWord]=useState("") 
 
// when the user type any word
 const onChangeSearch = (e)=>{
    localStorage.setItem("searchWord",e.target.value)
    setSearchWord(e.target.value) 
    
    const path = window.location.pathname

    if (path != "/products")
    {
      window.location.href = "/products"
    }
      
 }

 useEffect(() => {
    setTimeout(() => {
    
        getProduct()
    }, 1000);
    
 }, [searchWord])
 return [onChangeSearch,searchWord]
}
export default  NavBarSearchHook