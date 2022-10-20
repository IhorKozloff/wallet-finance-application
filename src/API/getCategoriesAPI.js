import axios from "axios";


export const getCategoriesAPI = async (queryParams) => {

    console.log('Это функция отправки запроса, вот что мне пришло', queryParams)
    const {token, month="all", year="all"} = queryParams;  

    try {
        const { data } = await axios.get(`https://eyeshield-wallet-server-app.herokuapp.com/transactions/categories?month=${month}&year=${year}`, { headers: { Authorization: `Bearer ${token}` } });
        return data.result;
    } catch (err) {
        console.log(err);
    }

}
//http://localhost:3001/
