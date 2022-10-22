import axios from "axios";

export const removeTransactionAPI = async (id, token = '') => {
    try {
        console.log(id)
        const res = await axios.delete(`https://eyeshield-wallet-server-app.herokuapp.com/transactions/remove/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
    }
    
}
//http://localhost:3001/ 