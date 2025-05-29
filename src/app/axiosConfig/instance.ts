// import axios, { type AxiosResponse , AxiosError} from "axios";
import axios from "axios";
// import { store } from "../store";
// import { setLoading } from "../slices/loader";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Update to match your backend
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'},
    // params: {
    //     limit: 4,
  // }
    withCredentials: true, // if you use cookies or auth

});
export default axiosInstance;




// Add a request interceptor
// axiosInstance.interceptors.request.use(function (config) {
//     console.log(config);
//     store.dispatch(setLoading(true));
//     //  dispatch loader true
//     // send tokens with routes
//     // config.url==="/products" && (config.params = { limit: 4 });
//     // if (config.url === "/products") { 
//     // }
//     return config;
// }, function (error) {
    
    
//     if (error.response.status === 401) { 
//         console.log("Unauthorized");
//     }
//     return Promise.reject(error);
//   });



// // Add a response interceptor
// axiosInstance.interceptors.response.use(function (response: AxiosResponse) {
//     store.dispatch(setLoading(false));

//     // dispatch loader false
//     return response;
//   }, function (error: AxiosError) {


//     return Promise.reject(error);
//   });

  