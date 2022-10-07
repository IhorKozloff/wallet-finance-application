import axios from "axios";

export const userRegisterAPI = async (userData) => {
    try {
        const registrationResponse = await axios.post("https://eyeshield-wallet-server-app.herokuapp.com/user/register", userData);
        console.log('Все норм, ниже ответ от сервера с успешной операцией')
        console.log(registrationResponse)
    }
    catch (error) {
        console.log('Ой-ей. Чет пошло не так...');
        console.log(error.message)
    }
}