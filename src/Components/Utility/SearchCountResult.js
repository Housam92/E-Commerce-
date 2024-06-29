import React from 'react'
import UnopDropdown from "unop-react-dropdown"
import sort from '../../images/sort.png'
 const SearchCountResult = ({title,onClick}) => {
    const handler = ()=>{
    
    }
    const clickMe = (key)=>{
        localStorage.setItem("sortType",key)
        onClick()
            }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1 ">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            Sort by 
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div onClick={()=>clickMe("")} className="border-bottom card-filter-item">Without Sort</div>
                        <div onClick={()=>clickMe("Best Seller")} className="border-bottom card-filter-item">Best Seller</div>
                        <div onClick={()=>clickMe("Higher Rank")} className="border-bottom card-filter-item">Higher Rank</div>
                        <div onClick={()=>clickMe("Price - to +")} className="border-bottom card-filter-item">
                            Price - to +  
                        </div>
                        <div onClick={()=>clickMe("Price + to -")} className=" card-filter-item"> Price + to -  </div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}
export default SearchCountResult