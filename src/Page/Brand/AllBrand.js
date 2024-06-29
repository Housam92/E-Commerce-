import React from 'react'
import PaginationComponent from '../../Components/Utility/Pagination'
import BrandContainer from '../../Components/Brands/BrandContainer'
import HomeBrandHook from '../../hook/brand/home-brand-hook'


const AllBrand = () => {
  const[brand,loading,pageCount,getPage,]= HomeBrandHook()

    return (
        <div style={{minHeight:'670px'}}>
          <BrandContainer data={brand.data} loading={loading}/>
        <PaginationComponent pageCount={pageCount} onPress={getPage} />

        </div>
    )
}

export default AllBrand