import axios from "axios";

const API_URL = 'https://budget-data.onrender.com/'

const axiosApi = axios.create({
  baseURL: API_URL
})

export default axiosApi