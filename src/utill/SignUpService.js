import axios from "./axios";
import { toast } from "react-toastify";

const SignUpService = async (data) => {
  try {
    const response = await axios.post('/api/user/save', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data) {
      // Check the response data or status based on your API
      toast.success("Registration successful!");
      console.debug(response.data);
    } else {
      toast.error("Registration failed!");
      // You can handle more specific error cases here if needed
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
    console.error(error);
    // You might not need to rethrow the error unless you want to handle it at a higher level
  }
}

export default SignUpService;

