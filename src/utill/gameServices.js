import axios from "axios";

export const gameQuestion = async () => {
    
    const promise = new Promise((resolve, reject) => {
        axios.get('https://marcconrad.com/uob/tomato/api.php')
            .then((res) => {
                return resolve(res.data)
            })
            .catch((err) => {
                return resolve(err)
            })
    })
    return await promise;

}