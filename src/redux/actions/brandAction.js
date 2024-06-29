import { Create_BRAND, GET_ALL_BRAND, GET_ONE_BRAND } from '../type';
import { GET_ERROR } from '../type';
import useGetData from '../../hooks/useGetData';
import { usePostData } from '../../hooks/usePostData';

// get all brands :

export const getAllBrand = (limit)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await useGetData (`/api/v1/brands?limit=6${limit}`)

    dispatch( {
      type: GET_ALL_BRAND,
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
// to get one Brand:

export const getOneBrand = (id)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await useGetData (`api/v1/brands/${id}`)

    dispatch( {
      type: GET_ONE_BRAND,
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

// get all brand with pagination 
export const getAllBrandPage = (page)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await useGetData (`/api/v1/brands?limit=6&page=${page}`)

    dispatch( {
      type: GET_ALL_BRAND,
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



// creat  brands with pagination 
export const createBrand = (formData)=> async (dispatch) => { // we make it higher order function 
  try {
const response = await usePostData (`/api/v1/brands`,formData)

    dispatch( {
      type: Create_BRAND,
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
export default getAllBrand;
// important rule : anything in action shlould be as a higher order function to avoid issues