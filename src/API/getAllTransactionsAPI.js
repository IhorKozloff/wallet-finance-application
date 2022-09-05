import axios from "axios";

export const getAllTransactionsAPI = async () => {

    try {
        const allTransactions = await axios.get("https://eyeshield-wallet-server-app.herokuapp.com/transactions/all");
        console.log(allTransactions);
        return allTransactions.data;
    } catch (err) {
        console.log(err);
    }

}