import axios from "axios";
console.log("BASE URL:", process.env.NEXT_PUBLIC_BE_API_URL);
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_API_URL!,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
