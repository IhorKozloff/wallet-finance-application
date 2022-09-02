import { Routes, Route} from "react-router-dom"
import { Layout, HomePage, StatisticPage, ExchangeRatesPage } from 'Pages';


export const App = () => {


  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="statistic" element={<StatisticPage/>}/>
        <Route path="exchange-rates" element={<ExchangeRatesPage/>}/>
      </Route>
    </Routes>
  );
};
