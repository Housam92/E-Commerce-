import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideBarSearchHook from '../../hook/search/sideBar-search-hook'

 const SideFilter = () => {
  const[category,brand,clickCategory,clickBrand,priceFrom,priceTo] = SideBarSearchHook()
  let localFrom = localStorage.getItem("priceFrom")
  let localTo = localStorage.getItem("priceTo")

    return (
        <Container className='ml-4'>
             <div className="mt-3 ">
        <Row>
          <div className="d-flex flex-column mt-2">
          <p className="filter-title my-3">Category</p>
            <div className="d-flex mt-3">
              <input className='mx-2' onChange={clickCategory} type="checkbox" value="0" />
              <div className="filter-sub me-2">All</div>
            </div>

          {

            category?(category.map((item,index)=>{
              return(
                <div key={index} className="d-flex mt-3 ">
                <input className='mx-2' onChange={clickCategory} type="checkbox" value={item._id} />
          <div className="filter-sub me-2">{item.name}</div>
            </div>
              )
            })): <h6>No Data</h6>

          }

          </div>
  

          <div className="d-flex flex-column mt-2">
          <p className="filter-title  my-3">Brand</p>
            <div className="d-flex mt-3">

              <input className='mx-2' onChange={clickBrand} type="checkbox" value="0" />
              <div className="filter-sub me-2">All</div>

            </div>
            
          </div>
  
          {

    brand?(brand.map((item,index)=>{
      return(
       <div key={index} className="d-flex mt-3">
        <input className='mx-2' onChange={clickBrand} type="checkbox" value={item._id} />
        <div className="filter-sub me-2">{item.name}</div>
       </div>
  )
         })): <h6>No Data</h6>

}

          <p className="filter-title my-3">Price</p>
          <div className="d-flex">
            <p className="filter-sub my-2">From:</p>
            <input
              className="m-2 text-center"
              type="number"
              value={localFrom}
              onChange={priceFrom}
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
          <p className="filter-sub my-2">To:&nbsp;&nbsp;&nbsp;&nbsp;
  <input
    className="m-2 text-center"
    type="number"
    value={localTo}
    onChange={priceTo}
    style={{ width: "50px", height: "25px" }}
  />
</p>
          </div>
        </Row>
      </div>
      </Container>
    )
}
export default SideFilter