import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import AddBrandHook from '../../hook/brand/add-brand-hook';
 const AdminAddBrand = () => {
    
    const [img,name,loading,isPress,handelSubmit,onImageChange,onChaneName] = AddBrandHook();

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Brand  </div>
                <Col sm="8">
                    <div className="text-form pb-2"> Brand Image</div>      
                    <label htmlFor="upload-photo">
                        <img
                        src={img}
                         alt='fzx' 
                         height="100px" 
                         width="120px" 
                         style={{cursor:"pointer"}}></img>
                    </label>
                    
                    <input
                    type='file'
                    name='photo'
                    onChange={onImageChange}
                    id='upload-photo' />
                    
                    <input
                    onChange={onChaneName}
                    value = {name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Brand Name"
                        
                    />                         
                    
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 "> Save Edits</button>
                </Col>
            </Row>
            {
            isPress ? loading? <Spinner animation="border" variant="primary"/>: <h4>Finished</h4>:null
           
          }
        </div>
    )
}
export default AdminAddBrand