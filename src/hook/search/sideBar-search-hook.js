import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllCategory from '../../redux/actions/categoryAction';
import getAllBrand from '../../redux/actions/brandAction';
import { useState } from 'react';
import ViewSearchProductHook from '../products/view-search-product-hook';

 const SideBarSearchHook = () => {
    const[items,pagination,onPress,getProduct,results]=ViewSearchProductHook()
    
    const dispatch = useDispatch();
   
    //on the first load
    useEffect(() => {
        const get = async ()=>{
          await  dispatch(getAllCategory());
          await dispatch(getAllBrand());
        }
      get()
    }, []);
    
    const allCat = useSelector((state) => state.allCategory.category);
    const allBrand = useSelector((state) => state.allBrand.brand);

    //to get category
    let category = [];
    if(allCat.data){
       category = allCat.data}

       //to get brand
    let brand = [];
    if(allBrand.data){
      brand = allBrand.data
    }

    var queryCat = "", queryBrand = "";
    const [catChecked, setCatChecked] = useState([])
    //when user press any category
    const clickCategory = (e) => {
        let value = e.target.value
        if (value === "0") {
            setCatChecked([])
        }
        else {
            if (e.target.checked === true) {
                setCatChecked([...catChecked, value])
            } else if (e.target.checked === false) {
                const newArry = catChecked.filter((e) => e !== value)
                setCatChecked(newArry)
            }
        }

    }
    useEffect(() => {
        queryCat = catChecked.map(val => "category[in][]=" + val).join("&")
        localStorage.setItem("catChecked", queryCat)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [catChecked])


    const [brandChecked, setBrandChecked] = useState([])
    //when user press any category
    const clickBrand = (e) => {
        let value = e.target.value
        if (value === "0") {
            setBrandChecked([])
        }
        else {
            if (e.target.checked === true) {
                setBrandChecked([...brandChecked, value])
            } else if (e.target.checked === false) {
                const newArry = brandChecked.filter((e) => e !== value)
                setBrandChecked(newArry)
            }
        }
    }

    useEffect(() => {
        queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&")
        localStorage.setItem("brandChecked", queryBrand)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [brandChecked])

    const [From, setPriceFrom] = useState(0)
    const [To, setPriceTo] = useState(0)

const priceFrom = (e)=>{
    localStorage.setItem("priceFrom",e.target.value)
    setPriceFrom(e.target.value)
 
}
const priceTo = (e)=>{
    localStorage.setItem("priceTo",e.target.value)
    setPriceTo(e.target.value)
}

useEffect(() => {
setTimeout(() => {

        getProduct()

}, 1000);
}, [From,To])
    return[category,brand,clickCategory,clickBrand,priceFrom,priceTo]
}
export default SideBarSearchHook