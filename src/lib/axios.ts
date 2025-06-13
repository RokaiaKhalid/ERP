// src/lib/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com", // Change to your backend URL
  withCredentials: true,
});

export default instance;
