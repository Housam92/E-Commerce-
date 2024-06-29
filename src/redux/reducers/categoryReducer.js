import {Create_CATEGORY, GET_ALL_CATEGORY,GET_ERROR, GET_ONE_CATEGORY} from "../type"

const initial = {
    category:[],
    oneCategory:[],
    loading: true, // this means i am still loading the data from the api or server
}


const categoryReducer = (state=initial, action)=>{

    switch(action.type) {
        case GET_ALL_CATEGORY:
            return{
                ...state,
                category:action.payload, // for the data that will be sent from the api
                loading:false, // this means the data has been finished loading 
            }
            case GET_ONE_CATEGORY:
            return{
                ...state,
                oneCategory:action.payload, // for the data that will be sent from the api
                loading:false, // this means the data has been finished loading 
            }
            case Create_CATEGORY:
                return{
                    category:action.payload,
                    loading:false
                }
        case GET_ERROR:
            return {
                loading: true,
                category:action.payload,
            }
            default:
            return state;
    }

}

export default categoryReducer