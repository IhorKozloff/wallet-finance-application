import axios from "axios";

export const userLogoutAPI = async (token = '') => {
   await axios.get("https://eyeshield-wallet-server-app.herokuapp.com/user/logout", { headers: { Authorization: `Bearer ${token}`} });
}