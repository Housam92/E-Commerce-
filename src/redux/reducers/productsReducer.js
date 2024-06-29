import {CREATE_PRODUCT,DELETE_PRODUCT,GET_ALL_CATEGORY,GET_ALL_PRODUCT,GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, UPDATE_PRODUCT} from "../type"

const initial = {
    products:[],
    allproducts:[],
    oneProduct:[],
    productLike:[],
    deleteProduct:[],
    updateProduct:[],
    loading: true, // this means i am still loading the data from the api or server
}


const productsReducer = (state=initial, action)=>{

    switch(action.type) {
        case CREATE_PRODUCT:
            return{
                ...state,
                products:action.payload, // for the data that will be sent from the api
                loading:false, // this means the data has been finished loading 
            }
        case GET_ALL_PRODUCT:
                return{
                    ...state,
                    allproducts:action.payload, // for all products that will be sent from the api
                    loading:false, // this means the data has been finished loading 
                }

                case GET_PRODUCT_DETAILS:
                return{
                    
                    oneProduct:action.payload, // for  product like that will be sent from the api
                    loading:false, // this means the data has been finished loading 
                }

                case GET_PRODUCT_LIKE:
                    return{
                        ...state,
                        productLike:action.payload, // for all products that will be sent from the api
                        loading:false, // this means the data has been finished loading 
                    }

                    case DELETE_PRODUCT:
                    return{
                        ...state,
                        deleteProduct:action.payload, // for all products that will be sent from the api
                        loading:false, // this means the data has been finished loading 
                    }
       

            case UPDATE_PRODUCT:
                return{
                    ...state,
                    updateProduct:action.payload, // for all products that will be sent from the api
                    loading:false, // this means the data has been finished loading 
                }
                    case GET_ERROR:
                    return {
                    loading: true,
                    products:action.payload,
                    }
           
            default:
            return state;
    }

}

export default productsReducer