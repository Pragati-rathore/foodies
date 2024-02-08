import axios from "axios";

const baseURL = 'https://fakestoreapi.com'

const instance = axios.create({
  baseURL,
  headers: {
    // 'Content-Type': 'application/json',
  },
});

const Api = {
  get: async (url, params) => {
    try {
      const response = await instance.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (url, data, params) => {
    try {
      const response = await instance.post(url, data, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  put: async (url, data, params) => {
    try {
      const response = await instance.put(url, data, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (url, params) => {
    try {
      const response = await instance.delete(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};


export default Api;