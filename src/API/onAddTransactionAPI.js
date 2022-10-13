import axios from "axios";

export const onAddTransactionAPI = async (data, token = '') => {
    try {
        const res = await axios.post("https://eyeshield-wallet-server-app.herokuapp.com/transactions/add", {...data}, { headers: { Authorization: `Bearer ${token}` } })
        console.log(res)
    } catch (err) {
        console.log(err)
    }
    
}