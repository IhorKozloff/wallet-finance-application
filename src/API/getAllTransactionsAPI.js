import axios from "axios";

export const getAllTransactionsAPI = async () => {

    try {
        const allTransactions = await axios.get("https://eyeshield-wallet-server-app.herokuapp.com/transactions/all");
        console.log(allTransactions.data.data.result);
        return allTransactions.data.data.result;
    } catch (err) {
        console.log(err);
    }

}