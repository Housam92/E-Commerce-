import { usePostData } from "../../hooks/usePostData";
import { Create_NEW_USER, GET_ERROR } from "../type";



// CREAYE NEW USER
export const createNewUSER = (formData)=> async (dispatch) => { // we make it higher order function 
    try {
  const response = await usePostData (`api/v1/auth/signup`,formData)
  
      dispatch( {
        type: Create_NEW_USER,
        payload: response,
        loading: true
      });
    } catch (e) {
      dispatch( {
          type: Create_NEW_USER,
          payload: e.response,
        })
      console.error('Error fetching categories:', e);
    }
  };