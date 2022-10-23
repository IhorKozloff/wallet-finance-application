import { DiagramTabWrapper, DoughnutPlug, StatisticContentWrapper } from "./DiagramTab.styled"
import { Table, CustomSelect, DoughnutChart, FullScreenLoader } from 'components';
import { useSelector, useDispatch } from "react-redux";
import { colorizedCategory, sumConverter } from "helpers";
import { useState, useEffect } from "react";
import { monthDataSet, yearDataSet } from "assets/monthAndYear";
import { fetchCategories } from "redux/transactionsOperations";


export const DiagramTab = () => {

    const initialDataToProps = {
        tableCategories: [],
        tableExpenseSum: 0,
        tableIncomeSum: 0
    };

    const dispatch = useDispatch();

    const [monthValue, setMonthValue] = useState('all');
    const [yearValue, setYearValue] = useState('all');
    const [dataToProps, setDataToProps] = useState(initialDataToProps);

    const { expenseData , incomeData } = useSelector(state => state.allTransactionsStoreData.categories);
    const { isLoading } = useSelector(state => state.allTransactionsStoreData);
    const {token} = useSelector(state => state.userStatus.user);

    useEffect(() => {
        if (monthValue === 'all' && yearValue === 'all') {
            return
        }

        const queryParams = {
            month: monthValue,
            year: yearValue,
            token: token
        }
        dispatch(fetchCategories(queryParams));
        
        
    },[dispatch, monthValue, token, yearValue])
    
   


   

    const propCategoriesCreator = (incomeData) => {
   
        const tableCategories = incomeData.map(item => {
            const {_id, total} = {...item};
            
            const newItem = {
                categoryColor: colorizedCategory(_id),
                categoryName: _id,
                categorySum: total
            }
           
            return newItem
        })

        return tableCategories
    }

    const propExpenseSumCreator = (incomeData) => {
        const totalSum = incomeData.reduce((total, item) => total += item.total,0);
        return sumConverter(totalSum);
    }
    const propIncomeSumCreator = (incomeData) => { 
        return sumConverter(incomeData.total);
    }
    
    useEffect(() => {

        if(expenseData.length === 0) {
            setDataToProps({
                tableCategories: [],
                tableExpenseSum: 0,
                tableIncomeSum: 0
            });
            return;
        }

        setDataToProps({
            tableCategories: propCategoriesCreator(expenseData),
            tableExpenseSum: propExpenseSumCreator(expenseData),
            tableIncomeSum: propIncomeSumCreator(incomeData)
        });
        
    },[expenseData, incomeData])


        
    const onMonthSelectChange = (data) => {
        setMonthValue(data)
    }
    const onYearSelectChange = (data) => {
        setYearValue(data)
    }

    return (
        <DiagramTabWrapper>
            {dataToProps.tableExpenseSum !== 0 && <DoughnutChart data={dataToProps}/>}
            {dataToProps.tableExpenseSum === 0 && <DoughnutPlug/>}
            {isLoading === true && <FullScreenLoader/>}

            <StatisticContentWrapper>
                <CustomSelect items={yearDataSet} changeValue={onYearSelectChange}/>
                <CustomSelect items={monthDataSet} changeValue={onMonthSelectChange}/>
                <Table dataToProps={dataToProps}/>
            </StatisticContentWrapper>
            

        </DiagramTabWrapper>
    ) 
}