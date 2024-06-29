import {Create_BRAND, GET_ALL_BRAND,GET_ERROR, GET_ONE_BRAND} from "../type"

const initial = {
    brand:[],
    oneBrand:[],
    loading: true, // this means i am still loading the data from the api or server
}


const brandReducer = (state=initial, action)=>{

    switch(action.type) {
        case GET_ALL_BRAND:
            return{
                ...state,
                brand:action.payload, // for the data that will be sent from the api
                loading:false, // this means the data has been finished loading 
            }
// to get one brand
            case GET_ONE_BRAND:
            return{
                ...state,
                oneBrand:action.payload, // for the data that will be sent from the api
                loading:false, // this means the data has been finished loading 
            }
            case Create_BRAND:
                return{
                    brand:action.payload,
                    loading:false
                }
        case GET_ERROR:
            return {
                loading: true,
                brand:action.payload,
            }
            default:
            return state;
    }

}

export default brandReducer