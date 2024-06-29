import{combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subCategoryReducer from '../reducers/subCategoryReducer'
import productsReducer from './productsReducer'
import authReducer from './authReducer'

export default combineReducers ({
    allCategory: categoryReducer,
    allBrand:brandReducer,
    subCategory:subCategoryReducer,
    allProducts:productsReducer, 
    authReducer:authReducer
})

//combineReducers ( we merge all reducers with each others )