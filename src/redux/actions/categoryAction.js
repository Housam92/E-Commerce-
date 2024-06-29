import { Create_CATEGORY, GET_ALL_CATEGORY, GET_ONE_CATEGORY } from '../type';
import { GET_ERROR } from '../type';
import useGetData from '../../hooks/useGetData';
import { usePostData } from '../../hooks/usePostData';
// get all category
export const getAllCategory = (limit)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await useGetData (`/api/v1/categories?limit=${limit}`)

    dispatch( {
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch( {
        type: GET_ERROR,
        payload: "Error" + e,
      })
    console.error('Error fetching categories:', e);
  }
};
// get one category 
export const getOneCategory = (id)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await useGetData (`/api/v1/categories/${id}`)

    dispatch( {
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch( {
        type: GET_ERROR,
        payload: "Error" + e,
      })
    console.error('Error fetching categories:', e);
  }
};


// get all category with pagination 
export const getAllCategoryPage = (page)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await useGetData (`/api/v1/categories?limit=6&page=${page}`)

    dispatch( {
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch( {
        type: GET_ERROR,
        payload: "Error" + e,
      })
    console.error('Error fetching categories:', e);
  }
};



// create  category with pagination 
export const createCategory = (formData)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await usePostData (`/api/v1/categories`,formData)

    dispatch( {
      type: Create_CATEGORY,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch( {
        type: GET_ERROR,
        payload: "Error" + e,
      })
    console.error('Error fetching categories:', e);
  }
};
export default getAllCategory;
// important rule : anything in action shlould be as a higher order function to avoid issues