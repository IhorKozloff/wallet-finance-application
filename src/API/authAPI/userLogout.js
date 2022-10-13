import axios from "axios";

export const userLogoutAPI = async (token = '') => {
    try {
        const result = await axios.get("https://eyeshield-wallet-server-app.herokuapp.com/user/logout", { headers: { Authorization: `Bearer ${token}`} });
        return result
    }
    catch (error) {
        console.log('Ой-ей. В логауте чет пошло не так...');
        console.log(error.message)
    }
}