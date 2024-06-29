import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';

import { CompactPicker } from 'react-color'

import { ToastContainer } from 'react-toastify';
import AdminAddProductHook from '../../hook/products/add-products-hook';

const AdminAddNewProduct = () => {

const[onChangeProdName,onChangeDescName,onChangePriceBefore,onChangePriceAfter,onChangeQty,onChangeColor,showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, removeColor, onSelectBrand, priceBefore, handelChangeComplete, onSelectCategory, handelSubmit, quty, prodName,prodDescribion,colors]=AdminAddProductHook()


    return (
        
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Product</div>
                <Col sm="8">
                    <div className="text-form pb-2">Product Photos</div>
                    
<MultiImageInput
images={Object.values(images)}
setImages={(newImages) => setImages({ ...images, ...newImages })}
cropConfig={{ ruleOfThirds: true }}
theme={{ backgroundColor: "light", outlineColor: "gray" }}
max={"4"}
allowCrop={false}
/>

                    <input
                    onChange={onChangeProdName}
                        value={prodName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name "
                    />
                    <textarea
                    onChange={onChangeDescName}
                        value={prodDescribion}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product Describtion"
                    />
                    <input
                    onChange={onChangePriceAfter}
                        value={priceAfter}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price After Discount"
                    />
                    <input
                    onChange={onChangePriceBefore}
                        value={priceBefore}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price Before Discount "
                    />
                    <input
                    onChange={onChangeQty}
                        value={quty}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Available Quantity "
                    />
                    <select
                        name="cat"
                        onChange={onSelectCategory}
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">Main Category</option>
                        {
                            category.data?(category.data.map((item) => {
                                return(
                        <option key={item._id} value={item._id}>{item.name}</option>
                                )
                                })):null
                        }
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="Sub Category"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                    onChange={onSelectBrand}
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Choose a Brand</option>
                        {
                            brand.data?(brand.data.map((item) => {
                                return(
                        <option key={item.brand} value={item._id}>{item.name}</option>
                                )
                                })):null
                        }
                    </select>

                    <div className="text-form mt-3 ">Available colors</div>
                    <div className="mt-1 d-flex">
                        {
                        colors.length>=1?(
                            colors.map((co,index)=>{
                                return(<div onClick={()=>removeColor(co)}
                                    key={index}
                                    className="color ms-2 border  mt-1"
                                    style={{ backgroundColor:co }}></div>)
                            
                                })
                        ):null
                            
                        }
                        
                        
                        <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{cursor:"pointer"}} />

                        {
                            showColor=== true ? ( <CompactPicker onChangeComplete={handelChangeComplete}/>):null
                            

                        
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">Save Edits</button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default AdminAddNewProduct