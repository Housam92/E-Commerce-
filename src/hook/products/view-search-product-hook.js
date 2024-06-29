import React, { useEffect } from 'react';  // Import useEffect from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllProductsPge, getAllProductsSearch } from '../../redux/actions/productsAction';

const ViewSearchProductHook = () => {
let limit = 10;
const dispatch = useDispatch();
const getProduct = async()=>{

    let word="",queryCat="",queryBrand="",priceTo="",priceFrom=""; 

    if(localStorage.getItem("searchWord") !=null)
    word = localStorage.getItem("searchWord")

    if(localStorage.getItem("catChecked") !=null)
    queryCat= localStorage.getItem("catChecked")

    if(localStorage.getItem("brandChecked") !=null)
    queryBrand= localStorage.getItem("brandChecked")

    if(localStorage.getItem("priceTo") !=null)
    priceTo=localStorage.getItem("priceTo")
    
    if(localStorage.getItem("priceFrom") !=null)
    priceFrom=localStorage.getItem("priceFrom")
    

// for sorting data by sort by click dropdown
    sortData()
let  pricefromString = ""
    if(priceFrom === ""|| priceFrom <=0)
    {
        pricefromString = ""  
    }else{
        pricefromString = `&price[gte]=${priceFrom}`
    }

    let  pricetoString = ""
    if(priceTo === ""|| priceTo <=0)
    {
        pricetoString = ""  
    }else{
        pricetoString = `&price[lte]=${priceTo}`
    }
 await  dispatch (getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}${pricefromString}${pricetoString}`))
}
useEffect(() => {
    getProduct()
}, [])

const allProducts = useSelector((state)=>state.allProducts.allproducts)


let items = [];
let pagination = [];
let results = 0;
try{
    if (allProducts.data)
        items = allProducts.data;
        
    else
        items = []
        
}catch(e){}
    try{   
        if (allProducts.paginationResult) {
            pagination = allProducts.paginationResult.numberOfPages;
        } else 
            pagination = [];
        }catch(e){}
        try{   
            if (allProducts.results) {
                results = allProducts.results;
            } else 
                results = 0;
            }catch(e){}

            // when click pagination
            const onPress = async (page)=>{ 

    let word="",queryCat="",queryBrand="" ,priceTo="",priceFrom=""; 

    if(localStorage.getItem("searchWord") !=null)
    word = localStorage.getItem("searchWord")

    if(localStorage.getItem("catChecked") !=null)
    queryCat= localStorage.getItem("catChecked")

    if(localStorage.getItem("brandChecked") !=null)
    queryBrand= localStorage.getItem("brandChecked")


    if(localStorage.getItem("priceTo") !=null)
    priceTo=localStorage.getItem("priceTo")
    
    if(localStorage.getItem("priceFrom") !=null)
    priceFrom=localStorage.getItem("priceFrom")
    

    let  pricefromString = ""
    if(priceFrom === ""|| priceFrom <=0)
    {
        pricefromString = ""  
    }else{
        pricefromString = `&price[gte]=${priceFrom}`
    }

    let  pricetoString = ""
    if(priceTo === ""|| priceTo <=0)
    {
        pricetoString = ""  
    }else{
        pricetoString = `&price[lte]=${priceTo}`
    }

    await dispatch(getAllProductsSearch(`limit=${limit}&page=${page}keyword=${word}&${queryCat}&${queryBrand}${pricefromString}${pricetoString}`)) 
            }
            
let sortType="",sort

// when use choose sort type
    const sortData = ()=>{
        if (localStorage.getItem("sortType") !== null)
        {
        sortType= localStorage.getItem("sortType")
        }
        else{
            sortType=""
        }

        if (sortType==="Price - to +")
        sort = "+price"
          

    else if  (sortType ==="Price + to -")
    sort = "-price"
    else if  (sortType ==="Best Seller")
    sort = "-sold"
    else if  (sortType ==="Higher Rank")
    sort = "-quantity"
}
    
    return [items,pagination,onPress,getProduct,results]
}
export default ViewSearchProductHook