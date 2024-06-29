import {Create_SUB_CATEGORY,GET_ERROR, GET_SUB_CATEGORY} from "../type"

const initial = {
    subCategory:[],
    loading: true, // this means i am still loading the data from the api or server
}


const subCategoryReducer = (state=initial, action)=>{

    switch(action.type) {
       
            case Create_SUB_CATEGORY:
                return{
                    ...state,
                    subCategory:action.payload,
                    loading:false
                }
            case GET_SUB_CATEGORY:
                    return{
                        ...state,
                        subCategory:action.payload,
                        loading:false
                    }  
        case GET_ERROR:
            return {
                loading: true,
                subCategory:action.payload,
            }
            default:
            return state;
    }

}

export default subCategoryReducer