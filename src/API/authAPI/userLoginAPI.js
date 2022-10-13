import axios from "axios";

export const userLoginAPI = async (userData) => {
    const response  = await axios.post("https://eyeshield-wallet-server-app.herokuapp.com/user/login", userData);
    return response;
}