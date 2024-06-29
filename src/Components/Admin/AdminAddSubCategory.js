import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import Addsubcategoryhook from '../../hook/category/subCategory/add-sub-category-hook';


const AdminAddSubCategory = () => {
    const [id, name, loading, category, subcategory, handleChange,handelSubmit, onChangeName]=Addsubcategoryhook()

    return (
        <div>      
            
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Sub Category</div>
                <Col sm="8">
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="  Name of Sub Category"
                    />
                    <select name="category" id="cat" className="select mt-3 px-2" onChange={handleChange}>
                        <option  value="0">Choose Category</option>
                {
                    category.data?(category.data.map(item=>{
                    return(<option key={item._id} value={item._id}>{item.name}</option>)})):null
                }
                        
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 "> Save Edits</button>
                </Col>
            </Row>
        <ToastContainer/>
        </div>
    )
}
export default AdminAddSubCategory