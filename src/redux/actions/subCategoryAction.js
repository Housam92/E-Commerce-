import useGetData from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { Create_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";


// create sub category with pagination
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await usePostData(`/api/v1/subcategories`, data);

    // Example: Extract only the data you need from the response
    const serializedData = {
      status: response.status,
      data: response.data,
      // Add more properties if needed
    };

    dispatch({
      type: Create_SUB_CATEGORY,
      payload: serializedData,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
    console.error('Error fetching categories:', e);
  }
};



// get sub category based on selected category
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}/subcategories`);

    // Example: Extract only the data you need from the response
    const serializedData = {
      status: response.status,
      data: response.data,
      // Add more properties if needed
    };

    dispatch({
      type: GET_SUB_CATEGORY,
      payload: serializedData,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
    console.error('Error fetching categories:', e);
  }
};

