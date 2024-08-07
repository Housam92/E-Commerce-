import { Create_NEW_USER } from "../type";

const inital = {
    createUser:[],
    loading:[true]
}

const authReducer = (state = inital,action)=>{
    switch (action.type){
        case Create_NEW_USER:
            return{
                ...state,
                createUser:action.payload,
                loading:false
            }
            default:
                return state
    }
}

export default authReducer