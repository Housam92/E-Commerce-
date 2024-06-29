import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatures from '../../Components/Brands/BarndFeatured'
import ViewHomeProductHook from '../../hook/products/view-home-product-hook'

 const HomePage = () => {

    const [items]= ViewHomeProductHook()
    
    return (
        <div className='font' style={{minHeight:"630px"}}>
          
          <Slider/>
         <HomeCategory/>
         <CardProductContainer products={items} title="Best Seller" btntitle="More" pathText="/products"/>
         <DiscountSection/>
         <CardProductContainer products={items} title="New Season" btntitle="More" pathText="/products"/>
         <BrandFeatures title="Popular Brands" btntitle="More"/>
         
        </div>
    )
}

export default HomePage
