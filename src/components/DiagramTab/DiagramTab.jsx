import { DiagramTabWrapper } from "./DiagramTab.styled"
import { Table } from 'components';
import { useSelector } from "react-redux";
import { colorizedCategory } from "helpers";
import { useState, useEffect } from "react";

export const DiagramTab = () => {
    const [dataToProps, setDataToProps] = useState({
        tableCategories: [],
        tableExpenseSum: 0,
        tableIncomeSum: 0
    });
    const data = useSelector(state => state.allTransactionsStoreData.categories)


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
        return incomeData.reduce((total, item) => total += item.total,0);
    }
    
    useEffect(() => {
        if(data.length === 0) {
            return
        }
        setDataToProps({
            tableCategories: propCategoriesCreator(data),
            tableExpenseSum: propExpenseSumCreator(data),
            tableIncomeSum: 0
        })
        

    },[data, data.length])
    

    return (
        <DiagramTabWrapper>
            <Table dataToProps={dataToProps}/>
        </DiagramTabWrapper>
    ) 
}