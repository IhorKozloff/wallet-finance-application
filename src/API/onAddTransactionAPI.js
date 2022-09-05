import axios from "axios";

export const onAddTransactionAPI = async (data) => {
    try {
        const res = await axios.post("https://eyeshield-wallet-server-app.herokuapp.com/transactions/add", {...data})
        console.log(res)
    } catch (err) {
        console.log(err)
    }
    
}