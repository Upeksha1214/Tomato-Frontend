import axios from "axios";
import { url } from "./axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SignUpService=(data) =>{
  
  useEffect(()=>{
      test();
  },[]) 

  const test = async(e)=>{
    try {
      const response = await axios.post(`${url}/login`, {
        signUp: {
          username: data.username,
          name: data.name,
          password: data.password,
        },
      });
  
      if (response.status === 200) {
        toast.success("Success!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: "fa fa-check",
          title: "Success",
          className: "toast-success",
        });
  
        console.debug(response.data);
        // Do something with the response data if needed
      } else {
        toast.error("Error!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: "fa fa-times",
          title: "Error",
          className: "toast-error",
        });
        throw new Error("Something went wrong on API server!");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "fa fa-exclamation-triangle",
        title: "Error",
        className: "toast-warning",
      });
      console.error(error);
    }
  }
}


export default SignUpService;


