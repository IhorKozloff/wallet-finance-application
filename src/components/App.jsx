import { Routes, Route} from "react-router-dom"
import { Layout, HomePage, StatisticPage, ExchangeRatesPage, RegisterPage, LoginPage } from 'Pages';

import { useDispatch } from "react-redux";
import { fetchAllTransactions } from "redux/operations";

export const App = () => {

  const dispatch = useDispatch();
  dispatch(fetchAllTransactions());

  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="statistic" element={<StatisticPage/>}/>
        <Route path="exchange-rates" element={<ExchangeRatesPage/>}/>


      </Route>
      <Route path="register" element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      

    </Routes>
  );
};
