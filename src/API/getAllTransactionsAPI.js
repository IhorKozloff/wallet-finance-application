import axios from "axios";


export const getAllTransactionsAPI = async (token = '') => {


    try {
        const { data } = await axios.get("https://eyeshield-wallet-server-app.herokuapp.com/transactions/all", { headers: { Authorization: `Bearer ${token}` } });
        console.log(data.result)
        return data.result;
    } catch (err) {
        console.log(err);
    }

}