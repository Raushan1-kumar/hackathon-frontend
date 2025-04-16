import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://hackathon-backend-3-nfvq.onrender.com",
})

export default axiosInstance;