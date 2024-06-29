import baseUrl from '../Api/baseURL'


const usePostDataWithImage = async (url, params) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
  
    try {
      const res = await baseUrl.post(url, params, config);
      console.log("Request successful");
      return res.data;
    } catch (error) {
      console.error("Error making API request:", error.message);
      throw error; // Rethrow the error to be handled by the calling code
    }
  };
  

const usePostData= async (url, parmas) => {
    const res = await baseUrl.post(url, parmas);
    return res;
}

export { usePostData, usePostDataWithImage };