import useDeleteData from "../../hooks/useDeleteData";
import useGetData from "../../hooks/useGetData";
import {  usePostDataWithImage } from "../../hooks/usePostData";
import { useUpdatetDataWithImage } from "../../hooks/useUpdateData";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, UPDATE_PRODUCT } from "../type";

// create Product with pagination
export const createProduct = (formatData) => async (dispatch) => {
try {
    const response = await usePostDataWithImage("/api/v1/products", formatData);

    dispatch({
        type: CREATE_PRODUCT,
        payload: response,
        loading: true
    })

} catch (e) {
    dispatch({
        type: GET_ERROR,
        payload: "Error  " + e,
    })
}
}
// Get all Product with pagination
export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?imit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading: true
        })
    
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e,
        })
    }
    }

// Get all Product with pagination with page number
export const getAllProductsPge = (page,limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading: true
        })
    
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e,
        })
    }
    }

// Get all Product with Query String
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading: true
        })
    
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e,
        })
    }
    }

    // Get one Product with id
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_PRODUCT_DETAILS,
            payload: response,
            loading: true
        })
    

        
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error  " + e,
        })
    }
    }

        // Get  Product like with id
export const getProductLike = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: response,
            loading: true
        })
    
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error  " + e,
        })
    }}

// Delete product with Id
    export const deleteProduct = (id) => async (dispatch) => {
        try {
            const response = await useDeleteData(`/api/v1/products/${id}`);
            dispatch({
                type: DELETE_PRODUCT,
                payload: response,
                loading: true
            })
        
        } catch (e) {
            dispatch({
                type: GET_ERROR,
                payload: "Error  " + e,
            })
        }}

        // update product with Id
    export const updateProduct = (id,data) => async (dispatch) => {
        try {
            const response = await useUpdatetDataWithImage(`/api/v1/products/${id}`,data);
            dispatch({
                type: UPDATE_PRODUCT,
                payload: response,
                loading: true
            })
        
        } catch (e) {
            dispatch({
                type: GET_ERROR,
                payload: "Error  " + e,
            })
        }}