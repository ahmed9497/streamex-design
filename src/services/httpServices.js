import { message } from "antd";
import axios from "axios";

/*to check if same request in queue*/




/*Expired token not allowed in refresh token request*/


/* Setting request headers*/
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Content-Type"] = "application/json";
// // axios.defaults.headers.common["X-Forwarded-For"] = "119.160.103.211";
// axios.defaults.headers.common["token"] =
//   Date.now() + Math.random().toFixed(10).slice(2);

// axios.defaults.headers.common["authorization"] = "Bearer";
/*Attaching token in request if got from storage*/
const user = JSON.parse(localStorage.getItem('user'));
console.log("------",user)
axios.interceptors.request.use(
  (config) => {

    if(user?.token){
      // config.headers.common["x-access-token"] = user?.token ;
    }
    return config;
  //   let currentLang = localStorage.getItem("currentLang") || "fr";
  //   config.headers.common["lang"] = currentLang.slice(0, 2);
  //   const { sid, userMSISDN } = tokenStorage.getUserSession();
    
  //   if(config?.data){
     
  //       const RequestBody = config?.data ;
  //       const hashDigest = sha256(RequestBody + salt).toString();
  //       config.headers.common["requestAuth"] = hashDigest ;
       
  //   }
  //   if (config.headers.Authorization) {
  //     if (sid) {
  //       config.headers["token"] =
  //         Date.now() +
  //         Math.random().toFixed(10).slice(2) +
  //         "(" +
  //         utils.makeTokenMsisdn(userMSISDN) +
  //         ")";
      
  //     }
  //   } else {
  //     if (sid && sendToken) {
  //       config.headers["Authorization"] = btoa(sid);
  //       config.headers["token"] =
  //         Date.now() +
  //         Math.random().toFixed(10).slice(2) +
  //         "(" +
  //         utils.makeTokenMsisdn(userMSISDN) +
  //         ")";
  //     }
  //   }
  //   return config;
  // },
  // (error) => {
  //   /*Error Handling*/
  //   return Promise.reject(error);
   }
);

/*Intercepting the response in case of specif status codes*/
axios.interceptors.response.use(
  function (success) {
    let { data } = success;
 

    return Promise.resolve(data);
    // if (data.responseCode === "1401") {
    //   // cogoToast.error("Session Terminated will be logout");
    //   let getLastLang = localStorage.getItem("currentLang");
    //   localStorage.clear();
    //   localStorage.setItem("currentLang", getLastLang);
    //   // window.location.href = "/maroc";
    //   return Promise.reject(success);
    // } else return Promise.resolve(success);
  },
  function (error) {
    
    message.error(error?.response?.data?.message)
    // if (error.response && error.response.data && error.response.data.message) {
    //   /*Showing response from the server*/
    //   cogoToast.error(error.response.data.message, { position: "top-right" });
    // } else {
    //   /*Showing response from local*/
    //   // cogoToast.error(
    //   //   "Currently experiencing some trouble accessing the back-end services. Please try again in a short while.",
    //   //   { position: "top-right" }
    //   // );
    // }

    /*if all above process failes breaking the queue*/
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
