import axios from "axios";

export const API=axios.create({
    baseURL:'http://localhost:8080/',
    //baseURL: 'http://192.168.0.222:8080'
    //baseURL: 'http://167.157.60.105:5432'
} )


// export const API_REST ={
//     url:'http://192.168.0.222:8080'
// }
