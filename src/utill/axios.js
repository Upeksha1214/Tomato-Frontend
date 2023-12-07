import axios from "axios";

const instance= axios.create({
    baseURL:'http://localhost:8080/tomato_game'
    
})

export default instance;