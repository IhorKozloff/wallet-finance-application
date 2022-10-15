import axios from "axios";


export const getCategoriesAPI = async (token = '') => {


    try {
        const { data } = await axios.get("https://eyeshield-wallet-server-app.herokuapp.com/transactions/categories", { headers: { Authorization: `Bearer ${token}` } });
        return data.result;
    } catch (err) {
        console.log(err);
    }

}